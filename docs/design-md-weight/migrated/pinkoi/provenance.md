# Pinkoi provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/pinkoi/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | pinkoi |
| name | Pinkoi |
| country | TW |
| category | consumer-tech |
| homepage | `https://www.pinkoi.com` |
| primary_color | `#ff595a` |
| logo.type | github |
| logo.slug | pinkoi |
| omd format (source) | 0.1 |
| verified | 2026-05-15 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

Token note from source: primary = §2 Mid Teal `#10567b` (`--primary`/`--login` base); purchase-exclusive CTA = coral `#f16c5d`.

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. Catalog identity `primary_color` `#ff595a` is dual: identity here, and keep-beside records in `DESIGN.md` Scope / Semantic color / Coral Tint keep-apart — it is not `tokens.colors.primary` `#10567b` and not coral `#f16c5d`. It is not in Named gaps. `logo.type` / `logo.slug` are dual: identity here, and a portable Assets pointer in `DESIGN.md` §3. `tokens.source` `prose-derived` is dual: this table and the portable Scope sentence. `components_harvested: true` is ledger metadata.

No `ds.*` record is in the source YAML. The portable B2a close uses the toss-form `not Pinkoi-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석: no first-party published UI specification is named).

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-05-15 |
| tokens.extracted | 2026-06-09 |
| footer Verified | 2026-05-08 (omd:migrate run 44 — Apple-tier) |
| philosophy-layer WebFetch | 2026-04-20 |
| Playwright CSS re-verify | 2026-04-17 |

The source footer records **Verified:** 2026-05-08 (omd:migrate run 44 — Apple-tier). YAML `verified` is 2026-05-15. Both producer dates stay in this ledger (A1c). They are not portable top matter.

Conflicts unresolved, as the source footer states: none. **Earlier addition:** split-radius search trailing + 100px country pills + Coral Tint active state + 3-fill discipline missed by prior pass.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product-surface | `https://www.pinkoi.com` | named in YAML homepage |
| en-home | product-surface | `https://en.pinkoi.com` | 2026-04 / footer 2026-05-08 |
| about | about | `https://en.pinkoi.com/about` | 2026-04-20 WebFetch |
| team | about/team | `https://en.pinkoi.com/about/team` | 2026-04-20 WebFetch |
| browse | product-surface `/browse` | Playwright heading-weight capture | philosophy layer / §3 |

YAML token claims resolve to the `prose-derived` set, with Playwright / production-CSS corroboration named in the source.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-named | product-surface | `https://www.pinkoi.com` | YAML homepage |
| en-home | product-surface | `https://en.pinkoi.com` | 2026-04 / 2026-05-08 |
| about | about | `https://en.pinkoi.com/about` | 2026-04-20 |
| team | about/team | `https://en.pinkoi.com/about/team` | 2026-04-20 |
| css-dist | production CSS | `cdn02.pinkoi.com/media/dist/` | 2026-04-17 Playwright re-verify |

### Tier 1

- en.pinkoi.com home + /about/team (live DOM via playwright — Search button `#10567b` Pinkoi Teal split-radius `0px 8px 8px 0px` (search-box trailing geometry) / 8×20 / 40px; Country pills 100px active `#fff8f7` Coral Tint / inactive `#eeeeef` Cool Gray / 14px·500; Outline Secondary `#fff` 4px / 40-52px / 14-16px·400-500; Charcoal text `#39393e` warm-cast)

### Tier 2

- styles.refero.design / getdesign.md — no record.
- Philosophy/founders/funding: Wikipedia (Pinkoi), Taiwan Panorama (Peter Yen Yahoo origin), LinkedIn (Peter Yen), TechCrunch (2015-09 $9M Sequoia India + GMO Venture Partners), Tracxn, en.pinkoi.com/about + /about/team, blog.google (Pinkoi case study), cherubic.com founder interview.

### Narrative (not interface tokens)

- https://en.pinkoi.com/about
- https://en.pinkoi.com/about/team
- https://cherubic.com/blog/founder-interview-pinkoi/
- https://www.taiwan-panorama.com/en/Articles/Details?Guid=3fb71a67-3e23-4723-8700-115a9afe9a71
- https://techcrunch.com/2015/09/30/pinkoi/

Style ref named by the source footer: `pinkoi` (self / TW Asian retained). That string is a producer comparison, not a token.

## Sibling handling (`web/references/pinkoi/.verification.md`)

The sibling path was checked directly. The file exists at `web/references/pinkoi/.verification.md` (Verified-against 2026-05-08). Tier 1 captures that the source DESIGN.md footer already records (split-radius search trailing, 100px country pills, Coral Tint `#fff8f7`, Outline Secondary 40-52px / 14-16px·400-500, charcoal warm-cast, 3-fill discipline) stay dual: this ledger's Surfaces / Proof and the portable Search / Country pills / Outline Secondary / Semantic color / Capture-record writings.

Sibling-only live-verified labels, and sibling-only structure classifications, are dispositioned in `migration-log.md` A5a as mentions. They are not used as portable facts in `DESIGN.md` (B1).

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary / primary-hover / primary-active / link / canvas / surface / surface-hover / border-light / border-mid / heading / text-secondary / muted / subtle / faint / disabled / ink / purchase / purchase-hover / purchase-active / error / error-hover / success / on-primary | prose-derived + CSS counts named in §2 |
| tokens.typography.family.sans / cjk | prose-derived (`Helvetica Neue` / `PingFang TC`) beside the five locale stacks |
| tokens.typography.section-heading / card-title / subhead / body / meta / badge / caption | prose-derived YAML sizes beside §3 ranges |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | prose-derived |
| tokens.rounded.sm / md / lg / full | prose-derived (`full: 9999`) |
| tokens.shadow.soft / edge / modal | prose-derived YAML strings beside §6 specific uses |
| tokens.components.button-primary / button-secondary / button-purchase / button-danger / button-success | prose-derived (`type: button`) |
| tokens.components.input | prose-derived (`type: input`) |
| tokens.components.product-card / card | prose-derived (`type: card`) |
| tokens.components.card-badge / discount-badge | prose-derived (`type: badge`) |

Prose-only hexes with no YAML `tokens.colors.*` path: `#c41428`, `#f86173`, `#289c8a`, `#bfbfc1`, `#c83166`, `#ff6299`, `#7ec527` / `#65a40e` / `#4d9200`, `#a32252`, `#8e9a9f`, `#535c5f`, `#fff8f7`, `#f0f0f0`, `hsla(240,2%,41%,.8)`. Catalog identity `#ff595a` has no `tokens.colors.*` path. Login, Plain, Compact input, Search (header), Country pills, Outline Secondary, Navigation header, and Tables have no YAML `tokens.components.*` path.

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 Personas — 4 fictional archetypes (name, age, city, motivation, and affiliation classification) | Deleted. No name, motivation, or affiliation classification is re-hosted here (D2, D2a). The source-named group wording Taiwan / Hong Kong / Japan cross-border design buyers survives in `DESIGN.md` Audience because the source calls it a publicly described Pinkoi user segment, not a fictional biography. |
| §9 Agent Prompt Guide — tool-facing construction prompts and iteration list | Deleted. No receiving slot. Unique geometry the prompts name (product-card image top 75% / title 14px weight 700 `#39393e` 2-line clamp / price 16px weight 700 / discount badge absolute top-left; Purchase padding `9px 14px`; nav white sticky / dropdown `0 0 4px rgba(32,32,38,.4)`; form helper 12px `#e63349` and `.s-required:after`) landed on Product Card, Purchase, Navigation header, and Input (A3). Color/radius/coral/error rules already in Experience/Foundations/Components. |
| Unsourced easing curves | Curve values omitted at the curve-value boundary. Duration tokens 0ms / 100ms / 200ms / 300ms / 250ms, the three easing *roles*, four signature motions including production `transition: border .1s, color .1s, background .1s`, spring stance, and reduced-motion stay in `DESIGN.md` Motion. B3 promotion gate is in `DESIGN.md` Motion. |
| YAML `omd`, `verified`, `tokens.source` / `extracted`, `components_harvested` | Kept in this ledger (A1c). `prose-derived` also has a portable Scope sentence. Producer strings `omd` / `verified` / `extracted` are not copied into portable top matter. |
| HTML comment philosophy layer / footer Tier lines | Ledger metadata here. About / team / cherubic / Taiwan Panorama / TechCrunch URLs stay in this file. Founder quotes and the 150-countries metrics writing are dual with `DESIGN.md` Scope. |

## Claim ledger

| claim | surface |
|---|---|
| tokens.colors.primary / primary-hover / primary-active | `--primary` / `--login` CSS |
| tokens.colors.link | core CSS (22x) |
| tokens.colors.canvas / surface / surface-hover / on-primary | page / card / button fills |
| tokens.colors.border-light / border-mid | dividers / component borders (32x mid) |
| tokens.colors.heading / text-secondary / muted / subtle / faint / disabled / ink | text scale (41x heading) |
| tokens.colors.purchase / purchase-hover / purchase-active | `--purchase` CSS-exclusive coral |
| tokens.colors.error / error-hover | `--danger` / validation (25x error) |
| tokens.colors.success | `--green` |
| tokens.typography.family.sans / cjk | locale stacks |
| tokens.typography.section-heading / card-title / subhead / body / meta / badge / caption | YAML sizes beside §3 ranges |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | prose-derived |
| tokens.rounded.sm / md / lg / full | prose-derived |
| tokens.shadow.soft / edge / modal | YAML strings beside §6 uses |
| tokens.components.button-primary / button-secondary / button-purchase / button-danger / button-success / input / product-card / card / card-badge / discount-badge | prose-derived + §4 |
| §11 Taipei in 2011 / Peter Yen (顏君庭) / Mike Lee (李讓) / Maibelle Lin (林怡君) / Yahoo Sunnyvale / NT$500,000 / 7-square-meter study / 2015 $9M Sequoia Capital India + GMO Venture Partners / English-site launch / 5 primary markets / 6.25M / 50,000+ / 77 countries / 95% / 150 countries comment writing / circular arcs + acute angles / closing chrome-stays-out-of-the-way sentence | narrative (about / team / cherubic / Taiwan Panorama / TechCrunch); dual with `DESIGN.md` Scope |

## Derived editorial inventory

Portable `DESIGN.md` carries 52 complete B2a qualifications. This table is 52 data rows. Preamble sentences on this page are not portable qualifications.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 `:9` | Homepage URL as this contract's named marketplace surface; YAML kept in `prose-derived`; catalog `#ff595a` beside `tokens.colors.primary` `#10567b` rather than as a second teal; coral `#f16c5d` on `--purchase` rather than as that catalog identity; unattached hex refused as a second primary |
| Experience Scope ¶2 `:11` | Busy multi-cultural canvas; density/legibility/conversion over minimalist whitespace; rejection of designer-chic pastel; design-as-localization rather than decoration; matched border as a crisp solid-block appearance |
| Experience Scope ¶3 `:13` | Classifying the §11 paragraph — including 2011 Taipei, three founder names, Yahoo Sunnyvale / San Francisco craft-fair origin, the thesis, three Peter Yen quotes, founder backgrounds, NT$500,000, 7-square-meter study, 2015 $9M Sequoia Capital India + GMO Venture Partners and English-site launch, five-market list, 6.25M / 50,000+ / 77 countries / 95% beside the comment's 150 countries writing, circular-arcs logo rationale, and the closing chrome-stays-out-of-the-way sentence — as narrative context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the three marketplace outcomes as primary tasks; refusing the persona section |
| Audience `:28` | Refusing to promote individual personas; carrying no name, motivation, or affiliation classification; reading the source-named groups as this product's audience |
| Distinctive traits `:32` | Classifying the list as a restatement of the source Key Characteristics; groupings and readings inside the list |
| Principles `:47` | The eight items and every *UI implication*; Coral-is-finite framing kept in the source's inferred class |
| Application rules `:60` | The source Do rules and the reasons attached |
| Avoid `:72` | The source Don't prohibitions and the reasons inside them |
| Semantic color `:88` | Pairing each hex to its token-set path; keeping prose-only hexes off YAML keys; keeping catalog `#ff595a` as identity; keeping surface/on-primary as two `#ffffff` keys |
| Spacing `:166` | Reading YAML steps as token-set paths and the §5 paddings as that padding table rather than as shared numerals |
| Shape `:177` | Keeping four rounded keys; avatar `50%`; asymmetric ribbon; Search split-radius; `10px` hero-overlay cap; `full: 9999` off avatar `50%` and off pill buttons |
| Elevation intro `:181` | Classifying the two-track sentence as the source's own; keeping YAML shadow strings beside the §6 specific uses rather than merging them |
| Elevation `:217` | Keeping YAML shadow strings beside §6 uses; keeping modal YAML `0px 8px 24px` beside §6 `0 0 4px`; reading the two-track philosophy as that recorded split |
| Motion durations `:221` | Keeping the five duration rows as duration tokens rather than easing curves |
| Motion spring `:239` | Classifying the forbidden-spring stance as derived editorial; Pinkoi does not publicly declare a motion policy |
| Motion B3 `:248` | Three unsourced curves omitted; four signature motions kept; reduced-motion kept; five-kind promotion gate held |
| Font evidence `:258` | Applying official-product-use / live-computed / declared-stack / distributed-asset / license classes |
| Family `:280` | Keeping YAML `Helvetica Neue` / `PingFang TC` beside the longer five-stack table; fallback prohibition |
| Type roles `:284` | Keeping YAML sizes as token-set numbers; keeping YAML use and the §3 longer range on the same role |
| Type hierarchy `:307` | Reading the weight-driven hierarchy paragraph as a type-role rule for the recorded marketplace rather than as a separately published type specimen |
| Type sizes keep-apart `:318` | Reading 22 / 18 / 16 / 14 / 11 as the roles named beside them rather than as shared numerals |
| Assets `:327` | Github slug as an identity pointer; keeping `pinkoi_logo_2019.svg` as the named logo file; refusing invented brand-color decoration in place of product photography |
| Capture geometry `:334` | Keeping YAML anatomies beside the longer §4 / §9 / footer writings rather than collapsing them |
| Capture §14 `:354` | Keeping the thirteen state rows attached to the source §14 section rather than transferring them onto a different control as computed treatments |
| Capture applicability `:356` | Preserving the source state contract here rather than delegating to an unadopted catalog graph; role-based decision procedure; every interactive-kind verdict; every applicability verdict and reason; YAML `type:` only where the token set records it; refusal to treat the map as a complete state-coverage claim |
| Primary `:373` | Reading 4px / 8px 12px / 14px as this button's geometry rather than those YAML steps |
| Login `:399` | Omitting a primitive type because the row is not in the token set; keeping Login as its own `--login` variant rather than rewriting it as Primary |
| Secondary `:425` | Reading 4px / 8px 12px as this outlined button's geometry rather than YAML spacing steps |
| Purchase `:452` | Keeping YAML `8px 12px` beside §9 `9px 14px`; refusing to spend coral on another control |
| Danger `:477` | Reading active `#c41428` as this danger button's pressed state rather than as a new token-set path |
| Green `:502` | Reading hover/active `#289c8a` as this green button's hover/active rather than as a new token-set path |
| Plain `:526` | Omitting a primitive type because the row is not in the token set |
| Input `:552` | Keeping observed Focus on the Focus writing rather than assigning it to `focus-visible` |
| Compact input `:574` | Omitting a primitive type; reading `5px 10px` as this compact field's geometry rather than as `tokens.spacing` or Input `8px 12px` |
| Product Card `:597` | Keeping YAML padding-absent beside §4 `padding: 0`; reading title 14px/700 and price 16px/700 as this card's writings; keeping the §9 border on this card |
| Standard card `:619` | Keeping the inferred class the source assigned; omitting kind and the map; reading `16px` padding as this card's padding rather than `tokens.spacing.base: 16` |
| Card Badge `:631` | Omitting kind and the map; reading 2px as this badge's geometry rather than only `tokens.rounded.sm: 2` |
| Discount Badge `:644` | Keeping YAML radius `2` beside §4 `2px 0 2px 0`; omitting kind and the map |
| Search (header) `:653` | Omitting a primitive type; keeping trailing split-radius / 40px on this search chrome rather than on Primary |
| Country pills `:674` | Omitting a primitive type; reading 100px and `#fff8f7` as this pill's geometry rather than as button padding or `tokens.colors.purchase` |
| Outline Secondary `:695` | Omitting a primitive type; keeping the footer 40-52px / 14-16px·400-500 capture beside YAML Secondary rather than merging them |
| Navigation header `:716` | Omitting a primitive type; keeping the dropdown shadow on this header rather than rewriting it as only `tokens.shadow.modal` |
| Tables `:730` | Omitting a primitive type because the row is not in the token set; omitting kind and the map because the source supplies no interaction evidence |
| Layout spacing `:747` | Reading card-internal micro-padding and `64px 0` as layout measurements rather than as `tokens.spacing` keys |
| Layout density `:757` | Reading the high-density paragraph as a layout rule for the recorded marketplace |
| Breakpoints uncollapsed `:770` | Keeping `<767px` and `<768px` as two writings rather than collapsing them |
| Layout breakpoints `:793` | Reading 767 / 768 / 1037 / 1200 / 1248, the 190px square minimum, and the 6→4→3→2 collapse as the layout measurements the source recorded |
| Content voice `:798` | Reading the source register as this contract's voice rather than as a separately published Pinkoi microcopy guide |
| Voice samples `:826` | Keeping each sample's verified / cited / illustrative class rather than promoting illustrative strings as live-verified copy |
| Published names `:828` | Classifying the source's published names and lines as byte-exact kept strings |
| Named gaps `:862` | Calling the list a set of named gaps rather than a domain inventory; treating the items as unnamed values rather than permissions to invent |

## Proof notes

- conflicts: none
- components_harvested: true
- tokens.source: prose-derived
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Narrative context (2011 Taipei, founder names, Yahoo Sunnyvale, NT$500,000, 7-square-meter study, 2015 $9M Sequoia Capital India + GMO Venture Partners, English-site launch, five markets, 6.25M / 50,000+ / 77 countries / 95%, 150-countries comment writing, circular-arcs logo, closing chrome-stays-out-of-the-way sentence) does not by itself supply interface tokens
- Catalog `#ff595a` remains identity metadata beside `tokens.colors.primary` `#10567b`
- B3 is held in Foundations Motion in full text (five evidence kinds + per-component gate)
- Spring-forbidden stance is an editorial reading recorded by the source comment; it is not a Pinkoi-authored motion policy

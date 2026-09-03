# MyRealTrip provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/myrealtrip/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | myrealtrip |
| name | MyRealTrip |
| display name in source H1 | MyRealTrip (마이리얼트립) |
| country | KR |
| category | consumer-tech |
| homepage | `https://www.myrealtrip.com` |
| primary_color | `#2b96ed` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=myrealtrip.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. Catalog identity `primary_color` `#2b96ed` is dual: identity here, and the portable Semantic color primary role. The favicon URL is dual: identity here, and a portable asset pointer in `DESIGN.md` §3. `tokens.source` `live-extract` is dual: this table and the portable Scope sentence.

Token note from source, kept as ledger metadata and restated in portable Scope: Only values with current raw computed-style provenance are tokens. Home/hotel product surfaces and corporate/about chrome remain separate.

**Logo decision.** The `logo.slug` above is a Google s2 favicon URL for `myrealtrip.com`, kept as the catalog identity pointer and classified in the portable document as that identity pointer, not a MyRealTrip-hosted brand file.

No `ds.*` record is in the source YAML. The portable B2a close uses the toss-form `not MyRealTrip-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석: the source records no first-party published UI specification and no visual-design manifesto).

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |
| evidence artifact timestamp (sibling) | 2026-07-13T11:51:32.966Z |

The source footer records the verification verbatim as **Verified:** 2026-07-13. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved, as the source footer and YAML `verification_v2.conflicts: []` state: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| consumer-home | product | `https://www.myrealtrip.com/` | 2026-07-13 |
| hotel-listing | product | `https://www.myrealtrip.com/hotels` | 2026-07-13 |
| corporate-about | corporate | `https://about.myrealtrip.com/` | 2026-07-13 |

YAML token claims for colors, spacing, rounded, and components resolve to the `home` / `home-live` computed-style anchor. Typography family and body/control metrics resolve to the `hotel_font` / `hotel-live` computed-style-fontfaceset-source anchor.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | `https://www.myrealtrip.com/` | 2026-07-13 |
| hotel-live | product-surface | `https://www.myrealtrip.com/hotels` | 2026-07-13 |
| about-live | product-surface | `https://about.myrealtrip.com/` | 2026-07-13 |
| help-center | product-surface | `https://help.myrealtrip.com/hc/ko` | 2026-07-13 |
| pretendard-license | license | `https://github.com/orioncactus/pretendard/blob/main/LICENSE` | 2026-07-13 |

### Tier 1

- `https://www.myrealtrip.com/` (public consumer home)
- `https://www.myrealtrip.com/hotels` (public hotel listing)
- `https://about.myrealtrip.com/` (separate corporate/about surface)
- `https://help.myrealtrip.com/hc/ko` (official support chrome and service context)

### Tier 2 (no usable record)

- `https://getdesign.md/myrealtrip` (attempted; built-in web open returned a safe-open failure and search returned no MyRealTrip detail)
- `https://styles.refero.design/?q=myrealtrip` (attempted; built-in web open returned a safe-open failure and search returned no MyRealTrip detail)

No Tier 2 value was promoted.

### Narrative (not interface tokens)

Sibling-named first-party context URLs, kept here rather than as portable token surfaces:

- Founder offer page (Lee Dong-geon; founded February 2012; brokering locally made tours)
- Real Partner page (`https://www.myrealtrip.com/about/realguide`)
- Company blog (`https://blog.myrealtrip.com/`)

## Sibling handling (`web/references/myrealtrip/.verification.md`)

The sibling path was checked directly. The file exists. Issued-copy needles from it are the same Korean labels and names the source already records. Sibling-only observations that the source DESIGN.md did not promote as portable tokens stay in this ledger:

| Observation | Sibling role |
|---|---|
| `surface-2::body` `background-color: rgb(255, 255, 255)`; `color: rgb(26, 26, 26)`; `font: 16px / 400`; `line-height: 27.2px` | Corporate/about surface only. Not a consumer-product token. |
| White outlined control at `home::[data-omd-capture="23"]` (white fill, `#495056` text, `#CED4DA` 1px border, 4px radius, 40px height) | Raw proof only; one static control does not establish a generic secondary-button family. Portable body keeps `#ced4da` / `#CED4DA` as `tokens.colors.control-border` only. |
| Declared-only `slick`, `swiper-icons` | Sibling names them beside `Noto Sans KR` / `PP Neue Montreal`. Source §3 writes `icon faces`. Portable body keeps the source wording. |
| Bundle: three public URLs, four component types, 22 component variants, one observed selected state, `interactionCount: 0`, coverage 75 | Capture metadata. |
| Collector labels all three retained URLs `product-surface`; sibling further separates functional roles | Evidence-class note, not a token. |

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary / canvas / ink / muted / search-fill / control-border / selected-fill / on-primary | consumer-home / home-live / computed-style / 2026-07-13 |
| tokens.typography.family.sans | hotel-listing / hotel-live / computed-style-fontfaceset-source / 2026-07-13 |
| tokens.typography.body.size / weight / lineHeight / use | hotel-listing / hotel-live |
| tokens.typography.control.size / weight / lineHeight / use | hotel-listing / hotel-live |
| tokens.spacing.action-inline | consumer-home / home-live |
| tokens.rounded.square / action / selected-tab | consumer-home / home-live |
| tokens.components.primary-header-action.type / bg / fg / radius / padding / height / font / states / use | consumer-home / home-live |
| tokens.components.selected-locale-tab.type / bg / fg / radius / padding / height / font / active / use | consumer-home / home-live |

The public search field is source §4 only. It has no YAML `tokens.components.*` path.

## Claim ledger

Claims use YAML anchors from the source: `home` = consumer-home / home-live / computed-style / 2026-07-13; `hotel_font` = hotel-listing / hotel-live / computed-style-fontfaceset-source / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.primary / canvas / ink / muted / search-fill / control-border / selected-fill / on-primary | home |
| tokens.typography.family.sans | hotel_font |
| tokens.typography.body.size / weight / lineHeight / use | hotel_font |
| tokens.typography.control.size / weight / lineHeight / use | hotel_font |
| tokens.spacing.action-inline | home |
| tokens.rounded.square / action / selected-tab | home |
| tokens.components.primary-header-action.* | home |
| tokens.components.selected-locale-tab.* | home |
| §11 February 2012 / Lee Dong-geon / brokering tours made by local people / AI-native travel platform / closing travel-marketplace origin sentence | narrative (public offer page / partner programme / company blog); dual with `DESIGN.md` Scope |

## Capture selectors

| Component | Pointer |
|---|---|
| Public header action | `home::[data-omd-capture="5"]`; hotel listing `surface-3::[data-omd-capture="3"]` |
| Public search field | `home::[data-omd-capture="3"]`; hotel listing `surface-3::[data-omd-capture="1"]` |
| Selected locale tab | `home::[data-omd-capture="1"]`, `aria-selected="true"` |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 Personas — unfinished demographic / journey / motivation slots | Deleted. The source itself says no named or synthetic persona is supplied. No name, age, city, motivation, or affiliation classification is re-hosted here (D2, D2a). The source-named public stakeholder groups (travellers seeking travel products; partners who operate listings and reservations; support visitors looking for help) survive in `DESIGN.md` Audience because the source calls them public stakeholder groups identified by first-party materials. |
| §9 Agent Prompt Guide — two construction prompts | Deleted. No receiving slot. Unique geometry the prompts name (40px header action `#2B96ED` / `#FFFFFF` / 12px / `0px 24px` / 14px/600; selected tab `#101418` / 15px/700 / 16px / `6px 10px` / 32px / `aria-selected=true`) already lives on Public header action and Selected locale tab (A3). |
| Source §14 / §15 placeholder wrappers | Omitted at the placeholder-value boundary. Unnamed empty / loading / error / success / disabled treatments stay named without values in `DESIGN.md` Capture record. Motion placeholder omitted; the source’s no-measurement sentence and B3 five-kind gate stay in `DESIGN.md` Motion. |
| YAML `omd`, `verified`, `verification_v2`, `tokens.source` / `extracted`, `components_harvested` | Kept in this ledger (A1c). `live-extract` also has a portable Scope sentence. Producer strings `omd` / `verified` / `extracted` are not copied into portable top matter. |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | Ledger metadata here. Dual for the portable evidence-class writing that restates the public consumer home, public hotel listing, separate corporate/about surface, and official support chrome. |

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience → Scope, first paragraph | Treating the two public product URLs as this contract's token surfaces; keeping corporate/about as corporate chrome rather than silently blended into consumer-product tokens; keeping the help-center as official support chrome and service context rather than as a consumer-product token source; keeping YAML `live-extract`; keeping every value attached to the surface or evidence class that established it |
| Experience → Scope, second paragraph | Reading the captured layer as restrained utility chrome around travel discovery; reading `#2B96ED` as the repeated public header action rather than as a generalised brand palette |
| Experience → Scope, narrative paragraph | Classifying the §11 founding-and-direction narrative — February 2012, Lee Dong-geon, brokering tours made by local people, partner-programme quality frame, AI-native travel-platform description, product / technology / organisational stories, and the closing travel-marketplace origin sentence — as context that does not by itself supply interface tokens |
| Experience → Primary tasks | Selecting the three public-web surface/control outcomes as primary tasks; refusing the stakeholder-group section |
| Experience → Audience | Dropping unfinished persona slots rather than promoting them; reading the source-named public stakeholder groups as this product's audience |
| Experience → Distinctive traits | Classifying the list as a restatement of measured values; groupings inside the list, including the repeated header action on a white canvas rather than a generalised brand palette |
| Experience → Principles | The three items |
| Experience → Application rules | The source Do rules and the reasons attached to them |
| Experience → Avoid | The source Don't prohibitions and the reasons inside them |
| Foundations → Semantic color | Pairing each hex to its token-set path; keeping YAML lowercase and §2 uppercase as two records of one key; keeping `tokens.colors.canvas` off `tokens.colors.on-primary`; attaching every role to the recorded surface rather than as a generalised brand palette; keeping `tokens.colors.control-border` as a color observation rather than a harvested component; keeping the YAML token note |
| Foundations → Semantic color, path-separation | Reading canvas/on-primary as two keys; reading primary as the repeated header-action fill rather than a hover or booking-flow color; keeping search-fill off control-border, ink off muted, selected-fill on the selected locale tab |
| Foundations → Spacing | Keeping unitless `tokens.spacing.action-inline: 24` on its own key path rather than as only the header-action padding `0px 24px` |
| Foundations → Shape | Keeping `square: 0`, `action: 12`, and `selected-tab: 16` as three keys; keeping local radii on their components |
| Foundations → Elevation | Reading the isolated selected-tab `0px 1px 2px rgba(0, 0, 0, 0.15)` sample as not a reusable elevation scale |
| Foundations → Motion | Treating measured absence as a reason not to promote duration, easing, animation name, transition property, or reduced-motion behavior; requiring a per-component computed observation of all five kinds before any promotion; keeping the source’s class-name inference prohibition |
| Typography & Assets → Font evidence | Evidence-class sorting; Pretendard as the public-web UI-family token only; `__pretandard_7bdbf6` as a loaded internal alias rather than a separately named reusable brand typeface; declared-only faces omitted |
| Typography & Assets → Family | Keeping Pretendard as the public-web UI-family token only for the captured public-web surfaces and only where computed visible use and loaded FontFace/source evidence agree; keeping `__pretandard_7bdbf6` as a loaded internal alias; refusing declared-only faces as substitutes |
| Typography & Assets → Type roles | Keeping YAML sizes as token-set numbers; keeping YAML `use` and the §3 surface column on the same role; keeping `18.6px` on the selected home locale tab; attaching each role to the recorded surface rather than as a company-wide typographic scale |
| Typography & Assets → Type roles, path-separation | Reading body `14` off the header-action `14px / 600`; reading control `15` off the locale tab `15px / 700` and off the search field `15px / 500`; reading `22.5px` off `18.6px` |
| Typography & Assets → Assets | Reading the Google s2 favicon URL as a catalog identity pointer rather than a MyRealTrip-hosted brand file; reading the Pretendard licence as an upstream font-asset boundary rather than a MyRealTrip brand asset |
| Components & States → Capture record | Preserving the source state contract rather than delegating it to an unadopted catalog graph; role-based decision procedure; every interactive-kind verdict; every applicability verdict and reason; attaching a Primitive type line only when the source YAML records that type; refusal to treat the map as a complete state-coverage claim |
| Components → Public header action | Reading 12px / `0px 24px` / 40px / 14px / 600 as this button's geometry rather than those YAML steps; keeping the YAML font beside the §4 longer alias/stack record; treating this public header action as a header control that opens a destination rather than as an in-place commit |
| Components → Public search field | Omitting a primitive type because the row is not in the token set; reading 0px / 48px / 15px / 500 as this search field's geometry rather than those YAML steps |
| Components → Selected locale tab | Reading 16px / 32px / 15px / 700 as this tab's geometry rather than those YAML steps; keeping the YAML font beside the §3 `18.6px` line height; treating this control as a tab rather than as an in-place commit |
| Layout & Platforms | Reading the three heights as local captured geometry rather than as a complete grid declaration; reading those heights as desktop-capture measurements rather than as cross-viewport specifications; keeping the source’s own desktop-width and no-claim sentences rather than adding a further domain |
| Content & Locales | Characterizing the samples as a practical, explanatory service register on the public help and partner surfaces rather than as a complete product-microcopy guide; requiring the quoted strings byte-exact |
| Content & Locales → Published names | Classifying the source’s published names and lines as byte-exact kept strings |
| Governance → Named gaps | Calling the list a set of named gaps rather than a domain inventory; treating the items as unnamed values rather than permissions to invent |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- tokens.source: live-extract
- Interaction expansions: 0; only default component observations promoted, plus one selected tab static state
- Uncaptured hover/disabled/loading/error/success treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Narrative context (February 2012, Lee Dong-geon, brokering tours made by local people, AI-native travel platform, closing travel-marketplace origin sentence) does not by itself supply interface tokens
- Corporate/about and help-center chrome remain separate from consumer-product tokens

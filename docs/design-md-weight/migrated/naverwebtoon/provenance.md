# Naver Webtoon provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/naverwebtoon/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | naverwebtoon |
| name | Naver Webtoon |
| country | KR |
| category | consumer-tech |
| homepage | `https://comic.naver.com` |
| primary_color | `#00dc64` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=comic.naver.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and portable scope records in `DESIGN.md` §1 that name the three inspected product routes under that host. Catalog `primary_color` `#00dc64` is dual: identity here, and a keep-beside record in `DESIGN.md` Scope / Semantic color — it shares a hex with `tokens.colors.primary` `#00dc64` and is not a second green. The favicon URL is dual: identity here, and a portable Assets pointer in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

YAML `tokens.note`: Selector-backed values are restricted to the supplied public comic.naver.com product capture. NAVER global-shell chrome and zero-use font declarations are not product-token substitutes. That note is dual: identity/token-source metadata here, and a portable Scope sentence in `DESIGN.md` §1.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

The source footer records the verification verbatim as **Verified:** 2026-07-13. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer and YAML `verification_v2.conflicts: []` state.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | product-home | `https://comic.naver.com/index` | 2026-07-13 |
| webtoon-list | product-browse | `https://comic.naver.com/webtoon` | 2026-07-13 |
| best-challenge | product-creator-discovery | `https://comic.naver.com/bestChallenge` | 2026-07-13 |

YAML `verification_v2.sources`:

| id | kind | url | captured |
|---|---|---|---|
| home-capture | product-surface | `https://comic.naver.com/index` | 2026-07-13 |
| webtoon-list-capture | product-surface | `https://comic.naver.com/webtoon` | 2026-07-13 |
| best-challenge-capture | product-surface | `https://comic.naver.com/bestChallenge` | 2026-07-13 |
| company-about | official-doc | `https://about.webtoon.com/` | 2026-07-13 |
| company-brands | official-doc | `https://about.webtoon.com/our-brands?company=naverWebtoon` | 2026-07-13 |
| font-design | official-doc | `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md` | 2026-07-13 |
| font-license | license | `https://github.com/orioncactus/pretendard/blob/main/LICENSE` | 2026-07-13 |

### Tier 1 (as listed in the source footer)

- `https://comic.naver.com/index` (product home)
- `https://comic.naver.com/webtoon` (product browse)
- `https://comic.naver.com/bestChallenge` (product creator discovery)
- `https://about.webtoon.com/` and `https://about.webtoon.com/our-brands?company=naverWebtoon` (official company and service context)
- `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md` (upstream font distribution/design)
- `https://github.com/orioncactus/pretendard/blob/main/LICENSE` (upstream font licence)

### Tier 2

- `https://getdesign.md/naverwebtoon` — attempted; built-in web open safe-open failure and no search record
- `https://styles.refero.design/?q=naver%20webtoon` — attempted; built-in web open safe-open failure and no search record

## Token source (YAML `tokens.source`)

The source frontmatter records `tokens.source: reconciled` and `tokens.extracted: 2026-07-13`. That producer string is ledger metadata. `components_harvested: true` is ledger metadata.

## Claim ledger

Claims use YAML anchors from the source: `product` = home / home-capture / computed-style / 2026-07-13; `webtoon` = webtoon-list / webtoon-list-capture / computed-style / 2026-07-13; `challenge` = best-challenge / best-challenge-capture / computed-style / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.primary / surface / foreground / muted / tag-surface | home |
| tokens.colors.on-primary | webtoon-list |
| tokens.typography.family.ui | home |
| tokens.typography.brand-title.size / weight / use | home |
| tokens.typography.section-title.size / weight / lineHeight / use | home |
| tokens.typography.tab.size / weight / lineHeight / use | home |
| tokens.typography.tag.size / weight / lineHeight / use | home |
| tokens.rounded.square / compact | home |
| tokens.components.content-tab.type / fg / font / states / use | home |
| tokens.components.tag-link.type / bg / fg / radius / padding / font / use | home |
| tokens.components.pagination.type / fg / font / states / use | best-challenge |

## Capture selectors

| Component | Pointer |
|---|---|
| Header search | `home::[data-omd-capture="4"]` |
| Creator entry | `home::[data-omd-capture="14"]` |
| Content tab (unselected) | `home::[data-omd-capture="16"]` |
| Content tab (selected) | `home::[data-omd-capture="17"]` |
| Tag link | `home::[data-omd-capture="64"]` |
| Pagination (selected page) | `surface-3::[data-omd-capture="133"]` |
| Pagination (disabled previous) | `surface-3::[data-omd-capture="132"]` |

YAML use lines also write the unquoted forms `home::[data-omd-capture=16]`, `home::[data-omd-capture=17]`, `home::[data-omd-capture=64]`, and `surface-3::[data-omd-capture=133]`. Both writings stay in the portable body.

Class fingerprints from source §3, kept as captured-use labels rather than as interaction evidence: `home::h1`, `ComponentHead__title`, `ComponentHead__button_tab`, `TagGroup__tag`.

## Sibling handling (`web/references/naverwebtoon/.verification.md`)

The sibling exists — confirmed with `find web/references/naverwebtoon -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Checked 2026-07-13. Method: supplied deterministic collector evidence (`artifacts/reference-evidence/naverwebtoon.json`) plus first-party and Tier 2 built-in web checks. No browser capture was rerun and no MCP session was used.
- Artifact captured `2026-07-13T11:46:58.874Z`. Three public product routes, five component types, 36 component variants, three observed static states, seven tab interaction records, coverage score 91.
- Raw samples (rgb plus hex): header search `rgb(255, 255, 255)` / `#ffffff`, `rgb(0, 0, 0)` / `#000000`; creator entry `rgb(0, 220, 100)` / `#00dc64`; unselected tab `rgb(102, 102, 102)` / `#666666`; selected tab `rgb(0, 220, 100)` / `#00dc64`; tag `rgb(246, 246, 246)` / `#f6f6f6`; weekday heading `rgb(0, 220, 100)` / `#00dc64`, `rgb(255, 255, 255)` / `#ffffff`; selected pagination `rgb(0, 220, 100)` / `#00dc64`; disabled previous `rgb(0, 0, 0)` / `#000000`.
- Font: Pretendard 1,371 visible uses, `loaded` / high confidence; Pretendard Variable 92 `ssl.pstatic.net/static/wcc/` source URLs, zero visible uses; `나눔고딕` / `NanumGothic` 12 utility-shell observations, no matching loaded FontFace.
- getdesign / Refero: built-in web open non-retryable safe-open failure; no NAVER WEBTOON design/style record.

### Sibling-only strings (not promoted into `DESIGN.md`)

These values appear in the sibling and not in the visible source body. They stay on this ledger. They are not portable facts. This paragraph names the dropped field kind; it does not assert that the strings are absent from this file (E2d).

- coverage score 91
- five component types / 36 component variants / three observed static states
- artifact path `artifacts/reference-evidence/naverwebtoon.json`
- artifact timestamp `2026-07-13T11:46:58.874Z`
- `rgb(0, 220, 100)` / `rgb(255, 255, 255)` / `rgb(0, 0, 0)` / `rgb(102, 102, 102)` / `rgb(246, 246, 246)`
- section-heading letter-spacing `-0.5px`
- weekday heading font `14.04px/700` and selector `surface-2::h3` (`WeekdayMainView__heading`)
- pagination line-height `20px` and disabled-previous height `28px`
- font source path `ssl.pstatic.net/static/wcc/`
- sibling family label `NanumGothic`
- company self-description "global storytech company" and the sibling mission sentence about opportunities to create and share stories (the portable body keeps the source §11 wording: story-oriented entertainment service; discover, create, and share stories)

Values the sibling shares with the source body (corroboration, not new portable facts): `#00dc64` / `#00DC64`, `#ffffff` / `#FFFFFF`, `#000000`, `#666666`, `#f6f6f6` / `#F6F6F6`, Pretendard, 1,371 uses, 92 declared Variable URLs, SIL OFL 1.1, declared-only hind / NanumBarunGothic / NanumSquare / Volte, unresolved `나눔고딕`, `interactionCount: 7` / seven tab interactions, header-search / creator-entry / tab / tag / pagination selectors, getdesign/refero no usable record.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary / surface / foreground / muted / tag-surface | home |
| tokens.colors.on-primary | webtoon-list |
| tokens.typography.family.ui | home |
| tokens.typography.brand-title / section-title / tab / tag | home |
| tokens.rounded.square / compact | home |
| tokens.components.content-tab | home |
| tokens.components.tag-link | home |
| tokens.components.pagination | best-challenge |

No `tokens.spacing` map and no `tokens.shadow` map are present in the source YAML. Observed control heights stay in Layout; `box-shadow: none` stays in Foundations elevation. Those absences are not filled.

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §9 Agent Prompt Guide — construction prompt | Deleted. Tool-facing recreate-the-control prompt. Values it restated land in Foundations / Typography / Components / Layout. The §9-only bound “Do not extend these snippets into a generic WEBTOON app system” lands in Experience Avoid. No receiving slot and no delegation (A2, A3). |
| §13 페르소나 | Source invents no demographic personas and names no individuals. Official stakeholder groups stay in Experience Audience as the source wrote them. No name, age, city, motivation, or affiliation classification is invented or re-hosted here (D2, D2a). |
| YAML `[FILL IN]` | Not present in the source. Nothing to omit at a placeholder boundary. |
| Template `ease-enter` / `ease-exit` / `ease-standard` / `ease-spring` cubic-bezier values from `spec/omd-v0.1.md` | Not present in the source. No curve value to delete. Duration and signature-motion fields are also unnamed. B3 promotion gate stays in Foundations Motion. |

§9 deletion check (A3). Every value the construction prompt names was confirmed present elsewhere in the portable body before the section was dropped. For a captured content-tab pattern, `15px / 500 Pretendard`, `#666666` unselected text, and `#00DC64` selected text — Content tab. For the captured header search, a white, square-cornered 35px field with `0px 65px 0px 10px` padding and `14px / 400 Pretendard` — Header search + Layout. Do not extend these snippets into a generic WEBTOON app system — Avoid.

## Derived editorial inventory

Portable `DESIGN.md` carries 25 complete B2a qualifications. This table is 25 data rows. Preamble sentences on this page are not portable qualifications.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 `:9` | Three inspected product URLs as this contract's token surfaces; two about.webtoon.com URLs as named service-context sources that do not supply computed tokens; values stay attached; catalog `primary_color` `#00dc64` kept beside `tokens.colors.primary` rather than as a second green; inherited NAVER shell kept off the product-token set |
| Experience Scope ¶2 `:11` | Compact-white-shell / short-practical-vocabulary / image-content-led-rather-than-marketing-campaign character |
| Experience Scope ¶3 `:13` | Founding-and-service narrative, including the 2005 launch, both creator-audience wordings, both BEST CHALLENGE self-publishing wordings, the story-oriented entertainment service, and the closing sentence, classified as context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the four surface-or-control outcomes as primary tasks; not from the Personas section |
| Audience `:29` | Carrying no name, age, city, motivation, or affiliation classification beyond the official context; reading the three source-named stakeholder groups as audience |
| Distinctive traits `:33` | Groupings and readings of the recorded-value list |
| Principles `:43` | Three numbered items as derived editorial implementation inference; toss-form close |
| Application rules `:51` | Three Do rules and the reasons attached to them |
| Avoid `:59` | Three Don't prohibitions plus the §9 bound, and the reasons inside them |
| Semantic color `:72` | Role names from token-set keys; YAML lowercase / §2 uppercase keep-both; `tokens.colors.surface` off `tokens.colors.on-primary` as two `#ffffff` keys; catalog `primary_color` beside `tokens.colors.primary`; Product green uses kept on creator-entry, selected tabs, selected pagination, and weekday browse heading; weekday-heading on-green text kept on the on-primary / surface pair rather than as a third YAML colors key |
| Shape `:90` | Two rounded keys kept (`0` / `4`); local defaults rather than a universal radius scale |
| Elevation `:94` | Representative `box-shadow: none` as the only elevation record, not a depth scale for every surface |
| Motion `:98` | Five-kind promotion gate; refusal of a partial confirmation; source "No duration, easing, animation, or reduced-motion behavior was captured" and "Tab selection is the only observed interaction kind; it establishes state provenance, not a motion token" kept |
| Font evidence `:114` | Five evidence-class rows as the source's resolution table, not a published NAVER WEBTOON type specimen; upstream-licence row not independently establishing product use |
| Family `:122` | Pretendard as sole UI-family token on the three captured routes; canonical only because computed visible use and loaded FontFaceSet evidence agree; declared-only Pretendard Variable / hind / NanumBarunGothic / NanumSquare / Volte and unresolved `나눔고딕` refused as substitutes |
| Type roles `:126` | Pairing each YAML role to its token-set path; YAML unitless sizes `24` / `20` / `15` / `14` beside §3 `24px` / `20px` / `15px` / `14px`; unitless `1.05` / `1.40` / `2.14` kept as ratios beside §3 `21px` / `21px` / `30px`; YAML `use` verbatim; longer §3 captured-use column beside them; header-search `14px / 400` and creator-entry `12px / 400` as §4-only writings; 16px/500/37px as a route-local size; `tokens.typography.tag.size` `14` off pagination `14px / 500 Pretendard` |
| Assets `:143` | Google s2 favicon as catalog identity pointer; Pretendard licence as upstream font-asset boundary |
| Capture / applicability `:161` | Interactive-kind and applicability verdicts and the reason for either; YAML primitive types attached only where the token set records them (`tab` / `badge` / `button`); Header search and Creator entry labelled `not in the token set`; selected/unselected tab reading; pagination disabled-previous observation that is not a generalized disabled rule; generic `focus` non-capture is not `focus-visible` treatment; absence of an observation is not `not-applicable`; loading/error/success follow product role not primitive kind; Core §4.4 by control meaning; not a complete state-coverage claim |
| Header search keep-path `:179` | `#FFFFFF` as this control's background kept on `tokens.colors.surface` rather than as a third `#ffffff` colors key; radius `0px` kept on `tokens.rounded.square`; `14px / 400 Pretendard` kept as a §4 writing, not `tokens.typography.tag` |
| Creator entry keep-path `:205` | `#00DC64` as this control's fill kept on `tokens.colors.primary`; radius `4px` kept on `tokens.rounded.compact`; `12px / 400 Pretendard` kept as a §4 writing, not a YAML typography key |
| Tag link keep-path `:262` | Radius `4px` kept on `tokens.rounded.compact`; `tokens.typography.tag.size` `14` as this control's 14px writing; 16px/500/37px home-route record kept beside it |
| Pagination keep-path `:289` | `14px / 500 Pretendard` on this control kept off `tokens.typography.tag.size` `14` |
| Layout `:308` | 1440×900 / 35px / 39px / 21px / 30px / 37px / 45px figures read under the source's own "1440×900 view of three public product routes, not a responsive layout system" and "No responsive viewport comparison was supplied" sentences |
| Content `:315` | Korean product labels classified as not a complete product-microcopy guide |
| Named gaps `:349` | List as a catalog of source-unnamed values, not coverage of domains the source never named |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- Tab interaction provenance exists (`interactionCount: 7`). Uncaptured hover/pressed/focus/menu/dialog/error/toast/responsive treatments are omitted. They are not `not-applicable` for want of a capture; applicability follows control meaning. State coverage is not claimed complete.
- Official about.webtoon.com pages are service context, not token sources
- `tokens.source: reconciled` is ledger metadata
- B3 is held in Foundations Motion in full text (five evidence kinds + per-component gate)

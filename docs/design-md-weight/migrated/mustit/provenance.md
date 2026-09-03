# MUSTIT provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/mustit/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | mustit |
| name | MUSTIT |
| country | KR |
| category | ecommerce |
| homepage | `https://www.mustit.co.kr` |
| primary_color | `#D00000` |
| logo.type | favicon |
| logo.slug | `https://static-ux.mustit.co.kr/img/front/favicon.ico` |
| omd format (source) | 0.1 |
| verified | 2026-06-03 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. Catalog `primary_color` `#D00000` is dual: identity here, and a keep-beside record in `DESIGN.md` Scope / Semantic color — it is the same red as `tokens.colors.primary` `#d00000`, not a second red. The favicon URL is dual: identity here, and a portable Assets pointer in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-03 |
| tokens.extracted | 2026-06-09 |
| sources captured | 2026-06-03 |

The source footer records **Verified:** 2026-06-03. That producer string is ledger metadata and has no portable slot beyond the inspection date already named in Scope (A1c).

Conflicts unresolved (source footer, kept as the source wrote them): The main shopping app uses `#333` as the primary CTA (near-black), while the corp site uses `#000`/`#1F1F2C` for brand backgrounds; `#D00000` is consistent across both as the accent/discount/action color. Both sides stay in the portable body; this row is the ledger copy.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | commerce-home | `https://www.mustit.co.kr` | 2026-06-03 |
| mobile-spa | commerce-mobile-web | `m.web.mustit.co.kr` | 2026-06-03 |
| brand | official-ci-bi | `https://corp.mustit.co.kr/brand` | 2026-06-03 |
| corp-css | official-ci-css | `https://corp.mustit.co.kr/lib/css/mustit-corp.css` | 2026-06-03 |
| pretendard-css | font-css | `https://static-ux.mustit.co.kr/ux/service/common/pretendard.css` | 2026-06-03 |

### Tier 1 (as listed in the source footer)

- `https://www.mustit.co.kr` (homepage HTML + embedded CSS bundle, 1.2 MB)
- `https://corp.mustit.co.kr/brand` (CI/BI brand page HTML)
- `https://corp.mustit.co.kr/lib/css/mustit-corp.css` (corp brand CSS, 70 kB)
- `https://static-ux.mustit.co.kr/ux/service/common/pretendard.css` (font CSS)

### Tier 2

- getdesign.md/mustit — NOT LISTED (no data returned).
- refero — KR/TW brand, no result expected.

Tier 2 records are not interface-token sources. No value was used.

## Token source (YAML `tokens.source`)

The source frontmatter records `tokens.source: prose-derived` and `tokens.extracted: 2026-06-09`. That producer string is ledger metadata. `components_harvested: true` is ledger metadata.

## Claim ledger

| claim | surface |
|---|---|
| tokens.colors.primary / brand / canvas / surface / foreground / muted / on-primary / accent-info / accent-outlet / surface-mid / hairline / border-subtle / disabled | home + corp CI |
| tokens.typography.family.sans / mono | home + pretendard-css |
| tokens.typography.display / title-l / title-m / title-s / body-l / body-m / body-s / caption-l / caption-s / label / fine | home |
| tokens.spacing `[8, 10, 12, 16]` | home |
| tokens.rounded.sm / md / lg / full | home |
| tokens.shadow.level1 / level2 | home |
| tokens.components.button-primary / button-confirm / button-outline / button-disabled | home (shopping) |
| tokens.components.tab / badge-outlet / badge-info / chip / input-search | home (shopping) |

## Sibling (`web/references/mustit/.verification.md`)

The sibling exists. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Inspected: 2026-06-03. Method: raw source-file fetch (homepage HTML + embedded CSS bundle + corp brand CSS).

Sibling-only strings transcribed here and **not** promoted into `DESIGN.md` (mention as disposition, not use as product fact):

- CSS class fingerprints: `.btn_black`, `.btn_confirm`, `.discount`, `.tab button`, `.badge.outlet`, `.header_search_box .input_box`, `.ci .panel .table.primary`, `.tag`, `.btn button`
- Corp `.tag`: `background-color: #D00000; border-radius: 20px; color: #fff; height: 40px; font-size: 18px; font-weight: 500`
- Corp `.btn button`: `background-color: #000; border-radius: 45px; color: #fff; font-size: 15px; font-weight: 600`
- Corp secondary palette: `#505050`, `#646464`, `#a0a0a0`, `#c8c8c8`
- Sheet opacity writing `opacity .15s linear` (source §15 records overlay fade at 250ms and Micro at 150ms `ease-out` for icon rotation / tap highlight; the sibling's sheet-opacity attribution is not copied onto those rows)
- Corp CSS query `?v=1770704893`
- Font file `Pretendard-Bold.subset.woff2`
- Homepage HTML 1.2 MB with 1 large `<style>` block; brand page HTML 17.7 kB
- Redirect note: `https://www.mustit.co.kr` redirects to `m.web.mustit.co.kr` (source already names the SPA host; the redirect sentence stays here)
- Parent company legal name and HQ address as recorded in the sibling Country section
- getdesign.md page sentence `No designs found for 'mustit'.` (source footer writes `NOT LISTED (no data returned)`; the sibling sentence stays here)
- refero `?q=MUSTIT` — not checked; does not count toward regional sources

Sibling raw samples that corroborate source-body values (not new portable facts): `.btn_black` `#333` / 4px / `#fff` / 48px / 15px / 600; `.btn_confirm` `#d00000`; `.discount` `#d00000`; `.tab button` `#aaa` / 16px / 500 and `.active` `#222` / 700 / `2px solid #222`; `.badge.outlet` `#8c1e46`; search `height: 40px` / placeholder `#aaa`; corp CI `#1F1F2C` and `#D00000`; Pretendard `@font-face`; `cubic-bezier(.25,.46,.45,.94)`; `cubic-bezier(.47,1.64,.41,.8)`; `transition: all .2s ease`.

## Omission ledger

Disposition only. This table names what was dropped and why. It does not re-host the dropped content as facts (D2a, E2d).

| Item | Disposition |
|---|---|
| §9 Agent Prompt Guide — construction prompt | Deleted. Tool-facing recreate-the-control prompt. Values it restated land in Foundations / Typography / Components / Layout. The §9-only sentences (product-card shell: no radius, white bg, `box-shadow: 0 2px 4px 0 rgba(0,0,0,.03)`, 1px `#f0f0f0` border; no heavy gradients in product areas; hotdeal sections may use deep purple-to-teal gradients) land on Product card and Semantic color. No receiving slot and no delegation (A2, A3). |
| §13 페르소나 4인 (illustrative labels and age bands) | Deleted. The source's own headers label them illustrative. Not promoted to Audience or primary-tasks, and not re-hosted here as labels, age bands, motivations, or affiliation classifications (D2, D2a). |
| YAML `[FILL IN]` | Not present in the source. Nothing to omit at a placeholder boundary. |
| Template `ease-enter` / `ease-exit` / `ease-standard` / `ease-spring` cubic-bezier values from `spec/omd-v0.1.md` | Not present in the source. Source §15 records different named tokens and two non-template cubic-bezier values; those stay in Foundations Motion. |

§9 deletion check (A3). Every value the construction prompt names was confirmed present elsewhere in the portable body before the section was dropped. Mobile-first, max-width 428px, 16px side padding — Layout. `#222` body, `#D00000` price/CTA, `#888` secondary, `#fafafa` section background — Semantic color. Pretendard; body 14px/700 for prices, 13px/700 for captions, 15px/600 for buttons — Type roles. Buttons bg `#333`, color `#fff`, radius 4px, height 48px — or red `#D00000` for confirm — Button. Cards: no radius, white bg, `box-shadow: 0 2px 4px 0 rgba(0,0,0,.03)`, 1px `#f0f0f0` border — Product card. Tabs: `border-bottom: 2px solid #222` active, `color: #aaa` inactive — Tab. Chips: `border-radius: 17px`, `border: 1px solid #ccc` default, `#D00000` active — Filter Chip. No heavy gradients in product areas; hotdeal sections may use deep purple-to-teal gradients — Semantic color. Decorative shadow under `rgba(0,0,0,.05)` — Elevation.

## Derived editorial inventory

Portable `DESIGN.md` carries 31 complete B2a qualifications. This table is 31 data rows. Preamble sentences on this page are not portable qualifications.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 `:9` | Inspected URLs as this contract's surfaces; CI/BI page and corp CSS as named brand sources that do not rewrite shopping-app component geometry; catalog `primary_color` `#D00000` beside `tokens.colors.primary` `#d00000` rather than as a second red; shopping `#333` off corp `#000`/`#1F1F2C`; values stay attached |
| Experience Scope ¶2 `:11` | Disciplined luxury-marketplace / canvas-recedes / single assertive red / personal curation / flat-and-minimal / instant visual priority atmosphere |
| Experience Scope ¶3 `:13` | Founding-and-rebrand narrative, including the closing design-position paragraph, classified as context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the three surface-or-control outcomes as primary tasks; not from the Personas section |
| Audience `:28` | Dropping the illustrative biographies rather than promoting them; carrying no label, age band, motivation, or affiliation classification; reading source-named shopper/seller-tool groups as audience |
| Distinctive traits `:32` | Groupings and readings of the recorded-value list |
| Principles `:43` | Five numbered items as derived editorial implementation inference; toss-form close |
| Application rules `:53` | Six Do rules and the reasons attached to them |
| Avoid `:64` | Five Don't prohibitions and the reasons inside them |
| Semantic color `:78` | Role names from the source's labels; YAML/§2 hex keep-both; catalog `#D00000` beside `tokens.colors.primary`; canvas off on-primary as two `#ffffff` keys; shopping `#333` off brand navy and corp `#000`; `#555555` / `#12cf35` / `#aaaaaa` / `#dddddd` kept off YAML `tokens.colors`; roles attached to the surface that recorded them; shopping-versus-corp split kept |
| Spacing `:103` | Unitless array steps kept on their own path rather than rewritten as a grid; `8`/`10`/`12`/`16` unmerged from gutter, card gap, divider strip, padding, and type |
| Shape `:114` | Four rounded keys kept (`2`/`4`/`8`/`9999`); chip `17px` / sheet `15px` / counter `9px` / square `0` kept off the YAML map; `full: 9999` off chip `17px` |
| Elevation `:118` | Restrained shopping-app depth rather than a lift scale for every MUSTIT surface; `rgba(0,0,0,.05)` cap kept |
| Motion `:132` | Named rows as a motion contract for the inspected shopping surfaces, not a separately published MUSTIT motion specification |
| Motion Fast keep-both `:144` | Do-list `transition: all 0.2s ease` read as Fast duration with CSS `ease`; not a replacement of Fast's usage line |
| Motion B3 `:153` | Five-kind promotion gate for a further curve; refusal of a partial confirmation; seven named rows including the two source-recorded cubic-bezier values kept |
| Font evidence `:170` | Evidence-class rows as the source's resolution table, not a published MUSTIT type specimen; sans and mono as two YAML keys that share Pretendard; SD Gothic Neo and Archivo Expanded off `family.sans`; no MUSTIT-exclusive distributed family; Pretendard as an upstream face and a font asset rather than a MUSTIT brand asset; no MUSTIT font-license notice established |
| Family `:179` | Fallback-and-pairing reading; Pretendard not replaced with a system substitute; SD Gothic Neo and Archivo Expanded not presented as the UI family |
| Type roles `:183` | YAML unitless ratios kept; YAML `use` verbatim; YAML unitless sizes beside §3 `px` spellings; Body L `16` off spacing `16`; Caption S `12` off search padding `12px`; Label `11` off a spacing step |
| Assets `:203` | First-party favicon as identity metadata rather than as a UI token |
| Assets photography `:205` | Refusing to replace product photography with invented brand-color decoration |
| Capture / applicability `:223` | Interactive-kind and applicability verdicts and the reason for either; YAML primitive types attached only where the token set records them; §9 product-card labelled `not in the token set`; not a complete state-coverage claim; §14 form-field disabled not copied onto the search input |
| Button keep-apart `:265` | 4px as `tokens.rounded.md` not a spacing step; padding `16px` off `tokens.spacing` `16`; shopping CTA fill off `tokens.colors.brand` |
| Tab keep-apart `:290` | Tab `16px` off `tokens.spacing` `16`; `#aaaaaa` inactive ink off a YAML `tokens.colors` key |
| Badge Outlet pairing `:316` | Local 2px radius paired to `tokens.rounded.sm` |
| Filter Chip keep-apart `:345` | Chip `17px` off `tokens.rounded.full: 9999` and off `tokens.rounded.md: 4`; counter `9px` off a YAML rounded step |
| Search keep-apart `:372` | Placeholder YAML `use` and §4 font both kept; padding `12px` off `tokens.spacing` `12`; §14 form-field disabled paint not copied onto the search input |
| Layout `:401` | Layout behaviors as the source wrote them rather than as a measured cross-viewport specification; 360–420px / ~360–428px / 428px / 375px kept as four writings; gutter/gap/divider unmerged from YAML spacing |
| Content adjectives `:406` | Adjective set and Do/Don't table; three voice samples classified as illustrative rather than as captured product copy |
| Illustrative voice samples `:425` | Samples kept under the source *Illustrative* label; register examples rather than MUSTIT-issued microcopy; Korean strings byte-exact; English gloss beside a line, never a replacement |
| Recorded unresolved decisions `:463` | List as a catalog of source-named unresolved writings, not coverage of domains the source never named |

## Proof notes

- No `verification_v2` block in the source frontmatter. Sibling is a 2026-06-03 live-inspect note, transcribed above.
- `components_harvested: true`
- Uncaptured hover fill / focus-visible chrome are omitted. They are not `not-applicable` for want of a capture; applicability follows control meaning. State coverage is not claimed complete.
- Corp CI/BI page and corp CSS are brand-color sources; they do not rewrite shopping-app component geometry.
- `tokens.source: prose-derived` is ledger metadata
- B3 is held in Foundations Motion in full text (five evidence kinds + per-component gate)

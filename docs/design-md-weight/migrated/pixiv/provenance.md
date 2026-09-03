# pixiv provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/pixiv/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | pixiv |
| name | pixiv |
| country | JP |
| category | consumer-tech |
| homepage | `https://www.pixiv.net` |
| primary_color | `#0096fa` |
| logo.type | simpleicons |
| logo.slug | `pixiv` |
| omd format (source) | 0.1 |
| verified | 2026-06-06 |
| added | 2026-06-06 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1 (`https://www.pixiv.net`). Catalog `primary_color` `#0096fa` is dual: identity here, and a keep-beside record in `DESIGN.md` Scope / Semantic color — it is the same blue as `tokens.colors.primary` `#0096fa`, not a second blue. Catalog logo type `simpleicons` / slug `pixiv` is dual: this identity ledger, and a portable Assets identity-boundary (E2a).

`tokens.source: prose-derived` is this identity/Claim ledger as the colon form (A1c). The portable body writes `YAML tokens.source is prose-derived` (value `prose-derived` is dual). `components_harvested: true` is ledger metadata. YAML has no `ds.name` / `ds.url` / `ds.type` and no `verification_v2` block. The absence is recorded, not filled (A1c).

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-06 |
| added (YAML) | 2026-06-06 |
| surfaces inspected | 2026-06-06 |
| tokens.extracted | 2026-06-09 |
| sibling inspected | 2026-06-06 |

Conflicts unresolved (source writings, kept as the source wrote them; this row is the ledger copy, not a winner): source §4 footer names `https://www.pixiv.net` as a live production site verified via live DOM getComputedStyle; the source HTML comment from the same date writes that live stylesheet values were not exposed in the fetched markup, and that engagement red, neutral greys, dark-theme surfaces, component geometry, and motion tokens are interpretive reconstructions. Both writings stay in the portable body. This ledger does not pick one.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | product-surface | `https://www.pixiv.net` | 2026-06-06 |

### Tier 1 (as listed in the source footer / HTML comment)

- `https://www.pixiv.net` — live production site. Source §4: verified via live DOM getComputedStyle. Source HTML comment: Direct verification via WebFetch (2026-06-06) confirms pixiv Inc. operation, 2025 logo refresh (`new_logo_2025` SVG), social-login surface, and content-first structure; live stylesheet values were not exposed in the fetched markup. Dual portable Scope / Capture record + this ledger (E2a).

### Tier 2 / research (HTML comment; not a token sheet)

- Brandfetch (`brandfetch.com/pixiv.net`) and the project brief confirm pixiv blue `#0096fa` as the primary brand color and the colorful, illustration-community positioning. Portable body does not re-host the Brandfetch URL (E1). Documented pixiv blue `#0096fa` is dual portable Semantic color + this ledger.

### Narrative (not interface tokens)

Source §1 / §11 operator pixiv Inc. (ピクシブ株式会社); September 2007; Takahiro Kataoka; Sendagaya, Tokyo; name-blend "pixel" / interactive (-iv); tens of millions of registered users; hundreds of millions of works; disappear behind the art; two-note blue/red; pixiv FANBOX, BOOTH, pixiv Sketch, pixivision, pixiv FACTORY; brand-promise sentence; refusal list; closing `The aesthetic is amateur-friendly, dense, tag-driven, and proudly Japanese — a community gallery, not a feed engine`; HTML-comment 2025 logo refresh. Restated in portable Scope under adjacent complete B2a. They are not interface tokens.

## Claim ledger

Token extraction is `prose-derived` (2026-06-09). `components_harvested: true`. Claims split by the source HTML comment: documented pixiv blue `#0096fa` versus interpretive reconstructions (engagement red, greys, dark-theme, component geometry, motion) versus the §4 live-DOM footer writing.

| claim | surface |
|---|---|
| tokens.colors.primary | home (documented brand color; catalog `primary_color` same hex) |
| tokens.colors.primary-hover / primary-tint | home (prose-derived YAML) |
| tokens.colors.engagement-red | home (HTML-comment interpretive reconstruction) |
| tokens.colors.canvas / heading / on-primary | home (prose-derived YAML) |
| tokens.colors.grey-50 … grey-600 / body / label | home (prose-derived YAML; Grey 700/800/900 are §2 writings of body/label/heading) |
| tokens.colors.dark-surface / dark-raised / dark-border / dark-text | home (HTML-comment interpretive reconstruction) |
| tokens.colors.success / error / warning / premium-gold | home (prose-derived YAML) |
| tokens.typography.family.sans / mono | prose-derived YAML; JP stack is §3 |
| tokens.typography.display … micro | prose-derived YAML size/weight/lineHeight/use; §3 table is the longer writing |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | prose-derived YAML numbers, no px suffix |
| tokens.rounded.sm / md / lg / full | prose-derived YAML; full 9999 unmerged from search `20px` |
| tokens.shadow.ambient / standard / elevated | prose-derived YAML strings; §6 table is the second writing; Subtle has no YAML key |
| tokens.components.* (16 records) | interpretive reconstruction of component geometry per source HTML comment |

## Capture selectors

No `data-omd-capture` selectors exist in the source DESIGN.md. None are invented here.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names kept):

- `ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)` — matches the legacy spec-template `ease-enter` example
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches `spec/omd-v0.1.md` template example `ease-exit`
- `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)` — matches the legacy spec-template `ease-standard` example
- `ease-pop` `cubic-bezier(0.34, 1.56, 0.64, 1)` — matches the legacy spec-template `ease-spring` example; source-reserved for the bookmark-heart overshoot

Portable Motion keeps the four names and uses. Duration 0ms / 150ms / 250ms / 200ms / 350ms remain in portable Motion. Signature motions, the reserved-spring sentence, and `prefers-reduced-motion: reduce` remain in portable Motion. This omission ledger is a log disposition (E2b), not a promotion.

## Omission ledger

Disposition only. This table names what was dropped and why. It does not re-host the dropped content as facts (D2a, E2d).

| Item | Disposition |
|---|---|
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | Deleted. Tool-facing recreate-the-control prompts. Values they restated land in Foundations / Typography / Components / Layout. The §9-only Search 14px text `#333333` and placeholder `#999999` land on Search Bar. No receiving slot and no delegation (A2, A3). |
| §13 페르소나 3인 (이름·나이·도시 포함) | Deleted. The source's own header labels them fictional archetypes informed by publicly described pixiv user segments, not individual people. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or affiliation classifications (D2, D2a). |
| YAML `[FILL IN]` | Not present in the source. Nothing to omit at a placeholder boundary. |
| Template `ease-enter` / `ease-exit` / `ease-standard` / `ease-pop` cubic-bezier values from `spec/omd-v0.1.md` | Omitted as unattributed curves. Names and uses kept. See Omitted unattributed curves (E2b). |

§9 deletion check (A3). Every value the construction prompts name was confirmed present elsewhere in the portable body before the section was dropped, except the two Search fields that live only in the §9 search prompt and were moved onto Search Bar. pixiv Blue `#0096fa` — Semantic color / Primary Button. Blue Dark `#0086e0` — Semantic color / Primary Hover. Blue tint `#e3f3ff` — Semantic color / Secondary Hover / Tag hover. Bookmark / engagement `#ff4060` — Semantic color / Bookmark Heart. Background White `#ffffff` / Grey 50 `#fafafa` — Semantic color. Surface fill Grey 100 `#f5f5f5` — Semantic color / Neutral / Search. Heading `#1a1a1a` — Semantic color. Body `#666666` — Semantic color. Caption `#858585` — Semantic color. Placeholder `#999999` — Semantic color / Text Field / Search Bar. Border `#dddddd` — Semantic color. Success `#4caf50` — Semantic color. Error `#e3413f` — Semantic color / Text Field Error. Premium `#ffb300` — Semantic color / Premium Button. Dark surface `#1f1f1f` / raised `#2b2b2b` — Semantic color. Thumbnail card 8px radius, white bg, square cover, title 13px / 700 `#1a1a1a`, author 12px / 400 `#666666` 20px avatar, page-count `rgba(0,0,0,0.6)` white 11px / 700, hover heart + `0 2px 8px rgba(0,0,0,0.12)` — Thumbnail Card. Bookmark heart outline `#cccccc` 24px / filled `#ff4060` / 200ms `1.0→1.25→1.0` / count 12px `#858585` — Bookmark Heart. Follow `+ フォロー` / `フォロー中` — Follow. Search pill 20px / YAML 9999, `#f5f5f5`, leading icon, 14px `#333333`, placeholder `#999999`, focus white + `#0096fa` — Search Bar. Tag pill `#f5f5f5` / `#0096fa` 13px / `#` prefix `#999999` / hover `#e3f3ff` — Tag Pill. Underline tab inactive `#858585` / active `#0096fa` 2px bottom border — Underline Tab. Iteration-guide rules (system-font stack, two-note color, chrome grey, 8px thumbnails, 12px metadata, 1px borders, dark theme) — Principles + Application rules + Avoid + Foundations.

## Sibling

`web/references/pixiv/.verification.md` exists and was read in full (`test -f` on the direct path). It is adopted as **evidence grade only**: no value in it was promoted into the portable body that the legacy `DESIGN.md` did not already establish, and no structural classification from it was promoted into a portable-body fact.

- **Inspected:** 2026-06-06
- **Method (verbatim):** playwright getComputedStyle (live DOM) on the production site
- **Sources:** `https://www.pixiv.net`

Sibling-only observations kept here and **not** written into the portable body:

- live www.pixiv.net body text: color `#464a4d`, font 12px, family system-ui
- live www.pixiv.net page background: color `#eeeeee` as page background (portable `#eeeeee` stays on `tokens.colors.grey-200` as card fills / disabled surfaces, the source DESIGN.md writing)
- live www.pixiv.net root background: color `#000000`
- live www.pixiv.net primary button: border-radius 20px (portable Primary Button radius stays 6px; 20px stays the search-pill writing)
- live www.pixiv.net link: color `#669fc2`
- sibling sentence that live-DOM computed values are the source of truth for this reference's hex/px tokens, and that DESIGN.md token roles were reconciled against those measurements

`system-ui` as YAML `tokens.typography.family.sans` is already in the source DESIGN.md and is dual portable Family + this ledger; the sibling's 12px body-text size and `#464a4d` are not. This paragraph names sibling-only observations as a class; it does not assert that those strings are absent from this file (E2d).

## Derived editorial inventory

Portable `DESIGN.md` carries 55 complete B2a qualifications. This table is 55 data rows. Preamble sentences on this page are not portable qualifications.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 `:9` | Inspected URL as this contract's surface; catalog `primary_color` `#0096fa` beside `tokens.colors.primary`; §4 live-DOM footer beside HTML-comment WebFetch writing; values stay attached; 2025 logo refresh does not rewrite component geometry |
| Experience Scope ¶2 `:11` | Gallery-wall / chrome-recedes / cheerful-and-energetic / thumbnail-grid-as-hero / bursts-of-system-color readings; §1 unique atmosphere sentences classified as source-own rather than as that derived list |
| Experience Scope ¶3 `:13` | Founding-and-ecosystem narrative, including the closing community-gallery sentence and the 2025 logo-refresh writing, classified as context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the four YAML `use` / §4 control strings as primary tasks; not from the Personas section |
| Audience `:29` | Dropping the fictional biographies rather than promoting them; carrying no name, age, city, motivation, or affiliation classification; reading source-named artist/illustrator/creator-and-fan groups as audience |
| Distinctive traits `:33` | Groupings and readings of the recorded-value list |
| Principles `:45` | Eight numbered items as derived editorial implementation inference; toss-form close |
| Application rules `:58` | Eight Do rules and the reasons attached to them |
| Avoid `:71` | Eight Don't prohibitions and the reasons inside them |
| Semantic color `:88` | Role names from the source's labels; YAML/§2 hex keep-both; catalog `#0096fa` beside `tokens.colors.primary`; canvas off on-primary; heading off Grey 900; body off Grey 700; label off Grey 800; grey-400 off Heart Outline; engagement-red off error; six grey keys unmerged; `#aaaaaa` and Overlay Scrim as §2-only; documented blue beside interpretive greys/red/dark; refusal to resolve the live-DOM footer against that class |
| Spacing `:155` | Unitless YAML steps on their own path; `tokens.spacing.section: 64` unmerged from §5 `32px` discovery-block spacing and from `xl: 32` |
| Shape `:168` | Four rounded keys; `full: 9999` off search `20px`; avatars/toggle tracks on Round `9999px` |
| Shape interpretive class `:170` | Component geometry as the source HTML-comment interpretive reconstruction rather than live computed geometry |
| Elevation `:188` | YAML shadow strings beside the §6 table; Subtle off the YAML map; toggle thumb shadow and input Focus ring off YAML shadow keys; qualitative header-blur without a blur radius |
| Motion `:192` | Duration table and easing names as source-stated rather than computed CSS; interpretive-reconstruction as the source HTML-comment class |
| Motion duration keep-apart `:202` | `motion-pop` `200ms` off `motion-fast` `150ms` and off `motion-standard` `250ms`; `motion-slow` `350ms` as the source duration rather than merged rows |
| Motion signature motions `:220` | single-moment-of-playfulness; Used nowhere else; Signals-this-is-interactive; exiting-feels-lighter; fully-usable-just-static |
| Motion B3 `:222` | Five-kind promotion gate for a further curve; refusal of a partial confirmation; five duration rows and four easing names kept; interpretive-reconstruction class |
| Font evidence `:240` | Evidence-class rows as the source's resolution table, not a published pixiv type specimen; YAML `system-ui` beside the JP stack; live-DOM footer beside not-exposed writing; no pixiv-exclusive distributed family; no pixiv font-license notice |
| Family `:249` | YAML `system-ui` beside the JP stack; mono `SF Mono` beside the longer monospace stack; no custom display-font substitute |
| Type roles `:253` | YAML unitless `lineHeight` beside the table's px (ratio) pair; letter-spacing `normal`; longer table Notes |
| Type roles size-vs-spacing `:269` | Caption size 12 off `tokens.spacing.md: 12`; Micro size 11 off the spacing scale; Subtitle size 16 off `tokens.spacing.base: 16` |
| Assets simpleicons `:273` | Simple Icons mapping as a third-party icon-set rendering rather than a pixiv-distributed file; 2025 logo refresh as a mark refresh rather than that mapping |
| Assets artwork `:275` | Refusing to replace creator-uploaded artwork with invented brand-color decoration |
| Capture / graph `:282` | Preserving the source state contract while the catalog graph is not adopted |
| Capture table characterizations `:299` | §14 wording treated as the source state contract rather than a new treatment sheet |
| Capture verified-versus-interpretive `:301` | Source HTML-comment documented-blue / interpretive split as evidence class rather than a second token sheet; refusal to pick the footer or the comment |
| Capture / applicability `:303` | Interactive-kind and applicability verdicts and the reason for either; YAML primitive types attached only where the token set records them; Bookmark Heart / Page Count / Lightbox `not in the token set`; not a complete state-coverage claim; named Focus not `focus-visible`; interpretive class |
| Button size scale `:307` | `small` / `medium` / `large` as a button-size writing rather than extra YAML components; 48px height off `tokens.spacing.xxl: 48` |
| Primary Button keep-apart `:327` | Radius `6` off spacing `4` and off `full: 9999`; fill as `tokens.colors.primary` not engagement red; hover off `focus-visible`; interpretive class |
| Secondary Button keep-apart `:356` | Fill off dark-theme; hover tint off `focus-visible`; キャンセル / フォロー中 as paired-action writing |
| Secondary omitted L/E/S `:365` | Loading/error/success omitted because request/outcome mapping is unresolved, rather than closed from §14 rows |
| Neutral Button keep-apart `:384` | Fill off canvas; label off heading; もっと見る beside "show more" rather than replacing the Japanese |
| Neutral omitted L/E/S `:393` | Loading/error/success omitted because mapping is unresolved, rather than closed from §14 rows |
| Follow keep-apart `:408` | Follow commit rather than a settings switch; YAML `type: toggle`; YAML `fg` `#ffffff` as unfollowed text beside source white-text writing, not only as following background; "most-pressed button" as source §4 wording |
| Premium Button keep-apart `:436` | Premium gold off warning amber and off engagement red; interpretive class |
| Bookmark Heart `:459` | No YAML primitive type; off the button-primary record |
| Text Field INFERRED + Focus `:490` | Interpretive class; named Focus not `focus-visible` evidence |
| Text Field Focus not a Core row `:502` | Named Focus as an additional named-source-state rather than a Core `focus-visible` row |
| Search Bar keep-apart `:520` | YAML `9999` beside `20px`; longer padding; §9 14px / placeholder; named Focus not `focus-visible` |
| Thumbnail Card `:550` | Interpretive class; title 13px / 700 off Body Small 400; entire-card tap target as interactive-kind evidence |
| Content Card `:575` | Interpretive class; border off canvas; kind and map omitted (C4) |
| Tag Pill `:595` | Interpretive class; `#` prefix kept; tappable-primary-navigation as interactive-kind evidence |
| Page Count `:618` | `kind: non-interactive`; no YAML primitive type; radius 10px off the rounded scale |
| R-18 Badge `:632` | Badge `kind: non-interactive` as a marker; gate dialog on the capture record rather than as this badge's map; "R-18" byte-exact |
| Premium Badge `:645` | `kind: non-interactive` as a marker; off the Premium Button map |
| Underline Tab `:663` | Section switching rather than a commit; three Japanese section names kept |
| Toast `:689` | `kind: non-interactive` because auto-dismiss ~2.5s rather than a tap target; "ブックマークしました" byte-exact |
| Centered Modal `:705` | Interactive because login prompts and confirmations; backdrop off lightbox `rgba(0,0,0,0.9)` |
| Lightbox `:727` | No YAML primitive type; `rgba(0,0,0,0.9)` off overlay scrim; no-blur scrim constraint |
| Switch `:752` | Settings switch with no committing request; off Follow; YAML `type: toggle` on this second record |
| Layout `:767` | Layout behaviors as the source wrote them rather than as a measured cross-viewport specification; YAML spacing unmerged; Mobile/Tablet/Desktop/Wide as source §8 writings |
| Content adjectives `:814` | Voice adjectives and the register reading |
| Content forbidden patterns `:826` | Forbidden-pattern list as source-stated §10 rather than a separately published microcopy specification |
| Recorded unresolved decisions `:862` | List as a catalog of source-named unresolved writings, not coverage of domains the source never named |

## Proof notes

- No `verification_v2` block in the source frontmatter. Sibling `.verification.md` exists and is evidence-grade only (see Sibling).
- `components_harvested: true`
- `tokens.source: prose-derived` is ledger metadata as the colon form. Value `prose-derived` is dual portable Scope + this ledger (E2a).
- Catalog Simple Icons type/slug is dual portable Assets + this identity ledger (E2a).
- Uncaptured `focus-visible` chrome is omitted. It is not `not-applicable` for want of a capture; applicability follows control meaning. State coverage is not claimed complete.
- Named Focus on the text field (`#0096fa` border + `0 0 0 2px rgba(0,150,250,0.15)` ring) and on the search bar (white bg, `#0096fa` border) are additional named-source-states, not `focus-visible` treatment evidence (B1).
- YAML primitive types preserved: `Primitive type: button` on Primary / Secondary / Neutral / Premium; `Primitive type: toggle` on Follow and Switch; `Primitive type: input` on Text Field and Search Bar; `Primitive type: card` on Thumbnail Card and Content Card; `Primitive type: badge` on Tag Pill / R-18 / Premium Badge; `Primitive type: tab` on Underline Tab; `Primitive type: toast` on Toast; `Primitive type: dialog` on Centered Modal (A1b). Bookmark Heart, Page Count, and Lightbox are `not in the token set`.
- C4 omit-kind set: Content Card (panel). YAML records `type: card` and no interactive-kind confirmation.
- Secondary / Neutral omit loading/error/success fields (C2) because request/outcome mapping is unresolved. Search / Tag / Tab / Switch close those three with a role reason. Text Field closes loading/success with a role reason and keeps error applicable. Thumbnail Card closes error/success with a role reason and keeps loading applicable. Lightbox closes error/success with a role reason and keeps loading applicable. `not captured` is not the reason (C1).
- Source §13 fictional archetypes are deleted, not Audience, not primary tasks, and not re-hosted as demographics here (D2, D2a).
- The B3 five-kind per-component computed gate is Foundations Motion in full text (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate”). Named gaps lists those five kinds in inventory form; it is not the B3 full promotion-gate sentence (E2c).
- Source §9 Agent Prompt Guide brand constraints are in Experience / Foundations / Components / Layout; the prompt wrapper is deleted. No `omd-apply` / `npx omd` in the portable body.
- Source YAML has no `ds.type` and no `verification_v2.schema`; none invented.
- No separately published pixiv UI specification is named as a component system, so every derived-editorial close uses the toss-form `not pixiv-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석).

# Portaly provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/portaly/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | portaly |
| name | Portaly |
| country | TW |
| category | design-tools |
| homepage | `https://portaly.cc/` |
| primary_color | `#862983` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=portaly.cc&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-17 |
| added | 2026-06-17 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-17 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1 (`https://portaly.cc/`). Catalog `primary_color` `#862983` is dual: identity here, and a keep-beside record in `DESIGN.md` Scope / Semantic color — it is the same plum as `tokens.colors.primary` `#862983`, not a second plum. Catalog logo type `favicon` / Google s2 slug is this identity ledger. Portable Typography & Assets records type `favicon` and a Google favicon lookup / non-promotion identity-boundary without the URL (E1). It is not a captured first-party mark.

`tokens.source: live-extract` is this identity/Claim ledger as the colon form (A1c). The portable body writes `YAML tokens.source is live-extract` (value `live-extract` is dual). `components_harvested: true` is ledger metadata. YAML has no `ds.name` / `ds.url` / `ds.type` and no `verification_v2` block. The absence is recorded, not filled (A1c).

YAML token note (ledger copy; portable Semantic color / Family restates the values): primary = pricing interactive magenta/plum (`#862983`) on filled CTAs + toggle thumb; teal (`#00a6a3` / `#12a3a0`) is the brand accent (logo swoosh, checkmarks, gradient endpoint); hero uses a purple gradient (`#6e28af → #ac8ffe`); navy (`#0c2340`) for nav. Marketing site renders English globally but the font stack carries Noto Sans TC for Traditional Chinese.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-17 |
| added (YAML) | 2026-06-17 |
| tokens.extracted | 2026-06-17 |
| footer Verified | 2026-06-17 |
| surfaces inspected | 2026-06-17 |

The source footer records **Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 3 brand-owned surfaces). That producer string is ledger metadata.

Conflicts unresolved (source footer, kept as the source wrote them): none.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing-surface | `https://portaly.cc/` (geo-redirects to `/en`) | 2026-06-17 |
| pricing | marketing-surface | `https://portaly.cc/en/pricing` | 2026-06-17 |
| blog | brand-owned surface | `https://portaly.cc/en/blog` | 2026-06-17 |
| cwl | product-surface | `https://portaly.cc/cwl` | 2026-06-17 |

### Tier 1 (as listed in the source footer / HTML comment)

- `https://portaly.cc/` (homepage, geo-redirects to `/en`) — hero, hero gradient, nav, CTAs, template thumbnails, color-frequency scan. Dual portable Scope + this ledger (E2a).
- `https://portaly.cc/en/pricing` — primary/secondary buttons (`#862983`), plan cards (12px, soft grey shadow), billing toggle, teal checkmarks (`#12a3a0`). Dual portable Scope / Components + this ledger (E2a).
- `https://portaly.cc/en/blog` — brand-owned surface, same chrome/font stack. Dual portable Scope + this ledger (E2a).
- `https://portaly.cc/cwl` — founder 林啟維's live creator page (Traditional-Chinese product surface; link-block component; `"Noto Sans", "Noto Sans TC", Noto Color Emoji` stack confirmed). Dual portable Scope / Creator Link Block + this ledger (E2a).

All token-level claims (§1–9) are sourced from this live inspection, per the source HTML comment. Full raw samples are named there as `web/references/portaly/.verification.md`.

### Tier 2

- getdesign.md/portaly — NO DATA ("No designs found for 'portaly'")
- styles.refero.design/?q=portaly — Portaly not indexed (only generic default cards returned)

Portable body does not re-host those failure strings (E1). This ledger names the two lookup classes and the source's own result phrases.

### Narrative (not interface tokens)

Source §1 / §11: Portaly (傳送門) launched 2022 by CW Lin (林啟維) under Real Engine, Inc. (真實引擎), a Taiwan startup; Taiwan's largest Traditional-Chinese link-in-bio / creator landing-page builder; AI feature won #2 Product of the Day on Product Hunt (2023, badge live on site); Neo 30 (2023) and 500 Global recognition. Gathered via WebSearch 2026-06-17 (LinkedIn /company/portaly-cc, Cake /me/chi-wei-lin-CW, Yourator Real-Engine, Crunchbase /organization/portaly) + live marketing copy. The source HTML comment classifies these as widely documented public facts, not directly quoted from a verified internal Portaly statement beyond the live site copy. Restated in portable Scope under adjacent complete B2a. They are not interface tokens.

## Claim ledger

Token extraction is `live-extract` (2026-06-17). `components_harvested: true`. Claims split by the source HTML comment: token-level claims (§1–9) from live inspection vs philosophy layer (§10–15) vs editorial readings in §12.

| claim | surface |
|---|---|
| tokens.colors.primary | pricing + home CTAs |
| tokens.colors.teal / teal-alt / teal-soft | home color-frequency scan + pricing checkmarks |
| tokens.colors.purple-hero / purple-hero-light | home hero |
| tokens.colors.swoosh-magenta | home stat-strip / logo swoosh |
| tokens.colors.navy | home / pricing nav |
| tokens.colors.navy-deep | creator-page backdrops |
| tokens.colors.ink / ink-pure / muted / canvas / surface / surface-alt / hairline / on-primary | home + pricing chrome |
| tokens.typography.family.sans / cjk | home + pricing + cwl |
| tokens.typography.display-hero / feature-xl / section / feature / lede / nav / body | home + pricing |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | home + pricing |
| tokens.rounded.sm / md / lg / full | home + pricing + cwl |
| tokens.shadow.card | pricing plan cards |
| tokens.shadow.block | cwl link blocks |
| tokens.components.button-primary / button-primary-lg / button-secondary | pricing |
| tokens.components.button-hero-ghost | home hero |
| tokens.components.nav-link | home / pricing / blog chrome |
| tokens.components.plan-card / toggle-billing / feature-check | pricing |
| tokens.components.link-block | cwl |

## Capture selectors

No `data-omd-capture` selectors exist in the source DESIGN.md. None are invented here. The source HTML comment names playwright `getComputedStyle` on the four URLs above.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names and uses kept):

- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` — catalog-boilerplate enter example; not in the live-extract §1–9 claim
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches `spec/omd-v0.1.md` template example `ease-exit`
- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` — CSS `ease` keyword; not a live-extracted Portaly curve

Portable Motion keeps the three names and uses. Duration 120ms / 200ms / 320ms remain in portable Motion. Signature motions (billing toggle, fade-from-below, purple hero settles once) and `prefers-reduced-motion: reduce` remain in portable Motion. This omission ledger is a log disposition (E2b), not a promotion.

## Omission ledger

Disposition only. This table names what was dropped and why. It does not re-host the dropped content as facts (D2a, E2d).

| Item | Disposition |
|---|---|
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | Deleted. Tool-facing recreate-the-control prompts. Values they restated land in Foundations / Typography / Components / Layout. §9-only writings that had a receiving slot: Hero Ghost transparent bg; hero subhead 20px weight 400 white; Join Now header pill 9999px right-aligned; stack writing `'Noto Sans, Noto Sans TC, sans-serif'`. No receiving slot and no delegation (A2, A3). |
| §13 페르소나 3인 (이름·나이·도시 포함) | Deleted. The source's own header labels them fictional archetypes informed by publicly observable Portaly user segments, not individual people. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or affiliation classifications (D2, D2a). |
| YAML `[FILL IN]` | Not present in the source. Nothing to omit at a placeholder boundary. |
| Template / catalog-boilerplate `ease-enter` / `ease-exit` / `ease-standard` cubic-bezier values | Omitted as unattributed curves. Names and uses kept. See Omitted unattributed curves (E2b). |

§9 deletion check (A3). Every value the construction prompts name was confirmed present elsewhere in the portable body before the section was dropped. Primary CTA plum `#862983` — Semantic color / Primary (Join Now). Brand accent teal `#00a6a3` / `#12a3a0` — Semantic color / Feature Check. Hero gradient `#6e28af → #ac8ffe` — Semantic color / Hero Ghost. Signature gradient `#bb53b9 → #00a6a3` — Semantic color. Nav / ink navy `#0c2340` — Semantic color / Nav Link. Body `#333333` / headings `#000000` — Semantic color. Muted `#969696` — Semantic color. Canvas `#f8f8f8` / Surface `#ffffff` — Semantic color. Hairline `#d9d9d9` — Semantic color. Hero 50px Noto Sans weight 800, line-height 1.38, letter-spacing 1px, white — Type roles + Hero Ghost surface note. Subhead 20px weight 400 white — Type roles + hero-band keep-apart. White outline pill: transparent bg, 2px solid `#ffffff`, 9999px, 14px 70px, 28px weight 600, 'Start for free' — Hero Ghost. Pricing plan card white `#ffffff`, 12px, `rgba(99,99,99,0.2) 0px 2px 8px`, no border, on `#f8f8f8` — Pricing Plan Card. Primary CTA `#862983`, white text, 6px, 4px 16px, 16px / 600, 'Join Now' — Primary (Join Now). Feature rows teal `#12a3a0` checkmark — Feature Check. Secondary button white bg, `#862983` text, 1px solid `#862983`, 6px, 16px / 600, 'Start for Free' — Secondary. Creator page: centered mobile column, avatar + handle, full-width white link blocks 6px, 8px 16px, 16px / 600, `rgba(0,0,0,0.05) 0px 1px 2px` — Creator Link Block + Layout. Font stack Noto Sans / Noto Sans TC — Family. Top nav white header, 18px / 600 navy `#0c2340`, magenta `#862983` active, plum 'Join Now' pill 9999px right-aligned — Nav Link. Iteration-guide rules (plum action, teal accent, purple hero, Noto stack, 6/12/20/9999, soft grey card shadow, navy vs `#000000`, canvas under white, hairlines) — Principles + Application rules + Avoid + Foundations.

## Sibling

The source HTML comment names `web/references/portaly/.verification.md`. Direct-path check: the file exists. Brand-issued strings from that file that the portable body must carry are dual-hosted in `DESIGN.md` (A5a): `Drive Social Media Traffic`, `🦞 OpenClaw 安裝手冊`, `經理人專欄`, Product Hunt date `2023-06-05`. Sibling-only computed px that are not in the source DESIGN.md (`14px 63px 14px 70px`, plan-card height `603px`, toggle width `46px`, rounded link-block `12px 48px 12px 96px` / `84px`) stay in this ledger and are not promoted into the portable body. Template-thumbnail gradient examples recorded there are not in YAML `tokens.colors` and are not promoted as Portaly brand tokens. This paragraph names the pointer and the dual-hosted copy classes; it does not re-host dropped persona biographies (E2d, D2a).

## Derived editorial inventory

Portable `DESIGN.md` carries 43 complete B2a qualifications. This table is 43 data rows. Preamble sentences on this page are not portable qualifications.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 `:9` | Inspected URLs as this contract's surfaces; catalog `primary_color` `#862983` beside `tokens.colors.primary`; YAML `tokens.source` as `live-extract`; values stay attached; homepage / pricing / blog / `/cwl` do not rewrite one another's geometry |
| Experience Scope ¶2 `:11` | Bright/optimistic creator-economy rather than utilitarian dev tool; one plum as "the action"; playful energetic lift; friendly and rounded but not extreme; gentle depth; bold-display-over-light-body tension |
| Experience Scope ¶3 `:13` | Founding-and-recognition narrative, including 2022 launch, 2023 / `2023-06-05` generative-AI Product Hunt launch, and the refuse-and-embrace closing, classified as context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the four YAML `use` strings as primary tasks; not from the Personas section |
| Audience `:29` | Dropping the fictional biographies rather than promoting them; carrying no name, age, city, motivation, or affiliation classification; reading source-named groups as audience |
| Distinctive traits `:33` | Groupings and readings of the recorded-value list |
| Principles `:46` | Five numbered items as derived editorial implementation inference; toss-form close |
| Application rules `:56` | Eight Do rules and the reasons attached to them |
| Avoid `:69` | Eight Don't prohibitions and the reasons inside them |
| Semantic color `:86` | Role names from the source's labels; YAML path keep-apart; catalog `#862983` beside `tokens.colors.primary`; teal / teal-alt / teal-soft unmerged; purple-hero / purple-hero-light / swoosh-magenta unmerged; navy / navy-deep / ink-pure unmerged; canvas / surface / surface-alt unmerged; on-primary as a second `#ffffff` key |
| Semantic color keep-apart `:117` | Purple Hero kept on the homepage hero band rather than as a pricing-card fill; Navy Deep kept on creator-page / deeper structural surfaces rather than as `tokens.colors.navy` |
| Spacing `:134` | Unitless steps kept on their own path; unmerged from matching radius keys, type sizes, and padding fields |
| Shape `:147` | Four rounded keys; 16px creator-link variant off `tokens.rounded.lg: 20`; header pill off pricing Join Now `6px` |
| Elevation `:151` | Gentle/friendly/approachable-not-engineered depth rather than a numeric lift scale beyond the two YAML shadows plus hairline |
| Elevation keep-apart `:160` | Card shadow unmerged from block shadow; card stays on pricing plan cards; block stays on creator link blocks |
| Motion `:164` | Duration table and easing names as source-stated rather than computed CSS; cubic-bezier values as unattributed catalog boilerplate |
| Motion signature motions `:180` | light-delight-more-than-a-fintech-tool; never-bouncy-chaos; stable-and-trustworthy |
| Motion reduced-motion `:182` | Reduced-motion line as source-stated register rather than a computed implementation |
| Motion B3 `:184` | Five-kind promotion gate for a further curve; refusal of a partial confirmation; three duration rows and three easing names kept; cubic-bezier unattributed |
| Font evidence `:203` | Evidence-class rows as the source's resolution table, not a published Portaly type specimen; sans and cjk as two YAML keys; quoted stack and §9 quote as two writings; no Portaly-exclusive distributed family; no Portaly font-license notice established |
| Family `:213` | Fallback-and-chain reading; `sans-serif` and `Noto Color Emoji` not presented as a replacement for the YAML family |
| Type roles `:217` | YAML `use` verbatim; §3 Notes as a second writing; lede `400` beside `400-500`; tracking `1` beside `1px` |
| Type roles hero-white `:231` | White 50px ExtraBold and white 20px / 400 kept on the homepage hero band; Feature XL `Turn Traffic into Revenue` kept on the magenta→teal stat strip rather than on the purple hero; `Drive Social Media Traffic` kept on the section-title role |
| Type principles `:235` | Four §3 type principles as source type rules rather than a separately published Portaly type specification |
| Assets favicon `:244` | Google favicon lookup as identity metadata rather than a captured first-party mark |
| Assets photography `:246` | Refusing to replace template thumbnails, phone-mockup shots, or creator-page avatars with invented brand-color decoration |
| Capture / graph `:253` | Preserving the source state contract while the catalog graph is not adopted |
| Capture table characterizations `:267` | §14 wording treated as the source state contract rather than a new treatment sheet |
| Capture / applicability `:269` | Interactive-kind and applicability verdicts and the reason for either; YAML primitive types attached only where the token set records them; not a complete state-coverage claim; named hover deepen and named nav Active not `focus-visible` |
| Primary (Join Now) keep-apart `:290` | Radius `6px` off the 9999px header pill and off Primary Large `20px`; hover deepens plum kept on this control only, not on `focus-visible` |
| Primary Large keep-apart `:316` | Radius `20px` off `tokens.spacing.lg: 20` and off rounded creator-link `16px`; padding `24px 40px` off spacing keys; height `52px` off 32px pricing CTA |
| Secondary keep-apart `:343` | Fill off on-primary; outline off filled Join Now; radius `6px` as a second component sharing the numeral |
| Hero Ghost keep-apart `:370` | Transparent background; missing height omitted; YAML/§4 `14px 70px`; homepage-hero attribution; `9999px` off the header pill as a replacement; `28px / 600` off nav / Primary Large |
| Nav Link keep-apart `:394` | Named Active off `focus-visible`; 9999px header pill off `button-primary` |
| Pricing Plan Card `:417` | Container without deciding interactive-kind (C4); ~538px beside ~540px; radius `12px` off `tokens.spacing.md: 12`; card shadow off block shadow |
| Creator Link Block keep-apart `:436` | Filled 6px / rounded 16px variants; 16px off `tokens.rounded.lg: 20`; YAML `8px 16px` on the filled variant; source §8 `44px+` as the touch-target writing rather than a YAML height; labels `🦞 OpenClaw 安裝手冊` / `經理人專欄`; creator-chosen accent off plum; block shadow off card shadow |
| Billing Switch keep-apart `:460` | Track as hairline; thumb as primary; `9999px` off Hero Ghost / header pill as a replacement; height `24px` off feature size 24 |
| Feature Check `:482` | Non-interactive glyph; teal-alt off teal; map omitted |
| Layout `:487` | Layout behaviors as the source wrote them rather than as a measured cross-viewport specification beyond the named rows; YAML spacing unmerged; Mobile / Tablet / Desktop as source §8 writings |
| Content adjectives `:540` | Voice adjectives and the register reading |
| Content forbidden register `:550` | Forbidden-register list as source-stated §10 rather than a separately published microcopy specification |
| Content samples `:561` | Live samples as verbatim live strings, including `Drive Social Media Traffic`, `🦞 OpenClaw 安裝手冊`, and `經理人專欄`; creator-page Traditional-Chinese examples as recorded product surface |
| Recorded unresolved decisions `:595` | List as a catalog of source-named unresolved writings, not coverage of domains the source never named |

## Proof notes

- No `verification_v2` block in the source frontmatter.
- `components_harvested: true`
- `tokens.source: live-extract` is ledger metadata as the colon form. Value `live-extract` is dual portable Scope + this ledger (E2a).
- Catalog Google s2 favicon URL is this identity ledger only. Portable Assets names type `favicon` and Google favicon lookup / non-promotion without the URL (E1).
- Uncaptured hover fill (except YAML `hover deepens plum` on `button-primary`) / focus-visible chrome are omitted. They are not `not-applicable` for want of a capture; applicability follows control meaning. State coverage is not claimed complete.
- Named hover deepen on `button-primary` and named Active magenta on nav are additional named-source-states, not `focus-visible` treatment evidence (B1).
- YAML primitive types preserved: `Primitive type: button` on Primary / Primary Large / Secondary / Hero Ghost; `Primitive type: tab` on Nav Link; `Primitive type: card` on Pricing Plan Card and Creator Link Block; `Primitive type: toggle` on Billing Switch; `Primitive type: badge` on Feature Check (A1b). The "Join Now" header pill has no primitive type.
- C4 omit-kind set: Pricing Plan Card. YAML records `type: card` and no interactive-kind.
- Destination CTAs / nav tab / link-block / billing toggle omit loading/error/success because they commit no operation in place (C2 v10). `not captured` is not the reason (C1).
- Source §13 fictional archetypes are deleted, not Audience, not primary tasks, and not re-hosted as demographics here (D2, D2a).
- The B3 five-kind per-component computed gate is Foundations Motion in full text (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate”). Named gaps lists those five kinds in inventory form; it is not the B3 full promotion-gate sentence (E2c).
- Source §9 Agent Prompt Guide brand constraints are in Experience / Foundations / Components / Layout; the prompt wrapper is deleted. No `omd-apply` / `npx omd` in the portable body.
- Source YAML has no `ds.type` and no `verification_v2.schema`; none invented.
- No separately published Portaly UI specification is named as a component system, so every derived-editorial close uses the toss-form `not Portaly-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석).

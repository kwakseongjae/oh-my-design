# PicCollage provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/piccollage/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | piccollage |
| name | PicCollage |
| country | US |
| category | consumer-tech |
| homepage | `https://piccollage.com` |
| primary_color | `#4FC3C4` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=piccollage.com&sz=256` |
| omd format (source) | 0.1 |
| verified | 2026-06-03 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here (`#4FC3C4`), and Foundations / components in `DESIGN.md` (YAML `tokens.colors.primary` `#4fc3c4` beside §2 `#4FC3C4`). The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. That is an identity pointer, not a PicCollage-hosted brand file.

Token source from YAML, kept as ledger metadata: `tokens.source: prose-derived`, `tokens.extracted: 2026-06-09`. The portable body names the inspected homepage HTML, the named CSS bundle, the company page, and the Play listing as the inspected sources; it does not rewrite `prose-derived` as `live-extract`.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-03 |
| tokens.extracted | 2026-06-09 |
| Tier 1 live inspect (source footer) | 2026-06-03 |
| sibling inspect | 2026-06-03 |

The source footer records the verification verbatim as **Verified:** 2026-06-03. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | product homepage | `https://piccollage.com` | 2026-06-03 |
| css | main CSS bundle | `https://pic-collage-mczsmo7tt-piccollage.vercel.app/_next/static/chunks/0w52i878~_fa~.css` | 2026-06-03 |
| company | company page | `https://piccollage.com/company` | 2026-06-03 |
| play | Google Play listing | `https://play.google.com/store/apps/details?id=com.cardinalblue.piccollage.google` | 2026-06-03 |

### Tier 1 (as listed in the source footer)

- `https://piccollage.com` (homepage HTML + inline styles)
- `https://pic-collage-mczsmo7tt-piccollage.vercel.app/_next/static/chunks/0w52i878~_fa~.css` (main CSS bundle with full `--color-pic-*` token scale)
- `https://piccollage.com/company` (company page HTML with brand mission copy)
- `https://play.google.com/store/apps/details?id=com.cardinalblue.piccollage.google` (Google Play listing — Cardinal Blue Software, Inc.)

### Tier 2

- getdesign.md/piccollage — 0 DESIGN.md files (no data)
- refero ?q=PicCollage — JS-only SPA, no results returned

Tier 2 data was not used to establish any token or component value.

## Token source (YAML `tokens.source`)

The source frontmatter records `tokens.source: prose-derived` and `tokens.extracted: 2026-06-09`. That producer string is ledger metadata. The portable body attaches tokens to the homepage HTML, the named CSS bundle, the company page (mission copy), and the Play listing (developer identity) rather than renaming the source class.

## Sibling handling (`web/references/piccollage/.verification.md`)

The sibling exists — confirmed with `find web/references/piccollage -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-03. Method: raw source-file fetch (homepage HTML + main CSS bundle + company page HTML + Google Play listing).
- Homepage HTML 715 KB; CSS bundle 98 KB; company page HTML 68 KB; Google Play listing 1.2 MB.
- piccollage.com inline style — mobile sticky CTA: `background-color:#4FC3C4; height:44px; border-radius:30px; box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.10)`
- piccollage.com inline style — hero heading: `font-family:Zilla Slab; font-size:60px; line-height:67px; font-weight:600; color:white; text-shadow:0px 0px 10px #AB7624`
- piccollage.com inline style — hero section background: `background-color:#FBF2EB; overflow:hidden`
- piccollage.com inline style — feature gradient heading: `background:linear-gradient(87.36deg, #8235B8 -9.23%, #974DCB 16.56%, #EF4967 73.21%, #EE604D 91.93%); font-size:36px; font-weight:bold`
- CSS bundle `--color-pic-*` samples: `--color-pic-teal-200:#b7e1da; --color-pic-teal-300:#7ad2c3; --color-pic-teal-500:#2db59e; --color-pic-beige-50:#f5f4ef; --color-pic-beige-100:#ece9df; --color-pic-gray-850:#292929; --color-pic-pink-500:#f85482; --color-pic-yellow-400:#ffcf3d`
- CSS bundle — nav bar shadow: `shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)]`; nav bg class: `bg-pic-beige-50` = `#f5f4ef`
- CSS bundle — card shadow: `box-shadow:0px 0px 12px 0px #E8E8E8` (from Tailwind utility)
- CSS bundle — footer section class: `bg-pic-teal-300` = `#7ad2c3`
- CSS bundle — nav button class: `bg-pic-teal-200 border-[1.5px] border-pic-teal-500 text-pic-gray-850 h-8 px-3 text-14 rounded-full`; resolves to `bg:#b7e1da border:1.5px solid #2db59e text:#292929 height:32px padding:8px 12px font-size:14px radius:9999px`
- CSS bundle — transition: `transition-duration: 200ms; transition-timing-function: ease-in-out` on color-changing elements; reveal animation: `0.7s cubic-bezier(.22,1,.36,1) both reveal-from-rect`
- piccollage.com/company inline style — product card background gradient: `background:linear-gradient(180deg, #604BB6 0%, #7B2E8E 100%)`
- Google Play listing — developer name: `Cardinal Blue Software, Inc.`; rating: 4.8 stars from 1.82M reviews; 100M+ Downloads
- country: US; parent company Cardinal Blue Software, Inc. headquartered in Taipei, Taiwan
- getdesign.md/piccollage page: "No designs found for piccollage"

### Sibling-only strings (not promoted into `DESIGN.md`)

These values appear in the sibling and not in the visible source body. They stay on this ledger. They are not portable facts.

- Company-page product-card gradient `linear-gradient(180deg, #604BB6 0%, #7B2E8E 100%)`
- Google Play rating `4.8 stars from 1.82M reviews` and `100M+ Downloads`
- CSS custom-property names `--color-pic-teal-200`, `--color-pic-teal-300`, `--color-pic-teal-500`, `--color-pic-beige-50`, `--color-pic-beige-100`, `--color-pic-gray-850`, `--color-pic-pink-500`, `--color-pic-yellow-400`
- Tailwind class strings `shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)]`, `bg-pic-beige-50`, `bg-pic-teal-300`, `bg-pic-teal-200 border-[1.5px] border-pic-teal-500 text-pic-gray-850 h-8 px-3 text-14 rounded-full`
- File sizes 715 KB / 98 KB / 68 KB / 1.2 MB
- Hero `overflow:hidden`
- Reveal fill-mode `both` in `0.7s cubic-bezier(.22,1,.36,1) both reveal-from-rect`
- getdesign.md miss-page sentence `No designs found for piccollage`

Values the sibling shares with the source body (corroboration, not new portable facts): `#4FC3C4`, 44px sticky height, 30px sticky radius, `0px 0px 10px 0px rgba(0, 0, 0, 0.10)`, Zilla Slab 60px / 67px / 600, text-shadow `#AB7624`, `#FBF2EB`, the 87.36deg gradient, `#b7e1da` / `#7ad2c3` / `#2db59e` / `#f5f4ef` / `#ece9df` / `#292929` / `#f85482` / `#ffcf3d`, nav shadow, `#E8E8E8` card shadow, nav button 32px / `8px 12px` / 9999px, 200ms ease-in-out, `reveal-from-rect`, Cardinal Blue Software, Inc., Taipei.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary | home sticky / primary CTA `#4fc3c4` |
| tokens.colors.teal-nav | home nav Download fill `#b7e1da` |
| tokens.colors.teal-footer | home footer `#7ad2c3` |
| tokens.colors.teal-border | nav / teal button border `#2db59e` |
| tokens.colors.hero-bg | home hero `#fbf2eb` |
| tokens.colors.nav-bg | home nav `#f5f4ef` |
| tokens.colors.surface | icon-button fill `#ece9df` |
| tokens.colors.surface-hover | hover surface `#e8e4d9` |
| tokens.colors.divider | borders / dividers `#d9d2bf` |
| tokens.colors.body | primary text `#292929` |
| tokens.colors.body-secondary | secondary / nav labels `#4d4d4d` |
| tokens.colors.accent-pink | sticker/badge `#f85482` |
| tokens.colors.accent-yellow | festive highlight `#ffcf3d` |
| tokens.colors.gradient-1 / gradient-2 / gradient-3 / gradient-4 | display heading stops |
| tokens.colors.on-primary | text on teal `#ffffff` |
| tokens.typography.family.sans | Poppins |
| tokens.typography.family.display | Zilla Slab |
| tokens.typography.display | 60 / 600 / 1.12 — Marketing hero headline (Zilla Slab) |
| tokens.typography.section-title | 36 / 700 — Feature card / section headline (desktop) |
| tokens.typography.sub-headline | 25 / 500 / 1.4 — Hero tagline / sub-headline |
| tokens.typography.body | 18 / 400 — Feature descriptions, body copy |
| tokens.typography.label | 14 / 500 / tracking -0.28 — UI label, nav button |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 |
| tokens.rounded.sm / md / lg / full | 4 / 8 / 16 / 9999 |
| tokens.shadow.ambient | `rgba(0,0,0,0.08) 0px 2px 12px` |
| tokens.shadow.card | `rgba(0,0,0,0.10) 0px 0px 12px` |
| tokens.shadow.thumbnail | `rgba(0,0,0,0.15) 0px 0px 8px` |
| tokens.components.button-primary | App download / sticky CTA |
| tokens.components.button-nav | Nav Download button, 1.5px #2db59e border |
| tokens.components.icon-button | Toolbar / nav icon button, 1.5px #d9d2bf border |
| tokens.components.nav-item | Nav menu item |
| tokens.components.card | Feature panel, 2px #e8e4d9 border, soft shadow |
| tokens.components.thumbnail | Collage thumbnail, soft drop shadow |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 4인 (이름·나이·동기·소속 분류 포함) | Deleted. The source's own header labels them illustrative archetypes inferred from brand copy, user reviews, and app-store description, not from first-party research. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, motivations, or affiliation classifications (D2, D2a). |
| §9 Agent Prompt Guide — construction prompts | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components / Experience / Content. The §9-only sentences that land elsewhere: the 87.36deg gradient with stops; Avoid items dark overlays and serif body text; Tone never clinical. |
| §15 unmeasured thumbnail scale as a token | Not promoted. The source's own "not measured explicitly; follow standard `scale(1.02)` at 200ms" sentence is kept in Foundations motion as that unmeasured note. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Warm cream `#FBF2EB` canvas, teal `#4FC3C4` primary CTA, beige-family surfaces — Semantic color + Application rules. Zilla Slab 600 for hero headline only; Poppins 500/400 for all other text — Family + Type roles. Buttons fully rounded pills (radius 30px–9999px); primary = `#4FC3C4` bg + white text; secondary = `#b7e1da` bg + 1.5px `#2db59e` border + `#292929` text — Application rules + Primary CTA + Nav Download. Cards radius 16px, soft shadow `0px 0px 12px #E8E8E8`, 2px beige border `#e8e4d9` — Feature Card. Shadows diffuse only — Elevation. Gradient `linear-gradient(87.36deg, #8235B8 -9.23%, #974DCB 16.56%, #EF4967 73.21%, #EE604D 91.93%)` — Semantic color. Tone warm, celebratory, encouraging; short sentences with exclamation energy; never clinical — Content. Avoid sharp corners, dark overlays, hard shadows, serif body text — Avoid.

## Derived editorial inventory

Portable `DESIGN.md` carries 32 complete B2a qualifications. This table is 32 data rows. Preamble sentences on this page are not portable qualifications.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Four named pages as this contract's inspected sources; prose-derived token-set bound beside the footer live inspect; values stay attached; company page as brand-mission source and Play listing as developer-identity source rather than extra computed-token sheets |
| Experience Scope `:11` | Atmosphere readings (textured scrapbook paper; teal energetic without being aggressive; type mix as crafted and accessible; gradient as celebratory, multicolour spirit; register as a creative friend's studio) |
| Experience Scope `:13` | Founding-and-mission narrative as context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the three recorded surfaces and controls as primary tasks; not from the persona section |
| Audience `:28` | Biography-drop (no name, age, motivation, or affiliation classification); group-level 270 million users worldwide, users who wanted to tell stories with multiple photos, Asia and North America, first-time creators |
| Distinctive traits `:32` | Grouping the recorded values as the distinctive layer |
| Principles `:43` | The five numbered items and their UI implications |
| Application rules `:53` | The seven Do rules and the reasons attached |
| Avoid `:65` | The six Don't rules plus the two §9-only Avoid items, and the reasons inside them |
| Foundations Semantic color `:82` | Role names from the source's labels; YAML lowercase beside §2 mixed-case; `#ffffff` on-primary unmerged from Feature Card fill; `#e8e4d9` unmerged across surface-hover / card border / icon hover; `#ece9df` unmerged; `#292929` unmerged; `#4d4d4d` unmerged; four gradient keys unmerged from the §2 chain and the §9 `linear-gradient` writing |
| Foundations Semantic color `:119` | Four non-YAML hex writings (skeleton `#e2ddcf`; error-network `#f19daf`; Focus visible `#298e7d`; display text-shadow `#AB7624`) classified as surface-contract / §3 records rather than as extra `tokens.colors` keys |
| Foundations Spacing `:136` | Unitless steps unmerged from matching radii, type sizes, sticky `bottom: 24px`, nav-download 32px, and mobile hero 32px; `96px` kept off the YAML scale |
| Foundations Shape `:149` | `sm: 4` / `md: 8` / `lg: 16` / `full: 9999` unmerged; sticky CTA `30px` beside YAML `9999`; card `16px` local rather than universal |
| Foundations Elevation `:153` | YAML three keys, §6 five-level table, overlay tint, and sticky-CTA 10px shadow unmerged; stack as soft and diffused rather than hard |
| Foundations Motion `:176` | Duration table, named easings, cubic-bezier, drawer translate, reduced-motion, and canvas rule as source-stated rather than a separately published motion specification; §14 Success confetti 0.7s kept beside §15 700ms |
| Motion B3 `:204` | Five-kind promotion gate; per-component computed observation of all five kinds before any later promotion; partial confirmation insufficient; `scale(1.02)` kept as an unmeasured note rather than as a token |
| Typography Font-evidence wrap `:212` | Evidence-class sorting; Zilla Slab as marketing-hero display; Poppins as body/product; official-use as no published type token; official distributed as no exclusive family in this pass; licence as a missing notice; typography beyond the inspected homepage HTML, named CSS bundle, and company-page HTML as outside this contract; system-font substitute refused |
| Typography Official product-use `:216` | "No published type token"; no separately issued type specimen |
| Typography Family `:228` | Fallback prohibition; Zilla Slab reserved for the marketing hero only |
| Type roles `:232` | YAML unitless ratios kept; YAML use and §3 notes both kept; display `60` / section-title `36` / sub-headline `25` / body `18` / label `14` unmerged from spacing and from the mobile section-headline 25px writing; §8 hero-headline 32px kept on Layout rather than as a replacement for display 60 / 67px |
| Assets `:252` | Google s2 slug as identity pointer; first-party collage imagery not replaced |
| Components Capture record `:270` | Source state contract kept rather than delegated to an unadopted catalog graph; role-based decision procedure; kind and applicability verdicts; YAML primitive type attached only when recorded; generic Focus not treated as focus-visible; this source's named Focus visible outline stays on the capture record and is not copied onto Core focus-visible table rows; not a complete state-coverage claim |
| Primary CTA `:298` | 294px / 44px / 10px shadow / `30px` as this sticky control's geometry; YAML `9999` beside §4 `30px`; `bottom: 24px` kept on Layout |
| Nav Download `:328` | 32px / `8px 12px` as this button's geometry; `#292929` fg unmerged from `tokens.colors.body` |
| Icon Button `:354` | 44×44 as this control's geometry; `#ece9df` default and `#e8e4d9` hover unmerged from the color keys |
| Nav Menu Item `:380` | `#4d4d4d` fg and `8px 12px` as this tab's geometry rather than as those YAML spacing or secondary-text keys |
| Card / Feature Panel `:404` | YAML `tokens.shadow.card` beside `#E8E8E8`; 16px radius as this panel's radius and `tokens.rounded.lg: 16` rather than `tokens.spacing.base: 16`; `#ffffff` fill as this card's `bg` rather than `tokens.colors.on-primary` |
| Collage Thumbnail `:415` | YAML `tokens.shadow.thumbnail` kept beside the §4 ordering rather than choosing one as a replacement |
| Layout `:430` | Recorded measurements of the inspected homepage rather than a specification invented on top of them; three footer-height writings kept; editor-panel 690px and hero 622px kept in both §5 and §8; sticky `bottom: 24px` off `tokens.spacing.lg: 24`; < 640px hero headline 32px off `tokens.spacing.xl: 32`; `md:px-[71px]` off the YAML spacing scale |
| Content voice `:460` | Public voice rather than a separately published microcopy guide; §9 tone line kept beside the §10 register; Do/Don't table as this public-voice record |
| Voice samples `:480` | Five illustrative lines rather than a complete microcopy guide; mission and company taglines as published strings rather than as a primary task |
| Named gaps `:514` | Named gaps rather than a domain inventory; unnamed values rather than permissions to invent |

No published first-party UI specification is named in the source, so every derived-editorial close uses the toss-form `not PicCollage-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석).

## Proof notes

- verification metadata from the source footer: **Verified:** 2026-06-03; Tier 1 four URLs; Tier 2 empty; Conflicts unresolved: none
- components_harvested: true
- Interaction expansions are not recorded in this packet
- Uncaptured hover treatments on the sticky CTA, Nav Download, and Nav Menu Item are omitted. They are not `not-applicable`; applicability follows control meaning. The icon-button hover fill `#e8e4d9` is captured. State coverage is not claimed complete
- Official founding facts and the company-page mission copy are narrative context, not extra token sources, except where the source DESIGN.md itself records a value

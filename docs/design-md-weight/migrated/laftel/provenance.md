# Laftel provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/laftel/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | laftel |
| name | Laftel |
| country | KR |
| category | consumer-tech |
| homepage | `https://laftel.net` |
| primary_color | `#816BFF` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=laftel.net&sz=256` |
| omd format (source) | 0.1 |
| verified | 2026-06-03 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and the inspected public homepage `https://laftel.net` is the portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations purple / the primary CTA in `DESIGN.md`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. That is an identity pointer, not a Laftel-hosted brand file.

**Token note** (source frontmatter, kept here): `tokens.source: prose-derived`. Values were taken from homepage HTML custom properties and the styled-components chunk named in the source footer, then written as prose.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-03 |
| tokens.extracted | 2026-06-09 |
| surfaces inspected | 2026-06-03 |
| sources captured | 2026-06-03 |

The source footer records the verification verbatim as **Verified:** 2026-06-03. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | product-surface | `https://laftel.net` | 2026-06-03 |
| app-store | brand-copy | `https://apps.apple.com/kr/app/라프텔/id1169440095` | 2026-06-03 |

### Tier 1 (as listed in the source footer)

- `https://laftel.net` (homepage HTML — full CSS custom properties block in inline `<style>`)
- `https://laftel.net/_next/static/chunks/b3ccd441-eef37a2225571c0d.js` (styled-components button/badge/nav definitions, full PURPLE scale, font scale)
- `https://laftel.net/_next/static/css/4e57b743a29280e8.css` (Pretendard font import)
- `https://apps.apple.com/kr/app/라프텔/id1169440095` (App Store listing, brand copy)

### Tier 2

- getdesign.md/laftel — NOT LISTED ("No designs found for 'laftel'").
- refero ?q=Laftel — no result (page returned empty listing, 4201 bytes).

Tier 2 data was not used to establish any token or component value. The source names both lookups; they stay as Named gaps of unnamed records, not as new product domains.

## Sibling handling (`web/references/laftel/.verification.md`)

The sibling exists — confirmed with `find web/references/laftel -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-03. Method: raw source-file fetch (homepage HTML + CSS bundles + JS styled-components chunk).
- Homepage HTML 67 501 bytes; simplebar CSS `362d5636d1faf962.css` 2 898 bytes; Pretendard+slick CSS `4e57b743a29280e8.css` 3 603 bytes; JS chunk `b3ccd441-eef37a2225571c0d.js` 363 246 bytes.
- Custom properties: `--foreground-slight:#816BFF` (light mode), `--background-highlight:#F0EDFF`, `--button-slight-1:#F0EDFF`, `--button-slight-2:#D9D3FF`, `--button-purple-gray:#191B2A`, `--background-toast:#000000` (light) / `#242537` (dark), `--foreground-1:#121212` (light) / `#F7F7F7` (dark)
- `.ghsWCp`: `background:#816BFF; border-radius:50%; height:1.0625rem; font-size:0.625rem; font-weight:700; color:#FFFFFF`
- `.gaokQc` (Toast): `border-radius:0.25rem; padding:1rem 0.75rem; background-color:var(--background-toast); font-size:0.875rem; min-height:3rem; transition:opacity 0.2s ease,transform 0.2s ease`
- `.ksUJkh` (NavBar): `height:4rem; padding:0 3.125rem; color:#FFFFFF` + `scrollbar-thumb border-radius:8px`
- lJ color map extras not in the visible source body: `PURPLE200:"#C0B5FF"`, `PURPLE300:"#A797FF"`, `PURPLE400:"#9481FF"`, `PURPLE600:"#7963FF"`, `PURPLE800:"#644EFF"`, `PURPLE900:"#513CFF"`
- Gray map: `DARKGRAY900:"18, 18, 18"` (#121212), `DARKGRAY800:"50, 50, 50"` (#323232), `PURPLEGRAY800:"36, 37, 55"` (#242537), `PURPLEGRAY900:"25, 27, 42"` (#191B2A); `RED300:"241, 99, 97"` (#F16361), `RED500:"255, 16, 16"` (#FF1010)
- Button lK primary: background PURPLE500 `#816BFF`; hover PURPLE700 `#6E58FF`; disabled `buttonDisable` `#EEEEEE`, `foregroundDisable` `#D0D0D0`
- Button sizes: sm `height:hO(48)=48px; font-size:hO(16)=16px; padding-left:hO(20)=20px`; md `height:hO(56)=56px; font-size:hO(18)=18px; padding-left:hO(18)=18px`
- Button base: `border-radius:hO(4)=4px; font-weight:700; border:none`
- fontSize.web: `{"title-xxl":40,"title-xl":32,"title-l":28,"title-m":24,"title-s":20,"text-l":18,"text-m":16,"text-s":14,"text-xs":13,"text-xxs":12}`
- Pretendard import: `@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css")`
- Skeleton animation name `ganiTH` 1.5s infinite linear; spinner `.hxIXDd` `stroke-dasharray:22.51...px,90.05...px`; animation name `hpaRNO` 1.4s ease-in-out infinite
- HTML `<title>`: "라프텔 - 애니 추천 · 애니 스트리밍 · 애니 굿즈"; `og:site_name="Laftel"`; `og:image="https://static.laftel.net/og_image_1200x1200.png"`; `html lang="ko"`
- Fuller font-family declaration than the source body: `Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,'Helvetica Neue','Segoe UI','Apple SD Gothic Neo','Noto Sans KR',...,sans-serif!important`
- Country note: parent company Aniplus (애니플러스) HQ: Seoul, Korea

Sibling-only strings stay here. They are inspect context, not portable-body use.

## Capture selectors

The source HTML comment / footer records the live inspect, not `data-omd-capture` pointers. Pointers below are the source’s own surface + control names.

| Component | Pointer |
|---|---|
| Primary CTA (md / sm) | homepage styled-components button lK / lq |
| Slight (secondary) | homepage slight button; also the network-error retry |
| Disabled action | homepage disabled button (`buttonDisable` / `foregroundDisable` in the sibling chunk) |
| Desktop Nav | `.ksUJkh` |
| Notification Badge | `.ghsWCp` |
| Default Toast | `.gaokQc` |
| Spinner / skeleton | `.hxIXDd` / shimmer tiles in the homepage inline `<style>` |

## Proof notes

- Four named Tier 1 sources, recorded 2026-06-03. Homepage HTML + JS chunk + CSS bundle are the token surfaces; the App Store listing is brand copy.
- `components_harvested: true`; seven component records in the source token set.
- `tokens.source: prose-derived`.
- Uncaptured focus-visible treatments are omitted as values; they are not turned into `not-applicable` for that reason. Applicability follows control role. State coverage is not claimed complete.
- Laftel has no published first-party UI specification in the source. Derived-editorial qualifications therefore close with the toss-form example: not Laftel-authored or a separately published UI specification (rulebook v12 B2a 전제 주석).
- October 2014 founding, the name play on "마지막 화까지 봤다" — enshrining the complete, satisfying anime experience in the brand itself; May 2017 streaming launch; 2019 Ridi as Korea's leading digital content platform bringing engineering scale and content licensing resources; November 2022 Aniplus-led 87.75 % stake (Korea’s largest anime broadcaster) giving Laftel deeper ties to broadcast rights and a clearer path to simulcast programming; SVOD / TVOD / AVOD; anime merchandise and ambitions beyond licensing; and the legal-over-piracy mission sentence are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.

## Claim ledger

Claims use the homepage inspect (home / home-live / prose-derived from CSS+JS / 2026-06-03) unless noted.

| claim | surface |
|---|---|
| tokens.colors.primary / primary-hover / brand / canvas / foreground / muted / surface / hairline / accent-wash / error / on-primary | home |
| tokens.typography.family.sans / mono | home |
| tokens.typography.title-xxl … text-xxs (size / weight / lineHeight / use) | home |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl | home |
| tokens.rounded.sm / md / lg / full | home |
| tokens.shadow.none | home |
| tokens.components.button-primary.* | home |
| tokens.components.button-primary-sm.* | home |
| tokens.components.button-slight.* | home |
| tokens.components.button-disabled.* | home |
| tokens.components.nav-bar.* | home |
| tokens.components.badge-notification.* | home |
| tokens.components.toast.* | home |
| App Store tagline "세상 모든 애니를 라프텔에서 :D" | app-store |

## §9 deletion check

§9 Agent Prompt Guide was deleted as tool-facing restatement. Each unique brand constraint it names was checked against the portable body before deletion (A2, A3):

| §9 item | Portable landing |
|---|---|
| primary `#816BFF` | Foundations Purple 500 + Primary CTA |
| slight surface `#F0EDFF` | Foundations Purple 50 + Slight button |
| deep dark `#121212` | Foundations Background 1 (Dark) / Foreground 1 (Light) |
| toast dark `#242537` | Foundations Purple Gray 800 + Default Toast |
| Buttons 4px / 48px sm / 56px md / 700 / Pretendard | Primary CTA sm/md + Family |
| Mode: light and dark via CSS custom properties | Application rules + dual-mode color pairs |
| Typography Pretendard, 16px base, scale 12/13/14/16/18/20/24/28/32/40 | Type roles + Family |
| colour 0.4s, opacity/transform 0.2s ease | Foundations Motion |
| Skeleton shimmer 1.5s linear infinite | Elevation + Motion + Capture record |
| breakpoints 480/768/1024/1280; padding 50px desktop | Layout & Platforms |

## Omission ledger

| Location | Disposition |
|---|---|
| §13 Personas — 4 illustrative archetypes (name, age, city included) | Deleted. Not promoted into Audience or `primary-tasks`, and not re-hosted here. This row names the source section and the field kinds only (D2, D2a). Identifier strings are not copied into this file. |
| `[FILL IN]` wrappers | Source count 0. None omitted, none rewritten. |

Mention of that section as a deletion is a disposition pointer, not a reuse of the biographies.

## B2a ledger (portable-body qualifications)

Each row is one derived-editorial qualification that also appears adjacent in `DESIGN.md`. This ledger does not add a second interpretation; it records the same class. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`). This table has as many data rows as that count (E1 1:1). The same lines also carry `not Laftel-authored` and `separately published UI specification`.

| Location | Qualified reading |
|---|---|
| Experience — Scope ¶1 | Treating `https://laftel.net` as this contract's token surface, the App Store listing as copy rather than as a token surface, and the named clients and Store as availability rather than as captured UI |
| Experience — Scope ¶2 | Calling the recorded layer a dark-first entertainment shell, a premium streaming dashboard, otaku-authentic, punchy and youthful, or a UI in which colour frames content |
| Experience — Scope ¶3 | Classifying the founding-and-ownership narrative as context that does not by itself supply interface tokens |
| Experience — Primary tasks | Selecting the three surface-or-control tasks; they do not come from the persona section |
| Experience — Audience | Reading the source-named groups as audience, and dropping archetype biographies rather than promoting them |
| Experience — Distinctive traits | Classifying the list as a restatement of recorded values; grouping the five traits and the readings inside them |
| Experience — Principles | Reading the five source principles and every UI implication as implementation principles |
| Experience — Application rules | Grouping the six Do-list rules and the reasons attached to them |
| Experience — Avoid | Grouping the five Don’t-list prohibitions and the reasons inside them |
| Foundations — Semantic color | Pairing hexes to token-set paths; keep-both on shared hexes and on YAML vs body disabled text; Purple 100 / Purple Gray 900 / Red 500 as body writings that are not YAML `tokens.colors.*` keys; Background 2 unmerged from the light-mode toast fill |
| Foundations — Spacing | Keeping unitless spacing steps on their own keys; keeping 40px off the YAML scale |
| Foundations — Shape | Keeping four rounded keys; keep-both on `50%` / `9999px` / unitless `9999` and on `4px` vs spacing `4` |
| Foundations — Elevation | Keeping YAML `"none"` on its own key rather than flattening it over the §6 treatments |
| Foundations — Motion | Holding recorded CSS motion, omitting reduced-motion, and holding the five-kind promotion gate; cubic-bezier beside CSS `ease` as that keyword's expansion, not a separate brand token |
| Typography — Font evidence | Evidence-class application readings: App Store copy is not a universal type token; Pretendard is the live computed UI family; jsDelivr corroborates the load; no Laftel-exclusive distributed family; named fallbacks remain fallbacks; clients / Store typography stay outside the homepage CSS capture |
| Typography — Family | Keeping `tokens.typography.family.sans` and `tokens.typography.family.mono` as two keys; refusing to present a fallback as the brand face |
| Typography — Type roles | Keeping YAML `use` verbatim; unitless `1.5`; YAML `400` beside the 700-only component-CSS note |
| Typography — Assets | Catalog-boundary reading of the Google s2 favicon slug; thumbnails as first-party catalog content |
| Components — Capture record | Applicability procedure; Kind:non-interactive on badge and toast; loading/error/success closures on desktop nav; YAML `use` as Token-set use beside Role; YAML button-disabled foreground unmerged from body disabled text |
| Layout & Platforms | Treating breakpoints, font-size calcs, the 51.375em hero, the 2-column mobile grid, and the touch rules as the source's own layout contract; keeping ≤1280px and >1280px desktop writings as two records |
| Content & Locales — voice | Calling the register fan-fluent, warm-direct, and quietly authoritative; reading the table as reconstruction direction |
| Content & Locales — samples | Classifying the parenthetical glosses as editorial readings of the samples |
| Governance — Named gaps | Reading the list as unnamed values, not as coverage of domains the source never named |

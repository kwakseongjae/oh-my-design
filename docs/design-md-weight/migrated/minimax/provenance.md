# MiniMax provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/minimax/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | minimax |
| name | MiniMax |
| country | US |
| category | ai |
| homepage | `https://www.minimaxi.com` |
| primary_color | `#000000` |
| logo.type | simpleicons |
| logo.slug | minimax |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and catalog identity plus the M3 dark-action fill in `DESIGN.md`. The simpleicons slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: simpleicons` with slug `minimax`. That is an identity pointer, not a MiniMax-hosted brand file.

Token note from YAML, kept as ledger metadata: `Current public marketing, model-launch, audio-tool, and careers surfaces are named separately; no authenticated product or documentation-chrome token is inferred.`

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |
| sibling checked | 2026-07-13 |

Conflicts unresolved: none. `verification_v2.conflicts` is `[]`.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing | `https://www.minimaxi.com/` | 2026-07-13 |
| m3-launch | product-launch | `https://www.minimaxi.com/models/text/m3` | 2026-07-13 |
| audio-tool | product-tool | `https://www.minimaxi.com/audio` | 2026-07-13 |
| careers | careers-marketing | `https://www.minimaxi.com/careers` | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | `https://www.minimaxi.com/` | 2026-07-13 |
| m3-live | product-surface | `https://www.minimaxi.com/models/text/m3` | 2026-07-13 |
| audio-live | product-surface | `https://www.minimaxi.com/audio` | 2026-07-13 |
| careers-live | product-surface | `https://www.minimaxi.com/careers` | 2026-07-13 |
| misans-asset | brand-asset | `https://filecdn.minimax.chat/public/MiSans-Regular.woff2` | 2026-07-13 |
| minimax-about | official-doc | `https://minimaxi.com/about` | 2026-07-13 |
| platform-models | official-doc | `https://platform.minimaxi.com/docs/guides/models-intro` | 2026-07-13 |
| misans-license | license | `https://hyperos.mi.com/font-download/MiSans%E5%AD%97%E4%BD%93%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E8%AE%B8%E5%8F%AF%E5%8D%8F%E8%AE%AE.pdf` | 2026-07-13 |
| outfit-license | license | `https://github.com/Outfitio/Outfit-Fonts` | 2026-07-13 |

### Tier 1

- `https://www.minimaxi.com/` (public marketing)
- `https://www.minimaxi.com/models/text/m3` (model-launch page)
- `https://www.minimaxi.com/audio` (public audio tool)
- `https://www.minimaxi.com/careers` (careers marketing)
- `https://minimaxi.com/about` (official company context)
- `https://platform.minimaxi.com/docs/guides/models-intro` (official model documentation)
- `https://filecdn.minimax.chat/public/MiSans-Regular.woff2` (loaded MiniMax-hosted font asset)

### Tier 2 (no usable token)

- `https://getdesign.md/minimax` (listing exists; its “bold dark/neon” description conflicts with the current captured public surfaces and supplies no promoted token)
- `https://styles.refero.design/?q=MiniMax` (attempted; current fetch returned an internal error and no usable record)

### Narrative and context sources (not interface tokens)

| URL | Source use recorded by the canonical sibling |
|---|---|
| `https://minimaxi.com/about` | Official current company description: early-2022 founding, “Intelligence with Everyone” mission, proprietary multimodal models, AI-native products, open platform, and stated values. Used for legacy §§1, 10–13; not used as UI-token evidence. |
| `https://www.minimaxi.com/models/text/m3` | First-party product context for the M3 capability framing and launch surface. Used for legacy §§1, 10, and 11; scalar UI values come only from the supplied captured page. |
| `https://platform.minimaxi.com/docs/guides/models-intro` | First-party documentation that separates current model families. Used as narrative/model taxonomy context only; its documentation chrome was not captured and has no tokens here. |
| `https://www.minimaxi.com/careers` | First-party culture wording about technology, product, content, aesthetics, curiosity, and exploration. Used for legacy §§11–13 and its captured careers action/display values; it is not treated as a product-surface component system. |
| `https://www.minimaxi.com/blog/minimax-m3` | First-party release context for M3’s coding, agentic, long-context, and multimodal positioning. Sibling-only URL. Used for narrative context only. Not promoted into the portable body as a token surface. |

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / computed-style / 2026-07-13; `m3` = m3-launch / m3-live / computed-style / 2026-07-13; `audio` = audio-tool / audio-live / computed-style / 2026-07-13; `careers` = careers / careers-live / computed-style / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.canvas | home |
| tokens.colors.ink | home |
| tokens.colors.secondary-text | home |
| tokens.colors.muted | home |
| tokens.colors.surface | home |
| tokens.colors.border | home |
| tokens.colors.action-dark | home |
| tokens.colors.action-on-dark | home |
| tokens.colors.audio-accent | audio |
| tokens.colors.audio-on-accent | audio |
| tokens.typography.family.ui | home |
| tokens.typography.family.display | home |
| tokens.typography.public-body.size / weight / lineHeight / use | home |
| tokens.typography.m3-display.size / weight / lineHeight / use | m3 |
| tokens.typography.careers-display.size / weight / lineHeight / use | careers |
| tokens.spacing.home-action-x | home |
| tokens.spacing.m3-action-x | m3 |
| tokens.spacing.audio-action-x | audio |
| tokens.spacing.careers-action-x | careers |
| tokens.spacing.careers-action-y | careers |
| tokens.rounded.home-action | home |
| tokens.rounded.m3-action | m3 |
| tokens.rounded.audio-action | audio |
| tokens.rounded.careers-action | careers |
| tokens.components.home-light-action.* | home |
| tokens.components.m3-dark-action.* | m3 |
| tokens.components.m3-light-action.* | m3 |
| tokens.components.audio-generate.* | audio |
| tokens.components.careers-primary.* | careers |
| tokens.components.careers-outline.* | careers |

Portable restates the values under Foundations, Typography & Assets, and Components & States.

## Capture selectors

| Component | Pointer |
|---|---|
| Home header light action | `home::[data-omd-capture="16"]` |
| M3 launch paired dark action | `surface-2::[data-omd-capture="20"]` |
| M3 launch paired light action | `surface-2::[data-omd-capture="21"]` |
| Audio-tool generate action | `surface-3::[data-omd-capture="12"]` |
| Careers primary action | `surface-4::[data-omd-capture="18"]` |
| Careers outline action | `surface-4::[data-omd-capture="26"]` |
| M3 display heading | `surface-2::h1` |
| Careers display heading | `surface-4::h1` |

## Token-block strings

YAML color keys: `canvas: "#ffffff"`, `ink: "#18181b"`, `secondary-text: "#45515e"`, `muted: "#86909c"`, `surface: "#f5f5f5"`, `border: "#e5e7eb"`, `action-dark: "#181e25"`, `action-on-dark: "#ffffff"`, `audio-accent: "#7659fa"`, `audio-on-accent: "#f8f8f8"`.

YAML typography: `family: { ui: "MiSans", display: "Outfit" }`; `public-body: { size: 16, weight: 400, lineHeight: "24px", use: "Repeated public home body and navigation context" }`; `m3-display: { size: 78, weight: 600, lineHeight: "85.8px", use: "M3 model-launch hero heading" }`; `careers-display: { size: 60, weight: 700, lineHeight: "60px", use: "Careers-marketing headline" }`.

YAML spacing: `{ home-action-x: 28, m3-action-x: 12, audio-action-x: 20, careers-action-x: 24, careers-action-y: 12 }`.

YAML rounded: `{ home-action: 32, m3-action: 8, audio-action: 100, careers-action: 9999 }`.

YAML components (verbatim `use` / `states` / `type`):

- `home-light-action: { type: button, bg: "#f5f5f5", fg: "#181e25", radius: "32px", padding: "0px 28px", font: "16px / 400 / MiSans", states: "default only; no interaction event or pseudo-state captured", use: "Home marketing header action, selector home::[data-omd-capture=16]" }`
- `m3-dark-action: { type: button, bg: "#000000", fg: "#ffffff", radius: "8px", padding: "0px 12px", font: "14px / 400 / MiSans", states: "default only; no interaction event or pseudo-state captured", use: "M3 launch paired dark action, selector surface-2::[data-omd-capture=20]" }`
- `m3-light-action: { type: button, bg: "#ffffff", fg: "#222222", radius: "8px", padding: "0px 12px", font: "14px / 400 / MiSans", states: "default only; no interaction event or pseudo-state captured", use: "M3 launch paired light action, selector surface-2::[data-omd-capture=21]" }`
- `audio-generate: { type: button, bg: "#7659fa", fg: "#f8f8f8", radius: "100px", padding: "0px 20px", font: "14px / 500 / MiSans", states: "default only; no interaction event or pseudo-state captured", use: "Public audio-tool generate action, selector surface-3::[data-omd-capture=12]" }`
- `careers-primary: { type: button, bg: "#181e25", fg: "#ffffff", radius: "9999px", padding: "12px 24px", font: "14px / 500 / MiSans", states: "default only; no interaction event or pseudo-state captured", use: "Careers-marketing primary action, selector surface-4::[data-omd-capture=18]" }`
- `careers-outline: { type: button, fg: "#18181b", border: "1px solid #18181b", radius: "9999px", padding: "12px 32px", font: "16px / 500 / MiSans", states: "default only; no interaction event or pseudo-state captured", use: "Careers-marketing outline action, selector surface-4::[data-omd-capture=26]" }`

`components_harvested: true`.

## Sibling transcription

Sibling path `web/references/minimax/.verification.md` (dotfile). It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable-body fact that the source body does not already record. Method: supplied deterministic collector evidence (`artifacts/reference-evidence/minimax.json`) plus first-party and Tier 2 built-in web checks. Workflow recorded there: `omd:add-reference` UPDATE. No browser capture was rerun and no MCP session was used.

The supplied artifact records four public desktop surfaces, coverage score 76, 5 component types, 35 component variants, 0 interaction events, and 0 observed states.

### Raw samples (sibling)

| Surface and selector | Computed sample |
|---|---|
| `home::body` | background `rgb(255, 255, 255)` / text `rgb(24, 24, 27)` / MiSans 16px / 400 / 24px |
| `home::[data-omd-capture="16"]` | background `rgb(245, 245, 245)` = `#f5f5f5`; text `rgb(24, 30, 37)` = `#181e25`; radius 32px; padding `0px 28px`; MiSans 16px / 400 / 24px |
| `surface-2::h1` | Outfit 78px / 600 / 85.8px; text `rgb(24, 30, 37)` |
| `surface-2::[data-omd-capture="20"]` | background `rgb(0, 0, 0)` / text `rgb(255, 255, 255)` / radius 8px / padding `0px 12px` / MiSans 14px / 400 / 21px |
| `surface-2::[data-omd-capture="21"]` | background `rgb(255, 255, 255)` / text `rgb(34, 34, 34)` / radius 8px / padding `0px 12px` / MiSans 14px / 400 / 21px |
| `surface-3::[data-omd-capture="12"]` | background `rgb(118, 89, 250)` = `#7659fa`; text `rgb(248, 248, 248)` = `#f8f8f8`; radius 100px; padding `0px 20px`; MiSans 14px / 500 / 28px |
| `surface-4::[data-omd-capture="18"]` | background `rgb(24, 30, 37)` = `#181e25`; text `rgb(255, 255, 255)`; radius 9999px; padding `12px 24px`; MiSans 14px / 500 / 20px |
| `surface-4::[data-omd-capture="26"]` | transparent background / text and border `rgb(24, 24, 27)` = `#18181b`; border 1px; radius 9999px; padding `12px 32px`; MiSans 16px / 500 / 24px |

Sibling-only attachments kept here and not promoted into the portable body: coverage score 76; 5 component types; 35 observed component variants; rgb() writings; M3 dark/light `21px` line-height; audio generate `28px` line-height; careers primary `20px` line-height; careers outline `24px` line-height and transparent background; `surface-2::h1` text `rgb(24, 30, 37)`; JetBrains Mono Google Fonts sources; Xiaomi about-page “free commercial-use” wording; MiniMax research blog URL `https://www.minimaxi.com/blog/minimax-m3`; earlier-claims list naming Poppins and `prose-derived` blue/pink palettes.

### Font evidence (sibling)

| Family | Collector status | Visible first-family use | Resolution |
|---|---|---:|---|
| `MiSans` | loaded / high | 421 | Canonical public UI family |
| `Outfit` | loaded / high | 9 | Canonical public display family only |
| `JetBrains Mono` | loaded / high | 2 | Loaded specialist observation; no reusable product/code token |
| `DM Sans`, Inter, Plus Jakarta Sans, Roboto, Font Awesome faces | declared or system | 0 | Declared/system context only |
| `-apple-system` | system / high | 2 | Audio input fallback observation |

### Conflict matrix (sibling)

| Field | Resolution |
|---|---|
| Public canvas | Keep current selector-backed white canvas; getdesign “bold dark interface with neon accents.” characterization supplies no competing scalar |
| Primary UI family | Keep MiSans for public UI |
| Public display family | Keep display-only Outfit claim |
| Audio action color | Retain as route-local audio action, not global primary |
| Component state variants | Record defaults only; do not invent variants |
| Legacy DM Sans/Poppins/Roboto UI system | Remove stale token and component claims |

**Unresolved:** none.

## Proof notes

- verification_v2 schema 2; conflicts: []
- `tokens.source: reconciled`; `tokens.extracted: 2026-07-13`
- `components_harvested: true`
- Interaction expansions: 0; only default component observations promoted
- Uncaptured hover/focus/pressed/disabled/loading/error/success treatments are omitted as values. They are not `not-applicable` for want of a capture; applicability follows control meaning. State coverage is not claimed complete.
- No published first-party UI specification is named in the source, so every derived-editorial close uses the toss-form `not MiniMax-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석).
- Official about, M3 launch, platform model documentation, and careers pages are narrative context except where the source DESIGN.md itself records a computed value.

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13 as named end-user personas | Source asserts no fictional personas. Audience in the portable body is the four official audience-boundary wordings only. No persona biographies existed to delete. No name, age, or city was present to drop. |
| Source §9 Agent Prompt Guide remaining after color/type/component constraints were moved | Deleted as tool-facing prompt. Brand constraints already live in Foundations, Typography, Components, Experience application rules, and Avoid. Unique §9 sentences that were not already in §7 — do not copy an M3 launch button into the audio tool or careers surface; leave product, documentation, and error-state decisions open — land in Experience Avoid. |
| Unattributed cubic-bezier curves | None in the source. Nothing to delete. Duration and signature-motion statements were not deleted because the source names none to keep; the no-token constraint and the B3 promotion gate stay in portable Motion. |
| Sibling-only computed values listed under Sibling transcription | Ledger only |
| Tier 2 getdesign / Refero lookup detail | Ledger only |
| Legacy H1 `# MiniMax — Design Reference` | Replaced by the Core v2 identity line `# MiniMax Design System`. |

## Derived editorial inventory

Portable `DESIGN.md` carries 25 complete B2a qualifications. This table is 25 data rows. Preamble sentences on this page are not portable qualifications.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Four inspected public URLs as this contract's token surfaces; about page and platform model documentation as named narrative sources that do not supply computed tokens; four surfaces named separately rather than blended into one fictional system |
| Experience Scope `:11` | Characterizations (mostly white, text-led presentation; stable visual thread as not a universal card style or color scale; dense information given room to breathe through simple backgrounds, rounded actions, and clear hierarchy) as source readings, not a published UI specification; hex values, four named routes, and the model-family list beside them are the source's own |
| Experience Scope `:13` | Founding-and-portfolio narrative as context that does not by itself supply interface tokens; each source paragraph’s last sentence kept as one unit; public visual system as reflecting that multi-product posture through a shared neutral web base with deliberately local launch, tool, and careers treatments |
| Primary tasks `:19` | Selecting the four recorded surfaces and controls as primary tasks; not from the audience-boundary list |
| Audience `:29` | Dropping invented individuals; carrying no name, age, city, or affiliation classification beyond the source wordings; reading the four source-named groups as audience |
| Distinctive traits `:33` | Classifying the list as a restatement of source §1 bullets, and the groupings and the readings inside it |
| Principles `:42` | Four numbered stems resting on first-party about, model-documentation, and careers sentences, plus every Reference UI implication as this reference's constrained interpretations of official positioning |
| Application rules `:51` | Four Do rules and the reasons attached to them |
| Avoid `:60` | Don't list plus the §9 brand constraint, and the reasons inside them |
| Foundations Semantic color `:76` | YAML token note kept as the facts it names rather than as a published MiniMax token specification; role names from token-set keys; canvas unmerged from action-on-dark and from m3-light-action background; ink unmerged from action-dark, m3-dark-action background, and m3-light-action text; home-light-action text `#181e25` unmerged from action-dark fill of the same hex; surface kept on the home light header action; audio-accent as audio-tool-local rather than a global brand-primary |
| Foundations Semantic color `:92` | Catalog identity `primary_color` `#000000` unmerged from the M3 launch paired dark-action fill `#000000`; identity field is not a YAML color-role key |
| Foundations Spacing `:96` | YAML unitless spacing steps kept beside the matching §4 / §5 `px` writings; neither writing chosen as a replacement |
| Foundations Spacing `:106` | YAML `12` on two named keys unmerged; outline `32px` unmerged from `tokens.rounded.home-action: 32`; five keys as local action padding rather than a universal spacing scale |
| Foundations Shape `:119` | Four YAML steps as four keys; longer §1 / §4 px writings kept beside them; keys as surface-local action geometry rather than a universal radius scale |
| Foundations Elevation `:123` | Unresolved bound on elevation ladder, card shadow, and hover-lift; old purple glow and broad product-card shadow claims refused |
| Foundations Motion `:129` | Five-kind promotion gate; refusal of a partial confirmation; a match against an official framework or specification document is not that gate; `transition-*` class names refused as a measured motion specification |
| Typography Font evidence `:137` | Evidence-class sorting; live MiSans/Outfit surface-use; JetBrains Mono as specialist rather than a general UI or code token; declared-only faces not UI-family tokens; `-apple-system` as system fallback rather than a MiniMax typeface; licence row as font-context rather than a MiniMax brand kit |
| Typography Family `:154` | UI versus display on MiSans and Outfit; generic-font substitute refused for MiSans; Outfit as public display-family only; JetBrains Mono unpromoted as a general UI or code token |
| Type roles `:158` | YAML unitless sizes kept beside §3 px; YAML `use` verbatim; YAML px lineHeight strings not converted to ratios; YAML `16` unmerged from careers-outline font `16px`; M3 display metrics kept on the M3 launch page |
| Type roles `:166` | Home-header-action font `16px / 400 / MiSans` and careers-outline font `16px / 500 / MiSans` kept on those controls rather than as extra YAML type-role keys |
| Assets `:174` | simpleicons slug as catalog identity pointer rather than a hosted brand file; Xiaomi and Outfit licence facts as font-context rather than a MiniMax brand kit |
| Components Capture record `:185` | Source state contract kept rather than delegated; role-based decision procedure; kind and applicability verdicts; YAML `type: button` attached only on the six token-set keys that record it; YAML `states` kept beside the §4 capitalized writing; not a complete state-coverage claim |
| Layout & Platforms `:356` | 1440×900 as the collector's capture size rather than a breakpoint system; paddings as local action padding rather than a universal spacing scale; four routes as serving different jobs rather than as one application layout |
| Content & Locales `:361` | Source “supports” reading classified as source-grounded service framing rather than a complete product-microcopy guide |
| Governance Recorded unresolved decisions `:406` | List as named values the source already opened, not a list of domains the source never established |

No published first-party UI specification was found; the B2a example form is used as-is.

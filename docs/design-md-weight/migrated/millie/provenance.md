# Millie provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/millie/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | millie |
| name | Millie |
| display_name_kr | 밀리의서재 |
| country | KR |
| category | education |
| homepage | `https://www.millie.co.kr` |
| primary_color | `#242424` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=millie.co.kr&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |
| components_harvested | false |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / Experience in `DESIGN.md`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. That is an identity pointer, not a Millie-hosted brand file.

Token note from YAML, kept as ledger metadata: `Only values with supplied computed-style provenance are machine tokens. The capture did not establish a universal accent color, application state system, or native reader UI.`

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-12 |
| sources captured | 2026-07-12 / 2026-07-13 |
| tokens.extracted | 2026-07-13 |
| sibling checked | 2026-07-13 |

Conflicts unresolved: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product-surface | `https://www.millie.co.kr/` | 2026-07-12 |
| b2b | product-surface | `https://www.millie.co.kr/v4/brand/b2b` | 2026-07-12 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | `https://www.millie.co.kr/` | 2026-07-12 |
| b2b-live | product-surface | `https://www.millie.co.kr/v4/brand/b2b` | 2026-07-12 |
| company-business | official-doc | `https://company.millie.co.kr/business/` | 2026-07-13 |
| anniversary-context | official-doc | `https://10th.millie.co.kr/` | 2026-07-13 |
| careers-context | official-doc | `https://company.millie.co.kr/careers/` | 2026-07-13 |
| pretendard-docs | official-doc | `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md` | 2026-07-13 |
| pretendard-license | license | `https://github.com/orioncactus/pretendard/blob/main/LICENSE` | 2026-07-13 |

### Tier 1

- `https://www.millie.co.kr/`
- `https://www.millie.co.kr/v4/brand/b2b`
- `https://company.millie.co.kr/business/`
- `https://10th.millie.co.kr/`
- `https://company.millie.co.kr/careers/`
- `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md`
- `https://github.com/orioncactus/pretendard/blob/main/LICENSE`

### Tier 2 (no usable record)

- `https://getdesign.md/millie` (attempted via built-in web; internal/safe-open error and no indexed Millie record)
- `https://styles.refero.design/?q=millie` (attempted via built-in web; internal/safe-open error and no indexed Millie style record)

## Claim ledger

Claims use YAML anchors from the source: `both` = home / home-live / live-inspect / 2026-07-12; `b2b` = b2b / b2b-live / live-inspect / 2026-07-12.

| claim | surface |
|---|---|
| tokens.colors.ink | home (`both`) |
| tokens.typography.heading-xl.size / weight / lineHeight / use | b2b |
| tokens.typography.heading.size / weight / lineHeight / use | b2b |
| tokens.colors.canvas | home (`both`) |
| tokens.colors.surface-subtle | home (`both`) |
| tokens.colors.muted | home (`both`) |
| tokens.colors.divider | home (`both`) |
| tokens.typography.family.sans | home (`both`) |
| tokens.typography.body.size / weight / lineHeight / use | home (`both`) |
| tokens.typography.utility.size / weight / lineHeight / use | home (`both`) |
| tokens.rounded.utility-button | home (`both`) |
| tokens.rounded.carousel-pagination | home (`both`) |

## Capture selectors

| Component | Pointer |
|---|---|
| Home utility button | `home::[data-omd-capture="10"]`, class `button__Button-sc-746c0757-0 HMzlI button` |
| Home hero play control | `home::[data-omd-capture="21"]`, class `styled__PlayButtonContainer-sc-aeee1130-0 hNymXJ` |
| Home hero pagination control | `home::[data-omd-capture="22"]`, class `styled__PaginationButtonContainer-sc-b710220-0 bcMcRo` |
| Home hero slide | `home::li`, class `styled__HeroBannerSwiperSlide-sc-e42f00ea-4 gvJwhy` |
| Home skeleton card | `home::div`, class `skeleton__SkeletonCard-sc-3613fd6a-1 gSdwRh`; five occurrences |
| B2B benefit card | `surface-2::li`; three B2B marketing-list occurrences |
| B2B campaign action | `surface-2::[data-omd-capture="1"]`, HubSpot CTA placeholder |

## Sibling transcription

Sibling path `web/references/millie/.verification.md` (dotfile). It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable-body fact that the source body does not already record. Method: supplied deterministic collector evidence (`artifacts/reference-evidence/millie.json`) plus first-party and Tier 2 built-in web checks. No browser capture was rerun and no MCP session was used.

The supplied artifact was captured `2026-07-12T16:32:58.946Z`. It records two public routes, four component types, 26 component variants, zero observed states, zero interaction expansions, `observedStates: 0`, and coverage score 64.

### Raw samples (sibling)

| Surface and selector | Computed sample |
|---|---|
| `home`, `home::[data-omd-capture="10"]` | Compact utility button: `rgb(51, 51, 51)` / `#333333`, `rgb(255, 255, 255)` / `#FFFFFF`, 4px radius, `0px 12px` padding, Pretendard Variable 12px/400/18px. |
| `home`, `home::[data-omd-capture="21"]` | Hero play control: `rgba(0, 0, 0, 0.3)`, 100px radius, 8px padding, Pretendard Variable 16px/400. |
| `home`, `home::[data-omd-capture="22"]` | Hero pagination: `rgba(0, 0, 0, 0.3)`, `#FFFFFF`, 100px radius, `4px 10px` padding, 16px/400/24px. |
| `home`, captured `skeleton__SkeletonCard-sc-3613fd6a-1` | Captured shell: `rgb(247, 247, 247)` / `#F7F7F7`, 16px radius, `45px 24px 30px` padding. No loading event or animation was recorded. |
| `home`, captured body/list specimens | `rgb(36, 36, 36)` / `#242424`, Pretendard Variable 14px/400/24px; the colour has 127 high-confidence text observations across both routes. |
| `surface-2`, captured `h2` | B2B marketing heading: `#242424`, Pretendard Variable 28px/700/38px. |
| `surface-2`, `surface-2::[data-omd-capture="1"]` | B2B campaign CTA: `rgb(254, 240, 140)` / `#FEF08C`, 4px radius, 16px/400/56px, `0px 4px 16px rgba(0,0,0,0.22)` shadow. |

Sibling-only attachments kept here and not promoted into the portable body: artifact timestamp `2026-07-12T16:32:58.946Z`; four component types / 26 component variants / coverage score 64; `rgb(51, 51, 51)` / `rgb(255, 255, 255)` / `rgb(247, 247, 247)` / `rgb(36, 36, 36)` / `rgb(254, 240, 140)` writings; 127 high-confidence text observations; pagination `16px/400/24px` line-height; campaign-action `16px/400/56px` as a sibling font/height cluster.

### Font evidence (sibling)

| Family / claim | Resolution |
|---|---|
| `Pretendard Variable` | 176 visible uses; `loaded` / high confidence; 29 Millie CloudFront subset source URLs; sole `tokens.typography.family.sans` family |
| `Pretendard` | One visible B2B body use; no matching loaded FontFace or source URL; **Unresolved.** Not merged into the UI-family token |
| `__notoSerif_ef2586`, `__notoSerif_Fallback_ef2586`, `icon`, `Pretendard Fallback`, `Pretendard Fallback Android`, `swiper-icons` | Zero visible uses; **Declared-only** |

### Conflict matrix (sibling)

| Field | Resolution |
|---|---|
| Dominant public ink/canvas | Retain observed public values only (`#242424` / `#FFFFFF`) |
| Historic blue CTA and accent palette | Roll back rather than retain plausible legacy tokens |
| Public UI font | Promote Pretendard Variable as sole UI-family token |
| Declared and fallback faces | Keep declared/system/unresolved; do not substitute |
| Legacy inputs, book cards, reader/payment flows, states, motion, shadow scale, and responsive rules | Remove instead of generalising |

### Narrative evidence (sibling)

- Millie company business page: describes the platform as a Korean reading platform with e-books, audio formats, chat books, web novels, and webtoons; it reports service scale as of May 2026, including 240,000 reading-content titles. Used for §§1, 11–13 only, not to derive CSS tokens.
- Millie tenth-anniversary site: says Millie was founded in 2016 and started e-book subscription service, with a current goal of bringing reading into daily life. Used for §§1, 10–12 only; event colour and motion are not product evidence.
- Millie B2B page: explains employer-benefit positioning and its public marketing CTA. Its computed treatment stays route-local B2B evidence only.
- Millie careers page: describes cross-functional company work and public working principles. Used for stakeholder context only.
- Pretendard upstream README and LICENSE: document variable webfont distribution and SIL OFL 1.1. Runtime use is established by the supplied computed family plus FontFaceSet/source evidence, not by these documents alone.

Reconciliation notes from the sibling: the prior reference blended a historical one-surface snapshot with a universal blue CTA system, inferred book and input components, synthetic state/motion specifications, and fictional personas. Those claims were removed because the supplied current capture does not substantiate them. Public home, B2B marketing, official company/anniversary/careers context, and upstream font material are separate evidence domains. No public trust state is claimed here.

## Token-block strings

YAML color keys: `ink: "#242424"`, `canvas: "#FFFFFF"`, `surface-subtle: "#F7F7F7"`, `muted: "#6F6F6F"`, `divider: "#ECECEC"`.

YAML typography: `family.sans: "Pretendard Variable"`; `body: { size: 14, weight: 400, lineHeight: 1.7143, use: "Observed public home body and list text." }`; `heading-xl: { size: 44, weight: 700, lineHeight: 1.2273, use: "Observed public B2B heading specimen." }`; `heading: { size: 28, weight: 700, lineHeight: 1.3571, use: "Observed public B2B section heading specimen." }`; `utility: { size: 12, weight: 400, lineHeight: 1.5, use: "Observed compact home utility button." }`.

YAML rounded: `utility-button: 4`, `carousel-pagination: 100`.

YAML `components: {}`. `components_harvested: false`.

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list stakeholder-group labels as identifiers, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| §13 three first-party stakeholder-group entries | Deleted from the portable body. The source’s own header labels them first-party stakeholder groups, not fictional personas. They are not promoted to Audience or primary-tasks, and are not re-hosted here as group labels, motivations, or affiliation classifications (D2, D2a). No name, age, or city was present to delete. Audience in the portable body uses captured surface names only. |
| §9 Agent Prompt Guide | Deleted as tool-facing prompt. Brand constraints already live in Foundations, Typography, Components, Experience application rules, and Avoid. Unique §9 sentences that were not already in §7 — do not add interaction states; do not use this evidence to generate a signed-in reading or payment flow — land in Experience Avoid. Compact-home-utility and pagination render values named in §9 already live on those component records (A3). |
| Legacy H1 `# Design System Inspiration of Millie (밀리의서재)` | Replaced by the Core v2 identity line `# Millie Design System`. Display name 밀리의서재 stays in Experience Scope. |
| Legacy footer `**Verified:** … / Tier 1 / Tier 2 / Conflicts unresolved` | Moved to Freshness and Sources above. |
| Sibling-only observations listed in Raw samples | Kept in this file. Not promoted into the portable body. |
| §15 curve values | Not present in the source. No curve value to delete. Duration, autoplay, reduced-motion, and transition fields are unnamed. B3 promotion gate stays in Foundations Motion. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Translucent `rgba(0,0,0,0.3)` background, white 16px/400 Pretendard Variable text, 100px radius, and `4px 10px` padding — Home hero pagination control. Compact home utility `#333333`, white 12px/400 text, 4px radius, and `0px 12px` padding — Home utility button. Signed-in reading or payment flow / do not add interaction states — Experience Avoid.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 | Two inspected public URLs as this contract's token surfaces; company, tenth-anniversary, and careers URLs as named narrative sources that do not supply computed tokens; Pretendard upstream material as font-asset and licence evidence rather than Millie runtime proof by itself; values stay attached |
| Experience Scope ¶2 | Quiet and typographic; content imagery as the strongest visible accent; anniversary narrative as helping explain a calm content-led presentation; yellow B2B call to action as route-local rather than a consumer product rule |
| Experience Scope ¶3 | Founding-and-catalogue narrative as context that does not supply interface tokens; each source paragraph's last sentence kept as one unit |
| Primary tasks | Selecting the three recorded surfaces and controls as primary tasks; not from the stakeholder-group section |
| Audience | Dropping the three §13 entries rather than promoting their group labels; no motivation or affiliation classification; captured public home and B2B marketing page as the audience bound |
| Distinctive traits | Restatement of the source Key Characteristics; recorded values kept; groupings and the readings inside them |
| Principles | The four numbered items and their UI implications |
| Application rules | The four Do rules and the reasons attached |
| Avoid | The four Don't prohibitions plus the §9 brand constraint, and the reasons inside them |
| Foundations Semantic color | Role names from token-set keys; canvas unmerged from utility and pagination text; ink unmerged from hero overlay and utility fill; compact-home-utility fill not a YAML color key; `#FEF08C` kept on the B2B campaign action; YAML token note kept as the facts it names; prior `#1B6DDA` / coral / yellow / `#A451F7` refused as reusable roles |
| Foundations Spacing | Isolated measurements kept on the surfaces and controls that established them; no `tokens.spacing` keys supplied rather than a synthesized scale |
| Foundations Shape | YAML unitless `4` / `100` beside §4 `4px` / `100px`; hero / skeleton / benefit / B2B-campaign radii kept on those controls |
| Foundations Elevation | B2B shadow as route-local campaign evidence rather than a depth scale for every surface |
| Foundations Motion B3 | Five-kind promotion gate; refusal of a partial confirmation; a match against an official framework or specification document is not that gate |
| Typography Font evidence | Evidence-class sorting; official-distributed-font row as asset-and-licence rather than Millie runtime proof; unresolved `Pretendard` not merged; declared-only faces not UI-family tokens |
| Typography Family | Pretendard Variable as the sole UI-family token because computed, loaded, and source evidence agree; unresolved `Pretendard` refused as a merge; unavailable or unobserved brand type not replaced with that family |
| Type roles | YAML unitless ratios kept; YAML use and §3 provenance both kept; B2B heading metrics stay on the B2B route; control `16px` fonts stay on those controls; `tokens.typography.utility.size` `12` unmerged from the 12px gap and `0px 12px` padding; `tokens.typography.body.size` `14` unmerged from the benefit-card `14px` font |
| Assets | Google s2 slug as identity pointer; home editorial imagery as first-party content; Pretendard licence as upstream font-asset boundary |
| Components Capture record | Source state contract kept rather than delegated; role-based decision procedure; kind and applicability verdicts; no YAML primitive type; kind/map omitted where interactive-kind is unconfirmed; skeleton class names as captured shells; not a complete state-coverage claim |
| Home hero slide | Kind and a map withheld because the source supplies no interaction evidence for this slide |
| Home skeleton card | Kind and a map withheld because the source supplies no interaction evidence for this shell |
| B2B benefit card | Kind and a map withheld because the source supplies no interaction evidence for this card; route-local B2B marketing evidence rather than a consumer or app card contract |
| B2B campaign action | Route-local B2B marketing evidence rather than a consumer or app button contract |
| Layout & Platforms | Recorded measurements as desktop-capture figures rather than a cross-viewport specification |
| Content & Locales | Source “supports” reading classified as source-grounded service framing rather than a complete product-microcopy guide |
| Governance Recorded unresolved decisions | Named values the source already opened, not a list of domains the source never established |

## Proof notes

- verification_v2 schema 2; conflicts: []
- `tokens.source: live-extract`; `tokens.extracted: 2026-07-13`
- `components_harvested: false`; YAML `components: {}`
- Interaction expansions: 0; only default component observations promoted
- Uncaptured hover/focus/pressed/disabled/loading/error/success treatments are omitted as values. They are not `not-applicable` for want of a capture; applicability follows control meaning. State coverage is not claimed complete.
- No published first-party UI specification is named in the source, so every derived-editorial close uses the toss-form `not Millie-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석).
- Official company, tenth-anniversary, and careers pages are narrative context, not token sources.

# Omnichat provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/omnichat/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | omnichat |
| name | Omnichat |
| country | TW |
| category | marketing |
| homepage | `https://www.omnichat.ai` |
| primary_color | `#006aff` |
| logo.type | favicon |
| logo.slug | `https://www.omnichat.ai/wp-content/uploads/webiconlogo.png` |
| omd format (source) | 0.1 |
| verified | 2026-06-10 |
| added | 2026-06-10 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-10 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. Catalog `primary_color` `#006aff` is dual: identity here, and Foundations / components in `DESIGN.md`. The favicon slug is dual: identity here, and a portable Assets pointer in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

Token note from the source, quoted in full:

> primary = header CTA / featured-card blue (#006aff); action CTAs use lighter #408fff; deep navy-blue #0202a6 for section headings; signature aurora gradient (#ac9cff/#8e4dff/#69dfb2/#379afd) clipped into hero text on black.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-10 |
| added | 2026-06-10 |
| tokens.extracted | 2026-06-10 |
| surfaces inspected | 2026-06-10 |
| sources captured | 2026-06-10 |

The source footer records the verification verbatim as **Verified:** 2026-06-10. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | zh-TW homepage, live inspect | `https://www.omnichat.ai/tw/` | 2026-06-10 |
| pricing | zh-TW pricing, live inspect | `https://www.omnichat.ai/tw/pricing/` | 2026-06-10 |
| about | brand story / mission, fetched | `https://www.omnichat.ai/tw/about/` | 2026-06-10 |
| blog | official blog, fetched | `https://blog.omnichat.ai/tw/` | 2026-06-10 |

### Tier 1 (as listed in the source footer)

- `https://www.omnichat.ai/tw/` (homepage, live inspect)
- `https://www.omnichat.ai/tw/pricing/` (pricing, live inspect)
- `https://www.omnichat.ai/tw/about/` (brand story)
- `https://blog.omnichat.ai/tw/` (official blog)

Home and pricing are dual: portable Scope + this ledger (E2a). About and blog are dual: portable Scope (named brand-owned sources that do not supply computed tokens) + this ledger (E2a).

### Tier 2 (no usable record)

- getdesign.md/omnichat → 404 "No designs found"
- styles.refero.design/?q=omnichat → not listed

### Narrative (not interface tokens)

- Founding (2017, Alan Chan, coworking-desk MVP origin), mission/belief statements, and the founder quote: `https://www.omnichat.ai/tw/about/` (fetched 2026-06-10)
- Funding (US$1.8M Pre-A, April 2022) and ~300% YoY ARR growth: company PR (en.prnasia.com release, surfaced via web search 2026-06-10), as the source HTML comment records
- Official WhatsApp BSP / Meta / LINE partner status: live homepage
- Market list (TW/HK/MY/SG/TH/ID): about page
- Catalog `country: TW`: HK-founded; Taiwan is its lead market and the zh-TW surface is the brand's primary storefront, as the source HTML comment records

## Claim ledger

Claims use the source YAML token paths. Home = `https://www.omnichat.ai/tw/` live inspect 2026-06-10. Pricing = `https://www.omnichat.ai/tw/pricing/` live inspect 2026-06-10.

| claim | surface |
|---|---|
| tokens.colors.primary / action / deep | home |
| tokens.colors.gradient-base / gradient-sky / gradient-mint / gradient-lavender / gradient-violet | home |
| tokens.colors.heading-sky / heading-sky-soft / hero-sub | home |
| tokens.colors.ink / ink-strong / ink-heading / muted / icon-grey | home |
| tokens.colors.canvas / surface / surface-alt / tint-blue / tint-blue-deep / hero-dark / input-border | home; tint-blue also pricing |
| tokens.colors.menu-accent | home (mega-menu panels) |
| tokens.typography.family.display / zh | home |
| tokens.typography.display-hero / display-xl / section / feature / card-head / plan-head / nav / body / menu-item | home; plan-head also pricing |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl | home |
| tokens.rounded.sm / md / lg / full | home; lg and full also pricing |
| tokens.shadow.card / panel | pricing |
| tokens.components.button-primary / button-outline / button-gradient | home |
| tokens.components.button-action | home and pricing |
| tokens.components.segment-toggle / input-default / card-pricing / badge-popular | pricing; input-default also home |

## Sibling handling (`web/references/omnichat/.verification.md`)

The sibling exists — confirmed with `find web/references/omnichat -type f`, since a dotfile is invisible to `ls` and to a `*` glob. SHA-256 `a0d9cda64110005516c941457e9b1e26d8c74983780018cdb4ce5f96c85226f2`. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Inspected: 2026-06-10. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless), viewport 1440×900, goto `https://www.omnichat.ai/tw/` and `https://www.omnichat.ai/tw/pricing/` domcontentloaded + 3.5s settle, modal dismissal pass, then `getComputedStyle` on body, h1/h2/h3, header/nav, buttons, links, inputs, cards, plus full-DOM background/text color frequency scans.

Values and strings the sibling carries that the visible source body does not, kept here and not promoted (mention as disposition, not use as a portable fact):

- Viewport `1440×900` as inspect chrome, not a layout token
- Hero dark-band height `704px`
- H2 on dark `"全方位自動化客服、行銷與銷售…"`
- H3 `"自主代理型 AI 秒速打造高轉換對話式行銷活動"` at `#0403b7` / 26px / 500 / lh 33.8px
- Header outline CTA computed `background: transparent` (source YAML and §4 write `#ffffff`; neither side was chosen as a new token)
- Pricing H2 `"價格方案"` at 42px / 500
- Plan names `"進階行銷商務"` / `"企業旗艦方案"` (source writes `高效客服方案, 基本行銷商務…`)
- Action CTA label `"聯絡專員"` beside source `"聯絡專人"`
- Homepage bg frequency: `rgb(248,249,250)` ×68, white ×12, `rgb(249,249,249)` ×12, `rgb(0,106,255)` ×4, `rgb(0,0,0)` ×3, `rgb(51,55,246)` ×2, `rgba(217,232,255,0.75)` ×2, `rgb(2,2,166)` ×1
- Homepage fg frequency: `rgb(51,51,51)` ×845, `rgb(204,51,102)` ×233, `rgb(61,61,61)` ×216, `rgb(102,102,102)` ×132, `rgb(64,143,255)` ×40, `rgb(105,114,125)` ×37
- Pricing bg frequency: white ×181, `rgb(248,249,250)` ×168, `rgb(236,244,255)` ×42, `rgb(64,143,255)` ×42, `rgb(217,232,255)` ×10, `rgb(0,106,255)` ×6, `rgb(6,199,85)` ×3 (LINE green, third-party logo)
- `document.title` (home): `Agentic AI 建立 LINE 自動化行銷，打造全通路 AI 顧客體驗平台｜Omnichat`
- `document.title` (pricing): `線上對話商務價格方案 - Omnichat`
- Logo decision rejects: Google s2 16×16 globe; simpleicons 404; GitHub org `OmniChat` (different company)
- Chosen logo: site's own `https://www.omnichat.ai/wp-content/uploads/webiconlogo.png` — 7,392 B, 128×128 PNG (mint petals + blue chat bubble). That URL is already in the source frontmatter and is dual in portable Assets.
- Sibling logo-decision notes, not promoted: Google s2 `?domain=omnichat.ai&sz=128`; `Favicon: direct URL stored in slug (preferred)` (logos.ts comment); GitHub org OmniChat different company
- Sibling blog label `Omnichat Blog 2.0 TW` (source footer writes `https://blog.omnichat.ai/tw/` (official blog))
- Sibling getdesign sentence `No designs found for 'omnichat'` (source footer writes `404 "No designs found"`)
- Sibling pricing featured-border writing `2px solid rgb(0,106,255)` (source writes `2px solid #006aff`)

Sibling raw samples that corroborate source-body values (not new portable facts): Outfit 52px / 64px / 500 / ls 1.4px aurora clip; `#8ca8cf` 24px / 500 hero subtitle; `#0202a6` 40px / 500 / lh 64px / ls 1px trust H2; `#2e2e2e` 40px / 500; `#75adfc` 46px / 500; `#4e97ff` 34px / 500; header 專家諮詢 `#006aff` / `13px 13px 0px` / 32px / Noto Sans HK; header 免費試用 1px `#006aff` / same radius / 32px; hero CTA `#3337f6` with 270deg gradient / 10px radius / 44px; 更多成功案例 `#0202a6` / 10px radius / Outfit 16px / 500; 了解完整案例 `#408fff`; form input `#f9f9f9` / `#c5c5c5` / 8px / 44px; 送出資料 `#408fff` / `0px 24px` / padding `9px 80px 10px` / 45px (padding also in source §9); nav 平台 17px / 400 / 60px rows; mega-menu LINE 官方帳號 `#cc3366` / 14px / 500 / `0px 0px 5px 5px` / 42px; pricing action `8px 20px 11px` / 45px; compact 獲得報價 `2px 20px 5px` / 33px; segmented toggle 99px / 36px; plan card 20px radius / 2px white or `#006aff` / `rgba(0,0,0,0.06) 3px 3px 15px` / `36px 26px 130px` / 288px; tab panel `0px 0px 13px 13px` / `rgba(0,0,0,0.15) 0px 3px 7px`; 最受歡迎 5px / `1px 32px` / 28px.

Country sources listed in the sibling (brand-owned ≥2): homepage, pricing, blog, about. getdesign.md / refero / Google favicon proxy are explicitly not counted toward the TW brand-owned requirement.

## Omission ledger

Disposition only. This table names what was dropped and why. It does not re-host the dropped content as facts (D2a, E2d).

| Item | Disposition |
|---|---|
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | Deleted. Tool-facing copy-paste prompts and restatements. Values it restated land in Foundations / Typography / Components / Layout. Three §9-only writings were moved before deletion (A3): segmented-switcher track `1px blue outline`; lead-form submit padding `9px 80px 10px`; aurora gradient appears exactly twice per page. No receiving slot and no delegation (A2, A3). |
| §13 페르소나 3인 (fictional archetypes; names, ages, cities, motivations, affiliation classifications) | Deleted. The source's own italic line labels them fictional archetypes informed by publicly observable segments, not individual people. Not promoted to Audience or to `primary-tasks`, and not re-hosted here as names, ages, cities, motivations, or affiliation classifications (D2, D2a). Audience keeps only the source header's group wording. |
| §15 `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` and `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` | Deleted as unattributed curves. `ease-exit` is byte-identical to the example table at `spec/omd-v0.1.md`. Roles and uses stay in Foundations Motion. `ease-ambient` `linear` stays. Durations stay. |
| YAML `[FILL IN]` | Not present in the source. Nothing to omit at a placeholder boundary. |

§9 deletion check (A3). Every value the construction prompts name was confirmed present elsewhere in the portable body before the section was dropped, after the three §9-only writings were moved. Hero on `#000000`, 52px Outfit 500, line-height 64px, +1.4px, 270deg aurora clip — Scope / Type roles / Semantic color. Subtitle 24px Outfit 500 `#8ca8cf` — Type roles Sub-head + `tokens.colors.hero-sub`. Hero CTA `#3337f6` / 10px radius / 44px / 16px/500 — Hero Gradient. Header white, 17px Noto Sans HK `#333333`, notched `13px 13px 0px` 32px outline and fill — Header Outline / Header Primary / Navigation. Pricing card white / 20px / 2px `#006aff` / `rgba(0,0,0,0.06) 3px 3px 15px` / `36px 26px` / 24px Outfit 500 `#3d3d3d` / +1px / floating 最受歡迎 badge / ribbon CTA `0px 24px` 45px — Pricing Plan Card / Badge / Action Ribbon. Segmented switcher 99px / 16px/500 / active `#408fff` + white / inactive white + `#408fff` / 36px — Pricing Product Switcher, including the moved 1px blue outline. Lead form `#f9f9f9` / `#c5c5c5` / 8px / 44px / 16px `#3d3d3d` / submit `#408fff` `0px 24px` — Lead-Form Field / Action Ribbon, including the moved `9px 80px 10px`. Iteration-guide rules (weight 500, asymmetric corners, blue roles, band separation, feather shadows, heading hue, Outfit/Noto pairing) already sit in Principles / Application rules / Avoid / Typography rules. Aurora-twice-per-page sits on Principle 5.

## Derived editorial inventory

Portable `DESIGN.md` carries 33 complete B2a qualifications. This table is 33 data rows. Preamble sentences on this page are not portable qualifications.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 `:9` | Two inspected zh-TW pages as this contract's token surfaces; about page and blog as named brand-owned sources that do not supply computed tokens; values stay attached |
| Experience Scope ¶2 `:11` | Cinematic opening / confident AI-era SaaS pitch deck / dark AI theatre against bright commercial sections / open-geometric-friendly headlines / notched-and-ribbon signature meaning nothing is a plain rectangle and nothing is a default pill / conversational-automated-commerce-grade |
| Experience Scope ¶3 `:13` | Founding-and-mission narrative, including the 2017 / Alan Chan / coworking-desk MVP / 2022 Pre-A / 2025-era Omni AI sentences and the closing aesthetic-and-voice sentence, classified as context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the four label-or-surface outcomes as primary tasks; not from the Personas section |
| Audience `:29` | Dropping the archetype biographies rather than promoting them; carrying no name, age, city, motivation, or affiliation classification; reading the source header's publicly observable Omnichat customer segments in that original wording |
| Distinctive traits `:33` | Classifying the Key Characteristics list as that restatement; groupings and readings inside the list |
| Principles `:46` | Five numbered items as derived editorial implementation inference; toss-form close; UI implications; aurora-twice-per-page sitting on item 5 |
| Application rules `:56` | Eight Do rules and the reasons attached to them |
| Avoid `:69` | Eight Don't prohibitions and the reasons inside them |
| Semantic color `:86` | Role names from the source's labels; chrome-level "do this" / lighter working blue / trust-bearing deep / aurora as hero signature / heading hue as type hierarchy / `#cc3366` as hidden wayfinding accent; pairing each hex to its token-set path |
| Spacing `:144` | Unitless steps kept on their own keys rather than rewritten as a grid; `10`/`16`/`20`/`8`/`27`/`36` unmerged from rounded, type, input radius, and panel padding; ~4px base unit kept off the YAML map |
| Shape `:166` | Four rounded keys kept (`5`/`10`/`20`/`99`); 8px input / notched `13px 13px 0px` / ribbon `0px 24px` kept off the YAML map; notched and ribbon corners read as the brand signature |
| Elevation YAML/Level keep-both `:177` | YAML forms with trailing `0px` and Level 2 / Level 3 spellings without that trailing zero kept as the same two shadows on two writings; neither replaces the other |
| Elevation `:179` | Whisper-quiet elevation with drama delegated to the black bands and the aurora |
| Motion `:183` | Durations, easing roles, `linear` ambient, motion rules, and reduced-motion as editorial/illustrative rather than documented Omnichat product specs |
| Motion curve omission `:194` | Two unattributed `ease-enter` / `ease-exit` curve values omitted; roles and uses kept |
| Font evidence Official product-use `:214` | The "no published type token" reading |
| Font evidence Official distributed `:216` | The "no exclusive distributed family" reading |
| Font evidence Declared-only `:217` | Fallback members of the system stack are not the brand face |
| Font evidence License `:218` | Outfit and Noto Sans HK as upstream faces, not Omnichat-owned brand assets |
| Font evidence Outside these captures `:219` | Typography beyond the token-inspected homepage and pricing page, other than quoted about/blog copy, sits outside this contract |
| Family `:227` | Fallback prohibition — never present a system substitute as the brand face |
| Type roles `:246` | YAML singles kept beside §3 ranges; unitless ratios kept; parenthetical 64px / 24px as source §3 spellings; YAML `tracking: 1.4` / `1` beside §3 `+1.4px` / `+1px`; Sub-head as a §3-only writing |
| Typography rules `:250` | Four typography principles as readings of the measured metrics |
| Assets `:260` | Treating product UI mockups and client logos as first-party imagery; instruction not to replace them with invented brand-color decoration |
| Capture / applicability `:267` | Interactive-kind and applicability verdicts and the reason for either; YAML primitive types attached only where the token set records them; §4-only components labelled `not in the token set`; cards and the tab panel withhold kind and map; absence of an observation is not `not-applicable`; loading/error/success follow product role not primitive kind; YAML token-set writings kept beside longer §4 body writings; generic `focus` observation is not `focus-visible` treatment evidence; not a complete state-coverage claim |
| State-record system-level `:269` | State-record treatments stated at system level rather than measured per control |
| State record `:515` | Ten system-level rows as editorial/illustrative rather than documented Omnichat product specs |
| State-record non-attachment `:530` | Those rows not attached as visual treatments to marketing destination controls except where a control's role already makes the state applicable |
| Layout whitespace `:548` | Stage vs. shelf / tint as chapter break / density contrast as intentional rhythm |
| Layout responsive `:550` | Breakpoints, collapsing strategy, image behavior, and recorded target sizes stated at system level rather than measured across viewports |
| Content voice `:577` | Confident / conversion-obsessed / warmly pragmatic characterization; register reading; tone table |
| Forbidden register `:598` | Forbidden-register reading, including helpful-consultant rather than vending-machine |

## Proof notes

- No `verification_v2` block in the source frontmatter. Sibling is a 2026-06-10 live-inspect note, transcribed above.
- `components_harvested: true`
- Interaction expansions are not claimed. Hero Gradient records a hover treatment. Uncaptured hover/disabled/loading/error/success treatments are omitted as values. They are not `not-applicable` for want of a capture; applicability follows control meaning. State coverage is not claimed complete.
- Official about page and blog are narrative/voice sources, not computed-token surfaces
- `tokens.source: live-extract` is ledger metadata
- B3 is held in Foundations Motion in full text (five evidence kinds + per-component gate + partial-confirmation exclusion) (E2c)
- Omnichat has no published first-party design system (getdesign.md 404; refero not listed), so every derived-editorial close uses the toss-form "not Omnichat-authored or a separately published UI specification" (rulebook v12 B2a 전제 주석)
- Founding year, founder, coworking-desk MVP, 2022 Pre-A, ~300% ARR, 2025-era Omni AI, and the source §11 closing aesthetic-and-voice sentence are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens
- `#ffffff` is one hex on several roles, not a second token: Canvas (`tokens.colors.canvas` — page background, cards, button text on blue) and the fill of Header Outline, Pricing Product Switcher, and Pricing Plan Card. The source already records those fields separately. This ledger names the split so it is not read as a missing color key.

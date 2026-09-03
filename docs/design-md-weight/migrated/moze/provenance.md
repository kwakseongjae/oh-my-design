# MOZE provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/moze/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | moze |
| name | MOZE |
| country | TW |
| category | fintech |
| homepage | https://moze.app/ |
| primary_color | `#ff367c` |
| logo | type `favicon`, slug `https://framerusercontent.com/images/DoQvcMSfFqFHJHne39zr96KczM.png` |
| verified | 2026-06-17 |
| added | 2026-06-17 |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-17 |
| components_harvested | true |

Token note from source, quoted in full: "Dark editorial finance app. Canvas near-black #0d0d12; action = pink→periwinkle gradient (#ff367c → #6e86ff). primary_color = brand pink #ff367c (gradient terminus + logo). Display = Poppins; CJK body falls back to system sans-serif (no embedded CJK webfont — Traditional-Chinese rendered via platform 蘋方/思源 stack). White body text is rgba(255,255,255,0.87) live; tokens carry solid #ffffff (translucency noted in prose)."

The source `DESIGN.md` carries no `verification_v2` block and no `ds.type` / `ds.name` / `ds.url` field. None is invented here.

The source `DESIGN.md` is not the whole evidence record. A sibling verification file sits beside it: `web/references/moze/.verification.md`. Adoption stops at this ledger: no sibling-only value is promoted to a portable token.

### Dual and multiple destinations (E2a)

- `name` `MOZE` is dual: this identity ledger + the portable H1 `# MOZE Design System` and every portable sentence that names the product. `摩斯` is likewise dual: this ledger + portable Experience Scope and Content & Locales, byte-for-byte.
- `primary_color` `#ff367c` is multi-destination: this ledger + portable Scope ¶2, Distinctive traits, Principles item 2, Application rules, Foundations Semantic color (`tokens.colors.primary`) and the token-note paragraph, Primary Gradient CTA background, Pro Tier Card ring writings, Accent Pill background, and the live gradient terminus. Avoid names the pink gradient without this hex. `grep -oF '#ff367c' DESIGN.md | wc -l` counts the portable hex.
- `homepage` `https://moze.app/` is multi-destination: this ledger + portable Experience Scope, Primary tasks, and Capture record. `grep -oF 'https://moze.app/' DESIGN.md` also matches the `https://moze.app/pricing` prefix.
- `logo` slug is dual: this ledger + portable Typography & Assets → Assets.
- `verified` / `added` / `tokens.extracted` `2026-06-17` is dual: this ledger/Freshness + portable Scope, Font evidence, Capture record, and Brand-published lines.
- `tokens.source: live-extract` is dual: this ledger + portable Scope, which names the YAML token set as `live-extract`.
- `components_harvested: true` is dual: this ledger + Proof notes below. It does not reach the portable body as a field name.
- `omd: "0.1"` is ledger-only.
- Favicon URL is dual: this ledger + portable Assets.

## Canonical proof — sibling verification file

| Field | Value |
|---|---|
| sibling | `web/references/moze/.verification.md` |
| bytes | 6078 |
| SHA-256 | `113324821c58b1a2286ff4965a60682a09bb6999b132f89c3c0e3051887f1ad1` |
| heading | `# MOZE — Verification Notes (2026-06-17)` |
| grade | `## Proof — Tier 1 live inspect` |
| inspected | 2026-06-17 |

**Method, quoted from the sibling:** "playwright getComputedStyle (live DOM) — global playwright (chromium, headless), Chrome UA + `zh-TW` locale, two brand-owned surfaces (moze.app/ + moze.app/pricing), goto `domcontentloaded`, full scroll to trigger Framer lazy content, then `getComputedStyle` on body, h1/h2/h3/h4, nav links, CTAs, pricing/feature cards, plus full-DOM background/text/gradient frequency scans."

**Inspected URLs, from the sibling's `**Sources:**` list, matching the source footer:**

- https://moze.app/ — homepage — live computed style: hero, nav, primary CTA, feature cards
- https://moze.app/pricing — pricing page — live computed style: plan cards, gradient ring, glow shadow; second brand-owned surface

### Country sources (TW), from the sibling

The sibling names four brand-owned regional sources and states that getdesign.md / styles.refero.design / Google favicon proxy are explicitly NOT counted toward the TW brand-owned requirement:

1. https://moze.app/
2. https://moze.app/pricing
3. https://doc.moze.app/ — official tutorial/documentation site, linked from homepage nav "教學文件"
4. https://changelog.moze.app/ — official version-history / changelog, linked from homepage footer "版本更新歷史"

`doc.moze.app` and `changelog.moze.app` are sibling-only URLs. They stay in this ledger. The portable body records the nav label 教學文件; it does not carry those two URLs.

The sibling also states the logo uses MOZE's genuine 1024×1024 app icon from framerusercontent (the site's declared `apple-touch-icon`), not the Google globe. That apple-touch-icon class is sibling-only; the portable Assets line carries the catalog slug the source YAML already records.

### Sibling-only values, recorded here and not promoted

- body `background-color: rgb(0, 0, 0)` (#000000); `font-size: 12px`; document.title `MOZE － 最美記帳`
- canvas frequency: `rgb(13, 13, 18)` (#0d0d12) ×119; `rgb(0, 0, 0)` ×63
- hero H2 height 146px
- pricing H2 `"$1.99"`
- outline CTA live fill `radial-gradient(35% 100% at 7.4% 44.1%, rgb(245, 131, 39) 0%, rgba(207, 207, 207, 0.2) 100%)`
- Free tier card width 379px (the source writes the range ~377-379px; the portable body keeps that range)
- feature/panel card `radial-gradient(59% 35.08% at 2.3% 1.6%, rgb(26, 29, 49) 0%, rgb(13, 13, 18) 100%)` (#1a1d31 → #0d0d12)
- frequency scans: backgrounds `rgb(13,13,18)` ×119, `rgb(0,0,0)` ×63, `rgb(26,29,49)` ×10, `rgb(50,54,72)` ×2, `rgb(255,54,124)` ×2, `rgb(110,134,255)` ×1; text `rgb(136,151,227)` ×297, `rgb(208,208,208)` ×150, `rgba(255,255,255,0.87)` ×119, `rgb(123,124,140)` ×94, `rgb(247,206,54)` ×24, `rgb(255,255,255)` ×28
- Poppins computed on Latin display ×277
- Chrome UA, `zh-TW` locale, `domcontentloaded`, Framer lazy scroll
- `doc.moze.app`, `changelog.moze.app`
- apple-touch-icon class of the logo file

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-17 |
| added (YAML) | 2026-06-17 |
| tokens.extracted | 2026-06-17 |
| footer **Verified** | 2026-06-17 |
| sibling inspected | 2026-06-17 |

Conflicts unresolved: none (source footer). Gold is recorded two ways inside the source itself (`tokens.colors.accent-gold` `#f0c732` versus trailing observation `rgb(247,206,54)` `#f7ce36`); both writings are kept in the portable Foundations gold role; neither is selected.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product-surface (public marketing homepage) | https://moze.app/ | 2026-06-17 |
| pricing | product-surface (public pricing page) | https://moze.app/pricing | 2026-06-17 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://moze.app/ | 2026-06-17 |
| pricing-live | product-surface | https://moze.app/pricing | 2026-06-17 |
| verification | proof-sidecar | `web/references/moze/.verification.md` | 2026-06-17 |

### Tier 1

- https://moze.app/ (homepage — hero, nav, CTA, feature cards, live computed style)
- https://moze.app/pricing (pricing page — plan cards, gradient ring, glow shadow, second brand-owned surface)

Method recorded in the source footer, quoted: "**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand-owned surfaces)". Token-level claims (§1-9) are sourced from this live inspection, as the trailing HTML comment states.

### Tier 2

- getdesign.md/moze — not listed (TW brand, Western catalog under-covers)
- styles.refero.design/?q=moze — not listed

## Claim ledger

Claims use YAML anchors from the source. `home` = https://moze.app/ / home-live / computed-style / 2026-06-17; `pricing` = https://moze.app/pricing / pricing-live / computed-style / 2026-06-17.

| claim | surface |
|---|---|
| tokens.colors.primary | home |
| tokens.colors.primary-blue | home |
| tokens.colors.violet | pricing |
| tokens.colors.accent-periwinkle | home |
| tokens.colors.accent-orange | home |
| tokens.colors.accent-gold | home |
| tokens.colors.accent-green | home |
| tokens.colors.accent-lavender | home |
| tokens.colors.canvas | home |
| tokens.colors.black | home |
| tokens.colors.panel | home |
| tokens.colors.panel-raised | pricing |
| tokens.colors.on-dark | home |
| tokens.colors.body | home |
| tokens.colors.muted | home |
| tokens.typography.family.display / body | home |
| tokens.typography.display-hero.* | home |
| tokens.typography.section.* | home |
| tokens.typography.plan-name.* | pricing |
| tokens.typography.body.* | home |
| tokens.typography.nav.* | home |
| tokens.typography.button.* | home |
| tokens.spacing.xs / sm / base / md / lg / section | home |
| tokens.rounded.sm / md / lg / full | home |
| tokens.shadow.glow-cta | home |
| tokens.shadow.glow-card | pricing |
| tokens.components.cta-gradient.* | home |
| tokens.components.cta-outline.* | home |
| tokens.components.nav-link.* | home |
| tokens.components.plan-card-free.* | pricing |
| tokens.components.plan-card-pro.* | pricing |
| tokens.components.feature-card.* | home |
| tokens.components.badge-accent.* | home |
| tokens.components.inline-link.* | home |

## Observation ledger

Transcribed from the source's trailing HTML comment. These are the computed observations the reconstruction rests on.

| Observation | Value |
|---|---|
| Hero H2 用最優雅的方式簡化你的財務旅程 | Poppins 52px / 400 / rgba(255,255,255,0.87) |
| canvas bg | rgb(13,13,18) #0d0d12 |
| primary CTA 立即免費下載 | radius 999px / padding 12px 20px / height 41px / gradient linear-gradient(274deg, rgb(110,134,255) → rgb(255,54,124)) / glow shadow rgba(255,89,0,0.7) -12px 0px 21px -3px, rgb(255,56,132) -7px 0px 10px -5px |
| nav links | 12px white |
| feature/section H3 | 32px Poppins |
| accents | rgb(245,131,39) #f58327, rgb(247,206,54) #f7ce36, rgb(77,255,100) #4dff64, rgb(136,151,227) #8897e3 |
| pricing H2 prices | 52px Poppins -2.08px tracking |
| plan name H4 | 24px Poppins |
| Free card | bg rgb(50,54,72) #323648 / radius 20px / padding 32px |
| Pro card | bg rgb(26,29,49) #1a1d31 / radius 20px / gradient ring linear-gradient(150deg, rgb(255,54,124) → rgb(169,99,255)) and 274deg #6e86ff→#ff367c / glow shadow rgba(255,128,176,0.28) 0px -4px 32px 0px, rgba(87,95,255,0.25) 0px 0px 32px 0px |

The source's own evidence-class statements, quoted from the same comment:

- "Token-level claims (§1-9) are sourced from this live inspection."
- "Typography note: the site declares a plain `sans-serif` body stack with no embedded CJK webfont; Traditional-Chinese renders via the platform face (蘋方 / PingFang on Apple, 思源黑體 / Noto Sans CJK elsewhere). Poppins (with "Poppins Placeholder") and Inter are the only embedded Latin webfonts observed."
- "Voice samples (§10) are verbatim from the live homepage and pricing page."
- "Brand narrative (§11): MOZE (摩斯) is a Taiwan-made personal-finance / expense-tracking app widely described as "最美記帳 App." The tiering (基本版 / 專業版 / 專業版 + AI), multi-currency, charts, Apple Watch support, and AI logging are stated on the live homepage and pricing page. Broader characterizations are editorial readings of the observed product positioning, not directly quoted MOZE corporate statements."
- "Personas (§13) are fictional archetypes informed by publicly observable MOZE user segments. Names are illustrative; they do not refer to real people."
- "Interpretive claims (e.g., "beauty is a feature", "one gradient, one action", "elevate with light not weight") are editorial readings connecting MOZE's observed design to its positioning, not directly sourced MOZE statements."

The persona comment is quoted here as the source's own evidence-class flag. No name, age, city, motivation, or affiliation classification from that section is re-hosted.

## Omission ledger

| Item | Disposition |
|---|---|
| §13 personas — three fictional archetypes (name, age, city, motivation, and affiliation classification) | Deleted. The source's own headers label them fictional archetypes. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or affiliation classifications (D2, D2a). |
| `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | Removed from the portable body as unsourced curves; kept here verbatim. Token names, durations, uses, signature glow swell, reduced-motion, and the five-kind promotion gate stay in Foundations Motion. `ease-exit` is the same value `spec/omd-v0.1.md` carries as a non-brand implementation default. |
| §9 Agent Prompt Guide — Quick Color Reference, four Example Component Prompts, seven-step Iteration Guide | Deleted as tool-facing restatement. Values they restated are already in Foundations / Typography / Components. One restatement unique to §9 as a combined pricing-row prompt — "Plan name 24px Poppins, price 52px Poppins, white@87%" — lands on Type roles Display Hero notes, beside the trailing-comment observation that plan H2 prices are 52px Poppins `-2.08px`. No receiving-slot-less unique value was dropped (A3). |
| Legacy H1 `# Design System Inspiration of MOZE` | Replaced by the Core v2 identity line `# MOZE Design System`. |
| Legacy footer `**Verified:** … / Tier 1 / Tier 2 / Conflicts unresolved` | Moved to Freshness and Sources above. Dual with portable inspection dates (E2a). |

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 `:9` | Two inspected URLs as this contract's token surfaces; values stay attached; calling the product design-forward |
| Experience Scope ¶2 `:11` | Cinematic / almost-luxury showcase / gadget unboxing / premium-but-playful / single, unmistakable signature / Western-display / CJK-body / deliberate, lightweight choice / glow over flat against a Finda-style peer / elegant, information-dense dark UI engineered for people who find beauty in their numbers |
| Experience Scope ¶3 `:13` | Founding-and-thesis narrative classified as context that does not by itself supply interface tokens; editorial premise, beauty-and-data-clarity differentiator, competes-not-on-free-or-fast, and the closing refusal/embrace unit |
| Primary tasks `:19` | Selecting the three recorded surfaces and controls as primary tasks; not from the persona section |
| Audience `:28` | Biography-drop (no name, motivation, or affiliation classification); persona-section group labels not re-hosted; surface-level remainder as audience |
| Distinctive traits `:32` | Classifying the Key Characteristics list as that restatement; groupings and readings inside the list |
| Principles `:44` | The five numbered items and their UI implications; source flags on "beauty is a feature", "one gradient, one action", "elevate with light not weight" |
| Application rules `:54` | The eight Do rules and the reasons attached to them |
| Avoid `:67` | The eight Don't prohibitions and the reasons inside them |
| Foundations Semantic color `:84` | Pairing each hex to its token-set path; on-dark `#ffffff` beside live `rgba(255,255,255,0.87)`; gold `#f0c732` beside `#f7ce36`; YAML two-stop Pro ring beside §4 three-stop; CTA `bg` `#ff367c` beside live `274deg` fill |
| Foundations token note `:113` | Calling the YAML note a "dark editorial finance app" characterization |
| Foundations Spacing `:121` | Keeping spacing keys unmerged from rounded, type, and padding that share a numeral |
| Foundations Shape `:132` | YAML radius keys beside component `999px` / `20px` writings; `tokens.rounded.md` 20 off `tokens.spacing.md` 20; `tokens.rounded.full` 999 off a spacing step |
| Foundations Elevation `:143` | Colored-light-not-grey-shadow philosophy, including the neon-signage reading |
| Foundations Motion `:165` | Durations and assignments; omitting unattributed cubic-bezier curves while keeping easing names and uses; reduced-motion; glow swell; no-bounce/no-spring; smooth-and-premium characterization; five-kind per-component promotion gate |
| Typography Font evidence `:183` | Sorting the evidence-class table as resolutions rather than as a published MOZE type specimen |
| Typography Family `:192` | Persuasive-Latin versus OS-hanzi split; never-swap; weight 400 + white@87%; heading ink never full `#ffffff`; -2.08px at 52px as the distinctive typographic move; do-not-replace-unavailable; do-not-present system CJK or Inter as a MOZE brand face |
| Typography Type roles `:196` | Pairing each role to its token-set path; YAML `use` beside longer §3 notes; unitless ratios kept; rem beside px; display-hero `52` off spacing and off the plan-price use of the same 52px Poppins |
| Typography Assets `:220` | Classing the catalog logo URL as an identity pointer rather than as a published illustration specification; refusing to replace first-party product imagery or the triangular "M" mark with invented decoration |
| Components Capture record `:229` | Interactive-kind and applicability verdicts and the reason for either; Primitive type attached only when the source YAML records that type; YAML `active` is not `focus-visible` evidence; not a complete state-coverage claim |
| Components Source state contract `:233` | Nine-row state contract as philosophy-layer treatments; financial situations as editorial scenarios |
| Layout Whitespace `:398` | Dark room, spotlit content; glow as grouping; pill rhythm |
| Layout Responsive `:424` | Breakpoint table, collapsing strategy, image behavior, and tap-comfort reading of 41px / 43px / 30px as desktop measurements |
| Content Brand-published lines `:437` | Parenthetical role notes beside the three verbatim lines; keeping both English glosses of 記帳，是理財的第一步 |
| Content Voice `:441` | Elegant / aspirational / quietly confident characterization, including the tone table and the forbidden-register authoring rule |
| Content Locale `:459` | Reading 18px as the size that lets the system face carry dense Chinese reading text |
| Governance Named gaps `:493` | List as a catalog of source-unnamed values, not coverage of domains the source never named |

## Proof notes

- verification_v2: absent from the source. Not invented.
- components_harvested: true
- Interaction expansions: 0; only default component observations promoted
- Uncaptured hover/disabled/loading/error/success treatments are omitted. They are not `not-applicable` for want of a capture; applicability follows control meaning. State coverage is not claimed complete.
- Token-level claims (§1–9) are live inspect; §10–15 are the philosophy layer, qualified in the portable body
- `tokens.source: live-extract` is ledger metadata and a portable Scope fact (E2a)

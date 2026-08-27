# Composio provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/composio/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | composio |
| name | Composio |
| country | US |
| category | backend-devops |
| homepage | https://composio.dev |
| primary_color | `#6366f1` |
| logo | type `github`, slug `composiohq` |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-08 |
| components_harvested | true |

`tokens.source: prose-derived` is dual this identity/Claim ledger + portable Scope 11 / Motion 166 / Capture 252 (E2a). YAML has no `verification_v2`; absence recorded here (A1c). None invented. YAML has no `ds.type`. None invented.

Catalog logo type `github` / slug `composiohq` is dual: this identity ledger + portable Typography & Assets 241 (E2a). It is not a captured first-party mark. No portable Named-gaps row was invented for a first-party logo-file absence.

Homepage `https://composio.dev` (YAML `homepage`) is dual Scope 9 / Primary tasks 25 + this identity ledger (E2a). It is catalog identity and the named home host, not a third captured host beyond home + pricing.

Catalog `primary_color` `#6366f1` destinations: this identity ledger + portable Scope 11 / Distinctive 36/38 / Avoid 86/88 / Semantic 96/98 / Named gaps 531 + this Freshness pair / Claim ledger (E2a). It is not YAML `primary` / `brand` `#0007cd`.

YAML token note (quoted): `primary_color` field (`#6366f1`) is an indigo approximation; the live DS brand is Composio Cobalt `#0007cd`. Dark-canvas system: many roles use white-opacity (rgba) borders/text — only stated 6-digit hexes promoted to colors; opacity variants live in shadow/note context. Dual portable Scope 11 + this ledger.

`components_harvested: true` is dual this ledger + portable Capture 250/252 (E2a). YAML `verified` 2026-05-15 and `extracted` 2026-06-08 are this freshness ledger. Footer **Verified:** 2026-05-08 (B2 loop) is this ledger only.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-05-15 |
| footer Verified | 2026-05-08 (B2 loop) |
| verification notes | 2026-05-08 |
| tokens.extracted | 2026-06-08 |
| §10 voice sample | 2026-05 |

Source footer **Conflicts unresolved:** none. Preserved value pairs inside the reconstruction (not chosen): catalog `primary_color` `#6366f1` vs YAML Cobalt `#0007cd`; YAML white-fill radius 4 / padding `8px 24px` / fg `#0f0f0f` / 16px·400 vs footer live 0px / 6×8 / 33px / `#000`/`#fff` / 14px·400; body button text `oklch(0.145 0 0)` vs YAML `#0f0f0f` vs live `#000`; YAML `rounded.lg` 37 vs card 4px vs inline 2px vs full 9999 vs live CTA 0px; YAML `section` 80 vs body `80-120px`; YAML lineHeight `0.87` / `1.00` / `1.20` / `1.50` / `1.63` vs body-only `1.43` / `1.33`; YAML tracking `0.3` / `-0.32` / `-0.28` vs body `0.3px` / `-0.32px` / `-0.28px` / `0.7px` / `0.55px` / `0.45-0.5px`. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

Sibling Proof `web/references/composio/.verification.md` records its own conflict-matrix resolution to 0px sharp. That resolution stays on this Proof ledger. Portable DESIGN.md keeps YAML 4px and footer live 0px unmerged (DESIGN 13/36/140/274/292).

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing | https://composio.dev / composio.dev/ | footer live DOM 2026-05-08; YAML verified 2026-05-15 |
| pricing | marketing | composio.dev/pricing | footer philosophy + sibling Proof 2026-05-08 |

### Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | marketing | https://composio.dev | 2026-05-08 live DOM |
| pricing-live | marketing | composio.dev/pricing | 2026-05-08 live DOM / philosophy |

### Tier 1

- https://composio.dev — public homepage. Dual portable Scope 9 + Primary tasks 25 + this ledger (E2a).
- composio.dev/pricing — public pricing. Dual portable Scope 9 + Primary tasks 27 + this ledger (E2a). Footer philosophy host; sibling Proof inspected the same chrome.

### Tier 2 (no usable record)

- getdesign.md/composio — directory only
- styles.refero.design — no record (`?q=Composio`)

Portable body does not re-host these Tier 2 failure strings (E1). Source footer form: `styles.refero.design / getdesign.md — no record.`

### Narrative (not interface tokens)

Source §11 founding/funding facts (2023 San Francisco; Soham Ganatra CEO; Karan Vaidya CTO; IIT Bombay; Physics Olympiad camp; ~$29M; $4M seed 2024 Together Fund / Elevation Capital + angels Gokul Rajaram, Sohum Mazumdar (Rubrik), Dharmesh Shah (HubSpot); $25M Series A Nov 2024 Lightspeed; 200+ tools; 100K+ developers / 200+ companies including Glean, April, OpenNote, Altera) are restated in portable Scope 17 under adjacent complete B2a. They do not by themselves supply interface tokens.

Named third-party URLs stay in this ledger / Proof notes. Portable Scope 17 names Tracxn, Entrackr, and Lightspeed Venture Partners without those URLs (E1).

- https://tracxn.com/d/companies/composio/
- https://entrackr.com/2024/11/composio-raises-25-mn-in-series-a-led-by-lightspeed/
- https://lsvp.com/stories/composio-series-a/

Source footer **Style ref:** `stripe` (engineering tone). This ledger only. Not a portable Composio token or principle.

## Claim ledger

Token extraction is `prose-derived` (2026-06-08). `components_harvested: true`. YAML has no `verification_v2`. Conflicts unresolved (source footer): none. Preserved reconstruction pairs listed under Freshness.

YAML has no per-token surface anchors. Footer live-DOM is composio.dev home + pricing.

| claim | surface |
|---|---|
| tokens.colors.primary / brand `#0007cd` | prose-derived YAML; not catalog `primary_color` `#6366f1` |
| tokens.colors.accent-cyan / accent-signal / accent-ocean | prose-derived YAML |
| tokens.colors.canvas / surface / hairline / foreground / muted / on-primary / light-border | prose-derived YAML |
| tokens.typography.family.sans `abcDiatype` / family.mono `JetBrains Mono` | prose-derived YAML |
| tokens.typography.* size/weight/lineHeight | prose-derived YAML |
| tokens.spacing.* | prose-derived YAML |
| tokens.rounded.* | prose-derived YAML |
| tokens.shadow.brutalist / floating / glow-cyan | prose-derived YAML |
| tokens.components.button-primary / button-cyan / button-ghost | prose-derived YAML |
| tokens.components.card / code-block | prose-derived YAML |
| footer live UPPERCASE CTA 0px / 6×8 / 33px / 14px·400 | composio.dev live DOM |

YAML `primary` `#0007cd` is not catalog `primary_color` `#6366f1`. Dual also Scope 11, Distinctive 36/38, Semantic 99.

## Capture selectors

Source DESIGN.md HTML comments and YAML component rows contain no `data-omd-capture` pointers. None invented.

Footer live-DOM summary (quoted from source DESIGN.md footer; also portable Scope 13 / Capture overlay note 274):

`composio.dev (live DOM via playwright — UPPERCASE CTAs `#fff` / `#000` / 0px radius / 6×8 padding / 33px / 14px·400)`

Sibling Proof raw tuples below are this ledger only. They are not merged into portable component fields.

## Placeholder omission ledger

Source placeholders: none (`[FILL IN` count 0). None are emitted in the portable body. None are invented here.

## Omitted unattributed curves

No cubic-bezier values exist in the source DESIGN.md. None are stored here. Source-stated durations `0ms` / `100ms` / `1500ms` / `250ms`, easing role “terminal-precise”, glow-pulse 1500ms, and `prefers-reduced-motion: reduce` (glow pulse becomes static) are portable Motion 166–185. Portable Motion 185 is the B3 five-kind per-component computed gate. Named gaps 538 lists those five kinds in inventory form; it is not the B3 full promotion-gate sentence (E2c).

## Source-stated removed / unpromoted claims

Source §4 “likely” hover paints, §4 Inputs “likely follow” pattern, and sibling Proof hero height `39px` / card `30px` / `10×16` / `6×12` / `0×16` / `0×20` stay unpromoted as portable component fields. Those names are source-stated omissions or Proof-only raw, not new negative coverage invented for an unmentioned domain (D1). Portable Assets keeps GitHub slug identity-only at DESIGN 241. Portable Content keeps source §10 samples; no complete-locale-profile negative.

## Omitted §13 fictional archetypes

Source §13 says personas are fictional archetypes informed by Composio user segments (AI engineers, agent platform builders, indie developers shipping agent products), not individual people. Those group labels are restated in portable Audience 32. Named fictional biographies are not re-hosted here (D2). Generic deletion only: `fictional archetype material deleted; not re-hosted`. Audience 32 has adjacent complete B2a.

## Derived inventory (portable B2a sites)

Adjacent complete B2a (`derived editorial implementation inference` / `not Composio-authored or a separately published UI specification`) on the current portable body: Scope product-origin / catalog-homepage / two-host coverage / values-stay-attached 9; Scope token-note / `#6366f1` vs `#0007cd` 11; Scope live-DOM overlay unmerged from YAML 4px 13; Scope atmosphere extras retargeted to the follow-on 15; Scope public-history facts / they-do-not-by-themselves-supply-interface-tokens / source-stated-refusal-list-as-narrative-not-interface-tokens 17; Primary tasks named jobs review-the-public-homepage / start-from-the-homepage-UPPERCASE-primary-CTA / review-pricing / two-hosts-not-from-§13 23; Audience no-individual-personas / do-not-substitute-those-entries 32; Distinctive unmerged-role extras / likely-hover-not-promoted 36; numbered Principles five stems / the-brand-feels-like-a-CLI 49; UI-implication tails 57; capture-bound §7 Do’s / named causal tails 59; Avoid source §7 Don’ts / named causal tails 73; reconstruction-boundary Avoid 86; Semantic unmerged-role / Signal-Blue-named-Focus-not-focus-visible 96; gradient names 119; component-fields-not-extra-general-inks / Focus-not-focus-visible 121; Spacing YAML-without-px 125; Shape local scale 133; Shape unmerged local geometries 140; Elevation YAML-brutalist-`0px 0px`-suffix-not-rewritten-into-body-form 152; Elevation extras / hard-offset-is-the-signature / most-depth-through-border-opacity 162; Motion reconstruction-vs-omission 166; easing terminal-precise 177; signature motions 179; Font evidence-class extras 193; Family stacks 209; type-character readings 211; Type-role unitless/tracking / body-only-Micro-Code-Caption-Code-Overline-Code-Micro-Code-Nano / Body-Button-16px-unmerged-from-footer-14px·400 215; Assets GitHub slug identity-only 241; Assets imagery 243; Capture-record graph-not-adopted / harvest-flag 250; Capture likely-hover / prose-derived overlay 252; Signal Blue not `focus-visible` 270; Capture §14-as-source-stated-copy / omitted-L-E-S / C4 cards / Phantom-button-primitive / Navigation-container / not-complete-coverage 272; footer-overlay-as-evidence-domain-note-not-one-aggregated-renderable-control / Proof-tuples-provenance-only-control-separated 274; Inputs omit 276; White-fill field-note 292; White-fill omitted L/E/S 301; White-fill §9 matching-padding-Signal-Blue-secondary-as-local-relation-not-Cyan-hero-pairing 303; Cyan field-note / §9 white-plus-cyan-hero pairing 318; Cyan omitted L/E/S 327; Ghost field-note 341; Ghost omitted L/E/S 343; Phantom field-note 364; Phantom omitted L/E/S 366; Card field-note / §9 local recipe 387; Card C4 omit-kind 389; Code Block field-note 401; Code Block C4 omit-kind 403; Navigation-container field-note 413; Navigation-links destination/select C2 423; Navigation white-fill CTA follows White-fill omission 441; Distinctive surfaces C4 446; Layout recorded-span extras retargeted to the follow-on 455; Whitespace philosophy / large-vertical-gaps-as-chapters 457; Layout source-stated-not-cross-viewport / touch-and-collapsing extras 472; Content voice / uppercase-aggressive-on-most-brands / signal-this-is-for-developers-building-agent-infrastructure 477; Content voice-table 479; Content forbidden-register-as-source-§10 492. Reconstruction-boundary exemption not used. Governance Authority is not a substitute. No “no unqualified sentence remains” claim (E2c). This ledger does not re-host those sentences.

L/E/S omission sentences at DESIGN 301/327/343/366 have their own adjacent complete B2a (not merely covered by capture-record 272). Ghost / Phantom omit loading·error·success because exact request/destination/outcome is unresolved (C2, B2a 343/366; restatement 352/375). Navigation-link loading·error·success remain role-based not-applicable (C2, B2a 423; table rows 431–433). Nav white-fill CTA follows the YAML White-fill omission (B2a 441). Card and Code Block have no state-applicability map (C4, 389/403). Semantic bullets 98–117 are covered by unmerged-role limiter 96. Type-role rows 219–237 are covered by YAML-number limiter 215. Principles 51–55 are covered by the five-item limiter 49. Distinctive bullets 38–45 are covered by unmerged limiter 36. Voice samples 490/494 are source-stated quotes, not reconstruction readings. Forbidden-register 492 has its own adjacent complete B2a. Elevation body-form 152 has its own adjacent complete B2a. Footer overlay 274 and White-fill matching-padding 303 have their own adjacent complete B2a.

## Proof notes

- Canonical Proof: `web/references/composio/.verification.md` SHA-256 `5fda2ec39c5607c56b75804c99de25d4c5c4ece83f281e7316e96b465a702f01`
- tokens.source: `prose-derived`; `components_harvested: true` preserved (A1c). YAML has no `verification_v2`; absence recorded (A1c)
- Catalog GitHub logo slug is dual: this identity ledger + portable Typography & Assets 241 (E2a). Named gaps has no first-party-mark sentence and does not restate the slug as a missing-file gap
- Catalog homepage `https://composio.dev` is dual Scope 9 + Primary tasks 25 + this identity ledger (E2a). Pricing host is dual Scope 9 + Primary tasks 27 + this ledger
- Tracxn / Entrackr / Lightspeed URLs are this Narrative/Proof ledger. Portable Scope 17 names those publishers without the URLs (E1)
- `primary_color` `#6366f1` destinations listed in Identity (E2a)
- YAML typography `use` restored on Type roles 219–230 / 232–233 (A1). Body-only Micro / Code Caption / Code Overline / Code Micro / Code Nano 231 / 234–237 are not YAML keys. YAML component `use` restored on White-fill 290 / Cyan 316 / Ghost 339 / Card 385 / Code Block 399
- YAML lineHeight `0.87` / `1.00` / `1.20` / `1.50` / `1.63` preserved as unitless ratios, not rewritten as fixed px (A1a). Body-only `1.43` / `1.33` stay on Code Overline / Code Micro / Code Nano 235–237
- Verified primitive type preserved: `Type: button` on White-fill 282, Cyan 309, Ghost 333, Phantom 358, Nav CTA 439; `Type: card` on Card 380 and Code Block 394. YAML has no `type` for the Navigation container, Stats/Metrics, Integration grid, or “COMPOSIO” Brand Display; none invented (A1b). `Kind: interactive` does not replace a missing Type. Card and Code Block omit kind (C4, 389/403)
- Signal Blue `#0089ff` as “interactive focus states” is a named Focus color role; focus-visible rows carry no hex (B1, 96/121/270). Prose lines 96/121/270 may name `focus-visible` on the same line as `#0089ff`; they are not state-table rows (E3)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete (272)
- White-fill / Cyan omit loading/error/success fields (C2) 301/327. Ghost / Phantom omit loading/error/success because exact request/destination/outcome is unresolved (C2, B2a 343/366; restatement 352/375). Navigation-link loading/error/success remain role-based not-applicable (C2, B2a 423; table rows 431–433). Nav white-fill CTA follows the YAML White-fill omission (B2a 441). There is no portable Footer live aggregated renderable control; the overlay is Capture 274. Card and Code Block have no state-applicability map (C4, 389/403), so they have no C2 L/E/S fields. `not captured` is not the reason (C1)
- C4 omit-kind set: Card (380/389); Code Block (394/403); Distinctive surfaces (446); Navigation container (413). YAML records `type: card` for Card and Code Block and no type for the distinctive surfaces or the nav bar; Type is not invented on those
- Source §13 fictional archetypes are Audience 32 group labels only, not primary tasks, not fictional biographies, and not re-hosted as names/ages/cities here (D2)
- B3 five-kind gate is Foundations Motion 185 (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate”). Named gaps 538 lists those five kinds in inventory form; it is not the B3 full promotion-gate sentence (E2c)

### Sidecar lineage (quoted; not portable tokens)

Sidecar `:1` quoted: `# Composio — Verification Notes (2026-05-08)`

Sidecar `:3` quoted: Pipeline: `spec/verification-pipeline.md` · Skill: `omd:migrate`

Sidecar `:7–9` quoted:

```
### Surfaces inspected (G3 ≥2)
- `composio.dev/` (home — agent infrastructure positioning)
- `composio.dev/pricing` (pricing — same chrome confirmed)
```

### Sidecar selector-bound raw samples (quoted; not portable tokens)

These raw `rgb` forms, Proof-only hero height `39px`, card `30px` / `12px·400`, padding `10×16` / `6×12` / `0×16` / `0×20`, BOOK A CALL `32px`, TRY COMPOSIO TODAY `40px`, and the sibling conflict-matrix resolution to 0px stay on this Proof ledger. They are not merged into portable Foundations or component fields. Portable DESIGN.md does not host a Footer live aggregated renderable control. The source DESIGN.md footer form (`#fff` / `#000` / 0px / 6×8 / 33px / 14px·400) is a Capture-record evidence-domain note; those are not substitutes for the Proof raw tuples below, which stay control-separated.

Sidecar `:13–20` quoted: **GET STARTED — Header Primary (Black)** — bg `rgb(0, 0, 0)` = `#000000`; color `#ffffff`; radius **0px** (sharp); padding 6×8; 33px / 14px·400; text-transform: uppercase; Use: header Primary across home + pricing.

Sidecar `:22–28` quoted: **GET STARTED FOR FREE — Hero Primary (White Inverse)** — bg `#ffffff`; color near-black; radius **0px**; padding 10×16; 39px / 14px·400 UPPERCASE; Use: hero Primary CTA on dark hero.

Sidecar `:30–36` quoted: **ADD TO MY AGENT — Tool-card Inline (White)** — bg `#ffffff`; color near-black; radius **0px**; padding 6×12; 30px / 12px·400 UPPERCASE; Use: per-integration card inline CTA.

Sidecar `:38–41` quoted: **LEARN MORE — Black + White variants** — bg `#000` and `#fff` variants both 0px / UPPERCASE; 14px·400; Use: contextual secondary.

Sidecar `:43–45` quoted: **TRY IT OUT — Hero secondary (White)** — bg `#ffffff` 0px / UPPERCASE; 14px·400.

Sidecar `:49–55` quoted: **GET STARTED (pricing)** — `#000` 0px / 6×8 / 33px / 14px·400 — confirmed identical to header. **BOOK A CALL** — bg `#000` 0px / 0×16 / 32px / 14px·400 UPPERCASE. **TRY COMPOSIO TODAY** — bg `#ffffff` 0px / 0×20 / 40px / 14px·400 UPPERCASE — pricing footer CTA.

Sidecar `:59–67` quoted: Composio uses **one consistent button system** across home + pricing: All radii **0px** (sharp — terminal/CLI aesthetic, no rounded chrome anywhere); All labels **UPPERCASE**; Two fills only: `#000` (default) and `#fff` (inverse on dark hero); Font 14px·400 abcDiatype across header/hero (12px on cards); Heights graduate by context: 30 (card) / 32-33 (header) / 39-40 (hero). This is one of the strictest single-system documents — sharp 0px is the entire personality, distinguishing Composio from every rounded-pill SaaS competitor.

Sidecar `:83–93` quoted (conflict matrix; Proof-only resolution, not a portable choice):

| Field | Tier 1 home | Tier 1 pricing | refero/getdesign | Resolution |
|---|---|---|---|---|
| Primary bg | `#000` | `#000` ✓ | n/a | ✓ canonical |
| Primary radius | 0px | 0px ✓ | n/a | ✓ sharp |
| Primary padding | 6×8 (header) / 10×16 (hero) | 6×8 (header) / 0×20 (footer) | n/a | ✓ contextual |
| Primary font | 14px·400 UPPERCASE | 14px·400 UPPERCASE ✓ | n/a | ✓ |
| Inverse bg | `#fff` | `#fff` ✓ | n/a | ✓ |
| Card inline | 6×12 / 30px / 12px | n/a | n/a | card-specific |

Unresolved: **None.** Single-system canonical.

Sidecar `:97–104` quoted (prior B2 lineage; not portable tokens):

```
## Components in §4

§4 already documents (prior B2):
- Primary White Fill + Cyan Accent + Ghost Outline + Phantom variants
- 0px-2px-4px radius scale
- abcDiatype + JetBrains Mono dual-font

Note: existing §4 says "Radius: subtly rounded (likely 4px)" for Primary — Tier 1 measurement contradicts this. **Primary CTAs are 0px sharp.** 4px radius is reserved for content cards, not buttons.
```

That sibling resolution is this Proof ledger. Portable DESIGN.md does not adopt it as the only radius (E2c). YAML 4px and footer live 0px stay unmerged.

Sidecar `:125–130` quoted (voice samples; extra pricing strings stay here unless already in source §10):

- *"GET STARTED"* — header Primary
- *"GET STARTED FOR FREE"* — hero Primary
- *"ADD TO MY AGENT"* — integration card inline
- *"TRY IT OUT"* — hero secondary
- *"BOOK A CALL"* — pricing CTA
- *"TRY COMPOSIO TODAY"* — pricing footer

Portable Content 490/494 keeps source §10 *“GET STARTED FOR FREE”* / *“ADD TO MY AGENT”* only (dual Primary tasks 25–26). BOOK A CALL / TRY COMPOSIO TODAY are this Proof ledger.

### Sidecar Tier 2 / philosophy boundaries (quoted; not portable tokens)

Sidecar `:71–77` quoted: `getdesign.md/composio` — directory only. `?q=Composio` — no record. **Tier 2 status: unavailable.** Tier 1 (composio.dev home + pricing) treated as authoritative.

Sidecar `:109–122` quoted as philosophy sources for §11 facts already restated at portable Scope 17: Tracxn profile; Entrackr Series A coverage; Lightspeed announcement; seed $4M (2024) led by Together Fund with Elevation Capital; Angels: **Gokul Rajaram**, **Sohum Mazumdar (Rubrik)**, **Dharmesh Shah (HubSpot)**; Series A $25M (November 2024); total funding ~$29M; 100K+ developers, 200+ companies including Glean, April, OpenNote, Altera.

Sidecar `:132–136` quoted (prior B2 batch lineage; not portable tokens):

```
### Existing §10-15 retained from prior augmentation (B2 batch)
- Voice & Tone — terminal-confident, UPPERCASE imperative
- Brand narrative — Ganatra/Vaidya 2023 SF, IIT Bombay roommates
- Two-fonts strict roles (abcDiatype + JetBrains Mono)
- Cyan glow as decorative depth only
```

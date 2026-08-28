# Intercom provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/intercom/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | intercom |
| name | Intercom |
| country | US |
| category | productivity |
| homepage | `https://www.intercom.com` |
| primary_color | `#286efa` |
| logo.type | simpleicons |
| logo.slug | intercom |
| omd format (source) | 0.1 |
| verified | 2026-05-15 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The YAML homepage is `https://www.intercom.com` (no trailing slash). The source footer writes `intercom.com` home. Both spellings are kept. Catalog identity `primary_color` `#286efa` is a frontmatter field only; it is not a `tokens.colors.*` key and is not a portable palette role. The Simple Icons slug is dual: identity here, and a portable asset pointer in `DESIGN.md` §3.

**Logo decision.** The `logo.slug` above is a Simple Icons identifier, not an Intercom-hosted asset URL. The catalog identity field is kept here and is classified in the portable document as an identity pointer, not a hosted brand file.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-05-15 |
| tokens.extracted | 2026-06-09 |
| Tier 1 live inspect (source footer) | 2026-05-08 |

The source footer records the verification verbatim as **Verified:** 2026-05-08 (omd:migrate run 29 — Apple-tier). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states. Earlier mistake reverted: prior footer captured only nav + canvas; canonical Primary is Black 6px hero + Charcoal `#111111` 4px compact across dual-product (intercom.com + fin.ai) chrome.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | helpdesk chrome, dual-product live DOM | `https://www.intercom.com` / intercom.com home | 2026-05-08 |
| fin | AI Agent product, dual-product live DOM | `fin.ai/` | 2026-05-08 |

### Tier 1 (as listed in the source footer)

- intercom.com home + fin.ai/ (dual-product live DOM via playwright)

### Tier 2

- styles.refero.design / getdesign.md — no record

### Tier 2 (Philosophy/founders)

- Wikipedia (Intercom Inc.)
- Crunchbase (McCabe)
- Irish Times (4-Irishmen origin + €87M AI investment)
- Silicon Republic ($250M debt)
- Tracxn
- Paperflite

Style ref: `claude`.

## Token note (YAML `tokens.note`)

The source frontmatter note, kept here as a ledger string and also landed in the portable body as the facts it names (primary text/buttons off-black `#111111`; Fin Orange `#ff5600` as the singular brand accent):

> primary text/buttons are off-black #111111; Fin Orange #ff5600 is the singular brand accent

## Sibling handling (`web/references/intercom/.verification.md`)

The sibling exists — confirmed with `find web/references/intercom -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Surfaces inspected: `intercom.com/` (corporate home — "the only helpdesk designed for the AI Agent era"); `fin.ai/` (Fin AI Agent product — separate domain, inverse chrome). Note: `intercom.com/fin` 301-redirects to `fin.ai`.
- Start free trial — Hero Primary (Black Pill, intercom.com): bg `rgb(0, 0, 0)` = `#000000`; color `#ffffff`; radius **6px**; padding 12×16; 42px / 16px·400
- Start free trial — Compact Black (Charcoal #111): bg `rgb(17, 17, 17)` = `#111111`; color `#fff`; radius **4px**; padding 0×14; 40px / 16px·400
- Fully-featured helpdesk — Cream Card: bg `rgb(250, 249, 246)` = `#faf9f6`; color `#111111`; radius 0px; padding 16px; 53px / 16px·400
- Nav links — Ghost (intercom.com): bg transparent; color `#000`; radius **6px** (visible on hover); padding 0-8×4-12; 40px / 16px·400
- Start free trial — Inverse White (fin.ai): bg `#ffffff`; color `#000`; radius **6px**; padding 12×16; 40-42px / 16px·400
- Two-tier radius + dual-canvas: Hero Primary 6px / 42px / `#000` or `#fff`; Compact Primary 4px / 40px / `#111111`; Canvas `#faf9f6` on intercom.com, dark on fin.ai; all weight 400
- Tier 2a getdesign.md/intercom — directory only; Tier 2b styles.refero.design `?q=Intercom` — no record
- Founder/funding facts matching the source §11, including the sibling's Irish Times quote "aggression on all fronts"
- Voice samples (live-verified): *"Start free trial"*; *"Contact sales"* / *"View demo"*; *"Learn more"*; *"Free 14 day trial"*

Sibling-only items (mention, not portable use). This sentence names the field kind so the row can be found; it does not assert that those strings are absent from this file:

- published CTAs `Start free trial`, `Contact sales`, `View demo`, `Learn more`, `Free 14 day trial`
- Cream Card computed radius `0px` and height `53px`
- fin.ai Hero height `40-42px` (sibling Inverse White row; source footer writes `#fff` 6px on fin.ai and no height)
- Ghost nav padding `0-8×4-12`
- `intercom.com/fin` 301-redirect
- getdesign.md directory-only status and `?q=Intercom`
- rgb spellings `rgb(0, 0, 0)`, `rgb(17, 17, 17)`, `rgb(250, 249, 246)`
- Irish Times quote "aggression on all fronts" (sibling philosophy source; not in the source body)

Those sibling-only strings are transcribed in the bullet list above. They are not promoted into `DESIGN.md`.

Values the sibling shares with the source body (corroboration, not new portable facts): `#111111`, `#faf9f6`, `#ffffff`, `#000` / `#000000`, 6px hero / 4px compact, 42px / 40px heights, 16px·400, `The only helpdesk designed for the AI Agent era`, Fin, fin.ai, 2011 founders, Contrast, Exceptional, Rackspace, 2023 Fin, 2024 €87M, 2025 $250M.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.off-black / white / canvas / fin-orange / report-orange / report-blue / report-green / report-red / report-pink / black-80 / black-60 / muted / tertiary / border / warm-sand | home + fin (prose-derived) |
| tokens.typography.family.sans / family.serif / family.mono | home + fin |
| tokens.typography.display-hero / section / feature / body / nav | home + fin |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | home + fin |
| tokens.rounded.sm / md / lg / full | home + fin |
| tokens.shadow.flat | home + fin |
| tokens.components.button-primary / button-outlined / button-warm / card / nav-link | home |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 3인 (이름·나이·도시 포함) | Deleted. The source's own header labels them fictional archetypes. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or occupation classifications (D2, D2a). |
| §15 "Standard cubic-bezier" | Deleted. Unattributed curve. Duration tokens and the hover-scale / reduced-motion rules kept. |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Off Black `#111111`, Warm Cream `#faf9f6`, Fin Orange `#ff5600`, Oat `#dedbd6`, Muted `#7b7b78` — Foundations semantic color. Hero: warm cream `#faf9f6` background, Saans 80px weight 400, line-height 1.00, letter-spacing -2.4px, `#111111` — Type roles Display Hero + Scope. Dark button `#111111`, 4px radius, hover scale(1.1), white bg — Compact Primary.

## Derived editorial inventory

Portable `DESIGN.md` carries 35 complete B2a qualifications. This table is 35 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope ¶1 | Customer messaging platform; two named pages as token surfaces; prose-derived bound kept beside the footer live-DOM pass; values stay attached |
| 2 | Experience Scope ¶2 | Magazine-like / billboard / industrial / physical grow / five-font ecosystem / oklab-as-sophisticated-management readings |
| 3 | Experience Scope ¶3 | Founding-and-Fin narrative as context that does not supply interface tokens |
| 4 | Primary tasks | Selecting the three recorded labels as primary tasks |
| 5 | Audience | Group-level support team leads, RevOps, AI/Fin admins |
| 6 | Distinctive traits | Grouping the Key Characteristics as the distinctive layer |
| 7 | Principles | The five numbered items and their UI implications |
| 8 | Application rules | The five Do rules and the reasons attached |
| 9 | Avoid | The four Don't rules and the reasons inside them |
| 10 | Foundations Semantic color | Off-black-as-text-and-button / cream-as-warmth / Fin-as-singular-accent / oat-as-warm-border characterizations |
| 11 | Foundations Semantic color §2-only | Fifteen YAML keys kept on their paths; Report Lime / Green / Deep Blue stay §2-only rows |
| 12 | Foundations Spacing | Unitless steps unmerged from matching radius keys, type sizes, and the warm-card 16px padding |
| 13 | Foundations Shape | `full: 9999` unmerged from `999` and type size; footer 6px stays on Hero Primary, not a second `tokens.rounded.md` |
| 14 | Foundations Elevation | Flat treatment for observed cream cards, not a house elevation scale |
| 15 | Foundations Motion | Unattributed durations, role, and rules; "Standard cubic-bezier" omitted |
| 16 | Typography Official product-use | "No published type token" |
| 17 | Typography Official distributed asset | No exclusive downloadable font package |
| 18 | Typography Declared-only | Fallback stacks and MediumLL / LLMedium are not a replacement for Saans |
| 19 | Typography License | Custom families without an Intercom-issued license notice |
| 20 | Typography Outside these captures | Typography beyond the two named pages sits outside this contract |
| 21 | Typography Family | Fallback prohibition; MediumLL / LLMedium stay off `tokens.typography.family.*` keys |
| 22 | Type roles | Five token-set roles kept on their paths; eight hierarchy-only rows stay off invented keys; unitless line-height ratios stay ratios; both tracking / Body line-height spellings kept |
| 23 | Assets | Simple Icons slug as identity pointer; Fin Orange / Fin name as brand-narrative and accent facts, not a hosted mark URL |
| 24 | Components how-to-read | Kind and applicability verdicts |
| 25 | Outlined keep-both | YAML `#faf9f6` and §4 `transparent` stay two records |
| 26 | Warm Card oklab | Ellipsis kept; no invented oklab triple |
| 27 | Hero Primary | Footer measurement placed on a `not in the token set` record rather than an invented YAML type; fin.ai hero read as canvas-inverted |
| 28 | Nav Link §4 body | 4px–6px nav buttons and orange Fin accent sit on this nav record; not a second YAML type |
| 29 | State record | Inbox table kept as a system-level contract, not attached to destination marketing controls |
| 30 | Layout geometry | 4px / 6px / 8px pairing as recorded role geometry, not a universal radius scale |
| 31 | Layout responsive | Breakpoints stated at system level rather than measured across viewports |
| 32 | Content & Locales | Voice characterization, register reading, and tone table |
| 33 | Content Forbidden phrases | Premise-to-register causal |
| 34 | Content & Locales close | Byte-exact published strings; a gloss may sit beside a line and never replaces it |
| 35 | Recorded unresolved | Named values, not a license to invent |

## Proof notes

- verification schema from sibling: Tier 1 live inspect 2026-05-08; conflicts: none
- tokens.source: prose-derived
- components_harvested: true
- Uncaptured hover / focus-visible treatments beyond the recorded scale(1.1) / scale(0.85) pair are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official history is narrative context, not a token source. The source's own §11 strings kept as narrative facts: `2011`; `California`; four Irish designers and engineers; `Eoghan McCabe`; `Des Traynor`; `Ciaran Lee`; `David Barrett`; `Contrast`; `Exceptional`; Rackspace 2011; Dublin 30; San Francisco HQ; `2012` Biz Stone; David Sacks; Andy McLoughlin; Dan Martell; 500 Global; Digital Garage; Series A $6M March 2013; Social Capital; `$250M` debt 2025; `€87M` / `$94M` 2024; "the customer messaging platform"; Zendesk; conversation-first UX; `2023` Fin / GPT-4; 2025 `fin.ai` discrete product surface alongside intercom.com helpdesk chrome. They do not by themselves supply interface tokens.
- No separately published Intercom UI specification is named in the source. Every derived-editorial close uses the toss-form `not Intercom-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석)

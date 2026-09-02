# Mercury migration log

Source: `web/references/mercury/DESIGN.md`
Destination: `docs/design-md-weight/migrated/mercury/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/mercury/provenance.md`
Date: 2026-09-02
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**

## Legacy section table

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance Identity; 옮김 → H1 `Mercury Design System`, Scope homepage, Foundations Indigo as catalog `primary_color`, Assets favicon slug | Portable file has no frontmatter. Name kept as H1. Homepage `https://mercury.com` dual: DESIGN dest **2** at `:9`/`:13` + provenance dest **6** at Identity `:13` / dual-sentence `:29` / Freshness sibling `:40` / Surfaces `:50` / Sources `:77` / Tier 1 `:84` (E2a). `#5266eb` dual: DESIGN dest **23** + provenance dest **5** at Identity `:14`/`:29`, Sibling shared `:71`, HTML-comment `:90`, YAML colors `:103` (E2a). Google s2 favicon slug dual Assets + provenance Identity (E2a); `s2/favicons` DESIGN dest **1** / provenance dest **2**. |
| YAML `omd`, `verified`, `added`, `tokens.source`, `tokens.extracted`, `components_harvested` | 분리 → provenance Identity / Freshness (A1c) | `prose-derived` is this ledger only as a YAML key. Portable Scope restates “drawn from the document's own prose (extracted 2026-06-09)” in plain language. Grep: `prose-derived` = 0 in DESIGN.md, present in provenance. |
| YAML `tokens.colors` | 옮김 → Foundations Semantic color | All 16 hex keys. Unmerged roles for shared hexes (surface vs Ink Default; canvas-elevated vs Ink Emphasized; ink-subdued vs Hairline Subdued; primary-active vs unresolved success; `#ffffff` on-primary / card.bg / dialog.bg / Product Card / Centered Modal / toggle thumb / Top Nav link hover). Dual claim-ledger in provenance (E2a). |
| YAML `tokens.typography` | 옮김 → Typography & Assets | Family Arcadia / Arcadia Mono; roles with YAML `lineHeight` `1.05` `1.10` `1.25` `1.30` `1.40` `1.625` `1.50` kept as ratios (A1a). Tracking YAML `0.42` and body `+0.42px` both carried. Display Hero keep-both: YAML use `Marketing hero, Arcadia Display` DESIGN dest **1** / provenance dest **1**; body Notes `Marketing hero headlines` DESIGN dest **1** (provenance dest **0** — YAML ledger only). Dual YAML block in provenance (E2a). |
| YAML `tokens.spacing` / `rounded` / `shadow` | 옮김 → Foundations Spacing, Shape, Elevation | YAML numbers without added px suffix. Body common values and 40px pill kept unmerged. YAML shadow three keys unmerged from body five-level table and toast-local `0px 8px 24px rgba(0,0,0,0.3)`. Dual provenance YAML token block (E2a). |
| YAML `tokens.components` | 옮김 → Components & States | Primitive types preserved (A1b): `Type: button` ×5, `Type: card` ×2, `Type: tab`, plus body `Type: input` / `toast` / `dialog` / `toggle` / `badge`. Use strings kept byte-exact (`Single primary action Open Account`, `Inline low-emphasis Learn more`, `Signature hero email-capture pill`, `Highlighted status New/Active`, `Boolean settings, on=indigo off=#c3c3cc`). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, Distinctive traits | Original wording restored under a B2a limiter (quiet confidence; cinematic middle ground; luminous rather than glaring; light/dark duality as the core tension). Values `#171721` `#ededf3` `#5266eb` `#9cb4e8` `#cdddff` 480 +0.42px 4px/12px/40px 1.625. |
| §2 Color Palette & Roles | 옮김 → Foundations Semantic color | Roles, Hairline Subdued, Magenta-rose error `#d03275`, unresolved success (`#3442a6` family / contextual green — not promoted). Neutral-ramp reading B2a-limited. |
| §3 Typography Rules | 옮김 → Typography & Assets | Stacks, weights 360/400/420/480, full role table including body-only Display Medium 36px / 400 / 1.15 / +0.2px, five typography principles with B2a. Fallback stack recorded as fallback, not as the brand face. Display Hero Notes keep-both with YAML use: body `Marketing hero headlines` DESIGN dest **1** at Type roles (source §3 Notes); YAML use `Marketing hero, Arcadia Display` DESIGN dest **1**. Body Large already keep-both YAML `Lead paragraphs` / body `lead paragraphs, descriptions`. |
| §4 Component Stylings | 옮김 → Components & States | All named controls plus body-only Outline, Dark Text Field, Elevated Card, Compact List Row, Error Badge, Top Nav. Capture selectors none in source. Tier 1 live-DOM sentence dual Scope + provenance Sources (E2a). |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations Spacing/Shape | 8px base, common values including 32px/64px/96px, ~1200px, 8-10 columns, left sidebar + fluid content region, One idea per band, Dense where it counts, radius scale including Pill (40px) and Circle (9999px). |
| §6 Depth & Elevation | 옮김 → Foundations Elevation + Gradient & light | Five-level table including Standard (2) `0px 4px 16px rgba(23,23,33,0.10)` (body-only). Shadow philosophy B2a-limited. Vignetting and glass/blur kept. |
| §7 Do's | 옮김 → Experience Recorded application rules | Eight Do's. Not placed in Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience Avoid | Seven Don'ts, original wording (`Don't put accent periwinkle/mist on buttons`, `Don't use a saturated fire-red`, etc.). |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | Breakpoint table `<640px` / `640-1024px` / `1024-1280px` / `>1280px`, touch targets ~40px / ~32-44px / ≥44px, collapsing (icon rail, 65px → ~36px), image behavior 20-24px icons. |
| §9 Agent Prompt Guide | 삭제 (tool prompts / iteration recipe wrappers). Unique values rescued (A3) → Components local recipes + Foundations Spacing | Deleted: example component prompt wrappers and the numbered iteration guide as tool workflow. Rescued unique combinations: dashboard balance-card amount 28px / 480 `#1e1e2a` + label 12px / 480 `#70707d`; transaction-row merchant 15px / 480 + category 13px `#70707d` + ≥44px; `96px band rhythm` and `16-24px gaps`. Color hexes in §9 already live in Foundations. |
| §10 Voice & Tone | 옮김 → Content & Locales | Voice table and forbidden moves with B2a. Brand strings byte-exact: `Open Account`, `Apply now`, `Get started`, `Banking for startups`, `Transfer sent`, `Account approved`, `Oops`, `Something went wrong`. |
| §11 Brand Narrative | 옮김 → Experience `scope` | Original causal wording under B2a: 2017 Immad Akhund / Max Tang / Jason Zhang, public launch 2019, faxed forms, “That thesis shows up in the design”, “deliberately not the institutional navy… nor the playful blue”, “make managing company money feel calm, fast, and well-made”, theatrical/editorial vs serene/dense, refusals. Founding facts also in provenance HTML-comment ledger (E2a). |
| §12 Principles | 옮김 → Experience Principles | Eight numbered principles with B2a example form at DESIGN `:54` dest **1**: “These 8 items are a derived editorial implementation inference from the reviewed material; they are not Mercury-authored or a separately published UI specification.” (Mercury has no first-party published UI spec in this packet; third-party shadcn export is named as a separate evidence domain, not copied into the limiter as if it were Mercury-authored.) Portable complete B2a forms DESIGN dest **32**; provenance Derived editorial inventory **32** data rows at `:149–180` (E1 1:1). |
| §13 Personas | 삭제 (D2 / D2a) | Three fictional archetypes. Not promoted to Primary tasks or Audience. Not re-hosted in provenance even as names, cities, motivations, or affiliation classifications. Provenance omission ledger uses unidentified count and field-kind only. |
| §14 States | 옮김 → Components & States capture record + per-component applicability | Full §14 table preserved in portable body (A2). Generic `Focus` kept as additional observed state, not copied onto `focus-visible` rows (B1). Applicability by control meaning (C1/C2): committing CTAs/inputs/dialog keep loading/error/success applicable with omitted unresolved treatments; ghost “Learn more”, tabs, nav links, list rows, toggle close those three with role reasons. Badges/cards/toast: kind + map omitted (C4). Not a complete state-coverage claim (C3). |
| §15 Motion & Easing | 옮김 → Foundations Motion | Durations 0ms / 150ms / 240ms / 360ms / 320ms kept. Signature motions and `prefers-reduced-motion: reduce` kept. `ease-enter` `cubic-bezier(0.16, 1, 0.3, 1)` and `ease-glide` `cubic-bezier(0.22, 0.61, 0.36, 1)` kept with extrapolation limiter. `ease-exit` / `ease-standard` *names* kept; cubic-bezier values omitted as spec-template matches (T1-3 constraint 5). Source writings `cubic-bezier(0.4, 0, 1, 1)` and `cubic-bezier(0.4, 0, 0.2, 1)` live in provenance Omitted easing curves (E2a: provenance + portable names/Named gaps). B3 five-kind gate is in portable Motion at DESIGN `:210` dest **1** (`transition properties, animation name, duration, easing, and reduced-motion behavior`) — B3 유지 only because that full sentence is present. |
| HTML comment (token grounding, interpretive class, personas note) | 분리 → provenance HTML-comment grounding; 옮김 → Experience Scope class split | Verified-core list and “editorial readings / reasoned extrapolations” limiter in portable Scope. URLs dual Scope + provenance Sources (E2a). |
| Footer / sibling `.verification.md` | 분리 → provenance Freshness / Sibling / Proof notes | Sibling **exists** at `web/references/mercury/.verification.md` (path recorded directly; a dotfile). Not a portable Named-gaps domain. Sibling-only computed samples stay on the provenance Sibling ledger and are not portable facts. DESIGN dest **0** for sibling-only needles `#000000` / `49.3472` / `arcadiaDisplay` / `border-radius 32px` / `playwright` (measured in DESIGN.md; this log mention is not use). |

## A5 / A5a — brand-published strings

Sibling `web/references/mercury/.verification.md` exists (path recorded directly). It records live-DOM computed samples, not brand-issued copy needles. Sibling contributed **0** A5a copy strings. Gate `copy-loss` (run after the worker file existed): `verdict: PASS`, `compared: 0`, `candidates: 176` — “바늘 0개 — 이 브랜드에서 A5는 기계 검사되지 않았다.” `verdict: PASS` is “none of the compared needles were lost,” not “copy was preserved.” A5a hand sweep (brand-issued labels, CTAs, slogans, microcopy, forbidden-register examples), re-measured after B2a limiter edits with `grep -o <pattern> DESIGN.md | wc -l` (file-by-file; not `grep -c`):

| String | Class | DESIGN.md count |
|---|---|---:|
| `Open Account` | CTA | 7 |
| `Apply now` | CTA | 3 |
| `Get started` | CTA | 1 |
| `Learn more` | ghost label | 4 |
| `Banking for startups` | headline example | 1 |
| `Transfer sent` | success copy | 1 |
| `Account approved` | success copy | 1 |
| `No transactions match these filters` | empty-filtered caption | 2 |
| `Oops` | forbidden-register | 1 |
| `Something went wrong` | forbidden-register | 1 |
| `New` | badge label (also appears inside other English words; needle kept because source quotes it) | 3 |
| `Active` | badge label (also “Indigo Active”; source quotes it) | 9 |
| `Failed` | badge label | 2 |
| `Declined` | badge label | 2 |

Hand-sweep denominator: 14 brand-issued strings. Unsurvived: 0. `verdict` of the machine copy-loss check is not an A5 claim; A5a denominator is this 14/14.

YAML use-strings (`Marketing hero, Arcadia Display` DESIGN dest **1** / provenance dest **1**, `Single primary action Open Account`, `Inline low-emphasis Learn more`, `Signature hero email-capture pill`, `Highlighted status New/Active`, `Boolean settings, on=indigo off=#c3c3cc`, `Category/status metadata`, `Dashboard panels, balance cards`, `Dashboard section switching`, `Transient confirmation`, `Confirmation/form modal`, `Standard dashboard field`, `Secondary action`) are catalog field text, also kept byte-exact in Components / Type roles. Source §3 Display Hero Notes `Marketing hero headlines` is keep-both with that YAML use (DESIGN dest **1**; provenance dest **0**).

## Multi-destination values (E2a)

Grep-confirmed before this row was written:

| Value | Portable | Provenance |
|---|---|---|
| `https://mercury.com` | Experience Scope dest **2** at `:9`/`:13` | Identity `:13`, dual-sentence `:29`, Freshness sibling `:40`, Surfaces `:50`, Sources `:77`, Tier 1 `:84` (P dest **6**) |
| `#5266eb` | Scope, Foundations Indigo, Components (DESIGN dest **23**) | Identity `primary_color` `:14`/`:29`, Sibling shared `:71`, HTML-comment grounding `:90`, YAML colors `:103` (P dest **5**) |
| Google s2 favicon slug | Typography & Assets | Identity logo |
| `shadcn.io/design/mercury` | Scope, Font evidence, Recorded conflicts | Sources, HTML-comment grounding, Recorded conflicts |
| HTML-comment class split (editorial readings / reasoned extrapolations) | Experience Scope | HTML-comment grounding |
| YAML color/type/spacing/radius/shadow/component keys | Foundations / Typography / Components | YAML token block |
| `ease-exit` / `ease-standard` names | Foundations Motion + Named gaps | Omitted easing curves (values only in provenance) |
| `ease-enter` `cubic-bezier(0.16, 1, 0.3, 1)` | Foundations Motion | Omitted-easing “Kept in portable” list |
| Founding 2017 / launch 2019 | Experience Scope | HTML-comment narrative sentence |
| Recorded conflicts list | Governance | Recorded conflicts (ledger copy) |

## F1 B2a scan

Re-read portable DESIGN.md. Complete B2a forms DESIGN dest **32** (`derived editorial implementation inference` 32 / `not Mercury-authored` 32). Provenance Derived editorial inventory **32** data rows (`:149–180`). Limiters adjacent to: Scope two-register non-proxy `:11`; three-source domains + HTML-comment class split `:13`; founding facts as narrative-not-tokens `:17`; atmosphere/causal hyphen list plus restored §1/§11 original wording `:19`; Primary-tasks selection `:29`; Audience restriction `:38`; Distinctive traits `:42`; Principles (example form) `:54`; Recorded application rules `:67`; Avoid `:80`; unmerged color roles including `#ffffff` splits `:96`; Error rose reading `:125`; Success reconstruction note `:126`; Neutral-ramp reading `:133`; Spacing YAML/body unmerge `:141`; Shape 9999/40px unmerge `:154`; Elevation YAML-three / body-five / toast-local unmerge `:174`; shadow philosophy `:176`; Gradient & light “focuses attention” `:178`; Motion extrapolation class `:182` + attached readings `:201`; Font evidence sorting `:218`; Family fallback-not-substitution `:235`; Weights “authoritative without feeling heavy” `:237`; Type roles keep-both `:241`; typography principles `:257`; Assets Google s2 `:267`; capture-record how-to-read (Focus≠focus-visible, YAML/body keep-both, not complete) `:276`; button-system “disciplined / not pill-soft” `:297`; Layout whitespace philosophy `:701`; Layout not-complete viewport `:737`; Content voice table `:742`. Governance controlled copy is spec text, not brand interpretation.

## Unique-expression contrast (제출 전 자가 대조)

Extracted 104 source-unique strings (years, proper names, quoted copy, value modifiers such as `+0.42px` / custom 480 / `not the institutional navy`, §15 durations and kept curves, §5/§7 constraint sentences). First `grep -oF` pass: 103 present, **1 zero** (`96px band rhythm`, a §9-only rhythm phrase). Restored into Foundations Spacing as `96px band rhythm`. After restore: 104/104 in `DESIGN.md`. Restored count: 1. Separate keep-both restore: source §3 Display Hero Notes `Marketing hero headlines` was missing from DESIGN.md (YAML use `Marketing hero, Arcadia Display` only). Now DESIGN dest **1**. YAML use DESIGN dest **1** / provenance dest **1** unchanged.

Persona given names, cities, motivations, and affiliation classifications: unidentified deletion (D2a). Not re-listed here.

## Gate

`node test-v2/tools/migrate-reference.mjs --brand mercury --gate-only` → `verdict: PASS`, problems `[]`, copy-loss coverage `compared: 0` / `candidates: 176`. Machine A5 did not compare any needle. A5a denominator is the 14/14 hand sweep above, not that PASS.

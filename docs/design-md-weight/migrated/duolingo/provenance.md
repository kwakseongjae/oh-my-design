# Duolingo provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/duolingo/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | duolingo |
| name | Duolingo |
| country | US |
| category | education |
| homepage | https://www.duolingo.com |
| primary_color | `#58CC02` |
| logo | type `simpleicons`, slug `duolingo` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-06-08 |
| components_harvested | true |

Token note from source: deterministic pick (`#1a73e8`) was a Google sign-in embed false-positive; canonical = Feather Green.

Catalog logo type `simpleicons` / slug `duolingo` is triple: this identity ledger + portable Typography & Assets boundary sentence (`Catalog logo metadata is Simple Icons identity (duolingo)`, not a captured first-party mark) + Named gaps identity-only mark file (E2a). Catalog homepage `https://www.duolingo.com` is Scope catalog-homepage identity + this identity/surfaces/Tier 1 ledger. Live host `www.duolingo.com` is also portable Foundations Semantic color corroboration and Font evidence live computed surface-use (E2a). Catalog `primary_color` `#58CC02` is triple: this identity ledger + portable Distinctive (`catalog primary_color`) + portable Foundations Feather Green (`catalog primary_color`) (E2a). Token note is quadruple-destination: Experience Scope + Foundations Feather Green + Experience Avoid (`#1a73e8` not primary) + this ledger (E2a). `design.duolingo.com` / `design.duolingo.com/identity/color` is triple: Experience Scope + Foundations Semantic color corroboration + this surfaces/sources/Tier 1 ledger (E2a).

No `ds.name` / `ds.url` / `ds.type` / `ds.description` fields exist on the source. None are invented here.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-06 |
| added | 2026-06-06 |
| tokens.extracted | 2026-06-08 |

Conflicts unresolved: none as a product-vs-marketing clash. Preserved value pairs inside the product surface: YAML lowercase hex vs body uppercase hex (same roles, not two palettes); YAML `tokens.shadow.button-3d` `0 4px 0 0 #58a700` vs body lip `0 4px 0 #58A700`; YAML `tokens.shadow.card` `0 2px 0 0 rgba(0,0,0,0.1)` vs YAML/body Lesson Card `shadow: none`; YAML `title` 24px / lineHeight `1.25` vs body Heading Large 24px / `32px (1.33)`; YAML `button` lineHeight `1.2` vs body Button Label `20px`; YAML spacing 4/8/12/16/24/32/48 vs body extra 20px/40px; YAML `family.sans` `din-round` vs body `DIN Next Rounded`; YAML `display-hero` tracking `-0.5` vs body `-0.5px`. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

## Surfaces

The source has no `verification_v2` and no per-surface inspection dates. Global `verified` is 2026-06-06; that date is not rewritten here as a per-surface capture. Named first-party URLs:

| url | how the source names it |
|---|---|
| https://www.duolingo.com | catalog homepage; footer live product / live production site |
| design.duolingo.com | footer official brand identity/color portal |
| design.duolingo.com/identity/color | footer / HTML comment official brand identity & color portal |

Marketing/landing is named as a parallel wider-container surface (max ~1080px), not the primary lesson-spec target. It is not given invented routes here.

## Sources

Same named URLs as Surfaces. No independent `captured` dates exist on the source; none are invented. `design.duolingo.com/identity/color` is triple-destination with portable Scope and Foundations Semantic color corroboration (E2a). Live host `www.duolingo.com` is Scope + Foundations Semantic color corroboration + Font evidence live computed surface-use + this ledger (E2a).

### Tier 1

- design.duolingo.com (official brand identity/color portal)
- design.duolingo.com/identity/color — Duolingo's official brand identity & color portal
- www.duolingo.com — live product surface
- https://www.duolingo.com (live production site)

### Tier 2

Widely-documented Duolingo brand tokens (Feather Green `#58CC02`, Macaw `#1CB0F6`, Cardinal `#FF4B4B`, Bee `#FFC800`, Fox `#FF9600`, Eel `#4B4B4B`, Wolf `#777777`, Swan `#E5E5E5`, Polar `#F7F7F7`) corroborated across multiple brand-color references. Animal-named palette also names Beetle `#CE82FF`, Hare `#AFAFAF`. Accessed 2026-06-06.

### Narrative (not interface tokens)

Widely documented public facts recorded in the source: founded 2011 by Luis von Ahn and Severin Hacker out of Carnegie Mellon University; free language education premise; von Ahn invented reCAPTCHA; Nasdaq 2021; mascot Duo.

No live homepage WebFetch voice strings are recorded in this source. None are invented.

## Claim ledger

The source has no `verification_v2` and no claim-to-surface mapping. Global `tokens.source: reconciled` and `tokens.extracted: 2026-06-08` are identity metadata. They are not proof that each color token was independently confirmed on both the identity portal and the live product, or that typography, spacing, and component tokens were independently confirmed on the live product. No per-claim surface table is invented here.

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names and uses kept):

- `ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)`
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`
- `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)`
- `ease-bounce` `cubic-bezier(0.34, 1.56, 0.64, 1)`

These are unattributed. `ease-exit` matches the legacy spec template (`spec/omd-v0.1.md`). Duration tokens, easing names/uses, signature-motion prose, and reduced-motion behavior remain in portable Motion. The four omitted names also sit in portable Named gaps (E2a). B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion beyond those tables. The full B3 sentence (“Official documentation of a single curve or duration is not that gate”) is in Foundations Motion, not in Named gaps.

## Proof notes

- tokens.source: `reconciled`; `components_harvested: true`
- No `ds.type` on source; none invented (A1c)
- Catalog logo Simple Icons slug `duolingo` is triple-destination: this identity ledger + portable Typography & Assets boundary sentence + Named gaps identity-only mark file (E2a)
- Catalog homepage `https://www.duolingo.com` is Scope catalog-homepage identity + this identity/surfaces/Tier 1 ledger. Live host `www.duolingo.com` is also portable Foundations Semantic color corroboration and Font evidence live computed surface-use (E2a)
- `primary_color` `#58CC02` is triple-destination: identity + portable Distinctive (`catalog primary_color`) + portable Foundations Feather Green (`catalog primary_color`) (E2a)
- Token note (`#1a73e8` false-positive / canonical Feather Green) is quadruple-destination: Experience Scope + Foundations + Experience Avoid + this ledger (E2a)
- `design.duolingo.com` / `design.duolingo.com/identity/color` is triple-destination: Experience Scope + Foundations Semantic color corroboration + this surfaces/sources/Tier 1 ledger (E2a)
- Footer **Verified** 2026-06-06 / Tier 1 / Tier 2 / Note live here. That global verified date is not a per-surface `inspected`/`captured` value
- Interpretive claims in source (fun-first thesis; children’s-book-that-grew-up; design language inseparable from the free habit-driven model; refuses the aesthetic of school / cold SaaS; numbered §12 principles; capture-bound §7 Do’s / §3 type-rule application; source Don’ts; voice as mischievous friend / passive-aggressive owl; sparingly / tap-first input use; glossy / gamey progress sheen; lip-always-solid; reduce-motion still-celebratory-in-copy; Layout one-focal-action composition; answer-tile comfortable spacing for rapid tapping) are editorial readings of the design, not documented Duolingo statements. Reconstruction application judgements (lesson value is not a marketing/Super/settings proxy; 12px/16px radii are local geometry not a universal radius; named layout measurements are not a claim that every unlisted surface shares them) are the same evidence class. Portable Scope atmosphere / Scope habit-driven causal / Scope evidence-domain (not a proxy) / Distinctive / Principles numbered list / capture-bound application / Avoid source Don’ts / Elevation / Typography type-character / Layout whitespace / Layout composition (one focal action) / Layout spacing-purpose (rapid tapping) / Layout measurement-application / Foundations lesson-screen composition / Foundations Shape local-geometry / Content / Motion celebration-license and reduce-motion character / Capture-record characterizations / Sign-up Input tap-first / Progress “gamey sheen” / lip-always-solid keep that evidence-class limit adjacent in the body (B2/B2a)
- Font naming: source body + Tier-2 narrative name Feather Bold (bespoke display, curves echo Duo / owl-curve inspired) and DIN Next Rounded / `din-round` for UI/body. That context is restored in portable Font evidence as source-stated / Tier-2 narrative. It is not Official product-use
- Source §13 personas are fictional archetypes informed by publicly described language-learner segments, not specific individuals. Portable Audience keeps the exclusion boundary and independently named Super/Plus / Beetle / out-of-hearts / hearts facts. Names, ages, cities, employers, biographies, and Daniel’s `ads` are not copied here (D2). Primary tasks come from the lesson / CHECK / streak-progress product loop, not §13
- Named `Focus` `border #1CB0F6 (2px)` on the sign-up field is not `focus-visible` treatment evidence (B1). The omitted `focus-visible` treatment is dual: Components applicability rows + Named gaps (E2a)
- Nunito as Feather Bold stand-in (not the face) is triple: Typography Family/Unresolved + Avoid + Named gaps (E2a)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete — that negative boundary is dual: capture-record sentence + Named gaps (E2a)
- No `[FILL IN]` placeholders exist in the source; none are emitted

# CakeResume provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/cakeresume/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | cakeresume |
| name | Cake |
| country | TW |
| category | saas |
| homepage | https://www.cake.me |
| primary_color | `#13AB67` |
| logo | favicon `https://www.google.com/s2/favicons?domain=cake.me&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-08 |
| components_harvested | true |

Catalog `primary_color` `#13AB67` is multi-destination (E2a): this identity ledger 14/21/27; portable Scope atmosphere 13; Distinctive list-head 36 / bullet 38 / one-filled-action 45; capture-bound limiter 57 / Reserve 59; Avoid list-head 69 / Don’t 71; Foundations unmerged-role 82 / Brand green 84; capture-record Default action 162 / Secondary Log In 163; Primary (Sign Up) Background 183; Secondary (Log In) Text 210. Catalog homepage `https://www.cake.me` is this identity ledger 13/21/44/46/52/58 + portable Experience Scope 9/11 (E2a). Line 155 restates the URL in the unqualified-inventory sentence; it is not a second portable destination.

Catalog logo metadata is a Google favicon lookup, not a captured first-party mark. The literal URL `https://www.google.com/s2/favicons?domain=cake.me&sz=128` is this identity ledger only (provenance-only). Portable Typography & Assets 153 holds a URL-free Google-favicon identity-boundary sentence, not the URL string. Named gaps 324 names `first-party logo mark beyond catalog Google-favicon identity` without the URL string (E2a: URL destination and URL-free boundary destinations are separate).

YAML `tokens.source` is `prose-derived` (A1c) — provenance-only source-class field. YAML has no `ds.type`. None is invented. YAML `components_harvested: true` is this identity ledger (A1c).

YAML `tokens.colors.brand` is the same hex as `primary` / catalog `primary_color` (`#13AB67`). Dual: this ledger 27 and portable Foundations Brand green 84 (YAML `primary` and `brand` named as the same role, not merged into a second color). Unmerged-role limiter 82 restates the same hex as not heading / not accent.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-01 |
| tokens.extracted | 2026-06-08 |

Conflicts unresolved: none.

Verified note from source footer: 2026-06-01. The source footer does not contain `(omd:migrate)`.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | live-brand-site | https://www.cake.me | 2026-06-01 |

Verification product URL `https://www.cake.me` is dual-destination: portable Experience Scope and this ledger (E2a). Footer labels it “live brand site — colors, typography, components”.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.cake.me | 2026-06-01 |
| github-org | brand-owned-engineering | https://github.com/cakeresume | cited in source footer |
| medium-pub | brand-owned-publication | https://medium.com/cakeresume | cited in source footer |

### Tier 1

- https://www.cake.me (live brand site — colors, typography, components)
- https://github.com/cakeresume (brand-owned engineering org)
- https://medium.com/cakeresume (brand-owned publication)

GitHub and Medium URLs are provenance-only. They are not token-capture surfaces and are not portable Scope URLs.

### Tier 2 (no usable record)

- getdesign.md/cakeresume — NOT LISTED. No values used.
- refero — not listed. No values used.

### Narrative (not interface tokens)

Public-history facts (Taiwan origin as CakeResume; growth into a global talent network connecting people, portfolios, and companies; multilingual, cross-border audience; current bundle of AI-assisted resume and portfolio building, job search, and recruiting SaaS) are in portable Experience Scope under the public-history and rename-ambition B2a limiters. They do not convert GitHub or Medium URLs into UI tokens. Dual: portable Scope + this Narrative (E2a). The GitHub and Medium URLs stay provenance-only.

## Claim ledger

Claims use the live brand site as the sole recorded surface. Token extraction is `prose-derived` (2026-06-08). `components_harvested: true`.

| claim | surface |
|---|---|
| tokens.colors.primary / brand | home |
| tokens.colors.canvas | home |
| tokens.colors.foreground | home |
| tokens.colors.heading | home |
| tokens.colors.accent | home |
| tokens.colors.muted | home |
| tokens.colors.hairline | home |
| tokens.colors.chip-text | home |
| tokens.colors.on-primary | home |
| tokens.typography.family.sans / cjk | home |
| tokens.typography.heading.size / weight / use | home |
| tokens.typography.body.size / weight / use | home |
| tokens.typography.control.size / weight / use | home |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | home (YAML unitless; body does not walk the full scale) |
| tokens.rounded.sm / md / lg | home |
| tokens.rounded.full | home (YAML 9999; source Don’t forbids pill / large-radius; conflict preserved, not promoted as a pill token) |
| tokens.shadow.none | home |
| tokens.components.button-primary.* | home |
| tokens.components.button-secondary.* | home |
| tokens.components.language-selector.* | home |
| tokens.components.chip-neutral.* | home |

## Capture selectors

The source records no CSS selector, `data-omd-capture` id, or computed-style pointer. None is invented.

## Proof notes

Canonical proof sidecar exists at `web/references/cakeresume/.verification.md` (A1c). Source footer Proof pointer: see `.verification.md` (`## Proof block`). That file is present. Heading, inspected date, method, sources, and raw samples below are this ledger; they are not a second portable token table.

- **Heading (sidecar):** `# Cake — Verification Notes (2026-06-01)` / `## Proof — Tier 1 live inspect`
- **Inspected:** 2026-06-01
- **Method:** playwright getComputedStyle (live DOM) + raw source-file fetch
- **Sources:**
  - https://www.cake.me
  - https://github.com/cakeresume
  - https://medium.com/cakeresume

Raw samples (this ledger; portable Semantic/Components restate the matching hex/geometry, not the rgb dump):

- Sign Up button background: rgb(19,171,103) = `#13AB67` — live cake.me
- Sign Up button text: `#FFFFFF` (white), radius 4px, height 32px, font 14px/400 Inter — live cake.me
- Log In button: transparent background, text `#13AB67` — live cake.me
- Heading: 38px / 600, deep green rgb(12,65,41) = `#0C4129` — live cake.me
- Language selector border: 1px solid rgb(209,214,212) = `#D1D6D4`, background `#FFFFFF`, text `#000000`, radius 4px, height 32px — live cake.me
- Neutral chip background: rgb(226,230,228) = `#E2E6E4`, text `#0E0E0F`, radius 4px — live cake.me
- Accent green: rgb(55,128,96) = `#378060` — live cake.me
- Typography: Inter (UI + headings), Apple SD Gothic Neo (CJK body); body 16px — live cake.me

Tier 2 in the sidecar: getdesign.md/cakeresume — NOT LISTED. refero — not listed. No Tier 2 cross-reference available; all values rely on Tier 1 live inspection. Country + regional sources stay in this ledger (country TW; brand-owned regional sources ≥2 non-Western: cake.me, github.com/cakeresume, medium.com/cakeresume).

- components_harvested: true
- tokens.source: prose-derived
- Interaction expansions are not recorded. Only default component observations are in the source. Hover, pressed, and focus treatments were not captured in live inspection.
- Uncaptured hover/pressed/focus treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- YAML `rounded.full` 9999 and the Don’t against pill or large-radius shapes are a preserved source conflict.
- Source §13 fictional archetypes: fictional archetype material deleted; not re-hosted (D2). Names and biographies are omitted from portable Audience and from this sidecar.

## Derived editorial inventory

Portable `DESIGN.md` marks these as derived editorial implementation inference / not Cake-authored or a separately published UI specification (B2/B2a). This list is an inventory of those portable sites after the F3 scan, not a second copy of fictional personas.

- Scope named-evidence-domain / this-contract-covers-the-live-brand-site (11)
- Scope visual-character extras: clean-and-professional / white-ground-lets-every-element-breathe / brand-green-carries-the-eye / mid-green-sits-between (13)
- Scope public-history-as-narrative (15)
- Scope rename-to-Cake-as-a-broader-career-surface / deep-green-plus-brand-green-as-growth-and-trust (17)
- Primary tasks captured-controls-not-from-§13 (23)
- Audience no-individual-personas-promoted / fictional-archetypes-not-tasks (32)
- Distinctive list-head including one-filled-`#13AB67`-action-per-view (36)
- Principles 1–5 (49)
- capture-bound named five §7 Do’s (57); `#378060` supporting-only is §2/§9, not a sixth §7 Do (65)
- Avoid named four §7 Don’ts (69)
- Font evidence-class: live-surface-use of Inter and Apple SD Gothic Neo with YAML family keys naming those same faces (126). Official-product-use / official-distributed negatives and Declared-only misclassification are not current.

Reconstruction-boundary exemption not used. Governance Authority is not a substitute. No “no unqualified sentence remains” claim (E2c).

Left unqualified as source-stated or observed-technical: Cake / CakeResume identity and `https://www.cake.me`; the product bundle (job search, AI resume and portfolio builder, recruiting SaaS); selector-backed color/type/component values; YAML unitless spacing and rounded numbers including `full` 9999 as a YAML field; YAML `shadow.none`; Inter / Apple SD Gothic Neo as recorded families; YAML type sizes/weights; component anatomy and YAML `type` fields (button / button / input / badge); §14 four default rows and the hover/pressed/focus uncaptured sentence; B3 five-kind gate (118); Core C1/C2/C3 capture-record policy (171) and per-control C2 omission (201/226) / C4 kind-omission notes (175/268); quoted labels “Sign Up” / “Log In”; Governance controlled copy; Named gaps inventory.

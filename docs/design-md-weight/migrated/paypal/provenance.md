# PayPal provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/paypal/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | paypal |
| name | PayPal |
| country | US |
| category | fintech |
| homepage | `https://www.paypal.com/us/home` |
| primary_color | `#002991` |
| logo.type | simpleicons |
| logo.slug | paypal |
| omd format (source) | 0.1 |
| verified | 2026-06-22 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-22 |
| components_harvested | true |

Token note from the source, quoted in full:

> primary = live brand midnight blue (#002991) used in immersive sections; sky blue (#60cdff) is the hero surface accent. PayPal Pro at weight 900 for display; Plain for UI text. All CTAs are full-pill (1000px radius) weight 900.

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. Catalog identity `primary_color` `#002991` is dual: identity here, and YAML `tokens.colors.primary` in portable Semantic color. The Simple Icons slug is dual: identity here, and a portable asset pointer in `DESIGN.md` §3.

**Logo decision.** `logo.type: simpleicons` / `logo.slug: paypal` is a catalog identity pointer through Simple Icons, not a PayPal-hosted brand file URL.

No `ds.name` / `ds.url` / `ds.type` record exists on the source. Portable B2a closes use the toss-form `not PayPal-authored or a separately published UI specification`.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-22 |
| tokens.extracted | 2026-06-22 |
| surfaces inspected | 2026-06-22 |
| sources captured | 2026-06-22 |

The source footer records the verification verbatim as **Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing-home | `https://www.paypal.com/us/home` | 2026-06-22 |
| merchant | marketing-merchant | `https://www.paypal.com/us/webapps/mpp/merchant` | 2026-06-22 |

YAML token claims resolve to the live-extract pass on those two URLs. The source does not split the token block into per-surface YAML anchors.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | `https://www.paypal.com/us/home` | 2026-06-22 |
| merchant-live | product-surface | `https://www.paypal.com/us/webapps/mpp/merchant` | 2026-06-22 |

### Tier 1

- https://www.paypal.com/us/home
- https://www.paypal.com/us/webapps/mpp/merchant

### Tier 2 (no usable record)

- https://getdesign.md/paypal — not found (404)
- https://styles.refero.design/?q=paypal — no results returned

Those directory findings describe this catalog's coverage. They stay here. They are lookup queries, not portable copy.

### Narrative (not interface tokens)

Brand narrative: publicly documented history (PayPal / Confinity merger, eBay acquisition 2002, spin-off 2015, HQ San Jose). CEO Alex Chriss as of 2023 — publicly documented leadership transition. 2023 rebrand details inferred from live inspect of new homepage design vs. widely documented rebrand — that inference class is recorded in the source HTML comment and is qualified in portable Scope.

## Claim ledger

Claims use the source live-extract pass: playwright `getComputedStyle` on home / merchant / 2026-06-22. HTML-comment inspect rows that name a heading or control stay attached to that surface.

| claim | surface |
|---|---|
| tokens.colors.primary `#002991` | home (brand dark `rgb(0, 41, 145)`); also merchant immersive |
| tokens.colors.primary-light / accent-sky `#60cdff` | home hero (`blue-400-plate`, `rgb(96, 205, 255)`) |
| tokens.colors.canvas `#ffffff` | home (bgFreq top `#ffffff` ×12) |
| tokens.colors.on-primary `#ffffff` | home / merchant CTA labels on dark |
| tokens.colors.ink `#000000` | home (bgFreq `#000000` ×6; body color `rgb(0,0,0)`) |
| tokens.colors.link `#0070e0` | home / merchant hyperlinks |
| tokens.colors.muted `#686a6d` | home / merchant supporting copy |
| tokens.colors.surface-warm `#f1efea` | home feature sections |
| tokens.colors.surface-grey `#edf0f2` | home chrome |
| tokens.colors.surface-light-blue `#f0f2f9` | home badge |
| tokens.colors.accent-pale-sky `#b8e9ff` | home lighter section accents |
| tokens.colors.border-default `#e6e7e8` | home / merchant inputs |
| tokens.colors.success `#007a56` | semantic success |
| tokens.colors.error `#c0212b` | semantic error |
| tokens.typography.family.display `PayPal Pro` | home + merchant |
| tokens.typography.family.ui `Plain` | home + merchant |
| tokens.typography.display-hero | home H2 "Pay, send, and save smarter"; also H1 "PayPal Open" |
| tokens.typography.display-lg | merchant H2 "Take your business further, faster" |
| tokens.typography.section / body / nav / button / caption | home + merchant |
| tokens.spacing.* / tokens.rounded.* / tokens.shadow.* | live-extract token set |
| tokens.components.button-primary | home "Sign Up" |
| tokens.components.button-outline-dark | home "Browse Offers" |
| tokens.components.button-outline-light | home "Learn About Pay in 4" / "Send Money" |
| tokens.components.button-white | home "Play video" |
| tokens.components.nav-tab | home "Personal" / "Business" |
| tokens.components.input-form | login and form inputs |
| tokens.components.card-surface | home `.layered-card` (5 instances) |
| tokens.components.badge-status | status tag |
| tokens.components.cookie-dialog | cookie consent bar |

## Capture selectors

The source records playwright `getComputedStyle` on the two URLs. It does not publish `data-omd-capture` indexes.

| Component | Pointer |
|---|---|
| Hero H2 "Pay, send, and save smarter" | home; PayPal Pro 99.4px / 900 / `rgb(0,0,0)` on `#60cdff` |
| H1 "PayPal Open" | merchant/business page; PayPal Pro 99.4px / 900 / `rgb(0,0,0)` |
| Merchant H2 "Take your business further, faster" | merchant; PayPal Pro 67.1px / 900 |
| CTAs "Sign Up", "Browse Offers", "Send Money" | 1000px radius / 52px height / 17.86px PayPal Pro 900 / padding 13.93px 32.86px |
| Outline light "Learn About Pay in 4" | transparent / `#ffffff` text / `1px solid #ffffff` |
| Black fill "Sign Up" | `#000000` bg / `#ffffff` text |
| White fill "Play video" | `#ffffff` bg / `#000000` text |
| Nav tabs "Personal" / "Business" | 104px radius / 40px height / 16px Plain 400 |
| Hero section bg | `blue-400-plate`; `rgb(96, 205, 255)` = `#60cdff` |
| Brand dark section bg | `rgb(0, 41, 145)` = `#002991` |
| Cookie consent buttons | `rgba(255,255,255,0.7)` / 1000px radius / `2px solid #cfd3d8` |
| body | Plain / `rgb(0,0,0)` / 16px / line-height 18.4px |
| bgFreq top | `#ffffff` ×12, `#000000` ×6, `#60cdff` ×2, `#002991` ×2 |

## Proof notes

- tokens.source: live-extract; tokens.extracted: 2026-06-22; components_harvested: true
- No `ds.type` record. Portable B2a closes use the toss-form.
- Source HTML comment: philosophy layer is sections 10–15. Voice samples verified from live homepage and merchant page inspects (2026-06-22). 2023 rebrand details inferred from live inspect vs. widely documented rebrand.
- Unattributed cubic-bezier values on `ease-enter` / `ease-exit` / `ease-standard` are omitted from portable Motion. Token names, uses, durations, signature motions, and reduced-motion stay. `ease-exit` matched the legacy spec-template example. Promotion requires per-component computed transition properties, animation name, duration, easing, and reduced-motion behavior. That five-kind gate is in portable Motion.
- Observed Focus on the form input (border/ring `#0070e0`) is not `focus-visible` treatment.
- Uncaptured computed hover paint is omitted. Source-stated `scale(1.02)` remains a signature-motion name. Applicability follows control meaning. State coverage is not claimed complete.
- Official history (Confinity, X.com, eBay 2002, spin-off 2015, HQ San Jose) is narrative context, not a token source.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Two named URLs as this contract's token surfaces; token-note register split; values attached to the surface that established them |
| Experience Scope `:11` | Characterizations (authority and consumer-brand boldness; closer to Nike or Apple than to a traditional bank; opinionated confidence; dramatic light/dark cadence; two-font two-weight system) as source readings, not a published UI specification; hex values, families, 1000px, weight 900, 2023 rebrand label, and Century Gothic heritage beside them are the source's own |
| Experience Scope `:13` | Founding-and-rebrand narrative (1998 / founders / Confinity / X.com / eBay 2002 / 2015 spin-off / NASDAQ: PYPL / San Jose / 200+ countries / 25+ currencies / 400 million accounts / founding insight / network-effect moat / CEO Alex Chriss / PayPal Open campaign / closing typographic-argument sentence) as brand context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the three primary tasks from captured labels and surfaces; not from the source's persona section |
| Audience `:28` | Dropping the persona section rather than promoting it; carrying no name, motivation, or affiliation classification; using only the source §13 header grouping (peer-to-peer senders, online shoppers, small merchants, enterprise checkout integrators) |
| Distinctive traits `:32` | Classifying the list as a restatement of Key Characteristics, and the groupings inside it |
| Principles `:44` | Five items; stems rest on source sentences; every *UI implication* as derived class |
| Application rules `:54` | Eight Do rules and the reasons attached to them |
| Avoid `:67` | Seven Don'ts and the reasons inside them |
| Semantic color `:83` | Pairing each hex to its token-set path; same-hex roles unmerged (`primary-light` ≠ `accent-sky`; `canvas` ≠ `on-primary`; `#0070e0` ≠ `rgb(0, 0, 238)`); characterizations attached to recorded uses |
| Spacing `:118` | Eight YAML spacing keys unmerged from rounded steps, type sizes, cookie height, and breakpoints |
| Shape `:131` | Four YAML rounded keys unmerged; Medium 16px card radius and 104px tab radius kept local rather than as missing YAML steps |
| Elevation `:142` | Color-section architecture rather than a lift ladder; CookieBanner ambient shadow on that container; Overlay scrim as a body §6 recording rather than a YAML shadow key |
| Motion `:146` | §15 as philosophy-layer rather than live-inspect; durations, easing names, signature motions, and reduced-motion as source-stated rather than computed CSS; omitted `ease-exit` curve matching the legacy spec-template example |
| Font evidence `:186` | PayPal Pro as display/CTA and Plain as UI; Helvetica Neue / Arial as fallback context rather than substitutions; Official product-use as shipping those faces without a separately issued type specimen in this packet; Official distributed asset and License unnamed in this packet |
| Family `:194` | Fallback prohibition; Helvetica Neue / Arial not presented as PayPal Pro or Plain |
| Type roles `:198` | YAML unitless line heights as ratios; YAML singles and §3 / live / §9 `~96px` spellings unmerged; Muted text as a §3-only row |
| Type rules `:215` | Four typography principles read from measured metrics |
| Assets `:224` | Simple Icons slug as a catalog identity pointer rather than a captured first-party mark |
| Capture record `:231` | Preserving the source §14 contract in this file while the catalog graph is not adopted; Primitive type only when the token set records that type; Cookie Consent (Tertiary) and Log In labelled `not in the token set` |
| Capture record `:248` | Applicability by control meaning; Focus ≠ `focus-visible`; `scale(1.02)` not copied as computed hover paint; C4 omissions for `card-surface` and `badge-status`; not a complete state-coverage claim |
| Nav Tab `:377` | Active-tab appearance as a captured variant, not `focus-visible` evidence |
| Cookie Consent (Tertiary) `:453` | Labelling the control `not in the token set` and not inventing a primitive type from the Buttons heading or from YAML `cookie-dialog` |
| Log In `:479` | Holding only the Log In recipe; not inventing a primitive type |
| Sky Blue / Midnight Blue Section `:499` | Color-section uses rather than extra component records |
| Layout `:509` | Generous-macro / type-as-spacer / color-as-divider readings; 1200px as approximate max-width rather than a breakpoint; named breakpoint rows as source-stated collapsing |
| Content `:558` | Voice register (direct, bold, empowering) and type-scale-as-excitement as readings; quoted lines are the source's own |
| Content `:581` | Not promoting synthetic voice samples beyond the quoted live lines |
| Named gaps `:615` | List as unnamed values rather than as coverage of domains the source never named |

Portable `DESIGN.md` carries 29 complete B2a qualifications. This table is 29 data rows. Preamble sentences on this page are not portable qualifications. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not PayPal-authored or a separately published UI specification."

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13 personas, 4 slots (name, age, city, occupation, motivation) | Deleted. Not promoted as individuals, tasks, or Audience groups. Affiliation classification and motivation are not re-hosted. Portable Audience uses only the source §13 header grouping already named in the source body. |
| Source §9 Agent Prompt Guide remaining after color/type/component constraints were moved | Deleted as tool-facing prompt. Unique constraint (Log In = white fill + 3px black border; Sign Up = black fill, white text) already lives in Components. Other §9 values were already in Foundations / Components / Layout. |
| Unattributed easing curves | Three source-stated `cubic-bezier` values omitted from portable Motion. Token names, uses, durations, signature motions, and reduced-motion kept. `ease-exit` matched the legacy spec-template example. |
| Sibling file | Present at `web/references/paypal/.verification.md` (dotfile; path written out). Overlap live labels already live in the source body. Sibling-only live headings and high-precision computed spellings were not promoted into the portable body. |
| Tier 2 getdesign / Refero lookup detail | Ledger only, under Tier 2 above. |

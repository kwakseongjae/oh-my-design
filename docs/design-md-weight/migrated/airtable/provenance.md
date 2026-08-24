# Airtable provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/airtable/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | airtable |
| name | Airtable |
| country | US |
| category | design-tools |
| homepage | https://www.airtable.com |
| primary_color | `#fcb400` |
| logo | type `simpleicons`, slug `airtable` |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-08 |
| components_harvested | true |
| ds.name | Airtable Trademark Guidelines |
| ds.url | https://www.airtable.com/company/trademark-guidelines |
| ds.type | brand |
| ds.description | Airtable's trademark usage and brand guidelines. |
| ds.og_image | https://www.airtable.com/images/airtable-seo.jpg |

Token note from source: `primary = Airtable Blue (#1b61c9); brand-amber (#fcb400) from primary_color frontmatter. Color belongs to user data, chrome stays neutral.` Dual destination (E2a): this ledger and portable Experience Scope (same assignment plus the adjacent catalog-commentary / “not a CTA fill” / derived editorial implementation inference / not-Airtable-authored or a separately published UI specification limiter).

Catalog logo type `simpleicons` / slug `airtable` is dual: this identity ledger + portable Typography & Assets boundary sentence (`Catalog logo metadata is Simple Icons identity (airtable)`, not a captured first-party mark) (E2a). Homepage `https://www.airtable.com` is dual-destination: Experience Scope + this identity/surfaces/Tier 1 ledger (E2a). Catalog `primary_color` `#fcb400` is identity metadata + portable Foundations Brand-amber + Scope/Avoid/capture-bound catalog-value mentions (not a CTA fill) (E2a). `ds.name` / `ds.description` / `ds.type: brand` / `ds.url` are identity + portable Scope (brand-usage guidance; interface-token evidence from that document is unresolved) + Font evidence Official product-use (E2a). `ds.og_image` is this ledger only. `tokens.source: prose-derived` is this ledger only (A1c).

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-05-15 |
| verified (footer B1 loop) | 2026-05-08 |
| tokens.extracted | 2026-06-08 |
| homepage hero / marketing CTA | 2026-05 |

Conflicts unresolved: none (source footer). Preserved value pairs inside the reconstruction: YAML unitless line-height vs body-table ranges; YAML sub-heading/caption weight 450 vs body 400–500; YAML body-medium tracking 0.12 vs body 0.08–0.16px; YAML caption tracking 0.18 vs body 0.07–0.28px; YAML `rounded.full` 9999 vs body circles 50%; YAML spacing xs 4 vs body 1–48px; catalog `#fcb400` vs Airtable Blue `#1b61c9`; White Button 1px `#ffffff` border vs Hairline `#e0e2e6`; Weak Text `rgba(4,14,32,0.69)` vs estimated `#6b7280`; formula `#ef4444` vs Success `#006400`. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| airtable-live | marketing-surface | https://www.airtable.com | 2026-05-08 |
| trademark | brand-guidelines | https://www.airtable.com/company/trademark-guidelines | source ds.url |

Named product patterns (bases, tables, views, records, sync, formula, AI agent, cookie banner) are source-stated reconstruction targets. They are not given invented authenticated-app routes here. `airtable-live` is the marketing homepage live-DOM notes only. It is not Proof for the prose-derived token/component reconstruction.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| airtable-live | marketing-surface | https://www.airtable.com | 2026-05-08 |
| trademark | brand-guidelines | https://www.airtable.com/company/trademark-guidelines | source ds.url |

### Tier 1

- airtable.com (live DOM via playwright — round 50% icon buttons; ghost 12px; Sign up CTA)
- airtable.com homepage; Howie Liu (CEO) public talks (footer “Tier 1 (Philosophy)”)
- https://www.airtable.com/company/trademark-guidelines (ds.url; named brand-usage guidance; interface-token evidence from that document is unresolved in this packet)

Homepage `https://www.airtable.com` and the trademark URL are dual-destination with portable Experience Scope (E2a).

### Tier 2 (no record)

- styles.refero.design / getdesign.md — no record.

### Narrative (not interface tokens)

Third-party-corroborated in the source; not Airtable-authored interface tokens:

- Airtable — Wikipedia: https://en.wikipedia.org/wiki/Airtable
- Antler — Airtable with Andrew Ofstad: https://www.antler.co/blog/antler-early-days-episode-3-airtable-with-andrew-ofstad
- Golden — Howie Liu: https://golden.com/wiki/Howie_Liu-PBBK48Y (Etacts acquired by Salesforce on December 21, 2010)
- Taskade history: https://www.taskade.com/blog/history-of-airtable (public launch March 2015; 2 years in stealth 2012–2014)
- Tracxn: https://tracxn.com/d/companies/airtable/__Xdq7WaiA79BBRynm6WLMDo_kp-jvnqvpW1GxVVOirjE (Series F Dec 13, 2021: $735M at $11B valuation; total raised $1.35B)

Source also names: Duke connections among the three founders; Liu’s Etacts (YC W2010, age 20), a Gmail relationship-management tool acquired by Salesforce on December 21, 2010, and the Salesforce social-CRM PM stint where the Airtable question formed; Ofstad as Google PM on Android leading the Google Maps redesign; Nicholas as a Stack Overflow engineer for 3+ years; the ease-of-use versus structural-rigor hybrid thesis; pre-seed angels Ashton Kutcher, Michael Birch (Bebo), and Josh Reeves (Gusto). Those remain narrative, not tokens. Portable Scope restates those values as third-party-corroborated facts.

Live homepage voice (2026-05): "Build enterprise-ready AI workflows, apps & agents"; "Sign up"; "Talk to sales". Dual-destination for the three strings and the 2026-05 freshness date: portable Content & Locales + this ledger. The hero line is also in Experience Scope; `"Sign up"` is also in Scope/Capture live-DOM notes (E2a). Derived §10 copy-pattern rows are not this observation class.

Footer style ref: `notion`. Catalog note only; not a portable instruction to import Notion tokens.

## Claim ledger

Token extraction is `prose-derived` (2026-06-08). `components_harvested: true`. Exact live evidence does not attach each token/component claim to `airtable-live`. No per-claim live Proof map is recorded. Marketing live-DOM notes and the prose-derived reconstruction remain separate evidence domains.

| claim | evidence class |
|---|---|
| YAML colors / typography / spacing / rounded / shadow / harvested buttons and cards | prose-derived reconstruction from the source packet |
| tokens.colors.brand `#fcb400` | catalog `primary_color` / frontmatter |
| tokens.components.input.* | inferred from §1–§2 baseline (adjacent complete B2a on Default Input) |
| tokens.components.badge.* | inferred from §1–§2 baseline (adjacent complete B2a on Default Badge) |
| Cookie Consent Button | body §4 only (not YAML `tokens.components`) |
| Spotlight / Weak Text / Secondary Active | body §2 only |
| Live DOM notes (round 50% icon buttons; ghost 12px; Sign up CTA) | `airtable-live` marketing homepage only; named observations, not harvested components |

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here. Footer live-DOM notes remain: round 50% icon buttons; ghost 12px; Sign up CTA.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names kept):

- `ease-enter` `cubic-bezier(0.2,0.6,0.25,1)`
- `ease-exit` `cubic-bezier(0.4,0,1,1)` — matches `spec/omd-v0.1.md` template example `ease-exit`

These are unattributed. Duration tokens (`0ms` / `150ms` / `250ms` / `400ms`), easing names, “No bouncy springs”, and `prefers-reduced-motion: reduce` (spotlight fade-in) remain in portable Motion. B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion beyond those tables.

## Omitted estimated and prompt-only values

§9 Agent Prompt Guide estimated colors, kept here so the values are not lost, not promoted as tokens:

- CTA hover `#0f4ba0` (estimated ~10% darker)
- Muted text `~#6b7280` (estimated)

Portable Named gaps also names those two estimates as unnamed values (E2a dual with this ledger).

§9 example-prompt figures that conflict with harvested components, not promoted:

- Primary button prompt: Haas 14px / 500, padding `12px 20px` (harvested button is 16px / 500, `16px 24px`)
- Card title prompt: Haas Groot Disp 18px / 600 (harvested card title is Haas 24px / 400)
- Nav-header construction prompt (sticky bar, wordmark, 14px / 500 nav hover to `#1b61c9`) — construction prompt, not a harvested component

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Proof notes

- tokens.source: `prose-derived`; `components_harvested: true`; `ds.type: brand` preserved (A1c)
- Catalog logo Simple Icons slug `airtable` is dual-destination: this identity ledger + portable Typography & Assets boundary sentence (E2a)
- Homepage `https://www.airtable.com` is dual-destination: Experience Scope + this identity/surfaces/Tier 1 ledger (E2a)
- `primary_color` `#fcb400` destinations: identity + Foundations Brand-amber + Scope/Avoid/capture-bound catalog-value mentions (E2a)
- Token note is dual-destination: Experience Scope + this ledger (E2a)
- `ds.name` / `ds.description` / Trademark `ds.url` / `ds.type: brand` destinations: this identity ledger + portable Scope + Font evidence Official product-use (E2a)
- Homepage 2026-05 voice strings and date are dual-destination: portable Content & Locales + this freshness/narrative ledger; the hero line is also in Experience Scope and Primary tasks; `"Sign up"` is also in Scope/Capture live-DOM notes (E2a)
- Soft ambient shadow `rgba(15,48,106,0.05) 0px 0px 20px` is Foundations Elevation + Avoid. Standard composite shadow is Elevation + Primary Blue Button + Standard Card. Soft is not a Primary Blue / Standard Card field (E2a)
- `#e5e7eb` destinations: §14 skeleton row + Semantic color Skeleton value + Capture record field note (E2a)
- Interpretive claims retained in portable body, each with adjacent complete B2a (`derived editorial implementation inference` / `not Airtable-authored or a separately published UI specification`): Scope “sophisticated simplicity” / Swiss-precision / Haas letter-spacing reading; color-belongs-to-user-data catalog commentary and “not a CTA fill” assignment (Scope); Scope evidence-domain (marketing chrome / named product patterns / trademark / third-party history remain separate); 2015–2020 → 2024+ evolution (Scope); Notion/no-code refusal (Scope); Audience exclusion / observable-work-follows-three-tasks application; Distinctive local cookie-consent 2px reading; five numbered principles and UI implications; capture-bound token-role list; Avoid Swiss-precision / spotlight-depth / color-belongs / deliberately-sharp 2px readings; Shape local-geometry reading; Elevation brand-blue / spotlight-vs-gray reading; Cookie Consent local-geometry field note and “deliberately sharp” Use reading; Layout not-a-gutter / not-cross-viewport / not-universal-grid readings; Capture-record named-product-pattern vs harvested-component split; Content empty-state strings as state-contract not extra voice samples; Content forbidden-phrase list; voice as product-pragmatic / confidence-quiet and the copy-pattern table; Default Input inference; Default Badge inference (B2/B2a)
- Source §13 personas are fictional archetypes informed by operations leaders and internal-tooling builders, not specific individuals. Portable Audience keeps the exclusion boundary only. Names, ages, cities, employers, and biographies are not copied here (D2). Primary tasks come from the empty-base / add-record / sync-reconnect state contract and the homepage 2026-05 line, not §13
- YAML typography `use` fields and Sub-heading body-table tracking `normal` are restored on Type roles (A1)
- No generic `Focus` capture is promoted to `focus-visible` treatment; focus-visible rows carry no hex (B1)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Input and Badge remain labeled inferred from the §1–§2 baseline
- Footer style ref `notion` stays in this ledger only

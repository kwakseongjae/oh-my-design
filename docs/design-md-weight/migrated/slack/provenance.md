# Slack provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/slack/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | slack |
| name | Slack |
| country | US |
| category | productivity |
| homepage | https://slack.com |
| primary_color | `#4A154B` |
| logo | favicon `https://slack.com/favicon.ico` |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |

Token note from source: catalog `primary_color` `#4A154B` is Aubergine brand chrome. The primary marketing action fill is CTA Green `#007A5A`. They are not substitutes for each other. Catalog `primary_color` `#4A154B` is identity metadata and the portable Foundations Aubergine role (explicit `Catalog primary_color`). The same hex also sits in Distinctive brand chrome and the Primary / Aubergine Background field (E2a). Favicon `https://slack.com/favicon.ico` is identity in this ledger and a portable Typography & Assets mark (E2a dual destination). Homepage `https://slack.com` is dual-destination: Experience Scope + this identity/surfaces ledger (E2a).

No `ds.name` / `ds.url` / `ds.type` / `ds.description` fields exist on the source. None are invented here.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-06 |
| added | 2026-06-06 |
| tokens.extracted | 2026-06-09 |
| Web verification comment | 2026-06-06 |

Conflicts unresolved as a product-versus-marketing clash: none. Product UI (Lato, aubergine sidebar) and marketing web (Larsseit, green CTA) are documented as parallel surfaces.

Preserved value conflicts inside those surfaces:

- Info Banner YAML `border: 3px solid #ECB22E` vs body `Border-left: 3px solid #ECB22E`
- toast shadow `0 4px 12px rgba(0,0,0,0.2)` vs Level 2 `0 4px 12px rgba(0,0,0,0.12)`
- overlay scrim `rgba(29, 28, 29, 0.6)` vs dialog backdrop `rgba(29,28,29,0.6)`
- marketing-green subsection 15px/700/Lato at 36px vs Product / Primary 15px/900/Lato at 36px
- **§9 Success / Presence conflict:** source §9 Quick reference names `Success / Presence: Green (#2EB67D)` while YAML `tokens.colors.success` and §2 Semantic Success Green are `#2BAC76`. Presence / Online Green is also `#2EB67D` (same hex as Slack Green logo lozenge). Dual destination: portable Foundations Semantic color + this Conflicts ledger (E2a). Both hexes are kept. The portable conflict-application sentence (not silently resolved as two fully distinct settled roles) sits under adjacent complete B2a.

Both sides of each pair stay in portable Foundations or Components (and the §9 pair in Foundations). Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| marketing-home | marketing | https://slack.com | 2026-06-06 |

The source names in-app product UI and marketing web as the surface set. It does not list a separate inspectable in-app URL. Those names stay as portable scope; they are not given invented routes here. Direct WebFetch confirmed only the marketing observations below.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| slack-marketing | marketing | https://slack.com | 2026-06-06 |
| slack-brand-pdf | identity | Slack Brand Guidelines PDF (`a.slack-edge.com/.../Slack-Brand-Guidelines.pdf`) | 2026-06-06 (named; not downloaded as a token sheet in this pass) |

`https://slack.com` is not recorded here as `product-surface`. Direct WebFetch confirmed marketing chrome, voice, and green CTA only. In-app component pixels are not live Proof on this URL.

### Tier 1

- https://slack.com (live marketing site — aubergine chrome, green CTA, Larsseit headlines)
- Slack Brand Guidelines PDF (`a.slack-edge.com/.../Slack-Brand-Guidelines.pdf`)
- https://slack.com (named in the source footer as live production site; no separate in-app URL; in-app pixels are representative observation, not WebFetch-confirmed live Proof)

### Tier 2 (not interface tokens)

- https://brandpalettes.com/slack-logo-color-codes
- designyourway.net (Lato/Larsseit confirmation)
- https://onlinepalette.com/slack

### Narrative (not interface tokens)

Widely documented public facts from source §11 and the HTML comment. Dual destination with portable Experience Scope (E2a). They are not interface tokens:

- Slack = "Searchable Log of All Conversation and Knowledge"
- built inside Tiny Speck during the game *Glitch*
- Glitch failed **2012**
- founder **Stewart Butterfield** (ex-Flickr)
- launched publicly **2014**
- one of the fastest-growing SaaS products; **$1B** valuation in just over a year
- **2019** logo redesign to the four-color hashtag
- acquired by **Salesforce in 2021 for ~$27.7B**
- conversational layer of work, including AI agents alongside human teams

## Claim ledger

Source `tokens.source: prose-derived` (extracted 2026-06-09). `components_harvested: true`. Exact live evidence does not attach each token/component claim to a live product surface. No unsupported per-claim `slack-live` mapping.

Split:

| claim | evidence class |
|---|---|
| slack.com marketing: aubergine chrome; conversational/AI-forward voice (`"AI in Slack doesn't make you think, it helps you do"`, `"work starts in conversation"`); green primary CTAs | marketing live (WebFetch 2026-06-06, https://slack.com) |
| Catalog homepage / favicon / `primary_color` `#4A154B` | identity metadata |
| YAML colors / typography / spacing / rounded / shadow | prose-derived (`tokens.source`) |
| In-app sidebar / composer / dialog / toggle / product-button radii, paddings, heights | representative in-app observation (exact internal token names may differ; not live Proof) |
| Slack Brand Guidelines PDF named for aubergine Pantone 7672 C and type pairing | official guidance named (not a downloaded token sheet) |
| brandpalettes.com / designyourway.net / onlinepalette.com | third-party corroboration (not official product-use) |
| Lato (product UI) / Larsseit (marketing headlines) / Circular companion / Helvetica Neue fallback | HTML-comment type evidence: portable Typography & Assets + this ledger (E2a); live marketing confirms Larsseit headlines; stacks remain prose-derived / named guidance / third-party corroboration |
| §11 / HTML-comment history values listed under Narrative | widely documented public facts (portable Scope + this ledger) |

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names kept). Dual destination with portable Named gaps (the fact of omission) and Foundations Motion (names/uses/B3 gate) (E2a, E2b):

- `ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)`
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches the legacy spec template
- `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)`
- `ease-bounce` `cubic-bezier(0.34, 1.56, 0.64, 1)`

Token names `ease-enter` / `ease-exit` / `ease-standard` / `ease-bounce`, their uses, and the signature-motion associations remain in portable Motion as source-stated/uncomputed labels. Duration tokens and signature-motion prose are kept. B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion.

## Proof notes

- tokens.source: `prose-derived`; not `reconciled`; not an official published Slack UI specification
- components_harvested: true
- Favicon `https://slack.com/favicon.ico` is dual-destination: this identity ledger + portable Typography & Assets (E2a)
- Homepage `https://slack.com` is dual-destination: Experience Scope + this identity/surfaces ledger (E2a)
- Slack Brand Guidelines PDF path is abbreviated in the source (`a.slack-edge.com/.../Slack-Brand-Guidelines.pdf`). Named as a Tier-1 color/type corroboration, not as a downloaded token sheet
- Tier-2 brandpalettes.com / designyourway.net / onlinepalette.com are third-party corroboration, not official product-use (E1)
- HTML-comment history values are dual portable Scope + this Narrative ledger (E2a)
- HTML-comment voice evidence: the two WebFetch marketing strings are dual portable Content Observed + this claim ledger (E2a). The copy-pattern table and voice reading sit under adjacent complete B2a in Content
- HTML-comment type evidence: family stacks and Lato/Larsseit/Circular pairing are dual portable Typography & Assets + this ledger (E2a)
- Interpretive claims in source (aubergine/logo tension; “warm, not cold”; conversation-as-interface) are editorial readings of the design, not documented Slack-authored UI specification
- Derived inventory in the portable body, each with adjacent complete B2a (`derived editorial implementation inference` / `not Slack-authored or a separately published UI specification`): Scope not-a-proxy / not-a-clash; Scope atmosphere (aubergine/logo tension); Audience restriction / tasks-only / no-invented-personas; Distinctive traits list; numbered Principles (eight items); capture-bound application; Avoid list; Semantic color character / logo-accent / contrast-reason / unmerged-role / conflict-application; Spacing not-every-unlisted-surface; Shape local-geometry (3px–9999px scale); Elevation reading; Elevation scrim/blur application; Motion character/purpose; Font evidence-class application; Family font-use boundary; type-character reading; Assets four-color decorative-only; Capture-record applicability general note; each remaining component state-applicability map (Green CTA, Aubergine CTA, Outline, Product Primary, Product Secondary, Danger, Text Field, Composer, Sidebar Channel, Segmented tab, Toggle); Layout whitespace; Layout source-prompt-guide message anatomy; Layout avatar squircle / never-full-circle; Layout source-measurements-not-universal; Content voice + copy-pattern table + forbidden-phrase list (B2/B2a)
- Source §13 personas are fictional archetypes informed by publicly described Slack user segments, not individual people. Portable Audience keeps the exclusion boundary only. Names, ages, cities, employers, and biographies are not copied here (D2). Primary tasks come from composer/CTA/search evidence, not §13
- Generic `Focus` (input `#1264A3` ring; composer border darken + inner shadow) is not `focus-visible` treatment
- Uncaptured hover/disabled/loading visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Marketing CTA three kinds, Product Primary (Send + Create channel), Product Secondary, Danger, Composer, and Toggle omit loading/error/success at the field boundary (C2). Text Field keeps captured error and omits loading/success. Those three fields are not closed as destination, toast, navigation, or sent-message outcomes
- Unread Count, Mention Highlight, Status Pill, Presence Dot, and Toast omit Kind and the applicability map (C4). Cards, Banner, and Dialog already omit Kind/map
- In-app component pixels (radii, paddings, heights) are representative of observed UI conventions; exact internal design-token names may differ. That qualifier stays in portable Scope and Components. They are not live Proof
- Green CTA `#007A5A` is the observed marketing action color (WebFetch)
- No `[FILL IN]` placeholders exist in the source; none are emitted
- This ledger does not claim that every unqualified sentence is absent from the portable body

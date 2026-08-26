# 誠品 provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/eslite/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | eslite |
| name | 誠品 |
| country | TW |
| category | ecommerce |
| homepage | https://www.eslite.com/ |
| primary_color | `#917e57` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=eslite.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

Token note from source: "Only supplied selector-backed public commerce values are tokens. Corporate, editorial, anniversary, and unresolved-font evidence is retained as context rather than promoted into product UI tokens."

Dual/multiple destinations (E2a):

- Catalog `primary_color` `#917e57` has five destinations: this identity ledger + portable Experience Scope (the qualified interface reading) + portable Experience Distinctive traits + portable Experience Capture-bound application + portable Foundations Search Accent.
- Catalog `name` `誠品` is dual: this identity ledger + the portable H1 and every portable sentence naming the company, byte-for-byte. The Latin `Eslite` never stands in for it; the one added `誠品 (Eslite)` gloss in Scope sits beside it.
- Catalog `homepage` `https://www.eslite.com/` stays in this ledger (identity, surfaces, sources, Tier 1). The portable body names the Eslite Online homepage as a captured route without repeating the bare URL.
- `https://www.eslite.com/brand` and `https://www.eslite.com/brand/1098` are dual: portable Experience Primary tasks + this surfaces/sources/Tier 1 ledger.
- Catalog logo type `favicon` / slug is dual: this identity ledger holds the value; portable Typography & Assets holds only the boundary sentence (third-party favicon-service URL keyed to the `eslite.com` domain, identity metadata rather than a captured first-party 誠品 mark).
- `tokens.note` is dual: this ledger quotes it in full; portable Foundations Evidence-domain boundary keeps its operative rule ("Only supplied selector-backed public commerce values are tokens here").
- `tokens.components.public-search-input.states` is dual: this claim ledger records the method; the portable Public Search Text Input `Observed` line and the Components capture record keep the observation.
- Capture selectors `home::[data-omd-capture="11"]` and `surface-3::[data-omd-capture="91"]` are dual: the portable component `Use` lines and the Capture selectors table below. The class string `deep-base-product-card ec-card e-banner-product card-block` is dual on the same terms — portable Expo Product Card Shell `Use` line + that table row.

No `ds.name` / `ds.url` / `ds.type` / `ds.description` field exists on the source. None is invented here.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| product-surface sources captured | 2026-07-13 |
| official-doc and expo-platform sources captured | 2026-07-14 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none (`verification_v2.conflicts: []`).

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | public-product-web | https://www.eslite.com/ | 2026-07-13 |
| brand-directory | public-product-catalog | https://www.eslite.com/brand | 2026-07-13 |
| expo-brand | public-brand-catalog | https://www.eslite.com/brand/1098 | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.eslite.com/ | 2026-07-13 |
| brand-directory-live | product-surface | https://www.eslite.com/brand | 2026-07-13 |
| expo-brand-live | product-surface | https://www.eslite.com/brand/1098 | 2026-07-13 |
| corporate-ideals | official-doc | https://www.eslitecorp.com/eslite/index.jsp?func_id=fee3ba0215&site_id=eslite_tw | 2026-07-14 |
| corporate-founder | official-doc | https://www.eslitecorp.com/eslite/index.jsp?func_id=20f9eec115&site_id=eslite_tw | 2026-07-14 |
| japan-cultural-bridge | official-doc | https://meet.eslite.com/tw/tc/article/201909260001 | 2026-07-14 |
| anniversary-35 | official-doc | https://meet.eslite.com/tw/tcr/article/202411040002 | 2026-07-14 |
| expo-platform | product-surface | https://www.eslite.com/brand/1098 | 2026-07-14 |

### Tier 1

- https://www.eslite.com/
- https://www.eslite.com/brand
- https://www.eslite.com/brand/1098
- https://www.eslitecorp.com/eslite/index.jsp?func_id=fee3ba0215&site_id=eslite_tw
- https://www.eslitecorp.com/eslite/index.jsp?func_id=20f9eec115&site_id=eslite_tw
- https://meet.eslite.com/tw/tc/article/201909260001
- https://meet.eslite.com/tw/tcr/article/202411040002

### Tier 2 (no usable record)

- https://getdesign.md/eslite (attempted 2026-07-14; built-in retrieval safe-open error, no values used)
- https://styles.refero.design/?q=eslite (attempted 2026-07-14; built-in retrieval safe-open error, no values used)

## Claim ledger

Every claim below is captured 2026-07-13. `home` claims resolve to surface `home` / source `home-live`; `expo-brand` claims resolve to surface `expo-brand` / source `expo-brand-live`.

| claim | surface | method |
|---|---|---|
| tokens.colors.accent / canvas / foreground / muted / hairline | home | supplied-selector-backed-computed-style |
| tokens.typography.body.size / weight / lineHeight | home | supplied-selector-backed-computed-style |
| tokens.typography.body.use | home | supplied-selector-provenance |
| tokens.typography.compact-control.size / weight / lineHeight | home | supplied-selector-backed-computed-style |
| tokens.typography.compact-control.use | home | supplied-selector-provenance |
| tokens.spacing.search-y / search-x / search-leading | home | supplied-selector-backed-computed-style |
| tokens.rounded.square | expo-brand | supplied-selector-backed-computed-style |
| tokens.rounded.search-left | home | supplied-selector-backed-computed-style |
| tokens.components.public-search-input.type | home | supplied-selector-provenance |
| tokens.components.public-search-input.bg / fg / border / radius / padding / height / font | home | supplied-selector-backed-computed-style |
| tokens.components.public-search-input.states | home | supplied-static-state-samples-without-interaction |
| tokens.components.public-search-input.use | home | supplied-selector-provenance |
| tokens.components.expo-product-card.type | expo-brand | supplied-selector-provenance-and-classification |
| tokens.components.expo-product-card.bg / fg / border / radius / padding / height / font | expo-brand | supplied-selector-backed-computed-style |
| tokens.components.expo-product-card.use | expo-brand | supplied-selector-provenance |

Source token `use` and `states` strings, kept verbatim here because the portable body carries their operative part rather than the full sentence (the two component `use` strings are not listed: the portable `Role` and `Use` lines already carry them whole):

- `tokens.typography.body.use`: "Repeated public commerce text and product-card samples; the computed Noto Sans TC stack is unresolved and is not a named Eslite UI-family token."
- `tokens.typography.compact-control.use`: "Observed compact public header control only; no complete control type scale is claimed."
- `tokens.components.public-search-input.states`: "default geometry observed on home, brand directory, and expo brand pages; static focus and pressed samples are present, while interactionCount is 0"

## Capture selectors

| Component | Pointer |
|---|---|
| Public Search Text Input | `home::[data-omd-capture="11"]` |
| Expo Product Card Shell | `surface-3::[data-omd-capture="91"]`, classes `deep-base-product-card ec-card e-banner-product card-block` |

## Proof notes

- `verification_v2` schema 2; `conflicts: []`
- `components_harvested: true`
- `interactionKinds: 0` and `interactionCount: 0`. Only measured default component geometry and the retained static focus/pressed input samples are documented.
- Uncaptured hover/disabled/loading/error/success treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- The Expo Product Card Shell keeps its verified `type: card` while its interactive kind and state-applicability map are omitted, because the source classifies it as a card shell despite its anchor implementation and records no interaction evidence.
- Corporate ideals, founder story, Japan cultural-bridge, and 35th-anniversary documents are narrative and voice context, not token sources.
- Browser-default-looking blue link observations in the packet are recorded as unpromoted; no Eslite brand or action token derives from them.
- No fictional persona, demographic, journey, spending pattern, or conversion behavior is recorded here. The source names public participant groups only, and those groups stay in portable Experience Audience rather than being re-hosted as personas.

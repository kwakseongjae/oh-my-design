# Cal.com provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/cal/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | cal |
| name | Cal.com |
| country | US |
| category | productivity |
| homepage | https://cal.com |
| primary_color | `#111827` |
| logo | type `simpleicons`, slug `caldotcom` |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-08 |
| components_harvested | true |

Token note from source: `primary = prose Charcoal #242424 (signature near-black CTA/heading); primary_color frontmatter #111827 is a catalog approximation. Brand is intentionally grayscale — no accent color.` Dual destination (E2a): this ledger and portable Experience Scope (same assignment plus the adjacent catalog-commentary / derived editorial implementation inference / not-Cal.com-authored or a separately published UI specification limiter).

Catalog logo type `simpleicons` / slug `caldotcom` is dual: this identity ledger + portable Typography & Assets boundary sentence (`Catalog logo metadata is Simple Icons identity (caldotcom)`, not a captured first-party mark) (E2a). Homepage `https://cal.com` is dual-destination: Experience Scope + this identity/surfaces/Tier 1 ledger (E2a). Catalog `primary_color` `#111827` is identity metadata + portable Foundations Catalog primary_color + Scope/Avoid/Distinctive catalog-value mentions (not Charcoal, not a CTA fill) (E2a). `tokens.source: prose-derived` YAML key is this ledger only (A1c). Portable Scope wording `Token extraction is prose-derived` is not the YAML key (E2a). No `ds.*` fields on source; none invented.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-05-15 |
| verified (footer B1 loop) | 2026-05-08 |
| tokens.extracted | 2026-06-08 |
| homepage CTA | 2026-05 |

Conflicts unresolved: none (source footer). Preserved value pairs inside the reconstruction: catalog `#111827` vs Charcoal `#242424`; live-DOM Black `#000000` / Cream `#f3f2ed` vs YAML canvas `#ffffff` / Primary `#242424`; YAML `ring-soft` trailing `0px` vs Level 2 body without trailing `0px`; YAML `inset-highlight` `rgba(255,255,255,0.15)` vs body `rgb(255,255,255)` inset; Select text `#000000` vs Text Input `#242424`; Dark Primary `#242424` vs alternate `#1e1f23`; YAML spacing xs 4 vs body 1px/2px/3px/6px; YAML `rounded` 2/4/6/8/12/16/9999 vs body 7px/29px/100px/1000px; YAML unitless line-height vs body-table `0px` tracking / Caption Light 1.40–1.50; YAML subheading tracking `0.2` vs Do’s `+0.2px` below 24px; Do’s Cal Sans 24px+ vs Caption Label 12px / Card Title 16px; live-DOM 12px / 13.92px·500 / 39px vs Cal Sans 64px / 600; YAML nav Cal Sans links vs §9 Inter 14px / 500. Both sides of each pair stay in portable Foundations, Typography, Components, or Named gaps. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| cal-live | marketing-surface | https://cal.com | 2026-05-08 |

Named product patterns (booking pages, calendar widgets, event types, booking confirmation) are source-stated reconstruction targets. They are not given invented authenticated-app routes here. `cal-live` is the marketing homepage live-DOM notes only. It is not Proof for the prose-derived token/component reconstruction.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| cal-live | marketing-surface | https://cal.com | 2026-05-08 |

### Tier 1

- cal.com (live DOM via playwright — Black `#000000` Primary 12px / 8×16 / 39px / 13.92px·500; Cream `#f3f2ed` Secondary)
- cal.com homepage; founders Peer Richelsen, Bailey Pumfleet; GitHub roadmap (footer “Tier 1 (Philosophy)”)

Homepage `https://cal.com` is dual-destination with portable Experience Scope (E2a). Live-DOM hexes Black `#000000` / Cream `#f3f2ed` are dual Scope + Capture record + Font evidence Live computed + Foundations Pure Black / Live-DOM Cream + Avoid Cream unmerge + this Tier 1 ledger (E2a). Live-DOM 12px / 8×16 / 39px / 13.92px·500 are Scope + Capture record + Font evidence Live computed + Type-rule 199, not Foundations (E2a).

### Tier 2 (no record)

- styles.refero.design / getdesign.md — no record.

### Narrative (not interface tokens)

Third-party-corroborated in the source; not Cal.com-authored interface tokens:

- GetLatka — 18-year-old raises $32M: https://blog.getlatka.com/18-year-old-raises-32m-to-build-opensource-version-of-calendly/
- Cal.com History (brief-history page): https://businessmodelcanvastemplate.com/blogs/brief-history/cal-com-brief-history
- Product Hunt Stories: https://www.producthunt.com/stories/how-this-open-source-calendly-alternative-rocketed-to-product-of-the-day
- Startup Intros: https://startupintros.com/orgs/cal-com

Source also names: founded January 1, 2021 as Calendso; Peer Richelsen and Bailey Pumfleet; Bailey 18 at founding; first version April 30, 2021; Product Hunt #1 Day → Week → Month; AGPL + hosted SaaS; Seed $7.4M (OSS Capital + Chad Hurley + angels); Series A $25M May 2022 (Seven Seven Six + Obvious Ventures); $32M total; Cal.ai + Cal.et post-Series A. Those remain narrative, not tokens. Portable Scope restates those values as third-party-corroborated facts.

Live homepage voice (2026-05): "Get started". Dual-destination for the string and the 2026-05 freshness date: portable Content & Locales Observed + this ledger. The CTA is also in Experience Primary tasks (E2a). Derived §10 copy-pattern rows ("Book a demo", "Sign in with Google", "Calendar permissions revoked. Reconnect Google Calendar.") are not this observation class.

Footer style ref: `stripe`. Catalog note only; not a portable instruction to import Stripe tokens.

## Claim ledger

Token extraction is `prose-derived` (2026-06-08). `components_harvested: true`. Exact live evidence does not attach each token/component claim to `cal-live`. No per-claim live Proof map is recorded. Marketing live-DOM notes and the prose-derived reconstruction remain separate evidence domains.

| claim | evidence class |
|---|---|
| YAML colors / typography / spacing / rounded / shadow / harvested buttons, input, card, badges, nav | prose-derived reconstruction from the source packet |
| tokens.colors.primary `#242424` | prose Charcoal; not catalog `primary_color` |
| tokens.colors catalog `primary_color` `#111827` | catalog / frontmatter approximation |
| tokens.components.badge-default.* | inferred from §1–§2 baseline (adjacent complete B2a on Default Badge) |
| Compact Button / Inset Highlight / Large Container / Prominent Section | body §4 only (not YAML `tokens.components`) |
| Live DOM notes (Black `#000000` Primary 12px / 8×16 / 39px / 13.92px·500; Cream `#f3f2ed` Secondary) | `cal-live` marketing homepage only; named observations, not harvested components |

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here. Footer live-DOM notes remain: Black `#000000` Primary 12px / 8×16 / 39px / 13.92px·500; Cream `#f3f2ed` Secondary.

## Omitted unattributed curves

Source §15 states “Standard cubic-bezier; no bounce” with no numeric cubic-bezier values. None are invented. Duration tokens (`0ms` / `150ms` / `250ms`), the “Standard cubic-bezier; no bounce” name, and `prefers-reduced-motion: reduce` (calendar grid fade-in) remain in portable Motion. B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion beyond that table.

## Restored §9 local recipes

§9 Agent Prompt Guide wrappers are deleted. The five verified local compositions are portable Components local recipes, not omitted prompt-only figures and not harvested type/component rows:

- White hero: white parent + 64px Cal Sans 600 / LH 1.10 / `#242424` + centered + dark CTA `#242424` / 8px / white text
- Scheduling card: white parent + exact shadow stack + 12px radius
- Sticky nav: white sticky parent + Inter 14px / 500 / `#111111` + dark CTA `#242424`
- Trust bar: white parent + grayscale logos + horizontal centering + 16px gap
- Feature section: 48px Cal Sans 600 / `#242424` + Inter 16px / 300 / `#898989` / LH 1.50 + screenshot 12px / card shadow

Harvested Top Nav YAML use remains Cal Sans links. Harvested Large Container remains its padding/radius pair. Dual: this ledger + portable local-recipe slots.

§9 Quick Color Reference hexes (`#242424`, `#111111`, `#898989`, `#ffffff`, `#0099ff`, ring `rgba(34, 42, 53, 0.08)`) duplicate Foundations and are not a second token set.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Proof notes

- tokens.source: `prose-derived`; `components_harvested: true`; no `ds.type` on source; none invented (A1c)
- Catalog logo Simple Icons slug `caldotcom` is dual-destination: this identity ledger + portable Typography & Assets boundary sentence (E2a)
- Homepage `https://cal.com` is dual-destination: Experience Scope + this identity/surfaces/Tier 1 ledger (E2a)
- `primary_color` `#111827` destinations: identity + Foundations Catalog primary_color + Scope/Avoid/Distinctive catalog-value mentions (E2a)
- Token note is dual-destination: Experience Scope + this ledger (E2a)
- Homepage 2026-05 `"Get started"` and date are dual-destination: portable Content & Locales Observed + this freshness/narrative ledger; the CTA is also in Primary tasks (E2a)
- Live-DOM Black `#000000` / Cream `#f3f2ed` hex destinations: Scope 13 + Capture record 230 + Font evidence Live computed 159 + Foundations Pure Black 103 / Live-DOM Cream 106 + Avoid 74 Cream unmerge + this Tier 1 ledger. `#000000` is also Select text 366/373 and Top Nav emphasis 485 (not live-DOM). Live-DOM 12px / 8×16 / 39px / 13.92px·500 destinations: Scope 13 + Capture 230 + Font 159 + Type-rule 199; not Foundations (E2a)
- `#f5f5f5` destinations: Distinctive 41 + Semantic Surface-alt 100 + Capture table 220/226 + Capture evidence-domain 230 + Default Badge background 468 + Default Badge field note 474 (E2a)
- YAML `ring-soft` trailing `0px` destinations: Distinctive 44 + Elevation Level 2 YAML 127 + Elevation B2a 133 + Ghost Shadow 271 + Ghost field note 275 + Shadow Card 419. Level 2 body without trailing `0px` is Elevation 128 + Ghost field note unmerge (E2a)
- Interpretive claims retained in portable body, each with adjacent complete B2a (`derived editorial implementation inference` / `not Cal.com-authored or a separately published UI specification`): Scope reconstruction-coverage 9 (marketing-Framer + named product patterns); Scope catalog-commentary / `#111827` not Charcoal / signature-near-black / no-accent-color 11; Scope evidence-domain 13 (marketing prose / live-DOM / screenshot color / third-party history remain separate; live-DOM Black/Cream not a replacement for Charcoal or Cal Sans 64px/48px); Scope atmosphere extras 15; Scope public-history-as-narrative + founding-observation-as-narrative 17; Scope refusal extras 19; Primary tasks homepage-CTA-not-from-§13 25; Audience exclusion / fictional-archetypes-deleted-not-re-hosted / observable-work-follows-independently-verified-homepage-CTA 34; Distinctive unmerge readings 38 (limiter precedes list); five numbered principles and UI implications 50; capture-bound token-role extras 58; Avoid retained editorial judgements including last-bullet forbidden-voice 71; Semantic characterizations and unmerged-role applications 91 (limiter precedes list); Spacing both-scales-kept / 1px-2px-3px-6px-not-YAML-xs-4 / 28px-to-80px tier 115; Shape YAML-full-9999-unmerged-from-100-1000 / Compact-6px / Dark-Primary-8px / pill-9999 local-geometry 121; Elevation shadow-first / physical-cards / unnamed-members / no-gradients / ring-soft-trailing-0px / inset-highlight-both-strings 133; Motion omitted-unattributed-curves 145; Font evidence live-DOM-not-Cal-Sans-64px-family / recorded-Google-Fonts-GitHub-distribution-not-a-loaded-stack-rewrite / Inter-Placeholder-declared-fallback-not-Inter / system-fallback-not-presentable-as-Cal-Sans 155; Family do-not-replace / do-not-present-placeholder-as-Inter 175; Type-role unitless-not-fixed-px / Caption-Light-range-unmerged / tracking-unmerged 179; type-rule extras + prompt-figures-not-harvested + YAML-nav-Cal-Sans-links 199; Assets Simple Icons identity-only 203; Assets product-is-primary-visual 207; Capture-record graph-not-adopted 214; Capture-record named-product-pattern vs harvested-component split 230; Default Badge inference 232/466; Dark Primary `#1e1f23` alternate-fill 250; Ghost ring-shadow-not-CSS-border-not-Level-2-body 275; Pill 9999px local-geometry 298; Compact 6px/14px local-geometry 322; Inset Highlight “3D pressed effect” Role/Use 348; Select `#000000`-not-Charcoal 373 / `--framer-focus-outline`-not-focus-visible 374; Text Input Charcoal-not-Select 398; Text Input “prioritizes CTAs” Use 400; Large Container body-§4-only / scheduling-card-12px-prompt-not-harvested-pair 434; Default Badge `#f5f5f5`-not-§14-skeleton-as-general-ink 474; Top Nav YAML-tab / Inter-14px-500-prompt-not-Cal-Sans-links-row 491; Layout not-a-gutter / ~1200px / column-patterns / feature-showcase / lavish-premium 561; Layout recorded-span / collapsing / image-behavior / touch-purpose / component-measurements-not-universal-grid 563; Content empty-state strings as state-contract 593; Content forbidden-phrase list 595; voice extras + copy-pattern table 601; Documentation copy-register vs captured docs-surface 613 (B2/B2a). Reconstruction-boundary exemption not used.
- Source §13 fictional archetypes: fictional archetype material deleted; not re-hosted (D2). Names, ages, cities, employers, biographies, and input-segment labels are omitted from portable Audience and from this sidecar. Independently verified Primary task is the homepage CTA `"Get started"` only. Source §14 empty-state strings stay on the Capture record as state-contract copy.
- YAML typography `use` fields are restored on Type roles (A1)
- No generic `Focus` capture is promoted to `focus-visible` treatment; focus-visible rows carry no hex; `--framer-focus-outline` stays on the Select Focus field; `#3b82f6` stays the Focus Ring role (B1)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Default Badge remains labeled inferred from the §1–§2 baseline
- Card / Pill Badge / Default Badge / Large Container / Prominent Section omit kind and applicability maps (C4)
- Footer style ref `stripe` stays in this ledger only

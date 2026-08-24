# OpenAI provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/openai/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | openai |
| name | OpenAI |
| country | US |
| category | ai |
| homepage | https://openai.com |
| primary_color | `#10a37f` |
| logo | favicon `https://www.google.com/s2/favicons?domain=openai.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |

Token note from source: catalog `primary_color` `#10a37f` is the signature teal accent. The default primary action fill is near-black `#0d0d0d`. They are not substitutes for each other. The Google s2 favicon is catalog identity-only in this ledger; it is not a portable Typography & Assets mark (E2a: not dual-destination).

No `ds.name` / `ds.url` / `ds.type` / `ds.description` fields exist on the source. None are invented here.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-06 |
| added | 2026-06-06 |
| tokens.extracted | 2026-06-09 |
| Web verification comment | 2026-06-06 |

Conflicts unresolved: toast elevation opacity. Body Level 3 records `0 4px 16px rgba(0,0,0,0.12)` for popovers, menus, and toasts. YAML `tokens.shadow.toast` and the toast component record `0 4px 16px rgba(0,0,0,0.16)`. Both values are preserved in portable Foundations and Components. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| marketing-home | marketing | https://openai.com | 2026-06-06 |
| brand-page | identity | https://openai.com/brand/ | 2026-06-06 (HTTP 403 to WebFetch) |

The source names ChatGPT product UI, the API platform, and marketing as the product surface set. It does not list separate inspectable ChatGPT or API URLs. Those names stay as portable scope; they are not given invented routes here.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| openai-live | product-surface | https://openai.com | 2026-06-06 |
| openai-brand | identity | https://openai.com/brand/ | 2026-06-06 (HTTP 403) |

### Tier 1

- https://openai.com (live production site; source says verified via live DOM getComputedStyle)

### Tier 1 attempted, unreadable

- https://openai.com/brand/ returned HTTP 403 to WebFetch (anti-bot). Not used as a token sheet.

### Web-search corroboration (not interface tokens)

WebSearch (“OpenAI brand color hex typography font Söhne OpenAI Sans”) corroborated by Loftlyy, Mobbin, Fonts In Use, DesignYourWay, brandpalettes.com:

- Brand palette anchored on `#000000` / `#ffffff` with signature teal-green `#10a37f` / `#10A37F`.
- 2025 rebrand introduced OpenAI Sans (bespoke, ABC Dinamo) in 5 weights + italics, replacing the Feb-2023 Klim Type Foundry pairing of Söhne (UI/blog) and Signifier (research papers); earlier system used Colfax/Charter.

Token-level UI values (ChatGPT surfaces `#212121` / `#171717` / `#2f2f2f`, composer geometry, `#6e6e80` muted slate, `#ececec` / `#f7f7f8` grays) are described in the source as widely documented public product values and direct observation of the shipped ChatGPT/API surfaces, not a sourced internal spec.

## Claim ledger

Claims use the source’s single named live surface unless noted. Token extraction is `prose-derived` (2026-06-09). `components_harvested: true`.

| claim | surface |
|---|---|
| tokens.colors.primary / primary-hover / primary-tint | openai-live |
| tokens.colors.canvas / ink / brand-black | openai-live |
| tokens.colors.error / warning / info | openai-live |
| tokens.colors.gray-50 … gray-800 / surface-* / dark-border / amber-* | openai-live |
| tokens.typography.family.sans / mono | openai-live |
| tokens.typography.display-hero … code (size, weight, lineHeight, tracking, use) | openai-live |
| tokens.spacing.sm / md / base / lg | openai-live |
| tokens.rounded.sm / md / lg / xl / full | openai-live |
| tokens.shadow.card-hover / toast / dialog | openai-live |
| tokens.components.button-primary / button-teal / button-secondary / button-ghost / pill | openai-live |
| tokens.components.chat-composer / form-field | openai-live |
| tokens.components.card / card-dark / user-message | openai-live |
| tokens.components.badge-neutral / badge-teal / badge-amber | openai-live |
| tokens.components.tab-underline / segmented / toast / dialog / toggle | openai-live |

## Proof notes

- tokens.source: `prose-derived`; not `reconciled`; not an official published OpenAI UI specification
- components_harvested: true
- Catalog logo is Google s2 identity-only. Not dual-destination with portable Assets (E2a)
- Homepage `https://openai.com` is dual-destination: Experience Scope + this identity/surfaces ledger (E2a)
- OpenAI Sans 2025 rebrand / ABC Dinamo / Söhne / Signifier / Colfax history is third-party WebSearch corroboration (Loftlyy, Mobbin, Fonts In Use, DesignYourWay, brandpalettes.com). It is not official product-use. openai.com/brand HTTP 403 does not create official authority (E1)
- Interpretive claims in source (example given there: “teal is a scalpel, not a brush”) are editorial readings of the design, not documented OpenAI statements. Portable Principles and the retained Scope / Elevation / Layout whitespace / type-character / Voice blocks keep that evidence-class limit adjacent in the body (B2/B2a)
- Source §13 personas are fictional archetypes informed by publicly described user segments, not individual people. Portable Audience keeps the exclusion boundary only. Names, ages, cities, employers, and biographies are not copied here (D2). Primary tasks come from composer/CTA/docs evidence, not §13
- Unattributed easing *curves* omitted from portable Foundations: `ease-out` `cubic-bezier(0.0, 0.0, 0.2, 1)`; `ease-in` `cubic-bezier(0.4, 0.0, 1, 1)` (matches the legacy spec template `ease-exit`); `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)`. Token names `ease-out` / `ease-in` / `ease-standard`, their uses, and the menu/popover `ease-out` association remain in portable Motion as source-stated/uncomputed labels. Duration tokens and signature-motion prose are kept. B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion
- Generic `Focus` (3px teal ring on inputs; composer border darken) is not `focus-visible` treatment
- Uncaptured hover/disabled/loading visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- No `[FILL IN]` placeholders exist in the source; none are emitted

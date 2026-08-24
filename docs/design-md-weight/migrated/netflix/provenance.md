# Netflix provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/netflix/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | netflix |
| name | Netflix |
| country | US |
| category | consumer-tech |
| homepage | https://www.netflix.com |
| primary_color | `#E50914` |
| logo | type `simpleicons`, slug `netflix` |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| verified | 2026-06-06 |
| added | 2026-06-06 |

Token note from source: catalog `primary_color` `#E50914` is Netflix Red (Pantone 1795 C, RGB 229·9·20). It is the logo / marketing-CTA / progress accent, not the in-app Play fill (`#FFFFFF`). Catalog logo type `simpleicons` / slug `netflix` is identity metadata in this ledger. Portable Assets and Avoid state the identity-only / not-a-mark-file boundary; no mark file is attached (E2a dual: Identity + Typography & Assets + Avoid).

No `ds.name` / `ds.url` / `ds.type` / `ds.description` fields exist on the source. None are invented here.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-06 |
| added | 2026-06-06 |
| tokens.extracted | 2026-06-09 |
| WebSearch token grounding comment | 2026-06-06 |

Conflicts unresolved: form-error color family. Source §2 says form errors use a warm red `#E50914`; auth/payment errors and YAML `tokens.colors.error` use `#E87C03`. Both statements are preserved in portable Foundations. Neither is chosen.

Grey 800 `#2F2F2F` is listed as “secondary button fill” in the source scale table; harvested More Info fill is `rgba(109,109,110,0.7)` (grey600 @70%). Both values are preserved. They are not merged.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| consumer-web | product-surface | https://www.netflix.com | 2026-06-06 (source: live DOM getComputedStyle; extraction `prose-derived`) |

The source names consumer browse, player, title-detail, and marketing-acquisition (Get Started / sign-in) as the product surface set. It does not list separate inspectable URLs for player, detail, or auth. Those names stay as portable scope; they are not given invented routes here.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| netflix-live | product-surface | https://www.netflix.com | 2026-06-06 |
| netflix-brand-logos | identity | https://brand.netflix.com/en/assets/logos/ | 2026-06-06 |

### Tier 1

- https://www.netflix.com (live production site; source says verified via live DOM getComputedStyle)

### Official brand (logos, not a type specimen)

- https://brand.netflix.com/en/assets/logos/

### Web-search corroboration (not interface tokens)

WebSearch (2026-06-06) and named pages:

- https://www.brandcolorcode.com/netflix — Netflix Red `#E50914` (RGB 229·9·20, Pantone 1795 C), Black `#000000`, White `#FFFFFF`, Dark Red `#B20710`
- https://www.designyourway.net/blog/netflix-logo/ — Netflix Sans / Dalton Maag history (third-party; not official product-use)

Dark-UI tokens (`#141414` canvas, `#181818` card, `#B3B3B3` metadata grey, `#2F2F2F` hover, `#46D369` match-green, hover scale 1.5×) are described in the source as well-documented conventions of the Netflix web/TV consumer UI, used as representative values. Token extraction remains `prose-derived`.

Brand narrative facts (founded 1997 by Reed Hastings and Marc Randolph; DVD-by-mail; streaming launched 2007; House of Cards 2013; 190+ countries) are widely documented public history in the source HTML comment. They are not interface tokens.

## Claim ledger

Claims use the source’s single named live surface unless noted. Token extraction is `prose-derived` (2026-06-09). `components_harvested: true`.

| claim | surface |
|---|---|
| tokens.colors.primary / primary-hover / brand | netflix-live |
| tokens.colors.canvas / foreground / muted / on-primary / surface / hairline / body | netflix-live |
| tokens.colors.error / success / accent-match | netflix-live |
| tokens.typography.family.sans / mono | netflix-live |
| tokens.typography.billboard-title / display / heading-lg / heading / row-title / subtitle / body-lg / body / caption / micro | netflix-live |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | netflix-live |
| tokens.rounded.sm / md / lg / full | netflix-live |
| tokens.shadow.hover / floating / modal | netflix-live |
| tokens.components.button-primary / button-cta / button-secondary / button-circle | netflix-live |
| tokens.components.input-auth / input-search | netflix-live |
| tokens.components.card-tile / card-hover | netflix-live |
| tokens.components.badge-new / badge-top10 / badge-maturity | netflix-live |
| tokens.components.tab-nav / toast-banner / dialog-modal / toggle-default | netflix-live |

## Proof notes

- tokens.source: `prose-derived`; not `reconciled`; not an official published Netflix UI specification
- components_harvested: true
- Catalog logo type `simpleicons` / slug `netflix` is dual-destination: this Identity ledger holds the type/slug; portable Assets and Avoid state the identity-only / not-a-mark-file boundary. No mark file is attached (E2a)
- Homepage `https://www.netflix.com` is dual-destination: Experience Scope + this identity/surfaces ledger (E2a)
- Official logos page `https://brand.netflix.com/en/assets/logos/` is dual-destination: Typography & Assets + this sources ledger (E2a). It is not a type specimen
- `https://www.designyourway.net/blog/netflix-logo/` is dual-destination: Typography Font evidence (third-party-corroborated brand history) + this Web-search ledger (E2a)
- `https://www.brandcolorcode.com/netflix` is provenance-only Web-search corroboration; not a portable token sheet (E2a: not dual-destination)
- Netflix Sans Dalton Maag 2018 / Gotham-replacement history is third-party WebSearch corroboration. It is not official product-use (E1)
- Interpretive claims in source (examples given there: “dim the room, light the screen”, “chrome aspires to disappear”) are editorial readings of the design, not official Netflix statements. Portable Principles, Scope visual paragraph, Elevation, Layout whitespace, type-character, and Content voice keep that evidence-class limit adjacent in the body (B2/B2a)
- Source §13 personas are fictional archetypes informed by publicly described streaming-viewer segments, not individual people. Portable Audience keeps the exclusion boundary only. Names, ages, cities, and biographies are not copied here (D2). Primary tasks come from catalog browse / Play / marketing-auth evidence, not §13
- Unattributed easing *curves* omitted from portable Foundations (E2b omission ledger):
  - `ease-out` `cubic-bezier(0.0, 0.0, 0.2, 1)` (matches the legacy spec template `ease-enter`)
  - `ease-in` `cubic-bezier(0.4, 0.0, 1, 1)` (matches the legacy spec template `ease-exit`)
  - `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)` (matches the legacy spec template `ease-standard`)
  - `ease-scroll` `cubic-bezier(0.25, 0.1, 0.25, 1)` (unattributed; CSS default-ease class)
  Token names `ease-out` / `ease-in` / `ease-standard` / `ease-scroll`, their uses, and the signature-motion associations remain in portable Motion as source-stated/uncomputed labels. Duration tokens (`0ms` / `150ms` / `300ms` / `400ms` / `600ms`) and signature-motion prose are kept. B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion
- Generic `Focus` on the auth field (border `#FFFFFF`, label floats to 11px) is not `focus-visible` treatment
- Uncaptured hover/disabled/loading visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- No `[FILL IN]` placeholders exist in the source; none are emitted
- Profile Gate Tile and Continue-watching Progress appear in source §4 prose, not in YAML `tokens.components`. They are portable Components (A3). Progress has no YAML `type`; none is invented. Profile Gate has no YAML `type`; none is invented
- YAML primitive types preserved per component: button ×4, input ×2, card ×2, badge ×3, tab, toast, dialog, toggle (A1b)
- YAML unitless lineHeight ratios 1.1 / 1.15 / 1.2 / 1.25 / 1.3 / 1.4 / 1.5 are portable Type roles (A1a)

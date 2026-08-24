# Discord provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/discord/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | discord |
| name | Discord |
| country | US |
| category | consumer-tech |
| homepage | https://discord.com |
| primary_color | `#5865F2` |
| logo | Simple Icons slug `discord` (type: simpleicons) |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |

Token note from source: catalog `primary_color` `#5865F2` is Blurple. Simple Icons slug `discord` is identity in this ledger and a portable Typography & Assets *boundary* sentence (not a redistributable mark) (E2a). Homepage `https://discord.com` is dual-destination: Experience Scope + this identity/surfaces ledger (E2a).

No `ds.name` / `ds.url` / `ds.type` / `ds.description` fields exist on the source. None are invented here.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-06 |
| added | 2026-06-06 |
| tokens.extracted | 2026-06-09 |
| Web verification comment | 2026-06-06 |

Conflicts unresolved: none as a product-vs-marketing clash. Product UI (dark, gg sans, layered slate-navy) and marketing web (bright Blurple, Wumpus, Ginto/gg sans headlines) are documented as parallel surfaces. Preserved value conflicts inside those surfaces:

- YAML `mention-badge.bg` `#ED4245` vs §4 Mention Badge `#F23F43`
- YAML `toggle.bg` `#57F287` vs §4 Track On `#23A55A`
- YAML brand Green `#57F287` vs presence/toggle body `#23A55A` vs Success button `#248046`
- YAML brand Red `#ED4245` vs mention/DND `#F23F43` vs Destructive `#DA373C`
- YAML brand Yellow `#FEE75C` vs Idle/reconnect `#F0B232`
- Pill geometry: §5 `9999px` for marketing CTAs vs §4 Marketing CTA `28px` (fully pill)
- Message avatar: §8 `32px` (message) vs §9 prompt-guide `40px` circular avatar

Both sides of each pair stay in portable Foundations, Components, or Layout. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| marketing-home | marketing | https://discord.com | 2026-06-06 |

The source names in-app product UI (dark-mode-first Discord client) and the marketing site as parallel surfaces. It does not list a separate inspectable in-app URL. Those names stay as portable Scope; they are not given invented routes here. Light theme is a secondary product theme named in the source. `https://discord.com` is the marketing/production check URL in the source footer and HTML comment. It is not used as an in-app product-token surface.

## Sources

The source has no `verification_v2.sources` table. The live production URL and WebSearch names below are copied from the footer and HTML comment, not invented as an in-app harvest.

| id | kind | url | captured |
|---|---|---|---|
| discord-com-live | production-check | https://discord.com | 2026-06-06 |
| discord-branding | official-brand | https://discord.com/branding | 2026-06-06 |
| color-name | third-party | color-name.com | 2026-06-06 |
| mobbin | third-party | mobbin.com | 2026-06-06 |
| colorxs | third-party | colorxs.com | 2026-06-06 |

### Tier 1

- https://discord.com (live production site, verified via live DOM getComputedStyle). Dual-destination with portable Experience Scope as the named marketing/production URL (E2a). Not an in-app product-token surface.

### Tier 2 — official brand surface (not in-app product-use)

- https://discord.com/branding — first-party brand surface named in the source WebSearch comment for Blurple and the five-color palette. Dual-destination with portable Typography Font evidence “Official brand surface” (E2a). Not in-app product-use.

### Tier 2 — third-party corroborators (not official product-use, not in-app)

- color-name.com
- mobbin.com
- colorxs.com

WebSearch corroboration in the source HTML comment: Blurple `#5865F2` (2021 rebrand from legacy `#7289DA`), five-color palette Green `#57F287` / Yellow `#FEE75C` / Fuchsia `#EB459E` / Red `#ED4245`, custom rounded sans-serif (gg sans), Clyde logo. Dual-destination: portable Font evidence third-party row + this ledger (E2a).

### Narrative (not interface tokens)

Widely documented public facts recorded in the source: founded 2015 by Jason Citron and Stan Vishnevskiy; original wedge low-latency voice chat for gaming; grew into community-run servers and channels for text, voice, and video; 2021 rebrand (brighter Blurple, gg sans replacing Whitney/Uni Sans, five-color palette, illustration-forward marketing); mascots Clyde, Wumpus, Nelly.

Observed marketing strings from source HTML Direct verification WebFetch 2026-06-06 (dual portable Content & Locales):

- "group chat that's all fun & games"
- "find your friends on discord"

HTML comment facts also used in portable Scope (dark-mode-first product chrome, Blurple accent, marketing voice, mascot names), Font evidence (branding vs third-party split), and Components (filled borderless button approach, rounded UI). Those portable destinations are in addition to this ledger.

## Claim ledger

The source has no `verification_v2.claims` object and no per-claim surface mapping. None is invented here. Token extraction remains `prose-derived` (2026-06-09). `components_harvested: true`. Portable Foundations restates YAML/body values with that extraction class and the Scope no-proxy split (in-app product UI versus marketing site). Marketing URL `https://discord.com` is not assigned as the surface of in-app product tokens.

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Proof notes

- tokens.source: `prose-derived`; not `reconciled`; not an official published Discord UI specification
- components_harvested: true
- Simple Icons slug `discord` is dual-destination: this identity ledger + portable Typography & Assets boundary sentence (E2a). It is not a captured first-party mark
- Homepage `https://discord.com` is dual-destination: Experience Scope + this identity/surfaces ledger (E2a). It is marketing/production-check, not an in-app product-token surface
- `https://discord.com/branding` is a first-party brand surface, dual portable Font evidence + this ledger, and is not in-app product-use (E1)
- color-name.com / mobbin.com / colorxs.com are third-party corroborators, dual portable Font evidence + this ledger, and are not official product-use and not in-app product-use (E1)
- Observed WebFetch 2026-06-06 strings `"group chat that's all fun & games"` and `"find your friends on discord"` are dual portable Content & Locales + this freshness/narrative ledger (E2a)
- Remaining voice examples in the source body are derived editorial reconstruction, not the same evidence class as those two strings
- Source has no per-claim surface mapping; none invented. Surface id `discord-live` is not used as a claim surface
- Toast source Use is transient confirmations / connection status. Auto-dismiss is not in the source and is not recorded here. Portable Toast keeps `Kind: non-interactive` from that status-message role, not from auto-dismiss
- Mention Badge and Nitro Badge keep `Kind: non-interactive`; maps omitted (C4). Log must not say those kinds were omitted.
- Token-level product surface values (`#1E1F22` / `#2B2D31` / `#313338` surfaces, `#DBDEE1` text, status greens/reds, message-box `#383A40`, hover `rgba(78,80,88,*)`) reflect Discord’s widely-documented dark-theme design tokens and are treated as authoritative for this reference in the source comment. Portable Foundations restates them as source-stated values, not as a computed-style harvest of every in-app route
- Interpretive claims in source (clubhouse metaphor; “depth by layering, not shadow”; Blurple personality; conversation-as-the-product; refusal of enterprise/feed mechanics; type-character “rounded warmth”; voice “friend who runs the group chat”) are editorial readings of the design, not documented Discord statements. Portable Principles and retained Scope / Avoid / Elevation / Motion / States-table characterizations / Semantic workhorse / type-character / Layout whitespace / Voice blocks keep that evidence-class limit adjacent in the body (B2/B2a)
- Source §13 personas are fictional archetypes informed by publicly described Discord user segments, not individual people. Portable Audience keeps the exclusion boundary only. Names, ages, cities, and biographies are not copied here (D2). Primary tasks come from channel messaging / marketing CTA / low-latency voice evidence, not §13
- Unattributed easing *curves* omitted from portable Foundations: `ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)`; `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` (matches the legacy spec template); `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)`; `ease-bounce` `cubic-bezier(0.34, 1.56, 0.64, 1)`. Token names `ease-enter` / `ease-exit` / `ease-standard` / `ease-bounce`, their uses, and the signature-motion associations remain in portable Motion as source-stated/uncomputed labels. Duration tokens and signature-motion prose are kept. B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion
- Generic `Focus` (text-input border `#5865F2`) is not `focus-visible` treatment
- Uncaptured hover/disabled/loading visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- In-app component pixels (radii, paddings, heights) are representative of observed UI conventions; exact internal design-token names may differ. That qualifier stays in portable Components
- No `[FILL IN]` placeholders exist in the source; none are emitted

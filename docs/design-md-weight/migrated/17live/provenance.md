# 17LIVE provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/17live/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | 17live |
| name | 17LIVE |
| country | TW |
| category | consumer-tech |
| homepage | https://17.live |
| primary_color | `#FF4F6E` |
| logo | favicon `https://www.google.com/s2/favicons?domain=17.live&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-08 |

Token note from source: primary = 17 Pink `#FF4F6E`; dark-stage palette and non-primary hexes are grounded approximations pending live re-inspection (see source §2 note). Dual-destination with portable Experience Scope and Foundations Semantic color (E2a). Catalog `primary_color` `#FF4F6E` is also restated in portable Distinctive, Principles/capture-bound, Components fills, and Named gaps (E2a). The Google s2 favicon URL is catalog identity-only in this ledger; it is not a portable Typography & Assets mark (E2a: URL not dual-destination). The portable Assets identity-not-captured sentence sits under adjacent complete B2a. Homepage `https://17.live` is dual-destination: Experience Scope + this identity/surfaces/sources/Tier 1/Proof ledger (E2a).

No `ds.name` / `ds.url` / `ds.type` / `ds.description` fields exist on the source. None are invented here.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-05-19 |
| tokens.extracted | 2026-06-08 |
| WebFetch tagline | 2026-05-19 |
| Wikipedia WebFetch | 2026-05-19 |

Conflicts unresolved: production hexes beyond primary not live-verified this pass (browser unreliable) — flagged for UPDATE. Portable Foundations restates those hexes as source-stated approximations, not as a computed-style harvest.

Preserved value pairs (both sides stay in portable Foundations / Typography / Components; neither is chosen):

- YAML LIVER-name size 16px vs body `15–16px` vs §9 prompt `15px`
- YAML section heading 20px vs body `18–20px`
- YAML hero 28px vs body `22–28px`
- Gift button two-stop `#FF4F6E` → `#FF2D8E` vs §2 premium animation three-stop `#FF4F6E` → `#FF2D8E` → `#FFC83D`
- Default input border: none vs `1px solid rgba(255,255,255,0.15)`
- Chat input background: `#2C2C2E` vs translucent over video
- LIVE Badge: `#FF4F6E` vs `#27C76F` dot + "LIVE"
- Rank Badge radius: `50%` vs `4px`
- Pink Pressed `#E8455F` as §2 press/hover vs YAML Primary `states: pressed #E8455F`
- Empty copy: §14 “explore Trending” treatment vs §10 sample `No one's live here right now — check out Trending.` vs table row `No one's live in this category right now — explore Trending.`

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product (attempted) | https://17.live | 2026-05-19 — live inspect NOT completed (browser redirect / ad interstitials) |

The source names the 17.live product, a mobile/vertical-video-first canonical surface, and web/desktop as a secondary surface. It does not list separate inspectable native-app URLs. Those names stay as portable Scope; they are not given invented routes here. `https://17.live` is the catalog homepage and the attempted live-inspect URL. It is not used as a computed-style claim surface.

## Sources

The source has no `verification_v2.sources` table. The URLs below are copied from the footer and HTML comment, not invented as an in-app harvest.

| id | kind | url | captured |
|---|---|---|---|
| 17live-home-attempted | product-surface (attempted) | https://17.live | 2026-05-19 (inspect not completed) |
| wikipedia-17live | tertiary narrative | https://en.wikipedia.org/wiki/17LIVE | 2026-05-19 |

### Tier 1

- https://17.live — live inspect NOT completed (browser redirect). WebFetch surfaced only the tagline `Live Streaming 直播互動娛樂平台`. Dual-destination with portable Experience Scope as the named homepage URL (E2a). Not a computed-style product-token surface.
- Catalog `primary_color` `#FF4F6E` is the creation-brief-provided value and is recorded as matching 17LIVE’s known hot-pink identity; it is not a live computed hex from this pass. Matching/authority sit under Scope adjacent complete B2a. Destinations: this identity ledger + portable Scope catalog/matching + Distinctive + Principles/capture-bound + Foundations 17 Pink + Components fills + Named gaps (E2a).

### Tier 2 (not checked this pass)

- https://styles.refero.design — not checked this pass (browser session unreliable)
- https://getdesign.md — not checked this pass (browser session unreliable)

### Tier 2 (philosophy / founders) — Wikipedia, not interface tokens

- https://en.wikipedia.org/wiki/17LIVE (WebFetch 2026-05-19) — founded June 2015 Taiwan by Jeffrey Huang; Joseph Phua CEO post-2017 merger; Alex Lien Global CEO 2023; ~60M registered users / 154 countries (Apr 2022); ~46k contracted artists; 2.3M+ MAU; SGX-listed (VT1); revenue via virtual gifting, fan-club subs, ticketed events, live-commerce (HandsUp/OrderPally); "LIVER" = streamer. Metrics not independently audited. Dual-destination: portable Experience Scope narrative + this ledger (E2a). Treating those facts as not interface tokens has Scope adjacent complete B2a.

### Style ref (not a token source)

- `pinkoi` (TW consumer tone, adapted dark). Provenance-only. Not a portable Avoid or Foundations rule.

## Claim ledger

The source has no `verification_v2.claims` object and no per-claim surface mapping. None is invented here. Token extraction remains `prose-derived` (2026-06-08). `components_harvested: true`. The string `prose-derived` is dual portable Scope + Typography Font evidence + this ledger (not Foundations). The approximation bound (brief-provided primary; other hexes pending live re-inspection) is dual portable Scope + Foundations Semantic color + Named gaps + this ledger (E2a). Homepage `https://17.live` is not assigned as the computed-style surface of in-app product tokens. Surface id `17live-live` is not used as a claim surface.

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed easing curves (E2b)

Portable Foundations keeps token names `ease-standard` / `ease-enter` / `ease-spring` and their uses. These cubic-bezier strings are omitted from the portable body as unattributed (all three match `spec/omd-v0.1.md` template examples) and are stored here as the omission ledger:

- `ease-standard` `cubic-bezier(0.4, 0, 0.2, 1)` — matches legacy spec template `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)`
- `ease-enter` `cubic-bezier(0, 0, 0.2, 1)` — matches legacy spec template `ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)`
- `ease-spring` `cubic-bezier(0.34, 1.56, 0.64, 1)` — matches legacy spec template `ease-spring`

Duration tokens (`0ms` / `150ms` / `250ms` / `400ms` / `600–1500ms`) and signature-motion prose remain in portable Motion.

## Proof notes

- tokens.source: `prose-derived`; not `reconciled`; not an official published 17LIVE UI specification. String destinations: this ledger + portable Scope + Typography Font evidence (E2a). Not Foundations.
- components_harvested: true
- Catalog logo Google s2 URL is identity-only. Not dual-destination with portable Assets (E2a). Portable Assets identity-not-captured + imagery-replacement sit under adjacent complete B2a
- Homepage `https://17.live` is dual-destination: Experience Scope + this identity/surfaces/sources/Tier 1/Proof ledger (E2a). Attempted live inspect, not a computed-style product-token surface
- Source token note (brief-provided primary; other hexes approximations) is dual portable Scope + Foundations Semantic color + Named gaps + this ledger (E2a)
- Observed WebFetch 2026-05-19 string `Live Streaming 直播互動娛樂平台` is dual portable Content & Locales + this freshness/narrative ledger (E2a)
- Remaining voice examples, copy-pattern table, forbidden-phrase list, and TW-native copy rule sit under Content adjacent complete B2a and are not labeled Observed
- Wikipedia founding / metrics / LIVER terminology / HandsUp / OrderPally / SGX VT1 are dual portable Scope narrative + this ledger (E2a); metrics not independently audited. Restored unique §11 facts in portable Scope: musician-entrepreneur; co-founder of Paktor; headquartered across Japan, Taiwan, and beyond; ranking among the largest live-broadcasting platforms; “17” as going-live shorthand. Treating those facts as not interface tokens has Scope adjacent complete B2a
- Style ref `pinkoi` is provenance-only
- Source has no per-claim surface mapping; none invented
- LIVE Badge, Rank Badge, and Avatar omit kind and map (C4); source records type/use/geometry only. Stream Card and Profile / List Card omit kind and map (C4). Kind is not declared `non-interactive`.
- Adjacent complete B2a in the portable body (not a reconstruction-boundary exemption): Scope secondary-surface / no-invented-route; Scope matching / authority; Scope atmosphere / chrome-around-video; Scope Wikipedia not-interface-tokens; Scope design-language-as-intimacy-thesis; Audience restriction / tasks-only / no-invented-personas; Distinctive ranking + trait characterizations; numbered Principles (six items + capture-bound); Avoid Don’ts causal wording; Avoid catalog-favicon; Semantic “signature brand + action”; Overlay-scrim purpose; Semantic unmerged-role; Spacing unlisted-route; Shape local-geometry including 4px LIVE-badge; Elevation philosophy; Motion bifurcated/spring; Signature “not decoration” / “ambient live energy” / “celebratory beat” / ease-spring not-computed; Stream-switch smoothness/orientation; Reduce-motion “event never lost”; easing-table “quiet and platform-native” / “Reaction layer ONLY”; representative-reconstruction-pixels; Font evidence-class application; Family fallback-display; type-character; Assets identity-not-captured + imagery-replacement; §14 encouraging/blameless/animation-IS-confirmation; Gift “highest-energy”; Layout density / “noise from reactions”; Layout structure / Twitch-like / thumb-zone; Layout unlisted-surface; Content voice + derived table + forbidden-phrase list + TW-native copy rule
- Source §13 personas are fictional archetypes informed by publicly described 17LIVE user segments (JP/TW livestream fans and LIVERs), not individual people. Portable Audience keeps the exclusion boundary only. Names, ages, cities, and biographies are not copied here (D2). Primary tasks come from discover-grid / watch-or-GO-LIVE / follow-or-gift evidence, not §13
- Generic `Focus` (default input border `#FF4F6E`) is not `focus-visible` treatment
- Uncaptured hover/disabled/loading visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. Follow success and Gift error/success stay applicable from source §14. Follow loading/error, Chat error, and mixed Secondary loading/error/success are omitted at the field boundary, not closed as N/A. State coverage is not claimed complete
- In-app component pixels (radii, paddings) are representative reconstruction values; exact internal design-token names may differ. That qualifier stays in portable Components
- No `[FILL IN]` placeholders exist in the source; none are emitted

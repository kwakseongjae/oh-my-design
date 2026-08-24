# Adobe provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/adobe/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | adobe |
| name | Adobe |
| country | US |
| category | design-tools |
| homepage | https://www.adobe.com |
| primary_color | `#eb1000` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=adobe.com&sz=128` |
| omd format (source) | 0.1 |
| ds.name | Spectrum |
| ds.url | https://spectrum.adobe.com |
| ds.type | system |
| ds.description | Adobe's design system. Spectrum 2 (s2.spectrum.adobe.com) is the current generation — blue-900 #3b63fb accent, 16px pill geometry, Adobe Clean Spectrum VF. |
| tokens.source | reconciled |
| tokens.extracted | 2026-06-11 |
| components_harvested | true |
| added | 2026-06-11 |

Token note from source: `primary = Adobe brand red (#eb1000, logo + marketing). Product/commerce interactive accent = Spectrum 2 blue-900 (#3b63fb, live Buy-now CTA + official @adobe/spectrum-tokens v14). Legacy Spectrum 1 accent #0265dc still renders on spectrum.adobe.com docs.` Dual destination (E2a): this ledger and portable Experience Scope (same note plus the adjacent register-split / derived editorial implementation inference / not-Adobe-authored or a separately published UI specification limiter).

Catalog logo type `favicon` / Google s2 slug URL `https://www.google.com/s2/favicons?domain=adobe.com&sz=128` is this identity ledger only. Portable Assets holds a URL-free Google-favicon capture-method / not-a-portable-mark sentence, not the URL string (E2a: URL destination and URL-free boundary destinations are separate). Named gaps has no first-party-mark sentence. The live homepage SVG fill `.cls-1{fill: #eb1000}` is identity evidence for Adobe Red in portable Assets.

Catalog homepage `https://www.adobe.com` is dual-destination: Experience Scope + this identity/surfaces ledger (E2a). Plans `https://www.adobe.com/creativecloud/plans.html`, Spectrum docs `https://spectrum.adobe.com/page/button/` and `https://spectrum.adobe.com/page/principles/`, Spectrum 2 `https://s2.spectrum.adobe.com/`, and about `https://www.adobe.com/about-adobe.html` are dual Scope + this surfaces/Tier 1 ledger (E2a). `ds.url` `https://spectrum.adobe.com` is this identity ledger; the same host appears in portable Scope as Spectrum docs URLs (E2a: identity `ds.url` vs captured page paths).

Catalog `primary_color` `#eb1000` is identity metadata + portable Scope token-note 13 + Scope atmosphere 17 + Distinctive 42/52 + Principle 5 implication 67 + capture-bound 73 + Avoid 90 + Foundations unmerged-role 99 + Adobe Red 103 + Error 127 + Assets SVG fill 232 + Capture-record Error 249 / characterizations 255. Named gaps does not contain the hex (E2a). It is not Buy-now `#3b63fb` and not error `#d73220`.

`ds.name` Spectrum, `ds.type: system`, and `ds.description` (Spectrum 2 / s2.spectrum.adobe.com / blue-900 `#3b63fb` / 16px pill / Adobe Clean Spectrum VF) are this ledger (A1c) + portable Scope opening (description facts). `tokens.source: reconciled` and `components_harvested: true` are this ledger only (A1c). `added` 2026-06-11 is this ledger only.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-11 |
| added | 2026-06-11 |
| tokens.extracted | 2026-06-11 |
| live inspect (playwright getComputedStyle + innerText) | 2026-06-11 |
| Observed voice samples | 2026-06-11 |
| footer Verified | 2026-06-11 |

Conflicts unresolved: none (source footer). Preserved value pairs inside the reconstruction: `#eb1000` identity red vs Accent `#3b63fb` vs Link `#274dea` vs Spectrum 1 `#0265dc` vs Error `#d73220`; Heading `#000000` vs Ink `#131313` vs Strong Label `#292929` vs Body Slate `#2c2c2c` vs Muted `#686868`; Canvas `#ffffff` vs Surface `#f8f8f8` vs Tile `#f3f3f3`; YAML `rounded.full` 999 / `999px` vs Inverse/Ghost `75px`; YAML `typography.button` 14px vs Buy-now harvested 15px; YAML line-height ratios `1.5` / `1.25` vs body-table `27px` / `20px`; YAML inverse padding `0 24px` vs body `0px 24px`. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing-homepage | https://www.adobe.com/ | 2026-06-11 |
| plans | commerce-plans | https://www.adobe.com/creativecloud/plans.html | 2026-06-11 |
| spectrum-button | official-ds-docs | https://spectrum.adobe.com/page/button/ | 2026-06-11 |
| spectrum-principles | official-ds-docs | https://spectrum.adobe.com/page/principles/ | 2026-06-11 |
| spectrum-2 | official-ds-announcement | https://s2.spectrum.adobe.com/ | 2026-06-11 |
| about | about-corporate | https://www.adobe.com/about-adobe.html | 2026-06-11 |

YAML homepage identity is `https://www.adobe.com` (no trailing slash). Portable Scope catalog identity uses that exact literal. Surfaces/Tier 1 home row uses the live-inspect form `https://www.adobe.com/` from the source footer (E2a: identity literal vs live-inspect trailing-slash form).

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.adobe.com/ | 2026-06-11 |
| plans-live | product-surface | https://www.adobe.com/creativecloud/plans.html | 2026-06-11 |
| spectrum-button-live | official-ds-docs | https://spectrum.adobe.com/page/button/ | 2026-06-11 |
| spectrum-principles-live | official-ds-docs | https://spectrum.adobe.com/page/principles/ | 2026-06-11 |
| spectrum-2-live | official-ds-announcement | https://s2.spectrum.adobe.com/ | 2026-06-11 |
| about-live | about-corporate | https://www.adobe.com/about-adobe.html | 2026-06-11 |
| spectrum-tokens | official-token-package | @adobe/spectrum-tokens v14.13.0 | 2026-06-11 |

### Tier 1

- https://www.adobe.com/ — live computed-style inspect; hero H2s (“Create at the highest level.”, “All the best models, all in one place.”, “Get work done. Faster.”, “Everything you need to make anything.”), Adobe Clean stack, 80px/900 display, pill CTAs, `#eb1000` logo fill
- https://www.adobe.com/creativecloud/plans.html — live inspect, commerce surface; Spectrum 2 chrome (`#3b63fb` Buy now, `#274dea` links, `#131313`/`#2c2c2c`/`#686868` grays, tabs, `#f5c700` flags)
- https://spectrum.adobe.com/page/button/ — official DS docs, live
- https://spectrum.adobe.com/page/principles/ — verbatim principles “Rational”, “Human”, “Focused” with full supporting sentences quoted in source §12
- https://s2.spectrum.adobe.com/ — Spectrum 2 confirmation: “Rational. Human. Focused. Collaborative.”, “The future is built collectively”, “more modern, more friendly, more accessible, and more enjoyable to use”, “The biggest change in Spectrum is... all of the little things”, reduce-motion toggle
- https://www.adobe.com/about-adobe.html — “Empowering everyone to create.”, mission sentence “Adobe empowers everyone, everywhere to imagine, create, and bring any digital experience to life.”, Firefly “commercially safe” statement, scale numbers (29B+ Firefly images, 700M+ Stock assets, 50M+ Behance members)
- @adobe/spectrum-tokens v14.13.0 (npm) — official token values: blue-900 rgb(59,99,251), blue-1000 rgb(39,77,234), gray ladder, red-900 rgb(215,50,32), green-900 rgb(5,131,78), yellow-400 rgb(245,199,0), corner-radius scale (4–16px), “Adobe Clean Spectrum VF” / “Adobe Clean Serif” / “Source Code Pro” families, desktop/mobile font-size sets

Home / plans / spectrum docs / s2 / about URLs are dual-destination with portable Experience Scope (E2a). `@adobe/spectrum-tokens` v14.13.0 is dual Scope token-source sentence + this ledger (E2a). HTML-comment `rgb(...)` notes are this Tier 1 ledger; corresponding hex values are already in portable Foundations. Portable restates the source-body rgb tuples that already sit on §2 color rows (blue-900 / blue-1000 / gray-300 / yellow-400 / green-900 / red-900); it does not invent extra rgb tuples.

### Tier 2 (no usable record)

- https://getdesign.md/adobe and https://getdesign.md/spectrum — both return “No designs found”
- styles.refero.design searched `?q=adobe`, `?q=adobe.com`, `?q=photoshop` — Adobe not listed

### Narrative (not interface tokens)

- Founding (December 1982, John Warnock, Charles Geschke, ex-Xerox PARC, PostScript as the page-description language that made the desktop-publishing revolution physically printable, named after Adobe Creek, Los Altos) — widely documented public facts used without same-turn verification. Portable Scope restates that public-knowledge limiter under adjacent complete B2a (narrative rather than interface tokens).
- About-page mission “Adobe empowers everyone, everywhere to imagine, create, and bring any digital experience to life”, “Empowering everyone to create.”, three clouds + Express, Firefly commercially-safe statement, 29 billion+ / 700 million+ / 50 million+ scale numbers — dual portable Scope + this ledger; mission/empowering lines also Content Observed (E2a).
- Through-line PostScript begat PDF / Illustrator and Photoshop begat Creative Cloud / current era adds Firefly generative AI — dual portable Scope through-line paragraph + this ledger (under adjacent complete B2a in Scope).
- Spectrum principle quotes — dual portable Principles numbered stems (first-party) + this Tier 1 principles URL (E2a).
- Spectrum 2 human-terms quotes (“more modern…”, “all of the little things”, “The future is built collectively”) — dual portable Scope + this Tier 1 s2 URL (E2a).

Voice samples (§10) are verbatim from the live homepage and about page. Dual-destination for the Observed strings and the 2026-06-11 date: portable Content & Locales + this ledger (E2a). “Create at the highest level.” is Display Hero Use + Scope atmosphere + Content Observed — not Primary tasks. “Everything you need to make anything.” is also Category Tile Use. “Empowering everyone to create.” is also Scope mission. Derived §10 tone table and forbidden register are not this observation class.

## Claim ledger

Token extraction is `reconciled` (2026-06-11). `components_harvested: true`. The source does not record `data-omd-capture` selectors or a per-hex Proof map. Footer live-inspect notes attach groups of values to named URLs; they are not a claim-by-claim computed Proof table invented here.

| claim group | evidence class / source-stated surface |
|---|---|
| YAML / body brand red `#eb1000`, heading `#000000`, canvas `#ffffff`, 80px/900 Display Black, pill CTAs, glass dock, `#f3f3f3` tiles | home-live computed style (footer HTML comment) |
| YAML / body `#3b63fb` Buy now, `#274dea` links, `#131313`/`#2c2c2c`/`#686868` grays, audience tabs, `#f5c700` flags | plans-live |
| Spectrum 1 leftover `#0265dc`; docs display 58px/800 serif | spectrum.adobe.com docs (source token note + §3) |
| Spectrum principles Rational / Human / Focused verbatim | spectrum-principles-live |
| Spectrum 2 Collaborative + reduce-motion toggle + human-terms quotes | spectrum-2-live |
| Mission, Firefly commercially-safe, scale numbers | about-live |
| Official token hexes matching live commerce (blue-900, blue-1000, gray ladder, yellow-400, green-900, red-900), Adobe Clean Spectrum VF / Serif / Source Code Pro, 14→17px / 16→19px mobile type scale | @adobe/spectrum-tokens v14.13.0 |
| YAML `button-accent` 15px / 700 / 30px / `3px 16px 4px` / 16px | YAML + portable Spectrum 2 Accent |
| YAML `button-pill-inverse` 75px / 40px / `0 24px` / 14px / 700 | YAML + portable Inverse Pill |
| YAML `button-outline` `#292929` / 2px `#dadada` / 16px / 32px / `6px 16px 8px` | YAML + portable Outline Secondary |
| YAML `tab-audience` active `#131313`+`#f8f8f8`, disabled `#686868` label, `4px 4px 0px 0px`, `24px 32px 18px`, 18px / 600 | YAML + portable Audience Tab |
| YAML `card-tile` `#f3f3f3` / `#000000` / 16px | YAML + portable Category Tile |
| Category Tile heading 24px Adobe Clean Display Black 900 `#000000` / body 16px/400 / text link 14px/700 / no shadow / no border | source §9 bound on portable Category Tile (A3/A4); not a Type-role substitute |
| YAML `nav-link` type `listItem`, `#ffffff`, 14px / 700 | YAML + portable Global Nav Link |
| Ghost Pill (transparent / 1px `#ffffff` / 75px / 40px / 14px / 700) | body §4 only (not YAML `tokens.components`) |
| Glass Quick-Link (`rgba(0, 0, 0, 0.44)` / 8px / `12px 12px 16px` / inset hairline / 16px text / Type: card / Kind: interactive) | body §4 Cards & Containers + §5 entry-point dock; 16px text is §9-only (A3); inset matches YAML `shadow.inset-hairline` |
| Promo Flag `#f5c700` / Type: badge | body §4 Badges; hex also YAML `promo-yellow` |
| Floating assistant `rgba(250,250,250,0.85)` / 24px / 48px / YAML `shadow.subtle` | body §4; shadow matches YAML `tokens.shadow.subtle` |
| App switcher 5px / 32px square / Kind: interactive grid trigger | body §4 Navigation as a separate component; Type not invented |
| Header Sign-in variant 999px / `6px 16px 8px` on the white pill | body §4 Inverse Pill Use |
| YAML unitless `lineHeight` 1.5 / 1.25 | YAML + portable Type roles |
| §14 empty/loading/error/success/skeleton/disabled rows | source state contract; portable Capture record under adjacent complete B2a on table characterizations |
| §15 durations 120ms/200ms/320ms, easing names, reduced-motion, Pause control, no-spring | philosophy layer (sections 10–15); token values marked illustrative; portable Motion under adjacent complete B2a |

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names kept):

- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches `spec/omd-v0.1.md` template example `ease-exit`
- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`

These are unattributed illustrative defaults. Duration tokens (`120ms` / `200ms` / `320ms`), easing names, “Pause” control, “Reduce motion” toggle, `prefers-reduced-motion: reduce`, and “No spring or overshoot” remain in portable Motion under the philosophy-layer / source-stated limiter. B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion beyond those tables. Named gaps lists the omitted curve names and “all five kinds” without enumerating the five evidence kinds; the B3 full text is Foundations Motion only.

## Omitted §9 construction prompts

§9 Agent Prompt Guide Quick Color Reference, Example Component Prompts, and numbered Iteration Guide are deleted from the portable body (no adapter slot). Verified hexes and harvested geometry in that guide already live in Foundations / Components / Experience capture-bound. Unique §9 Category Tile heading/body/text-link/no-shadow/no-border tuple is portable Category Tile (A3/A4). Unique §9 Glass prompt value “white 16px text” is portable Glass Quick-Link Font 16px (A3); weight is not stated in that prompt and is not invented. Remaining prompt-only constructions stay omitted here as deleted tool prompts, not as harvested components.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Proof notes

- tokens.source: `reconciled`; `components_harvested: true`; `ds.type: system` preserved (A1c)
- Catalog Google favicon URL is this identity ledger only. URL-free capture-method / not-a-portable-mark sentence → portable Assets only (E2a). Named gaps has no first-party-mark sentence. Live SVG `#eb1000` fill is portable Assets identity evidence.
- Catalog homepage `https://www.adobe.com` is dual-destination: Experience Scope + this identity ledger (E2a). Live-inspect home URL with trailing slash is Surfaces/Tier 1 + Scope evidence-domain list
- Plans / spectrum docs / s2 / about URLs are dual Scope + this surfaces/Tier 1 ledger (E2a)
- `primary_color` `#eb1000` destinations: identity + Scope token-note 13 + atmosphere 17 + Distinctive 42/52 + Principle 5 implication 67 + capture-bound 73 + Avoid 90 + Foundations 99/103/127 + Assets 232 + Capture-record 249/255. Named gaps has no hex. It is not Accent `#3b63fb`
- Token note is dual-destination: Experience Scope + this ledger (E2a)
- `ds.name` / `ds.type` / `ds.description` facts are dual identity ledger + portable Scope opening (A1c)
- YAML unitless `lineHeight` 1.5 / 1.25 preserved as ratios (A1a)
- Verified primitive types preserved per component: button×5 (Accent, Inverse, Ghost, Outline, Floating Assistant) + tab + card×2 (Category Tile YAML; Glass from source §4 Cards & Containers) + badge (Promo from source §4 Badges) + listItem; Ghost and Floating Assistant take Type: button from body §4; App switcher has no YAML type and none is invented (A1b)
- Generic Focus is absent from the source and is not promoted to `focus-visible` treatment; focus-visible rows carry no hex (B1)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Spectrum 2 Accent / Inverse Pill / Ghost Pill / Outline Secondary / Global Nav Link / Glass Quick-Link Card / App switcher / Floating Assistant omit loading/error/success fields (C2). Audience Tab loading/error/success remain grouping-selection role-based. Category Tile / Promo Flag omit kind/map (C4). Glass keeps Kind: interactive from source §4 quick-link / §5 entry-point dock. App switcher is a separate Kind: interactive grid trigger.
- Ghost Pill, Glass Quick-Link, Promo Flag, Floating Assistant, App switcher 5px/32px, header Sign-in 999px variant are body §4 (Glass/Promo/Ghost/Assistant/App switcher not all in YAML `tokens.components`)
- Source §13 personas are fictional archetypes informed by publicly observable segments (creative professionals, freelance designers, students on Express, enterprise product teams building on Spectrum), not specific individuals. Portable Audience keeps the exclusion boundary only. Names, ages, cities, occupations, and biographies from source §13 are not copied here (D2). Primary tasks come from captured homepage/plans controls, not §13
- First-party Spectrum principle stems (Rational / Human / Focused / Collaborative) are labeled first-party in portable Principles; they are not wrapped as derived. Derived editorial implementation inference covers the *UI implication* notes, item 5 (“brand recedes, work leads”), and the capture-bound application list. Those derived sentences are not Adobe-authored or a separately published UI specification
- Footer Tier 2 unusable records stay this ledger only
- HTML-comment `rgb(...)` notes for token-package corroboration: portable Foundations restates the six rgb tuples that already appear in source §2 color rows; additional HTML-comment rgb groupings stay this Tier 1 ledger

## Derived inventory (portable B2a sites)

Interpretive claims retained in portable body, each with adjacent complete B2a (`derived editorial implementation inference` / `not Adobe-authored or a separately published UI specification`):

- Scope product-story-span (Creative Cloud / Document Cloud / Experience Cloud / Express / Firefly as lineup rather than interface tokens)
- Scope six-pages-across-five-evidence-domain-groups assignment
- Scope token-note register-split
- Scope evidence-domain (homepage vs Spectrum docs vs Spectrum 1 leftover; surface-attachment, not a product-UI gap)
- Scope shout-whisper / two-register / mid-migration / friendlier-geometry / unobtrusive-infrastructure / heaviest-hero-comparison / monochrome-frame / logo-as-signature / contrast-strategy-binary / near-shadowless / whisper-of-elevation readings
- Scope public-history / founding-as-public-fact narrative-not-interface-token
- Scope through-line / refuses / embraces readings
- Audience exclusion / observable-work-follows-three-tasks
- Distinctive unmerged-role readings plus near-shadowless / reserved-for-assistant surface-pattern
- *UI implication* notes, principle item 5, and capture-bound grouping of §7 Do’s / live inspect / Spectrum 2 tokens with first-party Spectrum names marked separately
- Avoid §7 Don’ts
- Semantic color unmerged-role readings including identity-not-interaction on Adobe Red and Spectrum-1-reproduction-only on `#0265dc`
- Spacing YAML-scale / 4px-8px-rhythm as recorded packet spacing rather than a universal spacing token
- Shape local-geometry / 75px-versus-999px / 16px-not-75px readings
- Elevation divider-not-elevation and shadow-philosophy / Focused-mirroring readings
- Motion philosophy-layer / source-stated / illustrative classification
- Motion content-not-chrome / no-spring / steadiness readings including Pause-as-accessibility-commitment
- Font evidence-class application including fallback-not-product-face
- Family font-use boundary (do not present Trebuchet MS as Adobe Clean; do not replace Adobe Clean with another face as if it were Adobe Clean)
- Typography one-family / weight-900-voice / 700-interactive / commerce-reads-bigger / docs-serif readings
- Type roles ratio-versus-size-local / no-lineHeight-promoted / Buy-now-15px-unmerged-from-YAML-button-14px
- Assets Google-favicon identity-only reading
- Assets imagery-not-invented-decoration reading
- Capture-record graph-not-adopted preservation
- Capture-record table characterizations
- Spectrum 2 Accent field-note unmerged-role
- Inverse Pill unmerged-variant (75px vs header 999px)
- Outline Secondary field-note unmerged-role
- Audience Tab folder-tab / fuse-with-panel / captured-variant-not-click-transition
- Category Tile field-note unmerged-role plus heading/body/text-link/no-shadow/no-border tuple-not-Type-role-substitute
- Glass Quick-Link field-note unmerged-role
- Promo Flag field-note unmerged-role
- App switcher 5px/32px geometry-not-Global-Nav / not-Outline-height
- Floating Assistant “one of the only shadows” / fill-not-canvas
- Layout imagery-is-the-layout / two-densities / separation-by-tint / folder-tab top-loading readings
- Layout breakpoint table as recorded span not complete specification of every unlisted control, surface measurements not universal layout tokens, collapsing-strategy / image-behavior as recorded packet application, and touch-target record as a purpose reading rather than a complete target-size specification
- Content Observed citation-character of live-inspect attributions / Focused first-party-principle-language-also-in-Experience / HTML-comment-additional-H2 / harvested-control-string grouping
- Content empty/loading strings as state-contract not extra Observed samples
- Content derived voice + tone table + forbidden register
- Content no-additional-synthetic-voice

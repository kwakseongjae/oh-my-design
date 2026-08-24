# BBC provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/bbc/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | bbc |
| name | BBC |
| country | UK |
| category | consumer-tech |
| homepage | https://www.bbc.co.uk |
| primary_color | `#000000` |
| logo | favicon `https://www.google.com/s2/favicons?domain=bbc.co.uk&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-22 |

Token note from source: primary = BBC black (`#000000`) used for Register CTA, nav block, and all headings; BBC News red (`#bb1919`) is the signature product accent; BBC Reith custom typeface family. The note sentence is dual-destination with portable Experience Scope (token note + register-split) and this identity ledger (E2a). Foundations Semantic color holds the hex roles named in that note; it does not carry the note sentence. Catalog `primary_color` `#000000` is restated wherever that hex appears in the portable body, not only Distinctive / Foundations BBC Black / Register fill (E2a): also Scope token-note / atmosphere, Principles capture-bound, Keyboard Focus ring, Capture-record Loading live spinner, Sign In / Skip / Nav / Toggle text. Named gaps does not restate that hex. The Google s2 favicon URL is catalog identity-only in this ledger; it is not a portable Typography & Assets mark (E2a: URL not dual-destination). The portable Assets identity-not-captured sentence sits under adjacent complete B2a. Named gaps has no first-party-mark-file sentence (D1). Homepage `https://www.bbc.co.uk` is dual-destination: Experience Scope + this identity/surfaces/sources/Tier 1/Proof ledger (E2a). Live-inspect form `https://www.bbc.co.uk/` is dual portable Scope + Primary tasks + this Surfaces/Sources/Tier 1 ledger (E2a). The two writings are not merged.

No `ds.name` / `ds.url` / `ds.type` / `ds.description` fields exist on the source. None are invented here.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-22 |
| tokens.extracted | 2026-06-22 |
| live inspect (playwright getComputedStyle) | 2026-06-22 |
| GEL homepage curl | 2026-06-22 |

Conflicts unresolved: none.

Preserved value pairs (both sides stay in portable Foundations / Typography / Components; neither is chosen):

- Catalog homepage `https://www.bbc.co.uk` vs live-inspect `https://www.bbc.co.uk/`
- YAML `primary` / catalog `primary_color` `#000000` vs heading `#202224` vs body/GEL-heading `#3a3c3e` vs bgFreq `rgb(20,22,24)`
- YAML `canvas` `#ffffff` vs `on-primary` `#ffffff` (same hex, two roles)
- YAML `surface` `#f6f6f6` vs `surface-alt` `#f8f8f8`
- YAML `gel-heading` `#3a3c3e` vs YAML `body` `#3a3c3e` vs Dark Nav Block fill `#3a3c3e`
- YAML `brand-red` `#bb1919` vs `brand-red-dark` `#b80000` vs `brand-red-bright` `#eb0000` vs HTML-comment `#D30000`
- iPlayer `#dc2878` / Sport `#ffd230` / Sounds `#fa6400` vs News `#bb1919`
- YAML `legacy` `Arial, Helvetica, freesans, sans-serif` vs GEL `--bbc-font` `ReithSans, Arial, Helvetica, freesans, sans-serif`
- YAML `display-hero` size 28 vs body `28px+`
- YAML `body` 16 / `lineHeight` 1.50 vs body “minimum 15-18px per GEL spec”
- YAML `caption` omits `lineHeight` vs body Caption 1.50
- YAML spacing unitless xs 4 / sm 8 / md 12 / base 16 / lg 24 / xl 32 / xxl 48 / section 64 vs body 4px–64px / 1.375rem / 2.75rem
- YAML `rounded` sm/md/lg/full `0` vs harvested `0px`
- Register/Sign In height 34px vs Skip 38px vs Search 44px vs nav 42px vs Search button/icon 40px
- Register border `2px solid #000000` vs generic Focus `2px solid #000000` vs Sign In `2px solid transparent`
- YAML search `rgba(239,239,239,0.3)` vs body `rgba(239, 239, 239, 0.3)`

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product-surface | https://www.bbc.co.uk/ | 2026-06-22 — live DOM inspect (nav, Register/Sign In, search, bgFreq/fgFreq) |
| news | product-surface | https://www.bbc.co.uk/news | 2026-06-22 — same nav system; BBC Reith Sans confirmed |
| gel | official-doc | https://www.bbc.co.uk/gel | 2026-06-22 — curl; `--bbc-font`, Reith CDN, product-icon SVGs |

The source names those three URLs. iPlayer / Sounds / Bitesize / Sport product UIs are not given invented inspect routes here. GEL SVG accent hexes for those services stay as portable Foundations accents, not as extra product-surface captures.

## Sources

The source has no `verification_v2.sources` table. The URLs below are copied from the footer and HTML comment, not invented as an in-app harvest.

| id | kind | url | captured |
|---|---|---|---|
| bbc-home | product-surface | https://www.bbc.co.uk/ | 2026-06-22 |
| bbc-news | product-surface | https://www.bbc.co.uk/news | 2026-06-22 |
| bbc-gel | official-doc | https://www.bbc.co.uk/gel | 2026-06-22 (curl) |

### Tier 1

- https://www.bbc.co.uk/ — live DOM inspect (nav, Register/Sign-In buttons, search input, bgFreq/fgFreq scan). Dual-destination with portable Experience Scope and Primary tasks (E2a).
- https://www.bbc.co.uk/news — BBC News surface; same nav system; BBC Reith Sans confirmed. Dual portable Scope + Primary tasks + this ledger (E2a).
- https://www.bbc.co.uk/gel — GEL homepage via curl: CSS vars `--bbc-font: ReithSans,Arial,Helvetica,freesans,sans-serif`; font CDN `static.files.bbci.co.uk/fonts/reith/2.610/BBCReithSans_W_Rg.woff2`; product icon SVGs confirming `#B80000` / `#EB0000` / `#D30000` News red, `#FFD230` Sport amber, `#DC2878` iPlayer pink, `#FA6400` Sounds orange. The URL string is dual portable Scope 11 (GEL as font-loading evidence, not extra product-UI) + this ledger (E2a). Font evidence records the curl as getComputedStyle / curl / CDN corroboration without the URL string (202/206–210). FontFaceSet harvest is not the current class. Foundations accents hold the SVG hexes, not the URL.

bgFreq (HTML comment): `rgb(255,255,255)` ×70, `rgb(58,60,62)` ×22, `rgb(20,22,24)` ×18, `rgb(0,0,0)` ×12, `rgb(84,86,88)` ×12, `rgb(246,246,246)` ×8.

fgFreq (HTML comment): `rgb(0,0,0)` ×2018, `rgb(32,34,36)` ×399, `rgb(255,255,255)` ×63, `rgb(84,86,88)` ×60, `rgb(235,0,0)` ×15.

`rgb(20,22,24)` is dual portable Foundations bgFreq near-black 117 + Semantic unmerged 100 + this ledger (E2a). `#D30000` is dual portable Foundations News Red SVG third 125 + Distinctive 47 + Distinctive unmerged 54 + Semantic unmerged 100 + LIVE field-note 490 + this ledger (E2a).

### Tier 2 (no usable record)

- https://getdesign.md/bbc — not found (no BBC entry)
- https://styles.refero.design/?q=BBC — no BBC result in search

### Narrative (not interface tokens)

- BBC history and founding: John Reith / Royal Charter 1927 — public record, Wikipedia/BBC About pages (source HTML comment). Dual portable Scope public-record paragraph + this ledger (E2a).
- BBC Reith typeface commission: Dalton Maag, 2015 — publicly documented. Dual portable Scope / Font evidence + this ledger (E2a).
- GEL (Global Experience Language): publicly documented BBC design framework. Dual portable Scope / Font evidence + this ledger (E2a).

## Claim ledger

The source has no `verification_v2.claims` object and no per-claim surface mapping. None is invented here. Token extraction remains `live-extract` (2026-06-22). `components_harvested: true`. The string `live-extract` is this ledger only; it is not a portable DESIGN.md string (E2a). Catalog homepage `https://www.bbc.co.uk` is not assigned as the computed-style-only surface of every token: live inspect used `https://www.bbc.co.uk/`.

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here. HTML-comment live inspect names nav links (BBC Reith Sans 14px/500), Register (black bg/white fg/0px radius/6px 12px/500), Sign In (transparent/black/same spec), search input (`rgba(239,239,239,0.3)` bg/none border/0px radius/13px padding/44px height). Those measurements are dual portable Components + this ledger (E2a).

## Omitted unattributed easing curves (E2b)

Portable Foundations keeps token names `ease-standard` / `ease-enter` / `ease-exit` and their uses. These cubic-bezier strings are omitted from the portable body as unattributed (all three match `spec/omd-v0.1.md` template examples) and are stored here as the omission ledger:

- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` — matches legacy spec template `ease-standard` example
- `ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)` — matches legacy spec template `ease-enter` example
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches legacy spec template `ease-exit` example

Duration tokens (`0ms` / `100ms` / `200ms` / `300ms`), easing names, `prefers-reduced-motion: reduce` collapsing to `motion-instant`, and signature-motion prose (hamburger-to-close 200ms `ease-standard` rotation) remain in portable Motion.

## Proof notes

- tokens.source: `live-extract`; not `reconciled`; not an official published BBC UI specification. String destination: this ledger only (not portable DESIGN.md) (E2a).
- components_harvested: true
- Catalog logo Google s2 URL is identity-only. Not dual-destination with portable Assets (E2a). Portable Assets identity-not-captured sits under adjacent complete B2a (247). Named gaps has no first-party-mark-file sentence (D1). Assets 249 is image-first / LIVE-video reconstruction-boundary only; first-party content classification is absent.
- Homepage `https://www.bbc.co.uk` is dual-destination: Experience Scope + this identity/surfaces/sources/Tier 1/Proof ledger (E2a)
- Live-inspect `https://www.bbc.co.uk/` is dual portable Scope + Primary tasks + this ledger (E2a)
- HTML comment: sections 10–15 are Philosophy Layer. Interpretive claims (e.g. black-and-white interactive palette as a deliberate rejection of persuasion-optimised colour) are editorial readings connecting observed design choices to the public-service charter mandate, not directly quoted BBC statements. Those readings sit under portable Scope/Principles/Content adjacent complete B2a.
- Personas (§13): fictional archetypes. Names are not copied here (D2). Source §13 also contained a `360px`-wide screen measurement inside a fictional biography. That px string is kept here so the token is not dropped; it is not promoted as a Layout breakpoint or portable Audience fact.
- Voice samples (§10): verbatim from live bbc.co.uk DOM (2026-06-22) — dual portable Content Observed + this ledger (E2a)

## Derived inventory (adjacent complete B2a in portable DESIGN.md)

Reconstruction-boundary exemption not used. Adjacent complete B2a (`derived editorial implementation inference` / `not BBC-authored or a separately published UI specification`) at:

- Scope coverage assignment / GEL-not-extra-product-UI / iPlayer-Sounds-Bitesize-Sport unnamed except SVG accents / live-inspect-form-not-merged-with-catalog-homepage (11)
- Scope token-note register-split (13)
- Scope atmosphere extra names (15)
- Scope fallback-without-brand-personality (17)
- Scope GEL-scope / anti-rounded / sharp-corners-signal-authority / seriousness-and-journalistic-precision / no-pill-buttons-or-soft-cards / flat-depth-not-shadow / GEL-SVG-accents-not-homepage-CTA-fills (19)
- Scope commercial-media-versus-trust / Register-black-not-dopamine-hue / constitutional-fact-and-design-philosophy / visible-consequence / not-interface-tokens (23)
- Scope one-system-many-voices not-every-homepage-token (25)
- Primary tasks reconstruction-outcomes / §13-out (31)
- Audience no-individual-personas / §13-not-Audience (42)
- Distinctive unmerged-role / SVG-News-reds-unmerged-from-badge-fill / Focus-not-copied-onto-focus-visible-rows (54)
- Principles stems+UI implications+capture-bound (58)
- Principles capture-bound application grouping (71)
- Avoid Don’ts grouping including last bullet (83)
- Semantic unmerged-role / Dark-Nav-fill-not-text-roles / not-off-black / not-a-computed-contrast-proof (100)
- Semantic WCAG-AAA / Focus-AA / Focus-not-focus-visible / omitted-rather-than-mapped (134)
- Spacing limiter-precedes-list (138)
- Shape limiter-precedes-list / defining-geometric-commitment (148)
- Elevation table Use / shadow-philosophy (169)
- Motion philosophy-layer / source-stated-not-computed / spec-template-ease-exit-match (173)
- Motion extra names / fully-functional-and-editorially-identical (190)
- Font evidence-class extra / curl-as-font-loading / fallback-not-second-live-family / Trafalgar-Brevier-not-computed-pixel-roles (202). Current class of the CDN/`--bbc-font` row is getComputedStyle / curl / CDN corroboration (208), not FontFaceSet harvest. **[SUPERSEDED current-class 2026-08-24 wave11 sol resubmit — FontFaceSet class, no-universal-token-sheet, and iPlayer/Sounds/Bitesize/Sport typography-outside-three-captures are absent from DESIGN.md; they are not current Font extras.]**
- Family YAML-legacy-not-GEL-legacy / fallback-display (219)
- Type-role unmerged-writing / no-invented-caption-lineHeight (223)
- Type GEL-principles source-stated-not-computed-on-every-control (235)
- Type GEL-principle rows source-stated-not-token-sheet (243)
- Assets identity-not-captured (247)
- Assets image-first-LIVE-video-not-invented-decoration (249). **[SUPERSEDED current-class 2026-08-24 wave11 sol resubmit — first-party content / editorial photography / programme stills ownership classification is absent; reconstruction-boundary remains without that class.]**
- Capture-record graph-not-adopted (256)
- Capture-record table characterizations (272)
- Capture-record generic-Focus-not-focus-visible (276)
- Register field-note unmerged-role (295)
- Sign In field-note unmerged-field (321)
- Skip field-note only-visible-on-focus / 38px-not-34px (347)
- Skip post-table visibility-not-copied-onto-focus-visible-rows (359)
- Search field-note unmerged-fill / 44px-not-40px / YAML-size-not-invented (376)
- Nav Tab captured-variant / underline-not-LIVE-fill (401)
- Nav post-table captured-variant (413)
- Toggle field-note radius-padding-height-fill-not-invented (425)
- Article Teaser §9 writings-not-second-component (448)
- Surface Content §9 full-width `#f6f6f6` parent + inside heading 20px/700/`#202224` not merged into YAML `heading-md` / GEL H1 (463)
- Dark Nav Block fill-not-text-role / type-not-invented (475)
- LIVE badge fill-not-underline-or-SVG / pulse-not-promoted-motion (490)
- Layout whitespace-philosophy (504)
- Layout recorded-span / surface-measurements / collapsing / GEL-touch-target-purpose (519)
- Content citation-character (526)
- Content §14-not-Observed (534)
- Content derived voice / inventory-not-Observed / forbidden-register (538)
- Content extra characterizations impartial-clear-authoritative-human / neither-clinical-nor-casual / world’s-most-trusted / trusts-intelligence (540)
- Content no-synthetic (556)

Left without B2a: catalog homepage URL / public founding facts / Reith 2015 quote / Reith optical-sizing open-letterform device-vision-ability (source-stated typeface design in Scope 17) / GEL 2015 existence / token measurements / YAML unitless lineHeight 1.25/1.50/1.00 / Type role rows including YAML `heading-md` / GEL H1 227 / Surface Content full-width parent + inside-heading field values 458–459 (the unmerged-from-heading-md reading is B2a 463) / component anatomy including source Use/Role strings / C2 omission sentences / C4 omit-kind sentences / B3 five-kind gate / Governance boilerplate / Named gaps inventory.

# MaiCoin / MAX provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/maicoin/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | maicoin |
| name | MaiCoin / MAX |
| country | TW |
| category | fintech |
| homepage | `https://www.maicoin.com` |
| primary_color | `#ee5457` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=maicoin.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-17 |
| added | 2026-06-17 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-17 |
| tokens.note | Two-surface brand. Consumer MaiCoin (coral): primary = register-CTA coral #ee5457, deeper red-orange family #ce4234/#dd4c4a, up-green #05bb85. Pro MAX (navy): primary = register-CTA navy #2e4692, deep navy #253158, accent blue #007aff, up-green #49a870, down-red #ec5b5c. Numeric font Iosevka on MAX. Shadowless flat chrome on both. |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. Catalog `primary_color` `#ee5457` is dual: identity here, and a keep-off-as-MAX-action-color record in `DESIGN.md` Scope / Semantic color / Consumer Register CTA — it shares the hex with `tokens.colors.primary` and is not MAX navy. The favicon URL is dual: identity here, and a portable Assets pointer in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-17 |
| added | 2026-06-17 |
| surfaces inspected | 2026-06-17 |
| tokens.extracted | 2026-06-17 |

The source footer records the verification verbatim as **Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, two brand-owned surfaces). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer records.

## Surfaces and sources

| id | kind | url | inspected / captured |
|---|---|---|---|
| consumer | product-surface | `https://www.maicoin.com` | 2026-06-17 |
| max | product-surface | `https://max.maicoin.com` | 2026-06-17 |
| consumer-live | product-surface | `https://www.maicoin.com` | 2026-06-17 |
| max-live | product-surface | `https://max.maicoin.com` | 2026-06-17 |
| group-about | official-doc | `https://group.maicoin.com/about` | 2026-06-17 |

YAML `homepage` is `https://www.maicoin.com` (catalog identity; not a MAX token-surface claim by itself).

### Tier 1 (as listed in the source footer)

- `https://www.maicoin.com` (consumer coral surface, live computed style)
- `https://max.maicoin.com` (MAX pro navy surface, live computed style — nav CTA, promo cards, signup/signin inputs)
- `https://group.maicoin.com/about` (brand-owned group About — founder + founding timeline)

### Tier 2

- getdesign.md/maicoin — NO ENTRY
- getdesign.md/max — NO ENTRY
- styles.refero.design `?q=maicoin` / `?q=max exchange` — no genuine entry (returns unrelated featured styles, e.g. "Eclipse Design System")

These are cross-check attempts, not claim evidence. The third-party featured-style name is a refero miss, not a MaiCoin / MAX token.

### Narrative (not interface tokens)

- Official Group About: `https://group.maicoin.com/about`
- Source §11, kept as narrative context in portable Scope: the numbered consumer flow as the direct expression of that mission — turn an intimidating new asset class into a sequence anyone can complete; MAX as a compliance-first differentiator in a market wary of exchange risk; the active trader who needs an order book, depth, and monospaced figures; what the design refuses (dark-pattern urgency, neon hype, shadow-stacked chrome) and what it embraces (a flat, fast, screen-native interface; one disciplined action color per surface).
- Source §1 stack: optimized for dense Traditional-Chinese (zh-TW) legibility. Source §3 Family: tuned for dense Traditional-Chinese (zh-TW) rendering.
- Source §15 Motion rules: Motion is functional and restrained; a trading surface signals steadiness, not delight, and a slow animation on a price would be misleading. Source §10 Forbidden register close: A regulated TW exchange signals steadiness.
- Source §5 Notable: MAX promo cards use a uniform 20px padding; the cool-blue stat strip uses vertical 20px / horizontal 0 padding so figures span edge-to-edge. Whitespace: visually isolated so the next step is unambiguous.

## Token source (YAML `tokens.source`)

The source frontmatter records `tokens.source: live-extract` and `tokens.extracted: 2026-06-17`. That producer string is ledger metadata. `components_harvested: true` is ledger metadata.

## Claim ledger

Claims use YAML anchors from the source: `consumer` = www.maicoin.com / consumer-live / live-inspect / 2026-06-17; `max` = max.maicoin.com / max-live / live-inspect / 2026-06-17.

| claim | surface |
|---|---|
| tokens.colors.primary / coral-deep / coral-red / up-consumer / ink / ink-pure / body / muted / faint / canvas / surface-alt / hairline / on-primary | consumer |
| tokens.colors.navy / navy-alt / navy-deep / accent-blue / up-pro / down-pro / input-ink / dark-card / pill-grey / surface / border-navy | max |
| tokens.typography.family.sans / nav / body / cta / watermark | consumer |
| tokens.typography.family.mono / family.display / cta-pro / input / numeric | max |
| tokens.spacing.* / tokens.rounded.* / tokens.shadow.none | both |
| tokens.components.button-consumer-primary / error-404-card / nav-link | consumer |
| tokens.components.button-pro-primary / button-pro-buy / button-accent / promo-card / stat-card / input-underline / badge-up / badge-down / pill-control | max |

## Capture selectors

The source DESIGN.md does not record `data-omd-capture` pointers. Component geometry is bound to the YAML keys and the two live URLs above.

## Sibling handling (`web/references/maicoin/.verification.md`)

The sibling exists — confirmed with `find web/references/maicoin -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-17. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless), zh-TW locale + realistic Chrome UA, `goto` domcontentloaded + 4.5–5s settle, Escape/modal-dismiss pass, then `getComputedStyle` on body, h1–h3, header/nav, buttons, anchors, inputs, plus a full-DOM background/text/font frequency scan and a targeted coral/green/navy element pass.
- Surfaces: `https://www.maicoin.com` consumer; `https://max.maicoin.com` MAX; sibling also names `https://max.maicoin.com/signup` and `https://max.maicoin.com/signin` as public auth surfaces.
- Consumer raw samples: document.title `MaiCoin 台灣數位資產交易平台 - 比特幣，以太幣，萊特幣`; body `font-family: -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica`; nav "交易" `#262626` 14px / 400; register CTA "立即註冊" `#ee5457` / white / 2px / 16px / 600 / 52px; "了解更多" coral 14px / 400; up-green `#05bb85`; coral-deep `#dd4c4a`; watermark Roboto 123px / 700 / `rgba(0,0,0,0.04)`; `box-shadow: none`.
- MAX raw samples: document.title `MAX Exchange`; primary CTA `#2e4692` / 8px / 16px / 700 / 60px (and a compact 40px variant, `padding: 10px 16px`); buy pill white / `#2e4592` / 22px / 32px; promo cards `#272727` / 16px / 20px / height 248px; carousel pill `#434343` / 20px / 40px; accent block `#007aff` / 8px / 81×40; stat strip `#f2f4fb` / 12px / `20px 0px` / 1200×126; underline inputs `#2f333a` / 14px / placeholders 電子信箱 / 密碼; Iosevka / Iosevka-Bold; `box-shadow: none`.
- TW brand-owned sources (≥2): the two product URLs plus Group About. getdesign.md / styles.refero.design / Google favicon proxy are explicitly not counted toward that requirement.

### Sibling-only strings (not promoted into `DESIGN.md`)

These values appear in the sibling and not in the visible source body. They stay on this ledger. They are not portable facts. This paragraph names the dropped field kind; it does not assert that the strings are absent from this file (E2d).

- compact MAX primary CTA height `40px` as a second variant of the 60px register button (YAML already writes height `60px` with padding `10px 16px` on that same record)
- promo card height `248px`
- accent block size `81×40`
- stat strip size `1200×126`
- `rgba(0,0,0,0.04)` as the watermark spelling (source body writes 4% opacity)
- frequency-scan extras `#464646` / `#f45531` / `#f05922` / `#ff4000` / `#e7e7e7` / `rgba(70,70,70,0.65)`
- `Times` reported on unstyled wrappers (sibling says this is the fallback for image-banner shells, not the UI face)
- MAX UI sans writing `system-ui, "Segoe UI", Roboto, Helvetica, Arial` (Arial is sibling-only; source §3 stops at Helvetica)
- sibling auth URLs `https://max.maicoin.com/signup` and `https://max.maicoin.com/signin`
- playwright method string, settle timing, and frequency counts (`×1009`, `×650`, and the other scan tallies)
- `rgb()` forms of hexes the source already writes

Values the sibling shares with the source body (corroboration, not new portable facts): `#ee5457`, `#2e4692`, `#2e4592`, `#262626`, `#05bb85`, `#49a870`, `#ec5b5c`, `#007aff`, `#272727`, `#f2f4fb`, `#f4f5f9`, `#d5dbee`, `#eaeaea`, `#2f333a`, `#434343`, `#dd4c4a`, `#ce4234`, Iosevka, 2px / 52px / 600 consumer CTA, 8px / 60px / 700 MAX CTA, 22px / 32px buy pill, 16px / 20px promo card, 12px / `20px 0px` stat strip, 123px watermark, 電子信箱 / 密碼, 立即註冊, box-shadow none.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary / coral-deep / coral-red / up-consumer | consumer |
| tokens.colors.navy / navy-alt / navy-deep / accent-blue / up-pro / down-pro | max |
| tokens.colors.ink / ink-pure / body / muted / muted-alt / faint / input-ink / canvas / surface / surface-alt / hairline / border-navy / dark-card / pill-grey / on-primary | as in the claim ledger |
| tokens.typography.family.sans / mono / display | both / max / consumer |
| tokens.typography.nav / body / cta / cta-pro / input / numeric / watermark | as in the claim ledger |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl | both |
| tokens.rounded.xs / sm / md / lg / pill / full | both |
| tokens.shadow.none | both |
| tokens.components.button-consumer-primary / error-404-card / nav-link | consumer |
| tokens.components.button-pro-primary / button-pro-buy / button-accent / promo-card / stat-card / input-underline / badge-up / badge-down / pill-control | max |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §9 Agent Prompt Guide — construction prompts, quick color reference, and iteration guide | Deleted. Tool-facing recreate-the-control prompts. Values they restated are already in Foundations / Typography / Components / Experience. No receiving slot and no delegation (A2, A3). |
| §13 Personas — 3 fictional archetypes (name, age, and city fields present) | Deleted. The source's own §13 header states they are fictional archetypes, not individual people. Not promoted into the portable body, and not re-listed here as identifiers (D2, D2a). Experience `Audience` carries only the two group-level contexts the Brand Narrative independently records (retail first-timer on MaiCoin, active trader on MAX). |
| §15 unattributed easing curves | Deleted at the value boundary. The source named `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, and `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` with no computed-sample attribution. `ease-exit` matches the `spec/omd-v0.1.md` template example. Duration tokens `120ms` / `200ms` / `320ms`, signature motion, no-bounce / no-spring, and reduced-motion stay in Foundations Motion. B3 promotion gate stays in Foundations Motion. |

§9 deletion check (A3). Every value the construction prompts name was confirmed present elsewhere in the portable body before the section was dropped. Consumer hero white / nav 14px `#262626` / CTA `#ee5457` / 2px / 52px / weight 600 / "立即註冊" / learn-more coral — Consumer Register CTA + Nav Link + Semantic color. MAX primary `#2e4692` / 8px / 60px / weight 700; buy pill white / `#2e4592` / 22px / 32px; promo `#272727` / 16px / 20px — MAX Register CTA + MAX Buy Pill + Dark Promo Card. Order-book Iosevka 14px / `#49a870` / `#ec5b5c` / panel `#f2f4fb` / `#d5dbee` / no shadow — Numeric role + Market colors + Elevation. MAX underline `#2f333a` / 14px / 電子信箱 / 密碼 / navy submit — MAX Underline Field + MAX Register CTA. Quick-token colors, families, and the 2px / 8px / 12–16px / 20–22px radius vocabulary — Foundations.

## Derived editorial inventory

Portable `DESIGN.md` carries 22 complete B2a qualifications. This table is 22 data rows. Preamble sentences on this page are not portable qualifications.

| Location | Qualified reading |
|---|---|
| Experience Scope ¶1 | Two inspected product URLs as this contract's token surfaces; About URL as a named narrative source that does not supply computed tokens; values stay attached; catalog `primary_color` `#ee5457` kept on the same hex as `tokens.colors.primary` without becoming MAX's action color |
| Experience Scope ¶2 | Consumer layer as warm / approachable / friendly retail-fintech temperature far from legacy-finance blue; MAX as trustworthy and institutional; mixed radius as engineered rather than decorative; two-surface split as two distinct personalities; `#ffffff` in that paragraph = consumer page canvas, not on-primary / buy-pill / 404; platform stack there = source §1 / YAML sans writing, not a replacement of the §3 Helvetica writing; captured consumer homepage layer as inspected surface rather than a published token specification covering MAX |
| Experience Scope ¶3 | Origin-to-current-service narrative (2014 / Alex Liu / Stanford / Qualcomm / 2016 AMIS / 2017 MAX / bank-trust, access premise, numbered consumer-flow mission sentence, MAX bank-trust differentiator, two-audience mapping, closing refuse/embrace sentences) classified as context that does not by itself supply interface tokens; refuse-hype / embrace-flat reading classified as an editorial connection of observed chrome to positioning rather than as a published brand manifesto |
| Primary tasks | Selecting the three surface-or-control outcomes as primary tasks; not from the Personas section |
| Audience | Dropping the three archetypes rather than promoting them; carrying no name, age, city, motivation, or affiliation classification; reading the Brand Narrative's two groups as audience |
| Distinctive traits | Classifying the Key Characteristics list as that restatement; groupings and readings inside the list |
| Principles | Five numbered items as derived editorial implementation inference; stems the source states plus every UI implication as the source's own editorial reading; toss-form close |
| Application rules | Eight Do rules and the reasons attached to them |
| Avoid | Eight Don't prohibitions and the reasons inside them |
| Semantic color | Role names from token-set keys; pairing each hex to its token-set path; catalog `#ee5457` on the same hex as primary without becoming MAX's action color; navy and navy-alt kept as two keys; canvas (page / white cards) and on-primary (text on coral / navy / dark fills) kept as two keys sharing `#ffffff`; buy-pill YAML bg, 404 YAML bg, CTA / badge / promo on-fill text, and nav §4 Background kept as component writes of that same hex rather than extra semantic keys; `#000000` kept as ink-pure occasional headings rather than body text; up-consumer kept off up-pro; consumer values not a house palette for MAX; sibling-only frequency-scan hexes off the token set |
| Spacing | Unitless steps kept on their own keys rather than rewritten as a grid or as a complete mathematical scale; px samples treated as observed values rather than as that scale; `4`/`8`/`12`/`16`/`20`/`24`/`48` unmerged from 4% opacity, weight 400, rounded.sm/md/lg, buy-pill padding `12px`, body/CTA 16px, MAX padding `10px 16px`, and promo/stat 20px |
| Shape | Six rounded keys kept (`2`/`8`/`12`/`16`/`22`/`9999`); `6px` 404 and `20px` carousel off the rounded map; component heights off the rounded map; source §5 Pill 20–22px writing kept as two records (`22` buy pill / `20px` carousel) rather than collapsed to a range |
| Elevation | Representative `box-shadow: none` as the only elevation record for the observed elements, not a depth scale for every surface |
| Motion | Five-kind promotion gate; refusal of a partial confirmation — one curve, or a match against an official framework or vendor document — as satisfying that gate; three duration tokens kept; signature-motion and reduced-motion sentences kept; no-bounce / no-spring stance kept; three unattributed curves omitted; source promo fade-in kept on `motion-standard` duration without promoting the omitted `ease-enter` from the source pair |
| Font evidence | Five evidence-class rows as the source's resolution table, not a published type specimen; official-product-use row not independently establishing a UI family; official-distributed row as a negative confirmation rather than a named exclusive family; YAML and §3 stack writings kept as two records; declared system stack including the §3 Helvetica writing as observed live/stack writing rather than a MaiCoin-authored face; typography beyond the two inspected public surfaces projected as Outside these captures |
| Family | YAML sans (stopping at Roboto) and §3 sans (adding Helvetica) kept as two writings rather than one replacement; Iosevka kept on numeric/market data rather than UI chrome; Roboto kept as the watermark exception rather than as a UI face; system/fallback stack not presented as Iosevka |
| Type roles | Pairing each YAML role to its token-set path; unitless `1.5` kept as a ratio beside §3 `1.50`; YAML `use` verbatim; longer §3 role name beside them; YAML sizes beside §3 px spellings; body `16` kept off spacing `base: 16`; watermark 4% kept off spacing `xs: 4`; source §3 principles kept as written rather than as a published type doctrine |
| Assets | Google s2 favicon as catalog identity pointer; watermark as a decorative exception rather than a UI type-role replacement |
| Capture / How to read | Interactive-kind and applicability verdicts and the reason for either; three commit CTAs keep loading/error/success; promo accent / nav / carousel / 404 close loading/error/success on destination or control roles; underline field keeps error and closes loading/success; badges `Kind: non-interactive`; promo card and stat card C4 omit kind and map; YAML `use` / font / padding / radius / border / height / type byte forms; 2px / 8px / 16px / 20px / 22px / 6px / 20px carousel keep-apart; heights 52/60/32/40/88 off spacing; accent-chip 40px and carousel-pill 40px two records; badge 8px off spacing.sm; buy-pill padding `12px` off spacing.md and MAX padding `16px` off spacing.base; captured nav hover/active coral is not `focus-visible`; Primitive type only when YAML records type; only the 404 row is Verified live; absence of an observation is not `not-applicable`; loading/error/success follow product role not primitive kind; Core §4.4 by control meaning; not a complete state-coverage claim |
| Layout | 640px / 1024px / 1366px / ~1200px figures read under the source's own Responsive Behavior table rather than as a newly measured cross-viewport specification; `640–1024px` / `1024–1366px` as that table's spellings rather than a `1024px` token; those width samples as that table rather than a complete layout scale; desktop figures as not a mobile-only contract; whitespace-philosophy labels and collapsing / touch / image records as that same source table; home-versus-MAX density as a recorded two-surface distinction; 52px / 60px / 32px kept on the controls that established them; 16px promo / 12px stat radii across breakpoints stay those cards' radii rather than a breakpoint scale |
| Content | Source voice classified as a plain, trustworthy, step-guided implementation context rather than as a separately published copy manual; quoted strings required byte-exact; English beside a Traditional Chinese line as a reading aid rather than a replacement; Traditional Chinese (zh-TW) as this capture's locale rather than as a published locale matrix |
| Named gaps | List as a catalog of source-unnamed values or smallest-boundary omissions, not coverage of domains the source never named |

## Proof notes

- Conflicts unresolved: none
- `tokens.source: live-extract`
- `components_harvested: true`
- Uncaptured hover/disabled/loading/error/success treatments are omitted except the captured consumer-nav coral hover/active text. They are not `not-applicable` for want of a capture; applicability follows control meaning. State coverage is not claimed complete.
- Dark promo card and cool-blue stat card omit kind and applicability map (C4). Price-up and price-down badges are `kind: non-interactive`. Consumer register CTA, MAX register CTA, and MAX buy pill keep loading / error / success on commit roles (C2). Promo accent chip, nav link, carousel control, and 404 action card close loading / error / success on destination or carousel-control roles (C2). MAX underline field keeps error `applicable` as a form field and closes loading / success on the auth-field role. Disabled stays `applicable` on interactive controls.
- No focus-visible treatment is asserted anywhere. The captured nav hover/active coral text is not promoted as `focus-visible` (B1).
- Official Group About is a narrative source, not an interface-token source
- No YAML `ds.type`. No published component-token specification is named. B2a uses the no-published-spec form (`not MaiCoin / MAX-authored or a separately published UI specification`).
- Source HTML comment states that interpretive claims such as "one action color per surface" and "flat and fast as a rejection of speculative-crypto hype and legacy-finance chrome" are editorial readings. Those readings stay inside the portable B2a wraps rather than as unpublished doctrine.

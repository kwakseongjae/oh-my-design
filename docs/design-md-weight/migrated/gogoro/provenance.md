# Gogoro provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/gogoro/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | gogoro |
| name | Gogoro |
| country | TW |
| category | automotive |
| homepage | `https://www.gogoro.com` |
| primary_color | `#000000` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=gogoro.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-05-19 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The favicon slug is dual-destination: identity metadata here, and a portable asset record in `DESIGN.md` §3. It is a favicon-service URL keyed to the domain rather than a Gogoro-hosted brand file, and the portable record says so.

The source frontmatter carries no `tokens.note`. The source footer records a primary-color correction: the creation brief suggested `#000000 / accent green (verify)`; live inspection found no green, and `primary_color` was set to `#000000` with the accent observed as electric blue (`#0074ff`) + cyan (`#28c3ff`). That correction is ledger context, not a portable token.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-05-19 |
| tokens.extracted | 2026-06-09 |
| Tier 1 live computed-style inspect | 2026-05-19 |
| Homepage + Smartscooter WebFetch | 2026-05-19 |

The source footer records the verification verbatim as **Verified:** 2026-05-19. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved, as the source footer states: brief's "accent green" corrected to live-observed electric blue/cyan (no green present in the system).

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| logos | brand-asset page (live computed style) | `https://www.gogoro.com/media-center/logos/` | 2026-05-19 |
| home | marketing homepage (WebFetch copy) | `https://www.gogoro.com` | 2026-05-19 |
| smartscooter | product page (WebFetch copy) | Smartscooter page on gogoro.com | 2026-05-19 |

### Tier 1 (as listed in the source footer)

- `gogoro.com/media-center/logos/` — live computed style: Graphik + TC stack, `#323237` text (194×), `#0074ff` blue (11×), `#28c3ff` cyan, `#f6f6f6` surface, `#2b96ed` CTA 12px·14px/600, `#000000` chrome, `#737d82` gray-mid, `#b9bcbf` gray-light, `#dee2e6` border, circular 48/58px icon controls.
- `gogoro.com` home + `/smartscooter` — WebFetch 2026-05-19: tagline `Ride Smarter. Refuel in seconds.`, page title `A ride like no other.`, CTAs `LEARN MORE`/`DISCOVER MORE`, stats 524,000+ riders / 7 billion km.

### Tier 2

- `styles.refero.design` / `getdesign.md` — source footer: not checked this pass (browser session unreliable).
- `en.wikipedia.org/wiki/Gogoro` — WebFetch 2026-05-19. Founded 2011 Taoyuan by Horace Luke + Matt Taylor; GoStation battery swap; CES 2015 Smartscooter reveal; Apr 2021: 370k riders, 175M+ swaps, 2000 GoStations; Yamaha/Aeon/Hero licensing; Nasdaq 2022; Frost & Sullivan Global Company of the Year Dec 2020. The source marks this as not re-verified against primary Gogoro sources. Narrative context only; not a token source.

## Sibling handling (`web/references/gogoro/.verification.md`)

No sibling file is present. Confirmed with `find web/references/gogoro -type f`, which returned only `web/references/gogoro/DESIGN.md`. A dotfile is invisible to `ls` and to a `*` glob, so those tools are not a measure of absence; `find` is. There is therefore no sibling-only value, classification, or quoted string to adopt or to keep from promotion.

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.05`, `1.1`, `1.2`, `1.3`, `1.5`, `1.4`). They are carried as ratios in the portable body, never converted to px (A1a).
- The source frontmatter records spacing and radius steps unitless (`xs: 8` … `section: 100`; `sm: 8`, `md: 12`, `lg: 16`, `full: 9999`). The portable body keeps both the unitless steps and the px forms the visible sections use. `full: 9999` stays a step and is not given a px suffix.
- Ink is recorded two ways in the source body (`#141719` / `#101418`); the token-set key `ink` holds `#141719` only. Both spellings stay attached to the role; they are not merged.
- Surface veil is recorded two ways: `rgba(248, 248, 248, 0.8)` and `rgba(248,248,248,0.8)`. Both byte forms are kept.
- Gray faint is `#888888` in the token set and `#888` in Key Characteristics. Both spellings are kept.
- The source's visible §3 type table is marked inferred and uses ranges. The token-set sizes (60 / 42 / 30 / 22 / 18 / 16 / 14 / 12) are a different record. They are not collapsed into one scale.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| `ease-standard` `cubic-bezier(0.4, 0, 0.2, 1)` | curve value only; token name, role, durations, motion rules, signature motions, and reduced-motion behavior kept | No observation stands behind the value. The source's evidence is a logos-page computed-style pass plus a homepage/Smartscooter WebFetch and it supplies no transition, animation, or easing sample. Same curve as `spec/omd-v0.1.md` `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)`, a documented re-injection path. |
| `ease-enter` `cubic-bezier(0, 0, 0.2, 1)` | curve value only | Same: no observation. Same curve as `spec/omd-v0.1.md` `ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)`. |
| `ease-exit` `cubic-bezier(0.4, 0, 1, 1)` | curve value only | Same, and the documented re-injection path for this value (`spec/omd-v0.1.md` line 267 `cubic-bezier(0.4, 0.0, 1, 1)`). |
| §13 Personas — three entries | whole section | The source's own italic line labels them fictional archetypes informed by publicly described user segments, not individual people. Fictional personas are neither promoted to verified tasks nor re-hosted in a sidecar, so the three names, ages, cities, and biographies are dropped and are deliberately not restated here (D2 / D2a). |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | whole section | Tool-facing copy-paste prompts and restatements of rules stated elsewhere. Checked value by value before deletion: see the next paragraph. |
| §9 example `56px` headline | example-prompt size only | The token-set display size is 60 and the inferred range is 48–72. `56px` appears only inside a deleted example prompt and is not a live measurement. Not promoted. |

§9 deletion check (A3). Every verified value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Quick Color Reference: `#000000`, `#323237`, `#0074ff`, `#28c3ff`, `#2b96ed`, `#f6f6f6`, `#737d82`, `#dee2e6`, 12px radius — all are Foundations semantic-color or shape roles. Example Component Prompts: full-viewport black hero, Graphik headline at 700, filled CTA `#0074ff` / white / 12px / 16px/600 / padding 14px 28px reading `DISCOVER MORE`, outlined secondary `1px solid rgba(255,255,255,0.4)`, primary button `#2b96ed` / 12px / 14px/600 / `0 24px` / 40px height, GoStation card 16px radius / 24px padding / `#323237` title / cyan battery indicators / `#737d82` meta / `#0074ff` link, spec grid `#f6f6f6` / bold numerals / 14px/500 units — the verified pieces are Components, Foundations, or Experience. The prompt-only `56px` size, the unverified hover lift toward `#0074ff`, and the unverified `Navigate` label are not live-verified values and were not promoted. Iteration Guide: black canvas / blue current, Graphik + TC fallbacks, 12px CTA radius / 50% icon buttons, one primary CTA per hero, cinematic photography, charge palette blue → cyan, Traditional Chinese only on TW, numerals bold and large — all are Experience application rules or Foundations.

## Claim ledger

| Claim | Surface |
|---|---|
| `tokens.colors.canvas` / `text` / `ink` / `accent` / `cyan` / `cta` / `surface` / `on-dark` / `gray-mid` / `gray-light` / `gray-faint` / `border` | logos |
| `tokens.typography.family.sans` / `family.mono` | logos |
| `tokens.typography.display` / `h1` / `h2` / `h3` / `body-lg` / `body` / `caption` / `micro` (size, weight, lineHeight, use) | logos (token-set; visible §3 table is separately marked inferred) |
| `tokens.spacing.xs / sm / base / lg / xl / section` | logos |
| `tokens.rounded.sm / md / lg / full` | logos |
| `tokens.shadow.card` | logos |
| `tokens.components.button-cta` / `button-marketing` / `button-outline` / `input-default` / `card-spec` / `card-dark` | logos |
| Voice strings `Ride Smarter. Refuel in seconds.` / `A ride like no other.` / `LEARN MORE` / `DISCOVER MORE` / `524,000+` / `7 billion km` | home + smartscooter |
| Header CTA `로그인 및 회원가입` | logos (live-observed account control) |
| TW terms `網路` / `電池` / `里程` | source §7 / §10 (TW surfaces) |

## Proof notes

- One brand-owned Tier 1 computed-style surface (logos page) plus a WebFetch copy pass on home and Smartscooter, 2026-05-19. The source names the GoStation map and the Network subscription flow as surfaces the language serves; it attaches no computed-style sample to them.
- `tokens.source: prose-derived`; `components_harvested: true`; six component records in the source token set.
- The source records no interaction expansion, no pseudo-state capture, and no motion sample. Uncaptured hover, focus-visible, disabled, loading, error, and success treatments are omitted as values; they are not turned into `not-applicable`. Applicability follows control role. State coverage is not claimed complete.
- The source's input Focus row (`border #0074ff`, subtle blue focus ring) is a generic Focus record. It is kept at field level in Components and is deliberately not attached to the `focus-visible` row, because a generic focus record is a different evidence class from a `focus-visible` treatment (B1). The string `focus-visible` occurs zero times in `web/references/gogoro/DESIGN.md`.
- Founding narrative, April 2021 Wikipedia stats, Nasdaq 2022, Frost & Sullivan, and partner licensing are narrative context from §11, not a token source. Homepage `524,000+` riders / `7 billion km` stay a separate WebFetch figure.
- Inferred semantic success/warning/error roles, inferred type-scale ranges, and inferred breakpoints remain marked inferred. No amber or red hex was invented.

## Derived-inference ledger (B2 / B2a)

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`): **24**. This table has **24** rows (E1 1:1). The same 24 lines also carry `not Gogoro-authored` and `separately published UI specification`.

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 | The surface boundary that stops a logos-page measurement from standing in for the map, the subscription flow, or an uninspected account screen |
| Experience — Scope ¶2 | The atmosphere reading: "monochrome-industrial with electric-blue voltage", blue as "the spark of the battery", clean-room rather than tech-startup pastels |
| Experience — Scope ¶3 | The dual-surface reading and the kiosk / Apple Store / gas-pump comparison |
| Experience — Scope ¶4 | The causal reading from the energy-infrastructure thesis to the black / Graphik / blue-cyan system |
| Experience — Primary tasks | The step from observed modules and labels to "primary tasks" |
| Experience — Audience | The step from the source's group-level description to an audience constraint |
| Experience — Distinctive traits | The characterizing half of the Key Characteristics bullets |
| Experience — Principles | All six §12 principles |
| Experience — Application rules | The grouping of the §7 Do list as application rules, and their rationales |
| Experience — Avoid | The rationales in the §7 Don't list, and the scope-boundary prohibition |
| Foundations — Semantic color | The characterizing phrases attached to brand/accent roles |
| Foundations — Semantic inferred | Keeping the source's own inferred success/warning/error roles on the record without inventing a hex |
| Foundations — Spacing | The reading of 80–120px marketing rhythm versus tighter spec density as intentional |
| Foundations — Shape | The reading of 12px / 50% as a premium-tactile feel |
| Foundations — Elevation | Reading the source's flat/luminous philosophy as a binding rule for uninspected overlays, and reading electric-blue / cyan glows as the only lighting and as reserved for energy moments |
| Foundations — Motion | Durations, easing names/roles, spring stance, signature motions, and reduced-motion behavior, none of which has a motion sample behind it |
| Typography — Font evidence / License | Treating Graphik as a commercial face used on the captured pages, not a Gogoro-distributed brand asset |
| Typography — Family | The industrial-design-house / laser-etched reading of Graphik |
| Typography — Type rules | Tight tracking, weight+color hierarchy, all-caps chrome, numerals as hero material |
| Typography — Assets | Reading product photography as first-party content that must not be replaced with invented decoration |
| Components — Surface state contract | The ten-row §14 contract read as this surface's state contract |
| Components — How applicability is decided here | Every Reason cell in every per-component table |
| Layout & Platforms | The low-to-medium marketing / medium-high utility density contrast |
| Content & Locales — voice / register | The voice reading, the register table, and the forbidden-register rule |

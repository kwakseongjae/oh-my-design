# Meituan provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/meituan/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | meituan |
| name | Meituan |
| country | CN |
| category | local-services |
| homepage | https://www.meituan.com |
| primary_color | `#FFC300` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=meituan.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

`tokens.source: prose-derived` is this identity/Claim ledger only (A1c). The portable body does not contain `prose-derived`. Portable Scope restates the `meituan.com` 2026-05-19 live fetch and the source HTML-comment bound (corporate site; consumer app is the substantive product; no public CSS token layer) in plain language, not that YAML key.

Catalog logo type `favicon` / Google s2 slug is this identity ledger only. Portable Typography & Assets records type `favicon` and a Google favicon lookup / non-promotion identity-boundary without the URL (E1). It is not a captured first-party mark.

Homepage `https://www.meituan.com` (YAML `homepage`) is dual Scope + this identity ledger (E2a). It is catalog identity and the named corporate evidence domain, not a computed consumer-app token sheet.

Catalog `primary_color` `#FFC300` destinations: this identity ledger + portable Scope atmosphere, Distinctive, Principles/Do’s, Semantic Brand, Primary CTA fill, Deal/Activity Tag yellow fill option, Named gaps, and this Claim ledger (E2a). YAML `tokens.colors.brand` `#ffc300` is the same value in lowercase.

`tokens.source: prose-derived` and `components_harvested: true` are this ledger only as YAML keys (A1c). YAML `verified` 2026-05-19 and `extracted` 2026-06-09 are this freshness ledger. Footer **Verified:** 2026-05-19 is this ledger only. YAML has no `ds.type` and no `verification_v2.schema`. None is invented.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-05-19 |
| surfaces inspected | 2026-05-19 |
| tokens.extracted | 2026-06-09 |
| footer Verified | 2026-05-19 |

Conflicts unresolved: Brand yellow has two widely-cited values (`#FFC300` primary vs `#FFD100` variant) — `#FFC300` used as primary per brief. All other §2/§4 hexes flagged approximate (observed usage, no public token layer). `#FFD100` destinations: portable Scope, Distinctive, Semantic Yellow close-variant, Named gaps, this freshness / Proof notes. It is not a second primary.

Preserved value pairs inside the reconstruction: catalog `primary_color` / YAML `brand` `#FFC300`/`#ffc300` vs YAML `brand-alt` `#FFD100`/`#ffd100`; YAML `on-brand` `#222222` vs Primary Text ≈`#222222` / `#000000E0` vs secondary-button fg vs search fg vs deal-tag on-yellow (same near-black writing, unmerged jobs); YAML `price` `#ff4b10` vs `price-alt` `#ff5722` vs `coupon` `#ff2d55` vs `rating-gold` `#ffb000`; YAML `card` `#ffffff` vs `page-ground` `#f5f5f5`; the same `#FFFFFF` as card fill vs button-secondary fill vs search-input fill vs service-entry tile fill vs deal-tag on-red text (unmerged jobs); YAML `border` `#eeeeee` vs `divider` `#f2f2f2`; YAML `success` `#52c41a` vs `error` `#ff4d4f` vs `warning` `#faad14`; YAML header 18 vs body `17–20px`; YAML merchant 16 vs body `15–16px`; YAML price 18/700 vs body `16–20px` / 600–700; YAML body 14 vs `13–14px`; YAML meta 13 vs `12–13px`; YAML badge 11/500 vs body `10–12px` / 400–500; YAML spacing numbers without a px suffix vs body card-gap `8–10px` / card-padding `10–12px` / page-margin `12px`; YAML `merchant-card` padding 10 vs body `10–12px`; YAML `search-input` radius 20 vs form field 8px; YAML `shadow.none` `none` vs body approximate Card/Sticky/Floating rows; YAML `coupon-chip` font `12px/500` vs YAML `deal-tag` font `11px/500` vs body badge `10–12px`; body service icon `40–48px` vs source-prompt `44px`; Deal tag padding `2px 6px` vs coupon `2px 8px`. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| corporate-home | corporate-surface | https://www.meituan.com | 2026-05-19 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| meituan-live | corporate-surface | https://www.meituan.com | 2026-05-19 |
| seekcolors-meituan | brand-color | https://seekcolors.com/brand/meituan | 2026-05-19 |

### Tier 1

- https://www.meituan.com — live WebFetch 2026-05-19. Dual portable Scope + this ledger (E2a). Confirmed yellow brand color (delivery robots referenced as 小黄蜂 "little yellow bee"; rider gear/icon yellow), kangaroo mascot energy, clean tech-forward local-services aesthetic, mobile-first orientation (multiple app-download options), slogan 吃得更好，生活更好. Corporate surface; no public token layer. The substantive product surface is the consumer app.

### Tier 2 / narrative (WebSearch 2026-05-19)

- https://seekcolors.com/brand/meituan — Meituan yellow `#FFC300` RGB 255,195,0 primary, `#FFD100` close-variant. Dual portable Semantic conflict note + this ledger (E2a). Portable body names the two hexes; it does not re-host the seekcolors URL (E1).
- Widely documented public history (Wang Xing 王兴 / Meituan 2010 / 团购 origin / 百团大战 / Dianping 大众点评 merger 2015 / 美团外卖). Source marks this history as not re-verified against a primary Meituan source this pass. Restated in portable Scope public-history under adjacent complete B2a.

Footer Style ref `baemin`/`coupang` (delivery-app value+convenience tone adapted to CN local-services register) is this ledger only. It is a source-stated reconstruction register, not a Meituan-authored affiliation, and is not carried into the portable body.

### Narrative (not interface tokens)

Source §1 / §11 founding 2010 / Wang Xing (王兴) / 团购 / 百团大战 / Dianping (大众点评) 2015 / 美团外卖 / throughline value plus convenience for everyday local life / slogan 吃得更好，生活更好 / refuse cold logistics / embrace appetite-yellow and caring-courier kangaroo is restated in portable Scope public-history under adjacent complete B2a. They are not interface tokens. Evidence class is the source-stated public history + `meituan.com` live fetch 2026-05-19.

## Claim ledger

Token extraction is `prose-derived` (2026-06-09). `components_harvested: true`. Claims split by the source HTML comment: verified yellow `#FFC300` / `#FFD100` variant vs BEST-FIT APPROXIMATIONS for all other §2/§4 hexes.

| claim | surface |
|---|---|
| tokens.colors.brand `#ffc300` | corporate-home (live fetch) + catalog `primary_color` |
| tokens.colors.brand-alt `#ffd100` | seekcolors / widely cited close-variant |
| tokens.colors.brand-pressed / brand-tint / on-brand | approximate (source flag) |
| tokens.colors.price / price-alt / coupon / rating-gold | approximate (source flag) |
| tokens.colors.page-ground / card / text-secondary / text-hint / border / divider | approximate except card `#ffffff` as named card/panel fill |
| tokens.colors.success / error / warning | approximate (source flag) |
| tokens.typography.family.sans / mono `PingFang SC` | prose-derived YAML; body §3 records the CJK-first stack |
| tokens.typography.header / merchant / price / body / meta / badge | prose-derived YAML metrics; body §3 size table is size-local ranges |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | prose-derived YAML numbers, no px suffix |
| tokens.rounded.sm / md / lg / full | prose-derived YAML; 4 / 8 / 20 / 9999 unmerged |
| tokens.shadow.none | prose-derived YAML string `none` |
| tokens.components.button-primary.* | prose-derived YAML; type button |
| tokens.components.button-secondary.* | prose-derived YAML; type button |
| tokens.components.coupon-chip.* | prose-derived YAML; type badge |
| tokens.components.search-input.* | prose-derived YAML; type input |
| tokens.components.merchant-card.* | prose-derived YAML; type card |
| tokens.components.deal-tag.* | prose-derived YAML; type badge |

YAML `brand` `#ffc300` is catalog `primary_color` `#FFC300` in portable Semantic / Primary CTA, not `#FFD100`. Dual also Distinctive, Scope, Do’s, Deal tag yellow option, Named gaps, and this freshness pair paragraph (E2a).

## Capture selectors

No `data-omd-capture` selectors exist in the source DESIGN.md. None are invented here. Live fetch notes name `meituan.com` for yellow, kangaroo, 小黄蜂, and the slogan without a CSS selector string.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, cited in portable Foundations Motion then omitted at the curve-value boundary (names and uses kept; not promoted as motion tokens):

- `ease-standard` `cubic-bezier(0.4, 0, 0.2, 1)` — source-stated name; unattributed catalog-template (matches the `spec/omd-v0.1.md` example table; that match is this ledger only)
- `ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)` — source-stated name; unattributed catalog-template
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — source-stated name; unattributed catalog-template (matches the `spec/omd-v0.1.md` example table; that match is this ledger only)
- `ease-fly` `cubic-bezier(0.45, 0, 0.2, 1.2)` — source-reserved overshoot for the add-to-cart fly arc only; cited as that reserved fly-only record, not a catalog-template curve

Portable Motion cites the four exact strings at the curve-value boundary and keeps the four names and uses. Duration 0ms / 200ms / 300ms / 450ms remain in portable Motion. Signature motions, spring stance, and `prefers-reduced-motion: reduce` remain in portable Motion. Dual citation (E2a): portable Motion + this ledger. Citation is not promotion.

## Source-stated removed / unpromoted claims

Source HTML comment BEST-FIT APPROXIMATION set (this ledger + portable Semantic / Capture): price red-orange, coupon red, rating gold, and all neutral hexes in §2/§4. Those names are source-stated evidence-class labels, not new negative coverage invented for an unmentioned domain (D1). Portable body keeps the approximate hexes with the source's own "approximate" flag and does not present them as verbatim Meituan tokens.

`#FFD100` remains a close-variant conflict note, not a second primary (Semantic / Distinctive / Named gaps / this freshness).

Footer Style ref `baemin`/`coupang` is this ledger only.

## Omitted §13 fictional archetypes

Source §13 labels personas as fictional archetypes informed by publicly described Meituan user segments (everyday urban consumers, value-seekers, merchants), not individual people. Generic deletion only: fictional archetype material deleted; not re-hosted. Names, ages, and cities from source §13 are absent from this ledger and from the portable body (D2, D2a). A Personas-section merchant affiliation classification is not restated as an Audience group (D2). Audience restates everyday urban consumers, value-seekers, and merchants at group level, plus the Brand Narrative value-conscious everyday local-life user, under adjacent complete B2a. This paragraph names the source's own group labels and the section; it does not re-list the dropped figures.

## Derived editorial inventory

Portable `DESIGN.md` carries 52 complete B2a qualifications. This table is 52 data rows. Preamble sentences on this page are not portable qualifications.

Adjacent complete B2a (`derived editorial implementation inference` / `not Meituan-authored or a separately published UI specification`). `grep -o` phrase-1 DESIGN dest 54 because lines 58 and 191 nest an extra phrase-1; phrase-2 DESIGN dest 52 = site count. Nested extras are not extra sites.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience — Scope | Scope catalog-homepage-not-a-computed-consumer-app-token-sheet |
| Experience — Scope | Scope evidence-domain including meituan-com-corporate / consumer-app-substantive / no-public-CSS-token-layer / BEST-FIT APPROXIMATIONS |
| Experience — Scope | Scope atmosphere extras including yellow-because-food / fintech-whispers-Meituan-shouts / the袋鼠-Daiwang / loudness-from-color-not-type |
| Experience — Scope | Scope public-history including 2010-Wang-Xing-王兴 / 团购 / 百团大战 / Dianping-大众点评-2015 / 美团外卖 / throughline / refuse-embrace |
| Experience — Primary tasks | Primary tasks YAML-use-strings-not-from-Personas |
| Experience — Audience | Audience no-individual-personas-promoted / fictional-archetypes-not-Audience / group-level-everyday-urban-consumers-value-seekers-merchants / Brand-Narrative-value-conscious-everyday-local-life-user |
| Experience — Distinctive traits | Distinctive Key-Characteristics restatement |
| Experience — Principles | numbered Principles six stems |
| Experience — Principles | UI-implication tails |
| Experience — Application rules | capture-bound grouping of source Do’s |
| Experience — Avoid | Avoid named Don’ts + voice-forbidden + HTML-comment-approximate-not-verbatim |
| Foundations — Semantic color | Semantic unmerged-role extra characterizations including `#FFFFFF` card-fill-unmerged-from-button-secondary-fill-unmerged-from-search-input-fill-unmerged-from-service-entry-fill-unmerged-from-deal-tag-on-red-text and `#222222` on-brand-unmerged-from-primary-text-unmerged-from-secondary-button-fg-unmerged-from-search-fg-unmerged-from-deal-tag-on-yellow |
| Foundations — Spacing | Spacing YAML-without-px |
| Foundations — Spacing | Spacing body-px-unmerged-from-YAML |
| Foundations — Shape | Shape local-geometry |
| Foundations — Elevation | Elevation YAML-none-unmerged-from-approximate-numeric / z-index-layering |
| Foundations — Motion | Motion duration-table-and-easing-names-as-source-stated / cited-then-omitted-at-curve-value-boundary / catalog-template-three-unattributed / ease-fly-source-reserved-not-catalog-template |
| Foundations — Motion | Motion §6-animation-names-unmerged-from-§15-table |
| Foundations — Motion | Motion spring-stance |
| Foundations — Motion | Motion signature-motion characterizations |
| Typography — Font evidence | Font evidence-class extras |
| Typography — Family | Family font-use |
| Typography — Type roles | Type-role YAML-unmerged-from-body-ranges |
| Typography — Type conventions | Type conventions |
| Typography — Assets | Assets Google-favicon-lookup identity-only |
| Typography — Assets | Assets media-rules |
| Components — Capture record | Capture-record source-state-contract |
| Components — Capture record | Capture-record table characterizations |
| Components — Capture record | Capture-record verified-versus-approximate split |
| Components — Capture record | Capture-record named-hover-press-not-focus-visible / omitted-L-E-S / not-complete-coverage |
| Components — Capture record | Capture-record merchant-card omit-kind / coupon-deal Kind-non-interactive |
| Components — Primary | Primary field-note unmerged-field |
| Components — Primary | Primary omitted-success |
| Components — Secondary | Secondary field-note |
| Components — Secondary | Secondary omitted-L-E-S |
| Components — Coupon | Coupon field-note |
| Components — Search | Search field-note |
| Components — Search | Search omitted-loading-and-success |
| Components — Merchant card | Merchant-card field-note including subtle-lift-on-hover-web-not-a-Core-applicability-row-and-not-focus-visible |
| Components — Service-entry | Service-entry field-note |
| Components — Service-entry | Service-entry L/E/S role-based not-applicable |
| Components — Deal-tag | Deal-tag field-note |
| Components — Rating | Rating field-note |
| Components — Navigation | Navigation composition |
| Components — Bottom-tab | Bottom-tab field-note |
| Layout & Platforms | Layout recorded-span extras including body-spacing-table-unmerged-from-YAML-numbers |
| Layout & Platforms | Layout Desktop/Laptop/Tablet/Mobile as source-stated-not-measured |
| Content & Locales | Content voice extras |
| Content & Locales | Content voice-table directions |
| Content & Locales | Content forbidden-pattern list |
| Content & Locales | Content illustrative-samples-not-verbatim-except-cited-slogan / English-as-reading-aid / byte-exact-Chinese |
| Governance — Named gaps | Named gaps as unnamed-value inventory |

Governance Authority / priority / unknowns / changes are the controlled Core copy; they are not reconstruction readings and are not wrapped. Core §4.4 C1/C2/C3 sentences after Capture 285 stay unqualified Core policy. No “no unqualified sentence remains” claim (E2c). This ledger does not re-host those sentences.

## Proof notes

- tokens.source: `prose-derived`; `components_harvested: true` preserved (A1c). The string `prose-derived` is absent from the portable body
- Catalog Google s2 favicon URL is this identity ledger only. Portable Assets names type `favicon` and Google favicon lookup / non-promotion without the URL (E1)
- Catalog homepage `https://www.meituan.com` is dual Scope + this identity ledger (E2a)
- `primary_color` `#FFC300` destinations listed in Identity (E2a)
- YAML typography `use` restored on Type roles and on Primary/Search/Merchant Use (A1)
- YAML sizes without a required px suffix preserved; body ranges stay unmerged (A1a — no unitless lineHeight in source; none invented)
- Verified primitive types preserved: `Type: button` on Primary and Secondary; `Type: input` on Search; `Type: card` on Merchant Card; `Type: badge` on Coupon Chip and Deal Tag (A1b). `Kind: interactive` does not replace a missing Type. Merchant Card omits kind (YAML `type: card`; no interactive-kind). Coupon Chip / Deal Tag / Rating Kind: non-interactive, map omitted
- Named hover/press ≈`#F5B800` on Primary is a source-stated approximate treatment, not `focus-visible` evidence; focus-visible rows carry no hex (B1)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Primary omits success (page-level confirmation, not a paint on the button). Secondary omits loading/error/success. Search omits loading/success; error remains applicable. Service-entry tile and Bottom tab loading/error/success remain role-based not-applicable. `not captured` is not the reason (C1, C2)
- Source §13 fictional archetypes are deleted, not Audience, not primary tasks, and not re-hosted as demographics here (D2, D2a)
- The B3 five-kind per-component computed gate is Foundations Motion only (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate” + partial-confirmation refusal). Named gaps lists those five kinds in inventory form; it is not the B3 full promotion-gate sentence
- Source Agent Prompt Guide brand constraints are in Experience Avoid / Distinctive / Foundations / Components; the prompt wrapper is deleted. No `omd-apply` / `npx omd` in the portable body
- No `.verification.md` sidecar is named in the source packet; none is invented here
- Source YAML has no `ds.type` and no `verification_v2.schema`; none invented
- Footer Style ref `baemin`/`coupang` is this ledger only

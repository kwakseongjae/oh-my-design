# Genie Music provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/genie/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | genie |
| name | Genie Music |
| country | KR |
| category | consumer-tech |
| homepage | `https://www.genie.co.kr` |
| primary_color | `#fa4065` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=genie.co.kr&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-09 |
| added | 2026-06-09 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The favicon slug is dual-destination: identity metadata here, and a portable asset record in `DESIGN.md` §3. It is a favicon-service URL keyed to the domain rather than a Genie-hosted brand file, and the portable record says so.

The source frontmatter carries no `tokens.note`.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-09 |
| added | 2026-06-09 |
| tokens.extracted | 2026-06-09 |
| Tier 1 live inspect | 2026-06-09 |

The source footer records the verification verbatim as **Verified:** 2026-06-09 (`omd-add-reference — Tier 1 live inspect`). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none recorded by the source.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | product-surface (streaming homepage) | `https://www.genie.co.kr` | 2026-06-09 |

### Tier 1 (brand-owned, as listed in the source footer)

- `https://www.genie.co.kr` — Genie Music streaming homepage. Every token claim in this migration is sourced here.
- `https://company.genie.co.kr` — Genie Music corporate. Named by the source as a Tier 1 source; the source attaches no design value to it, and none is reconstructed.

### Tier 2

The source records no Tier 2 lookup.

## Sibling handling (`web/references/genie/.verification.md`)

The sibling exists — confirmed with `find web/references/genie -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact, and none of its structural classifications (`.gnb a` selector naming, `<title>` element identification, the "link" classification of the search-keyword chip, "body"/"h1" element naming) was promoted into `DESIGN.md`.

Its own record, transcribed here:

- Inspected 2026-06-09. Method: playwright `getComputedStyle` on the live DOM, headless chromium, args `['--disable-http2']`, `waitUntil` networkidle, modal/cookie dismissal attempted, ">= 8 distinct measured samples collected; no bot block encountered".
- Sources: `https://www.genie.co.kr` (homepage, live DOM — getComputedStyle on body, nav, links, buttons, chart tabs, search chips) and a computed-style color-frequency sweep across all elements.
- body — color `rgb(68, 68, 68)` (#444444), font-family `dotum, 돋움, sans-serif`, font-size 12px, line-height 18px
- h1 — color `rgb(68, 68, 68)` (#444444), font-weight 700, font-size 12px
- nav `.gnb a` — color `rgb(39, 40, 45)` (#27282d), font-size 18px, font-weight 700
- primary search-keyword chip (link) — color `rgb(255, 255, 255)`, background `rgb(67, 67, 84)` (#434354), border-radius 13px, padding 0px 12px, font-weight 700
- chart active tab "종합" — color `rgb(0, 150, 255)` (#0096ff), font-weight 700, padding 0px 8px
- chart inactive tab "국내" / "국외" — color `rgb(139, 139, 139)` (#8b8b8b), font-weight 400, padding 0px 8px
- brand/action accent (color-frequency sweep) — `rgb(250, 64, 101)` (#fa4065) ×10 occurrences; deep variant `rgb(214, 41, 82)` (#d62952) ×4
- neutral staircase (frequency sweep) — `rgb(68,68,68)` #444444 ×6138, `rgb(150,150,151)` #969697 ×712, `rgb(139,139,139)` #8b8b8b ×429, `rgb(210,210,210)` #d2d2d2 ×365, `rgb(238,241,244)` #eef1f4 (hairline), `rgb(247,248,249)` #f7f8f9 (surface)
- "로그인/회원가입" utility menu — color `rgb(68, 68, 68)`, font-size 14px, line-height 24px, padding 0px 18px 0px 5px
- page title — "지니 : 음악, 그리고 설레임" (confirms live brand surface, no bot block)
- Country sources: `https://www.genie.co.kr`; `https://company.genie.co.kr` — 지니뮤직 (Genie Music Corporation) corporate site, KT-affiliated, brand-owned corporate/IR surface; Apple App Store KR — "지니(genie) - 음악, 노래, 비디오" listing (Genie Music Corp., KR storefront), brand-owned distribution page.

Values and strings the sibling carries that the migration source does not, kept here and not promoted:

- The full font stack `dotum, 돋움, sans-serif`. The source's own record is `sans: "dotum"` with `fallback: "sans-serif"`, plus the visible line "`dotum` (돋움), with fallback `sans-serif`", and that is what the portable body carries.
- The body line-height 18px and the utility-menu line-height 24px and padding `0px 18px 0px 5px`. The source records these roles as unitless ratios (1.50, 1.71) and does not give them px line-heights or that padding.
- `rgb()` byte forms for every colour, and the frequency counts (×6138, ×712, ×429, ×365, ×10, ×4).
- Published strings that occur only in the sibling: `로그인/회원가입` (the source writes the same labels as `로그인·회원가입`, with a middle dot) and `지니(genie) - 음악, 노래, 비디오` (the Apple App Store KR listing title). Both are preserved byte-for-byte in this file (A5).
- The Apple App Store KR listing as a third country source. The source footer names only two Tier 1 URLs.

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.30`, `1.71`, `1.50`, `1.50`, `2.08`). They are carried as ratios in the portable body, never converted to px (A1a).
- The source frontmatter records spacing and radius steps unitless (`xs: 1` … `xxl: 32`; `sm: 4`, `md: 8`, `lg: 13`, `full: 9999`). The portable body keeps both the unitless steps and the px forms the visible sections use. `full: 9999` stays a step and is not given a px suffix.
- The disabled-state value `#fa406580` is an 8-digit form the source writes as "`#fa406580`-equivalent muting". It is carried in the portable surface state contract exactly as the source spells it.
- `caption` has no `lineHeight` key in the frontmatter and the visible §3 table writes its line height as `normal`. Both outputs keep `normal` rather than inventing a ratio.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` | curve value only; token name, role, durations, motion rules, signature motions, and reduced-motion behavior kept | No observation stands behind the value. The source's evidence is one Tier 1 live inspect of one homepage and it supplies no transition, animation, or easing sample. |
| `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` | curve value only | Same, and byte-identical to the example table at `spec/omd-v0.1.md` line 262, the documented re-injection path for this value. |
| `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | curve value only | Same: no observation stands behind the value. |
| §13 Personas — four entries | whole section | The source's own italic line labels them fictional archetypes informed by publicly observable segments, not individual people. Fictional personas are neither promoted to verified tasks nor re-hosted in a sidecar, so the four names, ages, cities, occupations, and inferred segments are dropped and are deliberately not restated here (D2). |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | whole section | Tool-facing copy-paste prompts and restatements of rules stated elsewhere. Checked value by value before deletion: see the next paragraph. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Quick Color Reference: `#fa4065`, `#d62952`, `#0096ff`, `#27282d`, `#444444`, `#969697`, `#8b8b8b`, `#ffffff`, `#f7f8f9`, `#eef1f4`, `#d2d2d2`, `#434354` — all twelve are Foundations semantic-color roles. Example Component Prompts: `1px #eef1f4` divider, 11px `#969697` rank numeral, 12px `#444444` row text strengthening to `#27282d`, the pink button at 4px radius / 8px 18px padding / white 12px/700 text / hover `#d62952`, the tab pair at `#8b8b8b` 400 and `#0096ff` 700 with 0px 8px padding, the panel at 8px radius with `1px #eef1f4` border and `rgba(0,0,0,0.12) 0px 4px 12px`, the chips at `#434354` / 13px / white 12px/700 / 0px 12px, the nav at 18px 700 `#27282d` with active `#fa4065` and a pink bottom border, and the search field at `1px #d2d2d2` / 4px radius / placeholder `#969697` — all are Components & States entries. Iteration Guide: the 12px base, the 18px nav exception, weight 700 as the emphasis lever, the rarity rule for `#fa4065`, `#eef1f4` separation, `#0096ff` as the active-tab signal, the 4px / 8px / 13px radius trio, and the neutral low overlay-only shadow rule — all are Foundations, Typography, or Experience application rules. §9 contributed no value that is absent elsewhere.

## Claim ledger

Every claim below is sourced from the single `home` surface (`https://www.genie.co.kr`, live inspect 2026-06-09).

| Claim | Surface |
|---|---|
| `tokens.colors.primary` / `primary-hover` / `accent-blue` / `heading` / `body` / `muted` / `label` / `secondary` / `canvas` / `surface` / `hairline` / `border` / `icon-gray` / `on-primary` / `chip-dark` | home |
| `tokens.typography.family.sans` / `family.fallback` | home |
| `tokens.typography.gnb` / `heading` / `body` / `body-bold` / `chip` / `caption` (size, weight, lineHeight, use) | home |
| `tokens.spacing.xs / sm / md / base / lg / xl / xxl` | home |
| `tokens.rounded.sm / md / lg / full` | home |
| `tokens.shadow.ambient` / `panel` | home |
| `tokens.components.button-primary` / `button-ghost` / `chip-search` / `tab-chart` / `nav-gnb` / `card` / `input-search` / `list-item` / `badge-rank` | home |
| Voice strings 지니 : 음악, 그리고 설레임 / 종합 / 국내 / 국외 / 듣기 / 담기 / 다운 / 검색 / 차트 / 최신음악 / 라디오 / 매거진 / 인기검색어 / 최근검색어 / 최근검색어 전체삭제 / 검색 결과가 없습니다 / 오류가 발생했습니다 / 실시간 차트 / 로그인·회원가입 | home |

## Proof notes

- One brand-owned Tier 1 product surface, live-inspected 2026-06-09. The second Tier 1 URL in the source footer (`https://company.genie.co.kr`) is a corporate surface with no design value attached by the source.
- `components_harvested: true`; nine component records in the source token set.
- The source records no interaction expansion, no pseudo-state capture, no hover/focus computed sample, and no motion sample. Uncaptured hover, focus-visible, disabled, loading, error, and success treatments are omitted as values; they are not turned into `not-applicable`. Applicability follows control role. State coverage is not claimed complete.
- The source's §6 Ring row (`#0096ff` / `#fa4065` outline, "Keyboard focus on tabs and actions") is a surface-level statement about generic keyboard focus. It is kept at that scope in Foundations and is deliberately not attached to any component's `focus-visible` row, because a generic focus record is a different evidence class from a `focus-visible` treatment (B1). The string `focus-visible` occurs zero times in `web/references/genie/DESIGN.md`.
- KT affiliation, the Melon/FLO market placement, and the genie/lamp metaphor are narrative context from §11, not a token source.

## Derived-inference ledger (B2 / B2a)

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`): **23**. This table has **23** rows (E1 1:1). Narrower was FAIL — the prior 18-row index omitted Semantic color, the Elevation Ring-scope reading, Assets, Font-evidence License, and the tagline-gloss reading.

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 | The surface boundary that stops a homepage value from standing in for another Genie surface |
| Experience — Scope ¶2 | The atmosphere reading: density as the point, "a working jukebox interface", the gray scaffolding rationale, `#fa4065` as "this is the thing you press" |
| Experience — Scope ¶3 | The Korean-web-portal heritage reading and the contrast with Western "discovery experience" |
| Experience — Primary tasks | The step from observed modules and labels to "primary tasks" |
| Experience — Audience | The step from the source's group-level description to an audience constraint |
| Experience — Distinctive traits | The characterizing half of the Key Characteristics bullets |
| Experience — Principles | All seven §12 principles |
| Experience — Application rules | The grouping of both Do lists as application rules, and their rationales |
| Experience — Avoid | The rationales in both Don't lists, and the scope-boundary prohibition |
| Foundations — Semantic color | The characterizing phrases attached to three roles |
| Foundations — Spacing | The reading of the compressed low end as rationed whitespace |
| Foundations — Elevation (Ring) | Reading the Ring row as a surface-level statement rather than a per-control treatment |
| Foundations — Elevation (philosophy) | The whole shadow-philosophy paragraph |
| Foundations — Motion | Durations, forbidden-motion rule, signature motions, and reduced-motion behavior, none of which has a motion sample behind it |
| Typography — Font evidence / License | Treating `dotum` as a platform-supplied Korean Gothic face, not a Genie brand asset |
| Typography — Family | The reading of `dotum` as chosen for small-size legibility and as the foundation of Korean-portal density |
| Typography — Type rules | The four §3 principles, separated from the observable facts of the scale |
| Typography — Assets | Reading album artwork as first-party catalog content |
| Components — Surface state contract | The ten-row §14 contract read as this surface's state contract |
| Components — How applicability is decided here | Every Reason cell in every per-component table |
| Layout & Platforms | The Korean-portal column reading and the density-first whitespace policy |
| Content & Locales — tagline gloss | Reading the source's English gloss as a reader aid that never replaces the Korean label |
| Content & Locales — voice / register | The voice reading, the register table, and the forbidden-register rule |

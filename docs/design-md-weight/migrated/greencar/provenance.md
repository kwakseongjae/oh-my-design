# Greencar provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/greencar/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | greencar |
| name | Greencar |
| display_name_kr | 그린카 |
| country | KR |
| category | automotive |
| homepage | `https://www.greencar.co.kr` |
| primary_color | `#00c88c` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=greencar.co.kr&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-26 |
| added | 2026-06-26 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-26 |
| components_harvested | true |

The favicon slug is dual-destination: identity metadata here, and a portable asset record in `DESIGN.md` Typography & Assets. It is a favicon-service URL keyed to the domain rather than a Greencar-hosted brand file, and the portable record says so.

Token note from source (A1c; ledger here, facts already in the portable body): `primary = signature brand green (#00c88c rgb 0,200,140) used as hero-panel fill and accent links; brighter green (#00dc9a) fills full-bleed hero bands. Action buttons are dark solid (#222222) + outline; green is the identity color, dark is the action color. Outfit (latin display) + Pretendard (hangul body). Flat system — single soft card shadow.`

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-26 |
| added | 2026-06-26 |
| tokens.extracted | 2026-06-26 |
| Tier 1 live computed-style inspect | 2026-06-26 |

The source footer records the verification verbatim as **Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces). That producer string is ledger metadata and has no portable slot (A1c). The calendar date `2026-06-26` is dual: DESIGN Scope inspection + this Freshness table.

Conflicts unresolved, as the source footer states: none.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | corporate homepage (live computed style) | `https://www.greencar.co.kr` | 2026-06-26 |
| gcar | G car product site (live computed style) | `https://www.greencar-gcar.co.kr` | 2026-06-26 |

### Tier 1 (as listed in the source footer)

- `https://www.greencar.co.kr` — live computed style: Outfit + Pretendard, `#00c88c` / `#00dc9a` brand bands, `#222222` solid CTA, `#ffffff` / 12px / `#dddddd` news card with `rgba(0,0,0,0.08) 0px 4px 8px`, nav `#777777` / `#171717`.
- `https://www.greencar-gcar.co.kr` — live computed style: shared Outfit/Pretendard, `#f6f6f6` surface, larger card radii.

### Tier 2

- getdesign.md/greencar — not listed (KR brand)
- styles.refero.design/?q=greencar — not listed

Per `spec/regional-sources.yaml`, Tier 2 cannot carry a KR ref; Tier 1 (the brand's own two surfaces) carries the proof. No Tier 1 ↔ Tier 2 conflicts.

## Sibling handling (`web/references/greencar/.verification.md`)

Sibling is present. Confirmed with `find web/references/greencar -type f`, which returned `DESIGN.md` and `.verification.md`. A dotfile is invisible to `ls` and to a `*` glob, so those tools are not a measure; `find` is. The sibling is a 2026-06-26 Tier 1 live inspect (playwright getComputedStyle, chromium headless, viewport 1440×900) of the same two brand-owned URLs. Date, method, and URLs agree with the source footer, so the sibling **widens nothing**: it corroborates the source and supplies raw samples the source already summarized.

Adopted as corroboration, not as a new token source:

- Viewport 1440×900 — method metadata only; not a layout token. The source's Desktop range is `1024-1440px`.
- Green brand band padding `220px 20px` — sibling-only measurement. Not promoted to the portable body.
- Nav padding `6px 0px` — sibling-only. Not promoted.
- Nav active `font-weight: 500` — sibling raw sample. The source token-set and §3 table record nav as weight 600, with active as color `#171717` only. Both records stay; they are not merged.
- Border-radius frequency on the homepage: `12px` ×32, `16px` ×24, `50%` ×17, `8px` ×11, `6px` ×6, `20px` ×4, `100px` ×1. Corroborates the source scale. `50%` and `100px` are sibling-only counts and are not promoted as new Shape steps; the source's circular step remains `full: 9999`.
- Box-shadow frequency: `rgba(0,0,0,0.08) 0px 4px 8px` ×4 on white cards; `none` elsewhere.
- G car surface: larger card radii `20px` ×45, `16px` ×33, `12px` ×14.
- Logo fetch: HTTP 200, `image/png`, 1012 bytes.
- Additional brand-owned surfaces noted and not counted toward the KR gate: `https://medium.com/그린카-기술블로그` (HTTP 403 to bots this run), `https://blog.naver.com/greencar_co`.

Sibling-recorded published copy that the source body does not quote, kept in DESIGN Content and here (A5 / A5a; dual):

- `그린카의 이동은` — bright-green hero band fragment
- `롯데렌터카 G car` — G car document title. Not merged into the source's `롯데렌탈` spelling.

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.50` on all six type roles). They are carried as ratios in the portable Type roles table, with the source's own px companions (`96px`, `54px`, `48px`, `24px`) kept beside them, never as a replacement (A1a).
- The source frontmatter records spacing and radius steps unitless (`xs: 4` … `xxl: 48`; `sm: 6` … `full: 9999`). The portable body keeps both the unitless steps and the px forms the visible sections use. `full: 9999` stays a step and is not given a px suffix in the token-set key. The source's visible radius prose writes `Full (9999px)`; that spelling is not re-introduced as a portable token suffix.
- Spacing `base: 16` and Shape `lg: 16` are different keys. They occupy different slots in the portable body.
- Card shadow byte form `rgba(0,0,0,0.08) 0px 4px 8px` is kept as the source writes it.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` | curve value only; token name, role, durations, motion rules, and reduced-motion behavior kept | No observation stands behind the value. The source's evidence is a two-page computed-style pass and it supplies no transition, animation, or easing sample. |
| `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` | curve value only | Same: no observation. Same curve as `spec/omd-v0.1.md` `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, a documented re-injection path. |
| `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | curve value only | Same: no observation. |
| §13 Personas — three entries | whole section | The source's own italic line labels them fictional archetypes informed by publicly observable user segments, not individual people. Fictional personas are neither promoted to verified tasks nor re-hosted in a sidecar, so the three names, ages, cities, and biographies are dropped and are deliberately not restated here (D2 / D2a). |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | whole section | Tool-facing copy-paste prompts and restatements of rules stated elsewhere. Checked value by value before deletion: see the next paragraph. |

§9 deletion check (A3). Every verified value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Quick Color Reference: `#00c88c`, `#00dc9a`, `#222222`, `#000000`, `#171717`, `#133b55`, `#303030`, `#5e5e5e`, `#777777`, `#b4b4b4`, `#f6f6f6`, `#dddddd`, `#ffffff` — all are Foundations semantic-color roles. Example Component Prompts: 64px Outfit `Create a Better Life` / `#133b55`, full-bleed `#00c88c` band with black text and white-outline `더 알아보기`, news card `#ffffff` / 1px `#dddddd` / 12px / 8px / `rgba(0,0,0,0.08) 0px 4px 8px`, solid `#222222` `채용 바로가기` 8px / 14px 20px / 52px / 16px / 700, outline `#222222`, nav Outfit 18px / 600 / `#777777` / `#171717`, green accent 16px / 700 — the verified pieces are Components, Foundations, Typography, or Content. Iteration Guide: green identity / dark action, Outfit / Pretendard lanes, 8px rectangles at 52px, one soft card shadow, teal-navy for the tagline only, black-through-faint ladder, grey and green bands — all are Experience application rules or Foundations.

## Claim ledger

| Claim | Surface |
|---|---|
| `tokens.colors.primary` / `primary-bright` / `ink` / `ink-pure` / `active` / `teal` / `nav-muted` / `body` / `muted` / `faint` / `hairline` / `surface` / `canvas` | home |
| `tokens.typography.family.display` / `family.body` | home + gcar |
| `tokens.typography.hero-en` / `section` / `logo` / `nav` / `button` / `body` (size, weight, lineHeight, use) | home |
| `tokens.spacing.xs / sm / md / base / lg / xl / xxl` | home |
| `tokens.rounded.sm / md / base / lg / xl / full` | home |
| `tokens.shadow.card` / `shadow.none` | home |
| `tokens.components.button-solid` / `button-outline` / `button-outline-invert` / `card-news` / `brand-panel` / `nav-link` / `accent-link` | home |
| Voice strings `Create a Better Life` / `그린카는 고객 중심의 모빌리티 풀 라인업을 열어갑니다.` / `더 나은 모빌리티 경험을 함께 만들어 갈 여러분을 기다립니다.` / `이동을 넘어 사람과 공간을 연결하는 그린카.` | home |
| CTAs `채용 바로가기` / `더 많은 뉴스 보기` / `더 알아보기` | home |
| Nav `회사소개` / `서비스` / `인재채용` | home |
| Policy `개인정보 처리방침` / `위치기반 서비스 이용약관` | home |
| Title `그린카(Greencar) 공식사이트` | home |
| Sibling-only `그린카의 이동은` / `롯데렌터카 G car` | home band / gcar title |

## Proof notes

- Two brand-owned Tier 1 computed-style surfaces (corporate homepage + G car product site), 2026-06-26. `tokens.source: live-extract`; `components_harvested: true`; seven component records in the source token set.
- The source records no interaction expansion, no pseudo-state capture, and no motion sample. Uncaptured hover, focus-visible, disabled, loading, error, and success treatments are omitted as values; they are not turned into `not-applicable`. Applicability follows control role. State coverage is not claimed complete.
- Founding narrative (2011 establishment, 2015 Lotte Rental subsidiary) is narrative context from §11, not a token source. The homepage meta phrases `프리미엄 카셰어링`, `롯데렌탈과 함께`, and `이동을 넘어 사람과 공간을 연결하는` are verbatim from the live homepage.
- The source's HTML comment marks "green is identity, dark is action" and "flat and calm as a rejection of discount-driven rental chrome" as editorial readings. Those readings carry adjacent complete qualifiers in the portable body.

## Derived-inference ledger (B2 / B2a)

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`): **27**. This table has **27** rows (E1 1:1). The same 27 lines also carry `not Greencar-authored` and `separately published UI specification`.

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 | The surface boundary that stops a corporate-homepage measurement from standing in for an uninspected reservation or saved-list screen; the rule that every value stays attached to its establishing surface; the G car title read as a sibling observation rather than a replacement for the corporate title |
| Experience — Scope ¶2 | The atmosphere reading: calm editorial corporate-mobility surface rather than a transactional booking app; green as "who we are" so the eye treats green as identity and dark as action |
| Experience — Scope ¶3 | Pretendard as de-facto Korean product font; Outfit as open/optimistic; Outfit/Pretendard split as the core tension |
| Experience — Scope ¶4 | Restraint as what distinguishes Greencar from heavier automotive and rental sites; clean, modern, mobility-forward aesthetic |
| Experience — Scope ¶5 | The refuse/embrace pair read as a design stance |
| Experience — Primary tasks | The step from observed modules and labels to "primary tasks" |
| Experience — Audience | The step from the source's group-level description to an audience constraint |
| Experience — Distinctive traits | The characterizing half of the Key Characteristics bullets |
| Experience — Principles | All five §12 principles |
| Experience — Application rules | The grouping of the §7 Do list as application rules, and their rationales |
| Experience — Avoid | The rationales in the §7 Don't list, and the scope-boundary prohibition |
| Foundations — Semantic color | The characterizing phrases attached to identity/action roles |
| Foundations — Spacing | Reading the 52px hit area as comfortably tappable, and the airy section spacing as a generous vertical rhythm |
| Foundations — Shape | Reading 8px rectangles on actions as a no-pill rule, and calling the 8px medium step the action workhorse |
| Foundations — Elevation | Reading the source's near-flat philosophy as a binding rule for uninspected overlays |
| Foundations — Motion | Durations, easing names/roles, no-bounce rule, fade-in / press rules, and reduced-motion behavior, none of which has a motion sample behind it |
| Typography — Font evidence / License | Treating Outfit as a commercial face and Pretendard as an upstream open face, not Greencar-distributed brand assets |
| Typography — Family | Reading the Pretendard fallback as a hangul-legibility lane rather than a substitute brand face, and the prohibition on substituting a system font and presenting it as the Greencar face |
| Typography — Type rules | Reading the source's §3 principles as binding type rules for uninspected surfaces |
| Typography — Assets | Treating the favicon-service URL as identity metadata rather than a Greencar-authored mark file |
| Components — Surface state contract | The nine-row §14 contract read as this surface's state contract; empty/loading/error rows classified as prose treatments rather than a second token-inspection pass |
| Components — How applicability is decided here | Every Reason cell in every per-component table |
| Layout & Platforms — segmentation | Brand bands as the section device; flat color plus hairlines as the segmentation method |
| Layout & Platforms — breakpoints | Reading the breakpoint table as declared behavior rather than as an observation of the mobile or tablet widths |
| Layout & Platforms — touch | Reading 52px buttons as comfortably tappable |
| Content & Locales — published-string gloss | Parenthetical glosses on published strings, including calling the hero tagline an aspirational brand statement |
| Content & Locales — voice / register | The voice reading, and the forbidden-register rule |

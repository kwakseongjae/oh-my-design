# iKala provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/ikala/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | ikala |
| name | iKala |
| country | TW |
| category | developer-tools |
| homepage | `https://ikala.ai` |
| primary_color | `#061232` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=ikala.ai&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-08 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-08 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The favicon slug is dual: identity here, and a portable asset pointer in `DESIGN.md` §3.

**Logo decision.** The `logo.slug` above is a Google favicon-service URL, not an iKala-hosted asset. The sibling verification file states that getdesign.md, refero.design, and the google favicon proxy are excluded from the Taiwan / regional brand-owned source list; the catalog identity field is kept here and is classified in the portable document as an identity pointer, not a hosted brand file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-08 |
| added | 2026-06-08 |
| tokens.extracted | 2026-06-08 |
| Tier 1 live inspect (source footer) | 2026-06-08 |

The source footer records the verification verbatim as **Verified:** 2026-06-08 (omd:add-reference — Tier 1 live inspect). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | homepage, live computed style | `https://ikala.ai` | 2026-06-08 |
| tw | Taiwan-market homepage, live computed style (source footer) | `https://ikala.tw` | 2026-06-08 |

### Tier 1 (as listed in the source footer)

- `https://ikala.ai`
- `https://ikala.tw`

### Sibling country sources (not computed-token surfaces)

Named in `web/references/ikala/.verification.md` only. Not promoted into the portable body as token surfaces.

- `https://ikala.tw` — also in the source footer as a Tier 1 inspect surface
- `https://www.kolradar.com` — sibling names KOL Radar as the Taiwan martech product
- `https://ikala.ai/tw/blog/` — sibling names the Taiwan-locale blog

## Token note (YAML `tokens.note`)

The source frontmatter note, kept here as a ledger string and also landed in the portable body as the facts it names (deep navy CTA fill `#061232` live on `Get in Touch`; brand-blue accent `#3a82dd` for links/nav; family `Noto Sans TC`, Taiwan-localized):

> primary = deep navy CTA fill #061232 (live getComputedStyle on 'Get in Touch'); brand-blue accent #3a82dd for links/nav; family Noto Sans TC (Taiwan-localized)

## Sibling handling (`web/references/ikala/.verification.md`)

The sibling exists — confirmed with `find web/references/ikala -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-08. Method: playwright getComputedStyle (live DOM). Tooling: global playwright, headless Chromium launched with `args: ['--disable-http2']`, `goto('https://ikala.ai')`, cookie/promo dismissal (Escape + close/accept selectors), then `getComputedStyle` on `body`, hero `h1`, section `h2`/`h3`, primary CTA, nav links, and a 1500-element color-frequency sweep. rgb()/rgba() values converted to 6-digit hex.
- `body` background-color: `rgb(255,255,255)` → `#ffffff`; color: `rgb(82,81,81)` → `#525151`; font-family: `"Noto Sans TC", "Noto Sans", sans-serif`
- `h1` (hero "Home"): font-size `84px`, font-weight `800`, color `rgb(255,255,255)` → `#ffffff`, line-height `95.67px` (~1.14), letter-spacing `-3.49px`
- `h2` ("Total AI Transformation Solutions and Se…"): font-size `36px`, font-weight `600`, color `rgb(51,51,51)` → `#333333`, line-height `50.4px` (1.40), letter-spacing `-1.50px`
- `h3` ("Manufacturing"): font-size `24px`, font-weight `600`, color `#333333`, line-height `24px`, letter-spacing `-1.00px`
- Primary CTA `a` "Get in Touch": background `rgb(6,18,50)` → `#061232`, color `#ffffff`, border-radius `8px`, height `58px`, font-size `18px`, font-weight `500`, padding `20px 30px`
- Ghost CTA `a` "Try it Now": background `#ffffff`, color `rgb(6,18,50)` → `#061232`, border-radius `8px`, font-size `20px`, font-weight `500`
- Active nav link: font-size `18px`, font-weight `700`, color `rgb(58,130,221)` → `#3a82dd`
- Box-shadows measured: `rgba(0,0,0,0.04) 0px 0px 10px 0px`, `rgba(0,0,0,0.10) 0px 0px 20px 0px`, `rgba(0,0,0,0.19) 0px 0px 10px 0px`
- Border-radii observed: `4px`, `8px`, `30px`
- Color-frequency sweep (top hits): `#000000` (1047), `#525151` (366), `#ffffff` (139), `#333333` (40), `#3a82dd` (28), `#6b7280` (23), `#4770df` (19), `#999999` (15), `#2563eb` (11), `#061232` (8), `#2168c2` (6), `#031234` (3), `#edf1f7` (1)
- Page `document.title`: `iKala - Data → Intelligence → Impact`

Values and strings the sibling carries that the visible source body does not, kept here and not promoted:

- Hero h1 sample label `Home`
- Computed line-height px forms `95.67px` and `50.4px`
- Frequency counts (1047, 366, 139, and the rest)
- Playwright `args: ['--disable-http2']` and the 1500-element sweep
- document.title prefix form `iKala - Data → Intelligence → Impact` (the source body records the page-title phrase `Data → Intelligence → Impact` without that prefix)
- `https://www.kolradar.com` and `https://ikala.ai/tw/blog/` as country-source URLs
- rgb() forms (`rgb(255,255,255)`, `rgb(82,81,81)`, `rgb(6,18,50)`, `rgb(58,130,221)`, `rgb(51,51,51)`)

`Get in Touch` / `Try it Now` / `Manufacturing` / `Total AI Transformation Solutions and Services` / 58px / `20px 30px` / `Noto Sans TC` are already in the source body and are corroboration, not a sibling-only promotion.

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.14`, `1.40`, `1.00`, `1.55`). They are carried as ratios in the portable body, never converted to a replacement px (A1a). The source table's rem forms and `normal` cells stay beside the ratios. Caption has no YAML `lineHeight`; the source table writes `normal` and no ratio is invented.
- YAML tracking stays on its keys: `display-hero` `-3.49`, `section` `-1.50`, `subheading` `-1.00`. The source table's px spellings (`-3.49px`, `-1.50px`, `-1.00px`) sit beside those keys.
- The source frontmatter records spacing and radius steps unitless (`xs: 4` … `section: 80`; `sm: 4`, `md: 8`, `lg: 30`, `full: 9999`). The portable body keeps both the unitless steps and the px forms the visible sections use. `full: 9999` stays a step.
- `tokens.spacing.xs: 4` is not `tokens.rounded.sm: 4`. `tokens.spacing.sm: 8` is not `tokens.rounded.md: 8`. `tokens.spacing.base: 16` is not a type size. `tokens.spacing.lg: 24` is not the 24px type size. `tokens.spacing.xl: 30` is not `tokens.rounded.lg: 30` and is not the 30px half of `20px 30px`.
- YAML `tokens.colors.canvas: #ffffff` is the page-background / card-surface / hero-text-over-imagery role. YAML `tokens.colors.on-primary: #ffffff` is the text on the navy CTA. They share a hex and stay separate keys.

## Claim ledger

| Claim | Surface |
|---|---|
| tokens.colors.primary / primary-deep / accent-blue / accent-blue-strong / accent-blue-deep / link / canvas / heading / body / muted / faint / on-primary / hairline / ink | home + tw |
| tokens.typography.family.sans / family.fallback | home + tw |
| tokens.typography.display-hero / section / subheading / body-lg / body / button / caption | home + tw |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | home + tw |
| tokens.rounded.sm / md / lg / full | home + tw |
| tokens.shadow.ambient / standard / elevated | home + tw |
| tokens.components.button-primary / button-ghost / nav-link / card / section-title / link-inline | home + tw |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 4인 (이름·나이·도시 포함) | Deleted. The source's own header labels them fictional archetypes. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or occupation classifications (D2, D2a). |
| §15 `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §15 `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §15 `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` | Deleted. Unattributed, and byte-identical to the documented re-injection path in `spec/omd-v0.1.md`. |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Deep Navy `#061232`, Pure White `#ffffff`, Heading `#333333`, Body `#525151`, Brand Blue `#3a82dd`, Link Blue `#2563eb`, Strong `#4770df`, Hairline `#edf1f7`, Primary Deep `#031234` — Foundations semantic color. Hero 84px / 800 / `-3.49px` / `#ffffff` — Type roles + Scope. Ghost `#ffffff` / `#061232` / 8px / 18px–20px / 500 / `Try it Now` — Ghost / Light. Feature card white / 8px / `rgba(0,0,0,0.04) 0px 0px 10px 0px` / title 24px / 600 / `#333333` / `-1.0px` / body 18px / 400 / `#525151` / 1.55 — Feature / Industry Card + Type roles. Primary CTA `#061232` / white / 8px / `20px 30px` / ~58px / 18px / 500 / `Get in Touch` — Primary (Navy). Nav white sticky / 18px / 700 / `#333333` / active `#3a82dd` / navy `Contact` — Navigation + Primary. Section title 36px / 600 / `#333333` / `-1.5px` — Section Titles + Type roles. Iteration-guide rules (`Noto Sans TC` first, navy as primary CTA, `#3a82dd` as interactive signal, headings `#333333` / body `#525151`, `0px 0px` glow 0.04 / 0.10 / 0.19, radius 8 / 30 / 4, tracking tight at display) — Principles + Application rules + Avoid + Type rules + Elevation + Shape.

## Derived editorial inventory

Portable `DESIGN.md` carries 35 complete B2a qualifications. This table is 35 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope ¶1 | Taiwan-headquartered B2B AI and martech company; two inspected pages as this contract's token surfaces; values stay attached |
| 2 | Experience Scope ¶2 | Measured-and-trustworthy / trust-through-clarity / market-honest Noto / top-down hierarchy / enterprise-grade-without-cold characterizations |
| 3 | Experience Scope ¶3 | Founding-and-portfolio narrative as context that does not supply interface tokens |
| 4 | Primary tasks | Selecting the five recorded labels as primary tasks |
| 5 | Audience | Group-level APAC enterprise AI buyers, retail/manufacturing digital-transformation leads, brand marketers using influencer intelligence |
| 6 | Distinctive traits | Grouping the Key Characteristics as the distinctive layer |
| 7 | Principles | The six numbered items and their UI implications |
| 8 | Application rules | The eight Do rules and the reasons attached |
| 9 | Avoid | The eight Don't rules and the reasons inside them |
| 10 | Foundations Semantic color | Navy-as-gravitas / blue-as-interactive-signal / warm-gray / hairline-as-divider characterizations |
| 11 | Foundations Semantic color On-Primary | `tokens.colors.canvas` and `tokens.colors.on-primary` stay unmerged despite a shared hex |
| 12 | Foundations Spacing | Unitless steps unmerged from matching radius keys, type sizes, and padding halves |
| 13 | Foundations Shape | Standard 8px as the workhorse; `full: 9999` unmerged from matching spacing keys |
| 14 | Foundations Elevation | Clean-and-contemporary / lifted-but-never-heavy reading |
| 15 | Foundations Motion | Unattributed durations, roles, signature motions, and rules |
| 16 | Typography Official product-use | "No published type token" |
| 17 | Typography Official distributed asset | No exclusive downloadable font package |
| 18 | Typography Declared-only | Fallback stack members are not the brand face |
| 19 | Typography License | Upstream family without an iKala-issued license notice |
| 20 | Typography Outside these captures | Typography beyond the two pages sits outside this contract |
| 21 | Typography Family | Single-family restatement; fallback prohibition |
| 22 | Type roles | Ratios kept beside rem forms; empty YAML lineHeight cell stays `normal`; Nav Active is a source-table row |
| 23 | Type rules | Confident-not-shouty / engineered-presence / comfortable-long-passage / Han-Latin-rhythm / weight-carries-structure readings |
| 24 | Assets | Favicon-service as identity pointer |
| 25 | Components how-to-read | Kind and applicability verdicts |
| 26 | Feature / Industry Card | Withholding kind and the map because the card is not a commit control |
| 27 | State record | System-level treatments without per-control observation |
| 28 | State record close | Rows are not attached as visual treatments to destination controls |
| 29 | Layout whitespace | Generous-and-calm / visual-descent / predictable-eye-path |
| 30 | Layout responsive | Breakpoints stated at system level rather than measured across viewports |
| 31 | Layout image | Restating hero-bleed and card-thumbnail rules as current-surface instructions |
| 32 | Content & Locales | Voice characterization, register reading, and tone table |
| 33 | Content Forbidden register | Premise-to-register causal (professional and evidence-led) |
| 34 | Content & Locales close | Byte-exact published strings; English gloss may sit beside a line and never replaces it |
| 35 | Recorded unresolved | Named values, not a license to invent |

## Proof notes

- verification schema from sibling: Tier 1 live inspect 2026-06-08; conflicts: none
- components_harvested: true
- Uncaptured hover / focus-visible treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official history is narrative context, not a token source. The source's own §11 strings kept as narrative facts: `2015`; `Sega Cheng`; `Data → Intelligence → Impact`; `AI cloud / AI transformation`; `iKala Commerce / KOL Radar`; `Greater China and Southeast Asia`; `Google Cloud partner`; `black-box novelty`; `unmistakably local`; `unmistakably credible`. They do not by themselves supply interface tokens.
- No separately published iKala UI specification is named in the source. Every derived-editorial close uses the toss-form `not iKala-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석)

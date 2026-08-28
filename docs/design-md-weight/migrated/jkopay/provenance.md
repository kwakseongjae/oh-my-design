# JKOPay provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/jkopay/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | jkopay |
| name | JKOPay |
| country | TW |
| category | fintech |
| homepage | `https://www.jkopay.com` |
| primary_color | `#C9191D` |
| logo.type | favicon |
| logo.slug | `https://www.jkopay.com/application/favicon.ico` |
| omd format (source) | 0.1 |
| verified | 2026-06-03 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The YAML homepage is `https://www.jkopay.com` (no path). The token surface the source inspected is `https://www.jkopay.com/application`. Both spellings are kept. The homepage path is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The favicon slug is dual: identity here, and a portable asset pointer in `DESIGN.md` §3.

**Logo decision.** The `logo.slug` above is a first-party favicon URL on the inspected homepage. The official brand logo SVG the source footer names is `https://img.jkos.com.tw/official_jkos_image/logo-red-square.svg`.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-03 |
| tokens.extracted | 2026-06-09 |
| Tier 1 live inspect (source footer) | 2026-06-03 |

The source footer records the verification verbatim as **Verified:** 2026-06-03. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | homepage HTML + Next.js CSS bundle | `https://www.jkopay.com/application` | 2026-06-03 |
| css-bundle | main CSS bundle, 68 KB | `https://www.jkopay.com/application/_next/static/css/6d42544b8623d735.css` | 2026-06-03 |
| logo-svg | official brand logo SVG | `https://img.jkos.com.tw/official_jkos_image/logo-red-square.svg` | 2026-06-03 |
| press | press/brand page | `https://www.jkos.com/press.html` | 2026-06-03 |
| download | download page | `https://www.jkos.com/download_app.html` | 2026-06-03 |

### Tier 1 (as listed in the source footer)

- `https://www.jkopay.com/application` (homepage HTML + Next.js CSS bundle)
- `https://www.jkopay.com/application/_next/static/css/6d42544b8623d735.css` (main CSS bundle, 68 KB)
- `https://img.jkos.com.tw/official_jkos_image/logo-red-square.svg` (official brand logo SVG)
- `https://www.jkos.com/press.html` (press/brand page)
- `https://www.jkos.com/download_app.html` (download page)

### Tier 2

- getdesign.md/jkopay — NOT LISTED ("No designs found for 'jkopay'").
- refero — no result for JKOPay (TW brand, not indexed).

## Token source (YAML `tokens.source`)

The source frontmatter records `tokens.source: prose-derived` and `tokens.extracted: 2026-06-09`. That producer string is ledger metadata. The portable body names `prose-derived` as the token-set source on the Font evidence Live computed row; it does not promote the reconstruction as a live computed-style pass.

## Sibling handling (`web/references/jkopay/.verification.md`)

The sibling exists — confirmed with `find web/references/jkopay -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-03. Method: raw source-file fetch (homepage HTML + Next.js CSS bundle + official logo SVG + brand/press pages).
- logo-red-square.svg: `fill="#C9191D"`
- CSS brand-600: `background-color:rgb(201 25 29/var(--tw-bg-opacity))` — brand-600 Tailwind token = `#C9191D`
- CSS homepage HTML primary button: `bg-brand-600 px-[29px] py-[12px]` `rounded-xl` `text-[17px] font-medium` `hover:bg-[#D51B1F]`
- CSS ghost button: `border border-brand-600 bg-[#FFFFFF4D]` `rounded-[9px]` `md:rounded-[12px]`
- CSS main bundle: `font-family:PingFang TC apple-system,system-ui,BlinkMacSystemFont,pingfang-tc,...sans-serif!important; font-size:16px`
- CSS main bundle: `background-color:rgb(244 244 246/var(--tw-bg-opacity))` for `.bg-[#F4F4F6]`
- CSS main bundle: `border:0 solid #ededf1`
- CSS main bundle: `color:rgb(66 67 74/var(--tw-text-opacity))` — body text `#42434A`
- CSS main bundle: `background:#171718`
- CSS main bundle: `#2E7DD9` as `.text-[#2E7DD9]`
- CSS main bundle: `box-shadow:0 15px 30px -25px #0000001f`
- Country: TW (Taiwan); JKOPay is operated by 街口電子支付股份有限公司 (Jkopay Co., Ltd.), headquartered in Taipei, Taiwan.
- Tailwind v3.3.2 named on the CSS bundle; homepage HTML 238 KB; CSS bundle 68 KB.

Sibling-only items (mention, not portable use). This sentence names the field kind so the row can be found; it does not assert that those strings are absent from this file:

- homepage HTML size `238 KB`
- CSS bundle size `68 KB` as a sibling measurement (the source footer also names 68 KB)
- Tailwind `v3.3.2`
- ghost background hex `#FFFFFF4D`
- card shadow hex `#0000001f`
- `rgb(201 25 29)` as a live CSS spelling
- legal operator name 街口電子支付股份有限公司
- romanized company name `Jkopay Co., Ltd.`
- headquarters city `Taipei`
- getdesign.md page text `No designs found for 'jkopay'`

Those sibling-only strings are transcribed in the bullet list above. They are not promoted into `DESIGN.md`.

Values the sibling shares with the source body (corroboration, not new portable facts): `#C9191D`, `#D51B1F`, `#F4F4F6`, `#EDEDF1`, `#42434A`, `#171718`, `#2E7DD9`, PingFang TC, 16px base, 17px / 500, `12px 29px`, 9px / 12px ghost radii, card shadow `0 15px 30px -25px`.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary / primary-hover / primary-dark / body / dark-bg / dark-nav / surface / border / placeholder / blue-accent / white | home |
| tokens.typography.family.sans / family.fallback | home |
| tokens.typography.display / heading / body / button / caption | home |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | home |
| tokens.rounded.sm / md / lg / full | home |
| tokens.shadow.card | home |
| tokens.components.button-primary / button-ghost / nav / card / input / link-blue | home |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 4인 (이름·나이·도시·동기·소속 분류 포함) | Deleted. The source's own header labels them illustrative archetypes. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or occupation classifications (D2, D2a). |
| §15 Default interactive `cubic-bezier(0.4, 0, 0.2, 1)` | Deleted. Unattributed curve; the source names it as Tailwind's default / Material standard. Role name and use kept. Byte-related to `spec/omd-v0.1.md` `ease-standard`. |
| §15 Entry `cubic-bezier(0.0, 0, 0.2, 1)` | Deleted. Unattributed curve; the source names it as `ease-in`. Role name and use kept. Byte-related to `spec/omd-v0.1.md` `ease-enter`. |
| §9 Agent Prompt Guide — construction prompts, including the Tailwind-default curve restatement | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components. The curve is deleted with §15, not promoted. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. White / `#F4F4F6` background and `#C9191D` primary — Foundations semantic color + Application rules. PingFang TC first in the stack — Family + Application rules. Solid red primary + ghost (`border: #C9191D`) with radius 12px desktop / 9px mobile ghost — Primary CTA Button + Ghost / Secondary + Avoid. Cards `#F4F4F6`, `20px` radius, shadow `0 15px 30px -25px rgba(0,0,0,0.12)` — Standard Card + Elevation. Navigation sticky, `rgba(255,255,255,0.80)`, 64px — Top Nav + Application rules. Typography 16px base, 17px buttons (medium 500), 21.4px body section text, 42–56px hero — Type roles + Layout. Avoid deep shadows, loud gradients, or competing accent colors — Avoid + Principles. The Tailwind-default curve is omitted, not restated as a token.

## Derived editorial inventory

Portable `DESIGN.md` carries 37 complete B2a qualifications. This table is 37 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope ¶1 | Inspected homepage as this contract's token surface; press and download pages do not supply computed tokens; values stay attached |
| 2 | Experience Scope ¶2 | Approachable-confidence / modern-without-austerity / barely-there shadow / frosted glass that anchors / warm civic frictionless atmosphere |
| 3 | Experience Scope ¶3 | Founding-and-tagline narrative as context that does not supply interface tokens |
| 4 | Primary tasks | Selecting the four recorded labels as primary tasks |
| 5 | Audience | Group-level Chinese-speaking users, night-market vendors, grandmother / Tuofu Bao investor, university student / sixty-year-old vendor |
| 6 | Distinctive traits | Grouping the recorded values as the distinctive layer |
| 7 | Principles | The five numbered items and their UI implications |
| 8 | Application rules | The eight Do rules and the reasons attached |
| 9 | Avoid | The six Don't rules and the reasons inside them |
| 10 | Foundations Semantic color | Sole-primary / reserved-blue / warm-gray-instead-of-white-on-white characterizations |
| 11 | Foundations Semantic color White | `tokens.colors.white` unmerged from `#FFFFFF` button text; uppercase §2 hexes unmerged from lowercase YAML hexes |
| 12 | Foundations Spacing | Unitless steps unmerged from matching radius keys, type sizes, and padding halves |
| 13 | Foundations Shape | `full: 9999` unmerged from 40px tag; YAML card `12` unmerged from §4 `20px`; §8 `30px` on its own row |
| 14 | Foundations Elevation | Three shadow spellings unmerged; frosted glass as elevation through translucency |
| 15 | Foundations Motion | Unattributed durations, roles, and rules; two untraceable curve values omitted |
| 16 | Typography Official product-use | "No published type token" |
| 17 | Typography Official distributed asset | No exclusive downloadable font package |
| 18 | Typography Declared-only | Fallback stack members are not the brand face |
| 19 | Typography License | PingFang TC without a JKOPay-issued license notice |
| 20 | Typography Outside these captures | Typography beyond the inspected homepage stays outside this contract |
| 21 | Typography Family | First-face restatement; fallback prohibition |
| 22 | Type roles | Five token-set roles kept on their paths; Button / Caption without an invented line-height; §3 px spellings (`18px`, `56px`) beside YAML sizes; §3-only sizes off the keys |
| 23 | Type rules | Weight reservations and dense-CJK leading class as current-surface type rules |
| 24 | Assets | Favicon as identity pointer; square SVG as named official logo; photography subjects as the source's principle |
| 25 | Components how-to-read | Kind and applicability verdicts |
| 26 | Ghost keep-both | YAML `#ffffff` unmerged from §4 `rgba(255,255,255,0.30)` |
| 27 | Nav keep-both | YAML `#ffffff` unmerged from §4 `rgba(255,255,255,0.80)` |
| 28 | Card keep-both + C4 | YAML radius `12` unmerged from §4 `20px`; kind and map withheld |
| 29 | State record | System-level treatments without attaching every row to homepage destination CTAs |
| 30 | Error keep-both | Avoid `#C9191D`-for-error and Payment Failed left-border stay unresolved |
| 31 | Layout whitespace | Alternating white / `#F4F4F6` bands as visual rhythm without hard borders |
| 32 | Layout responsive | Breakpoints stated at system level rather than measured across viewports |
| 33 | Content & Locales | Voice characterization, register reading, and tone table |
| 34 | Content Forbidden register | Premise-to-register causal |
| 35 | Content & Locales close | Byte-exact published strings; a gloss may sit beside a line and never replaces it |
| 36 | Recorded unresolved | Named values, not a license to invent |
| 37 | Content voice-sample | Illustrative samples are not a complete product-microcopy guide |

## Proof notes

- verification schema from sibling: Tier 1 raw source-file fetch 2026-06-03; conflicts: none
- tokens.source: prose-derived
- components_harvested: true
- Uncaptured focus-visible treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official history is narrative context, not a token source. The source's own §11 strings kept as narrative facts: `2015`; `Kevin Hu`; Wall Street / hedge fund analyst; JKO Network; "For me, the value of entrepreneurship lies in whether it makes people's lives more convenient."; `街口` / `jiē kǒu`; night market vendors / small-town convenience stores / neighbourhood restaurants; `2023`; largest e-wallet; QR-code / P2P / insurance / investment / hospital registration; `掃碼行動支付` → `不止支付`; grandmother at the wet market; Tuofu Bao. They do not by themselves supply interface tokens.
- No separately published JKOPay UI specification is named in the source. Every derived-editorial close uses the toss-form `not JKOPay-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석)

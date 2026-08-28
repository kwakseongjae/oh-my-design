# Hana Bank provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, evidence grading, and omission record for the Core v2 migration of `web/references/hana/DESIGN.md`. The canonical source remains that file until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | hana |
| name | Hana Bank |
| display_name_kr | 하나은행 |
| country | KR |
| category | fintech |
| homepage | `https://www.kebhana.com` |
| primary_color | `#00a39f` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=www.kebhana.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-22 |
| components_harvested | true |

**Logo decision.** The `logo.slug` above is a Google favicon-service URL, not a Hana-hosted asset. The sibling verification file states that getdesign.md and refero are explicitly not counted toward the KR brand-owned ≥2 requirement; the catalog identity field is kept here and is not promoted to a Hana brand asset in the portable document.

**Token note, quoted verbatim from the source frontmatter:**

> primary = Hana Mint (#00a39f), live-observed as bg on hero carousel and nav accent; deep teal (#008485) on product cards. Corporate group uses slightly different green (#009178) on hanafn.com. Body font NotoSans_Regular (legacy site) with Pretendard on financial group site.

Every value inside that note is carried separately in the portable document: `#00a39f`, `#008485`, `#009178`, `NotoSans_Regular`, and Pretendard.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-22 |
| added | 2026-06-22 |
| tokens.extracted | 2026-06-22 |
| surfaces inspected | 2026-06-22 |
| sibling verification notes | 2026-06-22 |

Conflicts unresolved: none. The source footer states `Conflicts unresolved: none`. Differences between kebhana.com and hanafn.com are two brand surfaces.

The source footer's producer string: `omd:add-reference CREATE — Tier 1 live inspect`.

## Sibling verification file (E2)

`web/references/hana/.verification.md` was read and **adopted as evidence grading only**. Confirmed with `find web/references/hana -type f`, because a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact.

**Method, quoted from the sibling:** playwright `getComputedStyle` (live DOM) — global playwright (chromium, headless), goto https://www.kebhana.com/ `domcontentloaded`, 3500ms wait, Escape ×2 for modal dismissal, then `getComputedStyle` on body, buttons, links, navs, cards, and a full-DOM bgFreq/fgFreq scan. Also: https://www.hanafn.com/ for Hana Financial Group site inspection.

### Sibling-only values — held here, not promoted into the portable body

| Value | Sibling record | Why it stays here |
|---|---|---|
| `#009591` (`rgb(0, 149, 145)`) | bgFreq kebhana.com ×1 | The source HTML comment writes `#008491 (rgb 0,149,145)`. The portable body keeps neither as a new color role. Both spellings are ledger-only. |
| `#008491` | source HTML comment paired with `rgb 0,149,145` | Same conflict as above. Held here. |
| `#27b2a5` (`rgb(39, 178, 165)`) | fgFreq teal accent in text ×2 | Not a YAML color key and not a named body role. |
| `#00a88b` (`rgb(0,168,139)`) | mall-page bgFreq ×2 | Mall page is a sibling scan, not a portable surface in the source body. |
| body `line-height: 18px` | kebhana.com body raw sample | The YAML body role records unitless `1.5`. The portable Type roles row keeps `1.5`. |
| Footer border `rgb(221,221,221)` / `#dddddd` | "브랜드사이트" / "하나은행 SNS" | YAML and body use `#dbdbdb`. The sibling/comment `#dddddd` is not chosen over `#dbdbdb`. |
| Footer width `200px` | "브랜드사이트" | Not in the YAML or body token set. |
| Product card width `304px` | "신용대출" | Body records height 234px, not width. |
| Featured card width `258px` | "고단위 플러스" | Body records height 245px, not width. |
| Group secondary `#f2f2f2` / padding `0px 40px 0px 20px` | "PDF/MP3/Annual Report" | The source hierarchy table records 14px / 600 / 40px / 20px radius only. Sibling fill and padding stay here. |
| Frequency counts | `#00a39f` ×6, `#008485` ×2, `#ffffff` ×28, `#f8f8f8` ×24, `#666666` ×2274, `#555555` ×354, `#009178` ×5 | Measurement detail. The portable body carries the roles, not these counts. |
| Footer radius `10px 0px 0px 10px` / `0px 10px 10px 0px` | segmented select | Body records `10px`. The segmented corners stay here. |

### Sibling-only published strings — held here byte-exact (A5)

A5 covers strings the verification sibling names as measured copy. These lines are mentions of disposition, not portable use.

- `내집마련 더블업` — housing finance card sample
- `PDF/MP3/Annual Report` — group-site secondary button sample

`#465e6f` for housing finance is not sibling-only: the source body names muted navy-grey cards (`#465e6f`) for housing finance. It is dual: portable Foundations + this ledger.

## Raw samples (from the sibling)

- body (kebhana.com): `font-family: NotoSans_Regular`; `color: rgb(102, 102, 102)` (#666666); `font-size: 12px`; `line-height: 18px`; `background: rgba(0,0,0,0)` (canvas white)
- bgFreq (kebhana.com homepage): `rgb(0, 163, 159)` (#00a39f) ×6, `rgb(0, 132, 133)` (#008485) ×2, `rgb(0, 149, 145)` (#009591) ×1
- bgFreq (kebhana.com): `rgb(255,255,255)` ×28, `rgb(248,248,248)` ×24
- fgFreq (kebhana.com): `rgb(102,102,102)` (#666666) ×2274, `rgb(85,85,85)` (#555555) ×354
- fgFreq (kebhana.com): `rgb(0, 149, 145)` ×9, `rgb(39, 178, 165)` ×2
- Nav tabs "조회": `background-color: rgb(255,255,255)`; `color: rgb(0,0,0)`; `radius: 0px`; `padding: 0px 40px`; `height: 70px`; `font-size: 18px`; `font-weight: 400`; `font-family: NotoSans_Regular`
- Footer select "브랜드사이트": `background-color: rgb(255,255,255)`; `color: rgb(85,85,85)`; `border-radius: 10px 0px 0px 10px`; height 48px; width 200px; `font-size: 12px`; `border: 1px solid rgb(221,221,221)`
- Footer select "하나은행 SNS": `border-radius: 0px 10px 10px 0px`; `border: 1px solid rgb(221,221,221)`
- Product loan card "신용대출": `background-color: rgb(255,255,255)`; `border: 2px solid rgb(45,195,150)` (#2dc396); `border-radius: 6px`; `padding: 20px`; height 234px; width 304px
- Featured savings card "고단위 플러스": `background-color: rgb(0,132,133)` (#008485); `color: rgb(255,255,255)`; `radius: 0px`; `padding: 25px 15px 25px 30px`; height 245px; width 258px
- Featured savings card "부자씨 적금": same featured teal fill
- Housing finance card "내집마련 더블업": `background-color: rgb(70,94,111)` (#465e6f)
- bgFreq (mall page): `rgb(0,168,139)` ×2, `rgb(0,132,133)` ×2, `rgb(0,149,145)` ×1
- body (hanafn.com): `font-family: "Pretendard Variable", "Pretendard JP Variable", -apple-system, ...`; `color: rgb(34,34,34)` (#222222); `font-size: 14px`; `line-height: 19.6px`
- bgFreq (hanafn.com): `rgb(0,145,120)` (#009178) ×5
- CTA "인재상 알아보기": `background-color: rgb(255,255,255)`; `color: rgb(34,34,34)`; `border-radius: 27px`; height 54px; `font-size: 16px`; `font-weight: 700`; `padding: 0px 48px 0px 24px`
- CTA "채용공고 바로가기": `background-color: rgb(41,47,53)` (#292f35); `color: rgb(255,255,255)`; `border-radius: 27px`; height 54px; `font-size: 16px`; `font-weight: 700`
- Secondary "PDF/MP3/Annual Report": `background-color: rgb(242,242,242)`; `color: rgb(34,34,34)`; `border-radius: 20px`; height 40px; `font-size: 14px`; `font-weight: 600`; `padding: 0px 40px 0px 20px`

## Evidence class of the legacy sections

The source's own closing comment partitions its file, and this migration follows that partition rather than treating the whole file as one evidence class.

| Legacy range | Source's stated attribution |
|---|---|
| §1–§9 (token-level claims) | Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on `https://www.kebhana.com/` and `https://www.hanafn.com/` |
| §10 Voice samples | verbatim from the live homepage (verified 2026-06-22) |
| §11 Brand narrative | public-domain historical facts: founded 1971 as Korea Investment Finance Corp; renamed Hana Bank 1991; merged with KEB in 2015 |
| §13 Personas | fictional archetypes |
| §14 States, §15 Motion | **no attribution given.** The closing comment assigns a source to color, type, cards, nav, footer, group CTAs, error-page tints, narrative, and personas, and assigns none to these two sections. Both are therefore carried as system-level statements with a derived-editorial qualification adjacent to them in the portable body. |

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| retail | retail-banking homepage | `https://www.kebhana.com` | 2026-06-22 |
| group | financial-group homepage | `https://www.hanafn.com` | 2026-06-22 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| kebhana-live | product-surface | `https://www.kebhana.com/` | 2026-06-22 |
| hanafn-live | product-surface | `https://www.hanafn.com/` | 2026-06-22 |

### Tier 1

- https://www.kebhana.com/ (Hana Bank official homepage — live computed style extract)
- https://www.hanafn.com/ (Hana Financial Group official site — live computed style extract)

### Tier 2 (no usable record)

- getdesign.md/hana — not found
- styles.refero.design?q=hana+bank — no matching entries (non-Korean brands returned)

These Tier 2 sources are not available for this brand. getdesign.md and refero are not counted toward the KR brand-owned requirement.

### Third-party strings the source itself excludes

Recorded because the source recorded them, and excluded from evidence for the same reason the source excludes them. These are not Hana Bank strings and are not needles for copy preservation.

- `"No designs found"` — getdesign.md/hana
- Unrelated non-Korean brands returned by styles.refero.design?q=hana+bank

## Claim ledger

| claim | surface |
|---|---|
| tokens.colors.primary / primary-deep / primary-light | retail |
| tokens.colors.primary-group / surface-tint | group |
| tokens.colors.canvas / surface / ink / body / muted / muted-alt / on-primary / hairline / dark | retail |
| tokens.typography.family.primary / body | retail |
| tokens.typography.family.group | group |
| tokens.typography.heading / nav / body / footer | retail |
| tokens.typography.group-body / group-cta | group |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | retail |
| tokens.rounded.sm / md / lg / full | retail |
| tokens.shadow.card | YAML token set |
| tokens.components.button-primary / button-secondary / button-outline / card-product / card-feature-teal / card-surface / badge-teal / nav-tab | retail |
| tokens.components.button-group-cta / button-group-dark | group |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 3인 (이름·나이·도시 포함) | Deleted. Fictional archetypes. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, or cities (D2, D2a). |
| §15 `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` | Deleted. Unattributed curve. |
| §15 `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` | Deleted. Unattributed, and byte-identical to `spec/omd-v0.1.md` line 267. |
| §15 `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | Deleted. Unattributed curve. |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components. |

## Derived editorial inventory

Portable `DESIGN.md` carries 30 complete B2a qualifications. This table is 30 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope ¶1 | Two-surface split as a hard domain boundary |
| 2 | Experience Scope ¶2 | Mature / institutional / not neon / trustworthy / conservative / Toss–Kakao Pay contrast |
| 3 | Experience Scope ¶3 | Official-history narrative as context that does not supply interface tokens |
| 4 | Experience Scope ¶4 | Conservative-yet-dependable / neither flashy nor stuffy / "steady and growing" |
| 5 | Primary tasks | Selecting the four recorded labels as primary tasks |
| 6 | Audience | Group-level retail / institutional audience |
| 7 | Distinctive traits | Grouping the Key Characteristics as the distinctive layer |
| 8 | Principles | The five numbered items and their UI implications |
| 9 | Application rules | The eight Do rules and the reasons attached |
| 10 | Avoid | The seven Don't rules and the reasons inside them |
| 11 | Foundations Semantic color | Role names; trust / documented mint-family / accent / holding-company / Ink-as-warm-grey characterizations; ink/dark same-hex two-path keep |
| 12 | Foundations Spacing | Unitless steps not rewritten as a grid; the spacing base step is not a radius step; 0px 40px as generous 112–144px tab zones |
| 13 | Foundations Shape | Conservative 6px; 20px newer-UI / unitless full step as future-direction; group-reserved 27px; group-pill / badge / featured radii sit on the component not on the rounded scale |
| 14 | Foundations Elevation | Flat, border-driven hierarchy; YAML `tokens.shadow.card` kept on its own path |
| 15 | Foundations Motion | Unattributed durations, roles, and rules |
| 16 | Typography Official product-use | "No published type token" |
| 17 | Typography Declared-only | Fallback stack members are not the brand face |
| 18 | Typography License | Pretendard as upstream, not a Hana-owned brand asset |
| 19 | Typography Outside these captures | Typography beyond the two pages sits outside this contract |
| 20 | Typography Family | Fallback prohibition |
| 21 | Typography rules | Conservative sizing / NotoSans anchor / Pretendard newer layer |
| 22 | Assets favicon | Third-party favicon-service classification |
| 23 | Assets product cards | First-party catalog content; no invented decoration |
| 24 | Components how-to-read | Kind and applicability verdicts |
| 25 | State record | System-level treatments without per-control observation |
| 26 | State record close | Rows are not attached as visual treatments to destination controls |
| 27 | Layout whitespace | Accessibility-density / tint separation / teal spatial anchor |
| 28 | Layout responsive | Breakpoints stated at system level rather than measured across viewports |
| 29 | Content & Locales | Voice characterization, register reading, and tone table |
| 30 | Content & Locales close | Byte-exact Korean strings; English gloss may sit beside a line and never replaces it |

## Proof notes

- verification schema from sibling: Tier 1 live inspect 2026-06-22; conflicts: none
- components_harvested: true
- Uncaptured hover / focus-visible / per-control loading / error / success treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official history (1971 / 1991 / 2015) is narrative context, not a token source
- Hana Bank has no published first-party design system in this packet (getdesign.md/hana not found), so every derived-editorial close uses the toss-form "not Hana Bank-authored or a separately published UI specification"

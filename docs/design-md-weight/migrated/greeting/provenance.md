# Greeting provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, evidence grading, and omission record for the Core v2 migration of `web/references/greeting/DESIGN.md`. The canonical source remains that file until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | greeting |
| name | Greeting |
| display_name_kr | 그리팅 |
| country | KR |
| category | saas |
| homepage | `https://www.greetinghr.com` |
| primary_color | `#1890ff` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=greetinghr.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-11 |
| components_harvested | true |

**Logo decision.** The `logo.slug` above is a Google favicon-service URL, not a Greeting-hosted asset. The sibling verification file states that `getdesign.md / refero.design / Google favicon are explicitly NOT counted toward the KR brand-owned ≥2 requirement`. The URL is therefore kept here as the catalog's own identity field and is not promoted to a Greeting brand asset in the portable document.

**Token note, quoted verbatim from the source frontmatter:**

> primary = live CTA azure (#1890ff); dark CTA/ink (#0f0f0f, #171717). Deep navy stat band bg (#001946). Text on a zinc neutral ladder (#27272a→#71717a→#a1a1aa). Surfaces white/near-white with light-blue tints (#f2f9ff, #e4f0fc).

Every value inside that note is carried separately in the portable document: `#1890ff`, `#0f0f0f`, `#171717`, `#001946`, `#27272a`, `#71717a`, `#a1a1aa`, `#f2f9ff`, `#e4f0fc` in Foundations `Semantic color`.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-11 |
| added | 2026-06-11 |
| tokens.extracted | 2026-06-11 |
| surfaces inspected | 2026-06-11 |
| sibling verification notes | 2026-06-11 |

Conflicts unresolved: none. The source footer states `Conflicts unresolved: none`.

The source footer's producer string: `omd:add-reference CREATE — Tier 1 live inspect`.

## Sibling verification file (E2)

`web/references/greeting/.verification.md` was read and **adopted as evidence grading only**. Confirmed with `find web/references/greeting -type f`, because a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact.

**Method, quoted from the sibling:** playwright `getComputedStyle` (live DOM) — global playwright (chromium, headless), desktop UA, viewport 1440×900, goto with `waitUntil:'load'` + 6s settle, then `getComputedStyle` on body, h1/h2/h3, anchors/buttons, inputs, and full-DOM background/text color frequency scan across homepage and /pricing.

The viewport figure `1440×900` is a sibling method detail. It is not a portable measurement of a band, a canvas, or a breakpoint. The portable Desktop row keeps the source body's `1024-1440px` range.

### Sibling-only values — held here, absent from the portable body

| Value | Sibling record | Why it stays here |
|---|---|---|
| Dark CTA padding `14px 20px 14px 25px` | raw sample for "도입 문의하기" | The legacy YAML and §4 record that control at `14px 25px`. The body keeps the source figure. This is a source↔sibling conflict; neither value was chosen over the other as a new token. |
| Numeral `174.851px` / `-8.74254px` | raw sample for "10,000+" | The legacy body records `~175px` / `-8.74px`. The body keeps the source form. |
| Eyebrow H1 color `#3f3f46` | raw sample for the 16px eyebrow H1 "국내 1위 채용 관리 솔루션" | The legacy type-role table does not assign a color to Label / Eyebrow. The sibling color is not promoted as that role's token. |
| Band headline white on dark | raw sample: 36px / 600 / −0.36px / `rgb(255,255,255)` on the dark band for "국내 1위 채용 관리 솔루션" | The legacy Section role does not name a white-on-navy color. Held here. |
| Quote color `#d4d4d8` on dark | raw sample for the testimonial | The legacy Quote role does not name a color. Held here. |
| Frequency counts | bg `rgb(255,255,255)` ×45, `rgb(244,244,245)` ×15, `rgb(0,25,70)` ×12, `#fafafa` ×10, `#fcfcfc` ×7, `#f2f9ff` ×3, `#1890ff` ×3, `#0f0f0f` ×2, `#e4f0fc` ×2, `#4ba63d` ×1, `#0a58a1` ×1; text `rgb(0,0,0)` ×880 (sibling: browser-default anchor base), `#0f0f0f` ×54, `#a1a1aa` ×53, `#71717a` ×42, `#27272a` ×41, `#171717` ×24, `#3f3f46` ×12, `#1890ff` ×6, `#d4d4d8` ×5, `#2c93f2` ×1 | Measurement detail, not contract. The portable body carries the roles, not these counts. The `rgb(0,0,0)` ×880 rank is not promoted as a text token; the source Don't list forbids `#000000` for body text. |
| Viewport `1440×900` | method | Capture context, not a portable width token. |

### Sibling-only published strings — held here byte-exact (A5)

A5 covers strings the verification sibling names as measured copy, so these are kept as bytes rather than paraphrased. The portable body carries the labels the legacy body itself carries. These lines are mentions of disposition, not portable use.

- `원하는 인재를 빠르게 채용하고 싶은 기업에 그리팅 ATS를 추천합니다.` — testimonial quote sample
- `그리팅 블로그 | 채용 관리를 넘어, 채용 성공으로` — blog title on `https://blog.greetinghr.com`

`document.title` "그리팅 | 채용 성공을 위한, 국내 1위 채용 관리 솔루션" is not sibling-only: the source HTML comment records it. It is dual: portable Content & Locales + this ledger's raw-sample transcription.

### Third-party strings the source itself excludes

Recorded because the source recorded them, and excluded from evidence for the same reason the source excludes them. These are not Greeting strings and are not needles for copy preservation.

- `"No designs found for 'greeting'"` — getdesign.md
- Workable (Forest Teal `#004038`, Proxima Nova) — refero.design first verified result, a different recruiting platform

## Raw samples (from the sibling)

- document.title: "그리팅 | 채용 성공을 위한, 국내 1위 채용 관리 솔루션"
- hero accent "채용 성공": `font-family: "Pretendard SemiBold"`; `font-size: 60px`; `font-weight: 600`; `line-height: 72px`; `letter-spacing: -0.6px`; `color: rgb(24, 144, 255)` (#1890ff)
- section headline "성과를 만드는 인재, 전략에 구애받지 말고 확보하세요": `font-size: 48px`; `weight: 600`; `line-height: 62.4px`; `letter-spacing: -0.48px`; `color: rgb(23, 23, 23)` (#171717); Pretendard SemiBold
- band headline "국내 1위 채용 관리 솔루션": `font-size: 36px`; `600`; `-0.36px`; `color: rgb(255,255,255)` on dark band; Pretendard SemiBold
- feature H3 "지원자를 사로잡는 첫인상, 채용 홈페이지로부터": `font-size: 28px`; `600`; `line-height: 39.2px`; `letter-spacing: -0.56px`; `color: rgb(39, 39, 42)` (#27272a)
- card title "채용 홈페이지 빌더": `font-size: 20px`; `600`; `line-height: 30px`; `-0.4px`; `color: rgb(39, 39, 42)` (#27272a)
- eyebrow H1 "국내 1위 채용 관리 솔루션": `font-size: 16px`; `-0.16px`; `color: rgb(63, 63, 70)` (#3f3f46)
- big numeral "10,000+": `font-family: Poppins`; `font-size: 174.851px`; `letter-spacing: -8.74254px`; `color: rgb(255,255,255)` (white on navy)
- header CTA "도입 문의": `background-color: rgb(24, 144, 255)` (#1890ff); `border-radius: 4px`; `padding: 5px 8px 5px 12px`; height 36px
- dark CTA "도입 문의하기": `background-color: rgb(15, 15, 15)` (#0f0f0f); `border-radius: 4px`; `padding: 14px 20px 14px 25px`; height 50px (also "견적 문의하기" at rgb(23,23,23) #171717)
- white secondary CTA "무료 체험하기" / "서비스 소개서 다운로드": `background-color: rgb(255,255,255)`; `border-radius: 4px`; `padding: 14px 25px`; height 50px
- eyebrow pill "국내 1위 채용 관리 솔루션": `background-color: rgb(255,255,255)`; `border-radius: 50px`; `padding: 8px 20px`; height 32px
- pricing feature tag "소규모 팀 추천" / "커뮤니케이션": `background-color: rgb(255,255,255)`; `border-radius: 6px`; `padding: 8px 10px`; height 30px
- product feature card: `background-color: rgb(250, 250, 250)` (#fafafa); `border-radius: 16px`; `padding: 16px`
- pricing plan card: `border-radius: 30px`; `box-shadow: rgba(255,255,255,0.12) 0px 0px 2px 0px inset`; on navy band
- nav link "제품/솔루션/가격": Pretendard SemiBold; `font-size: 12px`-rendered wrapper; `border-radius: 4px`; `padding: 18px 12px`; active links color rgb(24,144,255) #1890ff
- box-shadow: `none` across nav, hero, and feature cards; only inset rim on pricing cards
- testimonial quote "원하는 인재를 빠르게 채용하고 싶은 기업에 그리팅 ATS를 추천합니다.": `font-size: 24px`; `600`; `line-height: 36px`; `-0.24px`; `color: rgb(212,212,216)` (#d4d4d8) on dark
- footnote "*2026년 1월 그리팅 이용 고객사": `color: rgba(162,162,171,0.72)` (~#a1a1aa); Pretendard Regular

## Evidence class of the legacy sections

The source's own closing comment partitions its file, and this migration follows that partition rather than treating the whole file as one evidence class.

| Legacy range | Source's stated attribution |
|---|---|
| §1–§9 (token-level claims) | Tier 1 live inspection, 2026-06-11, via playwright `getComputedStyle` on `https://www.greetinghr.com` and `https://www.greetinghr.com/pricing` |
| §10 Voice samples | verbatim from the live homepage and blog title |
| §11 Brand narrative | Greeting (그리팅) is operated by 두들린 (Doodlin) — confirmed via doodlin.co.kr (operator careers page lists [그리팅] roles). "10,000+" and "국내 1위" are from the homepage. Specifics beyond these surfaces are general public knowledge, not directly quoted from a verified company statement in that turn. |
| §13 Personas | fictional archetypes informed by publicly observable Greeting user segments (Korean HR/TA teams). Names are illustrative; they do not refer to real people. |
| §14 States, §15 Motion | **no attribution given.** The closing comment assigns a source to §1–9, §10, §11, and §13 and assigns none to these two sections. Both are therefore carried as system-level statements with a derived-editorial qualification adjacent to them in the portable body. |
| Interpretive claims | the comment names "outcome over administration" and "light-to-dark crescendo" as editorial readings connecting Greeting's observed design to its positioning, not directly sourced Greeting statements. |

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing homepage | `https://www.greetinghr.com` | 2026-06-11 |
| pricing | pricing surface | `https://www.greetinghr.com/pricing` | 2026-06-11 |
| blog | official blog (named; not token-inspected) | `https://blog.greetinghr.com` | named 2026-06-11 |
| operator | 두들린 / Doodlin operator (named; operator relationship) | `https://www.doodlin.co.kr` | named 2026-06-11 |

## Sources

### Tier 1

- `https://www.greetinghr.com` (homepage, live computed style)
- `https://www.greetinghr.com/pricing` (pricing surface, live computed style)
- `https://blog.greetinghr.com` (Greeting official blog — brand-owned)
- `https://www.doodlin.co.kr` (두들린 / Doodlin — operator of Greeting, brand-owned)

### Tier 2 (no usable record)

- getdesign.md/greeting — **NO DATA** — "No designs found for 'greeting'"
- styles.refero.design ?q=greeting / ?q=greetinghr — **No Greeting match.** Search returned generic ATS/HR styles; first verified result was Workable, not Greeting.

## Claim ledger

Claims use YAML anchors from the source. `home` = homepage computed-style / 2026-06-11; `pricing` = /pricing computed-style / 2026-06-11.

| claim | surface |
|---|---|
| tokens.colors.primary / primary-hover / primary-deep | home |
| tokens.colors.ink / ink-soft | home |
| tokens.colors.heading / body / muted / faint / disabled | home |
| tokens.colors.navy | home, pricing |
| tokens.colors.canvas / surface / surface-alt / surface-zinc / hairline | home |
| tokens.colors.tint-blue / tint-blue-alt | home |
| tokens.colors.success | home |
| tokens.colors.on-primary | home |
| tokens.typography.family.display / body / numeral | home |
| tokens.typography.hero-accent / display / section / feature / quote / card-title / label / numeral | home |
| tokens.spacing.xs / sm / base / md / lg / xl / xxl / section | home |
| tokens.rounded.sm / md / lg / xl / pill | home, pricing |
| tokens.shadow.none | home |
| tokens.shadow.card-inset | pricing |
| tokens.components.button-primary / button-dark / button-white | home |
| tokens.components.badge-pill | home |
| tokens.components.badge-tag | pricing |
| tokens.components.card-product / card-zinc | home |
| tokens.components.card-pricing | pricing |
| tokens.components.nav-link | home |
| 9 state rows | §14 | Components `State record` | no attribution given by the source |
| Breakpoints 640 / 1024 / 1440px | §8 | Layout & Platforms | no attribution given by the source |
| Voice samples ×3 | §10 | Content & Locales | home |
| Brand narrative facts | §11 | Experience `Scope` | home, operator |

## Derived editorial inventory

Twenty-six sentences in the portable body carry the full B2a qualification — "a derived editorial implementation inference from the verified surfaces; … not Greeting-authored or a separately published UI specification". They are indexed here so a reviewer can confirm each one sits adjacent to the claim it qualifies rather than only in this sidecar. Measured on the output: 26 occurrences of `derived editorial implementation inference` in `DESIGN.md`. The two occurrences of that clause in this file are the quotation in this paragraph and the count sentence that names it; neither is a portable qualification.

Greeting has no published first-party design system (getdesign.md no data; refero no match), so the toss-form close is used as written.

| # | Portable location | What is qualified |
|---:|---|---|
| 1 | Experience `Scope`, paragraph 1 | Keeping values attached to the surface that established them; treating blog and operator pages as named sources that do not supply interface tokens; the refusal to treat the two token-inspected marketing pages as a proxy for the ATS product UI the homepage sells |
| 2 | Experience `Scope`, paragraph 2 | Confident enterprise-grade B2B, zinc as technical temperature, azure as "the action / the promise," engineered-and-trustworthy, corporate restraint, white-to-navy rhythm as the page signature |
| 3 | Experience `Scope`, paragraph 4 | Refusal of heavy dated chrome and gimmicky over-coloring; embrace of white canvas, zinc ladder, disciplined azure, navy "by the numbers" band |
| 4 | Experience `Scope`, paragraph 3 | Classifying the official-history narrative as context that does not by itself supply interface tokens |
| 5 | Experience `Primary tasks` | The selection of these four as the primary tasks |
| 6 | Experience `Audience` | Reading the archetype-informing groups as this product's audience |
| 7 | Experience `Distinctive traits` | Reserved azure, held-back dark persuasion, zinc temperature, corporate-not-pill geometry, and the white-to-navy crescendo |
| 8 | Experience `Principles` | All five principles and their UI implications |
| 9 | Experience `Application rules` | The ten Do items and their attached reasons |
| 10 | Experience `Avoid` | The eight Don't items and their attached reasons |
| 11 | Foundations `Semantic color` | Role naming, plus the single-action / held-back persuasion / zinc-ladder / dramatic proof-band / hairline-as-primary-separator readings |
| 12 | Foundations `Spacing` | Reading ≈80px band rhythm as breathing room over density |
| 13 | Foundations `Shape` | Reading 4px as corporate-not-pill and 50px as reserved for eyebrow pills |
| 14 | Foundations `Elevation` | The near-shadowless / clean-fast-modern reading |
| 15 | Foundations `Motion` | The entire motion contract — durations, easing roles, and motion rules — as a section the source leaves unattributed |
| 16 | Typography & Assets `Font evidence`, Official product-use | The "no published type token" reading |
| 17 | Typography & Assets `Font evidence`, License | Pretendard as an upstream face, not a Greeting-owned brand asset |
| 18 | Typography & Assets `Family` | The fallback prohibition — never present a system substitute as the brand face |
| 19 | Typography & Assets `Typography rules` | The four typography principles as readings of the measured metrics |
| 20 | Typography & Assets `Assets` | Treating product screenshots as first-party imagery, and the instruction not to replace them with invented brand-color decoration |
| 21 | Components `How to read this section` | Every kind verdict, every applicability verdict, and the reason given for either |
| 22 | Components `State record` | The nine state treatments as an unattributed system-level statement |
| 23 | Layout & Platforms, paragraph after the layout bullets | Focal-anchor, breathing-room, flat-segmentation, and light-to-dark crescendo readings |
| 24 | Layout & Platforms, responsive paragraph | The breakpoints, collapsing strategy, image behavior, and the "comfortably tappable" reading of recorded target sizes, as system-level statements rather than cross-viewport measurements |
| 25 | Content & Locales, paragraph 1 | The voice characterization, the register reading, and the tone table |
| 26 | Content & Locales, Forbidden register | "Leans on proof rather than hype" as a characterization of the register |

### Evidence-class boundary statements — related but not the same clause

These sentences separate one evidence domain from another. They are not B2a qualifications and are listed separately so the count above is not read as covering them.

| Portable location | Boundary drawn |
|---|---|
| Foundations `Spacing` / `Shape` | `tokens.spacing.md: 16` and `tokens.rounded.lg: 16` are kept on separate paths. |
| Foundations `Motion`, easing paragraph | The curve values are omitted because they are not traceable to Greeting evidence, while the roles and uses are kept. |
| Foundations `Motion` and Governance | The B3 promotion condition: five evidence kinds plus a per-component computed-observation gate are present in both places. The partial-confirmation exclusion sentence is in Foundations `Motion` only, not in Governance. |
| Typography & Assets `Font evidence` | Official product-use / live computed / official distributed / declared-only / license / outside-these-captures are kept as separate classes. |
| Typography & Assets `Assets` | The catalog logo entry is a third-party favicon service, not a Greeting-hosted asset, and is held in this ledger rather than presented as a brand asset. |
| Components Product Feature Card, Zinc List Surface, Pricing Plan Card | Neither an interactive nor a non-interactive kind is established, so kind and applicability map are both withheld (C4). |
| Components Eyebrow Pill and Feature Tag | Kind is `non-interactive` because each record is a label, not a control. |
| Components `State record` close | The nine rows describe ATS product and form treatments; they are not attached as visual treatments to the marketing destination controls. |
| Layout & Platforms, image-behavior close | The Desktop row keeps the source body's `1024-1440px` range as declared width. |
| Content & Locales, closing line | The Korean strings reproduce byte-exact rather than translated or re-cased. |

## Omission ledger

| Item | Disposition | Why |
|---|---|---|
| Three `cubic-bezier` curves from §15 | Omitted from the portable body; mentioned here as a disposition, not as a promoted token | No observation stands behind them. The source records a Tier 1 live inspect of color, type, geometry, and shadow and supplies no transition, animation, or easing sample. `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` is byte-identical to the example table at `spec/omd-v0.1.md` line 267. The other two (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`) are likewise unattributed. Durations 120ms / 200ms / 320ms and the reduced-motion rule are kept. |
| §9 Agent Prompt Guide | Deleted | Tool-facing copy-paste prompts and restatements. No receiving slot and no delegation. Every value §9 names is already in Foundations, Typography, or Components. |
| §13 Personas — 3 entries | Deleted | The source's own italic line labels them fictional archetypes, not individual people. Not promoted to Audience or to `primary-tasks`, and not re-hosted here as names, ages, cities, or biographies (D2, D2a). This row names the section, the headcount, and the dropped field kinds. It does not restate the identifiers. |
| YAML `logo.slug` Google favicon URL | Held in Identity above; not a portable brand asset | Third-party favicon service; sibling excludes it from the KR brand-owned count. |
| Sibling-only measurements listed above | Held in the sibling-only table | Not used to establish a portable body fact. |

## YAML token-path inventory (source keys)

All `tokens.*` keys from the source frontmatter, for key-path verification. Portable destinations are section names, not a claim that a number found anywhere is the same key.

| Source path | Portable destination |
|---|---|
| tokens.colors.primary `#1890ff` | Foundations Semantic color + Azure Inquiry CTA |
| tokens.colors.primary-hover `#2c93f2` | Foundations Semantic color + Azure Inquiry CTA hover |
| tokens.colors.primary-deep `#0a58a1` | Foundations Semantic color |
| tokens.colors.ink `#0f0f0f` | Foundations Semantic color + Dark CTA |
| tokens.colors.ink-soft `#171717` | Foundations Semantic color + White Secondary CTA + Dark CTA hover + nav text |
| tokens.colors.heading `#27272a` | Foundations Semantic color + cards |
| tokens.colors.body `#3f3f46` | Foundations Semantic color |
| tokens.colors.muted `#71717a` | Foundations Semantic color |
| tokens.colors.faint `#a1a1aa` | Foundations Semantic color |
| tokens.colors.hairline `#e4e4e7` | Foundations Semantic color + White Secondary CTA border + Feature Tag border |
| tokens.colors.disabled `#d4d4d8` | Foundations Semantic color + State record Disabled |
| tokens.colors.navy `#001946` | Foundations Semantic color + Pricing Plan Card |
| tokens.colors.canvas `#ffffff` | Foundations Semantic color |
| tokens.colors.surface `#fcfcfc` | Foundations Semantic color |
| tokens.colors.surface-alt `#fafafa` | Foundations Semantic color + Product Feature Card |
| tokens.colors.surface-zinc `#f4f4f5` | Foundations Semantic color + Zinc List Surface |
| tokens.colors.tint-blue `#f2f9ff` | Foundations Semantic color |
| tokens.colors.tint-blue-alt `#e4f0fc` | Foundations Semantic color |
| tokens.colors.success `#4ba63d` | Foundations Semantic color + State record Success |
| tokens.colors.on-primary `#ffffff` | Foundations Semantic color (text on azure) |
| tokens.typography.family.display / body / numeral | Typography Family |
| tokens.typography.hero-accent 60 / 600 / 1.20 / −0.6 | Type roles Hero Accent |
| tokens.typography.display 48 / 600 / 1.30 / −0.48 | Type roles Display |
| tokens.typography.section 36 / 600 / 1.20 / −0.36 | Type roles Section |
| tokens.typography.feature 28 / 600 / 1.40 / −0.56 | Type roles Feature |
| tokens.typography.quote 24 / 600 / 1.50 / −0.24 | Type roles Quote |
| tokens.typography.card-title 20 / 600 / 1.50 / −0.4 | Type roles Card Title |
| tokens.typography.label 16 / 600 / 1.00 / −0.16 | Type roles Label / Eyebrow |
| tokens.typography.numeral 175 / 400 / 1.00 / −8.74 | Type roles Big Numeral |
| tokens.spacing.xs 4 / sm 8 / base 12 / md 16 / lg 20 / xl 25 / xxl 48 / section 80 | Foundations Spacing (path kept separate from rounded) |
| tokens.rounded.sm 4 / md 8 / lg 16 / xl 30 / pill 50 | Foundations Shape (path kept separate from spacing) |
| tokens.shadow.none `none` | Foundations Elevation |
| tokens.shadow.card-inset `rgba(255,255,255,0.12) 0px 0px 2px 0px inset` | Foundations Elevation + Pricing Plan Card |
| tokens.components.button-primary type button | Azure Inquiry CTA |
| tokens.components.button-dark type button | Dark CTA |
| tokens.components.button-white type button | White Secondary CTA |
| tokens.components.badge-pill type badge | Eyebrow Pill |
| tokens.components.badge-tag type badge | Feature Tag |
| tokens.components.card-product type card | Product Feature Card |
| tokens.components.card-zinc type card | Zinc List Surface |
| tokens.components.card-pricing type card | Pricing Plan Card |
| tokens.components.nav-link type tab | Top Nav Item |

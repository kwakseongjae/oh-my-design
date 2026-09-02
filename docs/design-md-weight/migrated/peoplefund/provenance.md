# PeopleFund provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/peoplefund/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | peoplefund |
| name | PeopleFund |
| display_name_kr | 피플펀드 |
| country | KR |
| category | fintech |
| homepage | `https://peoplefund.co.kr/` |
| primary_color | `#ffc32d` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=peoplefund.co.kr&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-07-02 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and the inspected redirect surface in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations Brand Amber / status badge in `DESIGN.md`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. That is an identity pointer, not a PeopleFund-hosted brand file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-02 |
| tokens.extracted | 2026-07-02 |
| sibling inspected | 2026-07-02 |

The source footer records the verification verbatim as **Verified:** 2026-07-02. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved, as the source footer states: none.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | storefront | `https://peoplefund.co.kr/` → `https://www.cple.co.kr/` | 2026-07-02 |
| invest | product-listing | `https://www.cple.co.kr/product/invest` | 2026-07-02 |

### Tier 1 (as listed in the source footer)

- https://peoplefund.co.kr/ (redirects to https://www.cple.co.kr/ — homepage live computed style)
- https://tech.peoplefund.co.kr/ (PeopleFund engineering tech blog)

The HTML comment also names https://www.cple.co.kr/product/invest and blog.pfct.co.kr as first-party inspect/metadata sources.

### Tier 2 (no usable record)

- getdesign.md/peoplefund — not found
- styles.refero.design/?q=peoplefund — not found (KR brand, typical Tier-2 gap)

Those directory findings describe this catalog's coverage. They stay here. They are lookup queries, not portable copy.

### Narrative (not interface tokens)

- 2015 founding, CEO 김대윤, 크플 (Cple) / PFCT rebrand, 2019 국무총리 표창, Bloomberg, CNBC, IFLR APAC Awards, CLSA Capital Partners — source §11, kept in Experience Scope as narrative context
- blog.pfct.co.kr Organization / 피플로그 strings — source HTML comment, kept in Content & Locales as brand-owned first-party copy

## Token note

The YAML `tokens.note` value, quoted in full:

> primary = live brand amber (#ffc32d) on status badges (NOTICE/HOT/NEW/마감임박); confirmed via Tailwind class bg-[#FFC32D] and bgFreq ×13. Canvas white (#ffffff). Body bg soft grey (#f6f6f6). Secondary charcoal (#2e303b) for nav/UI text. Footer dark blue-grey (#263238). Site has rebranded from PeopleFund to 크플 (Cple) at cple.co.kr; peoplefund.co.kr redirects there.

`components_harvested` is `true`. Nine component records sit in the token set: `button-cta`, `button-nav-outline`, `button-dark-pill`, `badge-status`, `badge-progress`, `card-product`, `card-feature`, `nav-link`, `input-default`.

## Sibling file

`web/references/peoplefund/.verification.md` exists and was read in full. It is adopted as **evidence grade only**: no value in it was promoted into the portable body that the legacy `DESIGN.md` did not already establish.

- **Inspected:** 2026-07-02
- **Method (verbatim):** playwright getComputedStyle (live DOM) — global playwright (chromium, headless), domcontentloaded + 3500ms waitTimeout, modal/dialog dismiss pass, then `getComputedStyle` on body, h2/h3/h4, nav/header, buttons, and full-DOM bg/text color frequency scan. Also inspected `cple.co.kr/product/invest` (the P2P invest product listing page, reached via `peoplefund.co.kr/product/invest` redirect).

Values that exist in the sibling and not in the source `DESIGN.md` stay in this ledger. They are not portable tokens. Mention here is disposition of the sibling, not use as a portable value.

Sibling-only observations recorded here:

- CTA class fragment `typo-h6-aos flex h-[46px] w-[180px] items-center bg-white` and width `180px`. Source YAML records height `46px` and padding `0px`; it does not record width 180px.
- Phone-pill padding `17px 32.24px`. Source YAML records `17px 32px`.
- Invest-page scrolled nav `rgba(255, 255, 255, 0.96)`. Source records nav background `#ffffff`.
- bgFreq extras `rgb(248,248,248)` ×2. Source does not name `#f8f8f8`.
- Invest-page secondary blue `rgb(85, 106, 196)` (`#556ac4`). Source does not name that hex.
- Combined computed family string `Pretendard, Lato, "Noto Sans KR", sans-serif` as one `font-family`. Source YAML splits `sans: Pretendard` and `fallback: Lato, "Noto Sans KR", sans-serif`.
- Playwright waitTimeout 3500ms, modal/dialog dismiss pass, HEAD 200 confirmations, getdesign copy `No designs found for 'peoplefund.'`

## Byte-form notes

- YAML color keys are lowercase (`#ffc32d`). Source §2 roles use the same lowercase. Tailwind class writes `#FFC32D`. The portable body keeps both writings on Brand Amber.
- `tokens.colors.ink` and `tokens.colors.on-primary` are the same hex `#000000` on two keys. Both stay named.
- `tokens.colors.surface` `#f6f6f6` and `tokens.colors.surface-alt` `#f5f5f5` stay unmerged.
- YAML line heights stay unitless ratios (`1.31`, `1.39`, `1.37`, `1.50`, `1.00`). §3 px spellings (`38px`, `32px`, `26px`, `24px`) stay beside them (A1a).
- YAML tracking `-0.4` / `-0.3` stays beside §3 `-0.4px` / `-0.3px`.
- `tokens.spacing.base: 20` is not nav-outline padding `0px 20px` and not card horizontal padding 20px. `tokens.spacing.lg: 32` is not dark-pill `17px 32px`. `tokens.spacing.md: 12` is not the 12px badge font. `tokens.rounded.md: 16` is not body size 16 and not a card radius. `tokens.rounded.full: 9999` is not written as a component. Card `8px` and progress-badge `4px` are component radii, not YAML rounded steps.
- Dark-pill YAML `rgba(0,0,0,0.2)` stays beside §4 `rgba(0, 0, 0, 0.2)`.
- YAML `type` is attached only to the nine records that have that key. `card-product`, `card-feature`, `badge-status`, and `badge-progress` keep `Primitive type` and omit kind + applicability map (C4).
- `#ffffff` is `tokens.colors.canvas` (canvas, card surfaces, nav background, button backgrounds) and, on other paths, Progress Badge `fg` and dark-section H3 text. Those are separate key paths; they are not one canvas token reused as badge text.
- `#000000` is `tokens.colors.ink` / `on-primary` and also the dark-section fill, kept as a layout-surface use rather than a new color key.

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13 personas, 3 slots (names, ages, cities, motivations, and affiliation classifications) | Deleted. Not promoted as individuals, tasks, or Audience groups. Affiliation classification and motivation are not re-hosted. Portable Audience uses only the source §13 header wording for publicly observable user segments. |
| Unsourced easing curves | Omitted at the curve-value boundary: `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` (catalog-template match), `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`. Durations 100ms / 200ms / 300ms, easing token names and their source Use pairings as name+use rows, the fade-at-`motion-standard / ease-enter` use claim, the no-animate-badge rule, no-spring, and the reduced-motion contract stay in Foundations. |
| Source §9 Agent Prompt Guide remaining after color/type/component constraints were moved | Deleted as tool-facing prompt. Unique constraints (un-styled white CTA on dark bg sections; footer always `#263238`) already live in Experience. |
| Sibling-only computed values listed under Sibling file | Ledger only |

## Claim ledger

| Claim | Surface |
|---|---|
| `tokens.colors.primary` `#ffc32d` | home (status badges; Tailwind `bg-[#FFC32D]`; bgFreq ×13) |
| `tokens.colors.canvas` `#ffffff` | home |
| `tokens.colors.surface` `#f6f6f6` | home |
| `tokens.colors.surface-alt` `#f5f5f5` | invest listing |
| `tokens.colors.ink` / `on-primary` `#000000` | home |
| `tokens.colors.ink-secondary` `#2e2e2e` | legacy areas |
| `tokens.colors.charcoal` `#2e303b` | home nav/UI |
| `tokens.colors.muted` `#6a6a6a` | invest listing / footer text |
| `tokens.colors.muted-light` `#90a4af` | placeholders |
| `tokens.colors.hairline` `#d0d8dc` | home outline / inputs |
| `tokens.colors.footer-bg` `#263238` | home footer |
| `tokens.colors.error` `#ff4d4f` | home (fgFreq) |
| `tokens.colors.success` `#37c94d` | home (fgFreq) |
| `tokens.colors.accent-blue` `#2054ae` | invest progress |
| `tokens.typography.family.sans` Pretendard | home + invest |
| `tokens.typography.family.fallback` Lato, "Noto Sans KR", sans-serif | YAML fallback |
| `tokens.typography.section` through `button-nav` (size, weight, lineHeight, tracking, use) | home live H2/H3/H4 + YAML |
| `tokens.spacing.xs` through `section` | YAML + §5 scale |
| `tokens.rounded.none` / `sm` / `md` / `pill` / `full` | YAML; component radii sit on components |
| `tokens.shadow.none` `none` | live DOM `box-shadow: none` |
| `tokens.components.button-cta` through `input-default` (type and recorded fields) | home / invest |
| Published strings 피플펀드 / 크플 / 상품 보러가기 / 투자회원가입 / 로그인 / NOTICE / HOT / NEW / 마감임박 | source §1 / §4 / §10 / HTML comment |
| 2015 founding / 김대윤 / 크플 (Cple) 2024-2025 / PFCT / 2019 국무총리 표창 / refuse-and-embrace closing pair | source §11 narrative |

## Capture selectors

The source records no collector selectors. Component geometry is live computed-style prose, not a `data-omd-capture` harvest.

## Proof notes

- verification_v2 is not present on the source DESIGN.md. The sibling records playwright getComputedStyle on 2026-07-02. Conflicts: none.
- `components_harvested: true`; nine component records in the source token set.
- The source records no `focus-visible` string. Uncaptured hover, pressed, and focus-visible treatments are omitted as values; they are not turned into `not-applicable` for that reason. Applicability follows control role. State coverage is not claimed complete.
- PeopleFund has no published first-party UI specification in the source. Derived-editorial qualifications therefore close with the toss-form example: not PeopleFund-authored or a separately published UI specification (rulebook v12 B2a 전제 주석).
- 2015 founding, CEO 김대윤, the P2P marketplace model, the 크플 (Cple) / 크라우드펀딩 플랫폼 rebrand in 2024-2025, PFCT, the 2019 국무총리 표창, Bloomberg, CNBC, IFLR APAC Awards, CLSA Capital Partners, and the source §11 closing refuse-and-embrace pair stay in Experience Scope as narrative context, not as interface tokens.

## §9 deletion check

§9 Agent Prompt Guide was deleted as tool-facing restatement. Each unique brand constraint it names was checked against the portable body before deletion (A2, A3):

| §9 item | Portable landing |
|---|---|
| Quick Color Reference hexes | Foundations Semantic color (`DESIGN.md`) |
| Hero 29px Pretendard SemiBold -0.4px, white cards on `#f6f6f6`, 8px radius, amber badge 3px 6px 12px 600, CTA 0px / 15px 600 / 46px | Experience + Typography + Components |
| Product card 19px 600 -0.3px, metadata 16px 400 `#6a6a6a`, progress `#2054ae` | Components Product Card + Type roles + Semantic color |
| Top nav 80px, 16px 500 `#2e303b`, outline 10px / 50px / `#d0d8dc`, 투자회원가입, 로그인 | Components Nav Link + Nav Action Outline |
| Dark hero `#000000`, H3 23px 600 -0.3px white, pill `rgba(0,0,0,0.2)` / 30px / 58px | Layout + Components Dark Pill |
| CTA 0px radius — un-styled white on dark bg sections | Experience Application rules |
| Footer always `#263238` | Experience Avoid |
| Amber urgency-only; no shadows; charcoal secondary; negative tracking | Experience Application rules + Foundations |

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Two inspected routes as this contract's token surfaces; tech blog and blog.pfct.co.kr as named first-party sources that do not supply computed interface tokens; token note kept as written; every value attached to the surface that established it |
| Experience Scope `:11` | Characterizations (confident, minimal financial product; directness and legibility over refinement; information-dense, data-board feel; surgical accent; trusts data density over decoration) as source readings, not a published UI specification; hex values, Pretendard, 29px heading ceiling, badge labels, no-shadow observation, and the source sentence `a product 95% funded, a NOTICE, a HOT ranking` beside them are the source's own |
| Experience Scope `:13` | Founding-and-rebrand narrative (2015 / 김대윤 / P2P marketplace / founding thesis / 크플 (Cple) / 2024-2025 / PFCT / 2019 국무총리 표창 / Bloomberg / CNBC / IFLR APAC Awards / CLSA Capital Partners / homepage social-proof sentence / refuse-and-embrace closing pair) as brand context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the four primary tasks from captured surfaces and controls; not from the source's persona section |
| Audience `:29` | Dropping archetype biographies rather than promoting them; carrying no name, motivation, or affiliation classification; using only the source wordings Korean retail investors and property-secured borrowers |
| Distinctive traits `:33` | Classifying the list as a restatement of Key Characteristics, and the groupings and readings inside it |
| Principles `:47` | Five items; every *UI implication* as the source's own editorial reading |
| Application rules `:57` | Seven Do rules and the reasons attached to them |
| Application rules `:67` | Keeping the Agent Prompt Guide unique constraint (un-styled white CTA on dark bg sections) on this page rather than as a tool prompt |
| Avoid `:71` | Seven Don'ts and the reasons inside them |
| Avoid `:81` | Keeping the Agent Prompt Guide unique prohibition (footer always `#263238`) here rather than as a tool prompt |
| Semantic color `:89` | Pairing each hex to its token-set path; YAML lowercase beside Tailwind `#FFC32D`; `tokens.colors.ink` unmerged from `tokens.colors.on-primary`; `#f6f6f6` unmerged from `#f5f5f5`; row characterizations as the same derived class |
| Spacing `:120` | Seven YAML spacing keys unmerged from badge padding, nav padding, card padding, dark-pill padding, and the 48–64px section gap |
| Shape `:134` | Five rounded keys as YAML steps, not a universal radius; card `8px` and progress-badge `4px` kept on those components; `full: 9999` unmerged |
| Elevation `:144` | Bank-software-heaviness / faster-on-mobile reading of the flat stack as derived; live `box-shadow: none` and tint/hairline observations beside it are the source's own |
| Motion `:166` | Omitting three unsourced curves; keeping three duration rows as duration tokens; keeping three easing Use pairings as name+use rows; keeping the fade-at-`motion-standard / ease-enter` use claim as a use claim that does not restore a curve; keeping no-animate-badge and no-spring; holding the five-kind per-component promotion gate |
| Font evidence `:176` | Evidence-class sorting; live Pretendard on every text level; YAML fallback stack not the live face |
| Family `:188` | Fallback-never-substitute reading; Lato / "Noto Sans KR" not presented as Pretendard |
| Type roles `:192` | Keeping YAML line-height ratios and §3 px/rem spellings; YAML tracking beside `-0.4px` / `-0.3px`; YAML `use` verbatim beside source §3 Notes; refusing to rewrite a ratio as a fixed px |
| Type roles `:204` | Reading type sizes as the roles named beside them rather than as spacing or radius numerals |
| Type roles `:206` | Four typography principles and the Finda/Toss comparison as implementation principles rather than a separately published type spec |
| Assets `:210` | Google s2 favicon as a catalog identity pointer rather than as a PeopleFund-hosted brand file |
| Capture record `:232` | Applicability procedure; every interactive-kind and applicability verdict and the reason for either; YAML `Primitive type` only when the token set records that type; not a complete state-coverage claim |
| Primary CTA `:246` | 0px / 46px / 15px as this control's geometry rather than a spacing or rounded step |
| Nav Action Outline `:271` | 10px / `0px 20px` / 16px as this control's geometry rather than `tokens.spacing.base: 20` or `tokens.rounded.md: 16` |
| Dark Pill `:296` | 30px / `17px 32px` as this control's geometry rather than `tokens.spacing.lg: 32` |
| Default Input `:319` | 10px / 16px as this field's geometry rather than a rounded step |
| Product Card `:340` | `8px` as this card's radius rather than a YAML rounded step |
| Feature Card `:352` | `8px` as this card's radius rather than a YAML rounded step |
| Status Badge `:365` | `3px 6px` / 12px as this badge's geometry rather than `tokens.spacing.xs` / `sm` / `md` |
| Progress Badge `:378` | `4px` as this badge's radius rather than a YAML rounded step or the `~4px` spacing base unit |
| Nav Link `:389` | 80px header and 16px font as this nav's geometry rather than a rounded step |
| Layout `:404` | Source layout list as the contract for the inspected homepage and invest listing; 20px card padding as a second writing off `tokens.spacing.base: 20`; `#000000` dark-section fill as a layout-surface use rather than a new color key |
| Layout `:406` | Three whitespace-philosophy sentences as layout decision rules rather than a separately published layout spec |
| Content `:423` | Calling the register direct, data-forward, and quietly ambitious; refusing to treat it as a separately published microcopy guide |
| Named gaps `:480` | List as unnamed values rather than as coverage of domains the source never named |

Portable `DESIGN.md` carries 36 complete B2a qualifications. This table is 36 data rows. Preamble sentences on this page are not portable qualifications. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification."

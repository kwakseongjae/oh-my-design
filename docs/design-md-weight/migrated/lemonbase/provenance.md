# Lemonbase provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, evidence grading, and omission record for the Core v2 migration of `web/references/lemonbase/DESIGN.md`. The canonical source remains that file until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | lemonbase |
| name | Lemonbase |
| display_name_kr | 레몬베이스 |
| country | KR |
| category | saas |
| homepage | `https://www.lemonbase.com` |
| primary_color | `#328af6` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=lemonbase.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-26 |
| components_harvested | true |
| source bytes / SHA-256 | 30,806 · `d46739f679e5ae5ac7c1978232b613220a15d62e47dcb36eb098a3506a81bb7c` |

**Logo decision.** The `logo.slug` above is a Google favicon-service URL, not a Lemonbase-hosted asset. The sibling verification file states that `getdesign.md / refero.design / Google favicon are explicitly NOT counted toward the KR brand-owned requirement`. The sibling also records a live fetch on 2026-06-26: **818 bytes**, `PNG 128x128 8-bit colormap`, and `simpleicons lemonbase → 404`. The URL is therefore kept here as the catalog's own identity field and is not promoted to a Lemonbase brand asset in the portable document.

**Token note, quoted verbatim from the source frontmatter:**

> primary = live CTA blue (#328af6) used for 도입 문의 across home + pricing; consult-green (#469f68) is the secondary action on pricing; purple/yellow/pink are tinted feature-icon accents only. Headings near-black navy (#1a2128); shadow-light flat system.

Every value inside that note is carried separately in the portable document: `#328af6`, `#469f68`, `#1a2128` in Foundations `Semantic color`, plus the 도입 문의 / 상담 문의 labels in Components.

## Dual and multiple destinations (E2a)

Counted with `grep -oF '<string>' <file> | wc -l` — occurrences, not lines. `<doc>` = `docs/design-md-weight/migrated/lemonbase/DESIGN.md`. Counts are filled after the portable file is written; this table is the destination map the log must match.

- `name` Lemonbase is dual: this ledger + the portable H1 `# Lemonbase Design System` and Experience → Scope.
- `display_name_kr` 레몬베이스 is dual: this ledger + portable Scope and Content & Locales.
- `homepage` `https://www.lemonbase.com` is dual: this ledger + portable Scope.
- `primary_color` `#328af6` is dual: this ledger + portable Foundations Semantic color + Primary CTA + other body uses.
- `logo.slug` is ledger-only. The portable Assets section states that the catalog logo entry is a Google favicon-service URL and is not presented as a Lemonbase brand asset, without reprinting the URL.
- `verified` / `tokens.extracted` `2026-06-26` is ledger-only as a field; the date itself is not a portable token.
- `omd: "0.1"`, `tokens.source: live-extract`, and `components_harvested: true` stay in this ledger only.
- The two surface URLs `https://www.lemonbase.com` and `https://www.lemonbase.com/pricing` are dual: this ledger's Surfaces / Sources + portable Scope.
- The blog URL `https://lemonbase.com/blog/` is dual: this ledger + portable Scope and Governance Recorded unresolved.
- `rgba(0,0,0,0.08) 0px 8px 36px 0px` is dual: portable Elevation + Elevated Feature Card + this ledger's raw samples.
- `document.title` strings are sibling-only (see below) and stay in this ledger.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-26 |
| added | 2026-06-26 |
| tokens.extracted | 2026-06-26 |
| surfaces inspected | 2026-06-26 |
| sibling verification notes | 2026-06-26 |

Conflicts unresolved: none. The source footer states `Conflicts unresolved: none`. The sibling conflict matrix states the same.

The source footer's producer string: `omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces`.

## Sibling verification file (E2)

`web/references/lemonbase/.verification.md` was read and **adopted as evidence grading only**. Confirmed with `find web/references/lemonbase -type f`, because a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact.

Sibling SHA-256 `e6c8c71a1248aeb4a23779593d4f50868720a369adb507258cd6775c06740712`.

**Method, quoted from the sibling:** playwright getComputedStyle (live DOM) — global playwright (chromium, headless), `goto` domcontentloaded + 3.5s settle, Escape/cookie dismissal pass, then `getComputedStyle` on body, h1/h2/h3, header/nav, buttons, anchors, cards, inputs, plus a full-DOM background/text/radius/shadow frequency scan. Two brand surfaces inspected (homepage + pricing), one corroborating surface (blog).

### Sibling-only values — held here, absent from the portable body

| Value | Sibling record | Why it stays here |
|---|---|---|
| body `font-family: sans-serif / Pretendard`; `color: rgb(0, 0, 0)`; base `font-size: 12px` | raw sample for `body` | The source Don't list forbids `#000000` for body text and sets body at Pretendard Regular 16px / `#4c5967`. The sibling `rgb(0,0,0)` / 12px body sample is not promoted as a text token. |
| h1 two-line height `129px` | raw sample: 2-line height 129px (≈1.30 lh) | The source type-role table records unitless `1.30`. The 129px product is not promoted as a separate token. |
| `rgba(50,138,246,0.12)` ×2 | homepage bg frequency | A 12% primary wash the YAML does not name. Not promoted as `tokens.colors.primary-tint` (that path is `#edf5ff`). |
| `rgba(93,61,213,0.12)` ×1 | homepage bg frequency | A 12% purple wash the YAML does not name. Held here. |
| `rgba(70,159,104,0.12)` ×1 | homepage bg frequency | A 12% green wash the YAML does not name. Held here. |
| Frequency counts | bg `rgb(255,255,255)` ×28, `rgb(241,245,249)` ×27, `rgb(50,138,246)` ×3, `rgb(44,44,56)` ×2, `rgb(255,215,80)` ×1; text `#1a2128` ×77, `#4c5967` ×61, `#677583` ×84, `#cfd3d8` ×8, `#e2e5e9` ×10, `#328af6` ×16, `#5d3dd5` ×9, `#469f68` ×8, `#c7317b` ×3; radius `24px` ×34, `12px` ×30, `16px` ×23, `8px` ×12, `36px` ×6, `6px` ×3; shadow ambient ×11, soft ×3; font `"Pretendard Regular"` ×143, `"Pretendard Bold"` ×132, `Manrope` ×6 | Measurement detail, not contract. The portable body carries the roles, not these counts. |
| `https://guide.lemonbase.com/` | Country sources item 4 — official product guide, HTTP 200 | The visible source `DESIGN.md` does not name this URL. Held here. Not used to invent a portable surface, a token, or an unresolved-domain row. |
| Favicon fetch `818 bytes`, `PNG 128x128 8-bit colormap`; simpleicons 404 | Logo decision | Catalog identity detail. Not a portable mark. |
| Blog labelled `blog/캠프` | Country sources item 3 | Sibling-only Korean gloss of the blog surface. The portable body uses the source's `https://lemonbase.com/blog/`. |

Each of the following returns 0 from a literal grep of the portable body (filled after write): `129px`, `rgba(50,138,246,0.12)`, `guide.lemonbase.com`, `818 bytes`, `simpleicons`, `rgb(0, 0, 0)`.

### Sibling-only published strings — held here byte-exact (A5)

A5 covers strings the verification sibling names as measured copy, so these are kept as bytes rather than paraphrased. The portable body carries the labels the legacy body itself carries. These lines are mentions of disposition, not portable use.

- document.title (home): `레몬베이스 - 고성과를 위한 변화, 필요한 솔루션을 한번에`
- document.title (pricing): `가격 안내 - 레몬베이스`

The hero line "고성과를 위한 변화, 필요한 솔루션을 한번에" is not sibling-only: the source body records it. It is dual: portable Content & Locales + this ledger's raw-sample transcription.

### Third-party strings the source itself excludes

Recorded because the source recorded them, and excluded from evidence for the same reason the source excludes them. These are not Lemonbase strings and are not needles for copy preservation.

- `"No designs found"` — getdesign.md/lemonbase (0 files, checked live 2026-06-26)
- Ant Design `rgb(24,144,255)` — the source HTML comment names this as the blog CMS chrome, and says brand tokens are anchored on the marketing site + pricing only, not the blog CMS chrome

## Raw samples (from the sibling)

- body: `font-family: sans-serif / Pretendard`; `color: rgb(0, 0, 0)`; `background-color: rgb(255, 255, 255)` (#ffffff); base `font-size: 12px`
- h1 hero "고성과를 위한 변화 / 필요한 솔루션을 한번에": `font-family: "Pretendard Bold"`; `font-size: 48px`; `color: rgb(26, 33, 40)` (#1a2128); 2-line height 129px (≈1.30 lh)
- h3 section "구성원이 신뢰할 수 있는 평가": `font-size: 36px`; `font-family: "Pretendard Bold"`; `color: rgb(26, 33, 40)` (#1a2128)
- primary CTA "도입 문의": `background-color: rgb(50, 138, 246)` (#328af6); label `color: rgb(255, 255, 255)`; `border-radius: 8px`; `padding: 0px 16px`; height 40px; label font `"Pretendard Bold"` 14px
- neutral button "로그인": `background-color: rgb(241, 245, 249)` (#f1f5f9); `border-radius: 8px`; `padding: 0px 16px`; height 40px
- elevated feature card: `border-radius: 12px`; `box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 36px 0px`; no border
- carousel control "Previous/Next": `background-color: rgba(0, 0, 0, 0.2)`; `border-radius: 36px`; height 36px
- pricing h2 "가격 안내": `font-size: 44px`; `color: rgb(26, 33, 40)` (#1a2128)
- pricing consult CTA "상담 문의": `background-color: rgb(70, 159, 104)` (#469f68); `border-radius: 8px`; `padding: 16px`
- pricing tight-shadow panel: `box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 24px 0px`; blue-tint card `background-color: rgb(237, 245, 255)` (#edf5ff)
- document.title (home): "레몬베이스 - 고성과를 위한 변화, 필요한 솔루션을 한번에"; document.title (pricing): "가격 안내 - 레몬베이스"

## Evidence class of the legacy sections

The source's own closing comment partitions its file, and this migration follows that partition rather than treating the whole file as one evidence class.

| Legacy range | Source's stated attribution |
|---|---|
| §1–§9 (token-level claims) | Tier 1 live inspection, 2026-06-26, via playwright `getComputedStyle` on `https://www.lemonbase.com` and `https://www.lemonbase.com/pricing` |
| §10 Voice samples | verbatim from the live homepage and consulting/feature sections (hero H1, feature H3s, page title meta) |
| §11 Brand narrative | Lemonbase (레몬베이스) is a Korean HR-tech SaaS for performance management (평가 / 목표관리 / 1:1 / 몰입관리) plus consulting (리더십 역량 진단 / 조직 진단 / 리더십 교육). Product scope and positioning are directly observable from the live site nav and section copy; no specific founder names or founding dates are asserted |
| §13 Personas | fictional archetypes informed by publicly observable Lemonbase user segments (Korean HR leaders, people-team managers, team leads). Names are illustrative; they do not refer to real people |
| §14 States, §15 Motion | **no attribution given.** The closing comment assigns a source to §1–9, §10, §11, and §13 and assigns none to these two sections. Both are therefore carried as system-level statements with a derived-editorial qualification adjacent to them in the portable body |
| Interpretive claims | the comment names "trust over judgment", "one place, one next step", "flat and calm as a rejection of legacy enterprise HR chrome" as editorial readings connecting Lemonbase's observed design and copy to its positioning, not directly sourced Lemonbase statements |

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing homepage | `https://www.lemonbase.com` | 2026-06-26 |
| pricing | pricing surface | `https://www.lemonbase.com/pricing` | 2026-06-26 |
| blog | official blog (named; corroborating ink/body/blue; separate CMS template) | `https://lemonbase.com/blog/` | named 2026-06-26 |

## Sources

### Tier 1

- `https://www.lemonbase.com` (homepage, live computed style)
- `https://www.lemonbase.com/pricing` (pricing surface, live computed style)
- `https://lemonbase.com/blog/` (Lemonbase official blog — brand-owned; corroborating; not a token source)

### Tier 2 (no usable record)

- getdesign.md/lemonbase — "No designs found" (0 files, checked live 2026-06-26)
- styles.refero.design — Lemonbase not indexed

## Claim ledger

Claims use the source's live-inspect surfaces. `home` = homepage computed-style / 2026-06-26; `pricing` = /pricing computed-style / 2026-06-26.

| claim | surface |
|---|---|
| tokens.colors.primary / primary-tint | home, pricing |
| tokens.colors.consult-green | pricing (CTA); home (accent) |
| tokens.colors.accent-purple / accent-yellow / accent-pink | home |
| tokens.colors.ink / body / muted / faint / hairline | home |
| tokens.colors.canvas / surface / surface-alt / dark / on-primary | home |
| tokens.typography.family.display / body / accent | home |
| tokens.typography.display-hero / section / subsection / card-head / body / ui / caption | home, pricing (section) |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | home |
| tokens.rounded.xs / sm / md / lg / xl / pill | home, pricing |
| tokens.shadow.ambient / soft | home |
| tokens.shadow.tight | pricing |
| tokens.components.button-primary / button-neutral / nav-link / card-elevated / card-tint / badge-accent | home |
| tokens.components.button-consult | pricing |
| Outline CTA / Tight-Shadow Panel / Carousel Controls | §4 body only (A3) |
| 9 state rows | §14 | Components `State record` | no attribution given by the source |
| Breakpoints 640 / 1024 / 1440px | §8 | Layout & Platforms | no attribution given by the source |
| Voice samples ×4 | §10 | Content & Locales | home |
| Brand narrative facts | §11 | Experience `Scope` | home |

## Derived editorial inventory

Sentences in the portable body that carry the full B2a qualification — "a derived editorial implementation inference from the verified surfaces; … not Lemonbase-authored or a separately published UI specification". They are indexed here so a reviewer can confirm each one sits adjacent to the claim it qualifies rather than only in this sidecar. Measured on the output after the F3 pass. Lemonbase has no published first-party design system (getdesign.md no data; refero not indexed), so the toss-form close is used as written. Data rows = portable complete hedges, 1:1.

| # | Portable location | What is qualified |
|---:|---|---|
| 1 | Experience `Scope`, paragraph 1 | Keeping values attached to the surface that established them; treating the blog as a named source that does not supply interface tokens; the refusal to treat the two token-inspected marketing pages as a proxy for the product UI the homepage sells |
| 2 | Experience `Scope`, paragraph 2 | Calm enterprise rather than growth-hack; navy as warmth and trust; hairline as the separation device; the one blue as the single action color and "the next step"; cool/warmer as the two surface temperatures; Pretendard Bold as Korean-premium declarative voice; accent set as festive but disciplined and never interactive chrome |
| 3 | Experience `Scope`, paragraph 3 | Reading performance management as a continuous practice; reading the positioning line as assembling tools and expertise in one place; reading the two feature lines as a promise of trust and ease; classifying that narrative as context that does not by itself supply interface tokens |
| 4 | Experience `Scope`, paragraph 4 | Refusal of heavy chrome and fear-based evaluation framing; embrace of flat calm, one blue, bold Pretendard, lemon-yellow-led accent set |
| 5 | Experience `Primary tasks` | The selection of these four as the primary tasks, and keeping them off the source's persona section |
| 6 | Experience `Audience` | Dropping the named figures rather than promoting them, and reading the archetype-informing groups as this product's audience |
| 7 | Experience `Distinctive traits` | Reserved action blue, pricing-only consult-green, Korean-premium Bold display, navy-not-black, near-flat depth, decorative-only accents, disciplined rounded geometry |
| 8 | Experience `Principles` | All six principles and their UI implications |
| 9 | Experience `Application rules` | The eight Do items and their attached reasons |
| 10 | Experience `Avoid` | The seven Don't items and their attached reasons |
| 11 | Foundations `Semantic color` | Role naming, plus the single-action / pricing-only consult / navy-not-black / grey-ladder / hairline-as-primary-separator / decorative-only readings; `tokens.colors.canvas` and `tokens.colors.on-primary` as two roles sharing `#ffffff`; `tokens.colors.surface` (`#f1f5f9`) off Neutral Button and Tinted Container fills |
| 12 | Foundations `Spacing` keep-apart | Keeping `tokens.spacing.sm: 8` unmerged from `tokens.rounded.sm: 8` |
| 13 | Foundations `Spacing` | Reading 48–64px band rhythm as breathing room over density |
| 14 | Foundations `Shape` | Reading 8px as the interactive workhorse, 36px as reserved for carousel pills, and `sm: 8` as a radius step rather than the spacing step |
| 15 | Foundations `Elevation` keep-both | Keeping the elevated-card shadow `rgba(0,0,0,0.08) 0px 8px 36px` and the ambient trailing-`0px` form as two byte forms rather than collapsing them |
| 16 | Foundations `Elevation` | The near-flat / clean-calm reading |
| 17 | Foundations `Motion` | The entire motion contract — durations, easing roles, and motion rules — as a section the source leaves unattributed |
| 18 | Foundations `Motion`, easing paragraph | Omitting the source's curve values because they are not traceable to Lemonbase evidence, keeping only the roles and uses |
| 19 | Typography & Assets `Font evidence`, Official product-use | The "no published type token" reading |
| 20 | Typography & Assets `Font evidence`, Declared-only | Fallback cuts are not a further Lemonbase UI-family token |
| 21 | Typography & Assets `Font evidence`, License | Pretendard and Manrope as upstream faces, not Lemonbase-owned brand assets |
| 22 | Typography & Assets `Font evidence`, Outside these captures | Blog CMS typography and surfaces beyond the two token-inspected pages sit outside this contract |
| 23 | Typography & Assets `Family` | The fallback prohibition — never present a system substitute as the brand face |
| 24 | Typography & Assets `Type roles` | Keeping line heights as unitless ratios rather than converting them to px |
| 25 | Typography & Assets `Typography rules` | The four typography principles as readings of the measured metrics |
| 26 | Typography & Assets `Assets` illustrations | Treating feature illustrations and screenshots as first-party imagery, and the instruction not to replace them with invented brand-color decoration |
| 27 | Typography & Assets `Assets` logo | The catalog logo entry is not presented as a Lemonbase brand asset |
| 28 | Components `How to read this section` | Every kind verdict, every applicability verdict, and the reason given for either, including C4 withhold, destination/arrow loading/error/success close, and chip non-interactive |
| 29 | Components `State record` | The nine state treatments as an unattributed system-level statement |
| 30 | Components `State record` close | Non-attachment of those rows as visual treatments on the marketing destination controls |
| 31 | Layout & Platforms, paragraph after the layout bullets | Hero-anchor, breathing-room, flat-segmentation, and rationed-blue readings |
| 32 | Layout & Platforms, responsive paragraph | The breakpoints, collapsing strategy, image behavior, and the "comfortable tapping" reading of recorded target sizes, as system-level statements rather than cross-viewport measurements |
| 33 | Layout & Platforms, image-behavior close | Keeping the Desktop `1024-1440px` range as declared width rather than a measured viewport |
| 34 | Content & Locales, paragraph 1 | The voice characterization, the register reading, and the tone table |
| 35 | Content & Locales, Forbidden register | "Treats the reader as a capable HR leader" as a characterization of the register |

### Evidence-class boundary statements — related but not the same clause

These sentences separate one evidence domain from another. They are not B2a qualifications and are listed separately so the count above is not read as covering them.

| Portable location | Boundary drawn |
|---|---|
| Foundations `Motion` and Governance | The B3 promotion condition: five evidence kinds plus a per-component computed-observation gate are present in both places. The partial-confirmation exclusion sentence is in Foundations `Motion` only, not in Governance. |
| Typography & Assets `Font evidence` | Official product-use / live computed / official distributed / declared-only / license / outside-these-captures remain separate class rows. The editorial readings inside four of those rows are in the inventory above. |
| Components Elevated Feature Card, Tinted Container, Tight-Shadow Panel | Neither an interactive nor a non-interactive kind is established, so kind and applicability map are both withheld (C4). Named inside How-to-read row 28. |
| Components Accent Label Chip | Kind is `non-interactive` because the record is a label chip, not a control. Named inside How-to-read row 28. |
| Components Outline CTA / Carousel Controls / Tight-Shadow Panel | Body-only records (A3); Outline and Carousel close applicability; Tight-Shadow withholds kind. |
| Content & Locales, closing line | The Korean strings reproduce byte-exact rather than translated or re-cased. |

## Omission ledger

| Item | Disposition | Why |
|---|---|---|
| Three `cubic-bezier` curves from §15 | Omitted from the portable body; mentioned here as a disposition, not as a promoted token | No observation stands behind them. The source records a live inspect of color, type, geometry, and shadow and supplies no transition, animation, or easing sample. `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` is byte-identical to the example table at `spec/omd-v0.1.md` line 267. The other two (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`) are likewise unattributed. Durations 120ms / 200ms / 320ms and the reduced-motion rule are kept. |
| §9 Agent Prompt Guide | Deleted | Tool-facing copy-paste prompts and restatements. No receiving slot and no delegation. Every value §9 names is already in Foundations, Typography, or Components. |
| §13 Personas — 3 entries | Deleted | The source's own italic line labels them fictional archetypes, not individual people. Not promoted to Audience or to `primary-tasks`, and not re-hosted here as names, ages, cities, or biographies (D2, D2a). This row names the section, the headcount, and the dropped field kinds. It does not restate the identifiers. |
| YAML `logo.slug` Google favicon URL | Held in Identity above; not a portable brand asset | Third-party favicon service; sibling excludes it from the KR brand-owned count. |
| Sibling-only measurements listed above | Held in the sibling-only table | Not used to establish a portable body fact. |

Mention of the three curves in this file is disposition, not use. A portable-body grep for `cubic-bezier` is expected to return 0.

## YAML token-path inventory (source keys)

All `tokens.*` keys from the source frontmatter, for key-path verification. Portable destinations are section names, not a claim that a number found anywhere is the same key.

| Source path | Portable destination |
|---|---|
| tokens.colors.primary `#328af6` | Foundations Semantic color + Primary CTA |
| tokens.colors.primary-tint `#edf5ff` | Foundations Semantic color + Accent Label Chip |
| tokens.colors.consult-green `#469f68` | Foundations Semantic color + Consult CTA |
| tokens.colors.accent-purple `#5d3dd5` | Foundations Semantic color |
| tokens.colors.accent-yellow `#ffd750` | Foundations Semantic color |
| tokens.colors.accent-pink `#c7317b` | Foundations Semantic color |
| tokens.colors.ink `#1a2128` | Foundations Semantic color + Neutral Button + Outline CTA + nav text |
| tokens.colors.body `#4c5967` | Foundations Semantic color |
| tokens.colors.muted `#677583` | Foundations Semantic color + State record Empty (no survey responses) |
| tokens.colors.faint `#cfd3d8` | Foundations Semantic color + State record Disabled |
| tokens.colors.hairline `#e2e5e9` | Foundations Semantic color + Elevation |
| tokens.colors.canvas `#ffffff` | Foundations Semantic color |
| tokens.colors.surface `#f1f5f9` | Foundations Semantic color + Neutral Button + Tinted Container |
| tokens.colors.surface-alt `#f9f9f9` | Foundations Semantic color |
| tokens.colors.dark `#2c2c38` | Foundations Semantic color |
| tokens.colors.on-primary `#ffffff` | Foundations Semantic color (text on primary CTA) |
| tokens.typography.family.{display,body,accent} | Family section |
| tokens.typography.display-hero 48 / 700 / 1.30 | Type roles Display Hero |
| tokens.typography.section 44 / 700 / 1.40 | Type roles Section Heading |
| tokens.typography.subsection 36 / 700 / 1.44 | Type roles Sub-section |
| tokens.typography.card-head 28 / 700 / 1.40 / −0.56 | Type roles Card / Promo Head |
| tokens.typography.body 16 / 400 / 1.50 | Type roles Body |
| tokens.typography.ui 14 / 700 / 1.50 | Type roles Button / CTA |
| tokens.typography.caption 12 / 400 / 1.50 | Type roles Caption / Nav |
| tokens.spacing.{xs,sm,md,base,lg,xl,xxl,section} | Foundations Spacing (path kept separate from rounded) |
| tokens.rounded.{xs,sm,md,lg,xl,pill} | Foundations Shape (path kept separate from spacing) |
| tokens.shadow.ambient `rgba(0,0,0,0.08) 0px 8px 36px 0px` | Foundations Elevation + Elevated Feature Card |
| tokens.shadow.soft `rgba(0,0,0,0.04) 0px 12px 36px 0px` | Foundations Elevation |
| tokens.shadow.tight `rgba(0,0,0,0.08) 0px 1px 24px 0px` | Foundations Elevation + Tight-Shadow Panel |
| tokens.components.button-primary type button | Primary CTA (도입 문의) |
| tokens.components.button-consult type button | Consult CTA (상담 문의) |
| tokens.components.button-neutral type button | Neutral Button (로그인) |
| tokens.components.nav-link type tab | Top Nav Item |
| tokens.components.card-elevated type card | Elevated Feature Card |
| tokens.components.card-tint type card | Tinted Container |
| tokens.components.badge-accent type badge | Accent Label Chip |

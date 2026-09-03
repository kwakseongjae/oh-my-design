# PIXNET provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the pixnet migration. Canonical source remains `web/references/pixnet/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | pixnet |
| name | PIXNET |
| country | TW |
| category | content |
| homepage | https://www.pixnet.net |
| primary_color | `#ff7200` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=www.pixnet.net&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-08 |
| components_harvested | true |

YAML token note (source): primary = live PIXNET orange `#ff7200` (login CTA + 68 DOM uses); secondary accent = warm red `#ff432b`; body type is Noto Serif TC — a serif, unusual for a content platform.

The logo record is a Google favicon-service URL, not a first-party file on `www.pixnet.net`. It is kept here and named as identity metadata in the portable Assets subsection.

No YAML `ds.name` / `ds.url` / `ds.type` is present. A1c: there is no `ds.type` field to keep. No published component-token specification is named. B2a uses the no-published-spec form (`not PIXNET-authored or a separately published UI specification`).

## Freshness

| Event | Date |
|---|---|
| added | 2026-06-08 |
| verified | 2026-06-08 |
| tokens.extracted | 2026-06-08 |
| surfaces inspected | 2026-06-08 |
| sources captured | 2026-06-08 |

Conflicts unresolved: none (source footer does not name a conflict).

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | homepage | https://www.pixnet.net | 2026-06-08 |
| about | brand-about | https://www.pixnet.net/about | named as Tier 1 in the source footer |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.pixnet.net | 2026-06-08 |
| about-live | brand-about | https://www.pixnet.net/about | named in source footer |

### Tier 1 (source footer)

- https://www.pixnet.net
- https://www.pixnet.net/about (live DOM named in the same footer sentence: body `font-family: "Noto Serif TC"`, login CTA fill `#ff7200` 6px radius 36px, text `#423e3c`, hairline `#eaeae9`, footer `#f4f4f4`, accent red `#ff432b`)

### Method (source footer)

getComputedStyle on body, h1, login button, tag pills, nav links, header, footer; lab() values resolved to #hex via canvas; top-15 DOM color frequency sampled. `.verification.md`: `web/references/pixnet/.verification.md`.

### Narrative context (not interface tokens)

- Source §11 mid-2000s origin, Taiwan's blogging boom, "PIXNET" synonymous with "blog", millions of articles over nearly two decades, "社群影響力", "大試用時代", embrace/avoid closing pair. Portable Experience Scope keeps those sentences as narrative; they do not by themselves supply interface tokens.

## Claim ledger

Every value below traces to `web/references/pixnet/DESIGN.md`. "Source location" is the legacy section or YAML path.

| Claim | Source location | Portable destination |
|---|---|---|
| `tokens.colors.primary` `#ff7200` | YAML `tokens.colors.primary`, §2 PIXNET Orange | Foundations → Semantic color |
| `tokens.colors.primary-deep` `#e85f00` | YAML `tokens.colors.primary-deep`, §2 Orange Deep | Foundations → Semantic color |
| `tokens.colors.accent-red` `#ff432b` | YAML `tokens.colors.accent-red`, §2 Warm Red | Foundations → Semantic color |
| `tokens.colors.accent-tint` `#fcdfda` | YAML `tokens.colors.accent-tint`, §2 Accent Tint | Foundations → Semantic color |
| `tokens.colors.canvas` `#ffffff` | YAML `tokens.colors.canvas`, §2 Pure White | Foundations → Semantic color |
| `tokens.colors.surface-muted` `#f4f4f4` | YAML `tokens.colors.surface-muted`, §2 Surface Muted | Foundations → Semantic color |
| `tokens.colors.heading` `#423e3c` | YAML `tokens.colors.heading`, §2 Warm Ink | Foundations → Semantic color (unmerged from body) |
| `tokens.colors.body` `#423e3c` | YAML `tokens.colors.body`, §2 Warm Ink | Foundations → Semantic color (unmerged from heading) |
| `tokens.colors.label` `#575451` | YAML `tokens.colors.label`, §2 Label | Foundations → Semantic color |
| `tokens.colors.muted` `#817f7d` | YAML `tokens.colors.muted`, §2 Muted | Foundations → Semantic color |
| `tokens.colors.muted-2` `#969492` | YAML `tokens.colors.muted-2`, §2 Muted 2 | Foundations → Semantic color |
| `tokens.colors.on-primary` `#ffffff` | YAML `tokens.colors.on-primary` | Foundations → Semantic color (unmerged from canvas) |
| `tokens.colors.hairline` `#eaeae9` | YAML `tokens.colors.hairline`, §2 Hairline | Foundations → Semantic color |
| `tokens.colors.border-soft` `#c0bfbe` | YAML `tokens.colors.border-soft`, §2 Border Soft | Foundations → Semantic color |
| `tokens.colors.ink` `#000000` | YAML `tokens.colors.ink`, §2 Pure Ink | Foundations → Semantic color |
| Catalog `primary_color` `#ff7200` | YAML `primary_color` | Foundations → Semantic color + this Identity table |
| `tokens.typography.family.serif` `Noto Serif TC` | YAML family.serif; §3 Primary | Typography & Assets → Family |
| `tokens.typography.family.sans` `system-ui` | YAML family.sans; §3 Secondary | Typography & Assets → Family |
| `tokens.typography.heading-lg` size 18 / weight 700 / lineHeight `1.33` / tracking 0.5 / use | YAML heading-lg; §3 Heading Large | Typography & Assets → Type roles (A1a: unitless `1.33` kept; §3 Notes keep `"gogo+香港"`, `"大試用時代"`) |
| `tokens.typography.heading` size 16 / weight 700 / lineHeight `1.50` / tracking 1.2 / use | YAML heading; §3 Heading | Typography & Assets → Type roles |
| `tokens.typography.body` size 16 / weight 400 / lineHeight `1.50` / tracking 1.2 / use | YAML body; §3 Body; live 16px / 24px | Typography & Assets → Type roles (live 24px kept beside `1.50`) |
| `tokens.typography.body-sm` size 14 / weight 400 / lineHeight `1.43` / use | YAML body-sm; §3 Body Small | Typography & Assets → Type roles |
| `tokens.typography.button` size 14 / weight 500 / lineHeight `1.00` / use | YAML button; §3 Button | Typography & Assets → Type roles |
| `tokens.typography.nav` size 16 / weight 400 / lineHeight `1.50` / use | YAML nav; §3 Nav Link | Typography & Assets → Type roles |
| `tokens.typography.caption` size 13 / weight 400 / use | YAML caption; §3 Caption | Typography & Assets → Type roles (lineHeight/tracking omitted in YAML; §3 `normal` kept) |
| `tokens.spacing` xs 4 / sm 8 / md 12 / base 16 / lg 24 / xl 32 / xxl 48 / section 64 | YAML spacing; §5 Scale | Foundations → Spacing |
| `tokens.rounded` sm 4 / md 6 / lg 12 / full 9999 | YAML rounded; §5 Border Radius Scale (`9999px` keep-both with unitless `9999`) | Foundations → Shape |
| Sharp 0px thumbnails | §5 Border Radius Scale (not a YAML rounded key) | Foundations → Shape |
| `tokens.shadow.ambient` | YAML shadow.ambient; §6 Ambient | Foundations → Elevation |
| `tokens.shadow.standard` | YAML shadow.standard; §6 Standard | Foundations → Elevation |
| `tokens.shadow.elevated` | YAML shadow.elevated; §6 Elevated | Foundations → Elevation |
| Focus Ring `2px solid #ff7200` | §6 Focus Ring (not a YAML shadow key) | Foundations → Elevation + Components Capture record (B1: not `focus-visible`) |
| `tokens.components.button-primary` (`type: button`) | YAML; §4 Primary | Components & States → Primary (Login / CTA) |
| `tokens.components.button-ghost` (`type: button`) | YAML; §4 Ghost as secondary | Components & States → Ghost / secondary |
| `tokens.components.tag-pill` (`type: badge`) | YAML; §4 Ghost / Tag (Trending pill) | Components & States → Tag / trending pill |
| `tokens.components.card` (`type: card`) | YAML; §4 Cards | Components & States → Article / content card |
| Quiet / Nav | §4 Quiet / Nav (not a YAML component key) | Components & States → Quiet / Nav (`not in the token set`) |
| Search / form input | §4 Inputs & Forms (not a YAML component key) | Components & States → Search / form input (`not in the token set`) |
| Hot / new badge 13px weight 700 `熱門` | §4 Tags + unique §9 hot-badge writing | Components & States → Hot / new badge (`not in the token set`; A3) |
| Tint badge `#fcdfda` | §4 Tags | Components & States → Tint badge (`not in the token set`) |
| Navigation chrome ~73px | §4 Navigation; §5 Header; §9 header prompt | Components & States → Navigation chrome + Layout |
| Card title 16px/700 `#423e3c` + meta 14px/400 `#817f7d` | §4 Cards + unique §9 article-card writing | Components & States → Article / content card (A3) |
| §14 nine-row state table | §14 | Components & States → Capture record |
| §15 durations 0ms / 150ms / 220ms / 320ms | §15 | Foundations → Motion |
| §15 named easing roles + Use | §15 | Foundations → Motion (curves omitted) |
| §15 reduced-motion + signature pairings | §15 | Foundations → Motion |
| §10 voice table + title + 「台灣人的生活文創平台」 + verticals + CTAs | §10 | Content & Locales |
| §11 mid-2000s, blogging boom, synonymous with blog, nearly two decades, 社群影響力, 大試用時代, heritage-explains-the-design, embrace/avoid close | §11 | Experience → Scope (fenced as brand narrative) |
| §12 seven principles | §12 | Experience → Principles |
| §7 Do 7 / Don't 7 + §16 extras | §7, §16 | Experience → Application rules / Avoid |
| §1 Key Characteristics | §1 | Experience → Distinctive traits |
| Footer **Verified** / Tier 1 / Method | §4 footer block | This file — Freshness, Sources |

## Capture selectors

The supplied source records live inspect via playwright getComputedStyle, not `data-omd-capture` indices. Pointers below are the source HTML comment and sibling raw samples (E2a).

| Component | Pointer |
|---|---|
| Login CTA (`登入`) | homepage — `background-color: #ff7200`; `color: #ffffff`; `border-radius: 6px`; `height: 36px`; `font-size: 14px`; `font-weight: 500`; `padding: 8px 12px` |
| Trending tag pill (`#長榮航空`, `#日本旅遊`) | homepage — `background-color: #ffffff`; `color: #423e3c`; `border: 1px solid #eaeae9`; `border-radius: 6px`; `height: 36px`; `font-size: 16px`; `font-weight: 700` |
| body | `font-family: "Noto Serif TC", "Noto Serif TC Fallback"`; `font-size: 16px`; `line-height: 24px`; `background-color: #ffffff`; `color: #423e3c` |
| Header | `background-color: #ffffff`; `color: #423e3c`; `height: 73px` |
| Footer | `background-color: #f4f4f4`; `color: #423e3c` |
| Nav channel link (`gogo+香港`) | sibling raw sample `color: #575451`; `font-size: 18px`; `font-weight: 700` — corroboration of heading-lg size/weight; default nav color in the source body remains `#423e3c` with hover `#575451` |

The portable body keeps each harvested component’s YAML `use` string; the table above is the ledger copy of the live-inspect pointers.

## Sibling verification file (E2)

`web/references/pixnet/.verification.md` exists beside the legacy source and **is adopted** as the evidence record for this migration. Adoption is at the evidence level only. **No portable token and no structural classification was promoted from the sibling** (B1). Concretely, the sibling records the following facts that the legacy `DESIGN.md` never carried as tokens, and none of them entered `docs/design-md-weight/migrated/pixnet/DESIGN.md` as new tokens:

| Sibling-only fact | Where it lives | Portable body |
|---|---|---|
| iOS App Store listing `https://apps.apple.com/tw/app/痞客邦/id389796636` | Country sources below | Named brand-owned TW listing in this ledger. Not a token surface. Not written as a portable "native app" scope claim (D1). |
| Legal name 痞客邦股份有限公司 | Country sources below | Sibling-recorded published string (A5a). Not a portable token. |
| `page.goto` `networkidle` timeout; capture on `domcontentloaded` + 2.5s settle | Notes / honesty below | Method note. Not a token. |
| lab() originals `lab(65.21 51.88 73.57)` → `#ff7200`, `lab(26.57 1.46 1.88)` → `#423e3c` | Raw samples below | Portable hexes stay the legacy `#rrggbb` forms. |
| h1 computed `font-weight: 400` at 16px / `letter-spacing: 1.2px` | Raw samples below | Source §3 Heading is 16px / 700 for card titles and inline h1/h2. Sibling h1 400 is corroboration of size/tracking, not a new YAML weight. |
| Nav channel link (`gogo+香港`) computed color `#575451` | Raw samples below | Source default nav is `#423e3c`; `#575451` is the source Label / nav-hover color. Sibling color reading stays here as corroboration, not a rewrite of default nav. |
| Top-15 DOM frequency extras (`#969492` ×111, `#817f7d` ×41, `#fcdfda` ×8) | Raw samples below | Portable hexes stay; frequency counts that the source body already names (1083 / 902 / 68 / 48) are in Foundations. |

### Raw samples (from the sibling)

Kept here because they are per-element evidence, not portable contract.

- `body` → `font-family: "Noto Serif TC", "Noto Serif TC Fallback"`; `font-size: 16px`; `line-height: 24px`; `background-color: #ffffff`; `color: #423e3c`
- Login CTA (`登入`) → `background-color: #ff7200`; `color: #ffffff`; `border-radius: 6px`; `height: 36px`; `font-size: 14px`; `font-weight: 500`; `padding: 8px 12px`
- Trending tag pill (`#長榮航空`, `#日本旅遊`) → `background-color: #ffffff`; `color: #423e3c`; `border: 1px solid #eaeae9`; `border-radius: 6px`; `height: 36px`; `font-size: 16px`; `font-weight: 700`
- `h1` → `font-size: 16px`; `font-weight: 400`; `color: #423e3c`; `letter-spacing: 1.2px`
- Header → `background-color: #ffffff`; `color: #423e3c`; `height: 73px`
- Footer → `background-color: #f4f4f4`; `color: #423e3c`
- Nav channel link (`gogo+香港`) → `color: #575451`; `font-size: 18px`; `font-weight: 700`
- DOM color frequency (top): `#eaeae9` ×1083 (hairline), `#423e3c` ×902 (ink), `#969492` ×111, `#ff7200` ×68 (brand orange), `#ff432b` ×48 (accent red), `#817f7d` ×41, `#fcdfda` ×8 (peach tint)
- Page `<title>` → `痞客邦PIXNET-掌握最新熱門話題貼文、短影音，讓生活充滿靈感！`

**Notes / honesty (sibling):** `page.goto` with `waitUntil: 'networkidle'` timed out (the homepage holds long-lived analytics/ad connections), so the DOM was captured on `domcontentloaded` + a 2.5s settle. Original computed colors were `lab()`; the `#hex` equivalents listed are exact canvas conversions.

### Country sources (sibling)

Brand-owned / regional Taiwanese sources (Traditional Chinese, TW-owned):

- https://www.pixnet.net — PIXNET (痞客邦) official site, Taiwan. Self-described as 「台灣人的生活文創平台」.
- https://www.pixnet.net/about / https://www.pixnet.net/company — PIXNET official company/about pages (TW corporate identity, 痞客邦股份有限公司).
- https://apps.apple.com/tw/app/痞客邦/id389796636 — PIXNET official iOS app on the Taiwan App Store (regional TW listing by the brand).

These are brand-owned and TW-regional; non-regional aggregators (getdesign.md, refero.design) and the Google favicon proxy are intentionally excluded from the country-source gate. That exclusion is the sibling's country-source gate, not a portable Named-gap domain list.

## Omission ledger

Disposition only. This table names what was dropped and why. It does not re-host the dropped content as facts (D2a, E2d).

| Item | Disposition |
|---|---|
| §13 Personas — 4 fictional archetypes (name, age, city included) | Deleted. The source's own §13 header states they are fictional archetypes informed by publicly observable PIXNET user segments, not individual people. Not promoted into the portable body, and not re-listed here as identifiers (D2a). Experience `Audience` carries only the group-level segments the source independently names in that header. |
| §15 three unsourced easing curve values | Omitted at the curve-value boundary. Named roles `ease-enter` / `ease-exit` / `ease-standard` and their Use writings stay in portable Motion. The omitted curve values are `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` (legacy template match), and `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`. No live computed evidence for those curves in the source comment or sibling. Durations 0ms / 150ms / 220ms / 320ms stay. |
| §9 Agent Prompt Guide — example component prompts | Deleted as tool-facing restatement. Unique §9 hot-badge writing (Noto Serif TC 13px weight 700 for `熱門`) lands on Hot / new badge (A3). Unique §9 article-card meta line 14px weight 400 `#817f7d` lands on the Article / content card (A3). Header ~73px, trending-tag metrics, footer `#f4f4f4`, and login CTA metrics already have Components / Layout / Typography slots. |
| YAML `ds.type` | Absent in the source. Nothing to keep (A1c N/A). |

## Derived editorial inventory

Portable `DESIGN.md` carries 31 complete B2a qualifications. This table is 31 data rows. Preamble sentences on this page are not portable qualifications.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 | Treating `https://www.pixnet.net` as this contract's token surface; treating `https://www.pixnet.net/about` as a named brand source rather than as a second harvested component surface |
| Experience Scope ¶2 | Readings of the captured layer as a warm, editorial, reader-first publishing home rather than a slick venture-funded app; of `#423e3c` as ink on paper rather than pure black; of the serif as a 明體/宋體-lineage literary face; of content as the hero with chrome receding |
| Experience Scope ¶3 | Treating the mid-2000s origin, the blogging-boom sentence, the "synonymous with blog" line, the millions of articles over nearly two decades, "社群影響力", "大試用時代", the embrace/avoid closing pair, and the heritage-explains-the-design sentence as official context facts that do not by themselves supply interface tokens |
| Primary tasks | Selecting the four captured homepage outcomes as primary tasks, and refusing the persona section |
| Audience | Dropping the fictional archetype slots rather than promoting them, carrying no demographic segment list, and reading the source-named publicly observable segments as audience |
| Distinctive traits | Classifying the list as a restatement of the source's Key Characteristics, and the groupings and the readings inside it |
| Principles | The seven stems as a reconstruction of the source's Principles section |
| Application rules | Treating the source §7 / §16 Do lists as capture-bound application |
| Avoid | Treating the source §7 / §16 Don't lists as reconstruction prohibitions |
| Semantic color | Pairing hexes to token-set paths; keeping heading unmerged from body; keeping canvas unmerged from on-primary; keeping primary unmerged from primary-deep; keeping ink unmerged from heading/body; keeping muted unmerged from muted-2 |
| Semantic color → Orange Deep | The source's "reasoned step down in lightness" characterization of `#e85f00` |
| Semantic color → Color usage rules | Keeping the source's Color Usage Rules, plus the source §1 no-corporate-blue sentence, as portable color rules rather than as a PIXNET-authored palette manual |
| Spacing | Keeping YAML unitless steps beside the source px list; not treating a spacing step as a type size, radius, padding, or control height |
| Shape | Reading 4 / 6 / 12 / 9999 as local harvested geometry, not a universal radius; keeping 0px thumbnails off the YAML rounded map |
| Elevation | Reading the stack as hairline-first depth with warm-tinted ink shadows rather than as a global dramatic-float scale |
| Motion | Omitting three unsourced curves; keeping durations, named easing roles, signature pairings, reduced-motion; `ease-exit` matching the legacy template is not live-computed evidence; requiring the five-kind per-component computed gate before any promotion; official documentation of a single curve or duration is not that gate |
| Font evidence (section head) | Sorting evidence classes; Noto Serif TC as captured UI family rather than a PIXNET-owned exclusive face; `system-ui` as YAML utility rather than the brand face; no sans-serif substitution |
| Font evidence → Official product-use | Classifying official product-use as no published type token / no separately issued specimen |
| Font evidence → Official distributed asset | No PIXNET-exclusive distributed type family |
| Font evidence → Declared-only / utility | Classing `system-ui` as not the brand face |
| Font evidence → License | No PIXNET font-license notice established; Noto Serif TC as an upstream face and a font asset rather than a PIXNET brand asset |
| Family | Fallback prohibition; sans-serif not presented as the brand face |
| Type roles | Keeping YAML unitless line-heights; keeping YAML `use` beside the longer §3 Notes including `"gogo+香港"` / `"大試用時代"`; keeping live 16px / 24px beside body `1.50` |
| Type roles → principles | Treating the four typography-section principles as type-role rules rather than as a separately published type specification |
| Assets | Treating the Google favicon-service slug as identity metadata, not as a PIXNET-hosted mark |
| Capture / applicability | Declaring Core applicability by control meaning; YAML primitive types attached only where the token set records them; §4-only components labelled `not in the token set`; treating Capture-record rows as product-level recorded treatments; treating `登入` as a login commit, Quiet/Nav as destinations, the trending tag as a destination pill, the article card as a destination container, the search field as a query field; generic Focus is not `focus-visible`; not a complete state-coverage claim |
| Ghost / secondary | Keeping YAML `tokens.components.button-ghost` unmerged from `tokens.components.tag-pill` even though source §4 writes them under one Ghost / Tag heading |
| Layout | Reading measurements as local captured geometry rather than as a complete grid; `~73px` as header height rather than a spacing-scale step |
| Layout → Whitespace notes | Treating editorial density / hairlines over gaps / reading-column comfort as the source's own layout notes |
| Layout → Responsive behavior | Reading the <640px / 640–1024px / 1024–1280px / >1280px table as a recorded source table rather than a live computed breakpoint capture |
| Content & Locales | Characterizing official materials as lifestyle-warm, locally Taiwanese, creator-supportive, inclusive implementation context rather than as a separately published copy manual; requiring quoted strings byte-exact; treating English beside a Traditional Chinese string as a reading aid rather than a replacement |

Evidence-class boundary sentences in the portable body (a different class from the qualifier above, listed separately so the two are not conflated):

- Scope — homepage is the token surface; about is a named brand source; mid-2000s / synonymous-with-blog / nearly two decades / 社群影響力 / 大試用時代 / heritage-explains-the-design do not by themselves supply interface tokens.
- Foundations → Semantic color — heading is not body; canvas is not on-primary; primary is not primary-deep; ink is not heading/body; muted is not muted-2.
- Foundations → Motion — three cubic-bezier values omitted; B3 five-kind gate is stated; durations 0ms / 150ms / 220ms / 320ms kept.
- Components → Capture record — generic Focus `2px solid #ff7200` is not `focus-visible`; absence of a capture is not a `not-applicable` reason.
- Content & Locales — quoted strings are labelled live-surface samples; reproduce them byte-exact.

## Proof notes

- `tokens.source: live-extract`
- `components_harvested: true`
- verification method recorded by the source HTML comment and sibling: playwright getComputedStyle on `https://www.pixnet.net`, 2026-06-08
- No YAML `ds.type`. No published component-token specification is named. B2a uses the no-published-spec form (`not PIXNET-authored or a separately published UI specification`).
- Unobserved hover / pressed treatments are omitted rather than marked `not-applicable` for missing observation. Applicability follows control meaning: `登入` is a login commit, so loading / error / success stay `applicable` with treatment omitted where not recorded; Ghost is a secondary action, so loading / error / success are `not-applicable` on that role; trending tag and article card are destinations, so loading / error / success are `not-applicable` on those roles; Quiet/Nav is a destination link; the search/form input keeps error `applicable` as a form field and closes loading / success on the query-field role. Disabled stays `applicable` on interactive controls. Hot / new badge and Tint badge are `kind: non-interactive` with no applicability map (C4). Navigation chrome omits kind and map (C4). State coverage is not claimed complete.
- No focus-visible treatment is asserted anywhere: the source records no `focus-visible` capture. The observed-state name Focus (`2px solid #ff7200` outline) is not promoted as `focus-visible` (B1).
- Official about URL, mid-2000s origin, and creator-economy feature names are narrative / brand-source context, not extra interface-token sources.
- B3 is held in Foundations Motion in full text (five evidence kinds + per-component gate) and restated in Governance Named gaps.

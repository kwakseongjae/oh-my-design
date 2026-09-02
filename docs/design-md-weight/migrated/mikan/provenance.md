# mikan provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/mikan/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | mikan |
| name | mikan |
| country | JP |
| category | education |
| homepage | `https://mikan.link/` |
| primary_color | `#ff4c0a` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=mikan.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-17 |
| added | 2026-06-17 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-17 |
| components_harvested | true |

The favicon slug is dual-destination: identity metadata here, and a portable asset record in `DESIGN.md` §3. It is a favicon-service URL keyed to `mikan.com` rather than a mikan-hosted brand file, and the portable record says so.

Token note from source, kept verbatim: "primary = corporate-site brand orange (#ff4c0a) on every CTA + section heading; mikan for School (school.mikan.com) runs a warmer marigold (#fd9b12) + accent orange (#ff7f09) with a 3D hard-shadow (#e26f00) button. Deep navy (#001c46) bands + near-black text (#000e22 / #333333). CJK display via Hiragino Kaku Gothic ProN."

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-17 |
| added | 2026-06-17 |
| tokens.extracted | 2026-06-17 |
| Tier 1 live inspect | 2026-06-17 |

The source footer records the verification verbatim as **Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none. Two-surface palette split documented intentionally: corporate brand orange `#ff4c0a` (flat 6px CTA) vs mikan for School accent orange `#ff7f09` (3D hard-shadow 8px CTA) + marigold `#fd9b12`. Both retained as distinct variant subgroups.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| corporate | corporate-site | `https://mikan.link/` | 2026-06-17 |
| school | toB product surface | `https://school.mikan.com/` | 2026-06-17 |

### Tier 1 (brand-owned, as listed in the source footer)

- `https://mikan.link/` — corporate site, live computed style
- `https://school.mikan.com/` — mikan for School toB product surface, live computed style

### Tier 2 (no usable record)

- getdesign.md/mikan — no entry (empty). Sibling WebFetch returned "No designs found for 'mikan'."
- styles.refero.design/?q=mikan — no brand-specific result (only default trending cards returned)

Those directory findings describe this catalog's coverage. They stay here. They are lookup queries, not portable copy.

### Narrative (not interface tokens)

- Public mikan DesignSystem (Figma) documented by mikan designers at note.com/jirosh1998, "Figmaのリファクタリングからはじめるデザインシステムの構築" — semantic color model (Background/Surface/Text/UI/Border/Social) with "mikan Orange" as the primary brand color; Component/Type/Size/status naming; cross-platform iOS/Android JP+EN typography. Exact in-app hex codes are not disclosed there. Hex values in the portable body come from the live website inspection, not from that article.

## Claim ledger

Claims use the two inspected surfaces. `corporate` = `https://mikan.link/` / computed-style / 2026-06-17. `school` = `https://school.mikan.com/` / computed-style / 2026-06-17.

| Claim | Surface |
|---|---|
| `tokens.colors.primary` `#ff4c0a` | corporate |
| `tokens.colors.marigold` `#fd9b12` | school |
| `tokens.colors.accent-orange` `#ff7f09` | school |
| `tokens.colors.orange-shadow` `#e26f00` | school |
| `tokens.colors.navy` `#001c46` | corporate |
| `tokens.colors.ink` `#000e22` | corporate |
| `tokens.colors.text` `#333333` | corporate |
| `tokens.colors.canvas` `#ffffff` | corporate |
| `tokens.colors.surface` `#f7f4f3` | corporate |
| `tokens.colors.surface-grey` `#fafafa` | corporate |
| `tokens.colors.surface-alt` `#f9f9f9` | corporate |
| `tokens.colors.hairline` `#eeeeee` | corporate |
| `tokens.colors.muted` `#666666` | corporate |
| `tokens.colors.on-primary` `#ffffff` | corporate / school |
| `tokens.typography.family.display` `Hiragino Kaku Gothic ProN` | corporate |
| `tokens.typography.family.body` `Noto Sans JP` | school |
| `tokens.typography.family.numeral` `Oswald` | school |
| `tokens.typography.hero.size / weight / lineHeight / use` | corporate |
| `tokens.typography.section.size / weight / use` | corporate |
| `tokens.typography.section-jp.size / weight / use` | corporate |
| `tokens.typography.school-h2.size / weight / lineHeight / use` | school |
| `tokens.typography.school-h3.size / weight / use` | school |
| `tokens.typography.step-num.size / weight / use` | school |
| `tokens.typography.body.size / weight / lineHeight / use` | corporate / school |
| `tokens.typography.nav.size / weight / use` | corporate |
| `tokens.typography.button.size / weight / use` | corporate |
| `tokens.spacing.xs / sm / md / base / lg / xl / xxl / section` | corporate / school |
| `tokens.rounded.sm / md / lg / xl / full` | corporate / school |
| `tokens.shadow.none` `"none"` | corporate |
| `tokens.shadow.hard-3d` `"#e26f00 0px 4px 0px 0px"` | school |
| `tokens.components.button-primary` `type: button` | corporate |
| `tokens.components.button-school-fill` `type: button` | school |
| `tokens.components.button-school-outline` `type: button` | school |
| `tokens.components.button-download` `type: button` | school |
| `tokens.components.news-card` `type: card` | corporate |
| `tokens.components.job-card` `type: card` | corporate |
| `tokens.components.review-card` `type: card` | corporate |
| `tokens.components.nav-link` `type: tab` | corporate |
| `tokens.components.step-badge` `type: badge` | school |

## Sibling handling (`web/references/mikan/.verification.md`)

The sibling exists — confirmed with `find web/references/mikan -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record, and none of its structural classifications was promoted into `DESIGN.md`.

Its own record, transcribed here:

- Inspected 2026-06-17. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless), realistic Chrome UA + `ja-JP` locale, goto each surface `domcontentloaded` + 3.5s settle, cookie/modal dismissal pass, then `getComputedStyle` on body, h1/h2/h3, header/nav, buttons, links, cards, plus a full-DOM background/text/radius color-frequency scan.
- Sources: `https://mikan.link/`; `https://school.mikan.com/`.
- corporate body: `font-family: -apple-system, "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif`; canvas `background-color: rgb(249, 249, 249)` / sections `rgb(247, 244, 243)` (#f7f4f3)
- Corporate CTA "採用情報" (`a[href=/careers]`): `background-color: rgb(255, 76, 10)` (#ff4c0a); `color: rgb(255, 255, 255)`; `border-radius: 6px`; `padding: 15px 30px`; `font-size: 15px`; `font-weight: 700`; height 48px
- CTA "View More　→": `background-color: rgb(255, 76, 10)` (#ff4c0a); white text; `border-radius: 6px`; `padding: 15px 30px`; height 48px
- Hero H2 "小さな「できた」の": `font-size: 36px`; `font-weight: 900`; `color: rgb(0, 0, 0)`; Hiragino stack
- Section label H2 "Service": `font-size: 60px`; `font-weight: 900`; `color: rgb(255, 76, 10)` (#ff4c0a)
- Section H2 "英語アプリmikan": `font-size: 36px`; `font-weight: 900`; `color: rgb(255, 76, 10)` (#ff4c0a)
- Nav link "Top"/"About"/"Members": `font-size: 16px`; `font-weight: 700`; `color: rgb(51, 51, 51)` (#333333)
- News card "お知らせ...": `background-color: rgb(255, 255, 255)`; `color: rgb(51, 51, 51)`; `border-radius: 10px`; `padding: 20px`; `box-shadow: none`
- Careers card "🍊 英語アプリmikanフロントエンドエンジニア": `background-color: rgb(255, 255, 255)`; `border-radius: 12px`; `padding: 20px`
- Review card "「学習意欲が向上し...": `background-color: rgb(255, 255, 255)`; `border-radius: 8px`
- corporate bg frequency scan: `rgb(255,255,255)` ×18, `rgb(247,244,243)` ×7, `rgb(255,76,10)` ×6, `rgb(0,28,70)` ×6, `rgb(250,250,250)` ×3, `rgb(249,249,249)` ×2, `rgb(238,238,238)` ×1
- corporate text frequency scan: `rgb(51,51,51)` ×149, `rgb(0,14,34)` ×63, `rgb(0,0,0)` ×53, `rgb(255,255,255)` ×47, `rgb(255,76,10)` ×15, `rgb(102,102,102)` ×5
- corporate radius frequency scan: `10px` ×8, `8px` ×8, `20px` ×6, `12px` ×5, `4px` ×5, `50%` ×5, `320px` ×5, `6px` ×4
- box-shadow: `none` across hero, nav, headings, cards
- document.title: "株式会社mikan"
- School primary CTA "無料トライアルのお申し込み": `background-color: rgb(255, 127, 9)` (#ff7f09); `border-radius: 8px`; `padding: 17px 30px`; `box-shadow: rgb(226, 111, 0) 0px 4px 0px 0px`; `font-size: 16px`; height 61px
- School secondary CTA "資料請求する": `background-color: rgb(255, 255, 255)`; `border: 2px rgb(255, 127, 9)`; `border-radius: 8px`; `padding: 17px 30px`; `box-shadow: rgb(226, 111, 0) 0px 4px 0px 0px`; height 65px
- School download button "資料ダウンロード": `background-color: rgb(253, 155, 18)` (#fd9b12); `border-radius: 4px`; `font-size: 15px`; `font-family: Lato`; height 44px
- School section H2 "生徒の学習が続く仕組み": `font-size: 32px`; `font-weight: 700`; `color: rgb(51, 51, 51)`; `font-family: "Noto Sans"`
- School feature H3 "自分に合った出題方法で学習できる！": `font-size: 24px`; `font-weight: 700`; `font-family: "Noto Sans JP"`
- Step numeral H2 "01": `font-size: 46px`; `font-weight: 600`; `color: rgb(253, 155, 18)` (#fd9b12); `font-family: Oswald`
- School case-study card "私立|高等学校...": `background-color: rgb(255, 255, 255)`; `border-radius: 8px`; `padding: 24px`; `border: 4px rgb(250, 250, 250)`
- document.title: "mikan for School | 1000万DLされた英語アプリmikanの学校・塾向け学習サービス"

Values and strings the sibling carries that the migration source does not, kept here and not promoted:

- The capture method string `playwright getComputedStyle (live DOM)` and the UA / `ja-JP` / 3.5s settle details.
- Hero H2 color `rgb(0, 0, 0)` and the truncated quotation `小さな「できた」の` (the source body writes charcoal `#333333` / ink `#000e22` for text and the mission string with 『できた』).
- CTA writing `View More　→` with a fullwidth space (the source body writes `View More →`).
- Frequency-scan counts (`×18`, `×149`, `×63`, …).
- School case-study card padding `24px` and `border: 4px rgb(250, 250, 250)`.
- School `document.title` containing `1000万DL`.
- `a[href=/careers]` selector on 採用情報.
- Review-card truncated quote `「学習意欲が向上し...`.

Hex values, Hiragino / Noto / Oswald / Lato, the two Tier 1 URLs, component geometry, and the issued Japanese labels also stand in the source DESIGN.md and are portable there.

## Byte-form notes

- YAML hex is lowercase (`#ff4c0a`, `#fd9b12`, `#ff7f09`, `#e26f00`, `#001c46`, `#000e22`, `#333333`, `#ffffff`, `#f7f4f3`, `#fafafa`, `#f9f9f9`, `#eeeeee`, `#666666`). Source prose uses the same lowercase. Both writings stay on the same keys.
- The same hex `#ffffff` is recorded in two color-token roles and is not merged: YAML `tokens.colors.canvas` and YAML `tokens.colors.on-primary`. The same hex also sits on component paths that are not those color keys: `tokens.components.button-school-outline.bg`, news-card / job-card / review-card `bg`, and Top Nav background (source §4; no YAML color key). Those paths stay separate from canvas and from on-primary.
- YAML spacing and radius steps are unitless (`xs: 4` … `section: 64`; `sm: 4` … `full: 320`). Source §5 writes the same ladder with a `px` suffix. Both writings stay. `full: 320` stays a step; source §5 also writes Pill (320px / full).
- Corporate CTA radius `6px` and news-card radius `10px` are not YAML `tokens.rounded` keys. They stay on those components.
- YAML `tokens.typography.hero.lineHeight` is `1.4`; `school-h2.lineHeight` is `1.5`; `body.lineHeight` is `1.7`. Those unitless ratios stay ratios (A1a). Source §3 writes `normal` on the roles that have no YAML lineHeight.
- YAML `tokens.typography.step-num.weight` is `600`. Source §3 writes weight `500–600` for Oswald. Both writings stay.
- YAML `tokens.typography.family.body` is `Noto Sans JP`. Source §3 School Section Title is `Noto Sans`; School Feature Sub-head is `Noto Sans JP`. Both writings stay.
- YAML `tokens.components.nav-link.use` is `Top nav item (Top / About / Members)`. Source §4 names `"Top", "About", "Members", "News", "Contact"`. Both writings stay.
- YAML `tokens.components.button-primary.use` is `Corporate CTA — 採用情報 / View More`. Source §4 writes `"採用情報", "View More →"`. Both writings stay.
- YAML component `font` shorthands (`15px / 700`, `16px / 400`, `15px / 400`, `16px / 700`, `46px / 600 Oswald`) stay beside the §4 writings.
- YAML `tokens.shadow.none` is `"none"`. YAML `tokens.shadow.hard-3d` is `"#e26f00 0px 4px 0px 0px"`.
- YAML `tokens.components.nav-link.active` is `"brand orange #ff4c0a text on active"`.

## Proof notes

- Two brand-owned Tier 1 web surfaces, live-inspected 2026-06-17. Token-level claims (§1–§9 in the source) are sourced from that live inspection.
- `tokens.source` is `live-extract`; `tokens.extracted` is 2026-06-17. `components_harvested: true`; nine component records in the source token set.
- Uncaptured hover/`focus-visible` treatments are omitted as values. They are not `not-applicable`; applicability follows control role. State coverage is not claimed complete.
- A public mikan DesignSystem (Figma) is documented by mikan designers. Derived-editorial qualifications therefore close with the published-spec form: not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers (rulebook v12 B2a 전제 주석). Exact in-app hex codes are not disclosed in that article; portable hex values come from the live website inspection.
- The source's own closing note flags interpretive claims (e.g. "the design is the mission rendered visually", "one bright signal", "flat and fast with a tactile reward") as editorial readings connecting observed design to the stated mission, not directly sourced mikan statements.

## Derived editorial inventory

Sites in the portable `DESIGN.md` that carry an adjacent complete qualifier. Complete form used: "a derived editorial implementation inference from the verified surfaces; they are not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers." This is an index of the derived-reading sites, not a completeness claim. Portable `DESIGN.md` carries 26 complete B2a qualifications. This table is 26 data rows. Preamble sentences on this page are not portable qualifications.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope bound | two inspected URLs as this contract's token surfaces; 英語アプリmikan as named consumer product rather than as a token-capture surface; Figma DesignSystem as corroborating narrative rather than as the source of these hex values; values attached to the surface that established them |
| Experience Scope atmosphere | surfaces read exactly as the product promises; bright, friendly, and relentlessly encouraging; namesake orange doing the heavy lifting; eye trained to read orange as go-here; never shouty; confident but never corporate-cold; visual equivalent of the mission string |
| Experience Scope two-surface split | deliberately playful 3D hard-shadow; education brand that looks like learning should feel — bright, low-friction, and quietly rigorous; corporate/School split as two variant subgroups rather than as a conflict |
| Experience Scope brand narrative | behavioral-premise reading; refuses/embraces pairing; homepage and partnership facts as narrative context that does not by itself supply interface tokens; "the design is the mission rendered visually" / learning that feels like a stack of small wins |
| Primary tasks | Selecting the three primary tasks from recorded surfaces and controls; not from the persona section |
| Audience | Dropping the fictional biographies; reading the source's publicly observable segment list as audience |
| Distinctive traits | Grouping the eight Key Characteristics; readings inside the bullets |
| Principles | Five numbered stems from source §12 and their UI implications; "one bright signal" / "flat and fast with a tactile reward" as editorial |
| Application rules | Eight Do rules and the reasons attached to them |
| Avoid | Eight Don't rules and the reasons inside them |
| Semantic color | Characterizations (namesake citrus, single saturated action/identity hue, warmer companion, barely-there peach-grey, primary separation device); same-hex keys kept separate (`canvas` `#ffffff` off `on-primary` `#ffffff`) |
| Semantic color component-local | Corporate-CTA 6px radius and news-card 10px radius kept on those components rather than promoted to a YAML rounded step |
| Spacing | Unitless YAML steps not rewritten as replacement px; 30px CTA padding as generous tappable hit area; 24px kept as measured card padding rather than inserted into the YAML scale |
| Shape | Five YAML steps as five keys; pairing YAML `sm` / `md` / `lg` / `xl` / `full` with source XSmall / Medium / Large-careers / XLarge / Pill names rather than dropping those names; 6px and 10px as control-local radii; rounded steps off same-number spacing steps; ladder as conservative rather than as a universal radius scale |
| Elevation | `box-shadow: none` range as a near-shadowless corporate system; School offset as the one hard-offset exception rather than as a general elevation ladder; split as intentional |
| Motion qualitative | Durations, easing roles, signature motion, and motion rules as sitting outside the live-inspect attribution |
| Motion B3 gate | Omitting the three unsourced curves; keeping use names that do not restore a curve; keeping duration rows as duration tokens; keeping the signature 3D press, fade-in-from-below, brief-bouncy-accent-with-no-gratuitous-spring stance, and reduced-motion collapse; holding the five-kind per-component promotion gate |
| Font evidence | Evidence-class application readings for Figma corroboration without in-app hex; Hiragino vs Noto vs Oswald vs Lato; fallbacks not presented as the brand face |
| Family | Corporate Hiragino stack vs School Noto Sans JP — both gothic, both friendly, never serif for UI; Oswald as numeral-only; "the Google CJK web standard" as the source's own label for Noto Sans JP rather than as a separately published family token |
| Type roles | YAML numbers and unitless line-heights kept beside §3 px / rem / normal; YAML `use` verbatim; YAML 36/60/32/24/46/16/15 kept off spacing and radius steps; 1.4 off 1.5 off 1.7 |
| Typography principles | Five type-role rules (Heavy display, Orange as a typographic role, CJK-first stack, Oswald owns numerals, Two surfaces two body fonts) treated as source typography-section rules rather than as a separately published type specification |
| Assets | Google s2 favicon as catalog identity pointer keyed to `mikan.com` rather than a mikan-hosted brand file and rather than `mikan.link`; "sit flat (no shadow)" as consistent with the flat system |
| Capture record | Every kind verdict, every applicability verdict, and each Reason cell; Primitive type only when YAML records it; kind omitted on the three cards; Step Numeral non-interactive; Corporate CTA and Top Nav as destination / grouping-select so loading/error/success are not-applicable; School Primary / Secondary / Download as in-place commits; nine-row table as product-level recorded treatments; generic focus as a different evidence kind from `focus-visible`; YAML nav `active` as an additional recorded variant outside the seven canonical states; not a complete state-coverage claim |
| Layout & Platforms | Friendly breathing room / flat segmentation / color as anchor as layout philosophy; breakpoint table as source-stated intended behavior rather than as a captured cross-viewport pass; 48/61/65/44px as desktop-capture measurements; “sit flat (no shadow)” on corporate illustrations as consistent with the flat system |
| Content & Locales | Voice adjectives, register, tone table, limiting voice samples to the three quoted public lines, and the forbidden-register list |
| Governance Named gaps | List as unnamed values rather than as coverage of domains the source never named |

A public mikan DesignSystem (Figma) is documented by mikan designers, so every derived-editorial close uses the published-spec form rather than the toss-form that would assert the absence of a published specification.

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13 Personas — three fictional archetypes | Whole section dropped. The source's own persona header and its closing note both state that the entries are fictional archetypes and that the names are illustrative. Fictional personas are neither promoted to verified tasks nor re-hosted in a sidecar. No name, age, or city is written here (D2, D2a). The source's publicly observable segment list stays in Audience. |
| Source §9 Agent Prompt Guide | Deleted as tool-facing prompt. Brand constraints already live in Foundations, Typography, Components, Experience application rules, and Avoid. Checked value by value before deletion: see the next paragraph. |
| Unattributed cubic-bezier curves | Removed from the portable body as unsourced curves; kept here verbatim: `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`. The sibling's method and its raw samples record no transition, animation, duration, or easing observation, and `cubic-bezier(0.4, 0.0, 1, 1)` is the example value that `spec/omd-v0.1.md` carries and defines as a non-brand implementation default that must not be moved into a reference. The roles, uses, durations, signature motion, and reduced-motion rule stay in the portable body. |
| Sibling-only computed values listed under Sibling handling | Ledger only |
| Tier 2 getdesign / refero lookup detail | Ledger only |
| Legacy H1 `# Design System Inspiration of mikan` | Replaced by the Core v2 identity line `# mikan Design System`. |
| Legacy footer `**Verified:** … / Tier 1 / Tier 2 / Conflicts unresolved` | Moved to Freshness and Sources above. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. mikan Orange `#ff4c0a`, School accent `#ff7f09` + 3D shadow `#e26f00`, marigold `#fd9b12`, Brand Navy `#001c46`, Charcoal `#333333`, Ink Navy `#000e22`, Muted Grey `#666666`, Pure White `#ffffff`, Warm Canvas `#f7f4f3`, Hairline `#eeeeee`, Hiragino Kaku Gothic ProN weight 900 / 700, Noto Sans JP 700, Oswald 46px weight 600, 36px hero, 60px "Service", 6px corporate CTA 15px 30px padding 15px weight 700 "採用情報", School 8px 17px 30px 3D pair, news card 10px 20px no shadow, careers card 12px 🍊 prefix, numbered step Oswald '01' 46px weight 600 marigold, top nav Hiragino 16px weight 700 `#333333` with brand orange `#ff4c0a` on the active item — all are Experience, Foundations, Typography, or Components entries. §9 contributed no value that is absent elsewhere.

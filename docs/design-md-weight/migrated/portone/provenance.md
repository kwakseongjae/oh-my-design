# PortOne provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/portone/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | portone |
| name | PortOne |
| display_name_kr | 포트원 |
| country | KR |
| category | fintech |
| homepage | `https://www.portone.io` |
| primary_color | `#fc6b2d` |
| logo | `type: github`, `slug: portone-io` |
| omd format (source) | 0.1 |
| verified | 2026-06-26 |
| added | 2026-06-26 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-26 |
| components_harvested | true |

The GitHub-org slug is dual-destination: identity metadata here, and a portable asset record in `DESIGN.md` §3. The sibling records the resolved avatar URL; that URL is sibling-only and is not promoted as a PortOne-hosted brand file.

Token note from source, kept as ledger text: primary = live CTA orange gradient (`#fc6b2d`); secondary CTA = charcoal gradient (`#363a44`). Marketing surface uses Tailwind gray ink (`#111827`); the developer docs surface (`developers.portone.io`) shifts to slate ink (`#0f172a` / `#334155`). Mostly shadowless — flat tinted surfaces + hairlines.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-26 |
| added | 2026-06-26 |
| tokens.extracted | 2026-06-26 |
| Tier 1 live inspect (source footer) | 2026-06-26 |

The source footer records the verification verbatim as **Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand-owned surfaces). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none (marketing gray-ink vs docs slate-ink is an intentional two-surface split, documented in source §2; orange `#fc6b2d` accent is constant across both).

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing homepage | `https://www.portone.io` | 2026-06-26 |
| docs | developer docs | `https://developers.portone.io` | 2026-06-26 |
| blog | official company blog | `https://blog.portone.io` | named; HEAD 200 |
| github | official GitHub org | `https://github.com/portone-io` | named; HEAD 200 |

### Tier 1 (as listed in the source footer)

- `https://www.portone.io` (homepage, live computed style)
- `https://developers.portone.io` (developer docs, live computed style)
- `https://blog.portone.io`
- `https://github.com/portone-io`

`https://www.portone.io` is dual-destination: Experience Scope in `DESIGN.md` and this ledger. `https://developers.portone.io` is dual-destination the same way. `https://blog.portone.io` and `https://github.com/portone-io` are named sources in both files; they are not token surfaces.

### Tier 2

- getdesign.md/portone — NOT FOUND (no entry). Sibling WebFetch returned `No designs found for 'portone'.`
- styles.refero.design/?q=portone — not listed (search returns only generic gallery categories)

Both Tier 2 catalogs under-cover PortOne. The source assigns proof to the Tier 1 brand-owned surfaces. No Tier 1 ↔ Tier 2 conflicts (Tier 2 silent).

### Narrative (not interface tokens)

- KDPRESS rebrand article (kdpress.co.kr, idxno=117887): Iamport → PortOne rebrand on 2023-02-06; CEO 정영주; founded 2015 as Iamport; brand narratives "One to Beyond, First Chapter, Asia No.1"; philosophy "세상 모든 방식의 결제를 가능하게 하는 통합 솔루션"; ~10조원 annual TPV (2022), ~2,300 merchants.
- PortOne homepage / company surfaces: 8 countries, ~3,000 customers, 100+ payment options via one integrated API; entity 코리아포트원 (Korea PortOne Co., Ltd.).

## Sibling handling (`web/references/portone/.verification.md`)

The sibling exists — confirmed with `find web/references/portone -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-26. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless), realistic Chrome UA + `ko-KR` locale, `goto … waitUntil:'load'`, cookie/modal dismissal pass, then `getComputedStyle` on body, h1/h2/h3, header/nav, buttons, anchors (incl. inner gradient-fill children), cards, inputs, plus a full-DOM background/text/radius/font frequency scan across two brand-owned surfaces.
- Sources: `https://www.portone.io` (marketing homepage, live computed style — brand-owned); `https://developers.portone.io` (developer documentation, live computed style — brand-owned); `https://blog.portone.io` (official company blog — brand-owned, HEAD 200); `https://github.com/portone-io` (official GitHub org — brand-owned, HEAD 200)
- body (homepage): `font-family: "Pretendard Variable Variable", Pretendard`; `background-color: rgb(255, 255, 255)` (`#ffffff`)
- hero H1 "AI로 결제와 재무 운영을자유롭게": `font-size: 56px`; `font-weight: 400`; `color: rgb(17, 24, 39)` (`#111827`); Pretendard Variable
- section H2 "결제 연동부터 글로벌 재무 운영까지하나의 AI 재무 인프라로": `font-size: 48px`; `font-weight: 1000`; `color: rgb(17, 24, 39)` (`#111827`)
- eyebrow H2 "원 페이먼트 인프라": `font-size: 24px`; `font-weight: 1000`; `color: rgb(252, 107, 45)` (`#fc6b2d`)
- sub-section H3 "사업의 시작부터 확장까지,단 하나의 결제 인프라": `font-size: 36px`; `font-weight: 400`; `color: rgb(17, 24, 39)` (`#111827`)
- primary CTA "도입문의" inner fill: `background-image: linear-gradient(rgb(252, 107, 45) 0% …)` (`#fc6b2d`); `border-radius: 999px`; `padding: 12px 20px`; label white `rgb(255, 255, 255)`
- secondary CTA "시작하기" inner fill: `background-image: linear-gradient(rgb(54, 58, 68) 0% …)` (`#363a44`); `border-radius: 999px`; `padding: 12px 20px`
- header CTA "도입문의" label `<p>`: `color: rgb(255, 255, 255)`; `font-size: 15px`; `font-weight: 1000`; pill `border-radius: 64px`; `padding: 16px`
- nav links ("가격안내","헬프센터","개발가이드","블로그"): `background-color: rgb(255, 255, 255)`; `border-radius: 64px`; `padding: 16px`; `font-size: 12px`/14px; height 40px
- tinted card: `background-color: rgb(249, 250, 251)` (`#f9fafb`); `border-radius: 30px`; `padding: 20px`; `box-shadow: none`
- white feature card: `background-color: rgb(255, 255, 255)`; `border-radius: 20px`; `padding: 24px`; `box-shadow: none`
- featured card glow (rare): `box-shadow: rgba(180, 156, 197, 0.1) 0px 0px 16px 4.13px`
- top background frequency: `rgb(255,255,255)` ×49 (`#ffffff`), `rgb(249,250,251)` ×7 (`#f9fafb`), `rgb(230,241,255)` ×7 (`#e6f1ff`), `rgb(209,213,219)` ×7 (`#d1d5db`), `rgb(17,24,39)` ×5 (`#111827`), `rgb(254,242,242)` ×4 (`#fef2f2`), `rgb(220,252,231)` ×3 (`#dcfce7`), `rgb(252,107,45)` ×2 (`#fc6b2d`), `rgb(243,244,246)` ×2 (`#f3f4f6`)
- top text-color frequency: `rgb(17,24,39)` ×81 (`#111827`), `rgb(209,213,219)` ×33 (`#d1d5db`), `rgb(107,114,128)` ×23 (`#6b7280`), `rgb(75,85,99)` ×16, `rgb(252,107,45)` ×13 (`#fc6b2d`), `rgb(55,65,81)` ×12 (`#374151`), `rgb(223,76,76)` ×8 (`#df4c4c`)
- top non-zero radii frequency: `6px` ×23, `999px` ×22, `16px` ×21, `64px` ×8, `20px` ×8, `30px` ×5
- document.title (homepage): "통합 결제·정산 AI 재무 인프라 | 포트원"
- docs body: `font-family: "Pretendard Variable", Pretendard, -apple-system…`
- docs heading text: `color: rgb(15, 23, 42)` (`#0f172a`); nav items "API & SDK","릴리즈 노트" `font-size: 14px`; `font-weight: 500`
- docs body/sidebar text: `color: rgb(51, 65, 85)` (`#334155`) — ×229 most frequent text color
- muted / search hint: `color: rgb(148, 163, 184)` (`#94a3b8`); search button "검색⌘K"
- search field button: `border-radius: 6px`; `padding: 6px 12px`
- sidebar quick-guide links: `border-radius: 4px`; `padding: 0px 8px`; `color: rgb(100,116,139)`
- orange accent present: `rgb(252, 107, 45)` (`#fc6b2d`) appears as bg + accent
- document.title (docs): "포트원 결제 연동 Doc"
- Logo: `type: github, slug: portone-io` — `https://github.com/portone-io.png?size=64` → HTTP 200, 1734 bytes, `image/png`. Alternatives: Google s2 favicon `domain=portone.io&sz=128` → 200, 1596B image/png; `cdn.simpleicons.org/portone` → 404.

Values and forms the sibling carries that the visible source body does not, kept here as corroboration and not promoted into the portable body as new facts:

- Capture typo `"Pretendard Variable Variable"`
- Missing-space capture strings `AI로 결제와 재무 운영을자유롭게` / `글로벌 재무 운영까지하나의` / `확장까지,단 하나의`
- Header CTA computed `font-size: 15px` / `font-weight: 1000`
- Nav computed `font-size: 12px` beside the source's 14px
- Featured-card glow compact writing `4.13px` (portable token keeps YAML `4px`)
- Frequency hex `rgb(75,85,99)`
- Search button copy `검색⌘K`
- Docs nav items `API & SDK`, `릴리즈 노트`
- document.title `포트원 결제 연동 Doc`
- Sidebar radius `4px`, padding `0px 8px`, color `rgb(100,116,139)`
- Logo bytes `1734` / Google s2 `1596B` / Simple Icons 404
- Method strings `playwright getComputedStyle`, `ko-KR`, `waitUntil:'load'`
- Resolved avatar URL `https://github.com/portone-io.png?size=64`

Hex values those RGB samples convert to (`#fc6b2d`, `#363a44`, `#111827`, `#0f172a`, `#334155`, `#94a3b8`, `#ffffff`, `#f9fafb`, `#f3f4f6`, `#d1d5db`, `#e6f1ff`, `#fef2f2`, `#dcfce7`, `#374151`, `#6b7280`, `#df4c4c`) are already in the source body. Nav height `40px` is already in source §8.

The sibling excludes getdesign.md / refero.design / Google favicon from the KR brand-owned count. That exclusion is recorded here; it is not a new token.

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.2` hero, `1.25` display, `1.35` section, `1.5` body). They are carried as ratios in the portable body, never converted to a single px form (A1a). Source §3 also writes `~1.2`, `~1.25`, `~1.35`, and `normal` on roles whose YAML has no lineHeight; both writings stay.
- The source frontmatter records spacing and radius steps unitless (`xs: 4` … `section: 64`; `xs: 6`, `sm: 8`, `md: 16`, `lg: 30`, `full: 999`). The portable body keeps both the unitless steps and the px forms the visible sections use. `tokens.rounded.full: 999` stays a step. The source also writes `999px`.
- `tokens.spacing.base: 16` is not `tokens.rounded.md: 16` and not the 16px body role. `tokens.spacing.md: 20` is not card-surface padding `20px` and not card-white radius `20px`. `tokens.spacing.lg: 24` is not card-white padding `24px` and not eyebrow `24`. `tokens.spacing.xl: 48` is not Display H2 `48`. `tokens.spacing.section: 64` is not the 64px nav-item radius. `tokens.rounded.full: 999` is not the 64px nav pill.
- Frontmatter `primary_color` is `#fc6b2d`, the same byte form as `tokens.colors.primary`.
- YAML `family.sans` is `Pretendard Variable`. Source §3 writes `Pretendard Variable` with `Pretendard` and system fallbacks; the fallbacks are not presented as the brand face.
- Same-hex role splits the source already assigns, kept on separate paths: `#ffffff` is `tokens.colors.canvas` and `tokens.colors.on-primary`, and is also White Feature Card background, Navigation background, and Docs Search Field background; `#fef2f2` is error-bg and badge-error background; `#dcfce7` is success-bg and badge-success background; `#374151` is gray-strong and badge-success foreground. `#fc6b2d` is `tokens.colors.primary` and Primary CTA background; `#363a44` is `tokens.colors.secondary` and Secondary CTA / Header Nav CTA background; `#f9fafb` is `tokens.colors.surface` and Tinted Surface Card background; `#111827` is `tokens.colors.ink` and Navigation / card text.
- YAML `button-secondary.font` is `12px / 400`; YAML `tokens.typography.button` is `15` / `700`. Both stay unmerged.
- YAML glow is `rgba(180,156,197,0.1) 0px 0px 16px 4px`. Sibling compact writing `4.13px` stays here.

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 Personas — three entries (name, age, city included) | Fictional archetypes informed by publicly observable segments. Not promoted to verified tasks and not re-hosted in a sidecar. Names, ages, cities, motivations, and affiliation classifications are dropped and are deliberately not restated here (D2, D2a). The source's own group wording (Korean e-commerce developers, finance/operations teams, cross-border merchants) lands in Audience. |
| §9 Agent Prompt Guide | Tool-facing copy-paste prompts and restatements of rules stated elsewhere. Checked value by value before deletion: see the next paragraph. |
| Three unsourced easing curves | Curve values only. `ease-enter` / `ease-exit` / `ease-standard` roles and uses stay. The three cubic-bezier values are not traceable to PortOne evidence. The omitted `ease-exit` value matches the legacy authoring template. Durations 120ms / 200ms / 320ms and the motion rules stay. The B3 promotion condition is kept in the portable body. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Signal Orange `#fc6b2d`, Charcoal `#363a44`, Pure White `#ffffff`, Surface Gray `#f9fafb` / Surface Alt `#f3f4f6`, Ink `#111827`, Slate `#0f172a` / `#334155`, Gray Strong `#374151`, Body Gray `#6b7280`, Muted Slate `#94a3b8`, Hairline `#d1d5db`, Accent Blue `#e6f1ff`, Success `#dcfce7`, Error `#df4c4c` on `#fef2f2` — Semantic color. Eyebrow 24px Pretendard Variable weight 1000 orange `#fc6b2d` — Type roles Eyebrow. H1 56px weight 400 `#111827` — Type roles Hero H1. Orange CTA pill `#fc6b2d` / white text / 999px / 12px 20px / 15px weight 700 / `도입문의` — Primary CTA. Charcoal secondary pill `#363a44` / white text / 999px / `시작하기` — Secondary CTA. Feature card white `#ffffff` / `1px solid #d1d5db` / 20px radius / no shadow / title 36px weight 400 `#111827` / body 16px weight 400 `#6b7280` — White Feature Card + Type roles. Tinted section `#f9fafb` / eyebrow 24px weight 1000 orange / H2 48px weight 1000 `#111827` / cards white with `#d1d5db` hairline and 30px radius — Tinted Surface Card + Type roles + Layout. Docs layout slate ink `#0f172a` / `#334155` / `#94a3b8` / search white / `1px solid #d1d5db` / 6px / 6px 12px / sidebar 14px weight 500 — Docs Search Field + Type roles Nav / Docs. Iteration-guide rules (Pretendard Variable everywhere; orange single action; no heavy shadows; pill geometry; heading color never pure black; charcoal secondary; quiet status tints) — Principles + Application rules + Avoid.

## Claim ledger

| Claim | Surface |
|---|---|
| `tokens.colors.primary` / `secondary` / `ink` / `body` / `gray-strong` / `border` / `surface` / `surface-alt` / `canvas` / `accent-blue` / `error` / `error-bg` / `success-bg` / `on-primary` | live `https://www.portone.io` |
| `tokens.colors.ink-slate` / `body-slate` / `muted` | live `https://developers.portone.io` |
| `tokens.typography.family.sans` | live homepage + developer docs |
| `tokens.typography.hero` / `display` / `section` / `eyebrow` / `body` / `nav` / `button` / `caption` | live homepage + developer docs |
| `tokens.spacing.xs` / `sm` / `base` / `md` / `lg` / `xl` / `section` | source token set (live-extract) |
| `tokens.rounded.xs` / `sm` / `md` / `lg` / `full` | live geometry + token-set full step |
| `tokens.shadow.none` / `glow` | live homepage (`box-shadow: none`; rare glow on a featured card) |
| `tokens.components.button-primary` / `button-secondary` / `nav-link` / `card-surface` / `card-white` | live `https://www.portone.io` |
| `tokens.components.input-search` | live `https://developers.portone.io` |
| `tokens.components.badge-success` / `badge-error` | source token set (live-extract) |
| Founding 2015 as 아임포트 (Iamport); 코리아포트원; 정영주; rebrand 2023-02-06; "One to Beyond, First Chapter, Asia No.1"; "세상 모든 방식의 결제를 가능하게 하는 통합 솔루션"; ~10조원 TPV (2022); ~2,300 merchants; 8 countries / ~3,000 customers / 100+ payment options | source §11 narrative (KDPRESS + homepage/company surfaces; figures beyond the homepage classified by the source as widely reported public facts) |
| Voice strings "AI로 결제와 재무 운영을 자유롭게"; "결제 연동부터 글로벌 재무 운영까지 하나의 AI 재무 인프라로"; "통합 결제·정산 AI 재무 인프라 \| 포트원" | live homepage |

## Proof notes

- Two brand-owned Tier 1 web surfaces, recorded 2026-06-26. Computed interface values in the source body attach to `https://www.portone.io` and `https://developers.portone.io`.
- `components_harvested: true`; eight component records in the source token set. Header Nav CTA is §4-only and is labelled `not in the token set`.
- The source records no interaction expansion and no `focus-visible` string. Uncaptured hover, focus-visible, disabled, loading, error, and success treatments are omitted as values; they are not turned into `not-applicable` for lack of capture. Applicability follows control role. State coverage is not claimed complete.
- PortOne publishes no first-party design-system documentation in the source (getdesign NOT FOUND; refero not listed). Derived-editorial qualifications therefore close with the toss-form: not PortOne-authored or a separately published UI specification (rulebook v12 B2a).
- 2015, 아임포트 (Iamport), 코리아포트원 (Korea PortOne Co., Ltd.), 정영주 (Jung Young-joo), February 6, 2023, "One to Beyond, First Chapter, Asia No.1", "세상 모든 방식의 결제를 가능하게 하는 통합 솔루션", ~10조원 (2022), ~2,300 merchants, 8 countries / ~3,000 customers / 100+ payment options / ~25 PGs are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens. The §11 closing refusal/embrace sentence and the two-surface / dual-audience sentence stay in the same Scope paragraph.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Two inspected URLs as this contract's token surfaces; blog and GitHub org as named sources that do not supply computed tokens; values stay attached; YAML token note kept as the facts it names |
| Experience Scope `:11` | Atmosphere readings (calm/confident financial infrastructure rather than hard-sell SaaS; never-pure-black trustworthy weight; orange as "the action"; Pretendard Variable as de-facto Korean product font; light-versus-ultra-heavy as core tension; restraint with depth and a deliberate two-surface split; orange anchoring both surfaces) |
| Experience Scope `:13` | Founding-and-rebrand narrative (2015 / Iamport / 코리아포트원 / 정영주 / February 6, 2023 / three brand narratives / service philosophy / TPV and reach figures / refusal/embrace pairing / two-surface dual-audience closing sentence / figures-are-public-facts note) classified as context that does not by itself supply interface tokens; two-surface design read as mirroring a dual audience; source-named interpretive claims "one API one infrastructure" and "two-surface split mirrors dual audience" kept in that derived class |
| Primary tasks `:19` | Selecting the three surface-or-control outcomes as primary tasks; not from the source's persona section |
| Audience `:28` | Reading the source-named groups as this product's audience; dropping fictional archetypes rather than promoting them; carrying no occupation reconstructed from the dropped biographies |
| Distinctive traits `:32` | Classifying the list as a restatement of the source's Key Characteristics, and the groupings and readings inside them |
| Principles `:45` | Five numbered items as derived editorial implementation inference; every *UI implication* as the source's own editorial reading |
| Application rules `:55` | Eight Do rules and the reasons attached to them |
| Avoid `:68` | Seven Don't prohibitions and the reasons inside them |
| Semantic color `:84` | Role names from the source's own labels; hexes paired to token-set paths; marketing gray-ink off docs slate-ink; canvas off on-primary; error-bg off badge-error.bg; success-bg off badge-success.bg; gray-strong off badge-success.fg; YAML token note kept as the facts it names |
| Semantic color `:111` | Keeping both ramps as an intentional two-surface split; refusing to collapse them into one fill |
| Spacing `:115` | YAML unitless steps kept beside the §5 px writings rather than collapsed to one form |
| Spacing `:127` | Unitless steps kept on their own keys; `16`/`20`/`24`/`48`/`64` unmerged from rounded, type, and component paddings |
| Shape `:141` | Five rounded keys kept; YAML `999` off prose `999px`; card-white `20px` and nav `64px` off the rounded scale; repeated pill read as a rounded cadence rather than as one radius applied everywhere |
| Elevation `:152` | Near-shadowless reading; flatness as clean/fast/mobile-native; glow kept on a featured card rather than as a card-elevation ladder |
| Motion `:156` | Duration roles as this record states them, with no computed transition observation behind them |
| Motion `:164` | Classing the three curves as untraceable to PortOne evidence and omitting them on that ground |
| Motion `:172` | Five-kind promotion gate; a partial confirmation, including a match against an official source, is not that gate |
| Motion `:181` | Motion rules read as matching a flat, fast aesthetic; no-bounce stance as a steadiness signal for payments infrastructure |
| Font evidence `:189` | Evidence-class sorting; the resolution in each cell |
| Family `:205` | Pretendard Variable as the one face that carries every job on both captured surfaces; declared Pretendard / system fallbacks refused as the brand face |
| Type roles `:209` | YAML unitless beside §3 px/rem/`~`; YAML `use` verbatim; longer §3 notes beside them; size steps unmerged from spacing, rounded, and secondary-CTA `12px / 400` |
| Typography principles `:224` | Four typography principles as readings of the measured metrics |
| Assets `:236` | GitHub-org slug as a catalog identity pointer rather than a PortOne-hosted brand file; screenshots as first-party page content rather than a published illustration specification |
| Capture / applicability `:249` | Interactive-kind and applicability verdicts; omit-kind on the two card records; Primitive type attached only when YAML records that type; Header Nav CTA labelled `not in the token set`; not a complete state-coverage claim |
| State treatments `:253` | Nine §14 rows as system-level editorial treatments, not computed per-component observations |
| Layout `:463` | Breathing-room-over-density; flat tint-and-hairline segmentation; repeated pill as a rounded cadence |
| Layout `:465` | Breakpoint / collapsing / image / target-size rows as the source's own layout record, not as a newly measured cross-viewport specification |
| Content `:493` | Parenthetical labels on the three verbatim voice samples (hero H1, section H2, page title meta) |
| Content `:499` | English glosses placed beside the issued Korean rather than substituted |
| Content `:503` | Voice reading including the tone table (clear, infrastructural, quietly ambitious; capability-first; peer not lead) |
| Content `:515` | Forbidden-register exclusions (aggressive sales urgency, unexplained jargon, exclamation-heavy hype, fear-based FOMO; reliability not anxiety) |
| Named gaps `:551` | List as a catalog of source-unnamed values, not coverage of domains the source never named |

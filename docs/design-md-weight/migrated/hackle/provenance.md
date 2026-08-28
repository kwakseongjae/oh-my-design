# Hackle provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/hackle/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | hackle |
| name | Hackle |
| display_name_kr | 핵클 |
| country | KR |
| category | developer-tools |
| homepage | `https://hackle.io` |
| primary_color | `#0065ff` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=hackle.io&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-26 |
| added | 2026-06-26 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-26 |
| components_harvested | true |

The favicon slug is dual-destination: identity metadata here, and a portable asset record in `DESIGN.md` §3. It is a favicon-service URL keyed to the domain rather than a Hackle-hosted brand file, and the portable record says so.

Token note from source, kept as ledger text: primary = live hero CTA blue (`#0065ff`); secondary brand blue (`#2962ff`) drives the MUI-default action buttons and header CTA. Marketing chrome is built on Material UI (rgba-black text emphasis ladder, 4px button radius); custom 8px hero CTAs and 5px tool chips layer on top. Docs site is a separate Inter-based system keyed on docs-blue `#0c408d`.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-26 |
| added | 2026-06-26 |
| tokens.extracted | 2026-06-26 |
| Tier 1 live inspect (source footer) | 2026-06-26 |

The source footer records the verification verbatim as **Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 3 brand-owned surfaces). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| ko-home | marketing homepage | `https://hackle.io/ko/` | 2026-06-26 |
| en-home | marketing homepage | `https://hackle.io/en/` | 2026-06-26 |
| pricing | pricing page | `https://hackle.io/ko/pricing/` | 2026-06-26 |
| docs | documentation | `https://docs.hackle.io/` | 2026-06-26 |
| github | SDK organization (narrative) | `https://github.com/hackle-io` | named, not a token surface |

### Tier 1 (as listed in the source footer)

- `https://hackle.io/ko/`
- `https://docs.hackle.io/`
- `https://github.com/hackle-io`

The source token note and the sibling also name `https://hackle.io/en/` and `https://hackle.io/ko/pricing/` as inspected marketing surfaces.

### Tier 2

- getdesign.md/hackle — directory shell only, no Hackle token data
- styles.refero.design — not listed (KR brand)

## Sibling handling (`web/references/hackle/.verification.md`)

The sibling exists — confirmed with `find web/references/hackle -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-26. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless), realistic Chrome UA + ko-KR locale, `goto` domcontentloaded + 3.5s settle, Escape/cookie dismissal pass, then `getComputedStyle` on body, h1/h2/h3, header/nav, buttons, links, inputs, plus a full-DOM background/text color frequency scan across three brand-owned surfaces.
- Sources: `https://hackle.io/ko/`; `https://hackle.io/en/`; `https://hackle.io/ko/pricing/`; `https://docs.hackle.io/`.
- Hero primary CTA "데모 둘러보기": `#0065ff`, 8px, 12px 32px, 18px / 700, height 53px
- Hero CTA hover: `oklab(0.561563 -0.038043 -0.238921 / 0.9)` — the `#0065ff` blue dimmed to ~90% opacity; `box-shadow: none`
- Header CTA "데모 둘러보기": `#2962ff`, `border-radius: 8px`, `padding: 6px 16px`, 14px / 500, height 38px
- MUI filled CTA (pricing) "카드 등록하고 바로 사용하기" / "문의하기": `#2962ff`, 4px, 6px 16px, 14px / 500, height 39px
- Dark tool chip "간편발송 바로가기": `#000000`, 5px, 0px 24px, height 44px
- White tool chip "가이드북 다운받기" / "템플릿으로 바로 만들기": `#ffffff`, `#151618`, 5px, 10px 20px, height 44px
- Top nav "서비스 소개": `#000000`, 16px / 400, height 72px
- docs body: Inter, `#1c1d1e`, `font-size: 16px`, background `#ffffff`
- docs sidebar inactive "블로그" / "핵클 서비스": `#6a6e75`, 14px / 400
- docs sidebar active "핵클 사용 가이드": `#0c408d`, 14px / 600
- docs search placeholder "찾으시는 기능이나 키워드를 검색해보세요." / "검색…"
- docs code-block "복사" copy button: `#ffffff` / `#6a6e75`, `1px solid #d6d9df`, `border-radius: 8px 0px 0px 8px`, `padding: 4px 8px`
- docs consent accept "수락": `#0c408d`, 12px, 6px 12px, height 35px
- docs consent reject "거부": `#f6f7f9` / `#6a6e75` / `#d6d9df`, 12px
- box-shadow: `none` across hero, nav, headings, buttons, and tool chips
- document.title (KO): "핵클(Hackle) | 올인원 AI 그로스 플랫폼"; (EN): "Hackle | All-in-One Business Optimization Solution"; (docs): "핵클 사용 가이드 | Hackle"; (pricing): "핵클 가격 안내 | 합리적인 가격으로 시작하는 CRM 마케팅, 데이터 분석, A/B 테스트"
- Logo: Google favicon HTTP 200, image/png, 1523 bytes; GitHub org avatar `github.com/hackle-io.png` HTTP 200, 2962B
- Frequency-scan extras: `rgb(245,245,245)` ×5; `rgb(249,250,251)` ×3; `rgb(45,45,45)` ×6; docs `rgb(226,238,255)` ×2

Values and strings the sibling carries that the visible source body does not, kept here and not promoted:

- Header CTA height `38px` and header radius `8px` (source YAML / §4 records the MUI filled action at 4px / 39px and lists header "데모 둘러보기" on that record)
- docs body `font-size: 16px` (source YAML / §3 records docs at 14px)
- docs code-block label `복사` and its `8px 0px 0px 8px` radius / `4px 8px` padding
- Sidebar strings `핵클 서비스` and `핵클 사용 가이드`
- document.title strings `핵클(Hackle) | 올인원 AI 그로스 플랫폼`, `핵클 사용 가이드 | Hackle`, `핵클 가격 안내 | 합리적인 가격으로 시작하는 CRM 마케팅, 데이터 분석, A/B 테스트`
- Hover `oklab(...)` sample
- Frequency-scan greys `#f5f5f5`, `#f9fafb`, `#2d2d2d`, docs tint `#e2eeff`
- Favicon byte count `1523` and GitHub avatar byte count `2962`

The EN page title `Hackle | All-in-One Business Optimization Solution` is already in the source §10 and is dual only as corroboration.

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.0` on display-hero, button-lg, button; `1.2` on section and subsection; `1.5` on body and docs). They are carried as ratios in the portable body, never converted to a single px form (A1a). The source itself also writes body as `24px`; both forms stay.
- The source frontmatter records spacing and radius steps unitless (`xs: 6` … `section: 64`; `xs: 4`, `sm: 5`, `md: 8`, `lg: 12`, `full: 9999`). The portable body keeps both the unitless steps and the px forms the visible sections use. `full: 9999` stays a step.
- `tokens.spacing.md: 12` is not `tokens.rounded.lg: 12`. `tokens.spacing.xl: 24` is not a radius. `tokens.spacing.base: 16` is not the 16px body size. `tokens.rounded.md: 8` is not a spacing key.
- Marketing body emphasis `rgba(0,0,0,0.87)` / `rgba(0,0,0,0.6)` / `rgba(0,0,0,0.3)` is a Material ladder the source records beside the hex ink keys, not a substitute for them.
- YAML `button-filled` height `39px` and sibling header height `38px` stay unmerged.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` | curve value only; role name, use, durations, hover 90% dim, no-spring rule, and reduced-motion kept | No live computed easing in the source or sibling. Not a Hackle-measured sample. |
| `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` | curve value only; role name and use kept | Exact match of the legacy template example in `spec/omd-v0.1.md`. Same family as the documented re-injection path. |
| `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | curve value only; role name and use kept | No live computed easing in the source or sibling. |
| §13 Personas — three entries | whole section | The source's own header labels them fictional archetypes. Fictional personas are neither promoted to verified tasks nor re-hosted in a sidecar. The three entries — including names, ages, cities, and biographies — are dropped and are deliberately not restated here (D2, D2a). |
| §9 Agent Prompt Guide | whole section | Tool-facing copy-paste prompts and restatements of rules stated elsewhere. Checked value by value before deletion: see the next paragraph. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Primary `#0065ff`, MUI `#2962ff`, docs `#0c408d`, canvas `#fafafa`, surfaces `#f7f7f7` / `#f6f7f9`, headings `#000000`, chip ink `#151618`, docs body `#1c1d1e`, muted `#6a6e75`, hairline `#d6d9df`, accent `#9ebaf4` / `#ebf4fd`, navy `#0e0437`, white `#ffffff` — Foundations. Hero 46px Pretendard/Montserrat 700, `#0065ff` 8px 12px 32px 18px/700, outline white/`#0065ff` — Hero Primary + Outline. MUI `#2962ff` 4px 6px 16px 14px/500 — MUI Filled. Tool chips black/white 5px ~44px 14px/500 — Dark / White Tool Chip. Docs Inter `#1c1d1e` 14px / 1.5, sidebar `#6a6e75` / `#0c408d` 600, search `#d6d9df` 8px, callout `#ebf4fd` — Type roles + Docs Search + Blue Info Callout. Radius ladder 4 / 5 / 8 / 12 — Shape. No shadows — Elevation + Avoid.

## Claim ledger

| Claim | Surface |
|---|---|
| `tokens.colors.primary` / `primary-alt` / `docs-blue` / `accent-blue` / `tint-blue` / `navy-deep` / `heading` / `ink` / `body` / `muted` / `hairline` / `canvas` / `surface` / `surface-alt` / `white` | marketing + docs live inspect 2026-06-26 |
| `tokens.typography.family.display` / `body` / `docs` | EN marketing / KO marketing / docs |
| `tokens.typography.display-hero` / `section` / `subsection` / `body` / `button-lg` / `button` / `docs` (size, weight, lineHeight, use) | marketing + docs |
| `tokens.spacing.xs` / `sm` / `md` / `base` / `lg` / `xl` / `xxl` / `section` | marketing |
| `tokens.rounded.xs` / `sm` / `md` / `lg` / `full` | marketing + docs |
| `tokens.shadow.none` | marketing live inspect |
| `tokens.components.button-primary` / `button-filled` / `button-outline` / `chip-dark` / `chip-tool` / `docs-accept` / `search-input` / `nav-link` / `docs-nav` / `card-surface` / `callout-blue` / `badge-blue` | marketing + docs |
| Voice strings `AI와 데이터로 이끄는 성장` / `올인원 AI 그로스 플랫폼` / `앞서가는 기업들은 이미 핵클의 고객사입니다.` / `웹, 앱, 서버 상관없이 5분이면 사용 가능` / `Hackle \| All-in-One Business Optimization Solution` | KO/EN homepage |
| Seoul-based / `github.com/hackle-io` / `개발자 문서` / 간편발송 / consolidation pitch | source §11 narrative |

## Proof notes

- Four brand-owned web surfaces recorded 2026-06-26 (ko home, en home, pricing, docs). GitHub is named for SDKs, not as a computed-token surface.
- `components_harvested: true`; twelve component records in the source token set.
- The source records no `focus-visible` string (`grep -o 'focus-visible' web/references/hackle/DESIGN.md | wc -l` = 0). Uncaptured hover (except the hero ~90% dim), focus-visible, disabled, loading, error, and success treatments are omitted as values; they are not turned into `not-applicable`. Applicability follows control role. State coverage is not claimed complete.
- Hackle has no published first-party design system in the source. Derived-editorial qualifications therefore close with the toss-form example: not Hackle-authored or a separately published UI specification. Material UI is the observed marketing framework, not a Hackle-authored specification.
- Seoul-based, SDK org, 개발자 문서, 간편발송, and the consolidation pitch are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`): **30**. This table has **30** rows (E1 1:1). The same 30 lines also carry `not Hackle-authored` and `separately published UI specification`.

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 | The surface boundary that keeps values on the surface that established them, and that treats GitHub as a named SDK source rather than a token surface |
| Experience — Scope ¶2 | The atmosphere readings: confident, clean SaaS console; engineered-but-friendly; single-blue persuasion; calmer docs as reference rather than pitch |
| Experience — Scope ¶3 | Classing the §11 narrative as not a token source |
| Experience — Scope ¶4 | The refusal/embrace reading |
| Experience — Primary tasks | The step from observed labels to "primary tasks" |
| Experience — Audience | The step from captured surfaces and the source's group labels to an audience grouping |
| Experience — Distinctive traits | The grouping and characterizing half of the recorded values |
| Experience — Principles | All six §12 principles and their UI implications |
| Experience — Application rules | Grouping the Do list as application rules, and their rationales |
| Experience — Avoid | The rationales in the Don't list |
| Foundations — Semantic color | The characterizing phrases attached to roles |
| Foundations — Spacing | Keeping `md: 12` / `xl: 24` / `base: 16` / `section: 64` off the radius and type keys that share a number |
| Foundations — Shape | Calling 8px the workhorse, reading 4px as the Material default, and keeping rounded steps off spacing keys |
| Foundations — Elevation | Reading the stack as a flat, tint-and-hairline elevation system |
| Foundations — Motion | Reading the motion rules as a flat-console / steadiness signal |
| Foundations — Motion / omitted curves | Classing the three source-listed curves as untraceable to Hackle evidence and omitting them on that ground |
| Typography — Font evidence / Official product-use | Classing the live surfaces as not a separately issued typography specification |
| Typography — Font evidence / Outside these captures | Classing type beyond the four token-inspected pages as outside this contract |
| Typography — Font evidence / License | Treating Montserrat, Pretendard, and Inter as upstream faces, not Hackle-owned brand assets |
| Typography — Family | The ban on substituting a system face and presenting a fallback as the Hackle face |
| Typography — Type rules | Reading the scale as the four typography principles |
| Typography — Assets | Classing the favicon slug as a third-party favicon service |
| Typography — Assets / image behavior | Reading shadowless screenshots and illustrations as consistent with the flat system |
| Components — How to read this section | The role-based decision procedure, and every Reason cell in every per-component table |
| Components — State record | The eight-row §14 contract read as this surface's state contract, not as per-control observations or treatments attached to marketing destination controls |
| Layout & Platforms | Reading console-grade calm, tint-not-elevate bands, and rationed blue |
| Layout & Platforms — Responsive | Reading the breakpoints and collapsing strategy as system-level rather than cross-viewport measurements |
| Layout & Platforms — Image behavior | Reading that image behavior as consistent with the flat system |
| Content & Locales — voice / register | The voice reading and the register-table contract |
| Content & Locales — Forbidden register | The peer-to-peer docs-voice characterization |

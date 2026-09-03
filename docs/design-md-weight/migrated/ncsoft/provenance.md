# NCSOFT provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/ncsoft/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | ncsoft |
| name | NCSOFT |
| display_name_kr | 엔씨소프트 |
| country | KR |
| category | consumer-tech |
| homepage | `https://about.ncsoft.com/` |
| primary_color | `#7234e0` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=about.ncsoft.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-17 |
| added | 2026-06-17 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-17 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. That is an identity pointer, not an NCSOFT-hosted brand file. The sibling records the choice as 893 bytes `image/png` and rejects simpleicons `ncsoft` / `nc` (HTTP 404) and the smaller nc.com favicon (484B). Those sibling measurements stay in the Sibling section below.

Token note from YAML, kept as ledger metadata: `tokens.source: live-extract`, `tokens.extracted: 2026-06-17`. YAML `tokens.note` (verbatim): "Two live brand surfaces. nc.com (the renamed corporate/game portal) ships a structured DTCG token system: primary = NC Purple #7234e0 (--core_primary_normal, light theme) / #8243f2 (dark theme), on Pretendard. about.ncsoft.com (NC PLAY brand media) is a monochrome editorial surface on Helvetica Now / NotoSans-kr (ink #1e1e1e, dark hero bg #333333). NC BLUE (point cobalt #1d4b99 / #0e356a) is the Pentagram CI heritage mark; the live digital interactive primary is purple."

## Freshness

| Event | Date |
|---|---|
| added | 2026-06-17 |
| verified | 2026-06-17 |
| tokens.extracted | 2026-06-17 |
| Tier 1 live inspect (source footer) | 2026-06-17 |
| sibling inspect | 2026-06-17 |

The source footer records the verification verbatim as **Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand-owned surfaces). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none. NC BLUE (Pentagram print CI, point-cobalt `#1d4b99`) vs live digital primary NC Purple (`#7234e0`) documented as an intentional print-vs-digital split, not a conflict; `primary_color` follows the live interactive token. Source footer and sibling Conflict matrix agree.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| portal | corporate/game portal | `https://www.nc.com/` | 2026-06-17 |
| play | NC PLAY brand media | `https://about.ncsoft.com/` | 2026-06-17 |
| ci | official-doc — Pentagram CI renewal | `https://about.ncsoft.com/en/news/article/nc-ci-renewal-project-en` | 2026-06-17 |

### Tier 1 (as listed in the source footer)

- `https://about.ncsoft.com/` (NC PLAY brand media, live computed style)
- `https://www.nc.com/` (renamed corporate/game portal — DTCG token system extracted from live CSS)
- `https://about.ncsoft.com/en/news/article/nc-ci-renewal-project-en` (official Pentagram CI renewal article)

### Tier 2

- getdesign.md/ncsoft — not listed (KR coverage gap)
- styles.refero.design — no NCSOFT/NC style page

Tier 2 data was not used to establish any token or component value.

## Claim ledger

Every value below traces to `web/references/ncsoft/DESIGN.md`. "Source location" is the legacy section or YAML path.

| Claim | Source location | Portable destination |
|---|---|---|
| `tokens.colors.primary` `#7234e0` | YAML + §2 NC Purple | Foundations → Semantic color |
| `tokens.colors.primary-strong` `#482486` | YAML + §2 Purple Strong | Foundations → Semantic color |
| `tokens.colors.primary-subtle` `#e8d6ff` | YAML + §2 Purple Subtle | Foundations → Semantic color |
| `tokens.colors.primary-faint` `#f6eeff` | YAML + §2 Purple Faint | Foundations → Semantic color |
| `tokens.colors.primary-dark` `#8243f2` | YAML + §2 Purple Dark-theme | Foundations → Semantic color |
| `tokens.colors.nc-blue` `#1d4b99` | YAML + §2 NC Blue | Foundations → Semantic color |
| `tokens.colors.nc-blue-strong` `#0e356a` | YAML + §2 NC Blue Strong | Foundations → Semantic color |
| `tokens.colors.nc-blue-subtle` `#d3e2fc` | YAML + §2 NC Blue Subtle | Foundations → Semantic color |
| `tokens.colors.light-blue` `#38aefa` | YAML + §2 Light Blue | Foundations → Semantic color |
| `tokens.colors.ink` `#0f1011` | YAML + §2 Ink | Foundations → Semantic color |
| `tokens.colors.ink-soft` `#1e1e1e` | YAML + §2 Ink Soft | Foundations → Semantic color |
| `tokens.colors.gray-015` `#252628` | YAML + §2 Gray 015 | Foundations → Semantic color |
| `tokens.colors.gray-025` `#3d3d43` | YAML + §2 Gray 025 | Foundations → Semantic color |
| `tokens.colors.gray-040` `#62626a` | YAML + §2 Gray 040 | Foundations → Semantic color |
| `tokens.colors.gray-055` `#888890` | YAML + §2 Gray 055 | Foundations → Semantic color |
| `tokens.colors.gray-065` `#a3a3a9` | YAML + §2 Gray 065 | Foundations → Semantic color |
| `tokens.colors.gray-075` `#bdbdc1` | YAML + §2 Gray 075 | Foundations → Semantic color |
| `tokens.colors.hero-dark` `#333333` | YAML + §2 Hero Dark | Foundations → Semantic color |
| `tokens.colors.canvas` `#ffffff` | YAML + §2 Pure White | Foundations → Semantic color |
| `tokens.colors.surface` `#f2f2f3` | YAML + §2 Surface | Foundations → Semantic color |
| `tokens.colors.surface-alt` `#f7f7f8` | YAML + §2 Surface Alt | Foundations → Semantic color |
| `tokens.colors.editorial-ink` `#a9a9a9` | YAML + §2 Editorial Ink | Foundations → Semantic color |
| `tokens.colors.editorial-line` `#ebebeb` | YAML + §2 Editorial Line | Foundations → Semantic color |
| `tokens.colors.editorial-faint` `#efefef` | YAML + §2 Editorial Faint | Foundations → Semantic color |
| `tokens.colors.on-primary` `#ffffff` | YAML | Foundations → Semantic color (second key, same hex as canvas) |
| `tokens.colors.point-red` `#f1415e` | YAML + §2 Point Red | Foundations → Semantic color |
| `tokens.colors.point-green` `#21ab79` | YAML + §2 Point Green | Foundations → Semantic color |
| `tokens.colors.point-magenta` `#fa38ec` | YAML + §2 Point Magenta | Foundations → Semantic color |
| `tokens.colors.point-lavender` `#6768f6` | YAML + §2 Point Lavender | Foundations → Semantic color |
| §2 Pure Black `#000000` | §2 only (no YAML colors key) | Foundations → Semantic color |
| `tokens.typography.family.portal` / `media` / `display` / `kr` | YAML + §3 Font Family | Typography & Assets → Family |
| `tokens.typography.display-hero` / `display-black` / `section` / `subsection` / `feature-head` / `nav` / `body` / `link` / `label` | YAML + §3 Hierarchy table | Typography & Assets → Type roles (A1a: unitless line heights kept; §3 rem / notes kept beside YAML `use`) |
| `tokens.spacing` xs 4 / sm 8 / md 12 / base 16 / lg 24 / xl 32 / xxl 48 / section 64 | YAML + §5 Scale | Foundations → Spacing |
| `tokens.rounded` sm 6 / md 10 / lg 12 / xl 16 / full 9999 | YAML + §5 Border Radius Scale | Foundations → Shape |
| `tokens.shadow.none` `none` | YAML + §6 | Foundations → Elevation |
| `tokens.components.button-primary` (`type: button`) | YAML + §4 Primary | Components → Primary (NC Purple CTA) |
| `tokens.components.button-icon` (`type: button`) | YAML + §4 Circular Carousel Control | Components → Circular Carousel Control |
| `tokens.components.nav-tab` (`type: tab`) | YAML + §4 Tabs / Navigation | Components → NC PLAY top nav |
| `tokens.components.card-game` (`type: card`) | YAML + §4 Portal Game Card | Components → Portal Game Card |
| `tokens.components.card-play` (`type: card`) | YAML + §4 NC PLAY Dark Tile | Components → NC PLAY Dark Tile |
| `tokens.components.card-editorial` (`type: card`) | YAML + §4 Editorial Article Block | Components → Editorial Article Block |
| `tokens.components.badge-point` (`type: badge`) | YAML + §4 Point Badge | Components → Point Badge |
| `tokens.components.avatar` (`type: avatar`) | YAML + §4 Avatars | Components → Avatar |
| §4 Soft Purple | §4 (YAML `button-primary.states` subtle bg) | Components → Primary, Soft Purple variant |
| §4 Default (search) | §4 only, not in the token set | Components → Portal search / form field |
| §14 nine-row state table | §14 | Components → State record |
| §15 durations 120ms / 240ms / 360ms, easing roles, signature motion, reduced-motion | §15 | Foundations → Motion (curves omitted; see Omission ledger) |
| §10 voice, tone table, three verbatim samples, forbidden register | §10 | Content & Locales |
| §11 1997 / 김택진 / Lineage 1998 / 2020 Pentagram / 2026 NC rebrand / refuses-embraces close | §11 | Experience → Scope |
| §12 six principles with UI implications | §12 | Experience → Principles |
| §7 Do / Don't | §7 | Experience → Application rules / Avoid |
| §1 Key Characteristics | §1 | Experience → Distinctive traits |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | §4 footer block | This file — Freshness, Sources |

## Sibling handling (`web/references/ncsoft/.verification.md`)

The sibling exists — confirmed with `find web/references/ncsoft -type f`. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Sibling SHA-256 `e6ce458c06537c25f386b506804e8f820b529298bbc9c377459cce6a86a283ec`.

### Sibling-only observations (not portable facts)

These strings are transcribed here because they appear in the sibling and not as portable tokens. Mention of them in this ledger is a disposition pointer, not a use of them as interface tokens.

- Inspection method: playwright getComputedStyle, chromium headless, viewport 1440×900, `goto` domcontentloaded + 4.5s settle. The 1440×900 figure is capture-method metadata. It is not a layout breakpoint, and the portable body does not rewrite source §8 Desktop `1024-1440px` as that viewport.
- NC PLAY nav "NEWS" inactive `font-weight: 500` (source YAML / §4 nav font is `20px / 700`)
- Editorial display computed height 58px
- Nav item "The Game Art": `color: rgb(235, 235, 235)` (`#ebebeb`); `padding: 4px 0px`
- NC PLAY bg frequency extras: `rgb(62,62,62)` (`#3e3e3e`) ×1
- NC PLAY fg frequency extras: `rgb(221,221,221)` ×190, `rgb(136,136,136)` (`#888888`) ×11
- CI article H2 "CI Renewal – An NCSOFT Change for A New Era": `font-size: 48px`; `font-weight: 700`; `color: rgb(30, 30, 30)`; `padding: 0px 0px 36px`
- CI article extras: `#393939` ×1, `#007aff` ×2 (sibling labels these system focus/link blue)
- Portal hero headline copy "AION2 Chapter 1. UPDATE"; computed height 130px
- Portal "바로가기" computed `color: rgb(0, 0, 0)`
- Game card computed height 266px
- Live CSS extras not in YAML colors: `--neutral_gray_005: #0a0a0b`, `--neutral_gray_010: #18191b`, `--background_base_1: #0e0e0f`, `--background_container_2: #18191b`, `--background_surface_1: #18191b`
- og:image `https://assets.playnccdn.com/purple/resources/share/nc.jpg`
- Redirect also from `https://kr.ncsoft.com` → `https://www.nc.com/`
- Logo sibling measurements: 893 bytes / `image/png`; rejected nc.com favicon 484B; simpleicons `ncsoft` / `nc` HTTP 404

Values the sibling shares with the source body (corroboration, not new portable facts): `#7234e0`, `#482486`, `#e8d6ff`, `#f6eeff`, `#8243f2`, `#1d4b99`, `#0e356a`, `#d3e2fc`, `#38aefa`, `#f1415e`, `#21ab79`, `#fa38ec`, `#6768f6`, `#252628`, `#3d3d43`, `#62626a`, `#888890`, `#a3a3a9`, `#bdbdc1`, `#f7f7f8`, `#f2f2f3`, `#333333`, `#1e1e1e`, `#ebebeb`, `#efefef`, `#ffffff`, Pretendard / Helvetica Now / Helvetica-Now-Display-Black / NotoSans-kr, 48px hero, 40px display, 20px nav, 16px body, 28px MMORPG, 44px 바로가기, 40px circular control, 16px / 6px / 12px radii, `box-shadow: none`, `assets.playnccdn.com/purple`, "Welcome to a New world Connected Through Joy", "엔씨 공식 브랜드 미디어", "NC PLAY (엔씨 플레이)", `ncsoft.com` → `nc.com`.

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 3인 (이름·나이·도시·동기·소속 분류 포함) | Deleted. The source's own header labels them fictional archetypes informed by publicly observable NC audiences, not individual people. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or affiliation classifications (D2, D2a). Audience restates only the source's own §13-header group wording. |
| §9 Agent Prompt Guide — Quick Color Reference, four Example Component Prompts, eight-step Iteration Guide | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components / Experience. The example prompt string `60% 할인` is prompt-illustration copy, not a captured live label; it is not promoted. |
| §15 easing curve values — `cubic-bezier(0.2, 0.6, 0.25, 1)` (`ease-enter`), `cubic-bezier(0.4, 0.0, 1, 1)` (`ease-exit`), `cubic-bezier(0.25, 0.1, 0.25, 1)` (`ease-standard`) | Removed from the portable body as unsourced curves; kept here verbatim. The source attributes token-level claims to §1–9 live inspect / CSS tokens and assigns none to §15. `cubic-bezier(0.4, 0.0, 1, 1)` is the example value that `spec/omd-v0.1.md` carries and defines as a non-brand implementation default that must not be moved into a reference. The roles, uses, durations, signature motions, and reduced-motion rule stay in the portable body. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. NC Purple `#7234e0` / pressed `#482486` / soft `#e8d6ff` — Semantic color + Primary. NC BLUE `#1d4b99` / `#0e356a` / `#d3e2fc` — Semantic color. Background `#ffffff` / `#f2f2f3` / `#f7f7f8` — Semantic color. NC PLAY hero `#333333` / `#000000` — Semantic color. Ink `#0f1011` / `#1e1e1e` — Semantic color. Secondary text `#3d3d43` → `#888890` → `#a3a3a9` — Semantic color. Point accents red / green / magenta / light-blue / lavender — Semantic color. Hairline `rgba(0,0,0,0.12)` / `#ebebeb` — Elevation. Portal hero 48px Pretendard 700 white, 16px-radius game-card grid, 40px circular control, NC Purple CTA 6px / `0 16px` / 16px Pretendard 500 — Primary + Carousel + Layout. NC PLAY dark `#333333` hero, Display Black 40px, 34px Helvetica Now 700 `#1e1e1e`, body 16px NotoSans-kr `#1e1e1e`, divider 1px `#ebebeb`, no shadow — Type roles + Dark Tile + Elevation. Portal game card white / 16px / `#0f1011` title 28px Pretendard 700 / red point badge — Game Card + Point Badge + Type roles. NC PLAY top nav 20px Helvetica Now 700, active `#ffffff`, inactive `#a9a9a9` — NC PLAY top nav.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 | Two inspected URLs as this contract's token surfaces; CI article as a named narrative source that does not supply computed tokens; values stay attached; live DTCG CSS variables as a live-extract record rather than a separately published UI specification |
| Experience Scope ¶2 | Contrast-as-the-system; nc.com as a bright premium media catalog; NC PLAY as a confident monochrome editorial magazine; design-annual rather than a game site; chrome kept out of the way of the art |
| Experience Scope ¶3 | Founding-and-rebrand narrative as context that does not by itself supply interface tokens |
| Experience Scope ¶4 | Refuses/embraces pairing and net-atmosphere sentence as a current-surface design instruction |
| Experience Primary tasks | Selecting the four recorded surfaces and controls as primary tasks; not from the persona section |
| Experience Audience | Biography-drop (no name, age, city, motivation, or affiliation classification); reading the source's own §13-header groups as audience |
| Experience Distinctive traits | Grouping the recorded Key Characteristics as the distinctive layer |
| Experience Principles | The six numbered items and their UI implications |
| Experience Application rules | The nine Do rules and the reasons attached |
| Experience Avoid | The eight Don't prohibitions and the reasons inside them |
| Foundations Semantic color | Role names from the source's labels; canvas / on-primary unmerged; §2 Pure Black kept off YAML colors keys; NC Purple and NC BLUE kept on their own families |
| Foundations Spacing | Unitless steps unmerged from matching type sizes, radii, button padding, FEATURED 32px, and CATEGORIES 60px |
| Foundations Shape | Five rounded keys unmerged; editorial 4px kept on the card-editorial component rather than as a sixth rounded step |
| Foundations Elevation | Shadowless banding / tint / hairline as the elevation contract rather than a drop-shadow ladder; color-for-emphasis as the source's own |
| Foundations Motion | Durations, easing roles, signature motions, and motion rules as source-stated rather than computed CSS |
| Foundations Motion easing omission | Treating the three cubic-bezier values as untraceable and omitting them rather than promoting them as NCSOFT motion tokens |
| Foundations Motion B3 gate | Five-kind per-component promotion gate; refusal of a partial confirmation |
| Typography Font evidence | Evidence-class application readings for official product-use / live computed / official distributed / YAML family / license / outside-these-captures |
| Typography Family | Fallback prohibition; two-voice-by-surface split; four YAML family keys beside §3 Pretendard JP / NotoSans-jp / NotoSans-tc |
| Typography Type roles | YAML unitless ratios kept; YAML `use` and §3 rem / notes both kept; hero `48` off spacing `48`; body `16` as a type size rather than a spacing step |
| Typography Type rules | The five typography principles as readings of the measured metrics |
| Typography Assets | Google s2 slug as identity pointer; first-party imagery not replaced |
| Components How to read this section | Source state contract kept rather than delegated to an unadopted catalog graph; role-based decision procedure; kind and applicability verdicts; Primitive type only on YAML components; generic Focus not treated as focus-visible; not a complete state-coverage claim |
| Components Primary (NC Purple CTA) | 44px / 6px / `0 16px` / 16px 500 as this button's geometry rather than YAML spacing or type-role keys |
| Components Circular Carousel Control | 40px / `9999px` as this control's geometry rather than the rounded scale alone |
| Components Portal search / form field | 6px / `#bdbdc1` as this field's geometry; recorded Focus ring as generic focus rather than `focus-visible` |
| Components Portal Game Card | Kind and a state-applicability map omitted rather than invented |
| Components NC PLAY Dark Tile | Kind and a state-applicability map omitted rather than invented |
| Components Editorial Article Block | 4px as this block's geometry rather than a sixth rounded step; kind and a state-applicability map omitted rather than invented |
| Components Point Badge | Status marker rather than a control |
| Components Avatar | Kind and a state-applicability map omitted rather than invented |
| Layout Whitespace | Grid never-crowd-the-key-art and the three Whitespace readings as purpose attached to recorded measurements |
| Layout Responsive behavior | §8 breakpoint table, ~44px / 40px / 32–36px, and collapsing strategy as source-stated intended behavior rather than a captured cross-viewport pass |
| Content & Locales | Confident / craft-proud / connection-minded register; mission line not a complete product-microcopy guide |
| Governance Named gaps | Named gaps rather than a domain inventory; unnamed values rather than permissions to invent |

## Proof notes

- verification sibling schema is notes-format, not verification_v2 JSON; conflicts: none
- components_harvested: true
- tokens.source: live-extract
- Uncaptured hover/pressed/`focus-visible` treatments are omitted. They are not `not-applicable` for want of a capture; applicability follows control meaning. Destination / carousel / search-value roles close loading/error/success with a role reason (C2). State coverage is not claimed complete
- Source never records the token `focus-visible`. Search `Focus: 1px solid #7234e0` stays on that field as generic Focus. `focus-visible` rows are applicable with visual treatment omitted (B1)
- Official founding facts, the CI article, and the 2026 rename are narrative context, not extra token sources
- `tokens.source: live-extract` is ledger metadata
- Portable `DESIGN.md` complete B2a qualifications: 35. This inventory table: 35 data rows (E1 1:1)

# goorm provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/goorm/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | goorm |
| name | goorm |
| display_name_kr | 구름 |
| country | KR |
| category | education |
| homepage | `https://goorm.co` |
| primary_color | `#2a72e5` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=goorm.co&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-26 |
| added | 2026-06-26 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-26 |
| components_harvested | true |

The favicon slug is dual-destination: identity metadata here, and a portable asset record in `DESIGN.md` §3. It is a favicon-service URL keyed to the domain rather than a goorm-hosted brand file, and the portable record says so.

Token note from source, verbatim: `primary = Vapor UI / goorm interactive blue (#2a72e5); active/link blues are #0957c8 and #0043b3. Ink near-black (#262626) carries text + the dark marketing CTA. Semantic badges use Adobe-Leonardo-generated tints (#c6e6ff/#bbecd7/#ffd8d7/#ffd9c8). Flat, hairline-driven elevation (#e1e1e1 / #c6c6c6 inset borders); 8px radius dominant.`

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-26 |
| added | 2026-06-26 |
| tokens.extracted | 2026-06-26 |
| Tier 1 live inspect | 2026-06-26 |

The source footer records the verification verbatim as **Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none recorded by the source.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| marketing | product-surface (homepage) | `https://goorm.co` | 2026-06-26 |
| vapor | design-system docs | `https://vapor-ui.goorm.io` | 2026-06-26 |

### Tier 1 (brand-owned, as listed in the source footer)

- `https://goorm.co` — goorm official homepage. Marketing-surface token claims.
- `https://vapor-ui.goorm.io` — Vapor UI, goorm's official open-source design-system docs. Component + token claims.
- `https://github.com/goorm-dev/vapor-ui` — official GitHub org / Vapor UI source repo. Named by the source; the source attaches no computed interface value to it.
- `https://tech.goorm.io` — official TechBlog. Mission tagline and product names; no computed interface value.
- `https://blog.goorm.io/design/` — official design blog. Named by the source; no computed interface value.

### Tier 2

- getdesign.md/goorm — not listed (404); "No designs found"
- styles.refero.design — no goorm-specific style entry

## Sibling handling (`web/references/goorm/.verification.md`)

The sibling exists — confirmed with `find web/references/goorm -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact, and none of its structural classifications (selector naming, frequency-scan ranks, component-page URLs) was promoted into `DESIGN.md`.

Its own record, transcribed here:

- Inspected 2026-06-26. Method: playwright `getComputedStyle` (live DOM) — global playwright (chromium, headless), ko-KR locale + realistic Chrome UA, `goto` domcontentloaded + 3.5s settle, cookie/modal dismissal pass, then `getComputedStyle` on body, h1/h2/h3, header/nav, buttons, inputs, tabs, badges, plus a full-DOM background/text/radius frequency scan. Two brand surfaces: goorm.co and vapor-ui.goorm.io, including the Button and Badge component pages.
- Sources: `https://goorm.co`; `https://vapor-ui.goorm.io`; `https://vapor-ui.goorm.io/docs/components/button`; `https://vapor-ui.goorm.io/docs/components/badge`; `https://github.com/goorm-dev/vapor-ui`; `https://tech.goorm.io`.
- goorm.co body: `font-family: "Pretendard Variable"`; `color: rgb(38, 38, 38)` (#262626); `font-size: 16px`; `background: rgb(255, 255, 255)` (#ffffff)
- goorm.co nav button "제품": `color: rgb(38, 38, 38)` (#262626); `border-radius: 8px`; `padding: 8px 12px`; `font-size: 14px`; `font-weight: 600`; height 40px
- goorm.co marketing CTA "도입 문의하기": `background-color: rgb(38, 38, 38)` (#262626); `color: rgb(255, 255, 255)`; `border-radius: 8px`; `padding: 0px 24px`; `font-size: 16px`; `font-weight: 500`; height 48px
- goorm.co accent button "미션 완료": `background-color: rgb(42, 114, 229)` (#2a72e5); `border-radius: 8px`; height 40px
- goorm.co hero H2 "AX, 구름과 함께 시작해보세요.": `font-size: 48px`; `font-weight: 500`; `letter-spacing: -0.4px`; `color: rgb(38, 38, 38)` (#262626)
- goorm.co radius frequency: `8px` ×191, `12px` ×24, `4px` ×10, `16px` ×10, `50%` ×6, `999px` ×4 (8px dominant)
- goorm.co bg frequency: `rgb(255,255,255)` ×81, `rgb(247,247,247)` ×54 (#f7f7f7), `rgb(225,225,225)` ×21 (#e1e1e1), `rgb(198,198,198)` ×13 (#c6c6c6), `rgb(38,38,38)` ×10 (#262626), `rgb(42,114,229)` ×5 (#2a72e5), `rgb(218,57,68)` ×4 (#da3944)
- goorm.co fg frequency: `rgb(38,38,38)` ×2312 (#262626), `rgb(93,93,93)` ×182 (#5d5d5d), `rgb(76,76,76)` ×51 (#4c4c4c), `rgb(0,67,179)` ×28 (#0043b3 link), `rgb(57,57,57)` ×13 (#393939), `rgb(163,163,163)` ×4 (#a3a3a3)
- vapor-ui H1 "Kickstart your project...": `font-size: 48px`; `font-weight: 800`; `color: rgb(38, 38, 38)` (#262626)
- vapor-ui H2 "Instantly customize your theme": `font-size: 32px`; `font-weight: 700`; `color: rgb(38, 38, 38)`
- vapor-ui primary button "Save"/"Public으로 변경"/"45 포인트 획득": `background-color: rgb(42, 114, 229)` (#2a72e5); `color: rgb(255, 255, 255)`; `border-radius: 8px`; `padding: 0px 16px`; `font-size: 14px`; `font-weight: 500`; height 40px
- vapor-ui secondary button "취소"/"Docs 보러 가기": `background-color: rgb(225, 225, 225)` (#e1e1e1); `color: rgb(38, 38, 38)`; `border-radius: 8px`; height 40px
- vapor-ui outline button "100개 추가": `background-color: rgb(255, 255, 255)`; `box-shadow: rgb(198, 198, 198) 0px 0px 0px 1px inset` (#c6c6c6 border); `border-radius: 8px`; 14px/500
- vapor-ui text input "크레딧 개수": `background-color: rgb(255, 255, 255)`; `border-radius: 8px`; `padding: 0px 24px`; height 48px; `box-shadow: rgb(225, 225, 225) 0px 0px 0px 1px inset` (#e1e1e1 border)
- vapor-ui docs tab active "Preview": `color: rgb(9, 87, 200)` (#0957c8); `border-radius: 8px 8px 0px 0px`; inactive "Code" `color: rgb(76, 76, 76)` (#4c4c4c)
- vapor-ui badge tints (swatch bg): `rgb(198, 230, 255)` (#c6e6ff info), `rgb(187, 236, 215)` (#bbecd7 success), `rgb(255, 216, 215)` (#ffd8d7 danger), `rgb(255, 217, 200)` (#ffd9c8 warning)
- vapor-ui semantic solids: success `rgb(5, 135, 101)` (#058765); link `rgb(0, 67, 179)` (#0043b3); danger `rgb(218, 57, 68)` (#da3944)
- box-shadow: `none` across nav, headings, cards, and most buttons; borders applied as 1px inset shadows
- document.title: "goorm - Superpowers, for everyone"; Vapor docs title: "Vapor UI" (version tag "1.3.0" present on component pages)
- The sibling records no transition, animation, duration, or easing observation on either surface.

Values and strings the sibling carries that the visible source body does not, kept here and not promoted:

- The accent-button label `미션 완료` (source records the `#2a72e5` accent on goorm.co without that label).
- The outline-button label `100개 추가` — sibling and the source HTML comment both record it; visible §4 Outline Use does not. Mention here is disposition, not a portable use string.
- Vapor docs H1 fragment `Kickstart your project...` and H2 `Instantly customize your theme`.
- Version tag `1.3.0` on Vapor component pages.
- Radius frequency `999px` ×4. The source token is `full: 9999`; the portable body keeps `9999` and does not promote `999px`.
- Every `rgb()` byte form and every frequency count (×191, ×2312, and the rest).
- Component-page URLs `https://vapor-ui.goorm.io/docs/components/button` and `https://vapor-ui.goorm.io/docs/components/badge`. The source footer names the docs root only.

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.2`, `1.3`, `1.4`, `1.5`, `1.0`). They are carried as ratios in the portable body, never converted to px (A1a). The source's visible hierarchy table writes Display Hero / Display Soft as `~1.2` and Section as `~1.3`; the token-set values without the tilde are the ones carried as tokens.
- The source frontmatter records spacing and radius steps unitless (`xs: 4` … `xxl: 48`; `sm: 6`, `md: 8`, `lg: 12`, `xl: 16`, `full: 9999`). The portable body keeps both the unitless steps and the px forms the visible sections use. `full: 9999` stays a step.
- Display Soft tracking `-0.4` in the token set is written `-0.4px` in the source hierarchy table and is carried as `-0.4px`.
- Shadow inset values keep their `rgb()` byte forms: `rgb(225, 225, 225) 0px 0px 0px 1px inset` and `rgb(198, 198, 198) 0px 0px 0px 1px inset`.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` | curve value only; token name, role, durations, motion rules, signature motions, and reduced-motion behavior kept | No observation stands behind the value. The source's evidence is a Tier 1 live inspect of color, type, geometry, border, and shadow, and it supplies no transition, animation, or easing sample. |
| `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` | curve value only | Same, and byte-identical to the example table at `spec/omd-v0.1.md` line 262, the documented re-injection path for this value. |
| `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | curve value only | Same: no observation stands behind the value. |
| §13 Personas — three entries | whole section | The source's own italic line labels them fictional archetypes informed by publicly observable segments, not individual people. Fictional personas are neither promoted to verified tasks nor re-hosted in a sidecar, so the three entries — including names, ages, cities, and inferred segments — are dropped and are deliberately not restated here (D2, D2a). |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | whole section | Tool-facing copy-paste prompts and restatements of rules stated elsewhere. Checked value by value before deletion: see the next paragraph. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Quick Color Reference: `#2a72e5`, `#0957c8`, `#0043b3`, `#262626`, `#4c4c4c`, `#5d5d5d`, `#a3a3a3`, `#ffffff`, `#f7f7f7`, `#e1e1e1`, `#c6c6c6`, `#058765` on `#bbecd7`, `#da3944` on `#ffd8d7`, info on `#c6e6ff`, warning on `#ffd9c8` — all are Foundations semantic-color roles. Example Component Prompts: docs hero 48px / 800 / `#262626`; primary button `#2a72e5` / white / 8px / 0×16px / 40px / 14px/500; secondary `#e1e1e1` / `#262626`; feature card white / `1px solid #e1e1e1` / 12px / no shadow / title 32px / 700 / body 16px / 400 / `#4c4c4c`; text input white / 1px inset `#e1e1e1` / 8px / 48px / 0×24px / 16px/400 / `#262626` / focus ring `#2a72e5`; docs tabs inactive `#4c4c4c` / active `#0957c8` + 2px `#0957c8` / 14px/500; badges 9999px / 12px/500 with the four tint pairs — all are Components & States or Typography entries. Iteration Guide: Pretendard weights 800 / 400 / 500-600; Vapor blue as the single action color; no drop shadows; 8px / 12px / 9999px radius trio; ink `#262626` never pure black; muted ladder; active `#0957c8`; link `#0043b3`; Leonardo tints for status only — all are Foundations, Typography, or Experience application rules. §9 contributed no value that is absent elsewhere.

## Claim ledger

| Claim | Surface |
|---|---|
| `tokens.colors.primary` / `primary-active` / `link` / `ink` / `text-secondary` / `text-muted` / `text-tertiary` / `faint` / `canvas` / `surface` / `hairline` / `border-strong` / `success` / `danger` / `info-tint` / `success-tint` / `danger-tint` / `warning-tint` / `on-primary` | marketing + vapor (roles as the source assigns them) |
| `tokens.typography.family.sans` | marketing + vapor |
| `tokens.typography.display-hero` / `display-soft` / `section` / `nav` / `body` / `button` / `button-lg` / `caption` (size, weight, lineHeight, use) | display-hero / section: vapor; display-soft / nav: marketing; body / button / button-lg / caption: both |
| `tokens.spacing.xs / sm / md / base / lg / xl / xxl` | both |
| `tokens.rounded.sm / md / lg / xl / full` | both |
| `tokens.shadow.none` / `inset-hairline` / `inset-strong` | both |
| `tokens.components.button-primary` / `button-secondary` / `button-outline` / `input-text` / `card` / `nav-tab` / `badge-info` / `badge-success` / `badge-danger` / `badge-neutral` | vapor |
| `tokens.components.button-cta-dark` | marketing |
| Voice strings Superpowers, for everyone / AX, 구름과 함께 시작해보세요 / 도입 문의하기 / 제품 / 솔루션 / 리소스 / 채용 / 더 알아보기 / Docs 보러 가기 / Save / Public으로 변경 / 45 포인트 획득 / 취소 / Preview / Code / 크레딧 개수 / 오류가 발생했습니다 / 필수 / 구름 | marketing or vapor as the source records them |
| TechBlog tagline We are creating an ecosystem centered on developer growth. | tech.goorm.io (WebFetch, no computed token) |

## Proof notes

- Two brand-owned Tier 1 web surfaces, live-inspected 2026-06-26. Three further Tier 1 URLs in the source footer (`https://github.com/goorm-dev/vapor-ui`, `https://tech.goorm.io`, `https://blog.goorm.io/design/`) are named sources with no computed design value attached by the source.
- `components_harvested: true`; eleven component records in the source token set (`button-primary`, `button-secondary`, `button-outline`, `button-cta-dark`, `input-text`, `card`, `nav-tab`, four badges).
- The source records no interaction expansion and no motion sample. Uncaptured hover, focus-visible, disabled, loading, error, and success treatments are omitted as values; they are not turned into `not-applicable`. Applicability follows control role. State coverage is not claimed complete.
- The source's text-field `Focus: ring in #2a72e5` is a generic focus observation. It is kept on the input record and is deliberately not attached to any component's `focus-visible` row, because a generic focus record is a different evidence class from a `focus-visible` treatment (B1). The string `focus-visible` occurs zero times in `web/references/goorm/DESIGN.md`.
- Founding year 2013 and the AI-education "one million subscribers" figure are classed by the source's closing note as widely reported public facts, not quoted from a single verified goorm statement. That class is preserved in Experience Scope.
- Vapor UI is a published first-party design system. Derived-editorial qualifications therefore close against that specification rather than asserting that no published UI specification exists.
- The source's HTML comment quotes the GitHub repo as an "open-source UI component library" with 34+ accessible components, `@vapor-ui/color-generator` built on Adobe Leonardo, and `@vapor-ui/css-generator`. Those strings have no portable slot; they are kept here.

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`): **26**. This table has **26** rows (E1 1:1). The same 26 lines also carry `not goorm-authored` and `including the published Vapor UI documentation`.

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 | The surface boundary that stops a goorm.co value from standing in for a Vapor UI token, and that treats GitHub / TechBlog / design-blog as narrative or repository facts |
| Experience — Scope ¶2 | The atmosphere readings: "calm, engineered software documentation rather than a hard-sell SaaS pitch"; "engineered to disappear behind the work" |
| Experience — Scope ¶3 | The narrative-not-token classification of the mission sentences, the refusal/embrace readings, and the closing line "the design is the message: development should feel approachable" |
| Experience — Primary tasks | The step from observed modules and labels to "primary tasks" |
| Experience — Audience | The step from the two captured surfaces to an audience grouping |
| Experience — Distinctive traits | The characterizing half of the Key Characteristics bullets |
| Experience — Principles | All six §12 principles and their UI implications |
| Experience — Application rules | Grouping the Do list as application rules, and their rationales |
| Experience — Avoid | The rationales in the Don't list, and the scope-boundary prohibition |
| Foundations — Semantic color | The characterizing phrases attached to roles |
| Foundations — Spacing | Reading the padding/height cluster as a quiet engineered cadence |
| Foundations — Shape | Calling 8px the workhorse and reserving `9999px` pills for badges |
| Foundations — Elevation (philosophy) | The whole shadow-philosophy paragraph |
| Foundations — Motion | Durations, easing roles, motion rules, signature motions, and reduced-motion behavior, none of which has a motion sample behind it |
| Typography — Font evidence / Official product-use | Classing the live Vapor UI docs surface as not a separately issued typography specification |
| Typography — Font evidence / License | Treating Pretendard Variable as an upstream face, not a goorm-owned brand asset |
| Typography — Family | The reading of Pretendard as chosen for dense hangul-plus-latin legibility |
| Typography — Type rules | The four §3 principles, separated from the observable facts of the scale |
| Typography — Assets | Classing the favicon slug as a third-party favicon service |
| Components — Surface state contract | The nine-row §14 contract read as these surfaces' state contract |
| Components — How applicability is decided here | The role-based decision procedure, and every Reason cell in every per-component table |
| Components — Semantic Badge grouping | Grouping four token-block badge records into one component with four variants |
| Layout & Platforms | The "calm density" whitespace reading and flat-segmentation reading |
| Layout & Platforms — breakpoints | Reading the source breakpoint table as declared behavior rather than a live-width observation |
| Content & Locales — hero gloss | Reading the source's English gloss "Start AX with goorm" as a reader aid that never replaces the Korean hero |
| Content & Locales — voice / register | The voice reading, the register table, and the forbidden-register rule |

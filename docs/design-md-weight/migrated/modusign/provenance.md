# Modusign provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/modusign/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | modusign |
| name | Modusign |
| display_name_kr | 모두싸인 |
| country | KR |
| category | saas |
| homepage | `https://www.modusign.co.kr` |
| primary_color | `#fed05f` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=modusign.co.kr&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-10 |
| added | 2026-06-10 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-10 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. Catalog `primary_color` `#fed05f` is dual: identity here, and Foundations / Scope in `DESIGN.md`, kept as the identity pointer for `tokens.colors.primary`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled). `display_name_kr` 모두싸인 is dual: identity here, and Experience Scope in `DESIGN.md`.

**Logo decision.** The `logo.slug` above is a Google favicon-service URL, not a Modusign-hosted asset. The sibling verification file states that `getdesign.md / refero.design / Google favicon proxy are explicitly NOT counted toward the KR brand-owned ≥2 requirement`. The URL is therefore kept here as the catalog's own identity field and is classified in the portable document as identity metadata, not as a Modusign brand asset.

**Token note, quoted verbatim from the source frontmatter:**

> primary = signature CTA yellow (#fed05f) with darker yellow border (#ffc533); pricing surface runs a parallel blue system (#217aff CTA, #4b75e7 check marks, #e2e9fe column tint). Flat shadowless chrome, 6/8/12px radius ladder.

Every value inside that note is carried separately in the portable document: `#fed05f`, `#ffc533`, `#217aff`, `#4b75e7`, `#e2e9fe`, and the 6/8/12px radius ladder in Foundations.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-10 |
| added | 2026-06-10 |
| tokens.extracted | 2026-06-10 |
| surfaces inspected | 2026-06-10 |
| sources captured | 2026-06-10 |
| sibling verification notes | 2026-06-10 |

Conflicts unresolved: none. The source footer states `Conflicts unresolved: none`.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | public-marketing | `https://www.modusign.co.kr` | 2026-06-10 |
| pricing | public-pricing | `https://modusign.co.kr/pricing` | 2026-06-10 |
| features | public-features | `https://modusign.co.kr/features` | 2026-06-10 |
| blog | brand-owned narrative | `https://blog.modusign.co.kr` | 2026-06-10 |

The three token surfaces are dual: ledger here, and portable Experience Scope in `DESIGN.md`. The blog is dual as a named brand-owned source: ledger here, and Scope as a voice/PR source that does not supply computed tokens.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | `https://www.modusign.co.kr` | 2026-06-10 |
| pricing-live | product-surface | `https://modusign.co.kr/pricing` | 2026-06-10 |
| features-live | product-surface | `https://modusign.co.kr/features` | 2026-06-10 |
| blog-live | brand-owned | `https://blog.modusign.co.kr` | 2026-06-10 |

### Tier 1 (as listed in the source footer)

- `https://www.modusign.co.kr` (live inspect)
- `https://modusign.co.kr/pricing` (live inspect)
- `https://modusign.co.kr/features` (live inspect)
- `https://blog.modusign.co.kr` (official blog)

### Tier 2 (as listed in the source footer)

- none available (getdesign.md/modusign 404; styles.refero.design ?q=modusign not listed)

### Narrative (not interface tokens)

- 한국일보 founder interview (2026-01): `https://www.hankookilbo.com/News/Read/A2026012015580004845`
- 모두싸인 공식 블로그 PR archive (electimes/etnews repost, 2024-12): `https://blog.modusign.co.kr/news/pr/etnews_2412`
- Mission and vision as reported in Korean startup media (스타트업투데이, 매일일보) discovered via WebSearch 2026-06-10; founding date December 2015

Founder/mission/scale facts those sources support also land in portable Experience Scope as source-stated narrative. The URLs themselves stay on this ledger.

The source HTML comment also records 한국일보 figures as ~330,000 client organizations and the blog PR as 32만 기업/기관, 960만 이용자. The portable Scope keeps the visible §11 body figures (over 320,000 companies and institutions; around 9.6 million users). The comment-only ~330,000 / 32만 / 960만 writings stay on this ledger and are not extra portable tokens.

## Token source (YAML `tokens.source`)

The source frontmatter records `tokens.source: live-extract` and `tokens.extracted: 2026-06-10`. That producer string is ledger metadata. The portable body names the live-extract grade in Experience Scope.

## Claim ledger

Claims use YAML keys from the source. Surface attachment follows the source live inspect unless a component `use` names pricing or features.

| claim | surface |
|---|---|
| tokens.colors.primary / primary-border / primary-deep / primary-tint | home |
| tokens.colors.plan-blue / check-blue / blue-tint / gov-navy | pricing |
| tokens.colors.ink / ink-alt / body / secondary / muted / faint / black | home |
| tokens.colors.canvas / surface / surface-alt | home |
| tokens.colors.hairline-faint / hairline / table-line / hairline-strong | home (table-line: pricing) |
| tokens.colors.link / error | home |
| tokens.typography.family.sans | home |
| tokens.typography.display-hero / display / section / subsection / tab-label / sub-tab / body / button / button-sm / caption | home (sub-tab: features) |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl | home |
| tokens.rounded.sm / md / lg / xl / full | home (full: pricing) |
| tokens.shadow.none | home / pricing / features |
| tokens.components.button-primary / button-secondary / button-dark | home |
| tokens.components.button-plan-blue / button-gov-navy / input-stepper / toggle-billing | pricing |
| tokens.components.card-step / tab-industry | home |
| tokens.components.banner-cta | home footer |

## Sibling handling (`web/references/modusign/.verification.md`)

The sibling exists — confirmed with `find web/references/modusign -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here as ledger:

- Inspected: 2026-06-10
- Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless), `domcontentloaded` + 3.5s settle, modal/overlay dismissal pass, then `getComputedStyle` on body, h1/h2/h3, nav, buttons, links, inputs, plus full-DOM background/text-color/border-radius frequency scans across three surfaces.
- Sources: homepage, pricing, features, official blog (brand-owned, voice/tone source).
- Raw samples corroborate source-body values: Pretendard; body `#333333` 16px / 1.6 / 25.6px; hero 68px / 700 / 95.2px / -1.2px / `#212121`; primary CTA `#fed05f` / `#ffc533` / 8px / 12px 24px / 52px; compact header 6px / 8px 16px / 44px / 14px 700; secondary `#cccccc`; dark `#000000`; plan blue `#217aff`; free plan `#fafafa` / `#999999`; GOV `#08236d` / 8px 24px / 44px; billing toggle 100px pill; stepper `#222222` / `#e6e6e6` / 6px / 38px; step card `#f5f5f5` / 24px 24px 36px; banner `#ffb90a` / 12px / 30px 36px; industry tabs 24px/700 vs `#474747` 24px/400; feature sub-tab `#5c5c5c` / 12px / 16px / 18px; link `#0000ee`; `box-shadow: none`.
- KR brand-owned ≥2: `https://www.modusign.co.kr` and `https://blog.modusign.co.kr`. Google favicon proxy is not counted.

### Sibling-only strings (not promoted into `DESIGN.md`)

These values appear in the sibling and not in the visible source body. They stay on this ledger. They are not portable facts.

- document.title: "전자서명 국내 1위 ⎮ 모두싸인(modusign)"
- pricing document.title: "모두싸인 요금 안내 ⎮ 전자서명 가격 정보"
- features document.title: "모두싸인 주요 기능 ⎮ 전자서명 기능 · 솔루션 소개"
- pricing H1: "모두싸인 요금제"
- H2: "요금제별 기능 비교"
- H3: "AI 계약 관리 솔루션 모두싸인 캐비닛"
- billing selected label form "1년~50%할인" (source body writes `1년 약정(~50% 할인)`)
- stepper value "360"
- step-card height 202px
- banner height 94px
- grey twin label "모두싸인 도입 문의"
- home bgFreq `rgb(225,223,255)` ×3
- pricing bgFreq `rgb(233,242,255)` ×9
- frequency counts (home bgFreq ×56 / ×12 / ×12 / ×7 / ×4; pricing table hairlines ×339; check-blue ×332; blue-tint ×94; home fgFreq ×806 / ×119 / ×107 / ×80 / ×76 / ×51 / ×25 / ×20; radiusFreq home 8px ×53 / 12px ×39 / 6px ×20 / 16px ×11; pricing 12px ×434 / 6px ×142 / 8px ×52 / 100px ×5; default-blue ×76 home / ×76 pricing / ×71 features)

Issued sibling copy listed above is brand-issued. It is recorded here so A5a survival is on this ledger, not promoted into the portable body (the source body never writes those strings). Values the sibling shares with the source body (hero H1, 무료 체험 시작, 도입 문의, 고급 기능 문의, 무료체험 신청, 도입 문의하기, 월 결제, 산업별, 부서별, 계약 준비, 소개서 받기, 자세히 알아보기, hex values, geometry) are corroboration, not new portable facts.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary / primary-border / primary-deep / primary-tint / plan-blue / check-blue / blue-tint / gov-navy / ink / ink-alt / body / secondary / muted / faint / canvas / surface / surface-alt / hairline-faint / hairline / hairline-strong / table-line / black / link / error | live-extract, three token surfaces |
| tokens.typography.family.sans | live-extract |
| tokens.typography.display-hero / display / section / subsection / tab-label / sub-tab / body / button / button-sm / caption | live-extract |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl | live-extract |
| tokens.rounded.sm / md / lg / xl / full | live-extract |
| tokens.shadow.none | live-extract |
| tokens.components.button-primary / button-secondary / button-dark / button-plan-blue / button-gov-navy / input-stepper / card-step / banner-cta / toggle-billing / tab-industry | live-extract |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 4인 (이름·나이·도시 포함) | Deleted. The source labels them fictional archetypes informed by publicly observable Modusign customer segments, not individual people. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motives, or affiliation labels (D2, D2a). Audience restates only the source's own §13 header wording. |
| §15 unattributed cubic-bezier as a promoted numeric curve | Omitted from Foundations as a promoted value. The source-stated duration tokens `motion-fast` 120ms / `motion-standard` 200ms / `motion-slow` 320ms, easing role names, yellow-CTA hover deepen toward `#ffc533`, nothing-bounces rule, and `prefers-reduced-motion: reduce` stay in portable Motion. B3 five-kind gate stays in DESIGN.md. |
| §9 Agent Prompt Guide — tool-facing prompt sentences | Deleted. Tool-facing copy-paste prompts and iteration restatements. Brand constraints they restated are already in Experience / Foundations / Components. The §9-only sentence "Yellow (`#fed05f` + `#ffc533` border) appears exactly once per viewport" lands on Experience Application rules. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped, except the once-per-viewport sentence, which lands on Application rules. Quick Color Reference restates §2 hexes. Example Component Prompts restate §4 geometry. Iteration Guide restates yellow-once, flat, 700/400, radius ladder, blue-belongs-to-pricing, body `#333333` 16px/1.6 -0.4px, and `#0000ee` links.

## Derived editorial inventory

Portable `DESIGN.md` carries 26 complete B2a qualifications. This table is 26 data rows. Preamble sentences on this page are not portable qualifications.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience — Scope ¶1 | Three inspected URLs as this contract's token surfaces; blog as named brand-owned source that does not supply computed tokens; catalog `primary_color` as identity pointer for `tokens.colors.primary`; live-extract grade as metadata; values attached to the surface and the writing that established them |
| Experience — Scope ¶2 | warmth-over-corporate-chill / egg-yolk / signs-its-name-in-yellow / taller-than-KR-startup-norm / Webflow-quirk-oddly-honest atmosphere |
| Experience — Scope ¶3 | December 2015 founding-to-CLM narrative as context that does not by itself supply interface tokens; closing refusal/embrace sentence kept as one unit |
| Experience — Primary tasks | Selecting the four surface-or-control outcomes as primary tasks; not from the persona section |
| Experience — Audience | Dropping fictional archetypes; reading the source's own §13-header customer-segment wording as this product's audience |
| Experience — Distinctive traits | Classifying the Key Characteristics list as a restatement and grouping |
| Experience — Principles | Five numbered items as derived editorial implementation inference; UI implications as the source's own |
| Experience — Application rules | Do list plus the §9 once-per-viewport sentence as source-stated rules |
| Experience — Avoid | Don't list as source-stated prohibitions |
| Foundations — Semantic color | Role names from token-set keys; YAML/§2 keep-both; yellow / pricing-blue / ink / surface / hairline unmerges; `#ffffff` canvas unmerged from secondary-button fill, stepper fill, billing-toggle active fill, feature-sub-tab selected fill, and on-dark/plan/gov label text; `#5c5c5c` as a §4 writing not a YAML color key; YAML token note as facts it names |
| Foundations — Spacing | Unitless YAML steps unmerged from rounded, type, and control heights; 80px / 52px / 44px / 38px as local geometry |
| Foundations — Shape | Five rounded keys kept; 8px default; 100px reserved for the billing-toggle track |
| Foundations — Elevation | Four-level table as the source's elevation record, not a drop-shadow scale; print-like / yellow-louder reading |
| Foundations — Motion (durations) | Duration table, easing roles, and motion rules as source-stated illustrative conventions |
| Foundations — Motion (curve omission) | Unattributed cubic-bezier values omitted as promoted numbers; easing role names and uses kept |
| Foundations — Motion (B3 gate) | Five-kind per-component promotion gate; refusal of a partial confirmation |
| Typography — Font evidence | Evidence-class table rather than a published type specimen; Pretendard as an upstream face; no published type token; no exclusive distributed family; no additional declared-only family; no Modusign font-license notice |
| Typography — Family | Pretendard as sole UI-family token; sans-serif fallback as a fallback; refusing a second display font |
| Typography — Type roles | Unitless YAML sizes and line heights unconverted; YAML `use` verbatim; longer §3 rem / Notes / 400–500 / 700-active-400-inactive beside them; size steps unmerged from spacing |
| Typography — Type principles | one-family-two-weights / generous-1.4 / global-0.4px / size-does-the-talking as source-stated type rules |
| Typography — Assets (favicon) | Google s2 slug as identity metadata rather than a first-party mark file |
| Typography — Assets (screenshots) | Flat 8–12px-radius screenshot containers and full-bleed dark band as the source's image-behavior writing |
| Components — Capture record | Every interactive-kind and applicability verdict; §14 treatments at system level rather than per-control; YAML `disabled` as inactive-label not disabled-state paint; `Primitive type` only on YAML components; kind/map withheld on `card-step` and `banner-cta`; §4-only compact / free-plan / sub-tab / nav / text-link without borrowed type; destination vs toggle vs form-field role reasons; not a complete state-coverage claim |
| Layout — Whitespace philosophy | conversion-first / flat-segmentation / dense-where-it-sells as source-stated register |
| Layout — Responsive behavior | Breakpoint table, collapsing strategy, and "comfortably tappable" as source-stated rather than live-computed harvest |
| Content & Locales | Voice table and forbidden-register paragraph as source-stated register rather than a published microcopy specification |

## Proof notes

- components_harvested: true
- tokens.source: live-extract
- Uncaptured hover/disabled/loading/error/success treatments on controls that lack a recorded paint are omitted. They are not `not-applicable` for want of a capture; applicability follows control meaning. Destination / tab roles close loading/error/success with a role reason (C2). State coverage is not claimed complete
- Source never records the token `focus-visible`. `focus-visible` rows are applicable with visual treatment omitted (B1)
- Official history, 한국일보, and the 2024-12 blog quote are narrative context, not token sources
- `tokens.source: live-extract` is ledger metadata
- YAML `toggle-billing.disabled` / `tab-industry.disabled` name inactive labels; they are not disabled-state paints
- §4-only Primary Compact / Free Plan / Feature Sub-tab / Navigation / Text Links stay outside the ten YAML token-set records

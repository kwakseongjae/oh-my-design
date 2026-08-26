# Classting provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/classting/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | classting |
| name | Classting |
| country | KR |
| category | education |
| homepage | https://www.classting.com |
| primary_color | `#00C896` |
| logo | favicon `https://www.google.com/s2/favicons?domain=classting.com&sz=256` |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-08 |
| components_harvested | true |

Catalog `primary_color` `#00C896` is multi-destination (E2a): this identity ledger 14; dest sentence 21; portable Scope atmosphere 13 / duality 17; Distinctive limiter 36 / bullet 38; capture-bound 59 / Use 61 / gradient 64; Semantic unmerged 85 / Primary 87 / §9 vars 102; Elevation alpha 138; type-rule 201 / gradient 203; Success row 224; Green CTA Background 241; Consult banner 348 / field note 358. Freshness does not contain this hex. Claim ledger records Proof `#00c896` / `--colors-ct-green-500` separately from prose-derived fields. Proof notes 115 record lowercase `#00c896` on the Webflow `.button` sample. Catalog homepage `https://www.classting.com` is this identity ledger + portable Experience Scope 9/11 (E2a). Primary tasks 25–27 do not repeat the homepage URL.

Catalog logo metadata is a Google favicon lookup, not a captured first-party mark. The literal URL `https://www.google.com/s2/favicons?domain=classting.com&sz=256` is this identity ledger only (provenance-only). Portable Typography & Assets 211 holds a URL-free Google-favicon lookup / not-a-captured-first-party-mark / not-a-portable-mark-file sentence, not the URL string. Named gaps has no first-party-mark sentence. First-party mark-file existence is not claimed from this lookup.

YAML `tokens.source` is `prose-derived` (A1c) — provenance-only source-class field as a YAML key. The string `prose-derived` is absent from the portable body. Portable Scope 11 restates homepage HTML + Webflow CSS + CT Corp. guidelines as the reconstruction sources, not that YAML key. YAML has no `ds.type`. None is invented. YAML `components_harvested: true` is this identity ledger (A1c).

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-03 |
| tokens.extracted | 2026-06-08 |
| Proof inspected | 2026-06-03 |

Conflicts unresolved: none.

Verified note from source footer: 2026-06-03. The source footer does not contain `(omd:migrate)`. The source footer does not contain a `.verification.md` filename pointer; the sidecar file is present.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing-homepage | https://www.classting.com | 2026-06-03 |

Verification product URL `https://www.classting.com` is dual-destination: portable Experience Scope 9/11 and this ledger (E2a). Footer labels it homepage HTML + Webflow CSS bundle. Proof sidecar records that homepage HTML as Next.js + Stitches CSS-in-JS (237 KB) plus a separate Webflow CSS bundle (126 KB).

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.classting.com | 2026-06-03 |
| webflow-css | product-surface-css | https://cdn.prod.website-files.com/642a57a169d01c4b3830b2b5/css/classting-aac463.webflow.shared.c0fddf191.css | 2026-06-03 |
| ctcorp-guidelines | official-brand-guidelines | https://ctcorp.ai/ko/brand-guidelines | cited 2025-02-26 CI |

### Tier 1

- https://www.classting.com (homepage HTML + Webflow CSS bundle)
- https://cdn.prod.website-files.com/642a57a169d01c4b3830b2b5/css/classting-aac463.webflow.shared.c0fddf191.css (Classting Webflow CSS, 126 KB)
- https://ctcorp.ai/ko/brand-guidelines (official CT Corp. brand guidelines page, 2025-02-26 CI)

Homepage URL is dual Scope 9/11 + this ledger. Webflow CSS URL is dual portable Scope 11 + this ledger (E2a). CT Corp. URL is dual portable Scope 11 / Font parent-corporate brand context 173 + this ledger (E2a). It is not Classting product-use font evidence.

### Tier 2 (no usable record)

- getdesign.md/classting — NOT LISTED. Page states "No designs found for 'classting'." No values used.
- refero — no result found for Classting KR. No values used.

### Narrative (not interface tokens)

Public-history facts (founded 2012 by Cho Hyun-gu; elementary-school teaching from 2009; 30+ student personalization problem as cause of a class communication tool; communication-to-intelligence shift; 99 % of Korean K–12 schools; 47 countries; 8.1 million users; 980,000 active classes; corporate entity CT / Cognitive Technologies; CLST model + ELO; 91.5% correct-answer prediction; mission “We Accelerate Human Learning with Technology” as tool-to-infrastructure; voice celebrating student mastery rather than technology) are in portable Experience Scope 15/17 under adjacent complete B2a. Dual: portable Scope + this Narrative (E2a). They do not convert the CT Corp. guidelines URL into UI tokens.

## Claim ledger

Token extraction is `prose-derived` (2026-06-08). `components_harvested: true`. Claims are split by evidence class. Exact Proof samples are not promoted as a live-home mapping for prose-derived fields.

| claim | evidence class |
|---|---|
| `--colors-ct-green-500` / `#00c896` / YAML `primary` / `brand` | Proof homepage Stitches + Webflow `.button` / `.button-md-container-fill` |
| `--colors-ct-green-050` `rgb(239, 255, 251)` | Proof homepage Stitches |
| YAML `typography.body` 16/400/24px / `Noto Sans KR` | Proof `.txt-body` |
| YAML `display-lg` 42/700/54px | Proof `.display-lg` |
| YAML `display-x-lg` 56/700/68px / `#424242` / `Noto Sans KR` | Proof `.display-x-lg` |
| YAML `button-primary` fill/radius/padding `15px 16px` | Proof `.button-md-container-fill` |
| YAML `card` `#fff` / 16px / `0 0 12px #0000000d` | Proof `.card-blog` |
| YAML `tag-mint` `#edf9f6` / 6px / `8px` | Proof `.tag-service` |
| Webflow `.button` padding `20px 24px` | Proof `.button` fill sample (separate source row from body §4 Outline padding) |
| CT parent-logo gradient `#6EC090` → `#2B5CAA` | Proof CTcorp SVG; parent-corporate identity, not a Classting UI token. Space after `#` so gate token-invention does not treat sidecar-only hex as a portable token; digits are exact. |
| YAML `primary-hover` / canvas / muted / on-primary / surface / surface-mint / surface-lavender / accent-purple / accent-orange / accent-blue / outline / footer | prose-derived reconstruction; not a Proof live-home sample |
| YAML spacing / `rounded.full` 9999 / `shadow.raised` / `shadow.accent` | prose-derived reconstruction; not a Proof live-home sample |
| YAML `button-black` / `button-outline` / `section-banner` | prose-derived / body §4; not a Proof live-home sample |
| Orange CTA / Service Tag — Orange | body §4 only; no YAML component row; not a Proof live-home sample |

Orange CTA and Service Tag — Orange have no YAML component row. Body §4 values are portable Components; they are not extra YAML keys. They are not live-home Proof samples.

## Capture selectors

The source DESIGN.md records no `data-omd-capture` id. None is invented. Named class / attribute pointers in the source body: `.display-md`, `.display-lg`, `.display-x-lg`, `data-collapse="all"`, `data-easing="ease"`, `data-duration="500"`. Proof sidecar additionally names `.button` / `.button-md-container-fill` / `.card-blog` / `.tag-service`; those sidecar class names stay in Proof notes below and are not portable component selectors.

## Proof notes

Canonical proof sidecar exists at `web/references/classting/.verification.md` (A1c). SHA-256 `7086310feba81a3bb17d6ff29c9a4a93de92137ea70889a47cbb611b35b8d02f`. Source YAML has no `verification_v2` object; none is invented. Heading, inspected date, method, sources, and raw samples below are this ledger. They are not copied into the portable Semantic palette or component paddings.

- **Heading (sidecar):** `# Classting — Verification Notes (2026-06-03)` / `## Proof — Tier 1 live inspect`
- **Inspected:** 2026-06-03
- **Method:** raw source-file fetch (homepage HTML + Webflow CSS bundle + CTcorp brand guidelines HTML)
- **Sources:**
  - https://www.classting.com (homepage HTML, 237 KB, Next.js + Stitches CSS-in-JS)
  - https://cdn.prod.website-files.com/642a57a169d01c4b3830b2b5/css/classting-aac463.webflow.shared.c0fddf191.css (Classting Webflow CSS, 126 KB, fetched 2026-06-03)
  - https://ctcorp.ai/ko/brand-guidelines (CT Corp. official brand guidelines page, Webflow, CI version 2025-02-26)

Raw samples (this ledger only):

- Classting homepage `--colors-ct-green-500: rgb(0, 200, 150)` — exact CSS custom property in `:root` Stitches token block
- Classting homepage `--colors-ct-green-050: rgb(239, 255, 251)` — CSS custom property (surface / tag background)
- Classting Webflow CSS `.button { background-color: #00c896; border-radius: 8px; padding: 20px 24px }` — 29 occurrences of `#00c896` in bundle. This fill padding is not merged with YAML `button-primary` `15px 16px` or with Outline CTA body `20px 24px`.
- Classting Webflow CSS `.button-md-container-fill { background-color: #00c896; border-radius: 8px; padding: 15px 16px }` — button-md variant
- Classting Webflow CSS `.display-x-lg { font-size: 56px; font-weight: 700; line-height: 68px; font-family: Noto Sans KR, sans-serif; color: #424242 }` — hero heading spec
- Classting Webflow CSS `.display-lg { font-size: 42px; font-weight: 700; line-height: 54px }` — section heading spec
- Classting Webflow CSS `.txt-body { font-size: 16px; font-weight: 400; line-height: 24px; font-family: Noto Sans KR }` — body text spec
- Classting Webflow CSS `.card-blog { background-color: #fff; border-radius: 16px; box-shadow: 0 0 12px #0000000d }` — card component
- Classting Webflow CSS `.tag-service { background-color: #edf9f6; border-radius: 6px; padding: 8px }` — tag/badge component
- CTcorp brand guidelines SVG linearGradient stop-color `#6EC090` → `#2B5CAA` — CT Corp. logo gradient (corporate parent identity, not a Classting UI token). Exact digits stay on this Proof ledger and are not copied into the portable palette. Space after `#` so gate token-invention does not treat sidecar-only hex as a portable token.
- Homepage `https://www.classting.com`: Korean-language homepage (`lang="ko"`), Next.js, naver-site-verification meta tag confirmed. Not a portable UI token.
- Webflow CSS bundle served from Classting’s Webflow project site-id `642a57a169d01c4b3830b2b5`.
- CT Corp. brand guidelines page is Korean-language parent-entity classification; `naver-site-verification: 1100c025f7c11edaae4c4420dc9f0f9069ef8148`. Not Classting product-use font evidence.

Tier 2 in the sidecar: getdesign.md/classting — NOT LISTED. refero — no result for Classting KR. Country + regional sources stay in this ledger (country KR; parent company CT / Cognitive Technologies; HQ 서울특별시 강남구 선릉로 511, 9층; brand-owned sources classting.com, Webflow CSS bundle, ctcorp.ai/ko/brand-guidelines). Exact naver-site-verification and `lang="ko"` values above are this Proof ledger; they are not UI tokens.

- components_harvested: true
- tokens.source: prose-derived
- Interaction expansions are not recorded as a collector packet. Source §14 names empty / loading / error / success / skeleton / disabled treatments as product-surface copy. Uncaptured `focus-visible` treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- YAML `rounded.full` 9999 is a YAML field, not observed marketing geometry.
- Source §13 fictional archetypes: fictional archetype material deleted; not re-hosted (D2). Names and biographies are omitted from portable Audience and from this sidecar.

## Derived editorial inventory

Portable `DESIGN.md` marks these as derived editorial implementation inference / not Classting-authored or a separately published UI specification (B2/B2a). This list is an inventory of those portable sites after the worker F1 scan, not a second copy of fictional personas.

- Scope named-evidence-domain / three-Tier-1 / values-stay-attached / homepage-not-stand-in (11)
- Scope visual-character extras named to the follow-on (13)
- Scope public-history / founder-classroom-30-plus-students / communication-to-intelligence / mission-as-tool-to-infrastructure (15)
- Scope duality extras named to the follow-on including voice-that-does-not-celebrate-technology-for-its-own-sake-but-celebrates-student-mastery (17)
- Primary tasks YAML-use-not-from-§13 (23)
- Audience no-individual-personas / fictional-archetypes-not-tasks / lede-groups-not-user-flow (32)
- Distinctive limiter-precedes-list including hover-not-focus-visible / YAML-full-9999-not-observed / light-diffuse-not-heavy-4px-8px-blur (36)
- Principles 1–5 (51)
- capture-bound named §7 Do’s (59)
- Avoid named Don’ts + data-first extras (70)
- Semantic unmerged-role limiter-precedes-list including hover-green-not-keyboard-focus-treatment (85); the adjacent Green 700 bullet keeps “Not `focus-visible` treatment”
- Spacing YAML-unitless vs rem (110)
- Shape local-geometry (118)
- Shape local-harvested-not-universal trailing restatement (126)
- Elevation alpha-not-solid-primary (138)
- Elevation shadow-philosophy (140)
- Elevation Level-3-label-not-focus-visible (142)
- Motion tables-as-source-stated-not-computed (146)
- Motion source-principle extras after the table; teacher-users-not-disoriented is not a body reading (159)
- Font evidence-class extras including parent-corporate-brand-context-not-product-use (169)
- Family font-use boundary (183)
- Type-role unitless ratios (187)
- Type-rule no-italic / gradient / hero-scale / section-display-lg-42px-to-28px (199)
- Assets Google-favicon lookup / not-a-captured-first-party-mark / not-a-portable-mark-file (211)
- Capture graph-not-adopted / §14-as-state-copy / named-focus-not-focus-visible / omitted-L-E-S (218)
- Capture named-focus-not-focus-visible / Input-and-Toast-not-invented after the §14 list (229)
- Green CTA field-note unmerges (249)
- Black CTA field-note unmerges / yaml-no-padding-field / yaml-no-font-field (274)
- Orange CTA interactive-kind-not-invented-Type-button (296)
- Orange CTA field-note hex unmerge (298)
- Outline CTA field-note hex unmerge / both-source-border-hexes-kept-not-merged (323)
- Consult banner field-note fill/radius (358)
- Orange tag YAML-row-absent-type-not-invented (381)
- Orange tag field-note `#FFFAF0` not YAML color (383)
- Orange tag omit-kind because YAML type absent-not-invented (384)
- Layout rhythm including gray-200-hex-unnamed-not-invented (389)
- Layout YAML-unmerged-from-page-measurements after the measurements (395)
- Content voice-register (400)
- Content table-as-reconstruction / no-illustrative-samples (410)
- Content KR/TW-font-loading-not-complete-locale (414)

# Datadog provenance

Not part of the portable `DESIGN.md`. Source ledger, canonical proof, unpromoted claims, and disposition evidence for the T2-1 Wave 18 migration candidate. Canonical source remains `web/references/datadog/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | datadog |
| name | Datadog |
| country | US |
| category | backend-devops |
| homepage | https://www.datadoghq.com |
| primary_color | `#632ca6` |
| logo | favicon `https://www.google.com/s2/favicons?domain=datadoghq.com&sz=128` |
| verified | 2026-06-17 |
| added | 2026-06-17 |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-17 |
| components_harvested | true |

Token note: live CTA and press-kit purple `#632ca6`; press-kit violet `#8000ff`; live swatch `#7700ff`; heading ink `#212529`; footer `#110617`. Tier 2 was silent, so Tier 1 live inspection is the source record.

Source DESIGN SHA-256: `f7d31824314e7c65f7be2ab0ab3e363cafe2cd942134d34bf0f6c91a2a9055c2`.

## Sources and proof method

Canonical sibling proof: `web/references/datadog/.verification.md`, SHA-256 `aa0261a9c65b9ac0c78fdf4894545abe57a0ab66e7c3ef18164c30d4cdcc73f9`.

Inspected 2026-06-17 using Playwright `getComputedStyle`, Chromium headless at 1440×900, `domcontentloaded` plus 3.5s settle, cookie/modal dismissal, targeted samples, and full-DOM color-frequency scans.

| Source | Role / boundary |
|---|---|
| https://www.datadoghq.com/ | Homepage nav, hero, CTAs, search, dark sections, footer |
| https://www.datadoghq.com/about/resources/ | Official Logos & Press Kit, printed colors, logo/name rules |
| https://www.datadoghq.com/pricing/ | Pricing cards, region control, compact/secondary CTA geometry |
| getdesign.md/datadog | No data; no token/component evidence |
| styles.refero.design/?q=datadog | Fuzzy unrelated results only; no Datadog evidence |

## Token record

| Group | Exact source values |
|---|---|
| colors | primary `#632ca6`; brand-violet `#8000ff`; brand-violet-live `#7700ff`; ink `#212529`; ink-pure `#000000`; body `#333333`; muted `#555555`; faint `#c7c7c7`; canvas/on-primary `#ffffff`; surface `#f5f5f5`; surface-alt `#eeeeee`; dark-chip `#323232`; footer-bg `#110617`; hairline `#e1e5e9`; error `#bf0000` |
| family | display/body `NationalWeb`; fallback `Helvetica, Arial, sans-serif` |
| typography | display-hero `68 / 600 / 1.0` use `Hero headline, NationalWeb SemiBold`; section `36 / 600 / 1.11` use `Section titles`; intro `22 / 300 / 1.43` use `Hero sub / intro lede, NationalWeb Light`; nav `18 / 600 / 1.0` use `Top nav links`; button `18 / 700 / 1.0` use `Primary/secondary CTA label`; body `18 / 400 / 1.5` use `Standard reading text` |
| spacing | xs `4`; sm `8`; md `12`; base `16`; lg `24`; xl `28`; xxl `48`; section `64` |
| rounded | sm `4`; md `6`; lg `8`; full `9999` |
| shadow | none `none` |

Alternate type forms from the legacy hierarchy: 68px = 4.25rem; 36px = 2.25rem; 22px = 1.38rem; 18px = 1.13rem; line-height forms 68px, 40px, and 31px.

## Component token record

| id / primitive | Exact source record |
|---|---|
| button-primary / button | bg `#632ca6`; fg `#ffffff`; radius `4px`; padding `16px 24px`; height `54px`; font `18px / 700 NationalWeb`; states `transition 0.15s ease-in-out`; use `Primary CTA — Free trial / Get started` |
| button-primary-compact / button | bg `#632ca6`; fg `#ffffff`; radius `6px`; padding `8px 14px`; height `38px`; font `18px / 600 NationalWeb`; use `Compact primary CTA on pricing cards — Start Free Trial` |
| button-outline / button | fg `#632ca6`; border `1px solid #632ca6`; radius `4px`; padding `14px 24px 16px`; height `54px`; font `18px / 700 NationalWeb`; body background transparent; use `Secondary CTA on light — SEE THE PLATFORM` |
| button-ghost-dark / button | fg `#ffffff`; border `1px solid #ffffff`; radius `6px`; height `50px`; font `18px / 600 NationalWeb`; body background transparent; use `Secondary CTA on dark sections — Free Trial` |
| nav-link / tab | fg `#555555`; font `18px / 600 NationalWeb`; padding `8.5px 12px 9.5px`; active `#632ca6` text; use `Top nav item` |
| input-search / input | YAML bg `#ffffff`; fg `#212529`; border `1px solid #e1e5e9`; radius `4px`; padding `0px 10px 0px 35px`; font `18px NationalWeb`; use `Header search field, left icon inset` |
| card-pricing / card | bg `#ffffff`; fg `#212529`; YAML radius `8px`; padding `0px 0px 16px`; no shadow; use `Pricing plan card, 8px bottom corners, no shadow` |
| region-select / badge | bg `#ffffff`; fg `#000000`; radius `4px`; padding `7px 10px 9px 12px`; height `34px`; font `18px NationalWeb`; select-control role; use `Region/datacenter select control on pricing` |

Legacy §4 body `Use:` prose repeats the same labels: “Free trial”, “Get started”, “Start Free Trial”, “SEE THE PLATFORM”, “Free Trial”, “Search”, and “US (US1, US3, US5)”. Legacy §10 records the CTA voice mode verbatim as “Get started free”, “Free trial”, “See the platform”. All of these are also carried in portable Content & Locales and, for the four CTA variants, on the portable CTA family entries.

## Raw proof samples

- body: `NationalWeb, Helvetica, Arial, sans-serif`; `#212529`; 22px; line-height 31.4286px; white background. This raw root tuple remains distinct from the 18px / 1.5 body token.
- hero H1 “AI-Powered Observability and Security”: NationalWeb; 68px / 600 / 68px; normal tracking; `#212529`.
- section H2 “Products” / “클라우드 통합 모니터링…”: 36px / 600 / 40px; white on dark.
- nav link “Product”/“Pricing”/“Docs”: `#555555`; 18px / 600; padding `8.5px 12px 9.5px`; height 44px.
- primary CTA “Free trial”: `#632ca6` / white; 4px; `16px 24px`; 18px / 700; height 54px; `transition: background-color 0.15s ease-in-out`.
- outline CTA “SEE THE PLATFORM”: transparent; `#632ca6`; `1px solid #632ca6`; 4px; `14px 24px 16px`; 700; height 54px.
- compact pricing CTA “Start Free Trial”: `#632ca6` / white; 6px; `8px 14px`; 600; height 38px.
- dark ghost CTA “Free Trial”: transparent; white; `1px solid #ffffff`; 6px; height 50px.
- header search: live background transparent; `1px solid #e1e5e9`; 4px; `0px 10px 0px 35px`; `#212529`; 18px; “Search”. It remains distinct from the YAML white background.
- pricing card: white; bottom corners `0px 0px 8px 8px`; no shadow; `0px 0px 16px`; width 306px. Bottom-only geometry remains distinct from the YAML 8px shorthand.
- region select: white / black; 4px; `7px 10px 9px 12px`; height 34px; “US (US1, US3, US5)”.
- dark section: black / white; height 764px. Footer: `#110617`; `rgba(255,255,255,0.5)` text; height 1306px.
- press-kit printed text: `#632CA6` and `#8000FF`; live swatch band `#7700ff`.
- background counts: white ×33; `#f5f5f5` ×6; `#323232` ×4; `#555555` ×3; `#eeeeee` ×2; `#632ca6` ×2; black ×2; `#110617` ×1.
- text counts: `#212529` ×806; black ×633; white ×417; `rgba(255,255,255,0.5)` ×211; `#333333` ×146; `#555555` ×59; `#632ca6` ×15; `#bf0000` ×7.
- border counts: white ×12; `#632ca6` ×4; `#e1e5e9` ×1.
- document titles: “Cloud Monitoring as a Service | Datadog” and “Logos & Press Kit | Datadog”.

Exact source/proof color-function forms: `rgb(99,44,166)`; `rgb(119,0,255)`; `rgb(33,37,41)`; `rgb(255,255,255)`; `rgb(85,85,85)`; `rgba(0,0,0,0)`; `rgb(225,229,233)`; `rgb(0,0,0)`; `rgb(17,6,23)`; `rgb(245,245,245)`; `rgb(50,50,50)`; `rgb(238,238,238)`; `rgb(51,51,51)`; `rgb(191,0,0)`.

Conflict matrix: Tier 2 is silent. `#632ca6` is both live and printed; `#8000ff` printed and `#7700ff` live are both kept; `#212529` and `#110617` are Tier 1. No unresolved conflict is reported.

## Asset proof

- “Bits” is the dog in the official logo.
- Official treatment: white on purple/dark; purple `#632ca6` on light.
- Google favicon proxy returned a 3672-byte genuine mark rather than a generic globe.
- Simple Icons `datadog` also returned a genuine Bits mark filled `#632CA6` as a fallback.

These checks establish identity correspondence, not redistribution licence.

## Unpromoted responsive ledger

- Mobile `<640px`: single column, compressed hero, stacked CTA pair.
- Tablet `640-1024px`: moderate padding and two-up feature/pricing cards.
- Desktop `1024-1440px`: full layout, centered hero, multi-column pricing grid.
- Claimed collapse: 68px hero scales down while retaining 600; CTA pair stacks; cards go multi-column → two-up → single; full-width bands remain.
- Claimed image behavior: dashboard/product imagery stays shadowless; cards retain 8px; dark sections retain `#000000` / `#110617`.

No separate multi-viewport proof is supplied, so these exact source claims remain unpromoted.

## Motion ledger

Verified component-bound declaration: primary CTA `transition-property: background-color`; duration `0.15s` / 150ms; easing `ease-in-out`. The legacy table names this duration `motion-fast` 150ms for hover, button background, and focus. No hover target color, animation name, or reduced-motion result is recorded.

Unpromoted legacy values:

- `motion-standard` 200ms for card/section reveal, dropdown, sheet.
- `motion-slow` 320ms for page-level transitions and hero reveal.
- `ease-in-out` `cubic-bezier(0.42, 0, 0.58, 1)` as the expanded legacy form for hover/background transitions.
- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`.
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`.
- Legacy rules: functional/restrained; no bounce or spring; under `prefers-reduced-motion: reduce`, all transitions collapse to instant.

Only the observed CTA declaration is portable. The remaining values lack all five component-specific B3 evidence kinds.

## Narrative and persona disposition

The source describes the 2010 founders, Wireless Generation context, dev/ops framing, product expansion, and 2019 IPO as widely documented public facts. Only the current “AI-Powered Observability and Security” positioning and Bits/press-kit facts are explicitly tied to inspected first-party surfaces. Causal readings such as purple as deliberate category refusal and flatness as rejection of decorative chrome are editorial; their portable derivatives carry adjacent B2a.

The legacy source explicitly labels all named personas fictional archetypes. Rulebook D2 prohibits copying their names or biographies into portable or provenance. Only the source-backed professional groups remain.

## Proof notes

- All eight YAML component primitives remain represented; the `badge` primitive is preserved even though the explicit select-control role supports interactive applicability.
- The legacy §14 table remains portable as derived guidance, not measured state proof.
- Every verified copy string measured in the sibling proof file is carried verbatim in both outputs: the raw proof samples above name the string each measurement was taken on, and portable Content & Locales lists the same strings.
- Portable derived-editorial scope includes Scope surface/source/evidence/narrative judgments, visual characterization, tasks, audience grouping and biography-retention disposition, distinctive selection, principles/avoidances, semantic-role/source-reconciliation judgments, component-padding placement, shape/elevation/motion boundaries, family/asset authority, the four type-hierarchy readings, every component kind/applicability judgment, state recipes, layout/responsive boundary, content direction, and governance.
- Each carries complete adjacent wording: derived editorial implementation inference; not Datadog-authored or a separately published UI specification.

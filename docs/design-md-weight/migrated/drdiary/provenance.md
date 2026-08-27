# Dr.diary provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, evidence grading and omission record for the T2 migration. Canonical source remains `web/references/drdiary/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | drdiary |
| name | Dr.diary |
| display_name_kr | 닥터다이어리 |
| country | KR |
| category | healthcare |
| homepage | https://drdiary.co.kr/ |
| primary_color | `#3eaeff` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=drdiary.co.kr&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

Token note from source: `primary = sky-blue gradient anchor (#3eaeff); brand identity is a tri-stop sweep #3eaeff→#ff5a8c→#dc6eff (+#00c8fa cyan tail). Headings ink-navy (#232f4d); body pure black (#000000) on white. Flat, shadow-free.`

The `logo` record is a Google favicon proxy lookup URL, not a Dr.diary-owned asset file. The sibling verification notes exclude that proxy from the brand-owned source requirement, so it is kept here as identity metadata and is not promoted to a logo asset in the portable body.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-02 |
| added | 2026-07-02 |
| tokens.extracted | 2026-07-02 |
| surfaces inspected | 2026-07-02 |

Conflicts unresolved: none. The source records that no Tier 2 record exists for Dr.diary, so Tier 1 live inspection is the sole authoritative source — the expected KR under-coverage pattern.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| homepage | corporate/product brand surface | https://drdiary.co.kr/ | 2026-07-02 |
| careers | official careers/recruiting site (brand-owned subdomain, Notion-hosted) | https://careers.drdiary.co.kr/9acdc4b5-ea9b-484c-8fcb-baf528c25a26 | 2026-07-02 |

### Tier 1

- https://drdiary.co.kr/ — live computed style; source of every color, type, elevation and component value in the portable body
- https://careers.drdiary.co.kr/9acdc4b5-ea9b-484c-8fcb-baf528c25a26 — live computed style; source of the pill radius corroboration and one voice sample

### Tier 2 (no usable record)

- getdesign.md/drdiary — renders "No designs found"
- styles.refero.design/?q=drdiary — no brand match; generic trending results only

### Method

playwright `getComputedStyle` on the live DOM (chromium, headless, viewport 1440×900), `waitUntil: domcontentloaded`, cookie/modal dismiss pass, then computed style on body, h1/h2/h3, nav links, buttons and cards, plus a full-DOM background/text color and gradient frequency scan across the two brand-owned surfaces. Recorded in `web/references/drdiary/.verification.md`.

## Claim ledger

Every value in the portable body traces to the homepage unless the row says otherwise.

| Claim | Surface | Evidence |
|---|---|---|
| colors.primary `#3eaeff` | homepage | text-color frequency scan `rgb(62,174,255)` ×10; gradient-bar leading stop |
| colors.ink `#232f4d` | homepage | hero H2 and section H2 `rgb(35,47,77)`; frequency ×34 |
| colors.ink-pure `#000000` | homepage | body `rgb(0,0,0)`; frequency ×247 |
| colors.slate `#4f5971` | homepage | nav links `rgb(79,89,113)`; frequency ×58 |
| colors.muted `#9197a6` | homepage | frequency ×21 |
| colors.faint `#bdc1ca` | homepage | "전체보기" more link `rgb(189,193,202)`; frequency ×1 |
| colors.accent-pink `#ff5a8c` / accent-purple `#dc6eff` / accent-cyan `#00c8fa` | homepage | `.headline2.text-gradient` = `linear-gradient(270deg, rgb(255,90,140) 60%, rgb(220,110,255) 75%, rgb(0,200,250) 100%)` |
| colors.accent-violet `#4970f5` | homepage | text-color frequency scan `rgb(73,112,245)` ×3 |
| colors.canvas `#ffffff` / on-primary `#ffffff` | homepage | body background `rgb(255,255,255)`; frequency ×24 |
| colors.surface `#f5f8fb` | homepage | tinted value section `rgb(245,248,251)` |
| colors.hairline `#dee0e4` | homepage | press card `1px solid rgb(222,224,228)` |
| brand gradient bar | homepage | `linear-gradient(to right, rgb(62,174,255), rgb(255,90,140), rgb(220,110,255))` |
| typography.family.sans Pretendard | homepage | body `font-family: pretendard, "pretendard Fallback"` |
| typography.heading 40px / 600 / 1.4 | homepage | hero H2 "데이터로 선도하는 초개인화 만성질환 케어" and section H2 "닥터다이어리가 지향하는 가치" |
| typography.card-title 18px / 500 / 1.4 | homepage | press card title H3 |
| typography.nav 20px / 400 / 1.2 | homepage | nav link computed style |
| typography.body 16px / 400 / 1.5 | homepage | body `font-size: 16px; line-height: 24px` |
| typography.button 18px / 500 / 1.2 | homepage | app-store CTA `font: 18px / 500` |
| typography.more-link 20px / 600 / 1.2 | homepage | "전체보기" more link |
| components.news-card | homepage | `background: rgb(255,255,255)`, `border: 1px solid rgb(222,224,228)`, `border-radius: 16px`, `box-shadow: none`, height 373px |
| components.value-card | homepage | tinted value section surface `#f5f8fb`, 16px radius |
| components.store-cta | homepage | transparent background, `#ffffff` text and border, `border-radius: 8px`, `padding: 12px 16px`, height 54px |
| components.nav-link | homepage | `#4f5971`, 20px / 400, `padding: 12px 8px`, height 48px |
| components.gradient-pill | homepage | gradient emphasis text, `#ff5a8c`, full radius |
| rounded.pill 100px | careers | careers nav pill `border-radius: 100px` |
| shadow.none | homepage | `box-shadow: none` across nav, headings, value cards and press cards |
| page title / positioning meta | homepage | `document.title` = "닥터다이어리 | Healthcare & Lifestyle Tech Company" |
| careers voice sample | careers | "건강 관리가 평생 숙제가 아닌, 쉽고 재밌는 과정" |

## Evidence-domain boundaries

- The careers site is hosted on Notion, so its base text color (`rgb(55,53,47)`) and generic `sans-serif` stack are the host platform's defaults, not Dr.diary brand tokens. The sibling verification notes state this explicitly. Only the pill geometry, the 16px card radius corroboration and the voice sample are taken from that surface; no color or family token is.
- Values recorded only in the sibling verification file and never carried into the portable body: the scroll-track grey `rgb(211,213,219)`, the careers Notion text color `rgb(55,53,47)`, the careers coral accent `rgb(255,141,141)`, the value/stat gradient `linear-gradient(270deg, rgb(220,110,255) 0%, rgb(255,90,140) 100%)`, and element heights measured only there (section heading 112px, tinted band 642px, careers pill 40px, careers H1 54px, careers quote card 224px, more-link 32px, press card title sample "글루어트, 美 올리브영 입점…"). They stay in this ledger; the portable body carries no value the legacy `DESIGN.md` did not already establish.
- The company narrative in the source (consumer app, CGM, B2B corporate-health services, 보건소 pilots, 서울대병원 collaboration, employee-health programs, 글루어트/Gluart retail expansion) is graded by the source itself as general public knowledge drawn from homepage positioning and homepage press items, not as a quoted Dr.diary statement. It is scope context and never interface evidence.
- Nothing in either domain licenses a clinical, efficacy or safety statement. The source makes none and neither does the portable body.

## Omission and deletion ledger

| Item | Disposition |
|---|---|
| §15 easing curves for `ease-enter`, `ease-exit`, `ease-standard` | Deleted. No evidence is recorded for any of the three curve values; the live inspection captured no motion. One of the three — `ease-exit` — is byte-identical to the non-brand example curve in `spec/omd-v0.1.md`, which that spec now marks as an implementation default that must not move into a reference or into Core Foundations. The token names survive in Foundations and in Named gaps; naming which token matched is a token name, not a value. The three curve values are not re-hosted anywhere in the migrated output — they remain only in the canonical source `web/references/drdiary/DESIGN.md` — so this ledger does not become a re-injection path. |
| §13 personas (three fictional archetypes with names, ages, cities and biographies) | Deleted. The source labels them fictional archetypes with illustrative names. They are not promoted to verified tasks and are not re-hosted in this sidecar in any form, including the demographic segments used to frame them. |
| §9 Agent Prompt Guide — quick color reference, example component prompts, iteration guide | Deleted as tool-facing prompt packaging. The gradient stop percentages that existed only inside those example prompts (`linear-gradient(270deg, #ff5a8c 60%, #dc6eff 75%, #00c8fa 100%)` and `linear-gradient(to right, #3eaeff, #ff5a8c, #dc6eff)`) were moved into Foundations rather than dropped with the wrapper; both are corroborated by the sibling verification file's computed-style record. |
| Source `[FILL IN]` placeholders | None exist in the source; none is emitted. |

## Derived-inference register

The portable body carries its own adjacent label at every one of these places — the phrase "derived editorial implementation inference" appears seventeen times in the body. This register is the full list of those seventeen, kept here so the boundary is auditable, not so the label can be dropped from the body.

| Portable location | What is derived |
|---|---|
| Experience → Scope, closing paragraph | Reading the flat, gradient-warmed interface as an argument about approachability |
| Experience → Audience, opening line | Restricting Audience to group level and reading the two groups off the positioning and the general-knowledge narrative |
| Experience → Distinctive traits, opening line | The role names attached to the observed values (anchor/trust accent, signature, container workhorse) |
| Experience → Principles | All five principles and their UI implications |
| Experience → Avoid | All seven prohibitions |
| Foundations → Semantic color, opening line | The role assignment attached to each observed hex |
| Foundations → Semantic color, gradient paragraph | Restating the observed gradient placement as a keep-it-off-paragraph-fills rule |
| Foundations → Spacing and Shape, closing line | Calling 16px the container workhorse and the 40px step the vertical-rhythm anchor |
| Foundations → Elevation, closing paragraph | Reading the `box-shadow: none` record and the hero scrim as an elevation model |
| Foundations → Motion | The three duration values, the motion rules and the reduced-motion behavior |
| Typography & Assets → Type rules | Reading the observed metrics as intent (weight as hierarchy lever, two-tone, hangul legibility) |
| Components & States → Evidence record | Every per-component state applicability judgment and its reason |
| Components & States → Declared state contract | All nine state rows, including app-surface states such as glucose logging that lie outside the two inspected surfaces |
| Layout & Platforms → Whitespace paragraph | Naming the observed separation devices a whitespace philosophy |
| Layout & Platforms → closing paragraph | The breakpoint table and the collapsing strategy |
| Content & Locales → opening paragraph | The decoding/addressing reading, the warm/clear/empowering characterization and the register split |
| Content & Locales → closing paragraph | The error/empty copy rules and the forbidden register |

The four voice samples are the counterpart to this register: they are brand-published strings quoted verbatim, and the body says so at that spot.

The source's own closing note grades its interpretive claims the same way: editorial readings connecting the observed design to the company's positioning, not sourced Dr.diary statements.

## Proof notes

- Source verified 2026-07-02 by `omd:add-reference` CREATE, Tier 1 live inspect.
- Tier 1 sources: https://drdiary.co.kr/ and https://careers.drdiary.co.kr/9acdc4b5-ea9b-484c-8fcb-baf528c25a26
- Tier 2 sources attempted: getdesign.md/drdiary ("No designs found"); styles.refero.design/?q=drdiary (no brand match).
- Conflicts unresolved: none.
- Interaction expansion: the live inspection recorded default renderings only. Hover, focus and pressed treatments are unresolved; applicability follows control meaning and the visual values are omitted. State coverage is not claimed complete.
- KR brand-owned regional source requirement: satisfied by the two brand-owned domains above. The favicon proxy is explicitly not counted.

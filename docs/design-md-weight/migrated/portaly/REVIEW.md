# portaly — T2-1 wave-27-form independent review (A/C/D only)

Rulebook v12. F3 (B2a·E2) not judged except item 6 (F2 list freshness after F3). Files confirmed with `find` before grep: migrated `{DESIGN.md,provenance.md,migration-log.md,audit-log.md}`, source `web/references/portaly/DESIGN.md`, sibling `web/references/portaly/.verification.md` (direct path; dotfile). Counts: `grep -oF -- <pat> <file>` occurrence counts (Python driver, same as `grep -o | wc -l`), never `grep -c`. Empty grep stdout = dest 0 (not zsh `no matches found`). Absence claims in this file are about those six paths, not about this review (E2d).

Portable DESIGN SHA-256 `b6b4257591938ed0160bd7d346cff4546ebac377951079bd178654a31e45520e`; provenance `be0eb887949e8fbf2d3806338e0eb41125533131ba9e33ae7d49232c8f42bc48`; source `75f2cab11c6004819f5eb973d7a19010316b9c1571b143a1d97b675f77e04726` (matches migration-log); sibling `084355ef4a85e824f855cc52bf6065827c4d7533368984c36e1bbf56d2799884`. Lines: DESIGN 603 / provenance 198 / source 441 / sibling 68. `split()` portable DESIGN 9,004 (log deviation).

`node scripts/check-yaml-use-landing.mjs portaly` → use 16/16 OK. `node scripts/check-limiter-ledger.mjs portaly` → 본문 43 / 원장 43 (139–181) 1:1 OK (ledger check only; B2a quality is F3).

## Verdict

**PASS**

No A/C/D value-series defect on the current three artifacts. YAML `tokens.*` keys sit on their own paths. YAML `use` 16/16. Destination-class controls close loading and error together. Persona identifiers and §13 motivations are dest 0 on DESIGN/provenance/log. Sibling-only computed px stay out of the portable body.

## 1 A1 key paths (YAML `tokens.*` → portable DESIGN)

Source YAML is nested (dotted path SRC 0 by construction). Portable DESIGN names each path; values sit on that path, not on another scale's shared numeral (easywallet trap).

| path | DES | value on that path |
|---|---:|---|
| tokens.colors.primary / teal / teal-alt / teal-soft | 7 / 8* / 3 / 2 | `#862983` / `#00a6a3` / `#12a3a0` / `#38aaaa` (*`.teal` substring includes `-alt`/`-soft`) |
| tokens.colors.purple-hero / purple-hero-light / swoosh-magenta | 4 / 2 / 2 | `#6e28af` / `#ac8ffe` / `#bb53b9` |
| tokens.colors.navy / navy-deep / ink / ink-pure | 6* / 2 / 4 / 2 | `#0c2340` / `#1a2a3a` / `#333333` / `#000000` (*`.navy` substring includes `-deep`) |
| tokens.colors.muted / canvas / surface / surface-alt / hairline / on-primary | 1 / 2 / 7 / 2 / 2 / 5 | `#969696` / `#f8f8f8` / `#ffffff` / `#f2f2f2` / `#d9d9d9` / `#ffffff` |
| tokens.typography.family.sans / cjk | 2 / 2 | `Noto Sans` / `Noto Sans TC` |
| tokens.typography.display-hero … body (7 roles) | 1 each (`feature` 3 incl. `feature-xl`) | unitless sizes 50/50/36/24/20/18/16; lineHeight 1.38 / 1.50 / 1.33 |
| `tokens.spacing.xs: 4` … `tokens.spacing.section: 64` | 2/1/4/4/4/3/3/2 | unitless 4/8/12/16/20/24/40/64 |
| `tokens.rounded.sm: 6` / `md: 12` / `lg: 20` / `full: 9999` | 3 / 3 / 5 / 4 | unitless 6/12/20/9999 |
| tokens.shadow.card / block | 4 / 5 | two box-shadow strings dest ≥2 with `0px` suffix |
| tokens.components.button-primary … feature-check (9 records) | ≥1 each | each record is its own block |

Hexes on those paths (DESIGN): `#862983` 25, `#00a6a3` 14, `#12a3a0` 9, `#38aaaa` 4, `#6e28af` 9, `#ac8ffe` 9, `#bb53b9` 8, `#0c2340` 8, `#1a2a3a` 3, `#333333` 6, `#000000` 4, `#969696` 4, `#f8f8f8` 11, `#ffffff` 16, `#f2f2f2` 3, `#d9d9d9` 7. `FILL IN` DES 0.

A1a: YAML line heights stay ratios — `1.38` DES 1, `1.50` DES 6, `1.33` DES 1 — not rewritten as replacement px. Parenthetical rem/computed px (`3.13rem` DES 2, `2.25rem` 1, `1.50rem` 1, `1.25rem` 1, `1.13rem` 1, `1.00rem` 1, `68.75px` 1, `75px` 2, `54px` 1) sit beside. Lede keeps YAML weight `400` beside §3 `400-500` (DES 2). Display-hero tracking `1 / 1px` keep-both.

A1b: `Primitive type: \`button\`` DES 4, `tab` 1, `card` 2, `toggle` 1, `badge` 1 (= YAML `type` 4/1/2/1/1). Join Now header pill has no primitive type (`:271`).

A1c: `live-extract` (not as prefix of `live-extracted`) DES 4 / PRO 9; `live-extracted` DES 3 / PRO 1 (different word, named). `components_harvested` DES 0 / PRO 4 (sidecar). `ds.type` SRC 0 / PRO 2 (absence recorded, not filled). Favicon slug `google.com/s2/favicons` DES 0 / PRO 1. `type \`favicon\`` DES 1.

Same-number unmerge in body (`DESIGN.md` `:134` / `:147`): `tokens.spacing.md: 12` ≠ `tokens.rounded.md: 12`; `tokens.spacing.base: 16` ≠ body 16 ≠ rounded creator-link 16px; `tokens.spacing.lg: 20` ≠ `tokens.rounded.lg: 20`; `tokens.spacing.xl: 24` ≠ feature-head 24; `tokens.spacing.xxl: 40` ≠ large-CTA padding half; `tokens.rounded.full: 9999` ≠ pricing Join Now `6px`. `tokens.colors.surface` `#ffffff` unmerged from `on-primary` `#ffffff`. Teal `#00a6a3` unmerged from teal-alt `#12a3a0` / teal-soft `#38aaaa`. Navy unmerged from navy-deep / ink-pure.

Component fields dest: `4px 16px` DES 4 / SRC 5; `24px 40px` 4/3; `14px 70px` 2/3; `8px 16px` 3/3; `1px solid #862983` 1/2; `2px solid #ffffff` 1/1; `16px / 600 Noto Sans` 4/3; `18px / 600 Noto Sans` 2/2; `28px / 600 Noto Sans` 1/1; `16px / 400 Noto Sans` 1/1; `Height: 32px` 2/2; `Height: 52px` 1/1; `Height: 24px` 1/1; `Radius: 6px` 3/3; `Radius: 12px` 1/1; `Radius: 20px` 1/1; `Radius: 9999px` 2/2. YAML `nav-link.active` lands as `magenta \`#862983\` text on the active item` DES 1 (source §4 backtick form; YAML unwrapped hex dest 0 by markdown wrap, not a missing key). `hover deepens plum` DES 7 / SRC 1, kept on `button-primary` only.

Shadows dest: `rgba(99,99,99,0.2) 0px 2px 8px 0px` DES 2 / SRC 4; shorter `rgba(99,99,99,0.2) 0px 2px 8px` DES 5 / SRC 9. `rgba(0,0,0,0.05) 0px 1px 2px 0px` DES 2 / SRC 3.

YAML `use` 7 type + 9 component = 16/16 DES ≥1 (script + hand).

## 2 Unique facts

`傳送門` SRC 3 / DES 2. `2022` 2/1. `CW Lin` 2/1. `林啟維` 4/3. `Real Engine` 3/2. `真實引擎` 2/1. `200,000+` 1/2. `Product Hunt` 2/3. `#2 Product of the Day` 2/1. `Neo 30` 2/2. `500 Global` 2/2. `alumnus` 1/2 (sibling `alumni` DES 0). `60+` 1/1. `social landing page` 1/1. `English-first` 1/2. `Taiwanese creator market` 1/1. `geo-redirects` 1/1. `Portaly 徵才 全端工程師` 1/2. `Your All-in-One Platform for Growth and Profit` 3/3. `Join 200,000 creators worldwide to turn passion into profit` 2/3. `Growth & monetization plans built for creators` 2/3. `From basic presence to steady monetization — choose the plan that fits you` 1/1. `Turn Traffic into Revenue` 2/4. `Grow Your Fanbase` 1/1. `Monetize Your Content` 1/1. `Permanently Free to Use` 2/2. `with the first 14 days free` 1/1. `Save 14% monthly` 1/1. `Start for free` 3/3. `Start for Free` 3/4. `Start Free` 6/9. `Join Now` 9/21. `Portaly AI` 2/3. `Features, Pricing, Portaly AI, Blog` 2/3. `a page, not a link list` 1/1. `one action, one plum` 1/1. `hangul-free CJK` 1/1. `Near-flat tracking` 1/1. `~4px` 1/2. `~540px` 1/3. `~538px` 1/3. `32px+` 1/1. `44px+` 1/2. `<640px` / `640-1024px` / `1024-1440px` dest 1 each. `16px–20px` 1/1. `Small (6px)` / `Medium (12px)` / `Full (9999px)` dest 1 each. `two-up` 5/6. `Free / Premium` 1/2. `Noto Sans ExtraBold` 1/1. `Noto Sans SemiBold` 1/1. `Noto Color Emoji` 2/4. `'Noto Sans, Noto Sans TC, sans-serif'` 1/2.

Sibling-named published copy (A5a, not in source body): `Drive Social Media Traffic` SRC 0 / SIB 1 / DES 4; `OpenClaw 安裝手冊` 0/1/2; `經理人專欄` 0/1/2; Product Hunt date `2023-06-05` SRC 0 / SIB 1 / DES 1 (attributed as sibling capture in Scope).

`Letter Spacing` SRC 1 / DES 0 is the §3 column header; Core table uses Tracking and keeps `1px` (DES 8). `3 brand-owned` SRC 1 / DES 0 / PRO 1 is footer producer metadata (E1). LinkedIn / Crunchbase / Yourator / `chi-wei-lin` / getdesign.md / refero DES 0 / PRO 1 each.

## 3 Constraints / motion

§7 Do 8 and Don't 8 kept (`DESIGN.md` `:58–65`, `:71–78`). §12 five principles with UI implications `:48–52`. §5 whitespace `Airy and optimistic` / `Color band cadence` / `Soft segmentation` dest 1 each. §8 collapsing `weight 800 maintained` dest 1; `Phone-mockup` dest 2. §14 nine-row contract dest 1 each including `Encouraging, never blank-scary` / `Honest and calm` / `No celebratory emoji spam` / `not just "required"` / `plum actions fade`. Durations `120ms` / `200ms` / `320ms` dest 1 each. Easing names kept (`ease-enter` DES 3, `ease-exit` 3, `ease-standard` 2) with uses. Signature motions `fade-from-below` dest 1; `never bouncy chaos` dest 2; `light delight` dest 2. `prefers-reduced-motion: reduce` dest 1. Exact curves named then omitted at the value boundary: `cubic-bezier(0.2, 0.6, 0.25, 1)` / `cubic-bezier(0.4, 0.0, 1, 1)` / `cubic-bezier(0.25, 0.1, 0.25, 1)` SRC 1 / DES 1 / PRO 1 each (named in the omit sentence, not as promoted tokens). B3 five-kind gate at `:184`: `transition properties, animation name, duration, easing, and reduced-motion behavior` DES 2; `Official documentation of a single curve or duration is not that gate` DES 1. §9-only transparent hero-ghost bg DES 1 at `:360`; white 20px / 400 hero subhead at `:231`; header pill 9999px keep-apart at `:147` / `:394`.

## 4 Ungrounded surface

Scope names the four source inspect URLs only: `https://portaly.cc/` (exact, not as prefix of a longer path) DES 2 / PRO 4; `/en/pricing` DES 1 / PRO 2; `/en/blog` DES 1 / PRO 2; `/cwl` DES 2 / PRO 2. Purple hero `#6e28af → #ac8ffe` stays on the homepage hero band (`:99` / `:117` / `:368`). Feature XL `Turn Traffic into Revenue` stays on the magenta→teal stat strip, not the purple hero (`:231`). Pricing Join Now `6px` / `32px` / `4px 16px` stays off the 9999px header pill (`:290` / `:394`). Creator link-block stays on `https://portaly.cc/cwl` (`:433`). Billing switch Surface: pricing (`:458`). Navy Deep stays on creator-page / deeper structural surfaces as the source wrote (`:104`), not copied onto `tokens.colors.navy`. `1024-1440px` stays the Desktop band (`:516`), not a page-canvas size. `mobile app` / `native application` / `native-client` / `back-office` / `product application` / `storefront` / `authenticated` / `parity` / `iOS` / `Android` / `fin.ai` all SRC 0 / DES 0 / PRO 0 / LOG 0. Named gaps `:597–603` lists omitted hover hex, unattributed cubics, missing hero-ghost height, and C4 omit — not new product domains. `Pointer-web` DES 8 is hover-reason prose, not a new product surface. `dashboard packing` is source whitespace wording.

## 5 Conflict policy

Same-hex / same-number roles unmerged throughout. YAML vs §3 lede weight: keep-both (`400` and `400-500`). YAML tracking `1` beside §3 `1px`. YAML type-role `use` vs §3 Notes: keep-both where they differ (display-hero, feature-xl, lede, nav). YAML component `use` vs §4: keep-both (button-primary, button-primary-lg, button-secondary, nav-link, link-block, toggle, feature-check); plan-card YAML `use` in Use, §4 `sitting on` in Role. Plan-card width `~538px` beside `~540px` (both source writings). Unattributed `cubic-bezier` three values all omitted from the curve column (names/uses/durations kept). One policy vs sibling: YAML/source-body token set in DESIGN; sibling-only computed px (`14px 63px 14px 70px`, `603px`, `46px`, `12px 48px 12px 96px`, `84px`) PRO 1 / DES 0 each. Sibling `alumni` not substituted for source `alumnus`.

## 6 F2 list after F3

F3 restored YAML `link-block` radius/padding/font rows (`:425–427`), added Elevation keep-apart B2a at `:160`, aligned provenance 43=43, and rewrote dest lines on the log. Current files match those dests (spot-check, all OK):

- `derived editorial implementation inference` DES 43 = `not Portaly-authored` DES 43.
- `#862983` DES 25 / PRO 12.
- `live-extract` (not `live-extracted`) DES 4 at 9(×2)/184/195 / PRO 9.
- exact homepage `https://portaly.cc/` DES 2 / PRO 4.
- `tokens.rounded.lg: 20` DES 5; `tokens.spacing.lg: 20` DES 4; `tokens.rounded.full: 9999` DES 4.
- `Drive Social Media Traffic` DES 4; `OpenClaw 安裝手冊` DES 2; `經理人專欄` DES 2; `2023-06-05` DES 1.
- `林啟維` DES 3; `Join Now` DES 21; `Start Free` DES 9; `Start for Free` DES 4; `Start for free` DES 3.
- `Primitive type: \`toggle\`` DES 1 at 452; `Primitive type: \`badge\`` DES 1 at 476; `Kind: non-interactive` DES 1 at 475.
- C2 L/E/S `commits no operation in place` at 298–300 / 324–326 / 351–353 / 378–380 / 402–404 / 444–446 / 468–470.
- B3 five-kind sentence DES 2 at 184/603; Official-documentation sentence DES 1 at 184.
- `components_harvested` DES 0 / PRO 4. `google.com/s2/favicons` DES 0 / PRO 1.
- `fade-from-below` DES 1; `prefers-reduced-motion: reduce` DES 1; `44px+` DES 2; `Phone-mockup` DES 2.

No stale pre-F3 dest left as a current claim.

## 7 Deleted persona derivatives (D2 / D2a)

Source §13 three fictional archetypes. Portable Audience uses only the source header grouping. Primary tasks name YAML `use` strings, not persona goals. This review mentions the needles; absence is claimed of DESIGN/provenance/log/audit, not of this file.

| needle | SRC | DES | PRO | LOG | AUD |
|---|---:|---:|---:|---:|---:|
| 陳郁婷 / 黃彥儒 / 林思妤 | 1 each | 0 | 0 | 0 | 0 |
| 台北 / 台中 / 高雄 | 1 each | 0 | 0 | 0 | 0 |
| illustrator / commissions / digital goods / shopfront | 1 each | 0 | 0 | 0 | 0 |
| fitness coach / paid programs / campaign landing | 1 each | 0 | 0 | 0 | 0 |
| small-shop owner / genuinely usable / low-risk | 1 each | 0 | 0 | 0 | 0 |
| feels like / not a generic list / matches her brand / plain pricing copy | 1 each | 0 | 0 | 0 | 0 |
| Traditional-Chinese visual creators | 2 | 1 | 0 | 2 | 0 |
| course/product sellers | 2 | 1 | 0 | 2 | 0 |
| visual creators and small Traditional-Chinese-speaking businesses | 1 | 2 | 0 | 2 | 0 |
| fictional archetypes | 2 | 1 | 2 | 1 | 0 |

Group labels are source §13 header (and §1/§10/§11) wording, not biographies. `with the first 14 days free` dest 1 is §10 pricing copy, not 黃彥儒. No gitlab-style motivation sentence in Primary tasks. Provenance deletion row is `§13 페르소나 3인 (이름·나이·도시 포함)` without re-listing them (D2a).

## 8 C2

Seven interactive controls close loading, error, and success together with an in-place-commit reason. No control opens loading while closing error.

| loading | not-applicable | DES 7. | error | not-applicable | DES 7. | success | not-applicable | DES 7. | loading | applicable | DES 0. `commits no operation in place` DES 21. `not captured` DES 0. `Interactive control` DES 0. `Button control` DES 0.

Join Now / Primary Large / Secondary / Hero Ghost: destination CTAs, all three closed (`:298–300` / `:324–326` / `:351–353` / `:378–380`). Nav Link: `Destination tab` DES 3, closed (`:402–404`). Creator Link Block: `Destination link row` DES 3, closed (`:444–446`); page/builder skeleton stays on the §14 capture record. Billing Switch: toggle, closed on both sides (`:468–470`). Pricing Plan Card omits kind and map (C4) at `:417`. Feature Check is `Kind: non-interactive` DES 1 at `:475` with no map.

## 9 Sibling fusion

`14px radius with 16px padding` SRC 0 / SIB 0 / DES 0 / PRO 0 / LOG 0. `measures 1440px` SRC 0 / SIB 0 / DES 0 / PRO 0 / LOG 1 (log denial). `radius with` all 0. Sibling-only extras stay out of portable DESIGN: `14px 63px 14px 70px` 0/1/0/1/1, `603px` 0/1/0/1/1, `46px` 0/1/0/1/1, `12px 48px 12px 96px` 0/1/0/1/1, `84px` 0/1/0/1/1, `1440×900` 0/1/0/0/0, `430×932` 0/1/0/0/0, `css-1wzdxh2` 0/1/0/0/1, template-thumbnail `rgb(238, 147, 62)` 0/1/0/0/0, frequency `×607` / `×954` / `×372` DES 0. Filled link-block YAML padding `8px 16px` is not copied onto the rounded 16px variant (variant bullet is radius only at `:429`). `~538px / ~540px` is keep-both of two source width writings, not a fused geometry.

`live H2` SRC 0 / SIB 0 / DES 1 at `:223`; `section H2` SRC 0 / SIB 1 / DES 2 at `:231` / `:557`; `feature H3` SIB 2 / DES 0; `hero H1` SIB 1 / DES 0. The published string `Drive Social Media Traffic` is dual-hosted (A5a). The heading-level tag is sibling capture metadata written as a type-role annotation — F3 already recorded this as B1 out of F3 scope (`audit-log.md` 범위 밖 관찰). It is not a fused numeric measurement of the gitlab `14px radius with 16px padding` / gaudiy `measures 1440px` form (those two strings dest 0). Not counted as an A/C/D value-series FAIL.

## 10 Surface transfer

`#6e28af → #ac8ffe` / white 50px ExtraBold / Hero Ghost `14px 70px` stay homepage purple hero (`:231` / `:368`). `#862983` 6px Join Now stays pricing filled CTA, off the 9999px nav pill. Plan-card `12px` / `rgba(99,99,99,0.2)` / `~538px` stay pricing. Link-block 6px / 16px variants and the two sibling labels stay `/cwl`. Feature XL 50px / 700 stays the homepage stat strip, not the purple hero. `44px+` stays the §8 touch-target writing, not a YAML height on `link-block`. Sibling homepage `#1a2a3a` ×15 frequency is not moved onto a pricing token; Navy Deep keeps the source's creator-page / deeper-structural wording.

## 11 YAML use ↔ § table use

Longer §3 / §4 writings kept beside YAML `use`. No kakaot-style cut to a shorter record that drops a unique use term. `node scripts/check-yaml-use-landing.mjs portaly` → 16/16.

| record | SRC | DES |
|---|---:|---:|
| Hero headline, Noto Sans ExtraBold | 1 | 1 |
| Hero headline, ExtraBold | 1 | 1 |
| Large feature statement (Turn Traffic into Revenue) | 1 | 1 |
| Section titles | 1 | 1 |
| Feature card heads | 1 | 1 |
| Hero subhead / lede | 1 | 1 |
| Hero subhead, intro text | 1 | 1 |
| Nav links, Noto Sans SemiBold | 1 | 1 |
| Top navigation items | 1 | 1 |
| Standard reading text | 1 | 1 |
| Primary CTA on pricing (Join Now), hover deepens plum | 1 | 2 |
| Primary CTA on pricing/nav — the system's single filled action | 1 | 2 |
| Large primary CTA (Start Free) | 1 | 2 |
| Large primary CTA in plan cards / section ends | 1 | 2 |
| Secondary CTA (Start for Free), magenta outline | 1 | 2 |
| White outline pill CTA over the purple hero gradient | 2 | 3 |
| Top nav item (Features, Pricing, Portaly AI, Blog) | 1 | 2 |
| Top horizontal nav | 1 | 1 |
| Pricing plan card on #f8f8f8 canvas, no border | 1 | 1 |
| Pricing plan card sitting on | 1 | 1 |
| Creator-page link block (filled 6px / rounded 16px variants); accent color is creator-chosen | 1 | 2 |
| The core product component — a full-width tappable link row on a creator's page (filled 6px and rounded 16px variants; accent color is creator-chosen) | 1 | 1 |
| Annual/Monthly billing switch | 1 | 2 |
| Billing-period switch | 1 | 2 |
| Teal checkmark in plan feature lists | 1 | 1 |
| Teal checkmark glyph preceding each plan feature line | 1 | 2 |

`ETA sublabels` SRC 0 / DES 0 (not a Portaly term).

## Notes (not FAIL)

- `Anatomy: label` SRC 0 / SIB 0 / DES 1 on Primary (Join Now) only. F3 recorded it as A1 extra, not a YAML-field loss. No source anatomy was replaced.
- `live H2` / `section H2` as above — B1 sibling heading-level classification; published copy still dual-hosted; YAML `Section titles` not cut.
- Combined YAML active string `magenta #862983 text on the active item` DES 0; §4 backtick form `magenta \`#862983\` text on the active item` DES 1. Unique words `text on the active item` DES 1.
- Template cubic-bezier values omitted to the curve-value boundary (T2 keep-role); duration tokens, easing roles, reduced-motion, and motion rules stay. The three exact strings remain as named-omitted in Motion `:176–178` and in provenance Omission ledger.
- `components_harvested` DES 0 is A1c sidecar (PRO 4).
- Word budget 9,004 recorded in the log as a deviation.

Absence claims above are about DESIGN/provenance/source/sibling/log/audit, not this review (E2d). Post-write re-grep (REV is this file): `14px radius with 16px padding` REV 3 / DES 0 · `measures 1440px` REV 3 / DES 0 / LOG 1 · `radius with` REV 5 / DES 0 · `陳郁婷`/`林思妤`/`台北`/`台中`/`高雄` REV 2 / DES 0 · `黃彥儒` REV 3 / DES 0 · `illustrator`/`commissions`/`digital goods`/`shopfront`/`fitness coach`/`paid programs`/`campaign landing`/`small-shop owner`/`genuinely usable`/`low-risk`/`feels like`/`not a generic list`/`matches her brand`/`plain pricing copy` REV 2 / DES 0 · `native-client`/`native application`/`mobile app`/`product application`/`storefront`/`back-office`/`authenticated`/`parity`/`iOS`/`Android`/`fin.ai` REV 2 / DES 0 · `FILL IN` REV 2 / DES 0 / PRO 2 · `not captured` REV 2 / DES 0 / PRO 1 · `Interactive control` REV 2 / DES 0 / LOG 1 · `Button control` REV 2 / DES 0 · `google.com/s2/favicons` REV 3 / DES 0 / PRO 1 · `components_harvested` REV 4 / DES 0 / PRO 4 · `14px 63px 14px 70px`/`603px`/`46px`/`12px 48px 12px 96px`/`84px` REV 3 / DES 0 / SIB 1 / PRO 1 · `1440×900`/`430×932`/`css-1wzdxh2`/`rgb(238, 147, 62)`/`×607` REV 2 / DES 0 / SIB 1 · `alumni` REV 3 / DES 0 / SIB 1 · `ETA sublabels` REV 2 / DES 0 · `| loading | applicable |` REV 2 / DES 0 · `magenta #862983 text on the active item` REV 2 / DES 0 / SRC 1 · `Letter Spacing` REV 2 / DES 0 / SRC 1 · `3 brand-owned` REV 2 / DES 0 / PRO 1 · `feature H3` REV 2 / DES 0 / SIB 2 / AUD 1 · `hero H1` REV 2 / DES 0 / SIB 1 / AUD 1. `live H2` REV 3 / DES 1 / AUD 1 (Notes, not FAIL). `Anatomy: label` REV 2 / DES 1 / AUD 1 (Notes, not FAIL).

REVIEW_DONE portaly PASS

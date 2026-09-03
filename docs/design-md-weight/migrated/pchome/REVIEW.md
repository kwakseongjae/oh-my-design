# pchome — T2-1 wave-27-form independent review (A/C/D only)

Rulebook v12. F3 (B2a·E2) not judged except item 6 (F2 list freshness after F3). Files confirmed with `find` before grep: migrated `{DESIGN.md,provenance.md,migration-log.md,audit-log.md}`, source `web/references/pchome/DESIGN.md`, sibling `web/references/pchome/.verification.md` (direct path; dotfile). Counts: `grep -oF -- <pat> <file> | wc -l` in bash `set +e`. Empty pipeline = dest 0 (not zsh `no matches found`). `grep -c` not used. Absence claims in this file are about those six paths, not about this review (E2d).

Portable DESIGN SHA-256 `7c253f36775ae38f28a12cc164242e15544ecc58fbf89add9d2e15e1dd5d77d4` (matches F3 destination SHA); provenance `063b5ac411be5d8429ab04c772e927002f1cb256593166bc6d1c2ff543a8a308`; source `6e16f6b762e2ed0f152959ae02cf3e80331425c60d364a0dfb39888462371737`; sibling `9038238456fc6c1ec56989b66e08334bb0b780c1f2207efd22f9288753fcb27b`. Lines: DESIGN 545 / provenance 179 / source 439 / sibling 38. `wc -w` portable DESIGN 7,725.

`node scripts/check-yaml-use-landing.mjs pchome` → use 13/13 OK. `node scripts/check-limiter-ledger.mjs pchome` → 본문 33 / 원장 33 (147–179) 1:1 OK (ledger check only; B2a quality is F3).

## Verdict

**PASS**

No A/C/D value-series defect on the current three artifacts. YAML `tokens.*` keys sit on their own paths. YAML `use` 13/13. Destination-class controls close loading and error together. Persona identifiers and §13 motivations are dest 0 on DESIGN/provenance/log. Sibling-only samples stay out of the portable body.

## 1 A1 key paths (YAML `tokens.*` → portable DESIGN)

Source YAML is nested (dotted path SRC 0 by construction). Portable DESIGN names each path; values sit on that path, not on another scale's shared numeral (easywallet trap).

| path | DES | PRO | value on that path |
|---|---:|---:|---|
| tokens.colors.primary / primary-soft / primary-coral | 5/2/1 | 3/1/1 | `#ea1717` / `#fe3b52` / `#fd7777` |
| tokens.colors.canvas / surface / hairline | 1/3/1 | 1/2/1 | `#f2f2f2` / `#ffffff` / `#e5e5e5` |
| tokens.colors.heading / body / body-muted / label-muted | 1/2/1/1 | 1/2/1/1 | `#000000` / `#2b2b2b` / `#666666` / `#969696` |
| tokens.colors.link / link-deep | 6/4 | 3/2 | `#0090eb` / `#008ae0` (`.link` count includes `.link-deep` as substring) |
| tokens.colors.navy / navy-deep / success / amber / on-primary | 2/1/1/1/2 | 2/1/1/1/2 | `#0e4f77` / `#084567` / `#0bb677` / `#fed796` / `#ffffff` |
| tokens.typography.family.sans / display / fallback | 3/3/2 | 1/1/1 | `Noto Sans TC` / `Montserrat` / `Microsoft JhengHei` |
| tokens.typography.feature-title … caption (7 roles) | 1 each (`price` 2 incl. `price-lg`) | feature-title 1, others 0 | unitless sizes 28/22/24/18/16/14/13; tracking column `0` |
| tokens.spacing.xs … section | 4/7/2/7/3/1/1/2 | 2/1/1/1/1/0/0/1 | unitless 4/8/12/16/24/32/48/64 |
| `tokens.spacing.section: 64` (exact) | 1 | 1 | Spacing table `:128` |
| tokens.rounded.sm / md / lg / full | 4/5/3/4 | 2/1/1/2 | unitless 4/8/16/9999 |
| `tokens.rounded.full: 9999` | 2 | 2 | Shape table + Soft CTA keep-both |
| tokens.shadow.ambient / card / elevated | 1/1/1 | 1/0/0 | three box-shadow strings dest ≥1 |
| tokens.components.button-primary / button-soft / card / price-tag / badge-promo / tab-bar | 1/2/1/1/1/1 | 1/1/0/0/0/0 | each record is its own block |

Hexes on those paths (DESIGN): `#ea1717` 27, `#fe3b52` 5, `#fd7777` 1, `#f2f2f2` 8, `#ffffff` 12, `#000000` 8, `#2b2b2b` 9, `#666666` 5, `#969696` 8, `#0090eb` 6, `#008ae0` 6, `#0e4f77` 1, `#084567` 1, `#0bb677` 3, `#fed796` 3, `#e5e5e5` 3. Sibling-only `#008ce0` DES 0 / SIB 1. `FILL IN` DES 0.

A1a: YAML line heights stay ratios — table cells `| 1.23 |` DES 2, `| 1.2 |` DES 1, `| 1.3 |` DES 1, `| 1.4 |` DES 3, `| 1.5 |` DES 1 — not rewritten as replacement px. Parenthetical rem figures (`1.75rem` … `0.81rem`) dest 1 each. Section Title keeps YAML `22` beside §3 `22px (1.38rem)` (`22 / 22px` DES 2). Other roles keep YAML unitless size + the §3 rem; the combined source spelling `28px (1.75rem)` DES 0, but `28px` still dest 4 on portal/hero prose and `28 (1.75rem)` dest 1 on the Feature Title row.

A1b: `Primitive type: \`button\`` DES 2, `card` 1, `badge` 2, `tab` 1 (= YAML `type` 2/1/2/1). `not in the token set` DES 5 (Promo Tile, P幣 chip, In-Stock chip, Navigation, Countdown).

A1c: `live-extract` DES 3 / PRO 5; `components_harvested` DES 0 / PRO 3 (sidecar); `ds.type` SRC 0. Favicon slug `s2/favicons?domain=pchome.com.tw` DES 1 / PRO 1.

Same-number unmerge in body (`DESIGN.md` `:128` / `:141` / `:268`): `tokens.spacing.xs: 4` ≠ `tokens.rounded.sm: 4` ≠ primary-button `4px` radius; `tokens.spacing.sm: 8` ≠ `tokens.rounded.md: 8` ≠ card `8px`; `tokens.spacing.base: 16` ≠ `tokens.rounded.lg: 16` ≠ body type 16; `tokens.spacing.lg: 24` ≠ Price Large 24; `tokens.rounded.full: 9999` ≠ Soft CTA YAML `9999` ≠ §4 Soft CTA `8px`. `tokens.colors.surface` `#ffffff` unmerged from `on-primary` `#ffffff`. 24h `#ea1717` unmerged from portal `#fe3b52`. `link` unmerged from `link-deep`.

Shadows dest: `rgba(0,0,0,0.06) 0px 1px 4px` DES 1 / SRC 2; `rgba(0,0,0,0.1) 0px 2px 8px` DES 4 / SRC 5; `rgba(1,47,73,0.1) 0px 8px 24px` DES 2 / SRC 3.

YAML `use` 7 type + 6 component = 13/13 DES ≥1 (script + hand). Font shorthands: YAML `weight 700` DES 9 (Primary YAML font record dest 2); `18px weight 600` DES 1 on Price Tag; `16px weight 400` DES 3 on Tab Bar. YAML `active: "black active text"` DES 1. Soft CTA YAML radius `9999` beside §4 `8px`. Tab YAML `fg` `#000000` beside §4 active/inactive split.

## 2 Unique facts

`1998` SRC 1 / DES 2. `Jan Hung-tze` 1/3. `詹宏志` 1/3. `網路家庭` 1/3. `PChome magazine` 1/2. `PChome 24h購物` 1/3. `PChome Online` 1/2. `Shopee` 1/2. `Momo` 1/2. `Yahoo奇摩購物` 1/3. `delivery within 24 hours across Taiwan` 1/1. `internet pioneer` 1/1. `abundance and visible savings` 1/1. `Western DTC` 1/1. `每天一起變更好` 1/2. `getting better together, every day` 1/1. `加入購物車` 3/5. `立即購買` 2/5. `結帳` 2/3. `24h到貨` 3/3. `隔日配` 1/2. `購物車是空的` 1/2. `找不到符合的商品` 1/2. `已售完` 1/4. `限時下殺` 1/2. `P幣回饋` 2/4. `elevate your lifestyle` 1/1. `202 element` 1/2. `~5000` 1/2. `rgb(234,23,23)` 1/4. `文泉驛正黑` 1/3. `WenQuanYi Zen Hei` 1/2. `微軟正黑體` 2/3. `Microsoft JhengHei` 3/5. `Noto Sans TC` 16/18. `Montserrat` 14/15. `Roboto` 7/6. `Helvetica` 1/2. `Arial` 1/2. `93px` 3/5. `52px` 2/4. `8px 16px` 2/2. `8px 20px` 1/2. `0px 8px` 4/4. `1px 6px` 1/1. `6 → 4 → 3 → 2` 1/2. `5-column` 1/2. `16px gutters` 1/3. `red \`#ea1717\` band` 1/1. `$3,999` 1/2. `8% P幣回饋` 1/2. `會員` 1/2. `點數` 1/2. `9999` 2/8. `white on imagery` 2/3. `24h shopping app` 1/1. `https://www.pchome.com.tw` 2/4. `$` prefix 1/1.

`card-on-gray-canvas` SRC 1 / DES 0 is the §16 hyphenated Do line; density / full width / white-card-on-`#f2f2f2` remain (`fill the grid` 2/1, `full width` 2/1, `Full-bleed` 1/1, Principles card-as-unit). pega-class connective, not a dropped fact.

## 3 Constraints / motion

§7 Do 8 and Don't 8 kept. Unique §16 Do `Surface the 24h delivery promise` DES 1; unique §16 Don't `Don't bury the price` DES 1. `300/200` 1/1. `4–8px` 1/1. `square aspect` 1/1. `hamburger drawer` 1/1. `swipeable carousels` 1/1. `primary mobile nav` 1/1. `1px solid #e5e5e5` 1/1. Breakpoints `<640` / `640–1024` / `1024–1440` / `>1440` dest 1 each. `4–6 columns` 1/1. §14 eight-row contract dest 1 each including `購物車是空的` / `已售完` / faded-red disabled. Durations `0ms` / `150ms` / `250ms` / `400ms` dest 4/1/1/1. Easing *roles* kept (`ease-standard` 2/4, `ease-enter` 1/3, `ease-exit` 1/6) with uses `Most transitions` / `Drawers, dropdowns arriving` / `Dismissals` dest 1 each. Exact curves named then omitted at the value boundary: `cubic-bezier(0.25, 0.1, 0.25, 1)` SRC 1 / DES 1 / PRO 1 (named in the omit sentence, not as a promoted token). `prefers-reduced-motion` 1/1. `no animation flourish` 1/2. `marketplace remains fully shoppable` 1/1. B3 five-kind gate at `:182`: `transition properties` DES 1, `animation name` DES 1, `reduced-motion behavior` DES 1, `A partial confirmation` DES 1.

## 4 Ungrounded surface

Scope names the two source inspect URLs only: portal `https://www.pchome.com.tw` and 24h `https://24h.pchome.com.tw`. Portal 28px / 700 white-on-imagery and `#fe3b52` stay on the portal sentence (`:11`). 24h `#f2f2f2` / 8px cards / `#ea1717` prices stay on the 24h sentence. `1024–1440` stays the Desktop band (`:465`), not a page-canvas size. `mobile app` / `native application` / `native-client` / `back-office` / `product application` / `storefront` / `iOS` / `Android` / `fin.ai` all SRC 0 / DES 0 / PRO 0 (LOG mentions the first four as dest-0 denials). Named gaps DES 1 lists only omitted cubic-bezier digits, not new domains. `24h shopping app` and `primary mobile nav` are source wording. `Pointer-web` is hover-reason prose, not a new product surface.

## 5 Conflict policy

Same-hex / same-number roles unmerged throughout. YAML vs §4 radius on Soft CTA: keep-both (`9999` and `8px`). Tab YAML `fg` `#000000` vs §4 active/inactive: keep-both. YAML type-role `use` vs §3 Notes: keep-both where they differ (`feature-title`, `body`, `price`). Unattributed `cubic-bezier` three values all omitted from the curve column (names/uses/durations kept — T2 keep-role). One policy vs sibling: YAML/source-body token set in DESIGN; sibling extras stay out.

## 6 F2 list after F3

F3 expanded the Semantic `:93` limiter in place (line count 545 unchanged) and rewrote dest lines on the log. Current files match those dests:

- `derived editorial implementation inference` DES 33 at 9/11/13/19/28/32/45/58/73/93/128/141/152/180/190/205/209/230/234/235/255/268/290/312/335/358/401/418/442/489/494/509/543 (audit list same).
- `https://www.pchome.com.tw` DES 4 / PRO 4.
- `#ea1717` DES 27 / PRO 11.
- `live-extract` DES 3 / PRO 5.
- `rgb(234,23,23)` DES 4 / PRO 4.
- `components_harvested` DES 0 / PRO 3.
- `22px` DES 2 at 214/230 / PRO 1.
- `tokens.spacing.section: 64` DES 1 at 128; path `tokens.spacing.section` DES 2.
- `1998` DES 2 / PRO 2. `Jan Hung-tze` DES 3 / PRO 2.
- `These 8 items are a derived editorial implementation inference` DES 1 at 45.
- B3 fragments `transition properties` / `animation name` / `reduced-motion behavior` / `A partial confirmation` each DES 1 at 182.
- `not in the token set` DES 5.
- Worker-close SHA in the log is labeled as worker-close, not as the post-F3 body.

No stale pre-F3 dest left as a current claim.

## 7 Deleted persona derivatives (D2 / D2a)

Source §13 four fictional archetypes. Portable Audience uses only the source header grouping. Primary tasks name the portal URL, the 24h URL, and the §4 search-bar sentence, not persona goals. This review mentions the needles; absence is claimed of DESIGN/provenance/log, not of this file. AUD mentions commute / reading glasses / office supplies / ten laptops as dest-0 confirmation.

| needle | SRC | DES | PRO | LOG | AUD |
|---|---:|---:|---:|---:|---:|
| Lin Yi-chen / 林宜蓁 / Chen Wei / 陳威 / Auntie Wu / 吳阿姨 / Kevin Hsu / 許凱文 | 1 each | 0 | 0 | 0 | 0 |
| Taipei / Taichung / Kaohsiung / Hsinchu | 1 each | 0 | 0 | 0 | 0 |
| commute / reading glasses / office supplies / ten laptops | 1 each | 0 | 0 | 0 | 1 |
| household goods / electronics category / credit-card promos / in bulk / Would abandon / fewer deals per screen / compare ten laptops / primary tool / Operations manager / Office worker | 1 each | 0 | 0 | 0 | 0 |
| 3C enthusiasts | 1 | 1 | 1 | 0 | 1 |
| Taiwanese deal-hunting shoppers / household buyers / loyalty members | 1 | 1 | 1 | 0 | 0 |
| fictional archetypes | 1 | 1 | 2 | 0 | 0 |

`3C enthusiasts` / `household buyers` / `loyalty members` / `deal-hunting shopper` are source §13 header (and §1) group wording, not biographies. `credit-card offers` / `credit-card tie-ins` dest 1 are §1/§11, not `credit-card promos` (persona, dest 0). Search Primary task copies §4 `Search bar dominant and centered — the primary navigation tool of a marketplace`, not Kevin Hsu `primary tool`. No gitlab-style motivation sentence in Primary tasks.

## 8 C2

Primary (Buy / Add to Cart) opens loading/error/success with an in-place-commit reason (`:276–278`). Soft CTA, Promo Tile, Tab Bar, and Navigation close all three with a destination / no-in-place-operation reason. Product Card closes loading (`Destination product tile`; grid skeleton is the Loading (grid) row) and success, and opens error because the source records `已售完` on the card (`:343–345`) — not the wave-27 split of closing error as “커밋 없음” while leaving loading open. `| loading | applicable |` DES 1 (`:276`). `| error | applicable |` DES 2 (`:277` Primary, `:344` card). `| success | applicable |` DES 1. `| loading | not-applicable |` DES 5. `| error | not-applicable |` DES 4. `| success | not-applicable |` DES 5. `commits no operation` DES 10. `not captured` DES 0. `Interactive control` DES 0. `Button control` DES 0. Price Tag / Promo Badge / P幣 chip / In-Stock / Countdown are `Kind: non-interactive` (DES 5) with no map. Tab and destination tiles are closed on both sides.

## 9 Sibling fusion

`14px radius with 16px padding` SRC 0 / SIB 0 / DES 0 / PRO 0 / LOG 0. `measures 1440px` SRC 0 / SIB 0 / DES 0 / PRO 0 / LOG 1 (log denial). `radius with` all 0. Sibling-only extras stay out of portable DESIGN: `$490` 0/0/0/0/1/1, `34.468px` 0/0/0/0/1/1, `27.082px` 0/0/0/0/0/1, `#008ce0` 0/0/0/0/1/1, `rgb(51, 51, 51)` 0/0/0/0/0/1, `71 occurrences` 0/0/0/0/0/1, `56 occurrences` 0/0/0/0/0/1, `網路家庭國際資訊股份有限公司` 0/0/0/0/1/1, `corp.pchome.com.tw` 0/0/0/0/1/1, `24h.pchome.com.tw/help` 0/0/0/0/0/1, `h3` 0/0/0/0/1/2, `disable-http2` / `networkidle` / `45s` / `line-height: 34.468px` DES 0. Portable `28px` DES 4 is portal/hero source prose, not the sibling `font-size: 28px` + `34.468px` pair. Hero price stays source `#ea1717` 24px/700 on Price Tag, not sibling white-on-red `$490`.

## 10 Surface transfer

`#ea1717` / 8px cards / `#f2f2f2` stay 24h. `#fe3b52` / 28px white-on-imagery stay portal (`:11`). `#008ae0` stays Hover/visited `link-deep`, not sibling portal `#008ce0`. Feature Title 28 / 700 keeps §3 Notes `white on imagery` beside YAML use; Scope still binds that 28px to the portal sentence. Layout `:442` reads the source list as the contract for the two inspected URLs and keeps §8 4–6 columns beside the §9 5-column example rather than collapsing them. 93px / 52px stay promo tiles / tabs.

## 11 YAML use ↔ § table use

Longer §3 / §4 writings kept beside YAML `use`. No kakaot-style cut to a shorter record that drops a unique use term. `node scripts/check-yaml-use-landing.mjs pchome` → 13/13.

| record | SRC | DES |
|---|---:|---:|
| Editorial / feature card titles on hero carousels | 1 | 2 |
| Editorial hero / carousel headlines (white on imagery) | 1 | 2 |
| Secondary headlines, section heads | 2 | 1 |
| Hero / featured product price | 2 | 1 |
| Product card price in red #ea1717 | 1 | 1 |
| Product card price, in red | 1 | 1 |
| Standard reading text, product titles | 1 | 1 |
| Product titles, standard reading text | 1 | 1 |
| Tab labels, metadata, secondary nav | 2 | 1 |
| Fine print, spec rows, timestamps | 2 | 1 |
| Add to cart / Buy now | 1 | 1 |
| Add to cart, buy now, primary commerce action | 1 | 1 |
| Portal hero CTA / banner actions | 1 | 2 |
| Portal hero banner CTAs on `www.pchome.com.tw` | 1 | 1 |
| Dense product grid card, soft card shadow | 1 | 1 |
| Product price, strike-through #969696 for list price | 1 | 1 |
| P幣 / 折扣 promo flags | 1 | 2 |
| 折扣 (discount), 限時 (limited), P幣 rebate flags | 1 | 1 |
| Category switcher | 1 | 5 |
| black active text | 1 | 1 |
| Credit-card / P幣 offer tiles in the promo strip | 1 | 1 |
| P-coin reward callouts | 1 | 1 |
| availability, order-confirmed status | 1 | 1 |
| List price, `#969696`, line-through | 1 | 1 |

`Token-set use:` prefix DES 6 (six YAML component records). Type-role Token-set use column holds the seven YAML strings; Strike Price has no YAML key.

## Notes (not FAIL)

- `card-on-gray-canvas` / `Keep the dense` / hyphenated `full-width` SRC 1 / DES 0 are the §16 Do line treated as overlap with §7 density. The marketplace-grid fact remains.
- Combined §3 spellings `28px (1.75rem)` / `24px (1.50rem)` / `18px (1.13rem)` / `16px (1.00rem)` / `14px (0.88rem)` / `13px (0.81rem)` DES 0; YAML unitless + rem land, and `22px (1.38rem)` was the only §3 size whose px form had no other slot (easywallet-aware keep-both on that row only).
- Template cubic-bezier values omitted to the curve-value boundary (T2 keep-role); duration tokens, easing roles, reduced-motion, and motion rules stay. The three exact strings remain as named-omitted in Motion `:165` and in provenance Omission ledger.
- `Add to cart` SRC 3 / DES 2: the missing 1 is the §9 prompt English gloss; issued `加入購物車` SRC 3 / DES 5.
- `components_harvested` DES 0 is A1c sidecar (PRO 3).
- Product Card error applicable + loading not-applicable is source-recorded `已售完` on the tile vs grid-level skeleton, not the wave-27 loading-open/error-closed split.

Absence claims above are about DESIGN/provenance/source/sibling/log/audit, not this review (E2d). Post-write re-grep (REV is this file): `14px radius with 16px padding` REV 2 / DES 0 · `measures 1440px` REV 2 / DES 0 / LOG 1 · `Lin Yi-chen`/`林宜蓁`/`Chen Wei`/`陳威`/`Auntie Wu`/`吳阿姨`/`許凱文` REV 2 / DES 0 · `Kevin Hsu` REV 3 / DES 0 · `Taipei`/`Taichung`/`Kaohsiung`/`Hsinchu` REV 2 / DES 0 · `commute`/`reading glasses`/`office supplies` REV 3 / DES 0 / AUD 1 · `ten laptops` REV 4 / DES 0 / AUD 1 · `credit-card promos` REV 3 / DES 0 · `$490` REV 3 / DES 0 / AUD 1 / SIB 1 · `34.468px` REV 4 / DES 0 / AUD 1 / SIB 1 · `27.082px` REV 2 / DES 0 / SIB 1 · `#008ce0` REV 4 / DES 0 / AUD 1 / SIB 1 · `rgb(51, 51, 51)` REV 2 / DES 0 / SIB 1 · `網路家庭國際資訊股份有限公司` REV 2 / DES 0 / AUD 1 / SIB 1 · `corp.pchome.com.tw` REV 2 / DES 0 / AUD 1 / SIB 1 · `24h.pchome.com.tw/help` REV 2 / DES 0 / SIB 1 · `mobile app`/`native application`/`back-office`/`product application` REV 2 / DES 0 / LOG 1 · `native-client`/`storefront`/`fin.ai`/`not captured`/`Interactive control`/`Button control`/`FILL IN` REV 2 / DES 0 · `card-on-gray-canvas` REV 3 / DES 0 / SRC 1 · `28px (1.75rem)` REV 3 / DES 0 / SRC 1 · `h3` REV 2 / DES 0 / AUD 1 / SIB 2 · `radius with` REV 4 / DES 0.

REVIEW_DONE pchome PASS

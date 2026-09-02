# pepabo — T2-1 wave-27-form independent review (A/C/D only)

Rulebook v12. F3 (B2a·E2) not judged except item 6 (F2 list freshness after F3). Files confirmed with `find` before grep: migrated `{DESIGN.md,provenance.md,migration-log.md,audit-log.md}`, source `web/references/pepabo/DESIGN.md`, sibling `web/references/pepabo/.verification.md`. Counts: `grep -oF -- <pat> <file> | wc -l` in bash `set +e`. Empty pipeline = dest 0 (not zsh `no matches found`). `grep -c` not used. Absence claims in this file are about those six paths, not about this review (E2d).

Portable DESIGN SHA-256 `9fe71fd20cced0f7bddfcbcbef6870d1af749b3d07753e7a5a31d17f7900747d`; provenance `63561d6931f594f15fd39465c010888ed4f442c752cc73eba0cbdab564ee3c78`; source `0e337b46eabcd3559c25589273bfbf27444fe9d6f0ec8fd5173c1ed06829ce0d`; sibling `539eddd373d397ec93c1aca674c6819e6311d56ea69b0562edb6d58605175cbe`. `wc -w` portable DESIGN 7,523 (matches the log).

## Verdict

**PASS**

No A/C/D value-series defect on the current three artifacts. YAML `use` 19/19. Nav (`type: tab`) closes loading and error together. Persona identifiers and §13 motivations are dest 0 on DESIGN/provenance/log. Sibling-only strings stay out of the portable body.

## 1 A1 key paths (YAML `tokens.*` → portable DESIGN)

Color / type-role / component parent paths are DESIGN dest ≥1 (easywallet trap: same numeral on another scale does not count). Source YAML is nested, so dotted `tokens.*` SRC = 0; the portable file writes the paths. Spacing/rounded children `tokens.spacing.xs` / `.sm` / `.xxl` and `tokens.rounded.pill` / `.full` are dest 0 as dotted strings; the parent lists still bind `xs: 8` · `sm: 12` · `xxl: 64` under `YAML tokens.spacing` and `pill: 20` · `full: 9999` under `YAML tokens.rounded` (`DESIGN.md` `:136` / `:142`). That is pega-class parent binding, not an easywallet missing-field row.

| path | DES | PRO |
|---|---:|---:|
| tokens.colors.primary / primary-strong / primary-bright / link | 3/1/1/1 | 4/1/1/1 |
| tokens.colors.ink / ink-strong / body / muted / faint | 3/1/2/1/1 | 4/1/2/1/1 |
| tokens.colors.hairline / surface / surface-soft / canvas / on-primary | 1/2/1/3/3 | 1/2/1/2/2 |
| tokens.colors.brand-mint / brand-mint-deep | 2/1 | 2/1 |
| tokens.colors.positive / notice / negative / negative-strong / attention / ink-black | 1/1/2/1/1/1 | 1/1/2/1/1/2 |
| tokens.typography.family.sans / cjk / kerning / mono | 1/1/1/1 | 1/0/0/0 |
| tokens.typography.xxxl … xxs (eight roles) | 1 each | xxxl 1, others 0 |
| tokens.spacing (parent) | 6 | 5 |
| tokens.spacing.xxs / base / md / lg / xl | 1/1/1/1/1 | 2/1/1/1/0 |
| tokens.spacing.xs / sm / xxl (dotted) | 0/0/0 | 0/0/0 |
| tokens.rounded (parent) | 2 | 2 |
| tokens.rounded.sm | 1 | 2 |
| tokens.rounded.pill / .full (dotted) | 0/0 | 0/0 |
| tokens.shadow.flat / level1 / level2 | 1/1/1 | 1/0/0 |
| tokens.components.button-primary / outline / pill / small / textfield / textfield-filled / card / nav-link / badge-positive / badge-negative / avatar | 1/1/1/1/2/1/1/1/1/1/1 | 1/0/0/0/1/0/1/1/1/0/1 |

Hexes on those paths (DESIGN): `#1f7ccc` 14, `#0a62ad` 4, `#3e93de` 1, `#005bac` 3, `#393c41` 10, `#1f2124` 1, `#585c63` 5, `#767b85` 2, `#9297a1` 9, `#dee0e3` 4, `#edeef0` 4, `#f7f8fa` 1, `#ffffff` 14, `#30f4c5` 6, `#0e7365` 2, `#1dc487` 5, `#debf43` 3, `#cc1f24` 5, `#b50b11` 1, `#db7d42` 3, `#000000` 6. Corporate comment-only `#1f7acc` DES 0 / PRO 4. A1a: unitless `1.25` / `1.29` / `1.33` / `1.14` / `1.50` / `1.43` / `1.45` stay ratios (each DES 2 except `1.33` DES 4) beside the §3 px writings. A1b: `Primitive type: \`button\`` DES 4, `input` 2, `tab` 1, `badge` 2, `card` 1, `avatar` 1; Hairline Card `not in the token set` DES 3. A1c: `live-extract` DES 0 / PRO 2; `components_harvested` DES 0 / PRO 2 (sidecar). `ds.type` SRC 0.

Same-number unmerge in body (`DESIGN.md` `:138`): `tokens.spacing.xxs: 4` ≠ `tokens.rounded.sm: 4`; `tokens.spacing.base: 16` ≠ type M 16px ≠ button font 16px; `tokens.spacing.md: 24` ≠ Small button height 24px; `tokens.spacing.lg: 32` ≠ XXXL 32px ≠ pill height 32px ≠ Textfield Small height 32px; `tokens.spacing.xl: 48` ≠ Textfield Large height 48px. Same-hex unmerge (`:84` / `:113`): `canvas` ≠ `on-primary` (both `#ffffff`); `body` `#585c63` ≠ outlined `fg`; `ink-black` `#000000` is pepper fill / hero canvas, not body text. Four blues unmerged.

YAML `use` 8 type + 11 component = 19/19 DES ≥1. `node scripts/check-yaml-use-landing.mjs pepabo` → use 19/19 OK (run result, not semantic adequacy). Font shorthands dest 1 each on the owning record: `16px / 400 Open Sans` DES 6, `12px / 400 Open Sans` 2, `14px / 400 Open Sans` 1. Filled radius `4px 4px 0px 0px` DES 1. YAML `active: "text #393c41 weight 700"` DES 1. Level-1 / level-2 box-shadow strings dest 3 / 1.

Size scales from §4 body (not YAML keys) dest 1 each: `Small 24px / 12px` · `Medium 32px / 14px` · `Large 40px / 16px`; Textfield `Small 32px / 14px / 4px 12px` · `Medium 40px / 16px / 8px 16px` · `Large 48px / 18px / 10px 24px`; `2px border` 1; densities `28/24/20px` 2; `live H1 = 21px/700` 1.

## 2 Unique facts

`2003` SRC 2 / DES 1. `Fukuoka` 1/1. `Tokyo` 1/1. `GMO Internet Group` 2/1. `GMOペパボ株式会社` 1/1. `minne` 8/4. `SUZURI` 7/4. `lolipop` 3/2; `lolipop!` 1/1. `ヘテムル` 1/1. `ムームードメイン` 2/1. `カラーミーショップ` 2/1. `color me shop` 1/1. `2021` 2/2. `ペパボのデザインシステムのドキュメントを公開します` 2/1. `人類のアウトプットを増やす` 5/6. `Increase humanity's output` 2/2. `便利な制約` 1/2. `YakuHanJP` 13/16. `Noto Sans JP` 22/20. `Open Sans` 37/26. `Roboto Mono` 3/4. `約物` 1/2. `get-primitive-color` 5/5; `get-primitive-color($name: blue, $level: 600)` 1/1. `get-semantic-color` 5/4. `get-elevation-box-shadow` 1/2. `get-font-size` 1/2. `get-line-height` 1/2. `Pepper Blue 600` 6/5. `Pepper Gray 800` / `900` / `700` / `100` each 1/1. `50 to 900` 1/1. `environmental honesty` 3/2. `Sass functions, not named roles` 1/1. `Japanese-first kerning` 1/1. `保存` 2/2. `無料診断中` 3/3. `必須` 1/2. `Lucida Grande` 1/3. `apple-system` 2/3. `comfort / normal / dense` 3/3. `4px vertical grid` 1/1. `tech.pepabo.com` 2/1. `design.pepabo.com` 11/7. `768px` 1/1. `1024px` 2/2. `~40–48px` 1/1. `9999` 6/6. `20px` 10/10. Closing refuses/embraces unit kept in Scope `:13`. `get-implication-color` SRC 1 / SIB 1 / DES 0 / PRO 3 (closing-comment + sibling; ledger only). Comment endpoints `f5faff` / `002647` DES 0 / PRO 2. `×640` DES 0 / PRO 3.

## 3 Constraints / motion

Do 8 / Don't 8 kept (`Bake a single brand` 1/1 through `Treat the system as a rulebook` 1/1). `Grid-locked rhythm` 1/1. `Density options` 1/1. §14 nine-row contract dest 1 each including `No celebratory emoji` and `not only "必須"`. Durations `120ms` / `200ms` / `320ms` each 1/1; `motion-fast` / `motion-standard` / `motion-slow` dest 1/2/1. Easing *roles* kept (`ease-enter` 2/3, `ease-exit` 1/2, `ease-standard` 1/2). Exact curves omitted: `cubic-bezier` DES 0 / PRO 2; `cubic-bezier(0.2, 0.6, 0.25, 1)` SRC 1 / DES 0 / PRO 0 (and the two sibling-class curves the same). `prefers-reduced-motion` 1/1. `No bounce or spring` 1/1 (wording `in the pepper base`). B3 five-kind gate at `:180`: `transition properties` DES 1, `animation name` DES 1, `reduced-motion behavior` DES 1. `4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px` 1/1. Collapsing / Icon flavor / avatars 9999px / cards 4px across breakpoints kept.

## 4 Ungrounded surface

Scope names the five source inspect URLs only. `resolved anchor color on the corporate site` SRC 1 / DES 1. `live corporate surfaces` 1/1. Ink `across all live surfaces` 1/1. Live H1 21px/700 stays documentation home (`Live H1 on the documentation home` DES 2; type-table `live H1 = 21px/700` copies source §3). Mint stays pepabo-flavor / badge. `mobile app` / `native-client` / `storefront` / `product application` / `fin.ai` / `iOS` / `Android` / `back-office` all SRC 0 / DES 0 / PRO 0. `Named gaps` DES 1 lists source-unnamed values (easing digits, hover paint, `focus-visible` paint, Hairline Card YAML type, getdesign/refero), not new domains. `Pointer-web` DES 8 is hover-reason prose, not a new product surface. `5 surfaces` SRC 2 / DES 0 is the digit form; dest writes `five first-party surfaces` (`:9`). `Tier 1` / `Conflicts unresolved` DES 0 / PRO ≥1 (E1 sidecar).

## 5 Conflict policy

Same-hex / same-number roles unmerged throughout. Unattributed `cubic-bezier` three values all omitted (names/uses/durations kept — T2 keep-role). One policy vs sibling: YAML/source-body token set in DESIGN; sibling extras (`Pepabo Design`, `Inhouse - Pepabo Design`, `font-size: 64px`, `0px 16px`, `$blue-600`, `get-image-overlay-color`, full ramps, `#1f7acc`) stay provenance. `#1f7ccc` is not merged with comment `#1f7acc`.

## 6 F2 list after F3

F3 attached closes at Capture `:247`, Textfield Observed Focus `:367`, Content locale omit `:539`, grew the provenance inventory to 27 rows, and rewrote dest lines. Current file matches those dests:

- `derived editorial implementation inference` DES 27 at 9/11/13/19/28/32/46/56/69/84/138/148/158/162/195/214/218/237/247/249/367/421/481/516/521/539/573 (log same list).
- `including the published Inhouse documentation` DES 28 at the same lines plus Motion `:180` (B3 gate, not a 28th B2a row).
- `#1f7ccc` DES 14 at 11/11/36/60/92/92/132/247/259/262/367/369/378/577.
- `https://pepabo.com/` DES 2 both on `:9`; PRO dest 3 at 13/69/81.
- `GMO Pepabo (Inhouse)` DES 1 / PRO 2 at 1/10.
- Provenance inventory 27 data rows at 144–170.
- `cubic-bezier` DESIGN dest 0 (true of DESIGN; the log names the word).
- Word count 7,523.

No stale pre-F3 dest left as a current claim.

## 7 Deleted persona derivatives (D2 / D2a)

Source §13 three fictional archetypes. Portable Audience uses only the source header grouping. Primary tasks name Top App Bar / Flavor pages / the mission line, not persona goals. This review mentions the needles; absence is claimed of DESIGN/provenance/log, not of this file. AUD mentions identifiers as the before-state of fix 11.

| needle | SRC | DES | PRO | LOG | AUD |
|---|---:|---:|---:|---:|---:|
| 佐藤 / 美咲 / 田中 / 山本 / 涼 | 1 each | 0 | 0 | 0 | 1 |
| maker-celebrating | 1 | 0 | 0 | 0 | 1 |
| @pepabo-inhouse | 1 | 0 | 0 | 0 | 1 |
| theme survives | 1 | 0 | 0 | 0 | 1 |
| Guards the neutrality | 1 | 0 | 0 | 0 | 1 |
| design-systems lead | 1 | 0 | 0 | 0 | 1 |
| product designer on minne | 1 | 0 | 0 | 0 | 1 |
| front-end engineer on SUZURI | 1 | 0 | 0 | 0 | 1 |
| without forking / minne Flavor / SUZURI's theme / rebuilding buttons / team's real spec | 1 | 0 | 0 | 0 | 0 |
| Pepabo product designers and engineers building across multiple service brands | 1 | 1 | 0 | 2 | 1 |
| creator-celebrating / maker-friendly | 1 | 1 | 0 | 0 | 0 |

`creator-celebrating` / `maker-friendly` are source §10 voice-table wording, not §13. `Fukuoka` / `Tokyo` in Scope `:13` are source §11 founding, not persona cities. No gitlab-style motivation sentence in Primary tasks.

## 8 C2

Four button records and two Textfields open loading/error/success with a commit or field reason. Navigation (`type: tab`) closes all three with a destination / no in-place-operation reason. `| loading | applicable |` DES 6. `| error | applicable |` DES 6. `| success | applicable |` DES 6. `| loading | not-applicable |` DES 1 (`:464` nav). `| error | not-applicable |` DES 1 (`:465`). `| success | not-applicable |` DES 1. `commits no operation` DES 1. `not captured` DES 0. `Interactive control` DES 0. `Button control` DES 3 is the disabled-reason cell on outline/pill/small, not a bulk-open of loading. Elevated Card / Hairline Card withhold kind and map (C4). Badges / Avatar are `Kind: non-interactive`. Pill Role names `corporate-site SNS chips` as an example of a `type: button` compact variant; loading and error are both open (not the wave-27 split of closing error as “커밋 없음” while leaving loading open). Tab is closed on both sides.

## 9 Sibling fusion

`14px radius with 16px padding` SRC 0 / SIB 0 / DES 0 / PRO 0 / LOG 0. `measures 1440px` SRC 0 / SIB 0 / DES 0 / PRO 0 / LOG 1 (log denial). `radius with` all 0 except that log denial. Sibling-only extras stay out of portable DESIGN: `Pepabo Design` 0/2/0/2, `Inhouse - Pepabo Design` 0/1/0/1, `get-image-overlay-color` 0/1/0/1, `font-size: 64px` 0/1/0/1, `0px 16px` 0/1/0/1, `No designs found for` 0/1/0/1, `$blue-600` 0/1/0/1, `$informative-color` 0/1/0/1, `tech.pepabo.com/2021/04/30` 0/1/0/1, `#e5f3ff` / `#034782` / `#3ddba1` DES 0. Portable `64px` DES 2 is `tokens.spacing.xxl: 64` and the §5 scale (`:136` / `:481`), not the sibling hero metric. `height 48px` DES 1 is `Textfield Large height 48px` (`:138`), not sibling sub-nav height 48px (that string lives in provenance `:47`).

## 10 Surface transfer

`#005bac` stays the corporate resolved anchor. `#0a62ad` stays live-surface nav/hover (source §2), also named on live corporate surfaces in Scope (source §1). `#30f4c5` stays pepabo-flavor mint / badge. H1 21px/700 stays documentation home, not pepabo.com (sibling hero region is 64px and is not copied). Ink-black hero canvas stays `pepabo.com`. `×640` frequency stays provenance. YAML tokens remain the Inhouse docs + pepabo.com pair the source inspected; Flavor-swapped minne/SUZURI UIs are named as intended consumers, not as captured token surfaces (`:9`).

## 11 YAML use ↔ § table use

Longer §4 / §3 writings kept beside YAML `use`. No kakaot-style cut to a shorter record that drops a unique use term.

| record | SRC | DES |
|---|---:|---:|
| Largest display heading (XXXL) | 1 | 1 |
| Page / section heading (XXL) | 1 | 1 |
| Subsection heading (XL) | 1 | 1 |
| Card / brand title (L) | 1 | 1 |
| Body baseline (M), normal density 24px | 1 | 1 |
| Dense UI text / small button (S) | 1 | 1 |
| Caption, small button label (XS) | 1 | 1 |
| Fine print, smallest label (XXS) | 1 | 1 |
| Neutral pepper primary action (保存); brand flavor overwrites bg | 1 | 1 |
| Secondary/outlined action on neutral flavor | 1 | 1 |
| Rounded pill button variant (icon / compact) | 1 | 1 |
| Small (XS) button size | 1 | 1 |
| Default Textfield; border drawn via inset, focus blue #1f7ccc | 1 | 1 |
| Filled / underline Textfield variant | 1 | 1 |
| Elevated content card, 1px #dee0e3 hairline option | 1 | 1 |
| Top App Bar / sidebar nav item | 2 | 5 |
| Brand mint status pill (e.g. 無料診断中) | 1 | 1 |
| Negative / error intention badge | 1 | 1 |
| Circular user avatar (Avatar component) | 2 | 1 |
| corporate-site SNS chips | 1 | 1 |
| pepabo-flavor highlight pill | 1 | 2 |
| Error / negative-intention status badge | 1 | 1 |
| Filled variant with a bottom-underline affordance | 1 | 1 |
| Standard content card at elevation level 1 | 1 | 1 |
| Smallest button size | 1 | 1 |
| Top App Bar / sidebar nav items (Foundation, Inhouse, Components | 1 | 2 |
| e.g. "無料診断中" | 1 | 1 |
| live H1 = 21px/700 | 1 | 1 |
| A heavier variant uses a 2px border | 0 (source joins it to Secondary action) | 1 |

`Token-set use:` prefix DES 11 (all eleven component records). Type-role Token-set use column holds the eight YAML strings.

## Notes (not FAIL)

- Source §1 `one of the few openly published Japanese design systems` SRC 1 / DES 0. Dest Scope `:9` keeps `an openly documented Japanese design system`. Rarity connective dropped; the published-JP-DS fact remains (pega-class narrative connective).
- Source §4 Primary Use `("保存" / Save)` SRC 1 / DES 0 and `with its own key color` SRC 1 / DES 0. YAML `use` (保存 + brand flavor overwrites bg) dest 1. English gloss of a kept issued string, not a kakaot extra use term.
- `hairline rendered via inset` SRC 1 / DES 0 is case; dest `:368` is `Hairline rendered via inset border` DES 1.
- Dotted `tokens.spacing.xs` / `.sm` / `.xxl` and `tokens.rounded.pill` / `.full` dest 0 as strings; parent lists bind the keys and values on the spacing/shape scales, not on type size or component height.
- Template cubic-bezier values omitted to provenance (T2 keep-role); duration tokens, easing roles, reduced-motion, and motion rules stay.
- Pill SNS-chip example is `e.g.` on a `type: button` compact variant; loading and error are both open. Not the C2 split form.

Absence claims above are about DESIGN/provenance/source/sibling/log/audit, not this review (E2d). Post-write re-grep (REV is this file): `14px radius with 16px padding` REV 2 / DES 0 · `measures 1440px` REV 2 / DES 0 / LOG 1 · `佐藤`/`美咲`/`田中`/`山本`/`涼` REV 2 / DES 0 / PRO 0 / LOG 0 / AUD 1 · `maker-celebrating`/`@pepabo-inhouse`/`theme survives`/`Guards the neutrality`/`design-systems lead`/`product designer on minne`/`front-end engineer on SUZURI` REV 2 / DES 0 / AUD 1 · `cubic-bezier(0.2, 0.6, 0.25, 1)` REV 2 / DES 0 · `Pepabo Design` REV ≥2 / DES 0 / PRO 2 · `font-size: 64px` REV 3 / DES 0 / PRO 1 · `0px 16px` REV 3 / DES 0 / PRO 1 · `#1f7acc` REV 4 / DES 0 / PRO 4 · `mobile app`/`native-client`/`storefront`/`product application`/`fin.ai`/`not captured` REV 2 / DES 0.

REVIEW_DONE pepabo PASS

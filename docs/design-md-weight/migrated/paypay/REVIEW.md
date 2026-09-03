# paypay — T2-1 wave-27-form independent review (A/C/D only)

Rulebook v12. F3 (B2a·E2) not judged except item 6 (F2 list freshness after F3). Files confirmed with `find` before grep (`DESIGN.md`, `provenance.md`, `migration-log.md`, `audit-log.md`, source `web/references/paypay/DESIGN.md`, sibling `web/references/paypay/.verification.md`). Counts: `grep -oF -- <pat> <file> | wc -l` in bash `set +e`; empty pipeline = dest 0 (not zsh `no matches found`). Standalone `6px` used `grep -oE '(^|[^0-9])6px'`. Portable DESIGN SHA-256 `ce427b53e4926ee84bc4efb842b13343171314669364a0a989ed65489389c2b9` matches the Revision SHA in `migration-log.md` and `audit-log.md`. F3 snapshot SHA `7761a30e9c3f1c2c60ff9487dfc2235fb65dae2181a941690c39a84d32b6ca9d` remains labeled as the pre-revision F3 hash.

This is a re-review after semantic FAIL 1 (`bright, image-forward` YAML/§4 cut). The suffix now lands. No new A/C/D defect.

## Verdict

**PASS**

## 1 A1 key paths (YAML `tokens.*` → portable DESIGN)

Every source YAML color / type / spacing / radius / shadow path is DESIGN dest ≥1 (easywallet trap: same number on another scale does not count). Source YAML is nested, so dotted `tokens.*` SRC = 0; the portable file writes the paths.

| path | DES | PRO |
|---|---:|---:|
| tokens.colors.primary / primary-pressed / primary-deep / primary-tint / primary-disabled | 9/4/1/1/1 | 1/0/0/0/0 |
| tokens.colors.canvas / ink / success / error / warning / info / point-gold | 1/4/1/3/1/1/1 | 1/0/0/0/0/0/0 |
| tokens.colors.gray-50 / 100 / 200 / 300 / 400 / 500 / 700 | 2/1/1/1/1/1/1 | 0 |
| tokens.typography.family.sans / family.mono | 2/1 | 1/0 |
| tokens.typography.display-hero / balance / display-lg / heading-lg / heading / subtitle / body-lg / body / body-sm / caption / amount-hero | 1 each (parent `heading`/`body` F-string also hits `-lg`/`-sm`) | 1/0/0/0/0/0/0/0/0/0/0 |
| tokens.spacing.sm / base / lg | 1/2/1 | 1/0/0 |
| tokens.rounded.sm / md / lg / xl / full | 2/2/3/2/3 | 1/0/0/0/0 |
| tokens.shadow.card / toast / dialog | 2/1/1 | 1/0/0 |

Hexes on those paths (DESIGN): `#ff0033` 13 / `#FF0033` 30, `#e0002e` 4 / `#E0002E` 12, `#cc0029` 1 / `#CC0029` 1, `#ffebef` 3 / `#FFEBEF` 6, `#ffb3c1` 1 / `#FFB3C1` 3, `#ffffff` 24, `#222222` 17, `#00b900` 2 / `#00B900` 3, `#ff8800` 1 / `#FF8800` 1, `#0088ff` 1 / `#0088FF` 1, `#ffb200` 2 / `#FFB200` 3, `#f5f5f5` 7, `#eeeeee` 5, `#e0e0e0` 5, `#cccccc` 5, `#999999` 4, `#767676` 8, `#555555` 3. A1a: unitless `1.38` / `1.29` / `1.42` / `1.4` / `1.44` / `1.5` / `1.63` / `1.57` / `1.54` kept as ratios; §3 `1.40` / `1.50` stay beside them; Amount Hero YAML none + §3 `tight` (`DESIGN.md` `:239`). A1b: `Primitive type: \`button\`` DES 4, `input` 2, `card` 3, `listItem` 1, `badge` 4, `tab` 2, `toast` 1, `dialog` 2, `toggle` 1. A1c: `prose-derived` DES 3 / PRO 6; `components_harvested` DES 0 / PRO 2 (sidecar).

Same-number unmerge in body (`DESIGN.md` `:130` / `:144`): `tokens.spacing.sm: 8` ≠ `tokens.rounded.sm: 8`; `tokens.spacing.base: 16` ≠ `tokens.rounded.lg: 16`; `tokens.spacing.lg: 24` ≠ `tokens.rounded.xl: 24` ≠ padding `0 24px`; `tokens.rounded.full: 9999` ≠ 10px badge. Same-hex unmerge (`:86` / `:887–888`): `primary-pressed` ≠ `error` (both `#e0002e`); `ink` ≠ Gray 900 (both `#222222`). YAML `use` 20/20 as `Token-set use:` DES 20. YAML font records dest 1 each: `16px/700` 3 / `15px/700` 1 / `16px/400` 2 / `12px/700` 4 / `10px/500` 1 / `14px/700` 1 / `14px/500` 1. YAML `active` `#ff0033 icon + label` DES 1 · `#ffffff thumb, #ff0033 text` DES 1.

Prior FAIL 1 landed. Source YAML `tokens.components.promo-card.use` is `Point campaigns, あげる/もらえる offers` (source `:65`). Source §4 Campaign / Promo Use is `Point campaigns, あげる/もらえる offers — bright, image-forward` (source `:289`). Portable Role `:500` now carries the longer §4 writing (lowercase Role prefix + suffix). Token-set use `:506` keeps the YAML string.

| needle | SRC | SIB | DES | PRO | LOG | AUD |
|---|---:|---:|---:|---:|---:|---:|
| `bright, image-forward` | 1 | 0 | 1 | 0 | 6 | 5 |
| `image-forward` | 1 | 0 | 1 | 0 | 8 | 7 |
| `Point campaigns, あげる/もらえる offers` | 2 | 0 | 1 | 0 | 5 | 3 |
| `full-bleed promotional image` | 1 | 0 | 1 | 0 | 0 | 0 |

## 2 Unique facts

`October 2018` SRC 2 / DES 1. `SoftBank` 4/2. `Yahoo! Japan` 2/1. `India's Paytm` 1/1. `100億円あげちゃうキャンペーン` 2/2. `¥10-billion` 2/1. `LY Corporation` 2/2. `PayPay銀行` / `PayPayカード` / `PayPay証券` each 1/2. `PayPayポイント` 2/3. `Toss (Korea)` 1/1. `Stripe` 1/1. `in-store QR` 1/2. `LINE-green` 1/2. `LINE × Yahoo Japan` 2/1. `cash-loving` 1/1. `That red is the brand; remove it and nothing is left` 1/1. `under two seconds` 1/1. `375px` 3/4. `~960px` 2/2. `36px+` 1/1. `1.5–1.65` 1/1. `y+40px` 1/1. `0.94` 1/1. `PayPay残高` 1/3. `80% opacity` 1/1. `60–64px` 1/4. standalone §9 `60px` kept beside the band. `56–64px` 1/1. `randomized on-screen keypad` 1/1. `48px wide, 56px tall` 1/1. `36px × 4px` 1/1. `22px circle` 1/1. `1.5px solid` 1/1. `linear-gradient(135deg,#FF0033,#E0002E)` 1/2. `Hiragino Kaku Gothic ProN` 1/2. `No third logo color exists` 1/2. Voice/product strings byte-exact, each DES ≥1: `ペイペイ` / `支払う` / `チャージ` / `送る` / `閉じる` / `コピーしました` / `お支払いが完了しました` / `まだ取引履歴がありません` / `条件に合う結果がありません` / `スマホひとつで かんたんお支払い` / `スマホひとつで かんたんに お支払いはPayPayで` / `登録は無料！最短1分` / `いますぐPayPayアプリをダウンロード` / `100ポイントもらえる！` / `あたり`.

## 3 Constraints / motion

Do 7 / Don't 7 kept (`#FF0033` primary money action; `#E0002E` error not brand red; full-screen payment success; `#000` text prohibition; ≥12px / pill). Durations `0ms` 7/7, `150ms` / `250ms` / `400ms` / `700ms` each 1/1, `300ms` 2/2. Signature motions 1–5 kept (`y+40px`, `0.94`, `prefers-reduced-motion` 1/1, never cross-fade money, static red success screen). Easing names kept; exact curves omitted (`cubic-bezier(0.0, 0.0, 0.2, 1)` SRC 1 / DES 0 / PRO 1, and the three sibling template curves the same). `cubic-bezier` as a word DES 1 is the omission sentence, not the values. B3 five-kind gate: `transition properties` DES 2, `animation name` DES 2, `reduced-motion behavior` DES 2. §14 twelve-row contract kept including `¥--` / `never a fake number` / `1.2s` / `~3s` / Disabled / Loading inside button. `No italics` 1/1. `safe-area` 1/1. `4-per-row` 1/1. `filter chips` 1/1. `4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px` 1/1.

## 4 Ungrounded surface

Scope names the two source surfaces only: live PayPay app DES 2, `https://paypay.ne.jp` DES 3. `375px` stays the app baseline (`Design baseline: 375px` DES 1); `max-width ~960px` stays marketing web (paypay.ne.jp) DES 2. `developer/merchant dashboards` SRC 1 / DES 1 (source §3 mono). `KYC` 1/1 (source Info Blue). `native-client` / `storefront` / `fin.ai` / `product application` / `mobile app` / `back-office` / `Named gaps` all SRC 0 / DES 0 / PRO 0. `App is mobile-only` 1/1 (source §8). `Pointer-web` DES 10 is hover-reason prose on controls the source already paints as hover/pressed, not a new product surface and not a measured value moved onto one.

## 5 Conflict policy

Same-hex / same-number roles unmerged throughout. YAML vs §4 keep-both on primary radius 24 vs 12 inline (`24px` (pill) on CTAs; `12px` on inline actions DES 1 at `:283`), balance fill vs gradient, tab inactive pair, segmented track/thumb 10/8, bottom-sheet top-only radius, §8 `60–64px` vs §9 `60px`. Unattributed `cubic-bezier` four values all omitted (names/uses kept). One policy vs sibling: source-body token set in DESIGN; sibling `#3895ff` / `#242323` / `55px` / `58px` / `#000000` stay provenance-only.

## 6 F2 list after F3

F3 added the live-computed close at `:208` and rewrote dest lines. The later FAIL-1 revision restored Role `:500` in place (line count 890 unchanged) and updated the YAML-components / §4 dest rows plus current SHA. Portable `derived editorial implementation inference` DES 39, `not PayPay-authored` DES 39, `separately published UI specification` DES 39. Log `39=39` (historical worker-close 38=38 remains labeled as before-state). Current SHA `ce427b53…` LOG 1 / AUD 1. F3 SHA `7761a30e…` LOG 2 / AUD 1, labeled as the F3 snapshot. Dest rows F3 rewrote still match: live-computed `:208`; B3 `:189` / `:885`; `tokens.rounded.full: 9999` DES 2 at `:144` / `:886`; `prose-derived` DES 3 at `:9` / `:167` / `:208`; homepage URL DESIGN dest 3 at `:9`(×2) / `:717`. Stale 38-count claims are AUD/LOG before-state only.

## 7 Deleted persona derivatives (D2 / D2a)

Source §13 three fictional archetypes. Portable Audience uses only the source header grouping `publicly described Japanese mobile-payment user segments` (DES 2). Primary tasks are captured labels `支払う` / `チャージ` / `送る` / `PayPay残高`, not persona goals. This review mentions the needles; absence is claimed of DESIGN/provenance (and of LOG for names), not of this file.

| needle | SRC | DES | PRO | LOG | AUD |
|---|---:|---:|---:|---:|---:|
| `ゆうき` / `Yuki` / `田中さん` / `Tanaka` / `あや` / `Aya` | 1 | 0 | 0 | 0 | 1 |
| `Tokyo` / `Osaka` / `Fukuoka` / `Shibuya` | 1 | 0 | 0 | 0 | 1 |
| `Office worker` / `Working parent` / `ramen shop` | 1 | 0 | 0 | 0 | 1 |
| `lives for the point campaigns` | 1 | 0 | 0 | 0 | 1 |
| `one tap from anywhere` / `under a second` / `mildly annoyed` | 1 | 0 | 0 | 0 | 0 |
| `confirmation sound` / `without squinting` / `izakaya` / `vending machine` | 1 | 0 | 0 | 0 | 0 |
| `auto-charge` | 1 | 0 | 0 | 2 | 0 |
| `this works.` | 1 | 0 | 0 | 1 | 1 |

`自動チャージ` DES 3 is the source Toggle Use, not the English persona gloss. No gitlab-style motivation sentence in Primary tasks.

## 8 C2

Primary money action opens loading (spinner recorded) and closes error/success because those results live on field/toast/screen / Payment-Complete Screen — a commit control, not a destination link. Secondary / Neutral / Text Button / Bottom Tab / Segmented / Toggle close loading and error (and success) with a role reason. Inputs open error and close loading. `| loading | applicable |` DES 1 (Primary only). `| loading | not-applicable |` DES 9. `| error | applicable |` DES 3 (Box / Filled / Amount). `| error | not-applicable |` DES 7. `| success | applicable |` DES 0. `| success | not-applicable |` DES 10. `does not commit an operation` DES 5. `not captured` as a not-applicable reason DES 0. `Interactive control` / `Button control` DES 0. No tab / toggle / destination link with loading open and error closed as “커밋 연산 없음”. Cards / dialogs / Payment-Complete Screen withhold kind and map (C4).

## 9 Sibling fusion

`14px radius with 16px padding` SRC 0 / SIB 0 / DES 0. `measures 1440px` all 0. `6px radius with` all 0. `58px height` all 0. `radius with` all 0. Sibling-only extras stay out of portable DESIGN: `#242323` 0/1/0/2, `#3895ff` 0/2/0/4, `55px` 0/1/0/2, `58px` 0/1/0/2, `#000000` 0/1/0/2, `playwright getComputedStyle` 0/1/0/2, `border-radius 6px` 0/1/0/1. Standalone `6px` (`grep -oE '(^|[^0-9])6px'`): SRC 0 / SIB 1 / DES 0 / PRO 2.

## 10 Surface transfer

App `375px` baseline stays the app (`Design baseline: 375px` DES 1; Distinctive traits mobile-first). Marketing `max-width ~960px` stays `Marketing web (paypay.ne.jp)` DES 2. Desktop breakpoint still says marketing site centered and app mirrored as a centered mobile column. Sibling live-DOM heading `55px` / button fill `#3895ff` / radius `6px` / height `58px` are not attached to the app token set. Hiragino-on-iOS / Noto-Yu-on-Android-and-web split stays in Scope `:11`. YAML tokens remain the source’s reconstructed app + paypay.ne.jp pair, not a Compact-style reassignment. Source `Compact (List Item)` DES 1 is the list-item component name, not an Intercom Compact surface.

## 11 YAML use ↔ § table use

Longer §4 / §3 writings kept. Prior FAIL 1 suffix is dest 1.

| record | SRC | DES |
|---|---:|---:|
| `Primary money action (支払う, チャージ, 送る)` | 1 | 1 |
| `Secondary action paired with a red primary` | 1 | 1 |
| `Low-emphasis / dismiss action` | 1 | 1 |
| `Inline tertiary action (もっと見る)` | 1 | 1 |
| `wallet balance hero on home` | 0 (source mixed-case) | 1 |
| `transaction history rows, settings list rows` | 0 (source mixed-case) | 1 |
| `home, points, QR-pay (center), promotions, account` | 1 | 1 |
| `the dominant overlay pattern` | 1 | 1 |
| `Wallet balance, the emotional center` (YAML) | 1 | 1 |
| `Wallet balance — the emotional center` (§3 em dash) | 1 | 0 |
| `Splash, campaign hero, big point moments` | 2 | 1 |
| `Payment amount on checkout/complete` | 2 | 1 |
| `send/charge amount entry` | 0 (source mixed-case) | 1 |
| `bright, image-forward` | 1 | 1 |
| `+100ポイント` | 1 | 2 |
| `Payment success is a full dedicated screen, never a toast` | 1 | 1 |
| `Boolean settings (通知, 自動チャージ)` | 1 | 1 |
| `neutral metadata badge` | 0 (source mixed-case) | 1 |

The em-dash Balance Display note is the same words as the YAML comma form (not an added term). Role lines lower-case the §4 Use; Token-set use keeps YAML capitalization. `Transaction, feature, and content cards` SRC 1 / exact-case DES 0 — Role `:471` is the lower-case form with `and` (DES `transaction, feature, and content cards` 1) beside YAML Token-set use without `and`.

## Notes (not FAIL)

- Source Brand bullet `Official brand red — the wordmark, app icon background, and all marketing key art` SRC 1 / DES 0 (`app icon` SRC 2 / DES 0; `marketing key art` SRC 1 / DES 0; `single non-negotiable brand asset` SRC 1 / DES 0 / AUD 1). Wordmark reverse and `#FF0033` as brand/CTA remain. Latin descriptive, not a published label and not a kakaot-style extra use term on a token-set row.
- `pill or large-radius rectangles` / `thumb-sized` / `oversized variant` SRC 1 / DES 0. Geometry landed as pill / 24px / 52px and Amount Hero.
- Template cubic-bezier values omitted to provenance (T2 convention); roles, durations, and signature motions stay.

Absence claims above are about DESIGN/provenance/source/sibling/log/audit, not this review (E2d). Post-write re-grep (REV is this file): `14px radius with 16px padding` REV 1 / DES 0 · `measures 1440px` REV 1 / DES 0 · `native-client`/`storefront`/`fin.ai`/`mobile app`/`Named gaps` REV 1 / DES 0 · `not captured` REV 1 / DES 0 · `ゆうき`/`Yuki`/`田中さん`/`Tanaka`/`あや`/`Aya` REV 1 / DES 0 · `#3895ff` REV 3 / DES 0 / SIB 2 / PRO 4 · standalone `6px` REV 7 / DES 0 / SIB 1 / PRO 2 · `bright, image-forward` REV 4 / DES 1.

REVIEW_DONE paypay PASS

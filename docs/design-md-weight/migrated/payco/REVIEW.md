# payco — T2-1 wave-27-form independent review (A/C/D only)

Rulebook v12. F3 (B2a·E2) not judged. Files confirmed with `find` before grep (`DESIGN.md`, `provenance.md`, `migration-log.md`, `audit-log.md`, source `web/references/payco/DESIGN.md`, sibling `web/references/payco/.verification.md`). Counts: `grep -oF -- <pat> <file> | wc -l` in bash `set +e`; empty pipeline = dest 0 (not zsh `no matches found`). `wc -w` under UTF-8 locale (C locale under-counts Hangul).

## Verdict

**PASS**

No A-series key-path loss, unique-fact drop, ungrounded surface, conflict-policy split, stale F2 list, persona-derivative promotion, C2 direction split, sibling-fragment fusion, cross-surface reassignment, or YAML-use truncation found in this pass.

## 1 A1 key paths (YAML `tokens.*` → portable DESIGN)

Source YAML is nested (dotted path SRC 0 by construction). Portable DESIGN names each path; values sit on that path, not on another scale's shared numeral (easywallet trap).

| path | DES | value on that path |
|---|---:|---|
| tokens.colors.primary / primary-legacy / heading / body / muted / placeholder / secondary / surface / divider / border / disabled-bg / disabled-text / canvas / on-primary | 4/2/2/2/1/1/2/1/1/1/1/1/3/2 | `#FF2233` / `#ff1414` / `#2d2d2d` / `#2a303a` / `#666666` / `#999999` / `#565960` / `#f4f6fa` / `#ededed` / `#d4d4d4` / `#dadada` / `#aaacae` / `#ffffff` ×2 keys |
| tokens.typography.family.sans / .mono | 3/3 | `NotoSans` DES 17; `monospace` DES 3 |
| tokens.typography.hero / section-sub / nav / subtext / button-lg / body / button-md / input `.size` | 1/1/1/1/1/2/1/1 | 52 / 32 / 24 / 24 / 18 / 16 / 13 / 12, unmerged at `:181` |
| tokens.spacing.xs / sm / md / base / lg / xl / section | 2/4/2/5/3/2/3 | unitless 10 / 20 / 25 / 32 / 48 / 115 / 159 in the spacing table |
| tokens.rounded.sm / md / lg / full | 3/2/2/2 | unitless 8 / 20 / 100 / 9999; `tokens.rounded.full: 9999` DES 1 |
| tokens.shadow.panel | 1 | `0 1px 0 rgba(0,0,0,0.1)` DES 2 beside §6 `.1` DES 2 |
| tokens.components.button-primary / secondary / ghost / disabled / cta-modern / input-standard | 1/2/3/2/3/3 | Primitive type `button` DES 5 + `input` DES 1 (A1b). YAML `18px / 700` DES 6; `14px / 400` DES 1; `12px / 400` DES 1. Padding `0 0` on primary; `16px 10px` DES 2; `0 0 0 20px` DES 3. `button-cta-modern.radius` DES 2; `button-ghost.fg` DES 3 |

A1a: YAML lineHeight stays ratio — `1.56` DES 1, `1.33` DES 1, `1.27` DES 2 — not rewritten as a replacement px. Parenthetical `50px` / `32px` are the source §3 spellings on the same rows. A1c: `omd` / `0.1` / `components_harvested` / `2026-06-09` DES 0 / provenance ≥1; `prose-derived` DES 2; `2026-06-03` DES 1. `FILL IN` DES 0. Hex inventory: every DESIGN hex is in the source (comm DES−SRC empty).

Same-number unmerge in body: `tokens.spacing.xs: 10` ≠ CTA `10px`; `sm: 20` ≠ input padding-left 20px; `md: 25` ≠ tab `25px`; `base: 32` ≠ input height 32px ≠ hero-subtext 32px; `lg: 48` ≠ `.bn_big` height 48px; `xl: 115` / `section: 159` ≠ section paddings; `rounded.sm: 8` ≠ `button-cta-modern.radius: 8px`; `nav` 24 ≠ `subtext` 24; `button-md` 13 ≠ error body 13px; `input` 12 ≠ inline-error 12px; canvas `#ffffff` ≠ on-primary `#ffffff`; primary `#FF2233` ≠ primary-legacy `#ff1414`; ghost YAML `#2d2d2d` ≠ §4 `#191a1c`.

## 2 Unique facts

`2015` SRC 1 / DES 2. `NHN Entertainment` 1/2. `Hangame` 1/2. `NAVER` 1/2. `NHN PAYCO` 2/4. `페이코 라이프` 1/2. `PAYCO Life` 1/1. `전자문서함` 1/2. `일상의 빈틈을 채우다` 2/2. `결제가 필요한 모든 순간, PAYCO 하세요.` 1/1. `실속있는 포인트, 편리한 결제, 간편한 금융.` 1/1. OG four-part line 1/2. `Fill the gaps in your daily life` 2/2. `Every moment you need to pay, PAYCO it.` 1/1. `Practical points, convenient payment, simple finance.` 1/1. `mass consumer` 1/2. `power users` 1/2. `office meal vouchers` 1/1. `campus IDs` 1/1. `without requiring a new card` 1/1. `skip link 120` 1/1. `sticky nav 99` 1/1. `date picker 100` 1/1. `modal 100+` 1/1. `opacity: .7` 1/1. `100–700` 1/2. `400/500/700` 1/2. `--brand-color` 2/5. `.kv_heading` 1/2. `.main_title` 1/2. `.bn_big` 1/4. `halt_apply` 1/3. `.snb_header_wrap` 1/2. `fp_nav` 3/4. `.sp_load` 1/3. `.error .desc a` 1/1. `198×48px` 2/3. `1026px` 3/6. `398 KB` 1/1. `keeping legibility sharp on white surfaces` 1/1. `nothing extraneous competes with the moment of payment or redemption` 1/1. Five principle titles each SRC 1 / DES 1. Voice adjectives `Practical, reassuring, familiar` 1/1.

## 3 Constraints / motion

§15 five bullets kept (`transition: width 0.5s` DES 1; `translate(-50%, -50%)` 2; `translateY(-50%)` 1; `Duration scale: 0.5s` 1; `Flat ease` 1; `no cubic-bezier custom curves found in the CSS bundle` 2). B3 five-kind phrase DES 1 at `:142`. §14 eight capture rows kept including Empty `#999` / false urgency, spinner `22×22px`, image `30×30px`, page-level error 24px `#565960` / 13px `#666`, inline `#FF2233` 12px, Success implicit, Skeleton `No explicit skeleton-loading CSS found` 1/1, Disabled `#dadada` / `#d2d2d2` / `#aaacae` / `cursor:default`. §9 unique values that had a receiving slot: `#f4f4f4` info panels 1/2; `20px–100px` pill badges 1/1; flat 0 for legacy button variants 1/1; `width 0.5s` 2/1. §7 six Do / five Don't kept. §8 `1280px` / `1100px` / `69px` / native-apps sentence kept.

## 4 Ungrounded surface

Contract surfaces stay homepage HTML + CSS bundle (`https://www.payco.com` DES 3; CSS bundle DES 4). `native apps` SRC 1 / DES 2 (source §8). Invented domains: `native-client` 0/0, `mobile app` 0/0, `iOS` 0/0, `Android` SRC 1 (persona only) / DES 0, `storefront` 0/0, `authenticated` 0/0, `product application` 0/0. Named gaps restate source omissions (success-screen / skeleton-loading CSS / cubic-bezier), not new domains. `every PAYCO surface` / `universal PAYCO` DES 1 each are refusals in B2a closes, not coverage claims.

## 5 Conflict policy

One policy throughout: keep-both, do not collapse. `#FF2233` vs `#ff1414`; YAML ghost `#2d2d2d` vs §4 `#191a1c`; `#666666` vs `#666`; `#999999` vs `#999`; unitless line-height vs §3 px; spacing step vs layout padding that share a numeral; `rounded.sm: 8` vs component `8px`. No mix of merge-one / drop-one on the same dual writing.

## 6 F2 list after F3

F3 added adjacent closes at `:97` / `:181` / `:192` and rewrote dest rows. Portable `derived editorial implementation inference` DES 26, `not PAYCO-authored` DES 26, `separately published UI specification` DES 26. Provenance inventory 26 data rows at 141–166. Dest rows still match: `#FF2233` DES 14; `prose-derived` DES 2 at `:9`; `https://www.payco.com` DES 3 at `:9`/`:21`; `1.27` DES 2 at `:177`; `198×48px` DES 3 at `:22`/`:59`/`:219`; YAML Token-set use at 217/240/260/282/306/325; loading/error/success blocks at 227–229 / 248–250 / 268–270 / 291–293 / 315–317; `error | applicable` DES 1 at 316; `tokens.rounded.full: 9999` DES 1 at 126; B3 five-kind DES 1 at 142; `wc -w` 5650 (UTF-8).

## 7 Deleted persona derivatives (D2 / D2a)

Source §13 four illustrative archetypes. Portable body does not carry names, ages, cities, role labels, or motivations. Counts below are DESIGN / provenance / migration-log; this review file mentions the needles (E2d: absence is claimed of DESIGN/provenance/log, not of this file). Audit-log mention of the labels is F3's dest-0 check, not a portable re-host.

| needle | SRC | DES | PRO | LOG |
|---|---:|---:|---:|---:|
| 지민 / 소연 / 영호 / 혜진 | 1/1/1/1 | 0 | 0 | 0 |
| Office Worker | 1 | 0 | 0 | 0 |
| University Student | 1 | 0 | 0 | 0 |
| Self-Employed Merchant | 1 | 0 | 0 | 0 |
| Document-Conscious Parent | 1 | 0 | 0 | 0 |
| under two taps | 1 | 0 | 0 | 0 |
| mid-range Android | 1 | 0 | 0 | 0 |
| neighbourhood bakery | 1 | 0 | 0 | 0 |
| contacted by an insurer | 1 | 0 | 0 | 0 |
| payment barcode | 1 | 0 | 0 | 0 |
| meal-voucher / 식권 / 캠퍼스 | 1/1/1 | 0 | 0 | 0 |
| QR code terminal | 1 | 0 | 0 | 0 |
| settlement summaries | 1 | 0 | 0 | 0 |
| insurance policies | 1 | 0 | 0 | 0 |

Primary tasks name the OG line, `.bn_big` 198×48px, and Standard Input on the inspected homepage — not those needs. Audience uses source §11 `mass consumer` / `power users`. `office meal vouchers` / `campus IDs` are source §11, not §13. `one tap away` is source §1, not `under two taps`.

## 8 C2

Five interactive maps. `| loading | applicable |` DES 0. `| error | applicable |` DES 1 (Standard Input inline caution — field role). `| success | applicable |` DES 0. `| loading | not-applicable |` DES 5. `| error | not-applicable |` DES 4. `| success | not-applicable |` DES 5. Modern CTA Link closes both loading and error as a destination link (`Destination link` DES 1). Primary / Dark Secondary / Ghost close both with a no-in-place-operation reason. `not captured` as a not-applicable reason DES 0. `Interactive control` / `Button control` DES 0. YAML `type: button` kept on halt_apply (A1b); the destination-link reading is the C2 role.

## 9 Sibling fusion

`14px radius with 16px padding` SRC 0 / SIB 0 / DES 0. `measures 1440px` all 0. `8px radius with` 0. `198px` SRC 0 / SIB 1 / DES 0 / PRO 1 (sibling `.bn_big { width: 198px`; portable keeps source `198×48px`). Sibling-only not promoted into DESIGN: `19,911` 0/1/0/1; `398,170` 0/1/0/1; `나눔고딕` 0/1/0/1; `돋움` 0/1/0/1; `110px` 0/1/0/2; `line-height: 32px` 0/1/0/2 (input); `bottom_area` / `btn_link` / `payco-cdn.cdn.toastoven.net` / `Pretendard-Bold.eot` / `12,568` each DES 0 / PRO 1. `1.56 (50px)` / `1.33 (32px)` are YAML ratio + source §3 px for the same type role, labeled as keep-both, not a sibling fusion.

## 10 Surface transfer

Colors, type, radius, and layout figures stay on homepage HTML + `common.css`. Native-apps sentence is the source's own layout clause, not a retargeting of 1026px / `#FF2233` onto an app. GNB `4px solid #ff1414` stays GNB. Sidebar 184px stays `.snb_header_wrap`. Input `32px` / `20px` / `#d4d4d4` stays the Standard Input control. Sibling GNB wrap `110px` and input `line-height: 32px` stay ledger-only.

## 11 YAML use ↔ § table use

Long YAML `use` and longer §3/§4 spellings both kept.

| record | SRC | DES |
|---|---:|---:|
| Hero / section titles | 1 | 3 |
| Section subtitles | 1 | 2 |
| Navigation links | 1 | 2 |
| Hero subtext | 2 | 2 |
| Large button label | 2 | 2 |
| Standard body text | 1 | 2 |
| Medium button label | 2 | 2 |
| Input value text | 1 | 2 |
| Primary page-level CTA, 48px height | 1 | 1 |
| Dark secondary action, 48px height | 1 | 1 |
| Ghost / secondary action with grey border | 1 | 2 |
| Inactive button state | 1 | 1 |
| Modern CTA link button, 51px height | 1 | 1 |
| Standard form input, 32px height, #d4d4d4 border | 1 | 1 |

§3 extras beside those uses: `.kv_heading` / `.main_title` / `#fff` / `#000` / `#191919` / line-height 50px / 32px / 48px / 39px each DES ≥1. No kakaot-style cut to the shorter record.

## Notes (not FAIL)

- Source §3 label `Korean primary` SRC 1 / DES 0; the family `NotoSans KR` DES 3 and its promotional/section use remain.
- Source §3 headings `Hero heading` / `Section title` SRC 1 / DES 0; selectors `.kv_heading` / `.main_title` and both colors remain under YAML `Hero / section titles`.
- §9 prompt-only phrasing `matching background` / `white text on brand red` / `fall back to Apple SD Gothic Neo` DES 0; the §4 border `#FF2233`, primary `#ffffff` on `#FF2233`, and the legacy Apple SD Gothic Neo stack already live in Components / Family (A3).
- Primary-task bullets say `on that homepage` DES 2; the qualifier at `:19` still names homepage and CSS controls together.

REVIEW_DONE payco PASS

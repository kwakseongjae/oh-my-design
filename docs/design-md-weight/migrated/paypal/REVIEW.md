# paypal — T2-1 wave-27-form independent review (A/C/D only)

Rulebook v12. F3 (B2a·E2) not judged. Files confirmed with `find` before grep: migrated `{DESIGN.md,provenance.md,migration-log.md,audit-log.md}`, source `web/references/paypal/DESIGN.md`, sibling `web/references/paypal/.verification.md`. Counts: `grep -oF -- <pat> <file> | wc -l` in bash `set +e`. Empty pipeline = dest 0 (not zsh `no matches found`). `grep -c` not used. Absence claims in this file are about those six paths, not about this review (E2d).

Post-revision corpus: portable DESIGN SHA-256 `07767026eb83fdd40158b5305aa8c69baeb5afbe4e0ae6e2d96cca2323aa396c`; provenance `b1d40169edcb1bf497d9630d2c548deab7e1382c40ea77dc2f423c32112fea9c`; `wc -w` 8,258. Prior FAIL 1 (Input §4 Use cut) is in this SHA as restored.

## Verdict

**PASS**

No A/C/D value-series defect on the current three artifacts. The named kakaot-form cut (`Login email/phone, form fields`) is dest 1 on portable DESIGN.

## 1 A1 key paths (YAML `tokens.*` → portable DESIGN)

Every source YAML path is DESIGN dest ≥1 (easywallet trap: same numeral on another scale does not count). Source YAML is nested, so dotted `tokens.*` SRC = 0; the portable file writes the paths.

| path | DES | PRO |
|---|---:|---:|
| tokens.colors.primary | 7 | 3 |
| tokens.colors.primary-light | 4 | 1 |
| tokens.colors.canvas | 2 | 1 |
| tokens.colors.on-primary | 2 | 1 |
| tokens.colors.ink | 1 | 1 |
| tokens.colors.link | 2 | 1 |
| tokens.colors.muted | 1 | 1 |
| tokens.colors.surface-warm | 1 | 1 |
| tokens.colors.surface-grey | 1 | 1 |
| tokens.colors.surface-light-blue | 1 | 1 |
| tokens.colors.accent-sky | 4 | 0 |
| tokens.colors.accent-pale-sky | 1 | 1 |
| tokens.colors.border-default | 1 | 1 |
| tokens.colors.success | 1 | 1 |
| tokens.colors.error | 1 | 1 |
| tokens.typography.family.display / .ui / .fallback | 1/1/1 | 1/1/0 |
| tokens.typography.display-hero / display-lg / section / body / nav / button / caption | 1 each | 1/1/1/0/0/0/0 |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | 2/2/2/1/2/2/2/2 | 0 |
| tokens.rounded.sm / md / lg / full | 3/3/3/3 | 0 |
| tokens.shadow.card / elevated | 2/2 | 0 |
| tokens.components.button-primary / outline-dark / outline-light / white / nav-tab / input-form / card-surface / badge-status / cookie-dialog | 1 each | 1 each |

Hexes on those paths (DESIGN): `#002991` 11, `#60cdff` 13, `#ffffff` 15, `#000000` 13, `#0070e0` 8, `#686a6d` 3, `#f1efea` 1, `#edf0f2` 1, `#f0f2f9` 2, `#b8e9ff` 1, `#e6e7e8` 4, `#007a56` 1, `#c0212b` 1. A1a: unitless `1.10` / `1.15` / `1.20` / `1.40` / `1.50` kept as ratios. A1b: `Primitive type: \`button\`` DES 4, `tab` 1, `input` 1, `card` 1, `badge` 1, `dialog` 1; Cookie Consent and Log In have no primitive type (`not in the token set` DES 5). A1c: `live-extract` DES 1 / PRO 5; `components_harvested` DES 0 / PRO 2 (sidecar).

Same-number unmerge in body (`DESIGN.md` `:118` / `:131`): `tokens.spacing.xs: 4` ≠ `tokens.rounded.sm: 4`; `tokens.spacing.sm: 8` ≠ `tokens.rounded.md: 8`; `tokens.spacing.md: 16` ≠ card `16px` and ≠ body `16px`; `tokens.rounded.lg: 25` ≠ tab `104px`; `tokens.rounded.full: 1000` ≠ cookie-dialog local full geometry as a second step. Same-hex unmerge (`:101`): `primary-light` ≠ `accent-sky` (both `#60cdff`); `canvas` ≠ `on-primary` (both `#ffffff`); `#0070e0` ≠ active-tab `rgb(0, 0, 238)`.

YAML `use` 16/16 DES ≥1 (7 type-role + 9 component). `node scripts/check-yaml-use-landing.mjs paypal` → use 16/16 OK (run result, not semantic adequacy).

## 2 Unique facts

`1998` SRC 1 / DES 1. `Peter Thiel` / `Max Levchin` / `Luke Nosek` / `Ken Howery` each 1/1. `Confinity` 2/2. `Palo Alto` 1/1. `X.com` 1/2. `Elon Musk` 1/1. `2000` 1/1. `eBay` 2/2. `$1.5 billion` 1/1. `2015` 2/1. `NASDAQ: PYPL` 1/2. `San Jose` 3/2. `200+ countries` 1/2. `25+ currencies` 1/2. `400 million` 1/2. `Alex Chriss` 2/2. `cryptography-focused` 1/1. `moving money should be as simple as sending email` 1/1. `network effect is its moat` 1/1. Closing typographic-argument sentence kept in Scope `:13`. Voice samples byte-exact: `Pay, send, and save smarter` 6/6; `Take your business further, faster` 3/4; `PayPal Open` 5/6; `Real stories. Real wins.` 2/2; `Pay now or pay over time. It's your choice.` 1/1; `The tools your business runs on. In one place.` 1/1; `See How You're Safe.` 1/1. `democratizing financial services` 1/1. `You're all set.` 1/2. `Send your first payment` 1/2. `Insufficient funds` 1/2. `Sent. [amount] to [name].` 1/2. `Century Gothic` 3/4. `blue-400-plate` 2/1. `3px black border` 1/2. `~96px` 1/3. `5 instances` 1/1. `No celebration animation` 1/1. `wordmark animates into a ring` 1/1. HTML-comment `bgFreq` / `×12` DESIGN 0 / PRO 2 (ledger, not portable tokens).

## 3 Constraints / motion

Do 8 / Don't 7 kept (`16px or 24px radius` 1/1; `weight 700 or lower` 1/1; `Don't mix warm and cool` 1/1; `#003087` 3/4; `#0070ba` 1/2). Durations `0ms` 4/4, `120ms` / `200ms` / `300ms` each 1/1. `scale(1.02)` 1/5. `prefers-reduced-motion` 1/1. `two-letter monogram` 1/1. Easing names kept; exact curves omitted (`cubic-bezier(0.2, 0.6, 0.25, 1)` SRC 1 / DES 0 / PRO 0, and the two sibling curves the same). `cubic-bezier` as a word DES 6 is the omission/B3 sentence, not the values. B3 five-kind gate at `:170` (`transition properties` DES 2). §14 ten-row table kept including Disabled and Skeleton. Collapsing `96px → 48px` 1/2; `hamburger` 1/1; `~56px` 2/2; `1200px` 1/2; `100vw` 1/1; `44px` 1/1. `There is no headline at 600 or 700` 1/1.

## 4 Ungrounded surface

Scope names the two source URLs only. `Developer surfaces` / `Merchant surfaces` SRC 1 / DES 1 (source §10 voice table, not new domains). `native application` SRC 0 / DES 0 / LOG 1 (log dest-0 check). `back-office` 0/0/1. `product application` 0/0/1. `mobile app` 0/0/0. `storefront` 0/0/0. `native-client` 0/0. `measures 1440px` 0/0/1. `iOS` / `Android` / `fin.ai` all DES 0. Portable `native` DES 1 is source §8 `mobile-native` (`DESIGN.md` `:552`). Named gaps are unnamed values (easing digits, `focus-visible` paint, hover paint, C4 maps, five-kind motion), not new domains.

## 5 Conflict policy

Same-hex roles unmerged throughout. Unattributed `cubic-bezier` three values all omitted (names/uses kept). Card `16px` stays local, not a YAML rounded step. Cookie YAML `#ffffff` is not merged with §4 tertiary `rgba(255, 255, 255, 0.7)`. One policy: YAML token-set over sibling extras. Nav inactive sibling `rgb(0, 0, 238)` is not copied onto YAML `fg: #000000`.

## 6 F2 list after F3

F3 raised closes 26→29; Input Body-use insert then shifted later dests +1. Portable `derived editorial implementation inference` DES 29, `not PayPal-authored` DES 29, `separately published UI specification` DES 29. Qualifier lines: 9, 11, 13, 19, 28, 32, 44, 54, 67, 83, 118, 131, 142, 146, 186, 194, 198, 215, 224, 231, 248, 377, 453, 479, 499, 509, 558, 581, 615. Log dest rows match the current file: Cookie Consent `:451`–`:475` / B2a `:453`; Log In `:479`/`:485`; Sky `:497`–`:504` / B2a `:499`; Input Body use `:388`; `Primitive type: \`badge\`` `:419`; `dialog` `:433`; type roles `202–209`; type rules `217–220`; breakpoints `536–539`; touch `543–545`; collapsing `549–553`; B3 `:170`; Named gaps `:615`. Current SHA matches the revision block. Stale worker dests (`449–473`, `536–541`, `8,116`, `No sibling file`) are AUD before-state only. Sibling path `web/references/paypal/.verification.md` DES 0 / PRO 1 / LOG 4.

## 7 Deleted persona derivatives (D2 / D2a)

Source §13 four fictional archetypes. Portable Audience uses only the source header grouping. Primary tasks are captured labels/URLs. This review mentions the needles; absence is claimed of DESIGN/provenance/log/audit, not of this file.

| needle | SRC | DES | PRO | LOG | AUD |
|---|---:|---:|---:|---:|---:|
| Amara / Osei / David Lin / Priya / Mehta / Marcus / Rodriguez | 1 each | 0 | 0 | 0 | 0 |
| Atlanta / Houston / Chicago | 1 each | 0 | 0 | 0 | 0 |
| Venmo | 1 | 0 | 0 | 0 | 0 |
| freelance photographer | 1 | 0 | 0 | 0 | 0 |
| outdoor gear | 1 | 0 | 0 | 0 | 0 |
| dispute resolution | 1 | 0 | 0 | 0 | 0 |
| PayPal Business Dashboard | 1 | 0 | 0 | 0 | 0 |
| card number | 1 | 0 | 0 | 0 | 0 |
| energetic | 1 | 0 | 0 | 0 | 0 |
| Series-B | 1 | 0 | 0 | 0 | 0 |
| fraud protection | 1 | 0 | 0 | 0 | 0 |
| split dinner | 1 | 0 | 0 | 0 | 0 |
| abandon carts | 1 | 0 | 0 | 0 | 0 |
| checkout pages that I trust | 1 | 0 | 0 | 0 | 0 |
| Engineering director | 1 | 0 | 0 | 0 | 0 |
| API | 1 | 0 | 0 | 0 | 0 |
| peer-to-peer senders | 1 | 2 | 1 | 1 | 1 |
| online shoppers | 1 | 2 | 1 | 1 | 1 |
| small merchants | 1 | 2 | 1 | 1 | 1 |
| enterprise checkout integrators | 1 | 2 | 1 | 1 | 1 |

`San Jose` DES 2 is §11 HQ narrative, not the dropped archetype city. `wallet` DES 3 is §11 digital-wallet sentence, principle 3 consumer-wallet, and §14 personal-wallet empty row.

## 8 C2

Nine mapped controls. `| loading | applicable |` DES 0. `| success | applicable |` DES 0. `| error | applicable |` DES 1 (Input Form only — form validation). `| loading | not-applicable |` DES 9. `| error | not-applicable |` DES 8. `| success | not-applicable |` DES 9. Destination CTAs, tab, play trigger, cookie preference-write, and Log In close loading and error together. No control opens loading while closing error as "no commit". `Interactive control` / `Button control` DES 0. `not captured` as a not-applicable reason DES 0. `card-surface` / `badge-status` omit kind and map (C4). `Kind: interactive` DES 9 = four buttons + tab + input + cookie-dialog + cookie tertiary + Log In.

## 9 Sibling fusion

Sibling-only strings not promoted (SRC 0 / SIB ≥1 / DES 0 / PRO 0 unless noted): `Shop in stores and online` 0/1/0/0; `Get rewards from the brands you love` 0/1/0/0; `55.3393px` 0/1/0/0; `99.4464px` 0/2/0/0; `67.1071px` 0/1/0/0; `45.4643px` 0/1/0/0; `13.9286px` 0/2/0/0; `17.8571px` 0/2/0/0; `100vw × 900px` 0/2/0/0; `900px` 0/2/0/0; `2026-06-23` 0/1/0/0; `fgFreq` 0/1/0/0; `text-section` 0/1/0/0; `H3 "Pay in 4"` 0/1/0/0; `1789` 0/1/0/0. `14px radius with 16px padding` all 0. `measures 1440px` all 0 except LOG 1 (dest-0 check). Portable live figures stay the source HTML-comment rounding (`99.4px` SRC 2 / DES 5; `13.93px 32.86px` SRC 1 / DES 4), not sibling high-precision.

## 10 Surface transfer

Home hero `99.4px` on `#60cdff` stays on `Pay, send, and save smarter`. Merchant H2 `67.1px` stays on `Take your business further, faster`. `PayPal Open` 99.4px is not given the sibling-only white-bg (`on white bg` SRC 0 / SIB 1 / DES 0). Provenance Capture selectors attach those rows to home / merchant/business as the source voice samples do. CTA `13.93px 32.86px` is copied onto all four YAML `14px 33px` button slots, including Button White (`DESIGN.md` `:257` / `:283` / `:308` / `:334`). The HTML-comment parenthetical names `Sign Up` / `Browse Offers` / `Send Money` only; Play video is a separate inspect row without padding. YAML and §4 already put `14px 33px` on `button-white`, so this is the live rounding of that shared token, not an intercom.com→Compact/fin.ai product move. Not a defect.

## 11 YAML use ↔ § table use

Prior FAIL 1 restored. Source YAML `tokens.components.input-form.use` `Login and form inputs, focus ring #0070e0` (source `:53`) and source §4 Inputs Use `Login email/phone, form fields` (source `:188`) are both on Input Form: Token-set use `:387` and Body use `:388`.

| needle | SRC | SIB | DES | PRO | LOG | AUD |
|---|---:|---:|---:|---:|---:|---:|
| `Login email/phone, form fields` | 1 | 0 | 1 | 0 | 6 | 3 |
| `Login email/phone` | 1 | 0 | 1 | 0 | 7 | 4 |
| `email/phone` | 1 | 0 | 1 | 0 | 9 | 7 |
| `form fields` | 1 | 0 | 1 | 0 | 7 | 5 |
| `Login and form inputs, focus ring #0070e0` | 1 | 0 | 1 | 0 | 2 | 2 |
| `Body use:` | 0 | 0 | 9 | 0 | 1 | 3 |
| `Token-set use:` | 0 | 0 | 9 | 0 | 0 | 1 |

Long YAML `use` kept for all 16 token-set strings. §4 Body use kept for the four buttons, card, badge, cookie tertiary, Log In, and Input. Nav keeps the longer YAML `Top nav section tabs (Personal / Business)` DES 2; shorter §4 `Personal / Business top-level tabs` DES 0 — not the kakaot "chose the shorter record" form. Other §3 Notes (`H2 feature headings`, `H3 product feature subheads`, `All pill CTA buttons`, `Tab navigation`, `viewport-relative size`) DES 0; that column is Notes, not Use; YAML type-role `use` and live H2 inspect lines remain. `H3` SRC 1 / DES 0 / PRO 0 / LOG 0. Not a Use-pair cut.

## Notes (not FAIL)

- `12px Plain weight 400` SRC 1 / DES 0; YAML `12px / 400 Plain` DES 1 (spelling, same values).
- `Accept` DES 2 is `Accept/decline writes a preference` in C2 reasons (`accept/decline` DES 2), not the sibling cookie button label `Accept` (SRC 0 / SIB 1 / DES 0 as a quoted label).
- Cubic-bezier digits omitted from portable Motion with names/uses/B3 kept (unattributed source §15).

REVIEW_DONE paypal PASS

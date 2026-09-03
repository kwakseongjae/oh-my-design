# plaid — T2-1 wave-27-form independent review (A/C/D only)

Rulebook v12. F3 (B2a·E2) not judged except item 6 (F2 list freshness after F3). Files confirmed with `find` before grep: migrated `{DESIGN.md,provenance.md,migration-log.md,audit-log.md}`, source `web/references/plaid/DESIGN.md`, sibling `web/references/plaid/.verification.md` (dotfile, path written directly). Counts: `grep -oF -- <pat> <file> | wc -l` with `setopt NO_NOMATCH`. Empty pipeline = dest 0 (not zsh `no matches found`). `grep -c` not used. Absence claims in this file are about those six paths, not about this review (E2d).

Line counts: source 472, sibling 62, DESIGN 595, provenance 245, migration-log 83, audit-log 87.
SHA-256: source `cd5ad18e3947ca6bdb88bc62b7e2e9ab1938f0695dbdc286c12836437c0a45a4` (matches the log); sibling `b2530ddb7ef37401e421ecdcbcc466c18b65a89f8a9c8f278039b14d627b1111` (matches the log); DESIGN `20a8a796805275dd7b555af47a76efa965af5f38afe01239907af41ac2180f29`; provenance `878ddd3a9e0ee3e8e96d65d399c6806a25bb67ec82896bead0111c85f6806ef8`.

## Verdict

**PASS**

No A-series key-path loss, unique-fact drop, ungrounded surface, conflict-policy split, stale F2 list, persona-derivative promotion, C2 direction split, sibling-fragment fusion, cross-surface reassignment, or YAML-use truncation found in this pass.

## 1 A1 key paths (YAML `tokens.*` → portable DESIGN)

Source YAML is nested (dotted path SRC 0 by construction). Portable DESIGN names each path; values sit on that path, not on another scale's shared numeral (easywallet trap).

| path or labeled form | DES | notes |
|---|---:|---|
| tokens.colors.primary / navy-deep / indigo-deep / ink-teal | 1/1/1/1 | `#02294b` 13 · `#00172e` 9 · `#0d0d3f` 7 · `#012e37` 11 |
| YAML `tokens.colors.ink` / ink-button / charcoal / blue / link / slate / green | 1/1/1/1/1/1/1 | unsuffixed `ink` is the backticked key, not the `ink-teal`/`ink-button` prefix (`tokens.colors.ink` grep -o dest 3) |
| tokens.colors.canvas / on-primary / surface / surface-grey / hairline / hairline-alt | 1/2/2/1/2/1 | unsuffixed surface/hairline named as YAML keys beside the `-grey`/`-alt` children |
| tokens.typography.family.display / .body | 1/1 | `Plaid Sans` 38 · `Cern` 19 |
| tokens.typography.display-hero / display-dark / section / page-title / subhead / card-title / stat / eyebrow / body / button-sm | 1 each | `tokens.typography.button` grep -o dest 2 (prefix of `button-sm`); unsuffixed button is in the path list |
| tokens.spacing.xs: 4 / sm: 8 / md: 12 / base: 16 / lg: 24 / xl: 32 / xxl: 48 / section: 64 | 1/3/3/3/2/1/1/1 | unitless steps named on the spacing path |
| tokens.rounded.sm: 6 / md: 8 / lg: 12 / full: 9999 | 2/3/3/3 | not the spacing 6/8/12 |
| tokens.shadow.none | 1 | live `box-shadow: none` dest 3 |
| tokens.components.button-primary-dark / light / outline / ghost / nav-link / menu-item / card-product / card-dark / input-text / badge-eyebrow | ≥2 each | parent paths named on the owning record |
| type: button / tab / listItem / card / input / badge | 1/1/1/1/1/1 | A1b. `Primitive type: \`button\`` 4 · `tab` 1 · `listItem` 1 · `card` 2 · `input` 1 · `badge` 1 |
| YAML `active: "text #012e37"` | 1 | beside §4 Active `#012e37` |

A1a: YAML lineHeight stays ratio — `YAML \`1.12\`` / `1.08` / `1.10` / `1.40` / `1.33` / `1.30` / `1.50` dest 1 each; `YAML \`1.0\`` dest 4 (page-title / eyebrow / button / button-sm). Parenthetical `85px` / `76px` / `48px` / `36.4px` / `24px` stay the §3 spellings on the same rows. Tracking `YAML \`-3.4\`` / `-2.8` / `-2` / `-0.5` / `2` dest ≥1. Live inspect `58px` dest 3 is a third writing, not a replacement for YAML `70` or `60`.

A1c: `live-extract` DES 0 / PRO 4; `components_harvested` DES 0 / PRO 3 (sidecar). Token note "Bright gradient stops live in prose/components only — never as a solid token role" DES 1 / PRO 1.

Same-number unmerge in body (`DESIGN.md` `:126` / `:139`): `tokens.spacing.sm: 8` ≠ `tokens.rounded.md: 8`; `md: 12` ≠ `rounded.lg: 12`; `base: 16` ≠ body 16px ≠ eyebrow 16px; `lg: 24` ≠ card-title 24px; mega-menu `13px` is component padding, not a YAML spacing key. Same-hex: canvas `#ffffff` ≠ on-primary ≠ Outline Pill fill ≠ Product Card fill ≠ Text Input fill; `ink` `#111111` ≠ `ink-button` `#111112`; `#02294b` unmerged across dark-section / Dark Feature Card / Primary Pill / input border. Full-round writings unmerged: §1 `100px` / `999px` (dest 10 / 3) vs YAML/§5 `9999px` (dest 5) vs component `100px`.

YAML `use` 11 type + 10 component = 21/21 DES ≥1, verbatim in Token-set use. Longer §4 Role strings dest 1 each (`Hero CTA on dark/navy bands`, `Header conversion CTA`, `Form text field — navy hairline border, no shadow`, nav/menu labels). Ghost YAML has no padding; §4 `0px 18px` DES 2 kept beside that gap (`:359`).

Non-defect (not the kakaot short-side cut): YAML font `"20px / 600 Plaid Sans"` DES 0 / PRO 0; §4 `"20px / 600 / Plaid Sans"` SRC 1 / DES 1. Same for `16px / 600`, `14px / 600`, `16px / 400`, `16.5px Cern` vs `16.5px / Cern`, `16px / 800`. The extra-slash form is the source §4 writing (longer delimiter); size / weight / family all sit on the owning component.

## 2 Unique facts

`2013` SRC 2 / DES 1. `Zach Perret (CEO)` 1/1. `William Hockey` 2/1. `WCAG 2.1 AA` 4/3. `few lines of code` 1/1. `open finance` 1/2. `navy-and-gold` 1/1. `shadow-stacked` 1/1. `12,000 financial institutions` 1/1. `1 in 2 banked adults in the U.S.` 1/1. `Over one million daily connections` 1/1. `Bank payments designed for fast connections.` 1/1. `Turn data into revolutionary financial products` 4/4. `Powered by the largest financial network` 4/5. `Everything you need to build intelligent finance` 2/2. `Threads` 7/47. `background-clip: text` 1/3. `Averta` 1/4. `medium.com/plaid-design` 1/1. `threads.plaid.com/brand` 1/2. `behind-the-scenes-with-design` 1/1. `Auth, Identity, Balance, Transfer, Signal, Protect, Identity Verification` 1/1. `developer-first` 1/1. `accordion` 1/1. `swipeable` 1/1. `2-up` 1/1. `1024-1440px` 1/1. `640-1024px` 1/1. `<640px` 1/1. rem companions `4.75rem` / `4.38rem` / `4.00rem` / `3.75rem` / `2.25rem` / `1.63rem` / `1.00rem` / `1.25rem` / `1.50rem` dest ≥1. `Explore pills` 2/1. `composable building blocks` 2/1. `account-linking` DES 1 (hyphenated §11 form). `The anchor of the system` 1/1. `Warmer than navy, distinctly Plaid` 1/1. `Customer-story` 1/1. `plain, confident, and developer-respectful` 1/1. `austere imperatives` 1/1. `Plaid tracks very tight` 1/1. `sharp/square corners` 1/1. `nothing is linked yet` 1/1. `navy pill actions fade` 1/2. `Start building` 6/7. `Read the docs` DES 8. `Contact sales` 7. `See all products` 7. `Log in` 5. `Use cases` / `Industries` / `Developers` / `By use case` / `By industry` / `ALL PRODUCTS` dest ≥1. `1M+` 2/2. `headless bot` 1/1. `404` 1/1.

HTML-comment `IDV` SRC 1 / DES 0 / PRO 1 — ledger of the comment abbreviation; portable body keeps the §11 full name. Tier-2 `No designs found for 'plaid'` DES 0 / PRO 1 (E1).

§9 prompt-only adverbs not treated as A3 token loss: `right-aligned` SRC 1 / DES 0 / PRO 0; `white header` 1/0/0; `White pill CTA` 1/0/0. Header Dark Pill already has `#111112`, `100px`, `39px`; Primary Pill already has `#02294b` fill. `radial gradient` SRC 2 / DES 1 (Scope keeps the §1 writing).

## 3 Constraints / motion

Do 8 / Don't 8 dest 1 each under Application rules / Avoid. `Air over density` / `Flat segmentation` / `Color rationing` dest 2. Type-hierarchy four stems dest 1 each. §14 nine-row table dest 1 each including `Something went wrong` and `Required`. Durations `120ms` DES 3 · `200ms` 1 · `320ms` 1; `motion-fast` 5. Easing *names and uses* kept; exact curves omitted: `cubic-bezier(0.2, 0.6, 0.25, 1)` DES 0 / PRO 1; `cubic-bezier(0.4, 0.0, 1, 1)` DES 0 / PRO 2; `cubic-bezier(0.25, 0.1, 0.25, 1)` DES 0 / PRO 1. `prefers-reduced-motion: reduce` 1/1. `No bounce or spring` 1/1. B3 five-kind gate at `:173`: `transition properties` DES 1, `animation name` DES 2, `reduced-motion behavior` DES 1. §8 collapsing / touch / image rules dest 1 (`weight 500 maintained`, `capable browsers`, `~50px` DES 2, nav `48px` on the §8 writing at `:386` and `:515`). `box-shadow: none` 2/3.

## 4 Ungrounded surface / item 10

Scope binds tokens to `https://plaid.com/` (hero gradient H1, nav, pill CTAs, dark sections) and `https://plaid.com/products/` (H1/H2/H3 navy headings, mega-menu rows, dark-section Explore pills, input border) — the source footer's parentheticals, not swapped. Text Input Observed "Captured on the products page" (`:466`). Home section H2 inspect `58px` / `500` / `rgb(0,23,46)` stays on "Powered by the largest financial network", not moved onto products 60px or YAML 70. Display Dark stays "White H2 on dark sections" — sibling's light-section 70px `#02294b` H2 is not imported. `1440px` DES 1 is source §8 `1024-1440px`, not sibling viewport `1440×900` (DES 0 / PRO 1).

Invented domains: `native-client` / `storefront` / `authenticated` / `parity` / `mobile app` / `iOS` / `Android` / `fin.ai` SRC 0 / DES 0. Named gaps list unnamed *values* of named domains (easing digits, hover paint, card interactive kind, error-tone hex, `focus-visible` paint), not new product surfaces.

## 5 Conflict policy

One policy in the portable body: keep-both for dual source writings; sibling extras stay provenance. YAML unitless beside §3 px/rem; `58px` inspect beside YAML `70`/`60`; `100px` / `999px` / `9999px` unmerged; Ghost YAML-missing padding beside §4 `0px 18px`; three easing curves all omitted the same way (names/uses/durations kept). Sibling `13px 11px 13px 16px` / `85.12px` / `66.12px` / `75.6px` / product-card `padding: 4px` / carousel `17px` / `54px` / `border-radius: 100%` DES 0. Source HTML RGB companions `rgb(2,41,75)` / `rgb(1,46,55)` / `rgb(17,17,17)` / `rgb(35,36,36)` / `rgb(247,250,255)` DES 1 each on the matching semantic-color role — source comment, not sibling `rgb(39,69,92)` (DES 0 / PRO 1).

## 6 F2 list after F3

F3 grew B2a from 32 to 36 and rewrote dest lines. Current files match those dests:

- `derived editorial` DES 36 / PRO 1 / LOG 1
- `Plaid Sans` DES 38 / PRO 25 (log dest 38)
- `Cern` DES 19 / PRO 9
- `Start building` DES 7 · `Read the docs` 8 · `Contact sales` 7 · `See all products` 7
- `#02294b` DES 13 / PRO 12
- `https://plaid.com` DES 4 / PRO 9 · `https://plaid.com/products` DES 2 / PRO 3
- `Explore pills` DES 1 / PRO 3
- `live-extract` DES 0 / PRO 4
- `type: button` DES 1 / PRO 4
- `0px 18px` DES 2
- `48px` DES 4 / PRO 1
- `~50px` DES 2 / PRO 1
- `120ms` DES 3 · `200ms` 1 · `320ms` 1
- RGB five companions DES 1 each

No stale pre-F3 dest left as a current claim.

## 7 Deleted persona derivatives (D2 / D2a)

Source §13 three fictional archetypes. Portable Audience keeps only the source header grouping (`fintech developers`, `product engineers`, `founders building on financial APIs`). Primary tasks name recorded headlines/CTAs, not persona goals. This review mentions the needles; absence is claimed of DESIGN/provenance/log, not of this file.

| needle | SRC | DES | PRO | LOG | in Primary tasks / Audience |
|---|---:|---:|---:|---:|---|
| Devin Park | 1 | 0 | 0 | 0 | no |
| Aïcha Diallo | 1 | 0 | 0 | 0 | no |
| Marcus Reilly | 1 | 0 | 0 | 0 | no |
| San Francisco / New York / Austin | 1/1/1 | 0 | 0 | 0 | no |
| Series-B | 1 | 0 | 0 | 0 | no |
| neobank | 1 | 0 | 0 | 0 | no |
| sales call | 1 | 0 | 0 | 0 | no |
| underwriting | 1 | 0 | 0 | 0 | no |
| lending startup | 1 | 0 | 0 | 0 | no |
| personal-finance app | 1 | 0 | 0 | 0 | no |
| five years | 1 | 0 | 0 | 0 | no |
| Head of product | 1 | 0 | 0 | 0 | no |
| API errors | 1 | 0 | 0 | 0 | no |
| primary interface | 1 | 0 | 0 | 0 | no |
| balance checks | 1 | 0 | 0 | 0 | no |
| account linking (unhyphenated) | 1 | 0 | 0 | 0 | no |
| reason about | 1 | 0 | 0 | 0 | no |
| still be there / still accessible | 1/1 | 0 | 0 | 0 | no |
| fintech developers | 2 | 1 | 0 | 1 | Audience only (source §13 header) |
| product engineers | 2 | 1 | 0 | 1 | Audience only |
| founders building on financial APIs | 1 | 1 | 0 | 1 | Audience only |
| builder, not a lead to be closed | 1 | 2 | 0 | 1 | Audience + Voice (§10) |

## 8 C2

Judged by role, not primitive name. `loading | applicable` DES 1 = `error | applicable` 1 = `success | applicable` 1 (Text Input only, `:470`–`:472`; form field; source names field-level validation). `loading | not-applicable` 6 = `error | not-applicable` 6 = `success | not-applicable` 6 on Primary Pill, Header Dark Pill, Outline Pill, Ghost Pill (destination controls), Top Nav Item (`type: tab`), Mega-Menu Row (menu row). No control opens loading while closing error. Cards and Eyebrow omit kind/map (C4). Absence of a capture is not a `not-applicable` reason (C1). "This is not a complete state-coverage claim" at `:244`.

## 9 Sibling-fragment fusion

Canonical fusion strings: `14px radius with 16px padding` SRC 0 / SIB 0 / DES 0 / PRO 0; `measures 1440px` 0/0/0/0. Inspect H2 row does not attach sibling `-2px` or `66.12px` to source `58px`/`500`. Mega-menu stays source `13px 16px`, not fused with sibling `13px 11px 13px 16px`.

Sibling-only issued strings stay out of DESIGN (PRO ≥1 unless noted): `The AI infrastructure behind smarter finance` 0/1/0/1; `A network that makes your products better` 0/1/0/1; `Explore Protect` 0/1/0/1; `Previous items` 0/1/0/1; `85.12px` 0/1/0/1; `66.12px` 0/1/0/1; `75.6px` 0/1/0/1; `1440×900` 0/1/0/1; `13px 11px 13px 16px` 0/1/0/1; `Enabling all companies to build fintech solutions` 0/1/0/1; `rgb(39,69,92)` 0/1/0/1; `3151` 0/2/0/1; `simpleicons` 0/1/0/1; `17px` 0/1/0/1; `54px` 0/1/0/1; `border-radius: 100%` 0/1/0/1; `padding: 4px` 0/1/0/0 (provenance writes `product-card padding \`4px\`` without that exact colon form).

## 11 YAML use ↔ § table use

No short-side cut. Token-set use = YAML; Role/Notes = longer §3/§4. `Top nav pill items` SRC 2 / DES 2. `All-caps eyebrow label, 2px tracking` 1/1 beside `All-caps section eyebrow` 1/1. Input YAML `Form text input, navy hairline border` 1/1 beside §4 `no shadow`.

## E2d self-grep (this file)

After write, `find` confirmed `REVIEW.md`. `grep -oF -- | wc -l` on this file vs DESIGN/provenance/log: every needle this review claims DESIGN dest 0 is dest ≥1 here (mention, not use). DESIGN dest remains 0 for the persona identifiers, fusion strings, sibling-only headlines/px, and D1 domain names. `live-extract` DESIGN 0 / provenance 4 / log 2 / this file ≥1. `cubic-bezier(0.2, 0.6, 0.25, 1)` DESIGN 0 / provenance 1 / log 1 / this file ≥1. Absence is not claimed of this review.

REVIEW_DONE plaid PASS

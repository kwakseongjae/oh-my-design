# paypal migration log

Source: `web/references/paypal/DESIGN.md`
Sibling read (not the migration input): `web/references/paypal/.verification.md` (dotfile; `find web/references/paypal -maxdepth 1 -type f` and `test -f` on that path). Not the migration input.
Destination: `docs/design-md-weight/migrated/paypal/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/paypal/provenance.md`
Date: 2026-09-02
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
Not a catalog-adoption claim. Gate output is recorded below as a run result, not as evidence of semantic adequacy (E2c).

Every destination line below was checked with `grep` against the three output files before it was written (F2). Line numbers are from the files as written in this directory. Counts use ripgrep match lists per file, never a remembered count.

Source SHA-256 `508bef1144ba309a10a9e2c1ce33a7edbba691497e32acb1ec8ac76e93bcb3d5` (`web/references/paypal/DESIGN.md`). Worker-close portable DESIGN SHA-256 `9aa81f94ca19a3aa93e3bdee8246614fb2e3eec24e7ef95afc1438bad59edffd`. Auditor portable DESIGN SHA-256 `9f85243a0b904a90a84526c45cd88d1cb7f8086d17acca73693d7a747075e13c` (B2a same-line closes at 452/478/498; line numbers of prior dests unchanged).

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance; `homepage` 옮김 → Experience Scope; `logo.type` / `slug` 옮김 → Typography & Assets Assets | Portable file has no frontmatter. H1 is `# PayPal Design System` (`DESIGN.md` 1). Identity table `provenance.md` 9–21. Homepage is dual (E2a): `https://www.paypal.com/us/home` at `DESIGN.md` 9 and `provenance.md` 13/50. Catalog `primary_color` `#002991` is dual: `DESIGN.md` 9/85 + `provenance.md` 14/28 (E2a). Logo `simpleicons` / `paypal` is dual: `DESIGN.md` 224 + `provenance.md` 15–16/29 (E2a). |
| YAML `omd: "0.1"`, `verified`, `tokens.source: live-extract`, `tokens.extracted`, `components_harvested: true` | 분리 → provenance; `tokens.source` / `extracted` 옮김 → Experience Scope | A1c: `omd` format `provenance.md` 17; `verified` 18/37; `tokens.source \| live-extract` `provenance.md` 19 and `DESIGN.md` 9; `tokens.extracted` `provenance.md` 20/38 and `DESIGN.md` 9; `components_harvested` `provenance.md` 21/136. Footer **Verified:** 2026-06-22 at `provenance.md` 42. |
| YAML `tokens.note` | 옮김 → Experience Scope; 분리 → provenance (full quote) | Portable paraphrase-as-written at `DESIGN.md` 9. Full quote at `provenance.md` 25. Dual (E2a). |
| YAML `tokens.colors` (15 keys) | 옮김 → Foundations semantic color | `DESIGN.md` 85–99. Same-hex roles unmerged at 101: `primary-light` ≠ `accent-sky` (both `#60cdff`); `canvas` ≠ `on-primary` (both `#ffffff`); `#0070e0` ≠ active-tab `rgb(0, 0, 238)`. Legacy `#003087` / `#0070ba` stay Don't-list prohibitions (`DESIGN.md` 69/101), not current roles. |
| YAML `tokens.typography.family.display` / `ui` / `fallback` | 옮김 → Typography & Assets Family | `PayPal Pro` `DESIGN.md` 190 (`tokens.typography.family.display`). `Plain` 191 (`tokens.typography.family.ui`). Fallback `Helvetica Neue, Arial, sans-serif` 192 (`tokens.typography.family.fallback`). |
| YAML `tokens.typography.display-hero` / `display-lg` / `section` / `body` / `nav` / `button` / `caption` | 옮김 → Typography & Assets Type roles | `DESIGN.md` 202–209. Unitless line heights stay ratios (A1a): `1.10` / `1.15` / `1.20` / `1.40` / `1.00` / `1.50`. YAML `use` strings restored verbatim. Token-set paths at 211. §3 longer form (`~99px (fluid)`, `17.86px (≈18px)`, Muted text 14px/500/1.40 at 209) kept beside YAML. Live `99.4px` / `67.1px` / `18.4px` kept as HTML-comment inspect figures. |
| YAML `tokens.spacing` (8 steps) | 옮김 → Foundations spacing | Unitless: `DESIGN.md` 109–116 (`xs 4` · `sm 8` · `md 16` · `base 24` · `lg 32` · `xl 48` · `xxl 64` · `section 96`). Unmerged from rounded/type/cookie-height at 118. |
| YAML `tokens.rounded` (4 steps) | 옮김 → Foundations shape | `DESIGN.md` 126–129 (`sm 4` · `md 8` · `lg 25` · `full 1000`). Body Medium (16px) card radius is not a YAML rounded key (`DESIGN.md` 131). Tab `104px` is not `tokens.rounded.lg: 25`. |
| YAML `tokens.shadow.card` / `elevated` | 옮김 → Foundations elevation | `DESIGN.md` 138–139. Compact body spellings `rgba(0,0,0,0.08)` / `rgba(0,0,0,0.15)` / `rgba(0,0,0,0.3)` / `rgba(0,0,0,0.01)` at 142. Overlay scrim and CookieBanner ambient shadow are body §6, not YAML keys. |
| YAML `tokens.components` (9 records) | 옮김 → Components & States | `DESIGN.md` 250–449. Verified primitive types preserved per component, not flattened to Kind (A1b): `button` ×4 (253/278/303/329), `tab` ×1 (354), `input` ×1 (382), `card` ×1 (406), `badge` ×1 (419), `dialog` ×1 (433). All nine YAML `use` strings restored verbatim. Input Body use `Login email/phone, form fields` at 388 beside Token-set use 387. Cookie Consent (Tertiary) and Log In are `not in the token set` (453/479; also named in Capture record 231/248) — Primitive type is not copied onto them. Adjacent complete B2a closes at 453/479. `card-surface` / `badge-status` omit kind and map (C4). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope + Distinctive traits | Scope `DESIGN.md` 9–13; Distinctive traits 34–40. 2023 rebrand, `#60cdff` hero, `#002991` midnight, 1000px pills, PayPal Pro / Plain, `layered-card` shadow. Nike/Apple and cadence readings carry the adjacent qualifier at 11 (B2/B2a). |
| §1 Key Characteristics | 옮김 → Distinctive traits | `DESIGN.md` 34–40 under the qualifier at 32. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | `DESIGN.md` 85–101. Role names are the source's own. `blue-400-plate` at 86. Live `rgb(96, 205, 255)` and `rgb(0, 41, 145)` at 86/142. |
| §3 Typography Rules — family, hierarchy, principles | 옮김 → Typography & Assets | Evidence 178–184; Family 190–194; hierarchy 202–211; Type rules 217–220. "There is no headline at 600 or 700" at 217. Fluid ~56px mobile to ~99px desktop at 211. Font-evidence qualifier at 186 names specimen/license packet-boundary readings. |
| §4 Component Stylings | 옮김 → Components & States | `DESIGN.md` 250–505. §4 body values and YAML fields both kept (padding `14px 33px` beside live `13.93px 32.86px`; font `18px` beside `17.86px`). Unique §4 Cookie Consent tertiary (`rgba(255, 255, 255, 0.7)`, `10px 30px`, 48px, 14px Plain 500) at 451–475. Sky Blue / Midnight Blue sections at 497–504 as color-section uses, not extra primitives (B2a close at 499). Input Token-set use at 387; Input Body use `Login email/phone, form fields` at 388 (source §4 `:188`); Input Focus `#0070e0` recorded as observed Focus, not `focus-visible` (`DESIGN.md` 248/387). Active tab YAML `link-blue` beside §4 `rgb(0, 0, 238)` at 360/365. |
| §5 Layout Principles | 옮김 → Layout & Platforms | `DESIGN.md` 509–530. Base unit 8px; scale; 100vw immersive; ~1200px max-width; generous macro, tight micro; type as spacer; color as divider. Body radius scale longer form also in Shape 131. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | `DESIGN.md` 135–142. Four levels including Overlay `rgba(0,0,0,0.3)` and CookieBanner `rgba(0,0,0,0.01) 0px 0px 17px` radius 16px. Shadow philosophy kept. |
| §7 Do's | 옮김 → Experience application rules | `DESIGN.md` 56–63 (eight Do rules), under the grouping qualifier at 54. Not placed in Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience avoid | `DESIGN.md` 69–75, under the qualifier at 67. Includes `#003087` / `#0070ba`, 16px or 24px rounded-rectangle prohibition, warm/cool neutrals. No invented domain is added. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | Breakpoints `DESIGN.md` 536–539 (`<640px` / `640-1024px` / `1024-1280px` / `>1280px`). Touch 52px / 48px / 40px at 543–545. Collapsing including hamburger and `96px → 48px` at 549–553. `native application` / `back-office` / `product application` / `measures 1440px` DESIGN dest 0. |
| §9 Agent Prompt Guide | 삭제 (도구 프롬프트); 고유 값 옮김 → Components / Layout / Type roles | Tool-facing construction prompts deleted. Unique values checked before deletion (A3): Log In = white fill + 3px black border at `DESIGN.md` 479/485; section cadence white → `#60cdff` → white → `#002991` at 530; §9 `~96px` hero rounding at 202/211; §9 feature-card title 45px / body 16px Plain 400 `#686a6d` on `card-surface` at 413. Color/type/pill values already in Foundations/Components. No adapter file. Check itemised at `provenance.md` Omission ledger. |
| §10 Voice & Tone | 옮김 → Content & Locales | `DESIGN.md` 558–581. Quoted live lines kept byte-exact (A5): "Pay, send, and save smarter"; "Take your business further, faster"; "PayPal Open"; "Real stories. Real wins."; "Pay now or pay over time. It's your choice."; "The tools your business runs on. In one place."; "See How You're Safe."; CTA set; Forbidden register. Qualifier at 558/581. |
| §11 Brand Narrative | 옮김 → Experience Scope | `DESIGN.md` 13: 1998 founders Confinity; X.com 2000; eBay 2002 `$1.5 billion`; 2015 NASDAQ: PYPL; San Jose; 200+ countries; 25+ currencies; 400 million active accounts; founding insight; network-effect moat; 2023 rebrand under CEO Alex Chriss; "PayPal Open" campaign; closing sentence "The word "Open" in PayPal Pro at nearly 100px is the design-system argument made typographically: unambiguous, large, and confident." The source paragraph's last sentence is kept as one unit (`DESIGN.md` dest 1 at 13). Marked as narrative context that supplies no interface tokens; classification carries adjacent complete qualifier (B2/B2a). Also noted as narrative-not-token-source at `provenance.md` 76 / 142. |
| §12 Principles — 5 numbered | 옮김 → Experience principles | `DESIGN.md` 46–50 under the B2a form at 44. Mission "democratizing financial services" and "See How You're Safe." stay source sentences; every *UI implication* is qualified. No `ds.type`; toss-form close (rulebook v12 B2a 전제 주석). Portable derived-editorial inventory: `provenance.md` Derived editorial inventory (29 data rows). Auditor same-line B2a closes at Cookie Consent 453, Log In 479, Sky Blue / Midnight Blue 499. |
| §13 Personas — 4 fictional archetypes | 삭제 (D2, D2a). Audience 옮김 → Experience Audience (header grouping only) | Biographies dropped. No name, motivation, or affiliation classification is carried into this document or its sidecar (`DESIGN.md` 28; `provenance.md` Omission ledger). Portable Audience uses only the source §13 header grouping, original wording: peer-to-peer senders, online shoppers, small merchants, enterprise checkout integrators (`DESIGN.md` 28; source dest 1 / portable dest 2). Primary tasks are surface/control labels (`DESIGN.md` 21–23), not persona motives. |
| §14 States | 옮김 → Components & States capture record + per-component applicability | Full source table at `DESIGN.md` 237–246 including "Send your first payment", wordmark-into-ring spinner, "Insufficient funds", "Sent. [amount] to [name].", "You're all set.", no celebration animation (A2; catalog graph still 0/440). Applicability rule at 248. Non-observation is never a `not-applicable` reason (C1). Observed Focus is not `focus-visible` (B1). Loading/error/success follow role (C2): marketing destination CTAs and tabs closed `not-applicable` with role reasons; input error `applicable`; cookie preference-write `not-applicable`. This is not a complete state-coverage claim (`DESIGN.md` 248). |
| §15 Motion & Easing | 옮김 → Foundations motion (durations, names, signature, reduced-motion); 무출처 커브 값 삭제 | Durations `DESIGN.md` 150–153 (`0ms` / `120ms` / `200ms` / `300ms`) — values differ from the spec-template examples, kept (T1-3 제약 5). Easing names and uses kept; exact `cubic-bezier` omitted (`DESIGN.md` 159–161). `ease-exit` matched the legacy spec-template example (named as such, value not re-hosted). Signature motions including `scale(1.02)`, two-letter monogram, and `prefers-reduced-motion: reduce` at 165–168. B3 is held: the promotion condition at `DESIGN.md` 170 names all five evidence kinds — transition properties, animation name, duration, easing, reduced-motion behavior — and the per-component gate, in full text (E2c). |
| Footer **Verified** / **Tier 1 sources** / **Tier 2** / **Conflicts** | 분리 → provenance | Freshness `provenance.md` 35–44; Tier 1 URLs 64–65 (heading 62); Tier 2 lookup rows 69–70 (heading 67). Conflicts unresolved: none — `provenance.md` 44. |
| HTML comment live inspect | 분리 → provenance Capture selectors; 수치 옮김 → Type / Components / Color | Inspect rows at `provenance.md` Capture selectors, including bgFreq `#ffffff` ×12 / `#000000` ×6 / `#60cdff` ×2 / `#002991` ×2. Live `99.4px` / `67.1px` / `18.4px` / `13.93px 32.86px` also in portable Type and Components. Philosophy-layer note (sections 10–15) at `provenance.md` 138 and `DESIGN.md` 146. |

## Sibling handling

Sibling file exists at `web/references/paypal/.verification.md` (dotfile; `find web/references/paypal -maxdepth 1 -type f` returns `DESIGN.md` and `.verification.md`; `test -f` on that path is true). The worker header that said `find` returned only `DESIGN.md` was false (E2). Overlap live labels already live in the source body. Sibling-only live headings and high-precision computed spellings were not promoted into the portable body (B1 checked; DESIGN dest 0 for those sibling-only samples). Ledger row: `provenance.md` Omission ledger, Sibling file.

## A5 / A5a verification

The gate's `copy-loss` needles come only from contiguous non-Latin runs of four characters or more inside quotations. PayPal published copy is Latin, so a hand sweep of published labels is mandatory (A5a: `compared` < `candidates`).

| Sweep | Extracted | Missing from `DESIGN.md` + `provenance.md` | Published copy among the missing | Handling |
|---|---:|---:|---:|---|
| Published names and live labels in the source body | 24 distinct | 0 | 0 | PayPal / PayPal Pro / Plain / PayPal Open / "Pay, send, and save smarter" / "Take your business further, faster" / "Real stories. Real wins." / "Pay now or pay over time. It's your choice." / "The tools your business runs on. In one place." / "See How You're Safe." / "Sign Up" / "Send Money" / "Get Paid" / "Browse Offers" / "Enterprise Solutions" / "Read Case Study" / "Contact Sales" / "Learn More" / "Learn About Pay in 4" / "Play video" / "Personal" / "Business" / "Log In" / "democratizing financial services". |
| YAML `use` strings (7 type-role + 9 component) | 16 | 0 | 0 | Restored verbatim at `DESIGN.md` 202–208 and each component Token-set use line. |
| Source quoted strings (145) | 145 | 6 | 0 published | Four §9 construction-prompt blobs (tool commands, deleted); two persona-only quotes (D2). Values inside the prompts that were unique (`3px` Log In border, `~96px`, 45px card title / 16px `#686a6d` body) were moved before deletion. |
| Sibling published strings | overlap already in source body | 0 sibling-only promoted | 0 | Sibling file present at `web/references/paypal/.verification.md`. Overlap labels already in the source. Sibling-only live headings and high-precision computed spellings were not promoted (portable DESIGN dest 0). |

Sub-needle labels confirmed present individually in `DESIGN.md`: PayPal Open, Pay, send, and save smarter, Take your business further, faster, Real stories. Real wins., See How You're Safe., Sign Up, Send Money, Get Paid, Browse Offers, Personal, Business, Log In, PayPal Pro, Plain.

A5 분모: hand sweep of source published labels 24 extracted / 0 missing + YAML use 16 / 0 missing; quoted-string sweep 145 / 6 missing (0 published); gate `copy-loss` compared/candidates recorded in Gate run below.

## Unique-phrase restoration (wave 43)

Extracted 72 source-unique expressions (years, proper names, quotes, value qualifiers, constraint sentences). `grep -oF` against portable `DESIGN.md`: 70 present / 2 were 0 (`bgFreq`, `#ffffff ×12`). Those two are HTML-comment capture-frequency rows, restored to `provenance.md` Capture selectors (not portable tokens). Restored count: 2.

## Gate run

`node test-v2/tools/migrate-reference.mjs --brand paypal --gate-only` → `verdict: PASS`, `problems: []`, `coverage: [{ check: "copy-loss", compared: 0, candidates: 186, detail: "바늘 0개 — 이 브랜드에서 A5는 기계 검사되지 않았다. 발행 라틴 문자열을 손으로 전수 대조하라." }]`. Separately, `scripts/design-md-core.cjs` `inspectDesignMd` reports `level: portable-core`, `portable_core: true`, `reasons: []`, and 0 `[FILL IN]`. Both are run results only. The gate has historically passed A5 losses, narrow ledgers, false log destinations, and B1 promotions, so neither is cited here as evidence that the migration is correct; the sweeps above and the two mandatory passes are. A5a was mandatory because `compared` 0 < `candidates` 186.

## Deviations recorded

- `DESIGN.md` is above the spec's 600–1,800-word SHOULD budget (`wc -w` 8,258 after Input Body use restore). The budget yielded to A1: fifteen color keys with unmerged same-hex paths, eight spacing keys, four rounded keys plus local 16px/104px, nine YAML components plus two `not in the token set` controls, full §14 table plus seven-state maps, full §11 narrative including its last sentence, dual YAML/§3/live type spellings, and the B2a qualifications cannot be compressed without dropping verified values or dropping the qualifications. Recorded rather than silently accepted.
- No `ds.type` / published UI specification is on the source, so every derived-editorial close uses the toss-form `not PayPal-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석). Measure after F3: `derived editorial implementation inference` DESIGN = `not PayPal-authored` DESIGN = 29. Provenance derived ledger 29 data rows (E1 1:1). Worker-close was 26=26; auditor added adjacent closes (file-then 452/478/498 on SHA `9f85243a0b904a90a84526c45cd88d1cb7f8086d17acca73693d7a747075e13c`; current 453/479/499 after Input Body use insert) and extended `:186`.
- Three unattributed easing curves omitted from portable Motion; durations, names, uses, signature motions, and reduced-motion kept. B3 full text at `DESIGN.md` 170 (E2c).

## Revision 2026-09-02 (wave45 review)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**. Trigger: semantic review FAIL 1. One defect only. Token values, component-table structure, state applicability, B2a complete qualifiers, and the derived-inventory 1:1 were not opened. Source `web/references/paypal/DESIGN.md` was not modified. Sibling `web/references/paypal/.verification.md` exists (`find` + `test -f`).

Counts below are `grep -oF -e '<needle>' <file> | wc -l`, file by file. `grep -c` was not used.

**1. A1 · item 11 — Input §4 Use 복원.** Source §4 `:188` writes Inputs Use as `Login email/phone, form fields`. YAML `:53` is `Login and form inputs, focus ring #0070e0`. Portable Input Form kept only the YAML string as Token-set use (`DESIGN.md` 387) and had no Body-use line (Token-set use DESIGN 9 / Body use DESIGN 8). Restored Body use at `DESIGN.md` 388: `Login email/phone, form fields`. YAML Token-set use kept verbatim. No new sentence class, no new B2a qualifier, no new provenance inventory row — source-value restore into the Input Form block, not a derived reading.

실측 (`find` 후 `grep -oF -e` | `wc -l`, 파일별):

| needle | orig | sib | dest after | provenance after |
|---|---|---|---|---|
| `Login email/phone, form fields` | 1 | 0 | **1** | 0 |
| `Login email/phone` | 1 | 0 | **1** | 0 |
| `email/phone` | 1 | 0 | **1** | 0 |
| `form fields` | 1 | 0 | **1** | 0 |
| `Login and form inputs, focus ring #0070e0` | 1 | 0 | **1** | 0 |
| `Body use:` | 0 | 0 | **9** | 0 |

`Login email/phone, form fields` dest **1** = Input Form Body use `:388`. orig **1** = source §4 `:188`. YAML `:53` does not contain `email/phone`. Token-set use dest **1** unchanged. provenance **0** — the claim ledger already names `tokens.components.input-form` as a class and does not need a second body fact. This revision section and the updated YAML-components / §4 dest rows name the same needles; those mentions are this file's denominator (E2d).

Inserting the Body-use line shifted later dest pointers by +1. Current DESIGN pointers re-read after the insert: YAML components 250–449 (card 406 / badge 419 / dialog 433) · Cookie Consent 451–475 / B2a 453 · Log In 479/485 · Sky Blue 497–504 / B2a 499 · Layout 509–530 · Breakpoints 536–539 · Touch 543–545 · Collapsing 549–553 · Content 558–581 · Named gaps 615 · card-surface §9 composition 413. Provenance inventory dests for those B2a sites moved with the file. Auditor SHA `9f85243a0b904a90a84526c45cd88d1cb7f8086d17acca73693d7a747075e13c` remains the pre-insert snapshot (B2a then 452/478/498). Current portable DESIGN SHA-256 `07767026eb83fdd40158b5305aa8c69baeb5afbe4e0ae6e2d96cca2323aa396c`. Current provenance SHA-256 `b1d40169edcb1bf497d9630d2c548deab7e1382c40ea77dc2f423c32112fea9c`. `wc -w` 8,258.

B2a `derived editorial implementation inference` dest **29** = provenance inventory **29** data rows. `check-limiter-ledger.mjs paypal` 본문 29 = 원장 29. `check-yaml-use-landing.mjs paypal` use 16/16. gate `PASS` / `problems []`.

**안 건드린 것.** 토큰 값 · 컴포넌트 상태 표 · B2a 완전형 29=원장 29 · 원본 `web/references/paypal/**` · sibling 승격 없음.

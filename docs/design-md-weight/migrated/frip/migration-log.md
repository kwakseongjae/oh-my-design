# Frip migration log

Source: `web/references/frip/DESIGN.md`
Destination: `docs/design-md-weight/migrated/frip/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/frip/provenance.md`
Date: 2026-08-26
Worker: opus5 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v10**
Gate: `node test-v2/tools/migrate-reference.mjs --brand frip --gate-only` — result recorded at the end of this file, with the reason it is not conformance evidence.

## A5 — brand-published strings

The catalog `name` is the Latin `Frip`, so the H1 is `# Frip Design System` and the Latin form is the one the body uses in running prose, exactly as the source does. The Korean form `프립` is carried byte-for-byte at first mention in Scope (`Frip (프립)`) and again in Content & Locales → Terminology, beside the Latin form rather than replaced by it.

Every Korean run the source publishes is present in the portable body byte-for-byte, including punctuation and the trophy emoji. Counts are occurrences, measured per string with `grep -oF '<string>' DESIGN.md | wc -l` — not `grep -c`, which would report matching lines.

| String | Body count | Evidence class as the source states it |
|---|---:|---|
| `프립` | 20 | Korean product name; the count includes every longer string containing it, such as 프립단독 and 신규프립 |
| `대한민국 1등 취미여가 탐색 플랫폼` | 3 | §10 voice sample marked *verified live 2026-07-02*; homepage title tag |
| `프립(FRIP) : 대한민국 1등 취미여가 탐색 플랫폼` | 1 | `document.title`, from the source's trailing observation comment |
| `주간 인기 BEST 🏆` | 2 | §10 voice sample marked *verified live 2026-07-02*; homepage section heading |
| `주간 인기 BEST` | 5 | the same heading without the emoji, as §1, §3, §5 quote it |
| `참여하기` | 7 | primary booking CTA label, in the live-inspect observation list |
| `신청마감` | 5 | sold-out / disabled CTA label, in the live-inspect observation list |
| `앱 다운로드` | 6 | app-download bar CTA label, in the live-inspect observation list |
| `프립단독` | 8 | exclusive corner tag, in the live-inspect observation list |
| `슈퍼호스트` | 10 | Superhost corner tag, in the live-inspect observation list |
| `신규프립 에너지x2` | 3 | points/energy label, in the live-inspect observation list |
| `프립 정보` | 2 | product-detail heading, quoted in §3's type table |
| `신규 프립` | 3 | homepage shelf heading, quoted in §1 and §5 |
| `기획전` | 3 | homepage shelf heading, quoted in §1 and §5 |
| `크루님을 위한 고감도 경험` | 3 | curated shelf heading, quoted in §10 and §11 |
| `이런 모임은 어때요?` | 1 | curated shelf heading, quoted in §11 |
| `고감도 경험` | 5 | the phrase inside that heading, quoted separately in §12 |
| `크루` | 7 | member term, quoted in §10, §11, §12 |
| `프렌트립` | 2 | origin company name, quoted in §11 |
| `카테고리` `피드` `메시지` `찜` `마이` | 3 / 5 / 5 / 5 / 5 | top-nav items, quoted in §4 |
| `오류` | 2 | the bare error word §14 tells the product not to settle for |

**One Korean string does not survive, and this row is its disposition.** `혼자여행` is **삭제** — deleted with §13. It occurs exactly once in the source (`grep -oF '혼자여행' web/references/frip/DESIGN.md | wc -l` = 1, line 369), inside the sentence "A solo traveler who uses Frip for guided small-group trips (\"혼자여행\")", and nowhere else in the file. Its only carrier is a persona the source's own §13 header and trailing comment both mark fictional, so under D2 it goes with the persona; it is not re-hosted in `provenance.md` as an audience or product fact. Measured: `grep -oF '혼자여행' DESIGN.md | wc -l` = **0**. It does occur in `provenance.md` (3) and in this file (6), but every one of those occurrences sits inside a deletion record that names it as deleted — none states it as an audience, product, or copy fact. Every other Korean string quoted inside the persona paragraphs — 주간 인기 BEST, 프립단독, 참여하기, 슈퍼호스트, 크루 — is independently established elsewhere in the source and survives on that independent basis.

Latin-side check. The gate's `copy-loss` needle extraction sees non-Latin runs only; this source has 15 of them, so the check was machine-armed and reported no `unchecked` entry. The Latin published strings were still extracted and searched by hand:

- **Brand and product names** — `Frip`, `FRIP`, `Frientrip`. All verbatim in the body; `FRIP` survives inside the full title-tag string.
- **Brand ethos and mission** — `WE INSPIRE PEOPLE TO EXPERIENCE THE WORLD` (1 occurrence, Content & Locales → Brand-published lines) and the lowercase mission phrasing `inspire people to experience the world` (2 — Experience → Scope and Content & Locales). Both carried in the case the source uses; the all-caps tagline is not normalised.
- **Type family names** — `SUIT`, `UI Frip`, `Noto Sans KR`, `Helvetica`, `Arial`, `sans-serif`, carried as the source's own quoted stack. `grep -oF 'UI Frip' DESIGN.md | wc -l` = 4.
- **Discount examples** — `48%` and `89%`, both in Foundations → Semantic color on the Sale Red bullet, in the source's own quoted form.
- **Token and component key names** — `motion-fast`, `motion-standard`, `motion-slow`, `ease-enter`, `ease-exit`, `ease-standard`, `cta-primary`, `cta-disabled`, `app-download`, `count-pill`, `product-card`, `badge-exclusive`, `badge-superhost`, `nav-tab`, `shadow.none`. All byte-exact; hyphens and dots are not normalised.
- **CSS-shaped values** — `box-shadow: none` (**3**), `rgba(0,0,0,0.4)` (**3**), `prefers-reduced-motion: reduce` (**1**) are present as literals. **Corrected by the B2a·E2 audit:** the border forms are not all literal, because the portable body sets the hex in inline code where the source did not. `grep -oF '1px solid #dddddd' DESIGN.md | wc -l` = **0**. Measured per form: ``1px solid `#dddddd` `` = **1** (Quantity Pill record, line 310); ``1px `#dddddd` `` = **1** (state-contract form-validation row, line 251); ``` `1px #dddddd` ``` = **2** (state-contract head sentence line 243, pill `error` reason line 323). `grep -oF '1px solid #e6e6e6' DESIGN.md | wc -l` = **2** (Elevation table line 153, recorded-parts sentence line 159); the third instance is ``1px solid `#e6e6e6` `` = **1** at the Experience Card border, line 332. No value is lost in either case — only the markdown form differs — but "all present" was a literal-presence claim the greps did not support, so the forms are named here instead.
- **Section-heading vocabulary of §9** — audited in the §9 row below; every value it restates lands elsewhere, so none of it is a unique carrier.

No brand-published Latin string was lost.

### Multi-destination published strings (E2a)

| String | Portable locations |
|---|---|
| `대한민국 1등 취미여가 탐색 플랫폼` | Scope ¶1 (9), Brand-published lines twice — once alone, once inside the full title tag (439) |
| `참여하기` | Primary tasks (24), Distinctive traits (37), Foundations → Semantic color (93), Type roles (213), Booking CTA record (268), Voice table (426), Brand-published lines (445) — 7 occurrences |
| `신청마감` | Foundations → Semantic color (113), the state-contract head sentence (243), state contract row (254), Booking CTA named appearance (269), Brand-published lines (445) — 5 occurrences |
| `앱 다운로드` | Scope ¶3 (13), Type roles (215), App-Download Bar record (291), Voice table (426), Brand-published lines (445), Named gaps (502) — 6 occurrences |
| `프립단독` | Distinctive traits (38), Audience (33), Foundations → Semantic color (94), Type roles (216), Exclusive Tag record (338), Voice table (427), Brand-published lines (445), Terminology (453) — 8 occurrences |
| `슈퍼호스트` | Scope brand paragraph (17), Audience (33), Distinctive traits (37), Principles item 5 (53), Foundations → Semantic color (93), Type roles (216), Superhost Tag record (349), Voice table (427), Brand-published lines (445), Terminology (453) — 10 occurrences |
| `주간 인기 BEST` | Primary tasks (23), Type roles (210), Layout recorded layout (389), Voice table (425), Brand-published lines (440) — 5 occurrences, two of them carrying the 🏆 |
| `#7a29fa` | Distinctive traits (37), Principles item 2 (50), Capture-bound application (59), Avoid (78), Foundations → Semantic color (93), Booking CTA (262), Superhost Tag (352), nav active appearance (370) — 8 occurrences |
| `2026-07-02` | Scope (11), Evidence-domain boundary (121), Capture record (233), Brand-published lines (437) — 4 occurrences; also the provenance Identity and Freshness tables |
| Google favicon slug | Typography & Assets → Assets, and provenance Identity |
| `https://www.frip.co.kr/` | Scope (11), Evidence-domain boundary (121), and provenance Identity / Surfaces / Sources |

## Section-by-section disposition

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML `id` / `country` / `category` / `added` / `omd` | 분리 → provenance Identity | Portable file has no frontmatter. Ledger-only; `grep -oF 'consumer-tech' DESIGN.md | wc -l` = 0. |
| YAML `name` `Frip` | 분리 → provenance Identity; 옮김 → portable H1 and running prose | Dual (E2a). `# Frip Design System`. |
| YAML `display_name_kr` `프립` | 분리 → provenance Identity; 옮김 → Experience Scope and Content & Locales Terminology | Dual (E2a). Byte-for-byte, beside the Latin form and never replacing it (A5). |
| YAML `homepage` | 옮김 → Experience Scope, Foundations Evidence-domain boundary; 분리 → provenance Identity / Surfaces / Sources | Dual (E2a). Grep-verified: 2 occurrences in the portable body. |
| YAML `primary_color` `#7a29fa` | 옮김 → 8 portable locations listed above; 분리 → provenance Identity | Multi-destination (E2a), grep-verified at **8**. |
| YAML `logo` (`type: favicon`, Google s2 slug at `sz=128`) | 옮김 → Typography & Assets Assets; 분리 → provenance Identity | Dual (E2a). The portable line records it as a third-party favicon proxy rather than a captured first-party mark, which is also what the sibling's own note requires. No Named-gaps row was invented for a first-party logo-file absence. |
| YAML `verified` / `tokens.extracted` `2026-07-02` | 분리 → provenance Identity / Freshness; 옮김 → portable Scope, Evidence-domain boundary, Capture record, Brand-published lines | Dual (E2a), grep-verified at 4 occurrences in the portable body. |
| YAML `tokens.source: live-extract`, `components_harvested: true` | 분리 → provenance Identity + Proof notes; 사실만 옮김 → portable prose | Ledger fields kept as values (A1c). Grep-verified: `live-extract` and `components_harvested` each reach **0** occurrences in the portable body, while the facts they state are carried as prose — Scope and Capture record state the live computed-style reading and the eight component records. |
| YAML `tokens.note` | 분리 → provenance, quoted verbatim; 사실은 옮김 → Foundations | Dual (E2a). Its four facts — the violet's two placements, the three-value promo-red family, `box-shadow: none`, `#e6e6e6` hairlines plus tint separation — all land in Distinctive traits, Semantic color, and Elevation. `grep -oF 'tokens.note' DESIGN.md | wc -l` = 0. |
| YAML `tokens.colors` (17 keys) | 옮김 → Foundations Semantic color | All seventeen hexes preserved at field granularity, each as its own named role in the source's own three groups. `accent` `#f4373d`, `sale` `#ff3f33`, and `point` `#e21d47` keep three separate bullets rather than being merged into one promo-red value (A4), and `ink` `#000000`, `charcoal` `#333333`, and `near-black` `#111111` likewise stay apart. |
| YAML `tokens.typography.family` (`display`, `body`, `fallback`) | 옮김 → Typography & Assets Family | Both role keys carry `SUIT`, and that is stated as a single family carrying display and body rather than silently collapsed. The `fallback` value `UI Frip, Noto Sans KR` is preserved inside the full computed stack. |
| YAML `tokens.typography` 7 roles + §3 table | 옮김 → Typography & Assets Type roles | Seven rows with size, weight, line height, tracking, and the `use:` string as the Use column. Unitless line heights stay ratios (A1a): `1.33`, `1.40`, and `1.50` each appear in the body with the source's own pixel equivalent beside them. The rem forms `1.13rem` / `1.25rem` / `1.50rem` / `1.00rem` / `0.88rem` / `0.75rem` / `0.63rem` from §3 are preserved in the Size column. |
| YAML `tokens.spacing` (6 keys) | 옮김 → Foundations Spacing | 4px, 6px, 10px, 16px, 20px, 32px, with §5's base-unit sentence and the three recorded padding placements beside them. |
| YAML `tokens.rounded` (6 keys) | 옮김 → Foundations Shape | 3px, 5px, 10px, 12px, 20px, 9999px, with §5's named tiers and the `50%` form. Dual (E2a): Foundations → Shape and the component records. |
| YAML `tokens.shadow.none` | 옮김 → Foundations Elevation | Named explicitly as the `shadow.none` key beside §6's Level 0 row. |
| YAML `tokens.components` (8 records) | 옮김 → Components & States | Verified `type:` values preserved per component as an explicit `Type:` line — button ×3, input ×1, card ×1, badge ×2, tab ×1 — rather than flattened into `Kind: interactive` (A1b). `grep -c '^- Type: ' DESIGN.md` = **7**, one per declared component; the eighth record `cta-disabled` carries its `type: button` on the Booking CTA's Type line ("recorded on both `cta-primary` and `cta-disabled`") because the source itself calls it the same geometry as active. Every bg / fg / radius / padding / height / font / border / active / use field lands on its component. |
| §1 Visual Theme & Atmosphere — factual halves | 옮김 → Experience Distinctive traits, Foundations Semantic color / Shape / Elevation | The white canvas, the violet's two placements, the three promo reds, the grey ladder, the SUIT metrics, `box-shadow: none`, the hairline and tint separation, and the 5px/10px/20px radii all stand unqualified as recorded values. |
| §1 Visual Theme & Atmosphere — mood reading | 옮김 → Experience Scope, under an adjacent complete qualification | "bright, content-dense commerce feed rather than a minimalist brand site", "energetic and consumer-friendly, closer to a lifestyle shopping app than a calm fintech dashboard", "the page wants you to browse dozens of experiences at a glance", "the one thing the eye is trained to treat as 'the next step'", "unmistakably Korean-modern" — kept as the source wrote them (B2, B2a). |
| §2 Color Palette & Roles (17 roles, 3 groups) | 옮김 → Foundations Semantic color | All seventeen with names, values, and uses, in the source's own Primary/Accent, Ink/Text, Surfaces/Borders grouping. A head sentence states that the use descriptions beside each value are the material's own role statements, and the two evaluative glosses — the "do this / trust this" line and the first-party-inventory reading — carry their attribution in place (B2a). |
| §3 Typography Rules — family and stack | 옮김 → Typography & Assets Font evidence + Family | The full computed stack in the source's own quoted form. The portable body states that the chain after SUIT is a fallback chain and must not be presented as the brand face, and the Font evidence table records that no ownership or license statement exists for SUIT. |
| §3 Principles (4 typography readings) | 옮김 → Typography & Assets, under an adjacent complete qualification | Weight-driven hierarchy, restrained heading scale, tight tracking only on titles, bold for money and structure — all four kept with their reasoning (B2, B2a). The seven table rows are named as the recorded parts. |
| §4 Component Stylings (8 records incl. the nav block) | 옮김 → Components & States | All eight land. §4's two body-only values — the app-download bar's 45px height and the navigation's `#ffffff` background with its approximately 56px header — are carried on their components; the token block has neither. |
| §5 Layout Principles | 옮김 → Layout & Platforms Recorded layout + Foundations Spacing / Shape | The base unit, the six-step spacing scale, the three padding placements, the shelf structure, the card layout, the pinned CTA, the tint-band separation, and the six-tier radius scale with its `×78` count. |
| §5 Whitespace Philosophy (3 readings) | 옮김 → Layout & Platforms, under an adjacent complete qualification | Density over emptiness, flat segmentation, tag rhythm — all three kept (B2, B2a). |
| §6 Depth & Elevation (4 levels) | 옮김 → Foundations Elevation | All four rows with their values and uses, including the `rgba(0,0,0,0.4)` scrim on carousel index chips. |
| §6 Shadow Philosophy | 옮김 → Foundations Elevation, under an adjacent complete qualification | The near-shadowless reading, the scrim-for-lift and color-for-emphasis pair, and the fast/flat/mobile-native closing (B2, B2a). `box-shadow: none`, the border, the tints, and the scrim are named as the recorded parts. |
| §7 Do's (8 items) | 옮김 → Experience Capture-bound application, under an adjacent complete qualification | All eight kept as application rules (B2, B2a). |
| §7 Don'ts (8 items) | 옮김 → Experience Avoid, under an adjacent complete qualification | All eight kept with their rationales, same reason as the Do's. Two evidence-grounded boundaries are added below them and are marked as sitting outside the editorial layer. |
| §8 Responsive Behavior — breakpoints and collapsing | 옮김 → Layout & Platforms Recorded breakpoint bands, under an adjacent complete qualification | The three bands with `<640px`, `640-1024px`, `1024-1440px` and their per-band behavior, plus the five collapsing and image statements. The read method was a computed-style inspection that produced no viewport measurement, so the band names and behavior carry the qualification and the eight recorded measurements are named as the recorded parts (B2a). |
| §8 Touch Targets | 옮김 → Layout & Platforms Recorded touch measurements | The 56px full-width CTA, the 36px pill with 7px 15px padding, the approximately 56px header, and the "corner tags are non-interactive labels at 10px, kept out of the tap flow" sentence, which is one side of the preserved disagreement below. |
| §9 Agent Prompt Guide | 삭제 | Tool-facing packaging: a quick colour reference, four copy-paste component prompts, and a seven-step iteration guide addressed to a generating agent. **A3 checked and found nothing to move.** Every hex, px, rem, ms, and percentage inside §9 was extracted and searched against the rest of the file; each occurs outside §9, so §9 is a unique carrier for no value. Its four Korean strings are likewise established outside it — 프립단독 10, 참여하기 10, 주간 인기 BEST 6, 앱 다운로드 6 occurrences in the rest of the source. No slotless delegation. |
| §10 Voice & Tone — adjectives, register, 5-row table, forbidden register | 옮김 → Content & Locales Voice, under an adjacent complete qualification | "energetic, invitational, and experience-first", the aspirational/warm/community-minded register reading, all five rows verbatim including the emoji, and the forbidden-register rule (B2a). The Korean and English strings inside are published copy and are carried byte-for-byte (A5). |
| §10 voice samples ×3 marked *verified live 2026-07-02* | 옮김 → Content & Locales Brand-published lines | Carried byte-exact and **unqualified** — they are published strings, not readings. The trophy emoji on 주간 인기 BEST 🏆 is preserved. |
| §11 Brand Narrative | 옮김 → Experience Scope, under an adjacent complete qualification | The 프렌트립 origin and its friends-plus-trip contraction, the loneliness framing, the marketplace reframing, the Medium mission quotation, the 크루 and 슈퍼호스트 framing, the two quoted shelf headings, and the refuses/embraces pair. The source's own limit — that broader founding specifics are general public knowledge rather than a quoted Frip statement — is carried adjacent to the account (B2, B2a). Nothing from §11 was deleted. |
| §12 Principles (5 numbered items with UI implications) | 옮김 → Experience Principles, under an adjacent complete qualification | All five kept with their UI implications. The qualification uses the approved wording and additionally names the source's own trailing-comment statement that three of them are editorial readings, extending it to all five (B2a). |
| §13 Personas (3 archetypes) | 삭제; 경계 문장만 옮김 → Experience Audience | The source's §13 header and its trailing comment both mark them fictional. Portable Audience keeps that boundary; the three names, ages, cities, trip types, browsing habits, and expectations are deleted and are **not** re-hosted in `provenance.md` (D2). Grep-verified in the portable body: `김하늘` 0, `박민준` 0, `이서연` 0, `서울` 0, `경기` 0, `부산` 0, `혼자여행` 0, `pottery` 0, `craft class` 0, `host profiles` 0. The §13 header's segment enumeration is deleted with them rather than promoted to an audience finding. Primary tasks (`count=4`) come from §1, §4, and §5 surface evidence, not from §13. |
| §14 States (9 rows) | 옮김 → Components & States Source state contract + per-component applicability | 본문 보존: the full nine-row table survives verbatim, including `#000000`, `#fafafa`, `#eeeeee`, `#aaaaaa`, `1px #dddddd`, 5px, 56px, 신청마감, and 오류 (A2, A5). The qualification carves out the values that restate the component records and the colour roles, so recorded values are not demoted (B2a). Rows feed applicability where they name a control: Loading (booking submit) → the CTA's `loading` reason; Error (booking failed) → the CTA's `error` reason; Success (booking confirmed) → the CTA's `success` reason; Disabled (sold out) → the CTA's `disabled` reason and the pill's; Error (form validation) → the pill's `error` reason. `not captured` is never used as a `not-applicable` ground (C1); every `not-applicable` cell gives a role reason (C2); coverage is stated as not complete (C3); the card and the two tags declare no map (C4). No graph delegation. |
| §15 Motion & Easing — durations, easing roles, rules, reduced motion | 옮김 → Foundations Motion, under an adjacent complete qualification | The three durations (120ms / 200ms / 320ms) with their uses, the three easing role names with their uses, the five motion rules, and the `prefers-reduced-motion: reduce` contract all stay in the portable body (B2a). |
| §15 three `cubic-bezier` values | 삭제 | Unattributed curves. **Corrected by the B2a·E2 audit — the first wording measured the wrong string.** What is deleted is the three curve *values*, and those are 0 everywhere: `grep -oF 'cubic-bezier(0.2, 0.6, 0.25, 1)'` returns **1** in `web/references/frip/DESIGN.md` and **0** in `DESIGN.md`, **0** in `provenance.md`, **0** in this file, and the same holds for `cubic-bezier(0.4, 0.0, 1, 1)` and `cubic-bezier(0.25, 0.1, 0.25, 1)`. The bare token name is a different string and is **not** 0 across the outputs: `grep -oF 'cubic-bezier' … | wc -l` = **3** in the source, **0** in `DESIGN.md`, **3** in `provenance.md`, **3** in this file — every one of those six sitting inside a deletion record that names the curves as removed, which is mention, not carriage. Neither the source's trailing comment nor the sibling's 19 raw samples records any transition, animation, duration, or easing measurement, and `ease-exit`'s value is the one the legacy 0.1 spec template carries as an example. Deletion is scoped to the curve values only — the names, durations, roles, uses, rules, and reduced-motion contract are preserved — and the absence is named in Governance → Named gaps. |
| §4 mid-file footer **Verified** / **Tier 1** / **Tier 2** / **Conflicts unresolved** | 분리 → provenance Freshness / Tier 1 / Tier 2 | Quoted verbatim in the ledger. The 2026-07-02 date is dual (E2a). **Audit note:** the footer's two Tier-1 URLs also occur in the portable body — `grep -oF 'https://www.frip.co.kr/' DESIGN.md | wc -l` = **2** (lines 11, 121) and `grep -oF 'medium.com/frientrip' DESIGN.md | wc -l` = **2** (lines 11, 441) — but they reach it from their other legacy carriers, the YAML `homepage` field (row above) and §10's voice-sample marker at source line 343, so the footer is not their carrier. The Tier-2 lookups and the "Conflicts unresolved: none" line reach the body nowhere: `grep -oF 'getdesign' DESIGN.md | wc -l` = **0**, `'refero'` = **0**, `'Conflicts'` = **0**. |
| Trailing HTML comment (observations + evidence-class statements + method/scope line) | 분리 → provenance, quoted; 4개 항목은 옮김 → portable body | Dual (E2a). **Corrected by the B2a·E2 audit: this row said three, and the fourth destination was measured, not argued.** (1) the founding-specifics limit (adjacent to the brand account in Scope, line 17); (2) the interpretive-claims statement (adjacent to Principles, line 47); (3) the `document.title` string, published Frip copy in Content & Locales → Brand-published lines (line 439); (4) the **four product-detail surface paths** `/165667`, `/121737`, `/191730`, `/188510`. The comment's method-and-scope line is the source file's only carrier for those paths — `grep -oF '/165667' web/references/frip/DESIGN.md | wc -l` = **1**, at line 411, and the same for the other three — and each reaches portable Experience → Scope line 11: `grep -oF '/165667' DESIGN.md | wc -l` = **1**, `/121737` = **1**, `/191730` = **1**, `/188510` = **1**. They are dual, not ledger-only. The §-numbered addressing, the `.verification.md` pointer (`grep -oF '.verification.md' DESIGN.md | wc -l` = **0**), and the observation bullet list itself stay in the ledger. |
| Sibling `web/references/frip/.verification.md` (6,341 bytes) | 분리 → provenance Canonical proof; 값·분류 모두 승격하지 않음 (E1, B1) | **Adopted** as ledger evidence, not as portable authority. It supplies the read method, 19 raw samples, the conflict matrix, and the KR regional-source statement. Its sibling-only values — `line-height: 22px` on the homepage heading, the `64%` third discount example, every `rgb(...)` notation form, the carousel index button record with its `1 / 7` label and 16px radius, the product H1 sample text, every frequency count except the `×78` the source itself carries, the instrumentation detail, the refero fuzzy-match list, the fuller publication name, and its "three product-detail surfaces" count — each return 0 from a literal grep of `DESIGN.md`, listed with their greps in `provenance.md` → Sibling-only values. **Its structural classifications did not cross either:** the portable Type roles table uses only the role names the source `DESIGN.md` assigns, and `grep -oF 'section H2' DESIGN.md` = 0, `grep -oF 'product H2' DESIGN.md` = 0. A live-DOM read and the source `DESIGN.md` reconstruction are separate evidence domains, so adoption stops at the ledger. |
| Internal disagreement found during migration | 옮김 → Layout & Platforms, Foundations Motion, Components & States, Governance Named gaps; 분리 → provenance Freshness | One value-level disagreement the source footer's "Conflicts unresolved: none" does not record: §8 line 287 calls corner tags non-interactive labels kept out of the tap flow, while §15 line 405 gives tags a press response. Both sides are preserved where they sit, neither is selected, and the two badge components therefore declare no `Kind` and no state map (C4). |

## Named gaps check (D1a)

Every noun enumerated in Governance → Named gaps names a domain the source itself establishes, grep-verified against `web/references/frip/DESIGN.md`:

| Named gap | Source basis |
|---|---|
| the exact easing curve behind each of the three roles | §15 establishes `ease-enter`, `ease-exit`, `ease-standard` as roles with uses; their curve values carry no evidence and were removed |
| whether the corner tags are controls | §8 line 287 versus §15 line 405, quoted above; both sentences are in the source |
| the hover appearance of every control | §15's `motion-fast` row names "Card hover, tag press, focus"; no component record carries a hover appearance |
| a `focus-visible` appearance | the same `motion-fast` row is the only place the source writes `focus` — `grep -oF 'focus-visible' web/references/frip/DESIGN.md | wc -l` = 0 |
| the viewport evidence behind the breakpoint bands | §8 establishes three bands with widths and behavior; the recorded method is a computed-style read with no viewport measurement |
| the record behind `UI Frip` | §3 line 110 lists `UI Frip` inside the fallback stack and says nothing else about it |
| values for the Frip app and the 피드 / 메시지 / 찜 / 마이 destinations | §4 line 206 lists the five nav items; §4 line 159 and the token record establish the app-download bar; no measured value attaches to any of them |

No domain the source leaves unmentioned is listed. In particular no authenticated-account, help-center, native-client, parity, campaign, host-tool, minimum-width, 200%-reflow, reading-order, or overflow domain is enumerated. Two rows were drafted and cut for exactly this reason: a "first-party Frip logo file" gap, because the source establishes a favicon-proxy logo entry and never establishes that a first-party mark exists and is unresolved (this follows the approved handling of the same field on `flo`); and a "SUIT ownership, distribution, and license" gap, because the words `ownership`, `distribut`, and `licens` each occur **0** times in the source — the license question is stated in the Core-mandated Font evidence table instead, where §4.3 requires it, rather than as an enumerated unresolved domain.

## C2 — state applicability by role

Every `not-applicable` cell in the portable body gives a semantic role reason, and no cell cites absence of observation. Four controls declare a map; three components declare none — seven declared records in all. Measured: `grep -c '^| State | Applicability | Reason |' DESIGN.md` = **4**, `grep -c '^- Type: ' DESIGN.md` = **7**.

| Component | loading | error | success | Basis |
|---|---|---|---|---|
| Booking CTA `cta-primary` | applicable | applicable | applicable | Commits a booking. §14 records inline progress **on this 56px CTA** for the submit, a failure path with a retry, and a confirmation. Only the loading treatment sits on the control; the other two are placed beside it, so those treatments are omitted while applicability stands |
| App-Download Bar `app-download` | applicable | applicable | applicable | The control's own label 앱 다운로드 names a download — an operation that runs rather than a selection resolving at once. Where the operation resolves is not recorded, so no treatment is promoted, but the role carries all three meanings |
| Quantity / Option Pill `count-pill` | applicable | applicable | applicable | Validation resolves *on this field*: §14's form-validation row places the message below this `1px #dddddd` pill. A field that renders a failure can render a pending or resolved state too |
| Top Navigation Tab `nav-tab` | **not-applicable** | **not-applicable** | **not-applicable** | Its meaning is active versus resting; it selects a destination and runs no operation in place that could be pending, fail, or confirm |
| Experience Card / Exclusive Tag / Superhost Tag | — | — | — | No map declared (C4). The card because the source gives it a surface record and no control role; the two tags because the source disagrees with itself about whether they are controls, and deciding would resolve a conflict the migration must preserve |

`default`, `hover`, `focus-visible`, and `disabled` are `applicable` on all four declared maps. Treatments are present only where the source records one — the CTA's `#eeeeee` sold-out appearance, the CTA's inline submit progress, the pill's field-level validation message — and omitted otherwise. No `focus-visible` row carries a colour value, because the source's only `focus` mention is a 120ms motion-scale entry with no treatment attached (B1).

Two C2 judgments worth naming for review, so they are visible rather than silent:

1. **The app-download bar is opened rather than closed.** Its `type` is `button` and it is chrome, which invites the destination-link reading that would close loading/error/success. The reason it is opened instead is its own published label: 앱 다운로드 names a download, an operation. Where that operation resolves is unrecorded, so treatments are omitted and only applicability stands. Closing it would have required deciding, from no record, that it is a pure destination.
2. **The two corner tags declare no map at all** rather than `kind: non-interactive`. Core §4.4 would accept the latter with a reason, and §8 supplies one verbatim. It is not used because §15 contradicts it in the same file, and choosing between them is exactly the "most plausible value" a migration must not choose.

No booking-condition or listing-condition state was introduced. `pending`, `waitlisted`, and `cancelled` are absent from the source and absent from the portable body; the Capture record states in one sentence that the seven canonical states are the only ones any component declares.

## Final passes

**Pass 1 (B2a).** The body was re-read from line 1 and every causal, interpretive, or evaluative sentence was classified as brand-published fact, recorded observation, or editorial reading. **Eight items failed that classification on the re-read and were corrected before submission:**

| # | Location | Was | Now |
|---|---|---|---|
| 1 | Scope ¶1 | "Frip (프립) is a Korean marketplace where people book experiences…" and the positioning gloss, both stated flatly | Both attributed: the marketplace description is recorded as the reviewed material's own, and the category-leader line is recorded as a claim the product makes about itself rather than a finding of this record |
| 2 | Scope ¶3 and Named gaps | "the app that the 앱 다운로드 bar **advertises**" | "cross-sells" — the source's own word for that bar, in both places |
| 3 | Experience → Audience | "the product is Korean-language and **consumer-facing**"; "a host-trust badge and a **first-party-inventory tag**" | The unrecorded classification is dropped and the two components are named by their published labels: "it carries the 슈퍼호스트 host-trust badge and the 프립단독 corner tag" |
| 4 | Foundations → Semantic color | Seventeen role bullets whose use descriptions read as observations | A head sentence states that the values and role names are recorded while each use description beside them is the material's own role statement |
| 5 | Foundations → Semantic color, Frip Violet | "— the system's single 'do this / trust this' color", stated flatly | "…which the reviewed material calls the system's single 'do this / trust this' color" |
| 6 | Typography & Assets → Assets | "Experience thumbnails, **host imagery**, and hero carousel imagery are **first-party catalog content**" | The source establishes no host imagery, so that item is cut; the remaining two are described as "catalog content carried by the read surfaces" rather than given an ownership class the source does not state |
| 7 | Quantity Pill, `disabled` reason | "the record's own sold-out case removes the booking, not the field" | "the record's own sold-out treatment is written for the booking CTA rather than for this field" — what the record actually says |
| 8 | Content & Locales, Brand-published lines and Terminology | "the bare error word 오류 that the state contract **tells the product not to ship alone**"; "고감도 경험 is the phrase **the curation shelf uses for its recommendations**"; a keep-in-Korean instruction attributed to the material | All three restated as document facts: what §14 says about 오류, where 고감도 경험 sits (inside 크루님을 위한 고감도 경험), and the keep-in-Korean rule stated as this contract's A5 rule rather than as the material's instruction |

One further defect was caught by the same pass and is recorded separately because it is a rule violation rather than a wording choice: the brand-account paragraph in Scope closed only as a "derived editorial interpretation of first-party material" without naming the brand. B2a requires the evidence class to be closed all the way; it now reads "it is not Frip-authored or a separately published brand statement." Before the fix the two counts disagreed — `derived editorial` 13 against `not Frip-authored` 12 — which is how it was found.

No token value, component-table value, or state applicability verdict was changed by any of the nine; all are sentence-level. After the fixes, thirteen readings carried an adjacent complete qualification — `grep -o 'derived editorial' DESIGN.md | wc -l` = 13 and `grep -o 'not Frip-authored' DESIGN.md | wc -l` = 13, on the same 13 lines.

**This pass missed a fourteenth, and the separate-session B2a audit found it (`audit-log.md`).** The reading that the 프립단독 tag flags first-party inventory is attributed in Foundations → Semantic color (94) and on the Exclusive Tag record (338), and Pass 1 item 3 above deliberately stripped the same classification out of Audience — yet Content & Locales → Terminology (453) restated it flat, as an unattributed product fact. The audit attached the qualification there. Current measurement: `grep -o 'derived editorial' DESIGN.md | wc -l` = **14** and `grep -o 'not Frip-authored' DESIGN.md | wc -l` = **14**, on the same 14 lines (15, 17, 47, 57, 70, 159, 181, 203, 220, 243, 412, 414, 433, 453). The 1:1 map of occurrence to portable location is the *Portable derived-editorial scope* table in `provenance.md`, which now carries 14 rows. The opposite error was checked too: recorded values were not demoted by attaching a qualification to them. Each qualification paragraph names its recorded parts separately — `box-shadow: none` and the scrim under Elevation, the three durations and three easing roles under Motion, the seven table rows under Type roles, the restated component values under the state contract, the eight measurements under Layout — and the three verified-live voice samples carry no qualification at all, because they are published strings.

**Pass 2 (E2 cross-check).** Every row above was written after grepping the actual files, not from memory. Dual and multi-destination values name every destination. Counts are `grep -oF … | wc -l` with the counted unit stated — occurrences, not lines. Compliance claims are made only where the body carries the text: the B3 promotion gate is claimed because Foundations → Motion states all five evidence kinds — transition properties, animation name, duration, easing, reduced-motion behavior — plus the per-component computed-observation gate and the explicit "a single named curve or duration is not that gate" clause; the C3 statement is claimed because the Capture record says "State coverage is not complete here."

**Four claims written from memory were wrong and were corrected against the greps.** They are listed because the correction is the point of this pass:

| Claim as first written | Measured | Fixed to |
|---|---|---|
| `#7a29fa` reaches 20 portable locations | 8 | 8, with the line list |
| `2026-07-02` reaches 5 portable locations | 4 | 4, with the line list |
| Eight `Type:` lines, five state maps | 7 and 4 | 7 declared components with `cta-disabled` folded as a named appearance; 4 maps and 3 without |
| `commute` occurs 0 times in the portable body | 1 | 1, at Audience line 31, inside the sentence naming what is *not* carried forward |

| Claim | Re-measured |
|---|---|
| 15 non-Latin needles in the source; the gate's `copy-loss` check was armed | 15 extracted by replaying the gate's own needle regex; no `unchecked` entry returned |
| Korean strings in the source versus the portable body | every one present — see the A5 table — except `혼자여행`, which goes 1 → 0 and is dispositioned above |
| `#7a29fa` / `2026-07-02` / `프립` in the body | 8 / 4 / 20 |
| `1.33` / `1.40` / `1.50` in the body | 2 / 2 / 4 — ratios preserved, not converted (A1a) |
| `Type:` lines / state tables in the body | 7 / 4 |
| the three `cubic-bezier(...)` curve **values** in the source / in the three outputs | 3 / 0 — three removed, and the removal is dispositioned. Re-measured by the audit: the bare token name `cubic-bezier` is 3 / 0 / 3 / 3 (source / `DESIGN.md` / `provenance.md` / this file), all inside deletion records |
| `focus-visible` in the source | 0; `focus-visible` table rows in the body carrying a hex: 0 |
| `verification_v2`, `ds.type` in the source | 0 each |
| `Conflicts` in the source | 1 — the footer's "Conflicts unresolved: none" |
| sibling-only values in the portable body | 0 each, with a literal grep per value in `provenance.md` |
| sibling structural classifications in the body (`section H2`, `product H2`) | 0 each |
| persona names, cities, and persona-only phrases in the body | 0 each; in `provenance.md` and this file they occur only inside the deletion records |
| §9-only values | none — every §9 token occurs outside §9, so A3 required no move |
| D1 trigger phrases in the body (`not captured`, `were not`, `없었`, `않았다`, `미기록`) | 0 — no negative coverage sentence exists to introduce source-absent vocabulary |
| `not-applicable` cells citing non-observation | 0 — every one gives a role reason |
| coverage sentences in the body | 1, "State coverage is not complete here" — negated, as required |
| `Tier`, `provenance`, `live-extract`, `components_harvested`, `consumer-tech` in the body | 0 each |
| portable body line count (for the line references above and in `provenance.md`) | 502 |

## Gate

`node test-v2/tools/migrate-reference.mjs --brand frip --gate-only` → **PASS**, `problems: []`, no `unchecked` entry.

**Coverage, transcribed by the B2a·E2 audit — the first version of this section recorded the verdict and dropped the `coverage` block the gate actually emits.** The gate returns one coverage row:

```
{ "check": "copy-loss", "compared": 32, "candidates": 206,
  "detail": "인용 문자열 206개 중 32개만 비교했다 — 나머지는 라틴이라 바늘이 되지 않는다. 라틴 전수 대조는 손으로 하라." }
```

So the machine compared **32 of 206** quoted strings — **15.5%**. The 15 distinct non-Latin needles counted below are runs *inside* those 32 quotations, which is why 15 and 32 are different numbers and neither is the coverage ratio. PASS therefore means "nothing was lost among the 32 compared", not "the copy was preserved".

Portable Core: `inspectDesignMd(...).conformance` from `scripts/design-md-core.cjs` → `portable_core: true`, `level: "portable-core"`, `reasons: []`, all seven claims present exactly once, `claim_locale: en`, `count=4` matching the four rendered primary tasks. Run separately from the gate, because the gate does not compare canonical claim bytes.

No gate block was hit during the run: the token bag was checked against the legacy before the first gate call and came back with zero invented and zero lost tokens, and no finding was worked around by changing notation (E3).

**The gate is not evidence of conformance for any of this.** D1a, C2, B2a, and E2 are sentence-level judgments the gate does not evaluate; it returns the same PASS whether the qualifications are adjacent and complete or absent, and its `copy-loss` check compares only non-Latin runs.

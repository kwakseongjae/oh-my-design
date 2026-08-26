# Farfetch migration log

Source: `web/references/farfetch/DESIGN.md`
Destination: `docs/design-md-weight/migrated/farfetch/DESIGN.md`
Sidecar: `docs/design-md-weight/migrated/farfetch/provenance.md`
Date: 2026-08-26
Rulebook version: **v9**
Revision: **웨이브 23 개정 (2026-08-26)** — C2 3건 · D1/D1a 2건. 개정 내역은 맨 아래 «웨이브 23 개정» 절.
Gate: `test-v2/tools/migrate-reference.mjs --brand farfetch --gate-only` → PASS, problems `[]`
Portable Core: `scripts/design-md-core.cjs` `inspectDesignMd` → `portable_core: true`, `level: portable-core`, `cleanTop: true`, failed checks 0
Process-leak scan: `test-v2/tools/process-leak-check.mjs` `findProcessLeaks` on the portable body → 0 hits

Every row below was checked by grep against the actual files before it was written.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `verified`, `omd`) | 분리 → provenance | Portable file carries no frontmatter. Name survives as the H1 `Farfetch Design System`. |
| YAML `logo` (favicon URL, `type: favicon`) | **이중 목적지** — 분리 → provenance Identity 표 **and** 옮김 → Typography & Assets | provenance:15 records it as the catalog identity image; the body records the same URL under Assets → "Catalog identity icon", labelled a third-party favicon service URL rather than a Farfetch-distributed logo asset. |
| YAML `tokens.source` / `tokens.extracted` / `components_harvested` | 분리 → provenance | Extraction ledger, not a design value. |
| YAML `tokens.note` | 분리 → provenance (verbatim blockquote) | The note's design content (Carbon on CTA/nav/body/footer inversion, Paper canvas, zero radius) is separately carried in Foundations → Semantic color, Shape and Elevation; the note string itself is a ledger annotation. |
| YAML `tokens.colors` (8 keys) | 옮김 → Foundations → Semantic color | All eight keys keep their role names and hexes: primary/Carbon, canvas/Paper, graphite/Graphite, muted/Ash Gray, hairline/Smoke, surface/Surface–Stone, on-primary/On-Primary, error/Error. `#f5f5f5` keeps **both** source names (Surface in §2, Stone in §7/§9). `#cc0000` keeps its own source qualification "not present on homepage, standard ecommerce convention". |
| YAML `tokens.typography.family` (sans + fallback) | **이중 목적지** — 옮김 → Typography & Assets → Family/Font evidence **and** 분리 → provenance claim ledger | Body carries `"Farfetch Basis"` and the `"Helvetica Neue", Arial, sans-serif` fallback with a "fallback, not the brand face" constraint; provenance:46 holds the computed `body` line and provenance:93–94 hold the two family claim-ledger rows (`family.sans`, `family.fallback`). |
| YAML `tokens.typography.*` roles (display-hero, section, nav-primary, caption, button) | **이중 목적지** — 옮김 → Typography & Assets → Type roles **and** 분리 → provenance claim ledger | Each token name is kept as a column in the Type roles table, with size/weight/line-height/tracking/use. Unitless line heights stay unitless: `1.20`, `1.31`, `1.33`. Tracking stays `-0.3px`. |
| §3 "Sub H2" row (15px / 700 / 1.33, "New In"/"Bags"/"Shoes") | 옮김 → Typography & Assets → Type roles | This role exists only in the §3 table, with no token name; kept as its own row with `—` in the token column so it is not merged into `button`. |
| YAML `tokens.spacing` (7 keys) | 옮김 → Foundations → Spacing | Kept as a key→value table (`xs` 4px … `section` 96px) so a step is not lost behind a repeated number elsewhere in the scale. |
| YAML `tokens.rounded` (sm/md/lg/full) | 옮김 → Foundations → Shape | All four keys named explicitly and stated to resolve to 0. |
| YAML `tokens.shadow.none` | 옮김 → Foundations → Elevation | "The shadow token is `none`", alongside the live `box-shadow: none` observation. |
| YAML `tokens.components` (7 entries) | 옮김 → Components & States | Each entry keeps its verified primitive (`button` ×2, `input`, `card`, `tab`, `badge`, `listItem`) rather than being flattened to "interactive". Six of the seven `use` strings sit on an explicit `Declared use:` line (button-primary, input-email, product-card, nav-tab, badge-sale, footer-link); button-outline has no such line — its `use` string `Secondary actions, ghost variant` survives byte-for-byte inside the component's Role line, `Role: Secondary actions, ghost variant on white canvas`, which is the §4 wording that extends it. `nav-tab.active` survives verbatim as `text #222222`. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim + Distinctive traits | Product/surface scope, binary monochrome, 0px radius, shadow absence, two-weight type, footer inversion. The eight Key Characteristics move to Distinctive traits with their values intact. |
| §1 interpretive readings ("engineered to disappear", "white-gloved attendant", "luxury signal") | 옮김 → Experience `scope` + Distinctive traits, with adjacent qualification | Carried as derived editorial implementation inference, explicitly not Farfetch-authored or a separately published UI specification. |
| §2 Color Palette & Roles | 옮김 → Foundations → Semantic color | See the colors row. The role names and the "monochrome ladder" framing carry an adjacent evidence-class qualification; the hexes do not. |
| §2 vs §7 `#f5f5f5` nav-hover tension | 옮김 → Foundations → Semantic color **and** 기록 → provenance | Both statements preserved verbatim in the body and neither promoted; provenance records that the source's own footer says "Conflicts unresolved: none", so the tension is not one the source flagged. |
| §3 Typography Rules (family, hierarchy, principles) | 옮김 → Typography & Assets | Font evidence table distinguishes live computed surface-use, cross-surface corroboration, fallback stack and unresolved claim. Type rules keep "two weights, total", "no decorative type", the 30px ceiling with "no hero headline at 48px or 56px", and "15px as the system base". |
| §4 Component Stylings (10 blocks) | 옮김 → Components & States | Ten component blocks: Primary CTA Button, Outline / Secondary Button, Product Tile, Section Container, Email Newsletter Input, Search Field, Top Navigation Tab, Footer Link, Sale / Promotion Label, Graphite Utility Badge. Anatomy, colors, radius, padding, height, font and use are preserved per component. |
| §4 primary button hover ("subtle brightness reduction on Carbon bg") + §9 variant wording ("slight opacity reduction") | 옮김 → Components & States → Primary CTA Button | Both wordings carried on the same component; neither dropped and neither declared the winner. |
| §4 footer "Verified / Tier 1 / Tier 2 / Conflicts unresolved" block | 분리 → provenance | Freshness and source ledger. The evidence-class boundary needed for standalone reading stays in the body as adjacent qualification. |
| §5 Layout Principles | 옮김 → Layout & Platforms | 8px base and the 7-step scale (also in Foundations → Spacing, which is the token home; Layout keeps the applied values: 24px column gaps, 48–72px rhythm, 10px 12px nav padding), ~1280px max width, full-bleed hero, 4-column grid, three-zone header, multi-column footer, announcement bar, zero-padding tiles, 0px radius scale. |
| §5 "Photography as whitespace" | 옮김 → Layout & Platforms → Whitespace, with adjacent qualification | Interpretive; carried as derived editorial implementation inference. |
| §6 Depth & Elevation | 옮김 → Foundations → Elevation | The four-level table moves intact. The Shadow Philosophy paragraph is carried with adjacent qualification because its content is a reading of an absence, not a measurement. |
| §7 Do's (8) | 옮김 → Experience → Principles (application rules list) | Kept verbatim as rules, under the same qualification as the five principles. |
| §7 Don'ts (8) | 옮김 → Experience → Avoid | Kept verbatim, plus two scope-guard entries: do not substitute the fallback stack for Farfetch Basis, and do not present the homepage record as proof of checkout, account, app or help behavior. The guard names only domains the source itself establishes — `checkout`/`Checkout` (source :38, :110, :118), `account` (:216, :304), `app` (:305 "FARFETCH app", :365), `help`/`Help` (:305 footer column, :328 "Footer help links"). `campaign` and `help-surface` were removed at wave 23 under D1/D1a: measured `grep -o` on the source returns 0 for both. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | Breakpoint table, touch targets (44px nav, 44px button, 34px footer link), collapsing strategy and image behavior all preserved, with an adjacent qualification that the inspect measures one rendered page. The measured values (64px, 44px, 42px, 34px) are named as measured. |
| §9 Quick Color Reference | 삭제 | Every mapping restates a §2 role that is already in Foundations → Semantic color (Carbon CTA/body/nav/footer, Paper background, Graphite muted text, Ash Gray placeholder/icon, Smoke hairline, Stone hover surface, white on Carbon). Verified present before deleting; nothing unique to this list. |
| §9 Example Component Prompts | 삭제 (값은 먼저 이전) | Tool-specific packaging removed **after** moving every value that existed only here: `64px` header bar → Layout → Grid and container; product-tile brand name `13px / 700` above the caption → Product Tile anatomy; header utility icons in `#222222` → Assets → Icons and Layout header; footer column grouping with "Company (About us, Careers, FARFETCH app)", "Customer Service (Contact us, FAQs, Orders and delivery)", "Help" → Layout → Grid and container, with the labels also listed in Content → Verbatim copy and on the Footer Link component; "slight opacity reduction" → Primary CTA Button hover. |
| §9 newsletter prompt detail: input with a bottom underline `1px #b6b6b6` | 삭제 | Contradicted inside the source itself: `tokens.components.input-email` records `border: 0px` with the use note "no border, **underline-only on search**", and §4's Email Newsletter Input repeats `Border: 0px (none)`. The underline is carried where the source assigns it — on the Search Field. Value `1px` / `#b6b6b6` survives there. |
| §9 Iteration Guide (7 items) | 삭제 | All seven restate rules already carried: zero radius (Foundations → Shape), two interactive colors (Distinctive traits, Avoid), two weights (Type rules), photography as the only decoration (Principles 1, Layout → Whitespace), no shadows/gradients/accents (Elevation, Avoid), 15/22/30px type (Type roles, Type rules), footer inversion (Principles application rules, Elevation). Verified present before deleting. |
| §10 Voice & Tone | 옮김 → Content & Locales | Voice paragraph, the six-row tone table and the forbidden register move intact. |
| §10 verbatim voice samples (4, marked verified live) | **이중 목적지** — 옮김 → Content & Locales → Verbatim copy **and** 분리 → provenance (`document.title`, the SS26 H2 and the H3 in the live-inspect table) | Carried byte-for-byte, including capitalisation: "FARFETCH UK \| The Global Destination for Modern Luxury", "SS26 sale: up to 60% off womenswear, menswear and kidswear", "Never miss a thing", "Designer Clothing for Women \| Shop Online \| FARFETCH". |
| §10 published labels ("Womenswear", "Menswear", "Kidswear", "New In", "Bags", "Shoes", "Sign Up", "Add to Bag", "SALE", "NEW IN", "PRADA", "Saint Laurent", "Contact us", "FAQs", "About us", "Orders and delivery", "Returns and refunds", "global destination for modern luxury") | 옮김 → Content & Locales (+ component `Declared use` lines) | Moved as bytes. Case is preserved as published — "SALE" and "NEW IN" stay in caps while "SS26 sale: up to 60% off" stays lowercase; the body states that rule explicitly. |
| §11 Brand Narrative (2007 / José Neves / London, fragmentation thesis, "the world's fashion marketplace", asset-light model, Browns / Stadium Goods / New Guards Group / Off-White, NYSE 2018, ~$23B 2021, 2023–2024 restructuring, Coupang January 2024, London HQ) | **이중 목적지** — 옮김 → Experience `scope` claim **and** 분리 → provenance Narrative section | Carried in the body as widely documented public-record facts, explicitly not statements published by a Farfetch design organisation. |
| §11 closing interpretation ("aspiration statement", white-cube gallery, couture display window) | 옮김 → Experience `scope`, with adjacent qualification | Derived editorial implementation inference. |
| §12 Principles (5, each with a UI implication) | 옮김 → Experience → Principles | All five kept with their UI implications and their numbers (3,000+ boutiques, 190+ countries). The section head carries the full evidence-class qualification. |
| §13 Personas (4 named archetypes) | **삭제** | The source labels them fictional archetypes twice — the visible §13 note and the source comment. Not promoted to Audience or primary tasks, and **not re-hosted in provenance**: no names, ages, cities, occupations or demographic segments appear there. The persona-only string "only 3 left!" is dropped with them; the §10 forbidden-register string "Only 2 left!" is a different string and is preserved. Audience instead names only the group-level segments the source states (luxury fashion buyers, boutique-to-global shoppers, independent boutiques, 190+ countries). |
| §14 States (11 rows) | 옮김 → Components & States → State contract (본문 보존) + per-component applicability | The eleven-row table is reproduced verbatim, including its copy ("Sorry, no results found for [term].", "Your wishlist is empty.", "This item is currently unavailable.", "Please enter a valid email address.", "Added to bag.", "You're signed up.") and its values (`#f5f5f5` skeletons, `#cc0000` field error at 13px, opacity 0.4 disabled, 1px `#b6b6b6` search progress underline, 1px strikethrough). Where a treatment names a component, it lands on that component's state row. |
| §14 applicability | 옮김 → per-component 7-state tables | Applicability judged by the control's role, never by whether a treatment was observed and never by the primitive's kind alone (C2). `loading`/`error`/`success` are `applicable` where the control commits an operation it must report on — Primary CTA Button, Outline / Secondary Button (source role `Secondary actions, ghost variant`), Email Newsletter Input, Search Field — and `not-applicable` where the control's role is destination selection: Top Navigation Tab (:336–338) and Footer Link (:355–357), whose reasons are the navigation role itself, not the absence of an observation. Measured after the wave 23 revision: `grep -o '| not-applicable |'` = 6 rows, all six on those two components. Non-observation is never used as a `not-applicable` reason. No component is declared state-complete; the body says "This is not a complete state-coverage claim." Product Tile and Graphite Utility Badge declare **no** kind and no applicability map because the source establishes no interactive control role for either; Section Container and Sale / Promotion Label declare `kind: non-interactive` with a reason. |
| §15 duration tokens (`motion-instant` 0ms, `motion-fast` 120ms, `motion-standard` 200ms, `motion-slow` 300ms) | 옮김 → Foundations → Motion | Names, values and uses preserved. Not deleted: the approved easing verdict limits deletion to unsourced curves, and durations differ per brand. |
| §15 easing tokens `ease-enter` / `ease-exit` / `ease-standard` | 옮김 (이름·용도) → Foundations → Motion · **커브 값 삭제** → provenance 생략 원장 | Token names and uses survive in the body; the three `cubic-bezier(...)` values are removed as unsourced (the live inspect covers computed static styles) and are recorded in the provenance omission ledger with their exact original values, together with the note that `cubic-bezier(0.4, 0.0, 1, 1)` is the value the approved verdict identifies as a re-injected default. The exact curves are named as a gap in Governance. Governance names two gaps only — the easing curves and a live form-validation error observation — both of which the source itself establishes; no font-distribution, licensing, native-app or locale domain is enumerated as a gap, because the source never establishes those domains. |
| §15 motion rules + `prefers-reduced-motion` contract | 옮김 → Foundations → Motion | Flyout/cart-drawer pairings, no-fade-in tiles, no bounce/spring/parallax, and the reduced-motion collapse to `motion-instant` are all carried. A promotion condition is stated in the body: any curve requires a per-component computed observation of transition properties, animation name, duration, easing and reduced-motion behavior on a live Farfetch surface. |
| §15 signature absence (no hover animation on product tiles) | 옮김 → Foundations → Motion | Cursor change and wishlist heart appearance preserved; the "prevents the page feeling kinetic" reading carries an adjacent qualification. |
| Source HTML comment — Tier 1 live inspect measurements | 분리 → provenance (Sources → Tier 1 table) | Every computed line preserved, including `rgb(...)` forms, the 42px email-input height, the shadow line, the frequency scan (2200+ instances, secondary 22) and `document.title`. |
| Source HTML comment — Tier 2 refero cross-check | 분리 → provenance (Sources → Tier 2) | Palette, 0px radius, typeface and footer inversion confirmations; `getdesign.md/farfetch` not listed. |
| Source HTML comment — narrative sourcing note, persona disclaimer, interpretive-claims note | 분리 → provenance | The interpretive-claims boundary is also enforced in the body as adjacent qualification on every interpretive passage, which is why it is not left to the sidecar alone. |

## Final passes

**Pass 1 — B2a scan.** The body was re-read end to end and every causal, interpretive or evaluative sentence was classified. Re-collated after the separate-session audit: **twenty** passages carry the qualification, and all twenty use the complete form — "a derived editorial implementation inference from the verified surfaces; it is not Farfetch-authored or a separately published UI specification" — rather than stopping at "derived from verified surfaces". Counted at wave 23 with `grep -o "derived editorial implementation inference" | wc -l` = **20 occurrences on 20 distinct lines** (occurrences of the clause opening, not line count); of those, `grep -o` on the full singular clause returns **14**, and the remaining **6** (lines 42, 46, 151, 193, 207, 417) carry the identical clause in plural agreement — "they are not Farfetch-authored or a separately published UI specification" — so all twenty are the complete form. At `DESIGN.md` lines 11 (Scope, interface reading), 15 (Scope, closing aspiration reading), 42 (Distinctive traits), 46 (Principles head), 54 (the Do's application-rules lead-in), 67 (Avoid), 97 (Semantic color — role names and the ladder framing), 99 (Semantic color — the `#f5f5f5` nav-hover tension), 119 (Shape — the 2px rule's rationale), 130 (Elevation — shadow philosophy), 151 (Motion — durations, easing roles, rules), 153 (Motion — signature absence), 193 (Type rules — size ceiling, neutral-by-design, 15px evenness), 199 (Assets — photography carrying visual drama), 207 (State contract — the eleven treatments), 392 (Layout → Whitespace), 417 (Layout → responsive reconstruction), 424 (Content → Voice register), 437 (Content → verbatim-copy characterisations), 452 (Content → Locales, cross-storefront generalisation).

The first version of this paragraph claimed nineteen and listed a set that included line 54 while omitting line 99: line 54 then carried only a back-reference ("the same qualification as the five items above") rather than the full clause, and line 99 was qualified but unlisted. The audit rewrote line 54 to the complete form and re-measured, so the claim and the body now agree.

**Pass 2 — E2 collation.** Each row above was confirmed by grep against `DESIGN.md` and `provenance.md`, and re-confirmed after the audit edits. Destinations re-measured at wave 23: `grep -o '이중 목적지' migration-log.md | wc -l` = **6 occurrences** — that count is occurrences of the label string, which resolves to **five ledger rows** plus this sentence's own mention, not six rows. Five rows carry the **이중 목적지** label (`logo`, `tokens.typography.family`, `tokens.typography.*` roles, the §10 voice samples, the §11 brand narrative) and a sixth — the §2 vs §7 `#f5f5f5` tension — states two destinations without the label; all six name both destinations and both were found in the files; `Declared use:` lines number six, not seven, and the row above now says so with button-outline's actual carrier named; the `tokens.typography.family` row now cites `provenance:46` for the computed line and `provenance:93–94` for the two claim-ledger rows. No compliance claim in this log is stronger than the body: the motion promotion condition claimed above is present in the body naming all five evidence kinds and the per-component gate; the "not a complete state-coverage claim" sentence is present; the persona non-rehosting claim was re-verified by grepping all three output files for every persona name, age, city and segment (0 hits). The audit's four body edits changed qualification prose only — no token value, component table, state applicability or section boundary moved, so every destination row above still resolves.

## Known limits reported rather than worked around

- The gate's `copy-loss` check only builds needles from non-Latin runs, so this reference's Latin brand copy is not machine-verified. Every quoted string in the source was checked against the outputs by script instead; the only quoted strings absent from the outputs are three YAML escape artifacts (`Farfetch Basis\`, `, fallback:`, `Helvetica Neue\`) and the persona-only `only 3 left!` dispositioned above.
- The gate's token-loss check counts values, not keys, so `tokens.spacing` and `tokens.rounded` steps could have vanished behind numbers reused elsewhere in the document. Both were therefore migrated as explicit key→value tables and re-checked key by key.

## 웨이브 23 개정 (2026-08-26, 규칙집 v9)

의미 검토(grok-4.6)가 확정하고 오케스트레이터가 실측 재확인한 FAIL 5건을 고쳤다.
토큰 값·컴포넌트 스타일 값·섹션 구조·원본은 건드리지 않았고, F3 감사자의 8건 수정도
전부 그대로다(`:99`의 문서사실 재분류 포함).

### C2 — primitive 종류만으로 상태를 연 자리 3건

C2는 applicability를 **역할 의미**로 판정하라고 요구하는데, 세 자리의 사유가
"Button control" / "Interactive control", 즉 primitive 종류 이름뿐이었다.

1. **`DESIGN.md:261–263` — Outline / Secondary Button, 판정 유지(`applicable`)·사유 교체.**
   원본이 이 컨트롤의 역할을 무엇으로 기록하는지 실측했다:
   `web/references/farfetch/DESIGN.md:39` 의 `button-outline: { type: button, …,
   use: "Secondary actions, ghost variant" }` 와 `:127` 의
   `Use: Secondary actions, ghost variant on white canvas`. 원본이 스스로 이 컨트롤을
   **행위(action)** 트리거로 기록하므로 — 목적지 선택자가 아니라 — 사용자가 결과를
   기다리는 연산이 존재하고 loading/error/success는 역할상 의미가 있다. 판정은 그대로
   두고 사유를 역할 의미로 다시 썼다("an action trigger the user waits on" /
   "a committed action can fail" / "…can complete"). 시각 treatment는 여전히 미해상이라
   `visual treatment omitted` 는 남겼다 — 그것은 treatment 생략 표기이지 applicability
   사유가 아니다(C1).
2. **`DESIGN.md:336–338` — Top Navigation Tab, `applicable` → `not-applicable`.**
   역할은 Womenswear / Menswear / Kidswear 사이의 **목적지 선택**이다(원본 `:216`,
   `:304` 의 three-zone header 기술, `nav-tab.use: "Top nav: Womenswear / Menswear /
   Kidswear"`). 탭 자신은 어떤 연산도 커밋하지 않으므로 보고할 진행 중 작업이 없고,
   실패·완료는 목적지 화면이 보고한다. 사유는 전부 그 역할 문장이며 관측 부재는
   쓰지 않았다.
3. **`DESIGN.md:355–357` — Footer Link, `applicable` → `not-applicable`.**
   같은 링크 역할이다("Contact us", "FAQs", "About us" 로 가는 푸터 내비게이션).
   목적지를 선택할 뿐 pending 될 연산이 없고, 도달 자체가 결과다.

**연쇄 수정 1건(같은 결함의 발원 문장).** `DESIGN.md:223` 의 State contract 총칙이
"where none is named, the state stays applicable" 라고 적어, 이름 붙은 treatment가
없으면 무조건 applicable 이라는 C2 위반을 규범으로 세우고 있었다. 총칙을
"`loading`, `error` and `success` are judged against what each control is for" +
"where a state applies by role and no treatment is named…" 로 고쳐 표와 일치시켰다.
C1 문장("The absence of a recorded treatment is never a `not-applicable` reason.")과
C3 문장("This is not a complete state-coverage claim.")은 그대로다.

### D1/D1a — 원본이 세우지 않은 도메인 2건

실측(`grep -o … | wc -l`, 문자열 출현 수):

| 낱말 | 원본 `web/references/farfetch/DESIGN.md` | 개정 전 이관본 | 개정 후 이관본 |
|---|---|---|---|
| `campaign` | **0** | 2 | **0** |
| `help-surface` | **0** | 1 | **0** |

4. **`DESIGN.md:9` — Scope.** "…the checkout, account, wishlist, app, help, or
   campaign surfaces…" 에서 `campaign` 을 삭제했다. 원본이 그 도메인의 존재 자체를
   세우지 않으므로, 미해상 표면으로 열거하는 것 자체가 D1a 위반이다.
5. **`DESIGN.md:78` — Avoid(부정 claim).** "…checkout, account, app, help-surface or
   campaign behavior." 에서 `campaign` 과 `help-surface` 를 삭제했다.

같은 문장에 남은 라벨은 전부 원본이 쓴 것임을 grep으로 확인한 뒤 유지했다:
`Checkout`/`checkout`(원본 :38, :110, :118), `account`(:216, :304),
`wishlist`(:216, :304, :374, :406), `app`(:305 "FARFETCH app", :365),
`Help`/`help`(:305 푸터 컬럼 "Help.", :328 "Footer help links").
`help-surface` 라는 하이픈 합성어는 원본에 0회이므로 삭제하되, 원본이 실제로 쓰는
라벨 `help` 로 도메인을 남겼다 — 원본 라벨로 쓰면 D1 위반이 아니고, 원본이 세운
도메인을 근거 없이 지우는 것도 손실이기 때문이다.

### 원장 포인터 전수 재검증 (실측 grep)

계수는 전부 `grep -o … | wc -l`(문자열 출현 수)이며, 무엇을 셌는지 함께 적는다.
`grep -c`(줄 수)는 쓰지 않았다.

| 포인터 / 계수 | 실측 | 판정 |
|---|---|---|
| `provenance:15` — favicon identity 행 | Identity 표의 `logo` 행: favicon URL `https://www.google.com/s2/favicons?domain=farfetch.com&sz=128` (type: favicon) | 유효 |
| `provenance:46` — computed `body` 줄 | Tier 1 표의 `body` 행: font-family `"Farfetch Basis", "Helvetica Neue", Arial, sans-serif` · color `rgb(34,34,34)` · 15px · bg `rgb(255,255,255)` | 유효 |
| `provenance:93–94` — family claim 2행 | 93 = `family.sans`, 94 = `family.fallback` | 유효 |
| Pass 1 의 `DESIGN.md` 20개 줄번호 | 11·15·42·46·54·67·97·99·119·130·151·153·193·199·207·392·417·424·437·452 — 20/20 해당 줄에 한정 절 존재 | 유효 |
| B2a 한정 계수 | `grep -o "derived editorial implementation inference" \| wc -l` = **20**(절 도입부 출현 수, 20개 서로 다른 줄); 완전 단수형 절 출현 = **14**, 나머지 6(42·46·151·193·207·417)은 복수 일치형 "they are not …" | Pass 1 문구를 실측 방식과 함께 재기술 |
| `이중 목적지` 계수 | `grep -o '이중 목적지' migration-log.md \| wc -l` = 6(라벨 문자열 출현 수) = 표 5행 + Pass 2 본문 언급 1 | "다섯 행" 주장 유효, 세는 대상 명시로 정정 |
| `Declared use:` 계수 | `grep -o 'Declared use:' DESIGN.md \| wc -l` = **6**(줄 수가 아니라 출현 수) | 유효 (7개 중 6개, button-outline 은 Role 줄이 운반) |
| 상태 행 총수 / `not-applicable` | 상태 행 출현 42(6 컴포넌트 × 7), `\| not-applicable \|` 출현 **6** | 개정 후 실측치로 갱신 |
| `campaign` / `help-surface` | 이관본 0 / 0 (위 표) | 개정으로 해소 |
| `audit-log.md:136` 의 `provenance:112–114` | 실제 `cubic-bezier` 3행은 `provenance:114–116`(112·113은 표 헤더/구분선) | **정정 필요 → audit-log 말미에 정정 부기** |

감사 기록은 고쳐 쓰지 않고 `audit-log.md` 말미에 «정정 부기 (웨이브 23 개정)» 절로
덧붙였다.

### 개정 후 검증

| 검사 | 결과 |
|---|---|
| `test-v2/tools/migrate-reference.mjs --brand farfetch --gate-only` | PASS, problems `[]` |
| `inspectDesignMd` → `conformance.portable_core` | `true`, reasons `[]` |

게이트 PASS는 이 개정의 적합성 증거가 아니다 — C2와 D1/D1a는 게이트가 검사하지
않는 조항이다(D1 게이트는 부정 **문장** 트리거만 보므로 `:9`·`:78` 같은 명사구
열거를 통과시켰고, C2는 애초에 기계화되어 있지 않다). PASS는 이번 수정이 기계화된
다른 조항(A·B1·C1·E3)을 깨뜨리지 않았다는 사실만 말해 준다.

### 범위 밖 발견 (보고만, 수정하지 않음)

개정 범위는 검토가 확정한 FAIL 5건이다. 그 밖에 **같은 C2 계열의 잔여 자리 4곳**이
남아 있다 — 사유가 여전히 primitive 종류 이름뿐이다. 지시된 5건이 아니므로 손대지
않고 보고한다(E3의 태도: 회피·임의 확장 대신 그대로 두고 보고).

| 자리 | 현재 사유 | 비고 |
|---|---|---|
| `DESIGN.md:243` — Primary CTA Button `loading` | `Button control; visual treatment omitted` | 같은 표의 error/success(:244·:245)는 관측 근거를 갖고 있어 행위 역할 자체는 표 안에서 성립한다. 사유 문자열만 종류 이름이다. |
| `DESIGN.md:298` — Email Newsletter Input `loading` | `Input control; visual treatment omitted` | 제출 폼의 pending 여부는 역할로 판정 가능한 자리다. |
| `DESIGN.md:317` — Search Field `error` | `Form field; visual treatment omitted` | 같음. |
| `DESIGN.md:318` — Search Field `success` | `Form field; visual treatment omitted` | 검색 컨트롤에 별도 success 상태가 역할상 있는지는 판정이 필요한 자리다. |

`DESIGN.md:300`(Email input `success` = "Form field; the adjacent button carries the
confirmation message")은 종류 이름으로 시작하지만 뒤 절이 역할·관측 근거라 이 목록에
넣지 않았다.

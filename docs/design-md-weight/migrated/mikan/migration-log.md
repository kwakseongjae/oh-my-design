# mikan migration log

Source: `web/references/mikan/DESIGN.md`
Sibling read (not the migration input): `web/references/mikan/.verification.md`
Destination: `docs/design-md-weight/migrated/mikan/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/mikan/provenance.md`
Date: 2026-09-02
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
Not a catalog-adoption claim. Gate output is recorded below as a run result, not as evidence of semantic adequacy (E2c).

Every destination count below was checked with a Python substring scan / `grep -oF --` against the three output files before it was written (F2). Counts use per-file match lists, never a remembered count. `grep -c` was not used.

Source SHA-256 `980b8df7a6bc104194930b4cec77cfd48cad6e2e13f6fc8729165239f0f6c522` (`web/references/mikan/DESIGN.md`). Sibling SHA-256 `c9bed224d17090e77a46d3319b46303ae934cf3a2fc05a00a9ef5c5d6747c65f` (`web/references/mikan/.verification.md`).

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance; `homepage` 옮김 → Experience Scope; catalog `primary_color` 옮김 → Semantic color; `logo.type` / `slug` 옮김 → Typography & Assets | Portable file has no frontmatter. H1 is `# mikan Design System`. Identity table `provenance.md`. YAML homepage `https://mikan.link/` DESIGN dest 3 / provenance dest 5 (E2a). Catalog `#ff4c0a` DESIGN dest 14 / provenance dest 12 (E2a). Favicon URL `https://www.google.com/s2/favicons?domain=mikan.com&sz=128` DESIGN dest 1 / provenance dest 1 (E2a). |
| YAML `omd: "0.1"`, `verified`, `added`, `tokens.source: live-extract`, `tokens.extracted`, `components_harvested: true` | 분리 → provenance | Verification metadata is a value and is kept, not dropped (A1c). Exact `live-extract` DESIGN dest 0 / provenance dest 2. `components_harvested` DESIGN dest 0 / provenance dest 2. Conflicts unresolved: none — provenance Freshness. |
| YAML `tokens.note` | 옮김 → Experience Scope + Foundations; 분리 → provenance Identity | Verbatim note: corporate `#ff4c0a` on every CTA + section heading; School marigold `#fd9b12` + accent `#ff7f09` + 3D hard-shadow `#e26f00`; navy `#001c46`; near-black `#000e22` / `#333333`; CJK via Hiragino Kaku Gothic ProN. DESIGN dest 1 (Scope YAML-token-note sentence) / provenance dest 1 (E2a). |
| YAML `tokens.colors` (14 keys) | 옮김 → Foundations semantic color · 분리 → provenance claim ledger | Same-hex keys not merged: `canvas` `#ffffff` off `on-primary` `#ffffff`; `navy` `#001c46` off `ink` `#000e22`. `#ff4c0a` DESIGN dest 14 / P dest 12. `#fd9b12` DESIGN dest 8 / P dest 7. `#ff7f09` DESIGN dest 6 / P dest 6. `#e26f00` DESIGN dest 14 / P dest 6. `#001c46` DESIGN dest 8 / P dest 4. `#000e22` DESIGN dest 7 / P dest 5. `#333333` DESIGN dest 12 / P dest 7. `#666666` DESIGN dest 3 / P dest 3. `#ffffff` DESIGN dest 14 / P dest 7 (E1: provenance also records component-path whites). `#f7f4f3` DESIGN dest 8 / P dest 4. `#fafafa` DESIGN dest 5 / P dest 2. `#f9f9f9` DESIGN dest 1 / P dest 2 (E2a). `#eeeeee` DESIGN dest 5 / P dest 3. `#000000` DESIGN dest 2 / P dest 0 (Don't: never pure black for body). |
| YAML `tokens.typography.family.display` / `body` / `numeral` | 옮김 → Typography Family | `Hiragino Kaku Gothic ProN` DESIGN dest 14 / P dest 4. `Noto Sans JP` DESIGN dest 12 / P dest 7. `Oswald` DESIGN dest 16 / P dest 10. `Lato` is §3-only (not a family key) DESIGN dest 7 / P dest 3. |
| YAML `tokens.typography.*` metrics + `use` | 옮김 → Type roles table | YAML numbers kept beside §3 px/rem (A1a). Unitless `lineHeight: 1.4` / `1.5` / `1.7` DESIGN dest 1 each. YAML `use` 9/9 landed verbatim (plus 9 component `use`; yaml-use-landing 18/18). `tokens.typography.hero.size` `36` kept off `section-jp.size` `36`. `nav.size` `16` kept off `body.size` `16` and off `tokens.spacing.base: 16`. Oswald YAML `600` kept beside §3 `500–600`. |
| YAML `tokens.spacing` (`xs: 4` … `section: 64`) | 옮김 → Foundations Spacing | Exact `xs: 4` DESIGN dest 1 / P dest 1. Exact `section: 64` DESIGN dest 1 / P dest 1. Unitless steps kept unitless. Source §5 `Base unit: 8px (with 4px sub-step)` DESIGN dest 1. `30px (measured)` DESIGN dest 1. `20px / 24px inner padding` DESIGN dest 1; `24px` is not a YAML spacing step. |
| YAML `tokens.rounded` (`sm: 4` / `md: 8` / `lg: 12` / `xl: 20` / `full: 320`) | 옮김 → Foundations Shape | Exact `full: 320` DESIGN dest 2 / P dest 2. Source §5 named ladder restored beside YAML keys (A1): `XSmall (4px)` DESIGN dest 1; `Medium (8px)` DESIGN dest 1; `XLarge` DESIGN dest 3 / P dest 1; `Pill (320px / full)` DESIGN dest 2 / P dest 1 (E2a). Corporate CTA `6px` and news-card `10px` stay control-local; they are not YAML rounded keys. |
| YAML `tokens.shadow.none` `"none"` / `hard-3d` | 옮김 → Foundations Elevation | Exact `tokens.shadow.none` DESIGN dest 1 / P dest 2. Exact `tokens.shadow.hard-3d` DESIGN dest 1 / P dest 2. Source `box-shadow: none` DESIGN dest 2 / P dest 2 (E2a). `#e26f00 0px 4px 0px 0px` DESIGN dest 12 / P dest 2. |
| YAML `tokens.components.button-primary` `type: button` | 옮김 → Components Corporate CTA | Exact `type: button` DESIGN dest 4 / P dest 4 (A1b; four button records share the token). Use `Corporate CTA — 採用情報 / View More` DESIGN dest 1 / P dest 1. Height 48px, padding 15px 30px, radius 6px, font YAML `15px / 700`. |
| YAML `tokens.components.button-school-fill` `type: button` | 옮김 → Components School Primary | Use `mikan for School primary — 無料トライアルのお申し込み, 3D hard-shadow` DESIGN dest 1 / P dest 0. Height 61px, shadow `#e26f00 0px 4px 0px 0px`, YAML font `16px / 400`. |
| YAML `tokens.components.button-school-outline` `type: button` | 옮김 → Components School Secondary | Use `School secondary — 資料請求する` DESIGN dest 1 / P dest 0. Height 65px, `2px solid #ff7f09` DESIGN dest 1. |
| YAML `tokens.components.button-download` `type: button` | 옮김 → Components Download Pill | Use `School 資料ダウンロード marigold pill` DESIGN dest 1 / P dest 0. Height 44px. Source §3 Lato on this label kept. |
| YAML `tokens.components.news-card` `type: card` | 옮김 → Components News / Notice Card | Exact `type: card` DESIGN dest 3 / P dest 3 (three card records). Use `News / お知らせ list card, flat` DESIGN dest 1. Kind omitted (C4). |
| YAML `tokens.components.job-card` `type: card` | 옮김 → Components Careers Card | Use `Careers posting card 🍊` DESIGN dest 1. Title `英語アプリmikanフロントエンドエンジニア` DESIGN dest 2 / P dest 1 (E2a). Kind omitted (C4). |
| YAML `tokens.components.review-card` `type: card` | 옮김 → Components Review / Interview Card | Use `Note interview / review card` DESIGN dest 1. Kind omitted (C4). Destination note.com is recorded use, not interactive-kind evidence. |
| YAML `tokens.components.nav-link` `type: tab` | 옮김 → Components Top Nav | Exact `type: tab` DESIGN dest 1 / P dest 1 (A1b). Use `Top nav item (Top / About / Members)` DESIGN dest 1 / P dest 1. Exact colon form `active: "brand orange #ff4c0a text on active"` DESIGN dest 2 / P dest 0. Provenance writes the same value as `tokens.components.nav-link.active` P dest 1 (E2a; two writings). Source §4 also names News / Contact. |
| YAML `tokens.components.step-badge` `type: badge` | 옮김 → Components Step Numeral | Exact `type: badge` DESIGN dest 1 / P dest 1 (A1b). Use `Step numeral 01/02/03 on School` DESIGN dest 1. Kind: non-interactive. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope + Distinctive traits | Scope atmosphere keeps `surfaces read exactly as the product promises`, `bright, friendly, and relentlessly encouraging`, `doing all the heavy lifting`, `mikan is the Japanese mandarin orange`, `go here, do this`, `never feels shouty`, `confident but never corporate-cold`, `a stack of small *I-did-it!* moments`. Two-surface paragraph keeps `tidy 6px radius`, `tactile, pressable, game-like affordance`, `bright, low-friction, and quietly rigorous`. Adjacent complete qualifier on each Scope paragraph (B2/B2a). |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | Role names and hexes as above. Characterizations qualified at Semantic color. Component-local keep of 6px / 10px qualified on the same subsection. |
| §3 Typography Rules | 옮김 → Typography & Assets | Family split, full stack `-apple-system, "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif`, Lato-on-download, five type principles (`Heavy display, calm body`, `Orange is a typographic role, not just a fill`, `CJK-first stack with graceful Latin fallback`, `Oswald owns numerals`, `Two surfaces, two body fonts`). Hero quote `小さな『できた』の積み重ねをずっと支える` DESIGN dest 4. `自分に合った出題方法で学習できる！` DESIGN dest 1 / P dest 1. Qualified at Font evidence, Family, Type roles, Typography principles. |
| §4 Component Stylings | 옮김 → Components & States | Nine records as above. `brand orange #ff4c0a text on the active item` DESIGN dest 1. Capture selectors stay out of the portable body. |
| Footer **Verified** / **Tier 1 sources** / **Tier 2** / **Conflicts** | 분리 → provenance; 두 URL 옮김 → Experience Scope + Typography Font evidence | Freshness provenance. `https://mikan.link/` DESIGN dest 3 / P dest 5 (counts on the identity row). `https://school.mikan.com/` DESIGN dest 3 / P dest 4 (E2a). `getdesign.md/mikan` DESIGN dest 0 / P dest 1. `No designs found for 'mikan'.` DESIGN dest 0 / P dest 1 (sibling lookup, not portable copy). `styles.refero.design/?q=mikan` DESIGN dest 0 / P dest 1. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations Spacing/Shape | `Friendly breathing room` DESIGN dest 1. `information-rich ed-tech` DESIGN dest 1. `Flat segmentation` DESIGN dest 1. `Color as anchor` DESIGN dest 1. Qualified at Layout. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | Four-level table preserved. `This split is intentional` DESIGN dest 1. `not a soft blur but a flat, game-like, pressable affordance` DESIGN dest 1. `calm flat marketing chrome on corporate` DESIGN dest 1. Qualified at Elevation. |
| §7 Do's | 옮김 → Experience application rules | Eight Do lines kept as written. Qualified at Application rules. Not placed in Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience avoid | Eight Don't lines kept as written, including `positive, decorative letter-spacing on dense CJK body` DESIGN dest 1 and `corporate CTAs stay flat 6px` DESIGN dest 1. Qualified at Avoid. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | `<640px` DESIGN dest 1. `640-1024px` DESIGN dest 1. `1024-1366px` DESIGN dest 1. `weight 900 maintained` DESIGN dest 1. `comfortably tappable` DESIGN dest 1. `large, unmistakable` DESIGN dest 1. `sit flat (no shadow)` DESIGN dest 4 / P dest 2 (Assets + Layout body + two adjacent qualifiers). 48/61/65/44px named as desktop-capture measurements. Qualified at Layout. |
| §9 Agent Prompt Guide | 삭제; unique constraints already in Experience/Foundations/Typography/Components | Tool-facing prompt. Every value §9 names was checked against the portable body before deletion (A2, A3). The check is itemised at provenance Omission ledger. No skill/adapter delegation. |
| §10 Voice & Tone | 옮김 → Content & Locales | `warm, encouraging, and achievement-celebrating` DESIGN dest 1. Tone table kept. Three verbatim samples kept. `shame-based study pressure` DESIGN dest 1. `exam-anxiety fear appeals` DESIGN dest 1. `encouraging coach, not a stern teacher` DESIGN dest 1. `できた！を実感できるmikanの学習ステップ` DESIGN dest 1. Qualified at Content. |
| §11 Brand Narrative | 옮김 → Experience Scope | `1000万ダウンロード突破` DESIGN dest 1. `behavioral, not just instructional` DESIGN dest 1. `two-sided education business` DESIGN dest 1. `先生の学習管理を効率化` DESIGN dest 3. `真・英文法大全` DESIGN dest 1. `速読速聴・英単語` DESIGN dest 1. `infrastructure for English study rather than a single app` DESIGN dest 1. Exact lowercase `the design is the mission rendered visually` DESIGN dest 1 / P dest 2. Capitalized source sentence `The design is the mission rendered visually` DESIGN dest 1 / P dest 0 (E2a; two writings, not dest 2 of one needle). `learning that feels like a stack of small wins` DESIGN dest 1. Qualified as brand-context-not-tokens. |
| §12 Principles — 5 items | 옮김 → Experience principles | Five stems under the B2a form: `Celebrate small wins`, `One bright signal`, `Friendly, never intimidating`, `Flat and fast, with a tactile reward`, `Two audiences, one warmth`. Source closing note that these are editorial readings is kept adjacent. |
| §13 Personas — three fictional archetypes | 삭제 | Source header and closing note both state fictional archetypes / illustrative names. Not promoted to Audience or to `primary-tasks`, and not re-hosted in the sidecar (D2). No name, age, or city is written in DESIGN or provenance (D2a). DESIGN dest 0 / provenance dest 0 for each biography. Source-named publicly observable segments stay in Audience. Primary tasks come from recorded surfaces and controls. |
| §14 States | 옮김 → Components & States capture record + per-component applicability | Full nine-row body preserved, including `Friendly, never blank or scolding` DESIGN dest 1, `エラーが発生しました` DESIGN dest 1, `必須` DESIGN dest 1, `The reward IS the success state` DESIGN dest 1, `orange actions fade rather than turn grey` DESIGN dest 3. Graph not used (A2). |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | Five interactive controls declare the seven canonical states. Corporate CTA (`type: button`, destination 採用情報 / View More →) loading/error/success `not-applicable` by destination-link role (C2). School Primary / Secondary / Download loading/error/success `applicable` because each is an in-place commit (C2). Top Nav (`type: tab`) loading/error/success `not-applicable` as grouping-select / destination (C2). Three cards: kind omitted (C4). Step Numeral: `kind: non-interactive`. Absence of an observation is never used as a `not-applicable` reason (C1). B1: no focus-visible row carries a treatment. This is not a complete state-coverage claim. Capture-record qualifier present. |
| §15 Motion & Easing | 옮김 → Foundations motion; unsourced curves 분리 → provenance Omission ledger | Durations `motion-fast` DESIGN dest 1; `motion-standard` DESIGN dest 2 (table token + fade-in use); `motion-slow` DESIGN dest 1. `Motion is friendly but restrained` DESIGN dest 1. Signature 3D press, fade-in-from-below, brief bouncy accent, no gratuitous spring, `prefers-reduced-motion: reduce` DESIGN dest 1. Three unsourced curves omitted at the curve-value boundary; `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` named as omitted (matches `spec/omd-v0.1.md`) DESIGN dest 1 / P dest 2 (E2a). Roles and uses stay. B3 is held: Foundations Motion names computed transition properties, animation name, duration, easing, and reduced-motion behavior, plus the per-component gate and the partial-confirmation clause, in full text (E2c). `transition properties` dest 1. `animation name` dest 1. `reduced-motion behavior` dest 1. Motion qualitative and the five-kind gate each carry an adjacent complete B2a close. |
| HTML comment Sources / Figma / personas / interpretive flags | 분리 → provenance; standalone-needed bound 옮김 → Experience Scope + Font evidence + Principles | Figma article title `Figmaのリファクタリングからはじめるデザインシステムの構築` DESIGN dest 1 / P dest 1. `note.com/jirosh1998` DESIGN dest 1 / P dest 1. `Background/Surface/Text/UI/Border/Social` DESIGN dest 1 / P dest 1. Hexes not from Figma — portable bound. Personas not re-hosted. |

## Sibling handling (`web/references/mikan/.verification.md`)

The sibling exists — confirmed with `find web/references/mikan -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact that the source body does not already record.

- Its full record is transcribed at provenance Sibling handling and is **not** promoted into `DESIGN.md`.
- Values it carries that the visible source body does not: method `playwright getComputedStyle (live DOM)` + UA / `ja-JP` / 3.5s settle; Hero H2 `rgb(0, 0, 0)` and truncated `小さな「できた」の`; CTA `View More　→` (fullwidth space); frequency-scan counts; School case-study card `padding: 24px` / `border: 4px rgb(250, 250, 250)`; School `document.title` `1000万DL`; `a[href=/careers]`; review-card truncated `「学習意欲が向上し...`; getdesign `No designs found for 'mikan'.`. Measured `DESIGN.md` 0 for those sibling-only strings: `rgb(0, 0, 0)` as hero color 0 · `小さな「できた」の` 0 · `View More　→` 0 · `1000万DL` 0 · `私立` 0.
- Hexes, Hiragino / Noto / Oswald / Lato, the two Tier 1 URLs, component geometry, and the issued Japanese labels also stand in the source body and are corroboration.

## A5 / A5a verification

The gate's `copy-loss` needles come only from contiguous non-Latin runs of four characters or more inside quotations. A hand sweep of published copy is mandatory when `compared < candidates`.

| Sweep | Extracted | Missing from `DESIGN.md` + `provenance.md` | Published copy among the missing | Handling |
|---|---:|---:|---:|---|
| Issued JP / EN product strings (mission, CTAs, headings, nav, partnerships, forbidden-register examples) | 26 distinct | 0 | 0 | Portable; partnership titles and mission quote in DESIGN |
| YAML `use` strings | 18 | 0 | 0 | All 18 land verbatim (`check-yaml-use-landing.mjs` 18/18) |
| Brand-issued Latin labels / CTAs | `Service`, `News`, `View More →`, `Top`, `About`, `Members`, `Contact`, `mikan for School` | 0 | 0 | Portable |
| Sibling published strings | 0 sibling-only issued labels that the source body lacked | 0 | 0 | Sibling adds collector method, `rgb()` forms, frequency counts, truncated quotes, and getdesign's `No designs found for 'mikan'.` (third-party lookup, not issued copy) |

A5 분모: hand sweep issued JP/EN 26/0; YAML use 18/0; brand-issued Latin labels 8/0; sibling published 0 additional issued labels. Font-stack fragments and getdesign lookup strings are not needles (A5a). Gate `copy-loss` `compared` 29 / `candidates` 216, so A5a was mandatory. `verdict` below is a gate run result only. The latin-copy-audit leftover `"Helvetica Neue", Arial, "Hiragino Sans", Meiryo, sans-serif` is a font-stack substring (Hiragino Kaku Gothic ProN sits between Arial and Hiragino Sans in the recorded ladder); the full stack is in DESIGN.md. It is not issued copy.

## State applicability (C2)

Judged by role meaning, not by primitive name and not by capture completeness.

| Component | loading / error / success | Reason class |
|---|---|---|
| Corporate CTA | not-applicable | Destination link (採用情報 / View More →); the control does not commit an operation whose pending/error/success this button would report |
| School Primary (3D Fill) | applicable | 無料トライアルのお申し込み is an in-place commit; treatments omitted beyond the source-stated press collapse |
| School Secondary (3D Outline) | applicable | 資料請求する is an in-place commit; treatments omitted |
| Download Pill | applicable | 資料ダウンロード is an in-place commit; treatments omitted |
| Top Nav | not-applicable | Tab / destination nav item selects a page; the item itself does not enter loading/error/success |
| News / Careers / Review cards | map omitted | No interactive-kind evidence (C4) |
| Step Numeral | map omitted | `kind: non-interactive` (badge displays a step numeral) |

Absence of an observation is not a `not-applicable` reason. This is not a complete state-coverage claim.

## B2a

Portable body: `derived editorial implementation inference` **26** · `not mikan-authored` **26** · `separately published UI specification` **26**, each closing with `including the Figma DesignSystem described by mikan designers`. Inventory is provenance `## Derived editorial inventory` (26 data rows, lines 183–208). F3 folded unnamed class-3 readings into existing adjacent qualifiers (Shape named-ladder + cross-scale non-merge; Family Google-CJK-label; Capture YAML `active` extra-canonical; Layout sit-flat; Assets keyed-to-`mikan.com`). Occurrence count unchanged. A public mikan DesignSystem (Figma) is documented by mikan designers, so the toss-form that would assert the absence of a published specification is not used (rulebook v12 B2a 전제 주석).

Pass 1 (F1) re-read the finished body from the title down. Causal/interpretive sentences outside Principles (Scope token-surface bound, captured-layer characterizations, two-surface split, narrative-as-context, Primary-task selection, Audience grouping, Distinctive-traits restatement, Do/Don't grouping, color characterizations, component-local color/radius keep, spacing/shape keep-both, elevation split, motion qualitative plus B3 gate, font-class sorting, Family two-surface reading, type-role keep-both, five typography principles, favicon pointer, capture/applicability including destination vs commit, layout philosophy plus desktop-capture bound, voice register, Named gaps) each have an adjacent full-form bound. Hex values, YAML keys, issued copy, and the 18 YAML `use` strings are source recordings and were not qualified as derived.

## D1 / D2

- `native-client` DESIGN dest 0 / P dest 0. `storefront` 0 / 0. `authenticated` 0 / 0. `parity` 0 / 0. `native-app` 0 / 0. `back-office` 0 / 0. `200%` 0 / 0.
- Named gaps list only fields the source left unnamed or that this migration omitted at the smallest value boundary: easing curve values, hover/`focus-visible` visual treatments.
- Three fictional archetypes dropped. DESIGN dest 0 / provenance dest 0 for each biography (D2, D2a). No name, age, or city is written in either file.

## 고유 표현 대조

뽑은 87 / 0이었다가 복원한 11. First pass missed `surfaces read exactly as the product promises`, `bright, friendly, and relentlessly encouraging`, `This split is intentional`, `infrastructure for English study rather than a single app`, `learning that feels like a stack of small wins`, `Motion is friendly but restrained`, `Base unit: 8px (with 4px sub-step)`, `Pill (320px / full)`, `lineHeight: 1.4` / `1.5` / `1.7` (YAML key form), `mikan is the Japanese mandarin orange`, `brand orange #ff4c0a text on the active item`. F3 additionally restored source §5 step names `XSmall (4px)` / `Medium (8px)` / `XLarge` / `the card workhorse` (A1 label path; values 4/8/20 were already present as YAML steps). Post-restore `grep -oF` counts on DESIGN.md are ≥1 for every portable unique phrase in the 87 plus those four labels. Three first-pass DESIGN zeros were correctly provenance-only and were not restored into the portable body: `live-extract`, `getdesign.md/mikan`, `components_harvested`.

## Deviations recorded

- `DESIGN.md` is 7,920 words by Python `split()`, above the spec's 600–1,800-word SHOULD budget. The budget yielded to A1: fourteen color keys with same-hex keep-both, nine type roles with YAML/px/lineHeight keep-both, nine declared components with YAML `type` plus seven-state applicability on the five interactive controls, the full §1/§11 narrative, the full §14 nine-row table, the §15 durations/roles/signature/reduced-motion contract, source §5 radius step names, and the B2a qualifications cannot be compressed without dropping verified values or dropping the qualifications. Recorded rather than silently accepted.
- A public mikan DesignSystem (Figma) is documented by mikan designers, so every derived-editorial close uses `not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers` (rulebook v12 B2a 전제 주석). Exact in-app hex codes are not disclosed there; portable hex values come from the live website inspection.

## Gate run

- `inspectDesignMd` on the migrated `DESIGN.md` → `conformance.portable_core: true`, `level: portable-core`, `reasons: []`, `structurally_valid: true`, `cleanTop: true`, placeholders 0
- `node scripts/check-limiter-ledger.mjs mikan` → 본문 26 = 원장 26 (183–208)
- `node scripts/check-yaml-use-landing.mjs mikan` → use 18/18 (100%) OK
- `node test-v2/tools/latin-copy-audit.mjs --brand mikan` → `lost: 1` (font-stack substring, not issued copy)
- `node test-v2/tools/migrate-reference.mjs --brand mikan --gate-only` → **PASS**, `problems: []`, copy-loss `compared` 29 / `candidates` 216

All are run results only. A5a was mandatory because `compared` 29 < `candidates` 216. The hand-sweep denominator is in the A5 / A5a table above.

## Hashes

| File | SHA-256 |
|---|---|
| `web/references/mikan/DESIGN.md` (source, unmodified) | `980b8df7a6bc104194930b4cec77cfd48cad6e2e13f6fc8729165239f0f6c522` |
| `web/references/mikan/.verification.md` (sibling, unmodified) | `c9bed224d17090e77a46d3319b46303ae934cf3a2fc05a00a9ef5c5d6747c65f` |
| `docs/design-md-weight/migrated/mikan/DESIGN.md` | `a3844b341a556a023d9d1f9249308c9151e640b9e30ef2b9639ff8cb5ba7ee1c` |
| `docs/design-md-weight/migrated/mikan/provenance.md` | `fff18895e3955ff017a31d247d12b13ac5c6dccead432f3d44bb42a6e7fbbc4a` |

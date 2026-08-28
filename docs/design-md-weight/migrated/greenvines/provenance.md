# Greenvines provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, evidence grading, and omission record for the Core v2 migration of `web/references/greenvines/DESIGN.md`. The canonical source remains that file until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | greenvines |
| name | Greenvines |
| country | TW |
| category | ecommerce |
| homepage | `https://www.greenvines.com.tw` |
| primary_color | `#002d18` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=www.greenvines.com.tw&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-10 |
| components_harvested | true |

**Logo decision.** The `logo.slug` above is a Google favicon-service URL, not a Greenvines-hosted asset. The sibling verification file states that `getdesign.md / refero.design / Google favicon proxy are explicitly NOT counted toward the TW brand-owned requirement`. The sibling also records that the `www.` host returns a real brand favicon (1985 B, 128×128, "GV" monogram on `#002d18`) while the apex-domain proxy returns the generic globe (726 B) and is rejected. The URL is therefore kept here as the catalog's own identity field and is not promoted to a Greenvines brand asset in the portable document.

**Token note, quoted verbatim from the source frontmatter:**

> primary = deep forest green ink (#002d18) used for text, borders, and footer; single warm accent = burnt orange (#c84600) reserved for commerce CTAs. Sharp-corner (0px radius), shadowless system with ultra-thin (weight 100) display type.

Every value inside that note is carried separately in the portable document: `#002d18`, `#c84600`, 0px, weight 100, and the shadowless rule in Foundations and Components.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-10 |
| added | 2026-06-10 |
| tokens.extracted | 2026-06-10 |
| surfaces inspected | 2026-06-10 |
| sibling verification notes | 2026-06-10 |

Conflicts unresolved: none. The source footer states `Conflicts unresolved: none`.

## Sibling verification file (E2)

`web/references/greenvines/.verification.md` was read and **adopted as evidence grading only**. No sibling-only value and no sibling structural classification was promoted into the portable body (B1). The sibling-only items are listed below as records in this ledger. The same strings may appear in the migration log as disposition mentions, not as use.

**Method, quoted from the sibling:** playwright `getComputedStyle` (live DOM) — global playwright (chromium, headless), viewport 1440×900, `domcontentloaded` + 3.5–4s settle, modal/overlay dismissal pass, then `getComputedStyle` on body, h1–h4, buttons/links/inputs, header/footer, plus full-DOM background/text color frequency scans on three surfaces.

The viewport figure `1440×900` is a sibling method detail. It is not a portable measurement of a band, a canvas, or a breakpoint. The portable Desktop row keeps the source body's `1440px-class canvas` wording and does not say that anything measures 1440×900.

### Sibling-only values — held here, absent from the portable body

| Value | Sibling record | Why it stays here |
|---|---|---|
| Offer-link height `46px` and border `1px solid rgb(200, 70, 0)` | product-page raw sample 「活萃三日精華雙入組・88 折優惠中 ⟶」 | The legacy body records accent CTAs at 48px / `2px solid #c84600`. The body keeps those figures; this offer-link chrome stays here. |
| Helper paragraph `15px` / line-height `28px` | brand-story raw sample (45 天無條件退貨) | The legacy body records helper grey `#666464` without this size pair. |
| Body computed `14px / line-height 20px` | homepage body raw sample | The token-set `body` role records line-height `1.43`; the sibling px pair stays here. |
| Frequency counts | bg `rgb(156, 171, 163)` ×178, `rgb(255, 255, 255)` ×24, `rgb(230, 234, 232)` ×20, `rgb(59, 86, 71)` ×12, `rgb(0, 45, 24)` ×10, `rgb(200, 70, 0)` ×10, `rgb(230, 118, 0)` ×2; fg `rgb(0, 45, 24)` ×1130, `rgb(255, 255, 255)` ×454, `rgb(59, 86, 71)` ×198, `rgb(136, 136, 136)` ×81, `rgb(102, 100, 100)` ×5 | Measurement detail, not contract. The portable body carries the roles, not these counts. `rgb(136, 136, 136)` has no token-set key in the legacy body. |
| Viewport `1440×900` | method | Capture context, not a portable width token. |
| Apex-domain favicon 726 B generic globe | Logo verification | Rejected by the sibling; not a brand asset. |
| cdn.simpleicons.org/greenvines 404; github.com/greenVines unrelated | Logo verification | Rejected; not a brand org. |

### Sibling-only published strings — held here byte-exact (A5)

A5 covers strings the verification sibling names as measured copy, so these are kept as bytes rather than paraphrased. The portable body carries only the labels the legacy body itself carries.

- `綠藤生機 Greenvines｜沒有減法，何來精華` — `document.title` on the homepage (the portable body carries 「沒有減法，何來精華」 from the legacy voice sample; the full title string stays here)
- `活萃三日精華雙入組・88 折優惠中 ⟶` — product-page offer link
- `了解更多：非必要成分清單 →` — brand-story outline CTA
- `沒有減法 ，何來精華` — product-page H2 with an extra space (the portable voice sample keeps the source-body form 「沒有減法，何來精華」)
- `純淨保養組合 →` — homepage outline CTA (the portable body carries 純淨保養組合 without requiring the arrow as part of the label string)

### Third-party strings the source itself excludes

Recorded because the source recorded them, and excluded from evidence for the same reason the source excludes them. These are not Greenvines strings and are not needles for copy preservation.

- `"No designs found for 'greenvines'"` — getdesign.md
- keyword-adjacent Western brand cards (sweetgreen, Seed, Evergreen) — refero.design
- `Insider-Poppins` — marketing-layer embed; the portable Font evidence table already names it as declared-only, not a brand font

## Raw samples (from the sibling)

- body: font `"Helvetica Neue", Helvetica, Arial, sans-serif`; color `rgb(0, 45, 24)` = `#002d18`; 14px / line-height 20px; bg `rgb(255, 255, 255)` = `#ffffff`
- document.title: 「綠藤生機 Greenvines｜沒有減法，何來精華」
- H1 brand hero: font `gv, "Noto Sans TC", 微軟正黑體, serif`; 104px / weight 100 / line-height 114px / letter-spacing 2px; color `rgb(0, 45, 24)`
- H3 「現在，保養從減法開始 #二減一加」: 52px / weight 100 / line-height 64px; color `rgb(0, 45, 24)`
- H3 「超過兩萬則真實好評，23 款純淨保養洗沐產品」: 52px / weight 100 / line-height 64px
- outline CTA 「純淨保養組合 →」: bg transparent; border `2px solid rgb(0, 45, 24)`; color `rgb(0, 45, 24)`; radius 0px; padding 12px 20px; 14px / 400 / letter-spacing 1px; h 48px
- accent CTA 「深入了解 →」: bg `rgb(200, 70, 0)` = `#c84600`; color `rgb(255, 255, 255)`; border `2px solid rgb(200, 70, 0)`; radius 0px; padding 12px 20px; 14px / 400 / ls 1px; h 48px
- photo-overlay H3 「減法保養「荷包蛋保養法」」: 28px / weight 100 / line-height 38px; color `rgb(255, 255, 255)`
- chat FAB: bg `rgb(0, 45, 24)`; border-radius 50%; 58×58px
- mega-menu product link 「活萃三日修護精華」: color `rgb(255, 255, 255)`; 16px / weight 300; font `gv, "Noto Sans TC", 微軟正黑體, serif`
- footer: bg `rgb(0, 45, 24)`; column H4 「訂閱電子報」 color `rgb(155, 155, 155)` = `#9b9b9b`; 15px / weight 100 / line-height 36px; fine print `rgb(170, 170, 170)` = `#aaaaaa`
- footer link 「永續報告書」: color `rgb(255, 255, 255)`; 15px
- newsletter input (placeholder 希望綠藤怎麼稱呼您 / 您的電子郵件地址): bg `rgba(229, 229, 229, 0.2)`; color `rgb(255, 255, 255)`; border none; radius 0px; 14px; h 55px
- newsletter submit: bg `rgb(206, 213, 209)` = `#ced5d1`; color `rgb(0, 45, 24)`; radius 0px; 16px; h 50px
- 加入購物車: bg `rgb(200, 70, 0)`; color `rgb(255, 255, 255)`; radius 0px; padding 12px 20px; 15–20px / weight 600 / letter-spacing 1px; h 80px
- quantity stepper: bg `rgb(241, 241, 241)` = `#f1f1f1`; color `rgb(10, 45, 27)` = `#0a2d1b`; radius 0px; 20px; h 80px
- offer link 「活萃三日精華雙入組・88 折優惠中 ⟶」: bg `rgb(200, 70, 0)`; color `rgb(255, 255, 255)`; border `1px solid rgb(200, 70, 0)`; h 46px
- H2 「讓肌膚熟悉的，應該純淨」: 52px / weight 100 / letter-spacing 2px
- story tab links 「擁抱需要」「減去非必要」: color `rgb(59, 86, 71)` = `#3b5647`; 30px; padding 0px 15px 20px
- about-us H1 「品牌故事」: 104px / weight 100; color `rgb(255, 255, 255)` (over photography)
- about-us H3 "More is Less. 多，即是少。": 52px / weight 100
- manifesto paragraph (「綠藤成立已經有 15 年…承襲自林碧霞博士的啟發」): 20px / line-height 32px
- outline CTA 「了解更多：非必要成分清單 →」: border `2px solid rgb(0, 45, 24)`; 14px; h 48px
- helper paragraph (45 天無條件退貨): color `rgb(102, 100, 100)` = `#666464`; 15px / line-height 28px
- box-shadow `none` across nav, CTAs, photo cards, footer

## Evidence class of the legacy sections

The source's own closing comment partitions its file, and this migration follows that partition rather than treating the whole file as one evidence class.

| Legacy range | Source's stated attribution |
|---|---|
| §1–§9 (token-level claims) | Tier 1 live inspection, 2026-06-10, via playwright `getComputedStyle` on homepage, product, and brand-story surfaces |
| §10 Voice samples | verbatim from brand surfaces — `document.title`, homepage H3s, about-us, product H2, clean-beliefs WebFetch |
| §11 Brand narrative | brand-story page plus WebFetch of clean-beliefs and 2024 benefit report; founding facts also sourced from B Lab Taiwan, a DBS feature, and official-blog founder interviews. Closing-comment extras not in the §11 body (ex-UBS/ABN AMRO careers, 公平貿易辣木油, 98%+ natural origin, 綠色生活 21 天 8th year / 66,000+ letters, 2024 DBS Asia Business Impact Award) stay in this ledger as source notes; they are mention of the comment, not a second portable narrative. |
| §13 Personas | fictional archetypes, names illustrative, do not refer to real people |
| §14 States, §15 Motion | **editorial extrapolations** consistent with the measured flat/sharp/quiet system (`box-shadow: none`, 0px radius, weight-100 display) — marked as design guidance, not measured values |
| Interpretive claims | the comment names "subtraction made visible" and "green is the voice; orange is the ask" as editorial readings connecting the stated philosophy to the observed design, not direct brand statements |

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing homepage | `https://www.greenvines.com.tw` | 2026-06-10 |
| product | product / commerce | `https://www.greenvines.com.tw/products/know-more-luminosity-serum` | 2026-06-10 |
| about | brand-story | `https://www.greenvines.com.tw/pages/about-us` | 2026-06-10 |
| clean-beliefs | philosophy (WebFetch) | `https://www.greenvines.com.tw/pages/clean-beliefs` | 2026-06-10 |
| benefit-report | 2024 sustainability report (WebFetch) | `https://www.greenvines.com.tw/pages/benefit-report` | 2026-06-10 |
| blog | official blog (brand-owned) | `https://blog.greenvines.com.tw` | 2026-06-10 (HTTP 200) |

## Sources

### Tier 1 (from the legacy footer)

- `https://www.greenvines.com.tw` — homepage, live computed-style inspect
- `https://www.greenvines.com.tw/products/know-more-luminosity-serum` — product surface, live inspect
- `https://www.greenvines.com.tw/pages/about-us` — brand-story surface, live inspect
- `https://blog.greenvines.com.tw` — official Greenvines blog 純淨生活提案部落格 — brand-owned

Legacy footer wording: **Verified:** 2026-06-10.

### Tier 2 (no usable record)

- `getdesign.md/greenvines` — 404 "No designs found"
- `styles.refero.design` searched "greenvines" and "綠藤" — brand not listed

**Tier 2 result: none available.** Tier 1 live inspect carries the proof (TW regional policy).

## Conflict matrix (from the sibling)

| Field | Tier 1 (live) | getdesign | refero | Resolution |
|---|---|---|---|---|
| Primary brand color | `#002d18` (text/border/footer) | n/a (404) | n/a (not listed) | Tier 1 — `#002d18` |
| Accent/CTA color | `#c84600` (cart, emphasis CTA) | n/a | n/a | Tier 1 — `#c84600` |
| Button radius | 0px everywhere (50% FAB only) | n/a | n/a | Tier 1 — 0px |
| Display weight | 100 (104px/52px/45px) | n/a | n/a | Tier 1 — weight 100 |
| Shadows | none measured | n/a | n/a | Tier 1 — shadowless |

No Tier 1 ↔ Tier 2 conflicts (Tier 2 sources do not cover this brand). **Conflicts unresolved: none.**

## Claim ledger

Every value's legacy origin and its portable destination. `home` / `product` / `about` as above.

| Claim | Legacy origin | Portable destination | Surface |
|---|---|---|---|
| `tokens.colors.primary` `#002d18` | frontmatter + §2 Primary | Foundations `Semantic color`, Outline CTA, Chat FAB, Footer, Elevation | home, product, about |
| `tokens.colors.accent` `#c84600` | frontmatter + §2 | Foundations `Semantic color`, Accent Fill CTA, Add-to-Cart | home, product |
| `tokens.colors.canvas` `#ffffff` | frontmatter + §2 | Foundations `Semantic color` | home |
| `tokens.colors.on-primary` `#ffffff` | frontmatter | Foundations `Semantic color` (same hex, separate key) | home |
| `tokens.colors.sage` `#9caba3` | frontmatter + §2 | Foundations `Semantic color`, Sage Section Band | home |
| `tokens.colors.sage-pale` `#e6eae8` | frontmatter + §2 | Foundations `Semantic color`, Pale Surface Band, State record | home |
| `tokens.colors.sage-button` `#ced5d1` | frontmatter + §2 | Foundations `Semantic color`, Newsletter Submit | home |
| `tokens.colors.green-soft` `#3b5647` | frontmatter + §2 | Foundations `Semantic color` | product |
| `tokens.colors.ink-alt` `#0a2d1b` | frontmatter + §2 | Foundations `Semantic color`, Quantity Stepper | product |
| `tokens.colors.stepper-grey` `#f1f1f1` | frontmatter + §2 | Foundations `Semantic color`, Quantity Stepper | product |
| `tokens.colors.footer-heading` `#9b9b9b` | frontmatter + §2 | Foundations `Semantic color`, Footer Link chrome | home |
| `tokens.colors.footer-muted` `#aaaaaa` | frontmatter + §2 | Foundations `Semantic color`, Footer Link chrome | home |
| `tokens.colors.helper-grey` `#666464` | frontmatter + §2 | Foundations `Semantic color` | about |
| `#e67600` (no token key) | §2 parenthetical | Foundations `Semantic color` rare observation + Governance unresolved | home |
| `tokens.typography.family` display `gv` / fallback Noto Sans TC · 微軟正黑體 / base Helvetica Neue | frontmatter + §3 | Typography & Assets `Family` and `Font evidence` | home, about |
| 10 type roles (size / weight / **unitless** lineHeight / tracking / use) | frontmatter `typography` + §3 Hierarchy table | Typography & Assets `Type roles` | home, product, about |
| `tokens.spacing` 8 keys (4 / 8 / 12 / 15 / 20 / 32 / 50 / 80) | frontmatter + §5 Spacing System | Foundations `Spacing` | home |
| `tokens.rounded.none` 0 / `full` 9999 | frontmatter + §5 Border Radius Scale | Foundations `Shape` | home |
| Chat FAB `50%` / 58px | §4 Chat FAB | Foundations `Shape`, Components `Chat FAB` | home |
| `tokens.shadow.none` | frontmatter + §6 | Foundations `Elevation` | home, product, about |
| `tokens.components.button-outline` `type: button` | frontmatter + §4 | Components `Outline CTA` | home, about |
| `tokens.components.button-accent` `type: button` | frontmatter + §4 | Components `Accent Fill CTA` | home, product |
| `tokens.components.button-cart` `type: button` | frontmatter + §4 | Components `Add-to-Cart` | product |
| `tokens.components.button-stepper` `type: button` | frontmatter + §4 | Components `Quantity Stepper` | product |
| `tokens.components.button-newsletter` `type: button` | frontmatter + §4 | Components `Newsletter Submit` | home |
| `tokens.components.input-newsletter` `type: input` | frontmatter + §4 | Components `Newsletter Field` | home |
| `tokens.components.card-sage` `type: card` | frontmatter + §4 | Components `Sage Section Band` | home |
| `tokens.components.footer-link` `type: listItem` | frontmatter + §4 | Components `Footer Link` | home |
| Elevation levels 0–2 | §6 table | Foundations `Elevation` | home |
| Durations 150 / 250 / 400ms | §15 | Foundations `Motion` | editorial (source closing note) |
| Easing roles and uses | §15 | Foundations `Motion` | editorial (source closing note) |
| 10 state rows | §14 | Components `State record` | editorial (source closing note) |
| Breakpoints 768 / 1200 / 1440px-class | §8 | Layout & Platforms | system-level in source; desktop inspect |
| Voice samples ×6 | §10 | Content & Locales | home, about, product, clean-beliefs |
| Brand narrative facts (2010 founding, 2015 B Corp, 2024 CEO, NT$5 million, 3,200+, FAITH) | §11 | Experience `Scope` | about, benefit-report |

## Derived editorial inventory

Twenty-six sentences in the portable body carry the full B2a qualification — "a derived editorial implementation inference from the verified surfaces; … not Greenvines-authored or a separately published UI specification". They are indexed here so a reviewer can confirm each one sits adjacent to the claim it qualifies rather than only in this sidecar. Measured on the output: 26 occurrences of `derived editorial implementation inference` in `DESIGN.md`. The two occurrences of that clause in this file are the quotation in this paragraph and the count sentence that names it; neither is a portable qualification.

| # | Portable location | What is qualified |
|---:|---|---|
| 1 | Experience `Scope`, paragraph 1 | The refusal to treat an inspected homepage value as evidence for a surface the source did not inspect |
| 2 | Experience `Scope`, paragraph 2 | Botanical-manifesto / luxury-magazine reading; writing in the color of leaves; “Green is the voice; orange is the ask” |
| 3 | Experience `Scope`, paragraph 3 | “Most radical recorded statement”; weight-100 as the typographic equivalent of 減法; the apothecary-label reading |
| 4 | Experience `Scope`, paragraph 4 | Narrative-not-token classification; “The design system *is* the philosophy” / subtraction made visible; the refuse/embrace pairing |
| 5 | Experience `Primary tasks` | The selection of these four as the primary tasks |
| 6 | Experience `Audience` | Reading the archetype-informing groups as this product's audience |
| 7 | Experience `Distinctive traits` | Forest-ink-as-reading-color, subtraction-as-typography, orange-as-only-ask, chat-as-only-curve readings inside the eight traits |
| 8 | Experience `Principles` | All five principles and their UI implications |
| 9 | Experience `Application rules` | The eight Do items and their attached reasons |
| 10 | Experience `Avoid` | The eight Don't items and their attached reasons |
| 11 | Foundations `Semantic color` | Role naming, plus reading-color / single-commerce-ask / sage-as-tint readings |
| 12 | Foundations `Semantic color`, `#e67600` sentence | Withholding a second accent role from the rare promotional-ribbon hex |
| 13 | Foundations `Spacing` | Keeping the eight keys in the Spacing slot rather than reading them as a radius scale |
| 14 | Foundations `Shape` | Reading 0px rectangles and the chat FAB as a deliberate discipline |
| 15 | Foundations `Elevation` | Daylight-into-foliage and printed-rather-than-layered readings |
| 16 | Foundations `Motion` | The entire motion contract — durations, easing roles, and motion rules — as a section the source marks editorial |
| 17 | Typography & Assets `Font evidence` | Assigning the six evidence-class rows, including the philosophy-pages / `gv` / `Insider-Poppins` classifications |
| 18 | Typography & Assets `Family` | The fallback-is-never-the-brand-face rule |
| 19 | Typography & Assets `Typography rules` | The four typography principles as readings of the measured metrics |
| 20 | Typography & Assets `Assets` | Treating photography as the brand texture, and the instruction not to replace it with illustration or gradients |
| 21 | Components `How to read this section` | Every kind verdict, every applicability verdict, and the reason given for either |
| 22 | Components `State record` | The ten state treatments as an editorial extrapolation |
| 23 | Layout & Platforms, paragraph after the layout bullets | Vertical-rhythm-of-image-manifesto-image; subtraction-as-layout; photography-as-container; flat-band segmentation |
| 24 | Layout & Platforms, responsive paragraph | The breakpoints, collapsing strategy, image behavior, and the "comfortably tappable" reading, as system-level statements rather than cross-viewport measurements |
| 25 | Content & Locales, paragraph 1 | The voice characterization, the register reading, and the tone table |
| 26 | Content & Locales, Forbidden register | "Teaches before it sells" as a characterization of the register |

### Evidence-class boundary statements — related but not the same clause

These sentences separate one evidence domain from another. They are not B2a qualifications and are listed separately so the count above is not read as covering them.

| Portable location | Boundary drawn |
|---|---|
| Foundations `Semantic color` | `canvas` and `on-primary` share `#ffffff` and stay two keys. |
| Foundations `Motion`, easing paragraph | The curve values are omitted because they are not traceable to Greenvines evidence, while the roles and uses are kept. |
| Foundations `Motion` and Governance | The B3 promotion condition: five evidence kinds plus a per-component computed-observation gate are present in both places. The partial-confirmation exclusion sentence is in Foundations `Motion` only, not in Governance. |
| Typography & Assets `Type roles` | `body` 1.43 and `button` 1.40 stay two keys. |
| Typography & Assets `Assets` | The catalog logo entry is a third-party favicon service, not a Greenvines-hosted asset, and is held in this ledger rather than presented as a brand asset. |
| Components `Sage Section Band`, `Pale Surface Band`, `Photo Overlay Card` | Neither an interactive nor a non-interactive kind is established, so kind and applicability map are both withheld (C4). |
| Content & Locales, closing line | The Traditional Chinese strings and the recorded labels reproduce byte-exact rather than translated or re-cased. |

## Omission ledger

| Omitted | Where it came from | Disposition |
|---|---|---|
| `cubic-bezier(0.25, 0.1, 0.25, 1)` (`ease-standard`) | §15 Easings | Removed from the portable body; held verbatim here. Not traceable to Greenvines evidence — the sibling records no transition, animation, duration, or easing observation on the inspected surfaces. |
| `cubic-bezier(0.2, 0.6, 0.25, 1)` (`ease-enter`) | §15 Easings | Removed from the portable body; held verbatim here. Same absence of evidence. |
| `cubic-bezier(0.4, 0.0, 1, 1)` (`ease-exit`) | §15 Easings | Removed from the portable body; held verbatim here. Same absence of evidence, and this exact value is the example curve printed in `spec/omd-v0.1.md` — the file that declares those curves non-brand implementation defaults and forbids moving them into a reference DESIGN.md. |
| §13 fictional archetypes | §13 Personas | Deleted, and deliberately **not** re-hosted in this sidecar. The source's own §13 header and closing comment both state that these are fictional archetypes whose names are illustrative and do not refer to real people. No name, age, city, or biography from §13 is restated here. The audience groups the source says the archetypes were informed by are carried in Experience `Audience` as groups only. |
| §9 Agent Prompt Guide — Quick Color Reference, five example component prompts, and the eight-item Iteration Guide | §9 | Deleted. Tool-facing restatement and copy-paste prompt wrappers have no receiving slot. Every renderable value in §9 was checked against the rest of the file before deletion; no unique render field lived only there. |

## Notes on evidence separation

- Narrative evidence and UI-token evidence stay separate. The 2010 founding, the 2015 B Corp certification, the 2024 CEO line, NT$5 million, 3,200+ ingredients, and FAITH explain the company; none of them supplies an interface token, and the portable body says so.
- The three inspected storefront surfaces and the fetched philosophy pages are one evidence domain; the Google favicon proxy is another and is not counted as TW brand-owned.
- `body` line-height `1.43` and `button` line-height `1.40` are kept as two roles. Merging them would erase a recorded distinction.
- Sibling-only chrome (`46px` offer link, `1px` offer border, helper `15px` / `28px`, body `20px` line-height) is not substituted for the source body's figures.

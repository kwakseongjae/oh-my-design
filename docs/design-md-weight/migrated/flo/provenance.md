# FLO provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/flo/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | flo |
| name | FLO |
| name (Korean, from the body) | 플로 |
| country | KR |
| category | consumer-tech |
| homepage | https://www.music-flo.com |
| primary_color | `#3f3fff` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=music-flo.com&sz=256` |
| verified | 2026-06-03 |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The source `DESIGN.md` carries no `verification_v2` block, no per-claim `method` field, and no `ds.name` / `ds.url` / `ds.type` / `ds.description` field — `grep -o 'verification_v2' web/references/flo/DESIGN.md | wc -l` = 0, and a literal search for `ds.type` returns 0 (the one `ds.` hit in that file is the word "seconds." inside §13). None is invented here. There is also no `added` field and no `tokens.note`. Inside that one file the evidence record is the mid-file footer that sits after §4 (**Verified** / **Tier 1 sources** / **Tier 2 sources** / **Conflicts unresolved**), transcribed below. Unlike most of the corpus this file carries no trailing HTML observation comment: `grep -c '<!--' web/references/flo/DESIGN.md` = 0.

`tokens.source: prose-derived` is a load-bearing evidence field and is kept as a value (A1c). It states that the YAML token block was derived from the file's own §1–§4 prose rather than harvested directly, and `tokens.extracted: 2026-06-09` dates that derivation six days after the 2026-06-03 verification. Both facts reach the portable body as prose in Experience → Scope; the field names stay here.

The source `DESIGN.md` is not the whole evidence record. A sibling verification file sits beside it in the same directory and **is adopted into this ledger**: `web/references/flo/.verification.md`. It carries the live-read record that the footer's one-line **Verified** string abbreviates, and it is the authority below for the read method, the byte sizes, the raw samples, the country determination, and the Korean regional-source requirement. Its record is the **Canonical proof** section immediately below. Adoption stops at this ledger: no sibling-only value is promoted to a portable token, for the reason given in Proof notes.

### Dual and multiple destinations (E2a)

- `name` `FLO` is dual: this identity ledger + the portable H1 `# FLO Design System` and every portable sentence that names the company. `플로` is likewise dual: this ledger + portable Experience → Scope and Content & Locales → Terminology, byte-for-byte at both. Measured in the portable body: `grep -oF '플로' DESIGN.md | wc -l` = **2**. The Latin form never replaces the Korean form; it sits beside it at first mention (`FLO (플로)`).
- `homepage` `https://www.music-flo.com` is dual: this ledger + portable Experience → Scope, which names it as the read route. Measured: `grep -oF 'https://www.music-flo.com' DESIGN.md | wc -l` = 1.
- `primary_color` `#3f3fff` is multi-destination: this ledger + 23 occurrences in the portable body — Distinctive traits, Principles item 3 by role, Capture-bound application, Avoid, Foundations → Semantic color, Motion (the volume-slider rule), four component backgrounds and borders, the ghost chip text, the tab active and hover appearances, and three state-contract rows. Measured: `grep -oF '#3f3fff' DESIGN.md | wc -l` = **23**.
- `logo` slug is dual: this ledger + portable Typography & Assets → Assets, which carries the same URL and records it as a third-party favicon proxy rather than a captured first-party FLO mark. No portable Named-gaps row was invented for a first-party logo-file absence.
- `verified` `2026-06-03` is dual: this ledger/Freshness + portable Experience → Scope and Components & States → Capture record, both of which date the reading. `tokens.extracted` `2026-06-09` is dual: this ledger + portable Scope, which states the six-day gap.
- `tokens.source: prose-derived` stays in this ledger as a field name; the fact it states is dual, carried as prose in portable Scope. `grep -oF 'prose-derived' DESIGN.md | wc -l` = 0.
- `components_harvested: true` is dual: this ledger + Proof notes below. It does not reach the portable body as a field name; the portable Capture record states the same fact as prose ("The token block records seven components; the component section describes nine").
- `omd: "0.1"`, `country`, and `category` are ledger-only.

## Canonical proof — sibling verification file

Adopted, not merely noted. Every field in this section is transcribed from the sibling file.

| Field | Value |
|---|---|
| sibling | `web/references/flo/.verification.md` |
| bytes | 2,847 |
| SHA-256 | `ee3f91ef4501ec6361033339bbe78e2300b28dce6b02b3c71c8c0d9b784ebc4c` |
| heading | `# FLO — Verification Notes (2026-06-03)` |
| grade | `## Proof — Tier 1 live inspect` |
| inspected | 2026-06-03 |
| raw samples | 11 — bullet lines matching `^- ` inside the sibling's `### Raw samples` block, counted with `awk` over that block; the block has no wrapped bullets, so bullets and lines coincide there |

**Method, quoted from the sibling:** "raw source-file fetch (homepage HTML + production CSS bundle via curl)".

That method is why the portable body says the files were read as published text rather than as a rendered page, and why it records no rendered-DOM, interaction, or viewport observation. The source `DESIGN.md` footer states only "(omd:add-reference CREATE — Tier 1 live inspect)"; the fetch method is sibling-only detail and the portable body carries its consequence, not its wording.

**Sources, from the sibling's `**Sources:**` list:**

- https://www.music-flo.com — homepage HTML, 2,290 bytes, described there as an SPA shell
- https://cdn.music-flo.com/poc/p/fe/2026_05/291607/main.css — production CSS bundle, 467,838 bytes
- https://apps.apple.com/kr/app/flo-%ED%94%8C%EB%A1%9C/id1129048043 — App Store KR listing

All three are the three the source footer lists as Tier 1 sources, with the same dates, so the sibling corroborates the footer rather than widening it. It adds the byte sizes, the SPA-shell characterization, and the eleven raw samples.

### Raw samples, transcribed

| Sample | Value |
|---|---|
| `.btn_bg_blue_s` | `background-color:#3f3fff`, `height:36px`, `padding:0 15px`, `border-radius:5px`, `font-size:14px` |
| `.btn-buy` | `background-color:#3f3fff`, `height:32px`, `padding:0 17px`, `border-radius:22px`, `font-size:14px` |
| `.comp_inp_txt` / `.comp_inp_pw` | `height:58px`, `font-size:15px`, `color:#181818`, `border-bottom:1px solid #ebebeb` |
| `.btn-round` | `background-color:#3f3fff`, `height:28px`, `padding:0 12px`, `border-radius:.9375rem (15px)`, `font-size:12px`, `font-weight:500` |
| `.header_inner` | `height:96px`, `padding:10px 80px 0` |
| `.voucher-card` | `background-color:#f4f5f8`, `border-radius:8px`, `padding:50px 60px` |
| `.voucher-card-using` | `background-color:#525cfd` |
| `input[type=range].progress::-webkit-slider-thumb` | `box-shadow:-100vw 0 0 100vw #3f3fff` (progress fill color confirmed) |
| `.lyr-tmembership .input-number.incorrect` | `border-bottom:1px solid #ff4d78` (error pink confirmed) |
| font declaration | `font-family:Pretendard Variable,Pretendard,-apple-system,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica,sans-serif` |
| Pretendard load | `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"/>` |
| App Store listing | App tagline "가볍게, 나답게 FLO" confirmed; primary color described as blue mascot color; developer: Dreamus Company |

### Country determination, from the sibling

"country: KR; parent company Dreamus Company (formerly SK Telecom subsidiary), HQ Seoul, Gangnam-gu". The HQ detail is sibling-only and stays here. The parent-company fact reaches the portable body only in the form the source `DESIGN.md` itself states it — FLO operated by Dreamus Company, spun out from SK Telecom in 2021 — not from this line.

### Korean regional requirement, from the sibling

The sibling lists three brand-owned Korean sources satisfying the KR ≥2 requirement: the homepage, the production CSS bundle on FLO's own CDN domain, and the Korean App Store listing (brand-controlled content, KR storefront). It records the Tier 2 lookups as producing nothing.

### Sibling-only values, recorded here and not promoted

The sibling reads the live published files; the portable contract reconstructs the source `DESIGN.md`. Those are different evidence domains, so a value present only in the sibling is a ledger entry and never a portable token. The values in this class:

- The byte sizes 2,290 and 467,838, and the "SPA shell" characterization of the homepage.
- The CSS rule selectors themselves — `.voucher-card`, `.voucher-card-using`, `.header_inner`, `.lyr-tmembership .input-number.incorrect`, and `input[type=range].progress::-webkit-slider-thumb`. The portable body names only the identifiers the source `DESIGN.md` itself carries (`btn_bg_blue_s`, `btn_bg_error_b base`, `btn-round`, `btn-buy`, `header-multi-track-search-button`, `comp_inp_txt`, `comp_inp_pw`).
- `.header_inner` `padding:10px 80px 0`. The source records the 80px horizontal padding and the 96px height; the `10px` top value is sibling-only.
- `box-shadow:-100vw 0 0 100vw #3f3fff` — the technique behind the progress fill. The source records only that `#3f3fff` fills the progress bar.
- `border-radius:.9375rem (15px)` on `.btn-round`. The source records the 15px radius on that control and records `0.9375rem = 15px` separately in §8, but never attaches the rem form to this control.
- The Pretendard load `<link>` and the version `v1.3.9`. The source records the font stack and never records where the face is loaded from, which is why the portable Font evidence table makes no loaded-face claim.
- "primary color described as blue mascot color" from the App Store listing. No mascot appears anywhere in the source, and none is introduced.
- "HQ Seoul, Gangnam-gu".
- The unquoted form of the font declaration. The portable body uses the source's own quoted form from §9.

Each sibling-only value returns 0 from a literal grep of the portable body: `grep -oF '467,838' DESIGN.md` = 0, `2,290` = 0, `SPA shell` = 0, `voucher-card` = 0, `header_inner` = 0, `lyr-tmembership` = 0, `100vw` = 0, `border-radius:.9375rem` = 0 (the body carries `0.9375rem` twice, in §8's own form and unattached to any control), `jsdelivr` = 0, `v1.3.9` = 0, `mascot` = 0, `Gangnam` = 0, `10px 80px` = 0.

One sibling line **corroborates** rather than adds: the App Store tagline confirmation for `가볍게, 나답게 FLO`. The source §10 already calls that line the brand tagline, and the portable body carries it on the source's own terms with the source's trailing period (`가볍게, 나답게 FLO.`). The sibling's marker-free form is recorded here and is not used to restate the line.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-03 |
| footer **Verified** | 2026-06-03 |
| sibling inspected | 2026-06-03 |
| tokens.extracted | 2026-06-09 |

Four of the five dates agree on 2026-06-03. The one spread is `tokens.extracted: 2026-06-09`, six days later, which is consistent with `tokens.source: prose-derived` — the token block was derived from prose written on the earlier date. The portable body states the spread in Scope and does not collapse it.

**Footer conflicts line, quoted:** "**Conflicts unresolved:** none".

**Conflicts found during migration, not recorded by that footer.** Four internal disagreements exist inside the source file. All are preserved with both sides, none is selected, and each is named in portable Governance → Named gaps.

| # | Source locations | Values |
|---|---|---|
| 1 | `tokens.typography.display-lg.size: 34` versus §3 "Display Large: 30–38px / 700" | 34 / 30–38px |
| 2 | `tokens.typography.display-sm.size: 24` versus §3 "Display Small: 22–28px / 700" | 24 / 22–28px |
| 3 | `tokens.typography.body-primary.weight: 400` versus §3 "Primary body: 15px / 400–500" | 400 / 400–500 |
| 4 | §4 pill radii 15px / 22px / 16px versus §9 "`border-radius:20px` for pill shapes" | 15px, 22px, 16px / 20px |
| 5 | §4 and `tokens.components.card-voucher-active.bg: #525cfd` versus §9 "`background:#3f3fff; border-radius:8px` (highlighted/active)" | `#525cfd` / `#3f3fff` |

A sixth, milder disagreement is preserved in place rather than named as a gap: the token record files `#181818` under the key `heading` while §2 names the same value **Body Text** and lists its use as "headings, input values, primary labels". Both the name and the use are carried in portable Foundations → Semantic color, and the palette's separate `body: #333333` role is kept beside it (A4).

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product-surface (homepage markup) | https://www.music-flo.com | 2026-06-03 |
| css | product-surface (production stylesheet) | https://cdn.music-flo.com/poc/p/fe/2026_05/291607/main.css | 2026-06-03 |
| appstore | brand-owned product listing | https://apps.apple.com/kr/app/flo-%ED%94%8C%EB%A1%9C/id1129048043 | 2026-06-03 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.music-flo.com | 2026-06-03 |
| css-live | product-surface | https://cdn.music-flo.com/poc/p/fe/2026_05/291607/main.css | 2026-06-03 |
| appstore | brand-owned product listing | https://apps.apple.com/kr/app/flo-%ED%94%8C%EB%A1%9C/id1129048043 | 2026-06-03 |
| verification | proof-sidecar | `web/references/flo/.verification.md` | 2026-06-03 |

### Tier 1

Quoted from the source footer: "**Tier 1 sources:** https://www.music-flo.com (homepage HTML, 2026-06-03); https://cdn.music-flo.com/poc/p/fe/2026_05/291607/main.css (production CSS bundle, 467 KB, 2026-06-03); https://apps.apple.com/kr/app/flo-%ED%94%8C%EB%A1%9C/id1129048043 (App Store KR listing, 2026-06-03)".

The footer's "467 KB" and the sibling's "467,838 bytes" are the same measurement at two precisions; both are recorded and neither reaches the portable body.

### Tier 2

Quoted from the source footer: "**Tier 2 sources:** getdesign.md/flo — NOT LISTED (returned "No designs found"). refero ?q=FLO — no result (KR brand, no refero entry expected)." The sibling states the same two lookups with the same outcome. Nothing is invented to fill the slot, and neither lookup reaches the portable body.

## Portable derived-editorial scope (E1)

This ledger is 1:1 with the portable body for the counted qualification phrase: every occurrence the body carries is listed here, and nothing is listed that the body does not carry. Counted, not estimated — `grep -o 'derived editorial' DESIGN.md | wc -l` = **12** and `grep -o 'not FLO-authored' DESIGN.md | wc -l` = **12**, on the same 12 lines, so every occurrence closes its evidence class rather than stopping at "derived from the verified surfaces". Eleven use the fixed form *derived editorial implementation inference … not FLO-authored or a separately published UI / motion / state / component / responsive / voice specification*; the one in Scope ¶5 is a brand-history reading rather than an interface reading and closes as *derived editorial interpretation … not FLO-authored or a separately published brand statement*.

| # | Line | Portable location | What carries the qualification |
|---|---:|---|---|
| 1 | 15 | §1 Experience → Scope ¶4 | The whole §1 reading of the captured layer — clean, luminous, quietly energetic; blue punching through an overwhelmingly white canvas; the achromatic surround; restraint keeping music and cover art front and centre; the pink as a deliberate secondary signal language; the clean-audio-studio reading. |
| 2 | 17 | §1 Experience → Scope ¶5 | The whole brand account — the December 2018 launch as SK Telecom's answer, the deliberate counterpoint to chart-first streaming, the name-as-promise reading, the 2021 spin-out, the RE;CORD / FLO Studio / FLO Shop expansion and its "music is personal" premise, and the closing algorithmic-empathy and philosophy-in-pixels readings. States that the material attaches no source marker to any of it. |
| 3 | 48 | §1 Experience → Principles | The five numbered principles and their UI implications, list head, with an added clause that they assert nothing about how FLO recommends, ranks, licenses, or sequences music. |
| 4 | 58 | §1 Experience → Capture-bound application | The six application rules, list head. |
| 5 | 69 | §1 Experience → Avoid | The five boundary prohibitions, list head. |
| 6 | 163 | §2 Foundations → Motion | The five step names, the assignment of each duration to a use, and the four motion rules. Names the CSS declarations quoted inside them as the recorded form. |
| 7 | 230 | §4 Components & States → Source state contract | The ten state rows beyond the restated values, plus the clause stating that the listening and purchase situations they name are editorial scenarios and not statements about FLO's catalog, playback, or billing behavior. |
| 8 | 303 | §4 Components & States → Medium Pill Button | The reading of the recorded rule name `btn-buy` as a purchase control. Names the rule name and the six values as the recorded parts. |
| 9 | 327 | §4 Components & States → Ghost Outline Chip | The reading of the state contract's "retry button in outline style with `#3f3fff` text" as this component. |
| 10 | 435 | §5 Layout & Platforms | The band names, the sidebar and header collapsing behavior, and the single-column grid reflow. Names the eleven recorded values as the recorded parts. |
| 11 | 453 | §6 Content & Locales → Voice | The three adjectives and all four Do/Don't rows. |
| 12 | 459 | §6 Content & Locales → Brand-published lines | The reading beside the tagline — effortlessness and personal identity in six syllables. The tagline itself is carried as the brand's own line, unqualified. |

No occurrence sits in §3 Typography & Assets or in §7 Governance, by measurement rather than by omission. §3 holds evidence classes, family names, recorded metrics, and two asset facts, with the two display-size disagreements stated as disagreements rather than resolved. §7 is the fixed claim block plus Named gaps, none of which is an interpretation of the surfaces. Foundations → Semantic color, Spacing, Shape, and Elevation hold role names and recorded values; the component records hold recorded fields and role-based applicability reasons. Line numbers are as of the final build of `DESIGN.md` (528 lines).

## Deletions

- **§13 Personas.** Four archetypes, every one of them marked *Illustrative* in the source, are deleted, and no name, age, city, commute, listening habit, genre preference, or expectation from them is re-hosted here (D2). The source's own statement that they are illustrative is preserved in portable Experience → Audience. Grep-verified in the portable body: `Minjeong` 0, `Junho` 0, `Hyunsook` 0, `Taeyun` 0, `Seoul` 0, `Busan` 0, `Incheon` 0, `Daejeon` 0, `dark mode` 0, `J-POP` 0, `K-pop` 0, `crate-digger` 0, `subway` 0, `daily mix` 0, `artist pages` 0, `SKT` 0. In this file and in `migration-log.md` each of those strings occurs only inside the deletion record that names it, never as a persona fact. Product references that appear **only** inside the persona text — artist pages, chart positions, followed-artist notifications, an SKT bundled telecom plan — go with the personas; they have no independent statement anywhere else in the source. The dark-surface fact survives independently: §7's Do "maintain readability across light and dark surfaces" is carried in portable Capture-bound application.
- **§9 Agent Prompt Guide.** The whole section is deleted as tool-facing packaging: nine instruction bullets addressed to a generating agent. Every value it restates lands elsewhere, grep-verified in the portable body — `#3f3fff`, `#fff` as `#ffffff`, 5px, 36px, 62px, the font stack, `#333333`, 14px / 400, `#181818`, 16–18px as the 16 and 18 type roles, 600, the input rules (`border-bottom:1px solid #ebebeb`, 58px, 15px, `#181818`, focus `#181818`, error `#ff4d78`, valid `#3f3fff`), `#f4f5f8`, 8px, `0 4px 20px 0 rgba(0,0,0,0.10)`, and the error-only rule for `#ff4d78`. **Two facts existed only in §9 and were moved rather than deleted (A3):** the 20px pill radius, now in portable Foundations → Shape and Governance → Named gaps as a preserved disagreement; and the highlighted-card `#3f3fff`, now in the Active Voucher Card record and Named gaps as a preserved disagreement. Both are §9-only: `grep -c 'border-radius:20px' web/references/flo/DESIGN.md` = 1 at line 259, and `grep -n 'background:#3f3fff' …` = 1 at line 264.
- **Footer evidence block** (**Verified** / **Tier 1 sources** / **Tier 2 sources** / **Conflicts unresolved**). Separated to this ledger, quoted above. The dates it carries are dual (E2a) and reach the portable body as prose.

Nothing else is deleted. Unlike several references in this corpus, the source carries no unattributed `cubic-bezier` curve to remove — its named easings are the CSS keywords `ease-in` and `linear`, each attached to a specific declaration, and both are preserved in the portable Motion section. `grep -o 'cubic-bezier' web/references/flo/DESIGN.md | wc -l` = 0.

## Source-side gaps inherited, not repaired

- **§14 States.** All ten rows are preserved in full — the state contract must survive migration — under an explicit derived-editorial boundary that carves out the values which restate the component records (`#ff4d78`, `#ebebeb`) and the two disabled rows written in CSS declaration form. Nothing in the record marks the remaining rows as observed.
- **§8 Responsive Behavior and §5 layout bands.** The 1070px / 956–1069px / ≤955px bands and the collapsing behavior have no counterpart in a rendered observation, because the method was a source-file fetch. They are preserved with a derived-editorial boundary rather than deleted or promoted, and the numeric values are named as the recorded parts.
- **Reduced motion.** The source records a full duration scale and two named easings and states no reduced-motion behavior anywhere. That absence is left as an absence, named in portable Governance → Named gaps, and the portable Motion section states the five-evidence-kind promotion gate in full (B3).
- **Album Thumbnail interactive kind.** The source records a 6px radius and a 175px height for it and gives it no type field and no control role, while §6 names an "album cover hover" as the trigger for the floating shadow level. That hover line is the only interactive-adjacent evidence, and it is attached to the elevation level rather than to the component. Rather than decide the question, the portable record omits both `Kind` and the state-applicability map and states where the hover line sits (C4). The elevation level keeps its own wording.
- **Ghost chip and the retry control.** The state contract's retry description ("retry button in outline style with `#3f3fff` text") matches the ghost outline chip's recorded appearance, and the source never joins them. The portable body states the match as a reading with an adjacent qualification and keeps the two records separate.

## Proof notes

- `components_harvested: true`. Seven components in the token record; nine in the §4 body, which adds the medium pill (`btn-buy`) and the album thumbnail and folds the password field into the text input as a same-values variant. All nine are declared in the portable body; `grep -c '^- Type:' DESIGN.md` = 9.
- Verified `type:` values are preserved per component as an explicit `Type:` line rather than flattened into `Kind: interactive` (A1b): `button` ×3 from the token record, plus the medium pill declared `button` on the same grounds, `input` ×1, `card` ×2, `tab` ×1. The album thumbnail carries `Type: not recorded`, because the source assigns it none.
- The unitless line height `1.20` is preserved as a ratio in all eight type-role rows rather than converted to a fixed pixel value (A1a). Measured: `grep -o '1\.20' DESIGN.md | wc -l` = 10 — eight table rows, the Distinctive traits line, and the sentence that states the ratio is kept as a ratio.
- Six components declare a Core §4.4 applicability map; three declare none. Every `not-applicable` cell gives a semantic role reason and no cell cites absence of observation (C1, C2). State coverage is stated as not complete (C3). The two cards and the album thumbnail, which carry no interactive-kind evidence, declare no map at all (C4).
- The source records a `Focus` appearance for the text input (`border: 1px solid #181818`) and never uses the term `focus-visible` — `grep -c 'focus-visible' web/references/flo/DESIGN.md` = 0. That observation is preserved as a named appearance on the component that carries it, `focus-visible` applicability is kept by control meaning, and no `focus-visible` row in the portable body carries a colour or treatment value (B1).
- No playback-condition state (playing, paused, and the like) is introduced. The source declares none, and the portable Capture record says so explicitly, because a music product is exactly where such a state would be invented.
- No fictional persona, demographic, commute, listening habit, or conversion behaviour is recorded here.
- Adoption of the sibling stops at this ledger. No sibling-only value, selector, or byte size was written into the portable body; each returns 0 from a literal grep of `DESIGN.md`. The reason is evidence domain, not doubt: the sibling reads the live published files at a moment in time, while the portable contract is the reconstruction of the source `DESIGN.md`, and a live read is not authority for a token in that reconstruction unless the source establishes it too.
- **Product-claim separation.** FLO-published product language — the tagline `가볍게, 나답게 FLO.`, the state labels `지금 음악 찾기` and `내 구독 보기`, and the product names FLO, 플로, RE;CORD, FLO Studio, FLO Shop — is published copy recorded as copy. The company claims the source carries (120 million tracks, deep personalization, AI-driven discovery) are recorded in portable Scope as claims the material makes, not as findings. No measured value in the portable body describes a catalog size, a recommendation behavior, a licensing arrangement, or a subscription term, and the portable body states that boundary in Foundations → Evidence-domain boundary.

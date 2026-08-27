# Frip provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/frip/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | frip |
| name | Frip |
| display_name_kr | 프립 |
| country | KR |
| category | consumer-tech |
| homepage | https://www.frip.co.kr/ |
| primary_color | `#7a29fa` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=frip.co.kr&sz=128` |
| verified | 2026-07-02 |
| added | 2026-07-02 |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

The source `DESIGN.md` carries no `verification_v2` block, no per-claim `method` field, and no `ds.name` / `ds.url` / `ds.type` / `ds.description` field — `grep -oF 'verification_v2' web/references/frip/DESIGN.md | wc -l` = 0 and `grep -oF 'ds.type' …` = 0. None is invented here. Inside that one file the evidence record is the mid-file footer that sits after §4 (**Verified** / **Tier 1 sources** / **Tier 2 sources** / **Conflicts unresolved**) plus the trailing HTML observation comment, both transcribed below.

`tokens.source: live-extract` is a load-bearing evidence field and is kept as a value (A1c). It states that the YAML token block came from the live inspection rather than from the file's own prose, and `tokens.extracted: 2026-07-02` dates that extraction to the same day as the verification. Both facts reach the portable body as prose in Experience → Scope and Components & States → Capture record; the field names stay here.

**`tokens.note`, quoted verbatim:**

> primary = live booking-CTA violet (#7a29fa) — the '참여하기' button + Superhost badge; red family (#f4373d exclusive tag / #ff3f33 discount % / #e21d47 points) is promo-only accent. Near-flat system: box-shadow none, #e6e6e6 hairlines + tint separation.

Every fact in that note reaches the portable body: the violet's two placements in Experience → Distinctive traits and Foundations → Semantic color, the three-value promo-red family in the same two places, and the near-flat system with its `box-shadow: none`, `#e6e6e6` hairlines, and tint separation in Foundations → Elevation. The field name `tokens.note` stays here — `grep -oF 'tokens.note' DESIGN.md | wc -l` = 0.

### Dual and multiple destinations (E2a)

- `name` `Frip` is dual: this identity ledger + the portable H1 `# Frip Design System` and every portable sentence that names the product. `display_name_kr` `프립` is likewise dual: this ledger + portable Experience → Scope (`Frip (프립)`) and Content & Locales → Terminology. The Latin form never replaces the Korean form; it sits beside it at first mention. Measured in the portable body: `grep -oF '프립' DESIGN.md | wc -l` = **20** (this counts every string that contains 프립, including 프립단독 and 신규프립).
- `homepage` `https://www.frip.co.kr/` is dual: this ledger + portable Experience → Scope and Foundations → Evidence-domain boundary, which name it as the read route. Measured: `grep -oF 'https://www.frip.co.kr/' DESIGN.md | wc -l` = **2**.
- `primary_color` `#7a29fa` is multi-destination: this ledger + **8** occurrences in the portable body, at lines 37, 50, 59, 78, 93, 262, 352, and 370 — Experience → Distinctive traits, Principles item 2, Capture-bound application, Avoid, Foundations → Semantic color, the Booking CTA background, the Superhost Tag background, and the nav active appearance. Measured: `grep -oF '#7a29fa' DESIGN.md | wc -l` = **8**.
- `logo` slug is dual: this ledger + portable Typography & Assets → Assets, which carries the same URL and records it as a third-party favicon proxy rather than a captured first-party Frip mark. No portable Named-gaps row was invented for a first-party logo-file absence.
- `verified` `2026-07-02` is dual: this ledger/Freshness + portable Experience → Scope, Foundations → Evidence-domain boundary, Components & States → Capture record, and Content & Locales → Brand-published lines, all four of which date the reading. Measured: `grep -oF '2026-07-02' DESIGN.md | wc -l` = **4**, at lines 11, 121, 233, and 437.
- `tokens.source: live-extract` and `tokens.extracted` stay here as field names; the facts they state are dual, carried as prose in the portable body. `grep -oF 'live-extract' DESIGN.md | wc -l` = 0.
- `components_harvested: true` is dual: this ledger + Proof notes below. It does not reach the portable body as a field name; the portable Capture record states the same fact as prose ("Eight component records exist"). `grep -oF 'components_harvested' DESIGN.md | wc -l` = 0.
- `omd: "0.1"`, `added`, `country`, and `category` are ledger-only. Measured in the portable body: `grep -oF 'consumer-tech' DESIGN.md | wc -l` = 0.

## Trailing HTML observation comment — quoted from the source

The source `DESIGN.md` closes with an HTML comment headed "OmD v0.1 Sources — Philosophy Layer (sections 10–15)". It is the source's own evidence-class ledger, and it is the authority for how the portable body separates recorded values from readings. Transcribed:

**Method and scope:** "Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on https://www.frip.co.kr/ and product-detail surfaces (/165667, /121737, /191730, /188510)".

**Observations listed in that comment:**

- Primary booking CTA "참여하기" — bg rgb(122,41,250) #7a29fa / white / radius 10px / padding 16px / 56px / 16px SUIT (identical across product pages)
- Disabled CTA "신청마감" — bg rgb(238,238,238) #eeeeee / white / 10px / 56px
- App-download bar "앱 다운로드" — bg rgb(51,51,51) #333333 / white / 12px / 700
- Badges "프립단독" bg #f4373d, "슈퍼호스트" bg #7a29fa — 10px / 500 / radius 5px / 4px 6px
- Discount % text #ff3f33 24px/700; points "신규프립 에너지x2" #e21d47 10px/500
- Section headings SUIT 18px/700; product H1 20px/400/-0.6px; body 14px/400
- box-shadow none across nav/hero/headings; #e6e6e6 hairlines + #fafafa/#f4f4f4 tints
- document.title "프립(FRIP) : 대한민국 1등 취미여가 탐색 플랫폼"

**Evidence-class statements in that comment, quoted:**

- "Token-level claims (§1-9) are sourced from this live inspection (see .verification.md Proof block)."
- "Voice samples (§10) are verbatim: homepage title tag + section heading (live homepage), and the 'WE INSPIRE PEOPLE TO EXPERIENCE THE WORLD' tagline from Frip's official Medium publication (medium.com/frientrip, verified live 2026-07-02)."
- "Broader founding specifics beyond these first-party surfaces are general public knowledge, not directly quoted from a verified Frip statement this turn."
- "Personas (§13) are fictional archetypes informed by publicly observable Frip user segments … Names are illustrative; they do not refer to real people."
- "Interpretive claims (e.g., 'one action, one color', 'savings stays in its lane', 'flat and fast as a rejection of legacy booking chrome') are editorial readings connecting Frip's observed design to its positioning, not directly sourced Frip statements."

Two of those statements reach the portable body because a standalone reader needs them to know the authority of what it is reading: the founding-specifics limit sits adjacent to the brand account in Experience → Scope, and the interpretive-claims statement sits adjacent to Experience → Principles. The persona statement reaches the portable body only as the boundary in Experience → Audience; the archetypes themselves are deleted here and are not re-hosted (D2). The comment's §-numbered addressing and its `.verification.md` pointer stay in this ledger.

The comment covers §10–§15 in its heading but assigns a source only to §10 and §11 in its body. §12 is covered by the interpretive-claims statement, §13 by the persona statement, and **§14 and §15 receive no source assignment anywhere in the file.** That is why the portable body carries the state contract and the motion scale under adjacent derived-editorial qualifications rather than as recorded observations.

The comment does not say that §15's three `cubic-bezier` values were observed, and neither does the live-inspection list above, which contains no transition, animation, duration, or easing measurement. Those three values are therefore unattributed and were removed rather than carried; see Deletions.

## Canonical proof — sibling verification file

Adopted, not merely noted. Every field in this section is transcribed from the sibling file. Adoption stops at this ledger: no sibling-only value or sibling-side structural classification is promoted to the portable body, for the reason given under Sibling-only values.

| Field | Value |
|---|---|
| sibling | `web/references/frip/.verification.md` |
| bytes | 6,341 |
| SHA-256 | `887d5ad7443c8f080c178d6e1e76fd3416e020c851cf2c06dcffaa6410dadc6d` |
| heading | `# Frip — Verification Notes (2026-07-02)` |
| grade | `## Proof — Tier 1 live inspect` |
| inspected | 2026-07-02 |
| raw samples | 19 — bullet lines matching `^- ` inside the sibling's `### Raw samples` block, counted with `awk` over that block |

**Method, quoted from the sibling:** "playwright getComputedStyle (live DOM) — global playwright (chromium, headless), Chrome UA, `waitUntil: domcontentloaded`, cookie/modal dismissal + Escape pass, lazy-load scroll, then `getComputedStyle` on body, h1/h2/h3, header/nav, buttons, links, plus a full-DOM background/text/border-radius frequency scan. Homepage + three product-detail surfaces inspected."

That method is why the portable body describes the reading as a live computed-style inspection and why it records no transition, animation, viewport, or resize observation. The instrumentation detail — chromium headless, the Chrome UA, `waitUntil: domcontentloaded`, the cookie/modal and Escape pass, the lazy-load scroll, the element list, and the frequency scan — is sibling-only and stays here.

**Count spread.** The sibling's method line says "three product-detail surfaces"; its own **Sources** list names four (`/165667`, `/121737`, `/191730`, `/188510`), and so does the source `DESIGN.md` comment. The sibling's CTA raw sample says "identical across /165667, /121737, /191730" — three. The portable body follows the source `DESIGN.md`'s own enumeration of four and does not repeat the sibling's "three". Both readings are recorded here; neither is corrected.

**Sources, from the sibling's `**Sources:**` list:**

- https://www.frip.co.kr/ — homepage; live computed style on nav, hero carousel, section headings, product cards, badges
- https://www.frip.co.kr/products/165667 , /121737 , /191730 , /188510 — product-detail surfaces; booking CTA, quantity pills, price/discount, disabled state
- https://medium.com/frientrip — Frip official Medium publication "FRIP — WE INSPIRE PEOPLE TO EXPERIENCE THE WORLD"; brand-owned, verified live 2026-07-02, HTTP 200

The three are the same three the source footer lists as Tier 1, with the same date. The sibling adds the element list, the frequency counts, and the HTTP status.

### Raw samples, transcribed

| Sample | Value |
|---|---|
| body | `font-family: SUIT, "UI Frip", "Noto Sans KR", Helvetica, Arial, sans-serif`; `color: rgb(0, 0, 0)` (#000000); `font-size: 14px`; `line-height: 21px` |
| homepage section H2 "주간 인기 BEST 🏆" | `font-family: SUIT`; `font-size: 18px`; `font-weight: 700`; `line-height: 22px`; `letter-spacing: normal`; `color: rgb(0, 0, 0)` |
| product H1 "숙소·렌트·관광지 한 번에, 강릉갈래?" | `font-size: 20px`; `font-weight: 400`; `line-height: 28px`; `letter-spacing: -0.6px`; `color: rgb(51, 51, 51)` (#333333) |
| product H2 "프립 정보" | `font-size: 18px`; `font-weight: 700`; `line-height: 24px`; `color: rgb(0, 0, 0)` |
| primary booking CTA "참여하기" | `background-color: rgb(122, 41, 250)` (#7a29fa); `color: rgb(255, 255, 255)`; `border-radius: 10px`; `padding: 16px`; height 56px; `font-size: 16px`; `font-weight: 400` — identical across /165667, /121737, /191730 |
| disabled booking CTA "신청마감" | `background-color: rgb(238, 238, 238)` (#eeeeee); `color: rgb(255, 255, 255)`; `border-radius: 10px`; `padding: 16px`; height 56px; `font-size: 16px` |
| app-download bar CTA "앱 다운로드" | `background-color: rgb(51, 51, 51)` (#333333); `color: rgb(255, 255, 255)`; `font-size: 12px`; `font-weight: 700`; height 45px |
| exclusive badge "프립단독" | `background-color: rgb(244, 55, 61)` (#f4373d); `color: rgb(255, 255, 255)`; `border-radius: 5px`; `padding: 4px 6px`; `font-size: 10px`; `font-weight: 500` |
| superhost badge "슈퍼호스트" | `background-color: rgb(122, 41, 250)` (#7a29fa); `border-radius: 5px`; `padding: 4px 6px`; `font-size: 10px`; `font-weight: 500` |
| discount percent "48%" / "89%" / "64%" | `color: rgb(255, 63, 51)` (#ff3f33); `font-size: 24px` (hero) / `14px` (card); `font-weight: 700` |
| points/energy label "신규프립 에너지x2" | `color: rgb(226, 29, 71)` (#e21d47); `font-size: 10px`; `font-weight: 500` |
| quantity/option counter pill | `background-color: rgb(255, 255, 255)`; `border: 1px solid rgb(221, 221, 221)` (#dddddd); `border-radius: 20px`; `padding: 7px 15px`; height 36px; `font-size: 14px`; `color: rgb(51, 51, 51)` |
| carousel index button "1 / 7" | `background-color: rgba(0, 0, 0, 0.4)`; `color: rgb(204, 204, 204)`; `border-radius: 16px`; `padding: 6px 10px`; `font-size: 12px`; `font-weight: 700` |
| soft pink tint surface | `background-color: rgb(255, 244, 247)` (#fff4f7) ×9 occurrences |
| top background colors (homepage frequency scan) | `rgb(255,255,255)` ×62, `rgb(230,230,230)` ×40, `rgb(250,250,250)` ×20, `rgb(153,153,153)` ×20, `rgb(204,204,204)` ×20, `rgb(255,244,247)` ×9, `rgb(238,238,238)` ×8, `rgb(244,55,61)` ×8, `rgb(122,41,250)` ×5, `rgb(17,17,17)` ×4, `rgb(244,244,244)` ×2, `rgb(51,51,51)` ×1 |
| top text colors (homepage frequency scan) | `rgb(0,0,0)` ×1489, `rgb(51,51,51)` ×109, `rgb(170,170,170)` ×95, `rgb(119,119,119)` ×51, `rgb(153,153,153)` ×16, `rgb(226,29,71)` ×9, `rgb(255,63,51)` ×9 |
| border-radius frequency scan (homepage) | `5px` ×78, `50%` ×60, `6px` ×25, `12px` ×20, `8px` ×20, `3px` ×11 |
| box-shadow | `none` across nav, hero carousel, and section headings |
| document.title (homepage) | "프립(FRIP) : 대한민국 1등 취미여가 탐색 플랫폼" |

### Conflict matrix, transcribed from the sibling

| Field | Tier 1 (live) | getdesign | refero | Resolution |
|---|---|---|---|---|
| Primary action color | `#7a29fa` (booking CTA "참여하기" + Superhost badge, all product pages) | — (not listed) | — (not listed) | Tier 1: `#7a29fa` purple is the primary/action color |
| Accent / promo color | `#f4373d` bg ("프립단독" tag), `#ff3f33` text (discount %), `#e21d47` (points) | — | — | Tier 1: red family reserved for exclusive/sale/points emphasis |
| Primary font | `SUIT` (with "UI Frip", Noto Sans KR fallbacks) | — | — | Tier 1: SUIT |
| CTA radius | `10px` (56px-tall booking button) | — | — | Tier 1: 10px |
| Card/badge radius | `5px` (dominant, ×78) | — | — | Tier 1: 5px workhorse |
| Elevation | `box-shadow: none` (hairline + tint separation) | — | — | Tier 1: near-flat |

The sibling states "No unresolved conflicts. Tier 2 both empty; no value contested."

### Korean regional requirement, from the sibling

The sibling lists two brand-owned Korean sources against the KR ≥2 requirement: the Frip official homepage (Tier 1 live-inspected source for all token claims) and Frip's official Medium publication (brand/culture, product, engineering posts by Frip staff), verified live 2026-07-02. It adds: "getdesign.md / refero.design / Google favicon proxy are explicitly NOT counted toward the KR brand-owned requirement." That last statement is the reason the portable Assets line records the catalog logo entry as a third-party favicon proxy rather than as a Frip mark.

### Sibling-only values, recorded here and not promoted

The sibling holds the full live-read record; the portable contract reconstructs the source `DESIGN.md`. A value present only in the sibling is a ledger entry and never a portable token. The values in this class:

- `line-height: 22px` on the homepage section heading. The source `DESIGN.md` states one line height for the 18px/700 heading role — `1.33 (24px)` — and the sibling records 22px on the homepage heading and 24px on the product heading. The portable body carries the source's `1.33 (24px)` and does not add the 22px. `grep -oF '22px' DESIGN.md | wc -l` = 0.
- The third discount example `64%`. The source names two, "48%" and "89%", and the portable body carries those two. `grep -oF '64%' DESIGN.md | wc -l` = 0.
- Every `rgb(...)` and `rgba(0, 0, 0, 0.4)` notation form above. The source states its colors as hex, and the portable body uses hex. `grep -oF 'rgb(' DESIGN.md | wc -l` = 0.
- The carousel index button record — `1 / 7`, `border-radius: 16px`, `padding: 6px 10px`, `color: rgb(204, 204, 204)`, `font-size: 12px`, `font-weight: 700`. The source records only the `rgba(0,0,0,0.4)` scrim on carousel index chips, which is what the portable Elevation table carries. `grep -oF '1 / 7' DESIGN.md | wc -l` = 0.
- The product H1 sample text `숙소·렌트·관광지 한 번에, 강릉갈래?`. It is a listing title from one product page rather than product chrome, and the source quotes no product title. `grep -oF '강릉갈래' DESIGN.md | wc -l` = 0.
- Every full-DOM frequency count except the one the source itself carries. The source `DESIGN.md` states the 5px radius count as "×78 in scan" without naming the surface it was scanned on, so the portable body carries 78 and calls it "the recorded scan" rather than adopting the sibling's "homepage" attribution; every other count — the background, text, and remaining radius frequencies, including the `6px` ×25, `8px` ×20, and `3px` ×11 radius rows — stays here. `grep -oF '×1489' DESIGN.md | wc -l` = 0, `'×62'` = 0, `'×60'` = 0, `'×25'` = 0.
- The `#fff4f7` ×9 occurrence count.
- The instrumentation detail in the method line, and the HTTP status of the Medium publication.
- The refero fuzzy-match list — Flox, Flim, Franky's, Flowmapp, Fold, Freytag Anderson, Fluz, Framer, Fuser. `grep -oF 'Flowmapp' DESIGN.md | wc -l` = 0.
- The fuller publication name "FRIP — WE INSPIRE PEOPLE TO EXPERIENCE THE WORLD". The portable body carries the tagline in the form the source `DESIGN.md` §10 quotes it, without the `FRIP — ` prefix.
- The sibling's "three product-detail surfaces" count.

**Structural classifications are sibling-only too, and were kept out of the portable body deliberately (B1).** The sibling names its samples by DOM level — "homepage section H2", "product H1", "product H2", "body". The portable Type roles table uses only the role names the source `DESIGN.md` itself assigns — Detail / Section Heading, Product Title, Discount %, Booking CTA, Body / UI, App-download CTA, Corner Badge — and the one structural phrase it carries, "Product-detail H1", is the source's own Notes-column wording at `web/references/frip/DESIGN.md` line 118. `grep -oF 'section H2' DESIGN.md | wc -l` = 0 and `grep -oF 'product H2' DESIGN.md | wc -l` = 0.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-07-02 |
| added (YAML) | 2026-07-02 |
| tokens.extracted | 2026-07-02 |
| footer **Verified** | 2026-07-02 |
| comment live inspect | 2026-07-02 |
| sibling inspected | 2026-07-02 |
| Medium publication verified live | 2026-07-02 |

Every date in the record is 2026-07-02. There is no spread.

**Footer conflicts line, quoted:** "**Conflicts unresolved:** none".

**Conflicts found during migration, not recorded by that footer.** One internal disagreement exists inside the source file. Both sides are preserved, neither is selected, and it is named in portable Governance → Named gaps.

| # | Source locations | Statements |
|---|---|---|
| 1 | §8 Touch Targets, line 287, versus §15 Motion rules, line 405 | §8: "Corner tags are non-interactive labels at 10px, kept out of the tap flow." §15: "the booking CTA and tags respond to press with a subtle scale/opacity shift at `motion-fast`." |

Because the record disagrees about whether the corner tags are controls rather than falling silent, the two badge components in the portable body declare no `Kind` and no Core §4.4 state-applicability map (C4), and both statements are preserved where they sit — the §8 sentence in Layout & Platforms → Recorded touch measurements, the §15 rule in Foundations → Motion.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product-surface (homepage) | https://www.frip.co.kr/ | 2026-07-02 |
| product-165667 | product-detail surface | https://www.frip.co.kr/products/165667 | 2026-07-02 |
| product-121737 | product-detail surface | https://www.frip.co.kr/products/121737 | 2026-07-02 |
| product-191730 | product-detail surface | https://www.frip.co.kr/products/191730 | 2026-07-02 |
| product-188510 | product-detail surface | https://www.frip.co.kr/products/188510 | 2026-07-02 |
| medium | brand-owned publication | https://medium.com/frientrip | 2026-07-02 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.frip.co.kr/ | 2026-07-02 |
| product-live | product-surface | https://www.frip.co.kr/products/165667 , /121737 , /191730 , /188510 | 2026-07-02 |
| medium | brand-owned publication | https://medium.com/frientrip | 2026-07-02 |
| verification | proof-sidecar | `web/references/frip/.verification.md` | 2026-07-02 |

### Tier 1

Quoted from the source footer: "**Tier 1 sources:** https://www.frip.co.kr/ (homepage, live computed style); https://medium.com/frientrip (Frip official Medium publication, brand-owned)".

### Tier 2 (no usable record)

Quoted from the source footer: "**Tier 2 sources:** getdesign.md/frip (no entry — \"0 DESIGN.md files\"); styles.refero.design/?q=frip (no entry — fuzzy \"F…\" matches only)".

The sibling states the same two lookups with the same outcome and adds their method and detail: getdesign.md returned HTTP 200 with the shell strings `"frip — 0 DESIGN.md files"` and `"No designs found for 'frip'"` (curl 2026-07-02); refero returned only the fuzzy "F…" list (playwright 2026-07-02). It concludes "KR Tier-2 coverage is empty (expected). Tier 1 live inspection carries all token claims." Nothing is invented to fill the slot, and neither lookup reaches the portable body.

## Portable derived-editorial scope (E1)

This ledger is 1:1 with the portable body for the counted qualification phrase: every occurrence the body carries is listed here, and nothing is listed that the body does not carry. Counted, not estimated — `grep -o 'derived editorial' DESIGN.md | wc -l` = **14** and `grep -o 'not Frip-authored' DESIGN.md | wc -l` = **14**, on the same 14 lines (15, 17, 47, 57, 70, 159, 181, 203, 220, 243, 412, 414, 433, 453), so every occurrence closes its evidence class rather than stopping at "derived from the verified surfaces". Thirteen use the fixed form *derived editorial implementation inference … not Frip-authored or a separately published UI / motion / state / voice / responsive specification*; the one at line 17 is a brand-history reading rather than an interface reading and closes as *derived editorial interpretation … not Frip-authored or a separately published brand statement*.

Row 14 was added by the separate-session B2a audit (`audit-log.md`), not by the migration worker: the first-party-inventory reading of the 프립단독 tag was attributed at Foundations → Semantic color (94) and on the Exclusive Tag record (338) but restated flat, as an unattributed product fact, in Content & Locales → Terminology. The counts above are the post-audit measurement.

| # | Line | Portable location | What carries the qualification |
|---|---:|---|---|
| 1 | 15 | §1 Experience → Scope, interface paragraph | The whole §1 reading of the captured layer — bright content-dense commerce feed rather than a minimalist brand site, the packed white canvas, energetic and consumer-friendly versus a calm fintech dashboard, "the page wants you to browse dozens of experiences at a glance", the violet as the trained next step, and the Korean-modern type reading. |
| 2 | 17 | §1 Experience → Scope, brand paragraph | The whole §11 account — the 프렌트립 origin and its friends-plus-trip contraction, the modern-loneliness framing, the reframing of leisure as a bookable marketplace, the ethos-shapes-the-product reading, the crew and Superhost framing, and the closing refuses/embraces pair. Carries the source's own limit that broader founding specifics are general public knowledge rather than a quoted Frip statement, and marks the Medium mission phrasing as the quotation it is. |
| 3 | 47 | §1 Experience → Principles | The five numbered principles and their UI implications, list head. Names the source's own statement that three of them are editorial readings and extends it to all five. |
| 4 | 57 | §1 Experience → Capture-bound application | The eight §7 Do rules, list head. |
| 5 | 70 | §1 Experience → Avoid | The eight §7 Don't rules, list head. |
| 6 | 159 | §2 Foundations → Elevation | The §6 Shadow Philosophy reading — near-shadowless system, hairlines and tints and card imagery instead of elevation, the scrim-for-lift and color-for-emphasis pair, and the fast/flat/mobile-native closing. Names `box-shadow: none`, the `1px solid #e6e6e6` border, the three tints, and the `rgba(0,0,0,0.4)` scrim as the recorded parts. |
| 7 | 181 | §2 Foundations → Motion | The three token names, the duration-to-use and easing-role-to-use assignments, the five motion rules, and the reduced-motion contract. States that the computed-style read supplies no transition, animation, duration, or easing value. |
| 8, 9 | 203, 220 | §3 Typography & Assets → Family and Type roles | Two occurrences on adjacent readings: the single-family reading in Family (203), and the four §3 typography principles below the Type roles table (220). Both name the computed stack and the seven table rows as the recorded parts. |
| 10 | 243 | §4 Components & States → Source state contract | The nine state rows beyond the values that restate the component records, plus the clause stating that the booking and browsing situations they name are editorial scenarios rather than statements about Frip's booking, availability, or messaging behavior. |
| 11, 12 | 412, 414 | §5 Layout & Platforms | Two occurrences: the breakpoint bands and collapsing behavior (412), naming the recorded measurements as the recorded parts; and the §5 Whitespace Philosophy reading — density over emptiness, flat segmentation, tag rhythm (414). |
| 13 | 433 | §6 Content & Locales → Voice | The three voice adjectives, the register reading, all five table rows, and the forbidden-register rule. |
| 14 | 453 | §6 Content & Locales → Terminology | The reading that the 프립단독 tag flags first-party inventory that cannot be had elsewhere. Names the two published tag strings and the values recorded against them as the recorded parts. Added by the B2a audit; see `audit-log.md`. |

No occurrence sits in §7 Governance, by measurement rather than by omission: §7 is the fixed claim block plus Named gaps, none of which is an interpretation of the surfaces. Foundations → Shape and the Elevation table itself hold role names and recorded values; the component records hold recorded fields and role-based applicability reasons; Brand-published lines and Locale hold published strings and the source's own statements about them. Two subsections hold readings that are attributed in place to the reviewed material rather than counted above, and the distinction is stated rather than glossed: Foundations → Semantic color, whose head sentence separates the recorded hexes and role names from the use descriptions and where the "do this / trust this" gloss (93) and the first-party-inventory gloss (94) carry `the reviewed material calls / reads it as` in the sentence itself; and Foundations → Spacing, whose "dense, tap-friendly commerce spacing" reading (133) carries the same attribution beside its three recorded padding values. Terminology's inventory reading was the one restatement of that class carrying no attribution at all, which is why it is row 14 above rather than a fourth entry in this paragraph.

Line numbers are as of the post-audit build of `DESIGN.md` (502 lines — the audit fix replaced one line in place and shifted no reference).

Two boundary rules in Experience → Avoid are deliberately outside the qualified list because they are evidence rules rather than editorial readings: do not substitute a different family for SUIT on the strength of this reading, and do not read a homepage or product-detail value as a value for a surface this reading did not visit.

## Deletions

- **§13 Personas.** Three archetypes, which the source's own §13 header and trailing comment both mark fictional, are deleted, and no name, age, city, trip type, browsing habit, or expectation from them is re-hosted here (D2). Grep-verified in the portable body: `김하늘` 0, `박민준` 0, `이서연` 0, `서울` 0, `경기` 0, `부산` 0, `혼자여행` 0, `pottery` 0, `craft class` 0, `host profiles` 0. The word `commute` occurs once in the portable body, at Experience → Audience line 31, and only inside the sentence naming what is **not** carried forward; it is not a persona fact. The source's own statement that they are fictional archetypes is preserved in portable Experience → Audience; the segment enumeration that its §13 header carries is deleted with them rather than promoted to an audience finding. The Korean string `혼자여행` occurs only inside that persona sentence in the source and nowhere else — `grep -oF '혼자여행' web/references/frip/DESIGN.md | wc -l` = 1, at line 369 — so it goes with the persona and is **not carried** to any output; this line and the corresponding `migration-log.md` row are its disposition record. Every other Korean string quoted inside the persona paragraphs — 주간 인기 BEST, 프립단독, 참여하기, 슈퍼호스트, 크루 — is independently established elsewhere in the source and survives in the portable body on that independent basis, not on the persona's.
- **§9 Agent Prompt Guide.** The whole section is deleted as tool-facing packaging: a quick colour reference, four copy-paste component prompts, and a seven-step iteration guide addressed to a generating agent. **No value in it is §9-only.** Every hex, px, rem, ms, and percentage inside §9 was extracted and searched against the rest of the file; each one occurs outside §9, so A3 required no move. Its four Korean strings are likewise established outside §9 — 프립단독 10 occurrences, 참여하기 10, 주간 인기 BEST 6, 앱 다운로드 6.
- **§15 easing curve values.** Three `cubic-bezier` values — one for each of `ease-enter`, `ease-exit`, and `ease-standard` — are removed as unattributed. `grep -oF 'cubic-bezier' web/references/frip/DESIGN.md | wc -l` = 3 and the same count in the portable body is 0. The removal is scoped to the curve values only: the three token names, all three durations (120ms / 200ms / 320ms), all three easing roles with their uses, the five motion rules, and the reduced-motion contract are preserved in portable Foundations → Motion. The exact-curve absence is named in portable Governance → Named gaps. The reason is that neither the source's trailing comment nor the sibling's raw samples record any transition, animation, duration, or easing measurement, and the computed-style read they describe produces none; `ease-exit`'s value in particular is the value the legacy 0.1 template carries as an example.
- **YAML frontmatter block.** Separated to the Identity table above; the portable file has no frontmatter.
- **Footer evidence block** (**Verified** / **Tier 1 sources** / **Tier 2 sources** / **Conflicts unresolved**) and the **trailing HTML comment**. Separated to this ledger and quoted above. **Four** things inside them are dual (E2a) and reach the portable body: the 2026-07-02 date, the two evidence-class statements named earlier, the `document.title` string, which is a published Frip string and sits in portable Content & Locales → Brand-published lines, and — corrected by the B2a·E2 audit — the **four product-detail surface paths** `/165667`, `/121737`, `/191730`, `/188510`, which the comment's method-and-scope line is the source file's only carrier for (`grep -oF '/165667' web/references/frip/DESIGN.md | wc -l` = 1, at line 411) and which reach portable Experience → Scope line 11 as well as the Surfaces and Sources tables above (`grep -oF '/165667' DESIGN.md | wc -l` = 1). The footer's own two Tier-1 URLs also appear in the portable body, but they reach it from their other legacy carriers — the YAML `homepage` field and §10's voice-sample marker — rather than from the footer. The comment's §-numbered addressing, its `.verification.md` pointer (`grep -oF '.verification.md' DESIGN.md | wc -l` = 0), and the observation bullet list itself stay in this ledger.

Nothing else is deleted.

## Proof notes

- Tier 1 live inspect, 2026-07-02, playwright `getComputedStyle`. `components_harvested: true`: eight component records in the token block and the same eight in §4, which adds the app-download bar's 45px height and the navigation header's approximately 56px height that the token block leaves out. Seven components are declared in the portable body; the eighth record, `cta-disabled`, is carried as the Booking CTA's named sold-out appearance with all six of its values, on the source's own statement that it is the same geometry as active.
- Verified `type:` values are preserved per component as an explicit `Type:` line rather than flattened into `Kind: interactive` (A1b). The source records `button` ×3, `input` ×1, `card` ×1, `badge` ×2, `tab` ×1 across its eight records. Measured in the portable body: `grep -c '^- Type: ' DESIGN.md` = **7**, one per declared component; the eighth record's `type: button` is carried on the Booking CTA's own Type line, which reads "recorded on both `cta-primary` and `cta-disabled`". Measured: `grep -oF 'cta-disabled' DESIGN.md | wc -l` = **4** — the section heading, the Type line, the named-appearance line, and the Capture record sentence that explains the fold.
- The unitless line-height ratios `1.33`, `1.40`, and `1.50` are preserved as ratios in the Type roles table, with the source's own pixel equivalents (24px, 28px, 21px) beside them (A1a). They are not converted to fixed pixel values.
- Four components declare a Core §4.4 applicability map; three declare none. Measured: `grep -c '^| State | Applicability | Reason |' DESIGN.md` = **4**, `grep -c '^- Type: ' DESIGN.md` = **7**. Every `not-applicable` cell gives a semantic role reason and no cell cites absence of observation (C1, C2). State coverage is stated as not complete (C3). The experience card and the two corner tags declare no map at all (C4) — the card because the source gives it a surface record and no control role, the two tags because the source disagrees with itself about whether they are controls.
- The source writes `focus` exactly once, inside the §15 duration table ("Card hover, tag press, focus" at 120ms), and never writes `focus-visible` — `grep -oF 'focus-visible' web/references/frip/DESIGN.md | wc -l` = 0. That single mention is a different evidence kind from a `focus-visible` treatment, so it is kept where the record puts it, `focus-visible` applicability is held by control meaning, and no `focus-visible` row in the portable body carries a colour or treatment value (B1).
- No booking-condition or listing-condition state (pending, waitlisted, cancelled, and the like) is introduced. The source declares none, and the portable Capture record says so explicitly, because a booking product is exactly where such a state would be invented.
- No fictional persona, demographic, trip type, or browsing behaviour is recorded here.
- **Product-claim separation.** Frip-published product language — the positioning line 대한민국 1등 취미여가 탐색 플랫폼 and its full title-tag form, the section heading 주간 인기 BEST 🏆, the Medium tagline WE INSPIRE PEOPLE TO EXPERIENCE THE WORLD, the button labels 참여하기 / 신청마감 / 앱 다운로드, the tags 프립단독 / 슈퍼호스트, the point label 신규프립 에너지x2, the heading 프립 정보, the shelf headings 신규 프립 / 기획전 / 크루님을 위한 고감도 경험 / 이런 모임은 어때요?, the nav items 카테고리 / 피드 / 메시지 / 찜 / 마이, the member term 크루, and the origin name 프렌트립 — is published copy recorded as copy. The category-leader claim inside the positioning line is recorded in portable Scope as the product's own line rather than as a finding of this record. No measured value in the portable body describes a booking policy, a host vetting rule, a refund term, or a price, and the portable body states that boundary in Foundations → Evidence-domain boundary.

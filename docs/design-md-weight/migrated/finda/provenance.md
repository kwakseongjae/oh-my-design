# Finda provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/finda/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | finda |
| name | Finda |
| name (Korean, from the body) | 핀다 |
| country | KR |
| category | fintech |
| homepage | https://finda.co.kr |
| primary_color | `#4e2eed` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=finda.co.kr&sz=128` |
| verified | 2026-06-09 |
| added | 2026-06-09 |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

Token note from source, quoted in full: "primary = live app-download CTA violet (#4e2eed); secondary brand violet (#5d4cf2) appears on tinted surfaces. Headings near-black navy (#010a26); dark pill chips bg (#15161b)."

The source `DESIGN.md` carries no `verification_v2` block, no per-claim `method` field, and no `ds.name` / `ds.url` / `ds.type` / `ds.description` field — `grep -o 'verification_v2' web/references/finda/DESIGN.md | wc -l` = 0, and the same for `ds.type`. None is invented here. Inside that one file the evidence record is the mid-file footer (**Verified** / **Tier 1 sources**) plus the trailing HTML comment "OmD v0.1 Sources — Philosophy Layer (sections 10–15)", both transcribed below. The source footer carries no "Conflicts unresolved" line; `grep -o 'Conflicts' web/references/finda/DESIGN.md | wc -l` = 0.

The source `DESIGN.md` is not the whole evidence record. A sibling verification file sits beside it in the same directory and **is adopted into this ledger**: `web/references/finda/.verification.md`. It carries the live-inspection record that the footer's one-line **Verified** string abbreviates, and it is the authority below for the inspection method, the inspected URLs, the raw computed samples, and the Korean regional-source requirement. Its record is the **Canonical proof** section immediately below. Adoption stops at this ledger: no sibling-only value is promoted to a portable token, for the reason given in Proof notes.

### Dual and multiple destinations (E2a)

- `name` `Finda` is dual: this identity ledger + the portable H1 `# Finda Design System` and every portable sentence that names the company. `핀다` is likewise dual: this ledger + portable Experience Scope and Content & Locales, byte-for-byte. The Latin form never replaces the Korean form; it sits beside it at first mention (`Finda (핀다)`).
- `primary_color` `#4e2eed` is multi-destination: this ledger + portable Experience → Distinctive traits (line 40), Principles item 3 (55), Capture-bound application (65), Foundations → Semantic color (91), the App-Download CTA background (234), and the Top Navigation Link — its active line (309) and the named-state note below the table (323). Counted `grep -o '#4e2eed' DESIGN.md | wc -l` = **7** occurrences in the portable body, one per location listed. Experience → Avoid names the colour by role ("violet", "the only saturated hue") rather than by hex, so it holds the role and not the value.
- `homepage` `https://finda.co.kr` is dual: this ledger + portable Experience Scope, which names the inspected route, and Foundations Evidence-domain boundary, which names the site.
- `logo` slug is dual: this ledger + portable Typography & Assets Assets, which carries the same URL and records it as a third-party favicon proxy rather than a captured first-party mark. No portable Named-gaps row was invented for a first-party logo-file absence.
- `verified` / `added` `2026-06-09` is dual: this ledger/Freshness + the portable Scope, Evidence-domain boundary, Font evidence, Capture record, and Brand-published lines, all of which date the inspection.
- `tokens.source: live-extract` and `tokens.extracted: 2026-06-09` stay in this ledger only. `grep -o 'live-extract' DESIGN.md | wc -l` = 0.
- `components_harvested: true` is dual: this ledger + Proof notes below. It does not reach the portable body as a field name; the portable Capture record states the same fact as prose ("harvested the eight components below").
- `tokens.note` is dual: quoted in full above + its four operative facts in portable Foundations Semantic color (the Primary / Violet Alt / Ink Navy / Dark Chip roles).
- `omd: "0.1"` is ledger-only.

## Canonical proof — sibling verification file

Adopted, not merely noted. Every field in this section is transcribed from the sibling file. Two of them — the 2026-06-09 date and the finda.co.kr and blog.finda.co.kr sources — the source `DESIGN.md` footer also states in short form, and they agree. A third is partly shared: the source's trailing comment names the method as "playwright getComputedStyle on https://finda.co.kr", which the sibling states in full, so only the sibling's method detail below (headless chromium, `--disable-http2`, `networkidle`, the dismissal pass, the element set, the frequency scan) is sibling-only. Everything else in this section exists only in the sibling.

| Field | Value |
|---|---|
| sibling | `web/references/finda/.verification.md` |
| bytes | 3,050 |
| SHA-256 | `c608646af8684cd2fde69b23b4dfba9882302f66945df71405a2856c0430ee5e` |
| heading | `# Finda — Verification Notes (2026-06-09)` |
| grade | `## Proof — Tier 1 live inspect` |
| inspected | 2026-06-09 |
| raw samples | 12 — bullet lines matching `^- ` inside the sibling's `### Raw samples` block, counted with `awk` over that block; the block has no wrapped bullets, so bullets and lines coincide there |

**Method, quoted from the sibling:** "playwright getComputedStyle (live DOM) — global playwright (chromium, headless, `--disable-http2`), goto https://finda.co.kr networkidle, cookie/modal dismissal pass, then `getComputedStyle` on body, h1/h2/h3, header/nav, buttons, links, and a full-DOM background/text color frequency scan."

**Inspected URL, from the sibling's `**Sources:**` list:**

- https://finda.co.kr — homepage, named there as the live computed-style surface
- https://blog.finda.co.kr — named there as the Finda official blog, brand-owned; no computed value is attributed to it

Both are the two the source footer lists as Tier 1 sources, so the sibling corroborates the footer rather than widening it. The sibling adds a third brand-owned source that the source `DESIGN.md` never names: `https://apps.apple.com/kr/app/핀다-대출비교-대환대출/id1078954927`, the Korean App Store listing, recorded there as confirming the product positioning 대출비교·대환대출. That URL and the Korean runs inside it (`대출비교`, `대환대출`) stay in this ledger; the portable body's count for each is 0.

### Korean regional requirement, from the sibling

The sibling states the three brand-owned Korean sources that satisfy the KR ≥2 requirement — finda.co.kr, blog.finda.co.kr, and the App Store listing — and adds, quoted: "getdesign.md / refero.design / Google favicon are explicitly NOT counted toward the KR brand-owned requirement." The catalog `logo` slug is that Google favicon proxy, so the portable Assets line records it as a third-party proxy rather than as a captured first-party mark, on the sibling's own terms.

### Sibling-only values, recorded here and not promoted

The sibling measures the live DOM; the portable contract reconstructs the source `DESIGN.md`. Those are different evidence domains, so a value present only in the sibling is a ledger entry and never a portable token. The values in this class:

- Hero H1 `금융 선택의 기준을 바꾸다` computed `color: rgb(0, 0, 0)`. This corroborates one side of the source's own internal disagreement about heading color (see Freshness below). It is recorded, and it is not used to select a side.
- Section H2 `대출 비교부터 신청까지` computed `color: rgb(21, 22, 27)` (`#15161b`). The source assigns no color to the 34px section role except in its component restatement, which gives `#010a26`.
- Dark tool chip measured `padding: 14.48px 29px`. The source rounds this to `14px 29px` in both the token record and the component body, and the portable body carries the source's rounded form.
- Two further dark tool chip labels the source never names: `내 집 대출한도` and `연말정산`. The source names four (`대출이자`, `연봉 실수령`, `DSR`, `전월세 비교`); the sibling names six.
- Text color `rgb(68, 72, 87)` ×18 in the frequency scan, with no counterpart in the source's colour token record.
- The two full-DOM frequency scans: backgrounds `rgb(255,255,255)` ×12, `rgb(21,22,27)` ×8, `rgb(245,246,250)` ×6, `rgb(246,246,246)` ×4, `rgb(93,76,242)` ×2, `rgb(78,46,237)` ×1; text `rgb(1,10,38)` ×227, `rgb(58,65,90)` ×34, `rgb(101,121,142)` ×26, `rgb(68,72,87)` ×18, `rgb(169,176,201)` ×10.
- Header/nav `height 56px` stated as a computed sample, and the nav/footer link `회사소개` sample — both corroborate values the source already carries, so they are corroboration rather than sibling-only additions.
- The App Store listing URL above.
- The binding of the string `악성 앱 차단` to an `h3` element, measured at `font-size: 28px`; `font-weight: 800`; `line-height: 40px`; `letter-spacing: -0.42px`. Those four numbers corroborate the source's own Sub-section type role (28px / 800 / `1.43` = 40px / -0.42px) rather than adding to it; what the sibling alone establishes is that this string is the text of a heading element on the live page. The source records the string once, in its §10 tone table, as the trust-and-security example, and attaches no element and no page position to it. The structural class is therefore an observation in the live-DOM domain, and carrying it into the reconstruction of the source `DESIGN.md` as a fact about that document would change the evidence class of the observation (B1). It stays here.

Each sibling-only value returns 0 from a literal grep of the portable body: `grep -oF '14.48' DESIGN.md | wc -l` = 0, `내 집 대출한도` = 0, `연말정산` = 0, `rgb(68, 72, 87)` = 0, `rgb(0, 0, 0)` = 0, `apps.apple.com` = 0, `대환대출` = 0, `--disable-http2` = 0, `networkidle` = 0.

The `악성 앱 차단` entry is a class rather than a value, so that grep line does not cover it. Measured separately: the string occurs 2 times in the portable body (`grep -oF '악성 앱 차단' DESIGN.md | wc -l` = 2) — in the Content & Locales label list and in its Voice reading row — and each occurrence carries the source's own tone-table classification with no element and no page position attached. The source's count for the same string is 1 (`grep -oF '악성 앱 차단' web/references/finda/DESIGN.md | wc -l` = 1); the sibling's is also 1, in the `h3` line of its `### Raw samples` block, which the bullet above transcribes.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-09 |
| added (YAML) | 2026-06-09 |
| tokens.extracted | 2026-06-09 |
| footer **Verified** | 2026-06-09 |
| sibling inspected | 2026-06-09 |

Every date in the record is 2026-06-09; there is no freshness spread to reconcile.

**Conflict found during migration, not recorded by the source footer.** The source assigns the heading text colour two ways:

| Source location | Value |
|---|---|
| §2 Neutral & Surface — "Pure Black (`#000000`): Occasional maximum-contrast heading text (e.g. hero H1, feature H3)" | `#000000` |
| Trailing comment — "Hero H1 … color rgb(1,10,38)" | `#010a26` |
| §9 example prompt — hero headline "color #010a26"; feature card "Title 28px SUIT weight 800, letter-spacing -0.42px, #010a26" | `#010a26` |
| §2 Text Hierarchy — "Ink Navy (`#010a26`): Primary text, headings, nav, strong labels" | `#010a26` |

Both values are preserved; neither is selected. The portable body records the disagreement in Typography & Assets → Type roles and names it in Governance → Named gaps. The adopted sibling's H1 sample reads `rgb(0, 0, 0)`, which agrees with the `#000000` side, and that agreement is recorded here rather than used to close the conflict — the sibling is a live-DOM measurement and the portable contract reconstructs the source `DESIGN.md`.

Other preserved value pairs inside the reconstruction, neither side chosen: `canvas` `#ffffff` versus `on-primary` `#ffffff` (kept as separate roles, A4); `ink` `#010a26` versus `ink-pure` `#000000`; `muted` `#65798e` versus `muted-alt` `#737a94`; the dark chip's `bg` `#15161b` against its `fg` `#010a26`, which the source records identically in both the token record and the component body.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product-surface (public marketing homepage) | https://finda.co.kr | 2026-06-09 |
| blog | brand-owned blog | https://blog.finda.co.kr | named in the source footer and in the sibling's Sources; no computed value attributed |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://finda.co.kr | 2026-06-09 |
| blog | brand-owned blog | https://blog.finda.co.kr | named in the source footer and in the sibling's Sources |
| appstore | brand-owned product listing | https://apps.apple.com/kr/app/핀다-대출비교-대환대출/id1078954927 | named in the sibling only |
| verification | proof-sidecar | `web/references/finda/.verification.md` | 2026-06-09 |

### Tier 1

- https://finda.co.kr — live homepage, brand-owned. All token-level claims in the source's §1–§9 are attributed to this inspection by the trailing comment, quoted: "Token-level claims (§1-9) are sourced from this live inspection." Dual portable Scope + this ledger (E2a).
- https://blog.finda.co.kr — Finda official blog, brand-owned. Named in the source footer and in the sibling. No value in the source is attributed to it, which is why the portable Named gaps writes the gap about this named source rather than about an unnamed domain.

Method recorded in the source footer, quoted: "**Verified:** 2026-06-09 (omd:add-reference CREATE — Tier 1 live inspect)". The full method — headless chromium, `--disable-http2`, `networkidle`, the cookie/modal dismissal pass, the element set, and the full-DOM frequency scan — comes from the adopted sibling and is quoted in Canonical proof above.

### Tier 2

The source `DESIGN.md` records no Tier 2 lookup. The sibling names getdesign.md, refero.design, and the Google favicon only to exclude them from the KR brand-owned requirement, quoted above; it records no result from them. Nothing is invented to fill the slot.

## Observation ledger

Transcribed from the source's trailing HTML comment. These are the computed observations the reconstruction rests on.

| Observation | Value |
|---|---|
| Hero H1 금융 선택의 기준을 바꾸다 | SUIT 64px / weight 800 / -0.96px / color rgb(1,10,38) |
| Section H2 대출 비교부터 신청까지 | SUIT 34px / 800 / -0.51px |
| App-download CTA | bg rgb(78,46,237) `#4e2eed` / radius 100px / SUIT 12px / white text |
| Dark tool chips (대출이자, 연봉 실수령, DSR) | bg rgb(21,22,27) `#15161b` / radius 60px / 14px 29px padding |
| Nav header | bg `#ffffff` / 56px / SUIT 14px / text rgb(1,10,38) |
| Shadow | `box-shadow: none` across hero / nav / headings / chips |
| Page title meta | 대출비교플랫폼, 핀다 \| 1분만에 국내 최다 금융사 대출 비교 |

The chip observation carries background, radius, and padding and no text colour; the chip's `#010a26` text value comes from the token record and the §4 component body instead. That evidence split is dual (E2a): recorded here and stated in the portable Dark Tool Chip record.

The source's own evidence-class statements, quoted from the same comment:

- "Voice samples (§10) are verbatim from the live homepage (hero H1, section H2, page title meta)."
- "Brand narrative (§11): Finda (핀다) founded 2015 as a Korean loan-comparison platform; CEO 이혜민 (Lee Hye-min). These are widely documented public facts about the company; specific founding details beyond the homepage are general public knowledge, not directly quoted from a verified Finda statement in this turn."
- "Personas (§13) are fictional archetypes informed by publicly observable Finda user segments (Korean borrowers comparing loans). Names are illustrative; they do not refer to real people."
- "Interpretive claims (e.g., 'one action, one color', 'flat and fast as a rejection of legacy banking chrome') are editorial readings connecting Finda's observed design to its positioning, not directly sourced Finda statements."

All four boundaries are dual (E2a): quoted here and carried in the portable body — the verbatim status in Content & Locales → Brand-published lines, the founding evidence class in Experience → Scope ¶1, the fictional-persona flag in Experience → Audience, and the editorial status of the interpretive claims in Experience → Principles and Foundations → Elevation.

## Portable derived-editorial scope (E1)

This ledger is 1:1 with the portable body for the counted qualification phrase: every occurrence the body carries is listed here, and nothing is listed that the body does not carry. One further reading closes its evidence class in a different form and is named under the table rather than counted in it. Counted, not estimated — `grep -o 'derived editorial' DESIGN.md | wc -l` = **17** occurrences of the phrase (they fall on 17 distinct lines), and `grep -o 'not Finda-authored' DESIGN.md | wc -l` = **17**, so every occurrence closes its evidence class rather than stopping at "derived from the verified surface". 16 use the fixed form *derived editorial implementation inference … not Finda-authored or a separately published UI / typography / layout / responsive / motion / voice / locale / state specification*; the one at Scope ¶2 is a brand-history reading rather than an interface reading and closes as *derived editorial interpretation … not Finda-authored or a separately published brand statement*.

| # | Line | Portable location | What carries the qualification |
|---|---:|---|---|
| 1 | 11 | §1 Experience → Scope ¶2 | The founding account: no transparent way to compare across banks, savings banks, and capital companies; borrowers steered toward a single institution; Finda reframing lending into a transparent comparison marketplace; and the user's-advocate reading. Explicitly not a finding about any named institution or about the Korean lending market. |
| 2 | 17 | §1 Experience → Scope ¶5 | The whole reading of the captured layer — calm editorial product rather than hard-sell lending site, airy zones, premium/trustworthy weight, violet as "the action", the SUIT-over-Pretendard tension, restraint with depth, flat and mobile-first, "doesn't look intimidating". |
| 3 | 47 | §1 Experience → Distinctive traits | The three evaluative halves inside the trait list: "bold, declarative Korean-premium voice", "quiet, dense, hangul-optimized" plus de-facto-Korean-product-font, and "warm, trustworthy". The families, sizes, weights, tracking, and colour roles are named as the measured parts. |
| 4 | 51 | §1 Experience → Principles | The five numbered principles, list head, with an extra clause on item 1 stating it is not a claim about how Finda ranks, sources, or discloses offers. |
| 5 | 61 | §1 Experience → Capture-bound application | The eight application rules, list head. |
| 6 | 74 | §1 Experience → Avoid | The eight boundary prohibitions, list head. |
| 7 | 118 | §2 Foundations → Spacing | The reading of 29px chip padding as a generous, tappable hit area. The 29px measurement is named as the measured part. |
| 8 | 137 | §2 Foundations → Elevation | The modern-flat reading: clean/fast/mobile-native, avoiding the legacy "card stack", reaching for colour or the dark chip instead of elevation. |
| 9 | 159 | §2 Foundations → Motion | The duration values and assignments, the reduced-motion rule, and the functional-and-quiet characterization; carries the promotion gate in full (transition properties, animation name, duration, easing, reduced-motion behavior, per component, with the note that one curve or duration is not that gate). |
| 10 | 181 | §3 Typography & Assets → Family | The persuasive-versus-functional role split, the never-swap rule, and weight contrast as the primary hierarchy signal. |
| 11 | 195 | §3 Typography & Assets → Type roles | The reading of the three tracking values as a deliberate compression rule. The five measured values are named separately. |
| 12 | 215 | §4 Components & States → Source state contract | All nine rows, plus the clause stating that the financial situations they name are editorial scenarios written into this contract and not statements about Finda's comparison, screening, or application behavior. |
| 13 | 390 | §5 Layout & Platforms → Whitespace | The whitespace account: breathing room over density, flat segmentation, pill rhythm. The 29px padding, the 60px and 16px radii, and the two band colours are named as the measured parts. |
| 14 | 411 | §5 Layout & Platforms → Touch targets and collapsing | The breakpoint table, the collapsing strategy, the image behavior, and the tap-comfort reading of the 48px / 33px / 56px heights, which are named as desktop measurements rather than accessibility-target rules. |
| 15 | 426 | §6 Content & Locales → Brand-published lines | The three role notes beside the verbatim lines. The published strings and their live markers are named as the measured parts, and the page-title record is separated from the truth of the claim inside it. |
| 16 | 443 | §6 Content & Locales → Voice reading | The clear/reassuring/empowering characterization and the five context rows. |
| 17 | 461 | §6 Content & Locales → Locale | The reading of 14px as generous for hangul legibility and dense enough for information-rich financial layouts. The 14px body role is named as the measured part. |

No occurrence sits in §7 Governance or in §2 Foundations → Semantic color and Evidence-domain boundary, by measurement rather than by omission. §7 Governance is the fixed claim block — authority, application priority, unknowns policy, changes policy, and Named gaps — none of which is an interpretation of the surface. Those two §2 subsections hold role names, measured values, and a scope boundary only; the interpretive readings that sit near them (elevation, spacing) are rows 7 and 8 above. The other subsections that carry no occurrence of their own — the component records, Assets, Capture record, the spacing/radius scales, the breakpoint table — hold recorded values or contract rules, and where such a subsection does contain a reading the qualification that covers it is the row that names it: the breakpoint table under row 14, the nine state rows under row 12.

One reading closes its evidence class without either counted phrase, which is why it is not among the 17: §6 Content & Locales → Forbidden register (line 457) carries the closure by anaphora — "The same editorial reading" points at the Voice reading qualification immediately above it, row 16 — and adds its own boundary, "an authoring rule for writing in this style", "not a Finda-published policy", asserting nothing about the company's products, lending practice, marketing conduct, or compliance position.

One row has a second, narrower record elsewhere in this file: Motion (row 9) also appears under *Omitted unattributed easing curves*, because three curve values were removed from it. That section is an omission ledger; this table is the qualification ledger, and it is the one that must match the body 1:1.

## Omitted unattributed easing curves (E2b)

The portable Foundations → Motion section keeps the token names `ease-enter` / `ease-exit` / `ease-standard` and their uses, and marks each curve cell "omitted (unattributed cubic-bezier; no Finda-published source for the curve)". The curve strings themselves are omitted from the portable body and stored here as the omission ledger. The source's observation record covers computed colour, type, geometry, and shadow only; it records no motion measurement, and the one inspected route contributes no duration, curve, or transition observation.

- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` — matches neither the legacy 0.1 spec example table nor a CSS keyword, and recurs across the catalog corpus without a per-brand source; unattributed.
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — byte-identical to the `ease-exit` example in `spec/omd-v0.1.md`, the known re-injection path for this value.
- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` — the curve equivalent of the CSS `ease` keyword, i.e. an engine default rather than a measured Finda token.

Grep-verified: `grep -oE 'cubic-bezier\([0-9. ,]+\)' DESIGN.md | wc -l` = 0 in the portable body, 3 in this ledger. The bare word `cubic-bezier` appears 4× in the body — three omission labels and the Named-gaps line.

The duration tokens `120ms` / `200ms` / `320ms` differ from the legacy spec example ladder and are recorded as brand-specific, so they stay in the portable Motion table under the derived-editorial qualification that covers the whole motion section.

## Deletions

- **§13 Personas.** The three archetypes are deleted, and no name, age, city, occupation, motivation, or borrowing behaviour from them is re-hosted here. The source's own statement that they are fictional archetypes is preserved in portable Experience → Audience. The segment labels quoted inside the source's persona disclaimer are likewise not re-hosted as an audience finding. Grep-verified in the portable body: `김지원` 0, `박서준` 0, `이수진` 0, `서울` 0, `경기` 0, `부산` 0, `대출 갈아타기` 0. In this file and in `migration-log.md` each of those strings occurs only inside the deletion records that name it — never as a persona fact, an age, a city, or a behaviour — so the outputs carry the record of the deletion and not the persona. The last appears in the source only inside the third persona sentence and goes with it.
- **§9 Agent Prompt Guide.** The ten-line Quick Color Reference, the four example component prompts, and the seven-step Iteration Guide are deleted as tool-facing packaging. Every value they restate lands elsewhere; the audit of that is in `migration-log.md`. Three §9-only facts were moved rather than deleted (A3): the app-download CTA's right-aligned header placement, the feature card's `#3a415a` body text, and the 34px section-title colour `#010a26`.
- **§1 and §11 evaluative framing of the company.** "Korea's design-forward loan-comparison fintech" (§1) and "Korea's leading 대출 비교 (loan-comparison) platform" (§11) are evaluative superlatives carrying no value or rule; their factual halves — a Korean loan-comparison platform on finda.co.kr — survive in portable Experience → Scope. Grep-verified in the portable body: `design-forward` 0, `leading` 0.
- **§11 English restatement of the page-title claim.** "compare offers from the country's largest set of financial institutions in about a minute" is an unmarked paraphrase of Finda's own published page-title line. The published Korean line `1분만에 국내 최다 금융사 대출 비교` is carried instead, marked as published copy whose accuracy is not a finding of this record. Grep-verified in the portable body: `largest set` 0, `about a minute` 0.
- **§11 evaluative contrast.** "no institutional navy-and-gold" and "the dark-pattern urgency of predatory lending marketing" are comparisons rather than facts about the captured page. Their operative halves survive: the legacy "card stack" reading is in Foundations → Elevation and the fear-based-pitch prohibition is in Content & Locales → Forbidden register. Grep-verified in the portable body: `navy-and-gold` 0, `dark-pattern` 0, `predatory` 0.

## Source-side gaps inherited, not repaired

- **§14 States.** All nine rows carry no verification marker and no observation in the ledger above backs one. They are preserved in full — the state contract must survive migration — under an explicit derived-editorial boundary and an added clause separating their financial scenarios from any claim about Finda's actual behaviour.
- **§8 Responsive Behavior.** The breakpoint table, the collapsing strategy, the touch-target readings, and the image behaviour have no counterpart in the observation ledger, which covers one desktop route. They are preserved with a derived-editorial boundary rather than deleted or promoted.
- **§4 Dark Tool Chip / More Link Pill foreground.** Both records pair `bg: #15161b` with `fg: #010a26` — near-black text on a near-black background. The source states it identically in the token record and in the §4 body, and the observation note for the chips carries no text-colour sample, so there is nothing in the record to reconcile it against. Both values are preserved as written; the evidence split is stated in the portable Dark Tool Chip record.

## Proof notes

- `components_harvested: true`; eight components in the token record and eight in the §4 body, one-to-one.
- The observation list records default appearances only, plus the named active appearance on the top navigation. No interaction event, hover transition, focus treatment, or pressed treatment appears in it. The adopted sibling does not widen this: its 12 raw samples are computed styles of resting elements, and it records no interaction, hover, focus, pressed, or motion measurement either. So the derived-editorial boundary on the state contract and on Motion stands after adoption, not merely before it.
- Uncaptured hover, disabled, loading, error, and success treatments are omitted. They are not `not-applicable`; applicability follows control meaning, and every `not-applicable` cell in the portable body gives a role reason rather than an absence of observation. State coverage is not claimed complete.
- The source never records a `focus-visible` observation — `grep -o 'focus-visible' web/references/finda/DESIGN.md | wc -l` = 0 — and no `focus-visible` row in the portable body carries a colour or treatment value.
- The two card components and the badge keep their verified `type:` values while their interactive kind and state-applicability map are omitted or declared non-interactive, because the source supplies no interactive-kind evidence for them (C4). The `listItem` type on the footer link is preserved as the source writes it.
- Adoption of the sibling stops at this ledger. No sibling-only value, string, or selector was written into the portable body; each returns 0 from a literal grep of `DESIGN.md`. The reason is evidence domain, not doubt: the sibling measures the live DOM at a moment in time, while the portable contract is the reconstruction of the source `DESIGN.md`, and a live-DOM measurement is not authority for a token in that reconstruction unless the source establishes it too.
- No fictional persona, demographic, credit profile, journey, or conversion behaviour is recorded here.
- **Financial-domain separation.** Finda-published financial language — 대출이자, 연봉 실수령, DSR, 전월세 비교, 대출 비교부터 신청까지, 1분만에 국내 최다 금융사 대출 비교, 앱 다운받기 — is published copy recorded as copy. No measured UI value in the portable body describes a loan product, an interest rate, a DSR or income figure, an approval or screening condition, or a term of service, and the portable body states that boundary in Foundations → Evidence-domain boundary. The forbidden-register rule is labelled an authoring rule rather than a Finda policy statement, Principles item 1 is labelled as not a claim about how Finda ranks or discloses offers, and the state contract's comparison/application scenarios are labelled as the author's UI scenarios. Recording that a published line appears on the homepage is not a finding that the claim inside it holds.

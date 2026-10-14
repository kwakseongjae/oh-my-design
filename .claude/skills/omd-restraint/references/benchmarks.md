# omd-restraint benchmarks

Measured 2026-10-14 with `scripts/audit.mjs` (this commit), headless Playwright Chromium build 1228 (playwright-core 1.61.1), dpr 1,
`reducedMotion: reduce`, load + 1.2s, one scroll pass to wake reveals, then measured from scrollY = 0.
No `--exclude` and no `--content` were passed; no consent UI was found to hide on either site.
Both are live production pages, so a later run can differ: re-run before quoting these numbers.

The point of this file is calibration, not a ranking. tasteskill.dev is the page the rulebook learned from,
and it still fails several rules. The thresholds were **not** tuned to make it pass.

## Fixtures (self-test)

`node scripts/selftest.mjs`

| Fixture | Verdict | Failing rules |
|---|---|---|
| `fixtures/restrained.html` | **PASS** | none (R1 8.07 / 6.94, 4 pieces, 3 sizes, 22 words, 1 accent, empty 93%) |
| `fixtures/busy.html` | **FAIL** | R1, R2, R3a, R3b, R3c, R4a, R4b, R4c, R5, R6, R7, R8, R9, R11a, R11b, R12, R13 (+ R10 WARN) |

## https://www.tasteskill.dev/

| Rule | Grade | 1440×900 | 390×844 | Status |
|---|---|---|---|---|
| R1 focal ratio | M | 4.85 | 3.53 | PASS |
| R2 first-screen pieces | C | 6 | 6 | FAIL |
| R3a sizes, first screen | C | 7 (88/30/17/15/14/13/12) | 7 | FAIL |
| R3b sizes, page | H | 16 | 13 | FAIL |
| R3c headline : body | M / H | 5.9 | 3.7 | PASS |
| R4a headline lines | C | 1 | 1 | PASS |
| R4b lede | C / H | 7 words / 2 lines | 7 / 2 | PASS |
| R4c first-screen words | H | 53 | 45 | PASS |
| R5 hero CTAs | C | 5 | 5 | FAIL |
| R6 numerals / stat tiles | H | 2 / 0 | 2 / 0 | PASS |
| R7 accent hues | C | 0 | 0 | PASS |
| R8 borders / grids | H / C | 0 / 0 | 0 / 0 | PASS |
| R9 eyebrows / micro+mono / badges | C | 1 / 17 / 0 | 1 / 9 / 0 | FAIL |
| R10 said twice | H | 0 | 0 | PASS |
| R11a empty share | H | 77% | 50% (info) | PASS |
| R11b tallest empty band | C | 0.30vh | 0.246vh (208px; 211px needed) | FAIL |
| R12 thin screens | C | 0 | 0 (info) | PASS |
| R13 length | H | 10.2 screens | 14.1 screens | FAIL |

Read it:
- The hero itself is restrained the way RESTRAINT.md §1 described: one 88px line, a 2-line lede, 53 words, no accent,
  no lines, and a dominant visual (the example deck, 16% of the screen, 4.85× the headline's glyph box).
  The full-bleed stone photo is treated as the ground (it covers ≥ 85% and the headline sits on it) and left out of R1/R2.
- What fails is what RESTRAINT.md already flagged as the site breaking its own skill: the "New · TasteCode" pill
  (counted as a pressable piece and an R5 CTA), the deck's "show next" control (a fifth pressable), 7 sizes in the hero,
  16 on the page, monospace skill names outside `<code>` (R9), and a 10-screen page.
- Agreement with the hand measurement in RESTRAINT.md: words 53 vs 55, first-screen sizes 7 vs 7,
  empty share 77% vs 76% (1440) and 50% vs 46% (390), length 10.2 / 14.1 vs 10.2 / 14.1.

## https://oh-my-design.kr/

The live build on 2026-10-14 is the catalog home (an H1 "299 company design systems, every value traced to a capture.",
a grade tally, a search bar, a 10-row most-selected list and a Toss readout card), not the `rebrand-a-r3` build RESTRAINT.md
measured locally. Numbers are not comparable one to one with RESTRAINT.md §1.

| Rule | Grade | 1440×900 | 390×844 | Status |
|---|---|---|---|---|
| R1 focal ratio | M | 1.68 (a framed `section` 12.3% vs H1 7.3%) | 1.84 (H1 8.8% vs a row link 4.8%) | FAIL |
| R2 first-screen pieces | C | 22 | 14 | FAIL |
| R3a sizes, first screen | C | 10 (53/28/24/19/17/16/14/13/12/11) | 9 | FAIL |
| R3b sizes, page | H | 13 | 12 | FAIL |
| R3c headline : body | M / H | 3.8 | 2.1 | FAIL |
| R4a headline lines | C | 2 | 3 | FAIL |
| R4b lede | C / H | 50 words / 3 lines | 20 / 2 | FAIL |
| R4c first-screen words | H | 243 | 121 | FAIL |
| R5 hero CTAs | C | 15 | 8 | FAIL |
| R6 numerals / stat tiles | H | 51 / 4 | 15 / 4 | FAIL |
| R7 accent hues | C | 5 | 4 | FAIL |
| R8 borders / grids | H / C | 18 / 0 | 11 / 0 | FAIL |
| R9 eyebrows / micro+mono / badges | C | 4 / 83 / 0 | 4 / 74 / 0 | FAIL |
| R10 said twice | H | "521" ×4, "299" ×4 | ×3, ×3 | WARN |
| R11a empty share | H | 58% | 39% (info) | FAIL |
| R11b tallest empty band | C | 0.09vh | 0.06vh | FAIL |
| R12 thin screens | C | 0 | 0 (info) | PASS |
| R13 length | H | 2.7 screens | 5.4 screens | PASS |

Read it:
- The page is short (R13) and never thin (R12): the catalog is dense on purpose, which is what a list surface should be.
  The failures are all on the first screen: it holds a hero, a tally, a search, a list and a preview card at once,
  so nothing dominates (R1 1.68) and 243 words compete.
- R7 counts the brand swatches in the list as accents. They are content (RESTRAINT.md R7); a fair re-run passes
  `--content` with the swatch selector. The red tally rule and links are chrome and would still count.
- R9's 83 micro/mono labels are the monospace hex values, country codes and tier marks in the list rows. Some of those are data,
  not captions — this is where the rule is coarsest (see "weak spots" below).
- Under the precedence in SKILL.md this route is LC-59 dial ≤ 5, so the restraint ceilings apply. The cut/keep/enlarge
  table in RESTRAINT.md §4 is the starting inventory; AGENTS.md keeps the reference content and the `#use` hand-off.

## Weak spots this benchmark exposed

- R9 cannot tell a monospace data value (a hex code in a table-like row) from a decorative mono caption; only `<code>`/`<pre>`
  and command-looking text are exempt.
- R5 counts every pressable on the first screen outside the nav, so an announcement pill or a carousel control counts as a CTA.
  That is the rule as written, but it is stricter than "two buttons".
- R11b at 390 is a 211px band; tasteskill.dev missed it by a tile row. A 16px tile grid makes this rule step-shaped near the line.
- The ground exemption (a ≥ 85% picture under the headline) is a geometric guess: a full-bleed product photo with the
  headline on it would also be called ground.

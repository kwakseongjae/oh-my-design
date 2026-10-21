# Item page, right column: why it read thin next to refero, and what changed

2026-10-21 · round 13, owner item 2 ("왼쪽 md에서는 절대 부족하지 않은데 … 보여주는 방식에서 갈리는 것 같다") · branch `feat/r13-item` (base `187f5195`)

**Sources.**
- [styles.refero.design](https://styles.refero.design) (index), plus two style pages, fetched 2026-10-21 with WebFetch and a headless playwright capture of the presentation column:
  - [Linear](https://styles.refero.design/style/90ce5883-bb24-4466-93f7-801cd617b0d1): crops in `shots/refero/` (third-party screenshots, kept local and not committed)
  - [OpenAI](https://styles.refero.design/style/dc541737-8bf2-4b31-b729-0352f696e82f)
- Our column before this round: `shots/before/` (dev server, preview pane only). After: the 1440 / 390 full-page and first-screen captures in `shots/`, from the production build (local, about 27MB).

## How refero presents a style
- **Layout** is our mirror image. The presentation column scrolls; the DESIGN.md (plus Tailwind, CSS variables and tokens) sits in a sticky code panel.
- **Order:** Color Palette → Typography → Spacing & Shape → Guidelines (Do / Don't) → "More like this".
- **Colours** are grouped *Brand / Accent / Neutrals*. The brand swatch stands alone at the top.
  - Each swatch is a ~146×80 card with name, hex and one usage sentence.
  - Linear has 16 colours, OpenAI 7.
- **Type scale** is a card with a ratio note ("Minor Third (1.2) from 16px base").
  - Each row: the role, `72px · 510 · 1` aligned right, and a pangram set at its real size and weight. Eight rows are shown, then "Show all 22 steps".
  - A font card per family lists weights, sizes (range and count), line-height range, tracking, fallback and usage.
- **Spacing & shape:**
  - a Purpose / Value / Preview table with bars (density, base unit, max width, section gap, card padding, element gap);
  - radius rows with corner previews;
  - shadow tiles.
- **Components are not drawn**: they appear only in the DESIGN.md export. There is no composed sample beyond the hero screenshot.
- **Refero interprets.** Its export says "roles and recommendations are interpreted". The usage sentences, the density word and the functional-spacing rows are its reading, not recorded values.

## Why ours read thin: same data, weaker presentation
1. **Order lost.** The AST stores each token map with sorted keys, and the preview drew them as they came.
   - pixiv's `primary` sat mid-grid among 23 equal tiles.
   - Toss's 92 colours were uniform tiles (`blue100 … blue900, blue50`).
2. **No hierarchy.** There was no brand-first swatch, no group headings and no ramps.
3. **Type scale gutted.** `extractTokens()` keeps only tiers with a numeric weight, at most 10.
   - Toss showed 6 of its 26 roles; pixiv lost `caption-s`.
   - With no loadable face, a row was bare text: `Heading Xxxl 32px · 700`.
4. **Whole groups missing.** Spacing (recorded by 336 of 521 references), radius (413) and elevation (206) were cut in round 11 because the old tables fell back to defaults.
5. **Components** were drawn only with fill + text, and their recorded states were never shown.
6. **Empty pane.** 108 legacy snapshots (tokens written from prose, so low confidence) showed an empty column, and on phones the page opened on an empty "Preview" tab.

## What we took, and what we left
- **Took the structure:**
  - the brand colour first and large, then groups;
  - numbered hues as ramps;
  - every recorded type role with its metrics, and "show all";
  - spacing bars, radius tiles and shadow tiles;
  - component states, which refero does not show.
- **Left anything that would need interpretation or a stand-in** (unknown means absent; G3):
  - usage sentences, density and functional spacing;
  - pangrams in a face that does not load (a role with no loadable face gets a size bar instead);
  - Do / Don't (cut in round 11; whether to bring it back is the owner's call).

## Result (`fa59f6ba`)
The server builds a model from AST values behind the frontmatter / high-confidence gate, in the author's order (from the registry). Group names come only from the token keys.

| Reference | Colours | Type roles | Spacing | Radii | Components (states) |
|---|---|---|---|---|---|
| pixiv | lead + 4 groups (23) | 11 | 7 | 3 | 1 (hover/pressed/focus painted) |
| toss | lead + 3 groups + 8 ramps × 10 | 26 (20 with no recorded weight) | 6 | 6 | 3 (prose states quoted) |
| stripe | `accent` lead + 2 groups | 3 | 6 | 3 | 2 |
| 11st | `brand-red` lead + 1 group | 4 · Noto Sans KR card live | 4 | 4 | 5 |

- **Sparse references degrade by omission.** A group with nothing recorded is absent.
- **Nothing recorded means no pane.** The page then shows the DESIGN.md alone, with no toggle (`discord`, all 108 prose-derived snapshots).
- **Checked by test.** A catalog-wide test asserts that no shown colour, spacing step or type role is missing from the reference's own file.

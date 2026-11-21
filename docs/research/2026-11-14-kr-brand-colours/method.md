# Method (2026-11-21)

- Script: `compute.py` in this folder (run `python3 -I compute.py` from anywhere); the repository is read-only to it; no network, no browser. Inputs: `data/reference-quality.json` (generated_at 2026-11-13), `web/src/data/registry.generated.ts`, `web/references/<id>/DESIGN.md` frontmatter.
- Population: registry `country == "KR"` and quality `status == "verified_v2"`: N = 185. KR partial 23, KR legacy_snapshot 21 excluded. (`reference.json` `catalog.country/category` was checked equal to the registry for all 622 references.) The 2026-11-06 note counted 167; the catalog has since grown.
- Measured primary: none for 9 references (left out of measured tables, kept in rows.json as null). Sources: first-non-white-button 97, button-name-primary 46, token-primary 33, None 9.
- Judgement calls:
  1. Primary-action component = components with `type: button` only. Rule A: the first (file order) button whose name contains `primary` (case-insensitive) and whose `backgroundColor` is an opaque, parseable colour (white is allowed here). Rule B (only if A finds none): the first button whose backgroundColor is opaque and not `#ffffff`. Else the frontmatter `colors.primary`. Else null. The frontmatter field is `backgroundColor` in all DESIGN.md files (no `bg`).
  2. Colours with alpha < 1 (`rgba(...,0.8)`, 8-digit hex not ending in ff), `transparent`, and non-colour strings are treated as not usable and skipped; they are never composited over a guessed background.
  3. A button named `*primary*` can be a secondary marketing CTA (e.g. toss: `tds-button` #3182f6 is skipped in favour of `marketing-primary` #e8f3ff because its name contains primary). Table 1e counts references with several differing `*primary*` buttons and gives the result under the alternative rules, so the effect is visible; the main tables keep the rule the brief specified.
  4. HSL achromatic order: L<8 black-ish, L>95 white-ish, then S<10 grey (dark desaturated navies like #191f28 are therefore chromatic).
  5. Registry vs measured "differs" = normalised lowercase 6-digit hex not equal; registry values are not altered.
  6. Table 4 reference point: component-wise median of Lab over chromatic measured primaries (not a medoid), ΔE76 = Euclidean in CIE Lab, D65 white, sRGB to linear with the standard 0.04045 threshold. Ties broken by id.
  7. Contrast: WCAG 2.x relative luminance, ratio = (1.0+0.05)/(L+0.05) against #ffffff. Quartiles: linear interpolation between order statistics.
  8. Table 2 uses categories with >= 8 KR verified references (all N, not only counted).
- Spot checks (open `web/references/<id>/DESIGN.md`, `components:`):
  - `ably`: source button-name-primary, component `corporate-primary` backgroundColor #ff5160; token primary #ff5160; registry #ff5160; measured #ff5160
  - `airbridge`: source button-name-primary, component `primary-cta` backgroundColor #155dfc; token primary #155dfc; registry #155dfc; measured #155dfc
  - `11st`: source first-non-white-button, component `wing-top-button` backgroundColor #000000; token primary None; registry #ff0038; measured #000000
  - `29cm`: source first-non-white-button, component `buy-cta` backgroundColor #000000; token primary #000000; registry #000000; measured #000000
  - `classting`: source token-primary, component `None` backgroundColor None; token primary #00c896; registry #00c896; measured #00c896


## Rule S (second pass)

- Definition and tables: `tables.md` section "Rule S". Token step requires an opaque, parseable colour (an alpha or non-colour `primary` value counts as absent). Name filter is a case-insensitive substring test on the component name; the fill must be opaque and L <= 95%. Token is not lightness-filtered.
- S4 judgement calls: qualifying button = `type: button` with `backgroundColor` exactly equal (after normalising to lowercase 6-digit) to the Rule S primary and an opaque parseable `textColor`; reference-level ratio = the highest among its qualifying buttons (the other choice, the lowest, is counted as "any button below 4.5"). Text colours with alpha are skipped, not composited. The white-text figure is hypothetical and kept separate.
- S5 uses the first Rule-S-filtered primary-named button in file order against the token.
- Spot checks (Rule S): `coinone` primary-named-button -> #0b59d5; `dabang` primary-named-button -> #326cf9; `29cm` primary-token -> #000000; `3o3` primary-token -> #fbbd41; `11st` None -> None

## Rule W (third pass, 2026-11-21)

- Rule S left out 32 KR verified references, mostly because their main colour token is not named `primary` (e.g. naver `brand`, 11st `brand-red`, shinhanbank `brand-primary`). Each of the 32 files was read on 2026-11-21; `missing-32.md` lists the token name each uses and the evidence. 16 are added under Rule W because the file itself presents one token as its main colour (identity colour, or a colour its colour list names for an action fill, in every case equal to the registry primaryColor), with a verbatim quote the script checks; 16 stay out because the file does not let one main colour be told.
- The widening is a per-id list, not a name pattern: a pattern such as `brand*` or `*primary*` also matches `text-primary` (melon), `nhis-primary-60` (nhis) and three `brand-*` tokens (wooribank).
- Registry `primaryColor` is used only to corroborate, and only where the same hex is a frontmatter colour token of that reference (asserted by the script). A registry value that is only a text-ink token, or no token at all, does not admit a reference (W7 shows the effect of admitting them).
- Rule W counts 169 of 185 (Rule S 153); left out 16. JP and TW are not widened; S6 compares the three countries on Rule S.
- Contrast names (W4): every reference below 4.5:1 under Rule W was checked against its own DESIGN.md on 2026-11-21 for whether the measured control is the main action (`CONTRAST_CHECK`, quote checked verbatim). **This is a check against the reference files only; no browser was used and no page was re-measured.** Kept 23, dropped 11 (W4b).
- Headline (W5): the script asserts that blue is the largest family under all 7 rules.
- First computed 2026-11-14; this run 2026-11-21. Input as of this run: `data/reference-quality.json` generated_at 2026-11-13.

## Live recheck of the named contrast rows (2026-11-21)

The 23 rows of W4a were read from the reference files. `recheck_contrast.mjs` then loaded each service's home page at 1440 (headless; the installed Chrome with a window for the three that refused headless) and looked for elements drawn with the recorded fill and the recorded text colour. 18 rows still show the pair and are the ones the article names; for karrot, toss, teamsparta and idus the fill is not on the home page, and for ably it appears only with black text. The check opens no other page, so those five are unconfirmed, not wrong. It confirms that the colour pair is live, not which control it is: that reading still comes from the reference file. Results: `contrast-recheck.json`, `contrast-recheck.md`.

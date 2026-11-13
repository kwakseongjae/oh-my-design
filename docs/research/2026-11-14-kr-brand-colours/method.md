# Method (2026-11-14)

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
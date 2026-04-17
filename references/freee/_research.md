# Research Sources for freee

추출 일자: 2026-04-17
스킬: `omd:add-reference` (5-tier methodology)
입력 URL: `https://vibes.freee.co.jp` + `https://github.com/freee/vibes`

## Tier 1 — Official Design System

**Status: FULLY FOUND — open-source design system with public source code**

freee's design system is named **Vibes** and is fully open source at [github.com/freee/vibes](https://github.com/freee/vibes). All design tokens are committed to the repo as SCSS partials in `stylesheets/lv0/`:
- `_colors.scss` (2.6KB) — full color palette: 9 hue scales × 5-10 shades + semantic aliases
- `_size.scss` (4.6KB) — spacing scale, type scale, form-control heights, z-index hierarchy, container widths, line-height, font family
- `_fonts.scss` (385B) — `freee-logo` font definition (Noto Sans CJK JP Medium)
- `_focus.scss` (644B) — focus ring styles

Plus a public Storybook hosted at [vibes.freee.co.jp](https://vibes.freee.co.jp) showcasing every component with live previews.

Distribution: `@freee_jp/vibes` npm package. CSS imported via `@freee_jp/vibes/css` (`vibes_2021.css` or `.min.css`).

## Tier 2 — Brand / Press Kit

Not investigated — Tier 1 source is comprehensive and authoritative.

## Tier 3 — Engineering / Design Blog

[freee Developers Hub](https://developers.freee.co.jp) hosts technical articles. Specific design system writeups not deeply mined for this initial extraction.

## Tier 4 — Live Site Recon

**Method**: Playwright MCP screenshot of [vibes.freee.co.jp](https://vibes.freee.co.jp) Storybook (verifies the docs site is live and accessible).

Storybook navigation confirms:
- DOC section: Readme, Colors, Contribution, Design, Storybook, Stylesheets, TypeScript
- EXAMPLES: Collection, Forms, ImportWizard, Pages, ResponsiveLayout, ThroughCommonProps
- LV2 components: accordionPanel, breadcrumbs, bulletedList, buttonGroup, calendar, cardNavigation, combobox, descriptionList, dialogs, dropdown, dropdownButton, emptyStates, fileUploader, filterTag, filterableDropdownButton, ...

Screenshot saved: `_research/vibes-storybook-1440px.png`

## Extraction details (from raw GitHub source)

Raw URLs fetched via curl:
- https://raw.githubusercontent.com/freee/vibes/master/stylesheets/lv0/_colors.scss
- https://raw.githubusercontent.com/freee/vibes/master/stylesheets/lv0/_size.scss
- https://raw.githubusercontent.com/freee/vibes/master/stylesheets/lv0/_fonts.scss

All token values quoted in DESIGN.md are direct copies from these source files — zero inference.

## Confidence

### High Confidence (direct from open-source SCSS source code)
- Entire 9-hue color palette (Primary, Secondary, Red, Orange, Yellow, Yellow-Green, Green, Blue-Green, Purple, Gray)
- Semantic color aliases (`$vbPrimaryColor`, `$vbAccentColor`, `$vbAlertColor`, etc.)
- Type scale (5 sizes: 10/12/14/16/24dp)
- Spacing scale (4/8/16/24/32/48dp)
- Form-control heights (24/36/48dp)
- Three shadow recipes (`$vbCardShadow`, `$vbFloatingShadow`, `$vbPopupShadow`)
- Z-index hierarchy (10 named layers: overlay 100 → max 2147483647)
- Font stack (Hiragino-led Japanese system stack)
- Line height 1.5
- Container max-width 1120dp, mobile boundary 768dp
- `freee-logo` brand wordmark uses Noto Sans CJK JP Medium

### Medium Confidence (inferred from token usage patterns + general SaaS conventions)
- Per-component patterns (button padding, table styling) — inferred from spacing scale + semantic colors; specific component code not exhaustively read
- Default `border-radius: 4px` for buttons/cards — vibes does not tokenize radius; observed in component examples

### Inferred (verify before relying on)
- Brand wordmark explicitly uses `freee-logo` font; everywhere else uses the system stack — confirmed by `_fonts.scss` showing only the wordmark face is loaded
- Animation timing — not in token files; assumed `0.2-0.3s ease`

## Notes
- freee Vibes is the **most cleanly architected** of the OMD references — three-tier token system (scale → semantic → component) with explicit naming conventions.
- The 9-hue palette + per-hue 5-10 shade scale gives this system unusual breadth (vs. e.g., Mercari which is more focused on a few brand colors).
- The brand color pattern (`$vbPrimaryColor === $vbLinkColor === $vbColorsP07`) means buttons and links share the same blue — a deliberate visual coherence choice.
- Open-source license + active maintenance makes this a particularly durable reference; tokens won't silently drift.
- Re-running `omd:add-reference` against this reference can pull updates from the GitHub repo's latest commit.

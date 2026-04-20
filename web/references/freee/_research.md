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

---

## Philosophy Layer — added 2026-04-20

Style reference: `line` (JP peer; best density match per Phase 10-2 auto-pick matrix for 🇯🇵 JP targets).

### Sources used (Philosophy augmentation)
- [corp.freee.co.jp/mission](https://corp.freee.co.jp/mission/) — used for: §10 voice samples ("スモールビジネスを、世界の主役に。"), §11 brand narrative (mission verbatim, SMB-as-catalyst framing).
- [corp.freee.co.jp/company](https://corp.freee.co.jp/company/) — used for: §11 founder biography (Daisuke Sasaki, ex-Google SMB marketing APAC, 2012 founding).
- [corp.freee.co.jp/sustainability/social/accessibility](https://corp.freee.co.jp/sustainability/social/accessibility/) — used for: §10 voice sample ("だれでもビジネスの主役になれる"), §11 closing paragraph, §12 Principle 7.
- [a11y-guidelines.freee.co.jp/intro/intro.html](https://a11y-guidelines.freee.co.jp/intro/intro.html) — used for: §12 Principle 7 (WCAG 2.1 AA, concrete-over-abstract editorial stance).
- [developers.freee.co.jp/entry/growing-vibes](https://developers.freee.co.jp/entry/growing-vibes) — used for: §12 Principle 7 (accessibility-as-foundation, tiered responsibility model), §11 (Vibes open-source rationale).
- [brand.freee.co.jp/designphilosophy](https://brand.freee.co.jp/designphilosophy/) — used for: §10 intro (four-adjective register: かろやか / シンプル / あんしん / インテリジェント), §10 forbidden-phrases register, §12 Principles 2–4. *Note: page returned minimal markdown to WebFetch; the four-adjective register is confirmed across search-surface summaries and third-party writeups (Takram rebrand case, note.com, developers.freee.co.jp reading-group post) rather than by a single full-content fetch.*
- [speakerdeck.com/magi1125/dezainpurinsipurunotukurikata](https://speakerdeck.com/magi1125/dezainpurinsipurunotukurikata) — used for: §12 Principles 1 and 8 (segment-by-workflow, helper-text-only-at-costly-fields framing).
- [corp.freee.co.jp/news/20231219_design.html](https://corp.freee.co.jp/news/20231219_design.html) — used for: §11 (Vibes open-source announcement framing accessibility as the headline asset).

### Gaps / concerns flagged
- Three of six §10 voice samples are `<!-- illustrative -->` rather than `<!-- verified -->`. freee's customer-facing product UI is behind login, so in-app microcopy could not be scraped. All three illustrative samples are modeled on plain 丁寧語 observed on `corp.freee.co.jp` and `a11y-guidelines.freee.co.jp`. Reviewer with freee product access should cross-check before they are used as microcopy source.
- §15 motion stance ("no spring, no overshoot") is an editorial derivation from product category + the four-adjective register. freee does not publish a motion spec; a reviewer with Vibes component source can verify or refute.
- `brand.freee.co.jp/designphilosophy` page is heavily image/JS-driven; WebFetch returned only the page title. Content used was confirmed via search-surface cross-checks but not by a single full-markdown fetch.

## Philosophy Layer QA (2026-04-20) — Diagnostic Rubric

| # | Dimension | Score | Notes |
|---|---|---|---|
| D1 | §10 intro standalone, 3–5 lines, voice qualifiers | 🟢 | Standalone opener (no comparative reference to LINE / Mercari / Apple). 5 lines of prose. Four brand-published voice qualifiers (かろやか / シンプル / あんしん / インテリジェント) plus "plain, reassuring, unobtrusively competent" synthesis adjectives. |
| D2 | §10 tone table 7–10 rows with brand-surface | 🟢 | 8 rows. Includes CTAs / Errors (2 variants) / Success / Onboarding (mandatory) + brand-specific rows: Help/inline explanation (tax-term gloss) and Accessibility surfaces (screen-reader + visible copy parity). |
| D3 | §10 forbidden phrases with brand-specific items | 🟢 | Generic bans (革命的 / revolutionary / game-changer) + JP-specific カタカナ jargon bans (イノベーティブ / ディスラプティブ) + category-specific bans (emoji on money-moved, absolutes like 完全自動 / 100% 正確 that a tax authority could contradict). |
| D4 | §10 voice samples ≥3 with verification tier markers | 🟢 | 6 samples total. 2 verified (mission tagline + accessibility tagline, both with URL + yyyy-mm markers). 1 cited (four-adjective register). 3 illustrative (empty state, validation error, success toast) with explicit illustrative markers. All 6 marked. |
| D5 | §11 narrative with inline citations + footer manifest | 🟢 | Inline markdown links to corp.freee.co.jp/company, /mission, /sustainability/social/accessibility, a11y-guidelines.freee.co.jp, github.com/freee/vibes. Full source manifest in HTML comment footer with tiering (Direct / Cited / JP-translated / Base-carry / Interpretive). |
| D6 | §12 principles with explicit UI implication | 🟢 | All 8 principles use explicit `*UI implication:*` label followed by concrete rule and example. |
| D7 | §12 count 5–10 (target 7–9) | 🟢 | 8 principles. |
| D8 | §13 personas ≤3 sentences, behavior-first, disclaimer | 🟢 | 4 archetypes, each ≤3 sentences. Disclaimer present. Japanese SMB context respected (ramen shop owner, sole-proprietor illustrator, 税理士, design-studio back-office lead). Behaviors dominate over background. |
| D9 | §14 states 10–12, core types covered, no UI-pattern pollution | 🟢 | 12 rows. Core types covered: Empty (2), Loading (2), Error (3), Success (2), Skeleton, Disabled. Brand-authentic row: Approval pending (HR/expense workflow) — unique to SMB back-office context. No UI-pattern pollution. |
| D10 | §15 spring stance explicit + rationale | 🟢 | Explicit: "No spring. No overshoot. No bounce." Rationale: accounting/tax product + four-adjective register; spring tells a user "watch this", which is wrong next to a ledger balance. |
| D11 | §15 reduce-motion rule present | 🟢 | Present. All `motion-*` tokens collapse to `motion-instant` under `prefers-reduced-motion: reduce`. No exceptions; cross-referenced to Principle 7 (accessibility as product constraint). |

**Result**: 11 🟢 / 0 🟡 / 0 🔴. **PASS.**

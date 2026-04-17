# Research Sources for Pinkoi

추출 일자: 2026-04-17
스킬: `omd:add-reference` (5-tier methodology)
입력 URL: `https://en.pinkoi.com`

## Tier 1 — Official Design System

**Status: NOT FOUND**

Checked patterns (HEAD requests + content verification):
- `https://pinkoi.design` — DNS not resolving
- `https://design.pinkoi.com` — DNS not resolving
- `https://pinkoi.com/design`, `/design-system`, `/styleguide`, `/brand` — All return 200 due to SPA catch-all routing, but content is the homepage (no DS docs)
- `https://en.pinkoi.com/about/brand` — redirects to /about, brand storytelling page only

GitHub search: no official `pinkoi/*` org. All repos are third-party scrapers, clones, or unrelated. No public design tokens repository.

WebSearch (`"Pinkoi" "design system" site:pinkoi.com`): no DS documentation surfaces.

## Tier 2 — Brand / Press Kit

**Status: NOT FOUND**

`/about` page contains company storytelling, mission ("Design the way you are"), milestones (founded Taipei 2011, expanded to JP/HK/Bangkok). No color codes, font specs, logo guidelines, or token files.

## Tier 3 — Engineering / Design Blog

**Status: REFERENCED for context, no DS-specific articles**

- `medium.com/pinkoi-engineering` — publication exists, but archive listing (verified via WebFetch) shows no design-system, design-tokens, Storybook, or component-library articles. Topics covered: Pinzap e-commerce, design patterns (software), Android, Jetpack Compose, Python CSV, Socket.IO, team efficiency.
- General references to internal DS work appeared in tech career talks, but no public token publication.

## Tier 4 — Live Site Recon

**Status: PRIMARY SOURCE for this reference (Tier 1-3 yielded nothing tokenizable)**

Pages inspected:
- `https://en.pinkoi.com` (English homepage)

CSS bundles fetched directly from CDN (`cdn02.pinkoi.com/media/dist/`):
- `core-53a12ed32ae4ca90fb40.css` (193 KB) — primary tokens, button system, components
- `utilities-393a3cafa4749e418720.css` (13 KB) — utility classes
- `react-common-modules-51d0e94fa5fc0b1616a1.css` (6 KB) — shared React components
- `postinit-04a59acb1b98b69099c4.css` (64 KB) — late-loaded styles

Extraction method: `curl` + `grep` for `font-family`, hex colors, `border-radius`, `box-shadow`, `font-size`, `font-weight`, `padding`, media queries, button class definitions.

### Extracted Artifacts (high confidence)
- **Color palette** — hex frequency analysis across 4 CSS bundles (top 30 captured), full neutral scale derived
- **Semantic button variants** — `.m-br-button--{primary,secondary,danger,purchase,green,login,*-plain}` confirmed with full state matrices (hover/active/visited)
- **Skeuomorphic button shadow recipe** — directly extracted from production CSS
- **Locale font stacks** — 5 distinct stacks confirmed (default, TC, SC, JP, TH)
- **Border-radius scale** — frequency: 4px (21x), 2px (18x), 50% (15x), 5px (11x), 3-10px (rare)
- **Font-weight distribution** — 700 (37x), 400 (16x), 500 (12x), 600 (2x) → bold-heavy verdict
- **Card grid system** — `.m-card-product` class confirms 6-column layout (`calc(16.66667% - 12px)`)
- **Breakpoints** — 767/768, 1037, 1200, 1248 (from media queries)

## Confidence

### High Confidence (extracted from production CSS, exact values)
- All hex colors in §2 Color Palette
- Button variants and state matrices in §4
- Skeuomorphic shadow recipes in §6
- Locale font stacks in §3
- Border-radius and font-weight scales
- Breakpoints in §8

### Medium Confidence (inferred from extracted patterns + general e-commerce conventions)
- Z-index hierarchy in §6 (logical inference, not directly extracted)
- "Coral reserved for purchase" rule in §7 (inferred from semantic variant naming `--purchase`, not stated by Pinkoi)
- Image hover/swap behavior in §8 (typical e-commerce pattern, not verified)
- Touch target sizing — extracted padding values, but no explicit accessibility guideline confirmed

### Low / Inferred (verify if used in production)
- "Bold-heavy is the brand's voice" framing in §1 — derived from CSS frequency, not from official brand voice docs
- Promotional red (`#e63349`) vs danger red (`#d72136`) distinction — both exist in CSS but the "sale tag" use case is inferred

## Notes
- Pinkoi's design system is **internal-only**, with no public documentation. This reference is reverse-engineered from the live English site as of 2026-04-17.
- Site serves locale-specific subdomains (`en.`, `jp.`, `tw.`, `hk.`, `th.`). CSS bundles are shared across locales — extracted tokens apply universally.
- No dark mode detected in core CSS bundles.
- Brand identity refresh dated 2019 (logo file `pinkoi_logo_2019.svg`) — current system reflects post-refresh design language.
- This reference may drift if Pinkoi ships a CSS rewrite. Recommend re-running `omd:add-reference https://en.pinkoi.com` annually.

## Playwright MCP Verification (2026-04-17, after Self-Review)

After fixing the 3 errors via Self-Review (using only static CSS extraction), Playwright MCP was installed and used to verify computed styles on the live site at 1440px viewport. **All major claims confirmed:**

- Body: `rgb(255,255,255)` bg, `rgb(57,57,62)` text (`#39393e`), Helvetica Neue stack ✓
- Headings: H1/H2/H3 all weight 700 ✓
- Heading colors: H1 `#39393e`, secondary H2 `#66666a`, accent H2 `#2cac97` ✓ — confirms semantic color usage
- `--purchase` button base bg: `rgb(241,108,93)` = `#f16c5d` ✓ (matches corrected value)
- `.m-card-product` confirmed exists; cards have transparent bg, no border, no radius, no shadow ✓
- Nav links: 13px weight 400 `#39393e` ✓
- Link color: `rgb(46,144,183)` = `#2e90b7` ✓

**Additional insight discovered via Playwright (added to §3):**
Pinkoi's heading hierarchy is **weight-driven, not size-driven**. Most headings render at 14–16px (same as body) and rely on weight 700 + color shifts for hierarchy. This is the opposite of SaaS convention (32–48px headlines). Reflects commerce-density priority.

Screenshot saved: `_research/browse-1440px.png` (full-page at 1440px on `/browse`).

## Self-Review Corrections (2026-04-17, post-initial-draft)

The first DESIGN.md draft contained 3 substantive errors caught during browser-verification self-review. All fixed in the current file:

1. **Button base/hover/active colors were swapped.** Initial draft listed hover values as the "primary" base color. Correct mapping (verified from full CSS rules):
   - `--primary` base `#10567b`, hover `#064162`, active `#003354`
   - `--purchase` base `#f16c5d`, hover `#e56051`, active `#da5648`
   - `--green` base `#2cac97`, hover `#289c8a`
   - `--danger` base `#e63349`, hover `#d72136`, active `#c41428`

2. **Skeuomorphic shadows misattributed to the primary button system.** They actually appear only on legacy `.m-button-{pink,gray,green,unfav}` classes (favorite hearts, follow-shop type CTAs). The modern `.m-br-button--*` system is **flat with `1px solid <same-as-bg>` borders** and no shadow. §1, §6, §7, §9 rewritten accordingly.

3. **`#e63349` was framed as "promotional sale red".** It is actually the **error/danger red** — used in form validation (label, textarea border, input icon, error note), required-field asterisk (`.s-required:after`), `--danger` button base, `.g-info.g-warn` text, and Weibo button bg. There is no separate "sale color" in the CSS — discount badges (`.card-discount-badge`) use shape (asymmetric `border-radius: 2px 0 2px 0`) and shadow, not a dedicated red.

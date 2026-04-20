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

## Philosophy Layer — added 2026-04-20

Style reference: `toss` (TW has no native COMPLETE peer; toss is the closest Asian density baseline per `omd:add-reference` Phase 10-2 matrix).

### Sources used for §10–§15

**Live-surface verification (Tier 1 — live pinkoi.com, 2026-04-20, WebFetch):**
- `https://en.pinkoi.com/about` — brand mission (`"Design the way you are."`, `"Pinkoi believes that design has a transformative power…"`), founding year (Taipei 2011), market expansion list (Shanghai, Hong Kong, Tokyo, Bangkok), logo rationale (circular arcs + acute angles → diversity / inclusion / respect for the unique), collaboration CTA (`"Let's work together."`, `"Pinkoi loves collaborating with people. We can't wait to turn your good ideas into great realities."`), metrics block (6.25M members, 50k+ shops, 77 countries, 95% cross-border, 4.3M app downloads, 4.9 rating).
- `https://en.pinkoi.com` — header positioning (`"Asia's cross-border design marketplace"`), nav labels (Featured, Accessories, Bags, Home & Living, Stationery, Clothing, Food & Drink, All Categories, Discover Design, Pinkoi Zine, Pinkoi Gift Cards, Wall, Window), CTAs (`"Sell on Pinkoi"`, `"Sign In / Register"`, `"Download the Pinkoi app"`, `"Search"`), newsletter footer (`"Stay up to date on the latest designs"`), copyright (`"© 2026 Pinkoi. All Rights Reserved."`), sections (FAQ/Help, Bulk Purchases, Announcements, Terms & Policies, Privacy Policy, Returns Policy, Rewards Program & P Coins, About Us, Press, Pinkoi ESG, Pinkoi Mascot, Careers, iichi.com).
- `https://en.pinkoi.com/about/team` — founder names + roles: Peter Yen (顏君庭) Co-Founder/CEO, Mike Lee (李讓) Co-Founder/CPTO, Maibelle Lin (林怡君) Co-Founder; community line (`"Be a Pinkoist"`); vision framing (`"a design ecosystem that enriches lives everywhere"`); Peter Yen quote (`"Perfection cannot be achieved, but dreams can be!"`).

**Cited (Tier 2/3 — founder interviews & press, not live product surface):**
- `https://www.taiwan-panorama.com/en/Articles/Details?Guid=3fb71a67-3e23-4723-8700-115a9afe9a71` — Peter Yen vision quote: *"What I want is for Pinkoi to help Taiwanese designers get international exposure, as well as for it to become Asia's number-one design platform."* Founded Sep 2010 per this source (the 2011 Taipei date used in §11 matches en.pinkoi.com/about self-reported year).
- `https://cherubic.com/blog/founder-interview-pinkoi/` — Peter Yen direct quotes used inline in §11: *"E-commerce companies that sell standard products are playing a game of capital, but that's not our game. Pinkoi sells non-standard products."* *"While the saying 'money talks' may be true in some places, at Pinkoi our decisions are primarily based on providing users with a good experience."* *"If we abandoned the review system, Pinkoi would lose its advantage."*
- `https://technode.com/2011/06/02/pinkoi-taiwans-etsy-sells-local-design-to-the-world/` — early positioning confirmation.
- `https://techcrunch.com/2015/09/30/pinkoi/` — 2015 English-site launch + $9M raise, used for market-growth context.
- Cross-referenced: LinkedIn (Peter Yen profile), Taiwan Startup Stadium mentor page — confirmed Yahoo Sunnyvale / Yahoo Answers engineering-lead background referenced in the §11 origin-story sentence.

**Carried from base DESIGN.md (re-used, not re-verified):**
- Token-level claims (#f16c5d coral exclusive to `--purchase`, flat matched-border button system, 5 locale font stacks, 4px workhorse radius, weight-700 bold-heavy structure, 6-column product grid, `transition: border .1s, color .1s, background .1s`). Extracted from `cdn02.pinkoi.com/media/dist/core-*.css` during 2026-04-17 base creation and re-verified via Playwright the same day.

### Confidence

- **High** (live verification 2026-04-20, direct quotation): mission line, co-founder names, Asian market list, partnership CTA, header positioning, "Be a Pinkoist" tagline.
- **Medium** (press / founder interviews cited): Peter Yen's "non-standard products" and "user experience over money talks" quotes, Yahoo Sunnyvale background, Asia-number-one platform ambition.
- **Low / Editorial** (interpretive readings, explicitly marked in DESIGN.md): "Coral is finite" as a principle framing, spring-forbidden motion stance (Pinkoi does not publicly declare a motion policy), persona behavior patterns (archetypes with explicit disclaimer in §13), illustrative voice samples (marked `<!-- illustrative: not verified as live Pinkoi copy -->`).

### Gaps / flagged for future verification

- Sign-in / signup / checkout form microcopy — the relevant pages require session state; live strings were not captured. Voice samples for empty-state wishlist and form-validation errors are marked illustrative.
- No explicit Pinkoi-published motion / animation guideline was found. Motion tokens in §15 align to the production `.m-br-button` `.1s` transition literal; the spring-forbidden rationale is editorial.
- "Design Makes Difference" slogan (referenced in the originating task note) was not located as an official Pinkoi tagline during 2026-04-20 search — the live brand line is `"Design the way you are."` which is used throughout §10–§11 instead.

## Philosophy Layer QA (2026-04-20) — Diagnostic Rubric

| # | Dimension | Score | Notes |
|---|---|---|---|
| D1 | §10 intro standalone, 3–5 lines, voice qualifiers | 🟢 | Standalone; no OMD-peer comparison. 5-line block with explicit voice adjectives (warm, specific, curatorial, bilingual, commerce-forward) + the "designer's voice" thesis. Category-convention reference only ("no em-dash-heavy marketing voice"). |
| D2 | §10 tone table 7–10 rows with brand-surface | 🟢 | 9 rows. Includes brand-specific surfaces (shop-authored listings, Pinkoi Zine editorial, seller recruitment) that no other OMD file has. |
| D3 | §10 forbidden phrases with brand-specific items | 🟢 | Generic bans (`World-class`, `amazing finds`, `Oops!`) + locale-specific TC bans (`獨家優惠`, `超值` discount-hype vocabulary) + commerce-specific rule (no approximate prices, no emoji on checkout). |
| D4 | §10 voice samples ≥3 with verification tier markers | 🟢 | 9 samples total. 6 verified with live URL + 2026-04 marker, 1 cited (Be a Pinkoist), 2 illustrative with explicit marker. Substantially exceeds ≥3 bar. |
| D5 | §11 narrative with inline citations + footer manifest | 🟢 | 4 inline markdown citations ([en.pinkoi.com/about] ×2, [en.pinkoi.com/about/team], [cherubic.com] ×2). Metric block carries `<!-- source: … not independently audited -->`. Full source manifest in footer HTML comment. |
| D6 | §12 principles with explicit UI implication | 🟢 | All 7 principles use explicit `*UI implication:*` label followed by concrete UI rule. |
| D7 | §12 count 5–10 (target 7–9) | 🟢 | 7 principles. In the target range. |
| D8 | §13 personas ≤3 sentences, behavior-first, disclaimer | 🟢 | 4 personas (Taipei designer, HK wishlist-buyer, Tokyo collector, Bangkok seller-buyer). All ≤3 sentences post-draft count. Behavior-first (open frequency, basket size, browse patterns); minimal background (no apartment descriptions). Disclaimer present. |
| D9 | §14 states 10–12, core types covered, no UI-pattern pollution | 🟢 | 12 rows. Covers Empty (3 variants), Loading (3), Error (3), Success (2), Disabled (1). Brand-authentic rows (add-to-cart inline loading on coral button; order-placed confirmation screen; wishlist empty). No UI-pattern pollution. |
| D10 | §15 spring stance explicit + rationale | 🟢 | "Spring / overshoot stance. Forbidden." Explicit stance + multi-sentence rationale ("commerce surface populated by handmade designer goods whose value proposition is craftsmanship and restraint; bouncy UI motion reads as a consumer-app tic that fights the product"). |
| D11 | §15 reduce-motion rule present | 🟢 | Present as signature-motion item 4: "Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. No exceptions." |

**Result**: 11 🟢 / 0 🟡 / 0 🔴. **PASS.**


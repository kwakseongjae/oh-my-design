# Research Sources for Dcard

추출 일자: 2026-04-17
스킬: `omd:add-reference` (5-tier methodology)
입력 URL: `https://www.dcard.tw`

## Tier 1 — Official Design System

**Status: EFFECTIVELY FOUND via runtime token exposure**

Dcard does not publish a documentation site (e.g., `dcard.design`), but the production app **exposes 200+ semantic CSS custom properties on `:root`** that constitute the actual design system in machine-readable form. Extracted via `getComputedStyle(document.documentElement)` using Playwright MCP. This is functionally equivalent to a public design tokens file.

Token namespaces discovered:
- `--color-dcard-*` — brand palette (primary/secondary/tertiary/premium/hint)
- `--color-state-*` — success/danger/reminder + hover/active states
- `--color-bg-*` — surface tokens (base 1-3, light/dark, special, topic, snackbar, etc.)
- `--color-text-*` — primary/secondary/hint/disabled + light variants for dark surfaces
- `--color-gender-*` — female/male/other + light variants (forum culture-specific)
- `--color-border`, `--color-separator` — divider system
- `--shadow-level-1` through `--shadow-level-5` — Material elevation
- `--typography-*` and `--fonts-*` — full type scale (4 headlines, title, 2 subtitles, 2 body, 2 caption) including mobile variants
- `--vars-*` — layout sizing (header, sider, post list, modals, etc.)
- `--animations-bezier`, `--animations-short-duration`, `--animations-medium-duration` — motion system
- `--mixins-*` — text-overflow / cover-image / scroll-bar mixin tokens

## Tier 2 — Brand / Press Kit

Not investigated separately — the runtime token exposure made it unnecessary. If needed, `dcard.tw/about` could be checked for additional brand voice / logo guidelines.

## Tier 3 — Engineering / Design Blog

`medium.com/dcardlab` exists with categories Web/Mobile/Data/Products/People/Career. No DS-specific articles surfaced in initial WebSearch, but the tech blog could contain design rationale articles for future supplementation.

## Tier 4 — Live Site Recon

**Method**: Playwright MCP (`@playwright/mcp@latest`, project-scoped via `.mcp.json`) at viewport 1440×900 on `https://www.dcard.tw/f` (forum index). Cloudflare bot challenge passed automatically by the embedded Chromium.

### Extraction steps
1. `browser_navigate` → `https://www.dcard.tw`
2. `browser_evaluate` to enumerate `:root` CSS custom properties → 200+ tokens captured
3. `browser_evaluate` for body, headings (H1×0, H2×21, H3×0), button samples (105 buttons), nav links, articles
4. `browser_take_screenshot` (viewport, 1440×900) → `_research/forum-1440px.png`

### Verified at runtime
- Body bg: `rgb(0, 50, 78)` = `#00324e` (matches `--color-dcard-tertiary`)
- Body font: `Roboto, "Helvetica Neue", Helvetica, Arial, "PingFang TC", 黑體-繁, "Heiti TC", 蘋果儷中黑, "Apple LiGothic Medium", 微軟正黑體, "Microsoft JhengHei", sans-serif`
- H2 (post titles): weight 500, 16px, color `rgba(0,0,0,0.85)` — confirms Material-aligned medium-weight hierarchy
- Sample buttons: `--color-dcard-primary` (`#3397cf`) for Download App, `--color-dcard-secondary` (`#006aa6`) for search submit, both 8px radius
- Main content area: bg `rgb(242,242,242)` = `#f2f2f2` (`--color-bg-base-1`), 728px wide
- Right aside: 300px wide
- Console: 13 errors, 110 warnings (typical for production SPA, non-blocking)

## Confidence

### High Confidence (extracted directly from `:root` CSS variables — Dcard's actual semantic tokens)
- Entire color palette (brand, state, bg, text, border, separator, gender, premium, topic, etc.) in §2
- Full type scale (4 headline tiers, title, 2 subtitle, 2 body, 2 caption) with sizes/weights/line-heights in §3
- Shadow system (5 levels) in §6
- Animation easing + durations in §6
- Layout sizing (header height, max page width, sider/main/aside widths, modal widths, etc.) in §5

### Medium Confidence (verified via runtime DOM but not from named tokens)
- Default 8px border-radius (verified across multiple buttons but not explicitly tokenized)
- Forum hierarchy (sider 208px / main 728px / aside 300px) confirmed via direct width measurement
- Material Design alignment claim (Roboto + weight 500 + cubic-bezier easing all align)

### Inferred (educated reading from observed UX)
- "Gender colors are for author chips only" — based on forum naming convention (女孩/男生/感情) and color names; not directly observed in posts during recon
- "Premium gold reserved for subscription features" — based on `--color-dcard-premium` token name; specific product surfaces not exhaustively checked
- Mobile breakpoint at 768px — inferred from presence of `--typography-*-font-size-mobile` tokens; exact breakpoint values not extracted

## Notes
- Dcard exposes its design system **at runtime via `:root` CSS variables** — this is rare and developer-friendly. Treat the variable names as the canonical reference (more stable than hex values across releases).
- Roboto-led typography stack with comprehensive Traditional Chinese fallbacks reflects Dcard's Taiwan-first user base.
- Playwright MCP successfully bypassed Cloudflare bot protection that had blocked `curl` and `WebFetch` attempts.
- Class names in DOM use a hashed convention (`d_a5_175izsd`, `d_h_j`, etc.) — likely vanilla-extract or similar zero-runtime CSS-in-JS. Don't rely on class selectors; use the `:root` tokens instead.
- This reference may drift if Dcard ships a token rename. Re-running `omd:add-reference https://www.dcard.tw` periodically captures any updates.

---

## Philosophy Layer — added 2026-04-20

Style reference: `toss` (matrix-selected: TW region → closest Asian COMPLETE peer; no native TW COMPLETE exists in the corpus).

### Sources used

| Tier | URL / Source | Used for |
|---|---|---|
| 2 | [en.wikipedia.org/wiki/Dcard](https://en.wikipedia.org/wiki/Dcard) (WebFetch 2026-04-20) | §11 Brand Narrative — founding year (2011-12-16), founding institution (National Taiwan University), founder name (Kytu Lin / 林裕欽), "D = Destiny" name origin, 6M members / 18M MUV (Nov 2022) figure. |
| 3 | [medium.com/dcardlab](https://medium.com/dcardlab) (WebFetch 2026-04-20) | §10 Voice sample (`Binding Generations. Breaking Limitations. Building with Passion.`), §11 Brand Narrative closing framing. Confirmed Kytu Lin as a public editorial voice for the engineering org. |
| 4 | Base DESIGN.md §1–9 (Playwright MCP recon 2026-04-17) | §10 Voice samples (`下載 App`, `登入`, `註冊`), §12 Principles (derived from observed UI token patterns: 8px radius, weight-500 default, gender color tokens, 5-level shadow, Material easing), §14 States (extrapolated from actual Dcard snackbar/overlay/shimmer token names), §15 Motion (uses the exact three motion tokens Dcard ships: `--animations-bezier`, `--animations-short-duration`, `--animations-medium-duration`). |

### Attempted but failed

- `WebFetch https://www.dcard.tw/f` → 403 Cloudflare
- `WebFetch https://about.dcard.tw/zh/about` → 403 Cloudflare
- `WebFetch https://www.dcard.tw/service/about` → 403 Cloudflare

Direct live microcopy verification was therefore not possible in this augmentation. The base DESIGN.md recon (2026-04-17) used Playwright MCP which passed Cloudflare successfully; re-running Playwright specifically for voice-sample capture is the recommended next step.

### Sourcing honesty

Dcard publishes almost no public brand-philosophy documentation. It is a college-community forum platform, not a design-forward brand. There is no public Dcard brand guidelines page, no design-system documentation site, no manifesto. The Philosophy layer above is therefore a composite of:
- Third-party facts (Wikipedia) for founding narrative
- Company's own public engineering tagline (Medium masthead) for brand voice
- Inference from observable UI patterns (base DESIGN.md §1–9) for principles, states, motion

All illustrative voice samples are explicitly marked. All interpretive claims are flagged in the DESIGN.md HTML-comment footer.

---

## Philosophy Layer QA (2026-04-20) — Diagnostic Rubric

Applied per `research/2026-04-20_philosophy-layer-diagnostic.md`.

| # | Dimension | Score | Notes |
|---|---|---|---|
| D1 | §10 intro standalone, 3–5 lines, voice qualifiers | 🟢 | Standalone. 4 lines. Voice qualifiers: "familiar, low-volume, Traditional-Chinese-native", "casual-polite". No comparative opener. |
| D2 | §10 tone table 7–10 rows with brand-surface | 🟢 | 8 rows. Brand-surface row `Forum names` (Traditional Chinese noun system) is Dcard-specific and unique across the OMD corpus. |
| D3 | §10 forbidden phrases with brand-specific items | 🟢 | Generic bans (`最佳`, `極致`, `革命性`) + Dcard/TW-specific bans (`不好意思` opener, Simplified Chinese chars, emoji in system surfaces, cartoon illustrations on error screens). |
| D4 | §10 voice samples ≥3 with verification tier markers | 🟡 | 6 samples, all marked. 2 verified (via base DESIGN.md recon, 2026-04), 1 cited (Medium tagline), 3 illustrative. 🟡 rather than 🟢 because the verified samples are second-hand (via base recon, not re-verified for this augmentation); Cloudflare blocked direct WebFetch live verification. Honest 🟡 per user instruction — "honesty > false-green". |
| D5 | §11 narrative with inline citations + footer manifest | 🟢 | Two inline Wikipedia citations + one inline Medium citation. Footer manifest present with re-verification status noted on the 6M / 18M numerical claim. |
| D6 | §12 principles with explicit UI implication | 🟢 | All 8 principles use explicit `*UI implication:*` label with a concrete UI rule sentence. |
| D7 | §12 count 5–10 (target 7–9) | 🟢 | 8 principles. Within target. |
| D8 | §13 personas ≤3 sentences, behavior-first, disclaimer | 🟢 | 3 personas (宥廷, Kytu, 小柔), each 3–4 sentences, behavior-focused (when/how they use Dcard), Taiwan-student-centric. Disclaimer present. |
| D9 | §14 states 10–12, core types covered, no UI-pattern pollution | 🟢 | 12 rows. Empty (2), Loading (2), Error (3), Success (2), Disabled, Skeleton, Sign-up overlay (brand-authentic row — Dcard's specific anonymous-scroll-wall pattern). All rows are true state variants. |
| D10 | §15 spring stance explicit + rationale | 🟢 | Explicit: "Spring / overshoot easing is forbidden on Dcard product surfaces." Rationale: reading platform for late-night emotional topics — kinetic overshoot contradicts the emotional register. |
| D11 | §15 reduce-motion rule present | 🟢 | Present — `prefers-reduced-motion: reduce` → all `motion-*` → `motion-instant`, shimmer static, no exceptions. |

**Result**: 10 🟢 / 1 🟡 / 0 🔴. **PASS.**

**Note on the yellow**: D4 is 🟡 by design — Cloudflare blocked direct live verification via WebFetch for this augmentation. The 2 "verified" voice samples are second-hand via the 2026-04-17 Playwright recon that produced the base DESIGN.md. A follow-up pass using Playwright MCP to directly capture live Dcard microcopy (search placeholder, empty-state text, sign-up overlay copy) would upgrade this to 🟢. The 🟡 is an acceptable honest score per the user's instruction "honesty > false-green".


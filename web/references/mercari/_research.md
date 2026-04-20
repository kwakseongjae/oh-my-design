# Research Sources for Mercari

추출 일자: 2026-04-17
스킬: `omd:add-reference` (5-tier methodology)
입력 URL: `https://jp.mercari.com`

## Tier 1 — Official Design System

**Status: EFFECTIVELY FOUND via runtime token exposure (681 CSS variables on `:root`)**

Mercari does not host a public documentation site comparable to Material Design, but the production app **exposes 681 semantic CSS custom properties on `:root`**, organized into a consistent `--alias-color-{property}-{role}-{state}` namespace. Extracted via `getComputedStyle(document.documentElement)` using Playwright MCP. This is functionally equivalent to a published design tokens file.

Token namespaces discovered:
- `--alias-color-background-{role}-{state}` — surface tokens (primary, secondary, tertiary, attention, attentionThin, accent, accentThin, success, disabled)
- `--alias-color-text-{role}-{state}` — foreground tokens (primary, secondary, accent, attention, success, disabled, placeholder, link, inverse, hint)
- `--alias-color-border-{role}-{state}` — divider system
- `--alias-color-icon-{role}-{state}` — icon foreground
- `--alias-color-overlay-{strength}` — modal backdrops (weak/middle/midStrong/strong + inverse variants)
- `--alias-color-system-static{Tone}-default` — fixed white/black/clear (theme-independent)
- `--mer-z-index-{layer}` — explicit z-index hierarchy (1100-1600)
- `--grid-layout-*` — page padding, gutter, inset
- `--component-*` — per-component overrides (button, radio, avatar, skeleton, etc.)
- `--typography-{role}-{property}` and `--fonts-{role}-{property}` — type scale (mostly hashed token names from Panda CSS, but semantic aliases also present)

Additional public sources:
- [Mercari Engineering blog — design system tag](https://engineering.mercari.com/en/blog/tag/design-system/) — multiple posts on DS architecture
- [GitHub: mercari/fractal](https://github.com/mercari/fractal) — open-source UI patterns library
- [Building Mercari's Design System (Medium)](https://medium.com/mercari-engineering/building-mercaris-design-system-b6789043053d)
- [The Story Behind Mercari Design System Rebuild (2025)](https://engineering.mercari.com/en/blog/entry/20250624-the-story-behind-mercari-design-system-rebuild/)

## Tier 2 — Brand / Press Kit

Not investigated separately; runtime tokens were sufficient.

## Tier 3 — Engineering / Design Blog

[engineering.mercari.com/en/blog/tag/design-system](https://engineering.mercari.com/en/blog/tag/design-system/) — extensive English-language coverage of Mercari Design System architecture and rebuild rationale. Pulled context but not specific token values.

## Tier 4 — Live Site Recon

**Method**: Playwright MCP at viewport 1440×900 on `https://jp.mercari.com/`.

### Verified at runtime
- Body bg: `rgb(255, 255, 255)` = `#ffffff` (matches `--alias-color-background-primary-default`)
- Body text: `rgb(51, 51, 51)` = `#333333` (matches `--alias-color-text-primary-default`)
- Body font: `Helvetica Neue, Arial, "Hiragino Kaku Gothic ProN Custom", "Hiragino Sans Custom", "Meiryo Custom", sans-serif`
- Body size: `15px`
- 681 `:root` CSS custom properties enumerated
- Sample buttons confirm:
  - Attention CTA: bg `#ff333f`, white text, `4px` radius, padding `11px 15px`, weight 700
  - Accent CTA (Shop Now): bg `#ffffff`, text `#0095ee`, `4px` radius, weight 700
  - Login/Signup: bg `#ffffff`, text `#333333`, `4px` radius, weight 400

Screenshot saved: `_research/home-1440px.png`

## Confidence

### High Confidence (extracted directly from `:root` CSS variables)
- All `--alias-color-*` values in §2
- Z-index hierarchy (`--mer-z-index-*`) in §6
- Grid layout values (`--grid-layout-*`) in §5
- Verified live: body bg/text/font, button variants

### Medium Confidence
- Hue family interpretations (e.g., "yellow is for ratings/reviews") — inferred from token names, not verified per-component
- Animation easing curves — extracted from CSS but specific component bindings not enumerated
- Spacing scale tokens — extracted as values but specific semantic uses inferred

### Inferred (verify before relying on)
- "Mercari Red is exclusively for attention/danger" — token naming supports this; product-level usage not exhaustively verified
- Mobile breakpoints — inferred from presence of `--typography-*-font-size-mobile` tokens; exact px values not extracted

## Notes
- Mercari's design system uses **Panda CSS** (the `--made-with-panda: "🐼"` token confirms it). Token names are hashed in production but semantic aliases (`--alias-color-*`) provide a stable layer.
- The "Custom" suffix on Hiragino/Meiryo fonts indicates Mercari deploys optically-tuned variants — same families, adjusted spacing.
- Mercari is a textbook example of mature semantic token architecture for a Japanese-market commerce platform; the system is internal but exposed on `:root` for direct consumption.
- This reference may drift if Mercari ships a token rename. Re-running `omd:add-reference https://jp.mercari.com` periodically captures updates.

---

## Philosophy Layer — added 2026-04-20 (AUGMENT mode)

Skill run: `omd:add-reference mercari` (AUGMENT, Phase 10)
Style reference: `line` (auto-picked — JP region matrix)

### Sources used for sections 10–15

| Source URL | Used for |
|---|---|
| [about.mercari.com/en/about/](https://about.mercari.com/en/about/) | §11 Brand Narrative (founding question, group mission, divisional missions for Mercari JP/US, Merpay, Mercoin) |
| [careers.mercari.com/mission-values/](https://careers.mercari.com/mission-values/) | §10 Voice (tone register), §12 Principles (Go Bold / All for One / Be a Pro / Move Fast + four foundational mindsets) |
| [engineering.mercari.com/en/blog/](https://engineering.mercari.com/en/blog/) | §10 Voice & Tone (engineering voice register — pragmatic, retrospective, documents failures) |

### Confidence (Philosophy layer only)

- **High (direct source citation)**: group mission verbatim, four values with taglines, founding question attribution, division-level missions
- **Medium (synthesis from verified sources)**: voice-register characterization ("pragmatic / transparent / functionally-warm"), the "Move Fast + Safe Rollout" pairing, tone-per-context table
- **Low (style-reference derived, not Mercari-specific)**: persona archetypes (Yuki / Takeshi / Sarah / Hiroko) are fictional, informed by publicly described user segments + mission positioning — flagged inline in §13

### Gaps flagged for future review

- Mercari does not publish a public brand/voice guidelines document (unlike, say, Mailchimp or GOV.UK). Voice characterization is a reasoned synthesis from mission pages + engineering blog register, not a direct brand-guideline citation. A later pass could strengthen §10 if Mercari ships a brand book.
- Motion easing values (`cubic-bezier(0.33, 1, 0.68, 1)` and `cubic-bezier(0.65, 0, 0.35, 1)`) in §15 are carried from §6 of the base DESIGN.md (runtime-verified on jp.mercari.com); the durations (150/250/400/300 ms) are conventional Mercari-family values but not all independently named as `motion-fast` / `motion-standard` / `motion-slow` in the public token surface.

### 2026-04-20 QA-tightening pass (applied retroactively)

After the first augmentation pass, a QA against `toss/DESIGN.md` as the craft bar surfaced three issues that were addressed:

1. **Voice samples — verification markers added.** Prior voice samples in §10 were written in Mercari's tone but not verified against live copy. Replaced with:
   - 3 verified strings — `出品` (jp.mercari.com bottom nav), `メルカリあんしん・あんぜん宣言！` (footer), and the EN product description from about.mercari.com — each tagged `<!-- verified: <url>, 2026-04 -->`.
   - 3 illustrative strings — empty / upload-error / sold — each tagged `<!-- illustrative: not verified as live Mercari copy -->` with production guidance to replace before shipping.
2. **§13 Personas — tightened.** All four archetypes rewritten to ≤ 3 sentences each, focusing on behaviour and usage pattern rather than background (neighborhood, university affiliation, assumed opinions were removed). Density now matches `toss/DESIGN.md` §13.
3. **§14 States — trimmed from 13 to 11 rows.** Dropped: *Empty (unsold listings for 30+ days)* — edge-case, not a true rendering state; *Rating request* — a UI pattern, not a state. Remaining 11 rows align with `toss` and carry a section-header disclaimer clarifying that the copy is illustrative.

These tuning rules were simultaneously codified into `.claude/skills/omd-add-reference/SKILL.md` Phase 10-4 so the next nine augmentation candidates (kakao, karrot, baemin, pinkoi, dcard, freee, tesla, spacex, nvidia) inherit the tightened craft bar by default.

## Philosophy Layer QA (2026-04-20) — Diagnostic Rubric

Rubric source: `research/2026-04-20_philosophy-layer-diagnostic.md` (11 dimensions, derived from toss/claude/line corpus + OmD v0.1 spec §3/§4 + Claude Design anti-slop rules).

| # | Dimension | Score | Notes |
|---|---|---|---|
| D1 | §10 intro standalone, 3–5 lines, voice qualifiers | 🟡 | Contains comparative opener *"Where LINE sells belonging and where Apple sells aspiration..."*. Per D1 craft bar, brand comparisons to specific OMD peers is mild craft drift — standalone preferred. Low-priority follow-up. |
| D2 | §10 tone table 7–10 rows with brand-surface | 🟢 | 8 rows. Brand-surface rows: Listings copy, Trust/safety copy, Engineering/culture content. |
| D3 | §10 forbidden phrases with brand-specific items | 🟢 | Generic ("revolutionary", "game-changer") + JP カタカナ (イノベーティブ, ディスラプティブ) + commerce-specific ("amazing deals", "must-have"). |
| D4 | §10 voice samples ≥3 with verification tier markers | 🟢 | 6 samples: 3 verified (`出品`, `メルカリあんしん・あんぜん宣言！`, EN product description) with URL+date markers; 3 illustrative with clear `<!-- illustrative: not verified -->` markers. |
| D5 | §11 narrative with inline citations + footer manifest | 🟢 | Inline `[about.mercari.com](https://about.mercari.com/en/about/)` on founding quote; inline `[careers.mercari.com/mission-values]` on values attribution; 50M+ downloads number marked `<!-- source: base DESIGN.md §1, not re-verified -->`. Footer HTML comment preserved as complete source manifest. |
| D6 | §12 principles with explicit UI implication | 🟢 | All 8 principles use explicit `*UI implication:*` label with concrete UI rule. |
| D7 | §12 count 5–10 (target 7–9) | 🟢 | 8. |
| D8 | §13 personas ≤3 sentences, behavior-first, disclaimer | 🟢 | 4 archetypes (Yuki / Takeshi / Sarah / Hiroko), all ≤3 sentences post-2026-04-20 tune, behavior-focused (declutters every 2–3 weeks, secondary retail channel, Y2K thrifting, handmade knit goods for supplemental income). Disclaimer present. |
| D9 | §14 states 10–12, core types covered, no UI-pattern pollution | 🟢 | 11 rows post-tune. Core types: Empty (×3: home / search / legal-rejected), Loading (×2: grid / price), Error (×3: upload / network / policy-rejected), Success (×2: listed / sold), Skeleton, Disabled. No UI-pattern pollution (rating request dropped, 30+ day unsold dropped). |
| D10 | §15 spring stance explicit + rationale | 🟢 | *"No ease-bounce, no ease-overshoot, no cubic-bezier with y-values > 1 or < 0 anywhere in the system. **Commerce has no spring.**"* — explicit forbidden stance with one-line rationale. |
| D11 | §15 reduce-motion rule present | 🟢 | *"Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Sheets and modals appear via opacity only. The app remains fully functional; motion is never load-bearing for comprehension."* |

**Result**: 10 🟢 / 1 🟡 / 0 🔴. **PASS** (threshold ≥9 🟢, no 🔴, ≤2 🟡).

**Open follow-up**: D1 intro rewrite (drop comparative opener). Low priority — does not block this augmentation shipping.

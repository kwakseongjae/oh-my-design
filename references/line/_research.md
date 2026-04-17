# Research Sources for LINE

추출 일자: 2026-04-17
스킬: `omd:add-reference` (5-tier methodology)
입력 URL: `https://line.me`

## Tier 1 — Official Design System

**Status: PARTIAL — meta-documentation site found, runtime tokens not exposed**

- [`designsystem.line.me`](https://designsystem.line.me) (200) — LINE Design System overview hub. Hosts principles, voice guidelines, and FAQ pages. Does NOT expose runtime CSS tokens on `:root` (verified `rootVarCount: 0`).
- [`design.line.me`](https://design.line.me) (200) — secondary docs landing.
- The actual design tokens for LINE products are not published as a public CSS variable layer.

## Tier 2 — Brand / Press Kit

Not investigated separately — moved to Tier 4 (live site recon) for token extraction.

## Tier 3 — Engineering / Design Blog

[engineering.linecorp.com](https://engineering.linecorp.com) hosts technical posts; not deeply mined for this initial extraction.

## Tier 4 — Live Site Recon (Primary source for tokens)

**Method**: Playwright MCP at viewport 1440×900 on `https://line.me/ko/`.

### Verified at runtime
- Brand green: `rgb(7, 181, 59)` = `#07b53b` (active "All Product" pill bg)
- Inactive pill text: `rgba(30, 30, 30, 0.7)` (`#1e1e1e` at 70% alpha)
- Pill `border-radius: 50px` (fully pill-shaped) — confirmed across all category controls
- Pill padding: `8px 15px`, `font-weight: 700`
- H2 hero "Life on LINE": `font-size: 70px`, `font-weight: 700`, `color: rgb(30, 30, 30)`
- H3 service names (LINE NEWS, LINE MUSIC): `font-size: 40px`, weight 700, same color
- H1: `20px` weight 700 (page-title role; smaller than H2 — editorial inversion)
- Body font: `SFPro, Arial, "Noto Sans JP", "Noto Sans KR", sans-serif`
- Body size: `20px` (editorial scale, not utility)
- Body color: `rgb(0, 0, 0)`
- Body bg: `rgba(0, 0, 0, 0)` (transparent — surface controlled by parent containers)
- Swiper carousel: `--swiper-theme-color: #007aff`, `--swiper-navigation-size: 44px`

Screenshot saved: `_research/home-1440px.png`

## Confidence

### High Confidence (verified live via Playwright)
- Brand green `#07b53b`
- Pill radius `50px`
- Weight 700 dominance
- Hero typography sizes (20 / 40 / 70px)
- Font stack with Noto Sans JP/KR fallbacks

### Medium Confidence
- "Hover/active" state values (estimated as darker brand green `#069030`, not confirmed via interaction testing)
- Modal/overlay shadow values (LINE marketing rarely surfaces modals; estimated)

### Inferred (verify before relying on)
- Per-service color accents (LINE NEWS, LINE MUSIC, LINE Pay) — only confirmed at the service-product level, not in marketing chrome
- Touch target sizing — assumed 44px minimum per Apple HIG

## Notes
- LINE Design System (`designsystem.line.me`) is **meta documentation** — principles, voice, FAQ — not a token registry. Compare with Dcard's runtime `:root` exposure or Mercari's `--alias-color-*` system, both of which are far more agent-friendly.
- The `rgba(30, 30, 30, X)` alpha pattern for state variation is a key LINE characteristic — same hue, varied opacity for hover/inactive/disabled.
- Body text at 20px is unusually large (vs. typical 14-16px web standard) — confirms LINE's editorial / lifestyle voice.
- Multi-language stack (SF Pro, Noto JP, Noto KR) reflects LINE's primary markets (Japan, Taiwan, Thailand, Indonesia, Korea-adjacent).
- This reference may drift if LINE ships a redesign. Re-running `omd:add-reference https://line.me` annually captures updates.

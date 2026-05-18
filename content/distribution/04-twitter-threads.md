# Twitter / X threads (per article)

Pattern: 5-tweet hook, image card per article, CTA tweet last.

---

## Thread A — Toss launch (Day 1 of series)

**Tweet 1 (the hook)**:
```
Korean fintech app Toss has 30M+ users.

Their design system is 90% one blue, one near-black, one warm white, one custom typeface.

The rest exists to keep those four things from getting in each other's way.

I extracted the full token tree. Here's what I found. 🧵
```
[Attach screenshot: Toss UI with token annotations]

**Tweet 2 — OKLCH**:
```
1/ Toss rebuilt their color system in OKLCH (perceptually uniform).

Their blue-500, red-500, green-500 all appear *equally bright* to the eye.

No manual tuning per hue. Designers pick OKLCH coords; 10 scale steps auto-generate.

This is the right way to ship multi-hue tokens in 2026.
```

**Tweet 3 — Tabular numerals**:
```
2/ Their custom typeface (Toss Product Sans) ships TABULAR NUMERALS by default.

Financial tables align perfectly without manual letter-spacing.

Pretendard finally added this in 2024. Toss had it from day one.
```

**Tweet 4 — Token architecture**:
```
3/ Three-tier token system:

primitive → semantic → component
blue500 → color-action-primary → button-primary-bg

Change `color-action-primary` from blue to purple → entire system updates. Zero component-code touched.

This survived 2 visual redesigns.
```

**Tweet 5 — Shadows**:
```
4/ Total drop shadows in the Toss product UI: 2 tokens.

Both barely visible (1px offset, 4% alpha).

The stated reason: "Trust comes from clarity, not depth."

A bank's job isn't to look impressive — it's to look correct.
```

**Tweet 6 — Accessibility**:
```
5/ Body font is 15px (not 14 or 16) — needed for Korean hangul stroke contrast.

Accessibility token supports 310% browser zoom without horizontal scroll.

That's WCAG 1.4.10 AAA. Most fintech apps fail at 200%.

Accessibility is a translation problem, not just a vision-impairment one.
```

**Tweet 7 — CTA**:
```
The full 4,200-line DESIGN.md spec for Toss (and 106 other brands) is free at oh-my-design.kr

Or pipe it into your AI agent with one JSON config:

  npx -y oh-my-design-mcp

Prompt: "build a transaction list in the style of Toss" → agent gets the philosophy, not just hex codes.

Link in bio.
```

---

## Thread B — Channel Talk × Bezier

Same structure. Hook: "For a decade, Korean SaaS design systems were closed. Then Channel Talk MIT-licensed Bezier."

Key tweets:
- Bezier's 4-package architecture (tokens/react/icons/codemod)
- The marketing-vs-product type cliff (36px product ceiling, 64px marketing hero)
- Alpha ladder per brand color (3 weights × 4 alphas = 12 token points)
- Open-source IS the design move

---

## Thread C — Karrot

Hook: "Karrot has 30M users in a country of 51M. Their UI is so calm it almost disappears. That's the strategy."

Key tweets:
- One color, one job (orange = CTA + active state)
- Platform fonts (Pretendard + Apple SD Gothic Neo) — no custom typeface
- 4px grid militantly enforced
- Three shadow levels tuned separately for light/dark mode
- `clamp()`-based accessibility scaling (bounded zoom)

---

## Thread D — Banksalad

Hook: "Korean fintech consensus is 16px friendly corners. Banksalad's CSS has 81 instances of `border-radius: 2px` and 5 of 8px. That's the brand."

Key tweets:
- 2px radius is the brand thesis
- Interactions brighten (not darken)
- Pretendard 700 as default heading weight
- Mint focus tint on inputs only
- Categorical chart palette (not sequential)

---

## Image card spec (per thread)

Aspect ratio 16:9 (2400×1350 for retina)

Format:
```
┌──────────────────────────────────────┐
│   [Brand logo]    [Brand name large] │
│                                       │
│   [3-4 token chips with hex]          │
│                                       │
│   [Quote: the single thesis]          │
│                                       │
│   oh-my-design.kr — series 1/4        │
└──────────────────────────────────────┘
```

Generate from `_promo.json` highlight field per brand (already exists in DESIGN.md frontmatter).

---

## Scheduling

| Article | Day | Time (KST) | Time (PT) |
|---|---|---|---|
| Toss | Tue Week 1 | 21:00 | 04:00 |
| Channel Talk | Tue Week 3 | 21:00 | 04:00 |
| Karrot | Tue Week 5 | 21:00 | 04:00 |
| Banksalad | Tue Week 7 | 21:00 | 04:00 |

21:00 KST = morning rush hour for US engineers (peak Twitter for tech). Tuesday = mid-week algorithm boost.

---

## Engagement responses (prepared)

| Likely reply | Response |
|---|---|
| "What about [Brand X]?" | "On the list for batch 2 — what's the design move you want decoded?" |
| "Why not Pretendard for everything?" | Acknowledge trade-off: "Pretendard for KR-only products. Inter+Noto for multi-locale. Different distribution constraints." |
| "How did you extract this?" | "browser-harness CDP fast-path (~3-5× faster than playwright MCP). All 107 brands captured live. Open source: [link]" |
| "Is this AI generated?" | "Tokens are extracted from live CSS. Voice/philosophy analysis is mine, grounded in observable patterns. AI-assisted, not AI-authored." |

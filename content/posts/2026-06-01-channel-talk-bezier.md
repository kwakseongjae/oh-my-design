---
slug: channel-talk-bezier
title: "Bezier: The First Open-Source Korean SaaS Design System"
subtitle: "Decoding Channel Talk — and why the Korean SaaS playbook just changed."
date: 2026-06-01
brand: channeltalk
country: KR
canonical_url: https://oh-my-design.kr/design-systems/channeltalk
mcp_install: oh-my-design-mcp
reading_time: 10
---

For a decade, Korean SaaS has been opinionated, well-designed, and **closed**. Toss won't open-source TDS. KakaoPay's KPDS lives behind a corporate VPN. Karrot's Seed Design opened in 2022 but stays inside the marketplace pattern. There has been no canonical, MIT-licensed Korean SaaS design system.

That changed when Channel Talk published **[Bezier](https://github.com/channel-io/bezier-react)**.

This is the second post in our series decoding Korean design systems. We dug into Bezier (the design system) and channel.io (the marketing surface) to map the relationship between how Channel Talk *documents* its design and how it *ships* it. The gap is instructive.

> **TL;DR** — Bezier proves Korean SaaS can publish in the same idiom as Carbon, Polaris, and Atlassian. The marketing site uses Bezier tokens but breaks Bezier's type ceiling in service of a manifesto register the product never deploys. Both surfaces are correct.

---

## 1. The atmosphere — confident B2B with an AI thesis bolted on

Channel Talk is a customer-service messenger that pivoted hard into AI agents in 2024-25. The homepage shows the pivot in design — most sections sit on the standard near-white SaaS canvas (`#FFFFFF` body with `#FCFCFC` / `#F7F7F8` Bezier `grey` tints), then the AI manifesto sections drop into a **dark plum-purple canvas** (`rgba(25,3,49,0.898)`). The color shift is the visual quarantine: "the helpdesk product is one thing; the AI thesis is another, and we're not pretending they're the same."

The brand accent is **Cobalt 400 `#329BE7`** — a clean SaaS blue, brighter and cooler than Toss Blue, deliberately not in the Korean-fintech family. It's a global SaaS blue. The body text is translucent off-black `rgba(0,0,0,0.85)` (not `#000`) — a small warmth that softens the engineering palette.

What makes Channel Talk visually distinctive among Korean SaaS is the **radius ladder discipline**. Bezier exposes 11 radius tokens (2px → 44px → 42%) and the marketing site uses each tier intentionally — chips at 8px, CTAs at 18px, product cards at 20px, the bottom CTA band at 32px. Most Korean SaaS apps land on one or two radii and stop thinking about it. Bezier treats radius as a vocabulary.

## 2. The five captured insights

### Insight 1 — Marketing-vs-product type cliff (documented, intentional)
Bezier's product type scale tops out at **36px / 44px line-height**. That's the *system maximum*. The marketing surface deliberately breaks it for editorial moments — a 64px / 88px-lh / -1.5px-tracking `h1` and a 54px / 72px-lh `h2` give the homepage a sectional, almost manifesto rhythm.

This cliff is documented inside Bezier itself. It tells consuming teams: "our product chrome has a ceiling, but the marketing site is a different idiom and we don't want our product-chrome restraint to leak there."

For derivative designers: if you have a SaaS product and a marketing site, **stop trying to use the same type scale on both**. The marketing site is where you compete for attention; the product is where you respect it. Two scales, documented as two scales.

### Insight 2 — The alpha ladder is part of the brand
Cobalt 400 doesn't just exist as `#329BE7`. It exists as `#329BE7` solid, `#329BE73D` (40% alpha), `#329BE71A` (10% alpha), and a few intermediate steps — exposed as `cobalt.400-40`, `cobalt.400-10` in the token JSON. These power **ghost states**: hover, focus, selection background, ghost button bg.

This is the hallmark of a mature semantic-token system. Junior teams hard-code hover states; senior teams build alpha ladders into the token tree and let component code reference them by name. Bezier's exposes 3 weights × 4 alpha steps per hue. Twelve points per hue family.

### Insight 3 — Inter + Noto Sans KR/JP — the global-first KR-second stack
Bezier's primary font is **Inter** (not Pretendard). Korean fallback is **Noto Sans KR**, Japanese is **Noto Sans JP**. This is a deliberately *global-first* choice — Channel Talk sells in EN/KR/JP markets and Inter is the lingua franca of SaaS chrome.

The trade-off: Inter doesn't optically balance with Korean hangul the way Pretendard does. The Bezier team accepted that trade-off in exchange for product-screen consistency across 3 locales. If you only ship in Korean, Pretendard is the right choice. If you ship globally with Korean as one of N languages, Inter + Noto is the realistic answer.

### Insight 4 — Easing tokens, not just durations
Bezier exposes 3 duration tokens (150 / 300 / 450ms) AND 1 default easing: `cubic-bezier(0.3, 0, 0, 1)`. That curve is gently exponential — slow start, faster middle, soft end. It's not the Material curve, not the iOS curve, not Apple's `ease-in-out`. It's deliberately tuned to feel **conversational** — appropriate for a messenger product.

Most design systems document durations and skip easing. Bezier elevates the curve to a token. If you build a chat or messaging product, copy this — easing carries 60% of the "feel" of an interaction.

### Insight 5 — Open-source IS the design move
The repository structure itself is the system's most interesting decision:

```
@channel.io/bezier-react        # React components
@channel.io/bezier-tokens       # The token JSON (color, radius, motion, etc.)
@channel.io/bezier-icons        # 600+ SVG icons
@channel.io/bezier-codemod      # Migration scripts (system version bumps)
```

This is the Atlassian / Polaris pattern, ported. Tokens are the *first* package — components consume them. Icons are their own package with their own versioning. Codemods ship for major version migrations. The architecture is a $1M+ engineering investment, given away under MIT.

What it earns Channel Talk: **distribution among smaller Korean SaaS teams** that don't have design system resources. Every team that adopts Bezier becomes a downstream dependency — a soft mind-share lock-in that no closed system can replicate.

---

## 3. What to steal

1. **Document a marketing/product type cliff explicitly.** If you have both surfaces, name the breakpoint in your design system docs. Don't let either side drift.
2. **Build an alpha ladder per brand color.** 3 weights × 4 alphas = 12 token points per hue. Hover, focus, selection, disabled — all derive.
3. **Pick your type stack by market, not by aesthetic preference.** Inter+Noto vs Pretendard isn't a taste call — it's a distribution call.
4. **Elevate easing curves to tokens.** If you only document durations, you're handing the "feel" of your product to whoever last touched the CSS.
5. **If you have the engineering budget, open-source the tokens at minimum.** You don't have to open the components. Tokens-only is a small package and a big distribution lever.

## 4. What NOT to steal

1. **Don't open-source the system if you can't commit to maintenance.** Bezier ships migration codemods. Half-maintained open-source design systems hurt the brand more than no system at all.
2. **Don't import the dark-plum AI canvas.** It works for Channel Talk because they earned the manifesto register through actual product depth. As a startup, it reads as posturing.
3. **Don't copy Cobalt 400 verbatim.** It's not as recognizable as Toss Blue but it's becoming so. Pick a different SaaS blue — try `#3B82F6` Tailwind or `#5046E5` Indigo.
4. **Don't replicate 11 radius tokens unless you're going to use them.** A radius vocabulary is only valuable if every tier has a job. If you only ship 3-4 component types, you need 3-4 radii.

## 5. Try it yourself

The full Channel Talk `DESIGN.md` (capturing both Bezier source-of-truth tokens AND marketing-surface deviations) is available three ways:

- **Browse**: [oh-my-design.kr/design-systems/channeltalk](https://oh-my-design.kr/design-systems/channeltalk)
- **Bezier directly**: [github.com/channel-io/bezier-react](https://github.com/channel-io/bezier-react)
- **MCP server** (for your AI agent):

```json
{
  "mcpServers": {
    "oh-my-design": {
      "command": "npx",
      "args": ["-y", "oh-my-design-mcp"]
    }
  }
}
```

Then prompt your agent:

> "Build a customer-support chat widget in the style of Channel Talk."

> "What's Bezier's radius scale and when is each tier used?"

> "Use `@design:channeltalk` to refactor this messaging product's CTAs."

---

### 한국어 요약

채널톡이 발행한 **Bezier**는 한국 SaaS 디자인 시스템의 첫 MIT 오픈소스 사례다. 핵심 4가지:

1. **마케팅/프로덕트 type cliff 문서화** — 제품은 36px max, 랜딩은 64px hero. 둘은 다른 idiom.
2. **Alpha ladder가 시스템의 핵심** — Cobalt 400 솔리드 + 40/30/20/10% 알파 = 12개 토큰.
3. **Inter + Noto Sans KR/JP** — global-first 스택. 한국어 단일이면 Pretendard, 다국어면 이 조합.
4. **오픈소스 자체가 디자인 결정** — tokens / components / icons / codemod 4개 패키지. Atlassian 패턴의 한국판.

번역 전체 분석은 영문 본문. AI 에이전트에 통합하려면 위의 MCP 한 줄.

---

**Next in the series**: [Karrot — why it feels neighborly, not feature-rich](./karrot.md)

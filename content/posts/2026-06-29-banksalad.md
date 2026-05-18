---
slug: banksalad-chart-first
title: "Banksalad's 2px Radius Rebellion"
subtitle: "Decoding Banksalad (뱅크샐러드) — the design system of an information-first fintech."
date: 2026-06-29
brand: banksalad
country: KR
canonical_url: https://oh-my-design.kr/design-systems/banksalad
mcp_install: oh-my-design-mcp
reading_time: 9
---

Korean fintech, post-Toss, defaulted to **consumer-friendly plump**: 12-16px radii, generous whitespace, mascot-friendly illustrations, big saturated CTA blocks. Banksalad (뱅크샐러드) explicitly rejected this. The CSS bundle has **81 occurrences of `border-radius: 2px`**, only 5 of `8px`, and 3 of `4px`.

That's not an accident. It's a brand thesis: **this is data, not a toy.**

This is the final post in the first batch of our series. Banksalad is interesting because the design language **opposes** the dominant Korean fintech idiom, and the opposition is the brand.

> **TL;DR** — Where Toss is "fintech feels friendly," Banksalad is "fintech is information, displayed clearly, with respect for your attention." 2px corners. Mint-green that brightens on hover. Pretendard 700 by default. Charts before chrome.

---

## 1. The atmosphere — financial advisor, not financial buddy

The home page opens on a white canvas (`#ffffff` / `#fbfbfb`) with **warm near-black** text — `#2b2b2b` for headings, `#434444` for body. Never pure `#000`. The signature interactive color is a **salad-leaf green** `#04c584` — the name "Bank + Salad" is literal: financial data tossed and served fresh.

Where Spotify's `#1db954` is a music brand, Banksalad's `#04c584` is **mint** — cleaner, slightly bluer, signaling clarity over excitement. It does all the interactive work; you don't see it on backgrounds or large surfaces.

The radius scale is the strongest visual fingerprint. **2px dominates** — 81 of 89 measured radius declarations. The remaining 8 are 4px (specific small chips) and 8px (modal corners only). This is **almost-flat** — just enough to soften the corner without softening the *category*. Banksalad reads as a data tool, not a consumer app.

## 2. The five captured insights

### Insight 1 — 2px radius is the brand
This needs to be its own insight because it's that rare. The CSS bundle has:
- `border-radius: 2px` — **81 occurrences**
- `border-radius: 4px` — 3
- `border-radius: 8px` — 5
- larger — 0

There are no pills, no capsules, no 16px friendly cards. The system is committed to 2px and that commitment shows in every interaction. It tells the user, at the chrome level: "this is for adults who want information."

The trade-off is conscious. Banksalad sacrifices "warm/approachable" affordances in exchange for **information density and credibility**. Their target user is someone willing to read a chart, not someone needing a chatbot.

### Insight 2 — Interactions brighten, not darken
The hover/focus state of the brand green is `#10df99` — **one shade brighter** than the default `#04c584`. Most design systems darken on interaction (Toss `blue500 → blue600`); Banksalad lightens.

This is a subtle but deep statement. Darkening implies "you pressed something solid"; lightening implies "you got the system's attention." In a data product where most interactions are filter changes or chart hovers, the brighter state reads as **the data answered you** rather than "the button responded."

### Insight 3 — Pretendard 700 as default heading weight
Banksalad uses Pretendard across the board, but the default heading weight is **700** (Bold), not 600 (Semibold) or 500 (Medium). The bundle shows 160 weight declarations at 700 vs 70 at 500. Numbers and headings are confident and chunky.

This works because Banksalad's primary content **is** numbers. Account balances, change percentages, monthly aggregates. 700-weight Pretendard digits don't apologize for taking up space — they *should* take up space. They're the news.

Light weights (300) appear ~26 times, only for the largest hero numerals where the size carries the authority on its own.

### Insight 4 — Mint focus tint on inputs (and only there)
Form inputs use `#f3fdfa` as their focus-state background — a barely-perceptible mint tint. This is the **only branded background tint** in the entire system. Cards stay white. Sections stay white. But the focused input briefly inherits a hint of brand.

The pattern: "the brand color only saturates where the user is taking action." Backgrounds carry brand whisper-quiet, foregrounds (text, icons) stay neutral, and the active CTA + active input are the brand-loud moments.

### Insight 5 — Teal-gray chart palette, advisor-grade
Charts use a separate palette from product chrome:
- `#34464b` (deep blue-gray)
- `#5c818a` (mid blue-gray)
- `#1c6c73` (saturated teal)
- `#a7c7cf` (pale blue-gray)
- `#04c584` (brand mint — used only for "your" series)

This is a **categorical** palette, not a sequential one. Each color encodes a distinct meaning. Critically: the brand color appears in charts only when representing **the user's own data** — your spending, your net worth, your portfolio. The grays carry context (market average, peer comparison).

Compare to consumer fintech which often uses brand color across the full chart and adds visual noise. Banksalad's chart palette reads as advisor-grade: cool, neutral, you-vs-context.

---

## 3. What to steal

1. **Pick a radius that signals your category.** 16px = consumer-app. 8px = SaaS-default. 4px = enterprise. 2px = data-tool. Don't drift across these.
2. **Consider brightening-on-interaction for data products.** Darkening = "you pressed it." Brightening = "the data lit up." Choose deliberately.
3. **Default heading weight should match content density.** 700 if numbers/data are primary; 500-600 if narrative content is primary.
4. **Branded background tints are a scarcity good.** Use them at *exactly one* moment — focused input is a good candidate.
5. **Build chart palettes separate from product chrome.** Charts have different ergonomics (categorical vs sequential, accessibility for colorblind, dense vs sparse).

## 4. What NOT to steal

1. **Don't copy the 2px radius if your content isn't dense.** 2px on a low-density consumer page reads as "harsh," not "data-serious." The radius matches the density.
2. **Don't import Banksalad's near-black text colors without testing contrast.** `#434444` on `#fbfbfb` is ~9.3:1 — fine for body. But many derivative implementations creep this lighter and break AA.
3. **Don't pair BM JUA with your serious content.** Banksalad uses it sparingly — only landing/promotional moments. Importing JUA into a dashboard reads as costume.

## 5. Try it yourself

- **Browse**: [oh-my-design.kr/design-systems/banksalad](https://oh-my-design.kr/design-systems/banksalad)
- **MCP server**:

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

Prompts that now work:

> "Build a personal finance dashboard with charts in the style of Banksalad."

> "Use `@design:banksalad` to refactor this insights view — I want data-tool, not consumer-app."

---

### 한국어 요약

뱅크샐러드는 한국 핀테크의 "친근한 12-16px" 컨센서스를 거부한다. CSS 번들에 `border-radius: 2px`가 81번, 8px는 5번. 이게 브랜드 thesis.

1. **2px 라디우스 일관성** — "데이터를 위한 도구"라는 카테고리 선언.
2. **상호작용은 어둡지 않고 밝아진다** — `#04c584 → #10df99`. "데이터가 응답했다"는 신호.
3. **Pretendard 700이 기본 헤딩 weight** — 숫자가 콘텐츠라 굵어도 됨.
4. **민트 포커스 틴트는 입력 폼에만** — 시스템 내 유일한 브랜드 배경 색.
5. **차트 팔레트는 따로** — 회색-블루 카테고리컬, 브랜드 민트는 "당신의 데이터"에만.

---

**Series wrap-up** — These 4 articles cover Korea's most-installed fintech (Toss), the first open-source KR SaaS DS (Bezier), the dominant neighborhood marketplace (Karrot), and the contrarian data-first fintech (Banksalad). All 107 brand DESIGN.md files are available via `oh-my-design-mcp` — drop the JSON snippet into your AI agent and any of these design languages becomes promptable context.

**Next batch** (Q3): KakaoBank · Coupang · Musinsa · 29CM.

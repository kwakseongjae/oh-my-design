# KakaoPay — Research Notes

**Date:** 2026-05-13
**Brand id:** `kakaopay`
**Korean:** 카카오페이
**Operator:** Kakao Pay Corp. (subsidiary of Kakao Corp.)

---

## Tier 1 — Live & official sources

### Live DOM inspection (playwright + `getComputedStyle`)
- **Surface 1:** `https://www.kakaopay.com/` (marketing home, 2026-05-13)
  - Body font: `"Noto Sans KR", system-ui, AppleSDGothicNeo, sans-serif`
  - Body color: `rgb(6, 11, 17)` (deep near-black with blue undertone)
  - Footer bg: `rgb(248, 249, 250)` (≈ `#F8F9FA`)
  - Header (`Header-module-scss-module__MRWiVW__wrap`): dark, 84px tall, white nav text
  - Nav megamenu H2: 22px / weight 500 / line-height 31.9px / letter-spacing `-0.2px` / color `#F8F9FA`
  - Nav megamenu H3: 14px / weight 500 / line-height 16.94px / 8px h-padding
  - Nav links: 14px / weight 300 (inactive) — 500 (active/group label) / color `rgb(6, 11, 17)` for sub-menu, white for top-level
  - Footer container padding: `24px 20px 104px`

### Official KakaoPay design blog (Tier 1, narrative)
- `https://story.kakaopay.com/225-kakaopay-design/` — "모두를 위한 디자인, 차별 없는 디자인" (Design for everyone, design without discrimination). Verified via WebFetch 2026-05-13.
  - Three stated brand pillars:
    1. 단순하고 명확한 디자인 (simple, clear design)
    2. 따뜻하고 부드러운 컬러 (warm, soft color)
    3. 둥글고 부드러운 라인 (rounded, soft linework)
  - **Accessibility commitment:** minimum 3:1 contrast between graphics and background — drove a palette overhaul because legacy bright yellows failed the benchmark.
  - **Visual evolution:** black-line icons → solid-fill graphics with Icon → 2D → 3D three-tier hierarchy.
  - Stated goal: 누구에게나 이로운 서비스 (services beneficial for everyone), 정보를 구분 지어 전달 (deliver differentiated information).
  - Operational consolidation: 1,000+ graphics into unified resource center.

### Kakao Corp service page
- `https://www.kakaocorp.com/page/service/service/KakaoPay?lang=en` — verified via WebFetch 2026-05-13.
  - Service tagline: *"Effortless finance, Kakao Pay"* / *"No-fuss finance that creates a beneficial flow in life"*
  - Service categories (4 pillars): 생활하다 (Life) · 관리하다 (Manage) · 금융하다 (Finance) · 소식 (News)
  - Sub-services confirmed on nav: 송금·결제·멤버십·자산관리·청구서·투자·대출·보험·추천상품

### Brand color sources
- `#FFEB00` — KakaoPay signature yellow per brand-color research aggregator (web search 2026-05-13). Distinct from corporate Kakao Yellow `#FEE500`.
- Secondary palette referenced in same source: Wild Willow `#C5C17A`, Ivory `#FEFFFA`, Olive `#7F7600`.
- Live page does NOT prominently surface `#FFEB00` — consistent with the blog post's explicit move *away* from saturated yellow toward more accessible warm/soft variants on functional surfaces. Yellow is retained as a brand-anchor / Kakao-ecosystem signal rather than primary CTA color.

### KakaoPay design Instagram
- `https://www.instagram.com/kakaopay.design/` — official internal design team account (linked from search results). Not WebFetched (Instagram requires auth).

### KPDS (KakaoPay Design System)
- No public `kakaopay.design` or `design.kakaopay.com` site discovered. WebSearch for "KPDS" and "if(kakao) kakaopay design system" did not surface public token docs or slide decks. Design knowledge is published as **narrative posts on `story.kakaopay.com`**, not as a public token registry.

### Tech blog (adjacent context)
- `https://tech.kakaopay.com/` — engineering posts including frontend shared-component governance. Not used for §4 tokens.

---

## Tier 2 — Cross-check (both attempted)

### `getdesign.md/kakaopay`
- Verified via WebFetch 2026-05-13: explicit response *"No designs found for 'kakaopay'"*.
- **Status: empty.**

### `styles.refero.design/?q=kakaopay`
- Verified via playwright 2026-05-13. Result grid showed unrelated brands (Klarna, Gocardless, Nubank, Kraken, Kalstore, Ko-fi, etc.) — no KakaoPay card.
- Also tried `?q=카카오페이` (URL-encoded Korean): no cards rendered.
- **Status: empty.**

**Tier 2 unavailable for KakaoPay.** Tier 1 (live DOM + official `story.kakaopay.com` design blog + kakaocorp service page + brand-color aggregator) treated as authoritative per pipeline.

---

## Tier 3 — Reconciliation notes

- No conflict between observed live styles and stated philosophy. Live page uses Noto Sans KR (Korean-first), warm-neutral background, dark text, accessibility-grade contrast — fully consistent with the three pillars (simple+clear / warm+soft / rounded+soft).
- Yellow brand color (`#FFEB00`) is correctly under-deployed on functional UI — matches the blog's stated accessibility-driven retreat from saturated yellow.
- Service IA (4 pillars: 생활/관리/금융/소식) verified across both Kakao Corp service page and live nav megamenu.

---

## Philosophy citations (§10-15)

- `story.kakaopay.com/225-kakaopay-design/` — three design pillars, 3:1 contrast, accessibility-first stance, Icon→2D→3D hierarchy.
- `kakaocorp.com/page/service/service/KakaoPay` — service positioning and taglines.
- Live tagline ("마음 놓고 금융하다") confirmed from `<title>` of `kakaopay.com/`.
- Nav IA (생활하다 / 관리하다 / 금융하다 / 소식 / ESG) confirmed from live DOM.

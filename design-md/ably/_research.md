# Ably (에이블리) — Research Notes

**ID:** `ably`
**Brand:** 에이블리 (Ably Corp / 에이블리코퍼레이션)
**Mode:** CREATE
**Date:** 2026-05-13
**Verifier:** omd-add-reference (Claude / Opus 4.7)

---

## Brand Disambiguation (CRITICAL)

There are two unrelated companies named "Ably":

| Aspect | **This reference** | NOT this |
|---|---|---|
| Legal name | Ably Corporation (에이블리코퍼레이션) | Ably Realtime Ltd |
| Domain | `a-bly.com` (redirects → `m.a-bly.com`) | `ably.com` |
| Country | South Korea | United Kingdom |
| Founded | 2018 | 2016 |
| Founder | 강석훈 (Kang Suk-hoon) | Matthew O'Riordan, Paddy Byers |
| Business | MZ-generation fashion / style commerce app | Realtime messaging / pub-sub API |
| Brand color | Pink-coral (~`#FA2E5F`) | Vivid orange / red |

Any token, copy sample, or philosophical claim sourced from `ably.com`, `ably-team.medium.com`'s realtime publication, or `medium.com/ably-realtime` **must be rejected** for this reference. The two share a name only.

---

## Tier 1 — Live Inspection

| Source | URL | Status | Date |
|---|---|---|---|
| Main mobile commerce site | `https://m.a-bly.com/` | ✅ Live, navigated via playwright; title `에이블리 | 전상품 무료배송` confirmed; redirect `www.a-bly.com → m.a-bly.com` confirmed | 2026-05-13 |
| Market sub-page | `https://mobile.a-bly.com/markets/4` | ⚠️ WebFetch returned title only (markup was client-rendered / SPA) | 2026-05-13 |
| Corporate site | `https://corp.a-bly.com/` / `https://www.a-bly.co.kr/` | ❌ ECONNREFUSED on WebFetch | 2026-05-13 |
| `getComputedStyle` capture via playwright | `https://m.a-bly.com/` | ❌ **Failed** — the shared MCP Playwright browser was under heavy cross-session contention; every `browser_evaluate` call landed on unrelated tabs opened by parallel sessions (kakaopay.com, zigzag.kr, banksalad.com, 29cm.co.kr, refero.design, dramancompany.github.io). Tab-select and tab-new operations were race-clobbered by concurrent users. Tried 5+ retries. | 2026-05-13 |

**Tier 1 confidence:** Medium for §1–3 (brand register, mobile-first IA, free-shipping promise, 6-tab nav are confirmed via title + redirect + independent reviews). **Low for §4 raw token values** — these are reconstructed from category convention and the small amount of confirmed brand evidence, and are flagged `(unverified live)` in the §4 footer. A clean Phase U2 re-capture is required.

---

## Tier 2 — Cross-Check

| Source | URL | Result |
|---|---|---|
| getdesign.md | `https://getdesign.md/ably` | ❌ **No record.** Page explicitly returns "No designs found for 'ably'." Verified via WebFetch on 2026-05-13. |
| Refero Styles (EN query) | `https://styles.refero.design/?q=ably` | ⚠️ **Inconclusive.** Page is client-rendered; WebFetch returned the homepage shell only. Playwright capture failed (see Tier 1 contention note). Cannot confirm presence or absence. |
| Refero Styles (KR query) | `https://styles.refero.design/?q=%EC%97%90%EC%9D%B4%EB%B8%94%EB%A6%AC` | ⚠️ Same — inconclusive. |

**Tier 2 confidence:** Unavailable for token cross-check. Tier 1 brand register is treated as authoritative for §1–3.

---

## Brand & Philosophy Sources (used in §10–15)

| Source | URL | Used for |
|---|---|---|
| Ably Team Medium (culture post) | `https://ably-team.medium.com/ably-culture-a640fb3f7cf9` | §10 voice register; §11 culture quote on "팀원" / "인터뷰"; §12 anti-corporate principle |
| Sedaily — Kang Suk-hoon interview | `https://www.sedaily.com/NewsView/22SSWLO75W` | §11 founder + taste-driven commerce framing |
| Economist Korea (May 2024) — C-Suite series | `https://economist.co.kr/article/view/ecn202405080023` | §11 scale framing ("조 단위 거래액") + "people are the greatest asset" quote |
| Hankyung (Dec 2020) — 2700% growth profile | `https://www.hankyung.com/economy/article/2020122085521` | §11 founder vision + community / Korean commerce ecosystem framing |
| SmartFN (Feb 2024) — Annual profitability | `https://www.smartfn.co.kr/article/view/sfn202402130003` | §11 operating-discipline framing |
| KED Global (Oct 2023) — Ably × Meta AI ad measurement | `https://www.kedglobal.com/korean-startups/newsView/ked202310120014` | §11 AI-first commerce framing + explicit "Ably Corp" naming for disambiguation |
| Yonsang business interview | `https://www.yonsang.com/yonsang/newsletter.asp?act=view&mid=Y01_05&cmid=Y01_05&cid=0&bid=8&idx=1835` | §11 "all stakeholders" mission quote |
| Moneys (Oct 2021) | `https://moneys.mt.co.kr/news/mwView.php?no=2021102714478058134` | §11 "취향의 시대" taste-driven commerce positioning |
| Businesspost — Who Is Kang Suk-hoon | `https://www.businesspost.co.kr/BP?command=article_view&num=353724` | §11 founder profile context |
| Namu.wiki — 에이블리 | `https://namu.wiki/w/%EC%97%90%EC%9D%B4%EB%B8%94%EB%A6%AC` | §1 IA references (6-tab nav, 4-up grid, Benefits/Content menus) |

---

## Style-ref Pick (Phase P-1)

`toss` — Korean brand → Toss tone borrowed as the style reference for the §10–15 philosophy layer (voice/tone table structure, "Forbidden phrases" device, principle-with-UI-implication, motion-with-signature pattern). Differentiation enforced:

- Toss = fintech, **single blue interactive color**, restraint as brand statement
- Ably = commerce, **vibrant pink reserved for commercial pressure**, image-density as brand statement
- Toss tone is "calm friend with money"; Ably tone is "stylist friend with opinions"

Distinguished from peer brands:

- **vs Zigzag** — Zigzag's brand register is cuter / more pastel, broader merchandised range; Ably is sharper-pink and more AI-personalized
- **vs 29CM** — 29CM is editorial / restrained / aspirational; Ably is fast / dense / MZ-coded
- **vs Brandi** — similar audience, but Ably is more commerce-pressure-coded (sale timers, 쇼킹딜) and Brandi leans softer

---

## Confidence Summary (per section)

| Section | Confidence | Note |
|---|---|---|
| §1 Visual Theme | High | Mobile-first redirect + title + 6-tab IA confirmed |
| §2 Color Palette | Medium | Pink-coral register is brand-confirmed; specific hex values need live re-capture |
| §3 Typography | High | Pretendard is the de facto Korean mobile sans of this category |
| §4 Components | **Medium-Low** | Values reconstructed from category convention; flagged `(unverified live)` |
| §5 Layout | High | Mobile-only, 4-up grid, 16px padding consistent with category |
| §6 Depth | Medium | Inferred from category; live re-capture needed |
| §7 Do/Don't | High | Derived from §1–3 brand register |
| §8 Responsive | High | Mobile-only is structurally confirmed |
| §9 Agent Prompt | High | Derives from §1–8 |
| §10 Voice & Tone | High | Multiple founder-interview + Ably Team Medium sources |
| §11 Brand Narrative | High | 9 independent sources cited |
| §12 Principles | High | Derived from §10–11 with UI implications |
| §13 Personas | Medium (illustrative) | Marked as fictional archetypes |
| §14 States | Medium | Pattern from category + Toss style-ref |
| §15 Motion | Medium | Pattern from category + Toss style-ref |

---

## Outstanding Items for Future UPDATE pass

1. **Phase U2 re-capture on clean Playwright session** — primary item. Need `getComputedStyle` reads on:
   - Top search bar (`#F5F5F5` pill or different?)
   - Bottom CTA on a product detail page (exact pink hex?)
   - Filter chip active state (confirmed black-not-pink?)
   - Bottom tab active vs inactive (confirmed black-not-pink?)
   - Sale timer countdown styling
   - Product card price stack (exact discount % color, strike weight)
2. **Refero refresh** — attempt refero search on a clean session to confirm presence/absence.
3. **Verify 50M downloads / 10M MAU figures** against Ably PR before treating as ground truth.
4. **Confirm exact brand pink hex** — multiple commerce-tracking screenshots suggest `#FA2E5F`, `#FF2D55`, and `#F0124B` family; live capture will resolve which is the canonical CTA pink.

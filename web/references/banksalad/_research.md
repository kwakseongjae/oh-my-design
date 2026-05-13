# Banksalad — Research Notes

**Extracted:** 2026-05-13
**Mode:** CREATE (omd:add-reference)
**id:** `banksalad` (Korean: 뱅크샐러드 · operator: Rainist / 레이니스트)

---

## Tier 1 — Live / Official sources

| Source | URL | What was extracted | Trust |
|---|---|---|---|
| banksalad.com home (HTML + CSS) | https://www.banksalad.com/ | Pretendard font preload, BM JUA accent font, CSS bundle URL | HIGH |
| banksalad.com main CSS bundle (865 KB) | https://webview-cdn.banksalad.com/banksalad-web/static/dist/v2.5c10981711a65fe446400c6ecec36a221b1c3e9e.bundle.css | All token-level data: color frequencies, radius scale, font weights, shadow values, button rules, input rules, BPL Colors marker | HIGH |
| playwright live inspect (initial attempt) | https://www.banksalad.com/ | Pretendard font confirmed on `.GlobalHeader__StyledSignInButton` (`PretendardVariable`); 16px radius / 6px 14px padding on sign-in button | MEDIUM — playwright session was disrupted by shared browser concurrency partway through, so most computed-style data came from raw CSS not DOM |
| Banksalad official tech blog — BPL post | https://blog.banksalad.com/tech/banksalad-product-language-ios/ | BPL (Banksalad Product Language) philosophy: *"Communication cost is most expensive. Code and Show first, argue after that."* Flat component structure, Figma-as-source-of-truth, LayoutDrivenUI + RxSwift. | HIGH |
| GitHub — banksalad org | https://github.com/banksalad | Confirms `banksalad/styleguide` (code style guide, public) and `banksalad/.github` ("Banksalad ❤️ Tech"). No public Figma tokens repo found. | HIGH |

### Tier 1 raw observations (from CSS bundle)

**Colors — top frequencies (`grep -oE '#[0-9a-fA-F]{6}' | sort | uniq -c | sort -rn`):**

```
72 #f5f5f5    ← page neutral / divider
65 #434444    ← body text (warm near-black)
63 #2b2b2b    ← heading (warm near-black, lighter than #000)
62 #04c584    ← PRIMARY GREEN (CTA, link, accent)
53 #7b7b7b    ← caption / secondary text
43 #fbfbfb    ← lightest surface
38 #10df99    ← HOVER GREEN (brighter mint, focus border)
36 #e1e1e1    ← input border / divider line
32 #0ED19B    ← uppercase variant of mint (same family)
31 #acacac    ← placeholder / disabled text
29 #000000    ← rare, used only on a few elements
25 #0b0c0c    ← deep black variant
23 #999999    ← muted text
23 #5c818a    ← teal-gray (data accent)
23 #34464b    ← deep teal-slate (chart/data)
16 #c0c0c0    ← disabled
14 #ff8a84    ← light red (negative state soft)
14 #0099ff    ← info blue (links in some content)
13 #fd8700    ← orange (highlight/warning)
13 #f56200    ← deep orange (warning emphasis)
13 #436068    ← deep teal (data viz)
10 #ff9900    ← orange accent
 9 #f3fdfa    ← MINT TINT (focus bg, success surface)
 7 #18cd8c    ← green hover variant
 5 #333a44    ← deep slate
 5 #1c6c73    ← deep teal-cyan (data viz spectrum)
 3 #fe493d    ← error red (strong)
 3 #a7c7cf    ← chart pale teal
 3 #318b93    ← chart mid teal
 3 #13bd7e    ← green variant (chart)
```

**Border-radius — full distribution:**
```
81 2px       ← DOMINANT — buttons, inputs, cards
 7 50%       ← avatars/icons
 5 8px       ← softer cards
 4 0
 3 4px       ← small badges
 2 41px      ← rare pills (tags)
 2 10px
 1 12px
 1 30px      ← rare pill
```

**Font:**
```
Primary:  Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Segoe UI, Roboto,
          Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, sans-serif
Display:  "BM JUA", sans-serif  ← Battle Grounds Jua (rounded Korean display)
```

**Weight distribution:**
```
160  700   ← strong default for headings, CTA, financial amounts
112  500   ← body emphasis
 26  300   ← rare light
  9  400   ← rare regular
```

**Font-size scale (px):** 10, 12, 13, 14, 16, 18, 20, 22, 24, 28, 30, 32, 34, 36, 38, 40, 44, 48, 52

**Shadow distribution (top):**
```
26  0 2px 5px rgba(0,0,0,.12)        ← STANDARD card shadow
14  0 0 2px 0 rgba(0,0,0,.26)        ← thin halo / overlay
12  0 2px 5px 0 rgba(0,0,0,.12)      ← duplicate / standard
 6  inset 0 1px 1px 0 rgba(0,0,0,.12)
 4  0px 2px 8px 0px rgba(0,0,0,.1)
 4  0 4px 9px rgba(0,0,0,.15)
 4  0 17px 50px 0 rgba(0,0,0,.19)    ← elevated modal
```

**Primary CTA rule (grepped):**
```css
{
  background: #04c584;
  font-size: 16px;
  font-weight: 700;
  line-height: 42px;     /* implied ~42px height */
}
{
  border-radius: 2px;
  background: #04c584;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -1px;
}
.retry_*:hover { background: #04c584; }   /* from #10df99 default → darker on hover */
```

**Input focus rule (grepped):**
```css
.input_*:focus {
  color: #434444;
  background: #f3fdfa;
  border-color: #10df99;
}
.formInput_*:focus {
  border: 1px solid #10df99;
  background: #f3fdfa;
}
```

Default input: `border: 1px solid #e1e1e1; border-radius: 2px; color: #999999`.

**BPL Colors marker:** The bundle includes empty `:root { /* BPL Colors */ }` comments — confirming the design system is internally called **BPL (Banksalad Product Language)** and these tokens are inlined rather than CSS custom-properties (BPL is consumed via Swift/Kotlin/Web SDKs rather than raw CSS vars).

---

## Tier 2 — Cross-check

| Source | URL | Result |
|---|---|---|
| getdesign.md | https://getdesign.md/banksalad | **No record.** "No designs found for 'banksalad'." |
| styles.refero.design | https://styles.refero.design/?q=banksalad | **No record.** Search returns no banksalad-tagged cards (page shows only the generic search UI). |

Tier 2 is **unavailable for Banksalad**. Tier 1 (live CSS + official BPL blog) is treated as authoritative per pipeline.

---

## Tier 3 — Reconcile

No Tier 2 conflicts to reconcile. All §4 values come from Tier 1 raw CSS observations.

**Distinguishing this brand from neighbors:**
- **vs Toss:** Toss is `#3182f6` blue + Toss Product Sans + 12–16px radius. Banksalad is `#04c584` green + Pretendard + Jua + **2px radius** (much sharper). Toss's mission = "money should feel light"; Banksalad's mission = "resolve information asymmetry, make anyone smart about their money".
- **vs KakaoPay:** Kakaopay is Kakao-yellow `#ffce00` + curved consumer-app aesthetic. Banksalad refuses both yellow and curves.
- **vs Kakaobank:** Kakaobank is yellow + dark plus playful illustration. Banksalad is mint-green + data-density + serious-advisor tone.
- **vs Stripe:** Stripe is engineering-fintech in English. Banksalad is the **Korean consumer side of the same idea** — data clarity, but for end-users not developers.

---

## Brand / company facts (Tier 1 sourced)

- **Founded:** 2012 by **Kim Tae-hoon (김태훈)** at **Rainist (레이니스트)** ([나무위키](https://namu.wiki/w/%EB%B1%85%ED%81%AC%EC%83%90%EB%9F%AC%EB%93%9C), [한국경제 2019-03-12](https://www.hankyung.com/article/2019031275551)).
- **Origin story:** Smilegate (the game company) incubated Banksalad. Founders manually classified 16 hours/day of financial data to build the initial DB (Hankyung 2019).
- **Mission:** *"정보 비대칭성을 해소해 누구나 똑똑해지는 세상을 만들겠다"* — "Resolve information asymmetry so anyone can become smart [about their money]" (search result via Korean press coverage of Kim Tae-hoon interviews).
- **MAU:** 1.5M in early 2019 (3× YoY) ([Korea Herald 2019-02-22](http://www.koreaherald.com/view.php?ud=20190222000548)).
- **Series C:** ₩45B (~$37M USD) at ~₩300B (~$247M) valuation in 2019 ([Korea Herald 2019-08-28](https://www.koreaherald.com/article/2087712)).
- **Total raised:** $169.96M cumulative (PitchBook).
- **Services:** credit cards, loans, mortgages, deposits/savings, health-asset check (free DNA-based health screening — distinctive product extension beyond fintech).
- **Tagline (live, 2026-05-13):** *"뱅크샐러드 \| 금융을 넘어 건강 자산까지"* — "Banksalad: from finance to health assets." This is current as of the homepage `<title>` element captured live.

---

## Logo

Best logo URL (verified live): the homepage header SVG logo via `cdn.banksalad.com`. The home page references brand assets through `https://cdn.banksalad.com/` (confirmed in `<link rel="preconnect">`). For `_promo.json`, the canonical brand wordmark is served from the CDN; closest stable URL is `https://blog.banksalad.com/static/img/logo-banksalad.svg` (Banksalad official tech blog logo) — used as a stable fallback.

---

## Sources index

1. https://www.banksalad.com/ — live home (Pretendard preload, Jua accent, BPL CSS bundle)
2. https://webview-cdn.banksalad.com/banksalad-web/static/dist/v2.5c10981711a65fe446400c6ecec36a221b1c3e9e.bundle.css — 865 KB CSS bundle, all token data
3. https://blog.banksalad.com/tech/banksalad-product-language-ios/ — BPL philosophy + quoted principle
4. https://github.com/banksalad — official org
5. https://github.com/banksalad/styleguide — public code style guide
6. https://namu.wiki/w/뱅크샐러드 — founder, year, parent company (blocked HTTP 403 to WebFetch but cross-referenced via WebSearch result snippets)
7. https://www.hankyung.com/article/2019031275551 — manual data classification origin
8. https://www.koreaherald.com/article/2087712 — Series C valuation
9. https://www.koreaherald.com/view.php?ud=20190222000548 — 1.5M MAU 2019
10. https://pitchbook.com/profiles/company/267964-39 — total funding $169.96M
11. https://getdesign.md/banksalad — **no record** (Tier 2 negative)
12. https://styles.refero.design/?q=banksalad — **no record** (Tier 2 negative)

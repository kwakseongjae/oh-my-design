# Research — Gangnamunni (강남언니 / Healingpaper)

**Date:** 2026-05-13
**Mode:** CREATE
**ID:** `gangnamunni`

---

## Tier 1 — Live inspect (REQUIRED)

| Source | Method | Confidence | Notes |
|---|---|---|---|
| https://www.gangnamunni.com/ | playwright `browser_evaluate(getComputedStyle)` on header/nav/footer/buttons/cards/links | HIGH | First evaluate returned valid sample (Pretendard font, white sign-in pill with `1px solid rgb(216,223,230)` and `16px` radius, footer `#f5f5f5` w/ top `4px solid #d6d6d6`, bottom nav 64px). Subsequent calls polluted by parallel browser sessions. |
| https://next-static.gangnamunni.com/cheetah/rc-ad53c62/_next/static/css/d246c5b2edcb00b6.css | curl + grep of compiled production CSS bundle (435 KB) | HIGH | Full token map extracted: `--cell-base-color-orange-500: #d54300`, `--cell-base-color-orange-400: #f66336`, `--cell-base-color-bluegray-{50..900}`, full `cell-base-font-size-{100..1500}` typography ramp, `--cell-base-radius-{50..700,full}` (50 → 0.125rem, 700 → 32px, full → 9999px), semantic mapping `--cell-semantic-color-fg-brand-regular-default → orange-400`, `fg-brand-strong-default → orange-600`. Raw hex `#FF540F` (rgb 255 84 15) appears 12× in compiled Tailwind utility classes as brand fill. |
| https://blog.gangnamunni.com/post/welchis/ | WebFetch — official engineering blog post | HIGH | Confirms the **two-system architecture**: **Cell** = mobile (iOS / Android / mWeb), **Welchis** = PC back-office. Welchis splits into Welchis Design (tone/manner/style) + Welchis UI (design files + web library). Storybook is the handoff bridge — eliminates Zeplin pixel-measure. |

### Tier 1 extracted values (compiled bundle, authoritative)

**Brand**
- `--cell-base-color-orange-500`: `#d54300` (deep brand)
- `--cell-base-color-orange-400`: `#f66336` (regular FG brand)
- `--cell-base-color-orange-600`: `#ab350c` (strong FG / pressed)
- `--cell-base-color-orange-300`: `#fa8563` (subtle border)
- `--cell-base-color-orange-100`: `#feeee9` (tint surface)
- `--cell-base-color-orange-50`: `#fef6f4` (lightest tint)
- Raw `#FF540F` (rgb 255 84 15) appears as Tailwind `bg-[#FF540F]` / `border-[#FF540F]` 5× each — used on the live home as accent fill (e.g., review-flag, hot-deal badge). Treated as a **second visual brand swatch** alongside the semantic-token orange-500.

**Neutral (bluegray)**
- 900 `#131517` (primary text)
- 800 `#21272d`
- 700 `#3a444d` (secondary text)
- 600 `#515e6a`
- 500 `#697683` (tertiary text)
- 400 `#8694a2` (placeholder text)
- 300 `#b5bfc9`
- 200 `#d8dfe6` (border default — matches live sign-in button border)
- 150 `#e4e8ec`
- 100 `#eff2f5`
- 50 `#f7f9fa`

**Status**
- Green-400 `#27a86d` (success), Green-500 `#1a8656`
- Red-500 `#d73f39` (danger), Red-400 `#f75e54`
- Yellow-400 `#f9c647` (warning)
- Blue-500 `#3270d6` (info / certification)
- LightBlue-500 `#0b819d` (payment / refund)

**Typography**
- Family: **Pretendard JP Variable** (PretendardVariable for Korean), fallback PretendardVariable Fallback → sans-serif
- Weights: 300 / 400 / 500 / 600 / 700
- Size ramp (rem): 100 = 0.6875 (11px), 200 = 0.75 (12), 300 = 0.8125 (13), 400 = 0.875 (14), 500 = 1.0 (16), 600 = 1.125 (18), 700 = 1.25 (20), 800 = 1.375 (22), 900 = 1.5 (24), 1000 = 1.75 (28), 1100 = 2 (32), 1200 = 2.25 (36), 1300 = 2.5 (40), 1400 = 2.75 (44), 1500 = 3 (48)
- Token classes emitted: `cell-semantic-typography-{display,title,label,body-single,body-multi,description,caption}-{xxs..xl}-{regular,strong,strongest,subtle}` — full Cell semantic typography ladder.

**Radius**
- 50 → 0.125rem (2px)
- 100 → 0.25rem (4px)
- 150 → 0.375rem (6px)
- 200 → 0.5rem (8px)
- 250 → 0.625rem (10px)
- 300 → 0.75rem (12px)
- 400 → 1rem (16px)
- 500 → 1.25rem (20px)
- 600 → 1.5rem (24px)
- 700 → 32px (raw)
- `full` → 9999px (pills, avatars)
- Semantic: `sm = 150`, `md = 200`, `lg = 250`, `xl = 300`, `xxl = 400`, `xxxl = 500`, `full`

**Spacing**
- Same `dimension-scale` ramp from 25 (0.0625rem = 1px) through 2400 (6rem = 96px). 8px base unit confirmed via 200 = 0.5rem.

**Live-DOM-observed components (first evaluate, before pollution)**
- Global header height **48px**, white bg, `0px solid rgb(245, 245, 245)` bottom-border seam (effectively a hairline divider rendered via Tailwind utility).
- Sign-in button: 32px height, 6px 14px padding, **16px radius** (semantic `sm` ring focus / pill-ish), `1px solid rgb(216, 223, 230)` = bluegray-200, fg black, 14px Pretendard 400.
- Category nav anchors: 88px tall (icon + label stack), no background, plain text.
- Article card link: 330px tall, transparent bg, gap-2 column flex, 16px Pretendard 400 black title.
- Bottom mobile nav (FOOTER element used semantically): 64-65px, transparent bg, five items (홈 / 병원 / 이벤트 / 커뮤니티 / 칼럼).
- Page footer (desktop): 528px tall, `#f5f5f5` bg, `border-top: 4px solid #d6d6d6`, 30px padding.
- "전체보기" link: 13px / 600 weight `rgb(19, 21, 23)` = bluegray-900.

---

## Tier 2 — Cross-validation (both attempted)

| Source | Result | Confidence | Notes |
|---|---|---|---|
| https://getdesign.md/gangnamunni | WebFetch — "No designs found for 'gangnamunni'." | n/a | Not present in the directory. |
| https://styles.refero.design/?q=gangnamunni | playwright navigate + `browser_evaluate` — no gangnamunni-scoped style card returned (results are generic "Best Of"-style cards: NaN, Modal, Adanola, Anna Jóna, DNCO, monopo saigon, Gsap, etc.). | n/a | No match. |
| https://styles.refero.design/?q=강남언니 | playwright navigate — empty `/style/` card results. | n/a | No Korean-query hit either. |

**Tier 2 status:** _Not found in getdesign.md or styles.refero.design as of 2026-05-13._
**Tier 1 vs Tier 2 conflicts:** none (no Tier 2 data to conflict).

---

## Tier 3 — Philosophy / narrative sources (for §10-15)

| Source | URL | Use |
|---|---|---|
| Cell + Welchis engineering post | https://blog.gangnamunni.com/post/welchis/ | Two-system DS architecture; Storybook handoff; why-custom-library rationale; "HeaderDefault means the same to designers and devs" quote. |
| Hankook Ilbo — "예비 유니콘" 강남언니/힐링페이퍼 | https://www.hankookilbo.com/News/Read/A2021041209150005627 | Founder 홍승일 (Hong Seung-il), pre-unicorn status, Healingpaper as parent. |
| Hankook Ilbo — Series D 428억 (2025-02-17) | https://www.hankookilbo.com/News/Read/A2025021715490005621 | 428억원 (~$30M) growth round 2025-02. |
| TheVC — Healingpaper | https://thevc.kr/healingpaper | Cumulative funding ≈ 313억원, multiple rounds. |
| Rocketpunch profile of 홍승일 (vanitymind) | https://www.rocketpunch.com/@vanitymind | Confirms founder identity + role. |
| WebSearch (synthesis) | (multiple) | Founded **July 2012**; ~**7M+ global users** across KR / JP / TH; "Unni" overseas app at 700K+ users as of 2024-03; Seed 2015-07 (3억), Series A 2019-07 (45억), Series B 2020-03 (185억), later rounds bringing cumulative ≈ 313억. |

---

## Confidence summary

- **Tokens (§2, §3, §5):** HIGH — extracted directly from production CSS bundle.
- **Components (§4):** HIGH for chrome (header, sign-in button, nav, footer, link) verified via live evaluate; HIGH for token-derived variants (primary CTA / outline / ghost / status badges / inputs) inferred from semantic-token map with state ramp `default / hover / pressed / disabled` → orange-{400, 500, 600, 200}.
- **Voice & narrative (§10-11):** HIGH for company facts (founding year, founder, parent company, funding). MEDIUM for voice-tone editorial reading — gangnamunni's app surface is reassuring + clinical-precise in Korean (e.g., "후기 7,300건", "병원 1,234곳") — no published voice doc, inferred from product copy patterns observed on the home page.
- **Personas (§13):** illustrative — explicit disclaimer in section header.

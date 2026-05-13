# SOCAR — Research Log

**Verified:** 2026-05-13
**Reference id:** `socar`
**Brand (KR):** 쏘카
**Brand (EN):** SOCAR

## Tier 1 — Live Inspect (REQUIRED)

| URL | Date | Method | Findings |
|---|---|---|---|
| `https://www.socar.kr/` | 2026-05-13 | Playwright `browser_navigate` + `browser_evaluate` on computed styles | Pretendard / PretendardVariable font-family; body color `rgb(53,65,83)` = `#354153`; borders `rgb(229,232,239)` = `#e5e8ef`; filled-input bg `rgb(242,243,248)` = `#f2f3f8`; placeholder text `rgb(180,187,203)` = `#b4bbcb`; card radius 14–16px; search button radius 12px; card shadow `rgba(0,0,0,0.1) 0 4px 8px`; H1 26px/700, H2 22px/700, H3 16px/600; nav links 16px/600; footer bg `#f5f5f5`, footer padding 30px |
| `https://design.socar.kr/` (SOCAR Brand Center) | 2026-05-13 | Playwright `browser_navigate` (tab opened, title confirmed: "새로운 쏘카 \| 쏘카 브랜드 센터") | Reachable. Live inspection of computed styles for tokens not completed in this session because a shared browser session bounced between unrelated tabs after the first SOCAR inspect. Brand Center is a SPA shell — WebFetch returns title only. **Confidence note:** primary tokens above remain Tier 1 high-confidence; second-surface inspection should be redone on a clean session. |

**Tier 1 confidence:** High for socar.kr home (one full computed-style sweep captured). Medium for SOCAR Brand Center (URL reachable, content not extracted in this session).

## Tier 2 — Library Cross-Check

| URL | Date | Result |
|---|---|---|
| `https://getdesign.md/socar` | 2026-05-13 | *"No designs found for 'socar'"* — no tokens published as of this date. |
| `https://styles.refero.design/?q=socar` | 2026-05-13 | Page reachable; isolated SOCAR token block not surfaced in this session due to tab session collision. No Refero token data captured. |

**Tier 2 confidence:** None — neither service has published SOCAR token data as of 2026-05-13. Reconciliation footer notes "Tier 2: not found in getdesign / refero as of 2026-05-13".

## Tier 3 — Brand & Engineering Context

| URL | Date | Use |
|---|---|---|
| `https://abocado.kr/brand_news/news_detail?no=52` | 2026-05-13 | Rebrand case study — SOCAR Blue primary, achromatic supporting palette, SOCAR Space Frame symbol, Sandoll Gothic Neo2 (KR) + Avenir (Latin) brand typefaces, *"소유를 줄여 삶의 여유를 더한다"* tagline, *"a vessel that carries new experiences"* symbol description. **Used to anchor §1, §2, §6, §11.** |
| `https://tech.socarcorp.kr/design/2020/06/23/socar-design-system-01.html` | 2026-05-13 | SOCAR FRAME #1 — process / methodology of building FRAME. No hex codes. **Used to anchor §11.** |
| `https://tech.socarcorp.kr/fe/2026/02/23/socar-frame2-web.html` | 2026-05-13 | SOCAR FRAME 2.0 web — architecture (rules, library, design-code integration, operations); explicit quote: *"UI 라이브러리 위에 정책(규칙), 연동(디자인-코드), 운영(릴리스/검증)이 얹혀 있어 실제로 반복 가능한 생산 체계가 된다"*. No token table. **Used to anchor §11, §12.** |
| `https://design-system-group.gitbook.io/reference/undefined/socar` | 2026-05-13 | Naming-convention reference (`[size]_[style]_[component]_[theme]`). No hex codes. **Used to anchor §12 principle 8.** |
| `https://medium.com/roubit-me/...` (Roubit "SOCAR 디자인시스템 뜯어보기") | 2026-05-13 | Index / pointer only; substantive content lives behind external links. Not directly cited. |

## Knowledge Gaps (Tier 1 follow-ups)

These should be filled by a future clean-session inspection:

1. **SOCAR Blue exact hex** — not published publicly. Brand Center likely surfaces it; needs computed-style extraction from `design.socar.kr` or `brand.socar.kr` color tiles.
2. **Booking-flow primary CTA** — the public home shows the disabled/neutral search button; the SOCAR Blue active-state CTA needed an inspection of the reservation funnel (requires a date-time selection to enable the button).
3. **Focus ring color** — not verified on the public home.
4. **FRAME 2.0 motion tokens** (durations / easings) — §15 is currently inferred from observed behavior + FRAME-tier convention.
5. **Dark mode tokens** — FRAME documents dark mode parity from the 2020 article series; not visible on the public marketing home.

## Conflicts

- **Brand-document typefaces vs. live web fonts.** Sandoll Gothic Neo2 + Avenir are the brand standard; `socar.kr` runs Pretendard / PretendardVariable. Resolved as intentional (brand print vs. web operational); documented in §3.
- **No conflict on color geometry:** the achromatic chrome on the public home is consistent with the abocado rebrand description.

## Method Notes

- Playwright MCP session was shared across multiple concurrent tabs (other automated browsing surfaced 29CM, kakaopay, banksalad, zigbang, wanted, refero). Reliable inspection required filtering by `location.href.includes('socar')` and reading the *first* successful socar.kr inspection.
- WebFetch surfaced the abocado.kr rebrand case study cleanly; the SOCAR Brand Center and FRAME 2.0 internal docs are SPAs whose content is not visible to WebFetch.
- All `#` color codes in `DESIGN.md` come from inspected `rgb(...)` computed values; no hex was invented.

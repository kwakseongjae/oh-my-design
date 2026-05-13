# Wanted (원티드) — Research Log

**ID:** wanted
**Brand:** Wanted / Wanted Lab (원티드랩)
**Category:** Career marketplace / job-posting platform
**Built:** 2026-05-13
**Mode:** CREATE

---

## Tier 1 — Authoritative Sources

### 1. Live DOM inspection (playwright `getComputedStyle`)
- **URL:** `https://www.wanted.co.kr/wdlist/518` (developer jobs feed)
- **Status:** ✅ successful — 22 distinct component samples captured
- **Date:** 2026-05-13
- **Captured surfaces:**
  - Header: search trigger (38px pill, `#171719` bg), 회원가입/로그인 button (`#0066FF` text, 8px radius, 7px 14px padding), 기업 서비스 button (`#171719` text, same geometry)
  - Filter row: 개발・개발 전체 active category (16px / 600), 한국 country chip (10px radius), 태그 전체 dropdown (8px radius + 8px outlined icon container), 채용조건/기술스택/글로벌 tag chips
  - Sort filter: 최신순/추천순/인기순 segmented (10px container, `#F7F7F8` bg, 8px white active segment with no shadow)
  - JobCard: 12px radius body, 12 12 0 0 thumbnail, 50px-square 9px-radius logo, 합격보상금 100만원 reward badge, bookmark icon (40px circle)
  - AdCard: parallel geometry to JobCard with 상품안내 micro-link
  - Footer: FAQ chip (`#171719` bg, 2px radius), 사업자정보확인 micro-pill (`#A0A0A0` bg, 0 radius, 10px / 500), instagram pill (9999px, `#171719` bg)

### 2. Brand Center (official palette + voice values)
- **URL:** `https://www.wanted.co.kr/brandcenter/`
- **Status:** ✅ WebFetch successful
- **Extracted:**
  - Primary: `#0066FF` (PANTONE 2195 C)
  - Secondary: `#14191E` (brand black), `#FF5C00` (orange), `#FF8EFF` (pink), `#00ADFF` (sky), `#8364FF` (violet), `#F0F4F8` (grey)
  - Voice values: "부드럽지만 명확하게" / confident growth messaging / respectful framing / fact-based without embellishment
  - Logo rules: no flip/rotate, no logotype alone, original gradient preserved

### 3. Montage Design System (official docs portal)
- **URL:** `https://montage.wanted.co.kr/`
- **Status:** ✅ WebFetch successful (system overview only; deeper token pages require navigation auth)
- **Extracted:** System name "Montage", tagline "From Separate Core Blocks To a Seamless Flow", Wanted Sans + Pretendard JP typography, 2026.03.09 latest UI Kit, Foundations + Components + Utilities sections

### 4. Montage Web GitHub (source-of-truth package family)
- **URL:** `https://github.com/wanteddev/montage-web`
- **Status:** ✅ WebFetch successful
- **Extracted:** 295 releases, MIT license, packages: `@wanteddev/wds`, `wds-engine`, `wds-theme`, `wds-icon`, `wds-lottie`, `wds-nextjs`, `wds-codemod`, `wds-mcp`, `eslint-plugin-wds`. 79 stars, 1037 commits, TypeScript 99%.

### 5. Wanted Sans Typeface
- **URL:** `https://github.com/wanteddev/wanted-sans`
- **Status:** ✅ WebFetch successful
- **Extracted:** "A Sans-serif font; Geometric with a heart, Humanist with a soul", 7 weights + variable, SIL OFL 1.1, 97+ languages, Korean-first design, "Wanted Sans" + "Wanted Sans Std" font-family strings.

### 6. Company / Mission
- **URL:** `https://www.wantedlab.com/en/`
- **Status:** ✅ WebFetch successful
- **Extracted:** Founded 2015, 3.6M+ digital talents registered, 35K+ companies, AI Agents trained on 10M+ matching data, "AI Agents trained on 10M+ matching data connect companies with the right talent. Hiring, AX, Global — every HR journey starts with Wanted"

### 7. WDS Creation Story
- **URL:** `https://blog.wantedlab.com/library/insight/wds`
- **Status:** ✅ WebFetch successful
- **Extracted:** Design library launched April 1, 2024 (April Fool gesture), expanded April 3, 2025. ~70 components / 20-30 variants each. "Makers' Principle" page reference. Principle: "더 나은 협업 방식과 사용자 경험을 함께 만들어가는 것"

### 8. WANTED GitHub org
- **URL:** `https://github.com/wanteddev`
- **Status:** ✅ WebFetch successful
- **Extracted:** montage-web, montage-ios, montage-android (3-platform design system family), pretendard-ios, wanted-sans, internal tools (lighthouse, sanity-slack-bot, voc-analyst).

---

## Tier 2 — Cross-Verification

### getdesign.md/wanted
- **URL:** `https://getdesign.md/wanted`
- **Status:** ❌ **No record.** Returned "No designs found for 'wanted'." Marked unavailable.

### styles.refero.design/?q=wanted
- **URL:** `https://styles.refero.design/?q=wanted`
- **Status:** ⚠️ **Unavailable.** Playwright session shared with parallel agents during this run — every navigation to refero/wanted was hijacked to a-bly, zigzag, kakaopay, gangnamunni queries within seconds. Could not reliably capture refero results for `q=wanted` within this turn. Tier 1 deemed comprehensive enough (live DOM + brandcenter + Montage docs + GitHub source).

### Korean design community articles (Tier 2 supplementary)
- **URL:** `https://designcompass.org/en/2025/04/11/wanted-design-system-open-source/` — open-source announcement
- **URL:** `https://designcompass.org/en/2024/04/02/wanted-design-library/` — initial 2024 release
- **URL:** `https://www.figma.com/community/file/1355516515676178246/wanted-design-system` — public Figma file (HTTP 403 on WebFetch — requires Figma session)

---

## Token Reconciliation

| Field | Tier 1 (live DOM) | Brandcenter | Resolution |
|---|---|---|---|
| Primary blue | `rgb(0, 102, 255)` on 회원가입/로그인 button | `#0066FF` (PANTONE 2195 C) | ✅ exact match |
| Brand black | n/a in product UI | `#14191E` | brandcenter authoritative for marketing |
| UI heading | `rgb(23, 23, 25)` = `#171719` | n/a | Product-only token, retained separately from brand black |
| Body | `rgb(51, 51, 51)` = `#333333` | n/a | Product-only token |
| Secondary | `rgba(55, 56, 60, 0.61)` | n/a | Product-only translucent token |
| Border | `rgba(112, 115, 124, 0.16)` | n/a | Product-only translucent token |
| Surface subtle | `rgb(247, 247, 248)` = `#F7F7F8` | n/a | Product-only token |
| Font stack | `"Pretendard Variable", "Pretendard JP Variable"` | Wanted Sans for brand | ✅ two-surface split (product = Pretendard, marketing = Wanted Sans) |
| JobCard radius | 12px | n/a | Product-only |
| Filter chip radius | 10px (한국) / 8px (태그 전체) | n/a | Product-only |
| Sort container radius | 10px | n/a | Product-only |

**No unresolved conflicts.** Brand-black `#14191E` vs UI-heading `#171719` is a documented two-surface split (marketing vs product), not a conflict — both retained.

---

## Confidence Notes

- **High confidence:** primary brand color, typography stack, JobCard geometry, filter chip system, sort segmented control, brand voice values
- **Medium confidence:** semantic colors (success/error/warning) — inferred from Montage WDS theme package family naming but not directly inspected (would require Montage docs navigation)
- **Low confidence (not claimed):** specific shadow tokens, motion easing curves explicitly named in WDS (the values in §15 use industry-standard cubic-beziers as informed defaults, marked as such)

---

## Pipeline Status
- Tier 1 live inspect: ✅ (22 component samples)
- Tier 1 brand center: ✅
- Tier 1 GitHub sources: ✅ (org + wanted-sans + montage-web)
- Tier 2 getdesign.md: ❌ no record
- Tier 2 refero: ❌ unreliable due to playwright session contention
- §4 canonical schema: ✅ (1-bullet-per-field, no slash multi-fields)
- §10-15 philosophy fill: ✅
- Verification footer: ✅

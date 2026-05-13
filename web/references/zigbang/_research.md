# Zigbang (직방) — OmD Research Log

**Date:** 2026-05-13
**Mode:** CREATE
**Pipeline:** 3-tier verification (Tier 1 live inspect + Tier 2 cross-check + Tier 3 reconcile)

---

## Tier 1 — Official sources & live inspect

### Live computed-style observation (playwright)
- **URL:** `https://www.zigbang.com/` (home — full inspect)
- **URL:** `https://www.zigbang.com/home/apt/map` (map surface — partial inspect; second-pass disrupted by parallel browser-session tab contention; primary tokens captured via the home-surface inspect)
- **Date:** 2026-05-13
- **Trust:** High for tokens captured on the home surface; medium for map-overlay tokens (inferred from observed chrome + visual rendering)

Raw observations recorded:
- Body font stack: `"Pretendard Variable", "Pretendard JP Variable", -apple-system, ...`
- Heading neutral: `rgb(23, 23, 25)` = `#171719`
- Auth link color: `rgb(0, 102, 255)` = `#0066ff`
- Bookmark icon color: `rgb(51, 51, 51)` = `#333333`
- Disabled / muted ramp: `rgba(55, 56, 60, 0.16)` (deep) and `rgba(55, 56, 60, 0.28)` (medium)
- Nav button: bg transparent, radius 8px, padding 7px 14px, height 32px, fs 14px, weight 400
- Search trigger: bg transparent, radius 9999px, fs 24px (glyph)
- Station chip: bg transparent, radius 10px, padding 7px 9px 7px 11px (asymmetric), height 32px, fs 22px, weight 400
- Paginators: radius `10px 0 0 10px` (prev) / `0 10px 10px 0` (next), 32px square, 20px glyph
- Bookmark toggle: radius 50%, 8px padding, 40px tall, 22-24px glyph

### Brand / official channels
- `https://company.zigbang.com/who-we-are` — vision "Living Forward", values (Reliability / Innovation / Efficiency / Possibility), founding timeline
- `https://company.zigbang.com/en/newsroom/view?idx=314` — 2022 "Beyond Home" rebrand announcement, CEO Ahn Sung-woo verbatim quote, "deeper, more premium orange" color direction
- `http://en.smarthome.zigbang.com/index/?bmode=view&idx=162547182` — English rebrand article, logo description (house glyph + expanding ellipse)
- `https://designcompass.org/en/2022/11/30/zigbang-rebranding-beyond-home/` — third-party design commentary, rationale only (no token publication)

### GitHub
- `gh search repos "zigbang design"` — no public Zigbang Design System (ZDS) repository surfaced; the company has a Medium tech blog (`medium.com/zigbang`) but no published DS tokens

### WebSearch
- `"Zigbang" design system`, `"직방" 디자인 시스템 medium`, `ZDS zigbang brunch` — no public DS publication found
- 안성우 / 직방 창업 story corroborated across 아주경제, 나무위키, 서울경제 CEO&Story, business post

---

## Tier 2 — Cross-check

### getdesign.md
- **URL:** `https://getdesign.md/zigbang`
- **Result:** "No designs found for 'zigbang'." — no public entry on the directory
- **Date:** 2026-05-13

### styles.refero.design
- **URL:** `https://styles.refero.design/?q=zigbang`
- **Result:** No public style entry surfaced via search; WebFetch on the search URL returned the platform homepage rather than results
- **Date:** 2026-05-13
- **Trust:** Low — search was attempted; could not confirm whether a private entry exists

Net Tier 2: Both directory sources are empty for Zigbang. Tier 1 live inspect is the truth source.

---

## Tier 3 — Reconcile & conflicts

| Field | Tier 1 (live) | Tier 2 | Resolution |
|---|---|---|---|
| Primary font | Pretendard Variable | — | Tier 1 (live) |
| Heading neutral | `#171719` | — | Tier 1 (live) |
| Action color | `#0066ff` | — | Tier 1 (live) |
| Brand orange hex | not surfaced via inspect (used on logo only) | "deeper, more premium" per rebrand article, no hex published | **Unresolved** — labeled ~`#FF6600` illustratively in §2; footer flags |
| Nav button radius | 8px | — | Tier 1 (live) |
| Chip radius | 10px | — | Tier 1 (live) |
| Paginator split-corner | `10px 0 0 10px` / `0 10px 10px 0` | — | Tier 1 (live) |
| Bookmark toggle radius | 50% | — | Tier 1 (live) |
| Muted ramp | `rgba(55,56,60,0.16/0.28)` | — | Tier 1 (live) |

**Conflicts unresolved:**
- Zigbang's exact brand orange hex is not publicly published. The 2022 rebrand commentary describes the orange as "deeper, more premium" than the original, but no canonical token is exposed in the materials reviewed. The `#FF6600`-approx value in DESIGN.md §2 is labeled as illustrative until official publication is confirmed.
- Map-overlay (listing card, price chip) exact tokens (border, shadow) inferred from chrome inspected and visual rendering; should be re-verified on a stable inspect session (without parallel browser-tab contention).

---

## Philosophy sources (§10-15)

Style ref: `toss` tone (KR brand convention, per skill P-1 default).

Verified via WebFetch / WebSearch (2026-05-13):
- CEO Ahn Sung-woo quote on Home OS — verbatim from company newsroom
- Founding year (채널브리즈 11/2010), Zigbang web launch (03/2012), rename to 직방 (10/2015) — official `who-we-are` page
- 안성우 background (SNU Statistics, post-graduation rental search → discovered prevalent fake listings) — corroborated across multiple Korean business-press interviews
- Vision phrases "Beyond Home", "공간에서 경험까지", "Living Forward" — verbatim from official channels

Personas (§13) are fictional archetypes; explicit disclaimer in the section header.

Interpretive claims (e.g., "weight 400 is the signature", "the map is the negative space", "orange = brand / blue = action") are editorial readings of observed design choices and not directly sourced statements.

---

## Files produced

- `web/references/zigbang/DESIGN.md` — 15 sections (1-9 design system + 10-15 philosophy), `omd: 0.1` frontmatter
- `web/references/zigbang/_research.md` — this file
- `web/references/zigbang/_promo.json` — promo metadata for catalog

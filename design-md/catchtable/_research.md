# CatchTable / 캐치테이블 — research notes

**Verified**: 2026-05-15
**Operator**: 주식회사 와드 (WAD Inc.) — 대표 용태순 — Bundang, Gyeonggi
**Service URL**: https://www.catchtable.co.kr → 302 → https://app.catchtable.co.kr/
**Category**: consumer-tech / restaurant reservation (외식 예약)
**Title-tag positioning** (referenced for §11 narrative only, **not** adopted as design copy): "캐치테이블 | 즐거운 미식 생활의 시작"

## 5-tier source map

| Tier | Source | Result |
|---|---|---|
| 1 — Official DS | `design.catchtable.co.kr` | DNS no-resolve (000) |
| 1 — Official DS | `tech.catchtable.co.kr` | DNS no-resolve (000) |
| 1 — Official DS | `www.catchtable.co.kr/brand` | 302 redirect to marketing root (no brand portal) |
| 1 — GitHub org | `github.com/catchtable` | 200 but only 3 public repos (`prerender-java`, `claude-hud`, `brand-review-tool`) — **zero** design-system / Storybook / tokens repo |
| 1 — Live production (authoritative) | CDP :9222 / `app.catchtable.co.kr/` | ✓ 145 `:root` CSS custom properties (vanilla-extract `_11bicz7*` namespace) + 35 element samples + 3000-element frequency table |
| 2 — Index aggregators | `getdesign.md/catchtable` | "No designs found for 'catchtable'" (verified 2026-05-15) |
| 2 — Index aggregators | `styles.refero.design/?q=catchtable` | no result cards (verified 2026-05-15) |
| 3 — Engineering blog | `medium.com/wcd-tech-blog` | 403 (private/removed); no public design article surfaced |
| 4 — Crunchbase / corp data | inferred via footer disclosure: 주식회사 와드 / 대표 용태순 / Seongnam-Bundang | retained for §11; founding-year & funding figures not verified this pass — flagged FILL-IN |
| 5 — IP-safe live capture | CDP raw + frequency analysis | ≥10 raw_samples retained in `.live-inspect-proof.json`; 145 root tokens reproduced as factual CSS custom property values under analytical fair-use |

## Tier-1 official DS result

**Authoritative NEGATIVE.** No public design-system site, no brand portal, no Storybook, no Figma Community kit, no `design-tokens` GitHub repo. The design system exists **only as the vanilla-extract token sheet compiled into production CSS** — accessible by runtime inspection. The 3 public repos on the GitHub org are unrelated (SSR prerender helper, a Claude Code plugin, an internal review tool).

## Token system discovered (vanilla-extract auto-hash)

Namespace `_11bicz7*` on `:root`. 145 vars covering:

- **Color**: 33 brand/ink/surface/semantic tokens — Primary `#FF3D00` (with soft `#FA8D6B`, tints `#FCF3F2`/`#FDF0EC`, pressed `#FC9086`), full ink ladder `#000/#222/#424242/#666/#5F5F5F/#9E9E9E/#B5B5B5/#8F8F8F/#AAAAAA`, surface family `#FFF/#F9F9F9/#F5F5F5/#F2F5F7/#F0F4FA`, support cool-ink `#1C2B36/#3E5463/#7A909E/#9FB1BD`, semantic info `#186ADE/#75B1FF/#F0F4FA`, success `#43C478/#077D55/#EBF7ED`, danger `#D91F11`, warning `#F5C518`, premium `#8F49DE`, alpha hairline `#00000014`.
- **Typography**: size scale 10/11/12/13/14/15/16/18/20/24px; weights 400/450/500/600/700; line-height **150% uniform** on every typography slot.
- **Radius**: 0px (default, 92% of elements) / 4px (thumbnails) / 8px (controls) / 12px (CTA pill) / 50% (avatars) / 999px (rare).
- **Elevation**: 5-tier shadow ladder (xs/sm/drop/md/lg) — defined in tokens but rarely fired on the home surface.

## IP guardrails

- Brand assets (logo, name, primary `#FF3D00`) referenced for inspiration only; no redistribution.
- Title-tag positioning ("즐거운 미식 생활의 시작") quoted **once** as factual brand-narrative evidence in §11; not adopted as headline copy.
- §10 Voice samples are **fresh analyst paraphrases** — no verbatim CatchTable / 와드 marketing copy reproduced.
- Token values reproduced as factual CSS custom property values under analytical fair-use.
- §11/§13 persona block uses public-disclosure data (operator, executive name, HQ city); founding-year / funding / employee headcount **flagged FILL-IN** pending Crunchbase / DART access.

## Flags

1. **Tier 1 official DS = authoritative NEGATIVE.** Consistent with the systemic KR consumer-tech publishing gap (Bunjang, KREAM, Inflearn, Wadiz, Upbit all logged similar in `2026-05-13-kr10.md` and `2026-05-14-kr10.md`).
2. **Mobile-first WebView shell on desktop** — design lessons port to mobile/native first; desktop is a porthole, not the design target.
3. **150% line-height uniform contract** — unusual discipline; document explicitly so ports don't break it.
4. **`#FF3D00` is single-CTA-only** (4 occurrences in 3000-element scan). Brand orange is *scarce*, not flooded. Document as a single-ink discipline.
5. **Hard-square chrome (0px radius on 92% of elements)** is the visual signature. Soft corners only on rasterised photos. Easy to over-round during port — call out.
6. **Editorial 캐치 매거진 module** signals brand positioning as taste-maker, not booking utility. Voice should match — curatorial, not transactional.
7. **A11y micro-text floor**: 10–11px caption/meta used for slide counters and legal disclaimers — below WCAG body floor; ports must elevate to ≥12px for translated text where stroke widths increase.
8. **List/search/restaurant-detail surfaces not inspected** this pass (desktop endpoint returns shell). UPDATE pass via mobile-emulated CDP recommended.

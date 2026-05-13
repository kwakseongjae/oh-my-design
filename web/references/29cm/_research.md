# 29CM — Research Trail

**Date:** 2026-05-13
**Mode:** CREATE (omd-add-reference)
**Operator:** Claude (Opus 4.7) via subagent

---

## Tier 1 — Live inspection (truth source)

| Source | Method | Date | Confidence |
|---|---|---|---|
| `https://www.29cm.co.kr/` | Playwright `getComputedStyle` on body, h1-h3, button, a, input, footer, header img, scroll-loaded editorial tiles | 2026-05-13 | high |

**Raw findings (verbatim from `getComputedStyle`):**

- `body.fontFamily` = `"Pretendard Variable", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
- `body.fontSize` = `16px`
- `body.color` = `rgb(0, 0, 0)` (`#000000`)
- `body.backgroundColor` = `rgba(0, 0, 0, 0)` (transparent → resolves to `#ffffff` page)
- Document title: `감도 깊은 취향 셀렉트샵 29CM`
- Logo: `https://asset.29cm.co.kr/next-contents/2023/06/08/3f8131682d124d16b336774ba51c4a3e_20230608162823.png` (alt="29CM", `h-16 min-h-16 w-60 min-w-60` Tailwind utility classes)
- Footer headings: `13px / 700 / rgb(0,0,0) / lh 18.2px` — `NOTICE`, `ABOUT US`, `MY ORDER`, `MY ACCOUNT`, `HELP`
- Footer container: `padding: 20px 48px 48px`, transparent bg
- Category nav (Special-Order, Showcase, PT, 29Magazine): `24px / 700 / rgb(0,0,0)` at h=29 transparent bg, 0px radius, 0 padding
- BEST nav item (active): `16px / 800 / rgb(0,0,0)` — same family, heavier weight = active state
- Inactive nav items (MY PAGE, Event, Lookbook, MY LIKE, SHOPPING BAG): `16px / 200 / rgb(0,0,0)` — weight 200 is the "inactive" register
- Ghost CTA "더보기": `bg rgb(255,255,255)`, `color rgb(0,0,0)`, `border 1px solid rgb(196,196,196)` = `#c4c4c4`, `radius 4px`, `padding 16px 16px 16px 20px`, `h=52`, `14px / 700`
- Inverted CTA "FAQ" / "1:1 문의": `bg rgb(0,0,0)`, `color rgb(255,255,255)`, `border 0`, `radius 2px`, `padding 4px 8px 4px 14px`, `h=31`, `15px / 400`
- Editorial card title (`나폴리의 산들바람`, `쿨링 시스템`): `22px / 700 / rgb(0,0,0) / lh 29.92px (1.36)`
- Editorial card body: `15px / 400 / rgb(0,0,0) / lh 22.5px (1.50)`
- Product name: `12px / 400 / rgb(0,0,0) / lh 16.32px (1.36)`
- Product price (e.g. `60,380`): `12px / 700 / rgb(0,0,0)` — same size as the name
- Modifier caption (`옵션비 별도`): `12px / 400 / rgba(93,93,93,0.64) / lh 16.32px`
- Category count badges (`63`, `175`, `6K`): `16px / 400 / rgba(93,93,93,0.64) / radius 4px / h=52` (tap target)

**Surfaces inspected:** home (`/`), with scroll to ~1500px to load lazy editorial tiles.
**Not inspected this run:** PDP, checkout, sign-up, mobile-app web view. These are noted in §8 as conventional extensions of the home register.

---

## Tier 2 — Cross-verification (silent on 29CM)

| Source | Method | Date | Result |
|---|---|---|---|
| `https://getdesign.md/29cm` | WebFetch | 2026-05-13 | **Empty** — "No designs found for '29cm'" |
| `https://styles.refero.design/?q=29cm` | Playwright navigate + DOM scrape of `/style/<uuid>` cards | 2026-05-13 | **No 29CM-tagged styles** — search returned 10 generic editorial/gallery references (Cosmos, Acme Cups, ARTU, etc.) unrelated to 29CM |

**Implication:** Tier 2 returned no 29CM-specific tokens. §4 component values are sourced exclusively from Tier 1 live inspection. This is documented in §4 footer.

---

## Tier 3 — Editorial / philosophy context

| Source | Method | Date | Use |
|---|---|---|---|
| `https://brunch.co.kr/@likenoothers/11` | WebFetch | 2026-05-13 | §11 brand book title, 4-part structure, "착하지만 엉뚱한" persona |
| `https://designcompass.org/2023/08/21/29cm-seongsu/` | WebFetch | 2026-05-13 | §11 wordmark dot motif, ruler-mark identity, "Guide to Better Choice" |
| `https://blog.asiance.com/2021/03/24/vertical-platform-for-mz-generation/` | WebSearch result citation | 2026-05-13 | §11 C=Commerce M=Media etymology, MZ vertical-platform context |
| WebSearch `"29CM" 디자인 시스템 브랜드 가이드 editorial` | WebSearch | 2026-05-13 | Discovery — surfaced Brunch + designcompass sources |
| WebSearch `"29CM" brand philosophy "guide to better life" editorial commerce` | WebSearch | 2026-05-13 | Discovery — confirmed "Guide to Better Choice" mission language |

NamuWiki entry (`https://en.namu.wiki/w/29CM`) returned HTTP 403 to WebFetch and was not used as a direct source. Founding-year and acquisition facts (2011 / Musinsa 2021) are treated as widely documented and noted as such in the §10-15 source comment block.

---

## Conflict matrix

| Field | Tier 1 (live) | Tier 2 (getdesign + refero) | Resolution |
|---|---|---|---|
| Primary font | `Pretendard Variable` | — (silent) | Tier 1 |
| Page bg / ink | `#ffffff` / `#000000` | — (silent) | Tier 1 |
| Primary CTA color | inverted black (`#000`/`#fff`) | — (silent) | Tier 1 |
| Ghost CTA border | `#c4c4c4` 1px | — (silent) | Tier 1 |
| Radius scale | 0 / 2 / 4 | — (silent) | Tier 1 |
| Editorial card title | 22px / 700 / lh 29.92 | — (silent) | Tier 1 |
| Product price weight | 12px / 700 (subordinate to image) | — (silent) | Tier 1 |
| Brand voice | editorial, magazine, `~요` endings | — (silent on tokens; philosophy from Tier 3) | Tier 1 + Tier 3 |

**Conflicts unresolved:** none. Tier 2 returned no tokens; Tier 1 is the sole authority and is recorded in §4 footer accordingly.

---

## Style-ref pick for §10-15 Philosophy

- Brand region: KR
- Style-ref base: `toss` (KR brand convention per skill spec) — voice/tone table, brand-narrative pattern, principles-with-UI-implications, fictional-persona disclaimer
- Tonal adjustments: editorial-magazine register (not fintech-trust register), `~요` endings as friendly-formal (not Toss's calm-fiduciary register), photography-as-decoration framing (not Toss's restraint-as-trust framing)

---

## Files produced

- `web/references/29cm/DESIGN.md` — 9-section spec + §10-15 OmD v0.1 philosophy layer (`omd: 0.1` frontmatter)
- `web/references/29cm/_research.md` — this file
- `web/references/29cm/_promo.json` — landing promo metadata

## Not done (out of scope this run)

- No SYNC step executed (README counts, hero copy, llms.txt, fingerprints) — caller instructed not to update README counts.
- No git commit (per user memory: never auto-commit).
- No PDP / checkout surface inspection — only home was inspected. UPDATE pass should add those surfaces.
- No `.verification.md` conflict matrix file (omitted — single-source from Tier 1 means matrix collapses; documented inline in this `_research.md` instead).

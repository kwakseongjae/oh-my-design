# Danawa provenance

Not part of the portable `DESIGN.md`. Source ledger, proof, unpromoted legacy claims, and disposition evidence for the T2-1 Wave 18 migration candidate. Canonical source remains `web/references/danawa/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | danawa |
| name | Danawa |
| display_name_kr | 다나와 |
| country | KR |
| category | ecommerce |
| homepage | https://www.danawa.com |
| primary_color | `#06b87f` |
| logo | favicon `https://www.google.com/s2/favicons?domain=danawa.com&sz=128` |
| verified | 2026-06-11 |
| added | 2026-06-11 |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-11 |
| components_harvested | true |

Token note: gateway green `#06b87f`; dominant catalog blue `#2070eb` with 1,122 foreground uses; price red `#ff3b3b`; near-black ladder; shadowless hairline layout.

## Sources and proof method

Inspected 2026-06-11 with Playwright `getComputedStyle`, Chromium headless at 1440×900.

| Source | Role / boundary |
|---|---|
| https://www.danawa.com | Homepage navigation, slogan, search, category trigger, colors |
| https://prod.danawa.com/list/?cate=112758 | Dense product rows, prices, badges, pagers, sort controls |
| https://www.danawa.com/corp/aboutus/about_us.html | Official mission context; no live token claim |
| https://getdesign.md/danawa | “No designs found”; no token |
| https://styles.refero.design/?q=danawa | Generic browse list; no Danawa entry |

External legacy narrative citations for founding, listing, acquisition, and rebrand context are preserved exactly, with the source’s own citation labels kept byte-exact; they are not live-style sources and none of them supplies a UI token:

| Source label (as written in §11) | URL |
|---|---|
| 나무위키 | https://namu.wiki/w/%EB%8B%A4%EB%82%98%EC%99%80 |
| 위키백과 | https://ko.wikipedia.org/wiki/%EB%8B%A4%EB%82%98%EC%99%80 |
| 전자신문 상장기업 분석 | https://m.etnews.com/20210514000188 |
| 머니투데이 | https://news.mt.co.kr/mtview.php?no=2022081709303888467 |
| 커넥트웨이브 보도 | https://connectwave.co.kr/pr_view.html?id=999313 |

The legacy footer source comment names the same set as corroboration for the founding, IPO, acquisition, and rebrand facts: “나무위키, 위키백과, 전자신문, 머니투데이, 커넥트웨이브 PR”.

## Token record

| Group | Exact source values |
|---|---|
| colors | primary `#06b87f`; link `#2070eb`; link-bulk `#0e68f0`; deep-blue `#0313aa`; price `#ff3b3b`; price-alt `#e53b38`; purple `#8b38e5`; nav-dark `#33373d`; ink `#000000`; ink-soft `#0f0f0f`; body `#333333`; muted `#555555`; muted-alt `#767676`; faint `#919191`; disabled `#d2d2d2`; canvas/on-primary `#ffffff`; surface `#f8f8f8`; surface-blue `#f7faff`; tint-blue `#e3f1fa`; rank-slate `#afbbc8`; hairline `#e0e0e0`; hairline-alt `#ebebeb` |
| typography | h1 `16 / 700 / 1.4`; list-title `18 / 400 / 1.4`; body `16 / 400 / 1.5`; product `12 / 400 / 1.4`; price `13 / 700 / 1.4`; nav `13 / 400 / 1.4`; caption `12 / 400 / 1.4` |
| spacing | xs `2`; sm `4`; base `8`; md `11`; lg `16`; xl `20`; xxl `29` |
| rounded | xs `2`; sm `4`; md `8`; pill `52`; full `9999` |
| shadow | none `none` |

### Alternate source renderings

- Explicit scale forms: `2px`, `4px`, `8px`, `11px`, `16px`, `20px`, `29px`, `52px`, `9999px`.
- Layout forms: `4px-15px`, `~1280px`, `<768px`, `768–1024px`, `1024–1280px`, `>1280px`.

## Component token record

| id / primitive | Exact source record |
|---|---|
| button-category / button | bg `#06b87f`; fg `#ffffff`; radius `8px 8px 0px 0px`; padding `11px 16px`; font `16px / 700 Pretendard`; category trigger |
| button-search / button | bg `#555555`; fg `#ffffff`; radius `2px`; font `12px / 400 Pretendard`; compact search submit |
| button-result-search / button | bg `#333333`; fg `#ffffff`; radius `2px`; font `12px / 400 Pretendard`; result search |
| button-pager / button | bg `#ffffff`; fg `#000000`; border `1px solid #e0e0e0`; radius `4px`; font `13px / 400 Pretendard`; carousel pager |
| search-input / input | bg `#ffffff`; fg `#0f0f0f`; radius `52px`; padding `10px 0 10px 20px`; font `18px / 400 Pretendard`; master search |
| badge-bulk / badge | bg `#f7faff`; fg `#0e68f0`; radius `4px`; font `12px / 700 Pretendard`; B2B pill |
| badge-rank / badge | bg `#afbbc8`; fg `#ffffff`; radius `0px`; font `12px / 700 Pretendard`; rank overlay |
| product-card / card | bg `#ffffff`; border `1px solid #e0e0e0`; radius `8px`; promo/event tile |
| list-row / listItem | fg `#333333`; border `1px solid #ebebeb`; font `12px / 400 Pretendard`; dense result row |
| nav-link / tab | fg `#333333`; font `13px / 400 Pretendard`; active `#2070eb`; utility nav |

## Raw proof samples

- body: Pretendard plus full captured fallback stack; `#000000`; 16px.
- title: “비교하고 잘 사는, 다나와 : 가격비교 사이트”; h1 16px / 700 / `#000000`; 100px height.
- master search sibling tuple: white / `#555555`; 52px; `8px 0px 10px 20px`; 16px; 44px. It remains distinct from source token/body 18px / `10px 0px 10px 20px` / `#0f0f0f`.
- category trigger: `#06b87f` / white; `8px 8px 0px 0px`; `11px 16px`; 16px / 700; 44px.
- category bar link: white; 14px / 700; `6px 0px 6px 8px`.
- utility navigation: `#333333`; 13px / 400.
- homepage background counts: white ×116; `#f8f8f8` ×21; `#33373d` ×13; `#e3f1fa` ×5; black ×4; `#06b87f` ×2; sidecar-only price flag `#fe3f3f` ×1.
- homepage text counts: black ×2044; `#555555` ×896; `#0f0f0f` ×411; `#ff3b3b` ×321; `#333333` ×292; `#e53b38` ×140; `#767676` ×129; `#8b38e5` ×38; `#2070eb` ×18.
- catalog title: “노트북 전체 : 다나와 가격비교”. Product link 12px / 400 / `#333333`; 30px high. Price 13px / 700 / `#0f0f0f`.
- bulk badge: `#f7faff` / `#0e68f0`; 4px; 12px / 700; 20px. Rank: `#afbbc8` / white; 0px; 12px / 700; 16px.
- result-filter 28px; compact search 24px; both 12px and 2px radius.
- pager sibling tuple: white / black; `#e0e0e0`; 4px; `13.3333px`; 20px.
- promo card sibling tuple: `1px solid rgb(241, 241, 241)` (`#f1f1f1`); 8px; 168px; no shadow. This remains distinct from the source token/body `#e0e0e0` border.
- catalog text counts: `#333333` ×5011; black ×4132; `#555555` ×2578; `#2070eb` ×1122; `#d2d2d2` ×1068; `#919191` ×870; `#0f0f0f` ×260; `#0e68f0` ×30; `#0313aa` ×11.
- `box-shadow: none` across all listed homepage/catalog samples.

## Unpromoted legacy claim ledger

### Layout and responsive recipes

- Wide fixed `~1280px` column; left filter rail + product list + promotion rail; stacked homepage modules.
- Mobile `<768px` at `m.danawa.com`: separate property, single-column modules, larger targets.
- Tablet `768–1024px`: filter rail becomes top sheet; fewer columns.
- Desktop `1024–1280px`: full three-zone layout. Wide `>1280px`: fixed centered column with gutters.
- Claimed collapse: modules stack; carousels swipe; three zones become one column/filter sheet; tables become card rows; product rows use full-row mobile targets; thumbnails preserve aspect/rank corner; promo cards retain 8px and hairline.

No multi-viewport or `m.danawa.com` proof appears in the sibling verification record, so these remain losslessly recorded but unpromoted.

### Overlay elevation

- Legacy values: `rgba(0,0,0,0.6)` / `rgba(0,0,0,0.7)` scrim behind modal/dropdown overlays and image lightboxes.
- The live proof confirms `box-shadow: none` on listed samples but contains no overlay raw tuple; scrims remain unpromoted.

### Motion recipes

- Durations: `motion-instant` 0ms; `motion-fast` 120ms; `motion-standard` 200ms; `motion-slow` 320ms.
- Curves: `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`; `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`; `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`.
- Legacy rules: no spring/bounce/overshoot; ~5s banner auto-rotation with standard/standard slides; instant pagers; fast/enter category tree; near-instant re-sort; under `prefers-reduced-motion: reduce`, stop rotation and collapse tokens to instant.

No component-specific B3 proof exists; no value is promoted.

### State recipes

The full legacy §14 guidance remains in portable Components with complete adjacent derived-editorial classification. It is not measured interaction evidence.

## Persona disposition

The three legacy named biographies are fictional by the source’s disclosure. Rulebook D2 requires deleting their names and biographies without provenance recopy. Only PC-build, household-deal, and bulk-buyer groups remain in portable Experience.

## Proof notes

- Canonical sibling proof used: `web/references/danawa/.verification.md`.
- Green, blue, red, Pretendard, and no-shadow claims have Tier 1 live support; Tier 2 is empty.
- Portable derived-editorial scope includes Scope source-role, narrative-versus-token, and historical-causality judgments; visual characterization; task formulations; audience grouping; distinctive-trait selection; semantic color role and usage boundaries; implementation principles and avoidances; shape-role separation; elevation and motion promotion boundaries; typography-family and fallback boundaries; asset authority and reuse boundaries; section-level state evidence and applicability judgments; every per-component applicability map; both non-interactive badge classifications; the card, row, and panel omission decisions; legacy state recipes; layout grouping and responsive-proof boundaries; voice, promotional-language direction, and avoidances; and governance judgments.
- Each of those portable scopes carries complete adjacent wording that classifies it as a derived editorial implementation inference and states that it is not Danawa-authored or a separately published UI specification.

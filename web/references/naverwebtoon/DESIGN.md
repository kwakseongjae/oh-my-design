---
id: naverwebtoon
name: Naver Webtoon
country: KR
category: consumer-tech
homepage: "https://comic.naver.com"
primary_color: "#00dc64"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=comic.naver.com&sz=128"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: product-home, url: "https://comic.naver.com/index", inspected: "2026-07-13" }
    - { id: webtoon-list, kind: product-browse, url: "https://comic.naver.com/webtoon", inspected: "2026-07-13" }
    - { id: best-challenge, kind: product-creator-discovery, url: "https://comic.naver.com/bestChallenge", inspected: "2026-07-13" }
  sources:
    - { id: home-capture, kind: product-surface, url: "https://comic.naver.com/index", captured: "2026-07-13" }
    - { id: webtoon-list-capture, kind: product-surface, url: "https://comic.naver.com/webtoon", captured: "2026-07-13" }
    - { id: best-challenge-capture, kind: product-surface, url: "https://comic.naver.com/bestChallenge", captured: "2026-07-13" }
    - { id: company-about, kind: official-doc, url: "https://about.webtoon.com/", captured: "2026-07-13" }
    - { id: company-brands, kind: official-doc, url: "https://about.webtoon.com/our-brands?company=naverWebtoon", captured: "2026-07-13" }
    - { id: font-design, kind: official-doc, url: "https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md", captured: "2026-07-13" }
    - { id: font-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &product { surface_id: home, source_id: home-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.surface": *product
    "tokens.colors.foreground": *product
    "tokens.colors.muted": *product
    "tokens.colors.tag-surface": *product
    "tokens.colors.on-primary": &webtoon { surface_id: webtoon-list, source_id: webtoon-list-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.family.ui": *product
    "tokens.typography.brand-title.size": *product
    "tokens.typography.brand-title.weight": *product
    "tokens.typography.brand-title.use": *product
    "tokens.typography.section-title.size": *product
    "tokens.typography.section-title.weight": *product
    "tokens.typography.section-title.lineHeight": *product
    "tokens.typography.section-title.use": *product
    "tokens.typography.tab.size": *product
    "tokens.typography.tab.weight": *product
    "tokens.typography.tab.lineHeight": *product
    "tokens.typography.tab.use": *product
    "tokens.typography.tag.size": *product
    "tokens.typography.tag.weight": *product
    "tokens.typography.tag.lineHeight": *product
    "tokens.typography.tag.use": *product
    "tokens.rounded.square": *product
    "tokens.rounded.compact": *product
    "tokens.components.content-tab.type": *product
    "tokens.components.content-tab.fg": *product
    "tokens.components.content-tab.font": *product
    "tokens.components.content-tab.states": *product
    "tokens.components.content-tab.use": *product
    "tokens.components.tag-link.type": *product
    "tokens.components.tag-link.bg": *product
    "tokens.components.tag-link.fg": *product
    "tokens.components.tag-link.radius": *product
    "tokens.components.tag-link.padding": *product
    "tokens.components.tag-link.font": *product
    "tokens.components.tag-link.use": *product
    "tokens.components.pagination.type": &challenge { surface_id: best-challenge, source_id: best-challenge-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.components.pagination.fg": *challenge
    "tokens.components.pagination.font": *challenge
    "tokens.components.pagination.states": *challenge
    "tokens.components.pagination.use": *challenge
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Selector-backed values are restricted to the supplied public comic.naver.com product capture. NAVER global-shell chrome and zero-use font declarations are not product-token substitutes."
  colors:
    primary: "#00dc64"
    surface: "#ffffff"
    foreground: "#000000"
    muted: "#666666"
    tag-surface: "#f6f6f6"
    on-primary: "#ffffff"
  typography:
    family: { ui: "Pretendard" }
    brand-title: { size: 24, weight: 700, use: "Product header wordmark area" }
    section-title: { size: 20, weight: 600, lineHeight: 1.05, use: "Product-home section heading" }
    tab: { size: 15, weight: 500, lineHeight: 1.40, use: "Product content tab" }
    tag: { size: 14, weight: 500, lineHeight: 2.14, use: "Product-home tag link" }
  rounded: { square: 0, compact: 4 }
  components:
    content-tab: { type: tab, fg: "#00dc64", font: "15px / 500 Pretendard", states: "unselected #666666; selected #00dc64 via captured tab interaction", use: "Product content tabs, selectors home::[data-omd-capture=16] and home::[data-omd-capture=17]" }
    tag-link: { type: badge, bg: "#f6f6f6", fg: "#666666", radius: "4px", padding: "0px 10px", font: "14px / 500 Pretendard", use: "Product-home tag link, selector home::[data-omd-capture=64]" }
    pagination: { type: button, fg: "#00dc64", font: "14px / 500 Pretendard", states: "static disabled previous control observed separately with #000000; no general disabled rule", use: "Best Challenge selected page, selector surface-3::[data-omd-capture=133]" }
  components_harvested: true
---

# Design System Inspiration of Naver Webtoon (네이버웹툰)

## 1. Visual Theme & Atmosphere

NAVER WEBTOON is WEBTOON Entertainment's Korean webcomic platform. The company describes it as Korea's largest webcomic platform, launched in 2005 to let both emerging and established creators build an audience and earn from webcomics; its BEST CHALLENGE route is the self-publishing path for up-and-coming creators. In the supplied public capture, that creator-and-reader service is expressed with a compact white product shell, black text, a bright green creator entry, and image/content-led browsing rather than a marketing campaign system.

The captured product surfaces share a short, practical visual vocabulary: white `#FFFFFF`, black `#000000`, muted `#666666`, pale tag fills `#F6F6F6`, and green `#00DC64` on a creator entry, selected tabs, selected pagination, and a browse heading. This is a record of the current captured routes—not a claim that every NAVER, WEBTOON Entertainment, mobile, reader, payment, or logged-in surface follows the same contract. NAVER account/service utility chrome appears in the artifact as a separate inherited shell and is not promoted into these product tokens.

## 2. Color Palette & Roles

- **Product green** (`#00DC64`): Observed on the creator-entry button, selected content tabs, selected pagination, and a weekday browse heading.
- **Surface white** (`#FFFFFF`): Observed header-search background and the text on the captured green weekday heading.
- **Foreground black** (`#000000`): Observed search text, product headings, and creator-entry text.
- **Muted gray** (`#666666`): Observed unselected content-tab text and tag-link text.
- **Tag surface** (`#F6F6F6`): Observed tag-link background on the product home.

No hover color, error color, dark reader surface, shadow ladder, or universal brand palette is promoted because it was not established by the supplied product capture.

## 3. Typography Rules

### Font evidence classes

- **Live product computed use:** `Pretendard` is the computed family on 1,371 captured elements across the three product routes. The collector reports a high-confidence loaded FontFaceSet match, so it is the sole `tokens.typography.family.ui` family.
- **Declared-only font asset:** `Pretendard Variable` has 92 captured `@font-face` source URLs but zero visible computed uses. It remains a declared asset, not a substituted UI-family token.
- **Declared-only faces:** `hind`, `NanumBarunGothic`, `NanumSquare`, and `Volte` have zero visible uses in this artifact. They remain declared-only.
- **Unresolved shell family:** `나눔고딕` occurs in 12 global NAVER utility-shell observations but has no matching loaded FontFace in the artifact. It remains unresolved and is excluded from the product family token.
- **Upstream asset and licence:** Pretendard's upstream README describes its cross-platform, multilingual family and variable distribution. Its upstream LICENSE is SIL Open Font License 1.1. These sources explain the font asset; the product-use conclusion comes from computed use plus the loaded FontFaceSet match above.

### Observed hierarchy

| Role | Size | Weight | Line height | Captured use |
|---|---:|---:|---:|---|
| Header wordmark area | 24px | 700 | normal | `home::h1` |
| Section title | 20px | 600 | 21px | `ComponentHead__title` on product home |
| Content tab | 15px | 500 | 21px | selected and unselected `ComponentHead__button_tab` |
| Tag link | 14px | 500 | 30px | `TagGroup__tag` on product home |

## 4. Component Stylings

### Header search

**Default**
- Background: `#FFFFFF`
- Text: `#000000`
- Radius: `0px`
- Padding: `0px 65px 0px 10px`
- Font: `14px / 400 Pretendard`
- Use: Product-home header search input; `home::[data-omd-capture="4"]`.

### Creator entry

**Default**
- Background: `#00DC64`
- Text: `#000000`
- Radius: `4px`
- Padding: `11px 33px`
- Font: `12px / 400 Pretendard`
- Use: Product global-navigation creator entry; `home::[data-omd-capture="14"]`.

### Content tab

**Default**
- Text: `#666666`
- Font: `15px / 500 Pretendard`
- Use: Unselected product content tab; `home::[data-omd-capture="16"]`.
- Selected: Text `#00DC64`; observed at `home::[data-omd-capture="17"]` and in the captured tab interaction.

### Tag link

**Default**
- Background: `#F6F6F6`
- Text: `#666666`
- Radius: `4px`
- Padding: `0px 10px`
- Font: `14px / 500 Pretendard`
- Use: Product-home tag link; `home::[data-omd-capture="64"]`.

The same class also appears at 16px/500/37px on the home route. That is an observed route-local size record, not a generalized size scale.

### Pagination

**Selected page**
- Text: `#00DC64`
- Font: `14px / 500 Pretendard`
- Use: Best Challenge selected page; `surface-3::[data-omd-capture="133"]`.
- Disabled: A disabled previous control is statically observed at `surface-3::[data-omd-capture="132"]` with `#000000`; no reusable disabled treatment is inferred from that single observation.

Only tab selection has interaction provenance in the supplied bundle (`interactionCount: 7`). No hover, pressed, focus, menu, dialog, error, toast, responsive, card, thumbnail, reading-viewer, or checkout variant is asserted.

---
**Verified:** 2026-07-13
**Tier 1 sources:** `https://comic.naver.com/index` (product home), `https://comic.naver.com/webtoon` (product browse), `https://comic.naver.com/bestChallenge` (product creator discovery), `https://about.webtoon.com/` and `https://about.webtoon.com/our-brands?company=naverWebtoon` (official company and service context), `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md` (upstream font distribution/design), `https://github.com/orioncactus/pretendard/blob/main/LICENSE` (upstream font licence)
**Tier 2 sources:** `https://getdesign.md/naverwebtoon` (attempted; built-in web open safe-open failure and no search record), `https://styles.refero.design/?q=naver%20webtoon` (attempted; built-in web open safe-open failure and no search record)
**Conflicts unresolved:** none

The legacy prose-derived token sheet, hover/pressed/focus treatments, reader and payment states, logo-color assertions, shadow ladder, universal spacing/radius rules, and unobserved component variants were removed because the supplied 2026 capture does not substantiate them.

## 5. Layout Principles

The capture establishes a 1440×900 view of three public product routes, not a responsive layout system. Observed geometry includes a 35px header search input, a 39px creator entry, 21px content tabs, 30px and 37px tag links, and a 45px green weekday heading. It does not establish breakpoints, a reusable grid, poster aspect ratios, sticky behavior, or reader layout rules.

## 6. Depth & Elevation

The documented search, creator entry, tabs, tags, weekday heading, and pagination samples all report `box-shadow: none`. No elevation token is promoted.

## 7. Do's and Don'ts

### Do

- Reuse only the selector-backed white, black, gray, and green treatments documented above when recreating these specific public-route patterns.
- Preserve the selected/unselected tab color split only in contexts with the captured tab semantics.
- Keep `Pretendard` as the product UI family only where a compatible loaded-font path is available.

### Don't

- Don't treat the inherited NAVER utility shell as a NAVER WEBTOON product-token source.
- Don't substitute `Pretendard Variable`, `NanumSquare`, or another declared font for the verified computed `Pretendard` family.
- Don't infer card, reader, payment, hover, focus, error, or responsive contracts from this three-route capture.

## 8. Responsive Behavior

No responsive viewport comparison was supplied. The reference makes no breakpoint, touch-target, image-ratio, or mobile-reader assertion.

## 9. Agent Prompt Guide

For a captured content-tab pattern, use `15px / 500 Pretendard`, `#666666` unselected text, and `#00DC64` selected text; retain the state only where tab-selection behavior exists. For the captured header search, use a white, square-cornered 35px field with `0px 65px 0px 10px` padding and `14px / 400 Pretendard`. Do not extend these snippets into a generic WEBTOON app system.

## 10. Voice & Tone

The supplied evidence contains Korean product labels but no official voice guide or verified product-copy inventory. No reusable tone rule, do/don't table, or sample copy is asserted.

## 11. Brand Narrative

WEBTOON Entertainment describes NAVER WEBTOON as Korea's largest webcomic platform. Its official brands page says it launched in 2005 and enables new and established creators to build an audience and make money from webcomics; it distinguishes BEST CHALLENGE as the self-publishing path for emerging creators. The official company site frames the wider organization as a story-oriented entertainment service and a platform where creators and users discover, create, and share stories. These are service and company facts, not proof of a visual or interaction system beyond the captured routes.

## 12. Principles

1. **Creator participation.** Official material says the service gives new and established creators ways to build an audience and make money. *UI implication:* the captured global product navigation includes a green creator entry; no broader creator-flow pattern is inferred.
2. **Discovery, creation, and sharing.** WEBTOON Entertainment describes its platform around those three participant activities. *UI implication:* no unmeasured navigation, recommendation, or sharing pattern is prescribed here.
3. **Emerging-creator publishing.** The official brands page identifies BEST CHALLENGE as the self-publishing path for up-and-coming creators. *UI implication:* the captured Best Challenge route is retained as a distinct product surface rather than generalized to reader browsing.

## 13. Personas

This reference does not invent demographic personas. The official context identifies three stakeholder groups: readers/users who discover stories, new and established webcomic creators who build audiences and monetize work, and emerging self-publishers using BEST CHALLENGE. No motivations, demographics, or task flows beyond those official descriptions are asserted.

## 14. States

| State | Captured treatment |
|---|---|
| Content tab, unselected | `#666666`, 15px/500, `home::[data-omd-capture="16"]` |
| Content tab, selected | `#00DC64`, 15px/500, `home::[data-omd-capture="17"]`; tab interaction provenance exists |
| Pagination, selected page | `#00DC64`, 14px/500, `surface-3::[data-omd-capture="133"]` |
| Pagination, disabled previous | Statically disabled with `#000000`, 14px/500, `surface-3::[data-omd-capture="132"]`; not a generalized disabled rule |

No loading, empty, success, error, toast, skeleton, focus, hover, or pressed state was captured for promotion.

## 15. Motion & Easing

No duration, easing, animation, or reduced-motion behavior was captured. Tab selection is the only observed interaction kind; it establishes state provenance, not a motion token.

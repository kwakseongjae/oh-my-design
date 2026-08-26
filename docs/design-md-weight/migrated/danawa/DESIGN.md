# Danawa Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

The source-role, narrative-versus-token, and historical-causality judgments in this Scope are derived editorial implementation inferences from the verified records; they are not Danawa-authored or a separately published UI specification.

Danawa (다나와) is a Korean price-comparison commerce platform. This reconstruction covers the first-party homepage and the dense notebook catalog/result surface inspected on 2026-06-11. The official company page supplies the mission “양질의 쇼핑정보를 제공하여 소비자의 구매결정을 돕고”; getdesign and Refero supplied no Danawa values.

The source records the “다 나와” name reading (“everything’s here / come on out”), Danawa’s April 2000 founding by 성장현 (Sung Jang-hyun), its origin in a Yongsan Electronics Market (용산전자상가) PC-component price database, KOSDAQ listing in 2011, a roughly ₩400B Koreacenter acquisition in 2021, and the later ConnectWave (커넥트웨이브) corporate rebrand. It also attributes the company’s durability to 소비자의 신뢰 and records price histories measured in billions of entries. Those historical statements include third-party corroboration and remain narrative context rather than live interface-token proof.

The following visual characterization is a derived editorial implementation inference from the verified surfaces; it is not Danawa-authored or a separately published UI specification. The interface is a dense information tool: a white canvas, tight Pretendard typography, near-black text ladder, role-rationed green/blue/red accents, hairline borders, and tinted zones. A 52px master search pill sits above sharp 2px/4px utilities and 8px content cards; density and comparison take priority over decorative depth.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

These task formulations are derived editorial implementation inferences from the verified surface purposes; they are not Danawa-authored or a separately published UI specification.

- Search and compare product prices, sellers, specifications, purchase counts, and ranks.
- Navigate the full category tree and refine or paginate dense catalog results.
- Find bulk-purchase options and promotional or ranked product information.
<!-- design-md:claim-end -->

### Audience

This audience grouping is a derived editorial implementation inference from the source-backed user references; it is not Danawa-authored or a separately published UI specification.

Source-backed groups are PC-build enthusiasts, household deal seekers, and B2B bulk buyers. Named biographies in the legacy persona section are fictional and are not retained.

### Distinctive traits

Selecting and naming the following traits as distinctive is a derived editorial implementation inference from the verified surfaces; it is not Danawa-authored or a separately published UI specification.

- One green gateway: `#06b87f` is reserved for the master “전체 카테고리” control.
- Workhorse link/action blue: `#2070eb`, observed 1,122 times on the catalog surface.
- Commerce signals: `#ff3b3b` price/deal red, `#e53b38` sale red, `#0e68f0` bulk blue, `#afbbc8` rank slate, and bounded `#8b38e5` promotion purple.
- Pretendard throughout, with 12–13px dense product/meta roles and 16–18px search/heading roles.
- Shadowless verified surfaces separated by `#e0e0e0` / `#ebebeb` hairlines and `#f8f8f8` / `#f7faff` tints.

### Derived implementation principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Danawa-authored or a separately published UI specification.

- Keep price, seller, specifications, counts, and rank aligned for fast comparison.
- Use compact 12–13px workhorse roles and restrained spacing where the dense catalog requires them.
- Reserve green for the category gateway, blue for everyday interaction, and red for price/deal meaning.
- Carry hierarchy with one Pretendard family, size, and 400/700 weight rather than another display face.
- Use hairlines and tinted zones instead of shadows.

### Avoid

The following avoidances are derived editorial implementation inferences from the verified surfaces; they are not Danawa-authored or a separately published UI specification.

- Do not use green for general interaction or red as decoration.
- Do not bold every product title; keep 700 for source-backed price, rank, badge, and category-gateway roles.
- Do not heavily round compact utility controls or add ornamental whitespace that erases information density.
- Do not add drop shadows to the verified homepage/catalog components.
- Do not promote legacy responsive, overlay, state, or motion recipes without the missing interaction and viewport proof.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The semantic role names and usage boundaries in this table are derived editorial implementation inferences from the verified surface records; they are not Danawa-authored or a separately published UI specification.

| Role | Value | Verified use |
|---|---|---|
| Category gateway | `#06b87f` | Master “전체 카테고리” button only |
| Link / interaction | `#2070eb` | Links, sort controls, active filters, active navigation |
| Bulk-purchase blue | `#0e68f0` | “대량구매” badge text |
| Deep active blue | `#0313aa` | Strong selected/emphasized link occurrences |
| Price / deal | `#ff3b3b` | Price and deal emphasis |
| Sale emphasis | `#e53b38` | Alternate sale/price-drop emphasis |
| Promotion | `#8b38e5` | Bounded promotional callouts |
| Dark utility chrome | `#33373d` | Dark category/utility bands |
| Ink | `#000000` | Dense body and product detail copy |
| Primary emphasis | `#0f0f0f` | Prices and strong emphasis |
| Body | `#333333` | Product titles and standard list copy |
| Muted | `#555555` | Secondary labels, compact button fill, placeholder text |
| Muted alternate | `#767676` | Tertiary metadata |
| Faint | `#919191` | Quiet captions and inactive-adjacent labels |
| Disabled | `#d2d2d2` | Disabled controls and pager states |
| Canvas / on-color | `#ffffff` | Page, cards, search, and inverse text |
| Warm surface | `#f8f8f8` | Segmenting panels and skeleton guidance |
| Blue surface | `#f7faff` | Bulk badge and cool info panels |
| Blue tint | `#e3f1fa` | Highlighted information zones |
| Rank slate | `#afbbc8` | Popularity overlay |
| Standard hairline | `#e0e0e0` | Buttons, pagers, cards |
| Row hairline | `#ebebeb` | Dense list dividers |

### Spacing

Source scale: `xs: 2`, `sm: 4`, `base: 8`, `md: 11`, `lg: 16`, `xl: 20`, `xxl: 29`. The legacy layout also records `11px 16px`, `10px 20px`, `6px 8px`, and asymmetric `4px–15px` paddings. Exact component padding remains attached to each component.

### Shape

The shape-role labels and separation below are derived editorial implementation inferences from the verified component uses; they are not Danawa-authored or a separately published UI specification.

- Extra-small utility: 2
- Small utility/badge: 4
- Content: 8
- Master search pill: 52
- Full: 9999

Component declarations preserve the explicit `2px`, `4px`, `8px`, `52px`, and `0px` forms. The source’s occasional full/circular role remains separate from the master search radius.

### Elevation

The grouping and promotion boundary below are derived editorial implementation inferences from the verified flat treatments and unresolved overlay evidence; they are not Danawa-authored or a separately published UI specification.

Live proof records `box-shadow: none` across hero, navigation, headings, search, category button, product rows, promo cards, and pagers. Captured elements use `#e0e0e0` / `#ebebeb` hairlines and `#f8f8f8` / `#f7faff` surfaces. Legacy semi-transparent overlay scrims lack a matching raw proof tuple and remain in provenance rather than becoming an elevation token.

### Motion

The motion-promotion decision below is a derived editorial implementation inference from the recorded proof boundary; it is not Danawa-authored or a separately published UI specification.

The live proof contains static computed styles but no component-specific transition-property, animation-name, duration, easing, or reduced-motion observation. Legacy motion values are not promoted as Danawa tokens.

A motion value may be promoted only after component-specific computed before/after observation establishes all five evidence kinds: transition properties, animation name, duration, easing, and reduced-motion behavior. Until then, motion values remain absent.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Family

The family-role and fallback-boundary judgments below are derived editorial implementation inferences from the verified typography records; they are not Danawa-authored or a separately published UI specification.

- Primary: `Pretendard`.
- Captured fallback stack: `-apple-system`, `system-ui`, `Malgun Gothic`, `맑은 고딕`, `돋움`, `dotum`, `굴림`, `gulim`, `Arial`, `Apple SD Gothic Neo`.
- Fallbacks are runtime fallbacks, not additional Danawa brand families.

### Type roles

| Role | Size | Weight | Line height | Use |
|---|---:|---:|---:|---|
| Heading / wordmark | 16px | 700 | `1.4` unitless | “비교하고 잘 사는, 다나와”, section heads |
| Catalog search token | 18px | 400 | `1.4` unitless | Source token for result-page search field |
| Body | 16px | 400 | `1.5` unitless; legacy hierarchy also says `normal` | Reading text and category links |
| Product title | 12px | 400 | `1.4` unitless | Dense product-name links |
| Price | 13px | 700 | `1.4` unitless | Bold price figure |
| Navigation / utility | 13px | 400 | `1.4` unitless | 로그인 / 관심 / 최근 |
| Caption / meta | 12px | 400 | `1.4` unitless | Purchase counts, badges, metadata |
| Category-bar item | 14px | 700 | not generalized | White-on-dark category link |

The sibling proof observes a 16px master-search value while the source token/component body records 18px; both records remain separate, with the sidecar-only tuple in provenance.

### Assets

The asset-authority and reuse boundaries below are derived editorial implementation inferences from the verified asset records; they are not Danawa-authored or a separately published UI specification.

- The catalog favicon is a Google s2 identity pointer. Its exact URL remains in provenance and is not promoted as an official distributed logo or licence.
- Product thumbnails and promotion tiles are first-party catalog content in the captured surface; the source establishes layout behavior, not reuse rights.

<!-- design-md:section components-states -->
## 4. Components & States

### State evidence boundary

The evidence-boundary and applicability judgments in this section are derived editorial implementation inferences from the verified component roles; they are not Danawa-authored or a separately published UI specification.

The source verifies default component geometry and a named active navigation color. It does not provide a comprehensive interaction capture. Applicability follows component meaning; absence of a capture is not a `not-applicable` reason. Unmeasured visual treatments remain absent, and state coverage is not claimed complete.

The applicability judgments below are derived editorial implementation inferences from the verified component roles; they are not Danawa-authored or a separately published UI specification. They classify Core §4.4 meaning only and do not promote an unmeasured visual treatment.

### Category master trigger

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Danawa-authored or a separately published UI specification.

- Primitive type: button
- Kind: interactive
- Background: `#06b87f`; text: `#ffffff`
- Radius: `8px 8px 0px 0px`; padding: `11px 16px`; height: 44px
- Font: `16px / 700 / Pretendard`
- Use: master “전체 카테고리” menu trigger

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured category-trigger treatment |
| hover | applicable | Pointer-web menu trigger; visual treatment omitted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | Category trigger can be unavailable; visual treatment omitted |
| loading | not-applicable | Menu expansion does not carry data-loading presentation |
| error | not-applicable | Menu expansion does not present validation failure |
| success | not-applicable | Menu expansion does not present completion feedback |

### In-result search submit

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Danawa-authored or a separately published UI specification.

- Primitive type: button
- Kind: interactive
- Background: `#555555`; text: `#ffffff`; radius: 2px; height: 24px
- Font: `12px / 400 / Pretendard`
- Use: compact catalog search submit

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured submit treatment |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | Search submit can be unavailable; visual treatment omitted |
| loading | applicable | Result search can be pending; visual treatment omitted |
| error | applicable | Result search can fail; visual treatment omitted |
| success | applicable | Result search can complete; visual treatment omitted |

### Result-filter search button

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Danawa-authored or a separately published UI specification.

- Primitive type: button
- Kind: interactive
- Background: `#333333`; text: `#ffffff`; radius: 2px; height: 28px
- Font: `12px / 400 / Pretendard`
- Use: “결과 내 검색”

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured result-filter treatment |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | Filter submit can be unavailable; visual treatment omitted |
| loading | applicable | Filtered result fetch can be pending; visual treatment omitted |
| error | applicable | Filtered result fetch can fail; visual treatment omitted |
| success | applicable | Filtered result fetch can complete; visual treatment omitted |

### Pager control

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Danawa-authored or a separately published UI specification.

- Primitive type: button
- Kind: interactive
- Background: `#ffffff`; text: `#000000`; border: `1px solid #e0e0e0`
- Radius: 4px; height: 20px
- Font: source token `13px / 400 / Pretendard`; the distinct sibling raw size stays in provenance
- Use: “이전” / “다음” carousel and list pager

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured pager treatment |
| hover | applicable | Pointer-web pager; visual treatment omitted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | First/last-page pager can be unavailable; visual treatment omitted |
| loading | applicable | Page-result fetch can be pending; visual treatment omitted |
| error | applicable | Page-result fetch can fail; visual treatment omitted |
| success | applicable | Page-result fetch can complete; visual treatment omitted |

### Master search input

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Danawa-authored or a separately published UI specification.

- Primitive type: input
- Kind: interactive
- Background: `#ffffff`; text token: `#0f0f0f`
- Radius: 52px; padding: `10px 0px 10px 20px`; height: 44px
- Font: `18px / 400 / Pretendard`
- Use: global search pill

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source token/component default treatment |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive input; visual treatment omitted |
| disabled | applicable | Search input can be unavailable; visual treatment omitted |
| loading | applicable | Search suggestions/results can be pending; visual treatment omitted |
| error | applicable | Search query can be invalid or fail; visual treatment omitted |
| success | applicable | Search query can resolve; visual treatment omitted |

### Bulk-purchase badge

Classifying this badge as non-interactive is a derived editorial implementation inference from its verified information-label role; it is not Danawa-authored or a separately published UI specification.

- Primitive type: badge
- Kind: non-interactive
- Reason: B2B information label, not a control
- Background: `#f7faff`; text: `#0e68f0`; radius: 4px; height: 20px
- Font: `12px / 700 / Pretendard`; use: “대량구매”

### Rank overlay badge

Classifying this badge as non-interactive is a derived editorial implementation inference from its verified rank-label role; it is not Danawa-authored or a separately published UI specification.

- Primitive type: badge
- Kind: non-interactive
- Reason: popularity-rank label over a thumbnail, not a control
- Background: `#afbbc8`; text: `#ffffff`; radius: 0px; height: 16px
- Font: `12px / 700 / Pretendard`; use: “인기 순위 N”

### Promo / event card

The decision to omit an interaction kind and applicability map is a derived editorial implementation inference from the unresolved interaction evidence; it is not Danawa-authored or a separately published UI specification.

- Primitive type: card
- Interaction kind / applicability map: omitted; card interactivity is not established by the token.
- Background: `#ffffff`; border token: `1px solid #e0e0e0`; radius: 8px; height: 168px
- Use: promotion or brand-event tile; hairline only, no shadow

### Product result row

The decision to omit an interaction kind and applicability map is a derived editorial implementation inference from the unresolved row-level interaction evidence; it is not Danawa-authored or a separately published UI specification.

- Primitive type: listItem
- Interaction kind / applicability map: omitted; the row contains product links but the row primitive itself is not established as a control.
- Text: `#333333`; border: `1px solid #ebebeb`
- Font: `12px / 400 / Pretendard`
- Child roles: price `13px / 700 / #0f0f0f`; metadata `12px / #767676`

### Utility navigation item

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Danawa-authored or a separately published UI specification.

- Primitive type: tab
- Kind: interactive
- Text: `#333333`; named active text: `#2070eb`
- Font: `13px / 400 / Pretendard`
- Use: 최근 / 관심 / 로그인

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured navigation treatment |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive tab; visual treatment omitted |
| disabled | applicable | Utility tab can be unavailable; visual treatment omitted |
| loading | not-applicable | Navigation selection does not carry loading presentation |
| error | not-applicable | Navigation selection does not present validation failure |
| success | not-applicable | Navigation selection does not present completion feedback |

### Surface panel

The decision to omit a primitive type, interaction kind, and applicability map is a derived editorial implementation inference from the unresolved primitive evidence; it is not Danawa-authored or a separately published UI specification.

- Primitive type / interaction kind: omitted; the source describes a segmenting container but supplies no component primitive token.
- Background: `#f8f8f8`; radius: 8px
- Use: alternating content panel

### Legacy derived state guidance

These state recipes are a derived editorial implementation inference from the verified surfaces; they are not Danawa-authored or a separately published UI specification. No measured interaction evidence is assigned to them.

| State | Legacy guidance retained without promotion to observed treatment |
|---|---|
| Empty search | White canvas; 13px `#333333` “검색 결과가 없습니다.” plus a filter-broadening suggestion; no illustration. |
| Empty saved items | One `#767676` line and a `#2070eb` category-browse prompt. |
| Loading first paint | Final-size hairline skeleton rows in `#f8f8f8`; price bars match bold-13px width; no elaborate shimmer. |
| Loading re-sort | Existing rows remain; `#2070eb` progress appears near sort tabs. |
| Price-fetch error | Row-level `#ff3b3b` “가격 정보를 불러오지 못했습니다.” plus retry. |
| Search/form error | Message below the input in `#e53b38`, describing the correction. |
| Saved/cart success | Brief inline confirmation; row reflects saved state; `#2070eb` check and no celebratory toast. |
| Skeleton | Final-size `#f8f8f8` hairline blocks; price skeleton width remains bounded. |
| Disabled | `#d2d2d2` border/text and `#919191` pager arrows; surface and label dim together. |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The presentation grouping and responsive-proof boundaries below are derived editorial implementation inferences from the verified desktop surfaces; they are not Danawa-authored or a separately published UI specification.

- Homepage modules stack category tree, deal carousels, ranking lists, and news into hairline-bounded horizontal bands.
- Top utility navigation sits in a sticky white, hairline-separated, shadowless header; category-bar items use white 14px / 700 text on dark chrome.
- Catalog results use dense rows, aligned prices, badges, navigation controls, tinted surfaces, and no shadow.
- Source spacing includes 2px and 4px values below the 8px base.
- Captured targets include 44px category and search controls, 24px / 28px search utilities, 20px pager and bulk badge, 16px rank badge, and 168px promotion card.
- Live proof uses 1440×900. The legacy fixed `~1280px` column, three-zone layout, `<768px`, `768–1024px`, `1024–1280px`, `>1280px`, separate-mobile-property, and collapse rules lack multi-viewport proof and remain in provenance.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The voice direction, promotional-language direction, and avoidances below are derived editorial implementation inferences from verified first-party language; they are not Danawa-authored or a separately published UI specification.

Danawa’s observed voice is practical, terse, and number-forward. The slogan “비교하고 잘 사는, 다나와” centers informed purchasing. Search and catalog labels use direct task language such as “결과 내 검색”, “최저가”, and “대량구매”; product rows foreground values such as “649,000원”, “무료”, and “구매 930+” alongside rank; ranking labels are authoritative and data-backed — “인기 순위 1”, “다나와 추천”; the official company phrase emphasizes quality shopping information that helps a consumer decide.

Promotional language may be modestly punchy when tied to a concrete value, such as “삼성전자 20% 환급” or “생필품 물가 상승 방어전”. Avoid luxury or aspirational framing (“프리미엄 라이프스타일”), empty superlatives without a number (“최고의 쇼핑경험” with nothing to back it), hype emoji in price UI, hedging that hides actual price or seller, or copy that buries comparison.

<!-- design-md:section governance -->
## 7. Governance

The governance judgments in this section are derived editorial implementation inferences of this reconstruction; they are not Danawa-authored or a separately published UI specification.

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
### Application priority

1. Direct user instructions for the requested scope.
2. Repository facts.
3. This system contract.
4. Reference inspiration.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
### Unknowns

Omit only the smallest unresolved value or group. Do not replace it with a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
### Changes

Record, review, and validate changes before adoption.
<!-- design-md:claim-end -->

### Named gaps

- measured mobile/tablet/wide layouts, separate mobile-property behavior, filter sheet, and alternate product-row composition
- verified overlay/dialog/lightbox scrim and elevation behavior
- component-specific visual treatments beyond default and the named active navigation color
- verified transition properties, animation names, durations, easings, carousel timing, and reduced-motion behavior
- official logo/thumbnail/promotion-asset reuse authority

# Fitpet (핏펫) Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Fitpet (핏펫) is a Korean pet-healthcare and pet-commerce brand. This contract covers the two first-party web surfaces the source inspected live: the corporate/brand flagship at `fitpet.co.kr` and the commerce mall at `fitpetmall.com`, including the mall's search page. Values stay attached to the surface that established them. The source records the two surfaces as typographically and tonally distinct — Noto Sans KR with Poppins latin on the flagship, Pretendard on the mall — while both sit on a bright `#ffffff` canvas softened by the same cool-grey `#f4f7fa` tint.

Reading those two surfaces as one identity held together by a single saturated brand blue, and reading the flagship/mall split as a deliberate division of labour rather than an incidental difference between two builds, is a derived editorial implementation inference from the verified surfaces; it is not Fitpet-authored or a separately published UI specification.

Brand narrative recorded by the source, kept separate from the interface evidence above: Fitpet was founded in **2017** around the premise that caring for a companion animal's health should be as easy as checking your own. Its best-known product is an at-home health-check experience, and the homepage's central promise is "반려동물의 건강을 집에서 1분만에 확인" (check your pet's health at home in one minute). From that root the brand grew into a "건강한 반려생활" (healthy companion life) platform: Fitpet Mall (`fitpetmall.com`) curates food, treats, and supplies chosen against health criteria ("엄격한 기준으로 고른 제품" — products chosen by strict standards), and a hospital-finding and booking flow closes the loop ("좋은 병원 찾고 진료 예약까지" — find a good hospital and book the consultation). The source marks the 2017 founding as widely-documented public knowledge rather than a quotation from a Fitpet statement, and takes the mission and positioning phrasing from the live homepage and mall. This narrative supplies product context; it does not by itself supply interface tokens.

Health boundary for this whole document: "반려동물의 건강을 집에서 1분만에 확인" and the "16만+" (160,000+) hero stat are strings published on Fitpet's own surfaces, recorded here as brand copy and as a typographic specimen. No color, type, component, layout, or state value in this document is evidence for a veterinary, diagnostic, efficacy, or safety claim, and none of the guidance here may be used to derive clinical or medical copy.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Fitpet-authored or a separately published UI specification. Each names the source passage it rests on.

- Check a pet's health at home — the flagship hero's own promise is "반려동물의 건강을 집에서 1분만에 확인", and the source describes the at-home health-check experience as the product's origin.
- Browse, search, and buy curated food, treats, and supplies on the mall — the source records a mall search field with the placeholder "검색어를 입력해 주세요." (please enter a search term), category and filter chip rows ("사료" food, "간식" treats, "용품" supplies, "건강" health), a product grid, and deal modules ("오늘의 핫딜 🔥" — today's hot deals).
- Find an animal hospital and book a consultation — the source records the flagship line "좋은 병원 찾는 것도 핏펫에선 쉽게 병원 찾고 진료 예약까지" (finding a good hospital is easy on Fitpet too — from finding the hospital to booking the consultation).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source's persona section labels its three named figures as fictional archetypes rather than real people, so their names, ages, and cities are dropped rather than promoted or re-hosted. Restating what remains at group level — Korean pet owners managing a companion animal's health, the same owners shopping for food and supplies, and multi-pet households looking for veterinary care and appointments — is a derived editorial implementation inference from the verified surfaces; it is not Fitpet-authored or a separately published UI specification. Use those groups, not invented individuals.

### Distinctive traits

These seven traits, and the readings carried inside them — the tint doing the work shadows do elsewhere, the geometry read as pill-forward, the accents read as semantic-only — are a derived editorial implementation inference from the verified surfaces; they are not Fitpet-authored or a separately published UI specification. Each names the values it rests on.

- One saturated brand blue `#0050ff` — the dominant color of the logo and the fill of the mall's primary-action button — with a lighter marketing blue `#1482ff` and a deep navy `#0035a8` as secondary brand tones
- A pervasive cool-grey surface tint `#f4f7fa` doing the segmentation work that shadows do elsewhere
- Near-flat depth: `box-shadow: none` across the inspected flagship hero, nav, and the mall's cards, chips, and buttons, with separation carried by `rgba(0, 0, 0, 0.03)`, `#eef1f5`, and `#dfe3e8` hairlines
- Pill-forward geometry — 28px on the mall's primary button, 30px on the corporate ghost CTA, 999px on filter chips, 10px on cards and inputs
- A two-font split by surface: Noto Sans KR plus Poppins on the corporate flagship, Pretendard on the mall
- Accents used semantically only: coral `#ff5967` for discount percentages, yellow `#ffd633` for ratings and points, `#edf4ff` for coupon strips, and a warm `#ff9300` paw accent in the logo mark
- Heading text split by surface — near-black `#1b1e21` on the mall, pure `#000000` on the corporate flagship — both on a bright `#ffffff` canvas

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Fitpet-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Health first, commerce second.** Products exist to serve the pet's wellbeing, not the other way around. *UI implication:* lead with health benefit and curation criteria; keep sale urgency scoped to clearly-labeled deal modules.
2. **One action, one blue.** `#0050ff` means "do this." *UI implication:* reserve the saturated brand blue for the single primary action so the next step is never ambiguous.
3. **Flat and fast.** Mobile-native clarity beats decorative depth. *UI implication:* no shadows; separate with the `#f4f7fa` tint and hairlines; keep the grid quick to scan.
4. **Approachable, not clinical.** Pet health should feel warm. *UI implication:* rounded pills, friendly Pretendard type, and plain Korean labels instead of cold veterinary framing.
5. **Trust through concreteness.** *UI implication:* prefer real numbers (the 85px "16만+" stat) and specific claims over adjectives; make discounts and ratings literal with the coral `#ff5967` and yellow `#ffd633`.

Application rules the source states as its Do list, kept as written:

- Reserve the brand blue `#0050ff` for the single primary action — keep it the one "do this" color.
- Use the `#f4f7fa` surface tint and `#eef1f5` / `#dfe3e8` hairlines to separate sections, not shadows.
- Keep card and input corners at 10px and interactive pills between 28px and 999px.
- Use near-black `#1b1e21` for mall headings and slate `#42494f` for product titles instead of pure black.
- Use Pretendard on commerce surfaces and Noto Sans KR plus Poppins on the corporate brand site.
- Use the coral `#ff5967` only for discount percentages and the yellow `#ffd633` only for ratings and points.
- Back coupon and first-purchase strips with the light `#edf4ff` tint.
- Let big weight-600 numbers (the 85px stat) carry trust on the corporate hero.

### Avoid

The source states these as its Don't list; they are kept as its rules, reasons included.

- Do not spread the brand blue across many elements — it dilutes the single-action signal.
- Do not add drop shadows for elevation; this is a flat, hairline-and-tint system.
- Do not mix a third accent color into the palette — blue is the brand, coral and yellow are strictly semantic.
- Do not use sharp square corners on interactive controls; everything is rounded or a pill.
- Do not set mall body or product titles in pure `#000000` — use `#1b1e21` / `#42494f`.
- Do not swap the two font systems across surfaces — Pretendard is the mall, Noto Sans KR / Poppins is corporate.
- Do not use the sale coral or the rating yellow as decorative fills unrelated to price or rating.
- Do not crowd the corporate hero; it relies on editorial whitespace and one bold stat.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Brand:

| Role | Value | Recorded use |
|---|---|---|
| Fitpet Blue (primary) | `#0050ff` | The signature saturated blue. Dominant color of the logo and the background fill of the mall's primary action button — the system's single "do this" color. |
| Deep Navy | `#0035a8` | Darker brand navy for emphasis text and dense-blue surfaces on the mall. |
| Marketing Blue | `#1482ff` | Lighter, brighter blue used as the accent on the corporate flagship — links, active nav, highlight blocks. |
| Paw Orange | `#ff9300` | The warm secondary in the logo mark, a friendly counterweight to the blue. |

Semantic accents — each is reserved for one meaning:

| Role | Value | Recorded use |
|---|---|---|
| Sale Coral | `#ff5967` | Discount-percentage badges on product cards. |
| Rating Yellow | `#ffd633` | Star ratings, points, and reward highlights on the mall. |

Text:

| Role | Value | Recorded use |
|---|---|---|
| Ink | `#1b1e21` | Primary near-black for mall headings and titles — warmer than pure black. |
| Corporate Ink | `#282828` | Near-black used on the corporate flagship's dark bands and blocks. |
| Body Slate | `#42494f` | Standard body and product-title text on the mall. |
| Muted Slate | `#727a82` | Secondary text, captions, metadata. |
| Muted Alt | `#8c949c` | Alternate muted slate for supporting labels. |
| Faint Grey | `#a7aeb5` | Lowest-emphasis text — placeholders, disabled labels. |
| Pure Black | `#000000` | Corporate flagship body and nav text. |
| On-Dark | `#eeeeee` | Light text on the corporate dark bands. |

Neutral and surface:

| Role | Value | Recorded use |
|---|---|---|
| Pure White | `#ffffff` | Page background, card surfaces, text on blue or dark. |
| Surface Grey | `#f4f7fa` | The dominant cool-grey tint — segments sections, fills the search field, backs product areas. |
| Promo Tint | `#edf4ff` | Light-blue background for coupon and first-purchase promo strips. |
| Hairline | `#eef1f5` | Thin borders and dividers on white cards. |
| Border | `#dfe3e8` | Standard border for containers and chip outlines. |
| Border Strong | `#c2c8cf` | Higher-contrast outline for filter chips and toggled controls. |

The source keeps the two ink values surface-scoped — mall headings and titles in `#1b1e21`, corporate flagship body and nav text in pure `#000000` — and rules out pure black for mall text outright. Keep that split rather than collapsing the two into one text token.

### Spacing

Measured paddings, recorded unitless in the token set and read as px: `xs: 4`, `sm: 8`, `base: 15`, `md: 16`, `lg: 24`, `chip: 30`, `xl: 39`, `xxl: 50`. The source names the base rhythm as 4 / 8 / 15 / 16 / 24 / 39 px.

Notable placements the source calls out: the corporate nav uses a 39px vertical padding inside a 100px header; the ghost CTA runs 10px 50px; mall chips and buttons use tighter 7px–14px horizontal padding. Those measurements are observed. Reading them as chosen for a tall, spacious header, a wide tap target, and dense browsing is a derived editorial implementation inference from the verified surfaces; it is not Fitpet-authored or a separately published UI specification.

### Shape

- Small: 5 — discount badges, fine-grained tags
- Medium: 10 — cards, inputs, promo strips; the source calls this the workhorse
- Chip: 30 — ghost CTA; the mall's primary button sits just under it at 28px
- Pill: 999 — filter chips, fully-rounded pills
- Full: 9999

The source states the radius scale as small 5px, medium 10px, chip 28px–30px, and full 999px, and rules out sharp square corners on interactive controls.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, most surfaces |
| Tint (Level 1) | `#f4f7fa` background shift | Card / section separation without elevation |
| Hairline (Level 2) | `rgba(0, 0, 0, 0.03)` / `#eef1f5` / `#dfe3e8` border | White card outlines, dividers |

The two shadow tokens are `none: "none"` and `hairline: "rgba(0, 0, 0, 0.03) 0px 0px 0px 1px"`. Live inspection found `box-shadow: none` across the corporate hero, the nav, and the mall's cards, chips, and buttons; the only depth cue is the whisper-thin `rgba(0, 0, 0, 0.03)` border repeated across product cards. When emphasis is needed the system reaches for color — `#0050ff`, `#ff5967`, `#ffd633` — rather than elevation. Reading that flatness as a choice that keeps a data-dense commerce grid feeling fast, mobile-native, and calm is a derived editorial implementation inference from the verified surfaces; it is not Fitpet-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, spacing, radius, border, and shadow. The motion contract below sits outside that attribution. Reading its durations and rules as a system-level statement rather than as per-component measured values is a derived editorial implementation inference from the verified surfaces; it is not Fitpet-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip press, focus |
| `motion-standard` | 200ms | Card / sheet / dropdown reveal |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

Easing roles — three roles with declared uses. The specific curve values the source lists are not traceable to Fitpet evidence, so the curves are omitted and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-enter` | Arriving — cards, chips, sheets |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element — does not satisfy that condition.

Motion rules:

- Motion is functional and quiet, matching the flat, fast aesthetic.
- Pill chips and buttons respond to press with a subtle scale/opacity shift. The exact scale and opacity values are unresolved.
- Product cards and results fade in from below at `motion-standard` / `ease-enter`.
- No bounce or spring.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the product stays fully functional.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Live computed surface-use — flagship | The corporate flagship computes Noto Sans KR for hangul headlines and the big stat, and Poppins for latin nav labels and the logotype. |
| Live computed surface-use — mall | The mall computes Pretendard for section titles, page titles, product-card titles, and body strings. |
| Declared fallback | The mall family is recorded as Pretendard "with system fallbacks". A fallback stack is never presented as the brand face. |
| Official distributed asset | The source records no Fitpet-owned distributed type family; the three families it names are the ones the two surfaces load. |
| Surface binding | The source records the two font systems as split by surface: Noto Sans KR plus Poppins on the corporate flagship, Pretendard on the mall. |

### Family

- **Corporate display / hangul:** `Noto Sans KR` — hero headlines and stats on `fitpet.co.kr`, at weight 600.
- **Corporate latin / nav:** `Poppins` — latin nav labels and the logotype, at weight 700.
- **Mall / product:** `Pretendard` (with system fallbacks) — every headline, title, and body string on `fitpetmall.com`.

### Type roles

| Role | Font | Size | Weight | Line height | Use |
|---|---|---:|---:|---:|---|
| Stat Hero | Noto Sans KR | 85px | 600 | — | Big number on the corporate hero ("16만+") |
| Display | Noto Sans KR | 40px | 600 | 1.2 | Corporate hero headline |
| Section | Pretendard | 24px | 700 | — | Mall section title ("오늘의 핫딜" — today's hot deals) |
| Sub-section | Pretendard | 19px | 700 | — | Mall page / group title ("홈" — home) |
| Product Title | Pretendard | 17px | 400 | 1.4 | Product-card title, slate `#42494f` |
| Body | Pretendard | 16px | 400 | 1.5 | Body copy, search-field text |
| Nav | Poppins | 13px | 700 | — | Corporate nav link |
| Caption | Pretendard | 12px | 400 | — | Badges, metadata, fine print |

Line heights are kept in the form the source verified them: unitless ratios where it recorded ratios, and omitted where it recorded none.

### Typography rules

The source states these four as its typography principles. Reading the measured metrics as those principles is a derived editorial implementation inference from the verified surfaces; it is not Fitpet-authored or a separately published UI specification.

- **Two fonts, two surfaces:** Noto Sans KR plus Poppins carry the corporate brand story; Pretendard carries the commerce product. They never mix on the same surface.
- **Weight as the persuade/inform switch:** headlines and section titles sit at 600–700; product titles and body drop to 400. The weight jump is the primary hierarchy signal.
- **Big, confident hero numbers:** the 85px weight-600 stat is the corporate site's boldest typographic move.
- **Hangul-first body sizing:** mall body sits at 16px in the search field and 17px for product titles, dense enough for information-rich commerce.

### Assets

The source's only logo record is a third-party favicon-service URL rather than a Fitpet-hosted asset file. Treating that record as an identity pointer rather than as a brand asset, and leaving it out of this contract, is a derived editorial implementation inference from the verified surfaces; it is not Fitpet-authored or a separately published UI specification. What the source does establish from the mark itself is its color pair: the dominant `#0050ff` and the warm secondary `#ff9300`. Product imagery and illustrations carry no shadow at any size, consistent with the flat system, and cards hold their 10px radius across breakpoints.

<!-- design-md:section components-states -->
## 4. Components & States

### How to read this section

The source declares each component with a primitive type (`button`, `input`, `badge`, `card`, `tab`) and a value set. Those types are preserved per component. Applicability below is judged by each control's role in this product, not by whether a visual treatment for that state was recorded; where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. Every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; it is not Fitpet-authored or a separately published UI specification. This is not a claim that state coverage is finished.

### Mall Primary Action Button

- Role: primary / recommend action on the mall ("추천" — recommend); the source records it as the single high-emphasis action
- Primitive type: `button` · Kind: interactive
- Background: `#0050ff`
- Text: `#ffffff`
- Radius: 28px
- Padding: 7px 17px
- Height: 48px
- Font: 13px / 400 Pretendard

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | The system declares a disabled treatment — faint grey label on a reduced-opacity surface, with the blue action fading rather than turning grey |
| loading | applicable | Commits an action the system reports through its grid and in-place refresh loading states |
| error | applicable | The system declares an inline failure message with a retry rather than an in-button treatment |
| success | applicable | The system declares a brief inline confirmation for a placed order or booking rather than an in-button treatment |

### Corporate Ghost Pill CTA

- Role: outline CTA over corporate hero imagery ("일반채용" — general recruitment)
- Primitive type: `button` · Kind: interactive
- Background: transparent
- Text: `#ffffff`
- Border: `2px solid #ffffff`
- Radius: 30px
- Padding: 10px 50px
- Height: 42px
- Font: 12px / 600 Poppins

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A recruitment entry point whose availability can lapse; the system's disabled treatment applies, and no CTA-specific value is promoted |
| loading | applicable | Opening the destination runs the page-level transition the system assigns to `motion-slow` |
| error | not-applicable | This control sends the reader to a destination; it does not commit an operation whose outcome it could report. The destination surface reports failure. |
| success | not-applicable | Same role reason: choosing a destination is not an operation with a success result. |

### Mall Search Field

- Role: filled, borderless search field on the mall
- Primitive type: `input` · Kind: interactive
- Background: `#f4f7fa`
- Text: `#000000`
- Radius: 10px
- Padding: 1px 50px
- Height: 50px
- Font: 16px Pretendard
- Placeholder: `#a7aeb5` ("검색어를 입력해 주세요." — please enter a search term)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | applicable | Submitting a query runs the grid loading state the system declares |
| error | applicable | Form field; the system declares a field-level message below the input describing what is valid |
| success | applicable | Form field; visual treatment omitted |

### Mall Filter Chip

- Role: category / filter chip on the mall ("펫루키")
- Primitive type: `badge` · Kind: interactive — the source describes `#c2c8cf` as the outline for filter chips and toggled controls, and gives chips a press response in its motion rules
- Background: transparent
- Text: `#42494f`
- Border: `1px solid #c2c8cf`
- Radius: 999px
- Padding: 0 14px
- Height: 43px
- Font: 13px / 400 Pretendard

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A category can be unavailable while its chip stays legible; the system's disabled treatment applies |
| loading | applicable | Selecting a chip re-queries the grid, which the system declares as its in-place refresh state |
| error | not-applicable | Toggling a filter changes which products the grid queries; the grid, not the chip, reports the outcome of that query. |
| success | not-applicable | Same role reason: a filter selection is a query change, not an operation that commits and reports success. |

### Product Discount Badge

- Role: discount-percentage badge on product cards ("55%")
- Primitive type: `badge` · Kind: non-interactive — it displays a computed discount value, and the source attaches no action, target, or interactive treatment to it. No state-applicability map is declared.
- Background: `#ff5967`
- Text: `#ffffff`
- Radius: 5px
- Padding: 5px
- Font: 12px / 700 Pretendard

### Product Card

- Role: product card on the grey `#f4f7fa` surface — hairline separation, no elevation
- Primitive type: `card`
- Background: `#ffffff`
- Border: `1px solid #eef1f5`
- Radius: 10px
- Shadow: none

The source attaches no action, target, or state to the card itself, so neither an interactive kind nor a state-applicability map is declared for it here. Treat that as an open question, not as a finding that the card is inert.

### Promo Strip

- Role: first-purchase / coupon promo strip ("첫 구매 시 인기상품 한정 특가!" — limited special price on popular products for your first purchase)
- Primitive type: `card`
- Background: `#edf4ff`
- Text: `#42494f`
- Radius: 10px

Kind and applicability are left open for the same reason as the product card.

### Corporate Nav Link

- Role: corporate top-nav item ("회사 소개" company, "팀 문화" team culture, "개발 채용" engineering hiring, "TECH BLOG", "FAQ")
- Primitive type: `tab` · Kind: interactive
- Text: `#000000`
- Font: 13px / 700 Poppins
- Padding: 39px 15px, inside a 100px header
- Active variant: text `#1482ff`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web navigation control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable navigation control; visual treatment omitted |
| disabled | applicable | A navigation destination can be temporarily unavailable; visual treatment omitted |
| loading | applicable | Selection triggers the page-level transition the system assigns to `motion-slow` |
| error | not-applicable | A nav item selects a destination; it does not report the outcome of an operation. The destination surface reports failure. |
| success | not-applicable | Same role reason: selection is not an operation with a success result. |

The active state is declared for this control as a variant (text `#1482ff`) rather than as one of the seven canonical states.

### State record

The source's state contract, preserved with its values and copy:

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas. Single Ink (`#1b1e21`) line explaining no matching products, with one blue `#0050ff` action to adjust filters. No clutter. |
| **Empty (cart / saved, none yet)** | Muted Slate (`#727a82`) single line inviting the user back to browsing. Calm, honest. |
| **Loading (product grid)** | Skeleton cards on the `#f4f7fa` surface at final dimensions, 10px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place refresh)** | Existing cards stay visible; a subtle progress cue rather than a full block. |
| **Error (fetch failed)** | Inline message in Ink (`#1b1e21`) with a plain-language explanation and a retry. Never a bare "오류가 발생했습니다" (an error occurred). |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "필수" (required). |
| **Success (order placed / booked)** | Brief inline confirmation in calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f4f7fa` blocks at final dimensions, 10px radius, flat pulse. |
| **Disabled** | Faint Grey (`#a7aeb5`) text on reduced-opacity surface; the blue action fades rather than turning grey to preserve brand read. |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- **Corporate flagship:** a centered single-column hero anchored by the 40px headline and the 85px stat, alternating white and dark `#282828` editorial bands.
- **Mall:** a grid of product cards on a `#f4f7fa` surface, horizontally-scrolling category and filter chip rows, and coupon strips in `#edf4ff`.
- Cards group related products at a consistent 10px radius.
- **Flat segmentation:** sections separate by background tint (`#f4f7fa` against `#ffffff`) and hairlines, not by shadow.
- **Pill rhythm:** repeated 999px chips and 28px–30px buttons create a soft, consistent horizontal cadence.
- The source characterizes the flagship as editorially calm and the mall as a dense grid that still keeps generous chip spacing. That characterization, and the reading of the repeated 999px chips and 28px–30px buttons as a soft, consistent horizontal cadence, is a derived editorial implementation inference from the verified surfaces; it is not Fitpet-authored or a separately published UI specification.

Responsive behavior:

| Name | Width | Key changes |
|---|---|---|
| Mobile | <640px | Single column; corporate hero compresses; mall chip rows scroll horizontally |
| Tablet | 640-1024px | 2-up product cards; moderate padding |
| Desktop | 1024-1440px | Full grid, centered corporate hero, multi-column mall bands |

- **Touch targets:** primary button at 48px height, filter chips at 43px, search field at 50px height and full-width on mobile, corporate nav links inside a tall 100px header (39px vertical padding).
- **Collapsing:** the corporate hero's 40px headline and 85px stat scale down on mobile with weight 600 maintained; mall category and filter chips scroll horizontally on narrow viewports; the product grid collapses from multi-column to 2-up and then to a single column; tinted `#f4f7fa` and white bands keep full-width treatment.
- **Imagery:** product imagery and illustrations carry no shadow at any size, and cards keep the 10px radius across breakpoints.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The product language is Korean. The flagship pairs Korean headlines in Noto Sans KR with latin nav labels in Poppins ("TECH BLOG", "FAQ" sit beside "회사 소개" and "팀 문화"); the mall runs entirely in Pretendard.

The source characterizes the voice as warm, reassuring, and health-first — treating companion animals as family and the owner as a caretaker who deserves clarity rather than upsell, with trust as the through-line: concrete health claims, and commerce copy that stays low-pressure even during sales. That characterization, and the tone table below, are a derived editorial implementation inference from the verified surfaces; they are not Fitpet-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| Corporate hero | Benefit-led, mission-framed. "반려동물의 건강을 집에서 1분만에 확인." Calm confidence, not hype. |
| Trust / scale proof | Concrete numbers. "16만+" as a plain stat rather than a superlative. |
| Mall section titles | Practical, energetic. "오늘의 핫딜 🔥", "인기상품 한정 특가!" |
| Category / filter labels | Everyday plain Korean. "사료", "간식", "용품", "건강". |
| CTAs | Direct, low-pressure. "추천", "핏펫이 궁금해요". |
| Care / hospital copy | Reassuring, service-framed. "좋은 병원 찾고 진료 예약까지". |

Voice samples, verbatim from the live surfaces. They are kept in Korean because the Korean text is the string; the English beside each is a reading aid, not the label:

- "반려동물의 건강을 집에서 1분만에 확인" — corporate hero (check your pet's health at home in one minute).
- "건강한 반려생활의 시작 - 핏펫" — mall page title and positioning line (the start of a healthy companion life — Fitpet).
- "좋은 병원 찾는 것도 핏펫에선 쉽게 병원 찾고 진료 예약까지" — corporate section on end-to-end care (finding a good hospital is easy on Fitpet too — from finding the hospital to booking the consultation).

**Forbidden register:** fear-based pet-health scare copy; aggressive sales urgency beyond clearly-labeled deals; undefined veterinary jargon left unexplained; exclamation-heavy hype outside the deal context.

Scope boundary for this section: the voice contract covers register, tone, and label vocabulary. Veterinary, diagnostic, efficacy, dosage, and safety language sits outside what this source establishes, and none of the guidance above may be used to derive clinical copy. The Korean product strings recorded in the State record and in the component roles above are UI copy — reproduce them byte-exact rather than translating them.

<!-- design-md:section governance -->
## 7. Governance

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

### Recorded unresolved decisions

These are named values, not permissions to invent. The source records no conflict between its own values.

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to Fitpet evidence. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Press and hover values.** The system states that pill chips and buttons respond to press with a subtle scale/opacity shift and assigns hover to the 120ms duration, but gives no scale, opacity, or color value for either.
- **Product card and promo strip interaction.** Both are declared as `card` with no action, target, or state attached, so their interactive kind stays open rather than settled in either direction.

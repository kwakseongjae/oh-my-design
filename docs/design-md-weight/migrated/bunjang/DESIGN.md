# Bunjang Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Bunjang (번개장터). Catalog homepage identity is `https://m.bunjang.co.kr`.

Treating Bunjang as a Korean C2C / flea-market marketplace in this reconstruction, treating `https://m.bunjang.co.kr` as the named first-party web evidence domain, treating `m.bunjang.co.kr` as the canonical web surface in this packet, and treating desktop as a courtesy centering of the same capture rather than a second product system, is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification. This contract covers the live capture of `https://m.bunjang.co.kr/` from the 2026-05-14 packet (mobile-emulated 390×844 dpr=3 and desktop 1280×713 dpr=2). Canonical viewport in that packet is **390px** mobile. Desktop centers content within `--layout-width-large: 1240px`.

Source token note: `primary = --color-primary / --color-red-500 #d80c18` (matches catalog `primary_color`); no box-shadow anywhere — depth is borders + tints. Token extraction is `prose-derived`. Treating that note as a register split — `#d80c18` is catalog `primary_color`, `--color-primary`, `--color-red-500`, and the harvested primary-CTA fill rather than a second identity red; `#c00b15` stays the YAML `primary-hover` / button-primary `hover` writing and the source’s interpolated pressed-state, not an observed hover paint; borders and `#f6f6f6` tints stay depth rather than elevation — is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification.

The following visual-character readings — near-monochrome canvas, Bunjang Red as a scarcity asset, trader-tool sober, less “친근한 동네 이웃” and more “거래 정확하게 끝내자,” web as a discovery funnel and the app as the trade venue, the 81:100 portrait card as the atomic unit, no-gradient-sweep, no-shadow-ladder, Korean-text-dominates, incidental-Latin-on-the-system-stack, and app-install-rail-as-the-bottom-of-home — are a derived editorial implementation inference from the verified surfaces; they are not Bunjang-authored or a separately published UI specification. The captured home screen is a near-monochrome canvas: pure white (`#ffffff`) underneath, near-black text (`#191919`), and a single accent **Bunjang Red** (`#d80c18`). Depth is signaled by 1px gray-100 (`#e5e5e5`) borders and gray-50 (`#f6f6f6`) tints (footer surface, image placeholder). There is no gradient sweep, no shadow ladder, and no box-shadow on any sampled element. The atomic unit is the portrait product card: `--bun-ui-aspect-ratio-vertical: 81 / 100`, price 16px/700 `#191919`, title 14px/500 gray-600 (`#666` / `#666666`), meta 12px/500 gray-300 (`#999` / `#999999`), and a top-right heart (찜). Cards stack 2-up on mobile, 4-up on desktop. Pretendard Variable carries 100% of sampled UI text (211/211 DOM nodes). Korean text dominates; the system stack handles incidental Latin (prices use Hindu-Arabic numerals + "원"). The bottom of the home page is an app-install rail.

The following Bun UI / public-artifact readings — `--bun-ui-*` as an internal prefix, vanilla-extract class-name patterns, Bun UI as the source’s internal name, and the source conclusion that the DS exists internally while public Storybook / npm / documentation / GitHub artifacts do not — are a derived editorial implementation inference from the verified surfaces; they are not Bunjang-authored or a separately published UI specification. Production CSS exposes `--bun-ui-*` (radius, aspect-ratio, z-index, safe-area) and `--color-*` ladders, plus vanilla-extract class-name patterns `Box__7nn0kn17`, `Flex__wsrgth3`, `Typography_typography__1wr8iu13`. The source names that internal system **Bun UI**. Authority boundary: the DS exists internally (Bun UI / `--bun-ui-*` / vanilla-extract patterns); public Storybook, public npm, published documentation, and public GitHub artifacts do not.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Treating the three captured-control jobs below as the user outcomes of this packet — search-the-captured-catalog, scan-81:100-portrait-cards, and the single highest-intent captured CTA — and keeping source atmosphere demographics out of this list, is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification.

- Search the captured `m.bunjang.co.kr` catalog from the search input (placeholder "검색").
- Scan 81:100 portrait product cards (price, title, meta row, heart).
- Use the single highest-intent captured CTA on a surface ("앱 다운로드", "번개장터 앱으로 시작하기").
<!-- design-md:claim-end -->

### Audience

Restricting Audience so that no individual personas are promoted, source atmosphere labels are not Audience and are not primary tasks, and observable work is tied only to the three primary tasks, is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification. No individual personas are promoted. The source has no Personas section.

### Distinctive traits

Treating `#d80c18` as catalog `primary_color` plus `--color-primary` / `--color-red-500` plus primary-CTA fill rather than a second identity red, treating that red as reserved for the single highest-intent CTA per surface, treating 81:100 as the product-thumb convention rather than a square crop, treating Pretendard Variable as the only observed family, treating 400/500/700 as the observed weight set rather than a 600 stop, treating borders-and-tints as depth rather than elevation, treating the three chips as dedicated ladders rather than generic status colors, treating 390px as this packet’s canonical viewport rather than a cross-viewport specification, treating the app-install rail as the bottom of home rather than a second product chrome, and treating the 10% inner-fill as the heart overlay rather than a page shadow, is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification.

- Catalog `primary_color` / Bunjang Red `#d80c18` reserved for the single highest-intent CTA per surface
- 81:100 portrait thumbnail (`--bun-ui-aspect-ratio-vertical: 81 / 100`)
- Pretendard Variable only; weights 400 / 500 / 700; no 600 stop observed
- No box-shadow on any sampled element; 1px `#e5e5e5` borders and `#f6f6f6` tints
- Service chips: `안전결제` indigo `--color-safe-*`, `감정완료` warm amber `--color-care-*`, `내폰시세` info blue `--color-blue-*`
- Mobile-first 390px baseline on `m.bunjang.co.kr`; app-install rail at the bottom of home
- Heart (찜) white stroke over a 10% black inner-fill; tapped fill `--color-red-500` `#d80c18`

### Principles

These five items, including each stem and each *UI implication*, are a derived editorial implementation inference from the verified surfaces; they are not Bunjang-authored or a separately published UI specification.

1. **Restraint of red.** A single hex (`#d80c18`) marks one action per surface. *UI implication:* reserve Bunjang Red for the single highest-intent CTA; do not spend it on secondary or tertiary actions.
2. **Portrait product photography.** 81:100 is the captured product-thumb convention (`--bun-ui-aspect-ratio-vertical: 81 / 100`). *UI implication:* crop to that ratio; do not switch the listing thumb to square.
3. **Borders, not shadows.** Every sampled depth signal is a 1px gray-100 line or a gray-50 fill. *UI implication:* do not add box-shadow to cards or buttons.
4. **Typography as hierarchy.** Price is 16px/700; title is 14px/500 gray-600 (`#666` / `#666666`). *UI implication:* let weight and size do the work; do not add a marketing line above the price.
5. **Service tiers are colorways.** Safe = indigo; Care = warm amber; Verified info = info blue. *UI implication:* keep `안전결제` / `감정완료` / `내폰시세` on their dedicated ladders.

Treating the following as a capture-bound application of source Do’s and harvested geometry — reserve-red-for-the-single-highest-intent-CTA, 81:100-6px-placeholder, borders-and-tints-not-elevation, Pretendard-400-500-700-with-price-outweighing-title, dedicated-chip-ladders, and heart-10%-inner-glow — is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification.

- Reserve Bunjang Red (`#d80c18`, `--color-primary`) for the single highest-intent CTA per surface — the only place red appears.
- Build the product card on the 81:100 portrait thumbnail with a 6px radius and `#f6f6f6` placeholder bg.
- Signal depth with 1px `#e5e5e5` (gray-100) borders and `#f6f6f6` (gray-50) tints instead of elevation.
- Set all UI text in Pretendard Variable using only the 400/500/700 weights, letting 16px/700 price outweigh 14px/500 gray-600 (`#666`) titles.
- Color-code service chips by their dedicated ladders — indigo `--color-safe-*` for `안전결제`, warm-amber `--color-care-*` for `감정완료`, info-blue `--color-blue-*` for `내폰시세`.
- Outline the heart (찜) button with a 10% black inner glow so its white stroke stays legible on any seller photo, flipping to solid `--color-red-500` when tapped.

### Avoid

The following items copy source Don’ts / anti-patterns, including red-drains-the-single-primary, square-thumbs-break-81:100, box-shadow-contradicts-borders-and-tints, mix-Noto-Apple-SD-Gothic-or-display-face, Pretendard-Variable-is-the-contract, manufactured-urgency-copy, partner-login-colors-not-Bunjang-chrome, and modal-where-z-index-1500-snackbar-would-do. They are a derived editorial implementation inference from the verified surfaces; they are not Bunjang-authored or a separately published UI specification.

- Do not spend red (`#d80c18`) on secondary or tertiary actions — it drains the single primary it is meant to mark.
- Do not use square or square-ish thumbnails that break the 81:100 vertical convention.
- Do not add box-shadow to any card or button — no sampled element carries elevation.
- Do not mix in Noto Sans KR, Apple SD Gothic Neo, or any display face — Pretendard Variable carries 100% of UI text.
- Do not manufacture urgency with copy like "마지막 1개!" or "지금 바로!".
- Do not reuse partner login colors (kakao `#fae100`, naver `#03cf5d`, and the other `--color-brand-*` fills) in Bunjang chrome, and do not interrupt with a modal where a z-index 1500 snackbar would do.

The last bullet’s pairing of partner-login-fills with snackbar-over-modal is source-stated as one Don’t; treating that pairing as a single Avoid item is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

All colors below were extracted from production `:root` CSS custom properties (`getComputedStyle(document.documentElement)`) on 2026-05-14. Token names preserve the source’s `--color-*` names.

The following unmerged-role readings — `#d80c18` as primary / red-500 / error-destructive sharing the 500 stop rather than three paints; `#c00b15` as interpolated hover/pressed rather than observed hover; `#191919` not `#4c4c4c` not `#666666` not `#999999`; `#ffffff` as canvas and on-primary rather than a second white token; `#f6f6f6` as gray-50 / `--color-gray` alias rather than canvas; `#e5e5e5` as hairline rather than a fill; `#00a587` as success/available rather than a stoplight green; `#027aff` as info rather than safe indigo; `#ffc200` as warning rather than care amber; `#5558a8` / `#5558A8` as safe rather than info blue; `#ffe1a6` / `#FFE1A6` as care rather than yellow-500; partner `--color-brand-*` fills as federated-login only; strong-dividers; barely-tinted-section-divider — are a derived editorial implementation inference from the verified surfaces; they are not Bunjang-authored or a separately published UI specification.

- **Bunjang Red / Primary** (`#d80c18`): catalog `primary_color`. `--color-primary` / `--color-red-500`. YAML `primary` / `brand`. Harvested `_variant-primary` button fill. Error / destructive share this 500 stop (`YAML error`). It is not secondary-button ink and not `#c00b15`.
- **Primary hover (YAML / interpolated)** (`#c00b15`): YAML `primary-hover` and button-primary `hover: bg #c00b15`. Source: pressed-state would darken toward `#c00b15` (interpolated; not directly observed in computed styles since no hover state was captured). Not copied onto a hover row.
  The Core `focus-visible` row also carries no colour.
- **Pure White** (`#ffffff`): `--color-white`. Page background, card surface, primary CTA text. YAML `canvas` / `on-primary`.
- **Gray-900** (`#191919`): `--color-gray-900`. Primary text on body, headings, prices. YAML `foreground`.
- **Gray-800** (`#333333`): `--color-gray-800`. Strong secondary text.
- **Gray-700** (`#4c4c4c`): `--color-gray-700`. Secondary button text. YAML button-secondary `fg`. Not Gray-900.
- **Gray-600** (`#666666`): `--color-gray-600`. Product card title, footer text. YAML `body`. Card-title local writing also `#666`.
- **Gray-500** (`#7f7f7f`): `--color-gray-500`. Tertiary text.
- **Gray-400** (`#8c8c8c`): `--color-gray-400`. Icon-only buttons, banner-close ×.
- **Gray-300** (`#999999`): `--color-gray-300`. Meta / timestamp / "19시간 전". YAML `muted`. Card-meta local writing also `#999`.
- **Gray-200** (`#b2b2b2`): `--color-gray-200`. Source label: disabled-ish placeholder text. Treating *disabled-ish* as the source’s own hedge rather than a Disabled paint is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification.
- **Gray-150** (`#cccccc`): `--color-gray-150`. Strong dividers.
- **Gray-100** (`#e5e5e5`): `--color-gray-100`. Secondary button border, light dividers. YAML `hairline`.
- **Gray-70** (`#f0f0f0`): `--color-gray-70`. Source: subtle row hover / pressed bg. Treating that source label as not a promoted hover/pressed component paint is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification. No hover/pressed component paint is promoted from this stop.
- **Gray-50** (`#f6f6f6`): `--color-gray-50` (also aliased as `--color-gray`). Footer surface, image placeholder bg. YAML `surface`. Product-card placeholder fill.
- **Gray-10** (`#fafafa`): `--color-gray-10`. Barely-tinted section divider.

**Red ladder** (`--color-red-*`): 50 `#fdf3f3`, 100 `#fbe7e8`, 400 `#f5c2c5`, 500 `#d80c18`.

**Green ladder** (`--color-green-*`): 50 `#edf9f7`, 100 `#dbf2ee`, 400 `#a6dfd5`, 500 `#00a587`. YAML `success`. The following teal-leaning reading is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification. Source notes a teal-leaning green, not a Korean-marketplace stoplight green.

**Blue ladder** (`--color-blue-*`): 50 `#ebf5ff`, 100 `#d9ebff`, 400 `#b3d7ff`, 500 `#027aff`. YAML `info`. `내폰시세` chip fill.

**Yellow ladder** (`--color-yellow-*`): 50 `#fffbed`, 100 `#fff6db`, 400 `#ffeaa6`, 500 `#ffc200`. YAML `warning`.

**Care ladder** (`--color-care-*`): 50 `#FDF4E2`, 100 `#F8ECD3`, 300 `#F6E5C3`, 500 `#FFE1A6` / YAML `care` `#ffe1a6`. `감정완료` chip. The following careful-handling reading is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification. Source describes this warm amber / cream as the color of "this thing is worth careful handling."

**Safe ladder** (`--color-safe-*`): 50 `#EFF2FE`, 100 `#E1E7FE`, 300 `#7775E3`, 400 `#6458E2`, 500 `#5558A8` / YAML `safe` `#5558a8`. `안전결제` chip. The following escrow-signal reading is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification. Source says this cool indigo / blue-violet specifically signals "Bunjang holds the money until both parties confirm," and is distinct from informational blue.

**Partner brand colors (federated login only):** `--color-brand-kakao` `#fae100` + `--color-brand-kakao-2` `#3c1e1e`; `--color-brand-naver` `#03cf5d`; `--color-brand-facebook` `#1877f2` (+ gradient variant `#00B2FF → #006AFF`); `--color-brand-twitter` `#1da1f2`; `--color-brand-line` `#00b900`; `--color-brand-band` `#21c531`; `--color-brand-apple` `#000000`. Treating these as federated-login fills rather than brand-extension colors, treating never-reuse-them-in-Bunjang-chrome as reconstruction, and treating `--color-brand-apple` `#000000` as not Gray-900 `#191919`, is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification. These are not brand-extension colors. Never reuse them in Bunjang chrome. `--color-brand-apple` `#000000` is not Gray-900 `#191919`.

### Spacing

YAML `spacing`: xs 4, sm 8, md 16, base 16, lg 24, xl 32, xxl 48, section 64. Source body: Bunjang does not expose a numeric spacing scale via CSS variable.

Observed padding patterns: CTA `12px 20px` (medium), `8px 12px` (XS), `16px 20px` (XL/full-width); footer `20px 132px 40px` desktop, tighter on mobile; section vertical rhythm ~24-32px; card grid gap ~12-16px.

Treating the YAML scale as the YAML scale rather than a CSS custom-property ladder, treating component padding as staying with the components, treating ~24-32px / ~12-16px as source range writings rather than a converted px writing of YAML lg 24, and treating footer `20px 132px 40px` desktop / tighter-on-mobile as source padding writings, is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification.

### Shape

YAML `rounded`: sm 4, md 6, lg 20, full 999. Body: `4px` small chip / banner CTA (XS "앱 다운로드"); `6px` primary CTA, secondary CTA, thumbnail container (`--radiusVar__1j9duj80: 6px`); `20px` soft large chip; `999px` circular icon button, pill counter chip, heart button hit area; `--bun-ui-radius-pill: 999px`. Search input YAML radius `999px`. Logo icon radius 22px (100×100 rounded-square). Card-variant chips 4-6px.

The following local-geometry reading, including 4px-not-6px-not-20px-not-999px, YAML-full-999-not-merged-into-a-second-number, 22px-logo-not-a-control-radius, and 4-6px-chip-range-not-a-single-stop, is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification. 4px / 6px / 20px / `999px` / YAML `full` 999 remain local harvested geometry, not a universal radius for every unlisted control.

### Elevation

YAML `shadow.none`: `none — no box-shadow on any sampled element`. YAML `shadow.overlay-chip`: `rgba(0,0,0,0.3)` semi-transparent bubble for carousel counter overlay. YAML `shadow.heart-inner`: 10% black inner-fill under heart SVG.

Treating the table Use assignments as source-stated uses in this reconstruction, treating overlay-chip and heart-inner as overlay recipes rather than `box-shadow` tokens, and treating the transparent-ledger / product-is-the-photograph readings as editorial, is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification.

| Level | Treatment | Use |
|---|---|---|
| None | no box-shadow on any sampled element | Sampled cards, buttons, chrome |
| Hairline | 1px solid `#e5e5e5` | Secondary buttons, dividers |
| Tint | `#f6f6f6` background | Footer surface, image placeholders |
| Heart inner | 10% black inner-fill | Overlay icon against bright thumbnails |
| Overlay chip | `rgba(0,0,0,0.3)` bubble | Carousel counter "1 / 10" |

The following elevation-philosophy readings — no-shadow-choice-deliberate, transparent-ledger, nothing-floats, product-is-the-photograph, and chrome-shouldn't-compete-for-elevation — are a derived editorial implementation inference from the verified surfaces; they are not Bunjang-authored or a separately published UI specification. The source calls the no-shadow choice deliberate and reads every surface as a transparent ledger: you can see what's there and how it's edged, but nothing floats. The product is the photograph; the chrome shouldn't compete for elevation.

### Motion

No motion duration, easing curve, animation name, transition property, or reduced-motion behavior is recorded in the source. No motion token is promoted. Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings — live 211/211 as sampled-node computed use, Bunjang CDN self-host as the source sentence, Pretendard Variable as the only observed family, and fallback `sans-serif` listed not as a substitute — are a derived editorial implementation inference from the verified surfaces; they are not Bunjang-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | Pretendard Variable verified across 211/211 sampled DOM nodes (`getComputedStyle`). Fallback `sans-serif`. Self-hosted from a Bunjang CDN. |

### Family

- **Current visible UI family:** `Pretendard Variable`, fallback `sans-serif`. YAML `family.sans`. YAML `family.mono` is `sans-serif`.
- Weights observed: 400 (regular), 500 (medium), 700 (bold). No 600 stop observed.

The following font-use boundary, including Pretendard-Variable-as-the-contract, no-second-typeface-in-the-production-tree, a system fallback as not Pretendard Variable, letter-spacing-normal-everywhere, and Hangul-stems-never-tightened, is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification. Letter-spacing is `normal` everywhere. Hangul stems are never tightened. Do not mix in Noto Sans KR, Apple SD Gothic Neo, or a display face. Do not present `sans-serif` as Pretendard Variable. Do not replace Pretendard Variable with those faces.

The following weight-axis reading, including the jump from 500 to 700, prices feeling significantly heavier, brand-voice-riding-on-the-weight-axis, and no-italics, is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification. The brand voice is described as riding on Pretendard’s weight axis — 400 for body, 500 for secondary, 700 for price — with no italics.

### Type roles

Verified YAML `lineHeight` for section-title / subsection / body / price / card-title / chip-emphasis / meta is the unitless ratio `1.2`. YAML search-input `lineHeight` is `18`. Body: line-height is `normal` (browser default) for almost every node; the single exception observed is the search input `line-height: 18px` (caret alignment). The following ratio-versus-normal-versus-18px reading is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification. The unitless ratio `1.2` is not converted into a fixed px and is not merged with body `normal` or with search `18` / `18px`. Those three writings stay unmerged.

| Role | Font | Size | Weight | Line height (YAML) | Body observation | Tracking | Use (YAML) |
|---|---|---:|---:|---:|---|---|---|
| Section title | Pretendard Variable | 20px | 700 | 1.2 | `normal` (almost every node) | `normal` | Section title (오늘의 추천 아이템), gray-900 |
| Subsection | Pretendard Variable | 18px | 700 | 1.2 | `normal` | `normal` | Subsection title / large emphasis, gray-900 |
| Body / CTA label | Pretendard Variable | 16px | 400 | 1.2 | `normal` | `normal` | Default body, CTA label, gray-900 / white-on-red |
| Price | Pretendard Variable | 16px | 700 | 1.2 | `normal` | `normal` | Price — the headline, gray-900 |
| Search input | Pretendard Variable | 15px | 500 | 18 | `18px` explicit | `normal` | Search input value + placeholder, gray-900 |
| Card title | Pretendard Variable | 14px | 500 | 1.2 | `normal` | `normal` | Product card title, gray-600 `#666` |
| Chip emphasis | Pretendard Variable | 13px | 700 | 1.2 | `normal` | `normal` | Compact emphasized chip |
| Meta | Pretendard Variable | 12px | 500 | 1.2 | `normal` | `normal` | Meta / timestamp / region, gray-300 `#999` |

### Assets

- Catalog logo: type `favicon`, slug `https://static.bunjang.co.kr/web/ui/favicon.ico`. Host is `static.bunjang.co.kr`. Dual-destination with the source ledger.
- Logo icon SVG: `https://static.bunjang.co.kr/web/ui/logo-icon.svg`. 100×100 rounded-square (radius 22px), stylized lightning-bolt mark inside a gradient field. Web wordmark sits next to it in Pretendard 700. Source IP guardrail: archived under `assets/_reference/` for capture-fidelity verification only — not for downstream use in derivative products.
- System icons: inline SVG, 20×20 default, fill via `path[fill]` (not CSS) — `#191919` foreground, `#8c8c8c` muted (close ×, secondary nav).
- Product thumbnails: `loading="lazy"`, `media.bunjang.co.kr` with a `?crop=` parameter (e.g. `media.bunjang.co.kr/product/{id}_1_{ts}_w1200.jpg?crop=0`). Aspect ratio forced to 81/100 via inline `--aspectRatioVar__1nf1jaf0: var(--bun-ui-aspect-ratio-vertical)`.
- No illustrations observed in the home-page surface. No mascot. No empty-state cartoons in sampled nodes.

The following photo-aesthetic reading — seller-uploaded, unedited, well-lit-but-amateur, no-imposed-photography-style, and identity-from-containing-heterogeneous-photos-consistently — is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification. Source describes seller-uploaded, unedited, often well-lit-but-amateur photos, and says the platform does not impose a photography style — identity comes from containing heterogeneous photos consistently.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source has no States section. Source records that no hover state was captured, and that pressed-state `#c00b15` is interpolated rather than observed in computed styles. Empty-state cartoons were not observed in sampled home-page nodes.

Button family (Bun UI `_button_1cw4e_1`): three variants × four sizes observed in class names: `_variant-{normal|primary|…}` × `_size-{XS|M|XL}` × `_full`. Known named variants: `normal` (secondary), `primary`. Known named sizes: XS, M, XL. Known `_full`.

Treating `loading="lazy"` on thumbnails as an image attribute rather than a component Loading treatment is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. The source never records `focus-visible`; that applicability stays, and the visual treatment is omitted. The `focus-visible` row does not carry a colour.

Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. YAML `#c00b15` is not copied onto a hover row. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow an identified product role, not its primitive kind. Where exact selector, label, or request/outcome behavior is unresolved, those three applicability fields are omitted at this boundary rather than closed from YAML `type` or an editorial name. This is not a complete state-coverage claim.

Product Card and the three service chips have no interactive-kind confirmation for a §4.4 map, so kind and a state-applicability map are omitted. Header and App-Download Top Banner are parent surfaces in source §8; type and kind are not invented.

### Primary CTA

- Role: single highest-intent CTA per surface — the only place red appears
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#d80c18`
- Text: `#ffffff`
- Border: none
- Radius: YAML `6px`; body table 4-6px; XS `4px` (`8px 12px` pad); XL `16px 20px`
- Padding: YAML `16px 20px` (XL/full-width); body also `8px 12px` (XS)
- Font: 16px / 400 / Pretendard Variable
- Use: YAML "Single highest-intent CTA per surface — the only place red appears". Body examples: "앱 다운로드", "번개장터 앱으로 시작하기". Class `_variant-primary` / Bun UI `_button_1cw4e_1`. Observed class family: three variants × four sizes `_variant-{normal|primary|…}` × `_size-{XS|M|XL}` × `_full`.
- Observed: default only. YAML `hover: bg #c00b15` is the interpolated writing; not promoted as observed hover paint.
- YAML `tokens.components.button-primary`
- Field note: The following unmerged-field reading, including Role-as-the-single-highest-intent-CTA, the-only-place-red-appears, `#d80c18` fill-not-Gray-900, `#ffffff` on-primary-not-a-second-canvas-token, 6px-not-4px-not-20px, 16px-400-not-Price-16-700, and interpolated-`#c00b15`-not-observed-hover, is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification. `#d80c18` is this control’s fill and catalog `primary_color`. `#ffffff` is this control’s label and on-primary. Radius YAML `6px` is this control’s YAML field; XS `4px` is the banner/chip size; they are not merged.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as `_variant-primary` |
| hover | applicable | Pointer-web button; visual treatment omitted. `#c00b15` is interpolated, not an observed hover paint |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A primary CTA can be unavailable; visual treatment omitted |
| loading | not-applicable | Named uses are app-install / start-in-app ("앱 다운로드", "번개장터 앱으로 시작하기"); the control is a handoff to the app, not a request that loads on the button |
| error | not-applicable | App-install / start-in-app is not a validation or request-failure state on this control |
| success | not-applicable | Opening the app is not an action-outcome confirmation on this CTA |

### Secondary CTA

- Role: secondary action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ffffff`
- Text: `#4c4c4c`
- Border: `1px solid #e5e5e5`
- Radius: `6px`
- Padding: YAML `12px 20px` (size M)
- Font: 16px / 400 / Pretendard Variable
- Use: YAML "Secondary action". Body variant name: `normal` (secondary). Observed class family: three variants × four sizes `_variant-{normal|primary|…}` × `_size-{XS|M|XL}` × `_full`. Member of the same `_button_1cw4e_1` family as Primary CTA.
- Observed: default only
- YAML `tokens.components.button-secondary`
- Field note: The following unmerged-field reading, including `#4c4c4c` not-Gray-900, `#ffffff` fill-not-on-primary-label, `1px solid #e5e5e5` not-a-card-fill, and 6px-not-4px, is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification. `#4c4c4c` is this control’s text and Gray-700, not Gray-900. `#ffffff` is this control’s fill and Canvas. Border `#e5e5e5` is this control’s hairline.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as `_variant-normal` / secondary |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A secondary action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as a secondary action. Exact selector, label, destination, and request/outcome behavior are unresolved, so those three fields stay omitted at this boundary rather than closed from YAML `type: button`.

### Search input

- Role: search input; rounded pill container carries chrome
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: transparent
- Text: `#191919`
- Radius: `999px`
- Font: 15px / 500 / Pretendard Variable
- Line-height: YAML `18`; body `18px` (caret alignment)
- Placeholder: "검색" (or contextual)
- Class: Bun UI `_input_au7f1_17`
- Observed: default only
- YAML `tokens.components.input-search`
- Field note: The following unmerged-field reading, including transparent-not-a-canvas-token, pill-container-carries-chrome, 15px-500-not-Body-16-400, YAML-18-not-merged-with-role-1.2, and `999px`-not-6px, is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification. Transparent is this field’s background; the rounded pill container behind it carries the visual chrome. `#191919` is this field’s text and Gray-900. Radius `999px` is this input and `--bun-ui-radius-pill`, not CTA `6px`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the search input |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A search field can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as the search input with placeholder "검색". Exact request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from YAML `type: input`.

### Product Card

- Role: portrait product card
- Type: card
- Anatomy: 81:100 thumbnail + price + title + meta + optional service chip + heart
- Background: `#f6f6f6` (placeholder)
- Radius: `6px` (thumbnail container)
- Local recipe (YAML use + body anatomy; not a page-wide type-role merge): price 16px / 700 / `#191919`; title 14px / 500 / `#666`; meta 12px / 500 / `#999` ("19시간 전 · 지역 · 찜 N"); heart absolute top-right, 40×40 hit; SVG fill=none stroke=#fff + 10% black inner glow
- Aspect: `--bun-ui-aspect-ratio-vertical: 81 / 100`
- Class: Bun UI `_container_15rjm_1`
- Observed: default placeholder + listing anatomy. Card variants add a single small chip (4-6px radius) above the title row.
- YAML `tokens.components.product-card`
- Field note: The following unmerged-field and local-tuple reading, including not-a-page-wide-type-role-merge, `#f6f6f6` placeholder-not-canvas, 6px-not-4px-not-999px, price-16-700-not-Body-16-400, title-`#666`-not-Gray-900, and meta-`#999`-not-muted-as-a-card-fill, is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification. `#f6f6f6` is this card’s placeholder fill and Gray-50. The price/title/meta tuple stays on this card.

No interactive-kind evidence is given for the card surface. Kind and a state-applicability map are omitted. The heart is a separate toggle.

### 안전결제 chip

- Role: 안전결제 escrow chip
- Type: badge
- Anatomy: label
- Background: `#5558a8`
- Text: `#ffffff`
- Radius: `6px`
- Font: 13px / 700
- Use: YAML "안전결제 escrow chip — indigo --color-safe ladder"
- YAML `tokens.components.chip-safe`
- Field note: `#5558a8` is this chip’s fill and Safe 500, not info `#027aff` and not Primary `#d80c18`. Treating that unmerged-fill reading as reconstruction is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification.

No interactive-kind confirmation is given for a §4.4 map. Kind and a state-applicability map are omitted.

### 감정완료 chip

- Role: 감정완료 luxury-auth chip
- Type: badge
- Anatomy: label
- Background: `#ffe1a6`
- Text: `#191919`
- Radius: `6px`
- Font: 13px / 700
- Use: YAML "감정완료 luxury-auth chip — warm amber --color-care ladder"
- YAML `tokens.components.chip-care`
- Field note: `#ffe1a6` is this chip’s fill and Care 500, not yellow-500 `#ffc200`. Treating that unmerged-fill reading as reconstruction is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification.

No interactive-kind confirmation is given for a §4.4 map. Kind and a state-applicability map are omitted.

### 내폰시세 chip

- Role: 내폰시세 price-verified chip
- Type: badge
- Anatomy: label
- Background: `#027aff`
- Text: `#ffffff`
- Radius: `6px`
- Font: 13px / 700
- Use: YAML "내폰시세 price-verified chip — info blue"
- YAML `tokens.components.chip-info`
- Field note: `#027aff` is this chip’s fill and Blue 500, not Safe `#5558a8`. Treating that unmerged-fill reading as reconstruction is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification.

No interactive-kind confirmation is given for a §4.4 map. Kind and a state-applicability map are omitted.

### Heart (찜) button

- Role: 찜 heart button
- Kind: interactive
- Type: toggle
- Anatomy: outlined SVG over 10% black inner-fill
- Foreground: `#ffffff` (stroke)
- Shadow: 10% black inner-fill glow under SVG
- Active / tapped: solid `#d80c18` fill (`--color-red-500`)
- Hit: 40×40; radius `999px` (heart button hit area)
- Use: YAML "찜 heart button, white stroke legible on any thumbnail"
- Observed: default outline + inner glow; additional named tapped/active fill
- YAML `tokens.components.heart-button`
- Field note: The following unmerged-field and captured-variant readings, including `#ffffff` stroke-not-canvas, `#d80c18` active-fill-not-a-second-primary-CTA, 10%-inner-not-box-shadow, and tapped-as-named-state-not-hover, are a derived editorial implementation inference from the verified surfaces; they are not Bunjang-authored or a separately published UI specification. `#ffffff` is this control’s stroke. `#d80c18` is the tapped fill and Primary / red-500. The tapped appearance is a named source state, not an observed hover paint.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the outlined heart |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A 찜 toggle can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as a 찜 toggle with a tapped solid fill. Exact request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from YAML `type: toggle`.

Additional observed named state: tapped / active solid `#d80c18` fill. Treating that appearance as a captured named state rather than hover is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification.

### Header (parent surface)

- Role: sticky header
- Anatomy: hamburger 20×20 (left); logo wordmark (clickable, /); search input (center, flex-grow); right cluster: notification bell, wishlist heart, login button or avatar
- Sticky at `--z-index-header: 200`
- Field note: The following parent-surface reading, including header-not-a-harvested-YAML-component and search-as-child-not-header-fill, is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification. YAML does not record a header component. Type and kind are not invented. Search stays the Search input child.

### App-Download Top Banner (parent surface)

- Role: dismissible app-download top banner
- Anatomy: logo icon 32×32 + body copy + primary CTA chip + close ×
- Sticky above header at z-index 100 (footer/sticky tier `--z-index-sticky` / `--z-index-footer: 100`)
- Close × uses Gray-400 `#8c8c8c`
- Field note: The following parent-surface reading, including banner-CTA-as-primary-XS-not-a-second-button-component, is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification. The banner’s primary CTA chip is the Primary CTA XS size (`4px` radius, `8px 12px` pad, "앱 다운로드"), not a separately typed component. Type and kind are not invented for the banner surface.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

YAML spacing is xs 4, sm 8, md 16, base 16, lg 24, xl 32, xxl 48, section 64. Body does not expose a numeric spacing scale via CSS variable; observed padding is recorded under Spacing and the components.

Treating 390px / 480px / 640px / 1240px / 100vw as source layout tokens in this packet rather than a complete breakpoint specification of every unlisted control, treating 2-col / 4-col as the recorded product-grid writing, treating desktop-as-a-courtesy / generous-side-gutters as the source sentence rather than a second system, treating mobile-first 390px as this packet’s canonical viewport rather than a cross-viewport specification, and treating safe-area variables as runtime insets rather than measured px, is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification.

Page max-width tokens: `--layout-width-xsmall: 480px` / `--layout-width-small: 640px` / `--layout-width-large: 1240px` / `--layout-width-full: 100vw`. Canonical viewport: **390px** mobile (`m.bunjang.co.kr` is mobile-first; desktop centers content within 1240px with generous side gutters). Drawer width: `--drawer-width: 480px` (category drawer, filter sheet). Product grid: 2-col mobile / 4-col desktop, card gap ~12-16px. iOS safe-area: `--bun-ui-sat`, `--bun-ui-sab`, `--bun-ui-sal`, `--bun-ui-sar` (top/bottom/left/right inset variables; populate at runtime on iPhone).

Named z-index tokens: `--z-index-sticky: 100`; `--z-index-footer: 100`; `--z-index-header: 200`; `--z-index-widget: 500`; `--z-index-drawer-dim: 900`; `--z-index-drawer: 1000`; `--z-index-popup-dim: 1100`; `--z-index-popup: 1200`; `--z-index-snackbar: 1500`.

The following stacking / snackbar-over-modal reading is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification. Source reads snackbar (transient toast) on z-index 1500 as sitting on top of everything and as confirming a preference for transient, non-blocking feedback over modal interruption.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Source heading: Microcopy & Voice (analysis-only — do not transplant phrases verbatim). Source IP guardrail: no taglines, no marketing copy, no product-listing text is reproduced verbatim. Treating that analysis-only heading, the IP-not-verbatim guardrail, and the source’s “practical guidance is original interpretation” as reconstruction rather than Bunjang-authored voice doctrine is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification. Voice analysis describes patterns observed in production; the practical guidance is original interpretation.

### Observed (source-stated strings)

Treating the parenthetical roles (placeholder / CTA examples / section title / chip labels / timestamp-region pattern / price suffix / carousel counter) as citation-character of those source strings is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification.

- "검색" — search placeholder
- "앱 다운로드" / "번개장터 앱으로 시작하기" — highest-intent CTA examples
- "오늘의 추천 아이템" — section title example
- "안전결제" / "감정완료" / "내폰시세" — service-chip labels (used descriptively)
- "19시간 전" — timestamp pattern example; "강남" — region abbreviation example
- "원" — price suffix with Hindu-Arabic numerals
- "1 / 10" — carousel counter overlay example

### Derived editorial voice

The following voice reading, observed-pattern list, and five voice principles — direct-fast-lower-case-energy, `~해요/세요` without exclamation marks, the-brand-does-NOT-shout, verbs-over-nouns, better-path-not-the-only-path, cards-never-editorialize, conversational-timestamps, smallest-disambiguating-region, Verb-first-present-tense, No-urgency-manufacturing, Specificity-over-enthusiasm, the-price-is-the-headline, and Respect-the-trader — are a derived editorial implementation inference from the verified surfaces; they are not Bunjang-authored or a separately published UI specification. They are not the Observed strings above. Source marks this section analysis-only.

Source describes home-surface voice as direct, fast, lower-case-energy even when written in Korean. Sentences default to plain `~해요/세요` register without exclamation marks. The brand does NOT shout.

Observed patterns in that analysis:

- CTAs use verbs over nouns: "앱 다운로드" not "앱 다운로드 페이지로"
- App-install nudges acknowledge the user's autonomy: the banner copy frames the app as a *better* path, not the only path
- Product cards never editorialize the listing — no "🔥 인기!" "마지막 1개!" — the only emphasis comes from typography weight on the price
- Time stamps are conversational ("19시간 전") not absolute ("2026-05-13 22:14")
- Region is abbreviated to the smallest disambiguating unit ("강남" not "서울특별시 강남구")

Voice principles in that analysis:

1. **Verb-first, present-tense.** Push the next action; don't describe the current state.
2. **No urgency manufacturing.** Scarcity is already treated as real; do not invent countdown copy.
3. **Specificity over enthusiasm.** "오늘 19시간 전 등록" beats "방금 막!"
4. **The price is the headline.** Never write a marketing line above a price; let the price be loud and let the title be quiet.
5. **Respect the trader.** Both buyer and seller are users — never copy that flatters one side at the other's expense.

The following Karrot comparison — warm-neighbor vs high-volume-trader, trust-by-being-unsentimental, and promise-as-velocity-and-price-discovery — is a derived editorial implementation inference from the verified surfaces; it is not Bunjang-authored or a separately published UI specification. It is not a first-party brand manifesto.

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

### Named gaps

These decisions are unnamed values, not permissions to invent:

- observed hover / pressed visual treatments
- `focus-visible` visual treatment
- interpolated YAML `#c00b15` (not an observed hover paint)
- loading / error / success visual treatments for Secondary CTA, Search input, and Heart
- public Bun UI Storybook, public npm package, published documentation site, public GitHub artifacts
- motion transition properties, animation name, duration, easing, and reduced-motion behavior
- Header / App-Download Top Banner component type and kind
- Product Card / service-chip interactive kind

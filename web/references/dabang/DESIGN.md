---
id: dabang
name: 다방
display_name_kr: Dabang (다방)
country: KR
category: consumer-tech
homepage: "https://www.dabangapp.com"
primary_color: "#ff3478"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=dabangapp.com&sz=256"
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  note: "brand pink #FF3478 stays wordmark-only; functional accent is action blue #326CF9. Strict 3-layer color discipline: pink=brand, blue=action, gray=content."
  colors:
    primary: "#326CF9"
    primary-hover: "#326CF9"
    brand: "#FF3478"
    canvas: "#FFFFFF"
    surface: "#FFFFFF"
    foreground: "#222222"
    body: "#222222"
    muted: "#656565"
    on-primary: "#FFFFFF"
    hairline: "#DFDFDF"
    surface-muted: "#F5F5F5"
    hover-tint: "#EEF8FF"
    success: "#1CA885"
    danger: "#E20724"
    warning: "#FFB600"
    premium: "#3E26FD"
  typography:
    family: { sans: "Pretendard Variable" }
    section:  { size: 20, weight: 700, lineHeight: 1.3, use: "Category section heads — position + weight, not size" }
    ai-band:  { size: 24, weight: 400, lineHeight: 1.3, use: "AI band head — largest yet lightest, editorial signal" }
    body:     { size: 16, weight: 400, lineHeight: 1.5, use: "Body default, #222222" }
    chip:     { size: 14, weight: 500, lineHeight: 1.4, use: "Filter-chip label (only 500-weight role)" }
    caption:  { size: 13, weight: 400, lineHeight: 1.4, use: "Secondary text / meta" }
  spacing: { xs: 4, sm: 8, md: 16, base: 8, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 2, md: 4, lg: 8, xl: 12, entry: 32, filter: 42, full: 9999 }
  shadow:
    none: "none — zero box-shadow across surface; depth via 1px borders + bg-color steps"
  components_harvested: true
  components:
    button-entry: { type: button, fg: "#222222", radius: 32, use: "Home search-entry pill — tap to start a search" }
    filter-chip: { type: toggle, bg: "#FFFFFF", fg: "#222222", radius: 42, font: "14/500", use: "Map filter pill, 1px #DFDFDF border; active = #326CF9 border + #EEF8FF bg" }
    listing-card: { type: card, bg: "#FFFFFF", radius: 8, use: "Floating left-rail listing card, 1px #DFDFDF border, no shadow" }
    map-marker: { type: badge, bg: "#FFFFFF", fg: "#222222", radius: 2, use: "Price-bearing pill marker; selected = #326CF9 fill — price is the marker" }
    icon-control: { type: button, radius: 9999, use: "Circular bookmark / close control" }
---

# Design System Inspiration of Dabang (다방)

## 1. Visual Theme & Atmosphere

Dabang's web product reads like a working tool that does not want to be looked at too long. The home surface is white, the map surface is whiter, and the chrome between them is a near-black `#222` neutral sitting at body weight 400 on top of Pretendard Variable. Where its direct competitor Zigbang reaches for a Bloomberg-terminal restraint and reserves orange exclusively for the wordmark, Dabang takes the opposite trade: a saturated brand pink — `#FF3478`, internally tokenised as `--pink-500` — sits on the logo and stays there. Action moves to a different color entirely. The functional accent is blue `#326CF9` (`--blue-500`), and it appears in two places only: the selected map marker, and the focus state on filter pills. That split — pink for identity, blue for behavior, near-black for everything else — is the structural decision that organizes the system.

The map page is where the design's intent becomes visible. Filter chips sit on a 1px `#DFDFDF` border at a 42px pill radius, weight 500 text — full-round pills, not the 8/10px rectangles the rest of the Korean property cohort ships. The map canvas itself fills the viewport; price markers float over it as small rounded rectangles tinted by `--blue-500` when selected and a deep gray when default. There is no box-shadow anywhere on the production surface — 53 of 53 sampled elements returned `box-shadow: none`. Depth is borders and tints exclusively: a 1px hairline in `#DFDFDF` for separation, a `#EEF8FF` (the lightest blue-50) wash for hover, a `#F5F5F5` plate for muted sections. The product is engineered to be skimmed at speed; it does not perform visual weight.

The token system is unusually complete for a Korean consumer property app. Captured directly off `:root` via CDP, Dabang exposes a full 8-hue × 10-step scale — blue, pink, gray, green, violet, yellow, red, plus an `-rgb` variant of each step (140 CSS custom properties total). The ramps are not decorative; they encode product reality. `--pink-500` is the brand wordmark. `--blue-500` is interaction. `--gray-900` (`#222`) is body text. `--green-500` (`#1ca885`) is reserved for verified-listing and "안심" trust signals (not observed live this pass, inferred from token semantics). The colored ramps not seen on the home or map surfaces (violet, yellow, red beyond 500) sit on `:root` waiting — Dabang built the system, then deployed only the slice it needed.

The most striking single decision is the AI feature band. Where every other H1 on the home page is `font-weight: 700` (원/투룸, 아파트, 주택/빌라, 오피스텔, 분양 — all 18-20px, all bold), the AI personalized band reads "관심있는 [동] 주변, AI가 대신 찾아봤어요 🔍" at 24px / **400**. It is the largest heading on the page and the lightest. The choice signals an intentional voice: AI is conversational, AI does not shout, AI is the only place on the surface where an emoji is allowed. It is the one place the system relaxes — and it does so by going *lighter*, not bolder.

**Key Characteristics:**
- **Pretendard Variable** universal (100% — 53/53 samples)
- **Pink-500 `#FF3478`** brand-mark only — never appears on functional UI on the map surface
- **Blue-500 `#326CF9`** as the single functional accent — selected marker, focus ring, link emphasis
- **Near-black `#222` (`--gray-900`)** as the dominant text token — 21/53 samples
- **42px full-pill filter chips** with 1px `#DFDFDF` border — distinctive vs Zigbang's 10px chip default
- **Zero box-shadow** across the production surface — depth is borders + tints exclusively
- **Two pill radii co-exist**: 32px for entry CTAs (home search), 42px for filter strips (map) — a *contextual* radius ladder, not a flat scale
- **Weight cliff 400 → 700** with only 2 occurrences of 500 across 53 samples — emphasis is binary
- **AI band at 24px / 400** — the lightest large heading is the editorial signal of the AI surface

## 2. Color Palette & Roles

### Brand
- **Dabang Pink** `#FF3478` (`--pink-500`): logo wordmark and brand-chrome accent. Used 2× in 32 home samples; **does not propagate** into the map product surface. This is the system's most disciplined rule — brand color stays in the brand layer.
- **Map Canvas White** `#FFFFFF`: the dominant surface on `/map/onetwo`. Listing cards, filter pills, and chrome float above the map tiles with hairline borders separating them.

### Text Neutrals (full gray ramp on `:root`)
- `--gray-50` `#FCFCFC` · `--gray-100` `#FAFAFA` · `--gray-200` `#F5F5F5` · `--gray-300` `#EDEDED` · `--gray-400` `#DFDFDF` · `--gray-500` `#CCCCCC` · `--gray-600` `#979797` · `--gray-700` `#656565` · `--gray-800` `#434343` · `--gray-900` `#222222`
- **Primary body text** = `--gray-900` `#222` (observed 21/53)
- **Secondary text** = `--gray-700` `#656565` (2/53, footer / meta)
- **Default border** = `--gray-400` `#DFDFDF` (7/21 map samples — single most-used border value)

### Interactive
- **Action Blue** `#326CF9` (`--blue-500`): selected marker fill, focus ring, primary link emphasis. The full blue ramp (50→900) is on `:root` for state escalation.
- **Hover/active tint** `#EEF8FF` (`--blue-50`): the only tint observed live for hover/active surfaces.

### Trust / Status (system-ready, not all observed live)
- `--green-500` `#1CA885` inferred role: verified-listing / 안심 badge (semantic match to KR property convention).
- `--red-500` `#E20724` inferred role: error / urgent / sold-out indicator.
- `--yellow-500` `#FFB600` inferred role: warning / pending state.
- `--violet-500` `#3E26FD` inferred role: premium / promoted-listing tier (the violet ramp is the cleanest mathematical ladder in the system — suggests reserved future-feature use).

### Surface
- **Page bg** `#FFFFFF` (17/53)
- **Muted plate** `#F5F5F5` (`--gray-200`)
- **Hover tint** `#EEF8FF` (`--blue-50`)
- **Deep slate promo panel** `rgb(67, 77, 104)` — used once for a saved-search call-out band; off-ladder color, suggesting marketing-team override rather than token-system primitive.

### Color discipline summary
The system separates three layers with strict color rules:
1. **Brand layer** (logo / wordmark) — `--pink-500` only.
2. **Action layer** (selected / focus / link) — `--blue-500` only.
3. **Content layer** (text / borders / surfaces) — gray ramp only.

The other five hues (green, violet, yellow, red, beyond the 500 steps of blue/pink) are present on `:root` but not deployed on home or map chrome. They exist for status and state escalation, not decoration.

## 3. Typography

- **Family**: Pretendard Variable (100% of 53 samples). No display accent, no second family. Fallback chain inferred: Pretendard Variable → Pretendard JP Variable → -apple-system → BlinkMacSystemFont → system-ui → Apple SD Gothic Neo → Noto Sans KR → Malgun Gothic → sans-serif.
- **Weights**: 400 (39/53), 700 (12/53), 500 (2/53). The system effectively ships a **binary weight rhythm** with 500 reserved for filter-chip labels on the map surface.
- **Sizes observed**: 10 · 12 · 13 · 14 · 16 · 18 · 20 · 24 px. No 32 / 40 / 48 captured on the surfaces sampled — Dabang does not have a marketing hero typeface scale visible from product entry.
- **Body default**: 16px / 400 / `--gray-900`.
- **Section heads (categories)**: 18-20px / 700.
- **AI band head**: 24px / 400 — the deliberate inversion (largest = lightest).
- **Hierarchy logic**: position + weight, not size. The system trusts that "section title" reads as such because it sits at the top of a card grid, not because it is 40px.

## 4. Spacing & Layout

- **Base grid**: 8px (inferred from padding samples; not exhaustively token-mined this pass — flagged for UPDATE).
- **Map canvas dominance**: ~70% of viewport width on `/map/onetwo` belongs to the map tile renderer; chrome (left listing rail, top filter strip) is built around not obscuring it.
- **Listing rail**: floating left column, card-based, 1px `--gray-400` borders, no shadow.
- **Filter strip**: horizontal pill row across the top of the map surface, 42px pill radius, 1px hairline border.
- **Home page**: vertical card grid with section bands; AI band uses a different background tint to signal its different voice.

## 5. Radius

A **contextual ladder**, not a flat scale:
- `0px` (31/53) — default for text containers, dividers, list items
- `2px` (7/53) — tight chips, map markers
- `4px` (3/53) — input fields
- `8px` (5/53) — cards, secondary buttons
- `12px` (2/53) — large card surfaces, promo panel
- `32px` (1/53) — home search-entry pill
- `42px` (1/53) — map filter chips
- `50%` (2/53) — circular icon controls (bookmark, close)

The two pill radii (32 and 42) co-exist because they signal different things: 32px is "tap to start a search," 42px is "filter you can toggle on/off mid-flow." The distinction is functional, not aesthetic.

## 6. Elevation

**Zero box-shadow** across 53 sampled production elements (100%). Depth is achieved exclusively by:
1. 1px `--gray-400` borders
2. Background-color steps (white → `--gray-200` → `--blue-50` tint)
3. Z-stacking via position (filter strip > map; listing rail > map)

This matches Bunjang's zero-shadow discipline and diverges from Zigbang (minor floating shadows on drawer) and most international property platforms (Zillow / Rightmove ship multi-tier shadow scales). The structural argument: shadows on a map surface fight the map's own visual depth (terrain tints, road shadows). Borders do not.

## 7. Motion & State

- Motion tokens **not captured** this pass (single static CDP capture; no animation timeline observed).
- Filter chip state inferred (active → `--blue-500` border + `--blue-50` background; default → `--gray-400` border + white).
- Hover state observed once as the `--blue-50` `#EEF8FF` background tint.
- **Flagged for UPDATE**: full state matrix (hover / active / disabled / loading) and motion duration/easing tokens.

## 8. Iconography & Imagery

- **Map markers**: pill-shaped price-bearing markers — text content (e.g. "전세 3.2억") replaces the typical icon-only pin. This is the system's defining product affordance: price *is* the marker.
- **Category icons**: light-line illustrative icons on the home category grid (원/투룸 · 아파트 · 주택/빌라 · 오피스텔 · 분양).
- **AI band emoji**: 🔍 — the only emoji captured live on the home surface. Emoji presence is a voice signal, not a decorative pattern.
- **Listing photography**: thumbnails likely portrait-oriented for mobile-first display (Bunjang uses 81:100; Dabang's exact aspect ratio not captured this pass — flagged).

## 9. Accessibility & A11y Notes

- Pretendard Variable + 16px body sits well above WCAG SC 1.4.4 floor.
- `#222` text on `#FFF` background = 16.0:1 (passes AAA).
- `#326CF9` action blue on white = 4.6:1 (passes AA for normal text).
- **`#FF3478` brand pink on white = 3.4:1 — fails AA for body text**, passes AA only for large text ≥18.66px. Dabang appears to honor this by restricting pink to the wordmark and large-display contexts, not running body text in brand color. Downstream port should preserve this restriction.
- **42px filter pills** comfortably exceed WCAG 2.5.5 minimum hit target (44px tap target measured center-to-edge of pill).
- Map markers at 2px radius are visually crisp but may have hit-target debt at default zoom — flagged for verification.

## 10. Voice & Tone

Dabang's voice on the home surface is **functional with one moment of warmth**. Category labels are bare nouns (원/투룸 · 아파트 · 분양). Section heads are imperative-light ("우리동네 한눈에 보기" — "see your neighborhood at a glance"). Then the AI band drops the bold and adds an emoji: "관심있는 [동] 주변, AI가 대신 찾아봤어요 🔍" — "AI looked around your neighborhood for you 🔍". The verb-ending `-했어요` is casual-polite (반말 톤은 아니지만 격식체도 아닌 중간 톤). The rest of the page is `-합니다` or noun-only labels. The voice cliff is intentional: AI talks, the rest of the product labels.

**OmD-original voice reconstructions** (illustrative, tone-shape-only, not adopted from Dabang surface):
- "내가 살고 싶은 동네, 다 찾아봤어요" (warmth — match AI band register)
- "원룸 137건. 지도에서 확인하세요" (functional — match category label register)
- "조건 저장하면 새 매물 알려드려요" (utility — match notification register)

The system rule: warmth lives in the AI surface; functionality lives in the chrome. Do not bleed casual `-요` endings into structural labels.

## 11. Personas (factual inferred — public-survey-only)

[FILL IN — Dabang user surveys/research not publicly indexed at OmD attribution fidelity.] Reported product positioning suggests:
1. **20s-30s renter searching one-room / two-room (원/투룸)** — primary surface user; price-marker-first browsing
2. **Newlyweds / first-home buyers searching apartment listings (아파트)** — secondary segment; broader filter use
3. **Pre-construction subscribers tracking new-build offerings (분양)** — niche but visible nav slot

§11 narrative is treated as **factual inference from public surface positioning**, not as adopted persona research. Any downstream use should re-validate with primary research.

## 12. Anti-Patterns (don't steal)

- **Do not stretch `--pink-500` into product chrome.** Dabang's discipline is to keep pink as wordmark-only; copying the color without the discipline produces a "saturated red-pink" experience that fights the map.
- **Do not adopt the zero-shadow rule without the border discipline.** Removing shadow but not investing in clean 1px hairlines collapses depth entirely; borders are doing the work shadows would.
- **Do not flatten the contextual radius ladder.** 32 and 42 px are *different decisions*; replacing both with "16px pill" loses the affordance distinction (entry-CTA vs toggle-filter).
- **Do not propagate the 400-weight AI band tone elsewhere.** It works because the rest of the surface is 700-bold; making everything 400 collapses the voice cliff.
- **Do not adopt the 14px Korean body density** without verifying line-height and letter-spacing on the target language. Dabang's 14-16px stack is tuned for Korean character rendering on Pretendard.

## 13. Tokens-as-Shipped Summary

```
--pink-500    #FF3478   brand wordmark
--blue-500    #326CF9   action / selected
--gray-900    #222222   primary text
--gray-700    #656565   secondary text
--gray-400    #DFDFDF   default border
--gray-200    #F5F5F5   muted plate
--blue-50     #EEF8FF   hover tint
--green-500   #1CA885   trust / verified (inferred role)
--red-500     #E20724   error / urgent (inferred role)
--yellow-500  #FFB600   warning (inferred role)
--violet-500  #3E26FD   premium / promoted (inferred role)

radius:  0 / 2 / 4 / 8 / 12 / 32 / 42 / 50%
weight:  400 / 500(sparse) / 700
font:    Pretendard Variable (100%)
shadow:  none (100%)
```

## 14. Methodology & Sources

- **Tier 1 — live product** (positive): Chrome DevTools Protocol :9222, `Runtime.evaluate` + `getComputedStyle` on `https://www.dabangapp.com/` (32 samples) and `https://www.dabangapp.com/map/onetwo` (21 samples) on 2026-05-15. 140 CSS custom properties extracted from `:root`. Full proof in `assets/_reference/.live-inspect-proof.json`.
- **Tier 1 — official DS** (negative, authoritative): `design.dabangapp.com` / `brand.dabangapp.com` / `tech.dabangapp.com` / `docs.dabangapp.com` all DNS no-resolve. `dabangapp.com/brand` and `/design` return HTTP 200 but resolve to the SPA shell (title remains "부동산 필수 앱 다방") — no DS surface published. Parent company is Station3 (스테이션쓰리); `stationthree.com` returns 200 (corporate page), but no Tech / Design portal. GitHub `forgeinc/stationTHREE` (1 repo, corporate site) is the only org-level surface — no design-system / tokens / Storybook repo.
- **Tier 2 — third-party DS indexes** (negative): `getdesign.md` search "dabang" → no entry. `styles.refero.design` search "dabang" / "다방" → no result cards. Consistent with the systemic KR-coverage gap logged in `2026-05-13-kr10.md` / `2026-05-14-kr10.md`.
- **Tier 3 — competitor cross-reference** (consulted): `references/zigbang/DESIGN.md` (KR-real-estate direct competitor); `references/bunjang/DESIGN.md` (zero-shadow + KR-marketplace radius pattern).
- **Tier 4 — corporate context**: Station3 Co., Ltd. (스테이션쓰리 주식회사), founded 2012, headquartered in Seoul. Dabang launched 2013 as 원룸/투룸 specialist; expanded to 아파트 + 분양 verticals in 2018-2021; current scope covers full-spectrum residential. Acquired by KCC Construction in 2022. Full corporate verification to attribution fidelity not completed this pass — flagged.
- **Tier 5 — anti-pattern survey**: red+yellow "신규!" badge saturation typical of legacy KR property classifieds (네이버 부동산, 직방 pre-2022) used as the negative reference. Dabang's discipline reads against that legacy.

## 15. Verification Footer

- **Tier 1 live capture**: ✓ CDP :9222, 53 raw_samples, 140 :root vars, 2 surfaces — reproducible via `ws://localhost:9222/devtools/page/B7DFD59E5452E64CA14275E072BFAC20` on Chrome/148.
- **Tier 1 official DS**: ✗ AUTHORITATIVE NEGATIVE. No public DS hub, no Storybook, no GitHub design-system repo. Production `:root` token set is the public artifact.
- **Tier 2 indexes**: ✗ getdesign.md empty; ✗ styles.refero.design empty (dabang / 다방).
- **Confidence**: High on §1-§6 (live-captured); Medium on §7-§8 (motion + iconography partially inferred); Low on §11 (personas FILL IN); High on §13 (token table is direct capture).
- **IP guardrails**: Brand assets reference-only. No verbatim taglines. Voice fresh. Service-feature names used descriptively only.
- **Flagged for UPDATE pass**:
  - Product-detail page (개별 매물 상세) — spacing scale + price typography
  - Filter modal / sort sheet — full state variants
  - Mobile viewport 390×844 — Dabang is mobile-first
  - Motion tokens — duration/easing
  - Listing thumbnail aspect ratio
  - Verified Station3 corporate timeline to attribution fidelity

## 16. Do's and Don'ts

### Do
- Keep brand pink `#FF3478` (`--pink-500`) on the logo wordmark and large-display contexts only, since at 3.4:1 on white it fails AA for body text
- Drive all interaction state — selected map markers, focus rings, link emphasis — with action blue `#326CF9` (`--blue-500`) and its `#EEF8FF` (`--blue-50`) hover tint
- Build depth from 1px `#DFDFDF` (`--gray-400`) hairline borders and background-color steps (white → `#F5F5F5` → `#EEF8FF`), keeping `box-shadow: none` everywhere
- Set body text in `#222` (`--gray-900`) at 16px/400 and run a binary 400→700 weight rhythm, reserving 500 for map filter-chip labels
- Preserve the contextual radius ladder by using 32px pills for search-entry CTAs and 42px pills for toggleable map filter chips
- Render price as the map marker itself (e.g. '전세 3.2억') and let warmth surface only in the AI band — 24px/400 with a single 🔍 emoji

### Don't
- Spread `--pink-500` into product chrome — keeping it wordmark-only is the system's most disciplined rule, and bleeding it onto the map produces a saturated pink that fights the canvas
- Adopt the zero-shadow rule without investing in clean 1px `#DFDFDF` hairlines, since borders are doing the depth work shadows would
- Flatten the 32px and 42px pill radii into one value, which loses the affordance distinction between search-entry CTA and toggle-filter
- Propagate the 400-weight AI-band tone across the surface — it only reads as editorial because the surrounding section heads are 700-bold at 18-20px
- Bleed casual `-요` endings into structural labels — warmth lives in the AI surface while category labels stay bare nouns (원/투룸 · 아파트 · 분양)
- Reuse the dense 14px Korean body stack without re-tuning line-height and letter-spacing, since it is tuned for Pretendard's Korean character rendering

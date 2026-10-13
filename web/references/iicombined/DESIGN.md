---
name: IICOMBINED
colors:
  ink: '#111111'
  primary: '#111111'
  on-primary: '#ffffff'
  ink-pure: '#000000'
  canvas: '#f3f4f6'
  on-image: '#ffffff'
  muted: '#858585'
  chip-selected: '#dfe3e8'
  outline: '#ababab'
typography:
  campaign:
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.17
    use: Campaign slide titles over the home hero, white, gentleMonsterSerif
  collection-title:
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.2
    use: Listing title at the head of the sunglasses listing (h1), gentleMonsterSerif
  product-title:
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.29
    use: Product name on the product page (h1), gentleSerifBoldKo
  section:
    fontSize: 17px
    fontWeight: 350
    lineHeight: 1.29
    use: Section headings lower on the product page (h2.title), gentleSansLightKo
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Page body text on all three pages, gentleSansRegularKo
  nav:
    fontSize: 13px
    fontWeight: 350
    lineHeight: 1.38
    use: Top menu items in the header, gentleSansLightKo
  product-name:
    fontSize: 12px
    fontWeight: 350
    lineHeight: 1.42
    use: Product names under product images (h3), gentleSansLightKo
  meta:
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.45
    use: Grey secondary lines under products on home, gentleSansRegularKo
  button:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.67
    use: Label of the filled product-page action, gentleSansRegularKo
  footer:
    fontSize: 12px
    fontWeight: 350
    lineHeight: 1.42
    use: Footer links, gentleSansLightKo
rounded:
  button: 8px
  pill: 25px
  chip: 35px
spacing:
  pill-x: 23
  button-x: 10
  chip-y: 7
  chip-x: 12
components:
  primary-button:
    type: button
    backgroundColor: '#111111'
    textColor: '#ffffff'
    rounded: 8px
    padding: 0px 10px
    height: 48px
    typography: 12px / 400 / 20px gentleSansRegularKo
    states: rest only; the collector recorded no state frame, and it was not pointer-probed because it is the filled action in the product page's purchase area, where a press could add the item to the bag
    use: The one filled action on the product page at surface-3::[data-omd-capture="59"] (button.btn-common), 327 x 48; its label was not read
  campaign-pill:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    border: '1px solid #ffffff'
    rounded: 25px
    padding: 0px 23px
    height: 36px
    typography: 11px / 400 gentleSansRegularKo (label span)
    states: '구매하기: hover and pressed show no change within the probe''s compared scope (self, its one label span, three ancestor levels; transitions compute 0s); 캠페인 보기: hover and pressed unmeasured because :hover did not match; focus not measured'
    use: '구매하기 / 캠페인 보기 pair on the home hero slides at home::[data-omd-capture="56"] (88 x 36) and 57 (101 x 36); the anchor itself computes #111111 at 16px, but the visible label is its child span in #ffffff at 11px (fixed probe)'
  load-more-button:
    type: button
    backgroundColor: transparent
    textColor: '#111111'
    border: '1px solid #ababab'
    rounded: 8px
    height: 44px
    typography: 12px / 350 gentleSansLightKo
    states: rest only; no state frame
    use: Load-more control under the product grid of the sunglasses listing at surface-2::[data-omd-capture="196"] (button.btn-more), 184 x 44
  filter-chip:
    type: tab
    backgroundColor: transparent
    border: '1px solid #dfe3e8'
    rounded: 35px
    padding: 7px 12px
    height: 33px
    selected: 'bg #dfe3e8 with a 1px #dfe3e8 border on the item carrying class on (capture 56)'
    states: selected variant read from rest values (capture 56 against 57); no pointer frame
    use: Filter chips at the top of the sunglasses listing at surface-2::[data-omd-capture="57"], 59 x 33; the anchors compute font-size 0px, so their labels sit in children that were not captured and no label colour or font is claimed
  header-menu-item:
    type: tab
    backgroundColor: transparent
    textColor: '#000000'
    height: 18px
    typography: 13px / 350 / 18px gentleSansLightKo
    states: 'rest only; over the home hero the same items read #ffffff (home::[data-omd-capture="0"]), so the header recolours with the page'
    use: Top menu items in the header of the listing and product pages at surface-2::[data-omd-capture="0"], 48 x 18
  underlined-text-action:
    type: button
    backgroundColor: transparent
    textColor: '#111111'
    height: 16px
    typography: 11px / 400 / 16px gentleSansRegularKo, uppercase, underlined with a 3px offset
    states: rest only; no state frame
    use: Underlined uppercase text actions repeated 47 times on home at home::[data-omd-capture="72"], 104 x 16; labels were not read
fonts:
  roles:
    display: gentleMonsterSerif
    body: gentleSansRegularKo
    light: gentleSansLightKo
    serif-bold: gentleSerifBoldKo
---

# Design System Inspiration of IICOMBINED

## Overview

### Visual Theme & Atmosphere

IICOMBINED (아이아이컴바인드) is the Korean company behind the eyewear brand Gentle Monster. Its own site introduces it as "the innovative global company which has fundamentally different paradigm for retailing business", under the line "Unexpected Wonder. High-end Valueness." and the promise of "Brands, made of experimental differentiation." It says Gentle Monster, launched in 2011, was the first brand it made, and that, "frustrated by lack of remarkable brand store", it set out to build retail spaces never seen before. It sums up its brand identity as PSSCS: Product, Space, Styling, Culture & Campaign and Service. The same company — ㈜아이아이컴바인드, business registration 119-86-38589, CEO 김한국 — is named in the legal footers of gentlemonster.com, tamburins.com and nudake.com, so the fragrance brand Tamburins and the dessert brand Nudake belong to the same house, each on its own domain.

This reference measures the domain it declares, www.gentlemonster.com: Gentle Monster's official online store ("젠틀몬스터 공식 온라인 스토어"). The store's structured data names Hankook Kim as founder and IICOMBINED CO., LTD. as parent organisation. Its navigation shows where the brand is now: a 2026 collection, the Veggie Collection, collaborations with Prada, Maison Margiela and Tekken 8, a Pocket Collection and a page for intelligent eyewear. When the home was probed, the active hero slide was a PRADA GENTLE campaign.

The captured pages read as an image-led gallery with very little chrome. The page is a pale cool grey (`#f3f4f6`), not white, and every text is near-black `#111111`. Campaign slides carry white serif titles (Gentle Monster Serif, 24px) above a pair of transparent 25px pills drawn only with a 1px white stroke and white 11px labels. The header menu is white over the hero and turns `#000000` on the listing and product pages. On the listing, products are captioned in 12px GentleSans Light with grey `#858585` meta lines, and 35px-radius chips filter the grid, the selected one filled with pale grey `#dfe3e8`. The product page is the only place with a filled action: a full-width `#111111` block with 8px corners and a white label.

**Key Characteristics:**
- Pale grey canvas `#f3f4f6` with near-black `#111111` text; white only over imagery
- A house serif (Gentle Monster Serif) for campaign and listing titles, and a serif bold for product names
- GentleSans Regular (400) and Light (350) for everything functional, at small sizes: 11–13px labels, 16px body
- Transparent 25px campaign pills with a 1px white stroke; 35px filter chips; 8px on the few rectangular actions
- One filled action, `#111111` with white text, on the product page
- A header that recolours with the page: white over the hero, `#000000` on white pages
- No shadows on product UI; photography carries depth and colour

### Primary tasks

- Buy a pair straight from a campaign slide
- Browse sunglasses and glasses, bestsellers and collections from the top menu
- Filter a listing and load more products
- Open a product and act on it from the purchase area
- Find a Gentle Monster store

### Brand Narrative

IICOMBINED describes itself as a company that approaches retail with "fundamentally different paradigm", creating brands, products and projects and "evolving it in our own way over the limit". Its first brand was Gentle Monster, a luxury eyewear brand launched in 2011. The about page explains the store strategy in the company's own words: frustrated by the lack of remarkable brand stores, it decided to make "a never seen before specialty retail space", and it built each brand's identity across five parts it calls PSSCS — Product, Space, Styling, Culture & Campaign and Service. It ends by saying its brands and members work "in creativity and humanity for the people who feels the unexpected wonder".

The house now spans several brands that share one legal entity: the footers of Gentle Monster, Tamburins and Nudake all name ㈜아이아이컴바인드 with the same registration number and CEO, 김한국, and Tamburins and Nudake give the same address, 서울특별시 성동구 뚝섬로 433. Each brand keeps its own site and design; this reference covers Gentle Monster's store only.

On gentlemonster.com that philosophy reads as restraint. The interface is a thin layer of small, light type over campaign photography; the serif is kept for titles; colour is left to the pictures. The collection and collaboration pages in the navigation (Prada, Maison Margiela, Tekken 8) show a brand that treats each release as a campaign. (The last two sentences are editorial readings of the captured pages, not company statements.)

### Principles

1. **Unexpected wonder.** The company line. *UI implication:* let campaign imagery surprise; keep the interface out of its way.
2. **Space as part of the brand.** Space and Styling are two of the five PSSCS parts. *UI implication:* treat the page like a room — a grey canvas, thin chrome, few objects.
3. **Experimental differentiation.** *UI implication:* distinctive house typefaces instead of a generic sans; serifs only where a title needs a voice.
4. **One action at a time.** *UI implication:* a single filled `#111111` action on the product page; everything else is a stroke or a text link. (An editorial reading of the captured pages.)
5. **Quiet type.** *UI implication:* 350–400 weights and 11–13px labels.

### Personas

*Personas below are fictional archetypes informed by publicly observable Gentle Monster customer segments (design-aware eyewear buyers, collaboration collectors, visitors to the flagship stores), not individual people.*

**정유진, 27, 서울.** A design-aware shopper who follows Gentle Monster's campaigns. Opens a campaign slide, taps 캠페인 보기, and buys from the product page if the collection lands.

**Marcus Lee, 33, Singapore.** A collector of collaboration releases. Goes straight to the Prada and Maison Margiela collections from the menu and filters the listing by chip.

**한소희, 41, 서울.** A creative director who studies the brand's retail spaces. Uses the store to check a new collection before visiting a store listed on the stores page.

## Colors

Every token below was read by the deterministic collector on 2026-09-30 from the Gentle Monster home, the sunglasses listing and a product page, or by the fixed keyboard probe on the home the same day.

### Primary
- **Ink Black** (`#111111`): The fill of the product page's one filled action (`button.btn-common`, 327 × 48, `rgb(17, 17, 17)`) and the colour of all body text, product names and footer links. It is the primary because it is the measured fill of the primary action, and the pages are otherwise monochrome: the campaign pills are transparent with white strokes, the load-more control is outlined, and the selected filter chip is pale grey. The OneTrust consent dialog's accept button renders the same `#111111` fill, but it is consent chrome, not a product action, and is not used as evidence.
- **On Primary** (`#ffffff`): The label of the filled action.

### Neutral & Surface
- **Canvas** (`#f3f4f6`): The body background on all three pages.
- **Chip Selected** (`#dfe3e8`): The fill and 1px border of the selected filter chip; the unselected chips keep the border only.
- **Outline** (`#ababab`): The 1px border of the load-more control.

### Text
- **Ink Black** (`#111111`): Body, product names, footer.
- **Pure Black** (`#000000`): The header menu on the listing and product pages.
- **On Image** (`#ffffff`): The header menu over the home hero, campaign titles, and the stroke and labels of the campaign pills.
- **Muted Grey** (`#858585`): Secondary lines under products on home; also the computed colour of the unselected filter chips' anchors.

### Brand assets, not tokens
- The Gentle Monster logo and campaign imagery were not measured; colour in the photography belongs to the campaigns, and no image colour is a token here.

## Typography

### Font Family
- **Live surface use**: four faces, all loaded and self-hosted by the store through Next.js under `www.gentlemonster.com/kr/_next/static/media/` — `gentleSansRegularKo` (870 observed uses: body, labels, buttons), `gentleSansLightKo` (268: menu items, product names, footer), `gentleMonsterSerif` (5: campaign titles and the listing title) and `gentleSerifBoldKo` (2: the product-page title). The browser reports them under hashed local-font names such as `__gentleSansRegularKo_ca70b3`; the tokens use the face names without the hash.
- **Official product use**: these faces are named for the brand and are served only by its own store; no distribution or licence page for them was found or opened, so no licence is stated.
- **Declared only (no visible use)**: `gentleSansLightCn`, `gentleSansLightEn` and `gentleSansLightJp`, plus the generated fallback faces, are declared in `@font-face` with 0 observed uses.
- **Stack fallbacks**: the body stack continues with `"Sandoll GothicNeo1 Md", Arial, sans-serif`. None of these was loaded, and none is a token.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Observed on |
|------|------|------|--------|-------------|-------------|
| Campaign | gentleMonsterSerif | 24px | 400 | 28px (1.17) | Home hero slide titles, white |
| Listing title | gentleMonsterSerif | 20px | 400 | 24px (1.2) | Sunglasses listing h1 |
| Product title | gentleSerifBoldKo | 17px | 400 | 22px (1.29) | Product page h1 |
| Section | gentleSansLightKo | 17px | 350 | 22px (1.29) | Product page section headings |
| Body | gentleSansRegularKo | 16px | 400 | 24px (1.5) | Page body |
| Nav | gentleSansLightKo | 13px | 350 | 18px (1.38) | Header menu |
| Button | gentleSansRegularKo | 12px | 400 | 20px (1.67) | Filled product-page action |
| Product name | gentleSansLightKo | 12px | 350 | 17px (1.42) | Captions under product images |
| Footer | gentleSansLightKo | 12px | 350 | 17px (1.42) | Footer links |
| Meta | gentleSansRegularKo | 11px | 400 | 16px (1.45) | Grey lines under products |
| Pill label | gentleSansRegularKo | 11px | 400 | — | Campaign pill labels (probe) |

### Principles
- **Serif for titles, sans for machinery**: the serifs appear only on campaign, listing and product titles; GentleSans carries every label and control.
- **Light weights, small sizes**: menu items and product names run at weight 350 and 12–13px; nothing in the captured UI is heavier than 400.
- **Normal tracking**: no captured product text sets letter-spacing (only the consent dialog does, at 0.13px).
- **Computed sizes run one pixel under the class names**: `text-13-ko` computes 12px and `text-12-ko` 11px; the values above are the computed ones.

## Layout

### Spacing System
- Campaign pills: 0px 23px padding at 36px height
- Filter chips: 7px 12px padding at 33px height
- Filled action: 0px 10px padding at 48px height, full width of the purchase column (327px)
- The collector's spacing census is led by 12px (168 uses), then 8px (72) and 60px (48)

### Grid & Container
- Home: full-bleed hero slides with a serif title and a pill pair near the bottom, then product rails with small captions.
- Listing: a row of filter chips above a product grid, closed by a centred load-more control.
- Product page: images beside a 327px purchase column with the serif product title and the filled action.

### Whitespace Philosophy
- **Imagery first**: the chrome is thin, light-weight and small so that photography leads.
- **Grey, not white**: the `#f3f4f6` canvas softens the page behind product photography.

### Border Radius Scale
- 0px: almost everything (1,120 captured elements)
- 8px: the filled action and the load-more control
- 25px: campaign pills
- 35px: filter chips

### Responsive Behavior

#### Breakpoints
Only the 1440 × 900 desktop viewport was captured. Class names such as `desktop:block` and `mobile:flex` show separate mobile layouts; no breakpoint was measured.

#### Touch Targets
- Filled action: 48px tall
- Load-more control: 44px
- Campaign pills: 36px
- Filter chips: 33px

#### Collapsing Strategy
- Not measured.

#### Image Behavior
- Product and campaign images sit flat on the canvas, without borders or shadows.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Page, header, pills, chips, actions, product images |
| Tint | `#dfe3e8` fill | Selected filter chip |
| Stroke | 1px `#ffffff` / `#dfe3e8` / `#ababab` | Pills, chips, load-more |
| Fill | `#111111` | The product page's filled action |

**Shadow Philosophy**: no product element computed a box-shadow. The only layered element on the captured pages is the OneTrust consent dialog with its `rgba(31, 30, 29, 0.6)` scrim, which is third-party consent chrome and not part of the store's design.

## Motion & Easing

The collector reads computed style, not animation, so no duration or easing is measured. The home hero is a carousel (Swiper slides), which shows that motion exists without timing it. The campaign pills compute `transition: all 0s`. Treat motion as unspecified rather than borrowing values, and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/iicombined.json (capturedAt 2026-09-30T07:52:34Z), deterministic collector, 1440x900, logged out: www.gentlemonster.com/kr/ko (the frontmatter homepage www.gentlemonster.com lands there), /kr/ko/category/sunglasses/view-all, /kr/ko/item/0PEEZ0A8AASR8/velom01.
- Campaign pill label colour and states: docs/research/2026-09-29-growth/raw/iicombined-states-home.json (fixed keyboard probe, 2026-09-30T08:06Z, --no-focus --hide-overlays; the OneTrust overlay was hidden, not accepted).
- §1, §10, §11 context: www.iicombined.com/about and home; the legal footers and structured data of gentlemonster.com, tamburins.com and nudake.com, all opened 2026-09-30. Tamburins and Nudake are cited for company facts only; their sites were not measured and supply no token.
- Personas are fictional archetypes. Interpretive readings are marked as editorial.
-->

## Components

### Buttons

**Filled action (product page)**
- Background: `#111111`
- Text: `#ffffff`
- Radius: 8px
- Padding: 0px 10px
- Height: 48px (327px wide)
- Font: 12px / 400 / 20px gentleSansRegularKo
- States: rest only; not pointer-probed, because a press in the purchase area could add the item to the bag
- Use: the one filled action on the product page

**Campaign pill**
- Background: transparent
- Border: 1px solid `#ffffff`
- Text: `#ffffff` (the label span; the anchor itself computes `#111111` at 16px)
- Radius: 25px
- Padding: 0px 23px
- Height: 36px
- Font: 11px / 400 gentleSansRegularKo
- States: on 구매하기, hover and pressed showed no change within the probe's compared scope; on 캠페인 보기 they were unmeasured
- Use: the 구매하기 / 캠페인 보기 pair on each home hero slide

**Load-more control**
- Background: transparent
- Border: 1px solid `#ababab`
- Text: `#111111`
- Radius: 8px
- Height: 44px (184px wide)
- Font: 12px / 350 gentleSansLightKo
- States: rest only
- Use: under the product grid of the sunglasses listing

**Underlined text action**
- Background: transparent
- Text: `#111111`, uppercase, underlined with a 3px offset
- Height: 16px
- Font: 11px / 400 / 16px gentleSansRegularKo
- Use: repeated 47 times on home; labels were not read

### Navigation & Filters

**Header menu**
- Background: transparent
- Text: `#000000` on the listing and product pages; `#ffffff` over the home hero
- Height: 18px items
- Font: 13px / 350 / 18px gentleSansLightKo

**Filter chips**
- Border: 1px solid `#dfe3e8`, background transparent
- Selected: background `#dfe3e8`
- Radius: 35px
- Padding: 7px 12px
- Height: 33px
- Labels sit in uncaptured children (the anchors compute font-size 0px), so no label colour or font is specified; the anchors compute `#111111` when selected and `#858585` otherwise

### Product listing
- Products are captioned by a 12px / 350 gentleSansLightKo name in `#111111` and 11px `#858585` meta lines. Product images sit directly on the grey canvas with no card fill, border or shadow observed.

---

**Verified:** 2026-09-30 (deterministic collector capture of three public pages of www.gentlemonster.com, logged out, plus the fixed keyboard probe on the home and first-party company context)
**Tier 1 sources:** https://www.gentlemonster.com/kr/ko ; https://www.gentlemonster.com/kr/ko/category/sunglasses/view-all ; https://www.gentlemonster.com/kr/ko/item/0PEEZ0A8AASR8/velom01 ; https://www.iicombined.com/about ; https://www.tamburins.com/kr/ ; https://www.nudake.com/kr/
**Tier 2 sources:** getdesign.md/gentlemonster and getdesign.md/iicombined ("0 DESIGN.md files") and styles.refero.design/?q=gentle%20monster (the query appears only in the search box), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

### States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Selected (filter chip)** | The selected chip fills `#dfe3e8`; unselected chips are transparent with a 1px `#dfe3e8` border. |
| **Header over imagery** | Menu items are `#ffffff` over the home hero and `#000000` on the listing and product pages. |
| **Campaign pill hover / pressed** | On 구매하기, the fixed probe found no change within its compared scope (self, the label span, three ancestor levels; transitions 0s). On 캠페인 보기, hover did not match, so it is unmeasured. |

The collector recorded no hover, pressed or focus frame and no interaction event, so those treatments are unmeasured rather than absent. Error, empty, loading and success states were not captured and are not described.

## Do's and Don'ts

### Do
- Use the pale grey `#f3f4f6` canvas and near-black `#111111` text
- Keep actions quiet: transparent 25px pills with a 1px white stroke over imagery, a 1px `#ababab` outline on white
- Reserve the filled `#111111` block for the main product action
- Mark the selected filter with a `#dfe3e8` fill on a 35px chip
- Set titles in the house serif and everything else in GentleSans at 350–400
- Recolour the header: white over imagery, black on white pages

### Don't
- Don't add a chromatic accent to the chrome; the captured pages have none
- Don't make the page white; the store's canvas is `#f3f4f6`
- Don't add shadows to products, pills or actions
- Don't substitute Arial or a system face and present it as the Gentle Monster faces
- Don't set labels heavier than 400
- Don't reuse the consent dialog's styling as a product component

## Voice & Tone

IICOMBINED's own voice is declarative and aspirational; the Gentle Monster store speaks in very few words and lets campaigns do the talking.

| Context | Tone |
|---|---|
| Company | Manifesto-like. "Unexpected Wonder. High-end Valueness." |
| Campaign actions | Two plain Korean verbs. "구매하기", "캠페인 보기". |
| Store | Descriptive and official. "젠틀몬스터 공식 온라인 스토어". |
| Collections | Named like shows or projects: "2026 Collection", "Veggie Collection", "Pocket Collection". |

**Voice samples (verbatim, opened 2026-09-30):**
- "Unexpected Wonder. High-end Valueness." — iicombined.com.
- "Brands, made of experimental differentiation." — iicombined.com.
- "구매하기" / "캠페인 보기" — home campaign pills (fixed probe).
- "Home | 젠틀몬스터 공식 온라인 스토어" — gentlemonster.com page title.

**Forbidden register**: discount urgency, countdowns, stacked exclamation marks, copy that competes with the campaign imagery.

## Agent Prompt Guide

### Quick Color Reference
- Canvas `#f3f4f6`; text and filled action `#111111`; label on it `#ffffff`
- Header on white pages `#000000`; over imagery `#ffffff`
- Secondary text `#858585`
- Selected chip `#dfe3e8`; outline `#ababab`

### Example Component Prompts
- "Create the product action: `#111111` background, `#ffffff` 12px label (weight 400, line height 20px), 8px radius, 48px tall, full width of a 327px column, no shadow."
- "Create a campaign pill over a photo: transparent background, 1px solid `#ffffff` border, `#ffffff` 11px label, 25px radius, 0 23px padding, 36px tall; pair two of them."
- "Build filter chips: 35px radius, 7px 12px padding, 33px tall, 1px `#dfe3e8` border; the selected chip also fills `#dfe3e8`."
- "Add a load-more control: transparent, 1px solid `#ababab`, 8px radius, 184 × 44, 12px light label in `#111111`."

### Iteration Guide
1. Grey `#f3f4f6` page, `#111111` text
2. One filled action; everything else transparent, stroked or tinted
3. Serif for titles, GentleSans 350–400 for UI
4. 25px pills, 35px chips, 8px rectangles, 0px elsewhere
5. No shadows; let photography carry colour and depth

---

## Governance

### Known Gaps

- **Contrast, `load-more-button`.** Text `#111111` on `#00000000` measures 1.11:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `header-menu-item`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `underlined-text-action`.** Text `#111111` on `#00000000` measures 1.11:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

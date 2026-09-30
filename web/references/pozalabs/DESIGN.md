---
id: pozalabs
name: POZAlabs
display_name_kr: 포자랩스
country: KR
category: ai
homepage: "https://www.pozalabs.com/"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=pozalabs.com&sz=128"
verified: "2026-09-30"
added: "2026-07-02"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.pozalabs.com/ko/", inspected: "2026-09-30" }
    - { id: surface-2, kind: corporate, url: "https://www.pozalabs.com/ko/about/", inspected: "2026-09-30" }
    - { id: surface-3, kind: marketing, url: "https://www.pozalabs.com/ko/service/", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://www.pozalabs.com/ko/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://www.pozalabs.com/ko/about/", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://www.pozalabs.com/ko/service/", captured: "2026-09-30" }
    - { id: pozalabs-probe-about, kind: product-surface, url: "https://www.pozalabs.com/ko/about/", captured: "2026-09-30" }
    - { id: pozalabs-probe-service, kind: product-surface, url: "https://www.pozalabs.com/ko/service/", captured: "2026-09-30" }
    - { id: pozalabs-blog, kind: official-doc, url: "https://blog.pozalabs.com/", captured: "2026-09-30" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-09-30" }
    - { id: hack-license, kind: license, url: "https://raw.githubusercontent.com/source-foundry/Hack/master/LICENSE.md", captured: "2026-09-30" }
    - { id: sanchez-license, kind: license, url: "https://raw.githubusercontent.com/google/fonts/main/ofl/sanchez/OFL.txt", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &navcur { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.colors.ink": &hero { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h1", captured: "2026-09-30" }
    "tokens.colors.secondary": &navoff { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"2\"]", captured: "2026-09-30" }
    "tokens.colors.charcoal": &pill { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-09-30" }
    "tokens.colors.border-hover": &pillprobe { surface_id: surface-2, source_id: pozalabs-probe-about, method: live-state-probe, selector: "a English (101.8 x 36): rest fg rgb(51, 51, 51), border 1px solid rgba(0, 0, 0, 0.2); hover and pressed border -> 1px solid rgb(148, 148, 148), label unchanged; transition color, background-color, border-color, text-decoration-color, fill, stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1)", captured: "2026-09-30" }
    "tokens.colors.inverse": &inverse { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::p", captured: "2026-09-30" }
    "tokens.colors.inverse-muted": &inverse2 { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::p", captured: "2026-09-30" }
    "tokens.colors.white": &cta { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::span", captured: "2026-09-30" }
    "tokens.typography.family.display": &body { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.typography.family.korean": *body
    "tokens.typography.display-hero.size": *hero
    "tokens.typography.display-hero.weight": *hero
    "tokens.typography.display-hero.lineHeight": *hero
    "tokens.typography.display-hero.use": *hero
    "tokens.typography.display.size": &display { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h1", captured: "2026-09-30" }
    "tokens.typography.display.weight": *display
    "tokens.typography.display.lineHeight": *display
    "tokens.typography.display.use": *display
    "tokens.typography.headline.size": &headline { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::p", captured: "2026-09-30" }
    "tokens.typography.headline.weight": *headline
    "tokens.typography.headline.lineHeight": *headline
    "tokens.typography.headline.use": *headline
    "tokens.typography.tagline.size": &tagline { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::article", captured: "2026-09-30" }
    "tokens.typography.tagline.weight": *tagline
    "tokens.typography.tagline.lineHeight": *tagline
    "tokens.typography.tagline.use": *tagline
    "tokens.typography.body-lg.size": &albumtitle { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h2", captured: "2026-09-30" }
    "tokens.typography.body-lg.weight": *albumtitle
    "tokens.typography.body-lg.lineHeight": *albumtitle
    "tokens.typography.body-lg.use": *albumtitle
    "tokens.typography.section-label.size": &seclabel { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h2", captured: "2026-09-30" }
    "tokens.typography.section-label.weight": *seclabel
    "tokens.typography.section-label.lineHeight": *seclabel
    "tokens.typography.section-label.use": *seclabel
    "tokens.typography.button.size": *cta
    "tokens.typography.button.weight": *cta
    "tokens.typography.button.lineHeight": *cta
    "tokens.typography.button.use": *cta
    "tokens.typography.nav.size": *navcur
    "tokens.typography.nav.weight": *navcur
    "tokens.typography.nav.lineHeight": *navcur
    "tokens.typography.nav.use": *navcur
    "tokens.typography.body.size": *body
    "tokens.typography.body.weight": *body
    "tokens.typography.body.lineHeight": *body
    "tokens.typography.body.use": *body
    "tokens.typography.label.size": &label { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.typography.label.weight": *label
    "tokens.typography.label.lineHeight": *label
    "tokens.typography.label.use": *label
    "tokens.spacing.pill-x": *pill
    "tokens.spacing.pill-y": *pill
    "tokens.spacing.list-y": &list { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::li", captured: "2026-09-30" }
    "tokens.spacing.footer-x": *label
    "tokens.rounded.none": *navcur
    "tokens.rounded.card": &album { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::div", captured: "2026-09-30" }
    "tokens.rounded.pill": *pill
    "tokens.components.language-pill.type": *pill
    "tokens.components.language-pill.fg": *pill
    "tokens.components.language-pill.border": *pill
    "tokens.components.language-pill.radius": *pill
    "tokens.components.language-pill.padding": *pill
    "tokens.components.language-pill.height": *pill
    "tokens.components.language-pill.font": *pill
    "tokens.components.language-pill.hover": *pillprobe
    "tokens.components.language-pill.pressed": *pillprobe
    "tokens.components.language-pill.states": *pillprobe
    "tokens.components.language-pill.use": *pill
    "tokens.components.nav-item.type": *navoff
    "tokens.components.nav-item.fg": *navoff
    "tokens.components.nav-item.height": *navoff
    "tokens.components.nav-item.font": *navoff
    "tokens.components.nav-item.selected": *navcur
    "tokens.components.nav-item.hover": &navprobe { surface_id: surface-3, source_id: pozalabs-probe-service, method: live-state-probe, selector: "a 소개 in the header on /ko/service/ (27.7 x 28): rest fg rgb(102, 102, 102), 16px/350; hover and pressed fg -> rgb(51, 51, 51) with underline solid rgb(51, 51, 51); transition all 0s; ancestors nav and header bg rgb(255, 255, 255). On /ko/about/ (pozalabs-probe-about) 소개 rests at rgb(0, 0, 0) and shows no change", captured: "2026-09-30" }
    "tokens.components.nav-item.pressed": *navprobe
    "tokens.components.nav-item.states": *navprobe
    "tokens.components.nav-item.use": *navoff
    "tokens.components.album-card.type": *album
    "tokens.components.album-card.radius": *album
    "tokens.components.album-card.shadow": *album
    "tokens.components.album-card.size": *album
    "tokens.components.album-card.use": *album
    "tokens.components.service-cta.type": *cta
    "tokens.components.service-cta.fg": *cta
    "tokens.components.service-cta.font": *cta
    "tokens.components.service-cta.size": *cta
    "tokens.components.service-cta.states": &ctaprobe { surface_id: surface-3, source_id: pozalabs-probe-service, method: live-state-probe, selector: "span.text-button 보러 가기 (67.1 x 30): fg rgb(255, 255, 255), 18px/350; self, a.relative.overflow-hidden, div.block and div.flex all bg rgba(0, 0, 0, 0), behind none(canvas); hover and pressed no change within that scope", captured: "2026-09-30" }
    "tokens.components.service-cta.use": *cta
    "tokens.components.feature-list-item.type": *list
    "tokens.components.feature-list-item.fg": *list
    "tokens.components.feature-list-item.padding": *list
    "tokens.components.feature-list-item.font": *list
    "tokens.components.feature-list-item.use": *list
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#000000"
    ink: "#000000"
    secondary: "#666666"
    charcoal: "#333333"
    border-hover: "#949494"
    inverse: "#e7e7e7"
    inverse-muted: "#a0a0a0"
    white: "#ffffff"
  typography:
    family: { display: "Garet", korean: "Pretendard Variable" }
    display-hero: { size: 129.6, weight: 400, lineHeight: 1.22, use: "Home hero headline (Ignite your creativity), right-aligned, #000000, 158px line" }
    display: { size: 60, weight: 300, lineHeight: 1.45, use: "Page headline on /ko/service/ (음악을 만드는 새로운 방법, #000000) and the closing statement on its dark band (#e7e7e7), 87px line" }
    headline: { size: 40, weight: 300, lineHeight: 1.45, use: "Service names and kicker lines on /ko/service/ (AI 생성 음악 in #666666, 음악을 위한 캔버스 in #000000), 58px line" }
    tagline: { size: 32, weight: 400, lineHeight: 1.375, use: "The code-style statement under the home hero (with pozalabs as technology: expand(your_creativity)), 44px line" }
    body-lg: { size: 20, weight: 350, lineHeight: 1.6, use: "Mood album titles and lead copy on /ko/about/ (lead in #333333) and service feature lists, 32px line" }
    section-label: { size: 20, weight: 400, lineHeight: 1.6, use: "Grey section labels on /ko/about/, #666666, 32px line" }
    button: { size: 18, weight: 350, lineHeight: 1.67, use: "보러 가기 labels on /ko/service/, #ffffff, 30px line" }
    nav: { size: 16, weight: 350, lineHeight: 1.75, use: "Header navigation (홈, 소개, 서비스, 연구, 문의, 채용), 28px line" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Document default on all three pages, Garet then Pretendard Variable, 24px line" }
    label: { size: 14, weight: 350, lineHeight: 1.43, use: "The English pill and the footer copyright line (#666666), 20px line" }
  spacing: { pill-x: 14, pill-y: 7, list-y: 20, footer-x: 20 }
  rounded: { none: 0, card: 8, pill: 9999 }
  components:
    language-pill: { type: button, fg: "#333333", border: "1px solid rgba(0, 0, 0, 0.2)", radius: "9999px", padding: "7px 14px", height: "36px", font: "14px / 350 / 20px Garet", hover: "border 1px solid #949494", pressed: "border 1px solid #949494", states: "the border darkens after a 0.15s cubic-bezier(0.4, 0, 0.2, 1) colour transition; label and fill unchanged; focus not measured", use: "English link at the right end of the header on all three pages at home::[data-omd-capture=\"5\"], 102 x 36, with a globe icon" }
    nav-item: { type: tab, fg: "#666666", height: "28px", font: "16px / 350 / 28px Garet", selected: "fg #000000 on the current page (소개 on /ko/about/, 서비스 on /ko/service/); on home every item is #000000", hover: "fg #333333 with a solid #333333 underline", pressed: "same as hover", states: "non-current items change without transition (all 0s); the current item shows no change on hover or press; focus not measured", use: "Header navigation at surface-2::[data-omd-capture=\"2\"] on a white header" }
    album-card: { type: card, radius: "8px", shadow: "rgba(0, 0, 0, 0.05) 2px 4px 10px 0px", size: "190px x 190px", use: "Mood album artwork tiles on /ko/about/ (Uplifting, Relaxing, Hopeful ... 16 instances), each with its title below in 20px / 350; the only shadowed element on the site" }
    service-cta: { type: button, fg: "#ffffff", font: "18px / 350 / 30px Garet", size: "67px x 30px (label)", states: "the label shows no change on hover or press; the button's fill is painted by a layer outside the probe's scope (the label, its link and two wrappers are transparent), so no background is declared", use: "보러 가기 under eapy, LAIVE and viodio on /ko/service/" }
    feature-list-item: { type: listItem, fg: "#000000", padding: "20px 0px", font: "20px / 350 / 32px Garet", use: "Feature bullets under each service on /ko/service/ (실시간 MIDI 샘플 생성, 로열티 프리 ...), 800 x 72 rows" }
  components_harvested: true
---

# Design System Inspiration of POZAlabs

## 1. Visual Theme & Atmosphere

POZAlabs (포자랩스, Pozalabs inc.) is a Seoul AI-music company. Its company page gives its vision as "Ignite your creativity" and its mission as "Spread the joy of music with AI". It lists its DNA as Tenacious, Prominent, Inspiring, Playful and Spread. What sets it apart, by its own account, is where its data comes from. POZAlabs says it does not train on existing recordings, only on material its in-house composers write for AI training, so its soundtracks can be used without copyright worries. It manages the production, sale and distribution of that music itself. Its dataset paper, ComMU: Dataset for Combinatorial Music Generation, was accepted at NeurIPS, and an automated pipeline from sampling to mixing and mastering can produce a soundtrack in five minutes. The service page lists three products: eapy, "a canvas for music"; LAIVE, an AI music generator; and viodio, an AI background-music subscription for creators. It also takes custom commissions from film, drama, game and advertising clients, with credits including the TV dramas 빈센조 (2021) and 닥터 로이어 (2022), 네이버 MYBOX, and the 2022 World Knowledge Forum theme. Its blog continues the commercial work with sound projects for 롯데건설, 핑크퐁's 아기상어, 포스코이앤씨 and 투니버스.

The website is black on white. The home page carries one sentence, "Ignite your creativity", set in Garet at 129.6px, weight 400, on a 158px line and aligned right. Under it sits a code-style line: "with pozalabs as technology: expand(your_creativity)". The inner pages keep the same palette and the same restraint. Headlines drop to weight 300 at 40–60px. Navigation, lists and body copy use Garet at weight 350, in black or `#666666`. The only rounded forms are a 9999px language pill and 8px album tiles. Colour comes from the album artwork and one dark band on the service page. That band's text is set in `#e7e7e7` and `#a0a0a0`, but its background colour was not read.

**Key Characteristics:**
- Monochrome: `#000000` headlines and current navigation, `#666666` for secondary text, `#333333` for the pill and hover
- Garet everywhere, at 129.6px / 400 for the hero and weight 300 for display text; Korean falls through to Pretendard Variable
- Few rounded forms: a 9999px outlined pill, 8px album tiles; everything else square
- One shadow on the site: `rgba(0, 0, 0, 0.05) 2px 4px 10px 0px` under the album tiles
- Plain text links: the current page is black, the others grey, and hover adds a `#333333` underline

## Primary tasks

- Understand what POZAlabs builds and how its training data differs
- Browse its products (eapy, LAIVE, viodio) and open one with 보러 가기
- Listen through the mood albums on the company page
- Request custom music for a film, drama, game or advertisement

## 2. Color Palette & Roles

Every token below was read on 2026-09-30 from www.pozalabs.com/ko/, /ko/about/ and /ko/service/ by the deterministic collector, and hover values by the fixed keyboard probe. The tokens describe POZAlabs' corporate site. Its products (eapy, LAIVE, viodio) were not captured, and none of their values is claimed.

### Primary
- **Black** (`#000000`): The current item in the header navigation. On /ko/about/ 소개 renders `#000000` while 서비스 renders `#666666`; on /ko/service/ it is the other way round. On home every navigation item is `#000000`. It is also the colour of every headline and of the document text. It is the primary because the site is monochrome. The owner rule then calls for the measured primary action fill, and the one filled action on the site, 보러 가기 on /ko/service/, has a fill no tool read. Its label is `#ffffff`, but the label, its link and two wrappers are all transparent (probe), so the fill lives on a layer outside the probe's scope. The primary therefore rests on the selected navigation state instead. If that fill is later measured and proves chromatic, it takes precedence.

### Text & Neutral
- **Ink** (`#000000`): The home hero, service headlines, album titles and feature lists.
- **Secondary** (`#666666`): Non-current navigation items, the service kickers (AI 생성 음악), section labels on /ko/about/ and the footer.
- **Charcoal** (`#333333`): The English pill label, the lead copy on /ko/about/, and the hover colour and underline of navigation items.
- **Border Hover** (`#949494`): The English pill's border on hover and press. At rest the border is `rgba(0, 0, 0, 0.2)`.
- **White** (`#ffffff`): The 보러 가기 labels, and the header and navigation background (probe ancestor read).

### Dark band
- **Inverse** (`#e7e7e7`) and **Inverse Muted** (`#a0a0a0`): Text on the dark closing band of /ko/service/. The band's background was not captured, so no colour is claimed for it.

### Not tokens
- The earlier record's periwinkle `#aba1fa`, violet `#6242e1`, purple inks `#030112`, `#150e2d`, `#201d30`, `#090719` and greys `#cecdd5`, `#eeedf2`, `#9f9daa` came from musia.ai. Its footer names a different company, (주)크리에이티브마인드. All of them were removed.
- The POZAlabs logo is an image and was not measured.

## 3. Typography Rules

### Font Family
- **Live surface use**: all 241 captured elements compute `Garet, "Pretendard Variable", -apple-system, "system-ui", system-ui, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif`. Garet is `loaded / high` (241 observed uses) and self-hosted at `www.pozalabs.com/static/GaretBook-….woff2`, declared at weight 400. The site computes weight 350 for navigation and body copy; the only Garet face loaded is that 400 Book file, so 350 renders with it. Garet has no Hangul, so Korean text falls through to Pretendard Variable, loaded from jsDelivr (`cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/…/PretendardVariable.subset.*.woff2`). A same-day headless read found Garet 400, Pretendard Variable (45–920), Hack 400 and 700, and Sanchez 400 loaded on home.
- **Official distributed font assets**: Pretendard's LICENSE (Kil Hyung-jin) and Sanchez's OFL.txt (LatinoType) both state the SIL Open Font License 1.1. Hack's LICENSE.md states the MIT License, with the Bitstream Vera License for the Bitstream Vera Sans Mono material it builds on. All three were opened on 2026-09-30. No licence text for Garet was opened, so no licence is stated for it.
- **Official product use**: no POZAlabs page opened this session names its typefaces, so no statement of official product use is made.
- **Declared or loaded without an observed role**: Hack (subset files `/static/hack-regular-subset-….woff2`, `hack-bold-subset-….woff2`) and Sanchez (`/static/sanchez-v17-latin-regular-….woff2`) are loaded on home, but no captured element computes them first, so they have no role here. The code-style tagline's own element computes Garet; a child in Hack was not recorded. `GaretHeavy` (700) is declared but was not loaded.
- **Unresolved**: none.

### Hierarchy

| Role | Size | Weight | Line Height | Observed on |
|------|------|--------|-------------|-------------|
| Display Hero | 129.6px | 400 | 158px (1.22) | Home hero, `#000000` |
| Display | 60px | 300 | 87px (1.45) | /ko/service/ headline; dark band statement |
| Headline | 40px | 300 | 58px (1.45) | Service names and kickers |
| Tagline | 32px | 400 | 44px | Home code-style line |
| Body Large | 20px | 350 | 32px (1.6) | Album titles, lead, feature lists |
| Section Label | 20px | 400 | 32px | Section labels on /ko/about/, `#666666` |
| Button | 18px | 350 | 30px | 보러 가기, `#ffffff` |
| Nav | 16px | 350 | 28px | Header navigation |
| Body | 16px | 400 | 24px | Document default |
| Label | 14px | 350 | 20px | English pill, footer copyright |

All captured type has `letter-spacing: normal`.

### Principles
- **Scale, not weight**: the hero is 129.6px at weight 400, and headlines at 40–60px drop to 300. Nothing on the captured pages is set bold.
- **One family**: Garet sets every Latin glyph; Pretendard Variable fills in for Hangul at the same size.

## 4. Component Stylings

### Buttons & links

**Language pill**
- Text: `#333333`, 14px / 350 / 20px Garet, with a globe icon
- Border: 1px `rgba(0, 0, 0, 0.2)`; radius 9999px; padding 7px 14px; 102 × 36
- Hover / pressed: border `#949494` after a 0.15s `cubic-bezier(0.4, 0, 0.2, 1)` transition; label unchanged
- Use: English, at the right of the header on every page

**Navigation item**
- Text: `#666666` (non-current), `#000000` (current page, and all items on home); 16px / 350 / 28px Garet
- Hover / pressed: `#333333` with a solid `#333333` underline, no transition; the current item does not change
- Use: 홈, 소개, 서비스, 연구, 문의, 채용 on a white header

**Service call-to-action**
- Label: 보러 가기 in `#ffffff`, 18px / 350 / 30px Garet
- Its dark fill sits on a layer the probe does not compare, so no background colour is declared
- Use: under eapy, LAIVE and viodio on /ko/service/

### Cards & lists
- **Album tile**: 190 × 190 artwork, radius 8px, shadow `rgba(0, 0, 0, 0.05) 2px 4px 10px 0px`, title below in 20px / 350; 16 mood albums on /ko/about/.
- **Feature list item**: 20px / 350 / 32px `#000000`, 20px vertical padding, 800px wide, under each service.

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out pages of www.pozalabs.com plus fixed keyboard-probe reads and first-party context)
**Tier 1 sources:** https://www.pozalabs.com/ko/ ; https://www.pozalabs.com/ko/about/ ; https://www.pozalabs.com/ko/service/ ; https://blog.pozalabs.com/
**Tier 2 sources:** not attempted on 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

- The home page is a single 1440 × 900 screen: a right-aligned hero, the code-style line and the header. The other pages are long single columns (4,707px for /ko/about/, 6,536px for /ko/service/).
- Observed spacing: 7px 14px in the pill, 20px vertical rhythm in feature lists, 20px side padding on the footer line.
- Radius: 0 by default, 8px on album tiles, 9999px on the language pill.

## 6. Depth & Elevation

Of the 241 captured elements, 16 carry a shadow: the album tiles on /ko/about/, at `rgba(0, 0, 0, 0.05) 2px 4px 10px 0px`. Everything else computes `box-shadow: none`. The earlier record's "shadow-free on every surface" claim is corrected.

## 7. Do's and Don'ts

### Do
- Keep the site black on white; use `#666666` for secondary and non-current text
- Let size carry display type (129.6px at 400; 40–60px at 300)
- Mark the current page in `#000000` and hover with a `#333333` underline
- Keep rounding to the pill and the 8px tile

### Don't
- Introduce a brand hue from the product sites into this surface; none renders on the captured pages
- Bold the headlines
- Add shadows beyond the faint album-tile shadow

## 8. Responsive Behavior

The capture ran at 1440 × 900 only. The class names carry `sm:` variants, but no small-screen layout was measured and none is claimed. The earlier record's breakpoint table was unsourced and was removed.

## 9. Agent Prompt Guide

### Quick Color Reference
- Ink, primary and current navigation: `#000000`
- Secondary: `#666666`; hover and pill label: `#333333`; pill hover border: `#949494`
- Text on a dark band: `#e7e7e7`, `#a0a0a0`
- Background: white `#ffffff`

### Example Component Prompts
- "A white hero with one right-aligned line in Garet, 129.6px, weight 400, 158px line-height, `#000000`: 'Ignite your creativity'. Under it a 32px code-style line: 'with pozalabs as technology: expand(your_creativity)'."
- "A header of plain text links in Garet 16px / 350: the current page `#000000`, the others `#666666`, hover `#333333` with an underline; at the right an outlined pill (1px `rgba(0, 0, 0, 0.2)`, radius 9999px, 7px 14px, 14px label `#333333`) whose border turns `#949494` on hover."
- "A grid of 190 × 190 album tiles with 8px radius and a faint `rgba(0, 0, 0, 0.05) 2px 4px 10px 0px` shadow, titles 20px / 350 below."

---

## 10. Voice & Tone

POZAlabs writes in two modes. Short English slogans set the brand's ambition, and plain Korean sentences explain the technology and the terms of use.

| Context | Tone |
|---|---|
| Hero and vision | "Ignite your creativity" |
| Code-style statement | "with pozalabs as technology: expand(your_creativity)" |
| Company page | "Hey, Play your mood — 감성을 담은 AI 음악"; DNA statements in the first person plural ("우리는 인공지능 기술의 무한한 가능성을 믿고 집요하게 연구합니다.") |
| Terms and data | Direct and reassuring: "자체 데이터로 AI가 음악을 생성하므로 저작권 침해 우려 없이 사용할 수 있습니다." |
| Actions | 보러 가기 |
| Blog | Bracketed client names, then a line about the sound ([핑크퐁] 세상에 단 하나뿐인, 나만의 '아기상어') |

**Voice samples (verbatim, 2026-09-30):**
- "Ignite your creativity" — home hero and vision (pozalabs.com/ko/, /ko/about/)
- "포자랩스는 기존 음원을 학습하여 음악을 생성하지 않습니다." — /ko/about/
- "누구나 쉽게 음악을 만들고, 소유하고, 함께 나눌 수 있는 새로운 창작 문화를 만듭니다." — /ko/about/

## 11. Brand Narrative

POZAlabs presents itself as a group of specialists from different fields: "각 분야 최고의 전문가들이 모인 집단". Developers share with non-developers and composers with non-composers, and the aim is "a music-creation culture without precedent". The company page explains the technical position behind that. The training data is written by in-house composers rather than taken from existing recordings. The resulting soundtracks are produced, sold and distributed by POZAlabs itself, so they carry no copyright-infringement risk. The dataset work was recognised when ComMU was accepted at NeurIPS. Automation covers the whole chain from sampling to mastering.

The products turn that position into tools for different users: eapy for sketching musical ideas on a shared canvas (real-time MIDI samples, YouTube upload, .mp3 / .wav / .MIDI, link sharing), LAIVE for anyone who wants to be "a singer-songwriter or producer", and viodio for creators who need licence-free background music that can be monetised on every social platform. Commissioned work for broadcasters, brands and venues continues on the blog. Its newsroom includes "포자랩스 2024 연말 결산 & 2025 로드맵". The company's registered address is in Seocho-gu, Seoul; the representative is 허원길.

## 12. Principles

1. **Own the data.** POZAlabs builds on music written for training. *UI implication:* state rights and terms plainly, next to the product.
2. **Monochrome frame, colourful content.** The site stays black and white while album artwork carries colour. *UI implication:* let media supply colour and keep the chrome neutral.
3. **Scale over weight.** Display type is large and light. *UI implication:* size headlines up rather than bolding them.

## 13. Personas

*These are fictional archetypes drawn from the audiences POZAlabs' pages address — creators (viodio), would-be songwriters (LAIVE, eapy) and B2B clients commissioning music. They are not real people.*

**정하늘, 27, 서울.** A video creator who needs background music she can monetise without claims, and subscribes to viodio.

**김서연, 41, 경기.** A brand marketer who sends a reference track and commissions a custom soundtrack for a campaign.

**이도윤, 23, 부산.** A student who sketches song ideas on eapy's canvas and shares the board with a friend by link.

## 14. States

Only observed states are listed.

| State | Observed treatment |
|---|---|
| Hover / pressed, navigation item | `#666666` → `#333333` with a solid underline; current item unchanged |
| Hover / pressed, language pill | Border `rgba(0, 0, 0, 0.2)` → `#949494` |
| Hover / pressed, 보러 가기 | Label unchanged; the fill layer was not in scope |
| Selected | Current page item `#000000` |
| Focus | Not measured (probe run with `--no-focus`); none declared |

The earlier record's empty, loading, error, success, skeleton and disabled treatments described musia.ai flows or had no source, and were removed.

## 15. Motion & Easing

The language pill computes `transition: color, background-color, border-color, text-decoration-color, fill, stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1)`. Navigation items and the 보러 가기 label compute `transition: all 0s`. The album tiles carry an `active:scale-95` class for small screens, which was not measured. The earlier record's duration and cubic-bezier tables were not grounded in any capture and were removed.

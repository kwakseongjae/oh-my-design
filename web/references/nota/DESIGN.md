---
id: nota
name: Nota AI
display_name_kr: 노타
country: KR
category: ai
homepage: "https://www.nota.ai"
primary_color: "#3264f0"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=nota.ai&sz=128"
verified: "2026-09-30"
added: "2026-06-26"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.nota.ai/", inspected: "2026-09-30" }
    - { id: surface-2, kind: corporate, url: "https://www.nota.ai/aboutus", inspected: "2026-09-30" }
    - { id: surface-3, kind: marketing, url: "https://www.nota.ai/netspresso", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://www.nota.ai/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://www.nota.ai/aboutus", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://www.nota.ai/netspresso", captured: "2026-09-30" }
    - { id: nota-probe-home, kind: product-surface, url: "https://www.nota.ai/", captured: "2026-09-30" }
    - { id: netspresso-site, kind: official-doc, url: "https://netspresso.ai/", captured: "2026-09-30" }
    - { id: nota-blog, kind: official-doc, url: "https://blog.nota.ai/insights", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &tag { surface_id: home, source_id: nota-probe-home, method: live-state-probe, selector: "span.nota-rss__tag Tech (44.9 x 24): rest fg rgb(50, 100, 240), bg rgba(50, 100, 240, 0.08), radius 999px, padding 3px 9px, 11.5px/600; its card ancestor (up2) turns border rgb(236, 236, 241) -> rgb(50, 100, 240) on hover and pressed", captured: "2026-09-30" }
    "tokens.colors.ink": &list { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::li", captured: "2026-09-30" }
    "tokens.colors.navy": &card { surface_id: home, source_id: nota-probe-home, method: live-state-probe, selector: "a.nota-rss__card (382.9 x 332.6): rest bg rgb(255, 255, 255), border 1px solid rgb(236, 236, 241), radius 10px; title h3 fg rgb(37, 42, 57) 17px/700; thumb bg rgb(246, 246, 248); hover and pressed border -> rgb(50, 100, 240), shadow none -> rgba(37, 42, 57, 0.1) 0px 6px 12px 0px, transform -> translateY(-4px); transition transform, box-shadow, border-color 0.18s ease; focus not measured (--no-focus)", captured: "2026-09-30" }
    "tokens.colors.white": &rsscard { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"18\"]", captured: "2026-09-30" }
    "tokens.colors.hairline": *rsscard
    "tokens.colors.surface": *card
    "tokens.colors.border": &slider { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::div.custom-slider-card", captured: "2026-09-30" }
    "tokens.colors.hero-link": &learn { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-09-30" }
    "tokens.colors.muted": &lang { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"8\"]", captured: "2026-09-30" }
    "tokens.typography.family.display": &h1 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h1", captured: "2026-09-30" }
    "tokens.typography.family.body": *list
    "tokens.typography.display-hero.size": *h1
    "tokens.typography.display-hero.weight": *h1
    "tokens.typography.display-hero.lineHeight": *h1
    "tokens.typography.display-hero.use": *h1
    "tokens.typography.display-section.size": &h1b { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h1 (43.2px / 400)", captured: "2026-09-30" }
    "tokens.typography.display-section.weight": *h1b
    "tokens.typography.display-section.lineHeight": *h1b
    "tokens.typography.display-section.use": *h1b
    "tokens.typography.eyebrow.size": &h4 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h4", captured: "2026-09-30" }
    "tokens.typography.eyebrow.weight": *h4
    "tokens.typography.eyebrow.lineHeight": *h4
    "tokens.typography.eyebrow.use": *h4
    "tokens.typography.list.size": *list
    "tokens.typography.list.weight": *list
    "tokens.typography.list.lineHeight": *list
    "tokens.typography.list.use": *list
    "tokens.typography.card-title.size": &h3 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.typography.card-title.weight": *h3
    "tokens.typography.card-title.lineHeight": *h3
    "tokens.typography.card-title.tracking": *h3
    "tokens.typography.card-title.use": *h3
    "tokens.typography.nav.size": &nav { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"4\"]", captured: "2026-09-30" }
    "tokens.typography.nav.weight": *nav
    "tokens.typography.nav.lineHeight": *nav
    "tokens.typography.nav.use": *nav
    "tokens.typography.tab.size": &herotab { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"11\"]", captured: "2026-09-30" }
    "tokens.typography.tab.weight": *herotab
    "tokens.typography.tab.use": *herotab
    "tokens.typography.small.size": &partner { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div.partner-logo-card", captured: "2026-09-30" }
    "tokens.typography.small.weight": *partner
    "tokens.typography.small.lineHeight": *partner
    "tokens.typography.small.use": *partner
    "tokens.typography.tag.size": *tag
    "tokens.typography.tag.weight": *tag
    "tokens.typography.tag.use": *tag
    "tokens.spacing.card-y": *partner
    "tokens.spacing.card-x": *partner
    "tokens.spacing.button-y": &npbtn { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"13\"]", captured: "2026-09-30" }
    "tokens.spacing.button-x": *npbtn
    "tokens.spacing.tag-y": *tag
    "tokens.spacing.tag-x": *tag
    "tokens.rounded.control": *lang
    "tokens.rounded.slider": *slider
    "tokens.rounded.card": *rsscard
    "tokens.rounded.tag": *tag
    "tokens.shadow.card": *partner
    "tokens.shadow.card-hover": *card
    "tokens.components.blog-card.type": *card
    "tokens.components.blog-card.bg": *card
    "tokens.components.blog-card.fg": *rsscard
    "tokens.components.blog-card.border": *card
    "tokens.components.blog-card.radius": *card
    "tokens.components.blog-card.size": *card
    "tokens.components.blog-card.hover": *card
    "tokens.components.blog-card.pressed": *card
    "tokens.components.blog-card.states": *card
    "tokens.components.blog-card.use": *card
    "tokens.components.blog-tag.type": *tag
    "tokens.components.blog-tag.bg": *tag
    "tokens.components.blog-tag.fg": *tag
    "tokens.components.blog-tag.radius": *tag
    "tokens.components.blog-tag.padding": *tag
    "tokens.components.blog-tag.height": *tag
    "tokens.components.blog-tag.font": *tag
    "tokens.components.blog-tag.use": *tag
    "tokens.components.hero-tab.type": *herotab
    "tokens.components.hero-tab.fg": &tabprobe { surface_id: home, source_id: nota-probe-home, method: live-state-probe, selector: "button.np-hero-tab Nota Vision Agent (130.3 x 19, inactive): rest fg rgba(255, 255, 255, 0.55), 16px/700; hover and pressed fg -> rgba(255, 255, 255, 0.85) on self and label; transition color 0.3s ease-out, transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1)", captured: "2026-09-30" }
    "tokens.components.hero-tab.selected": *herotab
    "tokens.components.hero-tab.font": *herotab
    "tokens.components.hero-tab.hover": *tabprobe
    "tokens.components.hero-tab.pressed": *tabprobe
    "tokens.components.hero-tab.states": *tabprobe
    "tokens.components.hero-tab.use": *herotab
    "tokens.components.hero-link.type": *learn
    "tokens.components.hero-link.fg": *learn
    "tokens.components.hero-link.padding": *learn
    "tokens.components.hero-link.font": *learn
    "tokens.components.hero-link.hover": &learnprobe { surface_id: home, source_id: nota-probe-home, method: live-state-probe, selector: "a.np-hero-cta Learn More → (102 x 26): rest fg rgb(231, 231, 231), 16px/700; hover and pressed ::after size 0px x 1px -> 102.047px x 1px (longest transition 600ms)", captured: "2026-09-30" }
    "tokens.components.hero-link.pressed": *learnprobe
    "tokens.components.hero-link.states": *learnprobe
    "tokens.components.hero-link.use": *learn
    "tokens.components.netspresso-button.type": *npbtn
    "tokens.components.netspresso-button.bg": *npbtn
    "tokens.components.netspresso-button.fg": *npbtn
    "tokens.components.netspresso-button.radius": *npbtn
    "tokens.components.netspresso-button.padding": *npbtn
    "tokens.components.netspresso-button.height": *npbtn
    "tokens.components.netspresso-button.states": *npbtn
    "tokens.components.netspresso-button.use": *npbtn
    "tokens.components.lang-button.type": *lang
    "tokens.components.lang-button.fg": *lang
    "tokens.components.lang-button.radius": *lang
    "tokens.components.lang-button.padding": *lang
    "tokens.components.lang-button.font": *lang
    "tokens.components.lang-button.states": *lang
    "tokens.components.lang-button.use": *lang
    "tokens.components.nav-folder.type": *nav
    "tokens.components.nav-folder.fg": *nav
    "tokens.components.nav-folder.font": *nav
    "tokens.components.nav-folder.states": *nav
    "tokens.components.nav-folder.use": *nav
    "tokens.components.partner-card.type": *partner
    "tokens.components.partner-card.bg": *partner
    "tokens.components.partner-card.radius": *partner
    "tokens.components.partner-card.padding": *partner
    "tokens.components.partner-card.shadow": *partner
    "tokens.components.partner-card.use": *partner
    "tokens.components.slider-card.type": *slider
    "tokens.components.slider-card.border": *slider
    "tokens.components.slider-card.radius": *slider
    "tokens.components.slider-card.size": *slider
    "tokens.components.slider-card.use": *slider
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#3264f0"
    ink: "#101218"
    navy: "#252a39"
    white: "#ffffff"
    hairline: "#ececf1"
    surface: "#f6f6f8"
    border: "#cccccc"
    hero-link: "#e7e7e7"
    muted: "#aaaaaa"
  typography:
    family: { display: "Roboto", body: "Roboto" }
    display-hero: { size: 52, weight: 700, lineHeight: 1.35, use: "Largest home headline, 70.2px line" }
    display-section: { size: 43.2, weight: 400, lineHeight: 1.38, use: "Section-level h1 headlines, 59.6px line" }
    eyebrow: { size: 21.36, weight: 400, lineHeight: 1.46, use: "Newsroom and Tech Blog labels over the home feed, 31.3px line" }
    list: { size: 18, weight: 400, lineHeight: 1.6, use: "Feature lists on the NetsPresso page, 28.8px line, in #101218" }
    card-title: { size: 17, weight: 700, lineHeight: 1.45, tracking: 0.17, use: "Blog card titles on home, 24.65px line, in #252a39" }
    nav: { size: 16.68, weight: 400, lineHeight: 1.5, use: "Header folder titles (NetsPresso®, AI Solutions, Company), 25px line" }
    tab: { size: 16, weight: 700, use: "Product tabs in the home hero" }
    small: { size: 12, weight: 400, lineHeight: 1.5, use: "Default small text in cards, 18px line" }
    tag: { size: 11.5, weight: 600, use: "Category tag on blog cards" }
  spacing: { card-y: 10, card-x: 22, button-y: 16, button-x: 30, tag-y: 3, tag-x: 9 }
  rounded: { control: 4, slider: 8, card: 10, tag: 999 }
  shadow:
    card: "rgba(141, 141, 141, 0.15) 10px 10px 28px 0px"
    card-hover: "rgba(37, 42, 57, 0.1) 0px 6px 12px 0px"
  components:
    blog-card: { type: card, bg: "#ffffff", fg: "#101218", border: "1px solid #ececf1", radius: "10px", size: "383px x 333px", hover: "border #3264f0, shadow rgba(37, 42, 57, 0.1) 0px 6px 12px, lifts 4px", pressed: "same as hover", states: "probe: border, shadow and a 4px lift over 0.18s ease; focus not measured", use: "Blog feed cards on home (Newsroom and Tech Blog), thumbnail on #f6f6f8, title in #252a39" }
    blog-tag: { type: badge, bg: "rgba(50, 100, 240, 0.08)", fg: "#3264f0", radius: "999px", padding: "3px 9px", height: "24px", font: "11.5px / 600", use: "Category tag (Tech and others) at the top of each blog card" }
    hero-tab: { type: tab, fg: "rgba(255, 255, 255, 0.55)", selected: "fg #ffffff", font: "16px / 700", hover: "fg rgba(255, 255, 255, 0.85)", pressed: "fg rgba(255, 255, 255, 0.85)", states: "probe on an inactive tab: label brightens from 55% to 85% white over a 0.3s ease-out colour transition; the active tab computes #ffffff; focus not measured", use: "Product tabs in the home hero (NetsPresso®, Nota Vision Agent, Industrial Safety) over the dark hero" }
    hero-link: { type: button, fg: "#e7e7e7", padding: "0px 0px 2px", font: "16px / 700", hover: "a 1px ::after underline grows to full width", pressed: "same as hover", states: "probe: the underline grows over up to 600ms; focus not measured", use: "Learn More → under the hero tabs" }
    netspresso-button: { type: button, bg: "rgba(255, 255, 255, 0.95)", fg: "#101218", radius: "8px", padding: "16px 30px", height: "50px", states: "the bundle marks a pressed frame but stores no changed value, and the button was not probed, so no hover or pressed value is declared", use: "Try NetsPresso® on the NetsPresso page, 183 x 50; the label sits in a child element the collector did not record, so no label font is declared" }
    lang-button: { type: button, fg: "#aaaaaa", radius: "4px", padding: "6px", font: "15px / 400", states: "rest only; the bundle's focus frame is not used to declare a focus style", use: "KOR / ENG switch in the header of all three pages" }
    nav-folder: { type: button, fg: "#ffffff", font: "16.68px / 400", states: "rest only; the same titles compute #101218 over the light NetsPresso header", use: "Header folder titles over the dark home and company heroes" }
    partner-card: { type: card, bg: "#ffffff", radius: "10px", padding: "10px 22px", shadow: "rgba(141, 141, 141, 0.15) 10px 10px 28px 0px", use: "Partner logo cards on home (40 instances)" }
    slider-card: { type: card, border: "1px solid #cccccc", radius: "8px", size: "463px x 477px", use: "Use-case slider cards on the NetsPresso page, with a rgba(0, 0, 0, 0.5) title bar in 20px white Roboto" }
  components_harvested: true
---

# Design System Inspiration of Nota AI

## 1. Visual Theme & Atmosphere

Nota AI (노타, Nota Inc.) is a Korean on-device AI company whose company page states its mission in four words: "Democratizing the use of AI". Its milestones trace the path. It began in 2015 building an AI tool for reducing typing errors, raised seed funding, and pivoted to on-device AI; it opened a Berlin subsidiary and raised Series A; it launched the NetsPresso® model-optimization platform and signed Arm, Renesas and Deutsche Telekom; it opened Nota America in Sunnyvale and raised Series B; and in 2024–2025 it integrated NetsPresso with Qualcomm AI Hub, signed a multi-year contract with Samsung Electronics and raised Series C. The same page lists the headquarters in Daejeon and an office in Gangnam, Seoul.

The website reads as an engineering vendor's catalogue. Headlines are set in Roboto: 52px / 700 for the largest home line and 43.2px / 400 for section heads such as "Stay Ahead with the Latest AI Insights". Dark heroes carry white navigation and product tabs that brighten from 55% to 85% white under the pointer. Below them, white bands hold partner-logo cards with one soft offset shadow and a blog feed of 10px-radius cards. Text on light ground is near-black `#101218`; card titles are navy `#252a39`.

Colour is almost absent. The one chromatic colour on the three captured pages is cobalt `#3264f0`, which the site's own card stylesheet names `--blue` in a block headed "Nota 브랜드 카드 스타일". It colours the category tag on each blog card and becomes the card border on hover. Everything else is navy, near-black, white and light greys.

**Key Characteristics:**
- Roboto throughout, with size and weight carrying hierarchy
- Near-black `#101218` text and navy `#252a39` card titles on white
- Cobalt `#3264f0` as the only chromatic colour: blog-card tags and hover borders
- Dark heroes with translucent white tabs that brighten on hover
- 10px cards, 8px slider cards and buttons, 4px small controls
- One soft card shadow (`rgba(141, 141, 141, 0.15) 10px 10px 28px`) on partner cards; blog cards lift 4px on hover

## Primary tasks

- Read the Tech Blog and Newsroom for concrete results
- Evaluate NetsPresso® for a model that has to run on a device
- Explore the AI solution built for an industry (Vision Agent, Industrial Safety, Surveillance, ITS, DMS & FR)
- Check the company's milestones and offices
- Reach the team through Contact Us

## 2. Color Palette & Roles

### Primary
- **Nota Blue** (`#3264f0`): The primary colour because it is the only colour the site renders in an accent role. It is the text of the category tag on every blog card (on a `rgba(50, 100, 240, 0.08)` wash) and the border a blog card takes on hover and press. The evidence is thin: no action button on the three pages is filled with it. The one filled call to action, Try NetsPresso®, is near-white `rgba(255, 255, 255, 0.95)` with `#101218` text on a dark band, and the pages are otherwise monochrome.

### Neutral & Ink
- **Ink** (`#101218`): Body and list text on light bands; the NetsPresso button label.
- **Navy** (`#252a39`): Blog card titles and five recorded fills across the three pages (one is the Squarespace skip link).
- **White** (`#ffffff`): Card and page ground; hero navigation and the active hero tab.
- **Muted** (`#aaaaaa`): The KOR / ENG switch.
- **Hero Link** (`#e7e7e7`): Learn More → over the hero.

### Surface & Borders
- **Surface** (`#f6f6f8`): Blog card thumbnail ground.
- **Hairline** (`#ececf1`): 1px border of blog cards.
- **Border** (`#cccccc`): 1px border of the NetsPresso use-case slider cards.

## 3. Typography Rules

### Font Family
- **Live surface use:** Roboto (221 uses), served from `fonts.gstatic.com`. Headings, navigation, tabs, lists and body all compute Roboto.
- **Declared only:** Pretendard leads the blog-card stack (`Pretendard, Roboto, -apple-system, "system-ui", sans-serif`) but no Pretendard file was found loading (`unresolved / low`), so the cards render in Roboto. Gilroy is declared on four text elements (`unresolved / low`). MathJax faces (`MJXTEX*`) and Squarespace icon fonts are declared with 0 uses.
- **Official product use:** no Nota page opened names a typeface.

### Hierarchy

| Role | Font | Size | Weight | Line height | Use |
|------|------|------|--------|-------------|-----|
| Display hero | Roboto | 52px | 700 | 70.2px | Largest home headline |
| Display section | Roboto | 43.2px | 400 | 59.6px | Home section heads |
| Eyebrow | Roboto | 21.36px | 400 | 31.3px | Newsroom, Tech Blog |
| List | Roboto | 18px | 400 | 28.8px | NetsPresso feature lists |
| Card title | Roboto | 17px | 700 | 24.65px | Blog card titles |
| Nav | Roboto | 16.68px | 400 | 25px | Header folder titles |
| Tab | Roboto | 16px | 700 | — | Hero product tabs |
| Small | Roboto | 12px | 400 | 18px | Card small text |
| Tag | Roboto | 11.5px | 600 | — | Blog card tag |

### Principles
- **Weight contrast in one family**: bold 700 hero against regular 400 section heads.
- **Plain technical English**: headlines name outcomes ("High-performance AI on Any Device").

## 4. Component Stylings

### Cards

**Blog Card**
- Background: `#ffffff`
- Text: `#101218` (title `#252a39`)
- Border: 1px solid `#ececf1`
- Radius: 10px
- Hover: border `#3264f0`, shadow `rgba(37, 42, 57, 0.1) 0px 6px 12px`, lifts 4px over 0.18s
- Use: Newsroom and Tech Blog feed on home

**Partner Card**
- Background: `#ffffff`
- Radius: 10px
- Padding: 10px 22px
- Shadow: `rgba(141, 141, 141, 0.15) 10px 10px 28px 0px`
- Use: Partner logo grid on home

**Slider Card**
- Border: 1px solid `#cccccc`
- Radius: 8px
- Size: 463 × 477
- Use: NetsPresso use cases, with a half-black title bar

### Badges

**Blog Tag**
- Background: `rgba(50, 100, 240, 0.08)`
- Text: `#3264f0`
- Radius: 999px
- Padding: 3px 9px
- Font: 11.5px / 600
- Use: Category tag on blog cards

### Buttons & Links

**Try NetsPresso®**
- Background: `rgba(255, 255, 255, 0.95)`
- Text: `#101218`
- Radius: 8px
- Padding: 16px 30px
- Height: 50px
- Use: The filled call to action on the NetsPresso page

**Hero Link (`Learn More →`)**
- Text: `#e7e7e7`
- Font: 16px / 700
- Hover: a 1px underline grows to full width
- Use: Under the hero tabs

**Language Switch**
- Text: `#aaaaaa`
- Radius: 4px
- Padding: 6px
- Font: 15px / 400
- Use: KOR / ENG in the header

### Navigation

**Hero Tab**
- Text: `rgba(255, 255, 255, 0.55)`; active `#ffffff`
- Font: 16px / 700
- Hover: 85% white over 0.3s
- Use: Product tabs in the home hero

**Header Folder**
- Text: `#ffffff` over dark heroes (`#101218` on the light NetsPresso header)
- Font: 16.68px / 400
- Use: NetsPresso®, AI Solutions, Company

---

**Verified:** 2026-09-30 (deterministic collector capture of three public pages of nota.ai, fixed keyboard probe on the home page, and first-party context)
**Tier 1 sources:** https://www.nota.ai/ ; https://www.nota.ai/aboutus ; https://www.nota.ai/netspresso ; https://netspresso.ai/ ; https://blog.nota.ai/insights
**Tier 2 sources:** not attempted in this pass
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Measured paddings: 3px / 9px (tag), 6px (language switch), 10px / 22px (partner card), 16px / 30px (NetsPresso button)

### Grid & Container
- Full-width dark hero with product tabs, then white bands of card grids
- Blog feed cards at about 383px wide; partner logos in a dense card grid
- The NetsPresso page stacks feature lists and a card slider

### Border Radius Scale
- 4px: small controls
- 8px: slider cards and the NetsPresso button
- 10px: blog and partner cards
- 999px: tags

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow, 1px `#ececf1` border | Blog cards at rest |
| Soft | `rgba(141, 141, 141, 0.15) 10px 10px 28px 0px` | Partner cards |
| Hover lift | `rgba(37, 42, 57, 0.1) 0px 6px 12px` and 4px rise | Blog cards on hover |

## 7. Do's and Don'ts

### Do
- Keep `#3264f0` for small accents: tags and hover borders
- Set everything in Roboto and use weight for contrast
- Use `#101218` for text and `#252a39` for card titles
- Keep cards at 10px radius with a hairline or one soft shadow

### Don't
- Fill large areas or buttons with blue; the site never does
- Add gradients or extra accent colours
- Mix in a second display face

## 8. Responsive Behavior

This pass captured the desktop layout at 1440 × 900 only. No breakpoint was measured, so none is declared.

## 9. Agent Prompt Guide

### Quick Color Reference
- Accent: `#3264f0`
- Text: `#101218`; card titles `#252a39`
- Surfaces: `#ffffff`, `#f6f6f8`
- Borders: `#ececf1`, `#cccccc`
- Muted: `#aaaaaa`; hero link `#e7e7e7`

### Example Component Prompts
- "Blog card: white, 1px solid #ececf1, 10px radius, #f6f6f8 thumbnail, 17px / 700 Roboto title in #252a39, a pill tag in #3264f0 on an 8% blue wash. On hover the border turns #3264f0, a 0 6px 12px navy shadow at 10% appears and the card rises 4px over 0.18s."
- "Dark hero tabs: 16px / 700 Roboto labels at 55% white, the active one pure white; hover brightens to 85% over 0.3s."

### Iteration Guide
1. One accent, used small
2. Roboto only
3. Near-black text, navy titles
4. 10px cards, soft shadow or hairline

---

## 10. Voice & Tone

Nota AI writes confident, capability-first English for engineers and technical buyers. Headlines name an outcome and a place it runs.

| Context | Tone |
|---|---|
| Home headlines | Outcome-framed. "High-performance AI on Any Device", "Across Industries— Turning On-Device AI into Reality". |
| Feed | Plain labels. "Newsroom", "Tech Blog", "Stay Ahead with the Latest AI Insights". |
| Company | Mission-first. "Democratizing the use of AI". |
| Product page | Structured. "Customer Value", "Model Development", "Model Optimization", "Model Testing". |

**Voice samples (verbatim, 2026-09-30):**
- "High-performance AI on Any Device" — home headline
- "Stay Ahead with the Latest AI Insights" — home feed heading
- "Democratizing the use of AI" — company page
- "Try NetsPresso®" — NetsPresso page call to action

**Forbidden register**: AI hype with no deployment claim, fear-based marketing, unexplained jargon.

## 11. Brand Narrative

Nota's company page tells its history in four eras. 2015–2017, "Initiation and Foundation": founded to build an AI-based solution for reducing typing errors, seed funding, Nota Inc. established. 2018–2020, "Strategic Pivot to On-device AI": a Berlin subsidiary, pre-Series A and Series A. 2021–2023, "Product Development & Product Market Fit": NetsPresso® launched and integrated with NVIDIA TAO; contracts with Deutsche Telekom, Arm and Renesas; on-device solutions commercialised for ITS, DMS and FR; Nota America established in Sunnyvale; Series B. 2024–2025, "Globalization & Business Expansion": NetsPresso on Qualcomm AI Hub, a multi-year Samsung Electronics contract, collaborations with NVIDIA, Sony, Renesas, Qualcomm, MediaTek, NXP and Advantech, and Series C.

NetsPresso has its own site, whose title is "NetsPresso - Empower Your AI Chip with Optimized Model Deployment", and the company publishes an insights blog at blog.nota.ai. The restrained website fits that position: a hardware-facing optimisation vendor presenting itself through milestones, partners and technical writing rather than visual spectacle.

## 12. Principles

1. **Democratize, don't gatekeep.** *UI implication:* plain, capability-first copy; outcomes named before features.
2. **Engineered restraint.** *UI implication:* monochrome surfaces, one small accent, one soft shadow.
3. **Evidence over spectacle.** *UI implication:* lead with partners, milestones and technical posts.

## 13. Personas

*Personas below are fictional archetypes informed by the audiences the site addresses (embedded AI engineers, automotive and industrial buyers, ML researchers), not individual people.*

**Dohyun Park, 34, Seoul.** An embedded-systems engineer fitting a vision model onto an edge device with tight memory and latency budgets. Evaluates NetsPresso because cloud inference is not an option for his hardware.

**Lena Brandt, 41, Berlin.** A product lead at an automotive supplier exploring driver monitoring and ITS. Wants industry-specific evidence she can put into a procurement process.

**Aarav Shah, 29, Sunnyvale.** An ML researcher comparing model-optimisation toolchains who reads the Tech Blog for benchmarks and methods.

## 14. States

| State | Treatment (measured) |
|---|---|
| **Hover (blog card)** | Border `#3264f0`, navy shadow at 10%, 4px lift, 0.18s ease |
| **Hover (hero tab)** | Label 55% → 85% white, 0.3s ease-out |
| **Hover (hero link)** | 1px underline grows to full width |
| **Active hero tab** | `#ffffff` label |

Focus, disabled, empty, loading, error and success states were not measured in this pass and are not declared.

## 15. Motion & Easing

Measured by the probe on the home page:
- Blog card: `transform, box-shadow, border-color 0.18s ease`
- Hero tab: `color 0.3s ease-out, transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1)`
- Hero link: the longest transition in its scope is 600ms (the underline)

No other duration or easing was read.

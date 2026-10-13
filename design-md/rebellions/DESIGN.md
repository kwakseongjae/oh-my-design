---
name: Rebellions
colors:
  primary: '#52f756'
  on-primary: '#24292e'
  ink: '#24292e'
  canvas: '#f6f8fa'
  on-dark: '#d9e4ed'
  white: '#ffffff'
  black: '#000000'
typography:
  display-hero:
    fontSize: 64.7px
    fontWeight: 400
    lineHeight: 1.25
    use: Page H1 and hero headline at 1440px (About 'AI that Scales, without the Energy Burn.'); fluid, measured at a 1440 viewport
  hero-lead:
    fontSize: 27.8px
    fontWeight: 600
    lineHeight: 1.25
    use: Hero sub-line under the headline
  section:
    fontSize: 52.9px
    fontWeight: 500
    lineHeight: 1.25
    use: Home section headlines (대규모 AI 서비스 추론 성능)
  block-title:
    fontSize: 39.7px
    fontWeight: 400
    lineHeight: 1.25
    use: Block titles (Our Story, Latest Updates)
  milestone:
    fontSize: 31.8px
    fontWeight: 600
    lineHeight: 1.25
    use: About timeline milestone titles
  lead:
    fontSize: 21.2px
    fontWeight: 400
    lineHeight: 1.5
    use: Section intro paragraphs
  card-title:
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.25
    use: Latest Updates card titles
  button:
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.25
    use: Primary and secondary button labels
  nav:
    fontSize: 20px
    fontWeight: 500
    use: Header navigation items (80px tall row)
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    use: Document default
  footer-link:
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.4
    use: Footer sub-links
  caption:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    use: Footer contact pill label
rounded:
  none: 0px
spacing:
  cta-y: 10
  cta-x: 24
  secondary-x: 40
  pill-y: 8
  pill-x: 20
components:
  cta-primary:
    type: button
    backgroundColor: '#52f756'
    textColor: '#24292e'
    rounded: 0px
    height: 50px
    padding: 10px 24px
    typography: 20px / 600 Pretendard
    hover: 'bg #000000, label #f6f8fa, arrow icon swaps (0.3s ease)'
    pressed: same as hover
    use: Primary call to action (자세히 보기, Model Zoo, 도입 사례 알아보기) on home and product pages
  button-secondary:
    type: button
    backgroundColor: '#d9e4ed'
    textColor: '#24292e'
    rounded: 0px
    height: 60px
    padding: 0 40px
    typography: 20px / 600 Pretendard
    hover: 'bg #52f756 (0.3s ease)'
    pressed: same as hover
    use: Full-width office links on the About page (Get directions)
  contact-pill:
    type: button
    backgroundColor: '#000000'
    textColor: '#52f756'
    rounded: 0px
    height: 36px
    padding: 8px 20px
    typography: 14px / 500 Pretendard
    hover: 'bg #52f756, label #24292e (instant)'
    pressed: same as hover
    use: Footer contact call to action (도입 문의하기) on every page
  nav-contact:
    type: tab
    textColor: '#52f756'
    height: 80px
    typography: 20px / 700 Pretendard
    states: 'hover and pressed: no change (probe); focus not measured'
    use: 'The one green item in the header navigation (도입 문의하기); other items are 20px / 500 in #d9e4ed over the home hero and #24292e on light pages'
  carousel-arrow:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#24292e'
    border: '1px solid #24292e'
    rounded: 0px
    width: 40px
    disabled: observed disabled at the first slide; visual change not measured
    use: Square previous/next arrows of the partner and updates carousels
  update-card:
    type: card
    rounded: 0px
    width: 448px
    typography: 24px / 400 Pretendard title
    use: 'Latest Updates news card: square 408px image over a 24px title, no fill, border or shadow'
fonts:
  roles:
    display: Pretendard
    body: Pretendard
---

# Design System Inspiration of Rebellions

## Overview

### Visual Theme & Atmosphere

Rebellions (리벨리온) is a Korean AI-inference semiconductor company. It was founded in September 2020 "to push beyond the limits of general-purpose hardware" and "design inference-first silicon from the ground up," in the words of its own About timeline. Its products run from the silicon (ATOM™, and the REBEL chiplet line, now sold as Rebel100™) to RebelServer™, RebelRack™ and RebelPOD™ systems and an SDK. The company's line for itself is "AI that Scales, without the Energy Burn." It sells performance per watt for large-scale inference, and the site is built the way a spec sheet is: flat, square and exact.

The Korean site (kr.rebellions.ai, where rebellions.ai redirects visitors from Korea) sits on a cool near-white canvas (`#f6f8fa`) with graphite ink (`#24292e`) for text. Against that neutral field one electric green, `#52f756`, does the signalling. It fills every primary button (자세히 보기), colours the single contact item in the header, labels the black footer contact pill, and becomes the hover fill of the grey secondary buttons. There is no second saturated hue anywhere on the three captured pages.

The defining geometric choice is sharpness. The collector read 651 radius values across home, About and the Rebel100 product page, and every one was `0px`. Buttons, carousel arrows, cards and the footer pill are all square-cornered. Depth is flat as well: no captured control carries a shadow. The page separates itself with full-bleed photographic and dark bands. Text on those bands turns `#f6f8fa` for headlines and a soft blue-grey `#d9e4ed` for links and footer copy. The band fills themselves sit behind media and were not measured.

Type is Pretendard throughout on the Korean site, and hierarchy comes from size more than weight. The About H1 renders at about 65px in weight 400. Home section headlines are about 53px at 500, block titles about 40px at 400, and only the timeline milestones and the button labels step up to 600. Sizes are fluid: the fractional values in this document are what a 1440px viewport computes.

The brand's evolution is written into the timeline: ATOM™ taped out in June 2022 and was delivered to KT Cloud in May 2023. REBEL taped out in November 2024 as what Rebellions calls "the world's first UCIe-Advanced AI chiplet". In December 2024 the company merged with SK Sapeon, followed by Rebellions Japan in February 2025 and a Saudi subsidiary, backed by Aramco's strategic investment, in August 2025.

**Key Characteristics:**
- One neon green (`#52f756`) as the only saturated colour: primary fill, header contact item, footer pill label, secondary hover
- Graphite ink (`#24292e`) on a cool `#f6f8fa` canvas instead of black on white
- Every measured corner is `0px`
- Flat depth: no shadows on any captured control
- Pretendard only on the Korean site; large sizes at regular or medium weight
- Hover inverts: green buttons go black with light text, grey buttons go green

### Primary tasks

- Compare inference accelerators on performance per watt.
- Check whether PyTorch and vLLM run out of the box.
- Contact the company about deploying its accelerators.
- Read product pages for Rebel100™ and the server, rack and pod systems.

### Brand Narrative

Rebellions was established in Korea in September 2020. Its bet is that the AI era will be decided by inference at scale, and that energy is the constraint that matters. Its About timeline tells the story in tape-outs and deliveries: the GDDR6-based ATOM™ in June 2022, first delivered to KT Cloud in May 2023. REBEL followed in November 2024 ("fusing 144GB of HBM3E with scalable silicon"). The December 2024 merger with SK Sapeon "unified Korea's AI semiconductor capabilities and deepened our supply chain through SK hynix's HBM leadership". Rebellions Japan followed in February 2025 and a Saudi subsidiary in August 2025. The About page lists offices in Seongnam (Korea), Santa Clara (Rebellions America Inc.), Tokyo and Riyadh (MENA Region HQ). The Korean newsroom carries Korean-language announcements such as the SKT 에이닷 call-summary work on its NPU.

The investor voices on the About page frame the position. Fleur Pellerin (Korelya Capital): "Tech sovereignty starts with control over compute." SK Telecom's Jaeshin Lee talks about pairing inference-optimised infrastructure with SKT's own foundation model. The design matches that engineering stance: square, flat, graphite and one green signal. It avoids the rounded, shadowed look of generic SaaS.

### Principles

1. **Inference-first, efficiency-always.** *UI implication:* lead with the workload and the power story, not abstract benefit.
2. **One action, one colour.** *UI implication:* `#52f756` marks the next step and nothing else.
3. **Square is precise.** *UI implication:* 0px corners on every control and card.
4. **Scale over weight.** *UI implication:* hierarchy through size and whitespace, weights 400–600.
5. **Flat, not decorated.** *UI implication:* bands and media separate sections; no shadows.

### Personas

*Personas below are fictional archetypes informed by the audiences the site addresses (data-center and cloud infrastructure teams, ML platform engineers, sovereign-AI buyers), not individual people.*

**서지훈, 38, 경기 성남.** ML infrastructure lead at a Korean cloud provider evaluating inference accelerators. Cares about performance per watt and total cost of ownership. Reads the RebelServer and SDK pages for deployment realism.

**Aiko Tanaka, 41, Tokyo.** Enterprise AI platform architect at a Japanese systems integrator. Needs PyTorch and vLLM support out of the box and stable SDK docs.

**Khalid Al-Otaibi, 45, Riyadh.** Program director on a sovereign-AI infrastructure initiative. Thinks in rack- and data-center-scale deployments and supply-chain reliability.

## Colors

### Primary
- **Rebel Green** (`#52f756`): The fill of every primary button (자세히 보기 on home and Rebel100, 200 × 50). It is also the label colour of the header 도입 문의하기 item and of the black footer contact pill, and the hover fill of the grey About buttons. It is the primary because it is what the product pages render in the primary-action role on all three captured pages, and no other hue competes with it. It is also the only saturated colour in the capture: 45 text/border uses and 7 fills.
- **On Primary** (`#24292e`): The label on the green fill.

### Neutral & Surface
- **Canvas** (`#f6f8fa`): The `body` background on all three pages; also the headline colour on the dark hero and band sections, and the hover label colour of the primary button.
- **White** (`#ffffff`): Carousel arrow fill.
- **Black** (`#000000`): The footer contact pill fill and the hover and pressed fill of the green primary button.

### Text
- **Ink** (`#24292e`): Body text, headings on the light canvas, and the labels of the light buttons.
- **On Dark** (`#d9e4ed`): Header links over the home hero, footer links and footer copy; also the rest fill of the About page's Get directions buttons.

### Removed from the June body
The June record also listed a panel dark, a muted grey, a steel and a docs-site dark. None renders in a role on the captured Korean pages, and the docs site (docs.rbln.ai) was not captured, so they are gone from this reference rather than guessed.

## Typography

### Font Family
- **Pretendard** carries every role on the Korean site: body, headings, buttons, navigation, cards and list items (651 uses). It is served from the jsDelivr CDN build of orioncactus/pretendard (static woff2/woff files), and the `body` stack is `pretendard, -apple-system, "system-ui", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif`. Pretendard is distributed under the SIL Open Font License 1.1.
- **Unresolved claims.** The June record named Sohne for display, plus Space Mono and Fira Code. None of them is loaded or declared on the three captured Korean pages. The global English site and the SDK documentation may still use them, but they were not captured. They are not a token here, and nothing should render them from this reference.
- Font Awesome 5/6 faces are declared by the theme but no captured element uses them.

### Hierarchy

| Role | Size | Weight | Line height | Where |
|---|---|---|---|---|
| Display / page H1 | 64.7px | 400 | 80.9px (1.25) | About H1, Rebel100 H1, home hero |
| Hero lead | 27.8px | 600 | 34.8px | Line under the hero headline |
| Section | 52.9px | 500 | 66.1px | Home section headlines |
| Block title | 39.7px | 400 | 49.6px | Our Story, Latest Updates |
| Milestone | 31.8px | 600 | 39.8px | About timeline entries |
| Card title | 24px | 400 | 30px | Latest Updates cards |
| Lead | 21.2px | 400 | 31.8px | Section intros |
| Button | 20px | 600 | 25px | 자세히 보기, Get directions |
| Nav | 20px | 500 (contact item 700) | 80px row | Header |
| Body | 16px | 400 | 22.4px | Document default |
| Footer link | 16px | 300 | 22.4px | Footer sub-links |
| Caption | 14px | 500 | 19.6px | Footer contact pill |

Letter-spacing is `normal` on every captured text element.

### Principles
- **Size, not weight.** Big type stays at 400–500; 600 is reserved for milestones and button labels.
- **One family.** Pretendard handles Korean and Latin alike; product names keep their ™ marks in the same face.
- **No tracking tricks.** Letter-spacing stays normal at every size.

## Layout

### Spacing System
- Button padding: 10px 24px (primary), 0 40px (secondary), 8px 20px (footer pill).
- The most frequent measured spacing values are 20, 80, 24, 10 and 16px. The 80px value is the header row height repeated through the menu.

### Grid & Container
- Content blocks run 1280px wide inside a 1440 viewport; the header and mega-menu run 1325px.
- Updates and product cards sit three across at about 448px.

### Whitespace Philosophy
Large, regular-weight headlines get generous air, and sections alternate light canvas with full-bleed image or dark bands. There are no card boxes to hold content; alignment and spacing do the grouping.

### Border Radius Scale
- `0px` everywhere. The collector found no other radius value.

### Responsive Behavior

#### Breakpoints
Only the 1440px desktop viewport was captured. Headline sizes are fluid (fractional pixel values), so they will shrink with the viewport; the exact rules were not read.

#### Touch Targets
- Primary buttons are 50px tall, secondary 60px, the footer pill 36px and carousel arrows 40px.

#### Collapsing Strategy
Not measured.

#### Image Behavior
Hero and band sections are full-bleed media with text laid over them; update cards use a square image.

## Elevation & Depth

No captured control or card has a shadow. Separation comes from background bands and full-bleed media, never from elevation. Keep new surfaces flat.

## Motion & Easing

The probe read `transition: all 0.3s ease` on the primary 자세히 보기 button and on the About page's Get directions buttons; their colour changes ease over 300ms. The header contact item and the footer contact pill compute `transition: all 0s`, so their changes are instant. Nothing else about motion (carousels, band reveals) was measured. Treat it as unspecified and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/rebellions.json (capturedAt 2026-09-30T13:12:12Z), deterministic collector, 1440x900, logged out: kr.rebellions.ai, /company/about/, /rebellions-product/rebel100/. States: fixed keyboard probe raws docs/research/2026-09-29-growth/raw/rebellions-states-home.json, rebellions-states-about.json and rebellions-states-footer.json.
- §1, §10, §11 context: kr.rebellions.ai/company/about/ (Our Story timeline, offices, investors), the home copy, /company/newsroom/ and a Korean newsroom article, opened 2026-09-30.
- §3 licence: the Pretendard LICENSE file on GitHub.
- The June motion table (120/220/360ms and three cubic-bezier curves) had no evidence and was removed.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->

## Components

### Buttons

**Primary (자세히 보기)**
- Background: `#52f756`
- Text: `#24292e`, 20px / 600
- Radius: 0px
- Size: 200 × 50 (padding 10px 24px), width follows the label (218–228px on Rebel100)
- Hover and pressed: background `#000000`, label `#f6f8fa`, the trailing arrow icon swaps to a light version; `transition: all 0.3s ease`
- Use: the main action in each home and product section

**Secondary (Get directions)**
- Background: `#d9e4ed`
- Text: `#24292e`, 20px / 600
- Radius: 0px
- Size: 305 × 60 (padding 0 40px)
- Hover and pressed: background `#52f756`; `transition: all 0.3s ease`
- Use: the four office cards on the About page

**Footer contact pill (도입 문의하기)**
- Background: `#000000`
- Text: `#52f756`, 14px / 500
- Radius: 0px
- Size: 116 × 36 (padding 8px 20px)
- Hover and pressed: the colours invert, background `#52f756` and label `#24292e`; `transition: all 0s`, so the swap is instant
- Use: the footer of every captured page

**Carousel arrow**
- Background: `#ffffff`
- Icon: `#24292e`
- Border: 1px solid `#24292e`
- Radius: 0px; 40 × 40
- The collector saw these arrows in a disabled state at the start of the carousel; how disabled looks was not measured.

### Navigation
- Header row is 80px tall; items are 20px / 500 in `#d9e4ed` over the home hero and `#24292e` on the light About page.
- One item, 도입 문의하기, is `#52f756` at 700. The probe found no hover or pressed change on it (`transition: all 0s`).
- The mega-menu under the header is not described here: its entries are in the DOM but are hidden until opened, and they were not opened.

### Cards
- **Latest Updates card:** 448px column, square 408 × 408 image link, 24px / 400 title below. No fill, border, radius or shadow.
- Rebel100's feature cards follow the same square, unfilled pattern (436px wide).

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out kr.rebellions.ai pages plus fixed keyboard-probe state reads and first-party context)
**Tier 1 sources:** https://kr.rebellions.ai/ ; https://kr.rebellions.ai/company/about/ ; https://kr.rebellions.ai/rebellions-product/rebel100/ ; https://kr.rebellions.ai/company/newsroom/
**Tier 2 sources:** not attempted; no Tier 2 value used

### States

| State | What was measured |
|---|---|
| **Hover / pressed, primary** | `#52f756` → `#000000` fill, label `#24292e` → `#f6f8fa`, arrow icon swaps; 0.3s ease |
| **Hover / pressed, secondary** | `#d9e4ed` → `#52f756` fill; 0.3s ease |
| **Hover / pressed, header contact item** | No change |
| **Hover / pressed, footer contact pill** | `#000000` → `#52f756` fill, label `#52f756` → `#24292e`; instant |
| **Disabled** | Carousel arrows are disabled at the first slide; their disabled look was not measured |
| **Focus** | Not measured; do not infer a focus style from this reference |

Empty, loading, error and success states were not observed on the public pages and are not specified here.

## Do's and Don'ts

### Do
- Keep `#52f756` for the primary action and the contact path only.
- Put `#24292e` labels on green, and switch to black with `#f6f8fa` text on hover.
- Keep every corner square.
- Use Pretendard for Korean and Latin text alike, with size carrying the hierarchy.
- Use `#d9e4ed` for links and copy on dark bands.

### Don't
- Don't round buttons, cards or arrows.
- Don't add shadows.
- Don't introduce a second accent hue.
- Don't set Sohne or a monospace face from this reference; they were not observed on the Korean site.
- Don't use pure black for body text; ink is `#24292e`.

## Voice & Tone

Rebellions' voice is technical, declarative and efficiency-minded. It reads like an engineer briefing a deployment. The About page states its case plainly: "Purpose-built for Efficient, High-Performance Inference." The Korean home talks in capability headlines: "대규모 AI 서비스 추론 성능", "300+ 모델 지원으로 바로 구현하는 AI 서비스", "간편한 도입과 운영". Calls to action are plain imperatives: 자세히 보기, 도입 사례 알아보기, 도입 문의하기.

| Context | Tone |
|---|---|
| Headlines | Capability plus a claim you can benchmark ("Efficient. Scalable. Deployment-Ready.") |
| Calls to action | Short imperatives (자세히 보기, 도입 문의하기) |
| Product names | Trademarked, system-like: Rebel100™, RebelServer™, RebelRack™, RebelPOD™ |
| Company story | Dated milestones in plain English |
| Closing line | "The most profitable inference runs on Rebellions. Let's Talk." (About page) |

**Forbidden register:** empty superlatives, consumer-app exclamation, and benefit talk without a measurable claim behind it.

## Agent Prompt Guide

### Quick Color Reference
- Primary action: `#52f756` with `#24292e` label
- Hover of primary: `#000000` with `#f6f8fa` label
- Canvas: `#f6f8fa`
- Ink: `#24292e`
- Text on dark: `#d9e4ed`
- Footer pill: `#000000` with `#52f756` label

### Example Component Prompts
- "A 200 × 50 square button, background `#52f756`, label `#24292e` 20px / 600 Pretendard, padding 10px 24px, radius 0. On hover the background becomes `#000000` and the label `#f6f8fa` over 0.3s ease."
- "A 305 × 60 square button, background `#d9e4ed`, label `#24292e` 20px / 600; hover fills `#52f756`."
- "A news card: square image, then a 24px / 400 Pretendard title in `#24292e`; no border, radius or shadow."

### Iteration Guide
1. Check that green appears only on the primary action or the contact path.
2. Check every corner is 0px and there are no shadows.
3. Check headlines are large but no heavier than 500 (600 only for milestones and buttons).
4. Check dark bands use `#f6f8fa` headlines and `#d9e4ed` links.

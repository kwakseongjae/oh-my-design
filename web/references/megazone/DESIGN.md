---
name: MegazoneCloud
colors:
  primary: '#414aff'
  point-green: '#32ef7a'
  point-light-blue: '#00d7f8'
  point-purple: '#8920ff'
  point-pink: '#ff41c1'
  foreground: '#191919'
  background: '#ffffff'
  surface-light: '#f7f7f7'
  surface-muted: '#f0f0f0'
  surface-dark: '#0a0f10'
  black: '#000000'
  gray: '#777777'
  gray-medium: '#aaaaaa'
  gray-light: '#c0c0c0'
  line-gray: '#dddddd'
  text-red: '#ff0000'
  chip-track: '#dbdbdb'
  chip-hover: '#cccccc'
typography:
  action:
    fontSize: 18px
    fontWeight: 700
    lineHeight: 18px
    letterSpacing: '-0.36px'
    use: Main Contact Us and Case Stories Learn More actions; live surface use.
  navigation:
    fontSize: 16px
    fontWeight: 600
    lineHeight: 22.4px
    use: Partners header link; live surface use.
  service-link:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 22.4px
    letterSpacing: '-0.32px'
    use: Data & AI Learn More link; live surface use, not a paragraph-size claim.
  category:
    fontSize: 16px
    fontWeight: 700
    use: MS certification category button; live surface use.
  resource-label:
    fontSize: 16px
    fontWeight: 500
    use: Visible 보도자료 tag inside the resource card; live surface use.
  case-title:
    fontSize: 24px
    fontWeight: 700
    lineHeight: 33.6px
    use: Amorepacific case-story title link in the survey; live surface use.
rounded:
  square: 0px
  utility: 8px
  testimonial: 18px
spacing:
  action-inline: 40
  navigation-inline: 24
  category-block: 10
components:
  contact-main:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#414aff'
    rounded: 100px
    height: 56px
    padding: 0px 40px
    typography: 18px / 700
    hover: '#dddddd'
    pressed: '#dddddd'
    use: Contact Us link to /about/contact in the closing gradient section. The measured white background becomes gray on hover and held press. Moving focus ripple is documented in prose.
  case-more:
    type: button
    textColor: '#191919'
    border: '#191919'
    rounded: 100px
    height: 56px
    padding: 0px 40px
    typography: 18px / 700
    hover: rgba(0, 0, 0, 0.1)
    pressed: rgba(0, 0, 0, 0.1)
    use: Learn More link to /case-stories, transparent over white with a 1px solid border. Hover and held press add a 10% black background.
  nav-partners:
    type: button
    textColor: '#191919'
    rounded: 0px
    height: 100px
    padding: 0px 24px
    typography: 16px / 600
    hover: 'Label span::after width: 0px to 63.625px; height remains 2px.'
    pressed: 'Label span::after width: 0px to 63.625px; height remains 2px.'
    use: 'Partners navigation link to /partner. This foreground is the scrolled-header pointer baseline: transparent over rgba(255, 255, 255, 0.8). At page top its label is white. Keyboard focus uses a browser auto outline.'
  resource-card:
    type: card
    textColor: '#ffffff'
    rounded: 0px
    width: 380px
    height: 380px
    padding: 0px
    typography: 16px / 400
    hover: 'Image wrapper scale: 105%; computed transform matrix(1.05, 0, 0, 1.05, 0, 0).'
    pressed: 'Image wrapper scale: 105%; computed transform matrix(1.05, 0, 0, 1.05, 0, 0).'
    use: Resource link to /resources/newsroom/65. Transparent outer anchor over an image; radius and font describe that anchor. Its rounded inner panel has white visible tag/headline text; the tag is 16px/500. The inherited anchor foreground is rgba(0, 0, 0, 0.87).
  cert-ms:
    type: button
    textColor: '#ffffff'
    rounded: 100px
    height: 40px
    padding: 10px 24px
    typography: 16px / 700
    hover: '#cccccc'
    pressed: '#cccccc'
    use: 'MS certification category button before selection; transparent over the #dbdbdb category track. Hover and held press fill gray. No selection was committed.'
fonts:
  roles:
    sans: pretendard
---

# Design System Inspiration of MegazoneCloud

## Overview

### Visual Theme & Atmosphere

MegazoneCloud helps enterprises with cloud, AI/data and security. Its [company story](https://www.megazone.com/about/company) traces a progression from web agency and hosting services in 1998, through SaaS in 2009 and IaaS in 2012, to the timeline's **AI-Native Company** milestone in 2024. The same page states its mission as **“Transform Tomorrow, Together”**. This gives the current site a clear direction: the cloud partner presents itself as a partner for customers' next stage of AI adoption. These dates describe the company's published historical narrative, rather than incorporation dates inferred for today's legal entity.

The homepage makes that direction visible with a dark opening, a faceted translucent shape, oversized English display text and a pink/violet highlight. White information sections, image-led resource cards and rounded actions provide a different pace beneath the opening. This is an observation of the live corporate website, supported by the viewport capture and the measurements below; the company's software products were not measured. The measured homepage is the Korean-language surface at `megazone.com/`: the final URL stayed on `/`, while the HTML declares `lang="en"`.

The [homepage](https://www.megazone.com/) presents services, industries, products, customer stories and contact routes. Its Korean name is **메가존클라우드**, exactly as written in the live page title. The legal notice identifies the operator as **메가존클라우드(주)** at **경기도 과천시 과천대로7길 74 메가존산학연센터**. [Current privacy notice](https://privacy.megazone.com/production/mzc/privacy/20/ko.html)

### Brand Narrative

The company page explicitly connects its accumulated cloud expertise with helping customers respond and grow in the AI era. Its timeline supplies the historical arc; its mission makes that arc collaborative. On the homepage, the transformation message leads into services, products and customer stories. That sequence provides a concrete structure for expressing the company's current positioning without inventing a rebrand date. [Company story](https://www.megazone.com/about/company), [homepage](https://www.megazone.com/).

### Principles

The company page names ethics as the highest priority in its management activities and describes protecting customers' data and infrastructure as a promise beyond technology. Partnership and customer growth also recur in its mission text. These are company statements; the observed design patterns are large actions, a mixed dark/light page and image-led proof of capability. No official design-principle document was verified. [Company story](https://www.megazone.com/about/company)

### Personas

No researched personas were verified.

## Colors

The census contains 76 computed root properties and 112 distinct declared properties. The first-party set comprises 26 colour/gradient properties and three font bindings. Framework and editor properties are excluded from the brand palette.

| Role in this reference | Measured value | Evidence |
|---|---|---|
| Primary catalogue accent | `#414aff` | `--color-point-blue`; also the main Contact Us label |
| Point green | `#32ef7a` | `--color-point-green` |
| Point light blue | `#00d7f8` | `--color-point-light-blue` |
| Point purple | `#8920ff` | `--color-point-purple` |
| Point pink | `#ff41c1` | `--color-point-pink` |
| Foreground | `#191919` | `--color-text-dark-gray`; 71 paragraph samples |
| White background / inverse foreground | `#ffffff` | `--color-bg-white`, `--color-text-white` |
| Light surface | `#f7f7f7` | `--color-bg-light-gray` |
| Muted surface | `#f0f0f0` | `--color-bg-medium-gray` |
| Dark opening surface | `#0a0f10` | Rendered background census, six occurrences |
| Black | `#000000` | `--color-bg-black`, `--color-text-black` |
| Gray | `#777777` | `--color-bg-dark-gray`, `--color-text-gray` |
| Medium gray | `#aaaaaa` | `--color-text-medium-gray` |
| Light gray | `#c0c0c0` | `--color-text-light-gray: silver` |
| Line gray / main action hover | `#dddddd` | `--color-line-gray`; Contact Us hover and press |
| Literal red | `#ff0000` | `--color-text-red: red`; no error-state role established |
| Certification category track | `#dbdbdb` | MS button's parent background |
| Certification category hover | `#cccccc` | MS hover and press background |

The first-party multicolour property is `--color-gradient: linear-gradient(90deg,#32ef7a,#00d7f8 25%,#414aff 50%,#8920ff 75%,#ff41c1)`. Seven additional two-colour gradient declarations are recorded in the verification notes. Their presence does not establish a gradient for every component. The catalogue's primary accent selects the site's named point-blue value; an official primary/secondary colour hierarchy was not verified.

The outlined Case Stories action uses `rgba(0, 0, 0, 0.1)` on hover. The scrolled header behind Partners is `rgba(255, 255, 255, 0.8)`. Keep these alpha values attached to their measured surfaces.

## Typography

| Evidence class | What was verified |
|---|---|
| Official product use | No company typography specification was verified for its software products. |
| Live-loaded surface use | `pretendard` normal weights **300, 400, 500, 600, 700 and 800** are loaded in `document.fonts` on the corporate homepage. This is the sole family exported in this reference. |
| Official distributed assets | No public font kit, font licence or separate brand font distribution was verified. The live CSS references first-party WOFF files under `/v2/_next/static/media/`. |
| Declared-only | Pretendard weights **100, 200 and 900**, plus `Noto Sans JP` and `Noto Sans SC` variable faces at **100–900**, occur in `@font-face` but are absent from the loaded-face census. The generated Fallback aliases are also declared-only. No specimen is assigned to any of these faces. |
| Unresolved | Product-wide adoption, licensing and the actual Japanese/Chinese edition font use remain unresolved. **Substitute: none chosen.** |

The body and button CSS stacks begin with `pretendard`; the census found no `h1` to report. A CSS stack is not proof that every named family rendered. These interface metrics are directly observed:

| Surface element | Size / weight | Line height | Letter spacing |
|---|---|---|---|
| Main Contact Us and Case Stories actions | 18px / 700 | 18px | -0.36px |
| Partners navigation | 16px / 600 | 22.4px | normal |
| Data & AI service link | 16px / 400 | 22.4px | -0.32px |
| MS category button | 16px / 700 | normal | normal |
| Resource card's visible category tag | 16px / 500 | Not separately recorded | Not separately recorded |
| Amorepacific case-story title link | 24px / 700 | 33.6px | Not recorded in the survey |

The service-link size is not promoted to a paragraph-size rule. Loaded font file paths and the full declared stack are preserved in the verification notes.

## Layout

At 1440 × 1000px, the fixed header is 100px high. Its navigation combines tall, padded text links with smaller contact and region controls. The service area contains 652.5px-wide accordion buttons and a 652.5px-wide media link. Resource links are 380px square; the first three start at x = 40, 440 and 840px, giving 20px gaps from the survey's rounded geometry.

Use the measured insets locally: 40px inline on the large actions, 24px inline on navigation and category buttons, and 10px vertically on the category button. These are observed component dimensions, not a verified global spacing scale. Testimonial containers have 40px padding in the survey.

### Responsive Behavior

Only the 1440 × 1000px desktop surface was measured; mobile layout and breakpoints are unverified.

## Elevation & Depth

The sampled controls report `box-shadow: none`. Depth in the opening comes from the faceted visual and imagery; the measured scrolled header uses a translucent-white surface. Neither observation establishes a reusable shadow or blur token.

## Motion & Easing

The main Contact Us action, Case Stories action and MS category button share a computed self transition with three **0.25s** duration entries, equivalent to **250ms**, and the curve **`cubic-bezier(0.4, 0, 0.2, 1)`** for background colour, box shadow and border colour. The exact serialized transition is preserved in the verification Proof block.

Partners, the service link and the resource anchor themselves report `all 0s ease 0s`; their descendants have separate behaviour. The probe records a longest compared transition of **200ms** for Partners and the service link, and **300ms** for the resource card. Those are scope maxima, not identified per-property easing specifications. The underline expansion and 1.05 image scale are verified endpoints; no timing is inferred for the hero visual or the scroll reveals.

## Components

Five controls have measured changes and are included in the component tokens. All action and navigation anchors remain links in implementation.

| Control | Identity and resting appearance | Measured pointer response |
|---|---|---|
| `contact-main` — main Contact Us | Link to `/about/contact`; 194.8 × 56px, radius 100px, padding 0px 40px, 18px/700. White fill, point-blue text and arrow; no border or shadow. | Hover and held press change the fill to line gray. Press also adds two ripple descendants. |
| `case-more` — Case Stories Learn More | Link to `/case-stories`; 198.1 × 56px, radius 100px, padding 0px 40px, 18px/700. Transparent on white; dark text and a 1px dark border; no shadow. | Hover and held press add a 10% black background. Press adds two ripple descendants. |
| `nav-partners` — Partners | Link to `/partner`; 111.6 × 100px, radius 0px, padding 0px 24px, 16px/600. Transparent; white label at page top, dark label on the scrolled translucent-white header. | In the scrolled-header pointer pass, the label's dark `::after` underline grows from 0 × 2px to 63.625 × 2px on hover and press. |
| `resource-card` — AWS Agentic AI resource | Link to `/resources/newsroom/65`; outer anchor 380 × 380px, radius 0px, padding 0px, 16px/400. Transparent over an image; tag and headline are white. | The image wrapper changes from `none` to `matrix(1.05, 0, 0, 1.05, 0, 0)` on hover and press: a scale of 1.05, or 105%. |
| `cert-ms` — MS category | Button, 72.2 × 40px, radius 100px, padding 10px 24px, 16px/700. Transparent with white text on the gray category track; no border or shadow. | Hover and held press add the measured category-hover gray. Press adds two ripple descendants. |

The resource card's radius and font above identify its **outer anchor**. Its inner image panel visibly has rounded corners; a numeric inner radius was not measured. Its inherited anchor colour is `rgba(0, 0, 0, 0.87)`, while the visible tag and headline are white. The exported foreground follows that visible text.

The Data & AI **Learn More** link is retained as a prose example: 98.1 × 22.4px, radius 0px, padding 0px, 16px/400, transparent over `rgb(250, 250, 250)`, dark label already underlined at rest. Hover and press produced no change within the recorded comparison scope; keyboard focus added only a browser `auto` outline. It therefore has no interactive component token.

The 100px action radii produce pills at their measured heights. Separate surveyed shapes include 8px corners on the 50 × 50px utility controls and 18px corners on testimonial containers. There is no basis for making every card or link square, or for applying one radius everywhere.

### States

All six controls received keyboard focus through real Tab navigation. Valid pointer snapshots assert `hover: true`; pressed snapshots assert `active: true`. The card's first pointer pass was UNMEASURED because it was outside the viewport; the second call measured its scale change. No overlays were hidden.

Contact Us, Case Stories Learn More and MS keep their resting self colours and outlines under keyboard focus, while MUI adds ripple descendants. The ripple transforms were still moving; the contact and category sections also revealed ancestors whose changes persisted after blur. Those reveal changes are not focus tokens, and the moving ripple is not assigned a settled focus value. Partners, the service link and the resource card receive `rgb(0, 95, 204) auto 1px` browser outlines with a 1px offset; none becomes a brand ring token. No disabled state or committed category selection was measured.

The service link's no-change result covers self and pseudo-elements, three descendants including one SVG and one path, and three ancestor levels with pseudo-elements. The probe compares computed styles and DOM attributes, including text decoration, background imagery and SVG paint. It does not establish the absence of changes in video/canvas pixels, siblings, closed shadow roots or cross-origin frames.

## Do's and Don'ts

- Pair the dark opening and vivid image-led content with white information sections.
- Use the measured Pretendard weights and keep the heavy 18px action treatment distinct from the regular 16px service link.
- Preserve the underline expansion and image scaling; colour alone does not describe these states.
- Keep pills, utility corners and container corners attached to their observed roles.
- Retain visible child-label colours when an outer anchor inherits a different colour.
- Avoid treating Tailwind defaults, MUI's default blue, Swiper blue or CKEditor colours as brand colours.
- Do not turn browser focus outlines, persistent scroll reveals or moving ripple snapshots into brand focus tokens.

## Voice & Tone

The homepage pairs English section and action labels with Korean explanations. Its mission and transformation language emphasise partnership; the [contact page](https://www.megazone.com/about/contact) says **“비즈니스 고민, 함께 해결해 드립니다.”** A useful reference pattern is to introduce an enterprise capability in a short heading, then explain the customer's business outcome in Korean. This is an interpretation of the opened copy, rather than a published writing standard.

## Agent Prompt Guide

Build a MegazoneCloud-style enterprise homepage using a dark opening, a faceted translucent visual, a pink/violet display highlight and white service sections. Use the live-loaded Pretendard family at the measured weights. For the large contact link, use a 56px height, 100px radius, 0px 40px padding, white fill and point-blue 18px/700 text; change its fill to line gray on hover and held press.

For navigation, reproduce the **scrolled-header** Partners treatment: dark 16px/600 text, a 100px-high hit area, 24px inline padding and a 2px-high underline that expands to the measured label width. For the resource card, scale only the image wrapper to 1.05 and preserve the white text. These directions describe the measured corporate surface.

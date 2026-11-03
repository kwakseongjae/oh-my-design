---
name: Studio
colors:
  primary: '#222222'
  foreground: '#222222'
  white: '#ffffff'
  off-white: '#f7f7f7'
  grey-150: '#f2f2f2'
  grey-300: '#eeeeee'
  black: '#000000'
  secondary-ink: '#555555'
  observed-border: '#e2e2e2'
typography:
  nav:
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.4
    use: Header Pricing link, Inter Tight; measured 21px line height
  action-label:
    fontSize: 16px
    fontWeight: 600
    use: Visible Start For Free and Login ／ Sign Up child labels
  secondary-label:
    fontSize: 16px
    fontWeight: 700
    use: Visible white Design Editor Learn more child label
  footer-link:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.66
    use: Footer Design Editor link, Inter; measured 26.56px line height
rounded:
  none: 0px
  compact: 4px
  story-alt: 6px
  feature: 8px
spacing:
  action-y: 12
  primary-x: 28
  secondary-x: 24
components:
  button-primary:
    type: button
    backgroundColor: '#222222'
    textColor: '#ffffff'
    rounded: 4px
    height: 42.4px
    padding: 12px 28px
    typography: 16px / 600
    hover: Arrow image transform matrix(1, 0, 0, 1, 0, 0) → matrix(1, 0, 0, 1, 2, -2); fill and visible label unchanged
    pressed: Arrow image transform matrix(1, 0, 0, 1, 2, -2); fill and visible label unchanged
    use: 'Hero Start For Free link to app.studio.design/signup; visible child label is white, whereas the anchor''s inherited color is #333333. No navigation was activated.'
  button-secondary:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#222222'
    rounded: 8px
    height: 46.4px
    padding: 12px 24px
    typography: 16px / 700
    hover: Box shadow rgba(0, 0, 0, 0.1) 0px 2px 15px 0px → none
    pressed: Box shadow none; fill and visible label unchanged
    use: White Learn more link in the Design Editor feature panel, href /features/design; shadow removal is controlled by the containing panel's hover rule.
  nav-pricing:
    type: button
    textColor: '#222222'
    rounded: 0px
    height: 21px
    padding: 0px
    typography: 15px / 500 Inter Tight
    hover: Opacity 1 → 0.6
    pressed: Opacity 0.6
    use: 'Header Pricing link, href /pricing; transparent over the measured #f2f2f2 backing surface.'
fonts:
  roles:
    sans: Inter
    tight: Inter Tight
    japanese: Noto Sans JP
---

# Design System Inspiration of Studio

## Overview

### Visual Theme & Atmosphere

Studio is a Japanese no-code website design and publishing platform. Its company profile dates its establishment to April 2016. The current homepage presents a visual editor, collaborative CMS, hosting, forms, SEO, Lottie and Figma import as parts of the website-making workflow. Its promise combines creative freedom with getting an idea onto the web without code. [Company profile](https://studio.inc/company), [homepage](https://studio.design/)

The distinctive expression has a documented foundation. Studio's 2024 brand book describes a reduction from bright brand colours to monochrome so creators and their work occupy the foreground. The dimensional logo is a vessel with negative space that the creator completes; the slash extends into a 45° visual motif. On the measured homepage, near-black type and actions sit beside a large collage of colourful websites. The contrast between restrained framing and expressive work is an application of that published direction. [Brand book](https://studio.design/brandbook)

The rebrand was announced on 1 October 2024 with Nuevo.Tokyo. The company changed its styling from STUDIO to Studio, using Studio.Design globally and Studio in Japan. The release also described an expansion beyond professional web designers toward entrepreneurs, marketers and other people with something to create. The accompanying interview connects the work to ma (emptiness), tatami (modularity) and iki (refinement). These are documented sources for the restraint and modularity, rather than principles inferred from CSS variable names. [Official announcement](https://studio.inc/pressrelease/rebranding_2024), [rebrand interview](https://studio.design/brandbook/backstage)

The measured homepage is the English edition at `studio.design/` (`lang="en"`), captured from South Korea with locale `ja-JP`; no regional redirect occurred. All measured component values below belong to this public marketing surface.

Primary tasks evidenced by the homepage are starting a site, learning the editor/CMS/publishing workflow, finding a template and reading creators' stories. Editing a logged-in project was outside the capture.

### Brand Narrative

The current brand is the result of a completed 2024 update. Studio's official release connects the vessel concept to a broader audience and a global expansion, while retaining the 45° line from the earlier identity. The name changed from all-caps STUDIO to Studio, with Studio.Design used globally. [Official announcement](https://studio.inc/pressrelease/rebranding_2024)

The rebrand interview supplies a more precise explanation for the restrained surface: creators' work completes the identity. Its account of ma, tatami and iki connects emptiness, modular fit and refinement to the toolkit. It also describes the logo taking on featured work's tones. This is the source for allowing expressive work inside a restrained frame; it does not require all interactive controls to be blue. [Rebrand interview](https://studio.design/brandbook/backstage)

The corporate mission page states that removing obstacles to expression should increase the joy of creating. That mission provides context for the no-code workflow without turning visual observations into invented product principles. [Mission and values](https://studio.inc/about)

### Principles

The published brand principles can be paraphrased as three implementation goals: put creators first and provide a vessel for their work; reduce process friction so they can focus on creating; combine bold design with a welcoming character. [Brand book](https://studio.design/brandbook)

For this measured homepage, those goals translate into monochrome framing, prominent examples of created sites, differentiated typography and small but specific control feedback. This last sentence is an implementation reading of the observed surface, not an additional company-authored principle.

### Personas

The official 2024 release identifies professional web designers, enterprise teams, sole proprietors, startup founders and company marketers as intended audiences. It describes expressive efficiency for professionals, broader organisational use cases for enterprise, and fast quality site creation for individuals or small teams. No invented named persona, age, location or behavioural prediction is retained. [Official announcement](https://studio.inc/pressrelease/rebranding_2024)

## Colors

Use the observed monochrome contrast as the foundation. The census counted 802 elements; these are element counts, not proportions of visible pixels.

| Value | Current evidence and role |
|---|---|
| `#222222` | Main paragraph ink: 24 `<p>` elements. Nine background elements. Fill of the hero and header signup links; visible ink of Pricing and the white Learn more label. This is the reference's measured `primary` and `foreground`. |
| `#ffffff` | White secondary action fill and the visible hero/signup labels. Two background elements, three text elements, two paragraph elements. |
| `#f7f7f7` | Light text in dark regions: 25 text elements and 16 paragraphs; also a locally declared gradient stop. Its presence does not establish the prior claim that it is the universal panel background. |
| `#f2f2f2` | Three background elements and the backing colour sampled behind Pricing. The hero container `._c105` explicitly declares this fill. |
| `#eeeeee` | Four background elements and the sampled backing behind the Catarina image link. |
| `#000000` | Two background elements in the census; the small Created in Studio banner also uses this fill. |
| `#555555` | Two text elements in the census; visible social icon links in the survey. |
| `#e2e2e2` | One border element in the census. This is an observed border value, not a universal input/card border rule. |
| `#333333` | Several enclosing anchors inherit this colour. The CTA's visible child is white, and the white secondary action's visible child is `#222222`; use those visible child colours for implementation. |

Additional declarations survive in the page's shared renderer styles: rich-text links use `#007cff`; a table-of-contents block declares `#f5f5f5` fill with `#616161` ink; rich-text table borders are `#f2f2f2` with `#1a1a1a` text; preformatted blocks declare `#eeeeee`; rules written as `#ccc` correspond to `#cccccc` horizontal-rule borders. The page also contains a `#111111` text utility and `#fafafa` hover-label declarations. These are declared CSS facts, not a measured semantic palette for editor controls. They are retained here without extending their roles. [Homepage inline CSS](https://studio.design/)

No error, success, warning or disabled colour role was verified on an active control.

## Typography

The evidence classes are separate:

- **Official product use:** the opened company and brand pages do not name a product typeface. No claim about the logged-in editor's font follows from this capture.
- **Live-loaded:** the census reports Inter at 400/500/600/700, Inter Tight at 500/700, and Noto Sans JP at 400/500/600/700, all normal. These three text families populate the typography family tokens. Inter Tight is computed on the header Pricing link; Inter is computed on the surveyed footer Design Editor link. The headline's computed stack is `Inter, "Noto Sans JP"`. Noto Sans JP is an observed site-loaded face, not a substitute selected for this reference.
- **Serving evidence:** the document links a Google Fonts stylesheet requesting those families and weights, plus Inter Tight italics. That stylesheet was unreadable to the CSSOM walker; its requested families and the loaded-face census are different evidence. Font Awesome 6 Brands 400 is also loaded, from a `production-os-assets` WOFF2 URL, for social icons; it is excluded from the text-family tokens.
- **Official distributed assets:** no downloadable brand font package or product-font specification was verified on the opened brand-book pages. No font files were downloaded.
- **Declared-only:** Material Icons 400 and Font Awesome 6 Free 900 have `@font-face` declarations using `storage.googleapis.com/production-os-assets/` URLs but are absent from the loaded list. Menlo remains named in the shared rich-text `pre` rule, without a loaded face. They receive no specimen or text-family token.
- **Unresolved:** the prior grandam display use, Material Symbols variants and universal editor use of Inter were not confirmed. Substitute: none chosen.

| Element | Size / weight | Additional evidence |
|---|---|---|
| Hero headline | 80px / 600, declared CSS | `._c107` declares line-height 1 and tracking -0.04em; the census confirms its Inter/Noto Sans JP stack, not these computed metrics. |
| Start For Free child label | 16px / 600, computed | The surrounding link's inherited 16px/400 is not the visible label. Its `._c267` rule declares Inter/Noto Sans JP, line-height 1.15 and -0.04em tracking. |
| White Learn more child label | 16px / 700, computed | The child's utility declares Inter Tight with line-height 1.4. |
| Header Pricing | 15px / 500 Inter Tight, computed | 21px line height, normal letter spacing. |
| Header signup child label | 16px / 600, computed | White visible text within a link whose inherited colour is `#333333`. |
| Footer Design Editor | 16px / 400 Inter, computed | 26.56px line height, 4px vertical padding. |

This supports a specific pairing of Inter with Inter Tight, and actual 700-weight secondary action labels. It does not support the prior universal 400/500/600-only hierarchy or an eleven-role type scale.

## Layout

At 1440 × 1000 the hero pairs a large headline with a diagonal collage of website work and a lower-right text/CTA group. The survey records the fixed header at 1385 × 62px, with the logo beginning at x=30 and the primary CTA at x=1054, y=934. These coordinates identify this capture, rather than a responsive positioning recipe.

Keep the measured control spacing: 12px vertical action padding, 28px horizontal padding on the hero action, and 24px on the secondary action. The declared header navigation gap is 30px (`--gap-h:30px; --gap-v:0px`). This does not establish a 4px global spacing grid.

Observed corner treatments are 0px on Pricing, 4px on hero/signup links, 8px on the white secondary link and Catarina story image. The survey also records 6px on the Uday story image link. Use the value belonging to the component; there is no evidence for a universal 6px rule.

The brand book's negative-space and modular-vessel ideas offer a documented rationale for keeping surrounding structure restrained. Dashboard grids and editor panel dimensions were not measured. [Brand book](https://studio.design/brandbook)

### Responsive Behavior

Only desktop was rendered for measurement. The opened HTML includes style blocks at `max-width:1280px`, `768px`, `480px` and `360px`. The hero rule declares 80px at the desktop base, 60px at max-width 768px and 40px at max-width 480px; the mobile rule suppresses the hero arrow's hover translation. These are stylesheet declarations, not mobile interaction measurements. Editor drawers, touch target minima and a desktop-only editor prompt were not verified. [Homepage CSS](https://studio.design/)

## Elevation & Depth

The hero action, Pricing link and story image have no measured shadow. The secondary white action has one soft black shadow at rest and removes it on hover. That reversal is the verified elevation behaviour; it should not be replaced with a generic hover lift.

The header's inline rule declares `backdrop-filter: blur(50px)` and a transparent white background, alongside a 4px radius. This is declaration evidence, not a computed blur measurement. No modal/popover elevation scale was verified. [Homepage CSS](https://studio.design/)

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.secondary-rest`: `rgba(0, 0, 0, 0.1) 0px 2px 15px 0px`

## Motion & Easing

Computed transition strings support component-specific timing: the hero link has `0.3s cubic-bezier(0.2, 1, 1, 1) 0s`; the white secondary has `0.4s cubic-bezier(0, 0.5, 0.22, 1) 0s`; Pricing, the story image and header signup have `0.3s cubic-bezier(0.4, 0.4, 0, 1) 0s`. Each transition applies to the computed `all, --g-angle, --g-color-0, --g-position-0, … --g-position-11` list, reproduced in full in the verification Proof block.

The arrow's measured transform belongs to its child image. The timing above is the enclosing link's computed transition; the capture did not record the child's own transition string. Do not treat the link timing as a measured arrow-animation duration.

The stylesheet contains scoped reduced-motion rules for scrolling, dialogs and toggles. It does not establish the prior claim that all animation tokens collapse to an instant global state, and no reduced-motion browser pass was made. A reusable route/modal/gallery motion scale remains unverified. [Homepage CSS](https://studio.design/)

---

Verified 2026-11-03. First-party narrative: [company profile](https://studio.inc/company), [mission](https://studio.inc/about), [legal notice](https://studio.design/ja/terms), [brand book](https://studio.design/brandbook), [rebrand interview](https://studio.design/brandbook/backstage), [official 2024 announcement](https://studio.inc/pressrelease/rebranding_2024). Live values: homepage survey and five-control states capture, documented in verification.md. The nonsense-path control returned HTTP 404.

## Components

All five samples are links. Pointer states were sampled with the intended element actually hovered; pressed snapshots matched `:active`. Keyboard focus came from real Tab traversal. Border is `none` for each measured link.

| Control and selector | Rest geometry and visible appearance | Hover and pressed |
|---|---|---|
| Hero Start For Free — `a._c109` | 178.1 × 42.4px; radius 4px; padding 12px 28px; `#222222` fill; white `#ffffff` child label at 16px/600; no shadow | The 12 × 12px arrow image moves 2px right and 2px up. Fill, visible label, opacity and border do not change. |
| Design Editor Learn more — `a._c149` | 158.1 × 46.4px; radius 8px; padding 12px 24px; `#ffffff` fill; `#222222` child label at 16px/700; shadow `rgba(0, 0, 0, 0.1) 0px 2px 15px 0px` | Shadow becomes `none`, including while pressed. The containing panel's hover selector drives this removal. |
| Header Pricing — `header a[href="/pricing"]` | 45.2 × 21px; radius 0; padding 0; transparent over `#f2f2f2`; `#222222` at 15px/500 Inter Tight; no shadow | Opacity 1 → 0.6 on hover and pressed. Colour remains `#222222`. |
| Catarina story image — `main a[href="/story/Catarina"]` | 426.5 × 600px; radius 8px; padding 0; transparent over sampled `#eeeeee`; no text label; inherited 16px/400 and `#333333`; no shadow | No change within the measured comparison scope. It is described here without an interactive card token. |
| Header Login ／ Sign Up — `header a._c99` | 168.8 × 46.4px; radius 4px; padding 12px 20px 12px 24px; `#222222` fill; `#ffffff` child label at 16px/600; no shadow | No change within the measured comparison scope. It is described here without a separate interactive component token. |

The first three have measured authored pointer changes and enter `tokens.components`. The last two have unchanged pointer states and only browser focus indication; their identities remain useful prose. No input, badge, tab, toast, dialog, toggle or disabled control was verified as a current product component.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| primary-start | Arrow matrix translates to `(2, -2)` | Same arrow translation while active | Browser `auto` outline only |
| secondary-learn | Shadow removed | Shadow remains removed while active | Browser `auto` outline; ancestor entrance changes persist after blur and are excluded |
| nav-pricing | Opacity 0.6 | Opacity 0.6 while active | Browser `auto` outline only |
| card-catarina | No compared change | No compared change | Browser `auto` outline; persistent ancestor entrance changes excluded |
| header-signup | No compared change | No compared change | Browser `auto` outline only |

The actual browser outline string is `rgb(0, 95, 204) auto 1px off 1px`; its colour is not a Studio token. The comparison covers each link and its pseudo-elements, descendants with pseudo-elements, and three ancestor levels. There are two descendants for the hero action, three for the secondary, zero for Pricing, and one each for the story image and header signup; the story descendant is empty and was included. It compares computed colours, borders, outlines, shadows, opacity, transforms, filters, sizes, decorations, backgrounds, masks, image sources and SVG attributes. It cannot establish absence of changes inside video/canvas content, closed shadow roots, cross-origin frames or siblings.

No empty, loading, error, success, selected-editor-object or disabled state was observed. The original recipes for these states are unconfirmed rather than current specifications.

## Do's and Don'ts

Practical guidance derived from the measured homepage and the published brand book:

- Frame colourful creator work with the observed monochrome surfaces and ink.
- Give the hero action its 4px radius and moving arrow; give the white feature action its separate 8px radius and shadow-removal response.
- Use Inter Tight for the measured header navigation treatment and preserve the distinction between enclosing links and visible child labels.
- Preserve negative space and the 45° motif when following the documented brand direction. [Brand book](https://studio.design/brandbook)
- Keep the browser focus outline available; no authored focus-ring colour was established.

Do not import an unverified blue editor action, coral error scheme, uniform 6px radius, card lift, disabled recipe or shadow scale into this measured marketing reference. These prior claims remain individually traceable in the accompanying report.

## Voice & Tone

The English homepage uses short invitations: the hero greets a new site, and actions invite the visitor to start free or learn more. Product descriptions connect layout design, content collaboration and publication to the visitor's work. This is observed copy, not a comprehensive editorial policy. [Homepage](https://studio.design/)

The brand book explicitly combines boldness with friendliness and asks the system to simplify the creative process. Use that published direction as the tone anchor. Error-message rules, forbidden phrases, punctuation restrictions, emoji prohibitions and onboarding dialogue were not verified. [Brand book](https://studio.design/brandbook)

## Agent Prompt Guide

Use this prompt for the measured surface: “Create an English Studio-style marketing composition with near-black `#222222` paragraph ink, pale neutral framing and creator website imagery as the main source of colour. Use Inter with Inter Tight where evidenced. Make the hero action a 42.4px-high link with a 4px radius, 12px 28px padding, white 16px/600 label and an arrow that translates 2px right and 2px up on hover and press. Keep its fill unchanged.”

For the paired secondary treatment: “Use a 46.4px-high white link with an 8px radius, 12px 24px padding and a near-black 16px/700 label. Start with `rgba(0, 0, 0, 0.1) 0px 2px 15px 0px`, and remove that shadow while the feature panel is hovered.”

For navigation: “Use a transparent, square-cornered Pricing link, 15px/500 Inter Tight with 21px line height; fade opacity to 0.6 on hover and press.” These recipes describe the sampled components and do not prescribe logged-in editor chrome.

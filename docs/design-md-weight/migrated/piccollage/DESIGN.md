# PicCollage Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

PicCollage is a Taiwan-born photo-collage and greeting-card app that turns everyday photos and videos into shareable celebrations — serving 270 million users worldwide with joyful, AI-assisted creative tools. This contract covers the first-party surfaces the source inspected for tokens on 2026-06-03: the homepage HTML at `https://piccollage.com`, the main CSS bundle at `https://pic-collage-mczsmo7tt-piccollage.vercel.app/_next/static/chunks/0w52i878~_fa~.css` (full `--color-pic-*` token scale), the company page HTML at `https://piccollage.com/company` (brand mission copy), and the Google Play listing at `https://play.google.com/store/apps/details?id=com.cardinalblue.piccollage.google` (Cardinal Blue Software, Inc.). Token extraction is `tokens.source: prose-derived` (`tokens.extracted` 2026-06-09). Every value stays attached to the surface that established it. Reading those four named pages as this contract's inspected sources, keeping the prose-derived token-set bound beside the footer live inspect rather than collapsing them, keeping values attached to the surface that established them, and treating the company page as a named brand-mission source and the Play listing as a named developer-identity source rather than as extra computed-token sheets, are derived editorial implementation inferences from the verified surfaces; they are not PicCollage-authored or a separately published UI specification.

The homepage opens with a soft cream canvas (`#FBF2EB` / YAML `tokens.colors.hero-bg` `#fbf2eb`) that the source records as feeling like textured scrapbook paper — unhurried, tactile, inviting touch. Against that warm ground, a signature teal (`#4FC3C4` / YAML `tokens.colors.primary` `#4fc3c4`) pops as the primary call-to-action, energetic without being aggressive. Typography mixes a serif display face (Zilla Slab) for expressive headlines with Poppins for clear, friendly body copy. Feature sections use a vivid purple-to-coral gradient (`#8235B8 → #EE604D`) as a typographic highlight. Elevations are kept light — diffused shadows (`0px 0px 8px rgba(0,0,0,0.15)`) rather than hard drops — so collage content stays the visual hero. The overall register the source writes is: "a creative friend's studio, tidied up just enough to feel welcoming." The hex values, the two family names, the gradient chain, and the thumbnail shadow writing are the source's own. Readings of that cream as textured scrapbook paper, of the teal as energetic without being aggressive, of the type mix as signalling that the product is both crafted and accessible, of the gradient as nodding to the brand's celebratory, multicolour spirit, and of the register as a creative friend's studio, are derived editorial implementation inferences from the verified surfaces; they are not PicCollage-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. PicCollage was created by Cardinal Blue Software, Inc., a Taipei-based studio that believed photo sharing could be more than a stream of single images. Founded in 2011, the app launched as a simple drag-and-drop collage tool for iOS and quickly spread virally among users who wanted to tell stories with multiple photos in a single frame. Within a few years it had grown to tens of millions of downloads, establishing itself as a staple creative tool across Asia and North America. Today PicCollage serves over 270 million people worldwide, operating under the mission "Create, Celebrate, Connect." The company has expanded into a suite of creative apps — OnBeat for music-driven video, BEAM, Noodle, and MemeMe — anchored by a shared philosophy of "Creative AI": AI that acts as a creative assistant, never a creative replacement. The company tagline captures this spirit in three words: "Make the World Fun & Creative." The product's design language mirrors this mission. Warm, scrapbook-inspired surfaces and rounded, inviting controls signal that creativity here is for everyone — not just designers. Every template update, sticker pack, and holiday campaign is an act of celebration: an invitation to document life's small moments with the same ceremony reserved for big milestones. The year 2011, Cardinal Blue Software, Inc., Taipei, the iOS drag-and-drop launch, tens of millions of downloads, Asia and North America, 270 million people worldwide, "Create, Celebrate, Connect.", OnBeat, BEAM, Noodle, MemeMe, "Creative AI", "Make the World Fun & Creative.", and that closing design-language paragraph through its last sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-mission narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not PicCollage-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not PicCollage-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.

- Read the homepage hero tagline "The easiest photo and video editing app to add magic to your treasured memories."
- Download the app from the sticky CTA, the nav "Download the App" button, or the footer QR code + app badge layout.
- Scan feature cards and collage thumbnails on the homepage.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as representative archetypes inferred from brand copy, user reviews, and app-store description, not from first-party research, so those biographies are dropped rather than promoted, and no name, age, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, is the audience at a group level: 270 million users worldwide; users who wanted to tell stories with multiple photos in a single frame; a staple creative tool across Asia and North America; first-time creators, not expert designers. Dropping those illustrative biographies rather than promoting them, carrying no name, age, motivation, or affiliation classification, and reading those source-named groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not PicCollage-authored or a separately published UI specification.

### Distinctive traits

The list restates values the source records. Classifying the list as that restatement, and the groupings and the readings inside them, is a derived editorial implementation inference from the verified surfaces; it is not PicCollage-authored or a separately published UI specification.

- Warm cream canvas (`#FBF2EB` / `#fbf2eb`) with beige-family surfaces (`#f5f4ef`, `#ece9df`, `#d9d2bf`)
- Signature teal CTA (`#4FC3C4` / `#4fc3c4`) and teal-family nav / footer / border (`#b7e1da`, `#7ad2c3`, `#2db59e`)
- Zilla Slab for the marketing hero only; Poppins for all product and body text
- Purple-to-coral display-text gradient (`#8235B8 → #974DCB → #EF4967 → #EE604D`)
- Fully rounded pill buttons (`radius 9999px` / `30px+`)
- Diffuse, low-opacity shadows rather than hard drops; collage content stays the visual hero

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not PicCollage-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Creativity is for everyone.** Everyone can be creative with the right tools. PicCollage designs for first-time creators, not expert designers. *UI implication:* Use familiar, forgiving affordances — pill buttons, clear iconography, visible undo — so users never feel punished for experimenting.
2. **AI assists; people create.** AI tools are positioned as magic helpers that expand ideas, never as robots that replace personal expression. *UI implication:* AI features sit alongside manual tools, not above them; show the user's photo or input front-and-centre, AI output as an overlay or suggestion layer.
3. **Every moment deserves celebration.** The brand refuses to reserve ceremony for only the big milestones; ordinary days are worth commemorating. *UI implication:* Offer templates and stickers for everyday occasions (Tuesday photo dumps, random lunch photos) alongside birthdays and holidays; avoid a hierarchy that only surfaces "important" event categories.
4. **Designs should feel fresh, always.** The design library is updated weekly; users should never run out of inspiration. *UI implication:* Prominently surface "New" and "Trending" badges in template grids; use motion cues (subtle shimmer or marquee scroll) to signal freshness without overwhelming the canvas.
5. **Warmth over polish.** Craft is valued, but approachability trumps perfection. The aesthetic is intentionally hand-made feeling. *UI implication:* Prefer soft, diffuse shadows and beige/cream surfaces over stark white; allow collage imperfection (overlapping elements, slight rotations) in template previews.

### Application rules

The source states these seven as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not PicCollage-authored or a separately published UI specification.

- Use teal (`#4FC3C4` / `#b7e1da` family) as the action colour; reserve it for CTAs and interactive states
- Use the warm cream (`#FBF2EB`, beige family) for page backgrounds to keep the scrapbook warmth
- Apply Zilla Slab only for marketing hero headlines; use Poppins for all product and body text
- Use fully rounded pill buttons (radius 9999px / 30px+) for all primary and secondary actions
- Apply the purple-to-coral gradient (`#8235B8 → #EE604D`) exclusively on display text for celebratory emphasis
- Keep diffuse, low-opacity shadows to let collage content remain the visual star
- Transition color changes at 200ms ease-in-out for interactive elements

### Avoid

The source states these six as its Don't list; they are kept as its rules, reasons included. Source §9 also names two further Avoid items that the Don't list does not repeat — dark overlays, serif body text — and those land here (A3). These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not PicCollage-authored or a separately published UI specification.

- Don't use hard, deep shadows — they conflict with the airy scrapbook aesthetic
- Don't mix Zilla Slab with body-copy contexts; it is display-only
- Don't use pink (`#f85482`) or yellow (`#ffcf3d`) as primary backgrounds — accent use only
- Don't use sharp corners (radius < 8px) on interactive elements; the brand is round and soft
- Don't crowd layouts; template cards and collage thumbnails need generous white/cream space
- Don't place coloured text directly on the purple-to-coral gradient without white fill or contrast check
- Don't use dark overlays
- Don't use serif body text

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, taking those role names from the source's own labels, keeping YAML lowercase hex beside the §2 mixed-case spellings rather than choosing one as a replacement, keeping `#ffffff` as `tokens.colors.on-primary` unmerged from the Feature Card `#ffffff` fill, keeping `#e8e4d9` as `tokens.colors.surface-hover` unmerged from the Feature Card 2px border and from the icon-button hover fill, keeping `#ece9df` as `tokens.colors.surface` unmerged from the icon-button default fill, keeping `#292929` as `tokens.colors.body` unmerged from the nav-download foreground, keeping `#4d4d4d` as `tokens.colors.body-secondary` unmerged from the nav-item foreground, keeping the four gradient keys unmerged from the §2 chain and from the §9 `linear-gradient` writing, and attaching every role to the surface the source recorded, are derived editorial implementation inferences from the verified surfaces; they are not PicCollage-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

Teal action

- **Teal / Primary CTA** (`#4fc3c4` / `#4FC3C4`): main download and action button background. Token-set path `tokens.colors.primary`. Catalog identity `primary_color` is `#4FC3C4`.
- **Teal 200 / Nav Button** (`#b7e1da`): nav "Download the App" button fill. Token-set path `tokens.colors.teal-nav`.
- **Teal 300 / Footer** (`#7ad2c3`): footer section background. Token-set path `tokens.colors.teal-footer`.
- **Teal 500 / Border Accent** (`#2db59e`): interactive border on nav and teal buttons. Token-set path `tokens.colors.teal-border`.
- **On-primary** (`#ffffff`): text on the primary teal fill. Token-set path `tokens.colors.on-primary`. This is not the Feature Card `#ffffff` fill.

Warm cream and beige

- **Warm Cream / Hero BG** (`#fbf2eb` / `#FBF2EB`): hero section page background. Token-set path `tokens.colors.hero-bg`.
- **Beige 50 / Nav BG** (`#f5f4ef`): navigation bar background. Token-set path `tokens.colors.nav-bg`.
- **Beige 100 / Surface** (`#ece9df`): icon button fill, hover surface. Token-set path `tokens.colors.surface`.
- **Beige 300 / Divider** (`#d9d2bf`): subtle borders and dividers. Token-set path `tokens.colors.divider`.
- **Surface hover** (`#e8e4d9`): YAML `tokens.colors.surface-hover`. Also the icon-button hover fill and the Feature Card 2px border. Those three uses stay on their own records.

Ink

- **Gray 850 / Body Text** (`#292929`): primary text on light surfaces. Token-set path `tokens.colors.body`.
- **Gray 700 / Secondary Text** (`#4d4d4d`): secondary body and nav labels. Token-set path `tokens.colors.body-secondary`.

Accents

- **Pink 500 / Accent** (`#f85482`): highlight sticker/badge accent. Token-set path `tokens.colors.accent-pink`. Accent use only — not a primary background.
- **Yellow 400 / Celebration** (`#ffcf3d`): festive highlight, feature icon fill. Token-set path `tokens.colors.accent-yellow`. Accent use only — not a primary background.

Feature gradient

- **Gradient 1** (`#8235b8` / `#8235B8`): Token-set path `tokens.colors.gradient-1`.
- **Gradient 2** (`#974dcb` / `#974DCB`): Token-set path `tokens.colors.gradient-2`.
- **Gradient 3** (`#ef4967` / `#EF4967`): Token-set path `tokens.colors.gradient-3`.
- **Gradient 4** (`#ee604d` / `#EE604D`): Token-set path `tokens.colors.gradient-4`.

Source §2 writes the same four stops as one Feature Gradient chain: `#8235B8 → #974DCB → #EF4967 → #EE604D` — display heading gradient. Source §9 writes the longer form, kept beside the chain rather than as a replacement: `linear-gradient(87.36deg, #8235B8 -9.23%, #974DCB 16.56%, #EF4967 73.21%, #EE604D 91.93%)`. Apply that gradient exclusively on display text.

Source §14 also records three hexes that are not YAML `tokens.colors` keys. They stay on the surface state contract: skeleton `#e2ddcf` (beige-200); error-network coral tint `#f19daf` (pink-300 family); **Focus visible** outline `#298e7d` (teal-600). Source §3 records display text-shadow `0px 0px 10px #AB7624`. Those four writings are not extra color keys. Classifying them as surface-contract and §3 writings rather than as extra `tokens.colors` keys is a derived editorial implementation inference from the verified surfaces; it is not PicCollage-authored or a separately published UI specification.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them:

| Step | Value | Token-set path |
|---|---:|---|
| xs | 4 | `tokens.spacing.xs` |
| sm | 8 | `tokens.spacing.sm` |
| md | 12 | `tokens.spacing.md` |
| base | 16 | `tokens.spacing.base` |
| lg | 24 | `tokens.spacing.lg` |
| xl | 32 | `tokens.spacing.xl` |
| xxl | 48 | `tokens.spacing.xxl` |
| section | 64 | `tokens.spacing.section` |

The source also names a layout spacing rhythm of 8, 12, 16, 24, 32, 48, 64, 96px and a standard Tailwind spacing scale (4px base unit). `96px` is in that rhythm; it is not a YAML `tokens.spacing` key. Section vertical padding is `32px 0 96px` on desktop; at `md` (768px–1023px) section padding expands to 80px block. Those paddings stay on Layout. `tokens.spacing.xs: 4` is not `tokens.rounded.sm: 4`. `tokens.spacing.sm: 8` is not `tokens.rounded.md: 8`. `tokens.spacing.base: 16` is not `tokens.rounded.lg: 16` and is not the 16px body size. `tokens.spacing.lg: 24` is not the sticky CTA `bottom: 24px`. `tokens.spacing.xl: 32` is not the nav-download height 32px and is not the mobile hero headline 32px. `tokens.spacing.section: 64` is not a type size. Keeping each number on its own key path, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not PicCollage-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them:

| Step | Value | Token-set path |
|---|---:|---|
| sm | 4 | `tokens.rounded.sm` |
| md | 8 | `tokens.rounded.md` |
| lg | 16 | `tokens.rounded.lg` |
| full | 9999 | `tokens.rounded.full` |

YAML `tokens.components.button-primary.radius` is `9999`. Source §4 Mobile Sticky Download writes Radius: 30px. Both writings stay. YAML `button-nav`, `icon-button`, and `nav-item` also record `radius: 9999` / `9999px`. Feature Card and Collage Thumbnail record radius 16px, which is also `tokens.rounded.lg: 16` and is not `tokens.spacing.base: 16`. Don't use sharp corners (radius < 8px) on interactive elements. Reading 4 / 8 / 16 / 9999 as those YAML steps, keeping the sticky CTA `30px` beside YAML `9999` rather than choosing one as a replacement, and keeping card `16px` on the card rather than as a universal radius for every unlisted surface, are derived editorial implementation inferences from the verified surfaces; they are not PicCollage-authored or a separately published UI specification.

### Elevation

The source records YAML `tokens.shadow` three keys, a five-level §6 table, an overlay tint, and a sticky-CTA local shadow. Those writings stay on their own records. Reading that stack as soft and diffused (large blur, low opacity) rather than hard, so collage imagery stays the primary visual anchor, is a derived editorial implementation inference from the verified surfaces; it is not PicCollage-authored or a separately published UI specification.

Token-set path `tokens.shadow`:

- **ambient:** `rgba(0,0,0,0.08) 0px 2px 12px`
- **card:** `rgba(0,0,0,0.10) 0px 0px 12px`
- **thumbnail:** `rgba(0,0,0,0.15) 0px 0px 8px`

Source §6 levels, kept beside those YAML writings rather than as replacements:

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat surface | Hero cream background `#FBF2EB`, no shadow | Page-level canvas |
| Level 1 — Card | `box-shadow: 0px 0px 12px 0px #E8E8E8` | Feature panels and template tiles |
| Level 2 — Thumbnail / floating element | `box-shadow: 0px 0px 8px rgba(0,0,0,0.15)` | Collage preview cards |
| Level 3 — Navigation | `box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08)` | Sticky top bar lifts above content |
| Level 4 — Modal / overlay | `box-shadow: 0px 16px 22px 0px rgba(0,0,0,0.07)` | slide-out drawer |
| Overlay tint | `rgba(0,0,0,0.40)` | Scrim behind full-screen modals |

YAML `tokens.shadow.card` `rgba(0,0,0,0.10) 0px 0px 12px` and Level 1 `0px 0px 12px 0px #E8E8E8` are two writings. Neither replaces the other. YAML `tokens.shadow.thumbnail` `rgba(0,0,0,0.15) 0px 0px 8px` and Level 2 `0px 0px 8px rgba(0,0,0,0.15)` stay both orderings. YAML `tokens.shadow.ambient` `rgba(0,0,0,0.08) 0px 2px 12px` and Level 3 `0px 2px 12px 0px rgba(0, 0, 0, 0.08)` stay both writings. Source §4 Mobile Sticky Download also records `0px 0px 10px 0px rgba(0, 0, 0, 0.10)` on that control. That 10px blur is the sticky CTA's shadow. It is not `tokens.shadow.card`.

### Motion

The source records durations, CSS easing keywords, one cubic-bezier, named animations, drawer translate, reduced-motion, and a canvas rule. Treating those records as a motion contract for the inspected surfaces, rather than as a separately published PicCollage motion specification, and keeping the §14 Success confetti 0.7s writing beside the §15 700ms writing rather than choosing one as a replacement, are derived editorial implementation inferences from the verified surfaces; they are not PicCollage-authored or a separately published UI specification.

Duration scale, as the source table states it:

- Micro (hover, color change): 150ms
- Standard (color transition on interactive elements): 200ms
- Expand / accordion: 200ms (`ease-out`)
- Reveal / entry animation: 700ms (`cubic-bezier(.22, 1, .36, 1)` — spring-like)
- Marquee scroll (testimonials): 40s linear infinite
- Loader spin: 3s linear infinite

Easing tokens, as the source states them:

- `ease-in-out` — primary transition easing for color and border changes
- `ease-out` — accordion expand, slide-in panels
- `cubic-bezier(.22, 1, .36, 1)` — reveal-from-rect entry animation (bouncy spring)
- `linear` — infinite scroll marquees and spinner

Source §14 Success also writes a confetti burst of 0.7s, `cubic-bezier(.22,1,.36,1)`. That 0.7s writing stays beside the §15 700ms writing. Neither was chosen as a replacement.

Motion rules, as the source states them:

- All color/background transitions on interactive elements use 200ms ease-in-out
- Modals and drawers use 200ms ease-in-out translate; entry from left for drawers (`translateX(-100%)` to 0)
- Hover on collage thumbnails may apply a subtle scale (not measured explicitly; follow standard `scale(1.02)` at 200ms). That `scale(1.02)` is the source's own unmeasured follow-standard note. It is not promoted as a measured token.
- Reduced-motion: `@media (prefers-reduced-motion)` in CSS sets `animation: none` for marquee and loader; all entry animations should respect this
- Never animate content that is the user's creation (the collage canvas itself should not move spontaneously)

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Official documentation of a single curve or duration is not that per-component gate. The recorded 150ms / 200ms / 700ms / 40s / 3s values, the named easings, `reveal-from-rect`, the confetti 0.7s writing, `translateX(-100%)`, and the reduced-motion rule stay as source records. Naming those five evidence kinds as the promotion gate for any later exact-curve promotion, requiring a per-component computed observation of all five kinds before any later promotion, refusing a partial confirmation, and keeping `scale(1.02)` as an unmeasured note rather than as a token, are derived editorial implementation inferences from the verified surfaces; they are not PicCollage-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, treating Zilla Slab as marketing-hero display rather than as a product UI family, treating Poppins as the body and product face, reading official product-use as no published type token, reading official distributed asset as no exclusive family in this pass, reading the licence row as a missing notice rather than as a brand-asset licence, reading typography beyond the inspected homepage HTML, named CSS bundle, and company-page HTML as outside this contract, and refusing to substitute a system font while calling it either face, are derived editorial implementation inferences from the verified surfaces; they are not PicCollage-authored or a separately published UI specification. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Official product-use | The company page records brand mission copy. It does not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not PicCollage-authored or a separately published UI specification. |
| Live computed surface-use | Homepage inline style records the hero heading as `font-family:Zilla Slab; font-size:60px; line-height:67px; font-weight:600`. YAML `tokens.typography.family` writes `sans: "Poppins"`, `display: "Zilla Slab"`. |
| Official distributed asset | No PicCollage-exclusive distributed type family is recorded in this pass. |
| Declared / YAML family | YAML `tokens.typography.family.sans` writes `Poppins`. YAML `tokens.typography.family.display` writes `Zilla Slab`. Both keys stay. |
| License | This record does not establish a PicCollage font-license notice for Poppins or Zilla Slab. |
| Outside these captures | Typography beyond the inspected homepage HTML, the named CSS bundle, and the company-page HTML stays outside this contract. |

### Family

- **Display / marketing hero:** `Zilla Slab` — Token-set path `tokens.typography.family.display`. Reserved for marketing hero headlines.
- **Sans / product and body:** `Poppins` — Token-set path `tokens.typography.family.sans`. Always Poppins below the hero.

Do not replace Zilla Slab or Poppins with a system substitute, and do not present Poppins as the hero display face. That fallback prohibition, and keeping Zilla Slab reserved for the marketing hero only, are derived editorial implementation inferences from the verified surfaces; they are not PicCollage-authored or a separately published UI specification.

### Type roles

YAML unitless line heights stay ratios (A1a). `1.12` is not rewritten as a fixed px. `1.4` is not rewritten as a fixed px. Token-set `use` strings are kept verbatim; where source §3 notes are longer, both writings are kept. Keeping YAML line heights as unitless ratios, keeping the YAML singles and the §3 px / colour / shadow / mobile writings on separate readings, keeping display `60` off any spacing step, keeping section-title `36` off `tokens.spacing.xl: 32` and off the type-scale 36px step, keeping sub-headline `25` beside the mobile section-headline 25px writing rather than merging them, keeping body `18` as a type size rather than a spacing step, keeping label `14` / tracking `-0.28` on the label role rather than as a spacing step, and keeping the §8 hero-headline 32px writing on Layout rather than as a replacement for the display 60 / 67px row, are derived editorial implementation inferences from the verified surfaces; they are not PicCollage-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Tracking | Token-set use | §3 notes |
|---|---|---:|---:|---:|---|---|---|
| Display / Hero headline | Zilla Slab | 60 | 600 | 1.12 | | Marketing hero headline (Zilla Slab) | 60px / line-height 67px, weight 600, color white with text-shadow `0px 0px 10px #AB7624` |
| Section headline (desktop) | Poppins | 36 | 700 | | | Feature card / section headline (desktop) | 36px / weight bold — feature card titles |
| Sub-headline / hero tagline | Poppins | 25 | 500 | 1.4 | | Hero tagline / sub-headline | 25px / line-height 35px, weight 500, white |
| Body copy | Poppins | 18 | 400 | | | Feature descriptions, body copy | 18px / weight 400 — feature descriptions |
| UI label / nav button | Poppins | 14 | 500 | | -0.28 | UI label, nav button | 14px / weight medium (500), tracking -0.28px |

Source §3 also records:

- **Section headline (mobile):** Poppins, 25px / weight bold — responsive scale. This is a §3 row. It is not YAML `tokens.typography.sub-headline` (that YAML key is the hero tagline at weight 500 / line-height 1.4).
- **Hierarchy:** Display → Section H1 → Body → UI Label; always Poppins below the hero; Zilla Slab reserved for marketing hero only
- **Base scale:** 10 / 12 / 14 / 16 / 18 / 20 / 24 / 28 / 32 / 36 / 40 / 44 / 48 / 72px

Source §8 records that the hero headline scales to 32px below 640px. That 32px writing stays on Layout. It is not a replacement for the display 60 / 67px row.

### Assets

The catalog identity records `logo.type: favicon` and `logo.slug: https://www.google.com/s2/favicons?domain=piccollage.com&sz=256`. That is a third-party favicon proxy URL held as catalog identity metadata; it is not a first-party distributed PicCollage brand asset, and it is not promoted to one here. Collage content stays the visual hero; do not replace first-party collage imagery, stickers, or template previews with invented brand-color decoration. Classifying the Google s2 slug as an identity pointer rather than a hosted brand file, and not replacing collage imagery with invented decoration, are derived editorial implementation inferences from the verified surfaces; they are not PicCollage-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

- **Empty (no photos):** Warm cream canvas with a dashed-border drop zone, illustrated collage placeholder icons, and an approachable prompt: "Tap to add your first photo" — never a plain error icon
- **Loading / skeleton:** Rounded rectangles (radius 16px) in `#e2ddcf` (beige-200) pulse softly at 1.5s timing; matches card shape exactly to prevent layout shift
- **Error — network:** Inline banner at top of canvas with coral tint (`#f19daf`, pink-300 family); icon + short friendly message ("Couldn't load — tap to retry"); never modal unless blocking
- **Error — upload failed:** Toast notification at bottom of screen, `rgba(0,0,0,0.80)` dark pill, white text; auto-dismisses after 4s; offers "Try again" action
- **Success — save/share:** Brief confetti burst animation (0.7s, `cubic-bezier(.22,1,.36,1)`) centred on canvas, then green-tinted toast; shares to OS share sheet immediately after
- **Skeleton — template grid:** Grid of 16px-radius beige cards animate in with staggered 50ms delay per card; grid layout preserved so items don't reflow when real templates load
- **Disabled state:** `opacity: 0.5`; `cursor: not-allowed`; no border change on teal buttons; applied via `data-disabled` attribute
- **Focus visible:** `outline: 1px solid #298e7d` (teal-600), `outline-offset: 2px` — keyboard-accessible, matches teal brand family

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. `not-applicable` is used only where the control's role makes the state meaningless — a destination navigation item, a tab that only selects a destination, or a destination link that commits no operation in place — and the reason given is always that semantic one. A `Primitive type` line is attached only when the source YAML records that type on that component. Generic `Focus` capture is not treated as a `focus-visible` treatment. This source names **Focus visible** with the outline above; that writing stays on the capture record as the source's own named observation, and is not copied onto Core `focus-visible` table rows. Preserving the source state contract here rather than delegating it to an unadopted catalog graph, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, and the refusal to treat this as a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not PicCollage-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary CTA Button (App Download)

- Role: App download / sticky CTA
- Primitive type: `button` · Kind: interactive
- Token-set use: `App download / sticky CTA`

**Mobile Sticky Download** (source §4)

- Background: `#4FC3C4`
- Text: `#ffffff`
- Border: none
- Radius: 30px
- Width: 294px
- Height: 44px
- Font: 14px / 700
- Shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10)

**YAML `tokens.components.button-primary`**

- type: `button`
- bg: `#4fc3c4`
- fg: `#ffffff`
- radius: 9999
- font: `14px / 700`
- use: `App download / sticky CTA`

YAML radius `9999` and §4 Radius `30px` stay both writings. YAML `#4fc3c4` and §4 `#4FC3C4` stay both casings. The 294px width, 44px height, and 10px shadow are this sticky control's geometry. They are not `tokens.spacing` steps and not `tokens.shadow.card`. Source §8 restates the sticky bottom CTA as `bottom: 24px`, width `294px`, radius `30px` below 640px. That `bottom: 24px` stays on Layout; it is not `tokens.spacing.lg: 24`. Reading those figures as this button's geometry rather than as those YAML spacing or shadow keys, and keeping `30px` beside YAML `9999` rather than choosing one as a replacement, is a derived editorial implementation inference from the verified surfaces; it is not PicCollage-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Teal button; the surface contract records `opacity: 0.5`, `cursor: not-allowed`, no border change, `data-disabled` |
| loading | not-applicable | This control is an app-download destination CTA; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | A destination CTA does not report a failed request on itself |
| success | not-applicable | Reaching the store listing is not an operation this CTA reports as success |

### Nav Download Button

- Role: Nav Download button, 1.5px `#2db59e` border
- Primitive type: `button` · Kind: interactive
- Background: `#b7e1da`
- Text: `#292929`
- Border: 1.5px solid `#2db59e`
- Radius: 9999px
- Height: 32px
- Padding: 8px 12px
- Font: 14px / 500
- Token-set type: `tokens.components.button-nav.type` `button`
- Token-set bg: `tokens.components.button-nav.bg` `#b7e1da`
- Token-set fg: `tokens.components.button-nav.fg` `#292929`
- Token-set radius: `tokens.components.button-nav.radius` `9999`
- Token-set padding: `tokens.components.button-nav.padding` `8px 12px`
- Token-set font: `tokens.components.button-nav.font` `14px / 500`
- Token-set use: `Nav Download button, 1.5px #2db59e border`
- The 32px height and `8px 12px` padding are this button's geometry. They are not `tokens.spacing.xl: 32` and not `tokens.spacing.sm: 8` / `tokens.spacing.md: 12`. The `#292929` foreground is this control's `fg`; it is not only `tokens.colors.body`. Reading those figures as this button's geometry rather than as those YAML spacing or body-text keys is a derived editorial implementation inference from the verified surfaces; it is not PicCollage-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Teal-family button; the surface contract records `data-disabled` on teal buttons |
| loading | not-applicable | This control is an app-download destination CTA; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | A destination CTA does not report a failed request on itself |
| success | not-applicable | Reaching the store listing is not an operation this CTA reports as success |

### Icon Button (Toolbar / Nav Icon)

- Role: Toolbar / nav icon button, 1.5px `#d9d2bf` border
- Primitive type: `button` · Kind: interactive
- Background: `#ece9df`
- Border: 1.5px solid `#d9d2bf`
- Radius: 9999px
- Width: 44px
- Height: 44px
- Hover State Background: `#e8e4d9`
- Token-set type: `tokens.components.icon-button.type` `button`
- Token-set bg: `tokens.components.icon-button.bg` `#ece9df`
- Token-set radius: `tokens.components.icon-button.radius` `9999`
- Token-set use: `Toolbar / nav icon button, 1.5px #d9d2bf border`
- The 44×44 size is this control's geometry. It is not a type-scale 44px step. YAML `tokens.colors.surface` `#ece9df` and this button's default fill share a hex; they stay two records. YAML `tokens.colors.surface-hover` `#e8e4d9` and this button's hover fill share a hex; they stay two records. Reading those figures as this button's geometry rather than as those YAML spacing or color keys is a derived editorial implementation inference from the verified surfaces; it is not PicCollage-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Captured hover fill `#e8e4d9` above |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A toolbar control can be gated; visual treatment omitted beyond the surface `data-disabled` contract |
| loading | not-applicable | The toolbar / nav icon commits no operation in place |
| error | not-applicable | The toolbar / nav icon commits no operation in place |
| success | not-applicable | The toolbar / nav icon commits no operation in place |

### Nav Menu Item

- Role: Nav menu item
- Primitive type: `tab` · Kind: interactive
- Text: `#4d4d4d`
- Font: 14px / 500
- Radius: 9999px
- Padding: 8px 12px
- Token-set type: `tokens.components.nav-item.type` `tab`
- Token-set fg: `tokens.components.nav-item.fg` `#4d4d4d`
- Token-set radius: `tokens.components.nav-item.radius` `9999`
- Token-set padding: `tokens.components.nav-item.padding` `8px 12px`
- Token-set font: `tokens.components.nav-item.font` `14px / 500`
- Token-set use: `Nav menu item`
- The `#4d4d4d` foreground is this item's `fg`; it is not only `tokens.colors.body-secondary`. The `8px 12px` padding is this item's padding. Reading those figures as this tab's geometry rather than as those YAML spacing or secondary-text keys is a derived editorial implementation inference from the verified surfaces; it is not PicCollage-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination tab whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control selects a destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | A tab that only selects a destination does not report a failed request on itself |
| success | not-applicable | Same role reason: selecting a destination is not an operation this tab reports as success |

### Card / Feature Panel

- Role: Feature panel, 2px `#e8e4d9` border, soft shadow
- Primitive type: `card`
- Background: `#ffffff`
- Radius: 16px
- Border: 2px solid `#e8e4d9`
- Shadow: 0px 0px 12px 0px `#E8E8E8`
- Token-set type: `tokens.components.card.type` `card`
- Token-set bg: `tokens.components.card.bg` `#ffffff`
- Token-set radius: `tokens.components.card.radius` `16`
- Token-set use: `Feature panel, 2px #e8e4d9 border, soft shadow`
- YAML `tokens.shadow.card` `rgba(0,0,0,0.10) 0px 0px 12px` stays beside this `#E8E8E8` writing. The 16px radius is this panel's radius and the `tokens.rounded.lg: 16` step. It is not `tokens.spacing.base: 16`. The `#ffffff` fill is this card's `bg`; it is not `tokens.colors.on-primary`. Reading the YAML shadow, the 16px radius, and the `#ffffff` fill as this panel's own records rather than as those YAML spacing or on-primary keys is a derived editorial implementation inference from the verified surfaces; it is not PicCollage-authored or a separately published UI specification. Kind and applicability map omitted — the source supplies no interaction evidence for the container (C4).

### Collage Thumbnail

- Role: Collage thumbnail, soft drop shadow
- Primitive type: `card`
- Radius: 16px
- Shadow: 0px 0px 8px rgba(0, 0, 0, 0.15)
- Token-set type: `tokens.components.thumbnail.type` `card`
- Token-set radius: `tokens.components.thumbnail.radius` `16`
- Token-set use: `Collage thumbnail, soft drop shadow`
- YAML `tokens.shadow.thumbnail` `rgba(0,0,0,0.15) 0px 0px 8px` stays beside this ordering. Keeping both orderings rather than choosing one as a replacement is a derived editorial implementation inference from the verified surfaces; it is not PicCollage-authored or a separately published UI specification. Source §15 records that hover on collage thumbnails may apply a subtle scale, not measured explicitly. Kind and applicability map omitted — that unmeasured hover note is not interaction evidence for a state map (C4).

### Top Nav

- Role: sticky top bar
- Primitive type: not in the token set
- Background: `#f5f4ef`
- Height: 70px
- Shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08)
- Padding: 8px 44px
- Kind and applicability map omitted — the source supplies no interaction evidence for the bar as a control (C4). Height, padding, and shadow stay on this block and on Layout.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The source records homepage and editor-panel measurements, a Tailwind-standard breakpoint set, and per-range restatements. Reading those figures as recorded measurements of the inspected homepage rather than as a specification invented on top of them, keeping the three footer-height writings, keeping editor-panel 690px and hero 622px in both §5 and §8, keeping sticky `bottom: 24px` off `tokens.spacing.lg: 24`, keeping the < 640px hero headline 32px off `tokens.spacing.xl: 32`, and keeping `md:px-[71px]` off the YAML spacing scale, are derived editorial implementation inferences from the verified surfaces; they are not PicCollage-authored or a separately published UI specification.

Source §5, kept as written:

- **Max content width:** ~1221px on hero (capped via `max-width:1221px`); 690px for editor panels; standard Tailwind spacing scale (4px base unit)
- **Navigation:** Sticky top bar, full-width, 70px tall; collapses to hamburger below `sm` breakpoint (640px); content inset `44px` on sm+
- **Hero:** Full-bleed background image/video with centred text column (622px wide on desktop); app-store badges and CTA stack below tagline
- **Section grid:** Single-column on mobile; 2-column grid on `md` (768px+) for feature cards; horizontal marquee for testimonials
- **Footer:** Full-bleed teal-300 (`#7ad2c3`), 550px tall on lg / 900px tall on mobile; centred QR code + app badge layout
- **Spacing rhythm:** 8, 12, 16, 24, 32, 48, 64, 96px; section vertical padding is `32px 0 96px` on desktop

Source §8, kept beside those writings rather than as a replacement:

- **< 640px (mobile):** Single-column layout; sticky bottom CTA bar appears (`bottom: 24px`, width `294px`, radius `30px`); hero headline scales to 32px; feature cards stack vertically; footer 900px tall
- **640px – 767px (sm):** Hero text column narrows; app-store badges side-by-side; nav stays horizontal but collapses secondary items; footer 650px tall
- **768px – 1023px (md):** Feature grid becomes 2-column; editor panel up to 690px; section padding expands to 80px block
- **1024px+ (lg):** Full hero layout (622px text column + phone mockup); max-content 1221px; footer 550px tall; all nav items visible with 44px horizontal inset
- **Breakpoints:** xs 480px, sm 640px, md 768px, lg 1024px (Tailwind standard); custom `sm:px-[44px]`, `md:px-[71px]`

Footer height has three writings: 900px on mobile / below 640px, 650px on sm (640px–767px), 550px on lg. All three stay. Editor panel 690px appears in both §5 and §8. Hero 622px text column appears in both. Sticky CTA `bottom: 24px` is this control's offset at < 640px; it is not `tokens.spacing.lg: 24`. Hero headline 32px at < 640px is this breakpoint's type size; it is not `tokens.spacing.xl: 32`. `md:px-[71px]` is a source writing; it is not a YAML spacing key.

<!-- design-md:section content-locales -->
## 6. Content & Locales

**Register:** Warm, celebratory, encouraging — like a creative best friend cheering you on.

**Adjectives:** Joyful · Approachable · Empowering

Source §9 also writes: Tone: warm, celebratory, encouraging; short sentences with exclamation energy; never clinical. That §9 tone line stays beside the §10 register rather than as a replacement.

Calling that register warm / celebratory / encouraging, keeping the §9 tone line beside the §10 register rather than as a replacement, treating the Do/Don't table as this public-voice record rather than as a separately published microcopy guide, and refusing to treat the homepage lines as a complete product-microcopy guide, are derived editorial implementation inferences from the verified surfaces; they are not PicCollage-authored or a separately published UI specification.

| Do | Don't |
|---|---|
| Use short, punchy verbs: "Create," "Celebrate," "Share" | Use passive or corporate phrasing ("leverage your assets") |
| Address the user directly: "your memories," "your camera roll" | Be abstract or category-generic |
| Celebrate small moments, not just big milestones | Overpromise technical perfection |
| Use light exclamation energy — one `!` per sentence max | Pile on emojis or CAPS LOCK for emphasis |
| Invite, not instruct: "Try PicCollage now!" | Command coldly: "Enter your photos." |

**Voice samples (illustrative):**

- *"The easiest photo and video editing app to add magic to your treasured memories."* — tagline on homepage hero
- *"Our promise to you — our AI tools will always act as an assistant to super-charge your creative ideas. They blend in seamlessly and never take the creative process out of your hands."* — feature copy
- *"We love a holiday! But we also believe every moment is worth romanticizing."* — feature section headline
- *"Create & Celebrate."* — brand tagline, blog subtitle
- *"Give it a try. Have some fun."* — user review echoing brand voice register

Mission and company tagline, kept as published strings: "Create, Celebrate, Connect."; "Make the World Fun & Creative."

Classifying those five lines as illustrative samples rather than a complete microcopy guide, and keeping the mission and company taglines as published strings rather than as a primary task, is a derived editorial implementation inference from the verified surfaces; it is not PicCollage-authored or a separately published UI specification. The source already marks the five lines as illustrative. Empty-state copy "Tap to add your first photo", error copy "Couldn't load — tap to retry", and the "Try again" action stay on the surface state contract.

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

These decisions are unnamed values, not permissions to invent. Reading the list as a catalog of unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not PicCollage-authored or a separately published UI specification.

- getdesign.md / refero records for PicCollage
- collage thumbnail hover scale (source: not measured explicitly)

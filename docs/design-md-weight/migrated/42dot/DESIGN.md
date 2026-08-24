# 42dot Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

42dot (포티투닷) is Hyundai Motor Group's mobility-AI company. This contract covers two current first-party public surfaces: the homepage (`https://42dot.ai/`) and the blog (`https://42dot.ai/blog`). Catalog homepage metadata is `https://42dot.ai/`.

The following visual-character reading is a derived editorial implementation inference from the verified surfaces; it is not 42dot-authored or a separately published UI specification. The site reads as an engineering-led autonomy lab that happens to have taste: a near-monochrome black-and-white system, cinematic dark hero footage, and a single restrained accent. The homepage opens on a full-bleed charcoal hero (`#282b32`) with white AstaSans headlines — "We Are A Mobility AI Company", "The Answer to Mobility and Everything" — layered over vehicle/road video, then resolves into airy off-white content bands (`#fbfbfb`, `#ffffff`) once you scroll past the fold. The impression is confident and technical rather than consumer-cute.

The following accent-signal reading is a derived editorial implementation inference from the verified surfaces; it is not 42dot-authored or a separately published UI specification. Because the palette is otherwise achromatic, the lone periwinkle-violet (`#786efa`) does a lot of work: it is the system's "this is live / this is selected" signal, reserved almost exclusively for active topic-tag pills ("#LLM", "#SDV", "#Active Learning"). Everything else — nav, body, headings, cards — is built from black (`#000000`) ink, a cool slate (`#737d8c`) for secondary text and hairline tag borders, and two grades of dark chrome: graphite (`#32353f`) for mega-dropdown nav panels and charcoal (`#282b32`) for the blog hero.

The following geometry-affordance reading is a derived editorial implementation inference from the verified surfaces; it is not 42dot-authored or a separately published UI specification. Geometry is deliberately flat and mostly square: cards carry a 0px radius and separate by tint (`#f6f6f9`) rather than shadow, the only real elevation being a soft `rgba(0,0,0,0.2)` drop on the nav dropdown. The two rounded exceptions are intentional — the 22px tag pills and the fully-circular carousel controls — so roundness itself reads as an interactive affordance.

42dot was founded in **2019** by **송창현 (Song Chang-hyun)**, the former CTO of Naver and head of Naver Labs. The name nods to Douglas Adams' "42", reframed on the site as "The Answer to Mobility and Everything." In **2022**, 42dot was acquired by **Hyundai Motor Group** (Hyundai Motor and Kia taking a majority stake), becoming the group's core software and autonomy arm and anchoring its Software-Defined Vehicle (SDV) strategy. Its work spans autonomous driving (the AKit full-stack), Software-Defined Vehicle and Software-Defined Fleet platforms, an in-house 42dot LLM, and TAP! — an integrated autonomous-mobility service piloted on Korean roads. The company's mobility-AI positioning and the taglines are verbatim from the live site; founding and acquisition details are widely documented public facts in the source, not directly quoted from a verified 42dot statement in that packet. Treating those public-fact sentences as narrative context and not as interface tokens is a derived editorial implementation inference from the verified surfaces; it is not 42dot-authored or a separately published UI specification.

The following design-refusal reading is a derived editorial implementation inference from the verified surfaces; it is not 42dot-authored or a separately published UI specification. What the design refuses, visible in the system: the decorative, consumer-cute chrome of a lifestyle app, and the heavy card-stack skeuomorphism of legacy dashboards. What it embraces: a near-monochrome, engineered flatness; cinematic dark hero footage; a single disciplined violet accent; and bilingual copy that states capability plainly.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Read the 42dot homepage hero and cinematic mobility-AI statement.
- Scan homepage blog and research cards and their topic tags.
- Filter the blog index by topic tags.
<!-- design-md:claim-end -->

### Audience

Restricting Audience so invented demographic personas are not promoted, and tying observable work only to the three primary tasks, is a derived editorial implementation inference from the verified surfaces; it is not 42dot-authored or a separately published UI specification. No invented demographic personas are promoted. Observable work follows the three primary tasks: people reading the homepage hero; people scanning blog and research cards; people filtering the blog index by tags. Source §13's named fictional archetypes are not Audience and are not primary tasks.

### Distinctive traits

The following trait readings (monochrome-plus-one-violet, AstaSans hierarchy, flat tint, pill-and-circle exceptions) are a derived editorial implementation inference from the verified surfaces; they are not 42dot-authored or a separately published UI specification.

- Near-monochrome system: black `#000000` ink on white `#ffffff` / off-white `#fbfbfb`, with two dark chrome grades (`#32353f` nav, `#282b32` hero)
- Single periwinkle-violet accent (`#786efa`) reserved for active topic tags — the lone "selected/live" signal
- AstaSans (Noto Sans KR fallback) at SemiBold 600 for hero and section headlines
- Slate (`#737d8c`) for secondary text and 1px tag-filter hairline borders
- Flat depth: 0px-radius cards separated by tint (`#f6f6f9`), not elevation
- Cinematic dark hero footage under white headlines
- Pill (22px) tags and circular (9999px) carousel controls as the only rounded shapes

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not 42dot-authored or a separately published UI specification.

1. **Autonomy is the product; software is the medium.** 42dot sells intelligence, not chrome. *UI implication:* let imagery and precise headlines lead; keep the interface quiet and monochrome so the technology is the subject.
2. **One accent, one meaning.** The lone violet (`#786efa`) marks what is active or selected. *UI implication:* never spend the accent on decoration — reserve it for the live/selected state so intent is unambiguous.
3. **Flat and engineered.** Depth comes from tint and dark chrome, not shadow stacks. *UI implication:* separate content with `#f6f6f9`/`#fbfbfb` tint and `#32353f`/`#282b32` bands; keep cards square.
4. **State it, don't sell it.** Copy is declarative and present-tense. *UI implication:* short mission-framed headlines in SemiBold; no exclamation urgency, no undefined buzzwords.
5. **Bilingual by default.** EN and KR carry equal weight. *UI implication:* AstaSans for Latin, Noto Sans KR for hangul, one visual system across both scripts.

The following capture-bound application list is a derived editorial implementation inference from the verified surfaces; it is not 42dot-authored or a separately published UI specification.

Capture-bound application:

- Use AstaSans (Noto Sans KR fallback) at SemiBold 600 for hero and section headlines
- Reserve periwinkle-violet (`#786efa`) for the active/selected state — keep it the single accent
- Use pure black (`#000000`) for body and headings on light surfaces
- Separate cards and sections by tint (`#f6f6f9`, `#fbfbfb`), not shadow
- Keep cards square (0px radius); reserve rounding for tags (22px) and circular controls
- Use slate (`#737d8c`) for secondary text and 1px tag hairline borders
- Set white (`#ffffff`) headlines over the dark chrome (`#282b32` / `#32353f`) hero and nav

### Avoid

The following Don'ts include source-stated prohibitions and retained capture-bound doctrine. Those judgements are a derived editorial implementation inference from the verified surfaces; they are not 42dot-authored or a separately published UI specification.

- Do not spread the violet accent across many elements — it dilutes the single "selected" signal
- Do not use softened navy for text — 42dot uses true black `#000000`
- Do not reach for drop shadows to separate content — tint and dark chrome do that job
- Do not round the cards — the square 0px card is the system default
- Do not set headlines in a light weight — display is always SemiBold (600)
- Do not introduce a second saturated hue — the system is monochrome plus one violet
- Do not use AstaSans body at a heavy weight — running text stays quiet at 14px / 400
- Do not present a system fallback as AstaSans
- Do not add bounce or spring motion

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The following semantic-role and character readings (true-black-not-navy, most-common-secondary, barely-there off-white, cool card mist, on-dark vs canvas roles kept distinct) are a derived editorial implementation inference from the verified surfaces; they are not 42dot-authored or a separately published UI specification.

- **Periwinkle Violet** (`#786efa`): The single saturated accent. Live inspection found it as the background of active/featured topic-tag pills on the homepage (16 instances) and as an occasional text highlight. The HTML inspect comment separately records active tag pills `#786efa` ×16 on the blog. Those two surface observations are both kept; they are not collapsed into a homepage-only count. Catalog `primary_color`.
- **Pure Black** (`#000000`): Primary text and heading color across light surfaces — the dominant foreground (300+ occurrences). 42dot uses true black, not a softened navy.
- **Muted Slate** (`#737d8c`): Secondary text, metadata, and the 1px hairline border on inactive tag-filter chips. The most common secondary foreground on the blog index.
- **Nav Graphite** (`#32353f`): Background of the mega-dropdown navigation panels that open under the top nav.
- **Hero Charcoal** (`#282b32`): Background of the blog hero band and dark editorial sections; white headlines sit on top.
- **Pure White** (`#ffffff`): Page canvas, card surfaces on white bands, and all text/labels placed on dark chrome (nav, hero).
- **Off-White** (`#fbfbfb`): The primary light content band beneath the hero — a barely-there grey that keeps large sections from feeling stark.
- **Card Mist** (`#f6f6f9`): Fill for the blog / research entry cards on the homepage — a cool near-white that separates cards by tint rather than shadow.
- **On-Dark White** (`#ffffff`): Nav items, hero headlines, and tag-pill labels rendered on the dark chrome and on the violet accent. Same hex as Pure White; the roles are not merged into one ink for every string.

The following unpromoted-role reading is a derived editorial implementation inference from the verified surfaces; it is not 42dot-authored or a separately published UI specification. No second saturated hue is canonical in this packet. Inactive tag-filter chips use a transparent background; that is a component field, not a general canvas token.

### Spacing

YAML scale: xs 6, sm 12, base 16, md 24, lg 48, section 64. Source-stated scale in px: 6px, 12px, 16px, 24px, 48px, 64px.

Treating those as a compact working scale from the current homepage and blog captures, with a dense small end for chips (tag pills use a tight 6px × 12px pad; blog cards use a generous 48px interior pad), and reading "~8px" as a local base-unit note rather than a strict mathematical scale, is a derived editorial implementation inference from the verified surfaces; it is not 42dot-authored or a separately published UI specification.

### Shape

- None (0px): cards, content containers — the default is square
- Pill (22px): topic tags
- Full (9999px): circular carousel controls

YAML `rounded`: none 0, pill 22, full 9999. Live inspect of active tag pills also records 22.4px radius. Both the YAML 22px token and the 22.4px observation are kept; they are not averaged.

The following local-geometry reading is a derived editorial implementation inference from the verified surfaces; it is not 42dot-authored or a separately published UI specification. 22px tag corners and 9999px carousel circles are local geometry, not a universal radius scale. Roundness is reserved for those interactive affordances; cards stay square.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page bands, cards, headings — the default |
| Tint (Level 1) | `#f6f6f9` / `#fbfbfb` background shift | Card and section separation without elevation |
| Dark chrome (Level 2) | `#32353f` / `#282b32` fill | Nav dropdown panels, hero band |
| Drop (Level 3) | `rgba(0,0,0,0.2) 0px 4px 10px` | The one real shadow — nav mega-dropdown panel |

YAML `tokens.shadow.dropdown` is `rgba(0,0,0,0.2) 0px 4px 10px`. Live inspection found `box-shadow: none` across the hero, headings, blog cards, and tags.

The following elevation reading is a derived editorial implementation inference from the verified surfaces; it is not 42dot-authored or a separately published UI specification. 42dot is a near-flat system. Depth is otherwise communicated by tint (`#f6f6f9` cards on `#fbfbfb` bands) and by the dark chrome (`#32353f`, `#282b32`) rather than by layered shadows — a modern, engineered flatness that suits an autonomy company more than a decorative card-stack aesthetic.

### Motion

Source-stated duration roles:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, tag press, focus |
| `motion-standard` | 240ms | Dropdown open, card/section reveal, carousel slide |
| `motion-slow` | 400ms | Hero footage fades, page-level transitions |

Signature motions (source-stated names, durations, and uses):

The following motion character and purpose readings are a derived editorial implementation inference from the verified surfaces; it is not 42dot-authored or a separately published UI specification.

1. **Nav mega-dropdown.** The nav mega-dropdown (`#32353f`) expands with `motion-standard / ease-enter`. `ease-enter` here is the source-stated token name and use, not a computed curve.
2. **Carousel slide.** Carousels slide horizontally with `motion-standard`.
3. **Hero footage.** Hero footage cross-fades slowly as ambient atmosphere, not interactive delight, over `motion-slow`.
4. **No bounce.** No bounce or spring — an autonomy company signals steadiness and control.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and hero footage holds a still frame; the site stays fully functional.

Source-stated easing token names and uses (uncomputed; cubic-bezier curves omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name and use only) | Arriving — dropdown panels, cards |
| `ease-exit` | omitted (unattributed cubic-bezier; matches the legacy spec template) | Dismissals |
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name and use only) | Two-way transitions, carousel |

Exact cubic-bezier curves are unattributed — `ease-exit` matches the legacy spec template — and remain omitted rather than promoted. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not 42dot-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | No supplied official 42dot statement establishes a named type family as a separately published product-family token. |
| Live computed surface-use | Homepage and blog compute visible text as AstaSans (hero 38px / 600 white on `#282b32`; section titles 35.52px / 600 black; card titles 25.6px / 600; section labels 28.8px / 500; tag pills 11.2px). Token extraction is `live-extract`. This row is AstaSans live use only. |
| Declared-only | `Noto Sans KR` is the declared hangul fallback. It is not the Latin brand face and is not live-computed evidence for `tokens.typography.family.sans`. |

### Family

- **Sans:** `AstaSans` — the brand's Latin typeface, used for every headline, nav item, label, and body run.
- **Korean:** `Noto Sans KR` — the declared fallback for hangul, keeping bilingual (EN/KR) copy visually consistent.

The following font-use boundary is a derived editorial implementation inference from the verified surfaces; it is not 42dot-authored or a separately published UI specification. AstaSans owns Latin; Noto Sans KR is the hangul fallback. They never swap. Do not present Noto Sans KR, a system face, or a fallback stack as AstaSans.

The following hierarchy-signal reading is a derived editorial implementation inference from the verified surfaces; it is not 42dot-authored or a separately published UI specification. Weight 600 carries every hero and section headline; weight 400/500 carries nav and body. The weight jump is the primary hierarchy signal in an otherwise low-contrast palette. Section titles run at 1.60 line-height, giving large multi-line statements air rather than density. Body sits at 14px / 400 — 42dot lets the imagery and headlines lead; running text is deliberately understated.

### Type roles

Verified line-height values are the unitless YAML ratios 1.45, 1.60, 1.50, and 1.40. They scale with font size and are not fixed px. The legacy body table also recorded computed line-height at those captured sizes: 55.68px, 56.83px, 41.76px, and 38.40px. Those px figures are size-local observations, not replacements for the ratios. 38 × 1.45 = 55.1, so hero 55.68px is a size-local observation rather than 38 × 1.45. 36 × 1.60 = 57.6, while live inspect records section titles at 35.52px / 600; 35.52 × 1.60 = 56.832, so the 56.83px figure tracks the live 35.52px observation, not the YAML 36px token. YAML 36px and live 35.52px are both kept. YAML card-title 26px and live 25.6px, YAML section-label 29px and live 28.8px, YAML tag 11px and live 11.2px are the same class of rounding; they are not averaged.

| Role | Font | Size | Weight | Line height | Use |
|---|---|---:|---:|---:|---|
| Hero Display | AstaSans | 38px (2.40rem) | 600 | 1.45 | White on dark hero — "We Are A Mobility AI Company"; size-local 55.68px |
| Section Title | AstaSans | 36px (2.22rem) | 600 | 1.60 | Black on light — "We Make Everything Autonomous and Frictionless"; size-local 56.83px; live inspect 35.52px / 600 |
| Section Label | AstaSans | 29px (1.80rem) | 500 | 1.45 | Blog index labels — "Tags", "Posts"; size-local 41.76px; live inspect 28.8px / 500 |
| Card Title | AstaSans | 26px (1.60rem) | 600 | 1.50 | Blog / research card headline; size-local 38.40px; live inspect 25.6px / 600 |
| Nav Item | AstaSans | 14px (0.89rem) | 500 | 1.40 | Top-level nav; sub-items drop to weight 400 |
| Body | AstaSans | 14px (0.88rem) | 400 | 1.50 | Standard reading text |
| Tag Pill | AstaSans | 11px (0.70rem) | 400 | 1.40 | Topic tag label; live inspect 11.2px |

Nav Item 14px is `0.89rem`; Body 14px is `0.88rem`. Those rem values are not collapsed.

### Assets

Catalog logo metadata is a first-party favicon: `https://42dot.ai/icon.png`. Treating that file as identity and a portable mark, not a substitute for in-page wordmark geometry, and treating cinematic hero footage and blog/research imagery as first-party content that must not be replaced with invented brand-color decoration, is a derived editorial implementation inference from the verified surfaces; it is not 42dot-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

The following state-contract characterizations (calm/honest, no illustration clutter, no celebratory emoji, no bare "오류가 발생했습니다") are a derived editorial implementation inference from the verified surfaces; they are not 42dot-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (blog filter, no matches)** | White canvas. Single Pure Black (`#000000`) line explaining no posts match the selected tags, with a path to clear filters. No illustration clutter. |
| **Empty (saved / list, none yet)** | Muted Slate (`#737d8c`) single line stating nothing is here yet, plus a route back. Calm and honest. |
| **Loading (blog / card grid)** | Skeleton blocks at final card dimensions on `#f6f6f9`, 0px radius. Flat pulse — no shadow shimmer, consistent with the near-flat system. |
| **Loading (in-place fetch)** | Subtle progress within the section; previous content stays visible rather than blanking. |
| **Error (fetch failed)** | Inline message in Pure Black with a plain-language explanation and a retry. No bare "오류가 발생했습니다" alone. |
| **Error (form validation)** | Field-level message below the input in a warm error tone; states what is valid, not just "필수". |
| **Success (submitted / applied)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f6f6f9` blocks at final dimensions, 0px radius, flat pulse. |
| **Disabled** | Muted Slate (`#737d8c`) text on reduced-opacity surface; the violet accent fades rather than switching to grey, to preserve the brand read. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `Focus` capture is not `focus-visible` treatment evidence; the source never records `focus-visible`, and that visual treatment remains omitted. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. Where exact label, destination, dropdown-trigger, request, or outcome is unresolved, those three applicability fields are omitted at this boundary rather than closed. This is not a complete state-coverage claim.

Active Tag Pill, Blog / Research Card, and Nav Dropdown Panel have no interactive-kind evidence, so kind and a state-applicability map are omitted.

### Active Tag Pill

- Role: active / featured topic tag on homepage cards ("#LLM", "#CES #SDV", "#Active Learning")
- Type: badge
- Kind: omitted. The source records featured/selected appearance and no interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Anatomy: label
- Background: `#786efa`
- Text: `#ffffff`
- Radius: 22px (live inspect 22.4px)
- Padding: 6px 12px (live inspect 5.6px 12px)
- Font: 11px / 400 / AstaSans (live inspect 11.2px)
- Use: Active / featured topic tag pill on homepage cards

### Inactive Tag Filter

- Role: tag-filter chip on the blog index
- Kind: interactive
- Type: badge
- Anatomy: label
- Background: transparent
- Text: `#737d8c`
- Border: `1px solid #737d8c` (YAML / §4). Live inspect also records `1px solid rgba(115,125,140,0.3)`. Both values are kept; they are not averaged.
- Radius: 22px
- Padding: 6px 12px
- Font: 11px / 400 / AstaSans
- Use: Tag-filter chips on the blog index ("#AI", "#Software", "#Transformer")

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Inactive tag-filter chip captured on the blog index |
| hover | applicable | Pointer-web filter chip; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A blog tag filter can be unavailable; visual treatment omitted |
| loading | not-applicable | A blog tag filter selects a topic; the chip itself does not enter a loading state |
| error | not-applicable | Tag-filter meaning is selected vs unselected, not a request or validation failure on the chip |
| success | not-applicable | Tag-filter meaning is selection, not action-outcome confirmation |

### Blog / Research Card

- Role: blog / research entry card on the homepage
- Type: card
- Kind: omitted. The source records default geometry and no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Anatomy: container
- Background: `#f6f6f9`
- Text: `#000000`
- Radius: 0px
- Padding: 48px
- Use: Blog / research entry card on the homepage — separated by tint, no shadow

### Nav Dropdown Panel

- Role: mega-dropdown panel under top nav
- Type: card
- Kind: omitted. The source records the panel as a container surface and no interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Anatomy: panel
- Background: `#32353f`
- Text: `#ffffff`
- Shadow: `rgba(0,0,0,0.2) 0px 4px 10px`
- Use: Mega-dropdown panel that opens under a top-nav item

### Nav Item

- Role: top navigation item on the dark hero
- Kind: interactive
- Type: tab
- Anatomy: label
- Text: `#ffffff`
- Font: 14px / 500 / AstaSans
- Active: white `#ffffff` label; sub-items dimmed to 50% white
- Use: Top navigation item on the dark hero

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Top navigation item captured on the dark hero |
| hover | applicable | Pointer-web nav item; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A top-nav item can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source records this control as a top navigation item on the dark hero with active/dimmed appearance; exact label, selector, and whether the item is a destination or a dropdown trigger are unresolved, so those three fields stay omitted at this boundary rather than closed.

Additional observed named state: active, white `#ffffff` label; sub-items dimmed to 50% white.

### Carousel Control

- Role: circular prev / next control on homepage carousels
- Kind: interactive
- Type: button
- Anatomy: control
- Background: `#ffffff`
- Text: `#000000`
- Radius: 9999px (live inspect also records 50% radius)
- Use: Circular prev / next control on homepage carousels
- Size note: circular carousel controls at ~45px diameter

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Circular prev / next control captured on homepage carousels |
| hover | applicable | Pointer-web carousel control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A prev / next control can be unavailable at the ends of a carousel; visual treatment omitted |
| loading | not-applicable | A prev / next carousel control pages slides; the control itself does not enter a loading state |
| error | not-applicable | Carousel paging is not a request or validation failure on the control |
| success | not-applicable | Advancing a slide is not a success confirmation on the control |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The following layout-purpose reading is a derived editorial implementation inference from the verified surfaces; it is not 42dot-authored or a separately published UI specification. Full-bleed cinematic hero band (dark), then centered content bands on white / off-white. Homepage blog/research row is a horizontal card grid; each card is a 0px-radius `#f6f6f9` block. Blog index splits into a "Tags" filter cloud and a "Posts" card grid. Mega-dropdown nav panels (`#32353f`) expand the header into a dark full-width menu. Cinematic then calm: a dense, imagery-heavy dark hero gives way to airy, generously-padded light content — the page breathes after the statement. Tint over elevation: sections and cards separate by background tint (`#fbfbfb`, `#f6f6f9`) and dark chrome, almost never by shadow. Restraint as brand: whitespace and monochrome do the heavy lifting so the lone violet accent stays loud.

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, dropdown becomes a full-screen menu |
| Tablet | 640-1024px | 2-up card grids, moderate padding |
| Desktop | 1024-1440px | Full layout, cinematic hero, multi-column card rows, mega-dropdown nav |

The following layout-application readings (touch-target purpose, collapsing-strategy as packet rows, and image-behavior legibility) are a derived editorial implementation inference from the verified surfaces; they are not 42dot-authored or a separately published UI specification.

### Touch Targets

- Nav items sit in a 44-48px-tall header row for comfortable tapping
- Tag pills at ~24px height with 6px × 12px padding — compact but tappable
- Circular carousel controls at ~45px diameter

### Collapsing Strategy

- Hero: 38px AstaSans headline scales down on mobile, weight 600 maintained
- Mega-dropdown (`#32353f`) collapses into a stacked full-screen mobile menu
- Blog/research card row: multi-column → stacked single column
- Tag cloud on the blog index wraps to multiple rows

### Image Behavior

- Cinematic hero footage crops to fill on all sizes; white headlines stay legible over the dark charcoal
- Blog card thumbnails maintain their square (0px) framing across breakpoints

The 38px hero, ~45px carousel controls, and 44-48px-tall header row are measurements recorded in the 2026-07-02 packet.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The following voice, tone-table, and application reading is a derived editorial implementation inference from the verified surfaces; it is not 42dot-authored or a separately published UI specification. 42dot's voice is declarative, technical, and quietly ambitious — an engineering company stating a mission rather than selling a product. The homepage statements ("We Are A Mobility AI Company", "The Answer to Mobility and Everything", "We Make Everything Autonomous and Frictionless") are short, present-tense, and confident, with no exclamation urgency and no consumer hype. Bilingual (EN/KR) copy carries the same register in both scripts: plain, capable, forward-looking.

| Context | Tone |
|---|---|
| Hero statements | Declarative, mission-framed. "We Make Everything Autonomous and Frictionless." Confident, never salesy. |
| Section titles | Capability-first. "Technology", "Mobility", "AEV", "Come Ride With Us!". |
| Blog / research titles | Precise and specific. "42dot LLM 1.3B", "Active Learning을 통한 지속적인 모델 성능 개선". |
| Tags | Terse technical labels. "#LLM", "#SDV", "#3DObjectDetection", "#Transformer". |
| Careers | Inviting but grounded. "Open Roles", "42dot Way". |

**Voice samples (verbatim from live site, 2026-07-02):**
- "We Are A Mobility AI Company" — hero headline (mission statement). *(verified live)*
- "We Make Everything Autonomous and Frictionless" — section title (product thesis). *(verified live)*
- "The Answer to Mobility and Everything" — hero sub-statement. *(verified live)*

The following Forbidden-register list is a derived editorial implementation inference from the verified surfaces; it is not 42dot-authored or a separately published UI specification.

**Forbidden register**: consumer-app hype, exclamation-heavy marketing, undefined buzzwords without a technical anchor, decorative superlatives ("revolutionary", "game-changing").

The following Content application, including not promoting synthetic voice samples beyond those verbatim lines, is a derived editorial implementation inference from the verified surfaces; it is not 42dot-authored or a separately published UI specification. No synthetic empty-state, error, or success copy is promoted beyond the source §14 table preserved in Components & States.

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

- exact cubic-bezier curves for `ease-enter` / `ease-exit` / `ease-standard` (unattributed; `ease-exit` matches the legacy spec template; names and uses kept)
- animation names and CSS transition properties until per-component computed observation of all five motion evidence kinds exists; a single named duration is not that gate
- Active Tag Pill interactive kind
- Blog / Research Card interactive kind
- Nav Dropdown Panel interactive kind
- hover, pressed, and focus-visible visual treatments (source never records `focus-visible`)
- form-validation color (source states a warm error tone with no hex)

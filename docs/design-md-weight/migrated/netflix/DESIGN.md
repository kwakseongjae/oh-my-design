# Netflix Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Netflix is a consumer streaming product. This contract covers the consumer browse, player, and title-detail UI plus marketing-acquisition surfaces (Get Started, Finish Sign-Up, sign-in) described in the source. Catalog homepage identity is `https://www.netflix.com`. Token extraction is `prose-derived`. The source names live production `https://www.netflix.com` and live DOM `getComputedStyle` as the Tier-1 path; values are representative public-product observations, not a sourced internal Netflix specification.

The next paragraph is a derived editorial implementation inference from the verified surfaces; it is not Netflix-authored or a separately published UI specification. The captured interface is a dark cinematic frame: the product opens on near-black `#141414` and stays there. There is no white-canvas mode and no light theme in the consumer app. Full-bleed artwork supplies color; chrome recedes to white text, grey metadata, and one red accent. The source’s theater reading is that chrome stays grey-on-black so artwork reads as luminous, and that horizontal poster rows with hover-expand previews are the primary navigation metaphor.

Public history recorded in the source (widely documented; not interface tokens): founded in 1997 by Reed Hastings and Marc Randolph as a DVD-by-mail service in Scotts Valley, California; streaming launched in 2007; *House of Cards* in 2013 introduced “Netflix Original”; mid-2020s presence in 190+ countries with ad-supported tiers, gaming, and live events. Those expansions are narrative context; this packet does not publish gaming or live-event tokens.

The following envelope reading is a derived editorial implementation inference from the verified surfaces; it is not Netflix-authored or a separately published UI specification. The source’s narrative records `#E50914` as descending from the DVD envelope and wordmark. That is brand-story context, not a token derivation.

Exact values below are limited to the source’s stated public-product observations.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Browse titles in the consumer catalog from the hero billboard and horizontal poster rows.
- Play or resume a title from the billboard, detail page, or continue-watching row.
- Sign in or start membership from marketing/auth surfaces (Get Started, Finish Sign-Up, email/password).
<!-- design-md:claim-end -->

### Audience

No invented demographic personas are promoted. Observable work follows the three primary tasks: people browsing the catalog; people playing or resuming a title; people signing in or starting membership. Source §13’s named fictional archetypes are not Audience and are not primary tasks.

### Distinctive traits

- Netflix Red `#E50914` used sparingly — logo, primary marketing CTA, progress fills, “New” markers; never as a background wash
- Near-black canvas `#141414` as the permanent consumer-app ground; player/modal scrims go to `#000000`
- Netflix Sans as the named UI family; Dalton Maag 2018 / Gotham-replacement history is third-party-corroborated (see Typography). Do not present Helvetica or a system fallback as that face
- Full-bleed artwork supplies color; chrome stays grey-on-black (`#B3B3B3` body, `#FFFFFF` for the single key label)
- Horizontal poster rows (“sliders”) with hover-expand cards that scale to 1.5×
- Top nav fades from transparent over the hero billboard to solid `#141414` on scroll

### Principles

These eight items and the capture-bound application list are a derived editorial implementation inference from the verified surfaces; they are not Netflix-authored or a separately published UI specification.

1. **Dim the room, light the screen.** The canvas is dark so artwork reads as luminous. Chrome stays grey-on-black; the only light source is the content.
2. **Red is a signature, not a surface.** `#E50914` marks the logo, the acquisition CTA, progress, and “New”. It never becomes a background.
3. **White is the in-app action; red is acquisition.** Inside the product the dominant button is white (Play). Red lives on sign-up and marketing surfaces.
4. **Grey makes white mean something.** Default text to `#B3B3B3`. White is spent on the single most important label per surface.
5. **Elevation is scale, not glow.** On black, shadows vanish. Lift comes from growing the element (hover scale 1.5×) and raising z-index, anchored by a heavy pure-black shadow.
6. **Rows are doors, edges peek.** Content lives in horizontal carousels; tiles clip at the edge to promise more.
7. **The frame is fixed, the content is infinite.** Chrome stays constant because the artwork inside it is personalized and ever-changing.
8. **Chrome aspires to disappear.** Every pixel of UI competes with a poster. When in doubt, make the interface quieter.

Capture-bound application:

- Keep the canvas dark — `#141414` page, `#000000` player. Never a light theme in the consumer app.
- Reserve `#E50914` for the logo, the primary marketing CTA, progress fills, and “New” markers.
- Use white `#FFFFFF` as the primary in-app action color (Play); red is for acquisition.
- Default body/metadata text to grey `#B3B3B3`; reserve white for the single most important label.
- Let full-bleed artwork supply the color — keep surrounding chrome neutral.
- Use 700 weight for titles and CTAs, 400 for everything else.
- Communicate elevation with scale + z-index on the dark canvas, not soft shadows.
- Clip tiles at row edges to invite horizontal scroll.

### Avoid

The following avoid items copy source Don’ts. Causal and judgement wording in those Don’ts (`grey hierarchy is what makes white legible`; `the black frame is the design`; `each category needs breathing room`) is a derived editorial implementation inference from the verified surfaces; it is not Netflix-authored or a separately published UI specification.

- Do not use red as a large background fill — it is an accent, not a surface.
- Do not introduce a light/white background in browse, player, or detail surfaces.
- Do not put the logo or red CTA on a colored background — only black or white.
- Do not make all text white; grey hierarchy is what makes white legible.
- Do not add decorative borders or glows around artwork — the black frame is the design.
- Do not use heavy radii (>6px) on cards — Netflix tiles are nearly square-cornered.
- Do not crowd rows vertically — each category needs breathing room above and below.
- Do not present Helvetica Neue, Helvetica, Arial, Gotham, Roboto, or a system fallback as Netflix Sans.
- Do not treat catalog identity Simple Icons as a first-party mark file.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Primary / identity:

- **Netflix Red** (`#E50914`): brand red (Pantone 1795 C, RGB 229·9·20). Catalog `primary_color` and YAML `primary` / `brand`. Logo, marketing CTA fill, progress-bar fill, active selection underline, “New” / “Recently Added” text. Used as accent, never as a large fill area. Approved logo backgrounds are only black or white.
- **Dark Red** (`#B20710`): YAML `primary-hover`. Hover/pressed for the red CTA; secondary brand red in marketing gradients.
- **Pure Black** (`#000000`): player background, modal scrims, deepest layer, approved logo background.
- **Near Black / Canvas** (`#141414`): default page and row background. YAML `canvas`. Grey 900 in the source scale. The source scale note that this canvas is slightly lifted from pure black so layered surfaces are distinguishable is a derived editorial implementation inference from the verified surfaces; it is not Netflix-authored or a separately published UI specification.
- **Pure White** (`#FFFFFF`): primary text, active icons, logo on dark, Play-button fill, YAML `foreground` / `on-primary`. On-primary here is the red-CTA text, not the Play button (Play is `#000000` on `#FFFFFF`).

Semantic (keep the two greens and the two error treatments unmerged):

- **Auth / payment error and warning** (`#E87C03`): YAML `error`. Auth-field error border and message; billing/payment-failed banners; “Your plan changes soon”. Account banner may also use `#E50914` when marked urgent.
- **Form-error family note:** source §2 says form errors use a warm red `#E50914` while auth/payment errors render in `#E87C03` to distinguish from the brand-red CTA on the same screen. Both statements are kept; neither is chosen.
- **Success Green** (`#2A9D3C`): “Downloaded”, “Added to list” confirmations. Rare — the source says Netflix avoids semantic green in the browse UI.
- **Match Green** (`#46D369`): YAML `accent-match`. “98% Match” inside expanded cards. Not the same token as `#2A9D3C`.

Neutral scale (dark-first):

- **Grey 900** (`#141414`): app canvas, row background.
- **Grey 850 / Surface** (`#181818`): card resting fill, expanded preview-card body, YAML `surface`. Artwork lazy-load placeholder.
- **Grey 800** (`#2F2F2F`): hover row background, secondary button fill in the scale table. The harvested More Info button fill is `rgba(109,109,110,0.7)` (grey600 @70%), not this hex; do not merge them.
- **Grey 700 / Hairline** (`#404040`): YAML `hairline`. Borders on dark surfaces, divider lines, circle-icon outline in the scale table, continue-watching track.
- **Grey 600** (`#6D6D6E`): disabled text, muted controls, secondary button border in the scale table.
- **Grey 500** (`#808080`): Caption/metadata text, `"secondary"` CTA label, inactive nav links. YAML `input-auth` uses the same hex as Auth Field `Border: 1px solid #808080` — that is a component-field binding, not this scale role. Harvested More Info (`button-secondary`) text is `#FFFFFF`; do not merge it with this scale’s secondary-CTA label.
- **Grey 400 / Body / Muted** (`#B3B3B3`): YAML `muted` and `body`. Body metadata, sub-headings, descriptions — the canonical “Netflix grey”.
- **Grey 300** (`#E5E5E5`): emphasized secondary text, list-item labels, resting top-nav link.

Surface & borders:

- **Border Default:** `#404040`
- **Border Subtle:** `#333333` (hairline separators inside dark cards; also profile-gate fallback)
- **Overlay Scrim:** `rgba(0,0,0,0.7)` to `rgba(0,0,0,0.9)`
- **Hero Gradient:** `linear-gradient(180deg, rgba(20,20,20,0) 0%, rgba(20,20,20,1) 100%)` — bottom-of-billboard fade. Left-to-right variant `rgba(0,0,0,0.6)→transparent` for text over key-art.
- **Disabled chrome:** `#6D6D6E` text / `rgba(255,255,255,0.3)`; geometry unchanged.

### Spacing

Base unit: 4px. YAML: xs 4, sm 8, md 12, base 16, lg 24, xl 32, xxl 48, section 60. Common values: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 60px. Row gutter: ~3vw vertical. Tile gap within a row: 4px–8px. Page padding: 4% of viewport width (`padding: 0 4vw`).

### Shape

- Sharp (2px): maturity badges, inline chips — YAML `rounded.sm`
- Standard (4px): buttons, inputs, resting tiles, profile gates — YAML `rounded.md`
- Comfortable (6px): expanded hover cards, modals — YAML `rounded.lg`
- Pill (9999px): toggles, circle icon buttons — YAML `rounded.full`

4px button/tile corners and 6px expanded-card/modal corners are local geometry, not a universal radius for every surface. Do not use heavy radii (>6px) on cards.

### Elevation

The following elevation reading is a derived editorial implementation inference from the verified surfaces; it is not Netflix-authored or a separately published UI specification. On a black canvas, drop-shadows are nearly invisible — elevation is communicated primarily through scale and z-index, not shadow. The hover card grows to 1.5× and slides above its neighbors; the shadow underneath is heavy and pure-black only to anchor that lift. Elsewhere, separation comes from fill-lightness steps (`#141414` → `#181818` → `#2F2F2F`), not from luminous edges. There are no colored shadows and no soft ambient glows.

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Resting row tiles, page background |
| Hover (Level 1) | `0 12px 24px rgba(0,0,0,0.8)` + scale(1.5) | Expanded preview card lifting above row. YAML `shadow.hover` |
| Floating (Level 2) | `0 6px 16px rgba(0,0,0,0.7)` | Dropdown menus, profile menu, search panel. YAML `shadow.floating` |
| Modal (Level 3) | `0 8px 32px rgba(0,0,0,0.9)` | Detail modal, confirmation dialog. YAML `shadow.modal` |
| Scrim | `rgba(0,0,0,0.7)` full overlay | Behind any modal or the player chrome |

Player controls and the top nav use a subtle backdrop scrim (gradient, not gaussian blur). Profile and account dropdowns drop a hard `rgba(0,0,0,0.9)` panel rather than a frosted blur.

### Motion

Source-stated duration roles:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Checkbox/toggle commit |
| `motion-fast` | 150ms | Button hover, nav-link color shift, icon-button border |
| `motion-card` | 300ms | Tile hover-expand (scale 1.5×) and collapse |
| `motion-standard` | 400ms | Modal open, row reorder, nav transparent→solid fade |
| `motion-billboard` | 600ms | Hero artwork cross-fade, billboard text reveal |

Signature motions (source-stated; not decoration):

1. **Tile hover-expand.** On hover, the tile scales to 1.5× over `motion-card` with `ease-out`, raises z-index above neighbors, drops a heavy black shadow, and reveals the info panel + autoplay preview. Collapse reverses with `ease-in`. `ease-out` / `ease-in` here are source-stated token names and uses, not computed curves.
2. **Row paging.** Clicking a row’s edge arrow slides the carousel one page with `ease-scroll`; tiles at the new edge peek. The purpose reading `peek to promise more` is a derived editorial implementation inference from the verified surfaces; it is not Netflix-authored or a separately published UI specification.
3. **Nav fade.** As the user scrolls off the billboard, the top nav transitions from transparent to solid `#141414` over `motion-standard / ease-standard`.
4. **Billboard cross-fade.** Hero artwork and its preview video cross-fade over `motion-billboard`; title art and buttons fade up from below with a slight delay. The causal reading `so the artwork lands first` is a derived editorial implementation inference from the verified surfaces; it is not Netflix-authored or a separately published UI specification.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, hover-expand scaling and autoplay previews are suppressed — tiles get a simple border/brightness change instead, and cross-fades become instant cuts. The product stays fully usable.

Source-stated easing token names and uses (uncomputed; cubic-bezier curves omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-out` | omitted (unattributed cubic-bezier; matches the legacy spec template `ease-enter`) | Things appearing — card expand, modal in |
| `ease-in` | omitted (unattributed cubic-bezier; matches the legacy spec template `ease-exit`) | Things leaving — card collapse, modal out |
| `ease-standard` | omitted (unattributed cubic-bezier; matches the legacy spec template `ease-standard`) | Two-way — nav fade, row scroll |
| `ease-scroll` | omitted (unattributed cubic-bezier; CSS default-ease class) | Horizontal row carousel paging |

Exact cubic-bezier curves are unattributed — three match the legacy spec template — and remain omitted rather than promoted. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | No supplied official Netflix type specimen sheet is in this packet. `https://brand.netflix.com/en/assets/logos/` is the official logos page, not a typography token sheet. |
| Live surface-use | The source names `https://www.netflix.com` live DOM `getComputedStyle` as the Tier-1 path. Token extraction is `prose-derived`. Netflix Sans is the named consumer-UI family. |
| Third-party-corroborated brand history | Netflix Sans is a custom typeface by Dalton Maag, introduced 2018, replacing Gotham. Source: WebSearch corroboration and `https://www.designyourway.net/blog/netflix-logo/`. This is not official product-use. |
| Official distributed asset | No Netflix-exclusive public redistribution right for Netflix Sans is established here. |
| Declared-only | `"Helvetica Neue", Helvetica, Arial, sans-serif` remain in the CSS fallback stack. Pre-2018 surfaces used Gotham / `"Roboto"`. |
| Diagnostic-only | `"Courier New", monospace` — YAML `family.mono`. Used only in dev/diagnostic overlays, not consumer UI. |

Do not present Helvetica Neue, Helvetica, Arial, Gotham, Roboto, or a system fallback as Netflix Sans. An officially known but unavailable face keeps its metadata and loses only a live specimen.

### Family

- **Current UI family:** `"Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif`
- **Monospace:** `"Courier New", monospace` — diagnostic overlays only
- Do not present the fallback stack as Netflix Sans

The following type-character reading is a derived editorial implementation inference from the verified surfaces; it is not Netflix-authored or a separately published UI specification. Netflix Sans is a geometric, faintly condensed grotesque. It ships Light through Black; the UI primarily uses 400 (body/metadata), 500 (card labels), and 700 (titles/CTAs). Large titles tighten tracking (`-0.01em`); body stays at normal tracking with 1.5 line-height. No italics in chrome — emphasis comes from weight and color. Italics appear only inside subtitle/caption rendering of the video itself. Grey `#B3B3B3` is the default body color; white is reserved for the single most important label per surface.

### Type roles

Verified line-height values are the unitless YAML ratios. They scale with font size and are not fixed px.

| Role | Font | Size | Weight | Line height | Tracking | Use |
|---|---|---:|---:|---:|---:|---|
| Billboard Title | Netflix Sans | 56px | 700 | 1.1 | -0.01em | Hero artwork title (often replaced by logo art) |
| Display | Netflix Sans | 40px | 700 | 1.15 | -0.01em | Marketing hero, sign-up headline |
| Heading Large | Netflix Sans | 32px | 700 | 1.2 | normal | Modal title, detail-page show name |
| Heading | Netflix Sans | 24px | 700 | 1.25 | normal | Section / category headers |
| Row Title | Netflix Sans | 20px | 700 | 1.3 | normal | “Trending Now”, “Continue Watching” |
| Subtitle | Netflix Sans | 18px | 500 | 1.4 | normal | Card title in expanded preview |
| Body Large | Netflix Sans | 16px | 400 | 1.5 | normal | Synopsis, descriptions |
| Body | Netflix Sans | 14px | 400 | 1.5 | normal | Standard metadata, list rows |
| Caption | Netflix Sans | 13px | 400 | 1.4 | normal | Match %, maturity rating, runtime |
| Micro | Netflix Sans | 12px | 400 | 1.4 | 0.02em | Legal, fine print, footer links |

### Assets

No first-party mark file is attached here. Official brand logos are documented at `https://brand.netflix.com/en/assets/logos/`. Catalog logo type `simpleicons` / slug `netflix` is identity-only; it is not a portable mark. The wordmark and “N” ribbon use `#E50914` on black or white only. Artwork is first-party catalog content; do not replace it with invented brand-color decoration.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

| State | Treatment |
|---|---|
| Empty (My List) | Centered grey `#B3B3B3` line (“Titles you add to My List appear here.”) over `#141414`, with a suggestion row below. No illustration. |
| Empty (Search no results) | Grey caption (“Your search for 'xyz' did not have any matches.”) plus a “Suggestions:” list and a fallback popular row. |
| Loading (row) | `#181818` placeholder tiles at exact final dimensions, faint 1.2s shimmer. Artwork fades in on load. |
| Loading (page) | Centered red `#E50914` spinner / the “N” ribbon animation over `#141414`. |
| Hover (tile) | Scale 1.5×, z-index lift, `0 12px 24px rgba(0,0,0,0.8)` shadow, muted autoplay preview, action button row reveals. |
| Error (form field) | Border-bottom 2px `#E87C03`, amber message 13px below the field. |
| Error (playback) | Full black player with centered white message + error code in grey, “Try Again” white button. |
| Success (added to list) | The + circle button fills to a ✓, brief scale pulse, no toast. |
| Disabled | Control drops to `#6D6D6E` text / `rgba(255,255,255,0.3)`; geometry unchanged. |
| Buffering | Red `#E50914` circular spinner centered over the dimmed (`rgba(0,0,0,0.5)`) video frame. |
| Progress (resume) | 3px bar, `#404040` track / `#E50914` fill, under continue-watching tiles and on the scrubber. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `Focus` capture is not `focus-visible` treatment evidence; named focus observations stay as additional observed states, and the `focus-visible` visual treatment remains omitted. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. This is not a complete state-coverage claim.

Badges, the account banner, the progress bar, and the dialog surface have no interactive-kind evidence as actions, so kind and a state-applicability map are omitted where noted. The marketing sign-in email field is named as a high-contrast exception; no separate computed values were supplied, so none are invented.

### Primary / White (Play)

- Role: Play action on billboard / detail / continue-watching
- Kind: interactive
- Type: button
- Anatomy: label plus leading play glyph
- Background: `#FFFFFF`
- Text: `#000000`
- Border: none
- Radius: 4px
- Padding: 8px 24px
- Font: 16px / 700 / Netflix Sans
- Icon: leading play glyph, 24px, `#000000`
- Hover: background `rgba(255,255,255,0.75)`
- Use: “재생 / Play” — the dominant in-app action

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named Play action on billboard, detail, and continue-watching |
| hover | applicable | Pointer-web button; `rgba(255,255,255,0.75)` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Play can be unavailable; `#6D6D6E` / `rgba(255,255,255,0.3)` is the source Disabled treatment |
| loading | not-applicable | Playback waiting is page/player buffering (red spinner / N ribbon), not a loading state of this button |
| error | not-applicable | Playback failure is the full-black player message, not an error state of this button |
| success | not-applicable | Starting playback is the destination, not a success confirmation on this button |

### Primary / Red (Marketing CTA)

- Role: marketing acquisition CTA (Get Started, Finish Sign-Up, Restart Membership)
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#E50914`
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Padding: 16px 28px
- Font: 18px / 700 / Netflix Sans (24px on marketing hero)
- Hover: background `#B20710`
- Use: acquisition surfaces only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named Get Started / Finish Sign-Up / Restart Membership |
| hover | applicable | Pointer-web button; `#B20710` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A membership CTA can be unavailable; visual treatment omitted |
| loading | not-applicable | Get Started / Finish Sign-Up is the destination action; waiting lives on the page, not as a loading state of this button |
| error | not-applicable | Auth/payment failure is the field or account banner, not an error state of this CTA |
| success | not-applicable | Completing sign-up is not a success confirmation painted on this button |

Additional observed named state: pressed `#B20710` (source pairs hover/pressed on the red CTA).

### Secondary / Grey (More Info)

- Role: More Info beside Play
- Kind: interactive
- Type: button
- Anatomy: label plus leading info glyph
- Background: `rgba(109,109,110,0.7)` (grey600 @70%)
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Padding: 8px 24px
- Font: 16px / 700 / Netflix Sans
- Icon: leading “ⓘ” info glyph
- Hover: background `rgba(109,109,110,0.4)`
- Use: “상세 정보 / More Info”

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named More Info beside Play |
| hover | applicable | Pointer-web button; `rgba(109,109,110,0.4)` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | More Info can be unavailable; visual treatment omitted |
| loading | not-applicable | More Info opens the detail modal; the control itself does not enter a loading state |
| error | not-applicable | Opening detail is not a request or validation failure of this button |
| success | not-applicable | Opening detail is not an action-outcome confirmation on this button |

### Circle Icon Button

- Role: Add-to-list, Like, expand on hover cards
- Kind: interactive
- Type: button
- Anatomy: icon
- Background: `rgba(42,42,42,0.6)`
- Border: 2px solid `rgba(255,255,255,0.5)`
- Radius: 9999px
- Size: 40px diameter (44px on detail page)
- Icon: 20px, `#FFFFFF`
- Hover: border `#FFFFFF`, icon `#FFFFFF`
- Use: Add-to-list (+), Like (👍), expand (⌄)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named hover-card utility circle |
| hover | applicable | Pointer-web button; border `#FFFFFF` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Add-to-list / Like / expand can be unavailable; visual treatment omitted |
| loading | not-applicable | These circles commit a list, like, or expand action; waiting is not a loading state of the circle |
| error | not-applicable | List or like failure is not a validation state of this circle |
| success | applicable | Add-to-list captured: + fills to a ✓, brief scale pulse, no toast. That treatment is the add-to-list use, not Like or expand |

### Auth Field (dark)

- Role: email/password on the sign-in screen
- Kind: interactive
- Type: input
- Anatomy: value field with floating label
- Background: `#161616` (with `rgba(22,22,22,0.7)` over artwork)
- Text: `#FFFFFF`
- Border: 1px solid `#808080`
- Radius: 4px
- Padding: 16px
- Font: 16px / 400 / Netflix Sans
- Placeholder / floating label: `#8C8C8C`
- Error: border-bottom 2px `#E87C03`, message `#E87C03` 13px below
- Use: Email/password on sign-in

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named sign-in email/password field |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | Sign-in fields can be unavailable; visual treatment omitted |
| loading | not-applicable | The field’s role is credential entry; waiting is the page, not a loading state of the field |
| error | applicable | Captured auth-field validation treatment |
| success | not-applicable | Successful sign-in leaves the field; it is not a success confirmation on the input |

Additional observed named state: generic `Focus` — border `#FFFFFF`, label floats up to 11px. This is not `focus-visible` evidence.

### Search Field

- Role: top-nav search, expands from an icon
- Kind: interactive
- Type: input
- Anatomy: value field with leading magnifier
- Background: `rgba(0,0,0,0.75)`
- Text: `#FFFFFF`
- Border: 1px solid `#FFFFFF`
- Radius: 4px
- Padding: 7px 12px
- Font: 14px / 400 / Netflix Sans
- Icon: leading magnifier 18px `#FFFFFF`
- Use: Top-nav search

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named top-nav search field |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | Search can be unavailable; visual treatment omitted |
| loading | not-applicable | Result loading is the row/page placeholders, not a loading state of the field |
| error | not-applicable | “No matches” is the empty-search surface, not a validation error of this field |
| success | not-applicable | Returning results is the destination list, not a success confirmation on the field |

### Title Card (Resting)

- Role: resting poster tile in a scrolling row
- Kind: interactive
- Type: card
- Anatomy: artwork
- Background: artwork image, fallback `#181818`
- Border: none
- Radius: 4px
- Aspect: 16:9 (boxshot rows) or 2:3 (portrait rows)
- Shadow: none at rest
- Use: default state in a scrolling row

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named resting row tile |
| hover | applicable | Pointer-web tile; scale 1.5×, z-index, `0 12px 24px rgba(0,0,0,0.8)`, autoplay preview, and action row captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A row tile can be unavailable; visual treatment omitted |
| loading | not-applicable | Row loading is `#181818` placeholder tiles at final dimensions, not a loading state of the tile control |
| error | not-applicable | Artwork or playback failure is not a validation state of the resting tile |
| success | not-applicable | Opening a title is the destination, not a success confirmation on the tile |

Additional observed named state: generic `Focus` — source Expanded Preview Use is “Hover/focus on a row tile” (activation with hover). This is not `focus-visible` evidence; the `focus-visible` visual treatment remains omitted.

### Title Card (Expanded Preview)

- Role: expanded preview card lifting above the row
- Type: card
- Kind: omitted. This harvested sibling is the hover presentation of the resting tile, not a second control, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#181818` body below 16:9 artwork
- Border: none
- Radius: 6px (top corners follow artwork, bottom info-panel squared-rounded)
- Transform: `scale(1.5)` with `transform-origin` toward row center
- Shadow: `0 12px 24px rgba(0,0,0,0.8)`
- Contains: muted autoplay preview, action button row (play, +, like, expand), match % in `#46D369` 14px / 700 (“98% Match”), maturity badge, duration, genre tags. Source §9 construction prompt also names a white circular play button in the revealed info panel; that prompt is not a separate harvested YAML component.
- Use: Hover/focus on a row tile — lifts above neighbors with z-index and shadow

Additional observed named state: generic `Focus` — the source pairs it with hover as the activation path. This is not `focus-visible` evidence.

### New / Recently Added Badge

- Role: NEW EPISODE / RECENTLY ADDED overlay
- Type: badge
- Kind: non-interactive. The source treats this as a status overlay, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: transparent
- Text: `#E50914`
- Border: none
- Font: 12px / 700 / Netflix Sans, uppercase, letter-spacing 0.05em
- Use: overlaid bottom-left on artwork

### Top 10 Ribbon

- Role: trending-rank ribbon
- Type: badge
- Kind: non-interactive. The source treats this as a status overlay, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#E50914`
- Text: `#FFFFFF`
- Font: 9px / 700 uppercase “TOP 10”
- Use: top-right of qualifying tiles

### Maturity Rating

- Role: maturity rating on detail pages / previews
- Type: badge
- Kind: non-interactive. The source treats this as a status label, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `rgba(51,51,51,0.6)`
- Text: `#FFFFFF`
- Border: 1px solid `#666666` (left accent line for some regions)
- Radius: 2px
- Padding: 2px 6px
- Font: 13px / 400 / Netflix Sans
- Use: “18”, “15+”, “TV-MA”

### Top Nav Link

- Role: top nav links (Home / TV Shows / Movies / New & Popular / My List)
- Kind: interactive
- Type: tab
- Anatomy: label
- Text: `#E5E5E5` (active `#FFFFFF` 700)
- Font: 14px / 400 / Netflix Sans
- Hover: `#B3B3B3`
- Background: transparent → `#141414` solid on scroll
- Composition (source §9-only): Red “N” mark left; links center/left (`#E5E5E5` 14px / 400, active white 700); search icon + profile avatar right. Transparent over the hero, fading to solid `#141414` on scroll.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named resting top-nav link |
| hover | applicable | Pointer-web nav link; `#B3B3B3` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A nav destination can be unavailable; visual treatment omitted |
| loading | not-applicable | A nav link selects a catalog section; the link itself does not enter a loading state |
| error | not-applicable | Nav meaning is selected versus resting, not a request or validation failure |
| success | not-applicable | Nav meaning is selection, not action-outcome confirmation |

Additional observed named states: active (`#FFFFFF` 700) and the scroll treatment (transparent → solid `#141414`).

### Profile Gate Tile

- Role: “Who's watching?” profile selection
- Kind: interactive
- Anatomy: artwork avatar plus label
- Background: artwork avatar, `#333333` fallback
- Radius: 4px
- Size: 84px–200px square depending on viewport
- Hover: 2px solid `#FFFFFF` outline, label brightens white
- Use: profile selection grid. No YAML `type` was recorded; none is invented.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named profile-selection tile |
| hover | applicable | Pointer-web tile; 2px `#FFFFFF` outline captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A profile can be locked; visual treatment omitted |
| loading | not-applicable | Selecting a profile is the destination; the tile itself does not enter a loading state |
| error | not-applicable | Profile-gate meaning is selection, not a request or validation failure on the tile |
| success | not-applicable | Entering a profile is the destination, not a success confirmation on the tile |

### Continue-watching Progress

- Role: resume position under continue-watching tiles and on the player scrubber
- Kind: omitted. The source records a non-interactive indicator, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Track: `#404040`
- Fill: `#E50914`
- Height: 3px
- Radius: 0

### Account Banner

- Role: account / payment full-width top banner
- Type: toast
- Kind: omitted. The source records a persistent status banner, not an action control, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#E87C03` (warning) or `#E50914` (urgent)
- Text: `#FFFFFF`
- Padding: 12px 16px
- Font: 14px / 500 / Netflix Sans
- Use: “Update your payment method”

### Modal (Detail / Confirm)

- Role: title-detail modal and account-action confirm
- Type: dialog
- Kind: omitted. The source records default geometry and no interactive-kind evidence for the dialog surface, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#181818`
- Text: `#FFFFFF`
- Border: none
- Radius: 6px
- Padding: 0 (artwork-bleed top) then 24px body
- Shadow: `0 8px 32px rgba(0,0,0,0.9)`
- Scrim: `rgba(0,0,0,0.7)`
- Max-width: ~850px, centered

### Toggle

- Role: Autoplay previews, subtitle settings, profile-lock switches
- Kind: interactive
- Type: toggle
- Anatomy: track plus thumb
- Track: `#E50914` (on) / `#737373` (off)
- Radius: 9999px
- Thumb: `#FFFFFF` circle

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Off/on boolean setting is the control |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A settings boolean can be locked; visual treatment omitted |
| loading | not-applicable | A boolean setting records on versus off; the toggle itself does not enter a loading state |
| error | not-applicable | On/off is the toggle meaning; a save failure is not an error state of the thumb |
| success | not-applicable | On is the on state, not a success confirmation on the toggle |

Additional observed named states: on and off. YAML `motion-instant` 0ms is the source-stated commit duration.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The following whitespace reading is a derived editorial implementation inference from the verified surfaces; it is not Netflix-authored or a separately published UI specification. Artwork gets vertical air between rows; chrome inside a row stays tight so more tiles peek at the edges. Tiles are clipped at row edges to signal “scroll for more.” Dark negative space is the cinema frame — never fill it with decoration.

Spacing and grid from the source:

- Page padding: 4% of viewport width left/right (`padding: 0 4vw`)
- Rows are horizontally scrollable carousels, not a fixed grid — tile count per row is responsive (2 on mobile → 6+ on wide desktop)
- Hero billboard: full-bleed, ~56vh tall, artwork right-aligned with left-side text gradient
- Detail modal: max-width ~850px, centered, artwork bleeds to modal edges
- Row gutter ~3vw vertical; tile gap 4px–8px

| Name | Width | Key changes |
|---|---|---|
| Mobile | <500px | 2–3 tiles/row, hero ~40vh, nav collapses to hamburger + N logo |
| Tablet | 500–950px | 3–4 tiles/row, hover previews disabled (tap to open detail) |
| Desktop | 950–1400px | 5–6 tiles/row, full hover-expand previews enabled |
| Wide / TV | >1400px | 6+ tiles/row, larger billboard, 4% edge padding holds |

Touch targets: buttons 44px min height on touch; circle icon buttons 44px diameter; tiles full-tile tappable (no hover-expand on touch); nav 48px tap rows in the mobile slide-out menu. Hover-expand previews are desktop-only. Billboard text stays left-aligned and shrinks; on mobile the synopsis is hidden, leaving title art + Play/Info buttons. Rows remain horizontally scrollable at every breakpoint.

Artwork serves responsive crops: 16:9 boxshots for desktop rows, 2:3 portraits for mobile and “Top 10” rows. Hero billboard art is right-anchored with a left + bottom gradient. All artwork lazy-loads with a `#181818` placeholder block at exact tile dimensions.

The 56px billboard title, 40px/44px circle, 48px mobile nav row, 84px–200px profile gate, 850px modal, and 56vh/40vh billboard heights are source measurements, not a claim that every unlisted surface shares them.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The following voice and tone notes are a derived editorial implementation inference from the verified surfaces; they are not Netflix-authored or a separately published UI specification. Netflix speaks like a confident, friendly host who already knows what you want to watch — warm, direct, lightly playful, never corporate. Copy is concise and action-forward. English is the source voice; the source says Netflix localizes into 30+ languages with culturally-tuned (not literal) translation. Sentences in body copy end in periods; buttons are short imperative verbs with no terminal punctuation. Emoji appear in marketing and social but never in the core browse/player chrome. The cancel flow is described as deliberately frictionless.

| Context | Tone |
|---|---|
| CTAs | Imperative, short (“Play”, “Get Started”, “Finish Sign-Up”, “More Info”) |
| Onboarding | Reassuring, low-commitment (“Cancel anytime.”, “We'll send a reminder 3 days before your trial ends.”) |
| Empty states | Encouraging, redirective (“Add titles to your list to watch them later.”) |
| Error messages | Plain, blameless, actionable (“That password is incorrect. Try again or reset it.”) |
| Billing | Calm and transparent (“Your plan changes on June 12. No action needed.”) |
| Maturity / parental | Neutral, factual — no judgment in rating language |
| Marketing hero | Bold, benefit-led (“Unlimited movies, TV shows and more.”) |

Forbidden moves. No jargon (“leverage”, “utilize”), no fake urgency countdown timers in core flows, no guilt copy on cancel (“Are you sure you want to leave us?”), no exclamation-stuffed hype in the player UI.

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

- exact cubic-bezier easing curves (omitted as unattributed; three match the legacy spec template)
- animation names and CSS transition properties until per-component computed capture of all five motion evidence kinds exists; a single named duration is not that gate
- a loadable Netflix Sans webfont for third-party reproduction
- `focus-visible` visual treatments (generic `Focus` on the auth field is a different observation)
- computed values for the marketing-page high-contrast email-field exception
- hover visual values for the auth field and search field
- catalog identity Simple Icons as a first-party mark

# Devsisters Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Devsisters is the Korean game company behind the Cookie Run franchise, described in the source as "building joyful, globally loved play experiences since 2007." This contract covers the first-party corporate web surfaces the source names as its Tier 1 evidence: the `https://www.devsisters.com` homepage (HTML plus inline CSS), the CSS bundle `https://www.devsisters.com/_next/static/css/bab2a2ef530354d9.css`, the `/resource` brand resource page, and the `/about` page.

Token extraction is `prose-derived` (`tokens.extracted` 2026-06-09; catalog `verified` 2026-06-03). The values below are source-stated readings of those corporate web pages, not a published Devsisters UI specification, and `components_harvested` is the source's own flag rather than a per-value computed capture record.

The rest of this paragraph is a derived editorial implementation inference from the verified surfaces; it is not Devsisters-authored or a separately published UI specification. Devsisters' digital product language is bold, energetic, and unambiguously orange. The homepage announces itself in a full-bleed deep orange (`#FF5F00`) navigation bar that carries through to the footer, wrapping the entire experience in brand warmth. Against this chromatic confidence, content cards surface on pure white with subtle grey borders and generously rounded corners (20 px on cards, 36 px on buttons), giving the layout a playful softness that balances the brand's intensity. Typography oscillates between the heavyweight display face `azo-sans-web` (used at weights 800–900 for English headlines) and the versatile Korean system stack `Pretendard` (used at weight 500–700 for body and UI copy), creating a bilingual dual-register hierarchy that reads as global without feeling generic. The overall atmosphere is that of a confident entertainer: vivid, rounded, action-forward, with just enough restraint in whitespace and card structure to keep the experience legible across ages and screen sizes.

The following history values come from source §11. The dated and countable company facts among them — the 2007 Seoul founding, the named titles, the US App Store ranking, the 300 million cumulative-user figure, the office/studio/subsidiary counts, the quoted mission line, and the "Brave Journey" timeline name — are brand-published about-page material, not interface tokens. The evaluative characterisations wrapped around them — reading the studio as one of Korea's most recognised game IP creators, naming a "breakout moment", and reading the timeline as a series of courageous bets — are a derived editorial implementation inference from the verified surfaces; they are not Devsisters-authored or a separately published UI specification. Devsisters was founded in 2007 in Seoul as a small Korean mobile studio and grew through the Cookie Run franchise into one of Korea's most recognised game IP creators; the breakout moment came with Cookie Run: OvenBreak and accelerated to global scale with Cookie Run: Kingdom, which reached Apple App Store top-10 rankings in the United States and built a fandom spanning more than 300 million cumulative users across all titles. Devsisters operates four global offices, three development studios, and one investment subsidiary (Devsisters Ventures), with reach extending into animation, licensing, and new platform categories including PC, console, and VR. The stated mission is "We Create a Joyful World — in more places, for more people, for longer," framed by the source as an operating mandate rather than an aspiration, and the about page carries a "Brave Journey" timeline that frames the studio's history as a series of courageous bets.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Browse the news and game cards on the Devsisters corporate homepage.
- Read the company story and the "Brave Journey" timeline on the about page.
- Open the brand resource page.
<!-- design-md:claim-end -->

### Audience

Restricting Audience to group-level stakeholders, reading source §13 as excluded from Audience and from primary tasks, and reading the corporate site's readers as a group-level audience are a derived editorial implementation inference from the verified surfaces; they are not Devsisters-authored or a separately published UI specification. Source §13 marks every one of its four entries as "Illustrative persona — not based on proprietary user research," so its archetype names, age ranges, and biographies are dropped here and are not re-hosted in the sidecar. Group-level material kept here: the fandom of more than 300 million cumulative users across all titles is source-stated (§11); the readers of the company story and the brand resource page are read off the Tier 1 surface set under the limiter above, not established by the source as an audience segment.

### Distinctive traits

The following list is a derived editorial implementation inference from the verified surfaces; it is not Devsisters-authored or a separately published UI specification.

- `#FF5F00` as full-bleed chrome — nav and footer share it, wrapping page content
- `#FFCE00` tag badges always paired with `#000000` text
- Bilingual dual register: `azo-sans-web` 800–900 all-caps for English display, `Pretendard` 500–700 for Korean body and UI
- A three-step radius vocabulary: 36px pills and tags, 20px content cards, 8px images and thumbnails
- 48px nav bar and 48px button height on desktop
- No drop-shadow depth; colour field transitions and radius carry the elevation

### Principles

Brand-stated pillars. Source §11 records these three as the philosophical pillars that govern Devsisters' creative and product decisions, and §12 restates them:

1. **Focus on Core** — pursue the essential goal without being constrained by convention.
2. **Run Brave** — compete with courage even in a harsh market environment.
3. **Touch Hearts** — create not just useful but genuinely moving experiences that people return to long after the initial novelty fades.

The following two additional principles, every *UI implication* below, and the reading that the pillars surface visibly in UI decisions are a derived editorial implementation inference from the verified surfaces; they are not Devsisters-authored or a separately published UI specification.

4. **Global by Default** — design for every culture, language, and generation from the first commit.
5. **Earned Simplicity** — complexity is acceptable in the product; the interface should absorb that complexity so users don't have to.

- *Focus on Core.* Avoid decorative complexity; every visual element should earn its place by serving the user's primary goal. Remove anything that dilutes the orange-signal hierarchy.
- *Run Brave.* Make primary actions unambiguously visible — bold orange buttons, full-bleed colour fields. Never let the interface be timid about what it wants the user to do next.
- *Touch Hearts.* Motion timing and easing should feel alive (`0.8s cubic-bezier(0.075, 0.82, 0.165, 1)` for content reveals); card imagery should be rich and emotionally engaging, not generic stock.
- *Global by Default.* All typographic hierarchies must work in both `azo-sans-web` (Latin/English) and `Pretendard` (Korean); layout padding must accommodate longer Korean strings without breaking.
- *Earned Simplicity.* Navigation collapses gracefully into a single-layer drawer on mobile; colour does the heavy lifting of wayfinding so users never need to read a label twice.
- The bold orange palette and the all-caps display typography read as the same "no hedging" stance the company articulates in its mission language.

Capture-bound application. The following list is a derived editorial implementation inference from the verified surfaces; it is not Devsisters-authored or a separately published UI specification.

- Use `#FF5F00` as the primary action colour for all main CTAs, nav chrome, and section backgrounds.
- Pair `#FFCE00` badges with `#000000` text — this is the only accessible combination for yellow.
- Use `azo-sans-web` weight 800–900 in all-caps for English display copy; use `Pretendard` weight 500–700 for Korean body text.
- Apply `border-radius: 36px` on all pill-shaped buttons and tags; `border-radius: 20px` on content cards.
- Keep button height at 48 px (desktop) with 12 px/24 px padding.
- Use `#000000` for the secondary black pill button when an alternative to orange is needed on white backgrounds.

### Avoid

The following list is a derived editorial implementation inference from the verified surfaces; it is not Devsisters-authored or a separately published UI specification.

- Don't use `#FFCE00` without `#000000` text — it fails contrast on white or orange backgrounds.
- Don't mix `azo-sans-web` (display) and `Pretendard` (body) at the same hierarchical level — they serve distinct roles.
- Don't introduce border-radius values other than 36 px (pills/tags), 20 px (cards), or 8 px (images/thumbnails).
- Don't place orange text on an orange background — reversed white text is the only on-brand contrast pairing.
- Don't use italic or light weights (100–300) in UI components — the brand voice reads as bold and direct.
- Don't add heavy drop shadows; depth is communicated through colour field transitions and border radius, not elevation.
- Avoid gradients, shadows, or pastel tones — keep the palette disciplined to the five core swatches.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The following role, pairing-reason, and application readings are a derived editorial implementation inference from the verified surfaces; they are not Devsisters-authored or a separately published UI specification.

- **Brand Orange** (`#FF5F00`): primary background — nav, footer, CTA buttons, section fills; the brand's dominant signal colour. This is also the catalog `primary_color`.
- **Bright Orange** (`#FF8200`): hover/active tint on the nav border; lighter orange accent for secondary states.
- **Yellow Accent** (`#FFCE00`): tag badges and highlight chips, always paired with `#000000` text for contrast.
- **Pure Black** (`#000000`): body text, black pill-style secondary buttons, dark section backgrounds.
- **Pure White** (`#FFFFFF`): content card backgrounds, reversed text on orange/black surfaces.
- **Warm Peach** (`#F8E8DA`): accordion/expanded nav background; softened orange tone for nested UI.
- **Grey Border** (`#DCDCDC`): card borders, dividers on white backgrounds.
- **Mid Grey** (`#666666`): secondary body text, labels on white.

### Spacing

The source records the spacing scale unitless: `sm` 5.5, `md` 12, `base` 16, `lg` 20, `xl` 24. Those figures appear in the component and layout bodies as `5.5px 12px` badge padding, `12px 24px` button padding, and `0px 20px` nav padding. The inset-card padding `52px 80px` recorded in §5 and on the news/feature card sits outside that scale and is kept as its own figure.

### Shape

The source records the radius scale unitless: `sm` 8, `md` 20, `lg` 36, `full` 9999. Applied in the body as 36px on pill buttons and tags, 20px on cards (§1, §5, §7) and on the news/feature card, and 8px on the standard content card and on images/thumbnails (§7).

Treating 36px pills, 20px cards, and 8px images as the whole radius vocabulary of these corporate pages — rather than a universal scale for every unlisted surface — is a derived editorial implementation inference from the verified surfaces; it is not Devsisters-authored or a separately published UI specification. The source also records the standard content card at 8px radius while the news/feature card is 20px; both figures are kept and are not merged.

### Elevation

- **Card hover lift:** `transition: transform 0.3s ease-out, box-shadow 0.3s ease-out` — cards translate up slightly on hover.
- **Image card overlay:** `linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 60%)` at `opacity: 0.5` by default, removing on hover for reveal.
- **Mobile nav overlay:** full-screen orange drawer translates in with `transform: translate(100%, 0)` → `translate(0, 0)`.

The following elevation reading is a derived editorial implementation inference from the verified surfaces; it is not Devsisters-authored or a separately published UI specification. No heavy drop shadows are recorded across the system — elevation is conveyed through colour contrast (orange vs. white) and border radius rather than shadows.

### Motion

Source-stated duration scale:

| Duration | Role |
|---|---|
| `0.2s` | micro-interactions: button colour/fill transitions, tag hover, icon fill changes |
| `0.3s` | moderate: nav background transition on scroll, card hover lift |
| `0.4–0.5s` | moderate-slow: CTA arrow transforms, mobile nav translate-in |
| `0.6s` | slow: accordion expand/collapse (`max-height` transitions) |
| `0.8s` | content reveal: section entrance animations (opacity + transform) |
| `1.0–1.2s` | very slow: hero element staggered entrances |

Source-stated easing tokens. These come from source §15, whose evidence class is the same `prose-derived` extraction as the rest of the document, and the source's Tier 1 list names the site's inline CSS and CSS bundle. The character notes in the third column are the source's own parenthetical descriptions in §15 (`easeOutCirc feel; overshoots slightly, settles softly`, `fast-out, slow-in; snappy close/open`, `spring-like deceleration`), carried through as recorded rather than composed here. As qualitative readings of how each curve behaves they are a derived editorial implementation inference from the verified surfaces; they are not Devsisters-authored or a separately published UI specification, and they do not carry the evidence class of the curve values they annotate.

| Token | Use | Character note |
|---|---|---|
| `linear` | colour/fill/opacity micro-transitions (`color 0.2s linear`, `background 0.2s linear` on interactive elements) | — |
| `ease-out` | card hover lift, opacity fade-outs (`0.3s ease-out`) | — |
| `cubic-bezier(0.075, 0.82, 0.165, 1)` | primary content reveal | easeOutCirc feel; overshoots slightly, settles softly |
| `cubic-bezier(0.83, 0, 0.17, 1)` | accordion snap | fast-out, slow-in; snappy close/open |
| `cubic-bezier(0.22, 1, 0.36, 1)` | nav max-height expand | spring-like deceleration |
| `cubic-bezier(0.61, 1, 0.88, 1)` | background colour transitions on nav state changes | — |

Source-stated motion rules. The first rule below is prescriptive and evaluative — requiring a cubic-bezier easing for layout-affecting properties, and reading linear layout animation as mechanical, is a derived editorial implementation inference from the verified surfaces; it is not Devsisters-authored or a separately published UI specification. The remaining two rules record the source's observed entrance behavior and its reduced-motion instruction.

- Never animate layout-affecting properties (width, height) without a cubic-bezier easing — linear layout animation reads as mechanical.
- Content entrance animations trigger on scroll intersection; they do not replay on re-scroll.
- Reduced motion: the source records no `prefers-reduced-motion` query in the material it inspected, and instructs treating all motion as decorative and ensuring content is fully readable without it. No reduced-motion token is promoted beyond that instruction.

Promotion gate. Do not promote any further easing curve, animation name, transition property, duration, or reduced-motion behavior beyond the values recorded above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or a single duration is not that gate.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not Devsisters-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Live surface-use | The source's Tier 1 list names the homepage HTML plus inline CSS and the `_next` CSS bundle as the material behind the type rules below. Extraction remains `prose-derived`. |
| Declared `@font-face` | `Pretendard` is registered at Black → ExtraLight across nine weight steps via `@font-face`. |
| Fallback stack (declared only) | `Dotum,돋움,굴림,arial` is the declared fallback for both the display and the body face. It is a fallback, never the brand face. |
| Catalog family record | `tokens.typography.family` records `sans: Pretendard` and `mono: Pretendard`. §3 names `azo-sans-web` as the English display face and `Pretendard` as the Korean body/UI face. Both source figures are kept; they are not merged, and the `mono` slot repeats `Pretendard` rather than naming a distinct monospace face. |

### Family

- **Display / English headings:** `azo-sans-web`, fallback `Dotum,돋움,굴림,arial`; weights 900 (H1), 800 (H2/CTA labels), 700 (H3). All-caps treatment for nav and section labels (`text-transform: uppercase`).
- **Body / Korean UI:** `Pretendard`, fallback `Dotum,돋움,굴림,arial`; weights 500 (body), 600 (subheadings), 700 (emphasis).

The following font-use boundary is a derived editorial implementation inference from the verified surfaces; it is not Devsisters-authored or a separately published UI specification. Do not present `Dotum,돋움,굴림,arial` or a system stack as `azo-sans-web` or `Pretendard`. An officially known but unavailable face keeps its metadata and loses only a live specimen.

### Type roles

Sizes are the unitless figures the source records in `tokens.typography`; §3 states the same scale in prose as 32 px (H1 desktop), 24 px (H2), 18 px (H3), 14 px (body-sm), with a base body size of 16 px and a UI label size of 14 px, and the body face is also stated as `Pretendard` weight 500 at size `16px`.

| Role | Font | Size | Weight | Line height | Tracking | Use |
|---|---|---:|---:|---:|---|---|
| H1 | azo-sans-web | 32 | 900 | — | `0.01em` on uppercase display copy | English display H1, all-caps azo-sans-web |
| H2 | azo-sans-web | 24 | 800 | — | `0.01em` on uppercase display copy | H2 / CTA labels |
| H3 | azo-sans-web | 18 | 700 | — | — | H3 subheadings |
| Body | Pretendard | 16 | 500 | 1.5 | — | Pretendard Korean body |
| Label | Pretendard | 14 | 500 | — | — | Nav links, footer items |
| Hero numerals | — | — | — | — | `letter-spacing: -0.56px` | Large-format hero numerals |

No italic usage is recorded across any brand-owned surface in this source.

### Assets

The catalog-boundary reading in the first bullet below is a derived editorial implementation inference from the verified surfaces; it is not Devsisters-authored or a separately published UI specification. The slug itself, the `/resource` page, and the overlay gradient are source-stated.

- Catalog `logo` is recorded as a favicon slug: `https://www.google.com/s2/favicons?domain=devsisters.com&sz=256`. That is a third-party favicon proxy URL held as catalog identity metadata; it is not a first-party distributed Devsisters brand asset, and it is not promoted to one here.
- The `/resource` page (`https://www.devsisters.com/resource`) is named in the source as the brand resource page.
- Hero image cards carry the overlay gradient recorded in Elevation.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here in full:

| State | Treatment |
|---|---|
| Empty | No-content zones (e.g., empty game roster tab) render a white card with a `#DCDCDC` border and centre-aligned `#666666` label; no placeholder animation. |
| Loading | Content sections use opacity-based fade-in (`opacity 0.8s cubic-bezier(0.075, 0.82, 0.165, 1)`) from `opacity: 0` to `opacity: 1`; images use Next.js blur placeholder (transparent colour token). |
| Error — network failure | Page degradation is graceful; the orange nav chrome and footer remain rendered from static HTML; content areas show a white card with an inline retry prompt in `#FF5F00` text. |
| Error — 404/Not Found | Inherits full orange-chrome layout; body card is white with centred content and a primary orange CTA back to homepage. |
| Success | After form submission (e.g., contact form), a white card with `#FF5F00` border-top accent and a checkmark icon in `#FF5F00` confirms the action. |
| Skeleton loading | Image cards display a `border-radius: 20px` rectangle in `#F3F3F3` that fills the card area while the image loads; no animation shimmer detected (simple placeholder colour). |
| Disabled | Buttons reduce to `opacity: 0.4`; background and radius preserved; cursor changes to `not-allowed`; no colour change that could be confused with a hover state. |

The following applicability note, the kind-omission paragraph after it, and the state maps below them are a derived editorial implementation inference from the verified surfaces; they are not Devsisters-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value for that same canonical state. Absence of an observation is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind, and stay omitted at the field boundary where this packet records no behavior for that control. This is not a complete state-coverage claim.

Mobile Nav Drawer, Standard Card, News/Feature Card, and Tag Badge each carry geometry plus one observed treatment or named variant, and no interactive-kind evidence for the element itself; their `Kind` and state-applicability map are omitted rather than decided. The `Disabled` row above is documented for buttons generally: `opacity: 0.4`, `cursor: not-allowed`, geometry preserved.

### Orange Primary (Primary CTA Button)

- Role: primary orange CTA
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#FF5F00`
- Text: `#FFFFFF`
- Border: none
- Radius: 36px
- Padding: 12px 24px
- Height: 48px
- Font: azo-sans-web / 800

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the orange primary CTA |
| hover | applicable | Pointer-web button; `color 0.2s linear, background 0.2s linear` is the recorded transition, and no hover fill value is held for this control |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Documented for buttons: `opacity: 0.4`, `cursor: not-allowed`, geometry preserved |

Loading, error, and success applicability are omitted. The source names this control as a CTA and holds request and outcome behavior only at page level (the network-failure, 404, and form-success cards above), so those three fields stay omitted at this boundary rather than closed against those page states.

### Black Secondary (Primary CTA Button)

- Role: black secondary pill button, used when an alternative to orange is needed on white backgrounds
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#000000`
- Text: `#FFFFFF`
- Border: none
- Radius: 36px
- Padding: 12px 24px
- Height: 48px
- Font: azo-sans-web / 800

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the black secondary pill button |
| hover | applicable | Pointer-web button; `color 0.2s linear, background 0.2s linear` is the recorded transition, and no hover fill value is held for this control |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Documented for buttons: `opacity: 0.4`, `cursor: not-allowed`, geometry preserved |

Loading, error, and success applicability are omitted, on the same page-level grounds as the orange primary.

### Top Nav

- Role: top navigation bar; sticky orange chrome that persists while scrolling
- Kind: interactive
- Type: tab
- Anatomy: bar with all-caps nav links
- Background: `#FF5F00`
- Text: `#FFFFFF`
- Height: 48px
- Padding: 0px 20px
- Font: azo-sans-web / 800
- Position: `position: sticky; top: 0; z-index: 2`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the resting orange nav chrome |
| hover | applicable | `#FF8200` is the recorded hover/active tint on the nav border |
| focus-visible | applicable | Interactive control; visual treatment omitted |

Additional observed named state: active — the same `#FF8200` border tint covers hover and active in the source, which does not separate them.

Disabled, loading, error, and success applicability are omitted. The source records the bar's chrome and its border tint, and does not resolve whether the interactive unit is the bar or the individual nav link, so those four fields stay omitted at this boundary rather than decided for an unresolved control unit.

### Mobile Nav Drawer

- Role: full-screen mobile navigation drawer
- Kind: omitted. The source records the drawer's fill and its translate-in overlay, and no interactive-kind evidence for the surface itself, so no `Kind` confirmation and no §4.4 state-applicability map are declared.
- Background: `#FF5F00`
- Text: `#FFFFFF`
- Border: none
- Observed treatment: translates in with `transform: translate(100%, 0)` → `translate(0, 0)`

### Standard Card

- Role: standard content card
- Type: card
- Kind: omitted. The source records default geometry and a hover treatment on the card surface, and no interactive-kind evidence for the card as a control, so no `Kind` confirmation and no §4.4 state-applicability map are declared.
- Background: `#FFFFFF`
- Border: 1px solid `#DCDCDC`
- Radius: 8px
- Observed treatment: hover lift — `transition: transform 0.3s ease-out, box-shadow 0.3s ease-out`; the card translates up slightly on hover

### News/Feature Card

- Role: news / feature card
- Type: card
- Kind: omitted. The source records default geometry and the image-overlay treatment, and no interactive-kind evidence for the card as a control, so no `Kind` confirmation and no §4.4 state-applicability map are declared.
- Background: `#FFFFFF`
- Radius: 20px
- Padding: 52px 80px
- Observed treatment: hero image cards carry `linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 60%)` at `opacity: 0.5`, removing on hover for reveal

### Tag Badge

- Role: accent tag badge / highlight chip
- Type: badge
- Kind: omitted. The source records two fills for this element and no interactive-kind evidence for it, so no `Kind` confirmation and no §4.4 state-applicability map are declared.
- Background: `#FFCE00`
- Text: `#000000`
- Radius: 36px
- Padding: 5.5px 12px
- Additional observed named state: active — background `#FF5F00`, text `#FFFFFF`, radius 36px

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- **Full-bleed orange chrome:** nav (48 px) and footer share the `#FF5F00` background, creating a colour-wrapped container around all page content.
- **Card grid:** news and game cards use a fluid multi-column grid; cards have `border-radius: 20px` and a subtle overlay gradient (`rgba(0,0,0,0.6)→rgba(0,0,0,0)`) for hero image cards.
- **Max-width centred content:** content sections are horizontally centred with symmetric horizontal padding; desktop padding expands to `52px 80px` for inset cards.
- **Section rhythm:** alternating white and orange sections create a visual beat; each section is `position: relative` with generous vertical padding (~11–22 vw on mobile).
- **Sticky nav:** the top bar is `position: sticky; top: 0; z-index: 2` so the orange anchor persists while scrolling.

| Breakpoint | Width | Key changes |
|---|---|---|
| Mobile | < 720 px | Single-column card grid; font sizes shift to vw-based scaling (e.g., `3.6vw` display, `3.3vw` body) |
| Tablet | ≥ 720 px | Two-column grids; nav switches from hamburger drawer to inline links; button radius locks to `36px` |
| Desktop | ≥ 1024 px | Full multi-column layouts; font sizes resolve to fixed px values (32 px H1, 18 px H3, 14 px label); nav padding fixed at `20px` |
| Large desktop | ≥ 1280 px | Content max-width caps; nav padding stays `20px`; images use `w=3840` srcset |

At all breakpoints the orange nav and footer remain full-bleed, and button height stays 48 px on tablet and desktop.

Treating these figures as the source's own desktop-and-mobile measurements, rather than a claim that every unlisted surface shares them, is a derived editorial implementation inference from the verified surfaces; it is not Devsisters-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Brand register recorded by the source: energetic, global, warm-direct. Three adjectives: **Joyful · Brave · Essential**. The mission line "We Create a Joyful World — in more places, for more people, for longer." is brand-published (§11).

| Do | Don't |
|---|---|
| Speak with conviction and warmth ("세상을 즐겁게") | Use hedged, corporate language ("we aim to try to") |
| Lead with action verbs ("Run Brave", "Create", "Build") | Bury the point in qualifiers |
| Address a global audience without losing Korean warmth | Over-localize to a single market in global copy |
| Keep sentences short and declarative | Write multi-clause academic sentences |

The copy-pattern table above is the source's own voice guidance, and reading it as a voice contract for these corporate pages is a derived editorial implementation inference from the verified surfaces; it is not Devsisters-authored or a separately published UI specification.

The three lines below carry the source's own `Illustrative` marker. They are sample sentences written to demonstrate the register, not observed product copy and not brand-published UI strings:

- *Illustrative:* "We don't settle for experiences that fade. We build worlds people live inside."
- *Illustrative:* "In a market that gets harder every day, running brave isn't a slogan — it's how we survive."
- *Illustrative:* "세상을 즐겁게. 더 넓은 곳에서, 더 많은 사람들에게, 더 오랜 시간 동안." (Make the world joyful. In more places, for more people, for longer.)

Locale behavior. The corporate pages run Korean and English side by side: `azo-sans-web` carries Latin/English display, `Pretendard` carries Korean body and UI, and the source instructs that every typographic hierarchy work in both and that layout padding accommodate longer Korean strings without breaking. That instruction is a derived editorial implementation inference from the verified surfaces; it is not Devsisters-authored or a separately published UI specification.

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

- `focus-visible` visual treatments for every declared control
- hover fill values for the orange primary and black secondary buttons
- the nav's interactive unit — whether the bar or the individual link is the control
- per-component computed motion evidence of all five kinds (transition properties, animation name, duration, easing, reduced-motion behavior)
- `prefers-reduced-motion` behavior, which the source records as absent from the material it inspected
- a monospace face distinct from `Pretendard`, which the catalog `mono` slot repeats

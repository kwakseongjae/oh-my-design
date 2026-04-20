---
omd: 0.1
brand: SpaceX
---

# Design System Inspiration of SpaceX

## 1. Visual Theme & Atmosphere

SpaceX's website is a full-screen cinematic experience that treats aerospace engineering like a film — every section is a scene, every photograph is a frame, and the interface disappears entirely behind the imagery. The design is pure black (`#000000`) with photography of rockets, space, and planets occupying 100% of the viewport. Text overlays sit directly on these photographs with no background panels, cards, or containers — just type on image, bold and unapologetic.

The typography system uses D-DIN, an industrial geometric typeface with DIN heritage (the German industrial standard). The defining characteristic is that virtually ALL text is uppercase with positive letter-spacing (0.96px–1.17px), creating a military/aerospace labeling system where every word feels stenciled onto a spacecraft hull. D-DIN-Bold at 48px with uppercase and 0.96px tracking for the hero creates headlines that feel like mission briefing titles. Even body text at 16px maintains the uppercase/tracked treatment at smaller scales.

What makes SpaceX distinctive is its radical minimalism: no shadows, no borders (except one ghost button border at `rgba(240,240,250,0.35)`), no color (only black and a spectral near-white `#f0f0fa`), no cards, no grids. The only visual element is photography + text. The ghost button with `rgba(240,240,250,0.1)` background and 32px radius is the sole interactive element — barely visible, floating over the imagery like a heads-up display. This isn't a design system in the traditional sense — it's a photographic exhibition with a type system and a single button.

**Key Characteristics:**
- Pure black canvas with full-viewport cinematic photography — the interface is invisible
- D-DIN / D-DIN-Bold — industrial DIN-heritage typeface
- Universal uppercase + positive letter-spacing (0.96px–1.17px) — aerospace stencil aesthetic
- Near-white spectral text (`#f0f0fa`) — not pure white, a slight blue-violet tint
- Zero shadows, zero cards, zero containers — text on image only
- Single ghost button: `rgba(240,240,250,0.1)` background with spectral border
- Full-viewport sections — each section is a cinematic "scene"
- No decorative elements — every pixel serves the photography

## 2. Color Palette & Roles

### Primary
- **Space Black** (`#000000`): Page background, the void of space — at 50% opacity for overlay gradient
- **Spectral White** (`#f0f0fa`): Text color — not pure white, a slight blue-violet tint that mimics starlight

### Interactive
- **Ghost Surface** (`rgba(240, 240, 250, 0.1)`): Button background — nearly invisible, 10% opacity
- **Ghost Border** (`rgba(240, 240, 250, 0.35)`): Button border — spectral, 35% opacity
- **Hover White** (`var(--white-100)`): Link hover state — full spectral white

### Gradient
- **Dark Overlay** (`rgba(0, 0, 0, 0.5)`): Gradient overlay on photographs to ensure text legibility

### Resolved Surface Tints
The rgba overlays above resolve to these effective hex values when composited on the black canvas:
- **Ghost Surface Resolved** (`#1a1a1f`): `rgba(240, 240, 250, 0.1)` over `#000000`.
- **Ghost Border Resolved** (`#56565b`): `rgba(240, 240, 250, 0.35)` over `#000000`.
- **Photo-overlay Resolved** (`#0d0d0d`): Effective tone after the 50% black overlay on hero photography.

### Mission Status & Live-Indicator Accents
Used sparingly in countdown and launch-status modules:
- **Active Red** (`#cc0000`): Live transmission indicator, "active mission" status.
- **Status Amber** (`#f5a623`): Pre-launch / hold status, secondary warnings.

## 3. Typography Rules

### Font Families
- **Display**: `D-DIN-Bold` — bold industrial geometric
- **Body / UI**: `D-DIN`, fallbacks: `Arial, Verdana`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | D-DIN-Bold | 48px (3.00rem) | 700 | 1.00 (tight) | 0.96px | `text-transform: uppercase` |
| Body | D-DIN | 16px (1.00rem) | 400 | 1.50–1.70 | normal | Standard reading text |
| Nav Link Bold | D-DIN | 13px (0.81rem) | 700 | 0.94 (tight) | 1.17px | `text-transform: uppercase` |
| Nav Link | D-DIN | 12px (0.75rem) | 400 | 2.00 (relaxed) | normal | `text-transform: uppercase` |
| Caption Bold | D-DIN | 13px (0.81rem) | 700 | 0.94 (tight) | 1.17px | `text-transform: uppercase` |
| Caption | D-DIN | 12px (0.75rem) | 400 | 1.00 (tight) | normal | `text-transform: uppercase` |
| Micro | D-DIN | 10px (0.63rem) | 400 | 0.94 (tight) | 1px | `text-transform: uppercase` |

### Principles
- **Universal uppercase**: Nearly every text element uses `text-transform: uppercase`. This creates a systematic military/aerospace voice where all communication feels like official documentation.
- **Positive letter-spacing as identity**: 0.96px on display, 1.17px on nav — the wide tracking creates the stenciled, industrial feel that connects to DIN's heritage as a German engineering standard.
- **Two weights, strict hierarchy**: D-DIN-Bold (700) for headlines and nav emphasis, D-DIN (400) for body. No medium or semibold weights exist in the system.
- **Tight line-heights**: 0.94–1.00 across most text — compressed, efficient, mission-critical communication.

## 4. Component Stylings

### Buttons

**Ghost Button**
- Background: `rgba(240, 240, 250, 0.1)` (barely visible)
- Text: Spectral White (`#f0f0fa`)
- Padding: 18px
- Radius: 32px
- Border: `1px solid rgba(240, 240, 250, 0.35)`
- Hover: background brightens, text to `var(--white-100)`
- Use: The only button variant — "LEARN MORE" CTAs on photography

### Cards & Containers
- **None.** SpaceX does not use cards, panels, or containers. All content is text directly on full-viewport photographs. The absence of containers IS the design.

### Inputs & Forms
- Not present on the homepage. The site is purely presentational.

### Navigation
- Transparent overlay nav on photography
- D-DIN 13px weight 700, uppercase, 1.17px tracking
- Spectral white text on dark imagery
- Logo: SpaceX wordmark at 147x19px
- Mobile: hamburger collapse

### Image Treatment
- Full-viewport (100vh) photography sections
- Professional aerospace photography: rockets, Mars, space
- Dark gradient overlays (`rgba(0,0,0,0.5)`) for text legibility
- Each section = one full-screen photograph with text overlay
- No border radius, no frames — edge-to-edge imagery

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 3px, 5px, 12px, 15px, 18px, 20px, 24px, 30px
- Minimal scale — spacing is not the organizing principle; photography is

### Grid & Container
- No traditional grid — each section is a full-viewport cinematic frame
- Text is positioned absolutely or with generous padding over imagery
- Left-aligned text blocks on photography backgrounds
- No max-width container — content bleeds to viewport edges

### Whitespace Philosophy
- **Photography IS the whitespace**: Empty space in the design is never empty — it's filled with the dark expanse of space, the curve of a planet, or the flame of a rocket engine. Traditional whitespace concepts don't apply.
- **Vertical pacing through viewport**: Each section is exactly one viewport tall, creating a rhythmic scroll where each "page" reveals a new scene.

### Border Radius Scale
- Sharp (4px): Small dividers, utility elements
- Button (32px): Ghost buttons — the only rounded element

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Photography (Level 0) | Full-viewport imagery | Background layer — always present |
| Overlay (Level 1) | `rgba(0, 0, 0, 0.5)` gradient | Text legibility layer over photography |
| Text (Level 2) | Spectral white text, no shadow | Content layer — text floats directly on image |
| Ghost (Level 3) | `rgba(240, 240, 250, 0.1)` surface | Barely-visible interactive layer |

**Shadow Philosophy**: SpaceX uses ZERO shadows. In a design built entirely on photography, shadows are meaningless — every surface is already a photograph with natural lighting. Depth comes from the photographic content itself: the receding curvature of Earth, the diminishing trail of a rocket, the atmospheric haze around Mars.

## 7. Do's and Don'ts

### Do
- Use full-viewport photography as the primary design element — every section is a scene
- Apply uppercase + positive letter-spacing to ALL text — the aerospace stencil voice
- Use D-DIN exclusively — no other fonts exist in the system
- Keep the color palette to black + spectral white (`#f0f0fa`) only
- Use ghost buttons (`rgba(240,240,250,0.1)`) as the sole interactive element
- Apply dark gradient overlays for text legibility on photographs
- Let photography carry the emotional weight — the type system is functional, not expressive

### Don't
- Don't add cards, panels, or containers — text sits directly on photography
- Don't use shadows — they have no meaning in a photographic context
- Don't introduce colors — the palette is strictly achromatic with spectral tint
- Don't use sentence case — everything is uppercase
- Don't use negative letter-spacing — all tracking is positive (0.96px–1.17px)
- Don't reduce photography to thumbnails — every image is full-viewport
- Don't add decorative elements (icons, badges, dividers) — the design is photography + type + one button

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Stacked, reduced padding, smaller type |
| Tablet Small | 600–960px | Adjusted layout |
| Tablet | 960–1280px | Standard scaling |
| Desktop | 1280–1350px | Full layout |
| Large Desktop | 1350–1500px | Expanded |
| Ultra-wide | >1500px | Maximum viewport |

### Touch Targets
- Ghost buttons: 18px padding provides adequate touch area
- Navigation links: uppercase with generous letter-spacing aids readability

### Collapsing Strategy
- Photography: maintains full-viewport at all sizes, content reposition
- Hero text: 48px → scales down proportionally
- Navigation: horizontal → hamburger
- Text blocks: reposition but maintain overlay-on-photography pattern
- Full-viewport sections maintained on mobile

### Image Behavior
- Edge-to-edge photography at all viewport sizes
- Background-size: cover with center focus
- Dark overlay gradients adapt to content position
- No art direction changes — same photographs, responsive positioning

## 9. Agent Prompt Guide

### Quick Color Reference
- Background: Space Black (`#000000`)
- Text: Spectral White (`#f0f0fa`)
- Button background: Ghost (`rgba(240, 240, 250, 0.1)`)
- Button border: Ghost Border (`rgba(240, 240, 250, 0.35)`)
- Overlay: `rgba(0, 0, 0, 0.5)`

### Example Component Prompts
- "Create a full-viewport hero: background-image covering 100vh, dark gradient overlay rgba(0,0,0,0.5). Headline at 48px D-DIN-Bold, uppercase, letter-spacing 0.96px, spectral white (#f0f0fa) text. Ghost CTA button: rgba(240,240,250,0.1) bg, 1px solid rgba(240,240,250,0.35) border, 32px radius, 18px padding."
- "Design a navigation: transparent over photography. D-DIN 13px weight 700, uppercase, letter-spacing 1.17px, spectral white text. SpaceX wordmark left-aligned."
- "Build a content section: full-viewport height, background photography with dark overlay. Left-aligned text block with 48px D-DIN-Bold uppercase heading, 16px D-DIN body text, and ghost button below."
- "Create a micro label: D-DIN 10px, uppercase, letter-spacing 1px, spectral white, line-height 0.94."

### Iteration Guide
1. Start with photography — the image IS the design
2. All text is uppercase with positive letter-spacing — no exceptions
3. Only two colors: black and spectral white (#f0f0fa)
4. Ghost buttons are the only interactive element — transparent, spectral-bordered
5. Zero shadows, zero cards, zero decorative elements
6. Every section is full-viewport (100vh) — cinematic pacing

---

## 10. Voice & Tone

SpaceX speaks in the voice of aerospace-grade documentation: declarative, technical, and unsentimental. Sentences are engineered — every clause carries either a verified capability, a measured dimension, or a mission objective. The register is closer to a NASA press release than a consumer tech product page. Marketing flourishes, metaphor, and emotional softening are absent; the weight of the achievement is expected to speak for itself. Headlines are uppercase single-line titles; body copy is plain, past-tense when describing milestones, and future-tense only when tied to a specific vehicle program.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, all-caps, mission-forward. "MAKING HUMANITY MULTIPLANETARY", "MAKING HISTORY". No superlatives beyond factual firsts. |
| Program descriptions | Capability + number + destination. "Starship is the world's most powerful launch vehicle ever developed, capable of carrying up to 150 metric tonnes fully reusable." |
| Vehicle specs | Pure data. Height / diameter / thrust / payload capacity in SI + imperial, no prose around the numbers. |
| Mission milestones | Past-tense, dated, factual. "On December 21, 2015, the Falcon 9 rocket delivered 11 communications satellites to orbit..." |
| CTAs / Buttons | Uppercase verb + noun. "LEARN MORE", "EXPLORE", "RESERVE YOUR RIDE", "JOIN A MISSION", "ORDER NOW". No emoji. No exclamation. |
| Founder / mission quotes | Verbatim, attributed, em-dash before speaker. Used once per surface, never recycled. |
| Error / empty (presumed, not on public surface) | Single declarative line. No apology theatre, no illustrations — consistent with the rest of the site's zero-decoration stance. |
| Legal / supplier / careers links | Single noun, uppercase footer item. "CAREERS · UPDATES · PRIVACY POLICY · SUPPLIERS". |

**Voice samples.**

- *"SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets."* <!-- verified: https://www.spacex.com/mission/ (meta description served in HTML), 2026-04 -->
- *"MAKING HUMANITY MULTIPLANETARY"* (hero headline, Mission page) <!-- verified: https://www.spacex.com/mission/, 2026-04 -->
- *"SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not."* (Human Spaceflight page lede) <!-- verified: https://www.spacex.com/human-spaceflight/, 2026-04 -->
- *"LEARN MORE ABOUT STARSHIP"* (primary CTA on Mission page) <!-- verified: https://www.spacex.com/mission/, 2026-04 -->
- *"SpaceX's Starship spacecraft and Super Heavy rocket - collectively referred to as Starship - represent a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars and beyond."* <!-- verified: https://www.spacex.com/vehicles/starship/, 2026-04 -->
- Empty / no-results (illustrative): *"NO RESULTS."* — one line, uppercase, Spectral White on Space Black, no illustration. <!-- illustrative: not verified as live SpaceX copy -->

**Forbidden phrases.** "Revolutionary" (as a marketing adjective — the word "revolutionize" is used once in the corporate meta description for the space-technology category, but not applied to individual features), "game-changing", "next-gen" as a product name, "empower", "unleash", "epic", "insane", any exclamation on a CTA, any emoji anywhere (🚀 is specifically forbidden — SpaceX never uses a rocket emoji to refer to its own rockets), sentence-case headlines on hero surfaces, hedging modifiers like "arguably" or "one of the most" on quantified claims (state the number or drop the claim).

## 11. Brand Narrative

SpaceX was founded in 2002 as an engineering organization with an explicit, published mission: to make humanity multiplanetary. The [company's own description](https://www.spacex.com/mission/) — *"SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets."* — frames the brand as a vertically-integrated aerospace manufacturer first, a visionary project second. This is the authoritative register: the company does not speak about itself in cinematic language; its products and launch record do that work.

The [Human Spaceflight page](https://www.spacex.com/human-spaceflight/) sharpens the founding thesis in one sentence: *"SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not."* The corollary, stated on the same page, is operational: *"...developing the fully and rapidly reusable rockets necessary to transform humanity's ability to access space into something as routine as air travel."* Multi-planetary is the destination; rapid reusability is the engineering thesis that makes the destination economically tractable. The two cannot be separated in brand voice — every mission statement either names the destination (Mars, the Moon, Earth orbit) or names the reusability breakthrough (Falcon 9 first-stage return, Super Heavy chopstick catch, Starship full stack re-flight).

The brand heritage is the launch manifest, not the founder. SpaceX communicates itself through a running ledger of firsts, attested with date and vehicle: Falcon 1 reaching orbit in 2008 (*"the first privately developed liquid fuel rocket to reach Earth orbit"*), Dragon delivering cargo to the ISS in 2012, first orbital-class first-stage landing on December 21, 2015, first reflight of an orbital-class rocket on March 30, 2017, [restoring human spaceflight to the United States on May 30, 2020](https://www.spacex.com/mission/). The RUD (rapid unscheduled disassembly) culture — treating each test failure as data toward the next iteration rather than as a setback to hide — is a downstream consequence: when the mission is "make humanity multiplanetary," a Starship test article disassembling mid-flight is a legitimate datapoint, not a PR event. The brand does not apologize for failed tests; it enumerates what was learned and what the next attempt will test. <!-- source: synthesized from base DESIGN.md §1 (design ethos) + mission page copy; RUD is a widely-used SpaceX engineering term, not a DESIGN.md token -->

## 12. Principles

1. **The photograph is the product.** Every surface is a full-viewport frame of an actual rocket, actual planet, or actual mission. Renders are used only for vehicles that have not yet flown, and they are labeled as renders by context (Starship configurations, future Mars surface). *UI implication:* If a component needs a background, it is a dated mission photograph at 100vh; if no photograph is available, the component is Space Black (`#000000`) with type only — no abstract gradient or generated imagery fills the gap.
2. **Aerospace-grade precision in every numeric claim.** Dimensions are reported in SI first, imperial second. Thrust is reported with both mass-force (tf) and pound-force (Mlbf). Payload capacity distinguishes fully reusable vs expendable configurations explicitly. *UI implication:* Any numeric field renders the SI unit primary and the imperial unit secondary on the same line, separated by ` / ` — e.g. `123m / 403 ft`. Never show one unit alone.
3. **Uppercase is the default.** Navigation, headlines, CTAs, captions, and labels all render `text-transform: uppercase` with positive letter-spacing (0.96px–1.17px). The lowercase exception is long-form body paragraphs describing programs or mission history. *UI implication:* A new component's default text-transform is uppercase unless it is a body paragraph ≥2 sentences; switching to sentence case must be a conscious decision tied to reading length.
4. **Iteration culture: RUD is a design reality, not a bug.** SpaceX's engineering register treats test-flight failures as expected data collection. The brand never hides a failed flight; it publishes high-frame-rate footage and a written postmortem. *UI implication:* Status components must have a state for "test failed, data collected" that is neutral — not red-alarm, not green-celebration — styled identically to a nominal-mission state but with past-tense copy naming the specific flight and outcome.
5. **No ornament.** The design system has zero shadows, zero cards, zero borders (except one ghost button border), zero decorative icons, zero dividers, zero gradient buttons. *UI implication:* Adding any decorative element — a badge pill, a shadow, an illustration, an emoji — is a reviewable design decision, not a default. The default is always "text on photograph, or text on black."
6. **One button, one CTA per surface.** Every scene holds one ghost button (`rgba(240, 240, 250, 0.1)` background, 32px radius, spectral border). Multiple CTAs on one section is a red flag — the mission of each scene should be singular. *UI implication:* A layout that produces two visually coequal ghost buttons side-by-side must be refactored into two full-viewport sections, each with one CTA, or a single primary + a secondary text link.
7. **The mission, not the founder, is the subject.** Copy attributes achievements to the vehicle, the team, or the company — never to an individual. When founder quotes are used, they appear once, attributed, and do not carry the brand narrative alone. *UI implication:* Hero copy, press release headlines, and product descriptions must not make an individual person the grammatical subject. "SpaceX achieved...", "Falcon 9 delivered...", "Dragon docked..." are the canonical subjects.
8. **Reusability is the engineering thesis.** Every program page returns to the same claim: full, rapid reusability is what transforms space access. *UI implication:* Long-form program pages must surface a reusability data point (number of reflights, successful landings, turnaround time) in the first viewport — not buried in a spec table four scrolls down.

## 13. Personas

*Personas are fictional archetypes informed by publicly described SpaceX audiences — aerospace professionals, commercial launch customers, space enthusiasts, and mission operators — not individual people. Astronauts and flight crew are deliberately excluded: they are rare end-users, and the public-facing surfaces are built for the far larger population of engineers, buyers, and observers.*

**Alondra Vega, 31, Hawthorne, CA.** Propulsion engineer at a commercial aerospace supplier. Reads the Starship vehicles page to check the current Raptor thrust and payload-mass envelope before drafting a supplier proposal. Expects SI-first units and will lose trust in any aerospace-adjacent brand that leads with imperial or rounds metric thrust to one significant figure.

**Kenji Ikeda, 44, Yokohama.** Satellite program manager for a regional communications operator evaluating Falcon 9 and Starship as a rideshare vehicle. Reads the Mission page and the active launch manifest quarterly; treats every flight-record datapoint as a procurement input. Needs the launch cadence and landing success rate visible without clicking, because his decision timeline is measured in days.

**Dara Nwosu, 27, Lagos.** Aerospace master's student and longtime space enthusiast. Follows every Starship test flight and reads the SpaceX updates page within an hour of each launch window. Expects photography and video to load edge-to-edge on mobile and will read a three-paragraph program description in full — as long as it avoids marketing language.

**Marcus Reinhardt, 52, Munich.** Range-safety operator at a partner launch facility. Needs the vehicle specs (height, diameter, propellant mass) to cross-reference against the range's hazard envelope. Will never read the marketing copy; needs the numbers accessible within two clicks and in a format that reads cleanly when printed on A4.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no mission matches filter)** | A single D-DIN 16px line in Spectral White (`#f0f0fa`), uppercase, letter-spacing 1.17px, centered on Space Black: "NO MISSIONS MATCH." No illustration. No suggestion text. |
| **Empty (no launches this month)** | Full-viewport Space Black with one D-DIN-Bold 48px line: "NO LAUNCHES SCHEDULED." Below it, one D-DIN 12px uppercase link: "VIEW PAST MISSIONS". |
| **Loading (page shell / route transition)** | Space Black canvas. Photography fades in at `motion-slow` once the image decodes; no skeleton blocks, no spinner, no shimmer. A loading state that renders nothing is preferred to one that renders a placeholder. |
| **Loading (live launch countdown)** | The countdown clock continues to tick in D-DIN-Bold. Above it, a small D-DIN 10px uppercase label in Status Amber (`#f5a623`): "HOLD — UPDATING." No spinner. |
| **Live mission (active transmission)** | A 10px square solid Active Red (`#cc0000`) dot left of a D-DIN 12px uppercase label in Spectral White: "LIVE · [MISSION NAME]". The dot pulses at `motion-slow` opacity only — no scale animation. |
| **Error (content not found)** | Full-viewport Space Black. One D-DIN-Bold 48px uppercase line: "PAGE NOT FOUND." One D-DIN 16px line below: "RETURN TO MISSION." styled as a ghost button. No imagery. |
| **Error (form submission — supplier / careers)** | Inline below the input. D-DIN 13px uppercase in Status Amber (`#f5a623`). States the exact validation failure and the exact field. No apology. |
| **Error (test flight RUD — aerospace-specific)** | Neutral treatment: D-DIN-Bold headline names the flight and the date, body paragraph in plain-case D-DIN 16px states the objective, the outcome, and the data collected. No red alert, no apology copy, no emoji. Visually identical to a nominal-mission recap. |
| **Success (form submitted — supplier contact)** | Space Black with one D-DIN 16px uppercase line in Spectral White: "MESSAGE RECEIVED." Past tense, no exclamation, no checkmark icon. |
| **Success (launch outcome — nominal)** | Full-viewport post-launch photograph. Overlay: D-DIN-Bold uppercase mission name, D-DIN 16px body recap in past tense, date inline. One ghost button: "READ THE MISSION UPDATE". |
| **Skeleton** | Not used. SpaceX's aesthetic has no card structure to skeleton-ize; the load state is "black canvas, then photograph fades in." Skeletons with generic gray rectangles would contradict the zero-ornament principle. |
| **Disabled** | Opacity of text and ghost-button border reduced in proportion (typically 50%); Space Black background unchanged. No cursor change beyond `not-allowed`. Geometry remains stable if re-enabled. |

## 15. Motion & Easing

**Durations.**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle commits, focus rings |
| `motion-fast` | 180ms | Hover opacity shifts on ghost buttons, nav link color change |
| `motion-standard` | 320ms | Section reveals on scroll, overlay fades |
| `motion-slow` | 600ms | Full-viewport photography crossfades between scenes |
| `motion-live` | variable | Countdown tick (1Hz, driven by wall-clock, not animation frame) |

**Easings.**

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions, opacity fades, nav color changes |
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Photograph fade-in, scene reveal on scroll |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1.0, 1.0)` | Outgoing photograph fade, overlay dismissal |

**Spring / overshoot — explicitly forbidden.** No `cubic-bezier(0.34, 1.56, 0.64, 1)`, no `spring(...)`, no bounce, no overshoot anywhere in the system. SpaceX's visual register is aerospace engineering, and aerospace motion is deterministic — a Falcon 9 first stage does not "bounce" when it lands, and neither should a button. Overshoot reads as playful or sycophantic; the brand register is considered and mission-critical. A rocket landing is the most dramatic motion the brand ever shows, and that drama is carried by the photograph itself, not by an easing curve. If an interaction feels like it wants to bounce, the interaction is wrong, not the easing token.

**Signature motions.**

1. **Photograph crossfade between scenes.** On scroll or route change, the outgoing full-viewport photograph fades out over `motion-slow` using `ease-exit`, and the incoming photograph fades in over `motion-slow` using `ease-enter`. The two fades overlap by ~200ms, producing a continuous dark moment rather than a visible cut. No parallax, no Ken Burns zoom, no rotation.
2. **Ghost button hover.** Background `rgba(240, 240, 250, 0.1)` transitions to `rgba(240, 240, 250, 0.2)` over `motion-fast` using `ease-standard`. Text color holds. No scale, no lift, no shadow change.
3. **Live-indicator pulse.** The Active Red (`#cc0000`) dot on a live transmission indicator pulses opacity between 1.0 and 0.4 over a 1.2s cycle, `ease-standard` in both directions. Scale is fixed — only opacity animates.
4. **Countdown tick.** The launch countdown clock updates exactly once per second at the wall-clock boundary. No glyph animation, no flip-digit effect, no color transition between seconds. The rigidity is the point: countdowns are not entertainment, they are time.

**Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Photograph crossfades become cuts. The live-indicator pulse becomes a static full-opacity dot. The countdown tick is unaffected (wall-clock, not animation). The app stays fully functional; no aerospace drama at the cost of accessibility.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Direct verification via Playwright MCP (2026-04-20) — SpaceX is an Angular SPA,
so server-rendered HTML is empty; all copy below was captured from fully-rendered
DOM via `document.body.innerText` in a headless Chromium session:

- https://www.spacex.com/mission/ — confirms founding year (2002), mission
  statement ("revolutionize space technology, with the ultimate goal of enabling
  people to live on other planets"), the "MAKING HUMANITY MULTIPLANETARY"
  hero, the Falcon 1 / Dragon / Falcon Heavy / Crew Dragon milestone ledger
  (with dates: 2008, 2012, 2015-12-21, 2016-04-08, 2017-03-30, 2018-02-06,
  2020-05-30), the reusability thesis, and all CTA button labels
  ("LEARN MORE ABOUT STARSHIP").
- https://www.spacex.com/human-spaceflight/ — confirms the founding thesis
  sentence ("SpaceX was founded under the belief that a future where humanity
  is out exploring the stars is fundamentally more exciting than one where
  we are not"), the reusability framing ("transform humanity's ability to
  access space into something as routine as air travel"), and CTA labels
  ("EXPLORE", "LEARN MORE", "RESERVE YOUR RIDE", "JOIN A MISSION", "ORDER NOW").
- https://www.spacex.com/vehicles/starship/ — confirms the vehicle spec
  register (SI-first / imperial-second, e.g. "123m / 403 ft"), the
  Starship / Super Heavy / Raptor engine descriptions, and the payload
  capacity framing (fully reusable vs expendable).

Direct verification via curl (2026-04-20):
- https://www.spacex.com/mission/ — the HTML `<meta name="description">` tag
  ("SpaceX designs, manufactures and launches advanced rockets and spacecraft.
  The company was founded in 2002 to revolutionize space technology, with the
  ultimate goal of enabling people to live on other planets.") is served by
  the server and is the authoritative corporate one-liner.

Base DESIGN.md (sections 1–9) is the source for all token-level claims
(Space Black #000000, Spectral White #f0f0fa, D-DIN / D-DIN-Bold, ghost button
rgba(240,240,250,0.1), zero shadows / zero cards stance).

Not independently verified, treated as widely documented aerospace-industry
terminology:
- RUD (rapid unscheduled disassembly) is a long-standing engineering term
  used publicly by SpaceX in post-flight recaps; the cultural framing in §11
  and §12-4 is editorial synthesis, not a direct quote from a single page.

Personas (§13) are fictional archetypes informed by publicly described SpaceX
audiences (aerospace engineers, commercial launch procurement, space
enthusiasts, range-safety operators). Names are illustrative and do not refer
to real people.

Interpretive claims (e.g., "the brand heritage is the launch manifest, not
the founder"; "overshoot reads as playful or sycophantic; the brand register
is considered and mission-critical") are editorial readings of the design
system and the verified public copy, not documented SpaceX statements.
-->


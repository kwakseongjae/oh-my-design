# Gogoro Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Gogoro is Taiwan's electric-mobility company — the maker of the Smartscooter and the GoStation battery-swap network. This contract covers the first-party web surfaces the source actually inspected: the media-center logos page at `https://www.gogoro.com/media-center/logos/` (Tier 1 live computed-style inspection, 2026-05-19), plus the homepage at `https://www.gogoro.com` and the Smartscooter page (WebFetch the same day, for published copy). The source also names the marketing site, the GoStation map, and the Network subscription flow as surfaces the language is meant to serve; those named surfaces are not a second token-inspection pass. Every value below stays attached to the surface that established it. The boundary that stops a logos-page measurement from standing in for the map, the subscription flow, or an uninspected account screen is a derived editorial implementation inference from the verified surfaces; it is not Gogoro-authored or a separately published UI specification.

The captured interface layer is black-dominant chrome (`#000000`) with warm-neutral charcoal body text (`#323237`) on a clean off-white content surface (`#f6f6f6`). Into that grayscale the source records two chromatic accents — electric blue (`#0074ff`) and a brighter cyan (`#28c3ff`) — plus a softer filled-CTA blue (`#2b96ed`) on the header account control. Typography is led by Graphik, with `PingFang TC` and `Noto Sans TC` Traditional-Chinese fallbacks. Reading that palette as "monochrome-industrial with electric-blue voltage", reading the blue as "the spark of the battery" used the way a current runs through a circuit, and reading the page as a product photographed in a clean room rather than a "tech startup" palette of gradients and pastels, is a derived editorial implementation inference from the verified surfaces; it is not Gogoro-authored or a separately published UI specification.

The source distinguishes a dual-surface system: marketing storytelling (black, cinematic) versus network/utility flows (light, functional). The source says the design system serves a physical product and a network, not an app. The same paragraph says every named surface has to make a battery-swap kiosk feel as premium as an Apple Store and as reliable as a gas pump. That dual-surface reading, and the kiosk comparison, is a derived editorial implementation inference from the verified surfaces; it is not Gogoro-authored or a separately published UI specification.

The source's §11 narrative places the company in 2011 in Taoyuan, Taiwan, founded by Horace Luke (former Chief Innovation Officer at HTC) and Matt Taylor, with the GoStation battery-swapping network — kiosks where a rider exchanges a depleted battery for a charged one in seconds, paid for by a monthly subscription (the Gogoro Network) — as the answer to an energy-infrastructure bottleneck and the Smartscooter, first revealed at CES 2015, as the object built to prove the network. By April 2021 the Taiwan network counted 370,000 riders and had managed over 175 million battery swaps (≈265,000 per day) across 2,000 GoStations; the company expanded into Asia, the Middle East, and Latin America, licensing the battery network to Yamaha, Aeon Motor, and Hero MotoCorp, and went public on Nasdaq in 2022. In December 2020, Frost & Sullivan named Gogoro Global Company of the Year for the swappable-battery electric-scooter market. The homepage WebFetch the same pass records a later public figure: 524,000+ riders / 7 billion km. Those two numeric sets stay attached to their sources; they are not merged. Official history and Wikipedia-via-WebFetch provide that narrative context; they do not by themselves supply interface tokens. Reading the black-dominant, photography-led, Graphik-set system as making the Smartscooter feel as considered as a flagship phone, and reading the electric-blue/cyan accent as the visual signature of the battery coming alive, is a derived editorial implementation inference from the verified surfaces; it is not Gogoro-authored or a separately published UI specification. What the source says Gogoro refuses: the toy-like pastel aesthetics of micro-mobility startups, the gas-station grime of legacy refueling, and any design that treats the battery network as plumbing rather than product.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

These three come from the modules and labels the source records on the captured marketing pages. They do not come from the source's persona section, which the source itself marks as fictional archetypes. Reading those modules and labels as the primary tasks a person comes to these surfaces to perform is a derived editorial implementation inference from the verified surfaces; it is not Gogoro-authored or a separately published UI specification.

- Evaluate the Smartscooter on the homepage and the Smartscooter page (`Ride Smarter. Refuel in seconds.`, `A ride like no other.`).
- Act on a marketing CTA (`LEARN MORE`, `DISCOVER MORE`) or open account / join (`로그인 및 회원가입`).
- Act on the named network CTA `Find a GoStation`. The source names the GoStation map as a surface the language serves; the map itself was not the live computed-style pass.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source's three persona entries are self-declared fictional archetypes informed by publicly described Gogoro user segments, so they are dropped here rather than restated or moved to a sidecar; their names, ages, cities, and biographies appear in neither output. At group level the source names Taiwanese urban commuters and the licensed-partner ecosystem. Reading that pair as the audience constraint for these surfaces is a derived editorial implementation inference from the verified surfaces; it is not Gogoro-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. Where a bullet characterizes a value rather than stating it — "the matte-machine canvas", "the spark of the battery", "engineered restraint", "dual-surface system" — that reading is a derived editorial implementation inference from the verified surfaces; it is not Gogoro-authored or a separately published UI specification.

- **Graphik** as the brand typeface, with `PingFang TC` / `Noto Sans TC` Traditional-Chinese fallbacks (live-verified font stack)
- **Black-dominant chrome** (`#000000`) — the matte-machine canvas; the product is the hero, the UI is the frame
- Warm charcoal body text (`#323237`) rather than pure black — softer for long reads on white
- **Electric blue (`#0074ff`) + cyan (`#28c3ff`)** as the only chromatic accents — "the spark of the battery," used sparingly
- Clean off-white surface (`#f6f6f6`) for content sections that break out of the black chrome
- Full-bleed product photography / video — the Smartscooter shown in motion or studio light
- Premium-industrial register: precise letterspacing, weight-driven hierarchy, engineered restraint
- Generous radius on interactive controls (`12px` on primary buttons, observed live)
- Dual-surface system: marketing storytelling (black, cinematic) vs. network/utility flows (light, functional)
- Neutral gray scale (`#737d82`, `#b9bcbf`, `#888`) for metadata, captions, and disabled chrome

### Principles

These six items are a derived editorial implementation inference from the verified surfaces; they are not Gogoro-authored or a separately published UI specification.

1. **The product is the hero; the UI is the chassis.** Marketing surfaces recede into black so the Smartscooter can carry the page. *UI implication:* Default hero background to `#000000` with full-bleed product media; keep chrome minimal and let one headline + one CTA do the work. Don't decorate around the product.
2. **Blue is current, not color.** Electric blue (`#0074ff`) and cyan (`#28c3ff`) are rationed to energy moments — links, active states, battery/charge graphics. *UI implication:* If a surface has more than ~10% blue area, you're overspending the voltage. Use grayscale for structure; reserve blue for where energy is literally or interactively present.
3. **Numbers are the argument.** Range, swap-time, station count, kilometers traveled — Gogoro proves claims with metrics, not adjectives. *UI implication:* Render hero statistics large and bold (`36px+`/700). Never pair a numeric claim with hype copy; the number is the persuasion.
4. **The network must feel as reliable as a gas pump.** GoStation UI is utility, not marketing — accuracy and legibility over flourish. *UI implication:* Station/battery-availability states must be unambiguous and live-accurate; use the charge palette consistently; never animate availability in a way that implies a state that isn't real.
5. **Engineered restraint.** Graphik, tight letterspacing, soft 12px radii, flat surfaces with luminous accents — everything reads as designed by engineers with taste. *UI implication:* Prefer value-step layering over heavy shadows; keep one radius system; let typography weight (not size inflation) carry hierarchy.
6. **Two languages, both native.** English and Traditional Chinese are authored in parallel as first-class voices. *UI implication:* Never machine-translate one from the other; keep the Graphik + `PingFang TC` / `Noto Sans TC` stack so both render with equal care. Simplified Chinese is never acceptable on TW surfaces.

### Application rules

The source's §7 Do list, kept as brand rules rather than as universal governance. Grouping them as application rules for the captured surfaces, and the rationale each one gives, is a derived editorial implementation inference from the verified surfaces; it is not Gogoro-authored or a separately published UI specification.

- Keep black (`#000000`) as the dominant canvas on marketing surfaces. The product is the hero; the UI recedes.
- Reserve electric blue (`#0074ff`) and cyan (`#28c3ff`) for energy moments — links, active states, charge/battery graphics.
- Use Graphik with the TC fallback stack. The engineered grotesque is the brand's typographic signature.
- Use `12px` radius on interactive controls and `50%` on icon buttons (live-observed).
- Let product photography go full-bleed and cinematic; show the Smartscooter in motion or studio light.
- Use Traditional Chinese (`網路`, `電池`, `里程`) on TW surfaces; never Simplified.

### Avoid

The source's §7 Don't list. The reason each one gives — competing accents breaking the "single current" metaphor, Graphik's geometry as load-bearing, the soft radius as part of the premium-tactile feel, the network as the product's beating heart — is a derived editorial implementation inference from the verified surfaces; it is not Gogoro-authored or a separately published UI specification. The final line restates this contract's scope boundary as a prohibition and carries the same qualification.

- Don't introduce competing accent colors. Electric blue and cyan are the only chromatic voices — adding green/orange/purple breaks the "single current" metaphor.
- Don't flood a layout with blue. The voltage reads as voltage only because it's rationed against grayscale.
- Don't substitute a generic system sans for headlines — Graphik's geometry is load-bearing.
- Don't use sharp 0px corners on CTAs — the soft radius is part of the premium-tactile feel.
- Don't clutter hero sections with multiple CTAs — one primary, optionally one secondary.
- Don't treat the GoStation network UI as decoration — it's the product's beating heart; station/battery states must be accurate and legible.
- Don't present a logos-page or homepage value as evidence for a Gogoro surface this capture did not reach.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Where a line also characterizes a value — "the matte-machine canvas", "the current color", "the spark of the battery" — that characterization is a derived editorial implementation inference from the verified surfaces; it is not Gogoro-authored or a separately published UI specification.

Brand / Chrome

- **Pure Black** (`#000000`): The primary brand color and dominant chrome. Page headers, footers, hero backgrounds, the matte-machine canvas. Token-set key `canvas`.
- **Charcoal** (`#323237`): `rgb(50, 50, 55)` — the dominant text color (live: 194 occurrences). Warm near-black for body copy and headings on light surfaces. Token-set key `text`.
- **Ink** (`#141719` / `#101418`): Near-black section backgrounds, slightly lifted off pure black for layering dark-on-dark surfaces. Token-set key `ink` records `#141719` only; `#101418` is the source's alternate spelling in the same role.

Accent (Voltage)

- **Electric Blue** (`#0074ff`): `rgb(0, 116, 255)` — the primary accent. Links, active states, focus rings, key inline highlights. The "current" color. Token-set key `accent`. Live: 11 occurrences on the logos page.
- **Cyan Spark** (`#28c3ff`): `rgb(40, 195, 255)` — brighter secondary accent. Battery/charge indicators, energy graphics, hover lift on blue elements. Token-set key `cyan`.
- **CTA Blue** (`#2b96ed`): `rgb(43, 150, 237)` — a softer mid-blue observed on primary action buttons; the interactive-blue used when a filled CTA needs a slightly calmer tone than pure electric blue. Token-set key `cta`.

Surface & Neutral

- **Off-White** (`#f6f6f6`): `rgb(246, 246, 246)` — default light content surface; the clean-room background for product sections. Token-set key `surface`.
- **Pure White** (`#ffffff`): Cards, modals, inverted surfaces, button text on dark. Token-set key `on-dark`.
- **Gray Mid** (`#737d82`): `rgb(115, 125, 130)` — secondary text, captions, metadata. Token-set key `gray-mid`.
- **Gray Light** (`#b9bcbf`): `rgb(185, 188, 191)` — tertiary text, disabled labels, subtle dividers. Token-set key `gray-light`.
- **Gray Faint** (`#888888`): `rgb(136, 136, 136)` — low-emphasis hints. Token-set key `gray-faint`. The source's Key Characteristics also write this as `#888`.
- **Border** (`#dee2e6`): `rgb(222, 226, 230)` — thin component borders on light surfaces (inputs, outlined chips). Token-set key `border`.
- **Surface Veil** (`rgba(248, 248, 248, 0.8)`): Translucent overlay for sticky headers over imagery. The source also writes `rgba(248,248,248,0.8)` without spaces.

The source's next three roles are marked in the source itself as "inferred from category conventions, not live-verified". They are not promoted as tokens. Keeping the source's own inference on the record, without inventing a hex for amber or red, is a derived editorial implementation inference from the verified surfaces; it is not Gogoro-authored or a separately published UI specification.

- **Success / Charge Complete**: lean on cyan (`#28c3ff`) — "fully charged" reads as the brand's own energy color rather than a generic green.
- **Warning / Low Battery**: amber reserved for genuine battery-state warnings only; not used decoratively. No hex is supplied.
- **Error / Danger**: a saturated red for destructive or failed-swap states; used minimally to preserve the monochrome calm. No hex is supplied.

The creation brief suggested an accent green. Live inspection found no green in Gogoro's system. That correction is ledger context, not a token.

### Spacing

Token-set steps, unitless: `xs 8 · sm 16 · base 24 · lg 28 · xl 48 · section 100`. The visible sections write the component steps in px where the source does: 8px, 16px, 24px, 28px, 48px. The `section` step stays 100, unitless, because the source never writes it as a px token. The source also names an 8px-based spacing scale for component internals, generous vertical rhythm between marketing sections (80–120px), and tighter density inside spec tables and comparison grids. Reading the 80–120px marketing rhythm and the tighter spec density as an intentional contrast — storytelling airy, functional truth dense — is a derived editorial implementation inference from the verified surfaces; it is not Gogoro-authored or a separately published UI specification.

### Shape

- Small / input: 8px (token-set `sm: 8`)
- Control / CTA: 12px (token-set `md: 12`; live-observed on primary buttons)
- Card: 16px (token-set `lg: 16`)
- Full / circular: 9999 (token-set `full: 9999`); icon buttons use `50%`

The source's card radius range `8–16px` and the icon-button sizes 40–58px (live-observed 48px and 58px) stay as recorded ranges; they are not collapsed into a single step. Reading the 12px control radius and 50% icon buttons as a premium-tactile feel is a derived editorial implementation inference from the verified surfaces; it is not Gogoro-authored or a separately published UI specification.

### Elevation

Gogoro's depth philosophy, in the source's words, is **mostly flat, occasionally luminous**. On black chrome, separation comes from value steps (`#000000` → `#141719` → `#323237`), not shadow. On light surfaces, cards use a subtle neutral shadow. That philosophy sentence is the source's own; reading it as a binding elevation rule for uninspected overlays, and reading the electric-blue / cyan glows as the only lighting in the system and as reserved for energy moments, is a derived editorial implementation inference from the verified surfaces; it is not Gogoro-authored or a separately published UI specification.

- **Card shadow (light surface)**: `0 2px 12px rgba(0,0,0,0.08)` — soft neutral lift. Token-set key `shadow.card`.
- **Sticky header**: translucent veil (`rgba(248,248,248,0.8)`) + backdrop blur over media
- **Glow accents**: electric-blue / cyan are occasionally used as soft glows around battery/charge graphics — the only "lighting" in the system, reserved for energy moments

Z-index the source names, without numeric values: sticky nav above content; map info-cards above the map surface; modals / locale pickers above all chrome. No z-index number is promoted.

### Motion

The source's evidence for this document is a Tier 1 live computed-style inspect of the logos page plus a WebFetch of the homepage and Smartscooter page, and it supplies no transition, animation, or easing sample. Everything in this subsection except the omission of the three curve values — the durations, the easing token names and roles, the spring-stance rule, the signature motions, and the reduced-motion behavior — is therefore a derived editorial implementation inference from the verified surfaces; it is not Gogoro-authored or a separately published UI specification.

The source's motion register, in its own words: cinematic on marketing, instantaneous on utility. Hero media moves (the scooter is shown riding); UI motion is restrained and platform-native.

Durations, with the uses the source gives them:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, reduce-motion fallback |
| `motion-fast` | 150ms | Hover/press, icon transitions, focus rings |
| `motion-standard` | 250ms | Dropdowns, sticky-header veil, card lifts |
| `motion-slow` | 400ms | Section reveals, map pin transitions |
| `motion-cinematic` | 600ms+ | Hero media, scroll-driven product reveals |

Easing token names and roles: `ease-standard` for default two-way transitions, `ease-enter` for things appearing — modals, station cards, `ease-exit` for dismissals. Their curve values are omitted here — see Governance. No curve value is promoted. A future motion pass may promote one only after recording, per component, the computed transition properties, the animation name, the duration, the easing, and the reduced-motion behavior on the live surface; confirming a single curve, or citing an official source for one, does not satisfy that condition. That condition is set by this document, not by Gogoro.

Spring stance the source states: overshoot/bounce is avoided on product and utility surfaces — Gogoro's register is engineered precision, not playful elasticity. The one place energy "moves" is the charge animation: a blue→cyan luminance pulse on battery/swap graphics, which reads as electrical current rather than UI bounce.

Signature motions the source names:

1. **Hero product reveal.** As the hero loads or scrolls into view, the Smartscooter fades/parallaxes in over `motion-cinematic / ease-enter`; the headline follows on a short delay. Coordinated, not simultaneous.
2. **Charge pulse.** Battery/charge graphics pulse a soft electric-blue→cyan glow over ~`motion-slow`, looping subtly — the only ambient motion in the system, reserved for energy.
3. **Station pin drop.** On the GoStation map, pins fade/scale in over `motion-standard / ease-enter` as the viewport resolves; the selected pin lifts to cyan.
4. **Sticky-header veil.** On scroll, the nav transitions from transparent to the translucent veil (`rgba(248,248,248,0.8)` + blur) over `motion-standard`.

Reduce motion. Under `prefers-reduced-motion: reduce`, hero parallax and charge pulses collapse to static states; pin drops become instant; all `motion-*` tokens fall to `motion-instant`. No exceptions.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The source records no published Gogoro typography specification. |
| Live computed surface-use | The logos page computes the stack `Graphik, "PingFang TC", "Noto Sans TC", sans-serif`. Graphik leads; Traditional-Chinese fallbacks are for native TW/HK rendering. The source records no Simplified-Chinese fallback in the observed stack — TW Traditional Chinese is the first-class CJK voice. |
| FontFaceSet and source corroboration | The source records the stack as live-verified. It does not publish FontFace URLs or hosted face files. |
| Official distributed asset | No Gogoro-exclusive distributed type family was verified. |
| Declared-only | None recorded. |
| License | The source records no font license. Treating Graphik as a commercial face used on the captured pages, not as a Gogoro-distributed brand asset, is a derived editorial implementation inference from the verified surfaces; it is not Gogoro-authored or a separately published UI specification. |
| Outside these captures | Uninspected account-form and GoStation-map typography remain outside the logos-page computed pass and the homepage / Smartscooter copy pass. |

### Family

- **Current visible UI family:** `Graphik, "PingFang TC", "Noto Sans TC", sans-serif`
- Token-set family record: `sans: "Graphik"`, `mono: "Graphik"`
- Do not substitute a generic system sans for headlines and present it as the Gogoro face. Reading Graphik as a grotesque with the geometric confidence of an industrial-design house, and as the kind of type you'd see laser-etched onto an aluminum chassis, is a derived editorial implementation inference from the verified surfaces; it is not Gogoro-authored or a separately published UI specification.

### Type roles

The token-set records exact sizes and unitless line-heights. They stay ratios here (A1a). The source's visible §3 table is marked "inferred from category + observed chrome" and uses ranges; that table is kept as the source wrote it, not merged into the token-set sizes.

| Role | Font | Size | Weight | Line height | Token-set use |
|---|---|---:|---:|---:|---|
| Display / Hero | Graphik | 60 | 700 | 1.05 | Full-bleed hero statements, tight tracking |
| H1 | Graphik | 42 | 700 | 1.1 | Section openers |
| H2 | Graphik | 30 | 700 | 1.2 | Sub-sections |
| H3 | Graphik | 22 | 600 | 1.3 | Card titles, spec headers |
| Body Large | Graphik | 18px | 400 | 1.5 | Lead paragraphs |
| Body | Graphik | 16px | 400 | 1.5 | Default copy |
| Caption / Meta | Graphik | 14px | 500 | 1.4 | Meta, captions, button text |
| Micro | Graphik | 12px | 500 | 1.3 | Legal, fine print |

Source-stated inferred ranges from the visible §3 table, not promoted over the token-set sizes: Display / Hero `48–72px` / 700; H1 `36–48px` / 700; H2 `28–32px` / 600–700; H3 `20–24px` / 600; Caption / Meta `13–14px` / 400–500 (live: 14px / 600 on primary CTA); Body Large `18px` / 400; Body `16px` / 400; Micro `12px` / 500. The source's §9 example prompt also names a GoStation card title at `20px/600`; that size sits inside the inferred H3 range and is not a live measurement.

Weights the source names: Bold (700) for hero headlines, product names, key numeric claims (range/swap-count statistics); Medium (500–600) for subheads, nav labels, button text, section titles; Regular (400) for body copy, captions, long-form spec descriptions.

### Type rules

Observable in the two records: the token-set uses unitless line-heights `1.05`, `1.1`, `1.2`, `1.3`, `1.5`, `1.4`; the live CTA is 14px / 600; nav labels are `14–16px` / `500`.

Reading those facts as rules — tight letterspacing on display type so Graphik's geometric forms carry negative tracking on large headlines for an engineered, etched look; weight + color driving hierarchy on light surfaces (`#323237` charcoal for primary, `#737d82` gray for secondary, electric blue for links); all-caps micro-labels on utility chrome (`LEARN MORE`, `DISCOVER MORE`); and numerals as hero material, with range, swap counts, and station counts rendered large and bold — is a derived editorial implementation inference from the verified surfaces; it is not Gogoro-authored or a separately published UI specification.

### Assets

- Logo pointer recorded by the source: `https://www.google.com/s2/favicons?domain=gogoro.com&sz=128`. This is a favicon-service URL keyed to the domain, not a Gogoro-hosted brand file; the source supplies no first-party logo asset.
- The Gogoro "G" mark sits left in the top bar. The source records the placement, not a file.
- Full-bleed product photography / video of the Smartscooter. Reading that photography as first-party product content that must not be replaced with invented brand-color decoration is a derived editorial implementation inference from the verified surfaces; it is not Gogoro-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Surface state contract

The ten rows below are the source's state contract. They describe surface- and module-level treatments, not per-control treatments. Reading them as the state contract for the named marketing and network surfaces is a derived editorial implementation inference from the verified surfaces; they are not Gogoro-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no stations nearby)** | Map centers on user; single `#737d82` body line explaining nearest coverage + a CTA to expand the search radius. No illustration. |
| **Empty (account / no vehicle)** | One-line prompt + primary CTA (`#2b96ed`, white, 12px radius) to register a vehicle or find a dealer. |
| **Loading (map / stations)** | Neutral skeleton tiles on the map surface; station pins fade in as data resolves. Subtle, no spinner takeover. |
| **Loading (inline action)** | Button keeps width, label swaps to a quiet 3-dot or spinner in white; no layout shift. |
| **Error (network / fetch)** | Blameless single sentence on a light card, `#323237` text, one retry action in electric blue. Never a generic "Something went wrong" alone. |
| **Error (swap / account failure)** | State the condition factually (`Swap could not complete`), offer the next step (retry / contact support). No blame on the rider. |
| **Success (battery swap / subscription)** | Cyan (`#28c3ff`) confirmation accent — "fully charged" energy. Short confirmation + next action. |
| **Success (form submit)** | Quiet confirmation line + return-to-flow link; no celebratory animation on utility surfaces. |
| **Disabled (control)** | Gray-light (`#b9bcbf`) text + faded fill; geometry preserved so re-enabled controls don't shift. |
| **Skeleton (content load)** | Neutral `#f6f6f6` blocks at final dimensions; no shimmer on black chrome (value step is enough). |

The source records selected / active station (cyan `#28c3ff` highlight) and charge-palette battery-availability (blue → cyan) outside the seven canonical Core states. They are kept as their own observations on the station pin below rather than folded into any canonical state.

### How applicability is decided here

Each declared component keeps the primitive type the source verified for it. Applicability is judged by control role, never by how much a single capture happened to reach: `default` and `focus-visible` apply to every interactive control; a state that is meaningful for the role stays `applicable` with its visual treatment omitted where the source supplies none; `not-applicable` is used only where the role has no such outcome to represent. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided. These role judgments — including every Reason cell in the tables below — are a derived editorial implementation inference from the verified surfaces; they are not Gogoro-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary Filled CTA

- Type: button
- Kind: interactive
- Role: Account / login / primary site CTA
- Background: `#2b96ed` · Text: `#ffffff` · Border: none · Radius: `12px` · Padding: `0 24px` · Height: `40px`
- Font: `14px` / `600` / Graphik
- Token-set use: `Account / login / primary site CTA, 40px height`
- Live-observed: `로그인 및 회원가입` header CTA at `#2b96ed`, 12px radius, 14px·600

| State | Applicability | Reason |
|---|---|---|
| default | applicable | The source records the control on the header |
| hover | applicable | Pointer-web button; the source's §9 example names a lift toward `#0074ff`, which is not a live computed hover and is not promoted as a token |
| focus-visible | applicable | Keyboard-reachable control; per-control treatment unresolved |
| disabled | applicable | An account action can be unavailable; the surface contract names faded `#b9bcbf` fill at surface level only |
| loading | applicable | Commits account / login, which can be pending; the surface contract names a width-stable white spinner |
| error | applicable | Commits an operation that can fail — the surface contract carries an Error (swap / account failure) row |
| success | applicable | Commits an operation that can complete; treatment unresolved at control level |

### Marketing / on-dark CTA

- Type: button
- Kind: interactive
- Role: destination CTA over black / photo backgrounds
- Background: `#0074ff` (electric blue) or `#ffffff` (inverted) · Text: `#ffffff` (blue) / `#000000` (white) · Border: none · Radius: `12px` · Padding: `14px 28px`
- Font: `16px` / `600`
- Token-set use: `Hero CTA over black / photo backgrounds`
- Observed labels: `LEARN MORE`, `DISCOVER MORE`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | The source records the control on marketing heroes |
| hover | applicable | Pointer-web control; treatment unresolved |
| focus-visible | applicable | Keyboard-reachable control; treatment unresolved |
| disabled | applicable | A destination can be unavailable; treatment unresolved |
| loading | not-applicable | Destination link; the page it opens carries any pending load, and this control commits no operation of its own |
| error | not-applicable | Same role: nothing is committed here that could fail |
| success | not-applicable | Same role: nothing is committed here that could complete |

### Secondary Outlined CTA

- Type: button
- Kind: interactive
- Role: lower-priority destination action
- Background: transparent · Text: `#323237` (light surface) / `#ffffff` (dark surface)
- Border: `1px solid #dee2e6` (light) / `1px solid rgba(255,255,255,0.4)` (dark) · Radius: `12px` · Padding: `14px 28px`
- Font: `16px` / `600`
- Token-set use: `Lower-priority action, 1px #dee2e6 border`
- Observed labels: `Work With Us`, `See Case Study`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | The source records the outlined control |
| hover | applicable | Pointer-web control; treatment unresolved |
| focus-visible | applicable | Keyboard-reachable control; treatment unresolved |
| disabled | applicable | A destination can be unavailable; treatment unresolved |
| loading | not-applicable | Destination link; this control commits no operation of its own |
| error | not-applicable | Same role: nothing is committed here that could fail |
| success | not-applicable | Same role: nothing is committed here that could complete |

### Icon Button (circular)

- Type: button
- Kind: interactive
- Role: carousel control, play/pause on video heroes, or map chrome — a toggle or directional control, not a committing action
- Background: `#ffffff` or `rgba(0,0,0,0.15)` · Border: optional `1px solid #dee2e6` · Radius: `50%` · Size: `40–58px`
- Live-observed: 48px and 58px circular controls
- No token-set record; values come from the source's §4 body

| State | Applicability | Reason |
|---|---|---|
| default | applicable | The source records circular controls at 48px and 58px |
| hover | applicable | Pointer-web control; treatment unresolved |
| focus-visible | applicable | Keyboard-reachable control; treatment unresolved |
| disabled | applicable | A carousel, playback, or map control can be unavailable; treatment unresolved |
| loading | not-applicable | Toggle / arrow / map chrome; any pending media or map load belongs to the surface it steers, and this control commits nothing itself |
| error | not-applicable | Same role: nothing is committed here that could fail |
| success | not-applicable | Same role: nothing is committed here that could complete |

### Default Input

- Type: input
- Kind: interactive
- Role: Account / dealer-locator / contact form field
- Background: `#ffffff` · Text: `#323237` · Border: `1px solid #dee2e6` · Radius: `8px` · Padding: `12px 16px`
- Font: `16px` / `400`
- Token-set use: `Account / form input; focus border #0074ff`
- Observed Focus (not promoted as a `focus-visible` treatment): border `#0074ff`, subtle blue focus ring

| State | Applicability | Reason |
|---|---|---|
| default | applicable | The source records the field for account, dealer-locator, and contact forms |
| hover | applicable | Pointer-web field; treatment unresolved |
| focus-visible | applicable | Keyboard-reachable field; the source's Focus row names an electric-blue border at field level and is a different evidence class from a `focus-visible` treatment, so that observed Focus value is not attached to this row |
| disabled | applicable | The field can be made unavailable; treatment unresolved |
| loading | applicable | Submits a form that can be pending; treatment unresolved |
| error | applicable | Form field whose submission can fail; the surface contract carries form-adjacent error rows |
| success | applicable | Form field whose submission can complete — the surface contract carries a Success (form submit) row |

### Product / Spec Card

- Type: card
- Background: `#ffffff` or `#f6f6f6` · Border: none (contrast separation) or `1px solid #dee2e6` · Radius: `8–16px` · Padding: `24px`
- Token-set record uses `bg: "#ffffff"`, `radius: "16px"`, `padding: "24px"`
- Token-set use: `Product / spec card on light surface`
- Role: Model comparison, spec breakdowns, network feature cards
- No kind and no applicability map: the source supplies no interaction evidence for this container, so neither is decided here.

### Dark Feature Card

- Type: card
- Background: `#141719` · Text: `#ffffff` · Radius: `16px`
- Token-set use: `On-black storytelling card with electric-blue accent`
- Role: On-black storytelling cards with product imagery + electric-blue accent line
- No kind and no applicability map: the source supplies no interaction evidence for this container, so neither is decided here.

### Global Nav Item

- Kind: interactive
- Role: destination item on the top bar — logo (the Gogoro "G" mark) left, model/network nav center, account + locale right
- Top bar: black (`#000000`) or translucent veil (`rgba(248,248,248,0.8)`) over imagery
- Nav labels: `14–16px` / `500`, white on dark / `#323237` on light
- Sticky on scroll with the translucent veil
- No token-set primitive type; the source describes the bar, not a harvested `type:`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | The source records the top bar on marketing surfaces |
| hover | applicable | Pointer-web control; treatment unresolved |
| focus-visible | applicable | Keyboard-reachable control; treatment unresolved |
| disabled | applicable | A nav destination can be unavailable; treatment unresolved |
| loading | not-applicable | Destination navigation; the item commits no operation of its own |
| error | not-applicable | Same role: nothing is committed here that could fail |
| success | not-applicable | Same role: nothing is committed here that could complete |

### GoStation Station Pin

- Kind: interactive
- Role: station pin on the GoStation map — a selection control, not a committing action
- Map surface uses muted neutral base with electric-blue station pins
- Active/selected station: cyan (`#28c3ff`) highlight
- Battery-availability indicators use the charge palette (blue → cyan)
- Selected is recorded by the source outside the seven canonical states and is kept as its own observation
- No token-set primitive type

| State | Applicability | Reason |
|---|---|---|
| default | applicable | The source records electric-blue station pins on the named map surface |
| hover | applicable | Pointer-web control; treatment unresolved |
| focus-visible | applicable | Keyboard-reachable control; treatment unresolved |
| disabled | applicable | A station can be unavailable; treatment unresolved |
| loading | not-applicable | The pin selects a station; the map surface it sits on carries any pending load (the surface contract's Loading (map / stations) row), and the pin commits nothing itself |
| error | not-applicable | Same role: a fetch failure belongs to the map surface, not to the pin |
| success | not-applicable | Same role: nothing is committed here that could complete |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The captured marketing pages use full-bleed cinematic sections alternating with centered max-width content blocks (~1200–1280px container). Hero = full viewport, product in motion/studio light, single headline + one or two CTAs. Spec and network sections drop to the light `#f6f6f6` surface for legibility and detail density. Spacing follows the scale above: 8px, 16px, 24px, 28px, 48px, and the unitless `section` step 100, plus the source's 80–120px marketing section rhythm.

Reading Gogoro as low-to-medium density on marketing surfaces (premium, breathing, photography-led) and medium-high density on utility surfaces (spec comparisons, station maps, account flows), and reading that contrast as intentional, is a derived editorial implementation inference from the verified surfaces; it is not Gogoro-authored or a separately published UI specification.

The breakpoint table below is the source's stated contract. The source labels the table inferred and records no measurement at any of these widths, so the table is declared behavior rather than an observation of it.

| Width | Behavior |
|---|---|
| Desktop `>1280px` | Full-bleed cinematic heroes, centered ~1280px content, multi-column spec grids |
| Laptop `1024–1280px` | Heroes hold full-bleed; grids compress to 2–3 columns |
| Tablet `768–1024px` | Two-column → single column; nav condenses |
| Mobile `<768px` | Single column, full-width CTAs, hamburger nav, stacked spec cards, station map full-screen |

Touch the source states: generous touch targets (40px+ on controls, 48–58px circular media controls). Hero video may swap to a static product still on mobile to preserve performance/data. Station-locator map becomes a full-screen mobile experience with a bottom sheet for station detail.

Media the source states: full-bleed video/photo with `object-fit: cover`; lazy-load and responsive `srcset` for heavy product imagery.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Locales the source names: English is a first-class brand voice (Gogoro is a global, Nasdaq-listed company), and Traditional Chinese is the first-class TW voice; the two are authored in parallel, not translated. TW Traditional Chinese is the first-class CJK voice; there is no Simplified-Chinese fallback in the observed stack.

Published strings the source records, carried verbatim:

- Tagline: `Ride Smarter. Refuel in seconds.` — homepage value proposition
- Page title: `Gogoro Smartscooter® — A ride like no other.`
- Marketing CTAs: `LEARN MORE` / `DISCOVER MORE`
- Network CTA: `Find a GoStation`
- Outlined actions: `Work With Us`, `See Case Study`
- Header account CTA: `로그인 및 회원가입`
- TW product terms: `網路`, `電池`, `里程`
- Homepage stats from the WebFetch pass: `524,000+` riders / `7 billion km`
- Voice-table sustainability example: `7 billion km traveled`
- First-person-plural legal/corporate form the source names: `Gogoro believes…`

The source marks two voice samples as illustrative, not verified as live Gogoro copy: `Battery available · 2 min walk` and `Swap complete. Ride on.` They stay marked illustrative and are not promoted as published product copy.

Everything from here to the end of this section is a derived editorial implementation inference from the verified surfaces; it is not Gogoro-authored or a separately published UI specification. Reading the voice as an industrial designer who is also an environmentalist — precise, confident, and quietly idealistic, never preachy — and reading the register as engineered-optimistic (short declarative sentences, concrete numbers, a refusal of hype adjectives), all fall under that qualification, as do the register table and the forbidden-register rule below.

| Context | Tone |
|---|---|
| Hero headlines | Short, declarative, benefit-led. `Ride Smarter.` `A ride like no other.` Period, not exclamation. |
| CTAs | Imperative + concrete. `LEARN MORE`, `DISCOVER MORE`, `Find a GoStation`. All-caps on marketing chrome. |
| Spec / product copy | Precise and numeric. Range, torque, swap-time stated as facts. No marketing inflation. |
| Network / utility | Functional and reassuring — `Battery available`, `2 min walk`. The kiosk should feel as reliable as a gas pump. |
| Sustainability / mission | Idealistic but evidenced — `7 billion km traveled`, framed as collective impact, not virtue-signaling. |
| Errors (swap/account) | Blameless, actionable. State the condition, offer the next step. Never blame the rider. |
| Legal / corporate | Formal, plain. First-person-plural (`Gogoro believes…`). |

Forbidden phrases. Hype adjectives (`revolutionary`, `game-changing`, `world's best`) without a number behind them; exclamation marks on buttons; "eco-friendly" as decoration; Simplified-Chinese characters on TW surfaces (`网络` → `網路`, `电池` → `電池`); approximate range/spec claims (every number must be real); cute mascots or emoji in product chrome (the machine is the brand).

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

These are unnamed values, not permissions to invent:

- exact curve values for `ease-standard`, `ease-enter`, and `ease-exit`
- computed transition, animation, duration, and easing samples for any declared motion token
- a hex for the inferred warning amber or the inferred error red
- per-control keyboard-focus treatment; the source's Focus row on the default input names a `#0074ff` border at field level only
- hover treatment for every declared control; the §9 prompt's lift toward `#0074ff` is not a live computed sample
- control-level disabled, loading, error, and success treatment wherever those states are applicable above
- the interaction behaviour, if any, of the product/spec card and the dark feature card
- FontFace URLs, a Gogoro-hosted logo file, and a font license
- interface values for the GoStation map and the Network subscription flow beyond what the source writes in prose; those surfaces were named, not live-measured in the logos-page pass

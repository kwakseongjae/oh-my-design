---
id: gogoro
name: Gogoro
country: TW
category: automotive
homepage: "https://www.gogoro.com"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=gogoro.com&sz=128"
verified: "2026-05-19"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    canvas: "#000000"
    text: "#323237"
    ink: "#141719"
    accent: "#0074ff"
    cyan: "#28c3ff"
    cta: "#2b96ed"
    surface: "#f6f6f6"
    on-dark: "#ffffff"
    gray-mid: "#737d82"
    gray-light: "#b9bcbf"
    gray-faint: "#888888"
    border: "#dee2e6"
  typography:
    family: { sans: "Graphik", mono: "Graphik" }
    display:  { size: 60, weight: 700, lineHeight: 1.05, use: "Full-bleed hero statements, tight tracking" }
    h1:       { size: 42, weight: 700, lineHeight: 1.1, use: "Section openers" }
    h2:       { size: 30, weight: 700, lineHeight: 1.2, use: "Sub-sections" }
    h3:       { size: 22, weight: 600, lineHeight: 1.3, use: "Card titles, spec headers" }
    body-lg:  { size: 18, weight: 400, lineHeight: 1.5, use: "Lead paragraphs" }
    body:     { size: 16, weight: 400, lineHeight: 1.5, use: "Default copy" }
    caption:  { size: 14, weight: 500, lineHeight: 1.4, use: "Meta, captions, button text" }
    micro:    { size: 12, weight: 500, lineHeight: 1.3, use: "Legal, fine print" }
  spacing: { xs: 8, sm: 16, base: 24, lg: 28, xl: 48, section: 100 }
  rounded: { sm: 8, md: 12, lg: 16, full: 9999 }
  shadow:
    card: "0 2px 12px rgba(0,0,0,0.08)"
  components:
    button-cta: { type: button, bg: "#2b96ed", fg: "#ffffff", radius: "12px", padding: "0 24px", font: "14px / 600", use: "Account / login / primary site CTA, 40px height" }
    button-marketing: { type: button, bg: "#0074ff", fg: "#ffffff", radius: "12px", padding: "14px 28px", font: "16px / 600", use: "Hero CTA over black / photo backgrounds" }
    button-outline: { type: button, bg: "transparent", fg: "#323237", radius: "12px", padding: "14px 28px", font: "16px / 600", use: "Lower-priority action, 1px #dee2e6 border" }
    input-default: { type: input, bg: "#ffffff", fg: "#323237", radius: "8px", padding: "12px 16px", font: "16px / 400", use: "Account / form input; focus border #0074ff" }
    card-spec: { type: card, bg: "#ffffff", radius: "16px", padding: "24px", use: "Product / spec card on light surface" }
    card-dark: { type: card, bg: "#141719", fg: "#ffffff", radius: "16px", use: "On-black storytelling card with electric-blue accent" }
  components_harvested: true
---

# Design System Inspiration of Gogoro

## 1. Visual Theme & Atmosphere

Gogoro is Taiwan's electric-mobility company — the maker of the Smartscooter and the GoStation battery-swap network — and its design language is the rarest kind: a hardware brand that earns its digital surfaces the way it earns its physical ones. The atmosphere is **monochrome-industrial with electric-blue voltage**. The page chrome is overwhelmingly black (`#000000`) and near-black, with a warm-neutral charcoal (`#323237`) carrying body copy, and content breathing on a clean off-white surface (`#f6f6f6`). Into that disciplined grayscale, Gogoro injects a single charge of color — an electric blue (`#0074ff`) and a brighter cyan (`#28c3ff`) — used the way a current runs through a circuit: sparingly, deliberately, only where energy should be felt. This is not a "tech startup" palette of gradients and pastels; it is the palette of a product photographed in a clean room, where the matte black of the machine is the hero and the blue is the spark of the battery coming alive.

Typography is led by **Graphik** — a grotesque sans with the geometric confidence of an industrial-design house, not a marketing department — with `PingFang TC` and `Noto Sans TC` Traditional-Chinese fallbacks for native TW rendering. Graphik gives Gogoro headlines a precise, engineered feel: tight letterspacing, generous weight contrast, the kind of type you'd see laser-etched onto an aluminum chassis. The brand pairs this with large, full-bleed product photography and video — the Smartscooter is almost always shown in motion or in dramatic studio light, because the object is the argument.

What distinguishes Gogoro from other consumer-tech brands is that its design system serves a **physical product and a network**, not an app. Every surface — the marketing site, the GoStation map, the Network subscription flow — has to make a battery-swap kiosk feel as premium as an Apple Store and as reliable as a gas pump. The result is a restrained, premium, motion-forward system where black is the canvas, Graphik is the engineering voice, and electric blue is the only color allowed to move.

**Key Characteristics:**
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

## 2. Color Palette & Roles

Values below are drawn from live computed-style inspection of `gogoro.com/media-center/logos/` plus the brand's known monochrome-plus-voltage system. Hexes are converted from observed `rgb()` values.

### Brand / Chrome
- **Pure Black** (`#000000`): The primary brand color and dominant chrome. Page headers, footers, hero backgrounds, the matte-machine canvas.
- **Charcoal** (`#323237`): `rgb(50, 50, 55)` — the dominant text color (live: 194 occurrences). Warm near-black for body copy and headings on light surfaces.
- **Ink** (`#141719` / `#101418`): Near-black section backgrounds, slightly lifted off pure black for layering dark-on-dark surfaces.

### Accent (Voltage)
- **Electric Blue** (`#0074ff`): `rgb(0, 116, 255)` — the primary accent. Links, active states, focus rings, key inline highlights. The "current" color.
- **Cyan Spark** (`#28c3ff`): `rgb(40, 195, 255)` — brighter secondary accent. Battery/charge indicators, energy graphics, hover lift on blue elements.
- **CTA Blue** (`#2b96ed`): `rgb(43, 150, 237)` — a softer mid-blue observed on primary action buttons; the interactive-blue used when a filled CTA needs a slightly calmer tone than pure electric blue.

### Surface & Neutral
- **Off-White** (`#f6f6f6`): `rgb(246, 246, 246)` — default light content surface; the clean-room background for product sections.
- **Pure White** (`#ffffff`): Cards, modals, inverted surfaces, button text on dark.
- **Gray Mid** (`#737d82`): `rgb(115, 125, 130)` — secondary text, captions, metadata.
- **Gray Light** (`#b9bcbf`): `rgb(185, 188, 191)` — tertiary text, disabled labels, subtle dividers.
- **Gray Faint** (`#888888`): `rgb(136, 136, 136)` — low-emphasis hints.
- **Border** (`#dee2e6`): `rgb(222, 226, 230)` — thin component borders on light surfaces (inputs, outlined chips).
- **Surface Veil** (`rgba(248, 248, 248, 0.8)`): Translucent overlay for sticky headers over imagery.

### Semantic (inferred from category conventions, not live-verified)
- **Success / Charge Complete**: lean on cyan (`#28c3ff`) — "fully charged" reads as the brand's own energy color rather than a generic green.
- **Warning / Low Battery**: amber reserved for genuine battery-state warnings only; not used decoratively.
- **Error / Danger**: a saturated red for destructive or failed-swap states; used minimally to preserve the monochrome calm.

## 3. Typography Rules

### Font Stack (live-verified)
```
Graphik, "PingFang TC", "Noto Sans TC", sans-serif
```
Graphik leads (the brand's engineered grotesque), with Traditional-Chinese fallbacks for native TW/HK rendering. There is no Simplified-Chinese fallback in the observed stack — TW Traditional Chinese is the first-class CJK voice.

### Weights
- **Bold (700)**: Hero headlines, product names, key numeric claims (range/swap-count statistics). Gogoro headlines are confident and heavy — the engineering voice.
- **Medium (500–600)**: Subheads, nav labels, button text, section titles.
- **Regular (400)**: Body copy, captions, long-form spec descriptions.

### Scale (inferred from category + observed chrome)
| Role | Size | Weight | Notes |
|---|---|---|---|
| Display / Hero | `48–72px` | 700 | Full-bleed hero statements, tight letterspacing |
| H1 | `36–48px` | 700 | Section openers |
| H2 | `28–32px` | 600–700 | Sub-sections |
| H3 | `20–24px` | 600 | Card titles, spec headers |
| Body Large | `18px` | 400 | Lead paragraphs |
| Body | `16px` | 400 | Default copy |
| Caption / Meta | `13–14px` | 400–500 | Metadata, captions, button text (live: 14px / 600 on primary CTA) |
| Micro | `12px` | 500 | Legal, fine print |

### Conventions
- **Tight letterspacing on display type** — Graphik's geometric forms carry negative tracking on large headlines for an engineered, etched look.
- **Weight + color drive hierarchy** on light surfaces: `#323237` charcoal for primary, `#737d82` gray for secondary, electric blue for links.
- **All-caps micro-labels** appear on utility chrome (button labels like "LEARN MORE", "DISCOVER MORE" observed) — a nod to industrial/automotive UI signage.
- **Numerals are hero material** — range, swap counts, station counts render large and bold; numbers are the proof points of the network.

## 4. Component Stylings

### Buttons

**Primary (Filled CTA)**
- Background: `#2b96ed`
- Text: `#ffffff`
- Border: none
- Radius: `12px`
- Padding: `0 24px` (height-driven)
- Height: `40px`
- Font: `14px` / `600` / Graphik
- Use: Account / login / primary site CTAs (live-observed: "로그인 및 회원가입" header CTA at `#2b96ed`, 12px radius, 14px·600)

**Primary (Marketing / on-dark)**
- Background: `#0074ff` (electric blue) or `#ffffff` (inverted)
- Text: `#ffffff` (blue) / `#000000` (white)
- Border: none
- Radius: `12px`
- Padding: `14px 28px`
- Font: `16px` / `600`
- Use: Hero CTAs over black/photo backgrounds — "LEARN MORE", "DISCOVER MORE"

**Secondary (Outlined)**
- Background: transparent
- Text: `#323237` (light surface) / `#ffffff` (dark surface)
- Border: `1px solid #dee2e6` (light) / `1px solid rgba(255,255,255,0.4)` (dark)
- Radius: `12px`
- Padding: `14px 28px`
- Font: `16px` / `600`
- Use: "Work With Us", "See Case Study", lower-priority actions

**Icon Button (circular)**
- Background: `#ffffff` or `rgba(0,0,0,0.15)`
- Border: optional `1px solid #dee2e6`
- Radius: `50%`
- Size: `40–58px`
- Use: Carousel controls, play/pause on video heroes, map controls (live-observed: 48px and 58px circular controls)

### Inputs

**Default**
- Background: `#ffffff`
- Text: `#323237`
- Border: `1px solid #dee2e6`
- Radius: `8px`
- Padding: `12px 16px`
- Font: `16px` / `400`
- Focus: border `#0074ff`, subtle blue focus ring
- Use: Account, dealer-locator, contact forms

### Cards

**Product / Spec Card**
- Background: `#ffffff` or `#f6f6f6`
- Border: none (contrast separation) or `1px solid #dee2e6`
- Radius: `8–16px`
- Padding: `24px`
- Use: Model comparison, spec breakdowns, network feature cards

**Dark Feature Card**
- Background: `#141719`
- Text: `#ffffff`
- Radius: `16px`
- Use: On-black storytelling cards with product imagery + electric-blue accent line

### Navigation

- Top bar: black (`#000000`) or translucent veil (`rgba(248,248,248,0.8)`) over imagery
- Logo (the Gogoro "G" mark) left, model/network nav center, account + locale right
- Nav labels: `14–16px` / `500`, white on dark / `#323237` on light
- Sticky on scroll with the translucent veil for legibility over hero media

### Map / Station Components (GoStation network)
- Map surface uses muted neutral base with electric-blue station pins
- Active/selected station: cyan (`#28c3ff`) highlight
- Battery-availability indicators use the charge palette (blue → cyan)

## 5. Layout Principles

### Structure
- **Full-bleed cinematic sections** alternate with **centered max-width content blocks** (~1200–1280px container)
- Hero = full viewport, product in motion/studio light, single headline + one or two CTAs
- Spec and network sections drop to the light `#f6f6f6` surface for legibility and detail density

### Spacing
- **Generous vertical rhythm** between marketing sections (80–120px) — the product needs room
- Tighter density inside spec tables and comparison grids
- 8px-based spacing scale for component internals

### Density
Gogoro is **low-to-medium density on marketing surfaces** (premium, breathing, photography-led) and **medium-high density on utility surfaces** (spec comparisons, station maps, account flows). The contrast is intentional: storytelling is airy; functional truth is dense.

## 6. Depth & Elevation

Gogoro's depth philosophy is **mostly flat, occasionally luminous**. On black chrome, separation comes from value steps (`#000000` → `#141719` → `#323237`), not shadow. On light surfaces, cards use subtle neutral shadows for lift.

- **Card shadow (light surface)**: `0 2px 12px rgba(0,0,0,0.08)` — soft neutral lift
- **Sticky header**: translucent veil (`rgba(248,248,248,0.8)`) + backdrop blur over media
- **Glow accents**: electric-blue / cyan are occasionally used as soft glows around battery/charge graphics — the only "lighting" in the system, reserved for energy moments

### Z-Index
- Sticky nav above content
- Map info-cards above the map surface
- Modals / locale pickers above all chrome

## 7. Do's and Don'ts

- **DO** keep black (`#000000`) as the dominant canvas on marketing surfaces. The product is the hero; the UI recedes.
- **DON'T** introduce competing accent colors. Electric blue and cyan are the only chromatic voices — adding green/orange/purple breaks the "single current" metaphor.
- **DO** reserve electric blue (`#0074ff`) and cyan (`#28c3ff`) for energy moments — links, active states, charge/battery graphics.
- **DON'T** flood a layout with blue. The voltage reads as voltage only because it's rationed against grayscale.
- **DO** use Graphik with the TC fallback stack. The engineered grotesque is the brand's typographic signature.
- **DON'T** substitute a generic system sans for headlines — Graphik's geometry is load-bearing.
- **DO** use `12px` radius on interactive controls and `50%` on icon buttons (live-observed).
- **DON'T** use sharp 0px corners on CTAs — the soft radius is part of the premium-tactile feel.
- **DO** let product photography go full-bleed and cinematic; show the Smartscooter in motion or studio light.
- **DON'T** clutter hero sections with multiple CTAs — one primary, optionally one secondary.
- **DO** use Traditional Chinese (`網路`, `電池`, `里程`) on TW surfaces; never Simplified.
- **DON'T** treat the GoStation network UI as decoration — it's the product's beating heart; station/battery states must be accurate and legible.

## 8. Responsive Behavior

### Breakpoints (inferred)
| Width | Behavior |
|---|---|
| Desktop `>1280px` | Full-bleed cinematic heroes, centered ~1280px content, multi-column spec grids |
| Laptop `1024–1280px` | Heroes hold full-bleed; grids compress to 2–3 columns |
| Tablet `768–1024px` | Two-column → single column; nav condenses |
| Mobile `<768px` | Single column, full-width CTAs, hamburger nav, stacked spec cards, station map full-screen |

### Touch & Mobile
- Generous touch targets (40px+ on controls, 48–58px circular media controls)
- Hero video may swap to a static product still on mobile to preserve performance/data
- Station-locator map becomes a full-screen mobile experience with a bottom sheet for station detail

### Media
- Full-bleed video/photo with `object-fit: cover`
- Lazy-load and responsive `srcset` for heavy product imagery

## 9. Agent Prompt Guide

### Quick Color Reference
- Canvas / chrome: Pure Black (`#000000`)
- Body text: Charcoal (`#323237`)
- Primary accent / links: Electric Blue (`#0074ff`)
- Secondary accent / charge: Cyan (`#28c3ff`)
- Filled CTA: CTA Blue (`#2b96ed`), white text, 12px radius
- Light surface: Off-White (`#f6f6f6`)
- Secondary text: Gray Mid (`#737d82`)
- Border: `#dee2e6`

### Example Component Prompts
- "Create a Gogoro hero: full-viewport black (`#000000`) background, full-bleed Smartscooter video, single Graphik headline at 56px/700 white with tight letterspacing, one filled CTA (`#0074ff` bg, white text, 12px radius, 16px/600, padding 14px 28px) reading 'DISCOVER MORE', optional outlined secondary (transparent, 1px solid rgba(255,255,255,0.4))."
- "Build a Gogoro primary button: `#2b96ed` background, white text, 12px border-radius, 14px/600 Graphik, padding 0 24px, height 40px, no border. Hover: lift toward `#0074ff`. No heavy shadow."
- "Design a GoStation network card on light surface: white bg, 16px radius, 24px padding, Graphik title 20px/600 `#323237`, a row of battery-availability indicators using cyan (`#28c3ff`) fills, address meta in 14px/400 `#737d82`, electric-blue (`#0074ff`) 'Navigate' link."
- "Create a spec-comparison grid: `#f6f6f6` background, multi-column white cards, big bold numerals (range/swap-count) at 36px/700 `#323237`, units in 14px/500 `#737d82`. Numbers are the hero."

### Iteration Guide
1. **Black is the canvas, blue is the current.** Default to grayscale; spend blue only on energy/interaction.
2. **Graphik + TC fallbacks, always.** Never drop the typeface to a generic sans on headlines.
3. **12px radius on CTAs, 50% on icon buttons.** Soft, tactile, premium.
4. **One primary CTA per hero.** Restraint is the brand.
5. **Cinematic photography full-bleed.** The Smartscooter in motion is the argument.
6. **Charge palette (blue → cyan) for battery/network states.** Don't use generic green for "charged."
7. **Traditional Chinese only on TW surfaces.** Never Simplified.
8. **Numerals bold and large** — the network's proof is in the numbers.

---

## 10. Voice & Tone

Gogoro speaks like an industrial designer who is also an environmentalist — precise, confident, and quietly idealistic, never preachy. The register is **engineered-optimistic**: short declarative sentences, concrete numbers, and a refusal of hype adjectives. English is a first-class brand voice (Gogoro is a global, Nasdaq-listed company), and Traditional Chinese is the first-class TW voice; the two are authored in parallel, not translated. The brand talks about energy, freedom, and the city as a system — but it earns those words with hard metrics (riders, kilometers, battery swaps) rather than slogans. The tagline "Ride Smarter. Refuel in seconds." is characteristic: a benefit, then a proof, no exclamation.

| Context | Tone |
|---|---|
| Hero headlines | Short, declarative, benefit-led. `Ride Smarter.` `A ride like no other.` Period, not exclamation. |
| CTAs | Imperative + concrete. `LEARN MORE`, `DISCOVER MORE`, `Find a GoStation`. All-caps on marketing chrome. |
| Spec / product copy | Precise and numeric. Range, torque, swap-time stated as facts. No marketing inflation. |
| Network / utility | Functional and reassuring — `Battery available`, `2 min walk`. The kiosk should feel as reliable as a gas pump. |
| Sustainability / mission | Idealistic but evidenced — `7 billion km traveled`, framed as collective impact, not virtue-signaling. |
| Errors (swap/account) | Blameless, actionable. State the condition, offer the next step. Never blame the rider. |
| Legal / corporate | Formal, plain. First-person-plural (`Gogoro believes…`). |

**Forbidden phrases.** Hype adjectives (`revolutionary`, `game-changing`, `world's best`) without a number behind them; exclamation marks on buttons; "eco-friendly" as decoration; Simplified-Chinese characters on TW surfaces (`网络` → `網路`, `电池` → `電池`); approximate range/spec claims (every number must be real); cute mascots or emoji in product chrome (the machine is the brand).

**Voice samples.**
- `Ride Smarter. Refuel in seconds.` — homepage value proposition <!-- verified: gogoro.com homepage copy via WebFetch 2026-05-19 -->
- `A ride like no other.` — Smartscooter page title <!-- verified: page title "Gogoro Smartscooter® — A ride like no other." 2026-05-19 -->
- `LEARN MORE` / `DISCOVER MORE` — primary marketing CTAs <!-- verified: WebFetch homepage CTA inventory 2026-05-19 -->
- `Battery available · 2 min walk` — illustrative GoStation availability string <!-- illustrative: not verified as live Gogoro copy; follows network-UI convention -->
- `Swap complete. Ride on.` — illustrative successful-swap confirmation <!-- illustrative: not verified as live Gogoro copy -->

## 11. Brand Narrative

Gogoro was founded in **2011 in Taoyuan, Taiwan**, by **Horace Luke** (former Chief Innovation Officer at HTC) and **Matt Taylor**, with a thesis bigger than a scooter: that the bottleneck for clean urban mobility was not the vehicle but the **energy infrastructure**. Their answer was the **GoStation battery-swapping network** — kiosks where a rider exchanges a depleted battery for a charged one in seconds, paid for by a monthly subscription (the **Gogoro Network**). The Smartscooter, first revealed at **CES 2015**, was the beautiful object built to prove the network worked. ([en.wikipedia.org/wiki/Gogoro](https://en.wikipedia.org/wiki/Gogoro))

The design language flows directly from that thesis. Gogoro is selling **two things that must both feel premium**: a hardware object and an invisible network. The black-dominant, photography-led, Graphik-set system makes the Smartscooter feel as considered as a flagship phone — unsurprising given Luke's HTC and design background. The electric-blue/cyan accent is not a brand-guideline whim; it is the **visual signature of the battery coming alive**, the one moment of energy in an otherwise disciplined grayscale. Every surface, from the marketing hero to the GoStation map, is in service of making "refuel in seconds" feel as trustworthy as it is futuristic.

By April 2021 the Taiwan network counted **370,000 riders** and had managed **over 175 million battery swaps** (≈265,000 per day) across **2,000 GoStations**; the company expanded into Asia, the Middle East, and Latin America, licensing its battery network to Yamaha, Aeon Motor, and Hero MotoCorp, and went public on Nasdaq in 2022. ([en.wikipedia.org/wiki/Gogoro](https://en.wikipedia.org/wiki/Gogoro)) <!-- source: Wikipedia via WebFetch 2026-05-19; not re-verified against live Gogoro data -->. In December 2020, Frost & Sullivan named Gogoro Global Company of the Year for the swappable-battery electric-scooter market. What Gogoro refuses: the toy-like pastel aesthetics of micro-mobility startups, the gas-station grime of legacy refueling, and any design that treats the battery network as plumbing rather than product.

## 12. Principles

1. **The product is the hero; the UI is the chassis.** Marketing surfaces recede into black so the Smartscooter can carry the page. *UI implication:* Default hero background to `#000000` with full-bleed product media; keep chrome minimal and let one headline + one CTA do the work. Don't decorate around the product.

2. **Blue is current, not color.** Electric blue (`#0074ff`) and cyan (`#28c3ff`) are rationed to energy moments — links, active states, battery/charge graphics. *UI implication:* If a surface has more than ~10% blue area, you're overspending the voltage. Use grayscale for structure; reserve blue for where energy is literally or interactively present.

3. **Numbers are the argument.** Range, swap-time, station count, kilometers traveled — Gogoro proves claims with metrics, not adjectives. *UI implication:* Render hero statistics large and bold (`36px+`/700). Never pair a numeric claim with hype copy; the number is the persuasion.

4. **The network must feel as reliable as a gas pump.** GoStation UI is utility, not marketing — accuracy and legibility over flourish. *UI implication:* Station/battery-availability states must be unambiguous and live-accurate; use the charge palette consistently; never animate availability in a way that implies a state that isn't real.

5. **Engineered restraint.** Graphik, tight letterspacing, soft 12px radii, flat surfaces with luminous accents — everything reads as designed by engineers with taste. *UI implication:* Prefer value-step layering over heavy shadows; keep one radius system; let typography weight (not size inflation) carry hierarchy.

6. **Two languages, both native.** English and Traditional Chinese are authored in parallel as first-class voices. *UI implication:* Never machine-translate one from the other; keep the Graphik + `PingFang TC` / `Noto Sans TC` stack so both render with equal care. Simplified Chinese is never acceptable on TW surfaces.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Gogoro user segments (Taiwanese urban commuters and the licensed-partner ecosystem), not individual people.*

**家豪 (Jia-Hao), 31, Taipei.** Daily scooter commuter who switched from a gas scooter to a Smartscooter for the GoStation convenience near his MRT exit. Opens the app mostly to find the nearest station and check battery availability before a long ride. Values "refuel in seconds" literally — he chose Gogoro because waiting at a gas station annoyed him more than the price.

**Wei-Lin, 27, Taichung.** Design-conscious early adopter who follows the product launches and treats the Smartscooter as a statement object as much as transport. Reads spec comparisons closely, cares about torque and range numbers, and shares clean studio shots of new models. Would not buy a scooter that looked "cheap."

**Mr. Lin, 45, fleet operator.** Runs a small delivery fleet and evaluates Gogoro (or a licensed Yamaha/Aeon model on the same network) on total cost of ownership and station density. Cares about uptime, swap reliability, and the subscription math — the network's coverage map is his primary decision surface.

## 14. States

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

## 15. Motion & Easing

Gogoro's motion is **cinematic on marketing, instantaneous on utility**. Hero media moves (the scooter is shown riding); UI motion is restrained and platform-native.

**Durations:**
| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, reduce-motion fallback |
| `motion-fast` | 150ms | Hover/press, icon transitions, focus rings |
| `motion-standard` | 250ms | Dropdowns, sticky-header veil, card lifts |
| `motion-slow` | 400ms | Section reveals, map pin transitions |
| `motion-cinematic` | 600ms+ | Hero media, scroll-driven product reveals |

**Easings:**
| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default two-way transitions |
| `ease-enter` | `cubic-bezier(0, 0, 0.2, 1)` | Things appearing — modals, station cards |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Dismissals |

**Spring stance.** Overshoot/bounce is **avoided** on product and utility surfaces — Gogoro's register is engineered precision, not playful elasticity. The one place energy "moves" is the **charge animation**: a blue→cyan luminance pulse on battery/swap graphics, which reads as electrical current rather than UI bounce.

**Signature motions.**
1. **Hero product reveal.** As the hero loads or scrolls into view, the Smartscooter fades/parallaxes in over `motion-cinematic / ease-enter`; the headline follows on a short delay. Coordinated, not simultaneous.
2. **Charge pulse.** Battery/charge graphics pulse a soft electric-blue→cyan glow over ~`motion-slow`, looping subtly — the only ambient motion in the system, reserved for energy.
3. **Station pin drop.** On the GoStation map, pins fade/scale in over `motion-standard / ease-enter` as the viewport resolves; the selected pin lifts to cyan.
4. **Sticky-header veil.** On scroll, the nav transitions from transparent to the translucent veil (`rgba(248,248,248,0.8)` + blur) over `motion-standard`.

**Reduce motion.** Under `prefers-reduced-motion: reduce`, hero parallax and charge pulses collapse to static states; pin drops become instant; all `motion-*` tokens fall to `motion-instant`. No exceptions.

<!--
OmD v0.1 Sources — gogoro
Created: 2026-05-19

Tier 1 (live computed-style inspection via Playwright MCP, 2026-05-19):
- gogoro.com/media-center/logos/ — body font stack Graphik, "PingFang TC", "Noto Sans TC", sans-serif;
  text rgb(50,50,55)=#323237 (dominant, 194x); rgb(0,116,255)=#0074ff (blue, 11x);
  rgb(40,195,255)=#28c3ff (cyan); rgb(246,246,246)=#f6f6f6 surface; #000000 chrome;
  rgb(115,125,130)=#737d82 gray-mid; rgb(185,188,191)=#b9bcbf gray-light;
  rgb(222,226,230)=#dee2e6 border; rgb(43,150,237)=#2b96ed CTA-blue (12px radius, 14px/600,
  observed on header account CTA); circular 48/58px icon controls.
- gogoro.com homepage + smartscooter page — WebFetch 2026-05-19: tagline "Ride Smarter. Refuel in
  seconds.", page title "A ride like no other.", CTAs "LEARN MORE"/"DISCOVER MORE",
  stats 524,000+ riders / 7 billion km.

Tier 2 (philosophy/founders):
- en.wikipedia.org/wiki/Gogoro (WebFetch 2026-05-19) — founded 2011 Taoyuan by Horace Luke + Matt
  Taylor; GoStation battery swap; CES 2015 Smartscooter reveal; Apr 2021: 370k riders, 175M+ swaps,
  2000 GoStations; Yamaha/Aeon/Hero licensing; Nasdaq 2022; Frost & Sullivan Global Company of the
  Year Dec 2020. Not re-verified against primary Gogoro sources.

NOTE ON PRIMARY COLOR: The creation brief suggested "#000000 / accent green (verify)". Live
inspection found NO green in Gogoro's system — the accent is electric blue (#0074ff) + cyan
(#28c3ff). primary_color set to #000000 (the dominant chrome canvas, brand-accurate). The green
suggestion was NOT confirmed and has been corrected to the live-observed blue/cyan voltage palette.

Illustrative (not verified as live copy): GoStation availability strings, swap-confirmation copy,
semantic state hexes, type scale (inferred from category + observed chrome). Marked inline.
Personas are fictional archetypes (disclaimer in §13).
-->

---

**Verified:** 2026-05-19
**Tier 1 sources:** gogoro.com/media-center/logos/ (live computed style — Graphik + TC stack, `#323237` text, `#0074ff` blue, `#28c3ff` cyan, `#f6f6f6` surface, `#2b96ed` CTA 12px·14px/600, `#000000` chrome); gogoro.com home + /smartscooter (WebFetch — tagline, CTAs, stats).
**Tier 2 sources:** styles.refero.design / getdesign.md — not checked this pass (browser session unreliable).
**Tier 2 (Philosophy/founders):** Wikipedia (Gogoro — Horace Luke / Matt Taylor / 2011 Taoyuan / GoStation / CES 2015 / Nasdaq 2022).
**Style ref:** premium-industrial (TW). **Conflicts unresolved:** brief's "accent green" corrected to live-observed electric blue/cyan (no green present in the system).

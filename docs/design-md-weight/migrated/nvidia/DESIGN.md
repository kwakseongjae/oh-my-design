# NVIDIA Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

NVIDIA's current self-description is that it "pioneered accelerated computing to tackle challenges no one else can solve." This contract covers the two first-party website surfaces named in the source footer as live-DOM captures: the public homepage at `https://www.nvidia.com/en-us/` and the H100 data-center page at `https://www.nvidia.com/en-us/data-center/h100/`. `https://developer.nvidia.com/` is a named source for verified developer microcopy. `https://www.nvidia.com/en-us/about-nvidia/`, `https://www.nvidia.com/en-us/about-nvidia/corporate-timeline/`, `https://blogs.nvidia.com/blog/what-is-accelerated-computing/`, and `https://www.nvidia.com/en-us/research/` are named sources for company self-description, founding chronology, the accelerated-computing quote, and research phrasing; they do not by themselves supply the interface tokens below. Treating those two footer-named pages as this contract's token surfaces, keeping the developer portal as a microcopy source rather than a token-capture surface, and keeping About, timeline, blog, and Research as narrative sources that do not automatically supply computed interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not NVIDIA-authored or a separately published UI specification.
<!-- design-md:claim-end -->

NVIDIA's website is a high-contrast, technology-forward experience that communicates raw computational power through design restraint. The page is built on a stark black (`#000000`) and white (`#ffffff`) foundation, punctuated by NVIDIA's signature green (`#76b900`) — a color so specific it functions as a brand fingerprint. This is not the lush green of nature; it's the electric, lime-shifted green of GPU-rendered light, a color that sits between chartreuse and kelly green and immediately signals "NVIDIA" to anyone in technology. The custom NVIDIA-EMEA font family (with Arial and Helvetica fallbacks) creates a clean, industrial typographic voice. Headings at 36px bold with tight 1.25 line-height create dense, authoritative blocks of text. The font lacks the geometric playfulness of Silicon Valley sans-serifs — it's European, pragmatic, and engineering-focused. Body text runs at 15-16px, comfortable for reading but not generous, maintaining the sense that screen real estate is optimized like GPU memory. What distinguishes NVIDIA's design from other dark-background tech sites is the disciplined use of the green accent. The `#76b900` appears in borders (`2px solid #76b900`), link underlines (`underline 2px rgb(118, 185, 0)`), and CTAs — but never as backgrounds or large surface areas on the main content. The green is a signal, not a surface. Combined with a deep shadow system (`rgba(0, 0, 0, 0.3) 0px 0px 5px`) and minimal border radius (1-2px), the overall effect is of precision engineering hardware rendered in pixels. The hex values, family name, fallbacks, 36px / 1.25, 15-16px, `2px solid #76b900`, `underline 2px rgb(118, 185, 0)`, and the shadow string are the source's own. The characterizations in this paragraph — high-contrast and technology-forward; raw computational power through design restraint; green as a brand fingerprint; not the lush green of nature but the electric lime-shifted green of GPU-rendered light; between chartreuse and kelly green; industrial typographic voice; European, pragmatic, and engineering-focused; screen real estate optimized like GPU memory; green as a signal not a surface; precision engineering hardware rendered in pixels — are a derived editorial implementation inference from the verified surfaces; they are not NVIDIA-authored or a separately published UI specification.

The source footer records a second, unmerged live-DOM chrome writing on the same two pages: NVIDIA Lime Green `#76b900` fill, Black `#000` text, 0px sharp, three-tier height (42 utility / 46 newsletter / 49 hero), padding 11-13×13-15, 16-18px·**700** Bold strict — "most consistent single-system chrome in the corpus." That footer writing is not a replacement for the YAML / §4 outline-button writing (`transparent` background, `2px solid #76b900`, radius 2, padding `11px 13px`, `fg` `#000000`). Both writings stay. Keeping those two chrome writings unmerged, rather than choosing the fill or the outline as a replacement, is a derived editorial implementation inference from the verified surfaces; it is not NVIDIA-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. NVIDIA was founded **April 5 1993** at a **Denny's in East San Jose** by **Jensen Huang** (Taiwanese-American electrical engineer, ex-CoreWare director at LSI Logic and microprocessor designer at AMD), **Chris Malachowsky** (engineer ex-Sun Microsystems), and **Curtis Priem** (engineer ex-IBM/Sun Microsystems) — initial capital **$40,000**; the booth where they founded the company **received an official plaque inscribed "The NVIDIA Booth — The booth that launched a trillion-dollar company"**. Huang famously **worked his first job at Denny's as a dishwasher**, working up to waiter — a biographical detail he cites publicly. Mission at founding: "bring 3D graphics to the gaming and multimedia markets." The founding bet was that a dedicated parallel processor for graphics would, over a long enough time horizon, matter more than faster general-purpose CPUs. In **1999** the company shipped what it called the first GPU; in **2006** it opened that parallel architecture to general computation with **CUDA**; **2018 RTX** is named among the source's timeline milestones; and in **2012 AlexNet (GPU-trained neural network) won ImageNet** by a margin large enough that the modern AI era is effectively dated to that result. **2022: H100 (Hopper architecture)** shipped — 80GB HBM, 4th-gen Tensor Cores w/ FP8, Transformer Engine — became the de-facto frontier-AI training/inference GPU. **July 9 2025**: NVIDIA became the **first company in history to reach $4T market cap**. **October 30 2025**: hit **$5T**, again first company in history. The thread is visible only in retrospect — graphics was the training ground, CUDA was the pivot, AI was the payoff — but none of it was accidental.

The current self-description collapses that history into one line: NVIDIA *"pioneered accelerated computing to tackle challenges no one else can solve"*. The framing is deliberate. "Accelerated computing" is a category claim, not a product claim — the argument is that the industry's default (CPU-only, general-purpose) has stopped scaling, and that parallel processors plus domain-specific software stacks (CUDA, cuDNN, TensorRT, Omniverse) are *the only path forward*. Jensen Huang puts the sustainability case plainly: *"Figuring out how to do more while using less power is the key to driving flexibility, scalability and sustainability. Given this, every data center in the world should be accelerated."*

What NVIDIA refuses: soft differentiation, consumer-brand warmth in enterprise contexts, and "AI" as a marketing wrapper divorced from the underlying compute. What it embraces: metric-first claims, platform-over-product thinking, long research horizons ("positive change to the world" framing on the Research page), and the conviction — stated at GTC keynotes and repeated across the brand — that accelerated computing is not a performance upgrade but a generational re-architecture.

The source carries, and marks as not independently re-verified for its Philosophy layer, the numerical claim of over 4 million developers and ~40,000 companies on NVIDIA AI. Founding date, founders, capital, plaque inscription, founding mission, 1999 GPU, 2006 CUDA, 2012 AlexNet, 2018 RTX, 2022 H100 with 80GB HBM / 4th-gen Tensor Cores / FP8 / Transformer Engine, July 9 2025 $4T, October 30 2025 $5T, the self-description, the Jensen Huang sustainability quote, CUDA / cuDNN / TensorRT / Omniverse, and GTC as a named keynote surface are the source's own recordings. Classifying that founding-and-milestone narrative, the "thread is visible only in retrospect" sentence, the category-claim reading of "accelerated computing," the refuses/embraces pairing, and the closing sentence that accelerated computing is not a performance upgrade but a generational re-architecture, as brand context that does not by itself supply interface tokens, is a derived editorial implementation inference from the verified surfaces; it is not NVIDIA-authored or a separately published UI specification.

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not NVIDIA-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.

- Act on a homepage CTA labelled `Learn More`, `Register Now`, `Watch On Demand`, `Out Now`, or `Read Blog`.
- Scan a capability-and-metric headline on the captured homepage, including `NVIDIA Delivers the Lowest Token Cost`.
- Follow a green-bordered primary CTA (`Learn More`, `Explore Solutions`) on the captured NVIDIA website.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. Dropping the fictional biographies rather than promoting them, and carrying no name, age, city, motivation, or affiliation classification, are derived editorial implementation inferences from the verified surfaces; they are not NVIDIA-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, is a derived editorial implementation inference from the verified surfaces; it is not NVIDIA-authored or a separately published UI specification.

- NVIDIA Green (`#76b900`) as pure accent — borders, underlines, and interactive highlights only
- Black (`#000000`) dominant background with white (`#ffffff`) text on dark sections
- NVIDIA-EMEA custom font with Arial/Helvetica fallback — industrial, European, clean
- Tight line-heights (1.25 for headings) creating dense, authoritative text blocks
- Minimal border radius (1-2px) — sharp, engineered corners throughout
- Green-bordered buttons (`2px solid #76b900`) as primary interactive pattern
- Font Awesome 6 Pro/Sharp icon system at weight 900 for sharp iconography
- Multi-framework architecture (PrimeReact, Fluent UI, Element Plus) enabling rich interactive components
- A second, unmerged live-DOM chrome writing: filled `#76b900` + Black `#000` text + 0px sharp + 700, in three height tiers (42 / 46 / 49)

### Principles

These 9 items are a derived editorial implementation inference from the verified surfaces; they are not NVIDIA-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Metric over adjective.** If a capability can be measured, ship the measurement; if it can't, don't ship the claim. "Lowest token cost" beats "world-class performance" because one number is falsifiable and one adjective is boilerplate. *UI implication:* Every hero claim carries an inline metric, a benchmark link, or a named model; adjective-only headlines fail review.
2. **The green is a signal, not a surface.** NVIDIA Green (`#76b900`) is the brand's fingerprint — used as border, underline, and focal accent. Treating it as a surface fill destroys the signal, because the eye loses the ability to find it. *UI implication:* Green appears only on 1–2px borders, 2px underlines, focus rings, and single-element highlights. Never as a button fill, card background, or gradient base.
3. **Black and white are binary by design.** The contrast system is intentionally bimodal — `#000000` sections and `#ffffff` sections, alternating. Mid-tone gray surfaces dilute the engineering clarity and push the brand toward generic SaaS. *UI implication:* No tinted-gray cards or soft-surface backgrounds; section backgrounds are black, white, or `#1a1a1a` with a clearly separating border.
4. **Sharp corners match the hardware.** 1–2px border radius across buttons, cards, and inputs is not a stylistic choice; it's a category signal. Consumer brands use pills; engineering hardware uses rectangles. *UI implication:* `border-radius: 2px` is the default for every component. Pills and fully rounded (≥16px) shapes are reserved for avatars or explicitly playful surfaces.
5. **Bold weight is the default voice.** Weight 700 carries headlines, buttons, labels, and navigation; weight 400 is reserved for reading prose. This weight distribution projects authority at every scan level. *UI implication:* All interactive and structural text is bold. Regular weight appears only in paragraph body, descriptions, and long-form reading contexts.
6. **Uppercase navigation, declarative CTAs.** Uppercase 14px links at the top of the page read as hardware-specification labels, not lifestyle taglines. CTAs are verb + noun (or single verb), two words when possible. *UI implication:* Nav labels use `text-transform: uppercase`; CTAs follow the "Learn More / Register Now / Read Blog" pattern — no sentences, no punctuation, no "Discover your..." openings.
7. **Platform thinking, not product thinking.** Every NVIDIA product (RTX, CUDA, TensorRT, Omniverse, NIM) is presented as a layer in a stack, not a standalone feature. The page architecture reflects the stack: silicon → system software → libraries → applications. *UI implication:* Product landing pages show the layer directly above and below; "See the full stack" is a default navigation affordance.
8. **Long time horizons over hype cycles.** The GPU-to-AI pivot took roughly fifteen years (1999 GPU → 2006 CUDA → 2012 AlexNet). Copy and roadmaps should honor that timescale — capabilities ship when the silicon, software, and developer ecosystem align, not when the news cycle wants them. *UI implication:* Release announcements reference prior generations by name and version; "introducing for the first time" claims require a specific prior-art delta.
9. **Research is public or it is not research.** NVIDIA Research publishes papers, releases libraries (Kaolin, Sionna, Imaginaire, CUDA-X), and runs Inception for startups. Research surfaces treat openness as a deliverable, not a side effect. *UI implication:* Every research page links to the paper, the code repository, and the redistribution license in the same surface — not buried in a footer.

The source's own comment labels the "sharp corners as a hardware category signal" reading as an editorial reading, not a documented NVIDIA statement. Keeping that evidence-class note adjacent here is a derived editorial implementation inference from the verified surfaces; it is not NVIDIA-authored or a separately published UI specification.

### Application rules

The source states these as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not NVIDIA-authored or a separately published UI specification.

- **DO** use NVIDIA Green `#76b900` exclusively as a SIGNAL color — borders, link underlines, button outlines, focus states.
- **DO** keep the foundation black-and-white. Black `#000000` for dark sections, white `#ffffff` for content, with green pinpricks of accent.
- **DO** use sharp 1-2px border radius across all components — buttons, cards, inputs.
- **DO** apply tight 1.25 line-height to headings for dense, authoritative blocks of text.
- **DO** use `2px solid #76b900` as the primary button border pattern — green-outlined CTAs are the brand's default interactive shape.
- **DO** use Font Awesome 6 Pro/Sharp at weight 900 for sharp iconography matching the engineering aesthetic.

### Avoid

The source states these as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not NVIDIA-authored or a separately published UI specification.

- **DON'T** use the green as a fill on large surfaces, backgrounds, or decorative gradients — that destroys its function as a fingerprint accent.
- **DON'T** introduce mid-tone backgrounds (gray cards, tinted sections) — NVIDIA's contrast is binary by design.
- **DON'T** use rounded or pill-shaped buttons — that reads as friendly consumer tech, not high-precision engineering hardware.
- **DON'T** use generous 1.5+ line-height on display headers — it relaxes the engineered, compressed feel.
- **DON'T** use filled green buttons as the primary pattern — fills belong to consumer brands; NVIDIA reserves green for outlines and accents.
- **DON'T** use rounded or playful icon sets — they conflict with NVIDIA's industrial precision.

The Don't list's "filled green buttons" prohibition and the footer live-DOM filled `#76b900` chrome are both in the source. They stay unmerged. Not choosing one as a replacement is a derived editorial implementation inference from the verified surfaces; it is not NVIDIA-authored or a separately published UI specification.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, keeping `#000000` as both True Black page background and text on light surfaces rather than collapsing those jobs, keeping `#ffffff` as both text on dark backgrounds and light section / card surfaces, keeping `#76b900` on the outline-accent writing and on the footer filled-chrome writing as two unmerged jobs, keeping `#1a1a1a` as Near Black rather than as True Black, keeping Green 500 (`#3f8500`) off brand green, keeping `#666666` muted-link color off the YAML gray keys, and keeping the §9 footer-link hover writing unmerged from the YAML / §2 link-hover writing, are derived editorial implementation inferences from the verified surfaces; they are not NVIDIA-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

**Primary Brand**

- **NVIDIA Green** (`#76b900`): The signature — borders, link underlines, CTA outlines, active indicators. Never used as large surface fills. Token-set path `tokens.colors.primary`. Also written as `rgb(118, 185, 0)` in the source's underline rule `underline 2px rgb(118, 185, 0)`. Footer live-DOM chrome also records this hex as a filled Primary background; that job stays on the component record and is not a replacement for this accent-role writing.
- **True Black** (`#000000`): Primary page background, text on light surfaces, dominant tone. Token-set path `tokens.colors.ink`.
- **Pure White** (`#ffffff`): Text on dark backgrounds, light section backgrounds, card surfaces. Token-set path `tokens.colors.canvas`.

**Extended Brand Palette**

- **NVIDIA Green Light** (`#bff230`): Bright lime accent for highlights and hover states. Token-set path `tokens.colors.primary-light`.
- **Orange 400** (`#df6500`): Warm accent for alerts, featured badges, or energy-related contexts. Token-set path `tokens.colors.orange`.
- **Yellow 300** (`#ef9100`): Secondary warm accent, product category highlights. Token-set path `tokens.colors.yellow`.
- **Yellow 050** (`#feeeb2`): Light warm surface for callout backgrounds. Token-set path `tokens.colors.yellow-tint`.

**Status & Semantic**

- **Red 500** (`#e52020`): Error states, destructive actions, critical alerts. Token-set path `tokens.colors.error`.
- **Red 800** (`#650b0b`): Deep red for severe warning backgrounds. Token-set path `tokens.colors.error-deep`.
- **Green 500** (`#3f8500`): Success states, positive indicators (darker than brand green). Token-set path `tokens.colors.success`.
- **Blue 700** (`#0046a4`): Informational accents, link hover alternative. Token-set path `tokens.colors.info`.

**Decorative**

- **Purple 800** (`#4d1368`): Deep purple for gradient ends, premium/AI contexts. Token-set path `tokens.colors.purple`.
- **Purple 100** (`#f9d4ff`): Light purple surface tint. Token-set path `tokens.colors.purple-tint`.
- **Fuchsia 700** (`#8c1c55`): Rich accent for special promotions or featured content. Token-set path `tokens.colors.fuchsia`.

**Neutral Scale**

- **Gray 300** (`#a7a7a7`): Muted text, disabled labels. Token-set path `tokens.colors.gray-300`.
- **Gray 400** (`#898989`): Secondary text, metadata. Token-set path `tokens.colors.gray-400`.
- **Gray 500** (`#757575`): Tertiary text, placeholders, footers. Token-set path `tokens.colors.gray-500`.
- **Gray Border** (`#5e5e5e`): Subtle borders, divider lines. Token-set path `tokens.colors.gray-border`.
- **Near Black** (`#1a1a1a`): Dark surfaces, card backgrounds on black pages. Token-set path `tokens.colors.near-black`.

**Interactive States**

- **Link Default (dark bg)** (`#ffffff`): White links on dark backgrounds.
- **Link Default (light bg)** (`#000000`): Black links with green underline on light backgrounds.
- **Link Hover** (`#3860be`): Blue shift on hover across all link variants. Token-set path `tokens.colors.link-hover`. The source's §9 footer prompt also writes footer-link hover as `#76b900`; that writing stays unmerged from `#3860be`.
- **Button Hover** (`#1eaedb`): Teal highlight for button hover states. Token-set path `tokens.colors.button-hover`.
- **Button Active** (`#007fff`): Bright blue for active/pressed button states. Token-set path `tokens.colors.button-active`.
- **Focus Ring** (`#000000 solid 2px`): Black outline for keyboard focus.
- **Muted Links** (`#666666`): hover shifts to `#3860be`. This hex is not a YAML `tokens.colors` key.

**§9 quick-color restatement, kept as written (not a replacement for the roles above):** Primary accent `#76b900`; background dark `#000000`; background light `#ffffff`; heading text (dark bg) `#ffffff`; heading text (light bg) `#000000`; body text (light bg) `#000000` or `#1a1a1a`; body text (dark bg) `#ffffff` or `#a7a7a7`; link hover `#3860be`; border accent `2px solid #76b900`; button hover `#1eaedb`.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept on their own path): `base: 16` · `lg: 24`.

Source §5 also writes a longer scale. Both writings stay. `tokens.spacing.base: 16` is a spacing step. It is not `tokens.typography.body.size` `16`, not button font `16`, not card padding `16-24px`. `tokens.spacing.lg: 24` is not section heading `24px` and not section spacing `48-80px`. Keeping the YAML unitless pair off the §5 px scale, and keeping those writings of `16` and `24` on their own records rather than choosing one as a replacement, are derived editorial implementation inferences from the verified surfaces; they are not NVIDIA-authored or a separately published UI specification.

- Base unit: 8px
- Scale: 1px, 2px, 3px, 4px, 5px, 6px, 7px, 8px, 9px, 10px, 11px, 12px, 13px, 15px
- Primary padding values: 8px, 11px, 13px, 16px, 24px, 32px
- Section spacing: 48-80px vertical padding
- Card density: Product cards sit close together with 16-20px gaps
- §9 dark-feature prompt: three product cards in a row with 20px gap

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `tokens.rounded.sm: 2` · `tokens.rounded.md: 2` · `tokens.rounded.lg: 2` · `tokens.rounded.full: 9999`.

- Micro (1px): Inline spans, tiny elements
- Standard (2px): Buttons, cards, containers, inputs — the default for nearly everything. YAML `tokens.rounded.sm: 2`, `tokens.rounded.md: 2`, and `tokens.rounded.lg: 2` are three keys that share the unitless value `2`; they stay three keys.
- Circle (50%): Avatar images, circular tab indicators
- YAML `tokens.rounded.full: 9999`: kept on its own path. It is not the 50% avatar writing, not Micro 1px, and not the footer live-DOM `0px` writing.

§1 also writes "minimal border radius (1-2px)." The footer live-DOM chrome writes `0px` sharp. Those range and 0px writings stay unmerged from `tokens.rounded.sm: 2`. Keeping `sm` / `md` / `lg` as three keys, keeping `full: 9999` off prose `50%`, keeping Micro `1px` off Standard `2px`, and keeping footer `0px` off YAML `2`, are derived editorial implementation inferences from the verified surfaces; they are not NVIDIA-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page backgrounds, inline text |
| Subtle (Level 1) | `rgba(0,0,0,0.3) 0px 0px 5px 0px` | Standard cards, modals |
| Border (Level 1b) | `1px solid #5e5e5e` | Content dividers, section borders |
| Green accent (Level 2) | `2px solid #76b900` | Active elements, CTAs, selected items |
| Focus (Accessibility) | `2px solid #000000` outline | Keyboard focus ring |

YAML `tokens.shadow.card` is `rgba(0,0,0,0.3) 0px 0px 5px 0px`. Source §2 writes the same shadow with spaces as `rgba(0, 0, 0, 0.3) 0px 0px 5px 0px`. Source §1 writes `rgba(0, 0, 0, 0.3) 0px 0px 5px` without the trailing `0px`. All three writings stay.

The following elevation reading, and keeping the three shadow-string writings unmerged rather than choosing one spelling as a replacement, are a derived editorial implementation inference from the verified surfaces; they are not NVIDIA-authored or a separately published UI specification. NVIDIA's depth system is minimal and utilitarian. There is essentially one shadow value — a 5px ambient blur at 30% opacity — used sparingly for cards and modals. The primary depth signal is not shadow but _color contrast_: black backgrounds next to white sections, green borders on black surfaces. This creates hardware-like visual layering where depth comes from material difference, not simulated light.

**Decorative Depth** (source §6, kept as written): Green gradient washes behind hero content; dark-to-darker gradients (black to near-black) for section transitions; no glassmorphism or blur effects — clarity over atmosphere.

### Motion

Duration roles as this record states them, with no computed transition observation behind them, are a derived editorial implementation inference from the verified surfaces; they are not NVIDIA-authored or a separately published UI specification.

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Focus ring, active-state color commit, toggle snap |
| `motion-fast` | 140ms | Hover color shifts, button underline, link color transition |
| `motion-standard` | 240ms | Dropdown mega-menus, accordion expand, tab switch |
| `motion-slow` | 380ms | Section crossfades, full-width hero image transitions |

Easing token names and uses as this record states them, with the curves omitted, are a derived editorial implementation inference from the verified surfaces; they are not NVIDIA-authored or a separately published UI specification.

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | Omitted — the token name and use are recorded and no curve evidence is attributed | Two-way transitions, menu open/close, card reveal |
| `ease-enter` | Omitted — the token name and use are recorded and no curve evidence is attributed | Incoming panels, modal entry |
| `ease-exit` | Omitted — the token name and use are recorded and no curve evidence is attributed | Dismissals, menu collapse, toast auto-removal |

**Spring / overshoot stance — forbidden on product UI.** No `cubic-bezier(0.34, 1.56, 0.64, 1)` or any spring/overshoot curve in interface motion. Rationale: NVIDIA's brand equity is engineering precision — benchmarks, tolerances, thermal envelopes. Bounce reads as consumer-toy animation, which undermines the datasheet register that the rest of the system earns. The one environment where NVIDIA tolerates theatrical motion is the GTC keynote stage — large-scale product reveals, orchestral score, stage pyrotechnics — but that is a broadcast surface, not a UI surface, and its motion vocabulary does not propagate into the website or developer portal. For product UI, motion is linear-to-standard-ease at most; arrival is considered, never springy. The source's own comment labels the GTC-as-only-theatrical-surface claim as an editorial reading inferred from public keynote recordings vs product-UI motion observation, not a documented brand-team statement. That spring-stance rationale, the GTC carve-out, and the "linear-to-standard-ease at most" reading are a derived editorial implementation inference from the verified surfaces; they are not NVIDIA-authored or a separately published UI specification. The forbidden-curve string and the GTC-is-broadcast-not-UI boundary are the source's own sentences.

**Signature motions.** The four signature-motion descriptions, including the fingerprint-behavior, count-up-as-real-number, and single-coordinated-surface readings, are a derived editorial implementation inference from the verified surfaces; they are not NVIDIA-authored or a separately published UI specification.

1. **Green-edge reveal.** Section transitions on marketing surfaces use a 380ms crossfade where the green accent border (`2px #76b900`) is the last element to land — the content appears at `motion-standard`, the green underline draws in at `motion-slow`, completing slightly after. This gives the brand green its fingerprint behavior: it is what the eye lands on last.
2. **Metric counter.** On benchmark pages, large numeric claims animate via count-up over `motion-slow` (380ms), linear easing, only on first viewport entry. The count-up is a direct signal that the number is real and freshly rendered, not a screenshot. It runs once per session; re-scroll does not re-trigger.
3. **Mega-menu expand.** Top-nav dropdowns expand at `motion-standard` using `ease-standard`, with the green underline on the active parent link animating in simultaneously. No stagger, no nested animations — the menu is a single coordinated surface.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Metric counters render at their final value without animation. Green-edge reveals materialize the accent with the content, not after. No spinner, no shimmer, no parallax at any time.

The three exact cubic-bezier curves carry no attribution in this record and stay omitted rather than promoted. `ease-exit`'s omitted value matches the legacy authoring template; `ease-enter` and `ease-standard` match that template's other two examples. Naming those five evidence kinds as the promotion gate, refusing a partial confirmation, and refusing a match against an official framework or vendor document as that gate, are a derived editorial implementation inference from the verified surfaces; they are not NVIDIA-authored or a separately published UI specification. Do not promote an easing curve, an animation name, a CSS transition property, or a duration beyond the table above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, and the resolution in each cell, is a derived editorial implementation inference from the verified surfaces; it is not NVIDIA-authored or a separately published UI specification. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Official product-use | This record names `NVIDIA-EMEA` as the custom family and does not publish a separate type specification URL. |
| Live computed surface-use | Headings, buttons, links, and body on the captured website use NVIDIA-EMEA. YAML also records `tokens.typography.family.mono` as `NVIDIA-EMEA`. |
| Fallback stack | `Arial, Helvetica, sans-serif`. That stack is not presented as the brand face. |
| Icon fonts | `Font Awesome 6 Pro` (weight 900 for solid icons, 700 for regular); `Font Awesome 6 Sharp` (weight 300 for light icons, 400 for regular). |
| Official distributed asset | The record establishes the family in use and carries no NVIDIA-distributed font file URL. |
| License | No license or distribution statement accompanies NVIDIA-EMEA in this record. |
| Outside these captures | About, timeline, blog, and Research pages contributed narrative, not type tokens. |

### Family

- **Primary:** `NVIDIA-EMEA`, with fallbacks: `Arial, Helvetica, sans-serif`. Token-set path `tokens.typography.family.sans`.
- **Mono (YAML):** `NVIDIA-EMEA`. Token-set path `tokens.typography.family.mono`.
- **Icon Font:** `Font Awesome 6 Pro` (weight 900 for solid icons, 700 for regular)
- **Icon Sharp:** `Font Awesome 6 Sharp` (weight 300 for light icons, 400 for regular)

Do not substitute a system font or the Arial/Helvetica fallback for NVIDIA-EMEA and present it as the brand face. Calling NVIDIA-EMEA the custom family that carries UI text, keeping YAML `mono` as the same family name rather than inventing a monospace face, and refusing to present the fallback stack as the brand face, are derived editorial implementation inferences from the verified surfaces; they are not NVIDIA-authored or a separately published UI specification. The family name and the fallbacks are the source's own.

### Type roles

YAML writes numeric sizes and line heights without a `px` suffix. Source §3 writes the same roles with `px` and rem. YAML records 11 roles; §3 records 18 rows. All writings stay. YAML lineHeight values stay as those numbers and are never converted to a replacement px. Pairing each YAML role to the token-set path named beside it, keeping YAML `use` strings verbatim, keeping the longer §3 notes beside them, keeping YAML `16` off `tokens.spacing.base: 16`, keeping YAML `micro` `10` / `1.5` / `Uppercase tiny badges` off §3 Micro `11px` / `1.00` / `Smallest UI text`, keeping Link and Link Uppercase as two rows, and keeping Body Bold / Body Small / Body Small Bold / Button Large / Caption Small as §3-only rows, are derived editorial implementation inferences from the verified surfaces; they are not NVIDIA-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Letter spacing | Token-set use | Notes |
|---|---|---|---:|---|---|---|---|
| Display Hero | NVIDIA-EMEA | YAML `36` / §3 `36px (2.25rem)` | 700 | YAML `1.25` / §3 `1.25 (tight)` | normal | Maximum impact headlines | Maximum impact headlines |
| Section Heading | NVIDIA-EMEA | YAML `24` / §3 `24px (1.50rem)` | 700 | YAML `1.25` / §3 `1.25 (tight)` | normal | Section titles, card headings | Section titles, card headings |
| Sub-heading | NVIDIA-EMEA | YAML `22` / §3 `22px (1.38rem)` | 400 | YAML `1.75` / §3 `1.75 (relaxed)` | normal | Feature descriptions, subtitles | Feature descriptions, subtitles |
| Card Title | NVIDIA-EMEA | YAML `20` / §3 `20px (1.25rem)` | 700 | YAML `1.25` / §3 `1.25 (tight)` | normal | Card and module headings | Card and module headings |
| Body Large | NVIDIA-EMEA | YAML `18` / §3 `18px (1.13rem)` | 700 | YAML `1.67` / §3 `1.67 (relaxed)` | normal | Emphasized body, lead paragraphs | Emphasized body, lead paragraphs |
| Body | NVIDIA-EMEA | YAML `16` / §3 `16px (1.00rem)` | 400 | YAML `1.5` / §3 `1.50` | normal | Standard reading text | Standard reading text. §1 also writes body as `15-16px`; that range stays unmerged. |
| Body Bold | NVIDIA-EMEA | §3 `16px (1.00rem)` | 700 | §3 `1.50` | normal | not a YAML key | Strong labels, nav items |
| Body Small | NVIDIA-EMEA | §3 `15px (0.94rem)` | 400 | §3 `1.67 (relaxed)` | normal | not a YAML key | Secondary content, descriptions |
| Body Small Bold | NVIDIA-EMEA | §3 `15px (0.94rem)` | 700 | §3 `1.50` | normal | not a YAML key | Emphasized secondary content |
| Button Large | NVIDIA-EMEA | §3 `18px (1.13rem)` | 700 | §3 `1.25 (tight)` | normal | not a YAML key | Primary CTA buttons. Footer live-DOM hero chrome also writes 18px·700. |
| Button | NVIDIA-EMEA | YAML `16` / §3 `16px (1.00rem)` | 700 | YAML `1.25` / §3 `1.25 (tight)` | normal | Standard buttons | Standard buttons |
| Button Compact | NVIDIA-EMEA | YAML `14.4` / §3 `14.4px (0.90rem)` | 700 | YAML `1.0` / §3 `1.00 (tight)` | YAML `0.144` / §3 `0.144px` | Small/compact buttons | Small/compact buttons |
| Link | NVIDIA-EMEA | YAML `14` / §3 `14px (0.88rem)` | 700 | YAML `1.43` / §3 `1.43` | normal | Navigation links, uppercase nav labels | Navigation links |
| Link Uppercase | NVIDIA-EMEA | §3 `14px (0.88rem)` | 700 | §3 `1.43` | normal | YAML use covers this row too | `text-transform: uppercase`, nav labels |
| Caption | NVIDIA-EMEA | YAML `14` / §3 `14px (0.88rem)` | 600 | YAML `1.5` / §3 `1.50` | normal | Metadata, timestamps | Metadata, timestamps |
| Caption Small | NVIDIA-EMEA | §3 `12px (0.75rem)` | 400 | §3 `1.25 (tight)` | normal | not a YAML key | Fine print, legal |
| Micro Label | NVIDIA-EMEA | YAML `10` / §3 `10px (0.63rem)` | 700 | YAML `1.5` / §3 `1.50` | normal | Uppercase tiny badges | `text-transform: uppercase`, tiny badges |
| Micro | NVIDIA-EMEA | §3 `11px (0.69rem)` | 700 | §3 `1.00 (tight)` | normal | not a YAML key | Smallest UI text |

Token-set paths: `tokens.typography.display-hero` · `tokens.typography.section` · `tokens.typography.subheading` · `tokens.typography.card-title` · `tokens.typography.body-lg` · `tokens.typography.body` · `tokens.typography.button` · `tokens.typography.button-compact` · `tokens.typography.link` · `tokens.typography.caption` · `tokens.typography.micro`.

The following type-hierarchy readings are a derived editorial implementation inference from the verified surfaces; they are not NVIDIA-authored or a separately published UI specification. The weight numbers, line-height numbers, `text-transform: uppercase`, and `0.144px` tracking are the source's own.

- **Bold as the default voice**: NVIDIA leans heavily on weight 700 for headings, buttons, links, and labels. The 400 weight is reserved for body text and descriptions — everything else is bold, projecting confidence and authority.
- **Tight headings, relaxed body**: Heading line-height is consistently 1.25 (tight), while body text relaxes to 1.50-1.67. This contrast creates visual density at the top of content blocks and comfortable readability in paragraphs.
- **Uppercase for navigation**: Link labels use `text-transform: uppercase` with weight 700, creating a navigation voice that reads like hardware specification labels.
- **No decorative tracking**: Letter-spacing is normal throughout, except for compact buttons (0.144px). The font itself carries the industrial character without manipulation.

### Assets

- Catalog logo entry: `type: simpleicons`, `slug: nvidia`. Reading that as a catalog identity pointer rather than an NVIDIA-hosted brand file is a derived editorial implementation inference from the verified surfaces; it is not NVIDIA-authored or a separately published UI specification.
- Product/GPU renders as hero images, often full-width.
- Screenshot images with subtle shadow for depth.
- Green gradient overlays on dark hero sections.
- Circular avatar containers with 50% radius.
- Font Awesome 6 Pro/Sharp as the recorded icon system.
- Prominent NVIDIA wordmark, logo left-aligned in navigation.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source records default, hover, active/pressed, and focus treatments on the outline Primary, plus a separate live-DOM filled-chrome writing in the footer, plus a twelve-row §14 state table. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. A generic Focus capture is not `focus-visible` treatment evidence; `focus-visible` stays applicable and that Focus treatment is kept as an observed Focus state. This is not a complete state-coverage claim.

A `Primitive type` line is attached only when the source YAML records that type on that component. YAML records `type: button` on `tokens.components.button-primary`, `tokens.components.button-secondary`, and `tokens.components.button-compact`; `type: card` on `tokens.components.card` and `tokens.components.card-dark`. Links, Navigation, Image Treatment, Product Cards, Tech Spec Tables, Cookie/Consent Banner, and the footer live-DOM filled-chrome writing are labelled `not in the token set`. Light and dark cards have recorded geometry and a hover note ("shadow intensification") without interactive-kind evidence, so kind and a state-applicability map are omitted for them rather than assumed (C4). Tech Spec Tables and Image Treatment are `kind: non-interactive`.

The following applicability note, every interactive-kind verdict, every applicability verdict, the reason given for either, the omit-kind decision for the two YAML cards, the refusal to attach a YAML primitive type that the token set does not record, labelling every non-YAML component `not in the token set`, keeping the outline Primary and the footer filled-chrome as unmerged writings, not copying the outline Primary hover, active, and Focus treatments onto Secondary or Compact, treating the source's Focus treatment as observed Focus rather than as `focus-visible` evidence, and the refusal to treat this as a complete state-coverage claim are a derived editorial implementation inference from the verified surfaces; they are not NVIDIA-authored or a separately published UI specification.

### State treatments

The thirteen state treatments below are a derived editorial implementation inference from the verified surfaces; they are not NVIDIA-authored or a separately published UI specification. They compose values established elsewhere in this contract, and no computed per-component observation accompanies them. The rows themselves are the source's §14 table, kept as written. Loading (skeleton) and Skeleton stay two rows; they are not one row.

| State | Treatment |
|---|---|
| **Empty (first use)** | One NVIDIA-EMEA 16px sentence on white or `#1a1a1a` background, no illustration: "No results yet. Browse by topic or try a broader term." Green accent reserved for the "Browse by topic" link. |
| **Empty (search, no matches)** | Caption-size gray text at 14px `#757575`: the query echoed verbatim, followed by two suggested refinements. Never an emoji, never a shrug illustration. |
| **Loading (data fetch / API)** | Thin green (`#76b900`) progress bar at the top of the viewport, 2px tall. No spinner in body content. For >2s operations, an inline "Loading…" text label in Gray 400. |
| **Loading (skeleton)** | Border-Cream-free — instead, `#1a1a1a` blocks on black surfaces and `#f5f5f5` blocks on white, at exact final dimensions. No shimmer gradient with mid-tones; the pulse is opacity-only (0.6 ↔ 1.0). |
| **Error (runtime / API)** | Red 500 (`#e52020`) left border 2px, Near-Black text, inline code block showing the error code verbatim. "CUDA error 700: an illegal memory access was encountered. Check kernel launch configuration." No retry animation — retry is a button labeled "Retry". |
| **Error (form / input)** | Red 500 border on the invalid field, 14px Red 500 caption directly beneath, exact requirement stated: "License key is 24 characters; yours is 22." |
| **Error (permission / licensing)** | Warm Sand banner — Orange 400 (`#df6500`) accent bar, black text, cites the export-control or license clause by section number. |
| **Success (operation complete)** | Green 500 (`#3f8500`) — not brand green — 2px left border, past-tense sentence. "Model downloaded." Auto-dismiss at 4s. Brand green is reserved for interactive accents, not confirmation states. |
| **Success (multi-step, e.g., training run)** | Final state shows metric summary in a table — elapsed time, tokens/sec, final loss — rather than a celebratory toast. The data is the success signal. |
| **Benchmark / metric rendering** | Numeric-first typography: the number at Display-Hero scale (36px bold), unit inline at Body-Large, source footnote at Caption Small. NVIDIA-authentic state — performance numbers are a visual category in their own right. |
| **Skeleton** | `#2a2a2a` blocks (dark-surface default) at exact final dimensions — product tiles, benchmark rows, spec-table cells. Shimmer 1.4s with a subtle NVIDIA-green tint at 4% opacity as the highlight, not pure white, so the loading state itself reads as brand-on. Benchmark numbers render as unit placeholders (`— TFLOPS`, `— tokens/sec`) until resolved, never `0`, which would misrepresent performance. |
| **Disabled** | Opacity 0.45 on text and surface together; green border shifts to Gray-400 (`#898989`). Geometry stable — 2px radius preserved, padding unchanged. |
| **Pressed / active** | Background shifts to `#007fff` with a 1px `#003eff` border. `transform: scale(1)` — no depression animation. The color change is the tactile signal. |

Source §10 marks the CUDA error line and the developer-portal empty line as illustrative, not verified as live NVIDIA copy. That evidence class stays on those strings. Keeping that illustrative class on those strings, rather than promoting them as verified live copy, is a derived editorial implementation inference from the verified surfaces; it is not NVIDIA-authored or a separately published UI specification.

### Primary (Green Border)

- Role: Primary CTA, 2px green border
- Primitive type: `button` · YAML `tokens.components.button-primary.type: button` · Kind: interactive
- Anatomy: label
- Background: `transparent` / YAML `bg: "transparent"`
- Text: `#000000` / YAML `fg: "#000000"`
- Padding: `11px 13px` / YAML `padding: "11px 13px"`
- Border: `2px solid #76b900`
- Radius: 2px / YAML `radius: 2`
- Font: 16px weight 700 / YAML `font: "16px/700"`
- Hover: background `#1eaedb`, text `#ffffff`
- Active: background `#007fff`, text `#ffffff`, border `1px solid #003eff`, scale(1)
- Observed Focus (not promoted as `focus-visible` treatment): background `#1eaedb`, text `#ffffff`, outline `#000000 solid 2px`, opacity 0.9
- Token-set use: Primary CTA, 2px green border
- Use: Primary CTA ("Learn More", "Explore Solutions")
- YAML fields: `tokens.components.button-primary.type`, `bg`, `fg`, `radius`, `padding`, `font`, `use`

The §9 hero prompt writes this control on a black hero with text `#ffffff`. YAML and §4 write text `#000000`. Both writings stay; neither is a replacement. Keeping those two text-color writings unmerged is a derived editorial implementation inference from the verified surfaces; it is not NVIDIA-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; treatment recorded above |
| focus-visible | applicable | Keyboard-reachable button; the source's Focus treatment is a generic Focus capture, not focus-visible evidence; visual treatment for focus-visible omitted |
| disabled | applicable | Button control; §14 treatment: opacity 0.45; green border to `#898989`; 2px radius and padding unchanged |
| loading | not-applicable | A primary website CTA (`Learn More`, `Explore Solutions`) leads to a destination; it commits no operation in place |
| error | not-applicable | The same destination role has no in-place operation whose failure can be reported on the control |
| success | not-applicable | The same destination role has no in-place operation whose completion can be confirmed on the control |

### Live-DOM filled lime chrome (footer capture)

- Role: live-DOM Primary chrome recorded in the source footer on `nvidia.com/en-us/` and `/en-us/data-center/h100/`
- Primitive type: not in the token set · Kind: interactive
- Background: `#76b900`
- Text: `#000` / `#000000`
- Radius: 0px sharp
- Padding: 11-13×13-15
- Height tiers: 42 utility / 46 newsletter / 49 hero
- Font: 16-18px·**700** Bold strict
- Use: the footer names this as the captured chrome on home + H100; it does not name button labels in the DESIGN.md footer itself
- This writing is not a replacement for `tokens.components.button-primary`. It is not YAML `type: button` attached to a new key.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Footer live-DOM writing above |
| hover | applicable | Pointer-web control; visual treatment omitted on this writing |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A CTA can be gated; visual treatment omitted on this writing |
| loading | not-applicable | Footer chrome on the public homepage and H100 page is a destination CTA; it commits no operation in place |
| error | not-applicable | The same destination role has no in-place operation whose failure can be reported on the control |
| success | not-applicable | The same destination role has no in-place operation whose completion can be confirmed on the control |

### Secondary (Green Border Thin)

- Role: Secondary action, 1px green border
- Primitive type: `button` · YAML `tokens.components.button-secondary.type: button` · Kind: interactive
- Background: transparent / YAML `bg: "transparent"`
- Text: `#000000` / YAML `fg: "#000000"`
- Border: `1px solid #76b900`
- Radius: 2px / YAML `radius: 2`
- Font: 16px/700 / YAML `font: "16px/700"`
- Token-set use: Secondary action, 1px green border
- Use: Secondary actions, alternative CTAs
- YAML fields: `tokens.components.button-secondary.type`, `bg`, `fg`, `radius`, `font`, `use`
- Hover, active, and Focus treatments are recorded on the Primary (Green Border) writing only. They are not copied onto this control.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted on this variant |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted on this variant |
| loading | not-applicable | A secondary website CTA leads to a destination; it commits no operation in place |
| error | not-applicable | The same destination role has no in-place operation whose failure can be reported on the control |
| success | not-applicable | The same destination role has no in-place operation whose completion can be confirmed on the control |

### Compact / Inline

- Role: Inline / compact CTA
- Primitive type: `button` · YAML `tokens.components.button-compact.type: button` · Kind: interactive
- Background: transparent / YAML `bg: "transparent"`
- Text: `#000000` / YAML `fg: "#000000"`
- Radius: 2px / YAML `radius: 2`
- Font: 14.4px weight 700 / YAML `font: "14.4px/700"`
- Letter-spacing: 0.144px
- Line-height: 1.00
- Token-set use: Inline / compact CTA
- Use: Inline CTAs, compact navigation
- YAML fields: `tokens.components.button-compact.type`, `bg`, `fg`, `radius`, `font`, `use`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted on this variant |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted on this variant |
| loading | not-applicable | An inline / compact CTA leads to a destination or compact navigation target; it commits no operation in place |
| error | not-applicable | The same destination role has no in-place operation whose failure can be reported on the control |
| success | not-applicable | The same destination role has no in-place operation whose completion can be confirmed on the control |

### Light content card

- Role: Light content card
- Primitive type: `card` · YAML `tokens.components.card.type: card`
- Kind and a state-applicability map are omitted: the token set records `type: card` without interactive-kind evidence (C4)
- Background: `#ffffff` / YAML `bg: "#ffffff"`
- Radius: 2px / YAML `radius: 2`
- Padding: 16-24px internal / YAML `padding: "16-24px"`
- Border: none (clean edges) or `1px solid #5e5e5e`
- Shadow: `rgba(0, 0, 0, 0.3) 0px 0px 5px 0px` for elevated cards
- Hover: shadow intensification — no intensified computed value is recorded
- Token-set use: Light content card
- YAML fields: `tokens.components.card.type`, `bg`, `radius`, `padding`, `use`

### Dark-section card

- Role: Dark-section card
- Primitive type: `card` · YAML `tokens.components.card-dark.type: card`
- Kind and a state-applicability map are omitted: the token set records `type: card` without interactive-kind evidence (C4)
- Background: `#1a1a1a` / YAML `bg: "#1a1a1a"`
- Text: `#ffffff` / YAML `fg: "#ffffff"`
- Radius: 2px / YAML `radius: 2`
- Padding: 16-24px / YAML `padding: "16-24px"`
- Token-set use: Dark-section card
- YAML fields: `tokens.components.card-dark.type`, `bg`, `fg`, `radius`, `padding`, `use`

### Links

- Role: inline and navigation links on the captured website
- Primitive type: not in the token set · Kind: interactive
- **On Dark Background**: `#ffffff`, no underline, hover shifts to `#3860be`
- **On Light Background**: `#000000` or `#1a1a1a`, underline `2px solid #76b900`, hover shifts to `#3860be`, underline removed
- **Green Links**: `#76b900`, hover shifts to `#3860be`
- **Muted Links**: `#666666`, hover shifts to `#3860be`
- Source §9 iteration guide also writes: "Link hover is always `#3860be` (blue) regardless of the link's default color."
- Source §9 footer prompt writes footer links at 14px weight 400, color `#a7a7a7`, hover color `#76b900`. That footer-hover writing stays unmerged from `#3860be`. Keeping those two hover writings unmerged is a derived editorial implementation inference from the verified surfaces; it is not NVIDIA-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatments above |
| hover | applicable | Pointer-web link; treatments recorded above |
| focus-visible | applicable | Keyboard-reachable link; visual treatment omitted |
| disabled | applicable | A link can be gated; visual treatment omitted |
| loading | not-applicable | A destination link commits no operation in place |
| error | not-applicable | The same destination role has no in-place operation whose failure can be reported on the link |
| success | not-applicable | The same destination role has no in-place operation whose completion can be confirmed on the link |

### Navigation

- Role: site navigation on a dark black background
- Primitive type: not in the token set · Kind: interactive
- Background: `#000000`
- Logo left-aligned, prominent NVIDIA wordmark
- Links: NVIDIA-EMEA 14px weight 700 uppercase, `#ffffff`
- Hover: color shift, no underline change
- Mega-menu dropdowns for product categories
- Sticky on scroll with backdrop
- §9 nav prompt: sticky top; green-bordered CTA button right-aligned; hover color `#3860be`
- Mobile collapsing (Layout): hamburger menu collapse with full-screen overlay at ~1024px

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web navigation; color shift recorded, no underline change |
| focus-visible | applicable | Keyboard-reachable navigation; visual treatment omitted |
| disabled | applicable | A nav item can be gated; visual treatment omitted |
| loading | not-applicable | A navigation trigger opens a destination or mega-menu; it commits no operation in place |
| error | not-applicable | The same destination / menu role has no in-place operation whose failure can be reported on the trigger |
| success | not-applicable | The same destination / menu role has no in-place operation whose completion can be confirmed on the trigger |

### Product Cards

- Role: distinctive product card on the captured website
- Primitive type: not in the token set
- Kind and a state-applicability map are omitted: this §4 writing is not in the YAML token set and records no interactive-kind evidence of its own (C4)
- Clean white or dark card with minimal radius (2px)
- Green accent border or underline on title
- Bold heading + lighter description pattern
- CTA with green border at bottom
- §9 product-card prompt (A3, unique to that prompt): white background, 2px border-radius, box-shadow `rgba(0,0,0,0.3) 0px 0px 5px`; title at 20px NVIDIA-EMEA weight 700, line-height 1.25, color `#000000`; body at 15px weight 400, line-height 1.67, color `#757575`; green underline accent on title: `border-bottom 2px solid #76b900`

### Tech Spec Tables

- Role: industrial spec table
- Primitive type: not in the token set · Kind: non-interactive
- Reason: a spec table displays rows; it is not an interactive control
- Industrial grid layouts
- Alternating row backgrounds (subtle gray shift)
- Bold labels, regular values
- Green highlights for key metrics

### Cookie/Consent Banner

- Role: cookie/consent banner
- Primitive type: not in the token set · Kind: interactive
- Fixed bottom positioning
- Rounded buttons (2px radius)
- Gray border treatments
- The source does not name the banner's button labels in DESIGN.md.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web banner controls; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable banner; visual treatment omitted |
| disabled | applicable | A consent control can be gated; visual treatment omitted |
| loading | not-applicable | A consent banner presents a choice; it does not commit an in-place data operation whose pending state this banner would report |
| error | not-applicable | Remaining on the banner is not an operation whose failure this surface reports |
| success | not-applicable | Remaining on the banner is not an operation with a success result on this surface |

### Image Treatment

- Role: image treatment on the captured website
- Primitive type: not in the token set · Kind: non-interactive
- Reason: image treatment is a media rule, not an interactive control
- Product/GPU renders as hero images, often full-width
- Screenshot images with subtle shadow for depth
- Green gradient overlays on dark hero sections
- Circular avatar containers with 50% radius

### §9-only constructions kept as recorded prompts (A3)

These prompt bodies are not additional token-set keys. Classifying them as recorded constructions rather than new token-set keys is a derived editorial implementation inference from the verified surfaces; it is not NVIDIA-authored or a separately published UI specification. Unique values they carry that the other sections do not already state in the same combination:

- Hero on black: headline 36px NVIDIA-EMEA weight 700, line-height 1.25, color `#ffffff`. Subtitle at 18px weight 400, line-height 1.67, color `#a7a7a7`. CTA transparent, `2px solid #76b900`, 2px radius, `11px 13px` padding, text `#ffffff`. Hover: background `#1eaedb`, text white.
- Dark feature section: `#000000` background. Section label at 14px weight 700 uppercase, color `#76b900`. Heading at 24px weight 700, color `#ffffff`. Description at 16px weight 400, color `#a7a7a7`. Three product cards in a row with 20px gap.
- Footer: `#000000` background. Multi-column layout with link groups. Links at 14px weight 400, color `#a7a7a7`. Hover: color `#76b900`. Bottom bar with legal text at 12px, color `#757575`.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The source's spacing scale, grid notes, whitespace philosophy, radius scale, breakpoint table, touch targets, collapsing strategy, image behavior, typography scaling, and dark/light section strategy are kept as written. Treating that packet as layout for the captured website is a derived editorial implementation inference from the verified surfaces; it is not NVIDIA-authored or a separately published UI specification.

### Spacing System

- Base unit: 8px
- Scale: 1px, 2px, 3px, 4px, 5px, 6px, 7px, 8px, 9px, 10px, 11px, 12px, 13px, 15px
- Primary padding values: 8px, 11px, 13px, 16px, 24px, 32px
- Section spacing: 48-80px vertical padding
- YAML `tokens.spacing.base: 16` · `tokens.spacing.lg: 24` stay on that path

### Grid & Container

- Max content width: approximately 1200px (contained)
- Full-width hero sections with contained text
- Feature sections: 2-3 column grids for product cards
- Single-column for article/blog content
- Sidebar layouts for documentation

### Whitespace Philosophy

The following whitespace readings are a derived editorial implementation inference from the verified surfaces; they are not NVIDIA-authored or a separately published UI specification. The 16-20px card gaps and the dark/white section alternation are the source's own.

- **Purposeful density**: NVIDIA uses tighter spacing than typical SaaS sites, reflecting the density of technical content. White space exists to separate concepts, not to create luxury emptiness.
- **Section rhythm**: Dark sections alternate with white sections, using background color (not just spacing) to separate content blocks.
- **Card density**: Product cards sit close together with 16-20px gaps, creating a catalog feel rather than a gallery feel.

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile Small | <375px | Compact single column, reduced padding |
| Mobile | 375-425px | Standard mobile layout |
| Mobile Large | 425-600px | Wider mobile, some 2-col hints |
| Tablet Small | 600-768px | 2-column grids begin |
| Tablet | 768-1024px | Full card grids, expanded nav |
| Desktop | 1024-1350px | Standard desktop layout |
| Large Desktop | >1350px | Maximum content width, generous margins |

The breakpoint table is the source's own. Reading it as this record's breakpoint table is a derived editorial implementation inference from the verified surfaces; it is not NVIDIA-authored or a separately published UI specification.

### Touch Targets

- Buttons use 11px 13px padding for comfortable tap targets
- Navigation links at 14px uppercase with adequate spacing
- Green-bordered buttons provide high-contrast touch targets on dark backgrounds
- Mobile: hamburger menu collapse with full-screen overlay

Calling those paddings comfortable tap targets is a derived editorial implementation inference from the verified surfaces; it is not NVIDIA-authored or a separately published UI specification. The 11px 13px padding and 14px uppercase are the source's own.

### Collapsing Strategy

- Hero: 36px heading scales down proportionally
- Navigation: full horizontal nav collapses to hamburger menu at ~1024px
- Product cards: 3-column to 2-column to single column stacked
- Footer: multi-column grid collapses to single stacked column
- Section spacing: 64-80px reduces to 32-48px on mobile
- Images: maintain aspect ratio, scale to container width

### Image Behavior

- GPU/product renders maintain high resolution at all sizes
- Hero images scale proportionally with viewport
- Card images use consistent aspect ratios
- Full-bleed dark sections maintain edge-to-edge treatment

### Typography Scaling

- Display 36px scales to ~24px on mobile
- Section headings 24px scale to ~20px on mobile
- Body text maintains 15-16px across all breakpoints
- Button text maintains 16px for consistent tap targets

### Dark/Light Section Strategy

- Dark sections (black bg, white text) alternate with light sections (white bg, black text)
- The green accent remains consistent across both surface types
- On dark: links are white, underlines are green
- On light: links are black, underlines are green
- This alternation creates natural scroll rhythm and content grouping

The "natural scroll rhythm and content grouping" reading is a derived editorial implementation inference from the verified surfaces; it is not NVIDIA-authored or a separately published UI specification. The on-dark / on-light link rules are the source's own.

<!-- design-md:section content-locales -->
## 6. Content & Locales

NVIDIA speaks like the engineering team that built the silicon it is selling — declarative, technically exact, and quietly certain that the platform matters. Claims are stated rather than argued, because the benchmarks are expected to do the arguing. Marketing copy and developer documentation share the same register: short, capability-first sentences, concrete metrics when available, and a refusal to soften specifications into adjectives. Superlatives are reserved for things that are literally the fastest or the most; everything else gets named precisely or not at all. The overall effect is closer to a datasheet with a headline than a consumer product page. That voice paragraph, including "datasheet with a headline," is a derived editorial implementation inference from the verified surfaces and the source's own voice section; it is not NVIDIA-authored or a separately published UI specification. The quoted headlines, CTAs, and founder lines below are the source's own recorded strings.

| Context | Tone |
|---|---|
| Headlines | Product-name + capability claim, no mood-setting. "NVIDIA Delivers the Lowest Token Cost" — noun, verb, metric. |
| Product CTAs | Verb + noun, two words when possible. "Learn More", "Register Now", "Watch On Demand", "Read Blog". |
| Developer docs | Direct imperative. "Deploy more secure, always-on AI assistants with a single command." API names appear inline, unhedged. |
| Keynote / founder voice | First-person plural, declarative-missional. "We are a learning machine. The mission is boss." — no qualifier, no softening. |
| Research page | Discovery-framed, outcome-neutral. "Passionate about developing the technology and finding the breakthroughs that bring positive change to the world." |
| Benchmark / performance claims | Metric-first, unit-precise. "Cost per token is the key metric for inference TCO, and NVIDIA Blackwell leads on the metric that matters." |
| Error (technical / runtime) | CUDA-style: error code + one-line cause + one-line recovery. No apology, no emoji. |
| Legal / compliance surfaces | Formal, unadorned. Export control and licensing language reads like the regulation it is quoting. |
| Community / developer forum replies | Peer-engineer register. Acknowledges the bug, names the fix version, moves on. |

Reading that table as this contract's tone map, including the register labels (declarative-missional, discovery-framed, CUDA-style, peer-engineer), is a derived editorial implementation inference from the verified surfaces; it is not NVIDIA-authored or a separately published UI specification. The quoted lines in the table are the source's own.

**Forbidden phrases.** "Revolutionary", "game-changing", "unleash" (unless literal), "cutting-edge" as a modifier, "just", "simply", "easy peasy", exclamation marks on specification claims, emoji in product announcements, performance hype words ("blazing-fast", "lightning-quick") without a number attached, and any sentence that names a competitor to diminish it. Avoid generic AI-era tropes ("AI-powered X", "the future of Y") unless the specific AI architecture is named in the same sentence. Do not use gaming-marketing adjectives ("epic", "insane", "beast") in enterprise or research surfaces.

**Voice samples.**

- "Learn More" <!-- verified: https://www.nvidia.com/en-us/, 2026-04 -->
- "Register Now" <!-- verified: https://www.nvidia.com/en-us/, 2026-04 -->
- "Watch On Demand" <!-- verified: https://www.nvidia.com/en-us/, 2026-04 -->
- "Out Now" <!-- verified: https://www.nvidia.com/en-us/, 2026-04 -->
- "Deploy more secure, always-on AI assistants with a single command." <!-- verified: https://developer.nvidia.com/, 2026-04 -->
- "Cost per token is the key metric for inference TCO, and NVIDIA Blackwell leads on the metric that matters." <!-- verified: https://www.nvidia.com/en-us/, 2026-04 -->
- "NVIDIA pioneered accelerated computing to tackle challenges no one else can solve." <!-- cited: https://www.nvidia.com/en-us/about-nvidia/ -->
- "We are a learning machine. The mission is boss. Everyone has a voice." <!-- cited: Jensen Huang, https://www.nvidia.com/en-us/about-nvidia/ -->
- Error (runtime example): "CUDA error 700: an illegal memory access was encountered. Check kernel launch configuration." <!-- illustrative: not verified as live NVIDIA copy -->
- Empty state (developer portal): "No results for `<query>`. Browse by topic or try a broader term." <!-- illustrative: not verified as live NVIDIA copy -->

Additional published strings the source records, kept byte-exact: `Read Blog`; `Explore Solutions`; `Explore Curriculum`; `Read More`; `Browse by Topic`; `Browse by topic`; `NVIDIA Delivers the Lowest Token Cost`; `See the full stack`; `The NVIDIA Booth — The booth that launched a trillion-dollar company`; `bring 3D graphics to the gaming and multimedia markets`; `developing the technology and finding the breakthroughs that bring positive change to the world`; `Retry`; `Model downloaded.`; `Loading…`; `License key is 24 characters; yours is 22.`; `No results yet. Browse by topic or try a broader term.`

Reproduce those strings byte-exact rather than translating or re-casing them. That byte-exact rule is a derived editorial implementation inference from the verified surfaces; it is not NVIDIA-authored or a separately published UI specification.

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

These are named values, not permissions to invent. Naming the list from the source's own unresolved fields and unmerged writings, rather than adding surfaces the source did not name, is a derived editorial implementation inference from the verified surfaces; it is not NVIDIA-authored or a separately published UI specification.

- **Unattributed easing curves** for `ease-standard`, `ease-enter`, and `ease-exit`. Token names and uses remain; exact cubic-bezier values are omitted. Promote a curve only after a component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Illustrative runtime-error and empty-state strings** the source marked as not verified as live NVIDIA copy.
- **Numerical claim** of over 4 million developers and ~40,000 companies, marked by the source as not independently re-verified for the Philosophy layer.
- **Outline Primary vs footer filled-lime chrome.** YAML / §4 (`transparent`, `2px solid #76b900`, radius 2, text `#000000`) and the footer live-DOM writing (`#76b900` fill, `#000` text, 0px, heights 42 / 46 / 49) stay unmerged.
- **Primary text `#000000` vs §9 hero CTA text `#ffffff`.** Unmerged.
- **Link hover `#3860be` vs §9 footer-link hover `#76b900`.** Unmerged.
- **YAML `tokens.rounded.*.2` vs footer `0px` vs Micro `1px` vs Circle `50%` vs `full: 9999`.** Unmerged keys and writings.
- **Visual treatments** for canonical states where this packet holds no value. They are not `not-applicable`; applicability follows control meaning.
- **`developer.nvidia.com` as a token-capture surface.** Named for verified microcopy; not listed in the source footer as a live-DOM token capture.

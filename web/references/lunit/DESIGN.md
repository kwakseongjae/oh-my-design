---
id: lunit
name: Lunit
country: KR
category: healthcare
homepage: "https://www.lunit.io"
primary_color: "#1032cf"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=lunit.io&sz=256"
verified: "2026-05-14"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    hero-ink: "#151515"
    body-ink: "#232f32"
    signature-blue: "#1032cf"
    bright-blue: "#2a4eef"
    canvas: "#ffffff"
    dark: "#000000"
    footer: "#eff0f4"
    on-dark: "#ffffff"
  typography:
    family: { sans: "Lexend", mono: "Lexend" }
    hero:    { size: 78, weight: 400, lineHeight: 1.08, use: "Hero H1, ClashGrotesk" }
    section: { size: 52, weight: 400, lineHeight: 1.10, use: "Section H2, ClashGrotesk" }
    body-lg: { size: 20, weight: 300, lineHeight: 1.40, use: "Lead body, Lexend" }
    body:    { size: 18, weight: 300, lineHeight: 1.40, use: "Standard body, Lexend" }
    body-sm: { size: 15, weight: 400, use: "Small body, Lexend" }
    nav:     { size: 13, weight: 400, use: "Uppercase nav, tracked, Lexend" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 4, lg: 4, full: 9999 }
  shadow:
    none: "none"
  components:
    cta-pill: { type: button, bg: "#000000", fg: "#ffffff", radius: 9999, use: "Primary marketing CTA Contact Us, the single pill" }
    surface: { type: card, bg: "#ffffff", fg: "#232f32", radius: 0, use: "Square-cornered section/card/image surface" }
    blue-band: { type: badge, bg: "#1032cf", fg: "#ffffff", radius: 0, use: "Signature blue system-affordance band" }
  components_harvested: true
---

# Design System Inspiration of Lunit

## 1. Visual Theme & Atmosphere

Lunit (루닛) is the design language of a **medical AI company that wants to be read like a journal article, not sold like a SaaS**. Where most healthcare-AI marketing leans into either soft-pastel reassurance or bold-pharma authority, Lunit refuses both. The home page opens on pure white anchored by warm-cool gunmetal ink `#232f32` for body and a darker `#151515` for the hero — never pure `#000` for the standing copy. The single saturated accent is a deep electric blue, captured at `#1032cf` and brightening to `#2a4eef`; it appears in cookie consents, system affordances, and the occasional brand band, but is deliberately *withheld* from the primary CTA. The primary CTA is instead a black pill — `#000000` background, `#ffffff` label, `border-radius: 100px`. That black pill is the only rounded thing on the site. Everything else — sections, cards, images, navigation, logo wall, footer — has `border-radius: 0`. This binary radius logic (square surfaces, pill action) is Lunit's geometric thesis.

The typography is the other thesis. Headings are set in **ClashGrotesk** at light weight (400), body text in **Lexend** at weight 300. Both are intentional anti-tropes. ClashGrotesk avoids the "Inter / Söhne / Helvetica Now" tech-startup stamp; Lexend is a typeface engineered specifically to reduce reading fatigue and improve reading proficiency, and choosing it for clinical and oncology copy is itself a statement about audience care. The hero H1 sits at **78px / 84px line-height** in ClashGrotesk 400 — large but not heavy. Pharma marketing typically defaults to semibold or bold weights because legal-grade confidence reads as visual heft; Lunit goes light, which reads as **scientific composure**. Stats land in the same restrained register: `10,000+ Customer Sites · 65+ Countries · 700+ Publications` are placed as quiet typographic facts, not infographic explosions.

Atmosphere is built through **vertical band switching**, not elevation. There are essentially zero drop shadows on the surveyed surfaces. Depth comes from sections claiming full-bleed width and alternating their backgrounds — white → black band → off-white footer (`#eff0f4`) — so the page reads as a sequence of editorial spreads rather than a stack of UI cards. Motion is restrained to AOS scroll-reveal fades; there is no parallax, no autoplay video header, no animated counter. The audience is radiologists, oncology researchers, regulators, and institutional investors — the design choices everywhere read as *we know who is looking*.

**Key Characteristics:**
- ClashGrotesk + Lexend font pairing — display grotesk + reading-optimized text face, both LIGHT weights as the rule
- Hero H1 at 78px / 400 weight, body at 18-20px / 300 weight — authority through size and air, not heft
- Single accent: deep electric blue `#1032cf` (bright sibling `#2a4eef`) — used only for system, cookie, and dark-band moments
- Primary marketing CTA is **black pill**, not blue — blue is withheld
- Binary radius rule: `0px` everywhere except the pill CTA at `100px`
- Warm-cool gunmetal ink `#232f32` for body, near-black `#151515` for heroes — never pure `#000` in standing copy
- Off-white footer `#eff0f4` — the only branded surface tint
- Full-bleed band-switching layout — sections alternate white / black / off-white, no card-on-canvas
- Zero shadows / zero card elevation — depth is band-switching, not floating
- Uppercase 13.2px Lexend nav — institutional small-caps register, not friendly-app

## 2. Color Palette & Roles

### Primary
- `#151515` — **Hero ink**. Used for H1 only.
- `#232f32` — **Body ink**. Warm-cool gunmetal. Default text color across body, nav, footer.
- `#1032cf` — **Signature blue**. Cookie "Allow all", blue band moments, system-affordance contexts.
- `#2a4eef` — **Bright blue**. Hover / link / focus sibling of `#1032cf`.

### Surfaces
- `#ffffff` — Page canvas default.
- `#000000` — Dark band / primary CTA fill / occasional inverted hero block.
- `#eff0f4` — Footer surface. The only branded off-white in the system.

### Inverse
- `#ffffff` — Label on dark CTAs / dark bands.

### Semantic notes
- **No green for "success", no red for "danger" observed in marketing surfaces.** Lunit's marketing site does not show product UI affordances; semantic colors live inside the clinical products (INSIGHT CXR / DBT / MMG), not on the brand site.
- **Blue is system, not brand-action.** The brand-action color is black. This is unusual — most B2B health-AI sites use their accent for primary CTAs.

## 3. Typography

### Stack
```
display: "ClashGrotesk", system-ui, sans-serif
text:    "Lexend", system-ui, sans-serif
fallback: Arial, sans-serif
```

### Scale (sampled live)
- **Hero H1** — ClashGrotesk · 78px / 84px · weight 400
- **Section H2** — ClashGrotesk · ~48–56px · weight 400
- **Body lg** — Lexend · 20px / 28px · weight 300
- **Body** — Lexend · 18.4px · weight 300
- **Body sm** — Lexend · 15px · weight 400
- **Nav** — Lexend · 13.2px · weight 400 · uppercase

### Rules
- LIGHT-weight defaults across all heading levels. Bold weights are not part of the brand voice.
- Body text is Lexend 300 — verify against your runtime if you cannot license Lexend; substitute with Inter 300 at the same metrics if blocked.
- Nav is uppercase 13.2px with letter tracking — small-cap institutional register.
- Display copy never wraps mid-noun-phrase in the hero. The H1 break is editorial.

## 4. Radius & Geometry

This section is the brand thesis.

- **Default radius: `0px`.** Every section, image, card, logo tile, input, footer column, and surface that is not a primary action is square-cornered.
- **Pill radius: `100px`.** Exactly one element rounds: the primary marketing CTA (`Contact Us`). The pill is reserved for the single most human-facing action on the page.
- **Secondary chip / checkbox:** 3.75px (third-party cookie banner).
- **No mid-range radii.** No 4px, 6px, 8px, 12px, 16px curves anywhere.

This binary logic is what separates Lunit from peers that use a uniform 8/12px round-everything system.

## 5. Elevation & Depth

- **No shadows.** Across all surveyed sections, `box-shadow` is `none`.
- Depth is achieved by **full-bleed band switching**:
  - Section A: white canvas, dark ink
  - Section B: black canvas, white ink
  - Section C: off-white `#eff0f4`, dark ink
- Cards do not float. Logos do not float. The page is read as a sequence of editorial pages, not as a stack of objects.

## 6. Spacing & Rhythm

- Sections are **full viewport width**, edge-to-edge — no max-width "page frame" wrapping the whole document.
- Vertical rhythm is generous. Headings have substantial top/bottom air; copy blocks are narrow-column to maintain comfortable measure.
- CTA pill padding ≈ `14px 28px`.
- Nav item padding ≈ `8–20px` depending on top-row vs main-row.

## 7. Motion

- Library observed: **AOS** (Animate-On-Scroll) — `aos-init aos-animate` classes throughout.
- Effect set: scroll-triggered fade / fade-up, low amplitude, short duration.
- **No parallax.** **No autoplay hero video.** **No counter animations on the stats band.**
- This restraint is itself a positioning signal: motion is a luxury the audience does not need.

## 8. Imagery & Iconography

- **Hero treatment**: Lunit uses dimensional product / scan imagery (chest X-ray fragments, mammography overlays) rendered in a *desaturated, blue-graded* register. The brand's signature blue is allowed to pool inside imagery in a way it is denied to the CTA.
- **Logo wall**: monochrome grayscale, no background tile, tight kerning.
- **Icons**: outline-style, single-stroke, no fill. Aligned to the same flat / square geometric thesis.
- **No stock people imagery, no AI-generated abstract gradients, no hex-mesh "tech" decoration.** The page refuses every B2B-AI cliché.

## 9. Components

### Primary CTA — Pill
- `background: #000000`
- `color: #ffffff`
- `font: Lexend 16.4px / weight ~400`
- `border-radius: 100px`
- `padding: ~14px 28px`
- `border: none`
- `text-transform: none`

### Secondary nav (top-row)
- Plain text link, no background, no border
- `color: #000000` or `#232f32` depending on context
- `font: Lexend 13.2px / 400 / uppercase`

### Section heading block
- ClashGrotesk · 48–78px · weight 400
- Color: `#151515` (hero) or `#232f32` (interior sections)
- Optional eyebrow above: Lexend 13–15px uppercase

### Stat block (e.g. `10,000+`)
- ClashGrotesk · large display size
- Color: `#232f32`
- Label below in Lexend 15–18px weight 300

### Card (news / solutions)
- `border-radius: 0px`
- No shadow
- Thumbnail at 16:9 or 4:3 above, ClashGrotesk title below, Lexend kicker
- Hover: subtle ink shift; no lift, no scale

### Footer
- `background: #eff0f4`
- `color: #232f32`
- Column-grid of product / company / legal nav
- No social-icon row dominance — institutional, not consumer

## 10. Voice

The Lunit voice in your generated work should:
- **State the science**, then state the consequence. Lead with what the AI does, follow with what changes for the patient or clinician.
- **Use light typographic weight to carry authority** — do not reach for bold to add confidence.
- **Avoid emotive verbs** ("battle", "fight", "transform lives") in standing copy. Use precise verbs ("detect", "stratify", "screen", "support").
- **Refuse exclamation marks. Refuse all-caps shouting (except the institutional nav register).**
- **Numbers are stated dryly.** "10,000+ Customer Sites" — no exclaim, no "amazing", no decoration.

**Do not copy Lunit's specific marketing taglines, product names, or proprietary clinical claims into derivative work.** Use the structural voice rules above; write fresh copy. Brand assets in this directory are for reference inspection only.

## 11. Layout Patterns

- **Hero band**: full-bleed white. H1 left-aligned (typically), sub-deck below, single pill CTA. No imagery on top of the heading — imagery, if present, sits below the H1 or in a parallel column.
- **Stats band**: 3 columns, large display numerals, single-line labels. Generous air.
- **Solutions overview**: editorial card grid, 2-up or 3-up, each card a square-cornered thumbnail + title + 1–2 lines of kicker.
- **Partnering / testimonial band**: full-bleed logo wall in monochrome, or a quote in ClashGrotesk display size with attribution in Lexend small.
- **Footer**: off-white `#eff0f4`, multi-column column-nav, no social-feed widgets, no newsletter signup dominance.

## 12. What This System Refuses

The negative space is as informative as the positive choices. The Lunit system explicitly does not use:
- Rounded cards (12 / 16 / 20px) of any kind
- Drop shadows or elevation
- Saturated blue on primary CTAs (the brand color is *withheld* from action)
- Bold typographic weights for confidence
- Hero video autoplay
- Stock photography of "diverse smiling teams"
- Hex-mesh / circuit-board / neural-net visual cliché
- Multi-accent palettes (green + blue + orange "tech" mixes)
- Exclamation marks or emotive marketing verbs

When you generate work in the Lunit register, treat this refusal list as a hard filter.

## 13. When to Reach for This System

Choose Lunit-style when the brief is:
- A medical / clinical / regulated-industry product targeting expert audiences (clinicians, researchers, regulators, institutional buyers)
- A research-grade B2B product where credibility must read as **scientific composure**, not sales energy
- A category whose competitors lean either soft-pastel-reassuring or bold-pharma — and you want to position above both
- A product where the user is reading carefully and slowly, not scrolling fast

Avoid Lunit-style when the brief is consumer fintech, lifestyle commerce, social, or anywhere the audience expects warm-friendly app idioms.

## 14. Token Reference

See `assets/_reference/tokens.json`, `fonts.json`, `structure.json` for machine-readable token sets sampled live on 2026-05-14 from `https://www.lunit.io/`.

See `assets/_reference/.live-inspect-proof.json` for the raw CDP `getComputedStyle` samples (≥5 per requirement; 8 captured).

## 15. Verification & Sources

**Verified:** 2026-05-14

### Tier 1 — Live inspect (REQUIRED · COMPLETED)
- **Method:** Chrome DevTools Protocol :9222, `Runtime.evaluate` + `getComputedStyle` on production DOM
- **Surface:** `https://www.lunit.io/` (English root)
- **Captured:** hero H1, 7 major `<section>` elements, stats band, 5 CTA candidates, 4 nav links, 3 body paragraphs, footer, html/body roots, plus 23 targeted samples — **8 samples retained as `.live-inspect-proof.json` raw_samples** (requirement: ≥5)
- **Confidence:** HIGH for color, type, radius, elevation. MEDIUM for spacing (only viewport-relative measured).

### Tier 1 — Official Design System lookup (REQUIRED · NEGATIVE RESULT documented)
- **Attempted:** `design.lunit.io` → DNS fails (HTTP 000, no such subdomain)
- **Attempted:** Lunit GitHub org `github.com/lunit-io` → 10 public repos enumerated (`archon`, `benchmark-ssl-pathology`, `CoEval`, `dicom-rs`, `lumberjack`, `mmg-model-nia`, `nlst-nodule-detection`, `ocelot23algo`, `openslide`, `spec-cxr`) — all medical-imaging / ML research code, **no design-system / tokens / component-library / Storybook repo**
- **Attempted:** keyword scan of `www.lunit.io` HTML for `design-system / design-tokens / brand-guidelines / lunit-ui / storybook` → no hits (the only match was a generic "Figma" string in cookie-vendor copy)
- **Conclusion:** Lunit does not publish an open design system, Storybook, or brand-guidelines site as of 2026-05-14. This is consistent with their positioning (clinical / regulated / B2B medical AI — they have no incentive to ship a public DS).

### Tier 2 — 3rd-party DS directories
- `getdesign.md/lunit` — not present
- `styles.refero.design/?q=lunit` — not present
- **Both empty.** Consistent with Tier-2 directory bias against Korean and against B2B-clinical brands.

### Tier 3 — Brand-published narrative / blog
- `www.lunit.io/en/about/`, `www.lunit.io/en/careers/` — corporate narrative pages, no DS content
- No public Lunit tech-blog or Medium account observed
- Investor-relations pages exist (`investors.lunit.io` referenced indirectly) but contain no design content

### Tier 4 — Stack fingerprint (observed)
- **CMS:** WordPress + Oxygen Builder (`oxy-*` and `ct-*` class prefixes confirm)
- **Scroll motion:** AOS (`aos-init aos-animate`)
- **Fonts:** Lexend (likely Google Fonts), ClashGrotesk (likely Fontshare / Indian Type Foundry)
- **Analytics:** Google, HubSpot, Microsoft (per cookie-consent disclosure)
- **CSS custom properties:** only WordPress defaults (`--wp-*`, `--wp--preset--*`) — no Lunit-namespaced custom properties exported globally, which corroborates the "no public DS" finding

### Tier 5 — IP & licensing notes
- All brand assets in `assets/_reference/` are **for reference inspection only**.
- **No verbatim taglines** from `www.lunit.io` are reproduced in this DESIGN.md. The voice rules in §10 paraphrase structural patterns only.
- Section names in `structure.json` are quoted because they describe page anatomy, not brand copy; generated work must produce its own headings.
- Lexend is OFL-licensed (free for commercial). ClashGrotesk is free via Fontshare for commercial use under their license — verify license terms before shipping derivative work.

### Conflicts unresolved
- None. All Tier 1 measurements are internally consistent (single source = live DOM on 2026-05-14).

## 16. Do's and Don'ts

### Do
- Set every section, card, image, input, and footer to `border-radius: 0` and round only the single primary CTA pill to `100px`, honoring the binary radius thesis
- Pair ClashGrotesk for headings and Lexend for body, keeping both at LIGHT weights — H1 at 78px/84px weight 400, body at 18.4px weight 300 — so authority reads through size and air, not heft
- Fill the primary marketing CTA as a black pill (`#000000` background, `#ffffff` label) and withhold the signature blue `#1032cf` from primary actions
- Set body ink in warm-cool gunmetal `#232f32` and hero H1 in near-black `#151515`, never pure `#000`, for standing copy
- Build depth through full-bleed band switching (white canvas → black band → off-white footer `#eff0f4`) with `box-shadow: none` everywhere
- Reserve the signature blue `#1032cf` (bright sibling `#2a4eef`) for system, cookie, hover, and dark-band moments, and use AOS scroll-reveal fades as the only motion

### Don't
- Apply mid-range radii like 4px, 6px, 8px, 12px, or 16px anywhere, or round cards, images, or surfaces that are not the primary action
- Use the saturated signature blue `#1032cf` on the primary CTA — the brand-action color is black, and blue is deliberately withheld
- Reach for bold or semibold typographic weights to add confidence; LIGHT weight is the rule across all heading levels
- Add drop shadows or floating card elevation — depth comes from band switching, not floating objects
- Add hero video autoplay, parallax, or animated stat counters on the `10,000+` band; keep motion to low-amplitude AOS fades
- Introduce stock smiling-team photography, hex-mesh/circuit-board/neural-net cliché, multi-accent green-blue-orange palettes, exclamation marks, or emotive verbs like 'transform lives'

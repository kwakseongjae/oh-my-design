# Classting Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Classting is an AI-powered K–12 education platform from Korea that connects teachers, students, and parents through personalized learning powered by adaptive diagnostics. Catalog homepage identity is `https://www.classting.com`.

Treating the following three Tier 1 sources as the named evidence domains of this reconstruction rather than as a claim about every Classting product route, treating color/type/component values as staying attached to that reconstruction, and treating a marketing-homepage observation as not a stand-in for pricing, class feed, diagnostic, dashboard, or assignment surfaces except where source §14 names those surfaces as state copy, is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification. This contract covers the marketing homepage at `https://www.classting.com` as reconstructed from homepage HTML, the named Webflow CSS bundle `https://cdn.prod.website-files.com/642a57a169d01c4b3830b2b5/css/classting-aac463.webflow.shared.c0fddf191.css`, and the official CT Corp. brand guidelines page `https://ctcorp.ai/ko/brand-guidelines` (2025-02-26 CI). Color, type, and component values below stay attached to that reconstruction. An observation on the marketing homepage is not a stand-in for pricing, class feed, diagnostic, dashboard, or assignment surfaces except where source §14 names those surfaces as state copy.

The following visual-character, atmosphere, and geometry readings — clarity-of-purpose-from-99-percent-K-12-adoption, optimistic-and-clinical-at-once, mint-green-primary-through-white-space, mint-to-lavender-gentle-warmth-that-never-feels-cold-or-corporate, 16px-cards-and-24px-pillowed-banners-as-approachable-for-teachers-and-students, Noto-Sans-KR-700-display-that-speaks-with-confidence-and-400-body-that-keeps-comprehension-low-effort, light-diffuse-shadows-not-heavy-elevation, and data-visibility-above-decoration — are a derived editorial implementation inference from the verified surfaces; they are not Classting-authored or a separately published UI specification. The source reads Classting’s visual language as built on the clarity of purpose of a product used in 99 % of Korean K–12 schools. The dominant feeling is read as optimistic and clinical at once: a vivid mint-green primary (`#00C896`) cuts through generous white space, while soft gradient washes (mint → lavender) on section backgrounds give a gentle warmth that never feels cold or corporate. Rounded cards at 16 px radius and pillowed CTA banners at 24 px keep the tone approachable for both teachers and students. Noto Sans KR anchors the Korean-first experience, with a bold 700-weight display stack that speaks with confidence and an unhurried 400-weight body that keeps comprehension low-effort. Depth is handled with light diffuse shadows (`0 2px 12px rgba(0,0,0,0.08)`) rather than heavy elevation, placing data visibility above decoration.

Treating the following public-history, founder-classroom, user-count, corporate-entity, diagnostic-engine, and mission-statement facts as narrative rather than interface tokens, treating the founder’s 30-plus-student personalization problem as the cause of a class communication tool, treating communication-to-intelligence as a strategic shift, treating the mission as a tool-to-infrastructure relationship rather than a classroom-app claim, and treating voice as celebrating student mastery rather than technology for its own sake, is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification. The source records that Classting was founded in 2012 by Cho Hyun-gu, who taught in elementary school for four years beginning in 2009. Confronted daily with the impossibility of personalizing instruction for 30+ students in a single classroom, he built a class communication tool that would evolve into a platform present in 99 % of Korean K–12 schools and 47 countries, with over 8.1 million users and 980,000 active classes. The company’s strategic center of gravity shifted from communication to intelligence. Under the corporate entity CT (Cognitive Technologies), Classting operates an AI diagnostic engine that tracks individual knowledge states using the proprietary CLST model combined with ELO rating systems, with a source-stated 91.5% correct-answer prediction rate. The mission statement — “We Accelerate Human Learning with Technology” — reflects that shift from tool to infrastructure: Classting is not a classroom app but an accelerant layered beneath every instructional decision. Official history and the CT Corp. brand-guidelines citation inform that narrative; they do not by themselves supply interface tokens.

The following duality reading — primary-green-as-optimistic-and-natural-growth-not-algorithm, precision-of-typography-and-data-language-as-trust-through-evidence, and voice-that-does-not-celebrate-technology-for-its-own-sake-but-celebrates-student-mastery — is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification. The source reads the brand’s visual and verbal identity as encoding a shift from communication tool to infrastructure: primary green (`#00C896`) as growth, not algorithm, while typography precision and data language signal a platform that earns trust through evidence. Classting’s voice does not celebrate technology for its own sake; it celebrates the moment when a student masters a concept they once struggled with.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Treating the three YAML / §4 use strings below as Primary tasks, and not lifting tasks from source §13 fictional archetypes, is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification.

- Use the marketing primary CTA (YAML use: `primary CTA`).
- Use the consult section banner (YAML use: `Consult banner`).
- Scan blog/feature cards (source §4 Blog / Feature Card; YAML use: `subtle 12px shadow`).
<!-- design-md:claim-end -->

### Audience

Restricting Audience so no individual personas are promoted, treating source §13 named-person entries as fictional archetypes rather than verified biographies, treating those entries as not Audience and not primary tasks, treating the product-lede groups teachers, students, and parents as named groups rather than user-flow requirements, and tying observable work only to the three primary tasks, is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification. No individual personas are promoted. The product lede names teachers, students, and parents as the people the platform connects. Use those groups only; they are not user-flow requirements.

### Distinctive traits

Treating `#00C896` as catalog `primary_color` and the harvested green CTA / consult-banner fill rather than a generic semantic green, treating `#FAFAFB` canvas as unmerged from card `#FFFFFF` and on-primary `#FFFFFF`, treating `#424242` as default text rather than footer `#000000`, treating 8px fill-button / 16px card / 24px banner / 6px tag radii as local harvested geometry rather than a universal radius scale, treating mint→lavender washes and the two named hero gradients as decorative treatments with named contexts, treating the §9 school-segment wash `linear-gradient(120deg, #EDF9F6, #FAF5FF)` as that named recipe rather than a second canvas, treating Noto Sans KR as the Korean-first face rather than a Classting-owned typeface, treating `#17A27E` as hover on green elements rather than `focus-visible` treatment, treating YAML `rounded.full` 9999 as a YAML field rather than observed marketing geometry, and treating light diffuse shadows as not heavy 4px/8px blur, is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification.

- Catalog `primary_color` / YAML `primary` / YAML `brand` `#00C896` as the green CTA fill and consult-banner fill
- Hover on green elements `#17A27E` (YAML `primary-hover`); not a `focus-visible` treatment
- Canvas `#FAFAFB` (YAML `canvas`); card / YAML `surface` `#FFFFFF`; on-primary `#FFFFFF` — same or adjacent whites, unmerged jobs
- Dark text `#424242`; muted `#757575`; footer / dark-mode CTA panel `#000000`
- Surface mint `#EDF9F6` and surface lavender `#FAF5FF`, including the §9 section wash `linear-gradient(120deg, #EDF9F6, #FAF5FF)` (school segment default)
- Accents `#9F7AEA` (AI-feature or self-directed-learning context), `#ED8936` (business / content), `#4299E1` (university)
- Noto Sans KR for Korean UI; Noto Sans HK for Traditional Chinese locales; YAML `family.mono` is also `Noto Sans KR`
- Local radii 8px (fill buttons), 16px (cards), 24px (consult banners), 6px (tags); YAML `rounded.full` 9999 is a YAML field, not observed marketing geometry
- Light diffuse shadows, not heavy 4px/8px blur
- No italic usage in marketing UI

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not Classting-authored or a separately published UI specification.

1. **Diagnosis before prescription.** No recommendation is made without an accurate picture of the student's current knowledge state. *UI implication:* Show diagnostic results explicitly before any learning path is presented; never skip or collapse the diagnostic step in the onboarding flow.
2. **Evidence over enthusiasm.** Every product claim is anchored by a measurable outcome. *UI implication:* Key statistics (accuracy percentages, school counts, improvement rates) must appear at typographic hierarchy level — 700 weight, green accent — not buried in body copy.
3. **The teacher is the user, the student is the beneficiary.** Features are designed from the teacher's operational reality outward. *UI implication:* Primary navigation surfaces teacher actions (assign, monitor, report) above student actions; student-facing views are sub-paths, not primary routes.
4. **Upward equalization.** Technology must reduce — not amplify — the gap between well-resourced and under-resourced learners. *UI implication:* The free tier remains feature-rich; premium upsell is positioned as scale, never as access to basic diagnostic fairness.
5. **Continuous improvement as default.** The system learns with every interaction and surfaces new insights automatically. *UI implication:* Dashboards must display trend data (not just snapshots); empty states for trend charts should prompt continued use, never declare "no data."

Treating the following as a capture-bound application of source §7 Do’s, including one-dominant-`#00C896`-CTA-per-page, 8px-fill-buttons-and-16px-cards, Noto-Sans-KR-for-Korean-UI-with-no-system-font-substitute, gradient-text-on-hero-display-headings-only, soft-gradient-washes-to-delineate-segments, and `#424242`-not-pure-black-as-default-text, is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification.

- Use `#00C896` for the single primary CTA per page — one dominant action, clearly coloured.
- Apply `border-radius: 8px` on fill buttons and `16px` on cards.
- Use Noto Sans KR for all Korean-language UI copy; never substitute with system fonts.
- Apply gradient text (`#00C896` → `#9F7AEA`) on hero display headings only, not on body copy.
- Keep section backgrounds as soft gradient washes (`#EDF9F6` → `#FAF5FF`) to delineate feature segments without hard borders.
- Maintain `#424242` as the default text colour — not pure black.

### Avoid

The following items copy source §7 Don’ts. Their extra causal readings — two-accent-limit-per-section, 24px-pill-reserved-for-large-section-banners, CTA-labels-must-be-500-or-700, insufficient-contrast-of-white-on-`#EDF9F6`-or-`#FAFAFB`, diffuse-shadows-opacity-≤-0.08, clean-data-first-aesthetic, and AI-gradient-and-purple-accent-only-in-AI-feature-or-self-directed-learning-contexts — are a derived editorial implementation inference from the verified surfaces; they are not Classting-authored or a separately published UI specification.

- Don't use more than two accent colours (e.g., green + purple) in the same section; pick the colour that matches the product segment.
- Don't apply the 24px pill radius to small inline buttons; reserve pill radius for large section banners.
- Don't use `font-weight: 400` for CTA labels — labels must be 500 or 700.
- Don't place white text on `#EDF9F6` or `#FAFAFB` — contrast insufficient; use `#424242` or `#17A27E`.
- Don't add heavy drop shadows to cards; diffuse shadows (opacity ≤ 0.08) maintain the clean, data-first aesthetic.
- Don't use the AI gradient (`#9F7AEA` → `#F56565`) outside AI-feature or self-directed-learning contexts. The purple accent (`#9F7AEA`) should appear only in those contexts.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The following unmerged-role readings, including catalog-primary-not-hover-green-not-green-050, hover-green-not-keyboard-focus-treatment, canvas-`#FAFAFB`-not-card-`#FFFFFF`-not-on-primary-`#FFFFFF`, footer-black-not-body-ink, outline-`#ED872D`-not-border-`#ED872C`-not-orange-500-`#ED8936`, purple-as-AI-accent-not-a-second-primary, source-stated-rgb-and-hex-for-green-050-not-collapsed, YAML-component-fields-not-extra-general-inks, `#FFFAF0`-as-orange-tag-fill-only, and §9-`--primary`/`--text-dark`-not-extra-colors, are a derived editorial implementation inference from the verified surfaces; they are not Classting-authored or a separately published UI specification. Catalog `primary_color` `#00C896` is YAML `primary` and YAML `brand`; it is not hover `#17A27E` and not Green 050. Canvas `#FAFAFB` is YAML `canvas`. YAML `surface` `#FFFFFF` is a separate field from canvas and from on-primary `#FFFFFF`. Footer `#000000` is not body `#424242`. YAML `outline` `#ED872D` is not Orange 500 `#ED8936` and is not the Outline CTA body border `#ED872C`. YAML component fields stay on those controls. `#FFFAF0` is the orange service-tag fill, not a YAML color role.

- **CT Green 500 / Primary** (`#00C896`): catalog `primary_color`. YAML `primary` and `brand`. Primary brand, CTA buttons, active nav, key data highlights. YAML `button-primary.bg`. Consult-banner fill uses this hex on that control; the jobs stay unmerged.
- **CT Green 700 / primary-hover** (`#17A27E`): YAML `primary-hover`. Source §2: `rgb(23, 162, 126)` (`#17A27E`) — hover state on green elements, body accent. Not `focus-visible` treatment.
- **CT Green 050:** YAML `green-050` `#EFFFFA`. Source §2 also writes `rgb(239, 255, 251)` (`#EFFFFA`) for card surface, tag background, mint wash sections. The rgb triple and the hex are both kept as source-stated; they are not collapsed into one converted value.
- **Purple 500** (`#9F7AEA`): YAML `accent-purple`. Secondary accent; AI-feature or self-directed-learning contexts, gradient-self.
- **Orange 500** (`#ED8936`): YAML `accent-orange`. Tertiary accent; business / content segments. Orange CTA fill. Not YAML `outline` `#ED872D`.
- **Blue 500** (`#4299E1`): YAML `accent-blue`. University segment, data gradient endpoint.
- **Dark Text** (`#424242`): YAML `foreground`. Primary body text, headings. YAML `button-black.bg` uses this hex as that control’s fill; the jobs stay unmerged.
- **Gray 600** (`#757575`): YAML `muted`. Secondary / supporting body text.
- **Surface White / Canvas** (`#FAFAFB`): YAML `canvas`. Neutral page background. Source §2 also names this as “card base”; harvested Blog / Feature Card fill is `#FFFFFF`. Those jobs stay unmerged.
- **YAML `surface`** (`#FFFFFF`): YAML surface field. Card fill and on-primary share this hex; named jobs stay unmerged. YAML `on-primary` `#FFFFFF` is text on filled primary actions.
- **Surface Mint** (`#EDF9F6`): YAML `surface-mint`. Tag background, feature section washes. YAML `tag-mint.bg`.
- **Surface Lavender** (`#FAF5FF`): YAML `surface-lavender`. AI segment section wash.
- **Black** (`#000000`): YAML `footer`. Footer, dark-mode CTA panels.
- **YAML `outline`** (`#ED872D`): Outline CTA text and the YAML outline field. Source §4 Outline CTA border is 1px solid `#ED872C`. YAML `button-outline` use-string says `1px #ED872D border`. The two border hexes are a preserved source conflict; they are not merged.

Source §9 names CSS variables `--primary: #00C896` and `--text-dark: #424242` as the first two variables. Those names stay attached to the same hexes; they are not extra colors.

### Spacing

YAML `spacing` is unitless: xs 4, sm 8, md 16, base 16, lg 24, xl 32, xxl 48, section 64.

Source §5 names a CSS spacing token scale `--space-01` through `--space-07`: 0.25rem → 0.5rem → 0.75rem → 1rem → 1.25rem → 1.5rem → 2rem. Layout tokens `--space-layout-01` through `-09`: 1.5rem → 2.25rem → 3rem → 3.5rem → 4rem → 4.5rem → 5.5rem → 6rem → 7.5rem.

Treating those YAML numbers as unitless token numbers rather than a claimed px scale, treating the rem scales as named CSS tokens rather than conversions of the YAML numbers, and treating harvested control padding as staying with those controls, is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification.

Section vertical rhythm: `margin-top: 120px` between major sections; `padding: 64px 106px` on CTA banners. Horizontal padding: 16px mobile → 48px desktop.

### Shape

YAML `rounded`: sm 6, md 8, lg 16, pill 24, full 9999.

The following local-geometry reading, including 8px-fill-buttons, 16px-cards, 24px-consult-banners, 6px-tags, 24px-pill-not-on-small-inline-buttons, YAML-`full`-9999-not-observed-marketing-geometry, and 6-8-16-24-9999-not-a-universal-radius-for-every-unlisted-control, is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification.

- Tag (6px): YAML `rounded.sm`; mint and orange service tags
- Fill button (8px): YAML `rounded.md`; green / black / orange / outline CTAs
- Card (16px): YAML `rounded.lg`; blog / feature cards
- Consult banner (24px): YAML `rounded.pill`; section banners. Do not apply this radius to small inline buttons.
- YAML `full` 9999: YAML field only; not promoted as observed marketing geometry

Treating 6 / 8 / 16 / 24 / 9999 as local harvested or YAML geometry rather than a universal radius for every unlisted control is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification. 6 / 8 / 16 / 24 / 9999 remain local harvested or YAML geometry, not a universal radius for every unlisted control.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow | Tag backgrounds, section washes |
| Level 1 — Subtle | `box-shadow: 0 0 12px rgba(0,0,0,0.05)` / YAML `shadow.subtle` `rgba(0,0,0,0.05) 0px 0px 12px` | Blog / feature cards |
| Level 2 — Raised | `box-shadow: 0 2px 12px rgba(0,0,0,0.08)` / YAML `shadow.raised` `rgba(0,0,0,0.08) 0px 2px 12px` | Interactive panels |
| Level 3 — Focus ring / Accent | `box-shadow: 0 5px 25px rgba(0,200,150,0.08)` / YAML `shadow.accent` `rgba(0,200,150,0.08) 0px 5px 25px` | Highlighted CTA feature cards |
| Backdrop / overlay | `rgba(0,0,0,0.45)` mobile backdrop; `rgba(0,0,0,0.60)` popup overlay | Named overlay values |

Treating `rgba(0,200,150,0.08)` as the primary RGB at 0.08 alpha rather than the solid primary fill `#00C896` is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification. `rgba(0,200,150,0.08)` uses the primary RGB at 0.08 alpha. It is not the solid primary fill `#00C896`.

The following shadow-philosophy readings — no-heavy-4px/8px-blur-shadows, mild-diffusion-not-dramatic-elevation, and opacity-≤-0.08 — are a derived editorial implementation inference from the verified surfaces; they are not Classting-authored or a separately published UI specification. Source §6: no heavy 4px/8px blur shadows; depth is expressed through mild diffusion, not dramatic elevation.

Treating Named Level 3 “Focus ring / Accent” as a source elevation label rather than `focus-visible` treatment evidence is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification. Named Level 3 “Focus ring / Accent” is a source elevation label. It is not `focus-visible` treatment evidence.

### Motion

Source-stated duration, transition, animation, easing, and reduced-motion roles. Treating the following tables as source-stated rather than computed CSS is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification.

| Role | Value | Use |
|---|---|---|
| Micro-interactions (hover, toggle) | `transition: background-color 0.1s, color 0.1s` | Very fast, immediate feedback |
| Panel / overlay | `transition: all 0.3s` | Moderate, deliberate |
| Skeleton pulse | `animation: pulse 1.5s ease-in-out infinite` | Slow, non-distracting |
| Nav animation | 500ms (`data-duration="500"`) | Webflow nav |

Easing default: `ease` (Webflow `data-easing="ease"`) for nav and panel animations. Skeleton uses `ease-in-out`.

Reduced-motion: Skeleton pulse should respect `prefers-reduced-motion: reduce`; replace with static gray-300 fill (`hsl(0,0%,88%)`).

The following source motion-principle readings — never-decorative, confirms-state-change, reveals-structure, signals-system-work, avoid-transform-heavy-keyframes-on-data-heavy-views, and slightly-slow-for-educational-context — are a derived editorial implementation inference from the verified surfaces; they are not Classting-authored or a separately published UI specification. Source motion principles: Motion is never decorative. Every animation either confirms state change (0.1s micro), reveals structure (0.3s panel), or signals system work (1.5s skeleton). Avoid transform-heavy keyframe animations on data-heavy views (dashboards). Nav 500ms is source-stated as slightly slow for educational context.

Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings, including homepage-HTML-and-Webflow-as-prose-derived-reconstruction-plus-exact-Proof-samples-rather-than-a-collector-FontFace-packet, CT-Corp-guidelines-as-parent-corporate-brand-context-not-Classting-product-use-font-evidence, Noto-Sans-KR-and-HK-as-named-faces-not-Classting-owned-typefaces, YAML-`family.mono`-also-Noto-Sans-KR, and no-system-font-substitute, are a derived editorial implementation inference from the verified surfaces; they are not Classting-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Parent-corporate brand context | Source footer cites `https://ctcorp.ai/ko/brand-guidelines` (official CT Corp. brand guidelines page, 2025-02-26 CI) as parent-corporate identity context. That page is not Classting product-use font evidence and is not quoted here as a type-token table. |
| Live surface-use | Source reconstructs Noto Sans KR as the Korean-first face from homepage HTML + Webflow CSS (`tokens.source: prose-derived`). Exact Proof samples name `Noto Sans KR` on `.display-x-lg` and `.txt-body`. This is not a FontFaceSet collector packet. |
| Declared-only | YAML `family.mono` is `Noto Sans KR` (same string as `family.sans`). No separate monospace face is named. |

### Family

- **Korean / UI (YAML `family.sans`):** `Noto Sans KR`
- **YAML `family.mono`:** `Noto Sans KR`
- **Traditional Chinese locales:** Noto Sans HK

The following font-use boundary, including do-not-present-Noto-Sans-KR-or-HK-as-a-Classting-owned-typeface, do-not-replace-Noto-Sans-KR-on-Korean-UI-with-a-system-stack, do-not-present-a-system-fallback-as-Noto-Sans-KR, and KR-400-500-700-with-TW-Noto-Sans-HK, is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification. Do not present Noto Sans KR or Noto Sans HK as a Classting-owned typeface. Do not replace Noto Sans KR on Korean UI with a system font. Do not present a system stack as Noto Sans KR. Source §9: for KR locale always load Noto Sans KR 400+500+700; for TW locale use Noto Sans HK instead.

### Type roles

Verified YAML line-height values are the unitless ratios `1.5`, `1.0`, `1.29`, and `1.21`. The following ratio-versus-size-local readings, including ratios-scale-with-font-size-not-fixed-px, 24px-beside-Body-1.5, 14px-beside-label-1.0, 54px-beside-display-lg-1.29, 68px-beside-display-x-lg-1.21, and display-md-YAML-lineHeight-absent, are a derived editorial implementation inference from the verified surfaces; they are not Classting-authored or a separately published UI specification. The unitless ratios scale with font size and are not fixed px. YAML `display-md` has no `lineHeight` field; none is invented. YAML roles without a tracking field stay without one.

| Role | Font | Size | Weight | Line height (YAML) | Body-table observation | Use (YAML / body) |
|---|---|---:|---:|---:|---|---|
| Body copy | Noto Sans KR | 16px | 400 | 1.5 | 24px at this size | Body copy |
| Sub-button / label | Noto Sans KR | 14px | 500 | 1.0 | 14px at this size | Sub-button / label |
| Display SM (`.display-md`) | Noto Sans KR | 28px | 700 | YAML field absent | none invented | Section headings (`.display-md`) |
| Display LG (`.display-lg`) | Noto Sans KR | 42px | 700 | 1.29 | 54px at this size | Major feature headings (`.display-lg`) |
| Display XL (`.display-x-lg`) | Noto Sans KR | 56px | 700 | 1.21 | 68px at this size | Hero headings (`.display-x-lg`) |

Font-size scale tokens: 12px (size-60) → 14px (size-80) → 16px (size-100) → 18px (size-120) → 20px (size-140) → 24px (size-150). Weight scale: Regular 400, Medium 500, Bold 700.

The following type-rule readings — no-italic-in-marketing-UI, emphasis-via-color-or-weight, gradient-text-decorative-on-hero-only, hero-heading-color-`#424242`, hero-scale-56px-to-36px, and section-display-lg-42px-to-28px — are a derived editorial implementation inference from the verified surfaces; they are not Classting-authored or a separately published UI specification.

No italic usage in marketing UI; emphasis achieved via color (`#00C896`) or weight change.

Gradient text on hero headings: `linear-gradient(to right, #00C896, #9F7AEA)` (green-self), `linear-gradient(to right, #9F7AEA, #F56565)` (AI).

Source §9 hero heading recipe: `font-size: 56px; font-weight: 700; line-height: 68px; color: #424242; font-family: "Noto Sans KR", sans-serif`.

Hero headlines scale: 56px (desktop, `.display-x-lg`) → 36px (mobile, `--fontSizes-700: 2.25rem`). Section display-lg: 42px desktop → 28px (`.display-md` equivalent) on mobile.

### Assets

Treating catalog logo metadata as a Google favicon lookup, not a captured first-party mark, and not promoting it as a portable mark file, is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Preserving the source state contract here while the catalog graph is not adopted, treating source §14 class-feed / diagnostic / assignment / dashboard / button / input rows as source-stated state copy rather than as marketing-homepage interaction snapshots, recording unobserved `focus-visible` as omitted rather than synthesized, treating named input `focus` (`hsl(165,100%,39%)`) as a generic focus appearance rather than `focus-visible` treatment, and omitting loading/error/success applicability fields on marketing CTAs rather than closing them from the §14 product-surface rows, is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification. The source state contract, preserved here while the catalog graph is not adopted:

- **Empty state (class feed):** Illustration of an empty classroom with a single call-to-action "첫 게시물을 작성해보세요" (Write your first post); green primary button; no placeholder data
- **Loading (diagnostic):** Skeleton shimmer — gray-300 (`hsl(0,0%,88%)`) animated `pulse` at 1.5s ease-in-out infinite; radius matches the actual card at 6px or 16px
- **Error — network (data fetch):** Inline error message in red-600 (`hsl(0,76%,57%)`), retry CTA in green; never red buttons for destructive-only actions
- **Error — input validation:** Border switches to red-600 on the input field; helper text appears below at 12px / 400 in red-600; border-color token: `--colors-border-color-input-active: hsl(165,100%,39%)` on focus (green), red on error
- **Success (assignment submitted):** Toast notification with `#00C896` left-border accent; white background; auto-dismiss after 3 s
- **Skeleton (dashboard cards):** Full card width at 16px radius, pulse shimmer in gray-300 (`hsl(0,0%,88%)`); paragraph lines shimmer at reduced height (12px bars with 8px gap)
- **Disabled (button):** `background-color: hsl(0,0%,74%)` (gray-400); `color: #fff`; `cursor: not-allowed`; no hover effect
- **Disabled (input):** `background-color: hsl(0,0%,96%)` (gray-100); `border-color: hsl(0,0%,74%)`; `cursor: not-allowed`

Treating named input `focus` (`hsl(165,100%,39%)`) as a generic focus appearance rather than `focus-visible` treatment, and treating Input and Toast as unnamed rather than invented component rows, is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification. Named input `focus` (`--colors-border-color-input-active: hsl(165,100%,39%)`) is a generic focus appearance on an unnamed input. It is not `focus-visible` treatment evidence. The source records no Input component row; none is invented. Toast is named in the success row; no Toast component row is invented.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. The source records no `focus-visible` treatment; `focus-visible` visual treatment remains omitted. A later generic Focus observation would not be `focus-visible` evidence. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. Where exact selector/label/request/outcome mapping is unresolved, those three applicability fields are omitted at this boundary rather than closed from the §14 product-surface rows. This is not a complete state-coverage claim.

YAML `tokens.components` types are preserved per component (A1b). Cards and badges have no interactive-kind confirmation; kind and a state-applicability map are omitted for those (C4).

### Green CTA — Primary

- Role: primary CTA on the marketing homepage
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#00C896`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 15px 16px
- Font: 14px / 500; source §9 also writes `500 14px/14px "Noto Sans KR", sans-serif` for this primary CTA
- Use: YAML `button-primary` primary CTA
- Evidence: Proof `.button-md-container-fill` records matching fill `#00c896`, radius 8px, and padding `15px 16px`. Source-stated hover on green elements is `#17A27E`. Source §14 names disabled (button).
- Field note: Treating this fill as catalog `primary_color` rather than hover `#17A27E`, treating on-fill `#FFFFFF` as unmerged from canvas `#FAFAFB`, and treating `#17A27E` as green-element hover rather than `focus-visible`, is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source-stated as the marketing primary CTA. Proof `.button-md-container-fill` records matching fill `#00c896`, radius 8px, and padding `15px 16px` |
| hover | applicable | Pointer-web button; source-stated hover on green elements is `#17A27E` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Source §14 Disabled (button): `hsl(0,0%,74%)` fill, `#fff` text, `cursor: not-allowed`, no hover |

Loading, error, and success applicability are omitted. Source names this control as the marketing primary CTA; exact request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the §14 diagnostic / assignment rows.

### Black CTA — Alt

- Role: alt CTA
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#424242`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 15px 16px (body §4; YAML `button-black` has no padding field)
- Font: 14px / 500 (body §4; YAML `button-black` has no font field)
- Use: YAML `button-black` alt CTA
- Source-stated: default in body §4 and YAML `button-black`; source §14 disabled (button). Not a Proof live-home sample.
- Field note: Treating `#424242` as this control’s fill rather than body ink, treating green-element hover `#17A27E` as not this control’s hover, and treating YAML `button-black` as having no padding field and no font field rather than filling those from the green CTA row, is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source-stated as the alt CTA in body §4 and YAML `button-black`; not a Proof live-home sample |
| hover | applicable | Pointer-web button; visual treatment omitted (`#17A27E` is green-element hover, not this control) |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Source §14 Disabled (button): `hsl(0,0%,74%)` fill, `#fff` text, `cursor: not-allowed`, no hover |

Loading, error, and success applicability are omitted. Source names this control as an alt CTA; exact request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed.

### Orange CTA — Business Segment

- Role: business-segment CTA
- Kind: interactive
- Anatomy: label
- Background: `#ED8936`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 15px 16px
- Font: 14px / 500
- Use: source §4 Orange CTA — Business Segment. YAML has no component row for this control. Treating CTA semantic as supporting interactive kind, and treating primitive type as unresolved rather than inventing `Type: button` from sibling fill-CTA rows, is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification. YAML has no component row; Type is not invented.
- Source-stated: default in body §4; source §14 disabled (button). Not a Proof live-home sample.
- Field note: Treating `#ED8936` as this control’s fill rather than YAML `outline` `#ED872D` or border `#ED872C`, is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source-stated as the business-segment CTA in body §4; YAML has no component row; not a Proof live-home sample |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Source §14 Disabled (button): `hsl(0,0%,74%)` fill, `#fff` text, `cursor: not-allowed`, no hover |

Loading, error, and success applicability are omitted. Source names this control as a business-segment CTA; exact request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed.

### Outline CTA — Secondary

- Role: secondary outline CTA
- Kind: interactive
- Type: button
- Anatomy: label
- Background: transparent
- Text: `#ED872D`
- Border: source §4 1px solid `#ED872C`; YAML `button-outline` use-string `1px #ED872D border`. Both hexes kept; not merged.
- Radius: 8px
- Padding: 20px 24px
- Font: 14px / 500
- Use: YAML `button-outline` transparent outline CTA
- Source-stated: default in body §4 and YAML `button-outline`; source §14 disabled (button). Padding `20px 24px` is that body §4 field. It is not the Proof `.button` fill padding, which is a separate source row.
- Field note: Treating `#ED872D` as this control’s text (and YAML outline) rather than Orange 500 `#ED8936`, treating `#ED872C` as the body border rather than a second general outline token, and treating both source border hexes as kept rather than merged, is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source-stated as the secondary outline CTA in body §4 and YAML `button-outline`; not a Proof live-home sample |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Source §14 Disabled (button): `hsl(0,0%,74%)` fill, `#fff` text, `cursor: not-allowed`, no hover |

Loading, error, and success applicability are omitted. Source names this control as a secondary outline CTA; exact request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed.

### Blog / Feature Card

- Role: blog / feature card
- Type: card
- Anatomy: surface
- Background: `#FFFFFF`
- Border: none
- Radius: 16px
- Padding: 24px 20px
- Shadow: `0 0 12px rgba(0,0,0,0.05)` (YAML `card` use: subtle 12px shadow)
- Use: YAML `card`
- Evidence: Proof `.card-blog` records `#fff`, radius 16px, and `box-shadow: 0 0 12px #0000000d`. YAML/body padding `24px 20px` is a separate source field.
- Kind and a state-applicability map are omitted (YAML `type: card`; no interactive-kind confirmation).

### Section Banner (Consult)

- Role: consult section banner
- Type: card
- Anatomy: surface
- Background: `#00C896`
- Radius: 24px
- Padding: 64px 106px
- Use: YAML `section-banner` Consult banner
- Source-stated: default in YAML `section-banner` / body §4. Not a Proof live-home sample.
- Field note: Treating this `#00C896` fill as the consult-banner field rather than the Green CTA button, and treating 24px radius as banner geometry rather than fill-button 8px, is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification.
- Kind and a state-applicability map are omitted (YAML `type: card`; no interactive-kind confirmation).

### Service Tag — Mint

- Role: mint service tag
- Type: badge
- Anatomy: label
- Background: `#EDF9F6`
- Radius: 6px
- Padding: 8px
- Font: 14px / 500 (YAML `tag-mint`)
- Use: YAML `tag-mint` mint tag
- Evidence: Proof `.tag-service` records `#edf9f6`, radius 6px, and padding `8px`.
- Kind and a state-applicability map are omitted (YAML `type: badge`; no interactive-kind confirmation).

### Service Tag — Orange

- Role: orange service tag
- Anatomy: label
- Background: `#FFFAF0`
- Radius: 6px
- Padding: 8px
- Use: source §4 Service Tag — Orange. Treating this control as having no YAML component row and no type field, and not inventing a type, is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification. YAML has no component row and no type field; type is not invented.
- Source-stated: default in body §4. Not a Proof live-home sample.
- Field note: Treating `#FFFAF0` as this tag’s fill rather than a YAML color role, is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification.
- Omitting kind and a state-applicability map because YAML type is absent and not invented is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification. Kind and a state-applicability map are omitted (no interactive-kind confirmation; YAML type absent, not invented).

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The following layout-rhythm readings — max-width-containers, flexbox-rows-with-space-between, gap-based-spacing, 120px-section-rhythm, 64px-106px-banner-padding, 720px-column-to-row, 540px-page-background-shift, gray-200-hex-unnamed-not-invented, feature-grid-side-by-side-at-≥720px, §9-`max-width: 1248px; margin: 0 auto; padding: 0 16px`, and YAML-spacing-and-rem-scales-unmerged-from-these-page-measurements — are a derived editorial implementation inference from the verified surfaces; they are not Classting-authored or a separately published UI specification.

Max content width: 1,248px on marketing pages; 1,280px on pricing. Source §9 also writes `max-width: 1248px; margin: 0 auto; padding: 0 16px` and says to avoid hardcoded pixel values for layout widths. Horizontal padding: 16px mobile → 48px desktop. Primary grid: flexbox rows, `justify-content: space-between`, gap-based spacing. Section vertical rhythm: `margin-top: 120px` between major sections; `padding: 64px 106px` on CTA banners.

Responsive breakpoint: 720px (flex-direction switches from column to row on most feature sections); 540px (page background shifts from gray-200 to white). No hex is given for gray-200; none is invented. Feature grid: hero image + content side-by-side at ≥ 720px; stacked on mobile. Feature image widths: 50% desktop (`@media ≥ 720px`) → 100% mobile. CTA buttons: full-width (`width: 100%`) on mobile; auto/fixed-width on desktop. Section banner (`consult`): `padding: 64px 106px` → padded tightly on mobile with reduced side padding. Max-width containers (1248px) fill full viewport on small screens with `padding-left/right: 16px`. Navigation: collapses at `data-collapse="all"` (Webflow nav menu).

Treating YAML spacing numbers and the rem token scales in Foundations as unmerged from these page measurements is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification. YAML spacing numbers and the rem token scales in Foundations stay unmerged from these page measurements.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The following voice-register readings — precise-encouraging-grounded, data-as-proof, empathise-with-teacher-workload, students-as-capable-learners, short-declarative-sentences, and active-voice-not-passive-hedging — are a derived editorial implementation inference from the verified surfaces; they are not Classting-authored or a separately published UI specification. Source §10 three adjectives: Precise, Encouraging, Grounded.

| Do | Don't |
|----|-------|
| Use data as proof: "91.5% accuracy" | Vague promises: "better learning" |
| Empathise with teacher workload | Lecture teachers on pedagogy |
| Speak to students as capable learners | Infantilise or over-simplify |
| Short, declarative sentences | Long qualifier chains |
| Active voice: "We accelerate…" | Passive hedging: "Learning may be…" |

Treating that table as reconstruction voice rules rather than a Classting-published microcopy guide, and not promoting the source’s three *Illustrative:* voice samples, is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification.

Source-stated empty-state label remains unqualified: “첫 게시물을 작성해보세요”.

Treating source §9 KR/TW font loading as a font-loading rule rather than a complete locale profile is a derived editorial implementation inference from the verified surfaces; it is not Classting-authored or a separately published UI specification. Source §9 locale loading: KR Noto Sans KR 400+500+700; TW Noto Sans HK. That is a font-loading rule, not a complete locale profile.

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

- `focus-visible` visual treatment
- YAML tracking (field absent); YAML `display-md` `lineHeight` (field absent)
- gray-200 hex at the 540px page-background shift
- resolution of CT Green 050 `rgb(239, 255, 251)` versus `#EFFFFA`
- resolution of Outline CTA border YAML `#ED872D` versus body `#ED872C`
- exact request/outcome mapping for marketing CTA loading, error, and success
- Input and Toast as declared components (named only inside source §14 rows)
- motion values beyond the source-stated tables — promote only after per-component computed capture of all five kinds; a single named duration is not that gate

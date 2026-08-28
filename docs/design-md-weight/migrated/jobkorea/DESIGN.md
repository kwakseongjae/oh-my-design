# JobKorea Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

JobKorea is South Korea's leading AI career platform connecting 9+ million active job seekers with employers through personalized matching, salary intelligence, and community-driven career guidance. This contract covers the first-party web surface the source inspected for tokens on 2026-06-03: the homepage at `https://www.jobkorea.co.kr`. The homepage HTML and the CSS bundles at `https://fe-static-cdn.jobkorea.co.kr/display/web/_next/static/css/ff9addcaa74e70a7.css`, `https://fe-static-cdn.jobkorea.co.kr/display/web/_next/static/css/fd29aacb4b8b02e0.css`, and `https://fe-static-cdn.jobkorea.co.kr/display/web/_next/static/css/fa90ad3a5df82bc3.css` are the token evidence for that page. The live token system maps `[data-brand-theme=jk]` `--themecolor-brand-primary` to `--color-jkblue-600` (`#083ccc`). `https://www.jobkorea.co.kr/company/1517115` is a named brand-owned source for Worxphere / JobKorea company narrative; it does not supply the computed interface tokens below. Every value stays attached to the surface that established it. Reading that inspected homepage and those three CSS bundles as this contract's token surfaces, keeping values attached to the surface that established them, and treating the company page as a named source that does not supply computed interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not JobKorea-authored or a separately published UI specification.

The source records a deep royal blue (`#083ccc`, JK Blue 600) on crisp white surfaces with an understated gray-scale hierarchy (`#f6f7f8` background through `#1a1a1e` near-black), and an accent orange (`#ff6d12`, AM Orange 500) reserved for urgency cues — deadline badges, highlighted pay rates. Since the 2023 "Dreammark" brand refresh the product has leaned into pill-radius search bars (`border-radius: 999px`), gradient-glowing AI search inputs, and subtle card elevation. The hex values, named roles, 2023 Dreammark date, `999px` search radius, gradient-glowing AI search, and card elevation in this paragraph are recorded. The characterizations built on them — confident and data-forward; authority and trust in a crowded recruitment market; listings and CTA buttons that read at a glance without fatigue; a clear urgency hierarchy without overwhelming the functional tone; a more youthful, mobile-first energy; and a move away from a legacy portal feel toward a modern career-management platform — are a derived editorial implementation inference from the verified surfaces; they are not JobKorea-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. JobKorea was established in 1996 and launched its employment portal in 1998 as one of Korea's first dedicated online job boards. Over nearly three decades it grew into the nation's largest HR platform — now part of the Worxphere group — hosting 9.32 million active resumes and connecting approximately one million monthly active job seekers with employers across every industry and region. In 2023, JobKorea unveiled its "Dreammark" brand identity, created by branding agency Sodiumpartners. The refresh moved the platform's narrative from a utilitarian job-listing site toward a personalized career manager, with a bold JK Blue identity system and a new brand mascot "Jobko" that embodies the mission: guiding people toward jobs that fit their real selves. The company articulates its purpose as making "people's dreams become jobs, and companies' jobs become dreams," with a social-responsibility dimension — donating 100 KRW per submitted resume and per job posting to welfare programs for people with disabilities and economically marginalized youth. Today, Worxphere operates JobKorea alongside AlbaMon (part-time), GameJob, NineHire (ATS), and JobPlanet (employer reviews), building toward a full-stack AI HR tech platform. The platform has ranked #1 in Korean employment portal brand power (K-BPI) for three consecutive years (2023–2025), and its AI-powered "LOOP AI" recommendation engine now powers the core job-discovery experience on both web and mobile. The years 1996 / 1998 / 2023, Sodiumpartners, Jobko, the purpose line, the 100 KRW donation, Worxphere / AlbaMon / GameJob / NineHire / JobPlanet, K-BPI 2023–2025, LOOP AI, and the closing sentence that LOOP AI now powers the core job-discovery experience on both web and mobile are the source's own narrative facts; they do not by themselves supply interface tokens. The 2023 Sodiumpartners rebrand narrative describes "JOBKOREA Black" as the primary brand color; the live CSS token system maps primary to `#083ccc`. Those two records stay unresolved rather than merged. Classifying that founding-and-Dreammark narrative as context that does not by itself supply interface tokens, and leaving the JOBKOREA Black / JK Blue pair unresolved, are derived editorial implementation inferences from the verified surfaces; they are not JobKorea-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not JobKorea-authored or a separately published UI specification. Each names a surface, control, or published string the source records. They do not come from the source's persona section.

- Discover AI-ranked job matches on `https://www.jobkorea.co.kr`.
- Read salary indicators and the `N명 지원` count on job cards.
- Submit an application from a job card.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as illustrative and not based on published JobKorea research, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or occupation classification is carried into this document or its sidecar. What the source independently records is the audience it names at a group level: 9+ million active job seekers; one million monthly active job seekers; employers across every industry and region; and job seekers at every career stage — new graduates, mid-career transitioners, seniors, and part-timers. Reading those groups as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not JobKorea-authored or a separately published UI specification.

### Distinctive traits

The list restates values the source records. The values are measured; the groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not JobKorea-authored or a separately published UI specification.

- JK Blue 600 `#083ccc` as primary CTA, active, link, and focus-ring color
- AM Orange 500 `#ff6d12` reserved for urgency badges and deadline labels
- Pretendard with Apple SD Gothic Neo and Malgun Gothic fallbacks
- Named type scale from Display 1 `48px / 64px` / 700 through Caption 3 `11px / 15px` / 400
- Search pills at `999px`; cards and form controls at `10px`
- Primary CTA 48px tall, `0 16px` padding, 16px / 700, hover `#012ca2`
- Four named elevation levels plus YAML `tokens.shadow.card` `rgba(0,0,0,0.06) 0px 2px 8px`

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not JobKorea-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Personalization over volume.** JobKorea surfaces fewer, better-matched opportunities rather than an overwhelming list. *UI implication:* The default job feed shows AI-ranked picks, not raw chronological listings; chip filters and saved preferences shape what the user sees from the first visit.
2. **Transparency builds trust.** Salary data, recruiter view counts, application-to-hire ratios, and company reviews are surfaced inline on job cards — not behind a paywall. *UI implication:* Job cards include a salary indicator and a "N명 지원" (N applied) count next to the title.
3. **Speed respects the user.** A resume can be submitted in two taps from a job card; the full application flow targets under 60 seconds. *UI implication:* Destructive or multi-step actions require confirmation, but forward-direction actions — apply, save, share — are single-tap with immediate feedback.
4. **Data earns the right to advise.** JobKorea uses behavioral signals (viewed jobs, resume completeness, location) before making AI recommendations, never cold. *UI implication:* Empty states prompt profile completion rather than showing random content; progress indicators show how close the user is to unlocking personalized matches.
5. **Inclusive access.** The platform serves job seekers at every career stage — new graduates, mid-career transitioners, seniors, and part-timers — with differentiated content lanes rather than a one-size feed. *UI implication:* Specialized channels (IT, Design, Senior, Startup) are surfaced in persistent GNB tabs and not buried in filter menus.

### Application rules

The source states these seven as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not JobKorea-authored or a separately published UI specification.

- Use JK Blue 600 (`#083ccc`) for all primary interactive elements — buttons, active tabs, checked states
- Apply Pretendard at the specified weight/size tokens; never mix ad-hoc font sizes outside the named scale
- Use pill-radius (999px) for search inputs and tag chips; use 10px radius for cards and form controls
- Reserve AM Orange (`#ff6d12`) strictly for urgency signals — deadline countdowns, urgent-hire badges
- Keep body copy at Gray 950 (`#1a1a1e`) on white; use Gray 700 (`#575f6c`) for secondary metadata
- Use `0 4px 16px rgba(0,0,0,0.12)` elevation for interactive cards; flat (no shadow) for static content
- Provide skeleton loaders matching the exact card height/radius before content loads

### Avoid

The source states these six as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not JobKorea-authored or a separately published UI specification.

- Don't use AM Orange for primary buttons or general interactive states — it belongs to AlbaMon's brand
- Don't apply the gradient search border animation to non-AI-powered inputs; it signals AI capability
- Don't use border-radius values outside the token set (avoid ad-hoc 5px, 15px, 20px)
- Don't place body text below Gray 700 (`#575f6c`) on white — fails WCAG AA at small sizes
- Don't stack more than two elevation levels in the same scroll context (list + modal is fine; list + card + modal is not)
- Don't use the gray-950 near-black (`#1a1a1e`) as a button background except for the "inverse" button variant

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Role names follow the source's own token-set keys and the §2 palette names. Taking those role names from the source's own keys, pairing each hex to the token-set path named beside it, keeping `tokens.colors.primary-hover` `#012ca2` off `tokens.colors.primary-500` `#1b55f6`, keeping `tokens.colors.white` `#ffffff` off on-button `#ffffff` as the same hex on two records, and keeping `#d5d8dc` / `#f11e1e` / `#fbf5f5` on the component and state rows that established them rather than as invented color keys, are derived editorial implementation inferences from the verified surfaces; they are not JobKorea-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

- **JK Blue 600 / Primary** (`#083ccc`): primary CTAs, active states, links, focus rings. Token-set key `tokens.colors.primary`.
- **Primary hover** (`#012ca2`): primary CTA hover. Token-set key `tokens.colors.primary-hover`. This key is not `tokens.colors.primary-500`.
- **JK Blue 500** (`#1b55f6`): hover surfaces, secondary brand tint. Token-set key `tokens.colors.primary-500`.
- **JK Blue 400** (`#4c7afb`): lighter interactive states, selected chip backgrounds. Token-set key `tokens.colors.primary-400`.
- **JK Blue 50** (`#f0f2fa`): brand-tinted backgrounds, pill tag fills. Token-set key `tokens.colors.primary-50`.
- **AM Orange 500 / Point** (`#ff6d12`): urgency badges, deadline labels, job-ad highlights. Token-set key `tokens.colors.point-orange`.
- **Gray 950 / Near-Black / Text** (`#1a1a1e`): primary body text, headings. Token-set key `tokens.colors.text`.
- **Gray 900 / Text-secondary** (`#292c32`): secondary text, card content. Token-set key `tokens.colors.text-secondary`.
- **Gray 700 / Text-tertiary** (`#575f6c`): tertiary labels, meta information. Token-set key `tokens.colors.text-tertiary`.
- **Gray 500 / Placeholder** (`#949ba8`): placeholder text, disabled labels. Token-set key `tokens.colors.placeholder`.
- **Gray 100 / Border** (`#e6e8ea`): dividers, default input borders. Token-set key `tokens.colors.border`.
- **Gray 50 / Canvas** (`#f6f7f8`): page background, search bar fill. Token-set key `tokens.colors.canvas`.
- **Red 500 / Error** (`#fc3b3b`): form errors, destructive indicators. Token-set key `tokens.colors.error`.
- **Green 500 / Success** (`#0dbc7c`): application success, offer received. Token-set key `tokens.colors.success`.
- **Base White** (`#ffffff`): card surfaces, modal backgrounds. Token-set key `tokens.colors.white`.

`#d5d8dc` is the Secondary Outlined border and the Disabled Filled background on the §4 button records. It is not a `tokens.colors` key. `#f11e1e` is the input error border on the §4 field record and the §14 form-validation row. It is not `tokens.colors.error` `#fc3b3b`. `#fbf5f5` is the §14 network-error Red 50 background. It is not a `tokens.colors` key.

### Spacing

Unitless token-set steps from `tokens.spacing`: `xs 4` · `sm 8` · `md 12` · `base 16` · `lg 24` · `xl 32` · `xxl 48` · `section 64`.

The source restates an 8px base spacing unit with multiples 4, 8, 12, 16, 20, 24, 32, 40, 48px on job-listing grids. `20` and `40` are those layout multiples. They are not `tokens.spacing` keys. `tokens.spacing.md: 12` is not `tokens.rounded.md: 10` and is not Elevated Card `12px`. `tokens.spacing.base: 16` is not `tokens.rounded.lg: 16` and is not a type size. `tokens.spacing.sm: 8` is not a radius step. `tokens.spacing.lg: 24` is not a type size. Keeping those key paths unmerged, and keeping the 20 / 40 multiples on the layout record, is a derived editorial implementation inference from the verified surfaces; it is not JobKorea-authored or a separately published UI specification.

### Shape

Unitless token-set steps from `tokens.rounded`: `sm 4` · `md 10` · `lg 16` · `full 9999`.

The source's named radius uses, kept on their own rows:

- Token-set small: `4` — `tokens.rounded.sm`
- Cards and form controls: `10` / `10px` — `tokens.rounded.md` and the YAML button / input / card `radius: 10`
- Elevated Card: `12px` — a §4-only use, not `tokens.rounded.md` and not `tokens.spacing.md: 12`
- Token-set large: `16` — `tokens.rounded.lg`
- Search / tag pills: `999px` — the §4 / §1 / §7 search-and-chip spelling
- Token-set full: `9999` — `tokens.rounded.full`

`tokens.rounded.full: 9999` stays the unitless full step. It is not the search `999px` and it is not a type size. `tokens.rounded.md: 10` is not a spacing step. `tokens.rounded.lg: 16` is not `tokens.spacing.base: 16`. `tokens.rounded.sm: 4` is not `tokens.spacing.xs: 4`. Keeping those paths unmerged, and keeping `999px` beside `full: 9999`, is a derived editorial implementation inference from the verified surfaces; it is not JobKorea-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| List shadow | `0 4px 8px rgba(0,0,0,0.02)` | subtle rows; used on list items |
| Secondary shadow | `0 4px 16px rgba(0,0,0,0.07)` | card rest; default card state |
| Default shadow | `0 4px 16px rgba(0,0,0,0.12)` | interactive card; hovered cards, modals |
| Up shadow | `0 -2px 12px rgba(0,0,0,0.12)` | bottom sheet, sticky CTAs |
| Button Big shadow | `0 0 12px rgba(0,0,0,0.20)` | large floating action buttons |

Token-set path `tokens.shadow.card`: `rgba(0,0,0,0.06) 0px 2px 8px`. That YAML spelling is not List shadow `0 4px 8px rgba(0,0,0,0.02)` and is not Default shadow `0 4px 16px rgba(0,0,0,0.12)`. Modals use a `rgba(0,0,0,0.6)` dimmer overlay. Tooltips use `#1a1a1ed9` (85% near-black) background. Keeping the YAML card shadow beside the five named §6 levels, and keeping the dimmer and tooltip records on their own rows, is a derived editorial implementation inference from the verified surfaces; it is not JobKorea-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a prose-derived reconstruction of the homepage HTML and CSS bundles. The motion contract below sits outside a published UI specification: the source names a Material-standard curve and a decelerate curve, and assigns those curve values no JobKorea-authored computed sample that is independent of the documented template / Material-standard re-injection path. The durations, animation names, reduced-motion rule, and motion rules below, and the omission of the two untraceable curve values, are therefore a derived editorial implementation inference from the verified surfaces; they are not JobKorea-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| Micro | 150ms | micro interactions (button press ripple, checkbox check, tab underline shift) |
| Standard | 200ms | component state changes (card hover elevation, input focus ring) |
| Panel | 300ms | panel transitions (filter drawer slide, dropdown open) |
| AI search loop | 6s | AI search gradient animation (continuous loop, `ease-in-out`) |

Easing roles — two roles with declared uses. The specific curve values the source lists (`cubic-bezier(0.4, 0, 0.2, 1)`, `cubic-bezier(0, 0, 0.2, 1)`) match the documented template / Material-standard re-injection path and are not promoted here as tokens, so only the roles and their uses are kept:

| Role | Use |
|---|---|
| Standard | virtually all UI transitions (source names this as Material "standard" / ease-in-out) |
| Decelerate | elements entering the screen (drawer slide-in, toast appear) |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them:

- All color, background-color, border-color, box-shadow, opacity, and transform transitions use the standard easing role.
- The AI search bar gradient (`animation: gradient-flow-dynamic 6s ease-in-out infinite`) is the only always-on animation; all other motion is user-triggered.
- Respect `prefers-reduced-motion`: disable the gradient animation and reduce all durations to ≤50ms.
- Skeleton shimmers use a CSS `animation: shimmer` keyframe (opacity 0.4→1→0.4), 1.5s linear infinite.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The company page and Dreammark narrative describe JobKorea's product evolution. They do not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not JobKorea-authored or a separately published UI specification. |
| Live computed surface-use | The source records the inspected CSS as setting UI type exclusively in **Pretendard**, with Korean fallbacks to Apple SD Gothic Neo and Malgun Gothic. Token-set source is `prose-derived`. Token-set path `tokens.typography.family.sans` `Pretendard`; fallback `Apple SD Gothic Neo, Malgun Gothic, sans-serif`. |
| Official distributed asset | No JobKorea-exclusive downloadable font package was verified in the source. That absence-of-exclusive-package reading is a derived editorial implementation inference from the verified surfaces; it is not JobKorea-authored or a separately published UI specification. |
| Declared-only | The fallback members Apple SD Gothic Neo and Malgun Gothic are fallbacks, not a second brand face. Classing those fallback members as not the brand face is a derived editorial implementation inference from the verified surfaces; it is not JobKorea-authored or a separately published UI specification. |
| License | The source does not record a Pretendard licence line. No licence claim is invented. That no-licence-line / no-invented-claim reading is a derived editorial implementation inference from the verified surfaces; it is not JobKorea-authored or a separately published UI specification. |
| Named scale | The type scale is named by variant with an embedded px size. Heading tokens carry `letter-spacing: -0.5` for tighter display. Body and caption tokens use `letter-spacing: 0`. |

Calling Official product-use a product-evolution account rather than a published type token, calling Live computed the machine UI-family reading, calling the fallbacks declared-only rather than a second brand face, calling the missing Pretendard licence line a recorded absence rather than a permission to invent, and calling the named scale a recorded hierarchy rather than a separately published specimen, are derived editorial implementation inferences from the verified surfaces; they are not JobKorea-authored or a separately published UI specification.

### Family

- **Current visible UI family:** `Pretendard` — token-set path `tokens.typography.family.sans`
- **Fallback the token set records:** `Apple SD Gothic Neo, Malgun Gothic, sans-serif` — token-set path `tokens.typography.family.fallback`
- Do not replace unavailable or unobserved brand type with Pretendard. It is canonical here only because the source records exclusive UI use on the inspected CSS. Do not present the fallback members as a JobKorea brand face.

That no-substitution rule is a derived editorial implementation inference from the verified surfaces; it is not JobKorea-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Token-set path | Token-set use |
|---|---|---:|---:|---:|---:|---|---|
| Display 1 | Pretendard | 48 | 700 | 1.33 | -0.5 | `tokens.typography.display` | Display 1 |
| H1 heading | Pretendard | 32 | 700 | 1.31 | -0.5 | `tokens.typography.h1` | H1 heading |
| H4 sub-heading | Pretendard | 20 | 600 | 1.4 | | `tokens.typography.h4` | H4 sub-heading |
| Body 2 reading text | Pretendard | 16 | 400 | 1.5 | | `tokens.typography.body` | Body 2 reading text |
| Caption 1 | Pretendard | 13 | 400 | 1.38 | | `tokens.typography.caption` | Caption 1 |

YAML line heights stay unitless ratios: `1.33` · `1.31` · `1.4` · `1.5` · `1.38`. They are never converted to a replacement px (A1a). H4, Body, and Caption have no YAML `tracking`; those cells stay empty rather than inheriting `-0.5`. The source scale writes the same token-set sizes with a px suffix in §3; those spellings stay beside the unitless YAML sizes and are not a conversion of them: Display 1 `48px / 64px` / 700; H1 `32px / 42px` / 700; H4 `20px / 28px` / 600; Body 2 `16px / 24px` / 400; Caption 1 `13px / 18px` / 400. The source scale also writes sizes that are not `tokens.typography.*` keys and are kept beside the table, not as invented keys: Display 2 `36px / 48px` / 700; H2 `28px / 34px` / 700; H3 `24px / 32px` / 700; H5 `18px / 24px` / 600; Body 1 `17px / 25px` / 400; Body 3 `15px / 22px` / 400; Body 4 `14px / 20px` / 400; Caption 2 `12px / 17px` / 400; Caption 3 `11px / 15px` / 400. Heading tokens carry `letter-spacing: -0.5`. Body and caption tokens use `letter-spacing: 0`. Keeping the five token-set roles on their paths, leaving H4 / Body / Caption without an invented tracking, keeping the §3 px spellings beside the YAML sizes, and keeping the §3-only sizes off the token-set keys, is a derived editorial implementation inference from the verified surfaces; it is not JobKorea-authored or a separately published UI specification.

### Assets

- Logo treatment the source frontmatter records: `logo.type: favicon` and `logo.slug` `https://www.jobkorea.co.kr/display/images/favicon.png`.
- Brand mascot the source names: Jobko, used on the empty-results illustration.

Reading the favicon URL as an identity pointer rather than a separately published brand-asset kit, and reading Jobko as the source-named mascot rather than an invented illustration system, is a derived editorial implementation inference from the verified surfaces; it is not JobKorea-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How applicability is decided here

The source declares each token-set component with a primitive type (`button`, `badge`, `input`, `card`) and a value set; those types are preserved per component. Applicability below is judged by each control's role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a destination or ghost action that commits no operation in place, or a display element with no action at all — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided. A `Primitive type` line is attached only when the source YAML records that type on that component. A §4-only component that is not in the token set is labeled `not in the token set`.

The source records a primary hover (`#012ca2`), an input focused border (`#1a1a1e`), an input error border (`#f11e1e`), and disabled treatments on the filled button and the field. Generic focus is not invented as `focus-visible` treatment. `focus-visible` stays applicable on interactive controls; the visual treatment is omitted. The recorded input Focused row stays an observed focus treatment, not a `focus-visible` token (B1).

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not JobKorea-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary CTA Button

- Role: committing primary CTA (apply / forward-direction action) on the inspected homepage token system
- Primitive type: `button` · Kind: interactive
- Domain: homepage on `https://www.jobkorea.co.kr`
- Background: `#083ccc`
- Text: `#ffffff`
- Height: 48px
- Radius: 10px
- Padding: `0 16px`
- Font: 16px / 700
- Hover Background: `#012ca2`
- Token-set font record: `16px weight 700`
- Token-set use: `Primary CTA, 48px tall, hover #012ca2`
- Token-set shape: `tokens.rounded.md: 10`
- Token-set spacing: `tokens.spacing.base: 16` as the YAML padding `0 16px`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; treatment `#012ca2` |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Declared Disabled Filled treatment: background `#d5d8dc`, text `#949ba8`, height 48px, radius 10px, font 16px / 400; `cursor: not-allowed` |
| loading | applicable | This control commits an application; in-progress treatment omitted |
| error | applicable | An application can fail; visual treatment omitted on this button (form and network errors sit on the field and the banner) |
| success | applicable | Source success: the apply button becomes disabled after `지원 완료!` |

### Secondary Outlined Button

- Role: destination / secondary outlined action
- Primitive type: not in the token set · Kind: interactive
- Domain: homepage on `https://www.jobkorea.co.kr`
- Background: `#ffffff`
- Text: `#1a1a1e`
- Border: 1px solid `#d5d8dc`
- Height: 48px
- Radius: 10px
- Font: 16px / 400

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is an outlined destination action; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching a destination is not an operation with a success result on this button |

### Small Button

- Role: size-40 fill CTA
- Primitive type: not in the token set · Kind: interactive
- Domain: homepage on `https://www.jobkorea.co.kr`
- Background: `#083ccc`
- Text: `#ffffff`
- Height: 40px
- Radius: 10px
- Font: 14px / 700

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A fill CTA whose availability can lapse; visual treatment omitted |
| loading | applicable | A fill CTA can commit the same forward-direction action as the size-48 primary; in-progress treatment omitted |
| error | applicable | Same committing role; visual treatment omitted |
| success | applicable | Same committing role; visual treatment omitted |

### Ghost Text Button

- Role: ghost text action (source empty-state reset is a ghost CTA)
- Primitive type: not in the token set · Kind: interactive
- Domain: homepage on `https://www.jobkorea.co.kr`
- Background: `#f6f7f8`
- Text: `#083ccc`
- Height: 40px
- Radius: 10px
- Font: 14px / 500

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A ghost action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a ghost text action; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Ghost action; the destination or reset result, not this button, reports failure |
| success | not-applicable | Same role reason: a ghost reset or destination is not an operation with a success result on this button |

### Default Input

- Role: default input, gray border
- Primitive type: `input` · Kind: interactive
- Domain: homepage on `https://www.jobkorea.co.kr`
- Background: `#ffffff`
- Text: `#1a1a1e`
- Border: 1px solid `#e6e8ea`
- Radius: 10px
- Padding: `0 16px`
- Height: 52px
- Font: 15px / 400
- Placeholder: `#949ba8`
- Token-set use: `Default input, gray border`
- Observed focused: background `#ffffff`, border 1px solid `#1a1a1e`, radius 10px, height 52px, font 15px / 400
- Observed error: background `#ffffff`, border 1px solid `#f11e1e`, radius 10px, height 52px, font 15px / 400
- Observed disabled: background `#f6f7f8`, border 1px solid `#e6e8ea`, radius 10px, height 52px, font 15px / 400

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted. The Focused row above is an observed focus treatment, not a `focus-visible` token |
| disabled | applicable | Declared Disabled treatment |
| loading | not-applicable | The field accepts a value; page skeletons report in-progress content, and the input stays a fill |
| error | applicable | Declared Error treatment: border `#f11e1e`; §14 adds Red 500 `#fc3b3b` at 13px below the field and moves focus to the first error field |
| success | applicable | A form field can report a valid value; visual treatment omitted |

### AI Search (pill)

- Role: AI-powered search pill
- Primitive type: not in the token set · Kind: interactive
- Domain: homepage on `https://www.jobkorea.co.kr`
- Background: `#f6f7f8`
- Border: 1px solid gradient (animated pink → amber → blue)
- Radius: 999px
- Height: 48px
- Padding: `0 16px`
- Font: 15px / 400
- Animation the source names: `animation: gradient-flow-dynamic 6s ease-in-out infinite`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A search field whose availability can lapse; visual treatment omitted |
| loading | applicable | A search can be in progress; visual treatment omitted |
| error | applicable | A search can fail; visual treatment omitted |
| success | not-applicable | Results appear on the listing, not as a success treatment on this pill |

### Standard Search

- Role: standard search pill
- Primitive type: not in the token set · Kind: interactive
- Domain: homepage on `https://www.jobkorea.co.kr`
- Background: `#f6f7f8`
- Radius: 999px
- Height: 48px
- Padding: `0 16px`
- Font: 15px / 400

The source reserves the gradient border animation for the AI Search pill. This standard pill does not receive that animation. Reading that reservation as the source's own Don't rule rather than as a new surface, is a derived editorial implementation inference from the verified surfaces; it is not JobKorea-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A search field whose availability can lapse; visual treatment omitted |
| loading | applicable | A search can be in progress; visual treatment omitted |
| error | applicable | A search can fail; visual treatment omitted |
| success | not-applicable | Results appear on the listing, not as a success treatment on this pill |

### Default Job Card

- Role: job-listing card surface
- Primitive type: `card` · Kind: interactive
- Domain: homepage on `https://www.jobkorea.co.kr`
- Background: `#ffffff`
- Border: 1px solid `#e6e8ea`
- Radius: 10px
- Padding: 16px
- Token-set use: `Job-listing card surface, subtle elevation`
- Observed hover: elevates from flat border to `0 4px 16px rgba(0,0,0,0.12)`; transition 200ms

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web listing card; treatment `0 4px 16px rgba(0,0,0,0.12)` at 200ms |
| focus-visible | applicable | Keyboard-reachable listing card; visual treatment omitted |
| disabled | applicable | A listing card whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This card displays a listing; skeletons report in-progress content, and the card does not commit an operation |
| error | not-applicable | Listing failure is reported on the page banner, not on this card |
| success | not-applicable | Application success is reported on the toast and the `지원완료` badge, not as a success treatment on the card surface itself |

### Elevated Card

- Role: elevated card rest variant
- Primitive type: not in the token set
- Domain: homepage on `https://www.jobkorea.co.kr`
- Background: `#ffffff`
- Radius: 12px
- Padding: 16px

The source supplies this card as a §4 body record only. It has no YAML `type` key, so no `Primitive type` line is attached. The source supplies no interaction evidence for this variant, so kind and a state-applicability map are both withheld. The `12px` radius stays on this record. It is not `tokens.rounded.md: 10` and it is not `tokens.spacing.md: 12`. Keeping that 12px on this record, and withholding kind and a map because the source supplies no interaction evidence, is a derived editorial implementation inference from the verified surfaces; it is not JobKorea-authored or a separately published UI specification.

### Selected Chip

- Role: selected chip / brand-tinted pill tag fill
- Primitive type: `badge`
- Kind: non-interactive — a selected fill, not a commit control
- Background: `#f0f2fa`
- Text: `#083ccc`
- Token-set use: `Selected chip / brand-tinted pill tag fill`

### Urgency Badge

- Role: urgency badge, deadline label
- Primitive type: `badge`
- Kind: non-interactive — a label, not a commit control
- Text: `#ff6d12`
- Token-set use: `Urgency badge, deadline label`

### Error Badge

- Role: form error / destructive indicator
- Primitive type: `badge`
- Kind: non-interactive — a label, not a commit control
- Text: `#fc3b3b`
- Token-set use: `Form error / destructive indicator`

### Success Badge

- Role: application success / offer received
- Primitive type: `badge`
- Kind: non-interactive — a label, not a commit control
- Text: `#0dbc7c`
- Token-set use: `Application success / offer received`

### Surface state contract

The source records these system-level states. They are preserved here as written (A2). Treating the rows as a surface contract rather than attaching every row as a visual treatment on every control, and omitting the hover-row cubic-bezier as a template / Material-standard re-injection rather than a promoted token, is a derived editorial implementation inference from the verified surfaces; it is not JobKorea-authored or a separately published UI specification.

- **Empty (no results):** Illustrated character (Jobko mascot) with headline "맞는 공고가 없어요" + sub-copy suggesting filter adjustment and a ghost CTA to reset filters; never a blank white box
- **Loading skeleton:** Cards render as gray shimmer blocks matching the exact height and border-radius of the real card (radius 10px, height ~120px); page background remains `#f6f7f8`
- **Error — network:** Inline banner alert with Red 50 (`#fbf5f5`) background, red border, and retry button; page content beneath is not unmounted
- **Error — form validation:** Input border shifts to `#f11e1e`, an error message in Red 500 (`#fc3b3b`) at 13px appears below the field; focus moves to the first error field
- **Success — application submitted:** Full-bleed success toast (Green 500 `#0dbc7c` left-border snackbar) with "지원 완료!" message; job card gains a "지원완료" gray badge and the apply button becomes disabled
- **Skeleton (list):** Job listing rows show as stacked shimmer bars (title 16px height, company 12px height) with 8px gap; no spinner overlay
- **Disabled:** Buttons use Gray 200 background (`#d5d8dc`) with Gray 500 text (`#949ba8`); inputs use Gray 50 background (`#f6f7f8`) with normal border; cursor: not-allowed
- **Hover (card):** Card elevates from flat border to `0 4px 16px rgba(0,0,0,0.12)` shadow; transition 200ms. The source also writes a cubic-bezier on this row; that curve matches the documented template / Material-standard re-injection path and is omitted here as a promoted token.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

JobKorea uses a single max-width content container of **1024px** on desktop, centering all content with full-bleed section backgrounds. The page has two primary breakpoints: mobile-first (≤600px) and desktop (≥1024px), with no intermediate tablet breakpoint declared. Job listing grids use CSS grid or flex with 8px base spacing unit (multiples: 4, 8, 12, 16, 20, 24, 32, 40, 48px). Navigation is sticky with a white background and bottom divider. The GNB maintains a fixed height and collapses into a hamburger on mobile. Spacing restated from `tokens.spacing`: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64. Shape restated from `tokens.rounded`: `sm 4` · `md 10` · `lg 16` · `full: 9999`. The 20 / 40 multiples stay on this layout record. They are not `tokens.spacing` keys.

Reading the two declared breakpoints and the "no intermediate tablet breakpoint declared" line as the source's own breakpoint pair, rather than as a new coverage claim about an unnamed surface, and keeping the 20 / 40 multiples on this layout record and off `tokens.spacing` keys, is a derived editorial implementation inference from the verified surfaces; it is not JobKorea-authored or a separately published UI specification.

Responsive behavior, as the source states it. JobKorea is a mobile-first Next.js application (React server components). Below 600px the layout shifts to single-column with full-width cards; the search bar transitions from 600px fixed-width to fluid 100%. Navigation collapses from a full horizontal GNB to a bottom tab bar on mobile. The 1024px container clamps on desktop. Font sizes scale down one step at mobile: Display tokens are avoided; H3 (24px) is the largest practical heading. Button heights prefer the 48px variant on desktop, 40px on mobile for comfortable touch targets. Treating those collapsing rules as the source's recorded responsive behavior rather than as a cross-product specification is a derived editorial implementation inference from the verified surfaces; it is not JobKorea-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes JobKorea's voice as **direct, encouraging, and data-grounded** — it speaks like a well-informed career advisor who respects the user's time. That characterization, that advisor reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not JobKorea-authored or a separately published UI specification. The published lines themselves are source-recorded copy.

| Do | Don't |
|---|---|
| Lead with concrete benefit ("AI가 맞춤 공고 5개를 찾았어요") | Vague aspiration without specificity ("당신의 꿈을 펼치세요") |
| Use short, active sentences in informal Korean (-해요 register) | Jargon-heavy HR speak ("핵심 역량 기반 매칭 알고리즘") |
| Acknowledge the user's current situation before offering next step | Jump straight to a CTA without context |
| State numbers — application rates, salary percentiles, recruiter views | Use superlatives without proof ("최고의", "가장 좋은") |

**Voice samples (illustrative)** — the source marks these illustrative; they are not promoted as a complete product-microcopy guide. That "illustrative, not a complete product-microcopy guide" reading is a derived editorial implementation inference from the verified surfaces; it is not JobKorea-authored or a separately published UI specification.

- *"지난주보다 지원자가 30% 늘었어요. 지금 지원하면 더 눈에 띌 수 있어요."*
- *"딱 맞는 공고 3개가 생겼어요. 한번 확인해볼까요?"*
- *"이력서를 업데이트하면 채용담당자에게 더 잘 보여요. 5분이면 충분해요."*

Further published strings the source records, kept byte-exact:

- JobKorea
- Dreammark
- JOBKOREA Black
- Jobko
- people's dreams become jobs, and companies' jobs become dreams
- LOOP AI
- Worxphere
- AlbaMon
- GameJob
- NineHire
- JobPlanet
- Sodiumpartners
- K-BPI
- N명 지원
- 맞는 공고가 없어요
- 지원 완료!
- 지원완료
- AI가 맞춤 공고 5개를 찾았어요
- 당신의 꿈을 펼치세요
- 핵심 역량 기반 매칭 알고리즘
- 최고의
- 가장 좋은
- Pretendard
- JK Blue 600
- AM Orange 500

Reproduce those strings byte-exact rather than translating or re-casing them. An English gloss may sit beside a non-English line; it never replaces the line. That byte-exact / gloss-beside rule, reading “direct, encouraging, and data-grounded” as a voice observation rather than a complete product-microcopy guide, and reading the Do / Don’t table as the source’s own voice contract rather than invented authenticated-product microcopy, are derived editorial implementation inferences from the verified surfaces; they are not JobKorea-authored or a separately published UI specification.

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

### Recorded unresolved decisions

These are named values, not permissions to invent. Treating the list as named values rather than permissions to invent, naming the list from the source's own unresolved fields rather than adding surfaces the source did not name, and classing the getdesign.md / refero misses as ledger facts rather than token sources, are derived editorial implementation inferences from the verified surfaces; they are not JobKorea-authored or a separately published UI specification.

- **JOBKOREA Black versus JK Blue 600.** The 2023 Sodiumpartners rebrand narrative describes "JOBKOREA Black" as the primary brand color; the live CSS token system (`data-brand-theme=jk`) maps `--themecolor-brand-primary` to `--color-jkblue-600` (`#083ccc`). The deep blue is used for all primary buttons and interactive states in the current production build; the near-black (`#1a1a1e`) functions as the primary text color, not the brand color. The pair stays unresolved.
- **Intermediate tablet breakpoint.** The source declares two primary breakpoints (≤600px and ≥1024px) and states that no intermediate tablet breakpoint is declared. That is the source's own breakpoint pair.
- **Hover, focus-visible, loading, and other unobserved visual treatments** on controls that do not record a treatment. They are not `not-applicable`; applicability follows control meaning.
- **Motion curve values** `cubic-bezier(0.4, 0, 0.2, 1)` and `cubic-bezier(0, 0, 0.2, 1)`. Durations, animation names, and the reduced-motion rule stay. Promote a curve only after a component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **getdesign.md / refero.** The source footer records getdesign.md/jobkorea as NOT LISTED (no data) and refero as no results for JobKorea. Those misses are ledger facts, not token sources.

# Karrot Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Karrot (당근, *daangn*) is a hyperlocal neighborhood marketplace. Technology should make neighborhood relationships feel more human, not more anonymous. Design keeps community content dominant through warm orange accents, calm neutrals, direct language, and light interface chrome.

This contract covers two related but non-identical public surfaces. SEED v2 is the canonical source for product-system colors, type roles, and component behavior. The public Karrot marketing site is evidence for the web font stack and marketing CTA geometry only. Marketing pages are not a substitute for marketplace UI. SEED tokens are not a substitute for the marketing CTA.

SEED semantic Primary is carrot-500 (`#ff6f0f`). The public marketing CTA orange is `#ff6600`. Keeping those values separate preserves both product-system truth and the recognizable warmth of the brand. Both surfaces use warm neutrals, direct hierarchy, and restrained ornament so neighborhood content remains dominant.

The product is built around proximity. Every listing surfaces the neighborhood name. Every match is geo-scoped. Every CTA assumes the buyer and seller will eventually stand in the same parking lot. The brand refuses the anonymity of nationwide marketplaces, the impersonal aesthetics of enterprise commerce, and the gamified engagement loops of consumer social. The first-party mission is to connect everything local and awaken hidden neighborhood value through technology.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=1 lang=en -->
### Primary tasks

- Buy or sell nearby with locals.
<!-- design-md:claim-end -->

### Audience

No independently verified persona set is promoted. The source both calls four stakeholder contexts official product contexts and labels that same account as fictional archetypes. The conflict is unresolved, so those items are not Experience claims. Observable actors follow the verified task: people buying and selling nearby with locals. Do not treat fictional demographic profiles as brand facts.

### Distinctive traits

- SEED semantic Primary: `#ff6f0f`; current marketing CTA: `#ff6600`
- System-first web typography; `Pretendard Variable` is declared as a fallback but was not the computed first family in the inspected pages
- Official SEED semantic roles backed by the open-source `global.css`
- Components documented as behavior/state contracts, with marketing geometry kept surface-specific

### Principles

1. **Orange is scarce, on purpose.** `#ff6600` appears only on the primary CTA, active states, and a small set of brand moments. It never decorates, never fills a hero background, never tints a shadow. At most one orange element per viewport in the primary flow; if a design has two orange CTAs competing on one screen, one must demote to neutral-weak.
2. **System font, because content is the brand.** No custom typeface. Pretendard on web, Apple SD Gothic Neo / system sans on native. The community's listings *are* the product; the UI's job is to disappear behind them. Never embed a branded webfont on Karrot-styled surfaces. If a heading needs weight, use weight 700, not a display face.
3. **Proximity is surfaced, always.** Every listing, chat, and search result shows a neighborhood name. Distance is not a filter you have to remember to toggle — it's a default. Every card, row, or summary that represents user content must show the neighborhood (`동` / `neighborhood`) as visible metadata, not hidden in a detail screen.
4. **Trust comes from calm, not from badges.** No padlock icons in the main flow, no "Verified Seller" trophies, no red "FRAUD WARNING" banners on first paint. Trust is communicated through consistency, neutrality, and the user's ability to meet in person. Trust-and-safety copy lives in body-weight neutral text; reserve red and warning-iconography for actual errors, not ambient advisories.
5. **Everything on the 4px grid.** The Seed Design system snaps all measurements to multiples of 4px. Off-grid values accrete into visual noise. Any padding, gap, or component height not in `{4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64}` must be justified in a comment or corrected.
6. **One accent. One system. One rhythm.** No secondary brand hue exists. No "Karrot Blue" for utility, no "Karrot Green" for success-branded promo. Semantic colors (`fg-critical`, `fg-informative`, `fg-positive`) exist — but they are utility, not brand. If a design introduces a second brand-scale color, it has drifted off-system; reject or re-scope to semantic.
7. **Dark mode is a remap, not an inversion.** Semantic tokens point to different palette entries in dark mode; brand solid, critical, and informative are intentionally re-tuned rather than auto-computed. Never rely on `filter: invert()` or runtime HSL math. Every component reads from semantic tokens that already account for theme.
8. **Content-dense, chrome-light.** Users scan many listings in one session — a listing card is closer to an SMS than to a Pinterest tile. Target 3–4 listings visible per mobile viewport; chrome (borders, shadows, decorative space) must not push that below 3.

Principle 2’s “Pretendard on web” and the captured first family `-apple-system` are both in the source. Do not collapse them. Use the system font result unless a target product surface proves another first family.

### Avoid

- Don't relabel marketing `#ff6600` as SEED carrot-500.
- Don't treat a declared Pretendard face as proof of visible use.
- Don't reuse the retired 26px maximum; current SEED heading roles reach 48px.
- Don't invent marketplace cards, sheets, or native-app geometry from a marketing snapshot.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### SEED v2 product color

- **Primary** (`#ff6f0f`): `--seed-semantic-color-primary`, mapped to carrot-500.
- **Primary Hover / Pressed** (`#ff9e66`): current light-theme state mapping.
- **Canvas** (`#ffffff`): gray-00 and `paper-default`.
- **Background** (`#f2f3f6`): gray-100 and `paper-background`.
- **Surface** (`#f7f8fa`): gray-50 and `paper-contents`.
- **Foreground** (`#212124`): gray-900 and `ink-text`.
- **Muted** (`#868b94`): gray-600 and `ink-text-low`.
- **Hairline** (`#eaebee`): gray-200 and `divider-2`.
- **Brand Tint** (`#fff5f0`): carrot-50 and `paper-accent`.
- **Danger** (`#fa2314`): red-600.
- **Accent / Info** (`#009ceb`): blue-500.
- **Success** (`#1aa174`): green-500.
- **On-primary** (`#ffffff`)

### Marketing web exception

- **Marketing CTA** (`#ff6600`): computed background on both inspected Karrot public pages. Do not label it carrot-500 or substitute it for SEED Primary.

### Spacing

- Base unit: 4px
- Observed public-web clusters: 4px, 8px, 12px, 16px, and 64px
- Treat larger marketing gaps as surface composition, not universal product tokens
- Use the observed 4/8/12/16 rhythm locally; do not extrapolate undocumented marketplace grid rules from the marketing site

### Shape

- Small: 6px, observed on a public CTA
- Medium: 8px, observed on a public CTA
- Full: 9999px, dominant public-web button geometry
- Component-specific radii from SEED must be taken from that component's current style page, not inferred from this marketing scale

### Elevation

The inspected public controls were flat and reported `box-shadow: none`. No universal shadow tokens are published in this contract until current component-style sources are captured claim by claim.

### Motion duration

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox state changes |
| `motion-fast` | 150ms | Hover, focus, button press overlays, inline flash success |
| `motion-standard` | 250ms | The default — card taps, tab switches, bottom-sheet reveals |
| `motion-slow` | 350ms | Emphasized transitions — full-sheet presentations, success screens |
| `motion-page` | 300ms | Native-style push/pop between routes |

### Motion roles

Named easing roles exist for enter, exit, and two-way transitions.

- `ease-enter` — sheets, toasts, screen pushes appearing
- `ease-exit` — dismissals, pops, toast auto-close
- `ease-standard` — two-way transitions — expandable cards, tab content

Spring and overshoot easings are forbidden across Karrot surfaces. The brand is a neighborhood marketplace between strangers; playful bounce undermines the calm trust the rest of the system works to establish. Money and goods change hands on this app — a button that wobbles on press reads as toy-like, and a success card that springs in reads as celebratory in a way Karrot deliberately isn't. This stance is a derived editorial interpretation from brand posture (trust between strangers, calm neutrality). It is outside the published SEED motion contract. The one licensed exception is the native-platform pull-to-refresh indicator, which inherits the OS's default spring because overriding it would feel *more* jarring than accepting it. Every other motion uses `ease-enter`, `ease-exit`, or `ease-standard`.

### Signature motions

1. **Listing-card tap.** Card compresses to 98% scale on press (`motion-fast / ease-standard`), releases on tap-up before navigation begins. Feedback is immediate; the route transition follows on `motion-page / ease-enter`.
2. **Bottom-sheet presentation.** Sheets rise from `y+40px` with `motion-standard / ease-enter` and a synchronized backdrop fade from `rgba(0,0,0,0)` to `rgba(0,0,0,0.5)` (`bg-overlay-muted`). Dismissal uses `motion-fast / ease-exit` — leaving is lighter than entering.
3. **Neighborhood switch.** When the user changes their 동 (neighborhood), the listings feed cross-fades over `motion-slow` rather than sliding — sliding would imply geographic direction, which is misleading (Korean neighborhoods aren't ordered on an axis).

### Reduced motion

Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. No exceptions. Cross-fades replace slides. Pull-to-refresh indicator simplifies to a static spinner. The app stays fully usable; just less kinetic.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Family

- **Observed web UI**: `System`. The computed first family was `-apple-system` across 420 visible elements.
- **Declared fallback**: `Pretendard Variable` appeared in the stack and FontFace declarations but had no visible first-family usage in this capture.
- **Monospace**: no canonical UI monospace claim; do not invent one.

### Type roles

| Role | Font | Size | Weight | Line height | Letter spacing | Notes |
|---|---|---|---|---|---|---|
| H1 | System | 48px | 700 | 135% | 0 | SEED semantic h1 |
| H2 | System | 42px | 700 | 135% | 0 | SEED semantic h2 |
| H3 | System | 34px | 700 | 135% | 0 | SEED semantic h3 |
| Title 1 Bold | System | 24px | 700 | 135% | 0 | Section or chapter title |
| Body L1 | System | 16px | 400 | 150% | -0.02em on web | Long-form body |
| Body L2 | System | 14px | 400 | 150% | -0.02em on web | Compact body |

Official SEED exposes regular and bold semantic weights; do not infer a broad custom weight scale. Web tracking differs by role: headings remain neutral while body roles use narrow tracking. The previous 26px maximum was an old snapshot and is no longer canonical.

### Font evidence

| Evidence class | Karrot status |
|---|---|
| Official product-use | SEED v2 defines product typography roles around platform/system families rather than a branded display face |
| Live surface-use | `-apple-system` was the visible first family across the inspected Karrot marketing surfaces |
| Official distributed asset | SEED design tokens and components are published openly; no separate public Karrot typeface asset is asserted |
| Declared-only | Pretendard Variable appeared in public stacks and FontFace declarations without visible first-family use in this capture |
| Outside this capture | Exact native-app runtime family resolution outside the published SEED semantic roles |

### Assets

SEED Design is Karrot (Daangn)’s open-source design system for marketplace apps (`https://v2.seed-design.io`). Use each component’s current SEED page for geometry that this contract does not record. GitHub organization slug: `daangn`.

<!-- design-md:section components-states -->
## 4. Components & States

### Marketing Primary CTA

- Role: header-level marketing action on two public Karrot pages
- Kind: interactive
- Background: `#ff6600`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 4px 12px
- Height: 36px
- Font: 14px / 500 / System
- Observed: default on two public surfaces; hover not captured
- Applicability follows control meaning. Uncaptured visual treatments are omitted. This is not a complete state-coverage claim.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Observed on two public surfaces |
| hover | applicable | Pointer-web CTA; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | Button control; visual treatment omitted |
| error | applicable | Button control; visual treatment omitted |
| success | applicable | Button control; visual treatment omitted |

### SEED Box Button

- Role: action component with xsmall through xlarge sizes; medium is the documented default
- Kind: interactive
- Variants: primary, primary-low, secondary, danger
- Documented interaction: disabled, hover, keyboard
- Keep a 16px mobile edge inset

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Documented default |
| hover | applicable | Documented |
| focus-visible | applicable | Keyboard/focus contract |
| disabled | applicable | Documented |
| loading | not-applicable | Not in the documented Box Button contract in this reference |
| error | not-applicable | Danger is a variant, not an error state in this reference |
| success | not-applicable | Not in the documented Box Button contract in this reference |

### SEED Text Field

- Role: single-line form input with label, description, error message, and optional prefix/suffix
- Kind: interactive
- Variants: outlined, underlined
- Documented: focused, disabled, readonly, required, invalid
- Labels and descriptions may wrap; the input value itself remains one line and clips horizontally

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Documented field |
| hover | not-applicable | Not in the documented Text Field contract in this reference |
| focus-visible | applicable | Documented focused |
| disabled | applicable | Documented |
| loading | not-applicable | Not in the documented Text Field contract in this reference |
| error | applicable | Documented invalid plus error message |
| success | not-applicable | Not in the documented Text Field contract in this reference |

### SEED Tabs

- Role: hug or fill category navigation with a current-selection indicator
- Kind: interactive
- Fill is limited to five stable top-level items; hug is recommended for six or more or variable categories
- Documented: selected, disabled, focus

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Unselected tab |
| hover | not-applicable | Not in the documented Tabs contract in this reference |
| focus-visible | applicable | Documented focus |
| disabled | applicable | Documented |
| loading | not-applicable | Not in the documented Tabs contract in this reference |
| error | not-applicable | Not in the documented Tabs contract in this reference |
| success | not-applicable | Not in the documented Tabs contract in this reference |

### SEED Snackbar

- Role: brief action feedback with at most one related action
- Kind: interactive
- Documented: default, success, warning, action focus

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Documented |
| hover | not-applicable | Not in the documented Snackbar contract in this reference |
| focus-visible | applicable | Documented action focus |
| disabled | not-applicable | Not in the documented Snackbar contract in this reference |
| loading | not-applicable | Not in the documented Snackbar contract in this reference |
| error | not-applicable | Warning is a documented variant, not an error state in this reference |
| success | applicable | Documented success |

### Product surface states

| State | Treatment |
|---|---|
| Empty (no listings nearby) | Warm one-line explanation (`아직 우리 동네에 올라온 물건이 없어요`) + one secondary CTA in neutral-weak (`내 동네 바꾸기` / change neighborhood). Never an illustration. Never `데이터가 없습니다`. |
| Empty (filter cleared) | Single line of `gray-700` caption (`조건에 맞는 물건이 없어요`). No button — user resets the filter themselves. |
| Empty (new user, first paint) | Single welcome sentence naming the user's detected neighborhood, plus a primary CTA `둘러보기` (browse) in Karrot Orange. No onboarding carousel. |
| Loading (first paint) | Skeleton blocks at `gray-200` matching the final listing-card layout — 1:1 thumbnail box, two text lines, one metadata line. Shimmer at 1.2s with 8% white highlight. |
| Loading (infinite scroll) | Bottom-of-list spinner in Karrot Orange, 24px diameter. No overlay. Existing cards stay visible. |
| Loading (refresh / pull-to-refresh) | Pull-down reveals a carrot-glyph progress indicator in Karrot Orange; never a generic iOS spinner on branded surfaces. |
| Error (inline field) | Input border becomes `#fa342c` (red-700) 2px, helper text below in red-700 13px. One actionable sentence (`동네를 다시 선택해 주세요`). |
| Error (toast) | `#1a1c20` (gray-1000) background, white 14px weight 400 text, 3s auto-dismiss. Bottom of screen with 16px inset above the tab bar. One sentence. No icon. |
| Error (network / server-blocking) | Full-screen centered message in `gray-1000` 16px weight 600, `gray-800` 14px weight 400 subline, retry button in Karrot Orange. No illustration. |
| Success (inline flash) | Brief 300ms flash of `#fff2ec` (carrot-100) behind the updated element, fading back to default. For routine confirmations (favorited, saved search). |
| Success (transaction complete) | Dedicated confirmation screen — not a toast. `#079171` (positive green) check icon top-center, one-line past-tense sentence (`거래가 완료되었어요`), and a single primary button `매너 평가 남기기` (leave manner rating). |
| Skeleton | `gray-200` blocks at exact final dimensions matching the listing-card layout (1:1 thumbnail, two text lines, one metadata line). Shimmer 1.2s with 8% white highlight. Never over the neighborhood-name metadata — that slot stays blank until resolved, so the UI never implies a location that hasn't been confirmed. |
| Disabled | Button background drops to `gray-200`, text to `gray-500`. No color inversion. Geometry stays identical so re-enable is frame-stable. |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Keep content dominant and chrome quiet.

### Grid and container

- Marketing pages use responsive full-width sections and a centered content column.
- SEED components define their own layout constraints; for example, Box Button keeps a 16px mobile edge inset.

### Observed and documented behavior

- Public marketing controls render as compact 36px pills in the header and larger 40–48px CTAs deeper in the page.
- SEED Box Button documents five sizes and requires a 16px mobile edge inset.
- SEED Tabs supports `hug` and `fill`; fill is limited to five stable top-level items, while hug is recommended for six or more or variable categories.
- Text Field labels and descriptions may wrap; the input value itself remains one line and clips horizontally.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Karrot speaks like a trustworthy neighbor who just moved in next door: warm, plain-spoken, low-friction, and allergic to anything that sounds like corporate marketing. The voice assumes two strangers are about to hand each other a used crib across a parking lot — it protects that trust with earnestness, removes barriers with `부담 없이` (without burden) framing, and stays in everyday Korean sentence endings (`-어요`, `-예요`) rather than the formal `-ㅂ니다`. English surfaces (Karrot in US/Canada/UK/JP) mirror this in plain, contraction-friendly English — *"Buy and sell for free with locals"*, not *"Discover premium local marketplace experiences"*.

| Context | Tone |
|---|---|
| CTAs | Short verb-first Korean (`판매하기`, `채팅하기`, `거래 완료`) / plain imperative English (`Sell`, `Chat`, `Apply`) |
| Empty states | One warm line explaining *why it's empty* + one low-pressure suggestion. Never `데이터가 없습니다`. |
| Error messages | Specific, blameless, actionable. Prefer `다시 시도해 주세요` over `오류가 발생했습니다`. |
| Success toasts | Past-tense single sentence (`거래가 완료되었어요`). Quiet, not celebratory. |
| Community guidelines | Second-person, direct, grounded in neighborhood norms. Reads like a house rule, not a ToS. |
| Trust & safety | Calm, factual, never fearmongering. The goal is to keep people transacting, not to scare them off. |
| Local / hyperlocal copy | Always name the neighborhood (`강남구 역삼동`, `Manhattan`). Proximity is the brand — surface it. |
| Onboarding | One screen, one idea, one action. No bullet lists. No feature tours. |

### Forbidden phrases

`불편을 드려 죄송합니다`, `죄송하지만`, `데이터가 없습니다`, `오류가 발생했습니다`, `혁신적인`, English boilerplate like `Oops, something went wrong` or `We apologize for the inconvenience`. Marketing-speak bans: `amazing deals`, `best-in-class`, `revolutionary`, `world-class`. Emoji are permitted sparingly in community chat and stickers, but never in error messages, never in trust/safety copy, and never in financial/payment confirmations.

### Verified samples

- `Buy and sell for free with locals` — homepage hero, English
- `Welcome to your new neighborhood buy & sell` — homepage sub-hero
- `It's easier in the apps` / `Download the Karrot app` — app-install nudge
- `동네를 여는 문, 당근` — brand narrative tagline (corporate site)
- `로컬의 모든 것을 연결해, 동네의 숨은 가치를 깨워요` — mission statement

### Locale: ko (supported)

Everyday endings (`-어요`, `-예요`). Neighborhood names as visible metadata.

### Locale: en (supported on US/Canada/UK/JP surfaces)

Plain, contraction-friendly English. Verb-first imperatives.

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

- Exact cubic-bezier values for `ease-enter`, `ease-exit`, and `ease-standard`
- Exact native-app runtime family outside published SEED semantic roles
- Universal shadow tokens
- Marketplace listing-card geometry from the marketing snapshot
- Dark-mode palette entries (remap rule only; values not in this contract)

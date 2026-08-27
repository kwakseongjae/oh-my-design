# Dcard Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

The surface-scope, source-role, narrative-versus-token, and historical-causality judgments in this Scope are derived editorial implementation inferences from the verified records; they are not Dcard-authored or a separately published UI specification.

Dcard is a Taiwan-based anonymous social and forum platform. This reconstruction covers the public forum index, the separate corporate About surface, and the earlier `:root` CSS-variable reconstruction referenced by the source. The forum surface supplies reading chrome and components; the About surface supplies a second use of Dcard Blue. The blocked service/About route, native apps, authenticated flows, and every forum-specific route are not independently captured here.

The source records a 2011-12-16 founding at National Taiwan University, founder Kytu Lin (林裕欽), the “D = Destiny” name origin, the original midnight card-match ritual, the 2012 expansion into topic forums (`女孩`, `男生`, `感情`, `心情`, `時事`, and dozens more), the formal establishment of the company Dcard Taiwan Ltd. in Taipei in October 2015, and November 2022 scale figures of 6M+ members and 18M monthly unique visitors. These are secondary-source narrative facts with an explicit NTU/NCCU research gap, not live interface-token proof. The Dcard Tech Blog tagline “Binding Generations. Breaking Limitations. Building with Passion.” is first-person engineering-publication context.

The following visual characterization is a derived editorial implementation inference from the observed surfaces and token layer; it is not Dcard-authored or a separately published UI specification. Deep teal-navy chrome `#00324e` frames a light-gray `#f2f2f2` content field and white post cards. Roboto-led, Traditional-Chinese-aware typography, semantic blue/status/identity tokens, compact controls, and Material-style elevation/motion support dense reading without turning the interface into decorative brand content.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

These task formulations are derived editorial implementation inferences from the forum roles and captured controls; they are not Dcard-authored or a separately published UI specification.

- Browse, search, and read anonymous posts across topic forums.
- Switch feed/forum views and react through like, comment, save, share, or counter controls.
- Compose a post, sign in or sign up, and download the app when an authenticated or native flow is needed.
<!-- design-md:claim-end -->

### Audience

This audience grouping, the English glossing of the forum names, and the biography-retention decision below are derived editorial implementation inferences from the source-backed platform segments and fictional-archetype disclosure; they are not Dcard-authored or a separately published UI specification.

Use group-level scope only: Taiwanese college students, recent graduates, and readers of the `工作` (work), `科技業` (technology), `感情` (relationships), `美妝` (beauty), `購物` (shopping), `女孩`, and other Dcard forums. The forum name is the Traditional Chinese noun; the English beside it is a reading gloss for this document, not a Dcard label — the source rule is that forum names are never bilingual. The named biographies in the legacy persona section are fictional and are not retained.

### Distinctive traits

Selecting and naming the following traits as distinctive is a derived editorial implementation inference from the token layer and verified surfaces; it is not Dcard-authored or a separately published UI specification.

- Dcard Blue `#3397cf` as the verified CTA and cross-domain accent, distinct from secondary `#006aa6` and tertiary chrome `#00324e`.
- Roboto-led typography with Traditional Chinese fallbacks and 500-weight headlines.
- Light-gray frame `#f2f2f2`, white cards `#ffffff`, and opacity-based black text roles.
- Semantic status, premium, topic, gender, overlay, and surface namespaces rather than ad-hoc accents.
- Flat feed cards plus a five-level shadow system reserved for genuinely floating elements.
- Runtime Material easing `cubic-bezier(0.4, 0, 0.2, 1)` with `.15s` short and `.3s` medium duration tokens.

### Derived implementation principles

These eight items are derived editorial implementation inferences from the observable interface patterns; they are not Dcard-authored or a separately published UI specification.

- Keep product chrome subdued so posts remain the main picture.
- Use 500 for headlines and 600 only for the Title tier; do not promote product headings to 700.
- Keep gender colors attached to author/forum identity, never status or decoration.
- Reserve premium gold `#ffc51b` for paid or subscription meaning; use warning orange and topic lavender for their own roles.
- Treat 8px as the soft-control default where the source component uses it, while preserving verified 4px utility/card exceptions.
- Use shadows for dropdowns, modals, toasts, and other floating layers, not for routine feed separation.
- Put Traditional Chinese first on Taiwan surfaces and retain the full TC fallback stack.
- Preserve school, forum, timestamp, and applicable gender context around anonymous posts.

### Avoid

The following avoidances are derived editorial implementation inferences from the source rules; they are not Dcard-authored or a separately published UI specification.

- Do not introduce ad-hoc brand/status colors or reuse gender/premium roles as general accents.
- Do not use weight 700 except a separately evidenced legacy or display exception.
- Do not remove the `#f2f2f2` frame and create white-on-white feed nesting.
- Do not add heavy shadows to feed posts or bouncy/elastic motion to general product surfaces.
- Do not use Simplified Chinese forms on TW surfaces or omit Traditional Chinese fallbacks.
- Do not present illustrative legacy copy or secondary-source narrative as live-verified Dcard wording.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->

Observed token layer: the site exposes 200+ CSS custom properties on `:root`, organized into the namespaces `--color-dcard-*` (brand), `--color-state-*` (status), `--color-text-*` (foreground), `--color-bg-*` (surfaces), `--color-gender-*` (forum-specific identity), `--shadow-level-1` through `--shadow-level-5` (elevation), `--vars-*` (layout sizing), and `--animations-*` (motion). The roles resolved to exact values below are the subset this reconstruction carries; treating that subset as the resolved part of a wider observed layer is a derived editorial implementation inference, not Dcard-authored or a separately published UI specification.

### Brand and status color

| Role | Value | Boundary |
|---|---|---|
| Catalog primary-color record | `#0086ff` | Unreconciled identity metadata; not promoted over live Dcard Blue |
| Dcard primary | `#3397cf` | Verified primary CTA and About-domain accent |
| Primary hover | `#5ab0db` | Source token hover role |
| Secondary | `#006aa6` | Search submit / supporting blue, not the verified Download App fill |
| Tertiary chrome | `#00324e` | Header and page-wrap chrome |
| Hint | `#e7f3f9` | Light blue highlight |
| Premium / hover | `#ffc51b` / `#ffd558` | Subscription and premium only |
| Success / hover / active | `#49bd69` / `#6fc985` / `#339653` | Positive status family |
| Danger / hover / active | `#ea5c5c` / `#f78c88` / `#c44347` | Destructive/error family |
| Reminder / hover / active | `#f0a955` / `#f0b941` / `#da9246` | Warning/reminder family |

Keeping the catalog `#0086ff` identity record separate and not promoting it over verified Dcard Blue is a derived editorial implementation inference from the conflicting records; it is not Dcard-authored or a separately published UI specification.

### Surface, text, identity, and separator color

| Role | Value |
|---|---|
| Canvas / base 1 / shimmer background | `#f2f2f2` |
| Surface / base 2 / base 3 / light / on-primary | `#ffffff` |
| Solid grounded foreground / dark background | `#000000` |
| Container | `#0000000d` (black 5%) |
| Topic | `#bf8ff0` |
| Snackbar / gender other | `#2c2c2c` |
| Sidebar hover | `#032133` |
| Chip on dark | `#ffffff14` (white 8%) |
| Spotlight / text hint / default-hovered | `#00000059` (black 35%) |
| Sign-up overlay / icon button / crop mask | `#000000b3` |
| Disabled background/border / gender-other light | `#e0e0e0` |
| Shimmer foreground | `#fafafa` |
| Text primary | `#000000d9` (black 85%) |
| Text secondary | `#00000080` (black 50%) |
| Text disabled | `#0003` (black 20%) |
| Light primary | `#ffffff` |
| Light secondary | `#ffffff8c` (white 55%) |
| Light hint | `#fff6` (white 40%) |
| Border | `#cacaca` |
| Separator | `#0000001a` (black 10%) |
| Separator on dark | `#ffffffb3` |
| Female / light | `#cb3a6b` / `#f48fb1` |
| Male / light | `#1c7fac` / `#81d4fa` |
| Special / sponsored | `#f0b941` |
| Sponsor hovered | `#fcd46d` |
| Generic mask alias | `#0006` |

Keeping the opacity-bearing text colors separate rather than collapsing them into solid `#000000` is a derived editorial implementation inference from the source value forms; it is not Dcard-authored or a separately published UI specification.

### Spacing

Source scale: `xs: 4`, `sm: 8`, `md: 16`, `base: 16`, `lg: 20`, `xl: 32`, `xxl: 48`, `section: 64`. Layout/component values additionally include 1px, 2px, 10px, 12px, 14px, 20px, and 24px paddings/gaps. Keeping the exact combinations attached to components and layout is a derived editorial implementation inference from the source declarations; it is not Dcard-authored or a separately published UI specification.

### Shape

- Small: 4
- Medium/default-soft: 8
- Full: 9999

The default-soft characterization and the decision to preserve the verified 4px cards, chips, tabs, snackbar, and joined 0px/4px search geometry as explicit exceptions are derived editorial implementation inferences from the source records; they are not Dcard-authored or a separately published UI specification.

### Elevation

| Level | Exact source value | Use |
|---|---|---|
| 1 | `0px 1px 6px -2px #00000052` | Subtle lift |
| 2 | `0px 2px 8px -1px #0003` | Default elevated card/dropdown |
| 3 | `0px 3px 12px #0000002e` | Elevated card/popover |
| 4 | `0px 4px 16px #00000029` | Modal/sticky bar |
| 5 | `0px 6px 24px #0000001f` | Dialog/full-screen overlay |

Using gray/white contrast for flat feed separation and reserving these shadows for floating layers is a derived editorial implementation inference from the source rules; it is not Dcard-authored or a separately published UI specification.

### Motion

Verified runtime tokens:

- `--animations-bezier`: `cubic-bezier(0.4, 0, 0.2, 1)`.
- `--animations-short-duration`: `.15s` / 150ms.
- `--animations-medium-duration`: `.3s` / 300ms.

The boundary between those runtime tokens and the additional legacy motion recipes is a derived editorial implementation inference from the source disclosure; it is not Dcard-authored or a separately published UI specification. The 0ms / 500ms tokens, extra enter/exit curves, signature sequences, no-spring rationale, and reduced-motion recipe remain in provenance unless separately measured.

The legacy motion section describes the standard curve as serving 95%+ of motion. Classifying that percentage as an editorial source estimate rather than a measured coverage claim is a derived editorial implementation inference from the source disclosure; it is not Dcard-authored or a separately published UI specification.

The following promotion rule is a derived editorial implementation inference from the evidence boundary; it is not Dcard-authored or a separately published UI specification. A new or broader motion value may be promoted only after component-specific computed before/after observation establishes all five evidence kinds: transition properties, animation name, duration, easing, and reduced-motion behavior.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Family

The family-role boundary below is a derived editorial implementation inference from the source stack; it is not Dcard-authored or a separately published UI specification.

Use this exact captured stack for the reconstructed TW forum surface:

`Roboto, "Helvetica Neue", Helvetica, Arial, "PingFang TC", 黑體-繁, "Heiti TC", 蘋果儷中黑, "Apple LiGothic Medium", 微軟正黑體, "Microsoft JhengHei", sans-serif`

Roboto leads Latin/numerals. The remaining entries provide Traditional Chinese and platform fallback; they are not additional Dcard-owned font families.

### Type roles

| Role | Size | Mobile | Weight | Source ratio | Explicit line height |
|---|---:|---:|---:|---:|---:|
| Headline 1 | 32px | 30px | 500 | `1.31` | 42px / mobile 40px |
| Headline 2 | 28px | 24px | 500 | `1.43` | 40px / mobile 33px |
| Headline 3 | 24px | 20px | 500 | `1.17` | 28px |
| Headline 4 | 20px | unchanged | 500 | `1.4` | 28px |
| Title | 18px | unchanged | 600 | `1.39` | 25px |
| Subtitle 1 | 16px | unchanged | 500 | `1.38` | 22px |
| Subtitle 2 | 14px | unchanged | 500 | — | 20px |
| Body 1 | 16px | unchanged | 400 | `1.38` | 22px |
| Body 1 article variant | 16px | unchanged | 400 | — | 28px |
| Body 2 | 14px | unchanged | 400 | `1.43` | 20px |
| Caption | 12px | unchanged | 500 | `1.42` | 17px |
| Caption 2 | 10px | unchanged | 500 | `1.6` | 16px |

### Assets

The asset-authority boundary below is a derived editorial implementation inference from the source identity and external evidence; it is not Dcard-authored or a separately published UI specification.

- Catalog logo pointer: GitHub organization slug `Dcard`.
- The slug is retained in provenance and does not establish a distributed logo file or licence.
- User posts and forum media are content, not reusable brand assets. Cover media uses 100% width/height and `object-fit: cover` only where the source component requires it.

<!-- design-md:section components-states -->
## 4. Components & States

### State evidence boundary

The evidence-boundary and applicability judgments in this section are derived editorial implementation inferences from the source primitive roles; they are not Dcard-authored or a separately published UI specification.

The source supplies component records, a primary-hover token, disabled variant, active feed-tab text, and extensive legacy state recipes. It does not provide a complete per-component interaction capture. Applicability follows control meaning; unmeasured treatments remain absent, and state coverage is not claimed complete.

### Download App primary button

The interaction-kind, applicability, and source-record reconciliation judgments for this component are derived editorial implementation inferences from its navigation/download role; they are not Dcard-authored or a separately published UI specification.

- Primitive type: button; Kind: interactive.
- YAML record: `#3397cf` / `#ffffff`; radius 8; padding `8px 20px`; `14/500`.
- Canonical sibling live header tuple: `#3397cf`; white; 8px; padding 1×14; height 32px; 14px / 500. The two records remain separate.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source and sibling establish default variants |
| hover | applicable | Pointer-web button; source hover role is `#5ab0db` |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | Shared disabled variant exists: `#e0e0e0`; visual details below |
| loading | not-applicable | App-download navigation does not present in-button progress |
| error | not-applicable | The button does not present validation failure |
| success | not-applicable | The button does not present completion feedback |

### Search submit button

The interaction-kind, applicability, and source-geometry reconciliation judgments for this component are derived editorial implementation inferences from its search-submit role; they are not Dcard-authored or a separately published UI specification.

- Primitive type: button; Kind: interactive.
- `#006aa6` / `#ffffff`; YAML radius 4; source-body joined radius `0px 4px 4px 0px`; padding `8px 20px`; `14/500`. The shorthand and joined geometry remain separate.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source default search-submit treatment |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | Shared inactive-button variant exists |
| loading | applicable | Search result fetch can be pending; visual treatment omitted |
| error | applicable | Search can fail; legacy guidance remains below |
| success | applicable | Search can complete; visual treatment omitted |

### Like / comment counter button

The interaction-kind and applicability judgments for this component are derived editorial implementation inferences from its reaction-counter role; they are not Dcard-authored or a separately published UI specification.

- Primitive type: button; Kind: interactive.
- Transparent; `rgba(0,0,0,0.5)`; radius 8; padding `1px 14px`; `14/500`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source counter treatment |
| hover | applicable | Pointer-web reaction control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Reaction can be unavailable; shared disabled treatment exists |
| loading | not-applicable | Counter action does not present loading chrome |
| error | applicable | Reaction submission can fail; toast guidance remains below |
| success | applicable | Reaction can complete; inline success guidance remains below |

### Shared disabled button variant

- Primitive type: button.
- Background `#e0e0e0`; source secondary text color `#00000080`; radius 8.
- Classifying this as a shared state variant of applicable button roles rather than a separate control with its own applicability map is a derived editorial implementation inference from the source role; it is not Dcard-authored or a separately published UI specification.

### Header search input

The interaction-kind, applicability, and source-geometry reconciliation judgments for this component are derived editorial implementation inferences from its search-field role; they are not Dcard-authored or a separately published UI specification.

- Primitive type: input; Kind: interactive.
- `#ffffff`; border `1px solid #cacaca`; YAML radius 4; source-body joined radius `4px 0px 0px 4px`; padding `8px 12px`. The shorthand and joined geometry remain separate.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source default field treatment |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive input; visual treatment omitted |
| disabled | applicable | Search field can be unavailable; visual treatment omitted |
| loading | applicable | Search suggestions/results can be pending; visual treatment omitted |
| error | applicable | Search/form input can fail validation; legacy treatment remains below |
| success | not-applicable | Query entry does not present a field-success state in the source contract |

### Feed view tab

The interaction-kind, applicability, and source-color-record reconciliation judgments for this component are derived editorial implementation inferences from its All/Following switcher role; they are not Dcard-authored or a separately published UI specification.

- Primitive type: tab; Kind: interactive.
- Radius 4; YAML active text `#000000`; source-body semantic active `#000000d9`; inactive `#00000080`; underline indicator; 48px header. The solid and opacity-bearing active records remain separate.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source active/inactive variants |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive tab; visual treatment omitted |
| disabled | applicable | A feed view may be unavailable; visual treatment omitted |
| loading | applicable | Switching feeds can fetch content; visual treatment omitted |
| error | applicable | Feed fetch can fail; legacy guidance remains below |
| success | not-applicable | Selection does not present completion feedback |

### Content cards

The decisions to omit interaction kinds/applicability maps and to retain the legacy child dimensions only as source guidance rather than separately measured proof are derived editorial implementation inferences from unresolved card-level control evidence; they are not Dcard-authored or a separately published UI specification.

- Post card; primitive type `card`: white; radius 4; padding 20px; flat on `#f2f2f2`.
- Forum card; primitive type `card`: white; radius 4; padding 16px; `146px × 110px`.
- The legacy post-card prompt also records a 40px avatar and an 84px inline thumbnail. These child dimensions are preserved as source guidance, not separately measured proof.
- Interaction kinds/applicability maps omitted; child links/actions do not make the entire card a proven control.

### Informational badges

Classifying these source badges as non-interactive is a derived editorial implementation inference from their label roles; it is not Dcard-authored or a separately published UI specification.

- Topic chip; primitive type `badge`; Kind: non-interactive; reason: topic label. `#bf8ff0` / white; 4px; `4px 8px`; `12/500`.
- Sponsor chip; primitive type `badge`; Kind: non-interactive; reason: sponsored/special label. `#f0b941` / white; 4px; `4px 8px`.
- On-dark chip: `#ffffff14` / white; 4px; `4px 8px`; structural label, not a control.

### Snackbar

Classifying this feedback surface as non-interactive is a derived editorial implementation inference from its toast role; it is not Dcard-authored or a separately published UI specification.

- Primitive type: toast; Kind: non-interactive; reason: system feedback container, though a message may contain a child action.
- `#2c2c2c` / `#ffffff`; radius 4; width 250px; bottom 0px or 16px with a bottom bar.

### Dialog containers

The container classifications below are derived editorial implementation inferences from the source modal roles; they are not Dcard-authored or a separately published UI specification.

- Post modal: white; 8px; width 728px; backdrop `#00000059` or `#0006`.
- Comment modal: white; 8px; width 720px.
- Sign-up overlay: `#000000b3`; full-page engagement wall.
- Kind: non-interactive container; reason: dialog/overlay surface whose child controls carry interaction.

### Legacy state guidance

The following treatments are derived editorial implementation inferences in the legacy source rather than a complete measured interaction suite; they are not Dcard-authored or a separately published UI specification. Strings marked illustrative in the source remain illustrative, not verbatim Dcard microcopy.

| Pattern | Legacy treatment |
|---|---|
| Empty subscribed forum | `#00000080` body text plus one `#3397cf` compose action; no illustration; `還沒有文章 · 成為第一個發文的人` is illustrative |
| Empty search | `#00000080` 14px caption; `找不到符合的文章`; no suggested-search clutter |
| Feed first paint | `#f2f2f2` → `#fafafa` final-size shimmer cards; 300ms legacy cycle |
| Infinite scroll | Existing cards remain; centered 24px spinner with `#3397cf` stroke |
| Inline field error | Border becomes `#ea5c5c`; 12px / 500 actionable caption in the same color |
| Error toast | `#2c2c2c`; white 14px / 400; 3s auto-dismiss; 20px safe-area inset; no icon |
| Deleted post | Card replaced by illustrative `這篇文章已被刪除`, centered `#00000080` 14px; card rhythm preserved |
| Published post | Snackbar `#2c2c2c`; illustrative `文章已發布`; child `查看文章` in `#3397cf`; 4s auto-dismiss |
| Upvote / heart | `rgba(0,0,0,0.7)` to `#ea5c5c` or `#3397cf` over 150ms; counter increments without animation |
| Disabled button | `#e0e0e0` / `#00000080`; no opacity reduction |
| Post-body skeleton | Three lines at 100% / 90% / 70%; 14px line height; 8px gap; runtime standard easing |
| Sign-up overlay | `#000000b3`, level-5 shadow, 8px; headline-3/body-2; ghost Sign in + primary Sign up; legacy trigger after about two scroll lengths |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The layout grouping and inferred-responsive boundaries below are derived editorial implementation inferences from the source tokens; they are not Dcard-authored or a separately published UI specification.

- Maximum page width 1280px; desktop zones: 208px left sider, 728px main list, 300px right aside, 12px section gap.
- Header: 48px high, 20px padding, `#00324e`, white text. Content-title height 60px.
- Post entry padding 20px; post-view/list padding 20px vertical and 24px horizontal; column-item horizontal spacing 24px; right-aside gap 10px.
- Additional source layout tokens: bottom navigation 0px on web; safe-area bottom 0px; forum hero 243px; media maximum 60vh (60% of viewport height); toast width 250px; post modal 728px; comment modal 720px.
- Cover media: width 100%, height 100%, `object-fit: cover`. Single-line ellipsis uses hidden/ellipsis/nowrap; multi-line uses `-webkit-box`, vertical orientation, and default clamp 1.
- Mobile headline sizes are explicit tokens. The exact inferred layout/collapse breakpoint table remains in provenance rather than a verified responsive contract.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The voice and locale guidance below is a derived editorial implementation inference from verified controls, the engineering masthead, and the source's declared cultural boundary; it is not Dcard-authored or a separately published UI specification.

Use familiar, low-volume, casual-polite Traditional Chinese for product chrome — the default second person is `你` rather than `您`, and never colloquial internet slang on system surfaces — with the formal `您` / `敬啟` / `謹此` register reserved for legal or policy text as the single exception to that casual default. Keep CTAs short (`下載 App`, `登入`, `註冊`, `發文`); forum names remain single Traditional Chinese nouns — `女孩`, `男生`, `心情`, `工作`, `感情`, `時事` — never bilingual labels, because the forum name IS the space; post metadata presents time plus school/forum plus anonymized author in the source's `B站大學 · 3 小時前` pattern, without decorative punctuation; reaction counts use icons as units.

Verified public copy includes “Download App”, “Sign in”, `關於我們`, `最新消息`, `品牌資源`, `徵才介紹`, `社群守則`, and “Binding Generations. Breaking Limitations. Building with Passion.” Classifying the legacy `還沒有文章`, `這篇文章已被刪除`, and `搜尋 Dcard` examples as illustrative rather than verified live strings is a derived editorial implementation inference from the source disclosure; it is not Dcard-authored or a separately published UI specification.

Avoid generic apology openers `不好意思，系統發生錯誤`, `很抱歉` on non-destructive failures, UI-chrome emoji, exclamation-mark emphasis such as `立即下載！`, unsupported marketing adjectives `最佳`, `極致`, `革命性`, and Simplified Chinese on TW surfaces: use `網路` not `网络`, `影片` not `视频`, and `資料` not `数据`.

<!-- design-md:section governance -->
## 7. Governance

The governance judgments in this section are derived editorial implementation inferences of this reconstruction; they are not Dcard-authored or a separately published UI specification.

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

- reconciliation of catalog `#0086ff` with verified Dcard Blue `#3397cf`
- NTU/NCCU founding-location gap pending a primary Dcard press source
- native-app, authenticated, blocked service/About, and uncaptured forum-specific behavior
- official distribution/licensing status for GitHub-logo assets and user/forum media
- complete component-specific hover/focus-visible/disabled/loading/error/success treatments
- verified responsive breakpoint behavior and component-specific animation-name/reduced-motion evidence beyond the three runtime tokens

# MediBloc provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/medibloc/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | medibloc |
| name | MediBloc (Dr.Palette) |
| display_name_kr | 메디블록 (닥터팔레트) |
| country | KR |
| category | healthcare |
| homepage | `https://medibloc.com/` |
| primary_color | `#0066ff` |
| logo | `type: favicon`, `slug: https://i0.wp.com/medibloc.com/wp-content/uploads/2021/07/cropped-%EB%A6%AC%EB%AF%B8%ED%8B%B0%EB%93%9C-%ED%8C%8C%EB%B9%84%EC%BD%98.png?fit=192%2C192&ssl=1` |
| omd format (source) | 0.1 |
| verified | 2026-07-02 |
| added | 2026-07-02 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

The favicon slug is dual-destination: identity metadata here, and a portable asset record in `DESIGN.md` §3. It is a WordPress.com CDN URL keyed to a medibloc.com upload path rather than a file served from medibloc.com itself, and the portable record says so.

Token note from source, kept as ledger text: primary = live corporate CTA/link blue (`#0066ff` on medibloc.com); the Dr.Palette/Weavr blog uses a near-identical link blue (`#0b7aff`). Headings near-black (`#1c1e1f`), body grey (`#333333`). Magenta (`#cc3366`) is a sparse inline-link accent. Pretendard is the system font across both surfaces.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-02 |
| added | 2026-07-02 |
| tokens.extracted | 2026-07-02 |
| Tier 1 live inspect (source footer) | 2026-07-02 |

The source footer records the verification verbatim as **Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand-owned surfaces). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| homepage | corporate homepage | `https://medibloc.com/` | 2026-07-02 |
| blog | Dr.Palette / Weavr blog | `https://blog.medibloc.org/` (resolves to weavrlog.care) | 2026-07-02 |

### Tier 1 (as listed in the source footer)

- `https://medibloc.com/`
- `https://blog.medibloc.org/`

`https://medibloc.com/` is dual-destination: Experience Scope in `DESIGN.md` and this ledger. `https://blog.medibloc.org/` is dual-destination the same way. `weavrlog.care` is dual-destination the same way.

### Tier 2

- getdesign.md/medibloc — 0 DESIGN.md files, not listed
- styles.refero.design/?q=medibloc — no MediBloc-specific style; search returned only the default catalog

Both Tier 2 catalogs under-cover MediBloc. The source assigns proof to the Tier 1 brand-owned surfaces. No Tier 1 ↔ Tier 2 conflicts (Tier 2 silent).

## Sibling handling (`web/references/medibloc/.verification.md`)

The sibling exists — confirmed with `find web/references/medibloc -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-07-02. Method: playwright getComputedStyle (live DOM) via global playwright chromium. medibloc.com inspected headless (viewport 1440×900); the Dr.Palette blog inspected with a headed Chrome channel to pass the WordPress.com "Checking your browser" challenge (blog.medibloc.org redirects to weavrlog.care). Cookie/modal dismissal pass, then getComputedStyle on body, h1/h2/h3, buttons, links, plus a full-DOM background/text color + border-radius frequency scan
- Sources: `https://medibloc.com/` (corporate homepage — Panacea / MediBloc Wallet / Explorer; live computed style — primary token source); `https://blog.medibloc.org/` → `https://weavrlog.care/timeline/products/drpalette/17876` (Dr.Palette official blog, "닥터팔레트 2.0 출시")
- body (corporate): `font-family: -apple-system … Roboto`; `color: rgb(51, 51, 51)` (`#333333`); `font-size: 16px`; `line-height: 24px`; `background: rgb(255, 255, 255)` (`#ffffff`)
- hero H2 "Own your health data. It's rightfully yours.": `font-family: Pretendard-Bold`; `font-size: 60px`; `color: rgb(255, 255, 255)` (`#ffffff` on dark)
- H2 "Panacea": `font-family: Pretendard-Medium`; `font-size: 41px`; `font-weight: 600`; `color: rgb(0, 102, 255)` (`#0066ff`)
- H3 "MediBloc Wallet" / "MediBloc Explorer": `font-family: Pretendard-SemiBold`; `font-size: 26px`; `color: rgb(255, 255, 255)`
- outlined button "Validator Guide" / "Delegator Guide" / "Apply for Token swap": `border: 2px solid rgb(0, 102, 255)` (`#0066ff`); `color: rgb(0, 102, 255)`; `border-radius: 4px`; `padding: 0px 50px`; height 62px; `font-family: Pretendard-SemiBold`; `font-size: 15px`
- "Visit" pill button: `color: rgb(255, 255, 255)`; `border-radius: 28px`; `padding: 14px`; height 48px; `box-shadow: rgba(0, 0, 0, 0.07) 0px 10px 20px 0px`; `font-family: Pretendard-Medium`; `font-size: 14px`
- "See more company news" text button: `color: rgb(0, 102, 255)` (`#0066ff`); `border-radius: 3px`; `padding: 12px 24px`; height 39px; base bg `rgb(235, 241, 255)` (`#ebf1ff`)
- inline "Visit" text link: `color: rgb(204, 51, 102)` (`#cc3366`); `font-size: 16px`
- social nav links (Blog, Telegram, Twitter, Github): `color: rgb(255, 255, 255)`; `font-family: Roboto`; `font-size: 14px`; `font-weight: 500`; `padding: 4px 7px`
- top text-color frequency: `rgb(51,51,51)` ×547 (`#333333`), `rgb(255,255,255)` ×175, `rgb(0,0,0)` ×104 (`#000000`), `rgb(204,51,102)` ×64 (`#cc3366`), `rgb(0,102,255)` ×45 (`#0066ff`), `rgb(153,153,153)` ×27 (`#999999`), `rgb(57,57,57)` ×20, `rgb(0,122,255)` ×12 (`#007aff`), `rgb(0,69,255)` ×2 (`#0045ff`)
- top background-color frequency: `rgb(0,0,0)` ×38 (`#000000`), `rgb(19,19,19)` ×9 (`#131313`), `rgb(255,255,255)` ×8, `rgb(34,34,34)` ×1
- top border-radius frequency: `4px` ×15, `3px` ×11, `7px` ×6, `13px` ×4, `28px` ×3, `8px` ×2
- document.title (corporate): "MediBloc Limited - Own your health data. It's rightfully yours."
- blog body: `font-family: Pretendard` (URL-encoded 프리텐다드); `color: rgb(67, 67, 67)` (`#434343`); `font-size: 16px`; `line-height: 28.8px`; `background: rgb(255, 255, 255)`
- H1 "모두가 그리는 클라우드EMR, 닥터팔레트 2.0 출시": `font-size: 36.6px`; `font-weight: 500`; `color: rgb(28, 30, 31)` (`#1c1e1f`)
- H3 lead "닥터팔레트는 의료진과 환자 모두를 생각합니다.": `font-size: 22.65px`; `font-weight: 400`; `color: rgb(28, 30, 31)`
- category / inline link "닥터팔레트" · "공지사항": `color: rgb(11, 122, 255)` (`#0b7aff`); `font-size: 14px`; `font-weight: 700`
- top nav "서비스" / "공지사항": `color: rgb(67, 67, 67)`; `font-size: 16px`; `font-weight: 500`; `padding: 16px`
- utility links "공식홈페이지" / "개인정보처리방침": `color: rgb(118, 118, 118)` (`#767676`); `padding: 14px`
- date meta "2021-09-23": `color: rgb(157, 157, 157)` (`#9d9d9d`); `font-size: 16px`
- document.title (blog): "모두가 그리는 클라우드EMR, 닥터팔레트 2.0 출시 - 위버케어 공식블로그, 위버로그(Weavrlog)"
- blog.medibloc.org and medibloc.org both 302 to WordPress.com-hosted Weavr domains (weavrlog.care / weavr.care)
- medipass.me (Medipass, MediBloc's PHR app) was inspected but is a distinct purple sub-brand (`#892bf5`, Poppins) with its own design language — deliberately not merged into the MediBloc corporate system documented in the source

Values and forms the sibling carries that the visible source body does not, kept here as corroboration and not promoted into the portable body as new facts:

- Viewport `1440×900`
- Corporate body stack `-apple-system … Roboto`
- Outlined-button `font-family: Pretendard-SemiBold` (source YAML/body writes `15px / 400 Pretendard`)
- Blog H1 `36.6px` and H3 lead `22.65px` (source hierarchy writes 36px and 22px)
- Frequency hex `rgb(57,57,57)` and background `rgb(34,34,34)`
- Border-radius frequencies `7px` and `13px`
- Blog body `line-height: 28.8px`
- "See more company news" computed base bg `#ebf1ff` as a component fill (source records `#ebf1ff` as the Surface Blue color role, not as a YAML field on `button-text`)
- Social-nav padding `4px 7px` (source writes `4px 7px` on the info tag)
- Dark-hero product H3 color `rgb(255,255,255)` (source feature-card token-set `fg` is `#333333`)
- document.title `MediBloc Limited - Own your health data. It's rightfully yours.`
- document.title suffix `위버케어 공식블로그, 위버로그(Weavrlog)`
- H3 lead "닥터팔레트는 의료진과 환자 모두를 생각합니다."
- Labels `공지사항`, `서비스`, `공식홈페이지`, `개인정보처리방침`
- Date meta `2021-09-23`
- `weavr.care` (source names weavrlog.care)
- URL-encoded 프리텐다드
- Method strings `playwright getComputedStyle`, `Checking your browser`
- medipass.me sub-brand tokens `#892bf5` and Poppins

Hex values those RGB samples convert to (`#0066ff`, `#007aff`, `#0045ff`, `#0b7aff`, `#cc3366`, `#1c1e1f`, `#333333`, `#434343`, `#767676`, `#999999`, `#9d9d9d`, `#ffffff`, `#131313`, `#000000`, `#ebf1ff`) are already in the source body.

The sibling excludes getdesign.md / refero.design / Google favicon from the KR brand-owned count. That exclusion is recorded here; it is not a new token.

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.2` display-hero, `1.3` lead, `1.5` body). They are carried as ratios in the portable body, never converted to a single px form (A1a). The source table also writes `tight`, `1.6`, and `normal`; YAML has no lineHeight on those rows; both writings stay.
- The source frontmatter records spacing and radius steps unitless (`xs: 4` … `xxl: 50`; `sm: 3`, `md: 4`, `lg: 8`, `pill: 28`, `full: 9999`). The portable body keeps both the unitless steps and the px forms the visible sections use. `tokens.rounded.full: 9999` stays a step. The source also writes `9999px`.
- `tokens.spacing.md: 14` is not the Visit-pill padding `14px` and not the 14px label size. `tokens.spacing.lg: 24` is not the text-button padding `12px 24px`. `tokens.spacing.xxl: 50` is not the outlined-button padding `0px 50px`. `tokens.rounded.md: 4` is not `tokens.spacing.xs: 4`. `tokens.rounded.pill: 28` is not the Visit-pill height 48px.
- Frontmatter `primary_color` is `#0066ff`, the same byte form as `tokens.colors.primary`.
- YAML `family.sans` is `Pretendard`. YAML `family.alt` is `Roboto`.
- YAML outlined-button `bg: "#ffffff"` and the visible "transparent fill" / "transparent/white fill" writings both stay.
- Same-hex role splits the source already assigns, kept on separate paths (not a new derived split): `#ffffff` is canvas (page background, white cards, text on dark/blue), outlined-action background, Visit-pill text, feature-card background, and nav-link text. `#131313` is surface-dark, Visit-pill background, and nav background. `#0066ff` is primary / outlined text / text-link / info-tag text / nav active.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| §13 Personas — three entries | whole section | Fictional archetypes. Not promoted to verified tasks and not re-hosted in a sidecar. Role labels, ages, cities, affiliations, motivations, and biographies are dropped and are deliberately not restated here (D2, D2a). |
| §9 Agent Prompt Guide | whole section | Tool-facing copy-paste prompt and restatements of rules stated elsewhere. Checked value by value before deletion: see the next paragraph. |
| Three unsourced easing curves | curve values only | `ease-enter` / `ease-exit` / `ease-standard` roles and uses stay. The three cubic-bezier values are not traceable to MediBloc evidence. Durations 120ms / 200ms / 320ms and the motion rules stay. The B3 promotion condition is kept in the portable body. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. MediBloc Blue `#0066ff`, Blue Alt `#007aff`, Blog Link Blue `#0b7aff`, Surface Blue `#ebf1ff`, Magenta `#cc3366`, Ink `#1c1e1f`, Body `#333333`, blog body `#434343`, Muted `#767676`, Muted Alt `#999999`, Faint `#9d9d9d`, canvas `#ffffff`, Surface Dark `#131313`, Pure Black `#000000` — Semantic color. Dark hero `#131313` / Visit pill 28px / 14px padding / 14px Pretendard / shadow `0 10px 20px rgba(0,0,0,0.07)` — Scope + Visit Pill. `60px Pretendard Bold white headline` — Type roles Display Hero, beside the §3 Notes `Hero headline, white on dark` and the YAML `use` `Hero headline, Pretendard Bold cut`. Outlined primary white `#ffffff` fill / `#0066ff` text / 2px solid `#0066ff` / 4px radius / 0px 50px / 62px / 15px Pretendard — Outlined Action. Feature card white `#ffffff` / 8px radius / same ambient shadow / YAML `fg` `#333333` / §9 construction-prompt title 26px Pretendard SemiBold `#1c1e1f` / body 16px Pretendard `#333333` — Feature / Product Card + Type roles. Both writings stay. Light-blue info tag `#ebf1ff` / `#0066ff` / 4px / 4px 7px / 14px Pretendard — Light-Blue Info Tag. Iteration-guide rules (Pretendard cuts, single-action blue, outlined primary, section-based depth, ink/body not pure black, magenta tiny-link, Roboto utility-only) — Principles + Application rules + Avoid.

## Claim ledger

| Claim | Surface |
|---|---|
| `tokens.colors.primary` / `primary-alt` / `primary-deep` / `blue-link` / `surface-blue` / `accent` / `ink` / `body` / `body-soft` / `muted` / `muted-alt` / `faint` / `canvas` / `surface-dark` / `black` | live medibloc.com + blog.medibloc.org |
| `tokens.typography.family.sans` / `alt` | live medibloc.com + blog.medibloc.org |
| `tokens.typography.display-hero` / `headline` / `title` / `subhead` / `lead` / `body` / `body-sm` / `label` / `caption` | live medibloc.com + blog.medibloc.org |
| `tokens.spacing.xs` / `sm` / `base` / `md` / `lg` / `xl` / `xxl` | source token set (live-extract) |
| `tokens.rounded.sm` / `md` / `lg` / `pill` / `full` | live geometry + token-set full step |
| `tokens.shadow.card` / `none` | live medibloc.com (`0 10px 20px rgba(0,0,0,0.07)`) |
| `tokens.components.button-outline` / `button-pill` / `button-text` / `card-feature` / `nav-link` / `badge-info` | live medibloc.com |
| Founding 2017; 고우균 (Allen Ko); 이은솔 (Eunsol Lee); Panacea; MED token; Medipass; Dr.Palette cloud EMR; Dr.Palette 2.0 2021; Weavr consolidation | source §11 narrative (live surfaces + widely documented public facts, as the source itself classifies them) |
| Voice strings "Own your health data. It's rightfully yours."; "모두가 그리는 클라우드EMR, 닥터팔레트 2.0 출시"; Dr.Palette no-servers copy | live medibloc.com + blog.medibloc.org |

## Proof notes

- Two brand-owned Tier 1 web surfaces, recorded 2026-07-02. Computed interface values in the source body attach to medibloc.com and blog.medibloc.org (resolving to weavrlog.care).
- `components_harvested: true`; six component records in the source token set.
- The source records no interaction expansion and no `focus-visible` string. Uncaptured hover, focus-visible, disabled, loading, error, and success treatments are omitted as values; they are not turned into `not-applicable` for lack of capture. Applicability follows control role. State coverage is not claimed complete.
- MediBloc publishes no first-party design-system documentation in the source (getdesign 0 files; refero silent). Derived-editorial qualifications therefore close with the toss-form: not MediBloc-authored or a separately published UI specification (rulebook v12 B2a).
- 2017, 고우균 (Allen Ko), 이은솔 (Eunsol Lee), Panacea, MED token, Medipass (메디패스), Dr.Palette (닥터팔레트), 2021 Dr.Palette 2.0 "speed, design, and usability", and Weavr (위버케어) are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens. The §11 closing refusal/embrace sentence stays in the same Scope paragraph.

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`): **37**. This table has **37** rows (E1 1:1). The same 37 lines also carry `not MediBloc-authored` and `separately published UI specification`.

| Location | Qualified material |
|---|---|
| Experience — Scope ¶1 | The surface boundary that keeps values on the surface that established them |
| Experience — Scope ¶2 | The atmosphere readings: engineering-led vs clinical hospital, trustworthy/technical, blue as action, Korean-premium type, dark-hero distinction, atmospheric depth |
| Experience — Scope ¶3 | Classing the §11 founding-and-product narrative as not a token source; keeping the source's public-facts and Weavr-inference evidence class |
| Experience — Scope ¶4 | Reading the refusal/embrace closing unit as a current-surface design instruction |
| Experience — Primary tasks | The step from observed labels to "primary tasks", and keeping those tasks off the source's persona section |
| Experience — Audience | The step from the source's group labels to an audience grouping |
| Experience — Distinctive traits | The grouping and characterizing half of the recorded values |
| Experience — Principles | All five §12 principles and their UI implications |
| Experience — Application rules | Grouping the Do list as application rules, and their rationales |
| Experience — Avoid | The rationales in the Don't list |
| Foundations — Semantic color | The characterizing phrases attached to roles, including single action color, cross-surface action confirmation, pressed/emphasis, hover/fill, warmer/softer than pure black, default reading grey, warmer grey for long-form, and lowest-emphasis meta |
| Foundations — Spacing | Keeping spacing keys off padding and font sizes that share a number |
| Foundations — Shape | Calling 4px the workhorse, keeping rounded steps off spacing keys, keeping 28px radius off 48px height |
| Foundations — Elevation | Reading the stack as a section-based, atmospheric elevation system |
| Foundations — Motion / omitted curves | Classing the three source-listed curves as untraceable to MediBloc evidence and omitting them on that ground |
| Foundations — Motion / B3 gate | Setting the promotion condition in this document rather than reading it as a MediBloc-authored motion specification |
| Foundations — Motion | Reading the motion rules as a clean/minimal-depth / steadiness-and-trust signal |
| Typography — Font evidence / Official product-use | Classing the live surfaces as not a separately issued typography specification |
| Typography — Font evidence / Official distributed | Classing the absence of a separately distributed family as an evidence class |
| Typography — Font evidence / Declared-only | Classing Roboto as a utility/social-nav face, not the MediBloc display or body face |
| Typography — Font evidence / License | Treating Pretendard as an upstream face, not a MediBloc-owned brand asset |
| Typography — Font evidence / Outside these captures | Naming only the two source-established pages as the capture boundary |
| Typography — Family | The ban on substituting a fallback and presenting Roboto as the MediBloc display or body face |
| Typography — Type roles | Keeping line heights as unitless ratios and refusing a single px conversion, and keeping YAML `use` strings and source §3 Notes as two writings |
| Typography — Type rules | Reading the scale as the four typography principles |
| Typography — Assets | Classing the favicon slug as a WordPress.com CDN pointer |
| Typography — Assets / image behavior | Reading shadow-on-illustrations as consistent with the one-shadow system |
| Components — How to read this section | The role-based decision procedure, YAML versus transparent/white fill keep-both, YAML feature-card `fg` versus §9 title `#1c1e1f` keep-both, and every Reason cell in every per-component table |
| Components — State record | The nine-row §14 contract read as this surface's state contract, not as per-control observations or treatments attached to corporate destination controls |
| Layout & Platforms — Spacing notable | Reading the 50px outlined padding as a generous, confident hit area |
| Layout & Platforms | Reading the page as section-cadence-over-card-stacks, airy-hero against dense stats, and blue as the wayfinding cue |
| Layout & Platforms — Responsive | Reading the breakpoints and collapsing strategy as system-level rather than cross-viewport measurements, and reading the 62px / 48px targets as large, confident, unmistakable tap areas |
| Layout & Platforms — Image behavior | Reading that image behavior as consistent with the one-shadow, section-cadence system |
| Content & Locales — voice / register | The voice reading and the register-table contract |
| Content & Locales — voice samples | The parenthetical readings after the three live quotes |
| Content & Locales — byte-exact | The byte-exact / gloss-beside rule for Korean strings |
| Governance — Recorded unresolved | Framing the list as source-opened values, not a license to invent or a list of never-established domains, and classing the omitted curves as untraceable to MediBloc evidence |

# Grip provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/grip/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | grip |
| name | Grip |
| country | KR |
| category | ecommerce |
| homepage | `https://www.grip.show` |
| primary_color | `#eb2b51` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=grip.show&sz=256` |
| omd format (source) | 0.1 |
| verified | 2026-06-03 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The favicon slug is dual-destination: identity metadata here, and a portable asset record in `DESIGN.md` §3. It is a favicon-service URL keyed to the domain rather than a Grip-hosted brand file, and the portable record says so.

The source frontmatter carries no `tokens.note`.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-03 |
| tokens.extracted | 2026-06-09 |
| Tier 1 live inspect (source footer) | 2026-06-03 |

The source footer records the verification verbatim as **Verified:** 2026-06-03. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| product | product webapp (homepage HTML + CSS bundles) | `https://www.grip.show` | 2026-06-03 |
| corp | company / brand page | `https://gripcorp.co` | 2026-06-03 |

### Tier 1 (as listed in the source footer)

- `https://www.grip.show` — homepage HTML + CSS bundles via `webapp-resource.grip.show/202606020502/_next/static/css/`
- `https://webapp-resource.grip.show/202606020502/_next/static/css/2caceb3098ae7b02.css` — main Tailwind utility CSS, 86 KB
- `https://webapp-resource.grip.show/202606020502/_next/static/css/1f9e9658ee2b291a.css` — cart page CSS with button tokens
- `https://webapp-resource.grip.show/202606020502/_next/static/css/c2bfe78c6e53a384.css` — coupon drawer CSS with full-width confirm button
- `https://gripcorp.co` — brand/corp homepage with gradient slogan and propose-button
- `https://webapp-resource.grip.show/202606020502/_next/static/css/4299887bf9e53336.css` — avatar + live ring CSS

### Tier 2

- getdesign.md/grip — 0 DESIGN.md files (NOT LISTED)
- refero — no result found for Grip KR

## Sibling handling (`web/references/grip/.verification.md`)

The sibling exists — confirmed with `find web/references/grip -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-03. Method: raw source-file fetch (homepage HTML + multiple CSS bundles from `webapp-resource.grip.show` CDN).
- Sources: `https://www.grip.show`; five CSS bundles including `3d6c6a4ea44c6c3d.css` (cart item CSS, 6.2 KB), which the visible source footer does not list; `https://gripcorp.co` with `resource-www.grip.show/_next/static/css/4ab5563284c2ce0c.css` (31 KB).
- `.bg-primary-100{background-color:#eb2b51}` — primary brand color token named `primary-100`
- `.bg-primary-default{background-color:#ff3c78}` — lighter primary affordance
- cart checkout `button{background-color:#eb2b51;border-radius:8px;color:#fff;font-size:16px;font-weight:600;height:50px;width:210px}`
- `.confirm{background:#eb2b51;color:#fff;font-size:18px;font-weight:500;height:56px}`
- live ring `.grip-avatar-new.live-border:after` `conic-gradient(from -68deg at 65.48% 70.24%,#ff2b51 85.2474deg,#ffae8e 169.9546deg,#ff2b51 1turn)`
- `:export{accentChatBooster300:#df005d;accentChatBooster200:#8314c8;accentChatBooster100:#1254b1}`
- `.bg-base-100{background-color:#0e1011}` · `.main{background-color:#0e1011}`
- `@font-face{font-family:Pretendard;…font-weight:45 920}`
- `.bg-secondary-default{background-color:#6456dc}`
- gripcorp.co `.slogan-section{background:linear-gradient(133.59deg,#fe0189 7.85%,#ff583c 91.26%)}` and `.propose-button{background:linear-gradient(133.59deg,#fe0189 7.85%,#ff583c 91.26%);border-radius:28px;font-weight:700;font-size:16px;width:136px;height:44px}`
- Country: KR; parent company GripCompany (주식회사 그립컴퍼니); 사업자번호 239-87-01063; HQ: 경기도 성남시 분당구 판교역로 152, 11층
- Published homepage meta: description "영상으로 만나는 패션&라이프 쇼핑"; og:title "1,000만이 선택한 영상 쇼핑, 그립"
- `https://business.grip.show` — Grip 비즈니스센터 (KR seller/partner portal)

Values and strings the sibling carries that the visible source body does not, kept here and not promoted:

- Token names `primary-100`, `primary-default`, `base-100`, `secondary-default`
- Cart-button width `210px`
- Live-ring extra coordinates `at 65.48% 70.24%` and stop angles `85.2474deg` / `169.9546deg` / `1turn`
- Exported chat-booster accents `#df005d`, `#8314c8`, `#1254b1`
- Corp propose-button `28px` radius, `16px` / `700`, `136px` × `44px`
- Corp slogan gradient angle `133.59deg` and stops `7.85%` / `91.26%`
- Cart-item CSS URL `3d6c6a4ea44c6c3d.css`
- 사업자번호 `239-87-01063`
- HQ street address `경기도 성남시 분당구 판교역로 152, 11층`
- Meta description `영상으로 만나는 패션&라이프 쇼핑`
- Portal URL `https://business.grip.show` and the label Grip 비즈니스센터
- Corp footer `GripCompany Co., Ltd., Republic of Korea`

og:title `1,000만이 선택한 영상 쇼핑, 그립` is already in the source §10 and is dual only as corroboration.

Tier 2 page title from the sibling / source footer, kept here and not promoted: `grip — 0 DESIGN.md files | getdesign.md`. The portable body does not need a third-party listing title.

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.35` on discount; `1.4` on confirm, button, body, caption, badge). They are carried as ratios in the portable body, never converted to px (A1a).
- The source frontmatter records spacing and radius steps unitless (`xs: 4` … `section: 56`; `sm: 4`, `md: 6`, `lg: 8`, `full: 9999`). The portable body keeps both the unitless steps and the px forms the visible sections use. `full: 9999` stays a step.
- `tokens.spacing.section: 56` and the page-header height `56px` are different keys. `tokens.rounded.lg: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.sm: 4` is not `tokens.spacing.xs: 4`.
- Nudge background is recorded two ways: `rgba(47, 23, 253, 0.05)` in §4 and `rgba(47,23,253,0.05)` in the YAML token. Both byte forms are kept.
- Empty-cart / coupon-success `#999` is the source's shorthand; the palette key is `#999999`. Both spellings stay attached to their rows.
- Sold-out `#e83c3b` is not `tokens.colors.error` `#ef4343`. Video loading/error `#111` is not `tokens.colors.canvas` `#0e1011`. Product live ring `#ff2b51` / `#ffae8e` is not the theme/corp `#fe0189` / `#ff583c`.
- YAML `family.mono` is `Pretendard`, same face as `sans`.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| Standard easing `cubic-bezier(0.4, 0, 0.2, 1)` | curve value only; 150ms duration, named `ease-out`, brand live-avatar curves, motion rules, and the B3 promotion condition kept | The source labels the curve Material-derived / Tailwind default. It is not a Grip-computed sample. Same family as the documented re-injection path in `spec/omd-v0.1.md`. |
| §13 Personas — four entries | whole section | The source's own headers label them illustrative. Fictional personas are neither promoted to verified tasks nor re-hosted in a sidecar. The four entries — including names, ages, cities, and biographies — are dropped and are deliberately not restated here (D2, D2a). |
| §9 Agent Prompt Guide | whole section | Tool-facing copy-paste prompts and restatements of rules stated elsewhere. Checked value by value before deletion: see the next paragraph. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Dark canvas `#0e1011`, body text `#eff0f4`, Pretendard 15px/400 — Foundations + Type roles. Primary CTA `#eb2b51`, white text, 8px radius, 50px height, 16px/600 — Primary CTA component. Secondary `#323232`, 4px, 34px, 14px/500 — Dark Secondary. Live indicator `#fe0189→#ff583c` and `0.81s` `cubic-bezier(0.167, 0.166, 1, 1)` — Foundations color + Motion. Price 700 / tabular-nums / discount `#eb2b51` — Type rules + Semantic color. Urgency nudge `rgba(47,23,253,0.05)` / `#6456dc` / 4px / 38px — Urgency Countdown Nudge. Coupon `#fff5f8` / `#eb2b51` 27px/700 — Active Coupon Card. Section dividers `#f3f3f3` — Semantic color Surface Subtle. No box-shadow on action elements — Elevation + Avoid.

## Claim ledger

| Claim | Surface |
|---|---|
| `tokens.colors.primary` / `hot-pink` / `purple` / `canvas` / `surface-1` / `surface-2` / `surface-3` / `surface-light` / `surface-subtle` / `text-primary` / `text-body` / `text-muted` / `text-subdued` / `border` / `border-subtle` / `error` | product webapp CSS |
| `tokens.typography.family.sans` / `mono` | product webapp CSS |
| `tokens.typography.discount` / `confirm` / `button` / `body` / `caption` / `badge` (size, weight, lineHeight, use) | product webapp |
| `tokens.spacing.xs` / `sm` / `md` / `base` / `lg` / `xl` / `section` | product webapp |
| `tokens.rounded.sm` / `md` / `lg` / `full` | product webapp |
| `tokens.components.button-primary` / `button-confirm` / `button-secondary` / `button-outline` / `button-discovery` / `card-coupon` / `nudge-urgency` | product webapp (cart / coupon drawer / shorts) |
| Live ring `conic-gradient(from -68deg, #ff2b51, #ffae8e)` | avatar CSS `4299887bf9e53336.css` |
| Theme / corp gradient `#fe0189→#ff583c` | source theme + Do list + gripcorp.co slogan |
| Creator ring `conic-gradient(from -68deg, #1ec7be, #1dc3ff)` | source §2 |
| Voice strings `1,000만이 선택한 영상 쇼핑, 그립.` / `지금 라이브 중!…` / `그리퍼가 직접…` / `지금 바로` / `한정 특가` / `지금 방송 중` / `담긴 상품이 없어요` / `품절` / `사용 완료` | product webapp / og:title |
| Founding July 2018 / Kim Han-na / Jam Live / Snow / December 2021 Kakao ~50% ₩180B / 10 million / 1,300 / Grip Cloud | source §11 narrative |

## Proof notes

- Two brand-owned Tier 1 web surfaces, recorded 2026-06-03. CSS bundle URLs in the source footer are named sources with computed values attached by the source.
- `components_harvested: true`; seven component records in the source token set (`button-primary`, `button-confirm`, `button-secondary`, `button-outline`, `button-discovery`, `card-coupon`, `nudge-urgency`).
- The source records no interaction expansion and no `focus-visible` string (`grep -o 'focus-visible' web/references/grip/DESIGN.md | wc -l` = 0). Uncaptured hover, focus-visible, disabled, loading, error, and success treatments are omitted as values; they are not turned into `not-applicable`. Applicability follows control role. State coverage is not claimed complete.
- Grip has no published first-party design system in the source. Derived-editorial qualifications therefore close with the toss-form example: not Grip-authored or a separately published UI specification.
- Founding year, Kakao stake, download and show-count figures, and the Grip Cloud arm are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`): **22**. This table has **22** rows (E1 1:1). The same 22 lines also carry `not Grip-authored` and `separately published UI specification`.

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 | The surface boundary that stops a grip.show token from standing in for gripcorp.co, and that treats Grip Cloud / US / Japan-in-planning as narrative products |
| Experience — Scope ¶2 | The atmosphere readings: cinema-mode canvas, buy-now urgency, kinetically distinctive live ring, premium-yet-playful purple, structured-not-clinical radii |
| Experience — Scope ¶3 | Classing the §11 narrative as not a token source, and the refusal that the two captured surfaces are not a proxy for Grip Cloud chrome or an uninspected Japan surface |
| Experience — Primary tasks | The step from observed modules and labels to "primary tasks" |
| Experience — Audience | The step from captured surfaces and the published term Gripper to an audience grouping |
| Experience — Distinctive traits | The grouping and characterizing half of the recorded values |
| Experience — Principles | All five §12 principles and their UI implications |
| Experience — Application rules | Grouping the Do list as application rules, and their rationales |
| Experience — Avoid | The rationales in the Don't list, and the scope-boundary prohibition |
| Foundations — Semantic color | The characterizing phrases attached to roles |
| Foundations — Spacing | Keeping `section: 56` off the 56px page-header constant, and the 4 / 8 / 16 / 24 figures off shared radius and type paths |
| Foundations — Shape | Calling the 4–8 px cluster structured rather than clinical, reading 24–31px as reserved for pills, and keeping rounded steps off spacing keys that share a number |
| Foundations — Elevation | Reading the stack as a flat, contrast-only elevation system |
| Typography — Font evidence / Official product-use | Classing the live product CSS as not a separately issued typography specification |
| Typography — Font evidence / License | Treating Pretendard as an upstream face, not a Grip-owned brand asset |
| Typography — Family | The ban on substituting a system face for Pretendard and presenting the fallback as the Grip face |
| Typography — Type rules | Reading the scale as weight-reservation rules, and keeping the 11–12px range and 56px header off badge-size and spacing.section |
| Typography — Assets | Classing the favicon slug as a third-party favicon service |
| Components — Surface state contract | The eight-row §14 contract read as this surface's state contract |
| Components — How applicability is decided here | The role-based decision procedure, and every Reason cell in every per-component table |
| Layout & Platforms | Reading 420px as a fidelity constraint, Indiana Scroll as anti-pagination, and `section: 56` as not the 56px header |
| Content & Locales — voice / register | The voice reading and the register-table contract |

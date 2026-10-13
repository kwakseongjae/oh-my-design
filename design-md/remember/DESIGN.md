---
name: Remember
colors:
  action-black: '#000000'
  surface: '#ffffff'
  foreground: '#222222'
  input-surface: '#f2f2f2'
  muted: '#808080'
  hairline: '#d4d4d4'
  corporate-orange: '#fc5d11'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.45
    use: Repeated career posting text and controls
  heading:
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
    use: Career posting section heading
  card-title:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.45
    use: Career posting card title
rounded:
  sm: 4px
  md: 6px
  lg: 8px
spacing:
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 24
components:
  career-outline-dialog-button:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    border: '1px solid #ffffff'
    rounded: 6px
    padding: 0px 12px
    typography: 14px/400 Pretendard
    hover: 'overlay layer opacity 0 → 0.1 (::before #ffffff over the transparent button on the #000000 header: it lightens the button by compositing arithmetic; not pixel-checked)'
    pressed: 'overlay layer opacity 0 → 0.2 (the same #ffffff layer; it lightens the button by arithmetic; not pixel-checked)'
    focus: 'outline 2px #000000, offset 2px (authored ring); black on the black header, so its visibility is doubtful by arithmetic — measured 2026-09-29, not pixel-checked'
    states: dialog-open observed from this trigger 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29 (Tab 10); the probe never clicks, so the dialog was not re-opened; aria-expanded false at rest
    use: Career postings header control at career-postings::[data-omd-capture=10]
  career-job-list-item:
    type: listItem
    textColor: '#222222'
    rounded: 0px
    typography: 16px/400 Pretendard
    hover: no change in the compared scope (the card link, its ::before/::after, 18 descendants incl. 1 svg, 1 path and 1 img, 3 ancestor levels) — measured 2026-09-29
    pressed: no change in the compared scope (same scope as hover) — measured 2026-09-29
    focus: no focus indication in the compared scope (same scope as hover) — measured 2026-09-29
    states: 'default captured 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29 on the link inside the first curated posting item (Tab 75, second load); its title label is 16px / 600 #000000'
    use: Chromeless job-list item at career-postings::li; 162px-wide representative capture
  filled-auth-control:
    type: button
    backgroundColor: '#000000'
    textColor: '#ffffff'
    rounded: 4px
    padding: 0px
    size: 36px x 32px
    typography: 14px / 400 / Pretendard
    hover: no change in the compared scope (self, its ::before/::after, 0 descendants, 3 ancestor levels) — measured 2026-09-29
    pressed: no change in the compared scope (self, its ::before/::after, 0 descendants, 3 ancestor levels) — measured 2026-09-29
    focus: no focus indication in the compared scope (self, its ::before/::after, 0 descendants, 3 ancestor levels) — measured 2026-09-29
    states: default captured 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29 on 로그인 (Tab 8), logged out and never activated; transition all 0s
    use: Career header 로그인 control
  white-header-control:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#000000'
    rounded: 6px
    padding: 0px 12px
    size: 72px x 32px
    typography: 14px / 400 / Pretendard
    hover: 'overlay layer opacity 0 → 0.1 (::before #ffffff over the #ffffff fill: invisible by compositing arithmetic; not pixel-checked)'
    pressed: 'overlay layer opacity 0 → 0.2 (the same #ffffff layer: invisible by compositing arithmetic; not pixel-checked)'
    focus: 'outline 2px #000000, offset 2px (authored ring) — measured 2026-09-29'
    states: default captured 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29 on 회원가입 (Tab 9), never activated; the ::before layer is full-size
    use: Career header 회원가입 control
  search-input:
    type: input
    backgroundColor: '#f2f2f2'
    textColor: '#808080'
    rounded: 4px
    padding: 0px 0px 0px 56px
    size: 817px x 52px
    typography: 16px / 400 / Pretendard
    hover: no change in the compared scope (self, its ::before/::after, 0 descendants, 3 ancestor levels) — measured 2026-09-29
    pressed: no change in the compared scope (self, its ::before/::after, 0 descendants, 3 ancestor levels) — measured 2026-09-29
    focus: no focus indication in the compared scope (self, its ::before/::after, 0 descendants, 3 ancestor levels) — measured 2026-09-29
    states: default captured 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29 (Tab 25); nothing was typed; the placeholder colour was not read separately
    use: Career search field (직무, 회사를 검색해 주세요)
  filter-control:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    border: '1px solid #d4d4d4'
    rounded: 4px
    padding: 10px 16px
    size: 82px x 42px
    typography: '14px / 400 / Pretendard (visible label; the button itself computes #222222 16px / 400)'
    hover: no change in the compared scope (self, its ::before/::after, 4 descendants incl. 1 svg and 1 path, 3 ancestor levels) — measured 2026-09-29
    pressed: no change in the compared scope (self, its ::before/::after, 4 descendants incl. 1 svg and 1 path, 3 ancestor levels) — measured 2026-09-29
    focus: no focus indication in the compared scope (self, its ::before/::after, 4 descendants incl. 1 svg and 1 path, 3 ancestor levels) — measured 2026-09-29
    states: six controls captured 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29 on 직무 only (Tab 153); 연봉 and 지역 share its class
    use: Career posting filter button (직무, 연봉, 지역 and three more)
  header-nav-link:
    type: tab
    backgroundColor: transparent
    textColor: '#ffffff'
    padding: 4px 8px 0px
    size: 71px x 60px
    typography: 16px / 600 / Pretendard
    selected: '::after bg #ff6a0d, a 2px bar under the current section link; unchanged in every state'
    hover: 'fg #808080'
    pressed: 'fg #808080'
    focus: 'fg #808080 (text colour only, no outline) — measured 2026-09-29'
    states: 'default, hover, pressed and keyboard focus measured 2026-09-29 on 채용공고 (Tab 2); transition color 0.1s; the July hover, pressed and focus frames on these links (#f8f8f8, #e7e7e7, #dcdcdc and others) are mid-transition greys on the way to #808080 and are not used'
    use: Career header product link (채용공고 and its siblings) on the black header
  search-submit:
    type: button
    backgroundColor: '#000000'
    textColor: '#ffffff'
    rounded: 6px
    padding: 0px 12px
    size: 116px x 52px
    typography: '18px / 400 / Pretendard (visible label; the button itself computes #000000 14px / 400)'
    hover: 'overlay layer opacity 0 → 0.1 (::before #000000 over the #000000 fill: invisible by compositing arithmetic; not pixel-checked)'
    pressed: 'overlay layer opacity 0 → 0.2 (the same #000000 layer: invisible by compositing arithmetic; not pixel-checked)'
    focus: 'outline 2px #000000, offset 2px (authored ring) — measured 2026-09-29'
    states: default captured 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29 on 검색 (Tab 26), never submitted
    use: Career search submit (검색) beside the search field
  career-header-dialog:
    type: dialog
    backgroundColor: '#ffffff'
    textColor: '#000000'
    rounded: 4px
    padding: 8px 0px
    size: 170px x 280px
    typography: 16px / 400 / Pretendard (menu links 170px x 44px, padding 0px 12px)
    shadow: rgba(0,0,0,0.1) 0px 4px 12px 0px
    states: open state captured 2026-07-13 after the 기업 서비스 trigger (dialog-open); the 2026-09-29 probe never clicks, so it was not re-opened
    use: Menu dialog opened from the career header 기업 서비스 control
  career-card-icon-button:
    type: button
    backgroundColor: transparent
    textColor: '#222222'
    padding: 7px
    size: 38px x 41px
    states: default captured 2026-07-13; no text node; not probed
    use: Icon-only button at the top edge of each career posting card; the probe report treats the posting card bookmark control as login-gated, and this button was not probed
  corporate-footer-link:
    type: tab
    backgroundColor: transparent
    textColor: '#4c4e52'
    typography: 12px / 400, line height 24px
    hover: 'fg #999999'
    pressed: 'fg #999999'
    states: default, hover and pressed captured 2026-07-13 on four footer links, identical in both states on all four, so settled rather than mid-transition; keyboard focus not measured
    use: Corporate site (corp.remember.co.kr) footer text link; marketing domain only
fonts:
  roles:
    ui: Pretendard
---

# Design System Inspiration of Remember (리멤버)

## Overview

### Visual Theme & Atmosphere

Remember began with digitising business cards and has since expanded into a professional network that connects career opportunities, recruiting, community, and business relationships. The company describes its mission as connecting working people with opportunities for success; its company history records the 2014 app launch, 2019 recruiting launch, and 2024 company-name change to Remember & Company. On the supplied career-postings surface, that professional focus appears as dense, low-chrome information design: a white field, `#222222` reading text, `#000000` action elements, and narrow 4–6px corners. The separately captured corporate marketing site is deliberately more expressive, with `#fc5d11` display accents; it is not evidence that orange is the career product’s default action color. The official identity guideline likewise reserves black and off-white for the logotype rather than defining a universal application palette.

**Key characteristics:**

- Dense, chromeless career listings rather than elevated cards.
- Career-product action black (`#000000`) and reading foreground (`#222222`).
- Border-led 4px filter controls on a white (`#ffffff`) surface.
- Loaded Pretendard on the career route, backed by Remember-hosted font files.
- A corporate-only orange (`#fc5d11`) display treatment, not a general CTA token.

### Primary tasks

- Search the career postings for a role that fits
- Narrow the posting list with the filter controls
- Compare postings against each other in one dense list
- Read a posting for its qualification and its next action

### Iconography & Imagery

The official identity guide defines a renewed R symbol containing the Remember Square and permits black and off-white logotype colours. It specifies usage, clear-space, and minimum-size rules for the logo, symbol, and app icon. Those brand-asset rules are not component tokens for the captured career web route.

### Overall Personality

On the career surface, Remember is compact, professional, and scan-oriented: white space is functional rather than decorative, corners are restrained, and primary actions are high-contrast. The corporate site adds more expressive editorial scale and orange display accents, but the two surface purposes should not be blended into a single generic system.

### Brand Narrative

Remember’s official company account starts with the business card: not merely paper, but a professional identity exchanged at moments of connection. The company says the service launched in 2014, then expanded from a “national business-card app” into career opportunities, community, and a professional-network direction.

Its stated mission is to connect working people with opportunities and lead them to success. The official timeline records a 2019 recruiting-service launch, a 2024 premium-job-posting launch, and the October 2024 name change to Remember & Company. These are company/history facts, not proof that every corporate page shares the career route’s CSS tokens.

### Principles

1. **Connect people and opportunities.** *UI implication:* make the opportunity, qualification, and next action easy to scan.
2. **Select high-quality, relevant opportunities.** *UI implication:* use dense but legible comparison information instead of decorative marketing cards.
3. **Help professionals be productive.** *UI implication:* keep repeated controls and reading text quiet, consistent, and easy to parse.
4. **Integrate related services.** *UI implication:* preserve surface boundaries; shared branding does not authorise a token from one product purpose to overwrite another.

### Personas

The official guideline’s archetype is an experienced, friendly career expert. The company’s public narrative also names professionals building career records, companies seeking talent, and people creating business connections. These are stakeholder groups from official positioning, not synthetic named user personas or behavioural metrics.

## Colors

### Career product surface

- **Action Black** (`#000000`): observed on the career header’s filled auth control and search submit. This is a career-route observation, not a whole-company rule.
- **White Surface** (`#ffffff`): observed filled header control and dialog surface.
- **Reading Foreground** (`#222222`): repeated career body, list, and filter-control text.
- **Input Surface** (`#f2f2f2`): observed career search field fill.
- **Muted Text** (`#808080`): observed career search input text/placeholder value.
- **Hairline** (`#d4d4d4`): observed 1px border on career filter controls.

### Corporate marketing surface

- **Corporate Orange** (`#fc5d11`): observed corporate-home display-heading color. It remains local to that marketing surface.

### Boundary

The July packet did not establish hover or focus colours; the 2026-09-29 live state probe did, on the career route only. Header product links turn `#808080` on hover, press and keyboard focus; a 2px `::after` bar in `#ff6a0d` marks the current section (a career-route value, distinct from the corporate `#fc5d11`); and three header and search buttons draw an authored `#000000` 2px focus ring. Product error, success, selected-filter, disabled, and authenticated-app colors remain omitted rather than inferred from older captures or adjacent Korean products.

## Typography

### Evidence classes

| Evidence class | Family and boundary |
|---|---|
| Official product-use | No first-party typography guide assigns a general Remember product type role in this pass. |
| Live computed surface-use | **Pretendard** is computed on the career route and is FontFaceSet-backed with six Remember CDN source URLs; it has 1,053 recorded uses across body, controls, cards, headings, input, list items, and dialog content. |
| Official distributed brand asset | The official brand guideline is a logo/identity guide, not a distributed type asset. |
| Declared-only | Inter and several placeholder family declarations occur with zero visible use; they are excluded from `tokens.typography.family`. |
| System / unresolved | Generic `sans-serif` is a system fallback. Founders Grotesk Condensed appears in computed corporate-marketing text but its packet record has no source URL; it remains outside shared machine tokens until its source provenance is corroborated. |

### Captured hierarchy

| Role | Family | Size | Weight | Line Height | Surface boundary |
|---|---|---:|---:|---:|---|
| Career section heading | Pretendard | 20px | 600 | 26px | `career-postings::h2` |
| Career card title | Pretendard | 16px | 400 | 23.2px | `career-postings::h3` |
| Repeated career body/control | Pretendard | 16px | 400 | 23.2px | career list, input, and controls |
| Corporate display heading | Founders Grotesk Condensed Medium | 100px | 400 | 92px | corporate marketing only; source provenance unresolved |

Do not substitute a system font for Pretendard or a named Founders face. The corporate display sample is useful observational context, but not a reusable UI-family token.

## Layout

### Career route

- Repeated list and control text is 16px; captured spacing clusters include 4px, 8px, 12px, 16px, and 24px.
- The representative job item is 162px wide and chromeless. Preserve the content-led list rhythm rather than turning it into a generic elevated card grid.
- The search input reserves 56px on its leading edge; do not generalise that offset to unrelated inputs.

### Corporate route

Corporate marketing typography and large display compositions are a separate surface. Its display treatment is not a layout specification for career search or signed-in product screens.

## Elevation & Depth

The captured career list items and header/search controls record no box shadow. Use border and background contrast only where a selector-backed component above calls for it. No general modal elevation token is promoted from the captured dialog; its own `rgba(0,0,0,0.1) 0px 4px 12px 0px` shadow is recorded on the header menu dialog component only.

## Motion & Easing

The 2026-09-29 probe read `transition: color 0.1s` on the header product links; the other probed controls compute `transition: all 0s` on the element itself. No easing curve or loading motion is promoted. Do not infer a motion scale from the dialog-open interaction or from unrelated product surfaces.

## Components

### Career header controls

Rest values are the July 2026-07-13 capture unless marked. Hover, pressed and keyboard focus were measured on 2026-09-29 with the fixed live state probe (logged out, keyboard walk first, nothing activated); "no change" means no computed change across the control, its ::before/::after, every descendant and 3 ancestor levels.

**Filled Auth Control** (로그인)
- Background: `#000000`
- Text: `#ffffff`
- Radius: 4px
- Padding: 0px
- Font: 14px / 400 / Pretendard
- Use: `career-postings::[data-omd-capture="8"]`; header auth control.
- Hover, pressed and keyboard focus: no change within scope (0 descendants). It has no focus indication.

**White Header Control** (회원가입)
- Background: `#ffffff`
- Text: `#000000`
- Radius: 6px
- Padding: 0px 12px
- Font: 14px / 400 / Pretendard
- Use: `career-postings::[data-omd-capture="9"]`; header control.
- Hover / pressed: a full-size `::before` layer in `#ffffff` goes from opacity 0 to 0.1 / 0.2. It is the fill's own colour, so by compositing arithmetic nothing visible changes; this was not pixel-checked.
- Keyboard focus: an authored `2px solid #000000` outline, offset 2px.

**Outline Dialog Trigger** (기업 서비스)
- Background: transparent
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Radius: 6px
- Padding: 0px 12px
- Font: 14px / 400 / Pretendard
- States: dialog-open observed after this trigger at `career-postings::[data-omd-capture="10"]`.
- Use: Career-postings header control.
- Hover / pressed: the same `::before` layer in `#ffffff`, opacity 0.1 / 0.2. Over the transparent button on the `#000000` header it lightens the button by arithmetic (not pixel-checked).
- Keyboard focus: the same `2px solid #000000` ring, offset 2px. It is black on the black header, so its visibility is doubtful by arithmetic.

**Header product link** (채용공고; probe rest reading, 2026-09-29)
- Transparent, `#ffffff` 16px / 600 Pretendard, padding 4px 8px 0px, 60px tall. A 2px `::after` bar in `#ff6a0d` marks the current section and never changes.
- Hover, pressed and keyboard focus: text `#ffffff` → `#808080` (`transition: color 0.1s`); no outline on focus.

**Header menu dialog**
- Background `#ffffff`, text `#000000`, 4px radius, padding 8px 0px, 170×280px, shadow `rgba(0,0,0,0.1) 0px 4px 12px 0px`; 16px / 400 menu links, 170×44px, padding 0px 12px.
- Use: the dialog opened from 기업 서비스 (July interaction capture). The probe never clicks, so it was not re-opened.

### Career search and filters

**Search Input**
- Background: `#f2f2f2`
- Text: `#808080`
- Radius: 4px
- Padding: 0px 0px 0px 56px
- Font: 16px / 400 / Pretendard
- Use: `career-postings::[data-omd-capture="20"]`.
- Hover, pressed and keyboard focus: no change within scope (0 descendants). No focus indication.

**Search submit** (검색)
- Background `#000000`, visible label `#ffffff` 18px / 400 (the button itself computes `#000000` 14px / 400), 6px radius, padding 0px 12px, 116×52px; `career-postings::[data-omd-capture="21"]`.
- Hover / pressed: a `::before` layer in `#000000`, opacity 0.1 / 0.2. It is the fill's own colour, so it is invisible by compositing arithmetic (not pixel-checked).
- Keyboard focus: `2px solid #000000` outline, offset 2px.

**Filter Control**
- Background: transparent
- Text: `#000000` visible label (the button itself computes `#222222`)
- Border: 1px solid `#d4d4d4`
- Radius: 4px
- Padding: 10px 16px
- Font: 14px / 400 / Pretendard visible label (the button itself computes 16px / 400)
- Use: `career-postings::[data-omd-capture="129"]` through `[data-omd-capture="134"]`; six controls.
- Hover, pressed and keyboard focus (measured on 직무): no change within scope (4 descendants including 1 svg and 1 path). No focus indication.

### Career list

**Job List Item**
- Text: `#222222`
- Radius: 0px
- Padding: 0px
- Font: 16px / 400 / Pretendard; the posting title label is 16px / 600 `#000000`
- Use: `career-postings::li`, representative 162px-wide, 250px-high chromeless job item; no card border, fill, or shadow was captured.
- Hover, pressed and keyboard focus (on the link inside the first curated item): no change within scope (18 descendants including 1 svg, 1 path and 1 img). No focus indication.

**Card icon button**
- Transparent, `#222222`, padding 7px, 38×41px, no text node; `career-postings::[data-omd-capture="89"]`, 100 occurrences at the top edge of the posting cards.
- Default only; not probed. The probe report treats the posting card's bookmark control as login-gated.

### Corporate marketing

**Footer link**
- Transparent, `#4c4e52` 12px / 400, line height 24px.
- Hover and pressed: `#999999`, identical on four links in both states (July capture, `corporate-home` only). Keyboard focus not measured.

---
**Verified:** 2026-07-13

**Tier 1 sources:** https://career.rememberapp.co.kr/job/postings · https://corp.remember.co.kr/ · https://corp.remember.co.kr/company · https://static.rememberapp.co.kr/brand/brand_guideline_logo.pdf

**Tier 2 sources:** https://getdesign.md/remember (attempted; no raw entry retrieved) · https://styles.refero.design/?q=remember (attempted; no raw result retrieved)

**Conflicts unresolved:** none

### Published component roster (32 published, none measured here)

remember-ui publishes **32 components**, read from its own index at `https://dramancompany.github.io/remember-ui/` on
2026-09-19. The groupings are the host's own. Every host in this group serves a shell to a plain
fetch, so the names come from the rendered page in a browser. No value, state or geometry below
is asserted by this reference.

- **BUTTONS** — BaseButton, CustomButton, LinkButton, MoreButton, NewBaseButton, TopButton
- **COMMON** — Chip, Container, Pagination, Spinner
- **CONTROL** — Accordion, BasePopover, BaseTooltip, Checkbox, InfoTooltip, PopoverItem, Radio, Select, Switch
- **ICON** — ProfileAvatar
- **INPUT** — BaseInput, DoubleInput, ImageInput, MaskingInput, Textarea
- **LOGO** — RememberLogo
- **MODAL** — BaseModal, ConfirmModal, DesignedModal, MessageModal, MobileFullModal, ProgressModal

Read from the Storybook sidebar. The seventh sidebar entry, `RDS`, is the documentation canvas
rather than a component group, and is excluded.

### States

| State | Evidence boundary |
|---|---|
| Default header auth | Filled and white baseline controls observed on the career route. |
| Default search | Baseline `#f2f2f2` input observed on the career route. |
| Default filter | Six baseline border controls observed on the career route. |
| Dialog open | One dialog-open interaction observed from the outline header trigger. |
| Hover | Measured 2026-09-29: header product links `#808080`; a `::before` layer at opacity 0.1 on 회원가입, 기업 서비스 and 검색 (visible only on 기업 서비스, by arithmetic); no change within scope on 로그인, the search input, the filter or the job card. |
| Focus | Measured 2026-09-29: an authored `2px solid #000000` ring on 회원가입, 기업 서비스 (doubtful against the black header) and 검색; header product links turn `#808080`; no indication within scope on 로그인, the search input, the filter or the job card. |
| Pressed | Measured 2026-09-29: header product links `#808080`; the `::before` layer at opacity 0.2 on the same three buttons; no change within scope on the other four. |
| Disabled | No disabled state captured. |
| Error | No error state captured. |
| Success | No success state captured. |
| Loading | No loading state captured. |
| Empty | No empty state captured. |

## Do's and Don'ts

### Do

- Keep career lists dense, text-forward, and visually quiet.
- Use `#000000` only for the observed career action contexts; retain `#222222` for repeated reading text.
- Keep observed filter controls border-led with 4px corners.
- Keep corporate orange (`#fc5d11`) scoped to the observed corporate marketing expression.

### Don't

- Treat the corporate site’s Founders display face as a source-proven shared app font.
- Invent selected-filter, error, or disabled colors from an unobserved state, or read the July mid-transition greys on the header links as hover values.
- Add shadows or card fills to chromeless career list items.
- Use a system substitute while labelling it as Pretendard.

## Voice & Tone

The official identity guideline frames the persona as an experienced, friendly career expert and lists confident, positive, agile, polished, and friendly qualities. Use direct, capable language that clarifies an opportunity and its next step; avoid slang, empty urgency, or unsupported promises.

| Do | Don't |
|---|---|
| Describe the opportunity and the user’s next action plainly. | Inflate a listing with vague superlatives. |
| Sound professional and approachable. | Sound bureaucratic or overly casual. |
| Be positive without hiding relevant constraints. | Use pressure language to manufacture urgency. |

## Governance

### Known Gaps

- **Contrast, `search-input`.** Text `#808080` on `#f2f2f2` measures 3.53:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `filter-control`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `career-card-icon-button`.** Text `#222222` on `#00000000` measures 1.32:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `corporate-footer-link`.** Text `#4c4e52` on `#00000000` measures 2.52:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

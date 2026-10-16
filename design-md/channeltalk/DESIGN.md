---
name: Channel Talk
colors:
  primary: '#242428'
  canvas: '#ffffff'
  surface: '#f7f6f3'
  foreground: '#000000'
  secondary: '#716f6d'
  dark-surface: '#3a3530'
  hairline: '#e4e4e5'
  on-primary: '#ffffff'
typography:
  marketing-heading:
    fontSize: 44px
    fontWeight: 600
    lineHeight: 1.41
    letterSpacing: '-0.88px'
    use: Large current marketing headings
  marketing-body:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.56
    letterSpacing: '-0.18px'
    use: Current marketing body and action copy
  marketing-tab:
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.56
    letterSpacing: '-0.16px'
    use: Interactive marketing category tabs
  docs-body:
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.59
    letterSpacing: '-0.1px'
    use: English product documentation body
rounded:
  control: 6px
  utility: 8px
  card: 35px
  full: 9999px
spacing:
  xs: 4
  sm: 6
  md: 10
  lg: 20
  xl: 30
components:
  marketing-primary:
    type: button
    backgroundColor: '#242428'
    textColor: '#ffffff'
    rounded: 9999px
    padding: 10px 22px
    typography: 18px / 400
    hover: opacity 1 → 0.85 (bg unchanged)
    pressed: opacity 1 → 0.85 (bg unchanged)
    focus: no focus indication in the compared scope (self, its ::before/::after, 1 descendant, 3 ancestor levels) — measured 2026-09-29
    states: 'default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29 on the hero 무료로 시작하기 button (156px x 48px, Tab 6), never activated; hover equals pressed; the #3a3a3f promoted here on 2026-09-17 belongs to the sticky-header link (header-cta), whose 43px height and 9px 14px padding that re-verify reproduced'
    use: Primary signup and conversion action on current KR/US marketing
    height: 48px
  marketing-outline:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    border: '1px solid #242428'
    rounded: 9999px
    padding: 10px 22px
    typography: 18px / 400
    hover: bg rgba(0, 0, 0, 0.04)
    pressed: bg rgba(0, 0, 0, 0.04)
    focus: no focus indication in the compared scope (self, its ::before/::after, 1 descendant, 3 ancestor levels) — measured 2026-09-29
    states: default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29 on the first SectionHeader 자세히 보기 pill (127px x 50px, Tab 13); hover equals pressed; the computed radius is 1368.71px, a pill
    use: Secondary marketing conversion action
  marketing-card:
    type: card
    backgroundColor: '#f7f6f3'
    border: '1px solid #e4e4e5'
    rounded: 35px
    padding: 30px 35px
    use: Current KR/US marketing information card
  marketing-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#716f6d'
    rounded: 9999px
    padding: 6px 35px
    typography: 16px / 600
    selected: 'fg #ffffff (the dark pill behind the label is drawn by another element, not compared)'
    hover: no change in the compared scope (self, its ::before/::after, 1 descendant, 3 ancestor levels) on both 패션 and the selected 라이프스타일 — measured 2026-09-29
    pressed: no change in the compared scope (same scope, both tabs) — measured 2026-09-29
    focus: no focus indication in the compared scope (same scope) on the selected tab (Tab 14) — measured 2026-09-29
    states: 'selected and tab-selected observed in six safe expansions 2026-07-12; hover and pressed measured 2026-09-29 on 패션 and 라이프스타일; keyboard focus measured on the selected tab only: the tablist uses a roving tabindex, 패션 is tabIndex -1 and was not reached by Tab, so its focus is unmeasured'
    use: Interactive category switcher on current marketing (KR home; the US page read 6px 20px padding on 2026-07-12)
  docs-icon-button:
    type: button
    backgroundColor: transparent
    textColor: rgba(0,0,0,0.85)
    rounded: 6px
    hover: bg rgba(28, 28, 28, 0.08); fg rgba(0, 0, 0, 0.6) → rgba(0, 0, 0, 0.85) on the svg icon
    pressed: bg rgba(28, 28, 28, 0.08); fg rgba(0, 0, 0, 0.6) → rgba(0, 0, 0, 0.85) on the svg icon
    focus: outline 3px rgba(97, 87, 234, 0.3), offset 0 (authored ring) — measured 2026-09-29
    states: default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29 on the first sidebar chevron (20px x 20px, Tab 5); pressed equals hover; the July pressed frames were alpha-0 transition frames with no value
    use: Compact icon action in product documentation
  header-cta:
    type: button
    backgroundColor: '#242428'
    textColor: '#ffffff'
    rounded: 999px
    padding: 9px 14px
    size: 127px x 43px
    typography: 16px / 600
    hover: 'bg #3a3a3f'
    pressed: 'bg #3a3a3f'
    states: 'default captured 2026-07-12 on home, us and the rebrand page; hover and pressed measured 2026-09-29, the same #3a3a3f the 2026-09-17 re-verify read on this link; keyboard focus unmeasured: the link has no href attribute, so Tab never reaches it'
    use: Sticky-header 무료로 시작하기 link at home::[data-omd-capture="7"]
  nav-link:
    type: tab
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 999px
    padding: 6px 12px
    height: 37px
    typography: 16px / 400
    hover: bg rgba(36, 36, 40, 0.05)
    pressed: bg rgba(36, 36, 40, 0.05)
    focus: 'outline 2px #242428, offset 2px (authored ring); bg rgba(36, 36, 40, 0.05) — measured 2026-09-29'
    states: default captured 2026-07-12 on five header triggers; hover, pressed and keyboard focus measured 2026-09-29 on 가격 안내 (Tab 4), the only one with an href; the other four are anchors without href that Tab skips, so their focus is unmeasured
    use: Header navigation trigger at home::[data-omd-capture="1"] to [data-omd-capture="5"]
  header-login-link:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 999px
    padding: 6px 12px
    height: 37px
    typography: 16px / 400
    states: 'default captured 2026-07-12 on home, us and the rebrand page; not probed: on 2026-09-29 it had no href attribute, so Tab never reaches it'
    use: Header 로그인 control at home::[data-omd-capture="6"]
  marketing-band-cta:
    type: button
    backgroundColor: '#242428'
    textColor: '#ffffff'
    rounded: 1368.71px
    padding: 10px 22px
    size: 125px x 48px
    typography: 18px / 400
    states: default captured 2026-07-12 (six occurrences on home and us); the computed radius makes it a pill; not probed
    use: Dark 자세히 보기 pill in the section intro band at home::[data-omd-capture="9"]
  customer-case-carousel-nav:
    type: button
    backgroundColor: rgba(255, 255, 255, 0.2)
    textColor: '#ffffff'
    rounded: 9999px
    padding: 0px
    size: 48px x 48px
    states: default captured 2026-07-12 (four occurrences on home and us); not probed
    use: Translucent carousel arrow over the dark customer-case media at home::[data-omd-capture="23"]
  demo-input:
    type: input
    backgroundColor: transparent
    textColor: '#0a0b0b'
    padding: 0px 4px
    size: 428px x 27px
    typography: 17px / 400
    states: default captured 2026-07-12 on home and us; not probed; its submit button was captured disabled, so no value is taken from it
    use: Marketing demo prompt input (role=combobox) at home::[data-omd-capture="10"]
  docs-search-button:
    type: button
    backgroundColor: rgba(0, 0, 0, 0.05)
    textColor: rgba(0, 0, 0, 0.85)
    rounded: 12px
    padding: 11px 14px
    size: 250px x 44px
    states: default captured 2026-07-12 on both documentation pages; not probed
    use: Documentation header search trigger at surface-3::[data-omd-capture="1"]
fonts:
  roles:
    ui: Pretendard
    marketing: Pretendard
    docs: Inter
---

# Design System Inspiration of Channel Talk

## Overview

### Visual Theme & Atmosphere

Channel Talk is a customer-service platform that joins live chat, team inbox, calls, marketing, workflows, and AI assistance around one ongoing customer relationship. Its public identity has evolved from a bright SaaS-accent story toward a warmer editorial system: current Korean and US pages pair black type with cream `#f7f6f3`, dark charcoal `#242428` conversion controls, generous photography, and rounded 35px information cards. The result feels conversational and human despite the product's operational depth. Official rebrand writing explains that this warmth is intentional—Channel Talk wanted a clearer, more authentic expression of its customer-first culture rather than a generic software identity.

The product-documentation domain is visually related but technically separate. Marketing loads Pretendard and uses 18px reading copy, 44px sectional headings, and full-pill actions. English documentation loads an Inter alias and uses a tighter 17px/27px reading scale with compact 6–8px controls. This reference does not merge those two surfaces into a fictional universal stack. Bezier remains valuable official evidence that Channel maintains a real product design system, but a Bezier color does not become a current marketing token unless the inspected surface confirms it.

**Key Characteristics:**
- Warm cream `#f7f6f3` marketing surfaces with black type and `#242428` primary actions
- Pretendard on current KR/US marketing; loaded Inter alias on English product documentation
- 35px editorial cards and full-pill conversion controls
- Selected marketing tabs captured through six safe interaction expansions
- Measured 2026-09-29: the hero CTA fades to opacity 0.85 on hover and press while the sticky-header CTA darkens to `#3a3a3f`; only the header nav link and the docs chevron draw a focus ring
- Public Bezier implementation retained as product-system context, not substituted for uninspected app UI

### Primary tasks

- Answer a customer in live chat from the team inbox
- Review the conversations a support team has handled
- Configure a customer channel using the product documentation
- Judge whether the platform fits an ongoing customer workflow

### Brand Narrative

Channel Talk presents customer communication as a durable operating capability rather than a support widget. Official rebrand material describes the visual change as a way to express the company's identity and culture more honestly, while official product updates show the platform continuing to combine messaging operations with AI-assisted service. The public Bezier repository is a separate but complementary signal: Channel has invested in reusable product primitives, even though this reference does not use that repository to fabricate current private-app values. Across these sources, the company consistently frames conversation as the place where support, sales, and long-term customer understanding meet. The visual move toward warmer editorial surfaces supports that human relationship, while the operational product story remains structured around inboxes, configuration, documentation, and AI-assisted work. Reuse should therefore strengthen continuity between people and tools, not flatten every surface into one marketing style.

### Principles

1. **The customer is the answer.** Start from a real conversation or task rather than feature spectacle.
2. **Warmth supports operational clarity.** Editorial cream, photography, and rounded cards humanize a complex service platform.
3. **Evidence domains stay separate.** Marketing, documentation, Bezier, and private product surfaces cannot silently overwrite one another.
4. **AI should remove routine work.** Describe assistance in terms of what people can focus on next, without inventing outcomes.

### Personas

Public product material supports task contexts, not verified biographical personas:
- A support lead reviewing conversations and adopting current AI-assisted operations.
- A frontline agent using product documentation to configure or troubleshoot a customer channel.
- A growth or commerce operator evaluating whether Channel Talk fits an ongoing customer relationship workflow.

Project-specific names, ages, company sizes, locations, and quantitative goals are intentionally unspecified and must come from the product brief rather than this public reference.

## Colors

### Current marketing roles
- **Primary / conversion** (`#242428`): repeated filled signup and conversion controls.
- **Canvas** (`#ffffff`): page and neutral content canvas.
- **Warm surface** (`#f7f6f3`): repeated card and section background.
- **Foreground** (`#000000`): dominant marketing and documentation text.
- **Secondary** (`#716f6d`): marketing supporting copy and inactive tab labels.
- **Dark editorial surface** (`#3a3530`): repeated customer-case media field.
- **Hairline** (`#e4e4e5`): current 1px marketing-card border.

Bezier's historical Cobalt `#329BE7` is not promoted as a universal current primary: it was not the conversion color on the five captured public surfaces. Authenticated Inbox status colors remain unresolved.

## Typography

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | Bezier is an official product design-system implementation, but the inspected repository context is not treated as proof for every current private app surface. |
| Live surface-use | Pretendard loaded/high with 484 visible uses on marketing; Inter aliases loaded/high with 581 combined visible uses on product docs. |
| Official distributed asset | No Channel-exclusive redistributable brand font is promoted. |
| Declared-only | NotoSansKR, Poppins, fallback faces, and unused locale declarations remain metadata only. |
| Unresolved | Authenticated app overrides and unobserved locale behavior remain unresolved. |

`NotoSansJP` was loaded for one visible body use and remains a surface-local observation, not the universal family. No BildV5 declaration or visible use appeared in the fresh capture, so it is omitted.

### Current observed hierarchy

| Role | Surface | Size | Weight | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Section heading | Marketing | 44px | 600 | 62px | -0.88px |
| Card heading | Marketing | 25px | 600 | 32px | -0.5px |
| Body / CTA | Marketing | 18px | 400 | 28px | -0.18px |
| Category tab | Marketing | 16px | 600 | 25px | -0.16px |
| Article heading | Docs | 24px | 700 | 34px | -0.5px |
| Article body | Docs | 17px | 400 | 27px | -0.1px |

## Layout

- Marketing uses wide centered sections with strong vertical breaks and generous 30–45px internal spacing.
- Editorial cards use large 35px corners; documentation controls remain compact at 6–8px.
- Do not transfer marketing's full-pill geometry to uninspected product controls.
- Preserve the separation between marketing composition and documentation density.

### Responsive Behavior

The public marketing system retains full-pill controls and rounded editorial cards while reducing horizontal section padding and tab padding on narrower layouts. Exact private-product breakpoints and mobile-native behavior are unresolved and should not be inferred from the marketing site.

## Elevation & Depth

Current promoted surfaces are flat. Marketing cards use background, border, radius, and photography for separation; no reusable shadow token was established. Documentation overlays and authenticated product elevation remain unresolved.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.flat`: `none`

## Motion & Easing

No reusable current duration or easing token was established by this capture. The six tab expansions prove state change, not a universal animation specification; motion values remain absent. The 2026-09-29 probe read transition declarations on the marketing and documentation controls; none is promoted as a motion token.

---

**Verified:** 2026-07-12 (omd:migrate)
**Tier 1 sources:** https://channel.io/kr ; https://channel.io/us ; https://docs.channel.io/updates/en/articles/Notice-Channel-Talk-Major-Updates--b3d45997 ; https://docs.channel.io/help/en/articles/94f34984 ; https://channel.io/kr/blog/articles/rebranding-channeltalk-3aff8113 ; https://github.com/channel-io/bezier-react
**Tier 2 attempts:** getdesign.md/channeltalk and styles.refero.design search; unavailable as positive evidence
**Conflicts unresolved:** none

## Components

### Current verified components

Rest values are the July 2026-07-12 capture unless marked. Hover, pressed and keyboard focus were measured on 2026-09-29 with the fixed live state probe (logged out, keyboard walk first, nothing activated); "no change" means no computed change across the control, its ::before/::after, every descendant and 3 ancestor levels, and nothing wider.

#### Marketing primary action
- `#242428` background, white label, full-pill radius
- 10px × 22px padding; Pretendard 18px/400/28px
- Hover and pressed (2026-09-29): opacity 1 → 0.85; the background stays `#242428`. The `#3a3a3f` darkening belongs to the header link below
- Keyboard focus: no change within scope (1 descendant, 3 ancestor levels)

#### Marketing outline action
- Transparent background, black label, 1px `#242428` border
- Same full-pill geometry and type as the primary action
- Hover and pressed (2026-09-29): background `rgba(0, 0, 0, 0.04)`; keyboard focus: no change within scope

#### Marketing information card
- `#f7f6f3` surface, 1px `#e4e4e5` border, 35px radius
- 30px × 35px padding, with 10px internal gap in the captured variant
- July values only: no interactive element on the 2026-09-29 home matches it, so it was not probed

#### Marketing category tab
- Transparent surface, `#716f6d` label, full-pill hit area
- 6px × 35px padding on the KR home (July and 2026-09-29); the US page read 6px × 20px in July; Pretendard 16px/600/25px
- Selected state was observed in six safe tab expansions across KR/US pages; the selected label is `#ffffff`, and the dark pill behind it is drawn by another element
- Hover and pressed (2026-09-29): no change within scope on an unselected and the selected tab
- Keyboard focus: no change within scope on the selected tab; the tablist uses a roving tabindex, so the unselected tabs (tabIndex -1) are not reached by Tab and their focus is unmeasured

#### Documentation icon action
- Transparent compact control with 6px radius
- Loaded Inter alias; 20×20px
- Hover and pressed (2026-09-29): background `rgba(28, 28, 28, 0.08)` and the icon `rgba(0, 0, 0, 0.6)` → `rgba(0, 0, 0, 0.85)`; its parent sidebar item takes `rgba(0, 0, 0, 0.05)` at the same time
- Keyboard focus: a 3px `rgba(97, 87, 234, 0.3)` outline, offset 0

#### Header CTA link
- `#242428` background, `#ffffff` label, 999px pill radius
- 9px × 14px padding, 127×43px; Pretendard 16px/600
- Hover and pressed (2026-09-29): background `#3a3a3f`
- Keyboard focus: unmeasured. The link has no href attribute, so Tab never reaches it

#### Header navigation link
- Transparent, `#000000` label, 999px radius, 6px × 12px padding, 37px tall; Pretendard 16px/400
- Hover and pressed (2026-09-29, on 가격 안내): background `rgba(36, 36, 40, 0.05)`
- Keyboard focus: a 2px `#242428` outline, offset 2px, over the same background. The other four triggers are anchors without href that Tab skips; their focus is unmeasured

#### Header 로그인
- Transparent, `#000000` label, 999px radius, 6px × 12px padding, 37px tall; Pretendard 16px/400
- Default only; not probed. On 2026-09-29 it had no href attribute

#### Section band CTA
- `#242428` background, `#ffffff` label, pill (computed radius 1368.71px)
- 10px × 22px padding, 125×48px; Pretendard 18px/400; six July occurrences
- Default only; not probed

#### Customer-case carousel arrow
- `rgba(255, 255, 255, 0.2)` over the dark media, `#ffffff` icon colour, 9999px radius, 48×48px
- Default only; not probed

#### Demo prompt input
- Transparent, `#0a0b0b` text, 0px × 4px padding, 428×27px; Pretendard 17px/400; `role=combobox`
- Default only; not probed. Its submit button was captured disabled, so it gives no rest value

#### Documentation search trigger
- `rgba(0, 0, 0, 0.05)` background, `rgba(0, 0, 0, 0.85)` text, 12px radius, 11px × 14px padding, 250×44px
- Default only; not probed

Dialogs, toasts, authenticated inbox rows, and error/success patterns are not promoted because current inspectable evidence did not establish them at the required boundary. The Channel Talk messenger widget is excluded.

### Published component roster (60 not measured here)

Bezier publishes **60 components** from `@channel.io/bezier-react`, enumerated by that package's
own public export index (`packages/bezier-react/src/index.ts`, read 2026-09-19). The repository
carries 71 directories under `src/components/`, but five of them — `AlphaTokenProvider`,
`BetaTokenProvider`, `TokenProvider`, `BaseButton`, `BaseTagBadge` — are never exported, so the
package does not publish them. Of the 66 entries the index does export, six are providers and
render utilities rather than components — `AppProvider`, `ThemeProvider`, `FeatureProvider`,
`WindowProvider`, `AutoFocus`, `VisuallyHidden` — and are excluded here. That leaves 60.

None of the 60 is measured in this reference. The stylings above were captured from
`channel.io/kr`, `channel.io/us`, and `docs.channel.io` — marketing and product-documentation
surfaces, a different evidence domain from the Bezier package, as §1 and §3 already set out. They
are not a subset of the list below, and no value, state, or geometry is asserted for any name in
it.

Published without either prefix (44): Avatar, AvatarGroup, Badge, Banner, Box, Button, ButtonGroup, Center, CheckableAvatar, Checkbox, ConfirmModal, Divider, Emoji, FormControl, FormGroup, FormHelperText, FormLabel, Help, Icon, KeyValueItem, ListItem, Modal, NavGroup, NavItem, OutlineItem, Overlay, ProgressBar, RadioGroup, SectionLabel, SegmentedControl, Select, Slider, SmoothCornersBox, Spinner, Stack, Status, Switch, Tabs, Tag, Text, TextArea, TextField, Toast, Tooltip

Alpha-prefixed (13): AlphaAvatar, AlphaAvatarGroup, AlphaButton, AlphaDialogPrimitive, AlphaFloatingButton, AlphaFloatingIconButton, AlphaIconButton, AlphaLoader, AlphaStatusBadge, AlphaToggleButton, AlphaToggleButtonGroup, AlphaToggleEmojiButtonGroup, AlphaTooltipPrimitive

Legacy-prefixed and deprecated (3): LegacyIcon, LegacyStack, LegacyTooltip

The three-way split is the repository's own, not a grouping added here. Bezier's changelog for
2.0.1 records "Remove the `/alpha` directory and add the `Alpha` prefix to alpha components"
(PR #2140, `https://github.com/channel-io/bezier-react/blob/main/packages/bezier-react/CHANGELOG.md`),
so the prefix is how the package marks its alpha track, in the repository's own words. The three
`Legacy*` entries are deprecated by the repository itself: `LegacyIcon` and `LegacyTooltip` carry
`@deprecated` in source, and `LegacyStack`'s own documentation page warns that it "is no longer
supported for updates and may be removed in the next major version." Both tracks are published;
neither should be read as the package's current recommended surface.

### States

The July capture safely observed the marketing tab's selected state; its documentation "pressed" frames were transition frames with no value. The 2026-09-29 live state probe measured hover, pressed and keyboard focus on five controls — the hero CTA (opacity 0.85; no focus change), the outline pill (`rgba(0, 0, 0, 0.04)`; no focus change), the selected customer-case tab (no change in any state), the 가격 안내 nav link (`rgba(36, 36, 40, 0.05)`; a 2px `#242428` outline) and the docs chevron (`rgba(28, 28, 28, 0.08)`; a 3px `rgba(97, 87, 234, 0.3)` outline) — and hover and pressed on two more: the header CTA (`#3a3a3f`) and the unselected 패션 tab (no change). Their keyboard focus is unmeasured because Tab never reaches them. No canonical empty, loading, error, success, disabled, or authenticated Inbox state is promoted.

## Do's and Don'ts

### Do
- Use current surface-local evidence and label marketing versus documentation roles.
- Keep warm cream, charcoal actions, and editorial card geometry together on marketing surfaces.
- Preserve Bezier as official system history and implementation context.

### Don't
- Do not call Cobalt the universal current primary without current product evidence.
- Do not substitute a system font, BildV5, or Noto declaration for the loaded surface family.
- Do not generate Inbox components or semantic states from generic SaaS conventions.
- Do not give the hero CTA the header link's `#3a3a3f` hover; the hero fades to opacity 0.85.

## Voice & Tone

Official Channel Talk writing centers customers, conversations, and practical operational improvement. The tone is direct and optimistic rather than ceremonial: explain what a team can do, why it improves a customer relationship, and where AI removes routine work. Product updates should name the affected workflow, the person who benefits, and the next available action. Support guidance should stay calm and procedural, while brand stories may be warmer and more reflective. Avoid unsupported performance numbers, excessive futurism, and generic “all-in-one revolution” language.

## Agent Prompt Guide

> Build a warm, editorial customer-conversation surface using a white and cream canvas, black text, charcoal full-pill conversion actions, Pretendard marketing typography, and 35px bordered cards. Use the Inter documentation scale only for documentation-like surfaces. Do not add Cobalt product controls, inbox states, product inputs, or dialogs unless a current product source is supplied.

## Governance

### Known Gaps

- **Contrast, `marketing-outline`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `marketing-tab`.** Text `#716f6d` on `#00000000` measures 4.20:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `docs-icon-button`.** Text `#000000d9` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `nav-link`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `header-login-link`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `customer-case-carousel-nav`.** Text `#ffffff` on `#ffffff33` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `demo-input`.** Text `#0a0b0b` on `#00000000` measures 1.07:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `docs-search-button`.** Text `#000000d9` on `#0000000d` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

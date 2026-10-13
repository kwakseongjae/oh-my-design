---
name: マイナビ
colors:
  body: '#323746'
  heading: '#000000'
  corporate-heading: '#0071bb'
  tab-fill: '#dddddd'
  info-surface: '#e7f6fd'
typography:
  body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.75
    use: Observed public corporate-home body baseline only.
  display:
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.75
    use: Observed service-directory and corporate-information page title only.
rounded:
  tab: 4px
spacing:
  list-indent: 39
  tab-y: 2
  tab-x: 3
components:
  service-filter-tab:
    type: tab
    backgroundColor: '#dddddd'
    textColor: '#000000'
    rounded: 4px
    padding: 2px 3px
    height: 38px
    states: Default static baseline observed; the supplied capture records 0 interactions and no changed tab state.
    use: Service-directory filter tab at surface-2::[data-omd-capture="14"] (class tab-show-item).
fonts:
  roles:
    display: Noto Sans JP
---

# Design System Inspiration of マイナビ

## Overview

### Visual Theme & Atmosphere

マイナビ is a Japanese information and service company that supports people across work, learning, and everyday life: its public company material names employment, career change, part-time work, recruitment, and media among those domains. The corporate web presence is restrained and information-led. The supplied 2026-07-13 capture repeats a deep blue-grey `#323746` for ordinary reading text, leaves large areas unfilled, and uses concise blue `#0071BB` section emphasis rather than a broad decorative palette. The company’s own history records the 2007 unification of its job-information portal under the Mynavi brand and the 2011 company-name change from Mainichi Communications, while its current leadership message describes an evolution toward a social innovator that co-creates the future with people and technology. That long-running expansion makes the public site feel like a directory for a many-service group, not evidence for a single logged-in product interface. [Company](https://www.mynavi.jp/company/) · [History](https://www.mynavi.jp/company/history/) · [Top message](https://www.mynavi.jp/company/message/)

**Key characteristics:**

- Repeated public body ink `#323746`, with isolated black page-title and blue corporate-heading roles
- Flat, square-to-small-radius public structures; the captured tab is `4px` and all promoted samples have no shadow
- A loaded `Noto Sans JP` title family on two page titles, separate from the unresolved general system stack
- Three public source domains—corporate home, service directory, and company information—kept distinct from unobserved service flows
- The logo’s custom lettering is described in a first-party Mynavi News feature; it is brand-asset context, not a reusable UI font token

### Primary tasks

- Find which Mynavi service covers a work, learning, or everyday need
- Compare job, career-change, and part-time-work routes before choosing one
- Read the company's history, purpose, and group direction
- Find recruitment or information-service support as an employer

### Brand Narrative

Mynavi’s public history places the company’s roots in publishing and records the launch of employment information services before the later unification of its job-information portal under the Mynavi brand in 2007. The 2011 corporate rename extended that unification beyond the portal into the company identity. [History](https://www.mynavi.jp/company/history/)

Today, the company describes its work as supporting many forms of “me” across work, learning, and life. Its public purpose is to engage with each person’s possibilities and make a world where the future can be seen; its current top message frames the direction as evolving into a social innovator that co-creates the future through people and technology. [Company](https://www.mynavi.jp/company/) · [Purpose](https://www.mynavi.jp/recruit/career/company/purpose/) · [Top message](https://www.mynavi.jp/company/message/)

For interface work, that is a narrative constraint rather than a token source: show paths and information without claiming a single, universal destination for every visitor.

### Principles

1. **Meet the individual possibility.** Present choices as paths to explore, not prescriptions.
   *UI implication:* use descriptive labels and preserve comparison or return paths where the relevant product supports them.
2. **Make the future visible.** Explain what a service helps a person do before asking for a decision.
   *UI implication:* pair action labels with concise context rather than relying on generic “continue” language.
3. **Respect diverse values.** The official values include gratitude, respect, and acceptance of diverse viewpoints.
   *UI implication:* avoid exclusionary defaults and keep language considerate of different situations.
4. **Connect people and society.** The company values the ability to connect and involve people.
   *UI implication:* surface the relationship between a service, its audience, and the next useful resource when that relationship is evidenced.

### Personas

These are stakeholder archetypes derived only from Mynavi’s publicly named service areas; they are not research personas or claims about actual users.

- **Career explorer:** A person comparing job, career-change, or part-time-work information. They need clear distinctions between service routes and enough context to choose a next step.
- **Learner or future applicant:** A person navigating education and future-oriented information. They need calm, legible explanations rather than a presumed decision.
- **Employer or organisation contact:** A person looking for recruitment or information-service support. They need service scope and a direct route to the relevant corporate contact.
- **Corporate-information reader:** A person seeking the company’s history, purpose, or group direction. They need durable narrative context separate from consumer-service claims.

## Colors

### Selector-backed public values

- **Body ink** (`#323746`): repeated on the corporate-home body and public list text.
- **Page-title ink** (`#000000`): observed on service-directory and company-information `h1` titles.
- **Corporate heading blue** (`#0071BB`): observed on a company-information `h2`; it is a local heading value, not an asserted all-product action color.
- **Service tab fill** (`#DDDDDD`): observed on the service-directory tab selector.
- **Information surface** (`#E7F6FD`): observed on the `surface-3::li.txtBox` company-information block.

### Boundary

The supplied capture also includes orange and green one-pixel heading rules, a dark `#3D3D3D` link-shaped control, and cookie-consent controls. They are not promoted into a shared palette: the measured samples do not establish their role beyond their local selectors, and the consent control is not product evidence.

## Typography

### Evidence classes

- **Live computed surface-use:** `Noto Sans JP` is loaded with high confidence and is the computed family on two captured `h1` page titles, each `40px / 400 / 70px`. This limited, selector-backed title role is the only font-family token in this reference.
- **Live computed system-stack use:** the capture records 819 uses of `游ゴシック体, Yu Gothic, YuGothic, …, sans-serif` across body text, lists, tabs, and controls. It has no matching loaded FontFace or source URL in the artifact, so it remains unresolved and is not a brand-font token or a substitute for `Noto Sans JP`.
- **Official distributed brand asset:** a first-party Mynavi News feature says the logo lettering was created from scratch for its renewal and discusses its rounded, connected character. It does not distribute a webfont, publish a licence, or establish a UI-family role.
- **Declared-only:** `swiper-icons` is declared in the artifact but has no observed visible use; it is not a typography token.
- **Official product-use:** no first-party announcement reviewed in this pass identifies a specific font as the product or app family. No such promotion is made.

### Observed hierarchy

| Role | Size | Weight | Line height | Boundary |
|---|---:|---:|---:|---|
| Public body baseline | 14px | 400 | 24.5px | Corporate-home body sample; family unresolved. |
| Public page title | 40px | 400 | 70px | Service-directory and company-information `h1`; loaded `Noto Sans JP`. |
| Company blue section heading | 34px | 500 | 59.5px | Company-information `h2`; family unresolved. |

## Layout

The supplied capture is desktop-only at 1440×900. It supports a `39px` left inset on one corporate-home list-item pattern and a compact `2px 3px` service-tab padding; those values are retained as selector-local machine tokens, not extrapolated into a spacing scale. No authenticated-app grid, breakpoint, mobile navigation, or form layout is established by the three public routes.

## Elevation & Depth

The promoted service tab and the inspected body/title samples all compute to `box-shadow: none`. This supports a flat public-surface observation only. It does not establish card elevation, dialog layering, popover shadow, or a z-index system.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.flat`: `none`

## Motion & Easing

No duration, easing curve, transition property, loading animation, or interaction motion state is present in the supplied evidence. This reference deliberately provides no motion token or animation prescription. Any service-specific motion should be added only after selector-backed, relevant-surface evidence is collected.

## Components

### Tabs

**Service filter tab — observed default**
- Background: #DDDDDD
- Text: #000000
- Radius: 4px
- Padding: 2px 3px
- Height: 38px
- Use: `surface-2::[data-omd-capture="14"]`, class `tab-show-item`, on the public service directory.

The artifact records zero interactions and zero observed states. No hover, focus, pressed, selected, disabled, validation, toast, dialog, or mobile variant is claimed. The static default geometry remains useful and is retained.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.mynavi.jp/; https://www.mynavi.jp/service/; https://www.mynavi.jp/company/; https://www.mynavi.jp/company/history/; https://www.mynavi.jp/recruit/career/company/purpose/; https://www.mynavi.jp/company/message/; https://news.mynavi.jp/article/font_quiz-2/
**Tier 2 sources:** https://getdesign.md/mynavi (attempted; built-in web open returned no usable record); https://styles.refero.design/?q=mynavi (attempted; built-in web open returned no usable record)
**Conflicts unresolved:** none

### Component Inventory & Coverage

The supplied evidence preflight contains three public surfaces, coverage score 66, 30 component variants, and 0 interaction records. The collector classifies many repeated public rows as `listItem`, and it identifies a selector-backed `tab-show-item` anchor on the service directory. Only the latter is promoted because it carries a static fill, foreground, radius, padding, and height at one exact selector. Rows, links, buttons, and third-party consent controls without a narrower role boundary remain raw evidence rather than inferred components.

### States

The supplied capture does not verify product state copy or visual state treatments. The following implementation prompts are illustrative, not Mynavi facts, and should be replaced with source-backed product copy when a specific service surface is available.

| Category | Illustrative implementation prompt |
|---|---|
| Empty | Explain what is absent and name a useful next route. |
| Loading | Keep the current context visible while content is being prepared. |
| Error — retrieval | Say what could not be loaded and offer a retry when supported. |
| Error — input | Identify the field or condition that needs attention without blame. |
| Error — access | Explain the access boundary and name an available alternative. |
| Success | Confirm the completed action and state the next available step. |
| Skeleton | Reserve the same content hierarchy without inventing a branded shimmer treatment. |
| Disabled | Explain the condition that enables the action where the product supports it. |
| No results | Preserve the search or filter context and offer an adjustment path. |
| Offline | State the connection limitation and preserve any safely available information. |

## Do's and Don'ts

### Do

- Keep `#323746` as the observed public reading color when reproducing these corporate pages.
- Use `Noto Sans JP` only for the captured `40px` page-title role when its webfont is available.
- Keep the `#DDDDDD` tab’s 4px radius and 38px measured height tied to the service-directory context.
- Treat the corporate, service-directory, and company-information pages as separate public source domains.

### Don't

- Do not label the unresolved Yu Gothic/system stack as a Mynavi proprietary font or silently substitute it for `Noto Sans JP`.
- Do not turn the company-heading `#0071BB` into a universal product CTA or semantic blue.
- Do not infer tab selection, hover, focus, disabled, error, or responsive states from the default-only capture.
- Do not treat cookie-consent controls or an adjacent link-shaped element as a verified Mynavi component system.

## Voice & Tone

The official purpose and company material suggest a register that is individual-facing, respectful, and future-oriented: it speaks about meeting each person’s possibilities while explaining a broad group of services. This is contextual guidance, not a published UI copy system.

| Use | Recommended register | Avoid |
|---|---|---|
| Career or life guidance | Clear, supportive, non-presumptive | Assuming one correct life path |
| Service directories | Direct labels and useful categorisation | Vague, promotional superlatives |
| Corporate progress | Specific about change and collaboration | Treating technology as the only actor |

Illustrative, not verified live copy: “Find the service that fits your next step.” · “Explore options at your own pace.” · “Let’s make the next possibility visible.”

## Governance

### Source Domains & Verification Boundary

| Domain | Source | What this reference uses | What it does not establish |
|---|---|---|---|
| Corporate public home | `https://www.mynavi.jp/` | Body ink, body metrics, one list inset | A career-search or account-flow UI. |
| Public service directory | `https://www.mynavi.jp/service/` | Loaded title font, page title, measured static tab | A selected/interactive tab state or a shared product component library. |
| Corporate information | `https://www.mynavi.jp/company/` | Blue section heading and pale information surface | A global product palette. |
| Official company/history/purpose material | Mynavi first-party pages | Brand history, current direction, purpose, values | Computed visual tokens. |
| Mynavi News logo feature | `news.mynavi.jp` | Logo-lettering context | A downloadable or licensed UI font. |

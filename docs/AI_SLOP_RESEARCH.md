# AI slop research and product contract

Updated: 2026-07-20

This note records the research boundary behind `omd:humanize`,
`omd:slop-audit`, and the public anti-slop documentation. It is a product
definition, not an AI-authorship detector.

## Working definition

oh-my-design calls an output **AI slop** when product purpose, content, and
brand evidence have been replaced by a cluster of reusable defaults, causing
unrelated products to converge on the same language or interface.

A purple accent, a card, a gradient, passive voice, or a three-item list is
not enough to fail. A finding needs all of the following:

1. a repeated or overlapping pattern cluster;
2. a concrete file, route, or copy span;
3. a product-context check against `DESIGN.md` and the real journey;
4. an observable cost to hierarchy, trust, clarity, or distinctiveness.

Authorship, model choice, and “AI probability” are outside the contract.

## Three separate verdicts

| Verdict | Meaning | Example |
| --- | --- | --- |
| `SLOP` | Context-free defaults converge and weaken the product | Every section repeats the same icon tile, card, gradient, and vague CTA |
| `QUALITY` | A general defect independent of who made the UI | Low contrast, broken focus, overflow, missing state |
| `PREFERENCE` | A valid aesthetic choice with more than one answer | Sharp versus rounded corners when both fit the system |

This separation prevents accessibility errors from being dismissed as
“AI-looking” and prevents personal taste from becoming a blocking defect.

## Writing and locale contract

- Lock facts, numbers, names, commands, URLs, quotes, and product behavior
  before editing.
- Diagnose clusters, not isolated words.
- Rewrite only the affected span unless the target locale needs a different
  information order.
- Keep Korean as the canonical thesis and fact set. English, Japanese,
  Simplified Chinese, and Traditional Chinese (Taiwan) are independently
  written locale documents, not inherited prose.
- Treat `zh-TW` as a Taiwan locale. Do not create it by converting `zh-CN`
  characters.
- Never add a customer, metric, benefit, or feature to make prose sound more
  convincing.

## Interface contract

- Read the brief, audience, real route, and protected behavior before judging
  style.
- Inspect deterministic signals in code and the rendered result on desktop and
  mobile.
- Treat cards, icon tiles, gradients, glow, numbered steps, and accent rails as
  contextual patterns. They become findings only when repeated without an
  information or brand role.
- Fix the smallest dominant cluster first. A new visual theme must not be used
  to hide the old problem.
- Re-run the same route, viewport, state, and interaction after the change.

## Ten review lenses

The public guide and `omd:slop-audit` now review UI across ten related lenses.
They are design questions, not a detector score:

1. **Hierarchy** — composition should expose task priority before decoration.
2. **Containers** — a card or panel should represent an entity, action,
   selection, or layer rather than become the default wrapper.
3. **Typography** — measure, scale, weight, and pace should match scanning,
   reading, comparison, or operation.
4. **Color and depth** — accents, elevation, borders, shadows, and radius need
   stable brand, action, state, or layer roles.
5. **Evidence** — real workflows, assets, data shapes, and state changes are
   stronger proof than generic icons, fake metrics, or placeholder dashboards.
6. **Density** — local grouping and section rhythm should match the task;
   generous space is not automatically tasteful and compactness is not a flaw.
7. **States** — empty, loading, error, permission, long-content, and success
   states belong to the product contract.
8. **Responsive composition** — smaller viewports require reprioritization,
   not only narrower desktop columns.
9. **Motion** — movement should explain feedback, origin, continuity, or space;
   one orchestrated moment is usually stronger than unrelated effects.
10. **Interaction contract** — a control's label, visual treatment, URL/state,
    and result should agree.

Anti-slop is therefore not a synonym for minimalism. Expressive editorial
pages, dense expert tools, and quiet service flows can all be strong when the
direction follows the subject and is executed consistently.

## Concrete specimen contract

The public guide no longer explains the ten lenses with anonymous bars and
shapes. Each comparison uses a recognizable product surface so the review
question can be applied to working UI:

| Lens | Product surface used in the comparison |
| --- | --- |
| Hierarchy | Release dashboard with one failed build, progress, tasks, and a primary recovery action |
| Containers | Account settings with semantic rows, dividers, and switches instead of nested cards |
| Typography | Documentation or release-note page with breadcrumb, title, metadata, body, and section roles |
| Color and depth | Checkout summary with action, payment method, neutral surface, and state-specific color |
| Evidence | Verification log with route, file, test count, overflow result, and generated artifact |
| Density | Operational table with search, filter, aligned headers, times, and status cells |
| States | Empty, loading, error, and success rows with different feedback and recovery affordances |
| Responsive | A checkout that changes reading order and preserves the primary action on a phone |
| Motion | An anchored notification transition with one origin, settled state, and duration |
| Interaction | Tabs, search, filter, status, and primary action that look different because they behave differently |

These specimens are non-interactive examples and stay outside the keyboard
order. They use the project's existing semantic tokens and component radius
scale; no new palette or decorative shadow system is introduced for the guide.

## Sources and what OmD takes from them

- [im-not-ai](https://github.com/epoko77-ai/im-not-ai) — Korean translationese,
  passive/formal-noun patterns, protected facts, and local editing. MIT.
- [Humanizer](https://github.com/blader/humanizer) — pattern clusters and
  meaning preservation rather than a single-word blacklist. MIT.
- [stop-slop](https://github.com/hardikpandya/stop-slop) — filler, formulaic
  contrasts, vague praise, and mechanical rhythm. MIT.
- [Impeccable Slop Detector](https://impeccable.style/slop/) — a public pattern
  catalog and the separation of UI slop from general quality. The related
  Impeccable repository is Apache-2.0.
- [Taste Skill](https://github.com/leonxlnx/taste-skill) — brief and audience
  before visual defaults. MIT.
- [Anthropic frontend-design skill](https://github.com/anthropics/skills/tree/main/skills/frontend-design)
  — ground the visual direction in the subject, spend boldness in one justified
  place, and critique the plan before implementation. License must be checked
  per bundled skill before copying.
- [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md)
  — production interaction details: long content, responsive layout, states,
  reduced motion, navigation semantics, and locale behavior.
- [Carbon spacing](https://carbondesignsystem.com/elements/spacing/overview/),
  [2x Grid](https://carbondesignsystem.com/elements/2x-grid/overview/), and
  [type strategies](https://carbondesignsystem.com/elements/typography/style-strategies/)
  — density is task-dependent; spatial grouping and productive versus
  expressive type should carry information hierarchy.
- [W3C Cards](https://design-system.w3.org/components/cards.html) — card source
  order should prioritize content and the boundary must retain accessible
  meaning.
- [GOV.UK layout](https://design-system.service.gov.uk/styles/layout/),
  [buttons](https://design-system.service.gov.uk/components/button/), and
  [tabs](https://design-system.service.gov.uk/components/tabs/) — readable
  measure, small-screen-first composition, specific actions, and explicit
  conditions for when a component should or should not be used.
- [Apple HIG layout](https://developer.apple.com/design/human-interface-guidelines/layout),
  [typography](https://developer.apple.com/design/human-interface-guidelines/typography),
  and [writing](https://developer.apple.com/design/human-interface-guidelines/writing)
  — hierarchy, grouping, adaptation, progressive disclosure, legibility, and
  action-oriented labels.
- [Atlassian elevation](https://atlassian.design/foundations/elevation) — depth
  should correspond to actual layering or interaction; whitespace or borders
  are preferable when lift is unnecessary.
- [Primer Product UI Patterns](https://primer.style/product/ui-patterns/),
  [empty states](https://primer.style/product/ui-patterns/empty-states/), and
  [loading](https://primer.style/product/ui-patterns/loading/) — empty,
  loading, degraded, navigation, and saving behavior belong to the real
  product flow. State copy names the condition and the next action; loading is
  scoped to the content it replaces and changes with expected wait time.
- [Carbon data table](https://carbondesignsystem.com/components/data-table/usage/)
  — row density, header alignment, toolbars, search, selection, and expansion
  follow the comparison task. Tabular data should not be disguised as a grid of
  cards.
- [Fluent 2 card](https://fluent2.microsoft.design/components/web/react/core/card/usage)
  and [shapes](https://fluent2.microsoft.design/shapes) — a card represents one
  concept or object, while rectangle, circle, pill, and popover shapes retain
  distinct component roles. Radius changes with scale and context instead of
  making every surface the same blob.
- [USWDS card](https://designsystem.digital.gov/components/card/) — cards are
  modular summaries in a collection, not a decorative border around standalone
  content, a simple action, a table, or sequential prose.
- [GOV.UK error summary](https://design-system.service.gov.uk/components/error-summary/)
  — validation feedback names the problem, links to the affected answer, and
  moves focus to a recoverable starting point instead of displaying a generic
  failure illustration.
- [Atlassian empty state](https://atlassian.design/foundations/content/designing-messages/empty-state)
  — an empty state explains why the surface is empty and gives a specific next
  action rather than using vague reassurance.
- [Microsoft language style guides](https://learn.microsoft.com/globalization/reference/microsoft-style-guides)
  and [Mozilla localization style guides](https://mozilla-l10n.github.io/styleguides/)
  — locale-specific terminology and product voice.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) — accessibility remains a separate,
  testable quality layer.

The OmD rules are rewritten for this product. If future work copies substantial
code or rule wording, the source license and modification notice must ship with
the copied material.

## Delivery map

- Human writing skill: `skills/omd-humanize/`
- Slop audit skill: `skills/omd-slop-audit/`
- Specialist agents: `agents/omd-humanizer.md`,
  `agents/omd-slop-auditor.md`
- Public explanation and comparison: `/docs/<locale>/anti-slop`
- Machine-readable projection: `/docs-md/<locale>/anti-slop`

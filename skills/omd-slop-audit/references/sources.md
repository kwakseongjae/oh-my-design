# Research sources and reuse boundary

OmD는 아래 프로젝트의 관점을 참고하되 pattern wording과 판정 계약을 제품 고유 taxonomy로 다시 작성했다.

- [Impeccable Slop Detector](https://impeccable.style/slop/) — UI pattern과 general quality를 분리하고 deterministic/provider/LLM 검사를 구분하는 접근. Impeccable repository는 Apache-2.0.
- [Taste Skill](https://github.com/leonxlnx/taste-skill) — brief와 audience를 먼저 읽고 생성형 기본 미감을 억제하는 접근. MIT.
- [Anthropic frontend-design skill](https://github.com/anthropics/skills/tree/main/skills/frontend-design) — 뚜렷한 시각 방향과 production detail을 먼저 설정하는 접근. 해당 skill license를 적용 전에 확인.
- [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md) — content handling, responsive, motion, state, navigation, locale을 production 품질로 검사하는 기준. MIT.
- [Carbon Design System](https://carbondesignsystem.com/elements/spacing/overview/) — 과업에 따른 density, spatial grouping, grid rhythm, productive/expressive typography 구분. Apache-2.0.
- [W3C Cards](https://design-system.w3.org/components/cards.html) — content-first source order와 accessible container boundary.
- [GOV.UK Design System](https://design-system.service.gov.uk/styles/layout/) — small-screen-first layout, readable measure, component별 when-to-use/when-not-to-use.
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/layout) — priority, grouping, adaptability, progressive disclosure, platform context.
- [Atlassian Elevation](https://atlassian.design/foundations/elevation) — surface depth를 실제 layering과 interaction에 연결하는 기준.
- [Primer Product UI Patterns](https://primer.style/product/ui-patterns/) — empty/loading/degraded/navigation/saving을 실제 product flow와 상태 생명주기로 설명하는 기준.
- [Carbon Data Table](https://carbondesignsystem.com/components/data-table/usage/) — 과업에 맞는 row density, header alignment, toolbar, search와 selection을 구성하는 기준.
- [Fluent 2 Card](https://fluent2.microsoft.design/components/web/react/core/card/usage)와 [Shapes](https://fluent2.microsoft.design/shapes) — card boundary와 rectangle/circle/pill/popover shape를 실제 component role에 연결하는 기준.
- [USWDS Card](https://designsystem.digital.gov/components/card/) — card를 collection 속 modular summary로 제한하고 decoration/table/sequential prose와 구분하는 기준.
- [GOV.UK Error Summary](https://design-system.service.gov.uk/components/error-summary/) — validation error, focus, affected field, recovery action을 한 화면 계약으로 묶는 기준.
- [Atlassian Empty State](https://atlassian.design/foundations/content/designing-messages/empty-state) — empty reason과 specific next action을 함께 제공하는 기준.
- [stop-slop](https://github.com/hardikpandya/stop-slop) — copy의 군더더기·공식화된 대비·과장·리듬 문제. MIT.
- [Humanizer](https://github.com/blader/humanizer) — 개별 tell보다 cluster와 문맥을 우선하는 접근. MIT.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) — slop과 별도로 다뤄야 할 접근성 품질 기준.

규칙·코드를 실질적으로 복사하면 해당 LICENSE/NOTICE와 수정 표시를 보존한다. 이 catalog는 UI의 저작 주체나 사용 모델을 추정하지 않는다.

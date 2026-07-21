# Benchmark research anchors

UI-Resolve Bench combines ideas that existing benchmarks usually measure in
isolation.

- [Design2Code](https://aclanthology.org/2025.naacl-long.199.pdf): element,
  text, position, and color fidelity; also documents weak alignment between some
  automatic metrics and human ordering.
- [WebGen-Bench](https://arxiv.org/abs/2505.03733): instruction-driven web apps
  with manually verified functional tests.
- [FrontendBench](https://arxiv.org/abs/2506.13832): sandboxed browser tests for
  interactive frontends.
- [DesignBench](https://arxiv.org/abs/2506.06251): generation, modification, and
  repair across frameworks, including overflow and occlusion defects.
- [UI-Bench](https://www.uibench.ai/): expert pairwise preference and TrueSkill;
  intentionally does not cover accessibility or code health.
- [WebArena](https://webarena.dev/) and
  [VisualWebArena](https://arxiv.org/abs/2401.13649): executable task success in
  realistic web environments.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/): normative accessibility contract.
- [axe-core](https://github.com/dequelabs/axe-core): automated accessibility
  signal that still requires manual keyboard and reflow checks.
- [Playwright visual comparisons](https://playwright.dev/docs/test-snapshots):
  environment-pinned visual regression mechanics.
- [SWE-bench Verified audit](https://openai.com/index/separating-signal-from-noise-coding-evaluations/):
  benchmark tasks and tests themselves require continuous audit.
- [SWE-Skills-Bench](https://github.com/GeniusHTX/SWE-Skills-Bench): paired
  evidence that many skills add token cost without improving pass rate, which is
  why a no-skill control is mandatory.

Among the benchmarks reviewed here, none treats function, design contract,
protected unknowns, responsive behavior, accessibility, and blind
ship-readiness as one all-or-nothing resolution criterion. A systematic novelty
claim would require a published search protocol. This observed gap—not an
OmD-specific score—is the reason for exploring UI-Resolved@1.

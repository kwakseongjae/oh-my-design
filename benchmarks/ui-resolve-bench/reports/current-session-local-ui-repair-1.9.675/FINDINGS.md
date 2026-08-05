# 1.9.675 — current-session local UI repair diagnostic

This provider-free diagnostic applied the current OmD UI rules to the frozen
`museum-loan-crate-release-v0.1` starter, then checked the repaired temporary
artifact with the external evaluator and Codex in-app browser.

## Outcome

- Frozen starter: 75/85, automated gate fail.
- Final temporary repair: 85/85, all six deterministic gates pass.
- Human intervention: 0.
- External provider/model calls: 0.
- Model attribution: unavailable; this is a current-session diagnostic, not a
  model or skill leaderboard cell.
- Ship Preference: not run and not inferred.

The repair preserved four crates, six reports, two gallery zones, all protected
hooks, the three view choices, registrar-note toggle, form states, supplied
decision facts, and the unknown-fact boundary. It replaced page-level overflow
with three named, keyboard-reachable relationship carriers. Passive identifier
and target text remains non-focusable and is not itself a scroll container.

## In-app browser cross-check

At the requested 320px viewport the in-app browser reported a 305px client and
scroll width, ten focusable elements, zero passive-text scrollers, and three
named relationship scrollers:

- loan-crate register: 273px client / 540px scroll;
- gallery-zone strip: 273px client / 410px scroll;
- release target identifiers: 235px client / 980px scroll.

The gallery view selection, registrar-note reveal, invalid form feedback, valid
save feedback, and protected 4/6/2 cardinalities all remained correct. Console
warnings and errors were zero.

## Evaluator repair

The first implementation attempt reached 85/85 by placing `overflow-x:auto`
and `tabindex=0` directly on passive identifiers. That violated OmD's existing
relationship-carrier contract and added unnecessary Tab stops, but schema 0.5
did not reject it.

The evaluator now records `passive_text_scrollers` for explicit atomic text
selectors and adds `no_passive_text_scrollers` to responsive geometry. A
negative fixture with direct target-text scrolling now fails at 73/85, while
the relationship-carrier implementation remains 85/85. This closes a
score-gaming path; it does not establish comparative model quality.

## Immutable evidence

- frozen starter product: `554229643a3fc906ef3506bf0a42b3e59381c0cdc4a0dd9c36c92498fab7cb74`
- final temporary product: `824c07e60c99a4c8dc49eb5336e330cb2d6eb102dd9507a536ab63d9cc14e58b`
- final score: `2349249eaa90cbc02f4844e67e02a4db7dddfd5e343b7d7fee1a6273f2d8eae9`
- passive-scroll negative score: `672de3f8b048c748fb437b32c7b949f440dc677d7480a44038d9f828c033b074`


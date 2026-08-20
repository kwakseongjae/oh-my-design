# Benchmark-qualified activation — 1.9.38

Locked before implementation on 2026-07-27.

## Question

Can an explicitly Internal, unranked benchmark lead a reader from evidence
inspection to a qualified web handoff without turning the benchmark into a
homepage winner claim?

This patch measures a product activation path. It does not change benchmark
scores, publication status, task definitions, or model/skill claims.

## Frozen journey

1. The existing Home CLI section may expose one tertiary text link:
   `Internal benchmark evidence →`.
2. `/benchmarks` fires one `bm_view` per mount.
3. Method and canonical source inspection fire `bm_inspect`.
4. A neutral action module appears only after Method and Sources. Reaching at
   least 50% visibility fires one `bm_handoff_view`.
5. The module offers exactly three outcomes:
   - copy the exact terminal installer;
   - open the complete-run documentation;
   - choose a reference in Builder.
6. Installer copy fires existing `act_install_copy` and `act_handoff` only
   after clipboard success, with `surface: "benchmark"` and the frozen
   experiment version.
7. Docs and Builder navigation are exploratory continuation proxies. They are
   never counted as qualified activation in this patch because a clean
   canonical navigation cannot carry version-isolated downstream proof.

The Home hero, primary CLI actions, main navigation, benchmark scores, Builder
preview, and Builder three-destination handoff remain unchanged.

## Frozen event contract

All events use a typed benchmark helper. No raw analytics calls remain in the
new benchmark callsites.

| Event | Parameters |
|---|---|
| `bm_entry` | `origin: "home_cli"`, `experiment_version: "1.9.38"` |
| `bm_view` | `experiment_version` |
| `bm_inspect` | `target`, `experiment_version` |
| `bm_handoff_view` | `experiment_version` |
| `bm_handoff` | `destination`, `outcome`, `experiment_version` |

Bounded inspection targets:

- `method`
- `harness_summary`
- `aggregate_statistics`
- `failed_run`
- `focus_calibration`
- `fresh_recovery`
- `protocol`

Bounded destinations are `install_copy`, `docs_demo`, and `builder`. Outcomes
are `navigate`, `copied`, and `failed`.

Do not emit a URL, report path, score, model ID, copied command, referrer,
free-form query, or acquisition-reserved parameter.

## Frozen measurement implementation

Implementation must satisfy the typed and reporting contracts before the UI is
accepted:

- extend the canonical activation `InstallSurface` union with `benchmark`;
- pass optional `experimentVersion` through the canonical install-copy and
  handoff helpers so the successful direct-copy bridge is attributable to
  `1.9.38`; existing callsites remain unchanged;
- register `experiment_version`, `target`, `destination`, and `outcome` as GA4
  event-scoped custom dimensions;
- add one deterministic `benchmark_activation` pull report that returns
  complete-day unique users by bounded event and parameter values;
- filter that report to exact production hostname `oh-my-design.kr` and rows
  with an empty `testDataFilterName`;
- require the property-level Active internal-traffic exclusion
  (`traffic_type=internal`) to be confirmed in the deployment record. If that
  prerequisite is not confirmed, the production decision is
  `measurement_blocked`, not a promotion or rollback result.

The hostname and testing-filter query contract excludes localhost and traffic
matched by GA filters in Testing state. Active internal-traffic filters remove
matching events before Data API reporting, so their configured state is an
operational prerequisite rather than a queryable event dimension.

Official basis:

- GA4 Data API dimensions:
  <https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema>
- GA4 filter expressions:
  <https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/FilterExpression>
- GA4 internal-traffic and data-filter behavior:
  <https://support.google.com/analytics/answer/10104470>

## Frozen public copy and UI boundary

The Home link contains no score, lift, winner, frontier, or install claim.

The benchmark-end module:

- follows Method and canonical Sources;
- repeats that the result remains Internal;
- uses only existing background, card, border, foreground, primary, radius,
  typography, focus, and press tokens;
- keeps all controls at least 44px high;
- exposes one deterministic copy state and one polite live status;
- contains no gradient, oversized CTA, score repetition, sticky promotion,
  decorative left border, or leaderboard language.

## Acceptance before release

- `Internal evidence` and `Not a leaderboard` still precede every result.
- No activation control appears above Method and Sources.
- Home → evidence → benchmark-end module works.
- Benchmark → docs and benchmark → Builder use clean canonical routes.
- Successful and failed clipboard paths emit distinct outcomes; only success
  emits `act_install_copy`.
- `bm_view` and `bm_handoff_view` fire once per mount.
- Source and Method inspection are keyboard reachable and tracked once.
- 1440px, 390px, 320px, and 200%-equivalent 720px have no horizontal
  overflow or clipped controls.
- Keyboard order continues from Sources to Protocol, installer, docs, and
  Builder with visible focus.
- axe serious/critical and console errors are zero.
- Builder ownership and its existing handoff UI do not change.

## Production measurement and decision

Use complete property days only under the frozen production-hostname,
testing-filter, and Active internal-traffic prerequisites above.

- minimum window: 14 complete days;
- evaluation threshold: 200 unique `bm_handoff_view` users;
- hard stop: 28 complete days;
- fewer than 200 exposed users at day 28: `insufficient_data`.

Primary qualified activation rate:

```text
unique users with bm_handoff(destination=install_copy, outcome=copied)
÷ unique users with bm_handoff_view
```

Promotion requires at least 200 exposed users, at least 10 qualified
activations, rate at least 5%, Wilson 95% lower bound at least 2.5%, installer
copy failure at most 2%, and no evidence-boundary, accessibility, duplicate,
or false-success regression.

Iterate when rate is at least 2% but misses promotion, only one destination
continues, or the sample is insufficient. Roll back when rate is below 2%
after 200 exposures, copy failure exceeds 5%, a failed copy fires activation,
duplicate `bm_*` rate exceeds 2%, or any evidence/accessibility/Builder
ownership regression appears.

The mirrored `act_install_copy` and `act_handoff` events are taxonomy-integrity
checks for the same successful copy, not an additional numerator. Docs and
Builder `bm_handoff(outcome=navigate)` events report continuation interest
only. They cannot satisfy the promotion threshold.

Remove only the Home tertiary link when
`bm_entry users / landing_cli_view users` stays below 0.5% after 500 CLI-section
exposures. Do not infer CLI installation success, first resolved UI, causal
lift, or seven-day CLI reuse from these web events.

## Next patch

1.9.39 begins only after this activation surface passes deterministic
acceptance. It defines the provider-neutral independent challenge contract; it
does not wait for the 14–28 day production read.

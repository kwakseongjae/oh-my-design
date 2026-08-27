# 1.9.734 findings — council intake disposition calibration

## Outcome

The deterministic intake boundary passes a 22-case, five-locale synthetic
calibration. It produced 57 automatic decisions with zero unsupported autos,
zero expected-disposition failures, and zero expected-value failures.

The first run exposed an English substring bug: `star` matched the beginning of
`started`. The matcher now uses an English word boundary. The expanded run also
made negated matches conservative, defers mixed surface signals, defers
multiple grounded wow candidates, and emits typed `blocked` decisions when an
exact official source or required product fact is missing.

## Coverage

- explicit and ambiguous requests in Korean, English, Japanese, Simplified
  Chinese, and Traditional Chinese;
- conflicting audience, scope, CTA, and surface signals;
- missing and generic wow evidence;
- negated audience/scope/CTA language;
- brand/reference source absence;
- security, privacy, data-retention, and pricing authority;
- missing exact product metrics and missing context files.

## Honest boundary

This proves only that the deterministic classifier matches the frozen synthetic
expectations. It does not prove that model agents debated well, that users will
answer fewer questions, or that resulting interfaces improve. The next patch
may open advisory-only bounded dispatch; automatic disposition expansion stays
forbidden.

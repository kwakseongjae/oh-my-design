# 1.9.815 Codex model-effort runtime contract

The benchmark runner now admits every effort label exposed by the current
Codex catalog while validating the exact model-effort pair. Luna supports five
levels from low through max. Terra and Sol support those five plus ultra. The
resulting final-validation surface contains 17 exact combinations.

The plan pins the complete model-cache SHA, cache timestamp and client version,
plus each model profile SHA, default effort, and ordered supported effort list.
Runtime preflight repeats those observations immediately before provider
execution. Any cache drift, missing profile, unsupported pair, fabricated
suffix, unknown runtime, display-name selector, or implicit model migration
stops the matrix before a cell starts.

Provider routing now registers exact Luna, Terra, and Sol Codex-native
selectors and enforces the policy's default deny. Existing Luna prefix checks
were replaced with exact equality. Cursor remains denied for this work.

The same provider-zero patch adds a normalization contract for true repeated
reliability: multiple frozen tasks, the same independent trial set per task,
one exact arm, and within-task byte equality. Focused tests pass 84/84. No
provider or Cursor call was made.

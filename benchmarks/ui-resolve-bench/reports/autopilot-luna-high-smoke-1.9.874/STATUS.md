# Autopilot Luna/high smoke 1.9.874

- Status: **provider-zero admission blocked; no model execution**
- Prepared root: `/private/tmp/omd-autopilot-luna-high-smoke-1.9.874`
- Plan SHA-256: `9da5a6edce34643d31520f00460ff35e20b211e7b20fae58c4d3e7f1c2cd62e8`
- Preregistration receipt SHA-256: `5c7c13ac523f5d81e127493a90246fe4dea53d1735a9dfbcf80cbf003e382367`
- Provider exposures: `0`
- Completed cells: `0 / 3`

The in-app browser was opened and named successfully, but its browser identity
began with `-`. The shared CLI argument parser treated that identity as another
option instead of the `--browser-id` value. Admission failed before the receipt
was written and before any provider call. This root is retained as provider-zero
diagnostic evidence and will not be executed; the parser and its transitive
source authority are corrected before preparing a fresh epoch.

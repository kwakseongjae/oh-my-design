# Autopilot greenfield provider-zero calibration — 1.9.834

## Verdict

The deterministic clean-directory oracle completed the full portable Autopilot state machine:

`BOOTSTRAP → AUTHORITY_GATE → DESIGN_SYSTEM_BUILD → SYSTEM_PROOF → PRODUCT_BUILD → VERIFY → HANDOFF`

- Provider, model, and Cursor calls: **0**
- Product-authority question batches: **0** (the sealed prompt explicitly authorized a project-owned design system)
- System strategy: **establish**
- Final state: **HANDOFF**
- Objective score: **100 / 100**, with every critical group passing

## Browser evidence

The evaluator exercised the working route rather than inspecting markup alone.

| Group | Result |
|---|---:|
| Design-system proof and hash binding | 20 / 20 |
| Dialog, focus, validation, submit, feedback | 25 / 25 |
| 1440, 390, 320, and 200% responsive checks | 20 / 20 |
| Axe serious/critical + semantic structure | 20 / 20 |
| Brief fidelity and unknown-fact absence | 10 / 10 |
| Runtime errors and external requests | 5 / 5 |

All four viewports had zero document overflow. Visible controls were at least 44 CSS px high; the 200% observation measured 88 px. Axe reported zero serious or critical violations. The dialog opened, focused the field, preserved an empty-submit error, closed on a valid value, and exposed success feedback.

The browser E2E also calibrated two independent mutants:

- forced 900 px summary width → responsive group failed;
- removed empty-submit error → functionality group failed.

Both mutants were rejected without provider calls. Product, DESIGN.md, provenance, coverage, system proof, and final proof are byte-hash bound; changing the product after proof also invalidates the design-system group.

## Frozen artifact identities

- Summary SHA-256: `9ece08e7bd0b3fbb5bc8dd93d3ca1f22ac930f63a5b111c04fdd35c5a450d29a`
- Objective evidence SHA-256: `3da41116eb2708ec9f0d9746e0955252477d600ff617d994a5cee63d0116d41f`
- DESIGN.md SHA-256: `f7dd99ae559b4b6129f4e7e9c8d338b59cfadcdaa2d57a7b47df7ba1207738a6`
- Product SHA-256: `7d2c170c015a98aecbbe19e334eca21c93655c58bbd1795ca3bd1746a9deb7f8`
- Local evidence root: `/private/tmp/omd-autopilot-clean-dir-canary-1.9.834`

## Claim boundary

This is a handcrafted, provider-zero **valid-oracle calibration**. It proves that the controller, design-system decision/proof contract, mission ownership gates, browser evaluator, and failure detection can represent the intended 2.0 flow. It is **not** evidence that a model or OmD skill autonomously produced this quality, and it does not support superiority, reliability, one-shot marketing, or 2.0 promotion claims.

The next admissible evidence is a provider-zero task/oracle/mutant set across the hidden greenfield families. Only after that calibration passes may a fresh Luna/high three-task Autopilot smoke run begin.

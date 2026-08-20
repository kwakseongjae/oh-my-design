# Proof execution aggregate — findings

Status: **provider-free aggregation complete**.

UI-Resolve group summaries now expose proof-trace availability, analyzable rate, compliance rate, and distributions for browser recovery, duplicate static closure, and verification after ready. A separate `compliance_publication_ready` flag requires every valid run in the group to carry analyzable trace evidence; it does not silently invalidate older quality-only benchmark groups.

The generated Markdown comparison table includes `Proof analyzed` and `Proof compliant` columns. Malformed trace counters and missing booleans fail closed during record validation. Mixed evidence remains visible instead of treating unavailable traces as passing runs.

Focused aggregate, classifier, and exporter coverage is 19/19 and TypeScript lint is green. No provider call was made.


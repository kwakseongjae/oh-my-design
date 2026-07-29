# Automated blind review stream fix — 1.9.88 findings

Status: **accepted, provider-free**.

The controller now treats the last Cursor assistant text content as the
canonical model response and records `final_message_source:
assistant-content`. The CLI result event remains untouched in raw events and is
used only when no assistant content exists.

The strict parser itself did not change. It still refuses Markdown, prefixes,
suffixes, extra keys, wrong assignments, missing axes, invalid choices, and
manual repair. A focused fixture reproduces the live failure exactly: valid
assistant JSON plus a prefixed result summary. The assistant channel passes;
the prefixed result is never trimmed or parsed.

Validation: focused reviewer tests 10/10, Node syntax, TypeScript, and build
pass. Provider generation for the correction is zero.

The failed 1.9.87 root stays frozen. The next live call must use a fresh state
root and the immutable 1.9.86 packet/reveal set.

# Preregistered timeout accounting — 1.9.352

The runner now implements the timeout policy it already preregistered. A `count-as-valid-failure` timeout is evaluated against the resulting product, exported with its full wall time, recorded unresolved, and checkpointed. Missing usage remains explicitly unavailable instead of becoming zero. Runtime, model, effort, task, and source attribution still fail closed.

Timeout does not imply success and cannot satisfy proof, host, or promotion gates. It is a valid system failure: the skill/model consumed the allowed time without delivering a resolved UI. This keeps reliability and long-term Tokens-to-Target honest while allowing the paired arm to run. A normal timeout without the explicit policy still freezes as before.

The synthetic end-to-end test times out the first provider, evaluates and exports it once, resumes the matrix, proves the timed-out provider is not replayed, and completes the next cell. Focused tests are 75/75. The wider benchmark suite has 316 passing and only the two pre-existing external vendor Git-root fixtures unavailable. Type-check, build, and diff checks pass. No provider was called by this patch and no quality result is promoted.

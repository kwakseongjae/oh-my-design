# Workspace-bound Reliability@3 result — 1.9.728

The candidate-preview path is now bound correctly to the prepared workspace. Both executed Luna/high cells produced valid 85/85 interfaces, kept the sealed inventory unchanged, and finished with candidate bytes exactly equal to the final `index.html` bytes. This confirms that the 1.9.726 path repair fixed the false mismatch observed in 1.9.725.

The reliability result is still a failure. Conservation satisfied the complete lifecycle in one revision with one successful and zero failed static closures. Wind reached 85/85 only after its first static closure failed and the model edited the product a second time. Its final candidate binding is valid, but the run has two product revisions, one failed closure, and a noncompliant proof trace. Under the preregistered contract this is `second-product-edit`, not a pass.

The matrix runner initially checkpointed Wind because it enforced candidate binding but did not yet translate the plan's reliability hard-stop list into an execution gate. Commit `3830c1c4` adds that missing enforcement for current cells and resumed checkpoint prefixes. A provider-zero resume audit then froze Archaeology before any model exposure. Wind is not replayed, and Archaeology remains unexecuted.

The honest outcome is one reliability pass out of three required cells, with two objective passes out of two executed cells. The experiment remains diagnostic only. It does not enter ranking and does not satisfy the 2.0 release gate. The next product repair must prevent a failed closure from leading to a second product edit: candidate validation needs to absorb correction before the one allowed product write.

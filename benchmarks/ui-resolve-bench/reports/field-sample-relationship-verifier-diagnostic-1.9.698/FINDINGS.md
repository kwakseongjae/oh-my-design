# Field-sample relationship verifier diagnostic — 1.9.698

The exact clean `3ec07131` OmD skill was prepared and executed once with Luna/high. The run was valid and again produced an 81/85 UI that failed responsive geometry at 320px and the 200% surrogate.

Unlike 1.9.696, the weak implementation did not receive proof credit. `static-close` failed, successful closure count stayed zero, failed closure count became one, and proof compliance was false. The benchmark therefore now fails closed instead of reporting a successful verifier for an unresolved relationship-carrier UI.

The run did not yet exercise the new relationship contract. The local browser-harness wrapper failed before it executed the supplied stdin, so the runner's pre-edit snapshot command never ran. `source-fallback-open` then rejected the missing snapshot. The model edited the product without an opening stamp and the later static closure correctly rejected it.

The 1.9.699 repair makes `source-fallback-open` capture and persist the current pre-edit product snapshot itself when the wrapper failed before stdin. If relationship validation then fails, the snapshot remains locked while only the artifact contract may be corrected and retried; no product edit is allowed until the helper returns an opening stamp. This preserves the unchanged-product guard while making the documented infrastructure fallback executable in the observed local wrapper failure mode.

This diagnostic remains excluded from comparative rankings and does not change the 2.0 readiness snapshot.

# 1.9.751 provider-zero admission failure

All three cells were prepared without provider, model, or Cursor calls. Admission then failed because the plan locked the source `skills/omd-apply` tree hash, while the prepared `omd-portable-council-gate` arm correctly reports the effective installed tree after its deterministic activation delta is applied.

No task bytes were exposed to Luna and no execution artifacts exist. The 1.9.751 root is frozen rather than repaired in place. The same provider-zero task denominator may be used in a fresh 1.9.752 plan that locks the observed effective installed skill hash `f46c9859…`.

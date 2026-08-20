# Socket-native consumer-browser candidate pin — 1.9.484

The provider-free 1.9.483 repair is now an immutable candidate at exact commit
`aa0d680d7f87a22406bc29fb408f36fa88384eba` and skill tree
`e6a01cae4603dc7195e772598d738d48b93f5496`. The benchmark registry installs it
only from detached vendor directory `omd-1.9.483` under the stable declared
name `omd:apply`.

This pin is distinct from the endpoint-bound 1.9.476 runner. Its identity
includes the socket-native runner, measured-unresolved artifact closure, and
artifact-aware automatic proof gate. No mutable working tree may enter a
provider cell, no provider was called, and the pin itself is not a promotion.

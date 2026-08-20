# Reflow v3 portable candidate — findings

Status: **PREPARED; no matrix provider call yet**.

The hardened canonical skill is pinned as
`omd-portable-reflow-v3-candidate` from detached clean commit
`b85ad330b63d502ecabc6741c0a7c599da6d2f58`. Its Cursor-adapted installed
tree is publishable and hashes to
`e420add7cb2cb6bfefbcf2d88b93d8be0c980b95cfdde763e53a4ac2aac914e1`.

The activation is identical to the exact previous canonical variant. The
candidate differs by its installed skill tree only. The earlier rejected v2
source remains separately pinned and is not silently replaced.

Next, prepare the exact previous canonical versus v3 matrix against the
already-locked environment-secret holdout. The diagnostic probe is not a
provider run and is not part of the comparison denominator.

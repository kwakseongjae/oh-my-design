# Cursor Agent Skill live canary

Status: **passed**.

Date: 2026-07-28

Runtime target: Cursor Agent `2026.07.23-e383d2b`

Model selector: `cursor-grok-4.5-high`

## Intended transmission

The canary workspace contains exactly:

1. synthetic `DESIGN.md` (287 bytes);
2. synthetic `index.html` (343 bytes);
3. `.cursor/skills/omd-apply/SKILL.md`;
4. `.cursor/skills/omd-apply/agents/openai.yaml`.

Repository history, real references, the 440-reference catalog, user documents,
credentials, and `web/public/llms-full.txt` are absent.

The two intended calls are read-only Cursor `ask` runs:

- automatic Agent Skill discovery;
- explicit `/omd-apply` invocation.

Both prohibit file edits and shell, browser, MCP, and network tools. The
expected response is a compact JSON claim about whether the selected Skill
contains the semantic-color and semantic-structure safeguards.

## Block evidence

The first 2026-07-28 attempt was rejected before Cursor started because the
host required exact approval for:

- the four files above;
- Cursor/Grok as the external destination;
- both read-only canary purposes.

No file was transmitted during that rejected attempt. The user then approved
that exact scope in the same Codex task. The two intended Cursor calls were
executed without a retry, alternate route, or provider fallback.

## Results

| Canary | Session | Exit | Tool use | Selected skill | Color rule | Structure rule | Wall | Usage |
|---|---|---:|---|---|---|---|---:|---|
| automatic discovery | `647d6d48-cb8e-4c38-a48d-fe5bfa2efa52` | 0 | one read of `SKILL.md` | `omd-apply` | true | true | 14,415ms | 23,431 input / 22,528 cache read / 432 output |
| explicit `/omd-apply` | `be2f9a98-ba2e-453a-8916-9ade6e4f90d2` | 0 | none reported | `omd-apply` | true | true | 11,756ms | 20,272 input / 5,632 cache read / 466 output |

Both runs reported `Cursor Grok 4.5 High`, used login auth, and made no file
edit. Neither invoked shell, browser, MCP, or network tools.

Payload hashes:

| File | Bytes | SHA-256 |
|---|---:|---|
| `DESIGN.md` | 287 | `80f5fbfcc96260bd2ca2255f002ecf76474d7d668e72991dd003ae565a2fe04c` |
| `index.html` | 343 | `bcda423b341a489f2bd18b74967659e114cad88585ebbacd8299a2eb709b2bb0` |
| `.cursor/skills/omd-apply/SKILL.md` | 22,463 | `0f4f806042b2f80c1c0e299431e106c707c13a30c97137d183ad12bfe5276a2d` |
| `.cursor/skills/omd-apply/agents/openai.yaml` | 262 | `f0ad5294de3f599bbed124708c61988be9098e20d4723ce3574023144751253e` |

## Consequence

1.9.43 now has both deterministic and live Cursor Skill-channel acceptance.
The 1.9.44 fixed-model Skill Lift matrix may be locked and freshly prepared.
Display-name model attribution still limits its results to Internal use.

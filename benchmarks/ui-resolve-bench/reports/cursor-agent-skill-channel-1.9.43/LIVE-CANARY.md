# Cursor Agent Skill live canary

Status: **blocked before provider execution**.

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

The host external-transmission review rejected the automatic-discovery call
before Cursor started. No canary file was transmitted and no provider output
exists. The review requires the user to explicitly name:

- the four files above;
- Cursor/Grok as the external destination;
- both read-only canary purposes.

The execution must not be retried, routed indirectly, or replaced with another
provider until that exact approval is received.

## Consequence

1.9.43 deterministic acceptance remains valid, but live Skill discovery is
unverified. The 1.9.44 Skill Lift matrix stays draft and no denominator is
opened.

# UI-Resolve Bench internal pilot

> One public fixture with exploratory trials. Diagnostic only; not a public leaderboard.

| Variant | Trial artifact | Run | Attribution | Deterministic | Automated gates | Changed |
|---|---|---|---|---:|---:|---:|
| No skill | `baseline` | complete | valid-control | 65/85 | fail | yes |
| No skill | `baseline-agent` | complete | valid-control-observation | 61/85 | fail | yes |
| Raw DESIGN.md | `raw-design-md` | complete | valid-context-observation | 79/85 | fail | yes |
| Anthropic Frontend Design | `anthropic-frontend-design` | complete | valid-skill-observation | 85/85 | pass | yes |
| Taste Skill v2 | `taste-skill` | complete | invalid-attribution | 81/85 | fail | yes |
| Impeccable (prompt-only) | `impeccable-prompt-only` | complete | valid-skill-observation | 85/85 | pass | yes |
| UI UX Pro Max | `ui-ux-pro-max` | complete | invalid-attribution | 81/85 | fail | yes |
| oh-my-design apply skill | `omd-portable` | complete | invalid-attribution | 77/85 | fail | no |
| oh-my-design apply skill | `omd-portable-v2` | complete | invalid-attribution | 66/85 | fail | yes |

Ship Preference must be added through blinded pairwise review. Efficiency is absent for in-app fallback runs and is not normalized here. Invalid-attribution artifacts are diagnostic traces only and must not be credited to the named skill.

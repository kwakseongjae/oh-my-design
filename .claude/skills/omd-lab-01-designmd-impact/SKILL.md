---
name: omd-lab-01-designmd-impact
description: |
  OmD Lab #01 — DESIGN.md 유무·생성방식이 UI 결과물에 미치는 영향을 4가지 조건으로 비교.
  토스 스타일 모바일 UI를 (V1) DESIGN.md 없이, (V2) 수동 작성, (V3) 자동 생성,
  (V4) 자동 생성 + 5회 피드백 루프로 만들어 동시 비교 뷰로 시각화.
  사용자가 본인의 Claude Code 안에서 재현 가능한 실험.
trigger: /omd-lab-01-designmd-impact <setup|v1|v2|v3|v4|compare|all>
---

# OmD Lab #01 — DESIGN.md Impact

본 스킬은 `.experiments/01-designmd-impact/` 디렉토리를 작업 대상으로 한다.
별도 API 호출 없이, 사용자의 Claude Code 세션 안에서 서브에이전트와 직접 작성을 통해 모든 단계를 수행한다.

## 모드별 동작

| 명령 | 작업 | 산출물 |
|---|---|---|
| `setup` | shared/ 자산 검증, Pinterest 핀 안내 | shared/ 검증 리포트 |
| `v1` | base-prompt만으로 UI 생성 | v1-no-design/output/, chatlog/v1-session.md |
| `v2` | analysis.md → 표준 9섹션 DESIGN.md 수동 작성 → UI 생성 | v2-with-design/{DESIGN.md, output/}, chatlog/v2-session.md |
| `v3` | analysis.md → step1-description.md → step2-DESIGN.md(자동 생성) → UI 생성 | v3-describe-to-design/*, chatlog/v3-session.md |
| `v4` | v3 산출물에서 시작 → feedback-script.md[1..5] 순차 적용 → 5 iteration | v4-iterative-feedback/iterations/iter-01..05/, chatlog/v4-iter-*.md |
| `compare` | 4-column 동시 스크롤 비교 페이지 빌드 | compare/index.html |
| `all` | setup → v1 → v2 → v3 → v4 → compare 일괄 실행 | 전체 |

## 공통 원칙

1. **모든 LLM 호출은 Claude Code 세션 내에서**. Anthropic API 직접 호출 금지.
2. **모든 입출력은 `chatlog/`에 박제**. User 프롬프트, Assistant 응답(요약 + 핵심 출력), 서브에이전트 호출을 markdown으로 기록.
3. **공통 자산 잠금**. `shared/` 변경 금지 — fonts, reset.css, base-prompt.md, assets는 4버전이 동일하게 사용.
4. **단계별 재현 가능**. 각 모드는 이전 모드의 산출물을 입력으로 받지만, 입력 파일이 git에 박제되어 있으면 단독 재실행 가능.
5. **사용자 시각 검증**: `compare` 산출물을 브라우저로 열면 4개 결과를 동시에 스크롤하며 비교 가능.

## 서브에이전트 매핑

| 역할 | subagent_type | 사용 단계 |
|---|---|---|
| ui-builder | sc:sc-frontend-architect | V1, V2, V3, V4 매 iter |
| toss-describer | Explore | V3·V4 step1 (analysis.md 읽고 description 산출) |
| design-md-author | sc:sc-technical-writer | V3 step2, V4 iter-N의 DESIGN.md 갱신 |
| preference-merger | general-purpose | V4 매 iter (피드백 → DESIGN.md preference 누적) |

각 서브에이전트 호출 시 프롬프트는 `playbooks/v*.md`에 명시된 템플릿을 따른다.

## 자세한 흐름은 `playbooks/`

- `playbooks/v1.md`
- `playbooks/v2.md`
- `playbooks/v3.md`
- `playbooks/v4.md`
- `playbooks/compare.md`

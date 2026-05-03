---
name: omd:apply
description: "프로젝트의 DESIGN.md를 UI/스타일링/마이크로카피 작업의 authoritative brand context로 적용. 작은 변경(컴포넌트 1개 수정, 단일 텍스트 교체 등)은 인라인 처리하고, 화면 단위 신규 디자인·에셋 생성·접근성 감사·페르소나 검증 등 복합 작업은 적합한 서브에이전트로 즉시 dispatch. 사용자 교정 발생 시 omd:remember 스킬을 트리거합니다."
---

# omd:apply — Brand Context Injection + Dispatch Router

DESIGN.md를 모든 UI/디자인 작업의 권위 있는 컨텍스트로 사용한다. 단일 책임은 두 가지:

1. **인라인 처리** — 작은 단일 변경 (1 component, 1 token, 1 카피 라인)은 직접 Edit 툴로 처리
2. **Dispatch** — 복합 작업은 적합한 서브에이전트로 즉시 라우팅 (master 거치지 않음)

복합 작업을 인라인으로 처리하면 안 된다. 이 스킬의 가장 중요한 책임은 *언제 dispatch할지 정확히 판단하는 것*.

## 트리거 조건

다음 중 하나가 감지되면 SKILL 전체를 로드한다.

- 컴포넌트 생성 / 수정 (button, card, dialog, nav, form 등)
- 스타일 변경 (Tailwind 클래스, CSS, 토큰 값)
- 마이크로카피 작성 / 수정 (버튼 라벨, empty state, 에러, tooltip)
- 모션 / 트랜지션 추가
- 색상 · 타이포그래피 · 스페이싱 조정
- 에셋 (아이콘, 차트, 일러스트, 3D 렌더) 요청
- 디자인 시스템 관련 질문

## Phase 0 — Dispatch decision tree (가장 먼저)

작업 시작 전에 어떤 처리 경로인지 결정한다. 다음 표를 위에서부터 순차 매칭, 첫 번째 매칭 행으로 진행:

| 사용자 요청 패턴 | 처리 경로 | 이유 |
|---|---|---|
| "에셋 / 아이콘 / 일러스트 / 차트 / 사진 / 로고 / 그래프 / SVG 만들어" | dispatch `omd-asset-curator` | 매체 선택 + 스택 매칭이 전문 영역 |
| "3D / 렌더 / 블렌더 / 목업" 명시 | dispatch `omd-3d-blender` | Blender MCP 필요 |
| "메인 화면 / landing / 전체 디자인 / 처음부터 / 와이어프레임" | 사용자에게 `/omd-harness` 추천 | 10-phase 파이프라인이 적합 |
| "접근성 / a11y / 색약 / 키보드 네비" 감사 | dispatch `omd-a11y-auditor` | 전문 감사 |
| "마이크로카피만 다듬어 / 카피 톤 정리 / empty state 문구 전부" 복수 | dispatch `omd-microcopy` | voice 일관성 |
| "사용자 시나리오 / 페르소나 walk through / 4명 입장에서 검토" | dispatch `omd-persona-tester` | adversarial 4-페르소나 |
| "이 카피 좋은지 / hero 카피 약점 / 섹션별 카피 전문가 의견 / A/B 후보" | dispatch `omd-ux-writer` | UX writing 분석 + 대안 + 근거 |
| "이 인터랙션 / 모션 / 포커스 / 모바일 / 지각 성능 / 섹션별 UX 약점" | dispatch `omd-ux-engineer` | 코드 레벨 인터랙션 감사 + fix |
| "랜딩 / 메인 화면 / 페이지 *전체*를 전문가 의견으로 개선" | dispatch `omd-ux-writer` + `omd-ux-engineer` (병렬) | 두 트랙 동시 — writing + engineering |
| "이게 왜 안 좋은지 critique / postmortem / root cause" | dispatch `omd-critic` | 비판적 분석 |
| "DESIGN.md 만들어 / reference 골라 / 67개 중 추천" | dispatch `omd-init` skill (또는 omd-add-reference) | reference 매칭 |
| "preference 정리 / 누적된 교정 반영 / DESIGN.md 업데이트" | dispatch `omd-learn` skill | fold-in 로직 |
| "이 한 줄 / 이 컬러 / 이 spacing 좀" 단발 명확 | **인라인 처리** | 분명한 단일 변경 |
| 위 어디에도 안 맞는 자유로운 디자인 작업 | 인라인 처리 후 Phase 3 (교정 캡처) | 일반 케이스 |

dispatch가 정해지면 즉시 Agent 툴 호출 (master 경유 X — 우리가 omd-apply로 트리거됐다는 건 master 컨텍스트 밖이라는 의미). 그 후 인라인 처리는 하지 않고, 서브에이전트가 반환한 결과를 사용자에게 정리만 해서 전달.

## Phase 1 — DESIGN.md 로드 (인라인 처리 분기 한정)

dispatch가 아니라 인라인 처리로 분기됐을 때만 진행:

1. 프로젝트 루트의 `DESIGN.md`를 **전체 읽는다**. 요약 금지, Read 툴로 직접 로드.
2. `.omd/preferences.md`가 있으면 같이 읽는다. `status: pending` 엔트리는 아직 DESIGN.md에 반영 안 된 교정 — DESIGN.md보다 **우선** 적용.
3. 우선순위:
   ```
   .omd/preferences.md (pending) > DESIGN.md > framework defaults
   ```

DESIGN.md 없으면 사용자에게 알리고 omd:init 스킬 트리거. 임의 생성 금지.

## Phase 2 — Brand Context 적용

- 토큰 값은 DESIGN.md에서만 인용. 임의 hex / spacing / radius 금지.
- Voice 섹션을 마이크로카피에 적용. 문장 길이, 어휘 register, 은유 밀도 일치.
- Component 섹션 명시된 규칙 따름 (variant / state / sizes).
- 없는 토큰 지어내지 않음. 필요 시 사용자에게 "이건 DESIGN.md에 없는데, 어떻게 할까요?" 묻기.

## Phase 3 — 교정 캡처

턴 종료 전에 다음 중 하나가 있었는지 확인:

1. 사용자가 디자인 선택을 명시적 교정 ("no, use X", "actually, Y", "don't use Z", "we never do W")
2. 사용자가 토큰/값을 revert 또는 교체
3. 사용자가 "우리는 ~한다/하지 않는다" 형태 원칙 언급

감지되면 **omd:remember 스킬을 트리거**한다 (CLI 호출 X — `.omd/preferences.md`에 직접 append). 트리거 메서드: omd-remember SKILL.md의 Step 1-6 절차를 따라 Edit 툴로 파일 수정.

## Phase 4 — 확인 메시지

교정 기록 시 턴 끝에 한 줄:

```
Logged to .omd/preferences.md — say "preference 정리해줘" later to fold into DESIGN.md.
```

일반 작업에는 불필요. 과한 알림 금지.

## 금지

- DESIGN.md 없는데 임의 생성 금지 (사용자에게 omd:init 제안)
- 복합 작업을 인라인으로 처리 금지 (Phase 0 dispatch table 따라 라우팅)
- 교정 감지 시 "기록할까요?" 묻지 말 것 — 자동 기록 + 한 줄 알림
- 같은 턴 내 같은 교정 중복 기록 금지
- CLI 호출 (`omd remember`, `omd learn` 등) 금지 — 1.0.0부터 모두 스킬 prose

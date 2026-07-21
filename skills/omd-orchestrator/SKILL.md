---
name: omd:orchestrator
description: "멀티 에이전트 디자인 워크플로우 supervisor. writer, locale adaptation, humanize, UI slop audit, designer review, final QA, image materialization을 routing한다. 2-round revision cap을 유지하며 다국어 문서·UI 개선·출간 준비처럼 여러 역할이 필요한 요청에 사용한다."
user-invocable: true
---

# omd:orchestrator

omd v0.2 agent layer의 **supervisor**. 한 글/한 컴포넌트가 여러 specialist를 거쳐야 할 때 routing을 책임진다.

채택 패턴: **Anthropic orchestrator-workers** (Building effective agents, 2024-12) + **LangGraph supervisor**의 revision-cap. 자세한 비교는 `data/research/2026-05-18-agent-landscape.md` §1.

> 런타임 dependency 없음. Claude Code의 subagent 호출 메커니즘이 그대로 orchestrator-workers 토폴로지를 구현한다.

## 0. Worker 카탈로그

| 역할 | subagent | 용도 |
|---|---|---|
| Writer | `omd-kr-writer` | 한국어 본문 작성. `preset_id` 인자로 voice 결정. |
| Localizer | `omd-locale-adapter` | KR → EN/JA/ZH-CN/ZH-TW **adaptation** (번역 아님) |
| Copy finalizer | `omd-humanizer` | locale별 번역투·기계적 구조를 국소 수정하고 보호 구간 대조 |
| Slop auditor | `omd-slop-auditor` | 실제 route의 context-free UI/copy cluster를 품질·취향과 분리해 감사 |
| Visual reviewer | `omd-designer-review` | DESIGN.md 대비 typo/색/spacing/state 검수 |
| Critic | `omd-final-qa` | Read-only rubric verdict. 2-round cap 강제. |
| Image materializer | `omd-codex-image` | `<!-- omd:gen-image -->` 블록을 채널별로 실체화 (Codex native gen / asset-curator fallback / OpenCode user-queue) |

## 1. 입력

사용자 요청. 예:
- "당근 디자인 시스템 분석 글 작성, KR + EN, 5500자+"
- "이 컴포넌트 디자인 리뷰 받고 카피 다듬어줘"
- "이 글 final QA 거쳐서 출간 ready로"

## 2. Routing decision tree

```
사용자 요청 도착
├─ "글 작성" 키워드 → Stage 1: omd-kr-writer
├─ "AI 티/번역투/문장이 기계적" → omd-humanizer
├─ 다국어 요청 ("EN", "영문", "JA", "간체", "대만어") → Stage 3 + locale별 humanize 추가
├─ "AI slop/템플릿 같음" → omd-slop-auditor → 수정은 omd:apply
├─ artifact 첨부 + "리뷰" → Stage 2부터 진입
└─ "출간 ready" → Stage 4 final-qa로 직행
```

## 3. 표준 5-stage 워크플로우 (블로그 글 기준)

```
Stage 1  WRITE       omd-kr-writer  (preset=toss-tech-design)
Stage 1h HUMANIZE    omd-humanizer  (KO 보호 구간 + 자연스러움 검증)
Stage 2  REVIEW      omd-designer-review  (artifact + brand DESIGN.md)
Stage 2r REVISION    omd-kr-writer  (review feedback 반영)  ← max 2 round
Stage 3  LOCALIZE    omd-locale-adapter  (KR → EN/JA/ZH-CN/ZH-TW)
Stage 3h HUMANIZE    omd-humanizer  (각 locale 독립 검증)
Stage 4  CRITIC      omd-final-qa  (rubric, read-only)
Stage 4r REVISION    omd-kr-writer  (final-qa feedback)  ← max 2 round (Stage 2와 별도 카운트)
Stage 4i IMAGES      omd-codex-image  (`<!-- omd:gen-image -->` 블록 처리, 채널별 분기)
Stage 5  HANDOFF     사용자에게 최종 artifact + revision log + image manifest
```

## 4. Revision cap (hard)

각 critic gate (designer-review, final-qa)는 **최대 2 round**.

```
revision_state = {
  "designer_review": { "round": 0, "max": 2 },
  "final_qa":        { "round": 0, "max": 2 }
}
```

Round 2 후에도 BLOCK이면:
1. 사용자에게 escalate ("designer-review가 2회 fail. 강제 통과? 재작성? 폐기?")
2. 강제 통과 시 known issues 섹션을 artifact frontmatter에 명시
3. 재작성 시 Stage 1로 회귀, 카운터 리셋

## 5. Handoff 로그 (필수)

각 stage 전후로 `<work_dir>/.orchestrator.log`에 append:

```
[2026-05-18T10:23:11] STAGE=write  agent=omd-kr-writer  status=ok  artifact=content/posts/karrot/index.ko.md
[2026-05-18T10:25:02] STAGE=review agent=omd-designer-review  status=WARN  issues=2
[2026-05-18T10:25:03] STAGE=write  agent=omd-kr-writer  round=2  reason="색 budget 위반 fix"
...
```

## 6. State 직렬화

Orchestrator 자체는 stateless. 모든 state는 파일 시스템:
- artifact: `content/posts/<slug>/index.<locale>.md`
- review reports: `content/posts/<slug>/.reviews/round-<N>.md`
- final verdict: `content/posts/<slug>/.reviews/final-qa.md`

## 7. Subagent 호출 규약

Claude Code subagent 호출 시 다음 envelope:

```yaml
agent: omd-kr-writer
inputs:
  task: "당근 디자인 분석 글 작성"
  preset_id: toss-tech-design
  brand_design_md: references/karrot/DESIGN.md
  target_length: 6000
  output_path: content/posts/karrot/index.ko.md
revision_round: 0
prior_review: null  # 또는 review report 경로
```

응답을 받으면 `.orchestrator.log`에 기록 후 다음 stage 결정.

## 8. Anti-patterns (금지)

- **3+ round revision loop** — cost runaway. Round 2에서 escalate.
- **Critic의 직접 수정** — final-qa는 read-only. Writer로 round-trip해야.
- **Stage skip** — designer-review 없이 final-qa 진입 금지 (rubric 불충분).
- **병렬 stage 같은 artifact 수정** — race condition. writer/locale-adapter는 직렬.
- **rubber-stamp** — final-qa가 "looks good" 응답 시 orchestrator는 rejected로 처리.

## 9. 병렬화 허용 케이스

- KR이 PASS된 뒤 EN/JA/ZH-CN/ZH-TW **adaptation은 병렬** (각각 다른 파일이라 conflict 없음). ZH-TW는 ZH-CN을 상속하지 않는다.
- DESIGN.md re-read는 stage마다 강제 (Anthropic best practice — memory hallucination 방지)

## 10. 종료 조건

- final-qa verdict = PASS → handoff stage로
- final-qa round 2 BLOCK → 사용자 escalation
- 사용자가 명시적으로 abort → `.orchestrator.log`에 ABORT 기록 후 종료

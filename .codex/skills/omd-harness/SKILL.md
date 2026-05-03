<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->

---
name: omd:harness
description: "디자인 하네스 — 사용자가 디자인 작업을 자연어로 던지면, omd-master 오케스트레이터가 10-phase 파이프라인(Discovery / Asset / Research / IA / Wireframe / System / Components / AssetSourcing / Microcopy / Validation / Handoff)을 실행하고 8개 sub-agent를 dispatch해서 brief + DESIGN.md + wireframes + components + assets + persona-feedback 패키지를 emit합니다. 트리거: '/omd-harness <task>', '디자인 하네스 돌려줘', '시니어 디자이너처럼 ~ 만들어줘', 'oh-my-design으로 ~ 디자인 알아서 해줘', '하네스로 작업해줘'. v0/Cursor/Subframe에 던질 zip 핸드오프 자동 생성. user checkpoint 3회 mandatory."
---

# omd:harness — Design Harness Entry

이 스킬은 **omd-master 오케스트레이터**를 호출하는 단일 진입점이다. 본 스킬은 *얇은 launcher*이고, 모든 phase 로직은 `.claude/agents/omd-master.md`에 있다.

## 트리거

- `/omd-harness <task>` 명시 호출 — task는 슬래시 명령에 이어서 자연어로
- 사용자가 자연어로 "디자인 하네스 / 시니어 디자이너처럼 / 알아서 디자인" 요청
- (선택) 파워 유저는 직접 `omd harness "<task>"` CLI 사용 후 호출 — 그 경우 아래 #1에서 기존 run 자동 감지

## Step 0 — task 추출

사용자가 슬래시 명령에 task를 같이 적었으면 (`/omd-harness 물을 하루 3번 이상 음용하도록 유도하는 웹앱 메인 화면`), 그 자연어 부분을 task로 사용한다.

빈 슬래시(`/omd-harness`)만 보냈으면 한 번 묻는다 (Question discipline `[Q]` 형식):

```
[Q] 어떤 디자인 작업을 진행할까요?
    shape: "[도메인] + [톤/스타일] + [핵심 화면]" — 예: "토스 스타일로 가족용 식단 앱 메인 화면"
```

## 사전 체크 (이 스킬 본체에서 직접 수행)

호출 즉시:

1. **Run 디렉토리 부트스트랩.** `.omd/runs/` 안의 가장 최근 run dir을 찾는다 (Bash `ls -t .omd/runs 2>/dev/null | head -1` 류). 발견 시:
   - 그 run의 `task.md`를 읽어서 사용자 task와 일치하는지 짧게 확인
   - 일치하면 **그 run 디렉토리 재사용** (재진입 시나리오)
   - 불일치하거나 없으면 신규 run 부트스트랩 — Bash로 internal helper 호출:
     ```bash
     omd harness "<extracted task>" --internal
     ```
     **이 CLI는 internal helper**다 (사용자에게 `--help`에서 보이지 않음). 출력은 single-line JSON:
     ```json
     {"runId":"run-...","runDir":".omd/runs/run-...","taskFile":".omd/runs/run-.../task.md","labVersion":null,"designMdExists":false}
     ```
     이 JSON을 파싱해서 `runDir` / `designMdExists`를 확보한다. **스킬은 절대 직접 mkdir 하지 않는다** — slug 일관성(한국어/이모지 처리), 표준 서브폴더, INDEX.md append는 모두 CLI 책임.

2. **DESIGN.md 존재 확인 + reference 의미 매칭 (skill-side, no API key).** 프로젝트 루트에 DESIGN.md 없으면 — **너 자신이 reference 추천을 한다** (외부 CLI 호출 없음, 외부 API key 없음).

   ### 매칭 절차

   a. **카탈로그 로드**: 다음 두 파일을 Read 툴로 전체 로드한다 (install-skills가 `.claude/data/`로 복사한다):
      - `.claude/data/reference-fingerprints.json` — 67개 reference의 voice fingerprint + tone keywords + visual theme + antipatterns + signature motion + has_personas + category
      - `.claude/data/reference-tags.md` — 사람-읽기 좋은 keyword 매트릭스
      - `.claude/data/vocabulary.json` — controlled vocab (사용자 task에서 키워드 추출 시 참조)

      만약 `.claude/data/`에 없으면 `node_modules/oh-my-design-cli/data/` 또는 패키지 root의 `data/` 에서 fallback Read.

   b. **사용자 task 분석 (silent)**:
      - controlled-vocab keyword 추출 (예: "헬스/웰니스 / calm-blue / 차분"  →  `[calm, minimal, approachable, warm]`)
      - 명시 brand hint 추출 (예: "토스 같은" → `["toss"]`)
      - 카테고리 추측 (Consumer / Productivity / Fintech / AI / Developer Tools / Design Tools / Automotive / Aerospace / SaaS / Enterprise — 67개 ref가 이 10개 카테고리로 분포)

   c. **점수 계산** (in-head, 결정론적):
      - 각 ref의 `tone_keywords` ∩ task keywords → 1점/매칭
      - brand hint match → +5점
      - 카테고리 일치 → +1점
      - top 5 정렬

   d. **검증** (hallucination 방지):
      - 추천하는 모든 id는 `reference-fingerprints.json` 의 `items[].id` 안에 *반드시* 존재해야 한다. 없는 id는 절대 만들어내지 않는다.
      - 검증 실패 시 다시 매칭.

   ### 사용자에게 제시 (Question discipline — prose, no `(a)(b)(c)`)

   ```
   DESIGN.md가 없어서 reference 한 개를 골라 부트스트랩할게요. [task 핵심 한 줄]을 보니 **[top1.id]**가 가장 잘 맞을 것 같아요 — [top1의 visual_theme 핵심 + 매칭 키워드 1-2개를 자연어 한 줄로. 예: '차분한 calm-blue + 한국 핀테크의 절제된 톤이 헬스 도메인과 자연스럽게 어울림'].

   이대로 가시려면 `go` (또는 `[top1.id]`).
   다른 후보: `[top2.id]` ([top2 한 줄 이유]) · `[top3.id]` (...) · `[top4.id]` (...) · `[top5.id]` (...)
   본인이 아는 다른 reference면 한 줄로 id만 (예: `vercel`) — 67개 카탈로그에 없으면 알려드립니다.
   ```

   ### 사용자 응답 처리

   - `go` 또는 reference id (top-5 안) → 그 id로 master spawn (Phase 5에서 master가 `omd init prepare --ref <id> --description "<task>" --json` 호출 — 이 부분은 v1 그대로 유지, delta_set 로직 안전성 위해)
   - 다른 reference id (top-5 밖이지만 카탈로그 안) → 동일하게 진행
   - 카탈로그에 없는 id → `해당 id는 67개 카탈로그에 없어요. top-5 중에서 골라주시거나 본인이 init먼저 따로 진행해주세요.`
   - `init먼저` → 종료, 사용자가 omd init 따로 진행 후 재호출
   - `중단` → 종료

<!-- API key check intentionally removed — the harness runs entirely inside the host CLI session (Claude Code / Codex). External API keys are NOT needed for v1. Cross-family jury is a v2+ opt-in feature. -->


## Master 호출

위 사전체크 통과 시:

```
Agent({
  description: "Run design harness for <task>",
  subagent_type: "omd-master",
  prompt: "<run_dir 경로> + <task>를 master에게 전달. Phase 1부터 시작. 사용자 체크포인트에서는 master가 turn을 멈추고 사용자 응답을 기다린다."
})
```

호출 후, **이 스킬 본체는 더 이상 일하지 않는다**. master가 user-facing 응답을 책임진다. 스킬은 단지 launcher.

## 사용자 체크포인트 처리

Master가 checkpoint에서 turn을 종료하면, 다음 사용자 메시지가 오면:

- 사용자 메시지가 **하네스 컨텍스트 안의 응답**이면 (예: "go", "fix the home screen IA", "stop") → master를 다시 spawn하고 그대로 전달.
- **다른 작업으로 바뀐 메시지**면 → 하네스를 일시 중단 (run dir에 `paused.flag` 생성). 사용자가 나중에 `/omd-harness resume` 하면 재개.

## 산출물 위치 (master가 emit, 이 스킬은 안내만)

```
.omd/runs/run-<ts>-<slug>/
├── task.md
├── brief.md
├── references-cited.md
├── journey.mmd
├── wireframes/
├── DESIGN.md.patch
├── components/
│   ├── manifest.json
│   └── microcopy.json
├── assets/
│   ├── brief.md
│   ├── manifest.json
│   ├── briefs/         # user self-fill
│   ├── fallback/       # downloaded
│   └── pinterest-refs/ # url listings
├── eval/
│   ├── deterministic.json
│   ├── jury.json
│   └── screenshots/
├── persona-feedback/
│   └── <persona>.json
├── critique.md         # iteration > 1일 때
├── handoff/
│   ├── v0.zip
│   ├── cursor.zip
│   └── subframe.zip
├── run.log
└── postmortem.md
```

## 이 스킬이 *하지 않는* 것

- Phase 로직 실행 (master가 함)
- Sub-agent 직접 spawn (master가 함)
- 사용자 응답 해석/라우팅 (master가 함)
- DESIGN.md 직접 수정 (Phase 5에서 master가 함)

이 스킬의 책임 = **launcher + 사전체크 + 안내**, 그 이상은 절대 X.

## 금지

- Master 없이 phase를 직접 수행하지 말 것.
- 사용자 체크포인트를 자동 승인하지 말 것 (master의 응답에 사용자가 직접 답해야 함).
- Run 디렉토리를 임의로 정리/삭제하지 말 것.

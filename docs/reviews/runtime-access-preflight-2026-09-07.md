# 실행 전 점검 — 브라우저·로그인·goal

2026-09-07. 사용자 요청 범위는 사전 점검과 처리다. 본 프로젝트 작업, 벤치, 미디어 생성,
goal은 시작하지 않았다. [기계 판독 증거](evidence/runtime-access-preflight-2026-09-07.json).

후속 [워커 실행 준비 판정](execution-readiness-2026-09-07.md)에서 Opus/Grok 파일 작업과
Grok4개 동시 파일 작업까지 검증했다. 이 문서의 미확인 목록은 해당 후속 기록과 함께 읽는다.

## 확인 및 처리

| 항목 | 결과 | 실행에 반영할 처리 |
|---|---|---|
| 전역 browser-harness 강제 | Codex 스킬 frontmatter에 `Always use browser-harness for any web interaction` 존재. source/build 사본이 catalog에 각각 나타남 | 전역 설치를 삭제하지 않고 프로젝트 AGENTS에 사용자의 Computer Use Chrome 우선 지시 기록 |
| Codex Computer Use Chrome | extension 연결, 새 탭 생성·Grok Imagine 이동·로그인된 composer 확인 | 라이브 브라우저 작업의 우선 경로. browser-harness의 CDP 연결은 선행 조건 아님 |
| iTerm2 Computer Use | 앱은 실행 중이나 도구가 safety policy로 제어 거절 | 새 창/Grok TUI는 열지 못함. 다른 GUI 자동화로 우회하지 않음 |
| Claude 인증 | sandbox auth status는 false, host auth status는 claude.ai / Max 로그인 true | 재로그인하지 않음. 기존 키체인을 읽을 수 있는 실행 경로 사용 |
| Opus 5 호출 | `claude-opus-5`로 marker 응답, exit0, 3.07초 | CLI 실행 가능. modelUsage에는 Opus 5와 보조 Haiku가 함께 있어 순수 단일 모델 비용으로 합치지 않음 |
| Grok 4.6 호출 | 일반 진단 7.19초, 격리 프로필 진단 4.39초, 모두 marker/exit0 | 로그인·기본 모델 호출 정상. init `grok-4.6`, modelUsage `grok-4.6-build` 귀속을 함께 기록 |
| Codex 계정 | CLI ChatGPT 로그인, 계정 사용량21%/잔여79% | 이전 Sol capacity 오류는 로그인 오류와 구별. 이번에 Sol 모델 자체를 재호출하지는 않음 |
| Grok Imagine 웹 | 로그인된 이미지/비디오 입력 UI 확인 | 웹 로그인과 CLI 인증은 별도 증거. 생성 quota·실제 생성·다운로드 성공은 아직 미확인 |

## Grok 격리에서 실제로 고친 접근

빈 `--tools ""` 인자는 disable-all 보증으로 쓰지 않는다. 실제 init에 기본 도구가 그대로
나타났다. 진단에서 도구 사용은0회였지만, 이것을 도구 제거 성공으로 해석하면 안 된다.

공식 설치 문서 `docs/user-guide/05-configuration.md`, `08-skills.md`, `14-headless-mode.md`를
읽고 전역 설정을 바꾸지 않는 임시 프로필을 구성했다:

- `GROK_HOME`은 task-local 디렉터리로 지정. `HOME`은 변경하지 않음.
- `[skills].ignore`로 전역 `.agents/.claude/.cursor/.codex` skill 경로 제외.
- 문서화된 Claude/Cursor compatibility cells 비활성화, plugin 제외 목록, memory/subagents/workflows 비활성화.
- `[cli] use_leader = false`로 기존 shared leader 상태를 재사용하지 않는 경로 선택.
- 빈 도구 목록 대신 명시적 `--tools todo_write`, MCP meta-tool/Agent deny, permission mode `dontAsk` 사용.
- 임시 credential 사본은 비공개 폴더에서 진단에만 사용하고 삭제. repo에 credential/raw auth 기록 없음.

실제 headless init에서 **skills0 / tools=[todo_write]**, tool invocation0, marker 응답 성공을 확인했다.
다만 `inspect`에는 disabled 호환 항목도 남으며 plugin 경로 일부는 상태가 명확하지 않았다.
따라서 예전 발견 개수를 실제 활성 도구 개수로 해석하지 않는다. 본 벤치는 실제 프롬프트/도구
귀속과 부정 격리 테스트, 4세션 동시 실행 검증을 별도로 통과해야 한다.

## 브라우저·터미널 운영 방식

모델 작업은 Grok Build / Claude Code / Codex의 직접 CLI 실행으로 관리한다. stdout·종료 코드·
모델 귀속·시간·작업 경로를 기록하기 쉽다. iTerm2 TUI는 사람이 직접 관찰·개입할 때 유용하지만
이번 환경에서는 Computer Use 제어가 차단되어 필수 실행 경로로 삼지 않는다.

Codex의 Computer Use가 Grok/Claude CLI에 자동 제공되는 것은 아니다. 공통 브라우저 담당이
조건별 요청을 그대로 집행하고, 창작 판단이나 다른 조건의 결과를 섞지 않는 연결이 필요하다.
공유 Chrome은1슬롯, 모델 작업은4조건 병렬이라는 기존 사용자 결정을 유지한다.

## goal 시작 전 경계

현재 `get_goal` 결과는 null이다. 사용자가 “바로 들어가지 말고” 점검을 요청했으므로 생성하지 않았다.

다음 실행을 시작할 때 goal에 넣을 것은 [5트랙 계획](../OMD_EXECUTION_PLAN_2026-09-07.md)의
구체적 산출·검증·마일스톤이다. 채팅 밖의 작업 보드와 CURRENT_STATE를 계속 갱신하며,
끝난 항목은 증거를 붙여 닫는다. 먼저 F의 실행/배포 기반을 진행하고 독립 준비 작업을 병행한다.

- 일반 구현은 Sol, 페이지/글은 Opus, 벤치/에셋은 Grok. Astra/Fable은 기획·조정에만 사용.
- 벤치의 모델/스킬/도구/예산 동결 이후 임의 fallback 없음. 계정 로그아웃과 capacity/일시 제한을 구분.
- A의 방향/작품 채택과 실제 게시·배포 판단을 자동 승인으로 바꾸지 않음. 해당 단계에서는 산출물과 상태를 남김.
- E의 발행 후14일 측정은 개발 프로세스를14일 계속 돌리는 방식으로 처리하지 않음. 실제 발행 시점에 후속 측정 실행 방식을 정함.
- 이번 점검 성공은 본 벤치/아프로디테/출시 완료가 아님. 완성되지 않은 broker·미디어 flow·receipt를 완료로 표시하지 않음.

현재 로그인 때문에 재인증을 요청할 필요는 없다. 남은 개발 사전 조건은 실제 browser broker,
미디어 capability/다운로드 검증, benchmark context isolation·4세션 concurrency 검증이다.

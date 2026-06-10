# Release bench routine — 2종 (first-60s + taste-loop)

릴리스마다 동일 기준으로 런타임 품질을 추적하는 2개의 채점 스크립트.
**스크립트는 claude를 호출하지 않는다** — 헤드리스 런은 오퍼레이터가 돌리고,
스크립트는 산출물만 결정적으로 채점한다.

- 장부: `research/bench-results.jsonl` (gitignore — 로컬 append-only,
  taste-loop 결과는 `"bench": "taste-loop"` 필드로 구분)
- 베이스라인: **first-60s 10/10 @ v1.7.2** (ref: 29cm, 2026-06-10)

## 1. first-60s 벤치 (omd:init 부트스트랩 품질, 10점)

```bash
# 1) 빈 디렉토리에 설치
mkdir /tmp/bench-init && cd /tmp/bench-init
npx -y oh-my-design-cli@<ver> install-skills --all --agent claude-code --dir .

# 2) 헤드리스 부트스트랩 런
claude --dangerously-skip-permissions -p \
  "Set up our design system — 29cm-style. (벤치 모드: 레퍼런스 29cm 확정, 루트 부트스트랩, §11-13 skip)"

# 3) 채점 (repo에서)
node scripts/bench/score-init.mjs --dir /tmp/bench-init --ref 29cm --version <ver>
```

채점 축: DESIGN.md 생성(2) / init-context ref 일치(2) / 섹션 구조 보존(1) /
카탈로그 실제 사용(1) / variation(1) / philosophy 레이어(1) / §11-13 정직성(1) /
셤 설치(1).

## 2. taste-loop 벤치 (취향 피드백 루프, 10점)

first-60s 벤치를 마친 디렉토리(DESIGN.md 존재)를 그대로 재사용한다 —
릴리스 루틴에서 두 벤치는 한 디렉토리에서 연달아 돈다.

```bash
cd /tmp/bench-init

# 1) 교정 발화 런 — remember 캡처 (transcript는 충돌 고지 채점용으로 보관)
claude --dangerously-skip-permissions -p \
  "버튼은 전부 pill 모양으로 하고, 카피에 이모지는 절대 쓰지 마. 기억해줘." \
  2>&1 | tee taste-run1.txt

# 2) 반영 확인 런 — pending preference가 다음 산출물에 반영되는가
claude --dangerously-skip-permissions -p \
  "DESIGN.md 기반으로 CTA 버튼이 있는 hero 섹션을 hero.html 한 파일로 만들어줘"

# 3) 채점 (repo에서)
node scripts/bench/score-taste.mjs --dir /tmp/bench-init --ref 29cm \
  --version <ver> --transcript /tmp/bench-init/taste-run1.txt \
  --artifact /tmp/bench-init/hero.html
```

채점 축 (10점):

| 체크 | 점수 | 내용 |
|---|---|---|
| `pending_entry_canonical` | 2 | `.omd/preferences.md`에 canonical 포맷(`##` heading + ` ```omd-meta ` + `status: pending`) 엔트리 존재 |
| `correct_scope` | 1 | 기대 scope 전부 pending에 등장 (기본 `components.button,voice`, `--scopes`로 교체 가능) |
| `parser_roundtrip` | 1 | 배포된 `preferences-parser.cjs`가 실제로 파싱 (유효 id + timestamp + scope) |
| `conflict_flagged` | 1 | preference가 DESIGN.md와 모순될 때 transcript에 충돌 고지 (`--transcript` 미제공 시 0.5) |
| `artifact_reflects` | 3 | 2차 런 산출물에 preference 반영 — pending 본문에서 reflector 도출 (pill→`border-radius` 999/9999/full, 이모지 금지→이모지 부재) |
| `session_start_surfaced` | 2 | 벤치 디렉토리의 `session-state-loader.cjs`를 simulated SessionStart로 실행 → fold-in 제안 또는 pending 카운트가 컨텍스트에 실림 |

시나리오를 바꿀 때는 발화/산출물 프롬프트와 함께 `--scopes`만 갈아끼우면 된다 —
reflector는 pending 본문에서 도출되므로 매칭되는 것만 채점된다.

## 릴리스 체크리스트

1. `npx vitest run test/unit` green
2. first-60s 벤치 → 10/10 유지 확인 (베이스라인 @1.7.2)
3. taste-loop 벤치 → 점수 하락 시 release blocker로 취급
4. `research/bench-results.jsonl`에 두 결과 append 확인 후 publish

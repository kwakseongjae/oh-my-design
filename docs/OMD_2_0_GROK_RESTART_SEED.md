# Seed: omd-grok46-restart-v0.1 — 2.0.0 벤치마크 grok-4.6 재시작

> Ouroboros seed (실행: `ouroboros_execute_seed(seed_path=...)` — 어댑터 패치 적용된
> 새 세션에서). 2026-08-14 사용자 결정: Luna·Sol 전면 은퇴, 테스트 모델·워커 모두
> grok-4.6. caf0 Luna epoch(terminal 4/48)는 재개하지 않고 immutable diagnostic으로
> 영구 동결. 벤치마크는 grok 트랙으로 0셀부터 재시작한다.

## Goal

grok-4.6을 model-under-test로 하는 새 preregistered 벤치마크 트랙을 만들어
2.0.0 출시 게이트(Wow Preview)를 다시 달릴 수 있게 한다. Luna lane과 구조적으로
동일한 sealed evidence를 산출해야 한다.

## Model roles (2026-08-14 개정 — 이전: Sol xhigh/medium + Luna max)

| 역할 | 모델 | 채널 |
| --- | --- | --- |
| 기획·검수·로드맵·오케스트레이션 | Claude Fable | Claude Code 세션 (본인) |
| 구현 워커·독립 리뷰어 | grok-4.6 | Grok Build CLI headless (grok-fleet 계약) |
| 벤치마크 비교 셀 (MUT) | grok-4.6 | 격리 run-grok lane (아래 WP1) |
| 워크플로우 구조화 | Ouroboros | interview→seed→execute→qa |

워커 결과물은 오케스트레이터가 반드시 코드로 재판정한다(grok-fleet 판정 규율).
벤치마크 셀과 워커 실행은 HOME/캐시/세션을 공유하지 않는다.

## 검증된 사실 (2026-08-14 Fable 실측)

- `~/.grok/bin/grok` 1.0.3, `-p ... -m grok-4.6 --output-format plain` 헤드리스 동작.
- 격리 실행 PASS: `HOME=<iso>` + `auth.json`만 복사 → 정상 응답, 전역
  스킬/AGENTS.md/MCP 미로드, 격리 홈에 자체 `config.toml`/`models_cache.json`(4,471B)/
  `sessions` 생성. → Codex lane의 frozen-HOME/cache byte-gate 패턴 이식 가능.
- 격리 플래그: `--no-subagents --no-memory --disable-web-search --no-auto-update`,
  추가 후보 `--tools` allowlist, `--sandbox <PROFILE>`(env `GROK_SANDBOX`),
  `--max-turns`, `--permission-mode`.
- 제약: SuperGrok 공용 주간 쿼터(Chat/Build 공유·정량 비공개), 병렬 상한 1–2.

## Work packages (순서 고정)

1. **WP1 run-grok runner** — `benchmarks/ui-resolve-bench`의 run-codex와 동형인
   run-grok lane: 격리 HOME 생성(frozen auth/config byte-freeze), grok
   `models_cache.json` pre/post byte gate(fetched_at류 volatile 필드만 허용),
   플래그 고정, raw stream/usage 보존, hidden side-effect 감사, SHA receipt.
2. **WP2 preregistration + admission** — clean commit에 결박된 새 matrix
   (3 tasks × 6 arms × 3 trials, Taste 6셀 ineligible → 48 scheduled),
   model id `grok-4.6` 고정, admission receipt는 생성 호출 없이 발급.
3. **WP3 결측 규칙 사전 잠금 (셀 실행 전)** — capacity/usage-limit 셀은 품질
   비교에서 제외하고 별도 보고(Luna caf0의 order4 교훈), 2번째 capacity 이벤트
   = epoch inconclusive, arm×task 최소 유효 n=2 미만이면 해당 축 판정 불능
   (판정 불능 ≠ 패배 ≠ 출시). 쿼터 현실을 반영해 round 단위 wave 실행
   (r1 16셀 → r2 → r3)을 preregistration에 명시.
4. **WP4 evaluator 재사용** — deterministic evaluator·score-gate·required states
   무변경 재결박(model id·결측 규칙만 개정). Luna lane과 점수 비교는 하지 않는다
   (다른 MUT — 교차 비교 claim 금지).
5. **WP5 order1 실행** — admission 후 order1 model-only 1회·retry0 실행,
   terminal/partial record 봉인으로 lane end-to-end 증명.

## Hard constraints (사용자 철학 — 위반 시 중단)

- Unknown means absent: 조작·추정 금지, 미해결 값은 생략.
- 결과가 존재하기 전에 규칙을 잠근다. 결과가 생긴 후 규칙 소급 변경 금지.
- 셀당 1회, retry/replacement/fallback 0, rerun 금지, 실패도 영구 보존·공개.
- 모든 증거 SHA-256 결박, fail-close (의심스러우면 infrastructure-invalid).
- 스크린샷이 예뻐도 objective proof(UI-Resolved) 없이는 품질 주장 금지.
- 프롬프트·작업 디렉토리에 레포 시크릿 유입 금지.
- run 디렉토리 삭제 금지.

## Acceptance criteria

- [ ] WP1: 격리 receipt(전역 미로드 증명) + cache byte-gate 적대 테스트 PASS.
- [ ] WP2: matrix/preregistration/admission SHA 발급, baseline terminal0/missing48.
- [ ] WP3: 결측·wave 규칙이 preregistration 문서에 포함되고 셀 실행 전 커밋됨.
- [ ] WP5: order1 terminal record + partial-01 봉인, evaluator 실행(또는 정직한
      실패 기록), 구조가 Luna lane 기록과 필드 호환.

## Open decisions (사용자)

- Gate 2 transfer 확인 모델(기존 Luna/Terra/Sol) 재정의 — grok 단일이면 transfer
  게이트 자체를 어떻게 대체할지.
- 블라인드 리뷰 5인 모집 채널·시점.

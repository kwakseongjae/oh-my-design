# T1/T2 실행 계획 — 규격화 · 마이그레이션 · 신규 레퍼런스

> 2026-08-23 수립. T3 에셋 생성과 **병렬**로 돈다.
> 워커 배치: **grok-4.6 = 실작업 워커** · sol(codex) = 독립 검증 레인 · opus5 = 오케스트레이션 + 통합.
> 상위 계획: `docs/OMD_3TRACK_PLAN.md` (APPROVE_WITH_CONDITIONS C1–C7 — 전부 T3 측정기 조건이며
> `test-v2/tools/` 파이프라인화로 충족. 판정 기록은 T3 쪽 gate-status가 정본).

## 목적지에 대한 사실 하나

새 규격을 발명하지 않는다. **목적지는 이미 있다 — `spec/design-md-core-v2.md`.**
T1의 실제 산출물은 규격이 아니라 **legacy §1–§15 → Core v2 필드의 판정 완료된 대응표**이고,
그 대응표가 `docs/design-md-weight/2026-08-22-essence-verdict.md`다 (개정본, grok 재심 중).

"핵심을 남기고 나머지를 위임"의 위임처도 판정돼 있다:

| 떠나는 것 | 가는 곳 |
|---|---|
| 검증된 토큰·규칙 | `foundations.tokens` / `foundations.rules` (최소 필드 단위) |
| 상태 매트릭스 (§14) | 그래프 채택 전 본문 보존 → `components_states.components[].interaction.state_applicability` |
| 도구별 프롬프트·명령 (§9) | **삭제** (보편 규칙만 Governance로) |
| 가상 페르소나 (§13) | 검증된 audience/task만 Experience로, 나머지 삭제 |
| 분위기 에세이·연혁 나열 | 범위에 기여하는 요약만 `experience.summary`, 나머지 삭제 |
| 출처 원장·freshness | migration provenance로 분리 |

## T1 — 규격화 (남은 것)

| 단계 | 내용 | 워커 | 게이트 |
|---|---|---|---|
| T1-2 재심 | essence-verdict 개정본 승인 | grok-4.6 | **진행 중** (백그라운드) |
| T1-3 | 골든 샘플 3건 수동 마이그레이션 — 성격이 다른 레퍼런스 3개(토큰 풍부/서사 중심/부분 결측)를 essence-verdict 대응표대로 Core v2로 옮기고, 왕복 검증(검증된 값 손실 0 · 발명된 값 0)을 실물로 통과 | grok-4.6 이관, sol+opus5 교차 | T1-2 승인 후 |
| T1-4 | 마이그레이션 하네스 — **워커(판단) + 게이트(강제) + 규칙집(누적)**. diff 0 파서는 폐기 (마이그레이션은 의미 읽기라 결정론 재생산 불가 — 무리한 기계화가 sol이 잡은 의미 반전을 재생산한다). 정본: `test-v2/tools/migrate-reference.mjs` + `docs/design-md-weight/MIGRATION_RULEBOOK.md`. grok 승인: `docs/reviews/t2-1-open-2026-08-23-grok.md` | opus5 게이트, grok 워커, sol 표본 | **완료** |

## T2 — 마이그레이션 + 신규 (T1-4 후)

| 단계 | 내용 | 방식 |
|---|---|---|
| T2-1 | 440개 일괄 마이그레이션 | 웨이브 **5개씩**, 정본 경로(grok 재심 `docs/reviews/t2-1-protocol-2026-08-23-grok.md`): **이관 → F3 감사 1회 → 게이트 12종 → sol 5/5 전수(첫 FAIL은 기대값) → 목록 개정 → 동일 sol 재확인**. 표본율은 5웨이브 실측(sol 첫 판정 16/16 FAIL, 계통적)으로 폐기. 재확인 5/5 전 다음 웨이브 금지. mirror는 신규 id만 |
| T2-2 | 신규 레퍼런스 파이프라인 | **T3에서 만든 것을 그대로 쓴다**: `discover-targets.mjs`(표면 분류·도달성) → `pipeline.mjs`(게이트→캡처→저장→교차검증). 채널: Claude = claude-in-chrome 또는 Playwright, Codex = in-app browser. 쿠키 모달은 accept로 넘긴다(사용자 지시, `DISMISS_SELECTORS`에 이미 구현). 새 레퍼런스는 **처음부터 Core v2로 생성** — 구 형식으로 만들고 다시 마이그레이션하는 낭비를 없앤다 |
| T2-3 | 440 → 600 (+160) | 웨이브 5개 × 32웨이브. Proof 게이트(원시 샘플 ≥5, KR/TW 지역소스 ≥2), country=모회사 HQ, curation pool 자동 편입. 완료 시 count-sync 체크리스트(i18n README·badge·connector·MCP route `.max`·funnel 문서 — sync-catalog가 놓치는 목록) |

## 병렬성 지도

```
지금 동시에:
  T3 에셋 생성 (grok 워커, 브랜드별 세션)   ← 별도 세션이라 충돌 없음
  T1-2 재심 (grok)                          ← 진행 중
T1-2 승인 후:
  T1-3 골든 샘플 ∥ T3 에셋 웨이브 계속
T1-4 후:
  T2-1 마이그레이션 웨이브 ∥ T2-3 신규 웨이브   ← 서로 다른 id를 만지므로 병렬 가능
직렬 강제:
  T1-2 → T1-3 → T1-4 → T2-1   (대응표 승인 없이 옮기면 440개를 두 번 옮긴다)
```

## 하드 룰 (전 단계 공통)

- Unknown means absent — 최소 미해상 경계에서 생략. `[FILL IN]`은 신규 작성 금지.
- 캐노니컬 본문을 삭제·축소해 절대성을 강제하지 않는다. 없는 폰트는 그 패밀리만 빠진다.
- 서사 근거와 UI 토큰 근거는 별개다. 공식 폰트의 역사는 토큰으로 승격하지 않고도 남는다.
- 표면 도메인 분리 — 기업/마케팅 표면 관측으로 제품 토큰을 채우지 않는다 (`discover-targets.mjs`의 선정 게이트가 이걸 코드로 강제한다).
- run 디렉터리 삭제 금지, 커밋은 사용자 지시로만.

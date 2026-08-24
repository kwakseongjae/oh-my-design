# 재현 가이드 — 이 벤치마크를 남의 컴퓨터에서 다시 돌리는 법

> 이 문서의 독자는 우리가 아니라 **처음 온 사람**이다. 결과 숫자를 믿으라고 요구하는
> 대신, 같은 입력으로 같은 절차를 돌려 같은 검증을 통과하는 경로를 준다.
>
> 원칙: **git에는 입력과 검증 루트, 저장소에는 산출물.** 무거운 결과물은 repo에 없고,
> 대신 모든 바이트의 SHA-256이 `manifests/`에 커밋돼 있다. 어디서 받았든 — 로컬
> 스토어든 R2든 — 매니페스트와 대조하면 우리가 만든 그 바이트인지 판별된다.

## 무엇이 어디에 있나

| 층 | 위치 | 성격 |
|---|---|---|
| 과업 정의 + 스타터 | `tasks/` (git) | 재현의 입력 — 각 과업의 PROMPT.md·task.json·starter 코드 |
| 입력 픽스처 | `fixtures/showcase-2.0`, `fixtures/autopilot-greenfield` (git) | 과업이 참조하는 소재 |
| 실행 스크립트 | `scripts/`, `config/` (git) | 러너·채점기 |
| 경쟁 스킬 팩 | 스토어 (`manifests/competitor-skills-2.0.json`) | 타사 저작물 — repo에 재배포하지 않고 SHA로 고정 (`fixtures/pack-sha.json`이 트리 SHA를 이중 고정) |
| 런 결과 | 스토어 (`manifests/reports.json`) | 산출물 — 데이터이지 소스가 아니다 |
| e2e 산출 앱 | 스토어 (`manifests/e2e.json`) | 산출물 |

## 산출물 받기와 검증

```bash
# 로컬 스토어가 있으면 (이 레포를 만든 머신):
node scripts/bench-store.mjs --verify

# R2가 발행돼 있으면 (매니페스트의 store.remote 참조):
#   각 매니페스트 entry.path를 https://<r2-public>/<prefix>/<path>로 받아서
#   entry.sha256과 대조한다. 매니페스트가 검증 루트다 — URL은 배달 수단일 뿐이다.
```

## 처음부터 다시 돌리기

1. **레퍼런스 근거 수집** (선택 — 스냅샷 검증까지 재현하려면):
   `test-v2/tools/README.md`의 파이프라인. `node pipeline.mjs --targets ../targets.json`
   한 줄이 적합성 게이트 → 캡처 → 불변 저장 → 교차검증을 돈다. 라이브 사이트는
   변하므로 **너의 캡처는 우리 캡처와 다르다** — 그래서 우리 evidence의 측정값이
   `test-v2/00-evidence/*/evidence.json`에, 원본 PNG의 SHA가 매니페스트에 남아 있다.
2. **에셋 생성** (선택): `node generate-assets.mjs --brand <id> --run` — 생성은
   확률적이라 같은 그림이 나오지 않는다. 대신 `measure-generated.mjs`가 §4.2 기준으로
   같은 잣대의 점수를 낸다. 비교 대상은 그림이 아니라 분포다.
3. **벤치 과업 실행**: `tasks/<id>/PROMPT.md`를 대상 도구에 주고 starter에서 시작한다.
   경쟁 팩은 매니페스트로 받아 `fixtures/pack-sha.json`의 트리 SHA와 대조 후 사용한다.
4. **채점**: `scripts/`의 채점기. 루브릭은 `test-v2/90-comparison/RUBRIC.md` —
   판정 이력과 동결 조건까지 그 문서와 `docs/reviews/`에 전부 남아 있다.

## 이 구조를 지키는 규칙

- 산출물을 git에 다시 커밋하지 않는다. 새 런은 `bench-store.mjs --ingest`로 스토어에
  넣고 매니페스트만 커밋한다.
- 매니페스트 없는 산출물은 존재하지 않는 것으로 취급한다 — SHA 없는 파일은 누구도
  검증할 수 없다.
- 경쟁 팩의 버전을 올릴 때는 `pack-sha.json`과 매니페스트를 같은 커밋에서 갱신한다.

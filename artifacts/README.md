# artifacts/ — 로컬 전용 작업 산출물

이 트리는 **기계가 만든 작업 산출물**을 담는다. 대부분 git에 올리지 않는다.

오너 결정(2026-09-16): 캡쳐 근거 145MB는 내부 산출물이므로 **저장소에 넣지 않는다.
다만 제거하지도 않는다.**

## 두 종류가 섞여 있다

| 경로 | git | 성격 |
|---|---|---|
| `reference-evidence/` | **올리지 않음** | 브라우저 캡쳐 번들 177개, 145MB. 레퍼런스 집필의 1차 근거 |
| `reverify/` | **올리지 않음** | 재검증 큐·태스크 패킷 333개. 재생성 가능 |
| `reference-create/` | 커밋됨 | CREATE 실행 기록(packet/run). 영구 학습 산출물이라 남긴다 |
| `local-store.manifest.json` | 커밋됨 | 위 두 로컬 트리의 **보관 증명** |
| `README.md` | 커밋됨 | 이 문서 |

`.gitignore`는 경로별로 명시한다. 새 로컬 트리를 만들면 `.gitignore`,
`scripts/local-store.mjs`의 `TRACKED`, 이 표를 **함께** 고친다.

## "커밋 안 함"과 "없어져도 됨"은 다르다

`reference-evidence/`는 재생성이 **비싸다**. 브라우저로 라이브 사이트를 다시 돌아야 하고,
그 사이 사이트가 바뀌면 같은 값이 나오지 않는다. 2026-07-11~14 캡쳐본은 그 시점의 관측이다.

그리고 지금 이것이 만료 대응의 입력이다 — 140개 verified 레퍼런스 중 **55개(R트랙)는
브라우저 재실행 없이 이 번들만 읽어서** 복구된다. 번들 평균 컴포넌트는 49.2개인데
출하된 DESIGN.md는 2.9개를 싣는다. 버려진 94%가 여기 남아 있다.

그래서 파일은 저장소 밖에 두되, **무엇이 있어야 하는지는 저장소가 기억한다.**
이것은 `benchmarks/ui-resolve-bench`가 이미 쓰는 방식이다 —
번들은 `~/.omd/bench-store`, SHA 매니페스트는 커밋.

## 보관 증명

```bash
node scripts/local-store.mjs --verify     # 매니페스트 대비 현재 상태 검사
node scripts/local-store.mjs --write      # 지금 상태를 매니페스트로 기록
node scripts/local-store.mjs --verify --json
```

`--verify`는 파일별 SHA-256을 대조해 누락·변조·추가를 구분한다.
critical 트리에 누락이 있으면 exit 1.

판정값: `OK` · `AHEAD`(기록 이후 추가됨, 정상) · `CHANGED`(내용 변경) ·
`MISSING`(critical 누락, 실패) · `MISSING_SOFT`(재생성 가능한 트리의 누락).

새로 캡쳐해서 파일이 늘면 `--write`로 다시 기록한다.

## 백업

**매니페스트는 손실을 알려줄 뿐 막지 못한다.** 실제 사본은 이 디스크 밖에 있어야 한다.

현재 백업 위치: *(미설정 — 아래 중 하나를 정해 여기에 적을 것)*

- 외장 디스크 / Time Machine에 포함되는 경로
- 개인 클라우드 드라이브의 동기화 폴더
- `~/.omd/` 아래(저장소 밖)에 두고 별도 백업 대상에 포함

복구 절차: 백업에서 `artifacts/reference-evidence/`를 통째로 되돌린 뒤
`node scripts/local-store.mjs --verify`가 `OK`를 반환하는지 확인한다.

되돌릴 백업이 없다면 재캡쳐해야 한다:
`web/scripts/capture-reference-evidence.ts <reference-id>` — 단, 그것은
오늘의 사이트를 관측한 것이지 7월의 관측이 아니다. 같은 증거가 아니다.

## 하지 말 것

- 이 트리의 파일을 git에 추가하지 않는다. 145MB는 저장소에 들어갈 물건이 아니다.
- 매니페스트를 손으로 고치지 않는다. `--write`로만 갱신한다.
- `--verify` 실패를 매니페스트 재기록으로 덮지 않는다. 누락은 먼저 원인을 확인한다.

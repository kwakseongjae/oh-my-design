# 스킬 산출물 품질 게이트

`npm run gate:quality` — 등록된 스킬 산출물마다 결정론적 검사기를 돌린다.
`npm run gate:quality:strict` — MISSING·STALE 도 실패로 센다(커버리지 감사용).

## 왜 있나

2.0.1 도그푸딩은 네 경로가 **「돌아간다」까지만** 확인했다. 결과물의 대비·뷰포트 이탈·브랜드 일치는
사람이 따로 봐야 했고, T3-3 레인 A에서 같은 종류의 결함(합의 결함 19건 중 11건이 CONTRAST)이 반복됐다.
이 게이트는 그 확인을 기계에 맡긴다. `prepublishOnly` 체인에 들어 있어 **실패하면 publish 가 막힌다.**

## 판정

| 상태 | 뜻 | 게이트 |
|---|---|---|
| PASS | 등록된 검사 전부 통과 | 통과 |
| FAIL | 검사기가 결함을 냈다 | **막는다** |
| STALE | 산출물이 그 스킬 파일보다 오래됐다 — 지금 통과해도 지금 스킬을 검증한 게 아니다 | `--strict` 에서만 막는다 |
| MISSING | 그 칸의 산출물이 아직 없다 — 커버리지 구멍 | `--strict` 에서만 막는다 |

MISSING 을 목록에서 빼지 않는다. **있는 것만 검사해 통과시키면 커버리지 부족이 숨는다.**

## 픽스처 추가·갱신

1. `test-v2/content-runs/fixtures.json` 의 `fixtures[]` 에 칸을 적는다(id·skill·brand·artifact·checks).
2. 해당 스킬을 실제로 돌려 `artifact` 경로에 산출물을 만든다. 스킬을 고쳤으면 다시 만든다 — STALE 이 그 신호다.
3. `sourceSkills` 는 그 스킬의 「고치면 픽스처가 낡는」 파일 목록이다. 규칙을 새 파일로 옮기면 여기도 고친다.

## 현재 상태 (2026-09-03 최초 도입)

- `landing/stripe`, `landing/toss` — 검사 통과. designer-review 규칙을 고친 뒤라 STALE.
- `autopilot/stripe`, `autopilot/toss` — **contrast FAIL**(29건·13건). 액센트 위 텍스트와 링크가 4.5:1 미만이다.
  autopilot 에 대비 검사를 원자 검사로 넣은 변경(#89)이 겨냥한 바로 그 결함이며, 픽스처를 다시 만들면
  통과해야 한다. 통과하지 못하면 그건 스킬이 아직 못 고친 것이다.
- `landing/karrot`, `autopilot/karrot` — MISSING. 세 번째 브랜드는 아직 돌리지 않았다.

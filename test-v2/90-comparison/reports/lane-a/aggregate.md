# 레인 A 집계 — 2026-09-03T00:24:13.576Z

## 조건부

- arm 호스트 grok-4.6 (grok build CLI) · 이미지 채널 Grok Imagine · 평가자 2계열(xai·anthropic)의 독립성 한계 §3.2a-2
- 첫 렌더 = 제출 render.html (run.json outputs.firstRender) — 라이브 하네스 캡처 아님
- 레인 B 부재 — 레인 A 단독 결론. 교차 레인·종합 총점 없음 (§1)
- 파일럿 기계 검증기(SHA 73d13200…)의 §7.1.8 탐지기는 절차가 이미 적은 D-*와 UIUX Pro Max 변형 가운데 D-P2-1과 ui-ux-pro-max를 놓쳤으므로 그 기간의 도구 PASS는 해당 표지의 부재를 보증하지 않으며, 개정기(SHA ae588ca3…)로 기존 23건을 재검증한 결과 20건은 잔존이 없었고 잔존이 확인된 apple/omd rep-2·3·4는 채점 제출 전에 재전사했다 (grok 판정 2026-09-02 Q3)
- α 미달 축은 INCONCLUSIVE — 원점수 병기, 합의점수 대체 없음 (§3.7)

## arm별

| arm | 총점 | 결함 M | 근거 M | 식별 M (|B_k|) | 문서 M | abandon | P0 run | PASS |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| omd | 75.1 | 98.6 | 51.0 | — (0) | 94.1 | 0 | 0 | FAIL {"total75":true,"axes60":false,"abandon":true,"p0":true} |
| hallmark | 68.9 | 98.5 | 47.8 | — (0) | 73.6 | 0 | 0 | FAIL {"total75":false,"axes60":false,"abandon":true,"p0":true} |
| uiuxpromax | 74.2 | 97.8 | 52.6 | — (0) | 88.2 | 0 | 0 | FAIL {"total75":false,"axes60":false,"abandon":true,"p0":true} |

## 동률·우승 (§7)

```
{"top":"omd","second":"uiuxpromax","observed":0.8721634920634784,"ci95":[-0.8161904761904992,2.6027883597883203],"soleWinner":false,"verdict":"NO DECISIVE WINNER"}
```

## 평가자 일치도 (§3.7)

- existence: α=-0.762 (n=93, 임계 0.67) → INCONCLUSIVE
- severityAndRatings: α=0.282 (n=660, 임계 0.8) → INCONCLUSIVE
- brand9: α=-0.119 (n=80, 임계 0.67) → INCONCLUSIVE

## 블라인드 무결성 — 사후 arm 추측 (§3.6, 점수 아님)

- grok-4.6: 106/108 슬롯 적중 (98%, 우연 33%) → **비블라인드로 취급한다** · arm별 omd 35/36 · uiuxpromax 35/36 · hallmark 36/36
- sonnet5: 22/108 슬롯 적중 (20%, 우연 33%) · arm별 omd 12/36 · uiuxpromax 0/36 · hallmark 10/36

## 결함 합의

- 확정 결함 19 · 재채점 대기 0 · disputed 74

## 미채점 칸·축

- 없음

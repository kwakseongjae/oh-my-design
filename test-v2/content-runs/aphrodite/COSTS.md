# 아프로디테 비용 원장 (누적)

| 일시 | 런 | 채널 | 수량 | 사용량 | 비용(USD) | 근거 |
|---|---|---|---:|---|---:|---|
| 2026-09-03 17:13 | ninefold v1 | OpenAI Batch · gpt-image-2 · high | 33장 | out 194,961 tok · in 6,772 tok | **2.92** | `ninefold/batch-v1/ledger.json` (출력 토큰 × $15/1M 배치 단가; 입력 토큰 단가 미확정으로 원시값 기록) |
| 2026-09-03 19:05 | higgsgen v1 p1 | OpenAI Batch · gpt-image-2 · high | 50장 | out 281,474 tok · in 13,031 tok | **4.22** | `higgsgen/batch-p1/ledger.json` (50/50 성공, 실측 확정) |
| 2026-09-04 | higgsgen v1 p2 | OpenAI Batch · gpt-image-2 edits(참조) · high | 11장 | out 60,368 tok | **0.91** | `higgsgen/batch-p2/ledger.json` (11/11 성공, 실측 확정) |

**누적: $8.05 확정** (Ninefold 2.92 + Higgsgen p1 4.22 + p2 0.91) · grok build 별도(잔액 소진) · Claude 토큰 미포함

규칙: 런마다 `batch-*/ledger.json` 을 그대로 인용한다. 추정치는 "≈" 를 붙이고, 대시보드 청구액과 대조한 값은 "확정"으로 바꾼다.

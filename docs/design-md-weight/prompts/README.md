# 웨이브 프롬프트 — 세 층에 붙이는 추가 조건

`test-v2/tools/migrate-reference.mjs --print-prompt worker|auditor`가 내는 기본 프롬프트에
**이어 붙이는** 조건절이다. 기본 프롬프트만으로는 부족하다는 것이 웨이브 27~34에서
반복 확인됐고, 여기 있는 각 조항은 **실제 FAIL 한 건에서 태어났다**.

| 파일 | 붙이는 곳 | 무엇을 막나 |
|---|---|---|
| `worker-addendum.md` | 이관 워커 프롬프트 뒤 | **예방** — A계열 §11 보존, 과잉 방어 부정문, Scope/Avoid 도메인 발명, 페르소나 삭제 3종, §11 문단 결론, `Primitive type` 출처 |
| `f3-conditions.md` | 감사(auditor) 프롬프트 뒤 | **검출** — 계수 규칙, E1/E2 목적지, B1 인접, A5a, D2a, E2d, B2a 예문 전제, A1 키 경로 대조 |
| `review-header.md` | 의미 검토 프롬프트 머리 | **값 계열** — A1 손실, 고유 사실, § 제약 미착지, 표면 귀속, 정책 불일치, F2 낡음 + 웨이브 27이 낸 3형 |

## 쓰는 법

```bash
B=<brand>
node test-v2/tools/migrate-reference.mjs --brand $B --print-prompt worker  > /tmp/w-$B.txt
cat docs/design-md-weight/prompts/worker-addendum.md                      >> /tmp/w-$B.txt

node test-v2/tools/migrate-reference.mjs --brand $B --print-prompt auditor > /tmp/f3-$B.txt
cat docs/design-md-weight/prompts/f3-conditions.md                        >> /tmp/f3-$B.txt
printf '\n대상: %s\nsibling(dotfile, 경로 직접): web/references/%s/.verification.md\n' $B $B >> /tmp/f3-$B.txt

# 검토는 헤더가 먼저, 대상 경로가 뒤
{ cat docs/design-md-weight/prompts/review-header.md
  printf '\n대상: %s\n산출물: docs/design-md-weight/migrated/%s/\n원본: web/references/%s/DESIGN.md\n' $B $B $B
} > /tmp/rv-$B.txt
```

세 층 모두 `cursor-agent -p [-f] --model cursor-grok-4.6-high-fast "$(cat …)"`로 돌린다.
**검토는 `-f` 없이** 돌린다 — 판정만 하고 고치지 않는 층이다.

## 왜 층을 나누나

한 층이 자기 산출물을 스스로 검사하지 못한다(웨이브 4 「같은 저자 맹점」). 웨이브 33이 그
증거를 하나 더 냈다 — 키 경로 대조는 **워커 지시에 이미 있었는데도** 뚫렸고, 다른 세션인
검토자가 잡았다. 그래서 그 검사를 F3로 옮겼다. 지시를 강하게 쓰는 것으로는 해결되지 않는
계열이 있고, 그때는 **검출 책임을 다음 층으로 옮기는 것**이 답이다.

## 갱신 규칙

새 결함형이 확정되면(판정문 `docs/reviews/t2-1-wave*.md`에 근거 실측과 함께 기록한 뒤)
해당 층 파일에 추가한다. 조항에는 **어느 웨이브 어느 브랜드에서 났는지와 실측**을 같이 적는다
— 근거 없는 조항은 다음 사람이 왜 있는지 몰라 지운다.

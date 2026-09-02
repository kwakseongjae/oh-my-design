{{brand}} 게이트 차단 정정. `migrate-reference.mjs --gate-only`가 아래 문제로 산출을 차단했다.
문제가 가리키는 자리만 고쳐라 — 규칙집(docs/design-md-weight/MIGRATION_RULEBOOK.md)의 해당 조항을
먼저 읽고, 조항이 요구하는 형태로 되돌린다.

대상: docs/design-md-weight/migrated/{{brand}}/{DESIGN.md,provenance.md,migration-log.md}
원본: web/references/{{brand}}/DESIGN.md · sibling: web/references/{{brand}}/.verification.md

## 게이트 출력 (problems)

```json
{{report}}
```

## 자주 나는 차단과 처방

- `alien-negative-claim`(D1): 원본이 세우지 않은 도메인을 닫는 부정문("… is not claimed", "no locale profile" 류)을
  신설한 것이다. 문장을 **삭제**한다 — 미해상은 안 적는 것이지 닫는 문장을 쓰는 것이 아니다. 삭제한
  문자열의 migration-log dest를 재실측해 갱신한다.
- `copy-loss`(A5): 원본 발행 카피가 산출 어디에도 없다. 원본이 그 카피를 세운 절에 대응하는 자리에
  **원문 그대로** 복원한다(의역 금지).
- `derived-claim`(B2a): 편집적 해석 문장에 완전형 한정(`derived editorial … inference; not {{brand}}-authored
  or a separately published UI specification`)이 없다. 한정을 붙이고 provenance 원장에 1행 추가(1:1).
- 그 밖의 check는 problems의 detail 문구를 그대로 따른다. 판단이 안 서면 고치지 말고 audit-log에
  `## 게이트 정정 보류` 절로 사유를 적어라.

## 검증 (전부 실행·보고)

- `node test-v2/tools/migrate-reference.mjs --brand {{brand}} --gate-only` → PASS
- `node scripts/check-limiter-ledger.mjs {{brand}}` → 1:1 OK
- `node scripts/check-yaml-use-landing.mjs {{brand}}` → 미착지 0
- 건드린 문자열의 migration-log dest 재실측 갱신

## 금지

토큰 값·컴포넌트 표 구조·상태 applicability·원본·CURRENT_STATE 수정 금지. `grep -c` 금지.
게이트를 통과시키려고 원본에 없는 문장을 만들지 마라.

끝나면 audit-log.md 맨 아래에 정정 내역을 덧붙이고, 마지막 줄에 `FIX_DONE {{brand}} gate` 를 출력해라.

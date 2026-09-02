{{brand}} 기계검사 불일치 정정. 아래 검사 출력이 가리키는 원장·착지·구조만 고쳐라.
DESIGN.md 본문은 건드리지 마라 — 예외는 본문에 한정이 실제로 빠진 자리가 원인일 때뿐이다.

대상: docs/design-md-weight/migrated/{{brand}}/{DESIGN.md,provenance.md,migration-log.md,audit-log.md}
원본: web/references/{{brand}}/DESIGN.md · sibling: web/references/{{brand}}/.verification.md

## 검사 출력

```
{{report}}
```

## 규격

- provenance 원장 절 제목은 정확히 `## Derived editorial inventory`, 본문은 표 — 헤더
  `| Location in DESIGN.md | Qualified reading |`, 완전형 한정 1건당 데이터행 1행.
  행 수 == 본문 완전형 한정 수(1:1). 과잉 행은 대응 본문을 실측해 병합·삭제하고, 본문에
  한정이 빠진 자리가 원인이면 그 자리에 한정을 붙여라. 판정 근거를 행마다 audit-log에.
- 원본 YAML `use:` 문자열은 산출 어딘가에 **문자 그대로** 착지해야 한다(긴 쪽이 완전형).
- Core v2 적합성(`portable_core`)이 깨졌으면 7앵커 구조·governance claim 문안을 원상으로.
  claim 본문은 정본 문안과 바이트 동일해야 한다 — 문장을 고쳐 쓰지 말고 되돌려라.

## 검증 (전부 실행·보고)

- `node scripts/check-limiter-ledger.mjs {{brand}}` → 1:1 OK
- `node scripts/check-yaml-use-landing.mjs --list {{brand}}` → 미착지 0
- `node test-v2/tools/migrate-reference.mjs --brand {{brand}} --gate-only` → PASS
- 건드린 문자열의 migration-log dest 재실측 갱신

## 금지

토큰 값·컴포넌트 표·상태 applicability·원본·CURRENT_STATE 수정 금지. `grep -c` 금지.

끝나면 audit-log.md 맨 아래에 정정 내역을 덧붙이고, 마지막 줄에 `FIX_DONE {{brand}} mech` 를 출력해라.

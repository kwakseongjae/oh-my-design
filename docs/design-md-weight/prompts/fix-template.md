{{brand}} 산출물 개정. 아래 독립 검토(grok-4.6) 판정문이 지목한 결함만 고쳐라.

대상: docs/design-md-weight/migrated/{{brand}}/{DESIGN.md,provenance.md,migration-log.md}
원본: web/references/{{brand}}/DESIGN.md · sibling: web/references/{{brand}}/.verification.md

## 판정문 전문

{{verdict}}

---

## 개정 원칙

- 검토가 **소실**로 지목한 것은 원본이 그 사실을 세운 절에 복원해라.
- **발명·승격**(sibling 전용, 원본 0)은 본문에서 빼고 provenance에만 두어라.
- **융합·치환**(원본에도 sibling에도 그 문자열로 없는 결합)은 원본 표기로 되돌려라.
  원본 내부 충돌이면 한쪽으로 고쳐 쓰지 말고 **병기**해라.
- 판정문의 「검사했으나 계수에 넣지 않은 것」은 지시가 아니다 — 지목된 결함만 고친다.

## 회귀 금지 (웨이브 45 1라운드에서 실제로 발생했다 — 반드시 지켜라)

본문에 문자열을 더하거나 지우면 **그 문자열의 출현수가 바뀐다.** `migration-log`의
A5a·F2 dest 표가 옛 수를 그대로 들고 있으면 그 순간 E2 위반이 된다.

lablup이 정확히 이렇게 깨졌다 — YAML `use`를 본문에 병기해 dest가 1→2가 됐는데
로그는 1로 남아 개정 검토가 E2로 잡았다.

그러니 **네가 건드린 모든 문자열에 대해**:
1. 고친 뒤 파일별 출현수를 `grep -oF -e '<패턴>' <파일> | wc -l`로 다시 세라.
2. `migration-log`의 해당 dest 행을 새 수로 갱신해라.
3. 갱신한 행 목록을 보고에 적어라.

## 검증 (고친 뒤 반드시 실행하고 결과를 보고해라)

- `node scripts/check-limiter-ledger.mjs {{brand}}` → 본문 == 원장
- `node scripts/check-yaml-use-landing.mjs {{brand}}` → 미착지 0
- `node test-v2/tools/migrate-reference.mjs --brand {{brand}} --gate-only` → PASS

## 금지

토큰 **값**·컴포넌트 표 구조·상태 applicability·원본은 건드리지 마라.
계수는 `grep -c` 금지. `--`로 시작하는 토큰은 `grep -o -e '<패턴>'`로 세라.

끝나면 audit-log.md 맨 아래에 개정 내역을 덧붙이고, 마지막 줄에
`FIX_DONE {{brand}} fixed=<n> logdest=<n>`을 출력해라.

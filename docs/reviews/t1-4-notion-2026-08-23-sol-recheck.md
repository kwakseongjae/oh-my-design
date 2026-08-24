# T1-4 Notion 개정본 재확인 — sol 집중 재심

- 대상: `docs/design-md-weight/migrated/notion/`
- 선행 판정: `docs/reviews/t1-4-notion-2026-08-23-sol-spotcheck.md` 재제출 최소 조건 4항
- 일시: 2026-08-23
- 범위: 선행 FAIL의 재제출 최소 조건 네 항목만 재확인했다. 새 판정 기준은 추가하지 않았다.
- 전제: 강화된 기계 게이트의 PASS는 그대로 받았다.

## 1. generic focus와 `focus-visible` 분리 — PASS

**PASS.**

- 공통 규칙은 generic `Focus` / `::state-focus`가 `focus-visible` treatment 증거가 아니며, `focus-visible`의 applicability만 유지하고 시각 treatment는 미해상으로 둔다고 명시한다(`DESIGN.md` 161행).
- Hero CTA는 `focus-visible` treatment를 생략하고 `#0071d6` generic focus를 별도 observed state로 보존했다(211, 218행).
- Hero secondary action도 `focus-visible` treatment를 생략하고 `#e7f3fe` / `#005bab` generic focus를 별도 observed state로 보존했다(239, 245행).
- Language-picker search도 `focus-visible` treatment를 생략하고 Help blue double-ring 및 focused computed text를 generic focus observed state로 분리했다(352, 358행).
- provenance와 개정 로그도 같은 disposition을 기록한다(`provenance.md` 121행; `migration-log.md` 45행).

## 2. Help search 고유값과 필드 결합 복원 — PASS

**PASS.**

- portable Components의 Language-picker search에 `Background: transparent`와 YAML `help-search.fg`의 renderable foreground `#000000`을 복원했다(`DESIGN.md` 334–346행).
- `#000000` field token과 focused computed `rgba(0,0,0,0.95)`를 서로 다른 source role로 구분했다(`DESIGN.md` 346행; `provenance.md` 100행).
- migration log는 §9 tool wrapper만 삭제하고 transparent 고유값을 Components로 옮겼다고 실제 disposition에 맞게 고쳤으며, `help-search.fg` 결합 복원도 기록한다(`migration-log.md` 15, 30, 46–47행).

## 3. 네 control의 loading/error/success 역할별 재판정 — PASS

**PASS — 12/12.**

- Bento feature tab은 선택 역할을 근거로 세 상태를 `not-applicable`로 판정했다(`DESIGN.md` 278–280행).
- Circular carousel action은 현재 슬라이드를 이동하는 arrow 역할을 근거로 세 상태를 `not-applicable`로 판정했다(303–305행).
- Language picker trigger는 dialog opener 역할을 근거로 세 상태를 `not-applicable`로 판정했다(328–330행).
- Help toggle은 expand/collapse 역할을 근거로 세 상태를 `not-applicable`로 판정했다(378–380행).
- 공통 원칙도 primitive kind가 아닌 product role로 loading/error/success를 판정한다고 고쳤다(161행). provenance와 개정 로그가 같은 disposition을 기록한다(`provenance.md` 120행; `migration-log.md` 36, 48행).

## 4. `storefront` 및 원본 밖 부정 claim 제거 — PASS

**PASS.**

- portable `DESIGN.md`의 Content & Locales에는 source-bound voice 원칙과 공식 예문만 남고 기존 storefront error/empty/support-copy coverage 문장이 제거됐다(394–404행).
- Named gaps에도 storefront/support-copy coverage 항목이 없다(436–449행). 남은 empty/loading/error/success 시각 treatment 항목은 선행 판정에서 이미 통과 확인한 원본 §14 보존 내용이다(148, 441행).
- `storefront` / `support-copy`의 유일한 잔존은 해당 claim을 제거했다는 `migration-log.md` 49행의 개정 이력이며, portable Notion coverage claim이 아니다.

**전체 판정: PASS — 원 SOL FAIL 재제출 최소 조건 4/4가 개정본에 반영됐다.**

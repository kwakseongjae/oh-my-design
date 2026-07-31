import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const repoRoot = resolve(import.meta.dirname, "../../..");
const skill = readFileSync(resolve(repoRoot, "skills/omd-apply/SKILL.md"), "utf8");

describe("omd:apply delivery contract", () => {
  it("keeps implementation ownership with the main agent", () => {
    expect(skill).toContain("본 에이전트가 실제 편집과 검증을 끝까지 소유");
    expect(skill).toContain("audit/advice 요청만 자문 결과 요약으로 종료할 수 있다");
    expect(skill).toContain("자문 완료를 구현 완료로 간주하지 않음");
  });

  it("defines recovery for unavailable and stale specialist roles", () => {
    expect(skill).toContain("런타임 역할 사용 가능");
    expect(skill).toContain("유효한 로컬 역할 파일 존재");
    expect(skill).toContain("역할과 유효한 역할 파일 모두 없음");
    expect(skill).toContain("역할을 실행했다고 표현하지 않음");
  });

  it("does not preserve the former dispatch-only dead end", () => {
    expect(skill).not.toContain("그 후 인라인 처리는 하지 않고");
    expect(skill).not.toContain("복합 작업을 인라인으로 처리 금지");
  });

  it("uses one shared work packet and exact consumer-route verification", () => {
    expect(skill).toContain("Work packet");
    expect(skill).toContain("consumer_route");
    expect(skill).toContain("implementation_owner");
    expect(skill).toContain("같은 consumer route");
  });

  it("bounds verification and preserves a final delivery reserve", () => {
    expect(skill).toContain("Bounded verification + guaranteed delivery");
    expect(skill).toContain("첫 제품 편집을 총 예산의 50% 전");
    expect(skill).toContain("verification mechanism은 종류별로 한 번만 시도");
    expect(skill).toContain("replacement verifier");
    expect(skill).toContain("Acceptance packet은 실행 파일이 아니라 체크리스트와 관찰 결과");
    expect(skill).toContain("새 프로그램이 실제 Chrome을 실행하더라도 replacement verifier");
    expect(skill).toContain("임시 shell 파일, CDP/browser automation, 새 test runner");
    expect(skill).toContain("80%에서 선택 검증을 끝내고 90% 전에는 최종 응답을 시작");
    expect(skill).toContain("implemented / verified / unresolved");
    expect(skill).toContain("final response를 잃는 것은 실패");
  });

  it("locks observable behavior before visual expansion", () => {
    expect(skill).toContain("Contract-first edit + acceptance packet");
    expect(skill).toContain("current_count");
    expect(skill).toContain("allowed_delta");
    expect(skill).toContain("장식을 위해 제품 hook을 복제하지 않는다");
    expect(skill).toContain("일반 텍스트 contrast 4.5:1");
    expect(skill).toContain("semantic_color_ledger");
    expect(skill).toContain("measured proof가 없는 accent-on-surface pair는 의미 있는 normal text에 쓰지 않는다");
    expect(skill).toContain("foreground closure");
    expect(skill).toContain("추가·변경한 모든 `color`/foreground 선언");
    expect(skill).toContain("의미 역할을 선언한 것 자체는 contrast proof가 아니다");
    expect(skill).toContain("unresolved normal-text accent pair");
    expect(skill).toContain("geometry-token closure");
    expect(skill).toContain("추가·변경한 모든 `border-radius` 선언");
    expect(skill).toContain("모양이 비슷하다는 이유로 역할을 추측하지 않는다");
    expect(skill).toContain("source-token|computed-value|unresolved");
    expect(skill).toContain("exact token 값과 일치");
    expect(skill).toContain("pre-edit geometry를 복원");
    expect(skill).toContain("mismatched_declared_radius: 0");
    expect(skill).toContain("invented_radius_value: 0");
    expect(skill).toContain("unresolved_changed_radius: 0");
    expect(skill).toContain("interactive closure");
    expect(skill).toContain("이번 product diff에서 추가·변경한 모든 focusable element");
    expect(skill).toContain("접근성 개선 의도");
    expect(skill).toContain("source-level `:focus`/`:focus-visible` reveal path");
    expect(skill).toContain("base `.sr-only`/visually-hidden 규칙만 있고 focus reveal이 없으면 영구 clipping");
    expect(skill).toContain("browser proof가 불가능한 새 hidden focusable은 `unresolved`로 출고하지 않고");
    expect(skill).toContain("unauthorized_focusable_delta: 0");
    expect(skill).toContain("permanently_clipped_focusable: 0");
    expect(skill).toContain("unresolved_focus_reveal: 0");
    expect(skill).toContain("새 hex를 만들지 않는다");
    expect(skill).toContain("text-role token + 인접 non-text accent");
    expect(skill).toContain("unresolved인 pair 자체는 남기지 않는다");
    expect(skill).toContain("320px, 200% zoom/reflow");
    expect(skill).toContain("큰 음수 좌표");
    expect(skill).toContain("change_authority: original-user-task-only");
    expect(skill).toContain("bounded-repair-advisory");
    expect(skill).toContain("finding 최대 3개, 약 300단어");
    expect(skill).toContain("first_safe_edit");
    expect(skill).toContain("min(90초, 총 예산의 10%)");
    expect(skill).toContain("첫 transaction은 targeted `Edit`");
    expect(skill).toContain("공백·주석·timestamp·동일값 치환 같은 no-op");
    expect(skill).toContain("rejected_contract_drift");
    expect(skill).toContain("reflow-integrity closure");
    expect(skill).toContain("full-width reading row 또는 충분한 `minmax` 영역");
    expect(skill).toContain("한 줄 보존은 acceptance 결과이지 첫 CSS 수단이 아니다");
    expect(skill).toContain("`white-space: nowrap`이 horizontal overflow·clipping·box collision을 만들면 사용하지 않으며");
    expect(skill).toContain("atomic identifier에는 `<wbr>`, `<br>`, U+200B zero-width space");
    expect(skill).toContain("`&shy;`/soft hyphen, CSS·JS generated break separator를 삽입하지 않는다");
    expect(skill).toContain("desktop의 `:nth-child` column width, `grid-area`, `flex-basis`");
    expect(skill).toContain("selector specificity 때문에 남지 않도록 같거나 더 높은 specificity로 해제");
    expect(skill).toContain("break tag의 정적 존재를 성공 조건으로 주장하지 않는다");
    expect(skill).toContain("선택 target, source filename, artifact ID까지 포함한다");
    expect(skill).toContain("label-above-value 또는 full-width reading cell로 바꾸는 것을 내부 horizontal scroller보다 먼저 시도");
    expect(skill).toContain("label에 full-width row를 먼저 주고 control을 다음 row 또는 별도 정렬 영역에 둔다");
    expect(skill).toContain("단일 text node 자체에 `overflow-x:auto|scroll`을 두는 것은 text repair가 아니다");
    expect(skill).toContain("실제 comparison container에만 허용한다");
    expect(skill).toContain("region 자체를 `tabindex=\"0\"`으로 keyboard-reachable");
    expect(skill).toContain("CSS generated mobile label은 `auto`/`max-content` track 또는 자신의 full-width row");
    expect(skill).toContain("fixed label track은 모든 reflow viewport에서 measured required width 이상일 때만 허용");
    expect(skill).toContain("decision boundary로 선언된 target·evidence·state·action");
    expect(skill).toContain("mid_token_fragmentation: 0");
    expect(skill).toContain("target_emphasis_loss: 0");
    expect(skill).toContain("injected_break_opportunity: 0");
    expect(skill).toContain("residual_mobile_column_width: 0");
    expect(skill).toContain("atomic_context_wrap: 0");
    expect(skill).toContain("unfocusable_scroll_region: 0");
    expect(skill).toContain("compact_control_label_wrap: 0");
    expect(skill).toContain("single_text_scroller: 0");
  });

  it("preserves task-helpful visual equity under explicit change authority", () => {
    expect(skill).toContain("visual equity ledger");
    expect(skill).toContain("최대 5개");
    expect(skill).toContain(
      "`identity`, `user_value`, `before_evidence`, `decision(preserve|reinforce|replace)`, `change_authority`",
    );
    expect(skill).toContain(
      "`original user task`, `explicit DESIGN.md rule`, `same consumer route measured defect`",
    );
    expect(skill).toContain("`visual_equity: []`와 `visual-equity closure: N/A`");
    expect(skill).toContain("`visual_equity: []`이면 desktop/mobile 대조 없이");
    expect(skill).toContain("충돌하면 더 엄격한 계약이 이긴다");
    expect(skill).toContain("visual-equity closure");
    expect(skill).toContain("unsupported_hierarchy_loss: 0");
    expect(skill).toContain("unsupported_state_signal_weakening: 0");
    expect(skill).toContain("unsupported_reassurance_removal: 0");
    expect(skill).toContain("unsupported_decision_boundary_collapse: 0");

    // The new closure must remain additive to the previously accepted safety
    // and delivery contracts.
    expect(skill).toContain("foreground closure");
    expect(skill).toContain("geometry-token closure");
    expect(skill).toContain("interactive closure");
    expect(skill).toContain("protected ledger");
    expect(skill).toContain("확인되지 않은 정보 — fallback으로 채우지 않음");
    expect(skill).toContain("replacement verifier");
    expect(skill).toContain("delivery_reserve: true");
  });
});

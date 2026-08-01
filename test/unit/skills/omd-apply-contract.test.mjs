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
    expect(skill).toContain("80%에서 선택 검증을 끝내고 90% 전에는 최종 응답을 시작");
    expect(skill).toContain("implemented / verified / unresolved");
    expect(skill).toContain("final response를 잃는 것은 실패");
  });

  it("locks observable behavior before visual expansion", () => {
    expect(skill).toContain("Contract-first edit + acceptance packet");
    expect(skill).toContain("current_count");
    expect(skill).toContain("allowed_delta");
    expect(skill).toContain("장식을 위해 제품 hook을 복제하지 않는다");
    expect(skill).toContain("semantic_color_ledger");
    expect(skill).toContain("foreground closure");
    expect(skill).toContain("geometry-token closure");
    expect(skill).toContain("interactive closure");
    expect(skill).toContain("unauthorized_focusable_delta: 0");
    expect(skill).toContain("permanently_clipped_focusable: 0");
    expect(skill).toContain("unresolved_focus_reveal: 0");
    expect(skill).toContain("새 hex를 만들지 않는다");
    expect(skill).toContain("text-role token + 인접 non-text accent");
    expect(skill).toContain("change_authority: original-user-task-only");
    expect(skill).toContain("bounded-repair-advisory");
    expect(skill).toContain("first_safe_edit");
    expect(skill).toContain("rejected_contract_drift");
    expect(skill).toContain("`initial_visibility`, `own_geometry`");
    expect(skill).toContain("protected_selector_visibility_loss: 0");
  });

  it("runs reflow through one compact, measurable work packet", () => {
    expect(skill).toContain("reflow-integrity closure");
    expect(skill).toContain("reflow_work_packet:");
    expect(skill).toContain("source: { selector: \"...\", origin: static|dynamic, longest_value: \"...\" }");
    expect(skill).toContain("contract: { role: target|identifier|evidence|state|control-label");
    expect(skill).toContain("decision: full-row|stack|comparison-scroll|keep|unresolved");
    expect(skill).toContain("1. **INVENTORY.**");
    expect(skill).toContain("render function/template/state map의 가장 긴 실제 값");
    expect(skill).toContain("2. **FIT.**");
    expect(skill).toContain("source-only이면 `unresolved`");
    expect(skill).toContain("3. **REFLOW.**");
    expect(skill).toContain("단일 text scroller");
    expect(skill).toContain("`nowrap`은 세 viewport에서 longest value가 실제 측정으로 fit");
    expect(skill).toContain("4. **PROVE.**");
    expect(skill).toContain("one-line 행은 line count 1과 overflow/clipping 0일 때만 `pass`");
    expect(skill).toContain("same_row_count: true");
    expect(skill).toContain("same_decision_boundary: true");
    expect(skill).toContain("no_text_hack: true");
    expect(skill).toContain("unresolved_rows: 0");
    expect(skill).toContain("page_overflow: 0");
    expect(skill).not.toContain("implicit_one_line_selector");
    expect(skill).not.toContain("source_claim_without_selector_decision");
  });

  it("preserves task-helpful visual equity under explicit change authority", () => {
    expect(skill).toContain("visual equity ledger");
    expect(skill).toContain("최대 5개");
    expect(skill).toContain("`original user task`, `explicit DESIGN.md rule`, `same consumer route measured defect`");
    expect(skill).toContain("`visual_equity: []`와 `visual-equity closure: N/A`");
    expect(skill).toContain("visual-equity closure");
    expect(skill).toContain("unsupported_hierarchy_loss: 0");
    expect(skill).toContain("unsupported_state_signal_weakening: 0");
    expect(skill).toContain("unsupported_reassurance_removal: 0");
    expect(skill).toContain("unsupported_decision_boundary_collapse: 0");

    expect(skill).toContain("protected ledger");
    expect(skill).toContain("확인되지 않은 정보 — fallback으로 채우지 않음");
    expect(skill).toContain("replacement verifier");
    expect(skill).toContain("delivery_reserve: true");
  });
});

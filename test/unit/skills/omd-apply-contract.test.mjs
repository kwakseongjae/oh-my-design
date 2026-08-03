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
    expect(skill).toContain("Release-blocker pass — polish보다 먼저 한 번만 닫기");
    expect(skill.indexOf("Release-blocker pass")).toBeLessThan(
      skill.indexOf("Acceptance packet은 실행 파일이 아니라 체크리스트와 관찰 결과"),
    );
    expect(skill).toContain("첫 edit transaction의 완료 조건");
    expect(skill).toContain("pre_edit_release_invariant:");
    expect(skill).toContain("known_failure_ledger:");
    expect(skill).toContain("every supplied baseline failure and every pre-edit measured failing critical gate");
    expect(skill).toContain("known_failure_ledger AND foreground_change AND comparison_carrier_set");
    expect(skill).toContain("measured-but-unchanged");
    expect(skill).toContain("measured_but_unchanged: 0");
    expect(skill).toContain("unresolved_known_failures: 0");
    expect(skill).toContain("foreground_change:");
    expect(skill).toContain("comparison_carrier_set:");
    expect(skill).toContain("every protected or named relationship scope containing registered atomic text");
    expect(skill).toContain("carrier별** 390px·320px·실제 200% 결과");
    expect(skill).toContain("browser_attempt:");
    expect(skill).toContain("browser session 생성은 결과가 아니다");
    expect(skill).toContain("실제 route를 열어야");
    expect(skill).toContain("첫 edit diff에서 DESIGN.md의 검증된 text-role/ink token으로 실제 교체");
    expect(skill).toContain("ratio 기록만 하고 교정을 미루면 transaction 미완료");
    expect(skill).toContain("consolidated static closure 1회");
    expect(skill).toContain("browser mechanism 1회만");
    expect(skill).toContain("current_count");
    expect(skill).toContain("allowed_delta");
    expect(skill).toContain("장식을 위해 제품 hook을 복제하지 않는다");
    expect(skill).toContain("semantic_color_ledger");
    expect(skill).toContain("foreground closure");
    expect(skill).toContain("`muted`, `secondary`, `supporting`도 normal text면 exact pair");
    expect(skill).toContain("반올림 전 값이 4.5 미만이면 실패");
    expect(skill).toContain("failed_or_unresolved_normal_text_pairs: 0");
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
    expect(skill).toContain('schema_version: "0.2"');
    expect(skill).toContain("reflow-artifact.mjs lock");
    expect(skill).toContain("reflow-artifact.mjs finalize");
    expect(skill).toContain("finalize-unresolved");
    expect(skill).toContain("등록 row/carrier 하나라도 unresolved면 resolved finalize를 거부");
    expect(skill).toContain("browser를 시도하지 않았거나 제품 결함을 발견한 상태는 unresolved accounting으로 우회할 수 없다");
    expect(skill).toContain("row_group_ids:");
    expect(skill).toContain("carriers:");
    expect(skill).toContain('id: "stable relationship scope id"');
    expect(skill).toContain('binds_row_groups: ["registered row group id"]');
    expect(skill).toContain("expected_count:");
    expect(skill).toContain("row_groups:");
    expect(skill).toContain("all_registered_carriers_closed: true");
    expect(skill).toContain("closure_manifest:");
    expect(skill).toContain("quality_pass: true");
    expect(skill).toContain("expanded instance counts");
    expect(skill).toContain("같은 selector·역할·longest value를 공유하는 반복 행");
    expect(skill).toContain("helper source나 hash 알고리즘을 읽지 않는다");
    expect(skill).toContain("role: target|identifier|evidence|state|control-label");
    expect(skill).toContain("decision: full-row|stack|comparison-scroll|keep|unresolved");
    expect(skill).toContain("1. **INVENTORY.**");
    expect(skill).toContain("render function/template/state map의 가장 긴 실제 값");
    expect(skill).toContain("2. **FIT.**");
    expect(skill).toContain("source-only이면 `unresolved`");
    expect(skill).toContain("3. **REFLOW.**");
    expect(skill).toContain("가장 좁은 조건에서 group의 longest atomic child");
    expect(skill).toContain("parent row를 `full-row`, 다음으로 `stack`");
    expect(skill).toContain("carrier를 보존한 named `comparison-scroll`을 먼저 쓴다");
    expect(skill).toContain("기존 carrier 자체를 relocate");
    expect(skill).toContain("generated content·`data-*`·aria-label·hook 없는 span 복제");
    expect(skill).toContain("단일 text scroller");
    expect(skill).toContain("count가 `expected_count`와 다르면 그 group은 pass가 아니다");
    expect(skill).toContain("4. **PROVE.**");
    expect(skill).toContain("모든 matched instance");
    expect(skill).toContain("same_row_count: true");
    expect(skill).toContain("same_decision_boundary: true");
    expect(skill).toContain("no_text_hack: true");
    expect(skill).toContain("unresolved_rows: 0");
    expect(skill).toContain("unresolved_carriers: 0");
    expect(skill).toContain("page_overflow: 0");
    expect(skill).toContain("이전 static attempt는 `unresolved`로 원자적으로 닫히며");
    expect(skill).not.toContain("implicit_one_line_selector");
    expect(skill).not.toContain("source_claim_without_selector_decision");
  });

  it("operationalizes proof as a revision-bound close latch", () => {
    expect(skill).toContain("proof execution close latch");
    expect(skill).toContain("proof_execution_latch:");
    expect(skill).toContain("inventory: open|closed");
    expect(skill).toContain("product_edit: pending|changed|stable");
    expect(skill).toContain("known_failure_closure: { state: open|closed, unresolved: 0 }");
    expect(skill).toContain("static_closure: { state: open|closed, revision: null, runs: 0 }");
    expect(skill).toContain("browser_proof: { state: open|closed|unresolved, revision: null, attempts: 0, mechanism: null }");
    expect(skill).toContain("delivery: blocked|ready");
    expect(skill).toContain("verification_after_ready: 0");
    expect(skill).toContain("한 짧은 command cluster의 consolidated static closure");
    expect(skill).toContain("동일 static command를 다시 실행하지 않고 browser proof로 넘어간다");
    expect(skill).toContain("`--doctor`, `--help`, executable/process/port discovery, 직접 Chrome launch");
    expect(skill).toContain("제품 파일이 바뀌지 않았다면 어느 proof state도 reopen하지 않는다");
    expect(skill).toContain("이 뒤 verification shell/browser command는");
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

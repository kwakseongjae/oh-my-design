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
    expect(skill).toContain("320px, 200% zoom/reflow");
    expect(skill).toContain("큰 음수 좌표");
    expect(skill).toContain("change_authority: original-user-task-only");
    expect(skill).toContain("bounded-repair-advisory");
    expect(skill).toContain("finding 최대 5개, 약 600단어");
    expect(skill).toContain("rejected_contract_drift");
  });
});
